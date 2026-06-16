const CARTAS = [
  {
    ordem: 1, numero: 1, palavraChave: "NARRATIVA",
    pista: "Toda jornada começa comigo. Guardo personagens, conflitos, sonhos e memórias que atravessam gerações.",
    desafio: "Identifique o objeto que representa o início desta aventura.",
    narrativa: "Antes de qualquer palavra ser escrita, antes mesmo de Ana Terra existir, já havia a narrativa.",
    alternativas: ["Um livro", "Um mapa", "Uma carta", "Um diário"],
    alternativaCorreta: "Um livro",
    acontecimento: "Como a narrativa oral e escrita preserva a história da família Terra?",
    fragmento: "📖 FRAGMENTO 1/15 - NARRATIVA: 'No silêncio da estância, a voz de uma mulher ecoava através das páginas. Era assim que as histórias sobreviviam ao tempo, passando de mãe para filha, de avô para neto. Ana Terra aprendeu cedo que as palavras têm mais força que a espada.'"
  },
  {
    ordem: 2, numero: 2, palavraChave: "DESTINO",
    pista: "Estou presente quando a vida muda de direção. Alguns me sentem antes mesmo de perceber o que está por vir.",
    desafio: "Qual objeto simboliza os acontecimentos que transformam a vida da protagonista?",
    narrativa: "Há momentos em que a vida vira de cabeça para baixo. Um encontro, uma perda, uma escolha: tudo pode levar a um caminho novo.",
    alternativas: ["Uma bússola", "Um relógio", "Um fio de lã", "Uma estrada"],
    alternativaCorreta: "Um fio de lã",
    acontecimento: "De que forma o destino de Ana Terra se entrelaça com o de Pedro Missioneiro?",
    fragmento: "📖 FRAGMENTO 2/15 - DESTINO: 'O vento trazia cheiros desconhecidos quando ele chegou. Seu destino estava escrito há muito tempo, em linhas que só o amor poderia desembaraçar. Como um fio de lã que une duas pontas distantes.'"
  },
  {
    ordem: 3, numero: 3, palavraChave: "ORIGEM",
    pista: "Antes das viagens, das perdas e dos recomeços, existia um lugar onde tudo começou.",
    desafio: "Descubra qual objeto representa as raízes da família Terra.",
    narrativa: "Antes de Ana Terra, houve a terra. Vasta, dura, generosa. Foi dela que tudo nasceu.",
    alternativas: ["Uma árvore", "O chão de terra batida", "Uma semente", "Um rio"],
    alternativaCorreta: "O chão de terra batida",
    acontecimento: "Como a terra (o lugar) influencia a formação da identidade dos personagens?",
    fragmento: "📖 FRAGMENTO 3/15 - ORIGEM: 'Os pés descalços de Ana conheciam cada centímetro daquele chão. Foi ali que aprendeu a andar, a cair, a levantar. A terra não era apenas o lugar onde vivia - era parte de quem ela era.'"
  },
  {
    ordem: 4, numero: 4, palavraChave: "SOBREVIVENCIA",
    pista: "Sou fruto do trabalho diário. Sem mim, a família não teria como enfrentar os desafios.",
    desafio: "Identifique o objeto que garante o sustento dos personagens.",
    narrativa: "Mesmo na dor, a vida continua, e ela exige trabalho. Dia após dia, o sustento da família depende do esforço sobre a terra.",
    alternativas: ["Um arado", "Um moinho", "Uma plantação de trigo", "Um facão"],
    alternativaCorreta: "Uma plantação de trigo",
    acontecimento: "Qual é o papel do trabalho da terra na sobrevivência da família durante os conflitos?",
    fragmento: "📖 FRAGMENTO 4/15 - SOBREVIVÊNCIA: 'As mãos calejadas de Ana colhiam o sustento de sua família. Cada espiga de trigo era uma vitória contra a fome, cada grão uma promessa de amanhã. A terra dava, e ela agradecia com seu suor.'"
  },
  {
    ordem: 5, numero: 5, palavraChave: "LIBERDADE",
    pista: "Levo pessoas por campos sem fim. Abro caminhos para novas descobertas.",
    desafio: "Qual objeto representa os caminhos dos pampas?",
    narrativa: "Pelo pampa, seguem mensagens, sonhos e pessoas em movimento. Esse ir e vir constante representa a liberdade.",
    alternativas: ["Um cavalo", "Uma carroça", "O vento", "As estrelas"],
    alternativaCorreta: "Um cavalo",
    acontecimento: "Como o cavalo representa a liberdade e a ligação com o território gaúcho?",
    fragmento: "📖 FRAGMENTO 5/15 - LIBERDADE: 'Galopando pelo pampa sem fim, Ana sentia o vento no rosto e a alma leve. O cavalo era sua ponte para o mundo, seu escape das cercas invisíveis que tentavam prendê-la. Naquele momento, ela era livre.'"
  },
  {
    ordem: 6, numero: 6, palavraChave: "RESILIENCIA",
    pista: "Mesmo diante da dor, continuo em frente. Minha força não está na ausência do sofrimento.",
    desafio: "Encontre o objeto que representa a protagonista.",
    narrativa: "Ana Terra é uma mulher que não desiste. Perdas, violência, preconceitos: nada disso a quebra.",
    alternativas: ["Uma âncora", "Uma fênix", "Uma oliveira", "Uma pedra"],
    alternativaCorreta: "Uma oliveira",
    acontecimento: "Em quais momentos Ana Terra demonstra resiliência e como isso define sua trajetória?",
    fragmento: "📖 FRAGMENTO 6/15 - RESILIÊNCIA: 'Como a oliveira que resiste às secas e tempestades, Ana não se deixou quebrar. Cada perda a enraizava mais fundo, cada dor a tornava mais forte. Era a mulher que o pampa não conseguiu domar.'"
  },
  {
    ordem: 7, numero: 7, palavraChave: "ENCONTRO",
    pista: "Minha chegada altera o rumo dos acontecimentos.",
    desafio: "Qual objeto representa a chegada de alguém que mudará tudo?",
    narrativa: "Um dia, alguém chega. E nada mais é como antes. Esse encontro muda o rumo de tudo.",
    alternativas: ["Uma carta", "Um cavaleiro ao longe", "Uma flor", "Um terço"],
    alternativaCorreta: "Um cavaleiro ao longe",
    acontecimento: "Como a chegada de Pedro Missioneiro transforma a vida de Ana e sua família?",
    fragmento: "📖 FRAGMENTO 7/15 - ENCONTRO: 'No horizonte, uma silhueta se aproximava. Ana não sabia, mas aquele cavaleiro traria consigo o amor, a guerra e a mudança. O destino batia à sua porta montado em um cavalo alazão.'"
  },
  {
    ordem: 8, numero: 8, palavraChave: "MUDANCA",
    pista: "Venho de um mundo diferente e carrego conhecimentos que transformam vidas.",
    desafio: "Descubra o objeto ligado ao personagem que desafia os costumes.",
    narrativa: "Há quem chegue para transformar tudo. Alguém ligado a outra cultura, a outras tradições.",
    alternativas: ["Uma missanga", "Uma cruz missioneira", "Um cocar", "Um cachimbo"],
    alternativaCorreta: "Uma cruz missioneira",
    acontecimento: "Qual é o legado cultural deixado pelos missioneiros na região do pampa?",
    fragmento: "📖 FRAGMENTO 8/15 - MUDANÇA: 'Entre os arquivos da missão, Pedro encontrou algo que mudaria sua vida e de Ana. A cruz que carregava no peito não era apenas um símbolo de fé, mas uma ponte entre dois mundos que aprendiam a se amar.'"
  },
  {
    ordem: 9, numero: 9, palavraChave: "AMOR",
    pista: "Nasci da união de duas pessoas que enfrentaram barreiras.",
    desafio: "Identifique o símbolo que representa esse sentimento.",
    narrativa: "Entre duas pessoas que a sociedade dizia não deverem se unir, nasce algo verdadeiro.",
    alternativas: ["Um lenço", "Uma pulseira de troca", "Um beijo", "Um abraço"],
    alternativaCorreta: "Uma pulseira de troca",
    acontecimento: "Como o amor entre Ana e Pedro desafia as convenções sociais da época?",
    fragmento: "📖 FRAGMENTO 9/15 - AMOR: 'A pulseira que trocaram em segredo valia mais que ouro. Era a promessa de um amor que não aceitava fronteiras - nem de terra, nem de sangue, nem de preconceito. Naquele gesto simples, nasceu algo que a guerra não conseguiria destruir.'"
  },
  {
    ordem: 10, numero: 10, palavraChave: "DOR",
    pista: "Minha presença marca uma perda irreparável.",
    desafio: "Qual objeto simboliza o sofrimento que mudou a vida?",
    narrativa: "Depois da transformação, vem o preço. Perdas, sofrimento, violência marcam para sempre a trajetória.",
    alternativas: ["Uma lágrima", "Um lenço ensanguentado", "Uma vela", "Uma cruz de madeira"],
    alternativaCorreta: "Um lenço ensanguentado",
    acontecimento: "Quais foram as maiores perdas que Ana Terra enfrentou e como elas a transformaram?",
    fragmento: "📖 FRAGMENTO 10/15 - DOR: 'O lenço que antes era branco agora trazia marcas vermelhas. Ana o guardou como testemunha silenciosa de um amor interrompido. Naquela noite, ela aprendeu que a dor também ensina - ensina a valorizar cada instante.'"
  },
  {
    ordem: 11, numero: 11, palavraChave: "ESPERANCA",
    pista: "Quando tudo parecia perdido, trouxe um motivo para continuar.",
    desafio: "Encontre o objeto que representa a continuidade da vida.",
    narrativa: "Mesmo depois de tantas tragédias, a vida encontra um jeito de continuar.",
    alternativas: ["Um berço", "Uma criança", "Uma semente brotando", "O nascer do sol"],
    alternativaCorreta: "Uma criança",
    acontecimento: "De que forma a maternidade representa a esperança para Ana Terra?",
    fragmento: "📖 FRAGMENTO 11/15 - ESPERANÇA: 'O choro fraco rompeu o silêncio da noite. Nos braços de Ana, uma nova vida começava. Em meio ao luto e à destruição, a esperança renascia - pequena, frágil, mas teimosa como o mato que brota entre as pedras.'"
  },
  {
    ordem: 12, numero: 12, palavraChave: "RESISTENCIA",
    pista: "Ajudo a enfrentar o medo, a solidão e as dificuldades.",
    desafio: "Qual objeto representa a capacidade de seguir em frente?",
    narrativa: "Nos momentos mais difíceis, é preciso algo a que se apegar. Algo que ajude a manter a fé, a força e a esperança.",
    alternativas: ["Uma oração", "Um terço", "Uma carta nunca enviada", "Uma fotografia"],
    alternativaCorreta: "Um terço",
    acontecimento: "Como a fé e a espiritualidade ajudam Ana a resistir às adversidades?",
    fragmento: "📖 FRAGMENTO 12/15 - RESISTÊNCIA: 'Entre os dedos calejados, as contas do terço deslizavam. Cada Ave Maria era um escudo contra o desespero, cada Pai Nosso uma trincheira contra a escuridão. A fé de Ana era sua arma mais poderosa.'"
  },
  {
    ordem: 13, numero: 13, palavraChave: "CONFLITO",
    pista: "Represento invasões, ataques e disputas que destruíram lares.",
    desafio: "Identifique os objetos ligados às guerras de fronteira.",
    narrativa: "As terras do pampa nunca foram pacíficas. Disputas territoriais, invasões, ataques moldaram a história.",
    alternativas: ["Uma espada e um escudo", "Um mosquete e uma baioneta", "Uma lança e um facão", "Canhões e sabres"],
    alternativaCorreta: "Um mosquete e uma baioneta",
    acontecimento: "Como as guerras de fronteira afetaram a vida da família Terra?",
    fragmento: "📖 FRAGMENTO 13/15 - CONFLITO: 'O barulho dos mosquetes ecoou por dias. Quando o silêncio finalmente voltou, metade da aldeia havia sumido. Ana aprendeu que a guerra não escolhe lados - ela simplesmente destrói, sem piedade, sem razão.'"
  },
  {
    ordem: 14, numero: 14, palavraChave: "RECOMECO",
    pista: "Depois das perdas, é preciso encontrar coragem para abrir novos caminhos.",
    desafio: "Qual objeto simboliza a construção de uma nova vida?",
    narrativa: "Depois de tanto perder, é hora de abrir uma porta para o novo. Um caminho diferente se apresenta.",
    alternativas: ["Uma casa nova", "Uma mala de viagem", "Uma estrada bifurcada", "Uma chave"],
    alternativaCorreta: "Uma chave",
    acontecimento: "De que forma Ana Terra recomeça sua vida após as tragédias?",
    fragmento: "📖 FRAGMENTO 14/15 - RECOMEÇO: 'A chave rangia na fechadura enferrujada. Dentro daquela casa abandonada, Ana via não ruínas, mas possibilidades. Era o começo de algo novo - não melhor, não pior, apenas diferente. E isso bastava.'"
  },
  {
    ordem: 15, numero: 15, palavraChave: "LEGADO",
    pista: "Sou aquilo que permanece quando uma geração se vai.",
    desafio: "Descubra o objeto que representa a herança deixada por Ana Terra.",
    narrativa: "No fim, olhamos para trás e vemos: cada momento importante estava conectado. O que fica é o legado.",
    alternativas: ["Um livro de memórias", "Um baú de histórias", "Uma árvore plantada", "Um colar de família"],
    alternativaCorreta: "Um livro de memórias",
    acontecimento: "Qual é a importância de preservar a memória de Ana Terra para as futuras gerações?",
    fragmento: "📖 FRAGMENTO 15/15 - LEGADO: 'O livro estava gasto, com páginas amareladas e marcas de dedos sujos de terra. Mas ali, naquelas linhas escritas à mão, Ana Terra continuava viva. Seu legado não era feito de ouro ou prata - era feito de histórias, e isso ninguém poderia roubar.'"
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
