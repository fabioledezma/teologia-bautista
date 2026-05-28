export interface VersiculoMalInterpretado {
  id: string;
  citas: string[];
  pasaje: string;
  loQueMuchosPiensan: string;
  contextoReal: string;
  significadoReal: string;
  aplicacionCorrecta: string;
}

const versiculosMalInterpretados: VersiculoMalInterpretado[] = [
  {
    id: "jeremias-29-11",
    pasaje: "Jeremías 29:11",
    citas: ["Jer 29:11"],
    loQueMuchosPiensan:
      "Muchos lo usan como una promesa personal de prosperidad: 'Dios tiene planes maravillosos para mí: prosperidad, éxito y felicidad'. Se ha convertido en un versículo de 'motivación personal' para alcanzar sueños.",
    contextoReal:
      "Jeremías escribe a los exiliados en Babilonia. No es una promesa genérica a individuos, sino a la nación de Israel en un contexto específico: 70 años de exilio. La 'prosperidad' y 'porvenir' no son riquezas terrenales, sino la restauración del pacto después del juicio. El versículo 10 precede: 'Cuando en Babilonia se cumplan los setenta años, os visitaré'.",
    significadoReal:
      "Dios es fiel a Su pacto a pesar del pecado de Su pueblo. La promesa es corporativa, no individual: Dios restaurará a Israel como nación después del exilio. No promete que todo será fácil para cada creyente, sino que Dios tiene un plan redentor en la historia que culmina en Cristo.",
    aplicacionCorrecta:
      "En lugar de aplicarlo a tus metas personales, úsalo para confiar en el plan soberano de Dios en la historia. Así como fue fiel a Israel, Dios es fiel a Su iglesia. Tu esperanza no está en que Dios cumplirá tus sueños, sino en que Él cumple Su propósito redentor, y tú eres parte de ese propósito en Cristo.",
  },
  {
    id: "filipenses-4-13",
    pasaje: "Filipenses 4:13",
    citas: ["Fil 4:13"],
    loQueMuchosPiensan:
      "'Todo lo puedo en Cristo' se usa como un mantra de logro personal: puedo tener éxito en mi trabajo, puedo ganar, puedo alcanzar mis metas. Como si Cristo fuera un potenciador de capacidades humanas.",
    contextoReal:
      "Pablo está en prisión, aprendiendo a estar contento en cualquier circunstancia (vv. 11-12). El 'todo lo puedo' se refiere específicamente a enfrentar cualquier situación —hambre, necesidad, abundancia— con contentamiento. No es sobre lograr metas, sino sobre sobrellevar cualquier circunstancia.",
    significadoReal:
      "Cristo nos fortalece para perseverar en toda circunstancia, tanto en la abundancia como en la escasez. Es un versículo de resistencia y contentamiento, no de éxito o logro. La fortaleza de Cristo se muestra más en soportar la adversidad que en alcanzar metas.",
    aplicacionCorrecta:
      "Cuando enfrentes dificultades, recuerda que Cristo te da fortaleza para perseverar, no para escapar de ellas. No lo uses para justificar ambiciones personales sino para encontrar contentamiento en Cristo en cualquier situación. Aprende a decir con Pablo: 'he aprendido a contentarme con lo que tengo'.",
  },
  {
    id: "mateo-18-20",
    pasaje: "Mateo 18:20",
    citas: ["Mt 18:20"],
    loQueMuchosPiensan:
      "Se usa para justificar que cualquier reunión de dos o tres personas 'en el nombre de Jesús' es una iglesia, o para garantizar la presencia especial de Cristo en reuniones pequeñas. Algunos lo usan para menospreciar la iglesia organizada.",
    contextoReal:
      "Jesús habla sobre disciplina eclesiástica (vv. 15-20): cuando un hermano peca, si no escucha, se lleva a dos o tres testigos, luego a la iglesia. El versículo 20 no es sobre reuniones devocionales sino sobre la autoridad de Cristo en la disciplina de la iglesia. 'Reunidos en mi nombre' significa actuar con Su autoridad.",
    significadoReal:
      "Cristo promete Su presencia cuando la iglesia actúa en Su nombre con autoridad, especialmente en disciplina y gobierno eclesiástico. No es una promesa mágica para cualquier reunión, sino una garantía de que Cristo respalda las decisiones de la iglesia tomadas según Su Palabra.",
    aplicacionCorrecta:
      "Úsalo para recordar que Cristo es la Cabeza de la iglesia y que la disciplina eclesiástica no es opcional. Cuando la iglesia actúa conforme a la Palabra, tiene la autoridad de Cristo. No lo uses para justificar que un grupo pequeño es una iglesia sin orden bíblico.",
  },
  {
    id: "proverbios-22-6",
    pasaje: "Proverbios 22:6",
    citas: ["Pr 22:6"],
    loQueMuchosPiensan:
      "Muchos padres creen que si crian a sus hijos 'en el camino del Señor', automáticamente serán creyentes fieles de adultos. Cuando un hijo se desvía, los padres sienten culpa o dudan de su fe.",
    contextoReal:
      "Proverbios son principios generales de sabiduría, no promesa absolutas o garantías. No es un pacto condicional automático sino una observación general sobre la influencia de la formación temprana. El mismo libro de Proverbios muestra hijos sabios y necios de los mismos padres.",
    significadoReal:
      "La educación piadosa en el hogar es el medio ordinario que Dios usa para formar hijos en la fe. Pero no es una garantía infalible de salvación. Cada persona responde individualmente ante Dios. La responsabilidad de los padres es criar fielmente; el resultado depende de la gracia de Dios.",
    aplicacionCorrecta:
      "Cría a tus hijos en la disciplina y amonestación del Señor con fidelidad, pero confía en la soberanía de Dios, no en una fórmula. Si tus hijos se desvían, sigue orando y siendo fiel, sin culparte automáticamente. Dios obra en Sus tiempos.",
  },
  {
    id: "malquias-3-10",
    pasaje: "Malaquías 3:10",
    citas: ["Mal 3:10"],
    loQueMuchosPiensan:
      "Usado por predicadores de prosperidad como una fórmula financiera: 'Diezma y Dios te hará rico'. Prometen que si das el diezmo, Dios abrirá ventanas de bendición material.",
    contextoReal:
      "Malaquías habla a Israel bajo la ley mosaica, donde el diezmo era parte del sistema levítico para sostener el templo y los sacerdotes. No es una promesa de prosperidad material para creyentes del nuevo pacto. El NT enseña a dar generosa y voluntariamente, no por obligación legal (2 Co 9:6-7).",
    significadoReal:
      "Dios bendice a los que dan generosamente, pero la bendición no es necesariamente material. Pablo dice: 'Dios ama al dador alegre' y promete que Dios proveerá para que podamos seguir dando, no para que acumulemos riquezas. El contexto del NT es dar por amor, no por obligación ni por ganancia.",
    aplicacionCorrecta:
      "Da generosa y alegremente según hayas prosperado, no por obligación legal ni con expectativa de ganancia material. El diezmo del AT no es mandato para el NT, pero el principio de dar sacrificialmente y sostener la obra del Señor sí es enseñado. Da a la iglesia local, a la obra misionera y a los necesitados.",
  },
  {
    id: "romanos-8-28",
    pasaje: "Romanos 8:28",
    citas: ["Ro 8:28"],
    loQueMuchosPiensan:
      "Se usa para decir que todo lo que ocurre es bueno en sí mismo, o como un consuelo genérico: 'todo sale bien al final'. A veces se aplica a quienes aman a Dios sin considerar el resto del pasaje.",
    contextoReal:
      "La promesa es específicamente para 'los que aman a Dios' y 'son llamados según Su propósito'. No es universal. Y 'todas las cosas' incluye sufrimiento, persecución y dificultad. Dios obra incluso a través del mal para el bien de Sus elegidos. El versículo 29 explica el propósito: 'ser conformados a la imagen de Su Hijo'.",
    significadoReal:
      "Dios soberanamente obra en todas las circunstancias —incluso las malas— para el bien supremo de Su pueblo, y ese bien supremo es la conformidad a Cristo. No es que todo sea bueno, sino que Dios hace que todo obre para un buen propósito en los que son Suyos.",
    aplicacionCorrecta:
      "En el sufrimiento, no minimices el dolor diciendo 'todo es bueno'. Más bien, confía en que Dios soberanamente usa incluso el mal y el dolor para conformarte a Cristo. No es un consuelo barato sino una promesa profunda para los que están en Cristo.",
  },
  {
    id: "apocalipsis-3-20",
    pasaje: "Apocalipsis 3:20",
    citas: ["Ap 3:20"],
    loQueMuchosPiensan:
      "Se usa extensamente como versículo evangelístico: 'Jesús llama a la puerta de tu corazón, ábrele y será salvo'. Es común en campañas evangelísticas y tractos.",
    contextoReal:
      "Jesús habla a la iglesia de Laodicea, no a incrédulos. Es una carta a una iglesia que se había vuelto tibia y orgullosa. Jesús está fuera de Su propia iglesia, llamando a los miembros a arrepentirse y abrirle la puerta. El versículo es sobre restauración de comunión, no sobre conversión inicial.",
    significadoReal:
      "Jesús puede estar ausente de una iglesia que tiene forma de piedad pero niega el poder de ella. Llama a sus propios discípulos a arrepentirse y restaurar la comunión con Él. Es una advertencia a creyentes tibios, no una invitación a incrédulos.",
    aplicacionCorrecta:
      "Úsalo para examinar tu propia comunión con Cristo. ¿Eres un cristiano tibio? ¿Has dejado a Cristo fuera de tu vida diaria? Arrepiéntete y vuélvete a Él. No lo uses fuera de contexto como un versículo evangelístico, aunque el evangelio mismo sí debe ser proclamado.",
  },
  {
    id: "mateo-7-1",
    pasaje: "Mateo 7:1",
    citas: ["Mt 7:1"],
    loQueMuchosPiensan:
      "'No juzguéis' se usa para prohibir cualquier evaluación moral o doctrinal. Se convierte en un escudo contra el discernimiento: 'no puedes decir que algo es pecado porque eso es juzgar'. Es el versículo favorito de los que no quieren ser confrontados.",
    contextoReal:
      "Jesús no prohíbe todo juicio, sino el juicio hipócrita. El versículo 3-5 explica: '¿Por qué miras la paja en el ojo de tu hermano y no echas de ver la viga en el tuyo?' Jesús no dice que no saquemos la paja; dice que primero saquemos la viga. También, el v. 6 habla de discernir entre perros y cerdos, lo cual requiere juicio.",
    significadoReal:
      "Jesús condena el juicio hipócrita (juzgar en otros lo que toleramos en nosotros), no el discernimiento bíblico. Debemos juzgar con justicia (Jn 7:24), examinar las enseñanzas (1 Jn 4:1), y confrontar el pecado en amor (Gá 6:1). El problema no es juzgar sino juzgar con hipocresía.",
    aplicacionCorrecta:
      "Examínate a ti mismo primero antes de confrontar a otros. No uses este versículo para evadir la rendición de cuentas. El discernimiento bíblico es necesario, pero debe hacerse con humildad, amor y después de haberte examinado. Corrige a otros como te gustaría ser corregido.",
  },
  {
    id: "salmos-37-4",
    pasaje: "Salmos 37:4",
    citas: ["Sal 37:4"],
    loQueMuchosPiensan:
      "Se usa como una fórmula: 'Si me deleito en Dios, Él me dará todo lo que deseo'. Se convierte en una promesa de satisfacción de deseos personales, a menudo materiales o románticos.",
    contextoReal:
      "El Salmo 37 contrasta al justo con el impío. 'Deléitate en Jehová' significa encontrar tu gozo en Dios mismo, no en lo que Él puede darte. Cuando tu deleite es Dios, tus deseos se alinean con los Suyos. No es que Dios te da lo que quieres, sino que cambia lo que quieres.",
    significadoReal:
      "El deleite en Dios transforma nuestros deseos para que coincidan con Su voluntad. La promesa es que cuando Dios es nuestra satisfacción, pediremos conforme a Su corazón y Él nos concederá lo que es conforme a Su voluntad. Es una promesa de santificación de deseos, no de satisfacción de caprichos.",
    aplicacionCorrecta:
      "Busca tu gozo en Dios mismo, no en Sus beneficios. Cuando te deleitas en Él, tus deseos cambian. Pídele que purifique tus anhelos para que desees lo que Él desea. No lo uses para reclamar cosas materiales, sino para buscar contentamiento en Dios.",
  },
];

export default versiculosMalInterpretados;
