export interface TemaLeccion {
  id: string;
  title: string;
  icon: string;
  simple: string;
  fondo: string;
  aplicacion: string;
  errores: string;
}

export interface NivelEscuela {
  id: string;
  nivel: number;
  title: string;
  subtitle: string;
  descripcion: string;
  temas: TemaLeccion[];
}

const escuelaData: NivelEscuela[] = [
  {
    id: "fundamentos",
    nivel: 1,
    title: "Fundamentos",
    subtitle: "Las verdades esenciales de la fe cristiana",
    descripcion:
      "Si empiezas desde cero, este es tu lugar. Aquí aprenderás las verdades más básicas y fundamentales de la fe cristiana, explicadas con claridad, ejemplos cotidianos y aplicación pastoral. No necesitas conocimiento previo.",
    temas: [
      {
        id: "que-es-la-biblia",
        title: "¿Qué es la Biblia?",
        icon: "📖",
        simple:
          "La Biblia es la Palabra de Dios escrita. Es el libro donde Dios habla a los seres humanos. No es un libro cualquiera: fue inspirada por Dios mismo, lo que significa que cada palabra fue guiada por Él para enseñarnos quién es, qué ha hecho y cómo debemos vivir.",
        fondo:
          "La Biblia es la revelación especial de Dios. La iglesia siempre ha creído que la Escritura es inspirada verbal y plenariamente (2 Ti 3:16-17), inerrante en sus manuscritos originales, y suficiente para toda fe y práctica. No necesita ser aumentada por tradiciones humanas, revelaciones privadas o experiencias subjetivas. La Reforma recuperó esta verdad bajo el principio de *Sola Scriptura*: la Escritura es la autoridad máxima y final para el creyente y la iglesia.",
        aplicacion:
          "Lee tu Biblia diariamente con la confianza de que Dios te habla a través de ella. Antes de leer, ora pidiendo entendimiento. No la leas solo por cumplir, sino buscando conocer a Cristo, porque toda la Escritura apunta a Él (Jn 5:39). Memoriza pasajes clave. Cuando tengas una duda sobre qué creer o cómo vivir, acude primero a la Biblia, no a tu opinión ni a la de otros.",
        errores:
          "Algunos creen que la Biblia es solo un libro religioso escrito por hombres, pero la fe cristiana confiesa que fue divinamente inspirada. Otros añaden tradiciones humanas o revelaciones privadas al mismo nivel de autoridad. También está el error de leer la Biblia como un manual de reglas sin entender su mensaje central: Cristo y la redención.",
      },
      {
        id: "quien-es-dios",
        title: "¿Quién es Dios?",
        icon: "👑",
        simple:
          "Dios es el Creador y Soberano de todo lo que existe. No es un ser creado ni imaginado por los hombres. Él existe eternamente en tres Personas: Padre, Hijo y Espíritu Santo. Es santo, justo, amoroso, misericordioso, todopoderoso, omnisciente y soberano sobre todas las cosas.",
        fondo:
          "Dios se ha revelado a Sí mismo en Su Palabra como el Dios trino: un solo Dios en tres Personas distintas, coeternas y coiguales (Mt 28:19; 2 Co 13:14). Es infinito en todos Sus atributos: Su santidad significa que está completamente separado del pecado y moralmente perfecto (Is 6:3). Su soberanía significa que todo lo que ocurre está bajo Su control perfecto (Ef 1:11). Su amor no es un sentimentalismo barato, sino un amor santo y sacrificial que proveyó a Su Hijo para salvar a pecadores (1 Jn 4:9-10). Su justicia demanda que el pecado sea castigado, y Su misericordia provee el castigo en Cristo.",
        aplicacion:
          "Conocer a Dios correctamente cambia cómo vives. Si sabes que Él es santo, vivirás en reverencia. Si sabes que es soberano, confiarás en medio de la dificultad. Si sabes que es amoroso, no temerás acercarte a Él. Dedica tiempo a estudiar Sus atributos en la Escritura. Adóralo por quién es, no solo por lo que hace.",
        errores:
          "Algunos imaginan a Dios como un anciano distante, neutral e indiferente. Otros lo ven como un 'tierno abuelito' que nunca juzga. Muchos niegan la Trinidad, diciendo que Jesús es un ser creado o que el Espíritu Santo es solo una fuerza. Otros creen que Dios solo ama y no juzga, ignorando Su santidad y justicia.",
      },
      {
        id: "quien-es-jesus",
        title: "¿Quién es Jesús?",
        icon: "✝️",
        simple:
          "Jesús es el Hijo de Dios, la segunda Persona de la Trinidad. Él es Dios hecho hombre. Nació de una virgen, vivió una vida perfecta sin pecado, murió en la cruz para pagar por los pecados de Su pueblo, resucitó al tercer día, ascendió al cielo, y un día volverá para juzgar a vivos y muertos.",
        fondo:
          "Jesucristo es verdadero Dios y verdadero hombre (unión hipostática). Como Dios, siempre existió (Jn 1:1). Como hombre, nació, creció, sintió hambre, cansancio y dolor. Su vida perfecta cumplió toda justicia, calificándolo como el Cordero sin mancha. Su muerte fue sacrificial y sustitutoria: Él llevó el castigo que merecían los pecadores (Is 53:5-6; 2 Co 5:21). Su resurrección confirmó que Su obra fue aceptada por el Padre (Ro 1:4; 4:25). Ahora reina a la diestra del Padre e intercede por Su pueblo. Volverá en gloria para establecer Su reino en plenitud.",
        aplicacion:
          "Jesús no es solo un maestro moral o un ejemplo a seguir. Él es tu Salvador y tu Señor. No puedes recibirlo como Salvador si no te rindes a Él como Señor. Confiesa tus pecados, confía en Su obra consumada, y síguelo en obediencia. La vida cristiana no es 'imitar a Jesús' por tus fuerzas, sino vivir por el poder de Cristo en ti (Gá 2:20).",
        errores:
          "Algunos dicen que Jesús fue solo un profeta o un buen maestro. Otros enseñan que fue un ser creado (testigos de Jehová). Otros niegan Su deidad, Su resurrección física, o que Su muerte fue suficiente para salvar completamente. También está el error de separar a Jesús de Su enseñanza: querer a Jesús como Salvador sin obedecerle como Señor.",
      },
      {
        id: "que-es-el-pecado",
        title: "¿Qué es el pecado?",
        icon: "⚖️",
        simple:
          "El pecado es cualquier pensamiento, palabra o acción que desobedece la ley de Dios. Es rebelión contra Dios. Todos hemos pecado y merecemos el castigo de Dios. El pecado no es solo 'hacer cosas malas', sino una naturaleza corrupta que heredamos de Adán que nos hace inclinarnos naturalmente al mal.",
        fondo:
          "La doctrina del pecado es esencial para entender el evangelio. El pecado original (Ro 5:12-21) significa que todos nacemos con una naturaleza caída, heredada de Adán. La depravación total no significa que seamos tan malos como podríamos ser, sino que el pecado afecta cada parte de nuestro ser: mente, voluntad, emociones. El hombre natural está muerto en delitos y pecados (Ef 2:1-3), es esclavo del pecado (Jn 8:34), y no puede ni quiere venir a Dios por sí mismo (Ro 3:10-18). El pecado no es meramente un mal hábito o una falta de educación; es una rebelión contra un Dios santo que merece castigo eterno.",
        aplicacion:
          "Reconoce que tu mayor problema no está fuera de ti, sino dentro de ti. No minimices el pecado llamándolo 'error', 'equivocación' o 'debilidad'. El pecado es serio porque Dios es santo. Confiésalo específicamente. Pero no te desesperes: donde abundó el pecado, sobreabundó la gracia (Ro 5:20). La solución al pecado no es esforzarte más, sino correr a Cristo.",
        errores:
          "El mayor error es negar la gravedad del pecado. Algunos dicen que el ser humano es intrínsecamente bueno y que el pecado es solo falta de educación o entorno malo. Otros enseñan que el cristiano puede vivir sin pecado en esta vida (perfeccionismo). El pelagianismo niega el pecado original; el arminianismo lo minimiza al decir que el hombre tiene libre albedrío para elegir a Dios por sí mismo.",
      },
      {
        id: "que-es-el-evangelio",
        title: "¿Qué es el Evangelio?",
        icon: "🕊️",
        simple:
          "Evangelio significa 'buenas noticias'. No son buenos consejos ni reglas para mejorar tu vida. Es la noticia de que Dios, en Su amor, envió a Su Hijo Jesús para vivir perfectamente, morir por pecadores y resucitar, para que todo el que se arrepienta y confíe en Él sea salvo del castigo del pecado y tenga vida eterna.",
        fondo:
          "El evangelio no es 'Dios te ama y tiene un plan maravilloso para tu vida' como una promesa de prosperidad terrenal. El evangelio es: eres pecador, mereces el infierno, pero Cristo vivió, murió y resucitó en lugar de los Suyos. La salvación es por gracia mediante la fe, no por obras (Ef 2:8-9). El evangelio tiene dos partes: quiénes somos (pecadores merecedores de condenación) y quién es Cristo (Salvador suficiente). Sin la primera parte, la segunda no es buena noticia. El evangelio no es un 'tú decides' sino un 'Cristo logró'. No es una invitación, sino una proclamación de lo que Dios ya hizo en Cristo.",
        aplicacion:
          "Predícate el evangelio a ti mismo cada día. No es solo para no cristianos: cada día necesitas recordar que tu aceptación delante de Dios no depende de tu desempeño, sino de la obra de Cristo. Cuando peques, no huyas de Dios, corre a Cristo. Cuando estés orgulloso, recuerda que eres un pecador salvo por gracia. Cuando estés desanimado, recuerda que Cristo ya pagó todo.",
        errores:
          "El mayor error es convertir el evangelio en una lista de reglas (legalismo) o en una aceptación sin arrepentimiento (antinomianismo). Otro error es presentar el evangelio como 'Dios te ayudará a cumplir tus sueños'. También está el error de decir que la salvación es por fe + obras. El evangelio no es 'haz tu mejor esfuerzo y Dios hará el resto', sino 'Cristo lo hizo todo, confía en Él'.",
      },
      {
        id: "que-es-ser-salvo",
        title: "¿Qué significa ser salvo?",
        icon: "🔥",
        simple:
          "Ser salvo significa ser rescatado del castigo del pecado (el infierno) y ser reconciliado con Dios. No es simplemente 'ir al cielo cuando mueras', aunque eso es parte. Es pasar de estar muerto en pecado a estar vivo en Cristo, de ser enemigo de Dios a ser hijo adoptado, de estar bajo condenación a estar libre de toda acusación.",
        fondo:
          "La salvación es una obra soberana de Dios de principio a fin, desde la elección eterna hasta la glorificación final (Ro 8:29-30). Incluye: regeneración (ser nacido de nuevo por el Espíritu Santo), fe y arrepentimiento (respuesta humana habilitada por Dios), justificación (ser declarado justo por la imputación de la justicia de Cristo), adopción (ser recibido como hijo en la familia de Dios), santificación (ser transformado progresivamente a la imagen de Cristo), y perseverancia (ser preservado por Dios hasta el fin). La salvación no es un evento del pasado que se pierde, sino una obra continua de Dios que asegura la perseverancia final del creyente.",
        aplicacion:
          "Si has confiado en Cristo, tienes salvación segura y eterna. No porque tú seas fiel, sino porque Dios es fiel. Vive con la seguridad de que nada te separará del amor de Dios (Ro 8:38-39). Pero esa seguridad no es excusa para pecar, sino motivación para vivir en gratitud y obediencia. Si dudas de tu salvación, examina tus frutos: ¿amas a Cristo? ¿odias el pecado? ¿deseas obedecer?",
        errores:
          "Algunos creen que la salvación se pierde si pecan, negando la perseverancia de los santos. Otros creen que pueden salvarse por ser 'buenas personas' o por religiosidad. Algunos enseñan que todos serán salvos al final (universalismo). También está el error de decir 'una vez salvo, siempre salvo' como excusa para vivir en pecado, sin entender que la fe verdadera produce frutos.",
      },
      {
        id: "que-es-la-fe",
        title: "¿Qué es la fe?",
        icon: "🕯️",
        simple:
          "La fe no es un sentimiento ni un salto al vacío. Es confiar en Dios y en Su Palabra basándose en lo que Él ha revelado. Es estar seguro de lo que se espera y convencido de lo que no se ve (He 11:1). La fe salvadora no es solo creer que Dios existe, sino confiar personalmente en Cristo para salvación.",
        fondo:
          "La fe salvadora tiene tres elementos: *notitia* (conocimiento de la verdad del evangelio), *assensus* (convicción de que esa verdad es cierta), y *fiducia* (confianza personal en Cristo solo para salvación). La fe no es una obra que merezca salvación; es el instrumento por el cual recibimos la gracia de Dios. Es un don de Dios (Ef 2:8-9), no una capacidad humana natural. Por naturaleza, el hombre no quiere ni puede creer (1 Co 2:14); la fe es obra del Espíritu Santo en la regeneración. La fe verdadera siempre produce obras, no como base de la salvación, sino como evidencia de que es genuina (Stg 2:14-26).",
        aplicacion:
          "No confíes en la intensidad de tu fe, sino en el objeto de tu fe: Cristo. Una fe débil en un Salvador fuerte salva; una fe fuerte en un Salvador débil no salva. Cuando dudes, no te enfoques en tu duda, sino en las promesas de Dios. Lee la Palabra, porque la fe viene por el oír la Palabra de Dios (Ro 10:17). Pide a Dios que aumente tu fe.",
        errores:
          "Algunos confunden la fe con un sentimiento o con 'pensar positivo'. Otros creen que la fe es un acto humano que Dios debe recompensar, como si fuera una obra meritoria. También está el error de separar la fe de la obediencia: la fe salvadora siempre es una fe que obra por amor (Gá 5:6). La fe no es solo decir 'creo' sino confiar y seguir.",
      },
      {
        id: "por-que-murio-cristo",
        title: "¿Por qué murió Cristo?",
        icon: "🩸",
        simple:
          "Cristo murió para pagar por los pecados de Su pueblo. Él llevó el castigo que nosotros merecíamos. Murió no como un mártir ni como un ejemplo de amor, sino como un sustituto: Él ocupó nuestro lugar, recibió la ira de Dios que nosotros merecíamos, y satisfizo la justicia divina.",
        fondo:
          "La muerte de Cristo fue sustitutoria (Él murió *en lugar de* los pecadores), vicaria (Él cargó lo que nosotros debíamos cargar), y propiciatoria (Él apaciguó la ira de Dios al satisfacer Su justicia). La Biblia enseña la expiación penal sustitutoria: Cristo fue hecho maldición por nosotros (Gá 3:13), llevó nuestros pecados en Su cuerpo (1 P 2:24), y por Su herida fuimos curados (Is 53:5). Su muerte no hizo la salvación meramente *posible*, sino que realmente *aseguró* la salvación de aquellos por quienes murió (Jn 10:11, 15, 28; Ef 5:25). Esto se conoce como expiación limitada o redención particular: Cristo murió efectivamente por Su iglesia, no hipotéticamente por todos sin distinción.",
        aplicacion:
          "La cruz no es solo un símbolo religioso. Es el lugar donde tu condenación fue pagada. Cuando el pecado te acuse, mira a la cruz y recuerda que ya no hay condenación para los que están en Cristo Jesús (Ro 8:1). La cruz también es tu modelo: estás llamado a tomar tu cruz y seguir a Cristo, negándote a ti mismo. La gracia que recibiste en la cruz debe hacerte humilde y agradecido.",
        errores:
          "Algunos enseñan que Cristo murió por todos sin excepción, pero no todos se salvan (universalismo hipotético o arminianismo). Otros niegan que la muerte de Cristo fue un pago por el pecado, diciendo que fue solo un ejemplo de amor (Socinianismo). Otros enseñan que la expiación fue limitada solo en su aplicación, no en su diseño. También está el error de la teoría del rescate a Satanás.",
      },
      {
        id: "que-es-arrepentimiento",
        title: "¿Qué es el arrepentimiento?",
        icon: "💔",
        simple:
          "Arrepentimiento no es solo sentir tristeza por haber pecado. Es un cambio de mente y de corazón que lleva a cambiar de dirección. Es apartarse del pecado y volverse a Dios. No es simplemente 'pedir perdón', sino abandonar el pecado y correr hacia Cristo.",
        fondo:
          "El arrepentimiento es un don de Dios (Hch 11:18; 2 Ti 2:25) que obra en el creyente junto con la fe. No es una obra que anteceda a la gracia, sino parte de la misma obra de gracia. El arrepentimiento genuino incluye: convicción de pecado (darse cuenta de la ofensa contra Dios), contrición (tristeza según Dios, 2 Co 7:10), confesión (nombrar el pecado específicamente), y conversión (abandonar activamente el pecado y buscar la justicia). No es un evento único, sino una actitud continua en la vida del creyente. El arrepentimiento no es 'propósito de enmienda' por fuerzas propias, sino un volverse a Dios confiando en Su gracia.",
        aplicacion:
          "Examina tu vida regularmente. ¿Hay pecados que toleras? ¿Áreas que no has rendido a Dios? El arrepentimiento no es una vez al año, sino el aire que respira el cristiano: cada día reconoces tu pecado y corres a Cristo. No te arrepientas solo por miedo al castigo, sino porque has ofendido a un Dios santo y amoroso. El verdadero arrepentimiento trae frutos: restitución, cambios concretos, odio al pecado.",
        errores:
          "Algunos enseñan que el arrepentimiento no es necesario para la salvación, solo 'creer' (easy-believism). Otros lo confunden con prometer no pecar más por fuerzas propias. También está el error del 'arrepentimiento' meramente emocional: llorar sin cambiar. El legalismo enseña que hay que arrepentirse para ser aceptado; el evangelio enseña que nos arrepentimos porque ya somos aceptados en Cristo.",
      },
    ],
  },
];

export default escuelaData;
