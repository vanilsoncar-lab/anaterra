/* ============================================================
   ANA TERRA: CRONICAS DO PAMPA
   Dados das 15 cartas - COM FRAGMENTOS REAIS DO LIVRO
   Versão 5.0 - Com citações exatas e páginas
   ============================================================ */

const CARTAS = [
  {
    ordem: 1, numero: 1, palavraChave: "NARRATIVA",
    pista: "Toda jornada começa comigo. Guardo personagens, conflitos, sonhos e memórias que atravessam gerações.",
    desafio: "Identifique o objeto que representa o início desta aventura e explique sua importância para a história.",
    narrativa: "Antes de qualquer palavra ser escrita, antes mesmo de Ana Terra existir como personagem, já havia a narrativa. É ela quem guarda os conflitos, os sonhos, as memórias que atravessam gerações.",
    alternativas: ["Um livro", "Um mapa", "Uma carta", "Um diário"],
    alternativaCorreta: "Um livro",
    acontecimento: "Como a narrativa oral e escrita preserva a história da família Terra?",
    fragmento: "📖 FRAGMENTO 1/15 - NARRATIVA (p.6): 'Sempre que me acontece alguma coisa importante, está ventando', costumava dizer Ana Terra."
  },
  {
    ordem: 2, numero: 2, palavraChave: "DESTINO",
    pista: "Estou presente quando a vida muda de direção. Alguns me sentem antes mesmo de perceber o que está por vir.",
    desafio: "Qual objeto simboliza os acontecimentos que transformam a vida da protagonista?",
    narrativa: "Há momentos em que a vida vira de cabeça para baixo. Um encontro, uma perda, uma escolha: tudo pode levar a um caminho novo. O destino não é algo que se escolhe, mas algo que acontece.",
    alternativas: ["Uma bússola", "Um relógio", "Um fio de lã", "Uma estrada"],
    alternativaCorreta: "Um fio de lã",
    acontecimento: "De que forma o destino de Ana Terra se entrelaça com o de Pedro Missioneiro?",
    fragmento: "📖 FRAGMENTO 2/15 - DESTINO (p.6): 'Devia ter sido em 1777: ela se lembrava bem porque esse fora o ano da expulsão dos castelhanos do território do Continente.'"
  },
  {
    ordem: 3, numero: 3, palavraChave: "ORIGEM",
    pista: "Antes das viagens, das perdas e dos recomeços, existia um lugar onde tudo começou.",
    desafio: "Descubra qual objeto representa as raízes da família Terra.",
    narrativa: "Antes de Ana Terra, houve a terra. Vasta, dura, generosa. Foi dela que tudo nasceu: o sangue, o sustento, a primeira lembrança de infância sob o céu aberto do pampa.",
    alternativas: ["Uma árvore", "O chão de terra batida", "Uma semente", "Um rio"],
    alternativaCorreta: "O chão de terra batida",
    acontecimento: "Como a terra (o lugar) influencia a formação da identidade dos personagens?",
    fragmento: "📖 FRAGMENTO 3/15 - ORIGEM (p.7): 'Moravam num rancho de paredes de taquaruçu e barro, coberto de palha e com chão de terra batida.'"
  },
  {
    ordem: 4, numero: 4, palavraChave: "SOBREVIVENCIA",
    pista: "Sou fruto do trabalho diário. Sem mim, a família não teria como enfrentar os desafios da fronteira.",
    desafio: "Identifique o objeto que garante o sustento dos personagens.",
    narrativa: "Mesmo na dor, a vida continua, e ela exige trabalho. Dia após dia, o sustento da família depende do esforço sobre a terra. É essa labuta diária, simples e essencial, que garante que Ana e os seus continuem de pé.",
    alternativas: ["Um arado", "Um moinho", "Uma plantação de trigo", "Um facão"],
    alternativaCorreta: "Uma plantação de trigo",
    acontecimento: "Qual é o papel do trabalho da terra na sobrevivência da família durante os conflitos?",
    fragmento: "📖 FRAGMENTO 4/15 - SOBREVIVÊNCIA (p.8): 'Não havia outro remédio — achava ela — senão trabalhar para esquecer o medo, a tristeza, a aflição... Acordava e pulava da cama, mal raiava o dia.'"
  },
  {
    ordem: 5, numero: 5, palavraChave: "LIBERDADE",
    pista: "Levo pessoas por campos sem fim. Aproximo distâncias e abro caminhos para novas descobertas.",
    desafio: "Qual objeto representa os caminhos dos pampas?",
    narrativa: "Pelo pampa, seguem mensagens, sonhos e pessoas em movimento. Esse ir e vir constante representa a liberdade de seguir caminho, de levar consigo as histórias vividas, e de buscar, em outro lugar, aquilo que falta.",
    alternativas: ["Um cavalo", "Uma carroça", "O vento", "As estrelas"],
    alternativaCorreta: "Um cavalo",
    acontecimento: "Como o cavalo representa a liberdade e a ligação com o território gaúcho?",
    fragmento: "📖 FRAGMENTO 5/15 - LIBERDADE (p.7): 'Casando poderia ao menos ter alguma esperança de sair daquele cafundó, ir morar no Rio Pardo, em Viamão ou até mesmo voltar para a Capitania de São Paulo, onde nascera.'"
  },
  {
    ordem: 6, numero: 6, palavraChave: "RESILIENCIA",
    pista: "Mesmo diante da dor, continuo em frente. Minha força não está na ausência do sofrimento, mas na capacidade de superá-lo.",
    desafio: "Encontre o objeto que representa a protagonista da história.",
    narrativa: "Ana Terra é, antes de tudo, uma mulher que não desiste. Perdas, violência, preconceitos: nada disso a quebra por completo. Ela segue, carregando o peso do passado, mas seguindo em frente.",
    alternativas: ["Uma âncora", "Uma fênix", "Uma oliveira", "Uma pedra"],
    alternativaCorreta: "Uma oliveira",
    acontecimento: "Em quais momentos Ana Terra demonstra resiliência e como isso define sua trajetória?",
    fragmento: "📖 FRAGMENTO 6/15 - RESILIÊNCIA (p.55): 'Tinha dentro de si uma espécie de vazio: sabia que nunca mais teria vontade de rir nem de chorar. Queria viver, isso queria, e em grande parte por causa de Pedrinho.'"
  },
  {
    ordem: 7, numero: 7, palavraChave: "ENCONTRO",
    pista: "Minha chegada altera o rumo dos acontecimentos e inicia uma nova fase da narrativa.",
    desafio: "Qual objeto representa a chegada de alguém que mudará tudo?",
    narrativa: "Um dia, alguém chega. E nada mais é como antes. Esse encontro muda o rumo de tudo, não apenas da vida de Ana, mas da própria narrativa. É o ponto sem volta, o momento em que a história ganha um novo caminho.",
    alternativas: ["Uma carta", "Um cavaleiro ao longe", "Uma flor", "Um terço"],
    alternativaCorreta: "Um cavaleiro ao longe",
    acontecimento: "Como a chegada de Pedro Missioneiro transforma a vida de Ana e sua família?",
    fragmento: "📖 FRAGMENTO 7/15 - ENCONTRO (p.12): 'De súbito ali ao pé do poço Ana Terra teve a impressão de que não estava só.'"
  },
  {
    ordem: 8, numero: 8, palavraChave: "MUDANCA",
    pista: "Venho de um mundo diferente e carrego conhecimentos que transformam vidas.",
    desafio: "Descubra o objeto ligado ao personagem que desafia os costumes da época.",
    narrativa: "Há quem chegue para transformar tudo. Alguém ligado a outra cultura, a outras tradições, envolto em um amor que a época não aceitava. Sua presença muda o curso da narrativa e revela as tensões entre diferentes mundos que convivem, e colidem, no pampa.",
    alternativas: ["Uma missanga", "Uma cruz missioneira", "Um cocar", "Um cachimbo"],
    alternativaCorreta: "Uma cruz missioneira",
    acontecimento: "Qual é o legado cultural deixado pelos missioneiros na região do pampa?",
    fragmento: "📖 FRAGMENTO 8/15 - MUDANÇA (p.16): 'Tinha ele uma cara moça e trigueira, de maçãs muito salientes. Era uma face lisa, sem um único fio de barba, e dum bonito que chamava a atenção por não ser comum.'"
  },
  {
    ordem: 9, numero: 9, palavraChave: "AMOR",
    pista: "Nasci da união de duas pessoas que enfrentaram barreiras e preconceitos para ficarem juntas.",
    desafio: "Identifique o símbolo que representa esse sentimento.",
    narrativa: "Entre duas pessoas que a sociedade dizia não deverem se unir, nasce algo verdadeiro. Esse sentimento desafia regras, costumes e expectativas, e dele surge uma nova vida, fruto de uma escolha proibida pelo seu tempo.",
    alternativas: ["Um lenço", "Uma pulseira de troca", "Um beijo", "Um abraço"],
    alternativaCorreta: "Uma pulseira de troca",
    acontecimento: "Como o amor entre Ana e Pedro desafia as convenções sociais da época?",
    fragmento: "📖 FRAGMENTO 9/15 - AMOR (p.38): 'O que ela queria era macho. E pensava em Pedro só porque, além do pai e dos irmãos, ele era o único homem que havia na estância.'"
  },
  {
    ordem: 10, numero: 10, palavraChave: "DOR",
    pista: "Minha presença marca uma perda irreparável. Depois de mim, nada volta a ser como antes.",
    desafio: "Qual objeto simboliza o sofrimento que mudou a vida da protagonista?",
    narrativa: "Depois da transformação, vem o preço. Perdas, sofrimento, violência, e relações de poder que pesam sobre quem tem menos voz. Ana Terra atravessa momentos de dor profunda, que marcam para sempre sua trajetória.",
    alternativas: ["Uma lágrima", "Um lenço ensanguentado", "Uma vela", "Uma cruz de madeira"],
    alternativaCorreta: "Um lenço ensanguentado",
    acontecimento: "Quais foram as maiores perdas que Ana Terra enfrentou e como elas a transformaram?",
    fragmento: "📖 FRAGMENTO 10/15 - DOR (p.49): 'Os dias que se seguiram foram para Ana Terra dias de vergonha, constrangimento e medo.'"
  },
  {
    ordem: 11, numero: 11, palavraChave: "ESPERANCA",
    pista: "Quando tudo parecia perdido, trouxe um motivo para continuar lutando.",
    desafio: "Encontre o objeto que representa a continuidade da vida.",
    narrativa: "Mesmo depois de tantas tragédias, a vida encontra um jeito de continuar. Um novo começo se anuncia: pequeno, frágil, mas real. É a prova de que, mesmo em meio à dor, ainda há motivo para seguir adiante.",
    alternativas: ["Um berço", "Uma criança", "Uma semente brotando", "O nascer do sol"],
    alternativaCorreta: "Uma criança",
    acontecimento: "De que forma a maternidade representa a esperança para Ana Terra?",
    fragmento: "📖 FRAGMENTO 11/15 - ESPERANÇA (p.50): 'Ela trazia Pedro dentro de si. Pedro ia nascer de novo e portanto tudo estava bem e o mundo no fim de contas não era tão mau.'"
  },
  {
    ordem: 12, numero: 12, palavraChave: "RESISTENCIA",
    pista: "Ajudo a enfrentar o medo, a solidão e as dificuldades. Sou a força que impede a desistência.",
    desafio: "Qual objeto representa a capacidade de seguir em frente apesar das adversidades?",
    narrativa: "Nos momentos mais difíceis, é preciso algo a que se apegar. Algo que ajude a manter a fé, a força e a esperança, mesmo quando tudo parece perdido. É esse apoio, muitas vezes silencioso, que sustenta Ana Terra em sua travessia.",
    alternativas: ["Uma oração", "Um terço", "Uma carta nunca enviada", "Uma fotografia"],
    alternativaCorreta: "Um terço",
    acontecimento: "Como a fé e a espiritualidade ajudam Ana a resistir às adversidades?",
    fragmento: "📖 FRAGMENTO 12/15 - RESISTÊNCIA (p.55): 'Ana Terra sacudiu a cabeça lentamente, concordando, pois tivera o mesmo pensamento.'"
  },
  {
    ordem: 13, numero: 13, palavraChave: "CONFLITO",
    pista: "Represento invasões, ataques e disputas que destruíram lares e mudaram destinos.",
    desafio: "Identifique os objetos ligados às guerras de fronteira.",
    narrativa: "As terras do pampa nunca foram pacíficas. Disputas territoriais, invasões, ataques e tensões marcam a região onde Ana Terra vive. Esses conflitos moldaram a história do Rio Grande do Sul e atravessam, direta ou indiretamente, a vida da protagonista e de sua família.",
    alternativas: ["Uma espada e um escudo", "Um mosquete e uma baioneta", "Uma lança e um facão", "Canhões e sabres"],
    alternativaCorreta: "Um mosquete e uma baioneta",
    acontecimento: "Como as guerras de fronteira afetaram a vida da família Terra?",
    fragmento: "📖 FRAGMENTO 13/15 - CONFLITO (p.7): 'De quando em quando grupos de índios coroados desciam das bandas da coxilha de Botucaraí... atacando as estâncias e os viajantes. Havia também as 'arriadas', partidas de ladrões de gado.'"
  },
  {
    ordem: 14, numero: 14, palavraChave: "RECOMECO",
    pista: "Depois das perdas, é preciso encontrar coragem para abrir novos caminhos.",
    desafio: "Qual objeto simboliza a construção de uma nova vida?",
    narrativa: "Depois de tanto perder, é hora de abrir uma porta para o novo. Um caminho diferente se apresenta: a chance de reconstruir a vida, de começar de novo em outro lugar, com outra perspectiva.",
    alternativas: ["Uma casa nova", "Uma mala de viagem", "Uma estrada bifurcada", "Uma chave"],
    alternativaCorreta: "Uma chave",
    acontecimento: "De que forma Ana Terra recomeça sua vida após as tragédias?",
    fragmento: "📖 FRAGMENTO 14/15 - RECOMEÇO (p.87): 'Puseram-se a caminho. As rodas rechinaram. E assim Ana Terra viu ir ficando para trás a estância do pai.'"
  },
  {
    ordem: 15, numero: 15, palavraChave: "LEGADO",
    pista: "Sou aquilo que permanece quando uma geração se vai. Carrego memórias, valores e histórias que continuam vivas.",
    desafio: "Descubra o objeto que representa a herança deixada por Ana Terra para o futuro.",
    narrativa: "No fim, olhamos para trás e vemos: cada momento importante da vida de Ana Terra estava conectado. Nascimento, amor, dor, recomeço: tudo fazia parte de um caminho maior. O que fica é o legado: memórias, valores e histórias que continuam vivas, atravessando gerações.",
    alternativas: ["Um livro de memórias", "Um baú de histórias", "Uma árvore plantada", "Um colar de família"],
    alternativaCorreta: "Um livro de memórias",
    acontecimento: "Qual é a importância de preservar a memória de Ana Terra para as futuras gerações?",
    fragmento: "📖 FRAGMENTO 15/15 - LEGADO (p.114-115): 'Achava que tudo agora estava bem. O filho era um homem direito e tinha casado com uma mulher séria e trabalhadora.'"
  }
];

function getCartaPorNumero(numero) {
  for(var i = 0; i < CARTAS.length; i++) {
    if(CARTAS[i].numero === numero) return CARTAS[i];
  }
  return null;
}

function getCartaPorOrdem(ordem) {
  for(var i = 0; i < CARTAS.length; i++) {
    if(CARTAS[i].ordem === ordem) return CARTAS[i];
  }
  return null;
}
