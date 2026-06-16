# Ana Terra: Cronicas do Pampa

Objeto digital de aprendizagem em formato RPG para a obra *Ana Terra*, de Erico Verissimo.
Desenvolvido no contexto do PIBID, para turmas do 9 ano de Lingua Portuguesa.

## Sumario

1. Criar o projeto no Supabase
2. Configurar o banco de dados
3. Cadastrar o professor
4. Conectar o site ao Supabase
5. Publicar no GitHub Pages
6. Como usar em sala

---

## 1. Criar o projeto no Supabase

1. Acesse https://supabase.com e crie uma conta gratuita (pode usar o login do Google).
2. Clique em **New Project**.
3. Escolha um nome (ex: `ana-terra-rpg`), defina uma senha forte para o banco e selecione a regiao mais proxima (ex: South America, Sao Paulo).
4. Aguarde a criacao do projeto (pode levar 1 ou 2 minutos).

---

## 2. Configurar o banco de dados

1. No menu lateral do projeto Supabase, clique em **SQL Editor**.
2. Clique em **New query**.
3. Abra o arquivo `sql/setup.sql` deste projeto (no computador ou no GitHub).
4. Copie todo o conteudo e cole no SQL Editor do Supabase.
5. **ANTES de executar**, va ate a ultima secao do script (chamada "CADASTRO DO PROFESSOR") e substitua:
   - `SEU_NOME_AQUI` pelo seu nome de login (ex: `Vanilson`)
   - `SUA_SENHA_AQUI` pela senha que voce vai usar para entrar no painel
6. Clique em **Run** (ou pressione Ctrl+Enter).
7. Se aparecer a mensagem `Success. No rows returned`, a configuracao foi concluida com sucesso.

---

## 3. Obter a URL e a chave do projeto

1. No menu lateral, clique em **Project Settings** (icone de engrenagem).
2. Clique em **API**.
3. Copie os dois valores:
   - **Project URL**: algo como `https://xyzabcdef.supabase.co`
   - **anon public**: uma chave longa com letras e numeros

---

## 4. Conectar o site ao Supabase

1. Abra o arquivo `assets/supabase-config.js` em qualquer editor de texto.
2. Substitua os valores:

```js
const SUPABASE_URL = "https://xyzabcdef.supabase.co";
const SUPABASE_ANON_KEY = "sua-chave-anon-aqui";
```

3. Salve o arquivo.

---

## 5. Publicar no GitHub Pages

1. Acesse https://github.com e crie uma conta (se ainda nao tiver).
2. Crie um novo repositorio publico com o nome `ana-terra-rpg`.
3. Faca o upload de todos os arquivos deste projeto para o repositorio
   (voce pode arrastar a pasta inteira para a interface do GitHub, ou usar o GitHub Desktop).
4. No repositorio, clique em **Settings** > **Pages**.
5. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
6. Clique em **Save**.
7. Apos alguns minutos, o site estara disponivel em:
   `https://seu-usuario.github.io/ana-terra-rpg`

Compartilhe este link com os alunos. Ele funciona em notebook, chromebook e celular.

---

## 6. Como usar em sala

### Antes da aula

- Acesse `https://seu-usuario.github.io/ana-terra-rpg/professor.html`
- Faca login com o nome e senha definidos no passo 2.
- O painel mostrara o status de cada dupla e carta em tempo real.

### Durante a aula

1. Distribua fisicamente as 15 cartas impressas entre as duplas (sorteio ou distribuicao direta).
2. Peca que as duplas acessem o site e cliquem em **Primeira vez (cadastrar dupla)**.
3. Cada dupla preenche nome da dupla, integrantes, turma e cria uma senha.
4. Em seguida, informa o **numero da carta** sorteada (de 1 a 15) e escolhe o **arquetipo**.
5. O sistema valida automaticamente se o numero da carta ja foi reivindicado por outra dupla.
6. As duplas acessam o mapa da jornada e clicam na sua estacao para ver a missao.
7. Apos a reflexao, enviam a resposta pelo formulario digital.
8. O painel do professor atualiza em tempo real.

### Em caso de erro de carta

Se uma dupla registrou o numero errado, acesse o painel do professor, va ate a aba **Duplas** e clique em **Desvincular carta** na linha da dupla. A dupla podera registrar o numero correto ao entrar novamente.

---

## Estrutura de arquivos

```
/ana-terra-rpg
├── index.html              Login e cadastro de duplas
├── jornada.html            Mapa, ficha de personagem, missao
├── professor.html          Painel docente
├── /assets
│   ├── style.css           Folha de estilo (tema sepia/pampa)
│   ├── icons.js            6 medalhoes SVG dos arquetipos
│   ├── cartas-data.js      Dados das 15 cartas
│   └── supabase-config.js  URL e chave do Supabase (voce preenche)
├── /sql
│   └── setup.sql           Script de configuracao do banco
└── README.md               Este arquivo
```

---

## Contato e autoria

Projeto desenvolvido no contexto do PIBID Letras, UNIJUI.
Escola Municipal Fundamental Estado do Amazonas, 9 ano de Lingua Portuguesa.
