export interface TemaLeccion {
  id: string;
  title: string;
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

        simple:
          "La Biblia es la Palabra de Dios escrita. Es el libro donde Dios habla a Su pueblo. No es un libro cualquiera: fue inspirada por Dios mismo, lo que significa que cada palabra fue guiada por Él para enseñarnos quién es, qué ha hecho y cómo debemos vivir.",
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
  {
    id: "leer-la-biblia",
    nivel: 2,
    title: "Aprender a Leer la Biblia",
    subtitle: "Cómo interpretar correctamente la Escritura",
    descripcion:
      "Muchos errores doctrinales nacen de leer mal la Biblia. Este nivel te enseña a interpretar correctamente: entender el contexto, distinguir entre descripción y mandato, dejar que la Escritura se interprete a sí misma, y evitar las trampas hermenéuticas más comunes. Aquí es donde el crecimiento real comienza.",
    temas: [
      {
        id: "que-es-contexto",
        title: "¿Qué es el contexto y por qué importa?",
        simple:
          "Contexto es todo lo que rodea a un versículo: quién lo escribió, a quién, por qué, en qué situación, y qué dice antes y después. Sacar un versículo de su contexto es como tomar una frase suelta de una carta sin saber de qué habla la carta entera. El contexto es la regla más básica de la interpretación bíblica.",
        fondo:
          "El principio reformado de la *Scriptura sui ipsius interpres* (la Escritura se interpreta a sí misma) requiere que ningún pasaje se interprete aisladamente. Hay tres niveles de contexto: inmediato (versículos alrededor del pasaje), literario (el libro completo y su género), e histórico (circunstancias del autor y la audiencia original). Ignorar el contexto es la puerta de entrada a casi todas las herejías. Como dice el proverbio: 'Un texto fuera de contexto es un pretexto para el error'.",
        aplicacion:
          "Antes de interpretar un versículo, lee todo el capítulo. Pregunta: ¿Quién habla? ¿A quién? ¿Por qué? ¿Qué dice el pasaje completo? No construyas una doctrina sobre un solo versículo aislado. Usa una Biblia de estudio y mira las referencias cruzadas. Si una interpretación contradice el resto de la Escritura, está mal.",
        errores:
          "El error más común es citar versículos sueltos sin considerar su contexto, como usar Jeremías 29:11 ('planes de bien') fuera de su contexto de exilio, o Filipenses 4:13 ('todo lo puedo') sin el 'en Cristo que me fortalece'. Otros ignoran el género literario: leer poesía como si fuera ley, o profecía como si fuera historia.",
      },
      {
        id: "como-leer-capitulo",
        title: "Cómo leer un capítulo bíblico",

        simple:
          "Un capítulo bíblico no es una colección de versículos sueltos, sino una unidad de pensamiento. Para entenderlo bien, léelo completo de una vez, identifica el tema principal, nota las conexiones entre versículos, y pregúntate qué enseña sobre Dios, el hombre y la salvación.",
        fondo:
          "Los capítulos y versículos son divisiones posteriores (el NT fue dividido en versículos en el siglo XVI), no inspiradas. Por eso es crucial leer párrafos enteros, no versículos sueltos. Cada pasaje tiene una estructura: problema-solución, promesa-exhortación, doctrina-aplicación. Para leer bien: 1) lee el pasaje completo, 2) identifica el género (narrativa, poesía, epístola, profecía), 3) busca el argumento del autor, 4) pregúntate cómo este pasaje apunta a Cristo (Lc 24:27).",
        aplicacion:
          "Cuando leas un capítulo, no te detengas en medio. Léelo de corrido. Luego vuelve y subraya las ideas principales. Pregunta: ¿Qué aprendo de Dios? ¿Qué aprendo de mí? ¿Hay un mandato a obedecer? ¿Una promesa que creer? ¿Un pecado que evitar? ¿Cristo está presente aquí?",
        errores:
          "Muchos leen la Biblia en 'devocionales' de un versículo al día, sin conexión con el pasaje completo, y terminan con interpretaciones fragmentadas. Otros leen buscando solo lo que 'les habla' personalmente en lugar de buscar lo que el autor quiso decir. También está el error de leer todo como si fuera un manual de instrucciones, ignorando que la Biblia es principalmente historia de redención.",
      },
      {
        id: "como-interpretar-versiculo",
        title: "Cómo interpretar un versículo correctamente",
        simple:
          "Para interpretar un versículo correctamente: 1) léelo en su pasaje completo, 2) considera quién lo escribió y a quién, 3) mira cómo se usa en el resto de la Escritura, 4) busca el significado claro y natural, y 5) aplica el principio de que la Escritura no se contradice a sí misma.",
        fondo:
          "La interpretación bíblica fiel sigue el método histórico-gramatical: buscar el significado que el autor quiso comunicar a su audiencia original, usando las reglas normales del lenguaje y la gramática. Esto se opone al método alegórico (buscar significados ocultos) y al existencial (lo que significa 'para mí'). El significado de un texto es uno (lo que el autor quiso decir), aunque la aplicación puede ser múltiple. El sentido literal es el sentido natural, considerando figuras retóricas, símiles y metáforas como lo que son.",
        aplicacion:
          "Antes de preguntar '¿qué significa esto para mí?', pregúntate '¿qué quiso decir el autor?' Usa una buena traducción (no paráfrasis) y compárala con otra. Si un versículo te parece confuso, busca en qué otros pasajes se habla del mismo tema. La Escritura aclara a la Escritura.",
        errores:
          "El error más común es la interpretación alegórica: buscar significados espirituales ocultos donde no los hay. Otro error es la interpretación subjetiva: 'Dios me dijo' o 'esto significa para mí' sin base en el texto. También está el error de ignorar el género literario: leer una parábola como si fuera historia literal, o un salmo como si fuera doctrina sistemática.",
      },
      {
        id: "analogia-de-la-fe",
        title: "La Biblia se interpreta a sí misma",
        simple:
          "Este principio significa que ningún pasaje de la Biblia debe interpretarse de manera que contradiga a otro pasaje. La Escritura es coherente porque tiene un solo Autor: Dios. Cuando un pasaje es difícil de entender, debemos buscar luz en otros pasajes más claros que hablen del mismo tema.",
        fondo:
          "La *Analogía de la Fe* (o *Analogía Scripturae*) es el principio reformado de que la Escritura es su propio intérprete. Esto se basa en la unidad y coherencia de la Biblia por su origen divino. Los pasajes claros iluminan a los oscuros; los didácticos (enseñanza directa) interpretan a los narrativos; el NT interpreta y cumple el AT. Por ejemplo: cómo entender el bautismo en el AT debe ser interpretado a la luz del NT. Este principio evita que construyamos doctrinas sobre pasajes aislados o difíciles.",
        aplicacion:
          "Cuando leas un pasaje difícil, busca lo que otros pasajes más claros enseñan sobre el mismo tema. Usa referencias cruzadas. Por ejemplo, si lees Santiago 2:24 ('justificado por obras'), compáralo con Romanos 3:28 ('justificado por fe'). No se contradicen, sino que se complementan: Pablo habla de la base de la justificación, Santiago de la evidencia. No construyas una doctrina completa a partir de un solo pasaje.",
        errores:
          "El error más común es aislar versículos para probar una doctrina ignorando lo que el resto de la Escritura enseña. También está el error de dar más peso a la experiencia personal, tradición o razón humana que a la Escritura misma. Otro error es forzar un pasaje para que encaje con nuestras ideas preconcebidas en lugar de dejar que la Escritura nos corrija.",
      },
      {
        id: "descripcion-vs-mandato",
        title: "Descripción vs Mandato",
        simple:
          "No todo lo que la Biblia *describe* es algo que la Biblia *manda*. La Biblia registra muchas cosas: pecados, errores, malas decisiones, pero no todas son ejemplos a seguir. Debemos distinguir entre lo que la Biblia prescribe (ordena) y lo que meramente describe (registra).",
        fondo:
          "Este es un principio hermenéutico fundamental: la Biblia contiene tanto prescripciones (mandatos, enseñanzas directas) como descripciones (narrativas históricas, registros de lo que personas hicieron). Las narrativas del AT, por ejemplo, registran fielmente los hechos sin necesariamente aprobarlos. David tuvo múltiples esposas, pero eso no significa que Dios lo apruebe. La iglesia primitiva compartía sus bienes (Hch 2:44-45), pero no es un mandato para todas las iglesias. Cómo distinguir: si un acto es prescrito o aprobado explícitamente en la enseñanza directa de la Escritura, es normativo. Si solo es registrado, debemos buscar enseñanza explícita antes de hacerlo norma.",
        aplicacion:
          "Cuando leas una narrativa bíblica, pregúntate: ¿Esto es algo que Dios manda o algo que la Biblia simplemente registra? No asumas que porque algo pasó en la Biblia, debe pasar en tu vida. Por ejemplo: Hechos 2 registra el don de lenguas en Pentecostés, pero no todo cristiano debe hablar en lenguas. Busca la enseñanza didáctica (epístolas) para entender cómo aplicar las narrativas.",
        errores:
          "Hay dos errores opuestos: 1) tomar toda descripción como mandato (ej: 'los apóstoles echaron suertes, así que nosotros también debemos'), y 2) ignorar las narrativas como si no tuvieran valor doctrinal (son 'para nuestra enseñanza', Ro 15:4). Otro error es imponer prácticas culturales del siglo I como si fueran mandatos transculturales, sin considerar el contexto.",
      },
      {
        id: "como-evitar-falsas-doctrinas",
        title: "Cómo evitar falsas doctrinas",
        simple:
          "La mejor defensa contra el error es conocer bien la verdad. Cuando conoces la sana doctrina, reconoces la falsa con más facilidad. También necesitas: 1) estar firmemente arraigado en la Escritura, 2) conocer la historia de la iglesia para no repetir errores pasados, 3) estar en comunidad con creyentes maduros, y 4) examinarlo todo a la luz de la Palabra.",
        fondo:
          "Las falsas doctrinas no suelen llegar como herejías obvias, sino como 'pequeños desvíos' que gradualmente alejan de la verdad (2 Ti 4:3-4). Se caracterizan por: exaltar la experiencia sobre la Escritura, añadir requisitos humanos a la salvación, negar aspectos centrales del evangelio, o desviar el enfoque de Cristo a otra cosa. El antídoto no es solo saber lo que es falso, sino estar saturado de la verdad. Los bereanos son nuestro modelo: recibían la palabra con toda solicitud, escudriñando las Escrituras diariamente para verificar si lo que oían era correcto (Hch 17:11). La sana doctrina no es opcional; Pablo mandó a Timoteo que 'retuviera la forma de las sanas palabras' (2 Ti 1:13).",
        aplicacion:
          "Examina todo lo que oyes y lees a la luz de la Escritura, no de tus emociones. Sospecha de enseñanzas que: 1) prometen prosperidad terrenal, 2) enfatizan experiencias sobre la Palabra, 3) añaden requisitos humanos a la salvación, 4) niegan la soberanía de Dios, o 5) minimizan el pecado o la santidad. Conéctate con una iglesia local fiel donde se predique la sana doctrina.",
        errores:
          "Algunos caen en el error opuesto: volverse tan escépticos que ven herejía en todo y se aíslan. Otros, confiados en su propio entendimiento, piensan que no pueden ser engañados (1 Co 10:12). También está el error de depender exclusivamente de líderes o maestros sin examinar por uno mismo las Escrituras.",
      },
      {
        id: "metodo-correcto",
        title: "Método correcto vs incorrecto",
        simple:
          "El método incorrecto comienza con un versículo aislado, le añade una opinión personal y construye una doctrina. El método correcto comienza con el texto en su contexto, considera el autor, la audiencia y toda la Escritura, y luego aplica correctamente. La diferencia es entre interpretar la Biblia o imponer nuestras ideas en ella.",
        fondo:
          "El método incorrecto (eiségesis) consiste en leer nuestras ideas *dentro* del texto. El método correcto (exégesis) consiste en extraer *del* texto lo que el autor quiso decir. El proceso correcto es: texto → contexto histórico → género literario → argumento del autor → comparación con otras Escrituras → principio teológico → aplicación. El proceso incorrecto es: idea preconcebida → búsqueda de versículos de apoyo → interpretación forzada → doctrina distorsionada. La Reforma Protestante recuperó la exégesis histórica-gramatical sobre la alegoría medieval.",
        aplicacion:
          "Cada vez que leas la Biblia, pregúntate: '¿Estoy dejando que el texto me hable o estoy buscando versículos que apoyen lo que ya pienso?' Sé honesto. Si la Biblia contradice tu opinión, cambia tu opinión, no ignores la Biblia. Usa herramientas como concordancias, comentarios confiables y Biblias de estudio. Estudia en comunidad, no en aislamiento.",
        errores:
          "El error más común es la eiségesis: encontrar en la Biblia lo que ya decidiste creer. Otro error es el 'proof-texting' (usar versículos sueltos como prueba) sin considerar el contexto. También está el error de espiritualizar todo: convertir pasajes históricos en alegorías (como Orígenes y la escuela alejandrina). El orgullo intelectual también es un peligro: estudiar para 'saber más' en lugar de para conocer más a Dios.",
      },
    ],
  },
  {
    id: "doctrinas-fundamentales",
    nivel: 3,
    title: "Doctrinas Fundamentales",
    subtitle: "Conectando cada doctrina con toda la Escritura",
    descripcion:
      "Aquí las doctrinas se conectan entre sí y con toda la Escritura, desde Génesis hasta Apocalipsis. Cada tema está organizado siguiendo el orden pedagógico de la teología sistemática, mostrando cómo cada doctrina fluye de la anterior y apunta a Cristo.",
    temas: [
      {
        id: "doctrina-de-la-escritura",
        title: "Doctrina de la Escritura",
        simple:
          "La Biblia es la Palabra de Dios escrita. Es inspirada por Dios, inerrante en sus originales, suficiente para toda fe y práctica, clara en lo que enseña para la salvación, y ha sido preservada por Dios para Su iglesia. Es la autoridad máxima y final para todo lo que creemos y hacemos.",
        fondo:
          "La bibliología reformada confiesa que la Escritura es inspirada verbal y plenariamente (2 Ti 3:16-17; 2 P 1:20-21). Esto significa que cada palabra fue guiada por el Espíritu Santo, no solo las ideas. Es inerrante: no contiene error en sus manuscritos originales porque es Palabra de Dios. Es suficiente: no necesita ser aumentada por tradiciones, revelaciones privadas o experiencias (Ap 22:18-19). Es clara (*perspicuidad*): lo esencial para la salvación está al alcance de todo creyente. Es autoritativa: la última palabra en toda controversia. Dios la ha preservado milagrosamente a través de la historia. Desde el AT (Sal 19:7-11; 119) hasta el NT (Mt 5:17-18; Jn 10:35), la Escritura reclama ser divina. Los reformados confesamos *Sola Scriptura*: la Escritura sola es nuestra regla de fe y práctica, no porque no usemos credenciales o confesiones, sino porque ninguna autoridad humana iguala a la Palabra de Dios.",
        aplicacion:
          "La suficiencia de la Escritura significa que no necesitas revelaciones extra para conocer a Dios. Si quieres saber cómo ser salvo, cómo adorar, cómo vivir, la Biblia es suficiente. No busques palabras proféticas, sueños o experiencias como autoridad. Cuando enfrentes decisiones, acude a la Escritura primero. Ama la Palabra, medita en ella de día y de noche.",
        errores:
          "La Iglesia Católica añade la tradición al mismo nivel de autoridad que la Escritura. Los carismáticos extremos añaden revelaciones privadas y profecías. Los liberales niegan la inspiración e inerrancia, viendo la Biblia como un libro humano. Otros afirman la inspiración pero niegan la suficiencia, buscando 'palabra directa de Dios' fuera de la Escritura.",
      },
      {
        id: "doctrina-de-dios",
        title: "Doctrina de Dios",
        simple:
          "Dios es el Creador, Sustentador y Soberano de todo. Existe eternamente en tres Personas: Padre, Hijo y Espíritu Santo. Es infinito en todos Sus atributos: santo, justo, amoroso, misericordioso, sabio, todopoderoso, omnisciente, omnipresente, inmutable y soberano sobre todas las cosas.",
        fondo:
          "La doctrina de Dios comienza en Génesis 1:1: 'En el principio, Dios'. La Escritura revela a un Dios que es Espíritu (Jn 4:24), eterno (Sal 90:2), inmutable (Mal 3:6; Stg 1:17), omnipotente (Gn 18:14), omnisciente (Sal 139:1-6), omnipresente (Sal 139:7-12), santo (Is 6:3; Ap 4:8), justo (Dt 32:4), amoroso (1 Jn 4:8), misericordioso (Ef 2:4-5), soberano (Ef 1:11). Es trino: un solo Dios en tres Personas distintas, coeternas y coiguales. El AT apunta a esto (Gn 1:26; Is 48:16; Sal 110:1) y el NT lo revela explícitamente (Mt 3:16-17; 28:19; 2 Co 13:14). La soberanía de Dios significa que Él obra todas las cosas según el consejo de Su voluntad (Ef 1:11), y nada ocurre fuera de Su control (Pr 16:33; Dn 4:34-35). Su santidad es Su atributo central: está separado del pecado y moralmente perfecto.",
        aplicacion:
          "Tu concepto de Dios determina tu vida espiritual. Un Dios pequeño produce una fe pequeña. Un Dios soberano produce confianza en medio de la tormenta. Un Dios santo produce reverencia y temor de ofenderlo. Un Dios amoroso produce seguridad y gratitud. Estudia Sus atributos en la Escritura. Adóralo por quién es, no solo por lo que hace. Ora a Él como Padre, en el nombre del Hijo, por el poder del Espíritu.",
        errores:
          "Muchos imaginan a Dios a su propia imagen: un anciano distante, un 'tierno abuelito' que nunca juzga. Otros niegan o distorsionan la Trinidad (testigos de Jehová, mormones, unitarios, modalistas). El deísmo niega la providencia y soberanía continuas de Dios. El teísmo abierto niega que Dios conozca el futuro. El proceso teísmo niega Su inmutabilidad.",
      },
      {
        id: "doctrina-del-hombre",
        title: "Doctrina del Hombre",
        simple:
          "El ser humano fue creado por Dios a Su imagen, bueno y sin pecado. Pero Adán cayó en pecado, y con él toda la humanidad. Ahora todos nacemos con una naturaleza corrupta, inclinados al mal, separados de Dios, y necesitados de redención. El hombre no es básicamente bueno; está muerto en pecado.",
        fondo:
          "La antropología bíblica comienza con la creación del hombre a imagen de Dios (Gn 1:26-28). Esto significa que los seres humanos tienen dignidad, racionalidad, moralidad y capacidad de relacionarse con Dios. Pero la caída (Gn 3) trajo el pecado original (Ro 5:12-21): todos los descendientes de Adán nacen con una naturaleza caída y culpables delante de Dios. La depravación total (Ef 2:1-3; Ro 3:10-18) significa que el pecado afecta cada parte de nuestro ser: intelecto (2 Co 4:4), voluntad (Jn 6:44), emociones (Jer 17:9). El hombre natural no puede ni quiere venir a Dios. Sin embargo, la imagen de Dios no fue totalmente destruida (Stg 3:9) sino distorsionada. La solución no es reforma moral sino regeneración: un nuevo nacimiento por el Espíritu Santo.",
        aplicacion:
          "No minimices la gravedad del pecado en ti ni en otros. No confíes en la bondad natural humana. Reconoce que tu mayor problema no es tu entorno, tus circunstancias o tus traumas, sino tu corazón pecaminoso. Pero no te desesperes: donde abundó el pecado, sobreabundó la gracia. La imagen de Dios en el hombre también significa que toda persona merece dignidad y respeto, independientemente de su pecado.",
        errores:
          "El pelagianismo niega el pecado original y afirma que el hombre puede no pecar. El humanismo secular cree en la bondad innata del hombre. El marxismo y otras ideologías ven el mal como resultado de estructuras sociales, no del corazón. El perfeccionismo enseña que el cristiano puede alcanzar la ausencia de pecado en esta vida.",
      },
      {
        id: "doctrina-de-cristo",
        title: "Doctrina de Cristo",
        simple:
          "Jesucristo es el Hijo de Dios, verdadero Dios y verdadero hombre. Fue prometido desde el AT, nació de una virgen, vivió perfectamente, murió como sustituto por los pecados de Su pueblo, resucitó físicamente, ascendió al cielo, y reina como Señor. Él es el centro de toda la Escritura y el único mediador entre Dios y los hombres.",
        fondo:
          "La cristología recorre toda la Escritura: desde la primera promesa (Gn 3:15), pasando por los sacrificios (Lv), el pacto davídico (2 S 7), los profetas (Is 7:14; 9:6-7; 53; Mi 5:2; Zac 9:9; Mal 3:1), hasta los evangelios y epístolas. Cristo es verdadero Dios (Jn 1:1; Col 2:9; He 1:8) y verdadero hombre (Lc 2:52; Jn 4:6; 19:28; He 2:14-17). La unión hipostática significa que Sus dos naturalezas están unidas en una sola persona sin mezcla, confusión o separación (Calcedonia, 451 d.C.). Su obra incluye: encarnación (Jn 1:14), vida activa de obediencia (Ro 5:19), muerte sustitutoria (2 Co 5:21), resurrección física (1 Co 15), ascensión (Hch 1:9-11), intercesión presente (He 7:25), y retorno futuro (Ap 19-22). Él es el cumplimiento de todas las promesas (2 Co 1:20) y el centro hermenéutico de toda la Escritura (Lc 24:27, 44-47).",
        aplicacion:
          "Conocer a Cristo no es solo información: es el centro de la vida cristiana. Todo en tu fe se sostiene en Él: tu salvación, tu oración (por Su mediación), tu adoración (por Su sacrificio), tu esperanza (por Su resurrección). No hay conocimiento de Dios fuera de Cristo (Jn 14:6). Predícate a Cristo cada día: no solo Su ejemplo, sino Su obra consumada a tu favor.",
        errores:
          "El arrianismo niega la deidad plena de Cristo (testigos de Jehová). El docetismo niega Su humanidad real. El nestorianismo separa Sus dos naturalezas. El eutiquianismo las mezcla. El socinianismo niega la expiación sustitutoria. El liberalismo teológico ve a Jesús solo como un maestro moral. Hoy también hay cristologías 'desde abajo' que niegan Su preexistencia o deidad.",
      },
      {
        id: "doctrina-de-la-salvacion",
        title: "Doctrina de la Salvación",
        simple:
          "La salvación es obra soberana de Dios de principio a fin. Desde la eternidad, Dios eligió a Su pueblo en Cristo. En el tiempo, el Espíritu Santo llama, regenera, da fe y arrepentimiento, justifica, adopta, santifica y preserva hasta el fin. No es por obras humanas, sino por gracia mediante la fe en Cristo solo.",
        fondo:
          "La soteriología reformada sigue el *Ordo Salutis* (orden de la salvación): elección (Ef 1:4) → llamamiento eficaz (Ro 8:30) → regeneración (Jn 3:3-8) → fe y arrepentimiento (Ef 2:8; Hch 11:18) → justificación (Ro 3:21-26) → adopción (Ef 1:5; Gá 4:4-7) → santificación (1 Ts 4:3; He 12:14) → perseverancia (Jn 10:28-29; Fil 1:6) → glorificación (Ro 8:30). Es una cadena de oro que Dios forja desde la eternidad. Los Cinco Puntos del Calvinismo (TULIP) resumen estas doctrinas: Depravación Total, Elección Incondicional, Expiación Limitada (o particular), Gracia Irresistible (o eficaz), Perseverancia de los Santos. Pero más allá del TULIP, la salvación es la obra del Dios trino: el Padre elige, el Hijo redime, el Espíritu aplica. Todo es por gracia, todo es para la gloria de Dios.",
        aplicacion:
          "Si eres salvo, no fue por tu decisión, tu bondad o tu mérito. Fue por pura gracia de Dios. Esto te humilla y te da seguridad. Humilla: no tienes nada de qué presumir. Seguridad: lo que Dios comenzó, Él lo terminará. Vive agradecido. Si no eres salvo, hoy es el día de salvación: arrepiéntete y cree en el Señor Jesucristo.",
        errores:
          "El arminianismo enseña que la salvación depende en última instancia de la decisión humana. El pelagianismo la basa en el mérito humano. El universalismo enseña que todos se salvan sin fe. El 'easy-believism' enseña una fe sin arrepentimiento. El antinomianismo dice que la gracia hace la obediencia innecesaria. El legalismo añade obras humanas a la fe.",
      },
      {
        id: "doctrina-de-la-iglesia",
        title: "Doctrina de la Iglesia",
        simple:
          "La iglesia no es un edificio ni una organización, sino el pueblo de Dios llamado por Él, reunido en asambleas locales, bajo el gobierno de Cristo, para adorar, predicar la Palabra, administrar los sacramentos (bautismo y cena del Señor), edificarse mutuamente y hacer discípulos a todas las naciones.",
        fondo:
          "La eclesiología bautista reformada confiesa que la iglesia es una asamblea local de creyentes bautizados (por inmersión después de la profesión de fe), unidos para adorar a Dios y llevar a cabo la Gran Comisión (Mt 28:18-20). Cristo es la única Cabeza de la iglesia (Ef 1:22-23; Col 1:18). El gobierno es congregacional con ancianos bíblicos y diáconos (1 Ti 3:1-13; Tit 1:5-9). Hay dos ordenanzas: el bautismo del creyente por inmersión (Hch 8:36-39; Ro 6:3-5) y la Cena del Señor (1 Co 11:23-34). La membresía implica compromiso, disciplina y amor mutuo (Mt 18:15-20; He 10:24-25). La iglesia persiste a través de la historia como el cuerpo de Cristo, columna y baluarte de la verdad (1 Ti 3:15). No es una institución jerárquica con autoridad central, sino un cuerpo orgánico con Cristo como Cabeza.",
        aplicacion:
          "La iglesia no es opcional para el cristiano. Eres miembro del cuerpo de Cristo, y necesitas una iglesia local donde: 1) la Palabra sea predicada fielmente, 2) los sacramentos sean administrados correctamente, 3) la disciplina sea ejercida, 4) puedas servir y ser servido. No te aísles. El cristianismo no es una religión individual.",
        errores:
           "El romanismo enseña una iglesia jerárquica con el Papa como cabeza visible. El congregacionalismo extremo niega cualquier autoridad pastoral. El elitismo espiritual (hermandades secretas, 'ungidos' especiales) divide el cuerpo. El igualitarismo radical niega la distinción bíblica entre ancianos/pastores y miembros. El bautismo infantil y el bautismo por aspersión se apartan del patrón bíblico. El cesacionismo que niega toda obra del Espíritu Santo hoy y el continuismo que antepone experiencias a la Escritura son dos extremos que deben evitarse.",
      },
      {
        id: "ultimas-cosas",
        title: "Últimas Cosas",
        simple:
          "La historia no es un ciclo sin fin, sino que avanza hacia un propósito definido por Dios. Cristo volverá en gloria para resucitar a los muertos, juzgar a vivos y muertos, y establecer el cielo nuevo y la tierra nueva donde los redimidos vivirán eternamente con Dios. Los impíos recibirán el castigo eterno.",
        fondo:
          "La escatología bíblica comienza en el AT con las promesas del reino mesiánico (Is 2:2-4; 11:1-10; Dn 7:13-14; Zac 14) y se desarrolla en el NT con la enseñanza de Jesús (Mt 24-25; Mc 13; Lc 21), la resurrección (1 Co 15), la esperanza de la venida de Cristo (1 Ts 4:13-18; 2 Ts 2), y la consumación en Apocalipsis. El patrón es: el reino de Dios ya fue inaugurado en Cristo (ya) pero no consumado (todavía). Habrá resurrección tanto de justos como de impíos (Dn 12:2; Jn 5:28-29). El juicio final separará a las ovejas de los cabritos (Mt 25:31-46). Los creyentes serán glorificados y vivirán eternamente en la nueva creación (Ap 21-22), donde Dios enjugará toda lágrima, no habrá más muerte ni dolor. El infierno es un lugar real de castigo eterno y consciente para los impíos (Mt 25:46; Ap 20:11-15).",
        aplicacion:
          "No vivas como si este mundo fuera tu hogar. Eres peregrino, tu ciudadanía está en los cielos (Fil 3:20). La esperanza de la venida de Cristo no es para especular con fechas, sino para vivir en santidad y vigilancia (1 Ts 5:1-11). Anhela la nueva creación. Pero mientras tanto, trabaja fielmente en el mundo, amando al prójimo y proclamando el evangelio, sabiendo que tu trabajo en el Señor no es en vano.",
        errores:
          "El dispensacionalismo extremo divide la historia en períodos rígidos y enseña dos pueblos de Dios. El amilenialismo extremo espiritualiza todo. El preterismo extremo dice que todo se cumplió en el 70 d.C. Otros se enfocan en fechas y especulaciones (como el 'rapto secreto' antes de la tribulación). Universalismo: todos serán salvos. Aniquilacionismo: los impíos serán destruidos, no atormentados eternamente. También está el error de vivir solo para lo temporal.",
      },
    ],
  },
];

export default escuelaData;
