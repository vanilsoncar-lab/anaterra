const CARTAS = [
  {
    ordem: 1,
    numero: 3,
    palavraChave: "ORIGEM",
    pista: "Represento o lugar onde Ana Terra nasceu e cresceu.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Antes de Ana Terra, houve a terra. Vasta, dura, generosa. E dela que tudo nasce: o sangue, o sustento, a primeira lembranca de infancia sob o ceu aberto do pampa. Aqui comeca a historia, no chao onde os pes descalcos de Ana aprenderam a caminhar."
  },
  {
    ordem: 2,
    numero: 1,
    palavraChave: "NARRATIVA",
    pista: "Sou o inicio de tudo. Guardo personagens, conflitos e memorias.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Toda jornada precisa de um lugar para guardar suas memorias. Personagens nascem, conflitos se acumulam, geracoes se sucedem, e tudo isso precisa de um fio condutor, algo que une o passado ao presente e da forma a historia que esta sendo contada."
  },
  {
    ordem: 3,
    numero: 14,
    palavraChave: "TRADICAO",
    pista: "Represento costumes e habitos que fazem parte da identidade gaucha.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Antes mesmo de Ana Terra existir, ja existiam os costumes que a formaram: o modo de viver, de se vestir, de receber visitas, de marcar o tempo. Sao esses habitos, transmitidos de geracao em geracao, que dao identidade a um povo e moldam quem Ana se tornara."
  },
  {
    ordem: 4,
    numero: 7,
    palavraChave: "ENCONTRO",
    pista: "Minha chegada transforma completamente o rumo da narrativa.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Um dia, alguem chega. E nada mais e como antes. Esse encontro muda o rumo de tudo, nao apenas da vida de Ana, mas da propria narrativa. E o ponto sem volta, o momento em que a historia ganha um novo caminho."
  },
  {
    ordem: 5,
    numero: 9,
    palavraChave: "AMOR",
    pista: "Nasci da uniao de duas pessoas que desafiaram as regras de sua epoca.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Entre duas pessoas que a sociedade dizia nao deverem se unir, nasce algo verdadeiro. Esse sentimento desafia regras, costumes e expectativas, e dele surge uma nova vida, fruto de uma escolha proibida pelo seu tempo."
  },
  {
    ordem: 6,
    numero: 15,
    palavraChave: "CONFLITO",
    pista: "Represento guerras, disputas territoriais e acontecimentos que influenciaram a formacao do Rio Grande do Sul.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "As terras do pampa nunca foram pacificas. Disputas territoriais, guerras e tensoes marcam a regiao onde Ana Terra vive, acontecimentos que moldaram a historia do Rio Grande do Sul e que atravessam, direta ou indiretamente, a vida da protagonista e de sua familia."
  },
  {
    ordem: 7,
    numero: 8,
    palavraChave: "MUDANCA",
    pista: "Sou um personagem ligado a cultura indigena e ao amor proibido.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Ha quem chegue para transformar tudo. Um personagem ligado a outra cultura, a outras tradicoes, envolvido em um amor que a epoca nao aceitava. Sua presenca muda o curso da narrativa e revela as tensoes entre diferentes mundos que convivem, e colidem, no pampa."
  },
  {
    ordem: 8,
    numero: 10,
    palavraChave: "DOR",
    pista: "Represento perdas, sofrimento, violencia e relacoes de poder.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Depois da transformacao, vem o preco. Perdas, sofrimento, violencia, e relacoes de poder que pesam sobre quem tem menos voz. Ana Terra atravessa momentos de dor profunda, que marcam para sempre sua trajetoria."
  },
  {
    ordem: 9,
    numero: 4,
    palavraChave: "SOBREVIVENCIA",
    pista: "Sou resultado do trabalho diario e garanto o sustento da familia.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Mesmo na dor, a vida continua, e ela exige trabalho. Dia apos dia, o sustento da familia depende do esforco sobre a terra. E essa labuta diaria, simples e essencial, que garante que Ana e os seus continuem de pe."
  },
  {
    ordem: 10,
    numero: 6,
    palavraChave: "RESILIENCIA",
    pista: "Represento uma mulher forte que enfrentou perdas, violencia e preconceitos sem desistir.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Ana Terra e, antes de tudo, uma mulher que nao desiste. Perdas, violencia, preconceitos: nada disso a quebra por completo. Ela segue, carregando o peso do passado, mas seguindo em frente. Essa forca e o centro de quem ela e."
  },
  {
    ordem: 11,
    numero: 11,
    palavraChave: "ESPERANCA",
    pista: "Mesmo apos tantas tragedias, simbolizo a continuidade da vida.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Mesmo depois de tantas tragedias, a vida encontra um jeito de continuar. Um novo comeco se anuncia: pequeno, fragil, mas real. E a prova de que, mesmo em meio a dor, ainda ha motivo para seguir adiante."
  },
  {
    ordem: 12,
    numero: 12,
    palavraChave: "RESISTENCIA",
    pista: "Ajudo a enfrentar momentos dificeis e manter a esperanca.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Nos momentos mais dificeis, e preciso algo a que se apegar. Algo que ajude a manter a fe, a forca e a esperanca, mesmo quando tudo parece perdido. E esse apoio, muitas vezes silencioso, que sustenta Ana Terra em sua travessia."
  },
  {
    ordem: 13,
    numero: 13,
    palavraChave: "RECOMECO",
    pista: "Abro caminhos para uma nova vida depois das perdas.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Depois de tanto perder, e hora de abrir uma porta para o novo. Um caminho diferente se apresenta: a chance de reconstruir a vida, de comecar de novo em outro lugar, com outra perspectiva."
  },
  {
    ordem: 14,
    numero: 5,
    palavraChave: "LIBERDADE",
    pista: "Levo pessoas, mensagens e sonhos pelos pampas gauchos.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "Pelo pampa, seguem mensagens, sonhos e pessoas em movimento. Esse ir e vir constante representa a liberdade de seguir caminho, de levar consigo as historias vividas, e de buscar, em outro lugar, aquilo que falta."
  },
  {
    ordem: 15,
    numero: 2,
    palavraChave: "DESTINO",
    pista: "Acompanho os momentos mais importantes da vida da protagonista.",
    desafio: "Qual objeto eu represento? Justifique sua resposta.",
    narrativa: "No fim, olhamos para tras e vemos: cada momento importante da vida de Ana Terra estava conectado. Nascimento, amor, dor, recomeco: tudo fazia parte de um caminho maior. Esse e o destino: a soma de toda uma trajetoria, vista de uma so vez."
  }
];

function getCartaPorNumero(numero) {
  return CARTAS.find(c => c.numero === numero);
}

function getCartaPorOrdem(ordem) {
  return CARTAS.find(c => c.ordem === ordem);
}
