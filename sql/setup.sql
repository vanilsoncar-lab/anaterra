-- ============================================================
-- ANA TERRA: CRONICAS DO PAMPA
-- Script de configuracao do banco de dados Supabase
-- Execute este arquivo completo no SQL Editor do Supabase
-- ============================================================

-- ------------------------------------------------------------
-- Extensoes necessarias
-- ------------------------------------------------------------
create extension if not exists pgcrypto;

-- ------------------------------------------------------------
-- Tabela: cartas
-- Conteudo fixo das 15 estacoes da jornada
-- ------------------------------------------------------------
create table cartas (
  numero integer primary key check (numero between 1 and 15),
  palavra_chave text not null,
  pista text not null,
  desafio text not null,
  contexto_narrativo text not null,
  ordem_cronologica integer not null unique check (ordem_cronologica between 1 and 15)
);

-- ------------------------------------------------------------
-- Tabela: duplas
-- Cadastro das duplas de alunos
-- ------------------------------------------------------------
create table duplas (
  id uuid primary key default gen_random_uuid(),
  nome_dupla text not null unique,
  integrantes text not null,
  turma text not null,
  senha_hash text not null,
  carta_numero integer unique references cartas(numero),
  arquetipo text check (arquetipo in (
    'ana_terra',
    'pedro_missioneiro',
    'maneco_terra',
    'henriqueta',
    'horacio',
    'pedro_terra'
  )),
  xp_total integer not null default 0,
  nivel integer not null default 1,
  criado_em timestamptz not null default now()
);

create index idx_duplas_turma on duplas(turma);

-- ------------------------------------------------------------
-- Tabela: respostas
-- Desafios enviados pelas duplas
-- ------------------------------------------------------------
create table respostas (
  id uuid primary key default gen_random_uuid(),
  dupla_id uuid not null references duplas(id) on delete cascade,
  carta_numero integer not null references cartas(numero),
  resposta_objeto text not null,
  justificativa text not null,
  xp_ganho integer not null default 0,
  enviado_em timestamptz not null default now(),
  unique (dupla_id, carta_numero)
);

-- ------------------------------------------------------------
-- Tabela: conquistas
-- Badges desbloqueados pelas duplas
-- ------------------------------------------------------------
create table conquistas (
  id uuid primary key default gen_random_uuid(),
  dupla_id uuid not null references duplas(id) on delete cascade,
  codigo text not null,
  titulo text not null,
  descricao text,
  desbloqueado_em timestamptz not null default now(),
  unique (dupla_id, codigo)
);

-- ------------------------------------------------------------
-- Tabela: professores
-- Acesso ao painel docente (login fixo)
-- ------------------------------------------------------------
create table professores (
  id uuid primary key default gen_random_uuid(),
  nome text not null unique,
  senha_hash text not null
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

alter table cartas enable row level security;
alter table duplas enable row level security;
alter table respostas enable row level security;
alter table conquistas enable row level security;
alter table professores enable row level security;

-- Cartas: leitura publica (conteudo fixo)
create policy "cartas leitura publica"
  on cartas for select using (true);

-- Duplas: leitura publica (necessario para mapa coletivo e ranking)
create policy "duplas leitura publica"
  on duplas for select using (true);

-- Duplas: insercao apenas via funcao cadastrar_dupla (bloqueio direto)
create policy "duplas sem insercao direta"
  on duplas for insert with check (false);

-- Duplas: atualizacao apenas via funcoes RPC (bloqueio direto)
create policy "duplas sem update direto"
  on duplas for update using (false);

-- Respostas: leitura publica
create policy "respostas leitura publica"
  on respostas for select using (true);

-- Respostas: insercao apenas via funcao registrar_resposta
create policy "respostas sem insercao direta"
  on respostas for insert with check (false);

-- Conquistas: leitura publica
create policy "conquistas leitura publica"
  on conquistas for select using (true);

-- Conquistas: insercao apenas via funcao interna
create policy "conquistas sem insercao direta"
  on conquistas for insert with check (false);

-- Professores: nenhuma leitura ou escrita direta
create policy "professores bloqueado"
  on professores for all using (false) with check (false);

-- ============================================================
-- FUNCOES RPC
-- ============================================================

-- ------------------------------------------------------------
-- cadastrar_dupla
-- Cria uma nova dupla com senha criptografada
-- Retorna o id da dupla criada, ou null se nome_dupla ja existir
-- ------------------------------------------------------------
create or replace function cadastrar_dupla(
  p_nome_dupla text,
  p_integrantes text,
  p_turma text,
  p_senha text
)
returns uuid
language plpgsql
security definer
as $$
declare
  v_id uuid;
begin
  insert into duplas (nome_dupla, integrantes, turma, senha_hash)
  values (p_nome_dupla, p_integrantes, p_turma, crypt(p_senha, gen_salt('bf')))
  returning id into v_id;

  return v_id;
exception
  when unique_violation then
    return null;
end;
$$;

grant execute on function cadastrar_dupla(text, text, text, text) to anon;

-- ------------------------------------------------------------
-- autenticar_dupla
-- Verifica nome_dupla + senha
-- Retorna o id da dupla se valido, ou null se invalido
-- ------------------------------------------------------------
create or replace function autenticar_dupla(p_nome_dupla text, p_senha text)
returns uuid
language plpgsql
security definer
as $$
declare
  v_hash text;
  v_id uuid;
begin
  select id, senha_hash into v_id, v_hash
  from duplas
  where nome_dupla = p_nome_dupla;

  if v_hash is null then
    return null;
  end if;

  if v_hash = crypt(p_senha, v_hash) then
    return v_id;
  else
    return null;
  end if;
end;
$$;

grant execute on function autenticar_dupla(text, text) to anon;

-- ------------------------------------------------------------
-- registrar_carta_e_arquetipo
-- Vincula a dupla a uma carta (numero 1-15) e a um arquetipo
-- Valida unicidade da carta antes de gravar
-- Retorna:
--   'ok'           -> sucesso
--   'carta_ocupada' -> carta ja vinculada a outra dupla
--   'ja_registrado' -> esta dupla ja possui carta registrada
--   'invalido'      -> numero de carta ou arquetipo invalido
-- ------------------------------------------------------------
create or replace function registrar_carta_e_arquetipo(
  p_dupla_id uuid,
  p_carta_numero integer,
  p_arquetipo text
)
returns text
language plpgsql
security definer
as $$
declare
  v_carta_existente uuid;
  v_ja_tem_carta integer;
begin
  if p_carta_numero < 1 or p_carta_numero > 15 then
    return 'invalido';
  end if;

  if p_arquetipo not in ('ana_terra','pedro_missioneiro','maneco_terra','henriqueta','horacio','pedro_terra') then
    return 'invalido';
  end if;

  select carta_numero into v_ja_tem_carta
  from duplas where id = p_dupla_id;

  if v_ja_tem_carta is not null then
    return 'ja_registrado';
  end if;

  select id into v_carta_existente
  from duplas
  where carta_numero = p_carta_numero
    and id <> p_dupla_id;

  if v_carta_existente is not null then
    return 'carta_ocupada';
  end if;

  update duplas
  set carta_numero = p_carta_numero,
      arquetipo = p_arquetipo
  where id = p_dupla_id;

  return 'ok';
exception
  when unique_violation then
    return 'carta_ocupada';
end;
$$;

grant execute on function registrar_carta_e_arquetipo(uuid, integer, text) to anon;

-- ------------------------------------------------------------
-- registrar_resposta
-- Grava a resposta do desafio e atualiza XP/nivel da dupla
-- Retorna:
--   'ok'           -> sucesso, xp adicionado
--   'ja_respondido' -> esta carta ja foi respondida por esta dupla
--   'sem_permissao' -> dupla nao esta vinculada a esta carta
-- ------------------------------------------------------------
create or replace function registrar_resposta(
  p_dupla_id uuid,
  p_carta_numero integer,
  p_resposta_objeto text,
  p_justificativa text
)
returns text
language plpgsql
security definer
as $$
declare
  v_carta_dupla integer;
  v_xp_ganho integer := 50;
  v_novo_xp integer;
  v_novo_nivel integer;
  v_ja_existe integer;
begin
  select carta_numero into v_carta_dupla
  from duplas where id = p_dupla_id;

  if v_carta_dupla is null or v_carta_dupla <> p_carta_numero then
    return 'sem_permissao';
  end if;

  select count(*) into v_ja_existe
  from respostas
  where dupla_id = p_dupla_id and carta_numero = p_carta_numero;

  if v_ja_existe > 0 then
    return 'ja_respondido';
  end if;

  insert into respostas (dupla_id, carta_numero, resposta_objeto, justificativa, xp_ganho)
  values (p_dupla_id, p_carta_numero, p_resposta_objeto, p_justificativa, v_xp_ganho);

  select xp_total + v_xp_ganho into v_novo_xp
  from duplas where id = p_dupla_id;

  v_novo_nivel := floor(v_novo_xp / 100) + 1;

  update duplas
  set xp_total = v_novo_xp,
      nivel = v_novo_nivel
  where id = p_dupla_id;

  insert into conquistas (dupla_id, codigo, titulo, descricao)
  values (p_dupla_id, 'primeira_estacao', 'Primeira estacao concluida', 'Voce completou sua primeira missao na jornada de Ana Terra.')
  on conflict (dupla_id, codigo) do nothing;

  return 'ok';
end;
$$;

grant execute on function registrar_resposta(uuid, integer, text, text) to anon;

-- ------------------------------------------------------------
-- autenticar_professor
-- Verifica nome + senha do professor
-- ------------------------------------------------------------
create or replace function autenticar_professor(p_nome text, p_senha text)
returns boolean
language plpgsql
security definer
as $$
declare
  v_hash text;
begin
  select senha_hash into v_hash
  from professores
  where nome = p_nome;

  if v_hash is null then
    return false;
  end if;

  return v_hash = crypt(p_senha, v_hash);
end;
$$;

grant execute on function autenticar_professor(text, text) to anon;

-- ------------------------------------------------------------
-- desvincular_carta (uso do professor, via painel)
-- Remove o vinculo de carta/arquetipo de uma dupla, em caso de erro
-- ------------------------------------------------------------
create or replace function desvincular_carta(p_dupla_id uuid)
returns boolean
language plpgsql
security definer
as $$
begin
  update duplas
  set carta_numero = null,
      arquetipo = null
  where id = p_dupla_id;

  delete from respostas where dupla_id = p_dupla_id;

  return true;
end;
$$;

grant execute on function desvincular_carta(uuid) to anon;

-- ============================================================
-- SEED: 15 cartas em ordem cronologica
-- ============================================================

insert into cartas (numero, palavra_chave, pista, desafio, contexto_narrativo, ordem_cronologica) values
(3, 'ORIGEM', 'Represento o lugar onde Ana Terra nasceu e cresceu.', 'Qual objeto eu represento? Justifique sua resposta.', 'Antes de Ana Terra, houve a terra. Vasta, dura, generosa. E dela que tudo nasce: o sangue, o sustento, a primeira lembranca de infancia sob o ceu aberto do pampa. Aqui comeca a historia, no chao onde os pes descalcos de Ana aprenderam a caminhar.', 1),
(1, 'NARRATIVA', 'Sou o inicio de tudo. Guardo personagens, conflitos e memorias.', 'Qual objeto eu represento? Justifique sua resposta.', 'Toda jornada precisa de um lugar para guardar suas memorias. Personagens nascem, conflitos se acumulam, geracoes se sucedem, e tudo isso precisa de um fio condutor, algo que une o passado ao presente e da forma a historia que esta sendo contada.', 2),
(14, 'TRADICAO', 'Represento costumes e habitos que fazem parte da identidade gaucha.', 'Qual objeto eu represento? Justifique sua resposta.', 'Antes mesmo de Ana Terra existir, ja existiam os costumes que a formaram: o modo de viver, de se vestir, de receber visitas, de marcar o tempo. Sao esses habitos, transmitidos de geracao em geracao, que dao identidade a um povo e moldam quem Ana se tornara.', 3),
(7, 'ENCONTRO', 'Minha chegada transforma completamente o rumo da narrativa.', 'Qual objeto eu represento? Justifique sua resposta.', 'Um dia, alguem chega. E nada mais e como antes. Esse encontro muda o rumo de tudo, nao apenas da vida de Ana, mas da propria narrativa. E o ponto sem volta, o momento em que a historia ganha um novo caminho.', 4),
(9, 'AMOR', 'Nasci da uniao de duas pessoas que desafiaram as regras de sua epoca.', 'Qual objeto eu represento? Justifique sua resposta.', 'Entre duas pessoas que a sociedade dizia nao deverem se unir, nasce algo verdadeiro. Esse sentimento desafia regras, costumes e expectativas, e dele surge uma nova vida, fruto de uma escolha proibida pelo seu tempo.', 5),
(15, 'CONFLITO', 'Represento guerras, disputas territoriais e acontecimentos que influenciaram a formacao do Rio Grande do Sul.', 'Qual objeto eu represento? Justifique sua resposta.', 'As terras do pampa nunca foram pacificas. Disputas territoriais, guerras e tensoes marcam a regiao onde Ana Terra vive, acontecimentos que moldaram a historia do Rio Grande do Sul e que atravessam, direta ou indiretamente, a vida da protagonista e de sua familia.', 6),
(8, 'MUDANCA', 'Sou um personagem ligado a cultura indigena e ao amor proibido.', 'Qual objeto eu represento? Justifique sua resposta.', 'Ha quem chegue para transformar tudo. Um personagem ligado a outra cultura, a outras tradicoes, envolvido em um amor que a epoca nao aceitava. Sua presenca muda o curso da narrativa e revela as tensoes entre diferentes mundos que convivem, e colidem, no pampa.', 7),
(10, 'DOR', 'Represento perdas, sofrimento, violencia e relacoes de poder.', 'Qual objeto eu represento? Justifique sua resposta.', 'Depois da transformacao, vem o preco. Perdas, sofrimento, violencia, e relacoes de poder que pesam sobre quem tem menos voz. Ana Terra atravessa momentos de dor profunda, que marcam para sempre sua trajetoria.', 8),
(4, 'SOBREVIVENCIA', 'Sou resultado do trabalho diario e garanto o sustento da familia.', 'Qual objeto eu represento? Justifique sua resposta.', 'Mesmo na dor, a vida continua, e ela exige trabalho. Dia apos dia, o sustento da familia depende do esforco sobre a terra. E essa labuta diaria, simples e essencial, que garante que Ana e os seus continuem de pe.', 9),
(6, 'RESILIENCIA', 'Represento uma mulher forte que enfrentou perdas, violencia e preconceitos sem desistir.', 'Qual objeto eu represento? Justifique sua resposta.', 'Ana Terra e, antes de tudo, uma mulher que nao desiste. Perdas, violencia, preconceitos: nada disso a quebra por completo. Ela segue, carregando o peso do passado, mas seguindo em frente. Essa forca e o centro de quem ela e.', 10),
(11, 'ESPERANCA', 'Mesmo apos tantas tragedias, simbolizo a continuidade da vida.', 'Qual objeto eu represento? Justifique sua resposta.', 'Mesmo depois de tantas tragedias, a vida encontra um jeito de continuar. Um novo comeco se anuncia: pequeno, fragil, mas real. E a prova de que, mesmo em meio a dor, ainda ha motivo para seguir adiante.', 11),
(12, 'RESISTENCIA', 'Ajudo a enfrentar momentos dificeis e manter a esperanca.', 'Qual objeto eu represento? Justifique sua resposta.', 'Nos momentos mais dificeis, e preciso algo a que se apegar. Algo que ajude a manter a fe, a forca e a esperanca, mesmo quando tudo parece perdido. E esse apoio, muitas vezes silencioso, que sustenta Ana Terra em sua travessia.', 12),
(13, 'RECOMECO', 'Abro caminhos para uma nova vida depois das perdas.', 'Qual objeto eu represento? Justifique sua resposta.', 'Depois de tanto perder, e hora de abrir uma porta para o novo. Um caminho diferente se apresenta: a chance de reconstruir a vida, de comecar de novo em outro lugar, com outra perspectiva.', 13),
(5, 'LIBERDADE', 'Levo pessoas, mensagens e sonhos pelos pampas gauchos.', 'Qual objeto eu represento? Justifique sua resposta.', 'Pelo pampa, seguem mensagens, sonhos e pessoas em movimento. Esse ir e vir constante representa a liberdade de seguir caminho, de levar consigo as historias vividas, e de buscar, em outro lugar, aquilo que falta.', 14),
(2, 'DESTINO', 'Acompanho os momentos mais importantes da vida da protagonista.', 'Qual objeto eu represento? Justifique sua resposta.', 'No fim, olhamos para tras e vemos: cada momento importante da vida de Ana Terra estava conectado. Nascimento, amor, dor, recomeco: tudo fazia parte de um caminho maior. Esse e o destino: a soma de toda uma trajetoria, vista de uma so vez.', 15);

-- ============================================================
-- CADASTRO DO PROFESSOR
-- Substitua os valores abaixo antes de executar
-- ============================================================

insert into professores (nome, senha_hash)
values ('SEU_NOME_AQUI', crypt('SUA_SENHA_AQUI', gen_salt('bf')));

-- ============================================================
-- FIM DO SCRIPT
-- ============================================================
