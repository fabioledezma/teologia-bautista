export interface HermeneuticaSection {
  slug: string;
  number: number;
  icon: string;
  title: string;
  subtitle: string;
  simple: string;
  fondo: string;
  perspectivaReformada: string;
  frases?: string[];
  examples?: { verse: string; popular: string; context: string; teaching: string }[];
  table?: { col1: string; col2: string }[];
  diagram: string;
}

const hermeneutica: HermeneuticaSection[] = [
  {
    slug: "introduccion",
    number: 1,
    icon: "",
    title: "El Corazón de la Interpretación",
    subtitle: "Por qué estudiar la Biblia correctamente es un acto de amor y humildad",
    simple: `Muchos creyentes aman sinceramente al Señor. Leen su Biblia con hambre espiritual, oran con fervor y desean agradar a Dios. Y eso es hermoso. Pero amar la Palabra de Dios también implica aprender a escucharla correctamente. Porque podemos leer la Biblia durante años y aún así malinterpretar lo que Dios quiso decir.

No se trata de inteligencia. Tampoco de tener un título en teología. Se trata de humildad. Se trata de reconocer que la Biblia no fue escrita en el tiempo, la cultura ni el idioma del lector moderno. Fue escrita por personas reales, en contextos reales, a audiencias reales. Y Dios, en su sabiduría, decidió comunicarse así.

Un texto fuera de contexto se convierte en un pretexto.

El lector sincero puede malinterpretar pasajes, pero la buena noticia es que puede aprender y acercarse más a lo que Dios realmente quiso decir.

La Biblia es la voz de Dios. Merece ser escuchada con atención, con reverencia y con cuidado. No como un libro mágico del que se sacan frases al azar. Sino como la Palabra viva y eterna que Dios entregó dentro de una historia real de redención.

En esta sección se aprenderá, con paciencia, cómo leer la Biblia de una manera que honre a Dios y edifique verdaderamente. No para volverse un teólogo arrogante, sino para amar más a Dios y entender mejor su mensaje.`,
    fondo: `La historia de la iglesia muestra que muchos errores doctrinales nacieron no de mala intención, sino de una lectura descuidada de la Escritura. Personas sinceras, con amor por Dios, llegaron a conclusiones equivocadas porque ignoraron el contexto, la cultura o el propósito original del texto.

Considérese esto: cuando se lee un documento importante, no se salta de una línea a otra sin orden. Se lee el documento completo. Se trata de entender qué quiso comunicar el autor. Se considera la situación en que fue escrito. Así debe leerse la Biblia.

La Reforma Protestante enseñó que la Escritura se interpreta a sí misma (analogía de la fe). Esto significa que un pasaje oscuro debe ser entendido a la luz de pasajes claros. Que ninguna doctrina debe basarse en un solo versículo aislado. Que toda la Biblia apunta a Cristo.

Pero también se necesita humildad para reconocer que uno puede equivocarse. Un pastor maduro no es el que lo sabe todo, sino el que sigue aprendiendo. Como dijo Spurgeon: "La Biblia no fue dada para aumentar el conocimiento, sino para guiar la conducta".

Al enseñar interpretación bíblica, no se busca crear una elite intelectual. Se busca equipar al pueblo de Dios para que pueda nutrirse de la Palabra con verdadero provecho espiritual.`,
    perspectivaReformada: `La Confesión Bautista de Fe de 1689 enseña que "la regla infalible de interpretación de la Escritura es la Escritura misma" (Capítulo 1, párrafo 9). Esto significa que ningún pasaje debe interpretarse de manera aislada, sino a la luz del consejo completo de Dios.

La Confesión Bautista de Fe de 1689 afirma que la Biblia es clara en lo necesario para la salvación, pero que requiere estudio reverente y la iluminación del Espíritu Santo para ser comprendida correctamente. No es un libro oscuro para especialistas, pero tampoco un libro plano donde cualquier interpretación es válida.

La Biblia tiene un significado. Dios quiso decir algo específico. La tarea del intérprete es descubrir ese significado, no imponer sus propios pensamientos al texto.`,
    frases: [
      "Un texto fuera de contexto se convierte en un pretexto.",
      "La Biblia no fue escrita directamente para el lector moderno, pero sí fue escrita para su beneficio.",
      "Dios habló en una historia real.",
    ],
    diagram: "hermeneutica-intro",
  },
  {
    slug: "contexto",
    number: 2,
    icon: "",
    title: "El Contexto lo Cambia Todo",
    subtitle: "Por qué no podemos sacar versículos de su hogar natural",
    simple: `Imagina que escuchas solo la mitad de una conversación telefónica. Alguien dice: "Sí, tráelo mañana sin falta". ¿Qué significa? No lo sabes. Podría ser un medicamento, un documento, una herramienta. Sin el contexto, la frase puede significar cualquier cosa.

Algo similar ocurre cuando sacamos un versículo de la Biblia sin considerar lo que está antes y después.

La Biblia no es una colección de frases sueltas. Es la revelación progresiva de Dios a la humanidad, que se desarrolla a lo largo de siglos. Cada versículo tiene un hogar: un libro, un capítulo, un contexto histórico y cultural.

Cuando respetamos ese hogar, entendemos mejor lo que Dios quiso decir. Cuando ignoramos el contexto, podemos hacer que la Biblia diga prácticamente cualquier cosa.

Hay varios niveles de contexto que deben considerarse:

1. El contexto inmediato (lo que está antes y después del versículo)
2. El contexto del libro (por qué se escribió y a quién)
3. El contexto histórico (qué estaba pasando en ese tiempo)
4. El contexto cultural (las costumbres y creencias de la época)
5. El contexto de toda la Biblia (cómo se relaciona con el resto de la Escritura)

Cada nivel ayuda a entender mejor el mensaje. Cuando se saltan estos niveles, se corre el riesgo de malinterpretar lo que Dios quiso decir.`,
    fondo: `Considérese un ejemplo cotidiano. Supóngase que alguien encuentra una nota que dice: "Te espero a las 7". Esa nota puede significar cosas muy diferentes dependiendo de quién la escribió, para qué ocasión, y qué relación tiene con esa persona. Sin ese contexto, la nota es ambigua.

La Biblia funciona de manera similar. Cuando se lee "Todo lo puedo en Cristo que me fortalece" (Filipenses 4:13), se puede pensar que significa que se puede lograr cualquier meta que uno se proponga. Pero si se lee el contexto, Pablo está hablando de haber aprendido a estar contento en toda circunstancia, tanto en abundancia como en escasez. El versículo no trata de lograr sueños personales, sino de encontrar suficiente en Cristo pase lo que pase.

El apóstol Pedro mismo advirtió que las cartas de Pablo contienen "algunos puntos difíciles de entender, que los ignorantes e inestables tuercen, como también las otras Escrituras, para su propia destrucción" (2 Pedro 3:16). Es decir, ya desde el primer siglo había quienes distorsionaban la Escritura sacándola de contexto.

La solución no es dejar de leer la Biblia. La solución es leerla con más cuidado, con más reverencia, y con la ayuda de toda la iglesia a lo largo de la historia.`,
    perspectivaReformada: `La Confesión 1689 (Cap. 1, párr. 9) afirma que "el juez supremo por el cual deben ser examinadas todas las controversias religiosas, y todos los decretos de concilios, opiniones de escritores antiguos, doctrinas de hombres y espíritus privados, es la Santa Escritura". Esto significa que no se debe apelar a experiencias personales, tradiciones humanas o revelaciones privadas por encima del texto bíblico bien interpretado.

Para los reformados, el contexto no es opcional. Es parte esencial de una interpretación fiel. Cada pasaje debe ser entendido en su sentido natural, histórico y gramatical, a la luz del conjunto de la Escritura.`,
    frases: [
      "La Biblia no fue escrita en un vacío. Fue escrita en una historia real.",
      "No se pueden imponer las ideas propias al texto. Debe dejarse que el texto hable.",
    ],
    examples: [
      {
        verse: "Filipenses 4:13",
        popular: "Puedo lograr cualquier sueño o meta que me proponga.",
        context: "Pablo está en prisión, hablando de contentamiento en abundancia y escasez.",
        teaching: "Pablo dice que Cristo le da fuerza para enfrentar cualquier circunstancia, no para alcanzar metas personales.",
      },
    ],
    diagram: "hermeneutica-contexto",
  },
  {
    slug: "errores-comunes",
    number: 3,
    icon: "",
    title: "Errores Comunes al Leer la Biblia",
    subtitle: "Ejemplos prácticos de malas interpretaciones y cómo corregirlas",
    simple: `A veces, sin darse cuenta, se lee la Biblia de maneras que no son correctas. No se hace por malicia, sino porque nunca se enseñó de otra forma. A continuación se presentan algunos errores comunes con ejemplos concretos.

Cada ejemplo ayudará a entender mejor cómo leer la Biblia con fidelidad.`,
    fondo: `ERROR 1: Jeremías 29:11 — "Porque yo sé los pensamientos que tengo acerca de vosotros, pensamientos de paz, y no de mal, para daros el fin que esperáis."

Este es quizás uno de los versículos más malinterpretados de la Biblia. Muchos lo usan como una promesa personal de éxito, prosperidad y un futuro brillante. Pero el contexto revela otra cosa.

Jeremías estaba escribiendo al pueblo de Israel en el exilio en Babilonia. Dios les estaba diciendo que, después de 70 años de cautiverio, los restauraría como nación. No era una promesa individual para cada persona. Era una promesa colectiva a Israel de que Dios no los había abandonado y que cumpliría su pacto.

¿Qué se puede aprender hoy? Que Dios es fiel a sus promesas. Que tiene un plan soberano para su pueblo. Pero no se puede reclamar esta promesa como si fuera un cheque en blanco para la vida individual. Se aplica correctamente cuando se entiende que Dios es soberano, que tiene planes para su iglesia, y que se puede confiar en su fidelidad.

ERROR 2: Mateo 7:1 — "No juzguéis, para que no seáis juzgados."

Este es el versículo favorito de muchos para silenciar cualquier tipo de corrección o discernimiento. Pero Jesús no estaba prohibiendo todo juicio. El contexto mismo muestra que Jesús habla de la hipocresía: de señalar la paja en el ojo ajeno mientras se ignora la viga en el propio.

Unos versículos más adelante (Mateo 7:6), Jesús dice: "No deis lo santo a los perros, ni echéis vuestras perlas delante de los cerdos". Eso requiere discernimiento. Y en Mateo 7:15-20, Jesús llama a discernir los falsos profetas por sus frutos. El mismo capítulo que dice "no juzguéis" también llama a discernir.

La enseñanza correcta es: no seas hipócrita. No condenes a otros por lo que tú mismo practicas. Pero sí debes usar discernimiento bíblico para evaluar enseñanzas y conductas.

ERROR 3: Mateo 18:20 — "Donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos."

Muchos usan este versículo para decir que cualquier reunión de dos o tres personas ya es "iglesia" o que Dios está presente de una manera especial solo cuando se reúnen. Pero el contexto es diferente.

En Mateo 18, Jesús está hablando del proceso de disciplina eclesiástica. El versículo 15-17 describe cómo confrontar a un hermano que peca. Si no escucha, se lleva a dos o tres testigos. Si aún así no escucha, se dice a la iglesia. Y luego Jesús dice que donde dos o tres están reunidos en su nombre (en el contexto de disciplina y acuerdo en la verdad), Él está presente.

No es que Jesús no esté con el creyente cuando está solo. Por supuesto que está. Pero este versículo en particular habla de la autoridad de la iglesia reunida para tomar decisiones en el nombre de Cristo.

ERROR 4: "No toquéis al ungido de Dios" — Salmo 105:15

Este es uno de los versículos más usados para manipular espiritualmente a los creyentes. Líderes abusivos citan esta frase para decir que nadie puede cuestionarlos ni corregirlos porque son "ungidos de Dios".

Primero, el Salmo 105:15 dice: "No toquéis a mis ungidos, ni hagáis mal a mis profetas". Esto se refiere a los patriarcas (Abraham, Isaac, Jacob), a quienes Dios protegía mientras estaban en tierra extranjera. No es una promesa para líderes espirituales de todos los tiempos.

Segundo, en el Nuevo Testamento, todos los creyentes son "ungidos" por el Espíritu Santo (1 Juan 2:20, 27). La unción no es exclusiva de una clase especial de líderes.

Tercero, Pablo mismo confrontó a Pedro cara a cara cuando este actuó hipócritamente (Gálatas 2:11-14). Si Pedro, un apóstol, podía ser corregido, ningún líder hoy está por encima del escrutinio bíblico.

La Biblia llama a honrar a los líderes, pero también llama a examinarlo todo y retener lo bueno (1 Tesalonicenses 5:21). El verdadero liderazgo bíblico no teme el escrutinio, sino que lo recibe con humildad.

ERROR 5: "Declara y decreta" — La fe como manipulación

Algunas enseñanzas modernas dicen que se puede "declarar y decretar" cosas con la boca y que Dios está obligado a cumplirlas. Que las palabras humanas tienen poder creativo. Esto no es bíblico.

La oración bíblica es dependencia, no manipulación. Jesús enseñó a orar: "Hágase tu voluntad" (Mateo 6:10), no "hágase mi voluntad". La fe bíblica confía en la soberanía de Dios, no intenta controlar a Dios con palabras.

Santiago dice: "En lugar de lo cual deberíais decir: Si el Señor quiere, viviremos y haremos esto o aquello" (Santiago 4:15). La fe verdadera se rinde a la voluntad de Dios, no exige que Dios se rinda a la voluntad humana.

La palabra de fe no está en declarar con la boca, sino en creer en el corazón lo que Dios ya ha prometido en su Palabra.`,
    perspectivaReformada: `Desde la perspectiva reformada, la Palabra de Dios es suficiente y completa. No se necesitan "nuevas revelaciones" ni "palabras proféticas" que añadan o contradigan la Escritura. El canon está cerrado. El Espíritu Santo ilumina lo que ya está escrito, pero no añade nuevas verdades.

La Confesión 1689 (Cap. 1, párr. 1) afirma que la Escritura es "la única regla suficiente, cierta e infalible de todo conocimiento, fe y obediencia salvadores". Esto protege al pueblo de Dios de ser manipulado por quienes dicen tener una "palabra" especial de Dios.`,
    frases: [
      "La Escritura interpreta la Escritura.",
      "El Espíritu Santo ilumina la Palabra, no reemplaza la Palabra.",
    ],
    examples: [
      {
        verse: "Jeremías 29:11",
        popular: "Dios tiene un plan de prosperidad y éxito para mi vida individual.",
        context: "Escrito a Israel en el exilio. Promesa colectiva de restauración después de 70 años.",
        teaching: "Dios es soberano y fiel a su pacto. Aprendemos que Dios tiene un plan para su pueblo, no promesas individuales de éxito material.",
      },
    ],
    diagram: "hermeneutica-errores",
  },
  {
    slug: "significado-real",
    number: 4,
    icon: "",
    title: "¿Qué Significa Realmente Este Versículo?",
    subtitle: "Aprendiendo a leer el contexto antes de aplicar",
    simple: `Una de las herramientas más poderosas que se puede aprender es preguntarse: "¿Qué quiso decir el autor original a sus lectores originales?" Antes de preguntar "¿Qué significa esto para mí?", debe preguntarse "¿Qué significó esto para ellos?"

La Biblia fue escrita para la iglesia, pero no fue escrita directamente al lector moderno. Fue escrita a israelitas, a iglesias del primer siglo, a personas con problemas y preguntas específicas. Cuando se entiende qué significó para ellos, se pueden aplicar correctamente los principios a la vida presente.`,
    fondo: `Considérese Filipenses 4:13 nuevamente. Pablo estaba en prisión. Había aprendido el secreto de estar contento en toda circunstancia. Cuando dice "todo lo puedo en Cristo que me fortalece", no está diciendo "puedo ser millonario si tengo fe". Está diciendo: "Puedo enfrentar la prisión, la persecución, el hambre, la pobreza, porque Cristo me da la fuerza".

Eso es mucho más profundo que una promesa de prosperidad. Es la confianza de que, pase lo que pase, Cristo es suficiente.

Otro ejemplo es Romanos 8:28: "Todas las cosas ayudan a bien a los que aman a Dios". Pablo no está diciendo que todo lo que le pasa al creyente es bueno. Está diciendo que Dios, en su soberanía, obra a través de todas las circunstancias (incluso las malas) para el bien final de los que le aman.

Cuando se aprende a distinguir entre el significado original y la aplicación personal, se deja de usar la Biblia como un libro de autoayuda y se comienza a tratarla como la Palabra de Dios que transforma vidas.`,
    perspectivaReformada: `La teología reformada distingue entre el significado (lo que el autor quiso decir) y la significancia (cómo se aplica al lector). El significado es uno solo; la significancia puede variar en diferentes contextos. Esto protege al intérprete de imponer sus propios deseos al texto.

Como dice la Confesión 1689 (Cap. 1, párr. 9): "El juez supremo... es la Santa Escritura". No las impresiones personales, no las experiencias, no las tradiciones.`,
    frases: [
      "No se pueden imponer las ideas propias al texto.",
      "La Biblia no fue escrita directamente para el lector moderno, pero sí fue escrita para su beneficio.",
    ],
    table: [
      { col1: "¿Quién está hablando?", col2: "Identifica al autor y su situación." },
      { col1: "¿A quién le habla?", col2: "¿A Israel? ¿A una iglesia? ¿A incrédulos?" },
      { col1: "¿Por qué lo dice?", col2: "¿Qué problema o situación está abordando?" },
      { col1: "¿Qué ocurre antes y después?", col2: "Lee todo el pasaje, no solo el versículo." },
      { col1: "¿Qué enseña toda la Biblia?", col2: "Comprueba con el resto de la Escritura." },
    ],
    diagram: "hermeneutica-significado",
  },
  {
    slug: "guia-practica",
    number: 5,
    icon: "",
    title: "Guía Práctica para Interpretar la Biblia",
    subtitle: "Preguntas simples que transformarán tu lectura bíblica",
    simple: `Ahora que se ha visto la importancia del contexto, aquí hay una guía práctica y sencilla que se puede usar cada vez que se lea un pasaje de la Biblia. No se necesita ser un erudito. Solo se necesita un corazón humilde y estas preguntas:

1. ¿Quién está hablando? (Dios, un profeta, un apóstol, un salmista...)
2. ¿A quién le está hablando? (Israel, la iglesia, una persona específica...)
3. ¿En qué circunstancias? (¿Hay guerra? ¿Paz? ¿Persecución? ¿Exilio?)
4. ¿Qué dice antes y después? (Lee al menos el capítulo completo)
5. ¿Qué enseñaba este pasaje a sus primeros oyentes?
6. ¿Qué principio eterno se puede aprender?
7. ¿Cómo se relaciona con Cristo y el evangelio?
8. ¿Qué se debe creer, sentir o hacer en respuesta?

Esta guía ayudará a leer la Biblia con más claridad y a evitar muchos errores comunes.`,
    fondo: `Aplíquese esta guía a un pasaje conocido. Por ejemplo, Filipenses 4:13.

1. ¿Quién habla? El apóstol Pablo.
2. ¿A quién? A la iglesia en Filipos.
3. ¿Circunstancias? Pablo está preso, esperando juicio.
4. ¿Antes y después? El versículo 11 dice: "He aprendido a contentarme, cualquiera que sea mi situación". El versículo 12 habla de saber vivir en abundancia y en escasez.
5. ¿Qué enseñaba a los primeros oyentes? Que Cristo da fuerza para enfrentar cualquier circunstancia.
6. Principio eterno: La suficiencia está en Cristo, no en las circunstancias.
7. Relación con Cristo: Jesús es la fuente de fortaleza y contentamiento.
8. Respuesta: Confiar en Cristo en toda situación, no solo en las buenas.

¿Se ve la diferencia? Cuando se aplican estas preguntas, el versículo cobra un significado mucho más rico y profundo que "puedo lograr lo que me proponga".

Se recomienda copiar estas preguntas y tenerlas a mano al leer la Biblia. Con el tiempo, se volverán naturales.`,
    perspectivaReformada: `La Confesión 1689 (Cap. 1, párr. 7) recuerda que "no todas las cosas en la Escritura son igualmente claras en sí mismas, ni igualmente claras para todos". Pero lo necesario para la salvación es claro. Donde hay oscuridad, deben usarse los pasajes claros para iluminar los difíciles.

La tradición reformada legó el principio de la analogía de la fe: interpretar las Escrituras por las Escrituras, comparando un pasaje con otro, y manteniendo la armonía de toda la verdad divina.`,
    frases: [
      "La Escritura interpreta la Escritura.",
      "No hay contradicción en la Palabra de Dios, solo comprensión humana limitada.",
    ],
    table: [
      { col1: "Mala práctica", col2: "Interpretación sana" },
      { col1: "Sacar un versículo aislado", col2: "Leer el contexto completo" },
      { col1: "Buscar solo emociones", col2: "Buscar el significado original" },
      { col1: "\"Dios me dijo\" sin Biblia", col2: "Examinar todo con la Escritura" },
      { col1: "Ignorar historia y cultura", col2: "Considerar el contexto original" },
      { col1: "Imponer mis ideas al texto", col2: "Dejar que el texto me hable" },
    ],
    diagram: "hermeneutica-guia",
  },
  {
    slug: "espiritu-santo",
    number: 6,
    icon: "",
    title: "El Espíritu Santo y la Palabra",
    subtitle: "Cómo el Espíritu obra a través de la Escritura, no aparte de ella",
    simple: `Se necesita al Espíritu Santo para entender la Biblia. Jesús prometió que el Espíritu guiaría a toda la verdad (Juan 16:13). Sin Él, la Biblia es un libro cerrado. Pero el Espíritu no da "nuevas revelaciones" que contradigan la Escritura. Su obra es iluminar la mente del creyente para entender lo que ya está escrito.

Hay un equilibrio importante aquí: sin el Espíritu, el estudio bíblico se vuelve árido y muerto. Pero sin el estudio reverente, el Espíritu no da conocimiento mágico. La obra del Espíritu no reemplaza la responsabilidad del creyente de estudiar con cuidado.

El mismo Espíritu que inspiró la Palabra es el que la ilumina en el corazón del creyente. Pero la iluminación no es inspiración. Los autores bíblicos fueron inspirados (2 Pedro 1:21). El creyente es iluminado para entender lo que ellos escribieron.`,
    fondo: `Muchas personas caen en uno de dos extremos. Algunos dicen: "Solo necesito el Espíritu, no necesito estudiar". Pero Pablo le dijo a Timoteo: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad" (2 Timoteo 2:15). El estudio es parte de la responsabilidad del creyente.

Otros dicen: "Solo necesito estudiar, el Espíritu es algo separado". Pero Pablo también dijo: "El hombre natural no percibe las cosas que son del Espíritu de Dios, porque para él son locura" (1 Corintios 2:14). Sin el Espíritu, el entendimiento está cegado.

El equilibrio reformado es: estudiar con toda la mente, orar con todo el corazón, y confiar en que el Espíritu actuará a través de la Palabra.

Cuando se sienta que "Dios está diciendo algo", debe comprobarse con la Escritura. El Espíritu nunca guiará a hacer algo que contradiga la Biblia. Si una "revelación" contradice la Palabra escrita, no es del Espíritu. Como dijo Agustín: "Si quieres estar lleno del Espíritu, ama la Palabra".`,
    perspectivaReformada: `La Confesión 1689 (Cap. 1, párr. 5) enseña que "el testimonio del Espíritu Santo" es necesario para persuadir al creyente de la autoridad divina de la Escritura. Pero este testimonio no es una revelación aparte, sino que obra a través de la Palabra misma.

Los reformados rechazan tanto el racionalismo (que dice que la razón humana basta) como el entusiasmo (que dice que el Espíritu habla aparte de la Palabra). La vía reformada es la Palabra y el Espíritu juntos, siempre en armonía.`,
    frases: [
      "El Espíritu Santo ilumina la Palabra, no reemplaza la Palabra.",
      "Sin el Espíritu no se puede entender; sin la Palabra no hay qué entender.",
    ],
    diagram: "hermeneutica-espiritu",
  },
  {
    slug: "comparacion",
    number: 7,
    icon: "",
    title: "Comparación: Mala vs. Sana Interpretación",
    subtitle: "Tablas visuales para aprender a distinguir",
    simple: `A veces la mejor manera de aprender es viendo lado a lado lo correcto y lo incorrecto. Aquí hay una comparación clara entre prácticas dañinas y prácticas saludables de interpretación bíblica.

La meta no es sentirse superior. La meta es que, al ver la diferencia, se pueda corregir con amor aquello que se ha hecho mal y crecer en la comprensión de la Palabra.`,
    fondo: `La diferencia entre una mala y una buena interpretación no siempre es obvia a simple vista. Ambas pueden usar la Biblia. Ambas pueden parecer espirituales. Pero los frutos son diferentes.

Una mala interpretación lleva a:
- Promesas falsas que causan decepción y culpa
- Doctrinas inventadas que alejan de la verdad
- Manipulación espiritual por parte de líderes abusivos
- Confusión y división en el cuerpo de Cristo

Una interpretación sana lleva a:
- Una fe sólida que resiste las pruebas
- Conocimiento verdadero de Dios que transforma la vida
- Libertad del error y la manipulación
- Unidad en la verdad y amor por la iglesia

La Palabra de Dios es perfecta. El lector es quien necesita acercarse a ella con humildad y cuidado.`,
    perspectivaReformada: `La Confesión 1689 llama a "recibir y creer toda la verdad" y a "rechazar toda enseñanza contraria al evangelio" (Cap. 1). Esto no hace arrogante al creyente, sino agradecido de que Dios haya dado una Palabra clara y suficiente para guiar.

La sana interpretación no es un lujo para teólogos. Es una necesidad para todo creyente que desea honrar a Dios y crecer en su fe.`,
    frases: [
      "La verdad no cambia con los tiempos; la comprensión humana sí puede crecer.",
      "La humildad es la puerta de entrada a toda sana interpretación.",
    ],
    table: [
      { col1: "Mala práctica", col2: "Interpretación sana" },
      { col1: "Sacar un versículo aislado", col2: "Leer el contexto completo" },
      { col1: "Buscar solo emociones", col2: "Buscar el significado original" },
      { col1: "\"Dios me dijo\" sin respaldo bíblico", col2: "Examinar todo con la Escritura" },
      { col1: "Ignorar historia y cultura", col2: "Considerar el contexto original" },
      { col1: "Imponer mis ideas al texto", col2: "Dejar que el texto me hable a mí" },
      { col1: "Usar la Biblia para controlar", col2: "Usar la Biblia para liberar y edificar" },
      { col1: "Una doctrina de un solo versículo", col2: "Toda doctrina del consejo completo de Dios" },
    ],
    diagram: "hermeneutica-comparacion",
  },
  {
    slug: "conclusion",
    number: 8,
    icon: "",
    title: "Llamado a Amar la Verdad",
    subtitle: "Una invitación pastoral a crecer en el conocimiento de Dios",
    simple: `Se ha recorrido un camino de aprendizaje. Se ha visto que la Biblia es la Palabra de Dios, que fue escrita en contextos reales, que debe leerse con cuidado, y que el Espíritu Santo ayuda a entenderla.

Pero todo este conocimiento no es para sentirse superior. Es para amar más a Dios.

La meta de toda interpretación bíblica no es tener razón. Es conocer a Dios. Es amar a Cristo. Es vivir en obediencia gozosa a su Palabra. Es poder distinguir la verdad del error para no ser engañados.

Se exhorta al lector a:
- Seguir estudiando la Biblia con humildad y alegría
- Usar las herramientas aprendidas
- No tener miedo de preguntar y aprender
- Recibir la corrección con gratitud
- Amar la verdad más que las opiniones propias

La Palabra de Dios es una lámpara para los pies y una luz para el camino (Salmo 119:105). Cuando se lee correctamente, esa luz brilla con más claridad y se puede caminar con más confianza.

Que el Señor bendiga al lector mientras continúa este camino de amar su Palabra y crecer en su conocimiento.`,
    fondo: `No importa cuánto tiempo lleve alguien leyendo la Biblia. Siempre hay más que aprender. Siempre hay más profundidad en la Palabra de Dios. Los mejores teólogos son los que más humildad tienen, porque saben que apenas han arañado la superficie de las riquezas de Dios.

Pablo oraba para que los creyentes fueran "llenos del conocimiento de su voluntad en toda sabiduría y comprensión espiritual" (Colosenses 1:9).

No debe desanimarse el lector si a veces se siente confundido. Todos los creyentes han estado allí. Siga estudiando, preguntando, orando. Dios honra a los que buscan la verdad con corazón sincero.

Recuérdese siempre: la Biblia no es un libro para dominar, sino para ser transformado por ella. Acérquese a ella con humildad, con reverencia y con gozo. Porque en sus páginas se encuentra a Cristo, y Cristo es la vida eterna.`,
    perspectivaReformada: `"La Santa Escritura es la única regla suficiente, cierta e infalible de todo conocimiento, fe y obediencia salvadores" (Confesión Bautista de Fe de 1689, Cap. 1, párr. 1).

Que esta verdad guíe siempre al lector de vuelta a la Palabra, no como un libro de texto frío, sino como la voz viva del Dios que le ama y le habla. A Él sea la gloria para siempre.`,
    frases: [
      "Ama la Palabra. Vive la Palabra. Comparte la Palabra.",
      "La interpretación correcta lleva a una vida transformada.",
    ],
    diagram: "hermeneutica-conclusion",
  },
];

export default hermeneutica;
