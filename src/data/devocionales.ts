export interface DevocionalEntry {
  id: string;
  titulo: string;
  texto: string;
  meditacion: string;
  oracion: string;
  tema: string;
}

const devocionalesData: DevocionalEntry[] = [
  {
    id: "sola-scriptura",
    titulo: "La suficiencia de la Escritura",
    texto: "Toda la Escritura es inspirada por Dios y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra. (2 Ti 3:16-17)",
    meditacion:
      "No necesitamos nuevas revelaciones, voces del cielo ni sueños místicos. Dios ya ha hablado. Y lo que ha dicho es suficiente. La Escritura no es un libro más entre muchos: es la voz viva de Dios que nos enseña, nos corrige y nos prepara para todo lo que Él requiere de nosotros. ¿Buscas dirección? Aquí está. ¿Necesitas consuelo? Aquí abunda. ¿Quieres conocer a Dios? Él se ha revelado en Su Palabra. Descansa en la suficiencia de lo que ya tienes.",
    oracion:
      "Señor, gracias por Tu Palabra. Perdóname por cuántas veces la he descuidado, y dame hambre y sed de ella. Haz que mi vida sea formada por cada una de Tus palabras. Amén.",
    tema: "Escritura",
  },
  {
    id: "soberania",
    titulo: "Dios reina sobre todo",
    texto: "Jehová ha establecido Su trono en los cielos, y Su reino domina sobre todos. (Sal 103:19)",
    meditacion:
      "Nada escapa al control de Dios. No hay virus, gobierno, accidente o decisión humana que esté fuera de Su soberanía. Esto no significa que Dios sea el autor del pecado, sino que Él gobierna con sabiduría y poder sobre todas las cosas, incluso aquellas que no entendemos. Cuando el mundo parece caótico, el trono de Dios permanece firme. Tu vida no está en manos del azar ni de fuerzas impersonales. Estás en las manos del Rey que todo lo sostiene y todo lo ordena para bien de los que le aman.",
    oracion:
      "Padre, reconozco que Tú reinas. Cuando todo me parece incierto, ayúdame a recordar que Tu trono permanece firme. Someto mi vida a Tu gobierno sabio y bondadoso. Amén.",
    tema: "Dios",
  },
  {
    id: "gracia-comun",
    titulo: "La bondad de Dios para todos",
    texto: "Él hace salir Su sol sobre malos y buenos, y llover sobre justos e injustos. (Mt 5:45)",
    meditacion:
      "Cada rayo de sol, cada gota de lluvia, cada respiración es un regalo de la gracia común de Dios. Los que rechazan a Dios disfrutan de Su bondad cada día, aunque no le reconozcan. Esta generosidad divina no significa que Dios apruebe el pecado, sino que es paciente y misericordioso. ¿Y tú? ¿Das gracias a Dios por las pequeñas bondades cotidianas? El café de la mañana, el techo sobre tu cabeza, la sonrisa de un hijo. Todo es gracia.",
    oracion:
      "Señor, gracias por Tu bondad diaria. Abre mis ojos para ver Tus bendiciones en cada detalle. Que Tu paciencia me lleve al arrepentimiento y no a la presunción. Amén.",
    tema: "Dios",
  },
  {
    id: "arrepentimiento",
    titulo: "Volverse a Dios",
    texto: "Arrepentíos y convertíos, para que vuestros pecados sean borrados. (Hch 3:19)",
    meditacion:
      "El arrepentimiento no es un evento único en la conversión, es la respiración del alma creyente. Cada día descubrimos áreas de nuestra vida que no están alineadas con la voluntad de Dios. El arrepentimiento no es culpabilidad malsana, es el gozo de volver al Padre. Es dejar la carga del pecado y correr hacia la gracia. ¿Hay algo que hoy necesites confesar y dejar? No esperes. El Padre te espera con los brazos abiertos.",
    oracion:
      "Dios misericordioso, te pido perdón por mis pecados. No quiero endurecer mi corazón. Dame un espíritu quebrantado y contrito, y la alegría de caminar en obediencia. Amén.",
    tema: "Vida cristiana",
  },
  {
    id: "cruz",
    titulo: "El centro de la historia",
    texto: "Cristo murió por nuestros pecados conforme a las Escrituras. (1 Co 15:3)",
    meditacion:
      "La cruz no fue un accidente ni un fracaso del plan de Dios. Fue el centro del propósito eterno de Dios. Allí, el Justo murió por los injustos. Allí, el amor y la justicia se besaron. La cruz no es un símbolo religioso más: es el momento en que Dios demostró Su amor de manera definitiva. Cuando dudes del amor de Dios, mira a la cruz. Cuando el pecado te abrume, mira a la cruz. Cuando necesites esperanza, mira a la cruz. Todo cambia allí.",
    oracion:
      "Señor Jesucristo, gracias por Tu sacrificio en mi lugar. Nunca entenderé completamente el costo de mi redención, pero quiero vivir cada día agradecido por lo que hiciste en la cruz. Amén.",
    tema: "Cristo",
  },
  {
    id: "justificacion",
    titulo: "Libre de culpa",
    texto: "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo. (Ro 5:1)",
    meditacion:
      "La justificación es el acto legal de Dios por el cual declara justo al pecador que cree en Cristo. No es un proceso, es una declaración. No es que Dios te haga justo gradualmente, sino que te declara justo instantáneamente por la justicia de Cristo imputada a ti. Esto significa que tu posición delante de Dios no depende de tu desempeño sino de la obra consumada de Cristo. Hoy puedes acercarte a Dios sin miedo, no porque seas perfecto, sino porque Cristo lo es por ti.",
    oracion:
      "Padre, gracias por declararme justo en Cristo. Ayúdame a vivir cada día en la libertad y seguridad que me da saber que estoy perdonado y aceptado en Tu Hijo. Amén.",
    tema: "Salvación",
  },
  {
    id: "oracion",
    titulo: "El privilegio de hablar con Dios",
    texto: "En toda oración y ruego, orad en todo tiempo por el Espíritu. (Ef 6:18)",
    meditacion:
      "La oración no es una formalidad religiosa, es la comunión viva del hijo con su Padre. No necesitas palabras elocuentes ni posturas específicas. Necesitas un corazón que confía. Dios no se impresiona con discursos elaborados, sino que se deleita en la dependencia humilde de Sus hijos. ¿Has tratado la oración como una lista de pedidos? Hoy acércate a Dios simplemente para estar con Él, para conocerle, para descansar en Su presencia.",
    oracion:
      "Señor, enséñame a orar. No quiero que mi vida de oración sea una rutina vacía. Quiero conocerte, hablarte y escucharte. Atrae mi corazón a Ti. Amén.",
    tema: "Vida cristiana",
  },
  {
    id: "iglesia",
    titulo: "El cuerpo de Cristo",
    texto: "Somos miembros unos de otros. (Ro 12:5)",
    meditacion:
      "El cristianismo no se vive en aislamiento. Dios no te salvó para ser un cristiano solitario, sino para ser parte de una familia, un cuerpo, un templo. La iglesia local es el contexto donde crecemos, somos corregidos, animados, y donde servimos. Si te has alejado de la comunión de la iglesia, hoy es un buen día para volver. No necesitas una iglesia perfecta (no existe), sino una iglesia donde el evangelio sea predicado fielmente y donde puedas crecer con otros.",
    oracion:
      "Señor, gracias por Tu iglesia. Ayúdame a amarla, a comprometerme con ella y a servir a mis hermanos con humildad. Que no me aisle del cuerpo que Tú has formado. Amén.",
    tema: "Iglesia",
  },
  {
    id: "esperanza",
    titulo: "La victoria final",
    texto: "El que da testimonio de estas cosas dice: 'Ciertamente vengo en breve'. Amén; sí, ven, Señor Jesús. (Ap 22:20)",
    meditacion:
      "La historia no termina en tragedia. Termina con Cristo volviendo, la muerte vencida, el pecado erradicado, y un cielo nuevo y una tierra nueva donde la justicia mora. Esta esperanza no es un escape de la realidad, sino el ancla que sostiene nuestra alma en medio de la tribulación. El sufrimiento de hoy no es comparable con la gloria que será revelada. Mantén tus ojos en el horizonte. El Rey viene. Y todo será restaurado.",
    oracion:
      "Ven, Señor Jesús. Mientras esperamos Tu regreso, ayúdanos a ser fieles, a perseverar y a vivir con la esperanza viva de que Tú vences. Maranatha. Amén.",
    tema: "Últimas cosas",
  },
  {
    id: "santidad",
    titulo: "Sed santos, porque Yo soy santo",
    texto: "Como Aquel que os llamó es santo, sed también vosotros santos en toda vuestra manera de vivir. (1 P 1:15-16)",
    meditacion:
      "La santidad no es una opción para el creyente, es un mandato y un privilegio. No se trata de legalismo ni de apariencia externa. Santidad es ser apartado para Dios, reflejar Su carácter en cada área de la vida. La santidad verdadera nace del gozo de conocer a Dios. Cuanto más le amas, más deseas agradarle. ¿Qué áreas de tu vida hoy no están alineadas con la santidad de Dios? No se trata de esfuerzo humano, sino de rendición al Espíritu que obra en ti.",
    oracion:
      "Padre santo, deseo ser santo como Tú eres santo. Señálame las áreas que debo entregarte. Purifica mi corazón y hazme más como Cristo. Amén.",
    tema: "Vida cristiana",
  },
  {
    id: "fe",
    titulo: "Caminar por fe, no por vista",
    texto: "Andamos por fe, no por vista. (2 Co 5:7)",
    meditacion:
      "La fe no es creer en Dios a pesar de la evidencia; es confiar en Dios basado en la evidencia de Su carácter y Sus promesas. La fe tiene un fundamento: la Palabra de Dios. No es un salto al vacío, es poner todo tu peso en Aquel que nunca falla. Hoy puede haber circunstancias que no entiendes, oraciones que parecen no ser respondidas, caminos cerrados. ¿Confías en que Dios es bueno aunque no veas el resultado? Eso es fe.",
    oracion:
      "Señor, aumento mi fe. Ayúdame a confiar en Ti cuando no entiendo Tus caminos. Tú eres fiel, y en eso descanso. Amén.",
    tema: "Vida cristiana",
  },
];

export default devocionalesData;
