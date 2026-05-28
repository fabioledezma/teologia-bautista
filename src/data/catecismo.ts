export interface CatecismoEntry {
  id: string;
  pregunta: string;
  respuesta: string;
  escritura: string;
  tema: string;
}

const catecismoData: CatecismoEntry[] = [
  {
    id: "fin-principal",
    pregunta: "¿Cuál es el fin principal del hombre?",
    respuesta:
      "El fin principal del hombre es glorificar a Dios y gozar de Él para siempre.",
    escritura: "1 Co 10:31; Sal 73:25-26; Ro 11:36; Ap 4:11",
    tema: "Dios",
  },
  {
    id: "que-es-dios",
    pregunta: "¿Qué es Dios?",
    respuesta:
      "Dios es Espíritu, infinito, eterno e inmutable en Su ser, sabiduría, poder, santidad, justicia, bondad y verdad.",
    escritura: "Jn 4:24; Sal 90:2; Mal 3:6; Stg 1:17; Ex 34:6-7",
    tema: "Dios",
  },
  {
    id: "dios-trino",
    pregunta: "¿Hay más de un Dios?",
    respuesta:
      "Hay un solo Dios, el Dios vivo y verdadero, que existe eternamente en tres Personas: el Padre, el Hijo y el Espíritu Santo; y estas tres son un solo Dios, iguales en poder y gloria.",
    escritura: "Dt 6:4; 1 Co 8:4-6; Mt 28:19; 2 Co 13:14",
    tema: "Dios",
  },
  {
    id: "escrituras",
    pregunta: "¿Cuál es la Palabra de Dios?",
    respuesta:
      "Los libros del Antiguo y Nuevo Testamento son la Palabra de Dios, la única regla de fe y obediencia.",
    escritura: "2 Ti 3:16-17; 2 P 1:20-21; Ef 2:20; Ap 22:18-19",
    tema: "Escritura",
  },
  {
    id: "que-es-pecado",
    pregunta: "¿Qué es el pecado?",
    respuesta:
      "El pecado es toda falta de conformidad a la ley de Dios o toda transgresión de ella.",
    escritura: "1 Jn 3:4; Ro 3:23; Stg 4:17; Ro 14:23",
    tema: "Hombre",
  },
  {
    id: "caida",
    pregunta: "¿Cayó toda la humanidad en la transgresión de Adán?",
    respuesta:
      "Sí. Todos los descendientes de Adán cayeron en él, y por su transgresión llegaron a ser culpables y corruptos, muertos en pecado, y totalmente inclinados a todo mal.",
    escritura: "Ro 5:12, 18-19; Ef 2:1-3; Sal 51:5; Ro 3:10-12",
    tema: "Hombre",
  },
  {
    id: "cristo-redentor",
    pregunta: "¿Quién es el Redentor?",
    respuesta:
      "El único Redentor de los elegidos de Dios es el Señor Jesucristo, quien siendo el Hijo eterno de Dios, se hizo hombre, y así fue y es Dios y hombre en dos naturalezas distintas, una sola persona para siempre.",
    escritura: "1 Ti 2:5-6; Jn 1:14; He 2:14; Fil 2:5-11",
    tema: "Cristo",
  },
  {
    id: "encarnacion",
    pregunta: "¿Cómo se hizo hombre Cristo?",
    respuesta:
      "Cristo, el Hijo de Dios, se hizo hombre al tomar un cuerpo y un alma humanos, siendo concebido por el poder del Espíritu Santo en el vientre de la virgen María, y naciendo de ella, pero sin pecado.",
    escritura: "Lc 1:35; Mt 1:18-25; He 4:15; 7:26",
    tema: "Cristo",
  },
  {
    id: "obra-cristo",
    pregunta: "¿Qué obra realizó Cristo para nuestra redención?",
    respuesta:
      "Cristo, como nuestro Redentor, cumplió toda la ley en nuestro lugar, sufrió la pena por nuestros pecados en Su muerte en la cruz, resucitó al tercer día, ascendió al cielo, e intercede por nosotros a la diestra del Padre.",
    escritura: "He 9:14; 2 Co 5:21; Ro 4:25; 1 Co 15:3-4; He 7:25",
    tema: "Cristo",
  },
  {
    id: "justificacion",
    pregunta: "¿Cómo somos justificados delante de Dios?",
    respuesta:
      "Somos justificados delante de Dios solo por el mérito de Cristo, mediante la fe, y no por obras de la ley. La justicia de Cristo nos es imputada y recibida solo por fe.",
    escritura: "Ro 3:24-28; 5:1; Gá 2:16; Fil 3:9; 2 Co 5:21",
    tema: "Salvación",
  },
  {
    id: "fe-salvadora",
    pregunta: "¿Qué es la fe en Jesucristo?",
    respuesta:
      "La fe en Jesucristo es una gracia salvadora por la cual recibimos y confiamos solo en Él para salvación, como es ofrecido en el evangelio.",
    escritura: "Ef 2:8-9; Jn 1:12; 3:16; He 10:39; Ro 10:9-10",
    tema: "Salvación",
  },
  {
    id: "arrepentimiento",
    pregunta: "¿Qué es el arrepentimiento para vida?",
    respuesta:
      "El arrepentimiento para vida es una gracia salvadora por la cual el pecador, reconociendo y sintiendo su pecado, se vuelve a Dios con verdadera contrición, odio al pecado y propósito de obedecerle.",
    escritura: "Hch 11:18; 2 Co 7:10; Sal 51; Lc 15:18-19",
    tema: "Salvación",
  },
  {
    id: "bautismo",
    pregunta: "¿Qué es el bautismo?",
    respuesta:
      "El bautismo es una ordenanza de Cristo, en la cual se sumerge en agua al creyente, en el nombre del Padre, del Hijo y del Espíritu Santo, como señal de su unión con Cristo en Su muerte y resurrección.",
    escritura: "Mt 28:19; Hch 8:36-39; Ro 6:3-5; Col 2:12",
    tema: "Iglesia",
  },
  {
    id: "cena",
    pregunta: "¿Qué es la Cena del Señor?",
    respuesta:
      "La Cena del Señor es una ordenanza de Cristo en la cual los creyentes, partiendo el pan y bebiendo el fruto de la vid, conmemoran la muerte de Cristo, confirman su fe en Él y su amor mutuo.",
    escritura: "1 Co 11:23-26; Mt 26:26-28; Hch 2:42; 1 Co 10:16-17",
    tema: "Iglesia",
  },
  {
    id: "oracion",
    pregunta: "¿Qué es la oración?",
    respuesta:
      "La oración es ofrecer nuestros deseos a Dios en el nombre de Cristo, con confesión de nuestros pecados y acción de gracias por Sus misericordias.",
    escritura: "Sal 62:8; Jn 16:23-24; Fil 4:6; 1 Ti 2:8; 1 Jn 1:9",
    tema: "Vida cristiana",
  },
  {
    id: "resurreccion",
    pregunta: "¿Qué sucederá cuando Cristo vuelva?",
    respuesta:
      "Cuando Cristo vuelva, los muertos resucitarán, Cristo juzgará al mundo con justicia, los justos heredarán la vida eterna y los impíos serán castigados eternamente.",
    escritura: "Jn 5:28-29; Hch 17:31; 2 Ts 1:7-10; Ap 20:11-15; Mt 25:31-46",
    tema: "Últimas cosas",
  },
];

export default catecismoData;
