export interface Doctrina {
  slug: string;
  icon: string;
  title: string;
  tag: string;
  filter: string;
  summary: string;
  keyVerse: { text: string; ref: string };
  simple: string;
  fondo: string;
  historia: string;
  malentendidos: string;
  aplicacion: string;
  confesion: string;
  escrituras: string[];
  relacionadas: string[];
  svg?: "tulip" | "trinity" | "ordo" | "solas" | "cristologia-th";
}

const doctrinas: Doctrina[] = [
  {
    slug: "sola-scriptura",
    icon: "📖",
    title: "Sola Scriptura",
    tag: "Bibliología",
    filter: "escritura",
    summary:
      "La Biblia es la única autoridad infalible para la fe y la práctica del cristiano. Ninguna tradición, concilio o experiencia está por encima de la Escritura.",
    keyVerse: {
      text: "Toda la Escritura es inspirada por Dios y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.",
      ref: "2 Timoteo 3:16-17",
    },
    simple:
      "Sola Scriptura significa que la Biblia —los 66 libros del canon protestante— es la única autoridad infalible y final para todo lo que el cristiano debe creer y practicar. Esto no significa que la tradición, los credos o los líderes de la iglesia no tengan valor. Significa que toda enseñanza humana, por respetable que sea, debe ser evaluada a la luz de la Escritura y corregida si no está de acuerdo con ella. La Biblia es la norma que norma (norma normans), no la norma que es normada (norma normata).",
    fondo:
      "El principio de Sola Scriptura fue el fundamento formal de la Reforma Protestante del siglo XVI. Durante la Edad Media, la Iglesia Católica Romana había llegado a equiparar la tradición eclesiástica con la Escritura en autoridad. El Concilio de Trento (1545-1563) llegó a declarar que la tradición debía recibirse con la misma reverencia que la Escritura. Los reformadores, especialmente Lutero y Calvino, insistieron en que solo la Biblia es la Palabra de Dios escrita y, por tanto, la única regla infalible de fe y conducta.\n\nLa Confesión Bautista de Fe de 1689, en su capítulo 1, afirma: 'La Santa Escritura es la única regla suficiente, cierta e infalible de todo conocimiento, fe y obediencia salvadores'. La confesión procede a describir la inspiración verbal y plenaria de las Escrituras, su conservación providencial, su autoridad suprema, su claridad en lo necesario para la salvación, y su suficiencia completa.\n\nEs crucial entender que Sola Scriptura no es lo mismo que solo la Biblia (nuda Scriptura). Los reformadores no rechazaban los credos, confesiones o la enseñanza de la iglesia. Eran hombres confesionales. Lo que afirmaban es que la tradición es una autoridad secundaria y derivada, siempre sujeta a la corrección de la Escritura. Como dijo Agustín: 'Creo el evangelio, no porque la iglesia me lo impone, sino porque la Escritura me lo persuade'.",
    historia:
      "El principio de Sola Scriptura no fue inventado en la Reforma. Los padres de la iglesia primitiva, como Ireneo, Tertuliano y Atanasio, apelaban constantemente a las Escrituras como la autoridad final contra las herejías. Cuando los gnósticos alegaban tradiciones secretas, Ireneo respondía señalando que la verdad se encuentra en las Escrituras públicas y accesibles. El principio era claro: la iglesia está bajo la Palabra, no sobre ella.\n\nDurante la Reforma, Lutero enfrentó al cardenal Cayetano, quien le exigió retractarse apelando a la autoridad papal. Lutero respondió: 'A menos que sea convencido por el testimonio de las Escrituras o por la razón evidente —pues no confío ni en el papa ni en los concilios solos, ya que es notorio que a menudo han errado y se han contradicho—, estoy cautivo por los textos bíblicos que he citado, y mi conciencia está ligada a la Palabra de Dios'.\n\nLos bautistas particulares del siglo XVII heredaron este principio y lo codificaron en la Confesión de 1689, añadiendo énfasis en que la Escritura se interpreta a sí misma (analogía de la fe) y que cada creyente tiene el derecho y la responsabilidad de leerla y entenderla.",
    malentendidos:
      "Un malentendido común es que Sola Scriptura ignora la tradición o la enseñanza de la iglesia. No es así. Los reformados valoran los credos, las confesiones y la historia de la iglesia como ayudas valiosas, pero siempre subordinadas a la Escritura. Otro error es pensar que Sola Scriptura significa que cada persona puede interpretar la Biblia sin ayuda de otros. La Escritura misma nos llama a aprender de maestros y pastores (Ef 4:11-14), y la analogía de la fe nos invita a interpretar las Escrituras en armonía con la enseñanza consistente de toda la Biblia. Finalmente, algunos confunden Sola Scriptura con solo la Biblia sin el Espíritu Santo. Los reformadores insistían en que la iluminación del Espíritu es necesaria para entender la Escritura, pero que el Espíritu no revela nada contrario a la Palabra escrita.",
    aplicacion:
      "Si la Biblia es nuestra única autoridad infalible, debemos ser personas de la Palabra. Esto significa leerla diariamente, estudiarla sistemáticamente, meditar en ella constantemente y memorizarla. También significa evaluar toda enseñanza que escuchamos —en la iglesia, en libros, en podcasts— a la luz de la Escritura, como hicieron los bereanos (Hch 17:11). En un mundo que relativiza la verdad, Sola Scriptura nos da un fundamento sólido e inmutable. Nos llama a ser como el salmista que dijo: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino' (Sal 119:105).",
    confesion: "Capítulo 1: De las Sagradas Escrituras",
    escrituras: [
      "2 Timoteo 3:16-17",
      "2 Pedro 1:20-21",
      "Salmo 119:105",
      "Isaías 8:20",
      "Hechos 17:11",
      "1 Tesalonicenses 5:21",
    ],
    relacionadas: [],
    svg: "solas",
  },
  {
    slug: "la-trinidad",
    icon: "☀️",
    title: "La Santísima Trinidad",
    tag: "Teología Propia",
    filter: "dios",
    summary:
      "Un solo Dios existe eternamente en tres personas distintas: Padre, Hijo y Espíritu Santo. Cada persona es plenamente Dios, coeterna y coigual.",
    keyVerse: {
      text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.",
      ref: "Mateo 28:19",
    },
    simple:
      "La Trinidad es la doctrina de que el único Dios verdadero existe eternamente como tres personas: el Padre, el Hijo y el Espíritu Santo. El Padre no es el Hijo, el Hijo no es el Padre, y el Espíritu Santo no es ni el Padre ni el Hijo. Sin embargo, estos tres no son tres dioses, sino un solo Dios. Cada persona es completamente Dios, poseyendo toda la plenitud de la deidad. Ninguna persona divide la naturaleza divina, sino que cada persona posee la totalidad de la esencia divina.",
    fondo:
      "La doctrina de la Trinidad es el misterio central de la fe cristiana. No es una contradicción (como si dijéramos 1+1+1=1), sino una revelación de la naturaleza relacional de Dios. El término 'Trinidad' no aparece en la Biblia, pero la realidad que describe está por todas partes en la Escritura. El Antiguo Testamento insinúa la pluralidad en Dios: 'Hagamos al hombre a nuestra imagen' (Gn 1:26), el Ángel de Jehová que es distinto de Jehová y sin embargo es Jehová (Éx 23:20-21), y la distinción entre Jehová y el Espíritu de Jehová (Is 63:10).\n\nEl Nuevo Testamento revela la Trinidad explícitamente. El Padre envía al Hijo (Jn 3:16), el Hijo ora al Padre (Jn 17), y el Padre y el Hijo envían al Espíritu (Jn 14:26, 15:26). Jesús es llamado Dios (Jn 1:1, 20:28; Col 2:9), el Espíritu Santo es Dios (Hch 5:3-4), y sin embargo Pablo dice: 'para nosotros, sin embargo, solo hay un Dios, el Padre' (1 Co 8:6). La fórmula bautismal es trinitaria (Mt 28:19), y la bendición apostólica también (2 Co 13:14).\n\nLa iglesia primitiva luchó por formular esta doctrina con precisión. El Concilio de Nicea (325) afirmó la consustancialidad del Hijo con el Padre (homousios). El Concilio de Constantinopla (381) afirmó la divinidad del Espíritu Santo. La formulación clásica es: tres personas (hypostases) en una esencia (ousia). Las personas son distintas en sus relaciones (el Padre engendra, el Hijo es engendrado, el Espíritu procede), pero iguales en poder, gloria y majestad.",
    historia:
      "La doctrina de la Trinidad se desarrolló en respuesta a herejías. El modalismo (Sabelio) enseñaba que Dios es una persona que se manifiesta de diferentes modos. El arrianismo (Arrio) enseñaba que el Hijo y el Espíritu son criaturas. Atanasio defendió la fe nicena contra el mundo arriano. Los Capadocios (Basilio, Gregorio Nacianceno, Gregorio de Nisa) refinaron la terminología. Agustín escribió Sobre la Trinidad, la obra más profunda sobre el tema en la iglesia occidental. La Confesión 1689, capítulo 2, afirma: 'En este Ser divino e infinito hay tres personas: el Padre, el Verbo o Hijo, y el Espíritu Santo; de una sola sustancia, poder y eternidad, cada una con toda la plenitud de la Deidad'. La confesión rechaza tanto el triteísmo como el modalismo.",
    malentendidos:
      "El error más común es pensar que la Trinidad significa que Dios aparece de diferentes maneras según la ocasión (modalismo). Otro error es pensar que Cristo y el Espíritu Santo son dioses menores (arrianismo). También se malinterpreta la Trinidad como tres dioses separados que trabajan en equipo (triteísmo). Finalmente, algunos piensan que la Trinidad es una doctrina irrelevante para la vida diaria. Todo lo contrario: sin la Trinidad no hay evangelio. Si Cristo no es Dios, no puede salvarnos. Si el Espíritu no es Dios, no puede santificarnos. Toda la vida cristiana es trinitaria: oramos al Padre por medio del Hijo en el poder del Espíritu.",
    aplicacion:
      "La Trinidad es el fundamento de nuestra salvación. El Padre nos eligió desde la eternidad (Ef 1:4), el Hijo nos redimió en la cruz (1 P 1:18-19), y el Espíritu nos sella para el día de la redención (Ef 1:13-14). Nuestra oración es trinitaria: oramos al Padre, en el nombre de Cristo, por el poder del Espíritu. Nuestra adoración es trinitaria: cantamos al Dios trino. Nuestra comunión es trinitaria: participamos del amor del Padre, la gracia del Hijo y la comunión del Espíritu (2 Co 13:14). Conocer la Trinidad no es una abstracción teológica; es conocer al Dios que es amor en su esencia misma, porque el amor requiere un amante, un amado y el vínculo de amor.",
    confesion: "Capítulo 2: De Dios y la Santa Trinidad",
    escrituras: [
      "Mateo 28:19",
      "2 Corintios 13:14",
      "Juan 1:1-3",
      "Hechos 5:3-4",
      "1 Corintios 8:6",
      "Juan 14:16-17",
    ],
    relacionadas: [],
    svg: "trinity",
  },
  {
    slug: "soberania-de-dios",
    icon: "👑",
    title: "La Soberanía de Dios",
    tag: "Teología Propia",
    filter: "dios",
    summary:
      "Dios gobierna absoluta y activamente sobre toda la creación: la naturaleza, las naciones, la historia, la salvación y cada detalle de nuestra vida.",
    keyVerse: {
      text: "En él asimismo tuvimos herencia, habiendo sido predestinados conforme al propósito del que hace todas las cosas según el designio de su voluntad.",
      ref: "Efesios 1:11",
    },
    simple:
      "La soberanía de Dios significa que Él tiene autoridad y poder absolutos sobre toda su creación. No es un espectador distante que observa cómo se desarrolla la historia. Es el Rey que gobierna activamente, obrando todas las cosas según el consejo de su voluntad. Nada ocurre fuera de su control. Ni los planes de las naciones, ni las decisiones de los líderes, ni los accidentes de la vida, ni siquiera el pecado del hombre escapan del control soberano de Dios. Sin embargo, Dios gobierna sin ser autor del pecado y sin violar la responsabilidad humana.",
    fondo:
      "La soberanía de Dios es el fundamento sobre el cual descansa toda la teología reformada. Si Dios no es soberano, entonces no es Dios. La Escritura está llena de declaraciones de la soberanía divina: 'Jehová reina' (Sal 93:1), 'Nuestro Dios está en los cielos; todo lo que quiso ha hecho' (Sal 115:3), 'Yo soy Dios, y no hay otro... mi consejo permanecerá, y haré todo lo que quiero' (Is 46:9-10).\n\nLa soberanía de Dios se extiende a todas las esferas:\n• Sobre la naturaleza: Él manda al sol, la lluvia, los vientos y las estaciones (Sal 135:6-7; Mt 5:45).\n• Sobre las naciones: Él levanta reyes y los depone; la historia de las naciones está en sus manos (Dn 4:34-35; Hch 17:26).\n• Sobre los detalles de nuestra vida: nuestros días están escritos en su libro antes de que exista uno solo de ellos (Sal 139:16; Pr 16:9).\n• Sobre la salvación: Él escoge, llama, regenera, justifica, santifica y glorifica (Ro 8:29-30; Ef 1:4-5).\n• Sobre el mal: José entendió que aunque sus hermanos intentaron hacerle mal, Dios lo encaminó para bien (Gn 50:20). Los evangelios nos dicen que la crucifixión de Cristo fue tanto la maldad de los hombres como el 'determinado consejo y anticipado conocimiento de Dios' (Hch 2:23).\n\nLa Confesión 1689, capítulo 3, afirma que Dios 'desde toda la eternidad, por el santísimo y sabio consejo de su propia voluntad, libre e inalterablemente, ordenó todo lo que sucede', y el capítulo 5 sobre la providencia expone cómo Dios gobierna todas las cosas. La confesión también cuida de distanciarse de la idea de que Dios es autor del pecado, afirmando que la soberanía de Dios y la responsabilidad humana coexisten misteriosamente.",
    historia:
      "La doctrina de la soberanía divina fue defendida vigorosamente por Agustín contra Pelagio, quien minimizaba la gracia y exaltaba la libertad humana. En la Reforma, Lutero escribió La voluntad determinada, argumentando que la voluntad humana está esclavizada al pecado y que solo la gracia soberana de Dios puede libertarla. Calvino estructuró toda su teología alrededor de la soberanía de Dios. Los cánones de Dordt (1618-1619) defendieron la soberanía de Dios en la salvación contra los arminianos. Los puritanos del siglo XVII vivieron y predicaron con una profunda conciencia de la soberanía de Dios, encontrando en ella consuelo, seguridad y motivación para la santidad.",
    malentendidos:
      "Algunos piensan que la soberanía de Dios significa que Dios es el autor del pecado. Esto es falso. La Escritura distingue entre el decreto de Dios y la causalidad del pecado. Dios permite el pecado, lo limita y lo encamina a sus fines, pero no lo causa ni lo aprueba. Santiago 1:13 dice: 'Dios no puede ser tentado por el mal, ni él tienta a nadie'. Otros creen que la soberanía de Dios anula la responsabilidad humana. Pablo responde a esta objeción en Romanos 9:19-20: '¿Por qué, pues, inculpa? Porque ¿quién ha resistido a su voluntad?' La respuesta de Pablo no es una explicación lógica, sino una afirmación de la soberanía de Dios y una advertencia contra la arrogancia humana. Finalmente, algunos piensan que la soberanía de Dios hace que la oración y la evangelización sean innecesarias. Todo lo contrario: Dios ha ordenado los fines y también los medios. Si Dios ha ordenado la salvación de los elegidos, también ha ordenado que sean salvos mediante la predicación del evangelio y las oraciones de su pueblo.",
    aplicacion:
      "La soberanía de Dios es una fuente inmensa de consuelo y seguridad. Cuando enfrentamos dificultades, enfermedades, pérdidas o persecuciones, sabemos que no ocurren por casualidad, sino que están bajo el control de nuestro Padre amoroso. Romanos 8:28 nos asegura que 'Dios hace que todas las cosas cooperen para el bien de los que le aman'. La soberanía de Dios también nos da seguridad en nuestra salvación: si Dios comenzó la buena obra en nosotros, la perfeccionará hasta el día de Jesucristo (Fil 1:6). En lugar de paralizarnos, la soberanía nos impulsa a orar con confianza, a evangelizar con esperanza y a vivir con valentía, sabiendo que el Rey de reyes gobierna todas las cosas para su gloria y nuestro bien.",
    confesion: "Capítulo 5: De la Providencia Divina",
    escrituras: [
      "Efesios 1:11",
      "Salmo 115:3",
      "Isaías 46:9-10",
      "Romanos 8:28",
      "Daniel 4:34-35",
      "Génesis 50:20",
    ],
    relacionadas: ["eleccion-incondicional"],
  },
  {
    slug: "union-hipostatica",
    icon: "✝️",
    title: "La Unión Hipostática",
    tag: "Cristología",
    filter: "cristo",
    summary:
      "Jesucristo es una sola persona divina que posee dos naturalezas completas y distintas: verdadero Dios y verdadero hombre, unidas sin confusión, sin cambio, sin división y sin separación.",
    keyVerse: {
      text: "Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.",
      ref: "Juan 1:14",
    },
    simple:
      "La unión hipostática es la doctrina de que Jesucristo es una sola persona con dos naturalezas completas: divina y humana. No es 'mitad Dios y mitad hombre' (como un centauro es mitad hombre y mitad caballo), sino que es completamente Dios y completamente hombre simultáneamente. Su naturaleza divina no se mezcló con la humana para formar una tercera cosa, ni su naturaleza humana absorbió a la divina, ni viceversa. Las dos naturalezas permanecen distintas pero unidas en una sola persona: la persona del Hijo eterno de Dios.\n\nEsto significa que Jesús tenía hambre (humano) pero alimentó a 5.000 (divino). Se cansaba (humano) pero calmó la tormenta (divino). Lloró en la tumba de Lázaro (humano) pero lo resucitó (divino). Murió en la cruz (humano) pero Su sangre tenía poder eterno para salvar (divino). Cada naturaleza hace lo que le es propio, pero siempre en la misma persona.\n\nEs un misterio profundo que no podemos comprender plenamente, pero que debemos afirmar con precisión porque de esta doctrina depende nuestra salvación. Solo alguien que es verdadero Dios puede pagar el precio infinito del pecado, y solo alguien que es verdadero hombre puede representarnos y morir en nuestro lugar.",
    fondo:
      "La unión hipostática (del griego hypostasis, 'persona' o 'subsistencia') describe cómo las dos naturalezas de Cristo se unen en una sola persona. La definición clásica fue formulada en el Concilio de Calcedonia (451 d.C.): 'un mismo Cristo, Hijo, Señor, unigénito, conocido en dos naturalezas, sin confusión, sin cambio, sin división, sin separación'.\n\nEstos cuatro adverbios son cruciales:\n\nSin confusión (asygchytōs): Las naturalezas no se mezclan ni se fusionan. La divinidad no se 'diluye' en la humanidad ni viceversa. Cristo no es una tercera cosa que no es ni Dios ni hombre, sino ambas cosas enteras.\n\nSin cambio (atreptōs): La naturaleza divina no se transforma en humana ni la humana en divina. Dios sigue siendo Dios; el hombre sigue siendo hombre. La encarnación no altera la esencia de ninguna de las dos naturalezas.\n\nSin división (adiairetōs): Las dos naturalezas no están separadas ni funcionan independientemente. No hay un 'Jesús divino' y un 'Jesús humano' que operen por separado. Todo lo que Cristo hace, lo hace como una sola persona.\n\nSin separación (achōristōs): Las naturalezas no pueden separarse ni siquiera en la muerte. Cuando Cristo murió, solo Su cuerpo humano murió, pero Su persona divina no se separó de Su naturaleza humana. La unión es permanente.\n\nLa comunicación de propiedades (communicatio idiomatum) es la enseñanza de que los atributos de ambas naturalezas pueden predicarse de la persona de Cristo. Por eso podemos decir que 'Dios murió en la cruz' (Hechos 20:28) — no porque la deidad muriera, sino porque la persona que murió era Dios. Igualmente, 'el Hijo del Hombre descendió del cielo' (Juan 3:13) — no porque Su humanidad viniera del cielo, sino porque la persona que es Hijo del Hombre también es el Hijo de Dios.\n\nLa Confesión 1689, capítulo 8, afirma: 'Dos naturalezas enteras, perfectas y distintas, fueron inseparablemente unidas en una persona, sin conversión, composición o confusión, la cual persona es muy Dios y muy homb...",
    historia:
      "La doctrina de la unión hipostática no surgió de la especulación teológica, sino de la necesidad de defender la enseñanza bíblica contra herejías que distorsionaban quién es Cristo.\n\nEl primer gran desafío fue el arrianismo (siglo IV), que negaba la divinidad plena de Cristo. Arrio enseñaba que el Hijo era una criatura, 'hubo un tiempo en que el Hijo no era'. El Concilio de Nicea (325) respondió afirmando que el Hijo es homousios (de la misma esencia) con el Padre. Pero Nicea estableció la deidad de Cristo sin definir aún cómo se relaciona con Su humanidad.\n\nEl apolinarismo (siglo IV) fue el primer intento de explicar la unión. Apolinar enseñaba que Cristo tenía cuerpo humano y alma humana, pero que el Logos divino reemplazaba Su espíritu humano. Esto hacía a Cristo menos que completamente humano. El Concilio de Constantinopla (381) lo condenó: 'Lo que no fue asumido, no fue sanado' — si Cristo no asumió una mente humana completa, nuestra mente no puede ser redimida.\n\nEl nestorianismo (siglo V) cayó al otro extremo: Nestorio enseñaba que las dos naturalezas estaban tan separadas que Cristo era casi dos personas unidas moralmente, no ontológicamente. María sería 'Cristotokos' (madre de Cristo) pero no 'Theotokos' (madre de Dios). El Concilio de Éfeso (431) afirmó que María es Theotokos porque la persona que nació de ella era Dios, y condenó la división de Cristo en dos sujetos.\n\nEl eutiquianismo o monofisitismo (siglo V) enseñaba que las dos naturalezas se fusionaron en una sola naturaleza divino-humana. Eutiques decía que la humanidad de Cristo fue 'absorbida' por Su divinidad 'como una gota de miel en el mar'. El Concilio de Calcedonia (451) respondió con la definición clásica de 'dos naturalezas sin confusión, sin cambio, sin división, sin separación'.\n\nEl monotelismo (siglo VII) fue otro intento: enseñaba que Cristo tenía dos naturalezas pero una sola voluntad (divina). El Tercer Concilio de Constantinopla (681) lo condenó, afirmando que Cristo t...",
    malentendidos:
      "Quizás el malentendido más común es pensar que Jesús 'dejó de ser Dios' cuando se hizo hombre. Filipenses 2:7 dice que Cristo se 'despojó a sí mismo' (kenosis), pero esto no significa que dejara de tener atributos divinos. Significa que voluntariamente restringió el uso independiente y manifiesto de esos atributos. El niño en Belén seguía siendo el Dios que sostiene el universo.\n\nOtro error común es pensar que Jesús tenía 'superpoderes' como un héroe de cómic. No. Los milagros de Jesús no los hizo por Su naturaleza divina directamente, sino por el poder del Espíritu Santo operando a través de Su humanidad. Esto es importante porque muestra que Cristo vivió como el segundo Adán, dependiendo del Espíritu en fe y obediencia — exactamente como nosotros debemos vivir.\n\nTambién se malinterpreta la inmutabilidad de Cristo. Si Cristo cambió al encarnarse, ¿cómo puede ser inmutable? La respuesta es que la naturaleza divina no cambió; la Palabra eterna simplemente asumió una naturaleza humana adicional. La persona del Hijo no cambió en Su esencia divina, sino que comenzó a existir también en forma humana.\n\nFinalmente, algunos piensan que la unión hipostática significa que la humanidad de Cristo es omnipresente (como enseñan los luteranos en la Cena del Señor). Pero la humanidad de Cristo, aunque unida a la divinidad, no adquiere atributos divinos. Su cuerpo humano está en el cielo a la diestra del Padre, no físicamente presente en la Cena. La presencia de Cristo en la Cena es espiritual, no física.",
    aplicacion:
      "La unión hipostática no es una doctrina abstracta; es el fundamento de nuestra salvación. Considera:\n\nNuestra redención requería un Redentor que fuera Dios y hombre. Como hombre, podía representarnos y sufrir en nuestro lugar. Como Dios, Su sufrimiento tenía valor infinito y Su obediencia era perfecta. Si Cristo no fuera ambos, estaríamos perdidos.\n\nNuestra justificación depende de la unión hipostática. La justicia que se nos imputa es la justicia de uno que es Dios y hombre: perfectamente obediente como hombre, infinitamente valiosa como Dios. No hay otra base para nuestra aceptación delante de Dios.\n\nNuestra santificación se fundamenta en Cristo. Él vivió la vida que nosotros no podemos vivir, en dependencia del Espíritu, en perfecta obediencia al Padre. Su humanidad santificada nos muestra que es posible vivir para Dios, y Su Espíritu nos une a Él para que Su vida fluya en la nuestra.\n\nNuestra esperanza escatológica descansa en Su humanidad glorificada. Cristo resucitó con un cuerpo humano real, y ese cuerpo está ahora a la diestra de Dios. Su humanidad glorificada es la garantía y el modelo de nuestra propia resurrección futura.\n\nEn la oración, nos acercamos confiadamente porque tenemos un Sumo Sacerdote que 'puede compadecerse de nuestras debilidades' (Hebreos 4:15). Él entiende nuestro sufrimiento porque lo experimentó como hombre. Pero también puede salvarnos completamente porque Él es Dios.\n\nLa unión hipostática significa que cuando miramos a Jesús, estamos viendo a Dios en carne humana. No hay un Dios distante e inaccesible; hay un Dios que se hizo cercano, que tomó nuestra naturaleza, que caminó entre nosotros, que murió nuestra muerte y que resucitó para nuestra justificación.",
    confesion: "Capítulo 8: De Cristo el Mediador",
    escrituras: [
      "Juan 1:1, 14",
      "Filipenses 2:5-11",
      "Colosenses 2:9",
      "Hebreos 2:14-17",
      "1 Timoteo 2:5",
      "Romanos 1:3-4",
      "Romanos 9:5",
      "Hebreos 1:1-3",
    ],
    relacionadas: ["la-trinidad", "expiacion-limitada"],
    svg: "cristologia-th",
  },
  {
    slug: "depravacion-total",
    icon: "✝️",
    title: "Depravación Total",
    tag: "TULIP — Primer Punto",
    filter: "salvacion",
    summary:
      "El pecado afectó cada aspecto de nuestro ser. Sin la gracia de Dios, somos incapaces de salvarnos ni siquiera deseamos hacerlo.",
    keyVerse: {
      text: "Y él os dio vida a vosotros, cuando estabais muertos en vuestros delitos y pecados.",
      ref: "Efesios 2:1",
    },
    simple:
      "La depravación total no significa que seamos tan malos como podríamos ser, sino que el pecado ha afectado cada parte de nuestro ser: nuestra mente (intelecto), nuestros afectos (emociones) y nuestra voluntad (elecciones). La imagen de Dios en nosotros está desfigurada, aunque no totalmente destruida. Espiritualmente, estamos muertos. Un muerto no puede decidir resucitar, ni puede desear la resurrección. Así nosotros, antes de la gracia regeneradora del Espíritu Santo, no podemos ni queremos venir a Cristo por nuestra propia voluntad.",
    fondo:
      "La doctrina de la depravación total se basa en la enseñanza bíblica de la caída del hombre en Adán. La Confesión 1689, capítulo 6, afirma que por la caída 'perdimos toda comunión con Dios, quedamos bajo su ira y maldición, y tan totalmente depravados en todas las facultades y partes del alma y del cuerpo, que somos incapaces por completo de hacer algún bien espiritual que acompañe a la salvación'. Esto no significa que el hombre no pueda hacer cosas externamente buenas —como ser un buen vecino, un ciudadano honesto o un padre amoroso— sino que nada de lo que hace puede merecer la salvación ni agradar a Dios en un sentido espiritual, porque no procede de la fe ni tiene como fin la gloria de Dios. Los reformadores hablaban de la 'esclavitud de la voluntad': la voluntad no está destruida sino encadenada al pecado. El hombre perdido no es neutral; es activamente hostil hacia Dios (Ro 8:7-8). La voluntad es libre para escoger entre opciones, pero está cautiva al pecado y no puede liberarse a sí misma.",
    historia:
      "Esta doctrina fue el punto de controversia entre Agustín y Pelagio en el siglo V. Pelagio enseñaba que el pecado de Adán solo afectó a Adán y que nacemos tan neutros como Adán fue creado. Agustín respondió que nacemos con una naturaleza caída heredada de Adán, que nos inclina al pecado. La Reforma reafirmó la posición agustiniana contra el semi-pelagianismo de la iglesia medieval tardía. Lutero escribió que el libre albedrío después de la caída es un 'título vacío' y que el hombre es como un caballo que solo puede ser montado por Dios o por Satanás. Calvino desarrolló la doctrina en sus Institutes. Los cánones de Dordt afirmaron la depravación total contra los arminianos, que enseñaban que el hombre conservaba suficiente capacidad para cooperar con la gracia.",
    malentendidos:
      "El malentendido más común es pensar que depravación total significa que todos son tan malos como podrían ser. No es eso. Significa que cada aspecto de nuestro ser está contaminado por el pecado y que somos incapaces de salvarnos a nosotros mismos. Otro error es pensar que esta doctrina lleva al fatalismo o a la desesperanza. Todo lo contrario: al reconocer nuestra total incapacidad, somos llevados a depender completamente de la gracia de Dios. La depravación total es el telón oscuro sobre el cual la gracia soberana de Dios brilla más gloriosamente. Además, la doctrina no niega la imagen de Dios en el hombre caído (Gn 9:6; St 3:9), aunque esa imagen está severamente dañada.",
    aplicacion:
      "La depravación total nos humilla profundamente. Nos recuerda que no tenemos nada de qué jactarnos delante de Dios. Nuestra salvación no se debe a nuestra sabiduría, bondad o decisión, sino únicamente a la gracia soberana de Dios. Esto nos hace agradecidos y dependientes. También nos hace pacientes con otros: si nosotros fuimos salvos por pura gracia, no podemos mirar con desdén a los que aún no han sido alcanzados. Finalmente, nos impulsa a la evangelización: si los hombres están muertos en pecado, solo Dios puede resucitarlos; nosotros somos simplemente instrumentos en sus manos.",
    confesion: "Capítulo 6: De la Caída del Hombre, del Pecado y de su Castigo",
    escrituras: [
      "Efesios 2:1-3",
      "Romanos 3:10-12",
      "Romanos 8:7-8",
      "Génesis 6:5",
      "Jeremías 17:9",
      "Juan 6:44",
    ],
    relacionadas: [
      "eleccion-incondicional",
      "expiacion-limitada",
      "gracia-irresistible",
      "perseverancia-santos",
    ],
    svg: "tulip",
  },
  {
    slug: "eleccion-incondicional",
    icon: "❤️",
    title: "Elección Incondicional",
    tag: "TULIP — Segundo Punto",
    filter: "salvacion",
    summary:
      "Dios, desde la eternidad, escogió soberanamente a ciertos pecadores para salvación, no por mérito previsto en ellos, sino solo por su amor y propósito.",
    keyVerse: {
      text: "Nos escogió en él antes de la fundación del mundo, para que fuésemos santos y sin mancha delante de él, en amor habiéndonos predestinado para adopción de hijos por medio de Jesucristo.",
      ref: "Efesios 1:4-5",
    },
    simple:
      "La elección incondicional es la verdad de que Dios, antes de crear el mundo, escogió libre y soberanamente a ciertas personas para ser salvas. Esta elección no se basa en algo bueno que Dios viera en ellas —ni en su fe, ni en sus obras, ni en su decisión prevista— sino únicamente en su soberano amor y propósito eterno. La elección es 'incondicional' porque las condiciones para la salvación (fe y arrepentimiento) no son la causa de la elección, sino el resultado. Dios no elige porque previó que creerían; creen porque Dios los eligió.",
    fondo:
      `La doctrina de la elección recorre toda la Escritura. Israel fue elegido no por su tamaño o bondad, sino por el amor de Dios (Dt 7:6-8). David fue elegido sobre sus hermanos mayores. Jacob fue amado y Esaú aborrecido antes de que hicieran bien o mal (Ro 9:11-13). En el Nuevo Testamento, Jesús dice a sus discípulos: 'No me elegisteis vosotros a mí, sino que yo os elegí a vosotros' (Jn 15:16). Pablo desarrolla la doctrina extensamente en Romanos 9-11 y Efesios 1.\n\nLa Confesión 1689, capítulo 3, afirma que 'Dios, desde toda la eternidad, por el santísimo y sabio consejo de su propia voluntad, libre e inalterablemente, ordenó todo lo que sucede' y que 'a algunos ángeles y hombres están predestinados y preordenados a vida eterna, mediante una elección particular e inmutable'. La confesión también afirma que la elección es 'para alabanza de la gloria de su gracia'.\n\nEs importante entender que la elección no es injusta. La justicia exige que el pecador sea castigado. Si Dios diera a todos lo que merecen, nadie sería salvo. La elección es un acto de gracia, no de injusticia. Como dijo Spurgeon: 'Si Dios hubiera escrito en la frente de cada persona condenada: "Mereces esto", el cielo podría guardar silencio. Pero si Dios hubiera escrito en la frente de cualquier persona salva: "Tú mereces esto", el infierno podría responder: "No, no lo mereces. Es por gracia"'. La elección garantiza que la salvación sea enteramente por gracia y enteramente para la gloria de Dios.`,
    historia:
      "La doctrina de la elección fue enseñada por Agustín, quien enfatizó que la gracia de Dios es irresistible y soberana. Tomás de Aquino también enseñó la predestinación, aunque con matices diferentes. En la Reforma, tanto Lutero como Calvino afirmaron la elección soberana. Calvino la desarrolló más extensamente, haciéndola central en su teología. Los cánones de Dordt afirmaron la elección incondicional contra el arminianismo (1619). La Confesión Bautista de Fe de 1689 sigue la tradición reformada. Figuras bautistas como John Gill, Charles Spurgeon y A.W. Pink defendieron y predicaron esta doctrina con pasión.",
    malentendidos:
      "El malentendido más común es pensar que la elección hace que Dios sea injusto o arbitrario. Pablo responde a esta objeción en Romanos 9:14-24, argumentando que Dios tiene el derecho soberano de mostrar misericordia a quien quiera. Otro error es pensar que la elección desalienta la evangelización. La historia prueba lo contrario: los grandes evangelistas reformados —Pablo, Agustín, Lutero, Calvino, los puritanos, Whitefield, Spurgeon, Lloyd-Jones— predicaron con fervor precisamente porque creían que Dios salvaría a sus elegidos mediante la predicación. Finalmente, algunos piensan que la elección lleva a la presunción. Pero la elección bíblica produce humildad (no hay nada en nosotros que nos distinga), seguridad (nuestra salvación está en las manos de Dios) y gratitud (somos salvos solo por gracia).",
    aplicacion:
      "La elección nos humilla profundamente. Si Dios nos escogió no por algo bueno en nosotros, sino solo por su amor, entonces no tenemos nada de qué jactarnos. También nos da seguridad: nuestra salvación no depende de nuestra frágil decisión, sino del propósito eterno e inmutable de Dios. Además, nos anima a la oración y la evangelización: oramos con confianza porque sabemos que Dios tiene un pueblo escogido, y predicamos fielmente porque Dios usa la predicación para llamar a sus elegidos. Finalmente, la elección nos llena de asombro y adoración: '¡Oh profundidad de las riquezas de la sabiduría y del conocimiento de Dios! ¡Cuán insondables son sus juicios e inescrutables sus caminos!' (Ro 11:33).",
    confesion: "Capítulo 3: Del Decreto de Dios",
    escrituras: [
      "Efesios 1:4-5",
      "Romanos 8:28-30",
      "Romanos 9:11-16",
      "Juan 15:16",
      "2 Tesalonicenses 2:13",
      "1 Pedro 1:2",
    ],
    relacionadas: [
      "depravacion-total",
      "expiacion-limitada",
      "gracia-irresistible",
      "perseverancia-santos",
    ],
    svg: "tulip",
  },
  {
    slug: "expiacion-limitada",
    icon: "🩸",
    title: "Expiación Limitada",
    tag: "TULIP — Tercer Punto",
    filter: "salvacion",
    summary:
      "Cristo murió efectivamente por su pueblo, asegurando real y eficazmente la salvación de todos aquellos por quienes murió.",
    keyVerse: {
      text: "Yo soy el buen pastor; el buen pastor su vida da por las ovejas.",
      ref: "Juan 10:11",
    },
    simple:
      "La expiación limitada (o redención particular) enseña que cuando Cristo murió en la cruz, no solo hizo posible la salvación para todos, sino que realmente aseguró la salvación de su pueblo. Su muerte fue suficiente para todos los pecadores de todos los tiempos (es infinita en valor), pero fue eficiente solo para los elegidos. En otras palabras, Cristo realmente salvó a aquellos por quienes murió, no solo hizo posible que se salvaran si ellos decidían cooperar.",
    fondo:
      "La pregunta clave en esta controversia es: ¿Cuál fue el propósito y la naturaleza de la muerte de Cristo? ¿Vino a hacer la salvación posible o a asegurarla realmente? La Biblia consistentemente enseña que Cristo murió por un pueblo específico. El ángel dijo a José: 'Llamarás su nombre Jesús, porque él salvará a su pueblo de sus pecados' (Mt 1:21). Jesús dijo: 'Doy mi vida por las ovejas' (Jn 10:15), no por las cabras. Pablo dice que Cristo amó a la iglesia y se entregó por ella (Ef 5:25), no por el mundo indistintamente.\n\nLa Confesión 1689, capítulo 8, afirma que Cristo 'entregó su vida como rescate por los elegidos'. Esto no significa que el valor de la muerte de Cristo sea limitado; al contrario, es infinito. La pregunta es sobre el propósito. Si Cristo murió con la intención de salvar a todos, entonces su muerte fue un fracaso porque no todos son salvos. Pero si murió con la intención de salvar a su pueblo, su muerte fue completamente exitosa.\n\nLos textos que hablan de Cristo muriendo 'por el mundo' (Jn 3:16) o 'por todos' (1 Ti 2:6) se refieren a personas de toda clase, nación y condición, no a cada individuo sin excepción. Apocalipsis 5:9 dice que Cristo redimió 'para Dios con su sangre, de todo linaje, lengua, pueblo y nación'. La expiación es universal en cuanto a su valor y oferta, pero particular en cuanto a su propósito y aplicación.",
    historia:
      "Esta doctrina fue formulada en los cánones de Dordt (1619) en respuesta a los arminianos, quienes enseñaban que Cristo murió por todos por igual, haciendo la salvación posible pero no segura. Los reformadores anteriores (Lutero, Calvino) enseñaban una redención particular, aunque no con tanto detalle. Calvino escribió: 'Es un hecho universalmente reconocido que Cristo vino a expiar los pecados del mundo; pero la disputa sobre si el mundo significa todos los hombres sin excepción o solo los elegidos... no debe ser decidida precipitadamente'. La tradición bautista particular (Spurgeon, Gill, Pink) ha mantenido consistentemente esta doctrina. Spurgeon dijo famosamente: 'Si Cristo murió por todos los hombres, entonces ¿por qué no todos son salvos? La respuesta arminiana es: porque no quieren. Pero eso hace que la voluntad del hombre sea más poderosa que la sangre de Cristo'.",
    malentendidos:
      "El malentendido más común es pensar que la expiación limitada significa que el amor de Dios es limitado o que Cristo no murió por todos. La Escritura dice que Dios ama al mundo (Jn 3:16) y que Cristo es la propiciación por los pecados de todo el mundo (1 Jn 2:2). Pero el amor de Dios tiene diferentes aspectos: hay un amor general hacia toda la creación (Sal 145:9) y un amor especial y salvífico hacia los elegidos (Mal 1:2-3; Ro 9:13). Otro error es pensar que esta doctrina impide ofrecer el evangelio libremente a todos. Los bautistas reformados predican el evangelio 'a toda criatura' (Mr 16:15), ofreciendo a todos gratuitamente a Cristo, sabiendo que la sangre de Cristo es suficiente para todos y que el llamamiento del evangelio es sincero para todos los que oyen.",
    aplicacion:
      "La expiación limitada nos asegura que la salvación de Cristo es completa y eficaz. No es un 'tal vez' sino un 'consumado es'. Podemos tener plena confianza de que aquellos por quienes Cristo murió serán ciertamente salvos. Esto nos da seguridad y paz. También nos humilla: no fuimos salvos porque nuestra fe fuera mejor, sino porque Cristo realmente nos compró con su sangre. Finalmente, nos motiva a predicar el evangelio con osadía, sabiendo que la sangre de Cristo es suficiente para cualquier pecador que se arrepienta y crea.",
    confesion: "Capítulo 8: De Cristo el Mediador",
    escrituras: [
      "Juan 10:11-15",
      "Mateo 1:21",
      "Efesios 5:25",
      "Isaías 53:11-12",
      "Apocalipsis 5:9",
      "Juan 17:9",
    ],
    relacionadas: [
      "eleccion-incondicional",
      "justificacion-por-fe",
    ],
    svg: "tulip",
  },
  {
    slug: "gracia-irresistible",
    icon: "💨",
    title: "Gracia Irresistible",
    tag: "TULIP — Cuarto Punto",
    filter: "salvacion",
    summary:
      "Cuando Dios llama eficazmente a sus elegidos, el Espíritu Santo obra en ellos de tal manera que vienen libre y gozosamente a Cristo.",
    keyVerse: {
      text: "Ninguno puede venir a mí, si el Padre que me envió no le trajere; y yo le resucitaré en el día postrero.",
      ref: "Juan 6:44",
    },
    simple:
      "La gracia irresistible no significa que Dios nos obligue a aceptarlo contra nuestra voluntad, como quien arrastra a alguien pataleando. Significa que Dios transforma nuestra voluntad para que, libremente y con gozo, queramos lo que antes rechazábamos. Es como cuando el Espíritu abrió el corazón de Lidia (Hch 16:14): no fue contra su voluntad, sino que le dio una nueva voluntad. Lo que antes odiaba ahora lo ama. La gracia irresistible es la obra soberana del Espíritu que vence nuestra resistencia natural y nos hace venir a Cristo voluntariamente.",
    fondo:
      "La Biblia distingue entre un 'llamado externo' y un 'llamado interno' o eficaz. El llamado externo es la predicación del evangelio que se dirige a todos los que oyen. Muchos lo rechazan. El llamado interno es la obra del Espíritu Santo que abre el corazón, ilumina la mente y renueva la voluntad para responder al evangelio con fe. Este llamado siempre tiene éxito porque es la obra poderosa de Dios creando vida donde había muerte.\n\nLa Confesión 1689, capítulo 10, describe el llamamiento eficaz como la obra de Dios 'por su Palabra y Espíritu, sacando a los elegidos del estado de pecado y muerte en que están por naturaleza, a la gracia y salvación por Jesucristo; iluminando sus mentes espiritualmente y salvadoramente para que entiendan las cosas de Dios, quitando su corazón de piedra y dándoles un corazón de carne, renovando sus voluntades y determinándolas por su todopoderosa gracia a aquello que es bueno, y atrayéndolos eficazmente a Jesucristo'.\n\nEsta doctrina reconoce que la voluntad humana, después de la caída, no es neutral sino hostil a Dios. Un corazón que ama el pecado no puede decidir amar a Dios sin ser transformado. La gracia irresistible es esa transformación. Calvino la comparó con la resurrección de Lázaro: Jesús lo llamó y Lázaro salió. Lázaro no cooperó con la resurrección; estaba muerto. Pero cuando Jesús lo llamó, el poder de su voz le dio vida para responder. Así, cuando Dios llama eficazmente, su poder nos da vida para responder.",
    historia:
      "Agustín enseñó que la gracia de Dios es eficaz y que Dios obra en el hombre tanto el querer como el hacer. Contra los semi-pelagianos, insistió en que la gracia no es una ayuda que podemos aceptar o rechazar, sino una obra soberana que nos capacita para querer y hacer. En la Reforma, Lutero desarrolló esta idea en La voluntad determinada. Calvino la integró en su doctrina de la vocación eficaz. Los cánones de Dordt afirmaron que Dios infunde nuevas cualidades en la voluntad, haciéndola pasar de muerta a viva, de rebelde a obediente. Jonathan Edwards escribió su tratado Sobre la libertad de la voluntad, argumentando que la voluntad siempre sigue al motivo más fuerte y que la gracia irresistible cambia los motivos del corazón.",
    malentendidos:
      "El malentendido más común es pensar que la gracia irresistible significa que Dios nos salva contra nuestra voluntad, como si fuéramos robots. Esto es falso. Dios no nos viola; nos transforma. La persona que es salva por la gracia irresistible viene a Cristo 'con toda su alma' porque ahora quiere a Cristo de verdad. Otro error es pensar que la gracia irresistible elimina la necesidad de predicar el evangelio. Todo lo contrario: Dios usa la predicación como el medio por el cual llama a sus elegidos. Como dice Pablo: 'la fe viene por el oír, y el oír por la palabra de Dios' (Ro 10:17).",
    aplicacion:
      "La gracia irresistible nos da seguridad: si nuestra salvación dependiera de nuestra capacidad de decidir por Dios, cualquier podría fallar. Pero la gracia de Dios es más fuerte que nuestra resistencia. También nos humilla: no fuimos salvos porque fuéramos más sabios o más dispuestos que otros; la diferencia la hizo Dios. Finalmente, nos motiva a orar por los incrédulos: pedimos a Dios que haga en ellos lo que hizo en nosotros, que abra sus corazones como abrió el de Lidia. Nada es imposible para la gracia soberana de Dios.",
    confesion: "Capítulo 10: Del Llamamiento Eficaz",
    escrituras: [
      "Juan 6:37-44",
      "Hechos 16:14",
      "Efesios 2:4-5",
      "Ezequiel 36:26-27",
      "2 Corintios 4:6",
      "Filipenses 2:13",
    ],
    relacionadas: [
      "depravacion-total",
      "eleccion-incondicional",
      "regeneracion",
    ],
    svg: "tulip",
  },
  {
    slug: "regeneracion",
    icon: "🕊️",
    title: "La Regeneración",
    tag: "Soteriología",
    filter: "salvacion",
    summary:
      "La regeneración es la obra soberana del Espíritu Santo por la cual recibimos una nueva naturaleza y somos hechos vivos espiritualmente.",
    keyVerse: {
      text: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.",
      ref: "2 Corintios 5:17",
    },
    simple:
      "La regeneración es el nuevo nacimiento del que habló Jesús con Nicodemo (Jn 3:3). Es la obra del Espíritu Santo que nos da vida espiritual cuando estábamos muertos en pecado. No es una mejora de la vieja naturaleza, sino una nueva creación. No es cooperación humana, sino obra exclusiva de Dios. Así como no participamos en nuestro nacimiento físico, no participamos en nuestro nacimiento espiritual. Somos pasivos en la regeneración; Dios es el actor. Pero el resultado es que recibimos un nuevo corazón que ama a Dios, desea la santidad y responde al evangelio con fe.",
    fondo:
      "La regeneración es el comienzo de la vida cristiana. Es la puerta de entrada a la salvación. Sin ella, nadie puede ver el reino de Dios (Jn 3:3). La teología reformada distingue entre la regeneración y la conversión. La regeneración es la obra de Dios en nosotros; la conversión es nuestra respuesta a Dios —arrepentimiento y fe. La regeneración precede a la fe: primero Dios nos da vida, y luego respondemos creyendo. 1 Juan 5:1 dice: 'Todo aquel que cree que Jesús es el Cristo, es nacido de Dios'. La fe es la evidencia del nuevo nacimiento, no su causa.\n\nEzequiel 36:26-27 describe la regeneración proféticamente: 'Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros; y quitaré el corazón de piedra de en medio de vuestra carne, y os daré corazón de carne. Y pondré mi Espíritu dentro de vosotros, y haré que andéis en mis estatutos'. La regeneración incluye iluminación (la mente es iluminada para entender la verdad), renovación (la voluntad es renovada para amar a Dios) y habitación (el Espíritu Santo mora en el creyente).\n\nLa Confesión 1689, capítulo 10, habla del llamamiento eficaz que incluye la regeneración: 'Dios determina a aquellos que son llamados eficazmente, por su Palabra y Espíritu, a sacarlos del estado de pecado y muerte en que están por naturaleza, a la gracia y salvación por Jesucristo, iluminando sus mentes espiritualmente y salvadoramente para que entiendan las cosas de Dios, quitando su corazón de piedra y dándoles un corazón de carne, renovando sus voluntades y determinándolas por su todopoderosa gracia a aquello que es bueno, y atrayéndolos eficazmente a Jesucristo'.",
    historia:
      "Jesús enseñó la regeneración a Nicodemo, un maestro de Israel que no entendía el nuevo nacimiento (Jn 3). Agustín desarrolló la doctrina en su lucha contra el pelagianismo, insistiendo en que la gracia de Dios es preventiva y eficaz. Calvino escribió extensamente sobre la regeneración como obra del Espíritu Santo. Los puritanos como John Owen escribieron tratados profundos sobre la obra del Espíritu en la regeneración. El avivamiento bajo Whitefield y Edwards se caracterizó por una predicación que enfatizaba la necesidad del nuevo nacimiento, no como una decisión humana sino como una obra divina.",
    malentendidos:
      "El malentendido más común es pensar que la regeneración es lo mismo que el bautismo (bautismo regeneracionista). Esto es rechazado por los bautistas reformados, que insisten en que el bautismo es una ordenanza para creyentes, no un medio de regeneración. Otro error es pensar que la regeneración es simplemente 'volverse religioso' o 'decidir seguir a Jesús'. La regeneración no es una decisión humana, sino una creación divina. Una persona puede decidir cambiar su comportamiento sin haber nacido de nuevo. La regeneración produce un cambio radical y sobrenatural que solo Dios puede hacer. Finalmente, algunos piensan que la regeneración es una experiencia emocional o un momento específico. Puede serlo, pero no necesariamente. Lo importante no es cuándo o cómo ocurrió, sino si ha ocurrido.",
    aplicacion:
      "La regeneración nos humilla porque reconocemos que no contribuimos en nada a nuestro nuevo nacimiento. Dios nos dio vida cuando estábamos muertos. También nos da seguridad: la vida que Dios da es eterna; no puede extinguirse. Además, nos anima a examinarnos: '¿Tenemos las marcas del nuevo nacimiento?' El apóstol Juan enumera estas marcas: fe en Cristo (1 Jn 5:1), amor a los hermanos (1 Jn 3:14), práctica de la justicia (1 Jn 2:29), victoria sobre el pecado (1 Jn 3:9), y deseo de la venida de Cristo (1 Jn 3:3).",
    confesion: "Capítulo 10: Del Llamamiento Eficaz",
    escrituras: [
      "Juan 3:3-8",
      "Ezequiel 36:26-27",
      "2 Corintios 5:17",
      "Efesios 2:4-5",
      "1 Pedro 1:3",
      "1 Juan 5:1",
    ],
    relacionadas: [
      "gracia-irresistible",
      "justificacion-por-fe",
      "santificacion",
    ],
    svg: "ordo",
  },
  {
    slug: "justificacion-por-fe",
    icon: "⚖️",
    title: "Justificación por Fe Sola",
    tag: "Soteriología",
    filter: "salvacion",
    summary:
      "Somos declarados justos delante de Dios solo por la fe en Jesucristo, no por nuestras obras. La justicia perfecta de Cristo nos es imputada.",
    keyVerse: {
      text: "Concluimos, pues, que el hombre es justificado por fe sin las obras de la ley.",
      ref: "Romanos 3:28",
    },
    simple:
      "La justificación es un acto legal de Dios en el cual Él declara justo al pecador que cree en Jesucristo. No es que el pecador se vuelva justo interiormente (eso es la santificación), sino que es declarado justo sobre la base de la justicia de Cristo que le es imputada (acreditada). Es como si Dios pusiera la cuenta del pecador en la columna del 'pagado' y la justicia de Cristo en la columna del 'acreditado'. La fe no es la base de nuestra justificación, sino el instrumento por el cual recibimos la justicia de Cristo.",
    fondo:
      "La justificación por fe sola es 'el artículo por el cual la iglesia se mantiene en pie' (articulus stantis et cadentis ecclesiae). Fue la doctrina central de la Reforma y distingue el evangelio bíblico de cualquier otro sistema religioso. El problema que la justificación resuelve es este: ¿Cómo puede un Dios santo aceptar a un pecador culpable? La respuesta es: por la imputación de la justicia de Cristo.\n\nLa palabra 'justificar' en el Nuevo Testamento (dikaioō) es un término forense o legal. Significa 'declarar justo', no 'hacer justo'. Esto se ve claramente en Proverbios 17:15: 'El que justifica al impío y el que condena al justo, ambos son abominación a Jehová'. Cuando Dios justifica al impío, lo declara justo. Pero ¿cómo puede Dios hacer esto sin violar su justicia? Porque la justicia de Cristo es imputada al pecador.\n\nPablo desarrolla esta doctrina en Romanos 3-5 y Gálatas. En Adán, el pecado fue imputado a la raza humana; en Cristo, la justicia es imputada a los creyentes (Ro 5:12-19). 2 Corintios 5:21 lo resume: 'Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él'.\n\nLa Confesión 1689, capítulo 11, enseña que la justificación es 'un acto de la gracia gratuita de Dios' que incluye 'el perdón de los pecados y la aceptación de los creyentes como justos delante de Dios, solo por la justicia de Cristo imputada y recibida por la fe sola'.\n\nLas buenas obras no son la causa ni la base de la justificación, sino su fruto necesario. Como dijo Calvino: 'Somos justificados solo por la fe, pero no por una fe que está sola'. La fe verdadera siempre produce buenas obras, pero las obras no son la raíz de la salvación, sino el fruto.",
    historia:
      "La doctrina fue oscurecida en la iglesia medieval, donde se enseñaba que la justificación era un proceso de volverse justo mediante la infusión de gracia a través de los sacramentos y las buenas obras. Lutero, mientras estudiaba Romanos, descubrió que la justicia de Dios no es una justicia activa que castiga, sino una justicia pasiva que se recibe por fe. Esto transformó su vida y desencadenó la Reforma. La justificación por fe sola fue afirmada en las confesiones luteranas y reformadas. El Concilio de Trento (1547) anatematizó la doctrina, afirmando que la justificación incluye la renovación interior y que la fe debe ser formada por el amor. La Confesión Bautista de 1689 sigue la tradición reformada en esta doctrina.",
    malentendidos:
      "El malentendido más común es pensar que 'solo por fe' significa que las buenas obras no son importantes. La Biblia dice claramente que la fe sin obras es muerta (St 2:17). Las obras son evidencia necesaria de la fe verdadera, pero no son la base de nuestra aceptación delante de Dios. Otro error es pensar que la justificación es un proceso continuo. La justificación es un acto único y completo: el pecador es declarado justo en el momento en que cree, y esa declaración nunca cambia. Finalmente, algunos confunden justificación con santificación. La justificación es lo que Dios hace por nosotros (declararnos justos); la santificación es lo que Dios hace en nosotros (hacernos santos).",
    aplicacion:
      "La justificación por fe sola nos da paz con Dios (Ro 5:1). Podemos estar seguros de que somos aceptados por Dios no por nuestros méritos, sino por la perfecta justicia de Cristo. Esto nos libera de la esclavitud del esfuerzo religioso y nos motiva a servir a Dios por gratitud, no por miedo. También nos humilla: no hay lugar para la jactancia en nuestra salvación. Todo es gracia. Finalmente, nos impulsa a vivir en santidad: no para ser salvos, sino porque somos salvos. Como dijo Pablo: '¿Perseveraremos en pecado para que la gracia abunde? ¡En ninguna manera!' (Ro 6:1-2).",
    confesion: "Capítulo 11: De la Justificación",
    escrituras: [
      "Romanos 3:21-28",
      "2 Corintios 5:21",
      "Romanos 4:4-6",
      "Gálatas 2:16",
      "Filipenses 3:8-9",
      "Efesios 2:8-9",
    ],
    relacionadas: ["regeneracion", "santificacion"],
    svg: "solas",
  },
  {
    slug: "santificacion",
    icon: "🔥",
    title: "La Santificación",
    tag: "Soteriología",
    filter: "salvacion",
    summary:
      "La santificación es la obra progresiva de Dios por la cual el creyente es transformado a la imagen de Cristo mediante el poder del Espíritu Santo.",
    keyVerse: {
      text: "Seguid la paz con todos, y la santidad, sin la cual nadie verá al Señor.",
      ref: "Hebreos 12:14",
    },
    simple:
      "La santificación es el proceso por el cual Dios nos hace santos. A diferencia de la justificación (que es instantánea y completa), la santificación es progresiva y dura toda la vida. En la justificación, Dios declara justo al pecador; en la santificación, Dios transforma al pecador en justo. La santificación tiene tres aspectos: posicional (somos hechos santos en Cristo), progresiva (somos transformados día a día), y final (seremos completamente santos en la gloria). La santificación no es opcional; es una evidencia necesaria de la salvación verdadera.",
    fondo:
      "La santificación se basa en la unión del creyente con Cristo. Por estar unidos a Cristo en su muerte y resurrección, hemos muerto al pecado y vivimos para Dios (Ro 6:1-14). La santificación es la obra de Dios en nosotros (Fil 2:13) pero también requiere nuestra participación activa (Fil 2:12). Pablo dice: 'ocupaos en vuestra salvación con temor y temblor, porque Dios es el que en vosotros produce así el querer como el hacer'.\n\nLa Confesión 1689, capítulo 13, enseña que 'los que están unidos a Cristo y son efectivamente llamados y regenerados, teniendo un nuevo corazón y un nuevo espíritu creados en ellos mediante la eficacia de la muerte y resurrección de Cristo, son también santificados real y personalmente, por la misma virtud, por la Palabra y el Espíritu que mora en ellos'. La santificación se extiende a toda la persona —mente, voluntad, afectos, cuerpo— aunque imperfectamente en esta vida.\n\nLa santificación no es un logro humano sino una obra divina. Sin embargo, el creyente tiene la responsabilidad de 'mortificar las obras de la carne' (Ro 8:13) y 'vestirse del nuevo hombre' (Col 3:10). Los medios de gracia —la Palabra, la oración, los sacramentos, la comunión de los santos— son los instrumentos que Dios usa para santificarnos. Como dijo Cristo: 'Santifícalos en tu verdad; tu palabra es verdad' (Jn 17:17).",
    historia:
      "La doctrina de la santificación fue desarrollada particularmente por los puritanos, que escribieron extensamente sobre la vida cristiana práctica. John Owen escribió Sobre la mortificación del pecado, un tratado clásico sobre cómo los creyentes deben luchar contra el pecado. Thomas Brooks escribió El tesoro escondido delicioso de la santificación práctica. Los puritanos enfatizaban que la santificación es la evidencia principal de la justificación. Como dijo Owen: 'La santificación es la meta de la predicación del evangelio, y debe ser el objetivo de todo creyente'. En la tradición bautista reformada, la santificación siempre se ha enseñado como una obra gradual y progresiva, no como una experiencia instantánea de 'perfección' o 'segunda bendición'.",
    malentendidos:
      "El malentendido más común es pensar que la santificación es opcional o que solo es para 'cristianos avanzados'. La Biblia dice que sin santidad nadie verá al Señor (He 12:14). No es opcional; es evidencia de salvación. Otro error es pensar que la santificación es instantánea o que podemos alcanzar la perfección sin pecado en esta vida. La Confesión 1689 afirma que la santificación es 'imperfecta en esta vida, quedando aún algunos restos de corrupción en cada parte del creyente'. La perfección solo se alcanza en la glorificación. Finalmente, algunos piensan que la santificación es solo esfuerzo humano (legalismo) o solo obra divina sin nuestra participación (quietismo). La Biblia enseña ambas cosas: Dios obra y nosotros trabajamos.",
    aplicacion:
      "La santificación nos llama a una lucha activa contra el pecado. No podemos ser pasivos. Debemos 'mortificar' (dar muerte) al pecado en nuestras vidas diariamente mediante el poder del Espíritu. También nos llama a usar los medios de gracia: lectura y meditación de la Palabra, oración constante, participación en la Cena del Señor, comunión con otros creyentes, y disciplina espiritual. Además, la santificación nos da esperanza: aunque el progreso puede ser lento y con tropiezos, Dios no abandona la obra que comenzó en nosotros. 'El que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo' (Fil 1:6).",
    confesion: "Capítulo 13: De la Santificación",
    escrituras: [
      "Romanos 6:1-14",
      "Filipenses 2:12-13",
      "1 Tesalonicenses 4:3-4",
      "Hebreos 12:14",
      "1 Pedro 1:14-16",
      "Romanos 8:13",
    ],
    relacionadas: ["justificacion-por-fe", "regeneracion", "perseverancia-santos"],
  },
  {
    slug: "perseverancia-santos",
    icon: "🛡️",
    title: "Perseverancia de los Santos",
    tag: "TULIP — Quinto Punto",
    filter: "salvacion",
    summary:
      "Aquellos que Dios verdaderamente salvó serán preservados por su poder y perseverarán en la fe hasta el final. Un verdadero cristiano no puede perder su salvación.",
    keyVerse: {
      text: "Y yo les doy vida eterna; y no perecerán jamás, ni nadie las arrebatará de mi mano.",
      ref: "Juan 10:28",
    },
    simple:
      "La perseverancia de los santos significa que los que Dios ha elegido, redimido y regenerado serán preservados por su poder y perseverarán en la fe hasta el fin. No perderán su salvación, no porque sean fuertes en sí mismos, sino porque Dios los guarda. Esto no significa que el cristiano nunca peque o que nunca tenga dudas. Significa que Dios no permitirá que ninguno de los suyos caiga finalmente de la gracia. Los que perseveran hasta el fin demuestran que eran verdaderos creyentes; los que se apartan demuestran que nunca lo fueron.",
    fondo:
      "La perseverancia de los santos se basa en la naturaleza de la salvación. Si la salvación es por gracia y no por obras, entonces no puede perderse por falta de obras. Si Dios nos escogió antes de la fundación del mundo, su propósito no puede ser frustrado. Si Cristo murió realmente por nosotros, su sangre no puede ser ineficaz. Si el Espíritu nos regeneró, la nueva vida no puede extinguirse.\n\nJesús lo prometió claramente: 'Todo lo que el Padre me da, vendrá a mí; y al que a mí viene, no le echo fuera... y esta es la voluntad del Padre, que todo aquel que ve al Hijo y cree en él, tenga vida eterna; y yo le resucitaré en el día postrero' (Jn 6:37-40). Pablo estaba seguro: 'Porque estoy convencido de que ni la muerte ni la vida, ni ángeles ni principados, ni lo presente ni lo por venir, ni potestades, ni lo alto ni lo profundo, ni ninguna otra cosa creada podrá separarnos del amor de Dios que es en Cristo Jesús Señor nuestro' (Ro 8:38-39).\n\nLa Confesión 1689, capítulo 17, afirma que 'los que Dios ha aceptado en el Amado, llamados eficazmente y santificados por su Espíritu, no pueden caer total ni finalmente del estado de gracia, sino que perseverarán hasta el fin y serán salvos eternamente'. Las razones que da son: la inmutabilidad del decreto de elección, la eficacia de la muerte de Cristo, la habitación constante del Espíritu Santo, y la naturaleza del pacto de gracia.\n\nEs importante distinguir entre la seguridad bíblica y la presunción. La seguridad nace de ver las evidencias de la gracia en nuestra vida: amor a Dios, deseo de santidad, obediencia a la Palabra, amor a los hermanos (1 Jn). La presunción es confiar en una profesión de fe sin frutos. Como dice 2 Corintios 13:5: 'Examinaos a vosotros mismos si estáis en la fe'.",
    historia:
      "Esta doctrina fue afirmada por Agustín, quien enseñó que Dios da a los elegidos el don de la perseverancia final. Los cánones de Dordt la defendieron contra los arminianos, que enseñaban que un verdadero creyente podía caer de la gracia y perderse. Los bautistas particulares siempre han sostenido esta doctrina. Los puritanos escribieron extensamente sobre la seguridad de la fe y la perseverancia. John Bunyan escribió El progreso del peregrino, una alegoría de la perseverancia del cristiano desde la Ciudad de Destrucción hasta la Ciudad Celestial. Spurgeon predicó con frecuencia sobre la seguridad que tienen los creyentes en Cristo.",
    malentendidos:
      "El malentendido más común es pensar que la perseverancia de los santos significa que una persona puede vivir en pecado deliberado y aún así ser salva. Esto es falso. La perseverancia no es la seguridad de que podemos pecar sin consecuencias, sino la seguridad de que Dios nos guardará de la apostasía final. El verdadero creyente que peca será disciplinado por Dios y restaurado al arrepentimiento (He 12:6-8; 1 Jn 1:9). Otro error es pensar que los que se apartan de la fe demuestran que perdieron su salvación. 1 Juan 2:19 responde: 'Salieron de nosotros, pero no eran de nosotros; porque si hubiesen sido de nosotros, habrían permanecido con nosotros; pero salieron para que se manifestase que no todos son de nosotros'. Su salida demuestra que nunca fueron verdaderamente salvos, no que perdieron su salvación.",
    aplicacion:
      "La perseverancia de los santos nos da gran consuelo y seguridad. Sabemos que nuestra salvación no depende de nuestra frágil constancia, sino del poderoso poder de Dios que nos guarda. Esto no nos lleva a la pereza espiritual, sino a la gratitud y al esfuerzo: 'ocupaos en vuestra salvación con temor y temblor, porque Dios es el que en vosotros produce así el querer como el hacer, por su buena voluntad' (Fil 2:12-13). Nos anima a seguir adelante en la carrera de la fe, sabiendo que el que comenzó la buena obra en nosotros la perfeccionará hasta el día de Jesucristo (Fil 1:6).",
    confesion: "Capítulo 17: De la Perseverancia de los Santos",
    escrituras: [
      "Juan 10:27-29",
      "Romanos 8:38-39",
      "Filipenses 1:6",
      "1 Pedro 1:5",
      "Judas 24-25",
      "1 Juan 2:19",
    ],
    relacionadas: [
      "eleccion-incondicional",
      "gracia-irresistible",
      "regeneracion",
    ],
    svg: "tulip",
  },
  {
    slug: "bautismo-del-creyente",
    icon: "🌊",
    title: "Bautismo del Creyente",
    tag: "Eclesiología",
    filter: "iglesia",
    summary:
      "El bautismo es por inmersión en agua y es solo para aquellos que han hecho una profesión personal y creíble de fe en Jesucristo.",
    keyVerse: {
      text: "Y ahora, ¿por qué te detienes? Levántate y bautízate, y lava tus pecados, invocando su nombre.",
      ref: "Hechos 22:16",
    },
    simple:
      "El bautismo del creyente (creyobautismo) es la posición distintiva de los bautistas reformados. El bautismo es una ordenanza de Cristo para aquellos que han creído en Él y se han arrepentido de sus pecados. El bautismo no salva, sino que simboliza nuestra unión con Cristo en su muerte, sepultura y resurrección. La inmersión es el único modo bíblico de bautismo porque la palabra 'bautizar' significa 'sumergir' y porque Romanos 6:4 describe el bautismo como ser sepultados con Cristo.",
    fondo:
      "El bautismo del creyente se fundamenta en el Nuevo Testamento, donde el bautismo siempre sigue a la fe. En Hechos 2:41, 'los que recibieron su palabra fueron bautizados'. En Hechos 8:12, 'cuando creyeron a Felipe... eran bautizados'. En Hechos 16:14-15, Lidia fue bautizada después que el Señor abrió su corazón. En Hechos 18:8, Crispo creyó y fue bautizado. No hay un solo ejemplo de bautismo infantil en el Nuevo Testamento. El bautismo presupone fe y arrepentimiento.\n\nLa Confesión 1689, capítulo 28, afirma que 'el bautismo es una ordenanza del Nuevo Testamento, instituido por Jesucristo, para ser administrado a aquellos que profesan arrepentimiento hacia Dios y fe en nuestro Señor Jesucristo, y a nadie más'. La confesión también afirma que 'la inmersión o sumersión de la persona en el agua es necesaria' para la administración correcta de esta ordenanza.\n\nLos bautistas reformados no rechazan el pacto; simplemente creen que el Nuevo Pacto es diferente del Antiguo Pacto en cuanto a la membresía. En el Antiguo Pacto, los hijos de los creyentes eran incluidos por nacimiento físico; en el Nuevo Pacto, la membresía es por nuevo nacimiento espiritual. El bautismo reemplazó a la circuncisión como señal del pacto, pero la señal del Nuevo Pacto es para creyentes, no para infantes, porque el Nuevo Pacto se caracteriza por el conocimiento del Señor y el perdón de pecados (Jer 31:31-34; He 8:8-12).",
    historia:
      "Los bautistas particulares surgieron en el siglo XVII en Inglaterra, distinguiéndose de los bautistas generales (arminianos) y de los paedobautistas (presbiterianos, congregacionales). Eran calvinistas en soteriología y bautistas en eclesiología. Su primera confesión de fe fue la Primera Confesión Bautista de Londres (1644), seguida por la Segunda Confesión (1677/1689). Figuras históricas como John Bunyan, Charles Spurgeon, Benjamin Keach y Abraham Booth defendieron el bautismo del creyente. Aunque Bunyan tuvo diferencias con otros bautistas sobre la comunión abierta, todos coincidían en que el bautismo es para creyentes solamente.",
    malentendidos:
      "El malentendido más común es pensar que los bautistas reformados creen que el bautismo no es importante. No es así. El bautismo es una ordenanza de Cristo y es necesario para la obediencia, aunque no para la salvación. Otro error es pensar que el bautismo infantil no tiene valor. Los bautistas reformados respetan a los hermanos paedobautistas pero creen que la práctica no tiene fundamento bíblico. Finalmente, algunos piensan que el modo de bautismo (inmersión vs. aspersión) es irrelevante. Pero la palabra 'bautizar' significa sumergir, y el simbolismo bíblico de muerte, sepultura y resurrección requiere la inmersión (Ro 6:4; Col 2:12).",
    aplicacion:
      "El bautismo es el primer paso de obediencia después de la conversión. Todo creyente debe ser bautizado por inmersión como testimonio público de su fe en Cristo. El bautismo nos identifica con la muerte y resurrección de Cristo, nos une a su iglesia local, y nos compromete a una nueva vida de santidad. Si eres creyente y no has sido bautizado, el mandato de Cristo es claro: 'Arrepiéntase y bautícese cada uno de vosotros' (Hch 2:38).",
    confesion: "Capítulo 28: Del Bautismo",
    escrituras: [
      "Hechos 2:38-41",
      "Romanos 6:3-4",
      "Mateo 28:19-20",
      "Hechos 8:36-38",
      "Hechos 16:14-15",
      "Colosenses 2:12",
    ],
    relacionadas: ["cena-del-senor", "iglesia"],
  },
  {
    slug: "cena-del-senor",
    icon: "🍞",
    title: "La Cena del Señor",
    tag: "Eclesiología",
    filter: "iglesia",
    summary:
      "La Cena del Señor es una ordenanza memorial y espiritual donde los creyentes participan de Cristo por fe, no físicamente sino espiritualmente.",
    keyVerse: {
      text: "Haced esto en memoria de mí.",
      ref: "1 Corintios 11:24",
    },
    simple:
      "La Cena del Señor es una ordenanza instituida por Cristo la noche antes de su crucifixión. Es un memorial de su muerte, una comunión con su cuerpo y sangre, y un anticipo de la cena de las bodas del Cordero. Los bautistas reformados rechazan tanto la transubstanciación (Cristo presente físicamente) como el mero memorialismo (solo un recuerdo vacío). Se afirma una presencia espiritual de Cristo en la Cena: los creyentes se alimentan de Cristo por fe, no por la boca física. La Cena es un medio de gracia.",
    fondo:
      "La Cena del Señor tiene múltiples significados en el Nuevo Testamento. Es un memorial que proclama la muerte de Cristo (1 Co 11:26). Es una comunión con Cristo y su cuerpo, la iglesia (1 Co 10:16-17). Es un anticipo de la cena de las bodas del Cordero (Mt 26:29). Es un medio de gracia por el cual Dios fortalece nuestra fe.\n\nLa Confesión 1689, capítulo 29, enseña que la Cena del Señor es 'una ordenanza del Nuevo Testamento, instituida por Jesucristo, para ser administrada a los que son bautizados y participan de la iglesia visible'. La confesión rechaza la transubstanciación (el pan y el vino se convierten literalmente en el cuerpo y sangre de Cristo), la consubstanciación (Cristo está presente físicamente junto con los elementos), y la misa católica como un sacrificio propiciatorio.\n\nEn la Cena, Cristo está presente espiritualmente. No descendió del cielo para estar en el pan, sino que por el Espíritu Santo el creyente es elevado espiritualmente para tener comunión con Cristo en el cielo. La presencia de Cristo en la Cena es real, pero espiritual, no física. Como dice la Confesión 1689: 'El cuerpo y la sangre de Cristo no están presentes corporal o carnalmente en los elementos, sino espiritualmente, y sin embargo real y verdaderamente, para la fe de los creyentes'.",
    historia:
      "La Cena del Señor ha sido tema de controversia desde la Reforma. Lutero defendió la consubstanciación; Zuinglio defendió un memorial simbólico; Calvino buscó una vía media: la presencia espiritual. Los bautistas particulares siguieron a Calvino en esta doctrina. La Confesión 1689 refleja la posición calvinista. Los puritanos escribieron extensamente sobre la preparación necesaria para participar de la Cena dignamente. Thomas Watson dijo: 'La Cena es una medicina para el alma débil, un cordial para el corazón desmayado, un vínculo de comunión con Cristo'.",
    malentendidos:
      "Un malentendido común es pensar que la Cena es un sacrificio que se repite. La Biblia dice que Cristo ofreció un solo sacrificio para siempre (He 10:12-14). La Cena es un memorial, no un sacrificio. Otro error es pensar que la Cena salva o que es necesaria para la salvación. La Cena es para creyentes. Finalmente, algunos piensan que cualquiera puede participar, pero Pablo advierte que participar indignamente trae juicio (1 Co 11:27-31). La Cena es para creyentes bautizados que están en comunión con una iglesia local y que pueden examinarse a sí mismos.",
    aplicacion:
      "La Cena del Señor debe celebrarse regularmente en la iglesia local. Es un medio de gracia que fortalece nuestra fe, nos recuerda el sacrificio de Cristo, y nos une como cuerpo. Debemos prepararnos para la Cena examinándonos a nosotros mismos, confesando nuestros pecados, y reconciliándonos con nuestros hermanos. La Cena no es un ritual vacío; es un encuentro con Cristo resucitado. Participa en ella con frecuencia, con reverencia y con gozo.",
    confesion: "Capítulo 29: De la Cena del Señor",
    escrituras: [
      "1 Corintios 11:23-29",
      "Mateo 26:26-29",
      "1 Corintios 10:16-17",
      "Hechos 2:42",
      "Hechos 20:7",
      "Apocalipsis 19:9",
    ],
    relacionadas: ["bautismo-del-creyente", "iglesia"],
  },
  {
    slug: "iglesia",
    icon: "🏛️",
    title: "El Gobierno de la Iglesia",
    tag: "Eclesiología",
    filter: "iglesia",
    summary:
      "Cada iglesia local es autónoma y gobernada por Cristo como Cabeza, a través de ancianos bíblicamente calificados y el gobierno congregacional.",
    keyVerse: {
      text: "Y él mismo constituyó a unos, apóstoles; a otros, profetas; a otros, evangelistas; a otros, pastores y maestros, a fin de perfeccionar a los santos para la obra del ministerio.",
      ref: "Efesios 4:11-12",
    },
    simple:
      "La iglesia no es un edificio ni una organización humana. Es el cuerpo de Cristo, compuesto por todos los verdaderos creyentes, que se reúne en asambleas locales para adorar a Dios, edificarse mutuamente y proclamar el evangelio. El gobierno de la iglesia es congregacional con ancianos: Cristo es la Cabeza suprema, los ancianos (pastores) lideran y enseñan, los diáconos sirven, y la congregación tiene la autoridad final en decisiones mayores. Ninguna institución externa (denominación, obispo, papa) tiene autoridad sobre la iglesia local.",
    fondo:
      "La iglesia puede ser considerada en dos aspectos: universal e invisible, y local y visible. La iglesia universal e invisible está compuesta por todos los elegidos de todas las edades y lugares. La iglesia local y visible está compuesta por aquellos que profesan fe en Cristo y se reúnen en un lugar específico. La Confesión 1689, capítulo 26, trata de la iglesia y afirma que 'la iglesia católica o universal... consiste en todo el número de los elegidos que han sido, son o serán reunidos en uno bajo Cristo, su Cabeza'. Respecto a la iglesia local, la confesión enseña que 'a cada iglesia particular le ha dado el Señor todo el poder y autoridad que sea necesario para llevar a cabo el culto a Dios y el orden en la iglesia'.\n\nEl gobierno de la iglesia bautista reformada se caracteriza por:\n• Cristo es la Cabeza de la iglesia (Col 1:18). Ningún hombre o institución puede usurpar su lugar.\n• La iglesia es gobernada por ancianos (presbiterio), también llamados pastores u obispos. Los ancianos deben cumplir con las calificaciones de 1 Timoteo 3:1-7 y Tito 1:5-9. Hay dos tipos de ancianos: los que enseñan (pastores-maestros) y los que gobiernan (ancianos gobernantes), aunque todos deben ser aptos para enseñar.\n• Los diáconos sirven en necesidades prácticas para que los ancianos se dediquen a la oración y al ministerio de la Palabra (Hch 6:1-6).\n• La congregación tiene la autoridad final en la admisión y disciplina de miembros, la elección de oficiales y las decisiones mayores de la iglesia. El gobierno no es una democracia pura sino una república donde Cristo gobierna a través de su Palabra y los líderes son reconocidos por la congregación.\n• Las iglesias locales son autónomas e independientes, aunque pueden asociarse voluntariamente con otras iglesias para la cooperación en misiones, educación y otros fines. Ninguna asociación tiene autoridad jerárquica sobre las iglesias locales.",
    historia:
      "Los bautistas particulares del siglo XVII desarrollaron su eclesiología en el contexto de la lucha por la libertad religiosa en Inglaterra. Rechazaban tanto el episcopalianismo (gobierno por obispos) como el presbiterianismo (gobierno por asambleas jerárquicas), aunque compartían mucho con los congregacionalistas. La Confesión Bautista de 1689 refleja esta visión. Los bautistas han sido históricamente defensores de la libertad de conciencia y la separación entre iglesia y estado. Figuras como John Leland y Roger Williams abogaron por la libertad religiosa en América. La eclesiología bautista reformada valora el gobierno de ancianos plurales, el congregacionalismo, y el papel crucial de la disciplina de la iglesia.",
    malentendidos:
      "Un malentendido común es pensar que el gobierno congregacional significa que cada persona hace lo que quiere (democracia pura). No es así. La congregación busca la voluntad de Cristo en las Escrituras y actúa bajo su autoridad. Otro error es pensar que los ancianos son 'el gobierno' y la congregación no tiene voz. Los ancianos lideran, pero no dominan. Deben gobernar 'no como teniendo señorío sobre los que están a cargo de vosotros, sino siendo ejemplos de la grey' (1 P 5:3). Finalmente, algunos piensan que la autonomía de la iglesia local significa que no hay rendición de cuentas. Las iglesias son responsables ante Cristo y pueden asociarse para la rendición de cuentas mutuas.",
    aplicacion:
      "La iglesia no es opcional para el cristiano. Somos miembros del cuerpo de Cristo y necesitamos la comunión de los santos. Debes unirte a una iglesia local que predique fielmente la Palabra, administre correctamente las ordenanzas y practique la disciplina bíblica. Sujétate a tus ancianos, ama a tus hermanos, usa tus dones para servir, y participa regularmente en la adoración y la Cena del Señor. La iglesia es la familia de Dios, y Dios es glorificado cuando su pueblo vive en unidad y amor.",
    confesion: "Capítulo 26: De la Iglesia",
    escrituras: [
      "Colosenses 1:18",
      "Efesios 4:11-12",
      "Hechos 2:42",
      "1 Timoteo 3:1-7",
      "Tito 1:5-9",
      "Mateo 18:15-20",
    ],
    relacionadas: [
      "bautismo-del-creyente",
      "cena-del-senor",
    ],
  },
];

export default doctrinas;
