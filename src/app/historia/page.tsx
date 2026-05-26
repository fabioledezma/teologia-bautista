"use client";

import { useState } from "react";
import Link from "next/link";

interface Evento {
  year: string;
  event: string;
  importancia: string;
}

interface Periodo {
  id: string;
  icon: string;
  label: string;
  date: string;
  color: string;
  tag: string;
  desc: string;
  detalle: string;
  eventos: Evento[];
  figuras: { name: string; role: string }[];
  perspectivaReformada: string;
  confesion: string;
}

const periodos: Periodo[] = [
  {
    id: "preniceno",
    icon: "🔥",
    label: "Pre-Niceno",
    date: "100 – 313 d.C.",
    color: "#b8860b",
    tag: "Iglesia Perseguida",
    desc: "Desde la muerte del último apóstol hasta el Edicto de Milán. La Iglesia crece bajo persecución, define el canon, y combate las primeras herejías.",
    detalle:
      "Este período abarca desde la muerte del apóstol Juan (c. 100 d.C.) hasta el Edicto de Milán (313 d.C.), cuando Constantino legalizó el cristianismo. Fue una era de formación y definición para la Iglesia. Los padres apostólicos (Clemente, Ignacio, Policarpo) fueron discípulos directos de los apóstoles y preservaron la tradición apostólica. Los apologistas (Justino Mártir, Tertuliano) defendieron la fe contra acusaciones paganas. La Iglesia desarrolló el canon del Nuevo Testamento, estableció el credo apostólico como regla de fe, y definió la estructura episcopal. Las persecuciones romanas, desde Nerón hasta Diocleciano, purificaron a la Iglesia y demostraron que la sangre de los mártires era semilla de nuevos creyentes. Las herejías del gnosticismo y el montanismo forzaron a la Iglesia a definir claramente la ortodoxia.",
    eventos: [
      { year: "c. 100", event: "Muerte de Juan", importancia: "Fin de la era apostólica" },
      { year: "c. 110", event: "Ignacio escribe sus cartas", importancia: "Defensa del episcopado monárquico" },
      { year: "c. 155", event: "Justino Mártir escribe", importancia: "Primera apología sistemática" },
      { year: "c. 160", event: "Nacimiento de Tertuliano", importancia: "Primer teólogo latino" },
      { year: "c. 170", event: "Muratori: canon NT", importancia: "Primera lista del canon neotestamentario" },
      { year: "c. 180", event: "Ireneo: Contra Herejías", importancia: "Refutación clásica del gnosticismo" },
      { year: "197", event: "Tertuliano: Apologeticum", importancia: "Defensa legal del cristianismo" },
      { year: "c. 200", event: "Escuela de Alejandría", importancia: "Teología alegórica con Clemente y Orígenes" },
      { year: "249", event: "Persecución de Decio", importancia: "Primera persecución imperial general" },
      { year: "c. 250", event: "Cipriano escribe", importancia: "Teología de la unidad de la Iglesia" },
      { year: "256", event: "Sínodos del bautismo", importancia: "Disputa sobre rebautismo de herejes" },
      { year: "303", event: "Persecución de Diocleciano", importancia: "La más severa de la era romana" },
      { year: "313", event: "Edicto de Milán", importancia: "Legalización del cristianismo" },
    ],
    figuras: [
      { name: "Clemente de Roma", role: "Padre apostólico, obispo de Roma (c. 96)" },
      { name: "Ignacio de Antioquía", role: "Mártir, defendió la deidad de Cristo" },
      { name: "Policarpo de Esmirna", role: "Discípulo de Juan, mártir (155)" },
      { name: "Justino Mártir", role: "Apologista, filósofo convertido, mártir (165)" },
      { name: "Ireneo de Lyon", role: "Refutó el gnosticismo, transmitió la tradición apostólica" },
      { name: "Tertuliano", role: "Primer teólogo en latín, formuló la Trinidad" },
      { name: "Cipriano de Cartago", role: "Teólogo de la Iglesia, mártir (258)" },
      { name: "Orígenes", role: "Gran erudito bíblico, alegorista (254)" },
    ],
    perspectivaReformada:
      "Los bautistas reformados vemos este período como la edad de oro de la Iglesia antes de la corrupción constantiniana. La Iglesia era una minoría perseguida que dependía de la sola Escritura y el testimonio del Espíritu. Aunque el paedobautismo ya aparecía en la práctica de algunos (Cipriano), el testimonio dominante del siglo II era el bautismo de creyentes. Las confesiones de fe de la Iglesia primitiva (el Credo Apostólico, la Regla de Fe) eran resúmenes de la doctrina apostólica, no sustitutos de la Escritura. La persecución mantuvo pura la Iglesia; cuando cesó, comenzaron a infiltrarse prácticas mundanas que eventualmente llevaron al papado medieval.",
    confesion: "Capítulo 1: De las Sagradas Escrituras — 'La autoridad de la Santa Escritura... depende totalmente de Dios' (1689.1.4)",
  },
  {
    id: "niceno",
    icon: "⚜️",
    label: "Concilio de Nicea",
    date: "325 d.C.",
    color: "#d4af37",
    tag: "La Definición de la Ortodoxia",
    desc: "El primer concilio ecuménico convocado por Constantino para resolver la controversia arriana. Afirmó la deidad plena de Cristo (homousios).",
    detalle:
      "El Concilio de Nicea (325 d.C.) fue el primer concilio ecuménico de la Iglesia, convocado por el emperador Constantino para resolver la controversia desatada por Arrio, un presbítero de Alejandría que enseñaba que el Hijo era una criatura —el más alto y primero de todos los seres creados, pero no Dios eterno. Arrio decía: 'Hubo un tiempo en que el Hijo no existía'. Atanasio, diácono de Alejandría, defendió que el Hijo es eterno y consustancial (homousios) con el Padre. El concilio, con aproximadamente 300 obispos (en su mayoría orientales), condenó el arrianismo y formuló el Credo Niceno, afirmando que Cristo es 'Dios verdadero de Dios verdadero, engendrado, no creado, de la misma esencia (homousios) que el Padre'. El concilio también fijó la fecha de la Pascua y emitió cánones sobre la disciplina eclesiástica. El arrianismo, aunque condenado, continuó por décadas y requirió la labor incansable de Atanasio para ser finalmente derrotado en el Concilio de Constantinopla (381).",
    eventos: [
      { year: "318", event: "Arrio comienza su enseñanza", importancia: "Cristo no es eterno, es una criatura" },
      { year: "319", event: "Alejandro condena a Arrio", importancia: "Sínodo local en Alejandría" },
      { year: "325", event: "Concilio de Nicea", importancia: "300 obispos condenan el arrianismo" },
      { year: "325", event: "Credo Niceno formulado", importancia: "'Homousios' — de la misma esencia" },
      { year: "328", event: "Atanasio obispo de Alejandría", importancia: "Defensor principal de la ortodoxia nicena" },
      { year: "335", event: "Atanasio exiliado", importancia: "Primero de cinco exilios por la fe nicena" },
      { year: "339", event: "Hilario de Poitiers escribe", importancia: "Defensa de Nicea en Occidente" },
      { year: "359", event: "Concilio de Rímini-Seleucia", importancia: "Triunfo temporal del arrianismo" },
      { year: "361", event: "Juliano el Apóstata", importancia: "Último emperador pagano" },
      { year: "362", event: "Sínodo de Alejandría", importancia: "Atanasio unifica la ortodoxia" },
      { year: "373", event: "Muerte de Atanasio", importancia: "El padre de la ortodoxia" },
      { year: "381", event: "Concilio de Constantinopla I", importancia: "Se confirma Nicea y se afirma la deidad del Espíritu Santo" },
    ],
    figuras: [
      { name: "Constantino", role: "Emperador romano, convocó el concilio" },
      { name: "Arrio", role: "Presbítero hereje que negó la deidad de Cristo" },
      { name: "Atanasio", role: "Defensor de la ortodoxia nicena, exiliado cinco veces" },
      { name: "Osio de Córdoba", role: "Presidió el concilio como representante del papa" },
      { name: "Eusebio de Cesarea", role: "Historiador, firmó el credo con reservas" },
      { name: "Marcelo de Ancira", role: "Defensor extremo de Nicea, luego acusado de sabelianismo" },
      { name: "Eusebio de Nicomedia", role: "Líder arriano, bautizó a Constantino en su lecho de muerte" },
    ],
    perspectivaReformada:
      "El Concilio de Nicea es fundamental para los bautistas reformados porque estableció la doctrina bíblica de la deidad de Cristo, que es esencial para el evangelio. Si Cristo no es Dios eterno, no puede salvar. Nuestra Confesión de 1689 (Cap. 2) afirma la Trinidad exactamente en los términos nicenos: 'En este Ser divino e infinito hay tres personas: el Padre, el Verbo o Hijo, y el Espíritu Santo; de una sola sustancia, poder y eternidad'. La controversia arriana nos enseña que la Iglesia debe estar siempre vigilante contra la reinterpretación racionalista de la Escritura. Arrio usaba la Escritura, pero la interpretaba fuera de la analogía de la fe. Nicea también nos enseña el valor de los concilios y credos como ayudas para la interpretación bíblica, siempre subordinados a la Escritura misma.",
    confesion: "Capítulo 2: De Dios y la Santa Trinidad — 'En este Ser divino e infinito hay tres personas... de una sola sustancia' (1689.2.3)",
  },
  {
    id: "posniceno",
    icon: "🏛️",
    label: "Post-Niceno",
    date: "325 – 590 d.C.",
    color: "#2d5a8b",
    tag: "Iglesia Imperial",
    desc: "El cristianismo se convierte en religión oficial del Imperio. Concilios cristológicos, los Padres Capadocios, Agustín, y la caída de Roma.",
    detalle:
      "Este período comienza con el Concilio de Nicea y termina con el inicio del pontificado de Gregorio Magno (590 d.C.), que marca la transición a la Edad Media. Fue una era de grandes definiciones doctrinales y también de corrupción creciente. Los Padres Capadocios (Basilio Magno, Gregorio Nacianceno, Gregorio de Nisa) refinaron la teología trinitaria. Los concilios de Constantinopla (381), Éfeso (431) y Calcedonia (451) definieron la cristología: Cristo es una persona con dos naturalezas, verdadero Dios y verdadero hombre. Agustín de Hipona (354–430) emergió como el más grande teólogo occidental, escribiendo obras fundamentales como 'Confesiones', 'La Ciudad de Dios' y 'Sobre la Trinidad'. Su lucha contra el pelagianismo estableció la doctrina de la gracia que la Reforma recuperaría. El Imperio Romano de Occidente cayó en 476, y la Iglesia tuvo que navegar el caos político resultante. El monaquismo floreció, preservando el conocimiento clásico y bíblico.",
    eventos: [
      { year: "313", event: "Edicto de Milán", importancia: "El cristianismo legalizado por Constantino" },
      { year: "325", event: "Concilio de Nicea", importancia: "Deidad de Cristo, condena del arrianismo" },
      { year: "330", event: "Constantinopla nueva capital", importancia: "Centro del cristianismo oriental" },
      { year: "367", event: "Atanasio: lista del NT", importancia: "Canon del Nuevo Testamento completo" },
      { year: "381", event: "Concilio de Constantinopla I", importancia: "Deidad del Espíritu Santo" },
      { year: "397", event: "Agustín: Confesiones", importancia: "Autobiografía espiritual clásica" },
      { year: "410", event: "Saco de Roma por Alarico", importancia: "Agustín escribe La Ciudad de Dios" },
      { year: "431", event: "Concilio de Éfeso", importancia: "María Theotokos, condena de Nestorio" },
      { year: "451", event: "Concilio de Calcedonia", importancia: "Dos naturalezas de Cristo, una persona" },
      { year: "476", event: "Caída del Imperio Romano Occidental", importancia: "Fin de la antigüedad clásica" },
      { year: "529", event: "Concilio de Orange", importancia: "Condena del semipelagianismo, gracia eficaz" },
      { year: "553", event: "Segundo Concilio de Constantinopla", importancia: "Condena de los Tres Capítulos" },
      { year: "590", event: "Gregorio Magno, papa", importancia: "Inicio del papado medieval" },
    ],
    figuras: [
      { name: "Constantino", role: "Primer emperador cristiano, patrón de la Iglesia" },
      { name: "Atanasio", role: "Defensor de Nicea, padre de la ortodoxia" },
      { name: "Basilio Magno", role: "Padre capadocio, regla monástica, liturgia" },
      { name: "Gregorio Nacianceno", role: "Teólogo trinitario, 'el Teólogo'" },
      { name: "Gregorio de Nisa", role: "Filósofo cristiano, teología mística" },
      { name: "Agustín de Hipona", role: "El más grande teólogo occidental, gracia, Trinidad" },
      { name: "Jerónimo", role: "Tradujo la Vulgata latina de la Biblia" },
      { name: "Juan Crisóstomo", role: "Predicador excepcional, liturgia bizantina" },
      { name: "Gregorio Magno", role: "Último padre latino, reformador litúrgico" },
    ],
    perspectivaReformada:
      "Este período es agridulce para los bautistas reformados. Por un lado, los grandes concilios cristológicos nos dieron definiciones precisas de la Trinidad y la persona de Cristo que la Confesión 1689 preserva. Agustín, con su doctrina de la gracia soberana, es el padre teológico de la Reforma. Por otro lado, la unión iglesia-estado iniciada por Constantino corrompió profundamente a la Iglesia. El bautismo de infantes comenzó a generalizarse, el papado emergió como institución política, y la Iglesia adoptó métodos del estado romano. La caída de Roma fue vista por Agustín como una advertencia: la Ciudad de Dios no es el Imperio Cristiano. Los bautistas reformados valoramos la teología patrística pero rechazamos las innovaciones constantinianas.",
    confesion: "Capítulo 8: De Cristo el Mediador — 'El Hijo de Dios... tomó sobre sí la verdadera naturaleza humana' (1689.8.2)",
  },
  {
    id: "medieval",
    icon: "⛪",
    label: "Medieval",
    date: "590 – 1517 d.C.",
    color: "#6b3fa0",
    tag: "Corrupción y Preparación",
    desc: "El dominio del papado, el escolasticismo, y la preparación para la Reforma. Herejías medievales y la preservación de la verdad por grupos disidentes.",
    detalle:
      "El período medieval (o Edad Media) se extiende desde Gregorio Magno (590) hasta el inicio de la Reforma Protestante (1517). Fue una era de gran complejidad para la Iglesia. Por un lado, el papado alcanzó su máximo poder político y militar; el sistema sacramental se desarrolló completamente; la teología escolástica (Tomás de Aquino, Anselmo, Duns Escoto) produjo obras maestras de síntesis teológica. Por otro lado, la corrupción generalizada del clero, la venta de indulgencias y la ignorancia bíblica del pueblo llevaron a profundos abusos. Los movimientos disidentes —valdenses, lolardos, husitas— mantuvieron viva la verdad bíblica. Juan Wycliffe (1324–1384) tradujo la Biblia al inglés y atacó la transubstanciación y el papado. Juan Hus (1372–1415) fue quemado por predicar la autoridad de la Escritura sobre la del papa. El escolasticismo desarrolló la teología sistemática pero a menudo perdió de vista el evangelio bíblico. La caída de Constantinopla (1453) llevó a eruditos griegos a Italia, preparando el Renacimiento y el redescubrimiento del texto bíblico original.",
    eventos: [
      { year: "590", event: "Gregorio Magno papa", importancia: "Último padre latino, reforma litúrgica" },
      { year: "664", event: "Sínodo de Whitby", importancia: "Iglesia inglesa bajo Roma" },
      { year: "800", event: "Carlomagno emperador", importancia: "Renovación del Imperio Romano, alianza iglesia-estado" },
      { year: "1054", event: "Cisma Oriente-Occidente", importancia: "División entre Roma y Constantinopla" },
      { year: "1095", event: "Primera Cruzada", importancia: "Guerra santa, mezcla de fe y violencia" },
      { year: "c. 1170", event: "Valdenses comienzan", importancia: "Predicación laica, traducción bíblica" },
      { year: "1215", event: "Concilio Laterano IV", importancia: "Define la transubstanciación" },
      { year: "1274", event: "Tomás: Summa Theologiae", importancia: "Culminación de la teología escolástica" },
      { year: "1324", event: "Muerte de Wycliffe", importancia: "Traductor de la Biblia al inglés, precursor de la Reforma" },
      { year: "1415", event: "Hus quemado en la hoguera", importancia: "Mártir de la Reforma antes de la Reforma" },
      { year: "1453", event: "Caída de Constantinopla", importancia: "Fin del Imperio Bizantino, diáspora de eruditos griegos" },
      { year: "1455", event: "Biblia de Gutenberg", importancia: "La imprenta revoluciona el acceso a la Escritura" },
      { year: "1517", event: "95 Tesis de Lutero", importancia: "Inicio de la Reforma Protestante" },
    ],
    figuras: [
      { name: "Gregorio Magno", role: "Reformó la liturgia, envió misioneros a Inglaterra" },
      { name: "Carlomagno", role: "Emperador, promovió la educación y la liturgia romana" },
      { name: "Anselmo de Canterbury", role: "Cur Deus Homo, argumento ontológico" },
      { name: "Tomás de Aquino", role: "Suma Teológica, síntesis fe-razón" },
      { name: "Juan Wycliffe", role: "Traductor de la Biblia al inglés, 'Estrella de la Mañana de la Reforma'" },
      { name: "Juan Hus", role: "Mártir, autoridad de la Escritura sobre el papa" },
      { name: "Pedro Valdo", role: "Fundador de los valdenses, predicación laica" },
    ],
    perspectivaReformada:
      "Los bautistas reformados vemos la Edad Media como un período de profunda corrupción pero también de preparación providencial. El sistema sacramental romano —que ataba la gracia a los sacramentos administrados por sacerdotes— negaba el evangelio de la justificación por fe sola. La autoridad papal, el culto a los santos, las indulgencias y la misa como sacrificio sustituyeron la obra suficiente de Cristo. Sin embargo, Dios nunca dejó a su pueblo sin testimonio: los valdenses preservaron la predicación bíblica, Wycliffe y Hus proclamaron la autoridad de la Escritura, y la providencia divina preparó la imprenta y el renacimiento del griego para la Reforma. La Confesión 1689 rechaza explícitamente la transubstanciación, la misa sacrificial y la adoración de imágenes (Cap. 22, 29).",
    confesion: "Capítulo 29: De la Cena del Señor — 'La Cena del Señor no debe ser reservada, llevada en procesión, levantada ni adorada' (1689.29.6)",
  },
  {
    id: "reforma",
    icon: "🕯️",
    label: "Reforma Protestante",
    date: "1517 – 1648 d.C.",
    color: "#c04040",
    tag: "Restauración del Evangelio",
    desc: "Lutero, Calvino y los reformadores restauran el evangelio bíblico: sola Scriptura, sola fide, sola gratia, solo Christus, soli Deo gloria.",
    detalle:
      "La Reforma Protestante fue el mayor avivamiento de la Iglesia desde el siglo I. Comenzó cuando Martín Lutero, un monje agustino, publicó sus 95 Tesis el 31 de octubre de 1517, desafiando las indulgencias y la autoridad papal. Lutero redescubrió la doctrina de la justificación por fe sola al estudiar Romanos y Gálatas. En la Dieta de Worms (1521) declaró: 'No puedo ni quiero retractarme... Aquí estoy, no puedo hacer otra cosa'. La Reforma se extendió rápidamente por Europa. Ulrico Zuinglio reformó Zúrich. Juan Calvino estableció en Ginebra un centro de enseñanza reformada, escribiendo sus 'Institutos de la Religión Cristiana' (1539, edición final 1559). La Reforma Inglesa bajo Enrique VIII y luego Isabel I dio origen a la Iglesia Anglicana. La Reforma Radical (anabautistas) insistió en el bautismo de creyentes y la separación iglesia-estado. Los reformadores establecieron las solas de la Reforma: Sola Scriptura, Sola Fide, Sola Gratia, Solo Christus, Soli Deo Gloria. La Confesión Bautista de Fe de 1689 es heredera directa de esta tradición.",
    eventos: [
      { year: "1517", event: "95 Tesis de Lutero", importancia: "Desafío a las indulgencias, inicio de la Reforma" },
      { year: "1519", event: "Disputa de Leipzig", importancia: "Lutero niega la autoridad papal y conciliar" },
      { year: "1521", event: "Dieta de Worms", importancia: "Lutero: 'Aquí estoy, no puedo hacer otra cosa'" },
      { year: "1521", event: "Excomunión de Lutero", importancia: "Ruptura definitiva con Roma" },
      { year: "1522", event: "Lutero traduce el NT al alemán", importancia: "La Biblia al alcance del pueblo" },
      { year: "1525", event: "Anabautistas comienzan", importancia: "Bautismo de creyentes, separación iglesia-estado" },
      { year: "1529", event: "Dieta de Spira", importancia: "'Protestantes' — surge el término" },
      { year: "1530", event: "Confesión de Augsburgo", importancia: "Primera confesión luterana" },
      { year: "1536", event: "Calvino: Institutos (1a ed.)", importancia: "Sistematización de la teología reformada" },
      { year: "1536", event: "Enrique VIII separa la iglesia inglesa", importancia: "Acta de Supremacía" },
      { year: "1541", event: "Calvino en Ginebra", importancia: "Centro de la Reforma reformada" },
      { year: "1543", event: "Regreso de Calvino a Ginebra", importancia: "Consolidación de la Reforma reformada" },
      { year: "1545", event: "Concilio de Trento", importancia: "Contrarreforma católica, condena de la Reforma" },
      { year: "1553", event: "Servet quemado en Ginebra", importancia: "Polémica sobre libertad religiosa" },
      { year: "1555", event: "Paz de Augsburgo", importancia: "Cuius regio, eius religio" },
      { year: "1559", event: "Institutos edición final", importancia: "Culminación de la teología de Calvino" },
      { year: "1559", event: "Confesión de Fe de La Rochelle", importancia: "Confesión reformada francesa" },
      { year: "1561", event: "Confesión Belga", importancia: "Confesión reformada de los Países Bajos" },
      { year: "1563", event: "Catecismo de Heidelberg", importancia: "Catecismo reformado más influyente" },
      { year: "1588", event: "Nacimiento de John Bunyan", importancia: "Autor de El Progreso del Peregrino" },
      { year: "1596", event: "Nacimiento de John Owen", importancia: "Teólogo puritano de la gloria de Cristo" },
      { year: "1611", event: "Biblia King James", importancia: "Traducción clásica al inglés" },
      { year: "1618", event: "Sínodo de Dordt", importancia: "Defensa de la gracia soberana contra el arminianismo" },
      { year: "1643", event: "Asamblea de Westminster", importancia: "Confesión y catecismos reformados" },
      { year: "1644", event: "Primera Confesión Bautista de Londres", importancia: "Confesión bautista particular" },
      { year: "1648", event: "Paz de Westfalia", importancia: "Fin de las guerras de religión, Europa redefine su orden" },
    ],
    figuras: [
      { name: "Martín Lutero", role: "Inició la Reforma, justificación por fe sola" },
      { name: "Felipe Melanchthon", role: "Teólogo luterano, Confesión de Augsburgo" },
      { name: "Ulrico Zuinglio", role: "Reformador de Zúrich, teología simbólica de la Cena" },
      { name: "Juan Calvino", role: "Teólogo reformado, Institutos, Ginebra" },
      { name: "Guillermo Farel", role: "Evangelizador de Ginebra, trajo a Calvino" },
      { name: "Juan Knox", role: "Reformador de Escocia, presbiterianismo" },
      { name: "Tomás Cranmer", role: "Arzobispo de Canterbury, Book of Common Prayer" },
      { name: "Miguel Servet", role: "Hereje antitrinitario, quemado en Ginebra" },
      { name: "Conrad Grebel", role: "Padre del anabautismo, bautismo de creyentes" },
      { name: "Menno Simons", role: "Líder anabautista, pacifismo" },
      { name: "Teodoro Beza", role: "Sucesor de Calvino, precisión teológica" },
      { name: "Jacobo Arminio", role: "Teólogo que provocó los Cánones de Dordt" },
    ],
    perspectivaReformada:
      "La Reforma es el evento más importante en la historia de la Iglesia después del período apostólico. Los bautistas reformados somos herederos directos de la Reforma Magisterial (Calvino) y de la Reforma Radical (anabautistas). De la primera recibimos la teología reformada: soberanía de Dios, justificación por fe sola, la autoridad suprema de la Escritura, la teología del pacto. De la segunda recibimos el bautismo de creyentes por inmersión, la autonomía de la iglesia local, la libertad de conciencia y la separación iglesia-estado. La Confesión de 1689 es la expresión más madura de esta síntesis: reformada en teología, bautista en eclesiología. La Reforma fue la restauración del evangelio bíblico después de siglos de oscuridad, y los bautistas reformados nos vemos como continuadores de esa restauración.",
    confesion: "Capítulo 11: De la Justificación — 'Justificados por la fe sola, solamente por la justicia de Cristo imputada' (1689.11.1-2)",
  },
  {
    id: "puritana",
    icon: "📖",
    label: "Puritana y Bautista",
    date: "1648 – 1789 d.C.",
    color: "#2d6b5a",
    tag: "La Madurez Confesional",
    desc: "Los puritanos y bautistas particulares desarrollan la teología reformada en su máxima expresión. Grandes teólogos, confesiones, y la experiencia de la piedad.",
    detalle:
      "Este período dorado de la teología evangélica vio florecer a los puritanos en Inglaterra y América, y a los bautistas particulares que produjeron la Confesión Bautista de Fe de 1689. Los puritanos (literalmente 'los puros') buscaban purificar la Iglesia de Inglaterra de sus elementos papistas. Grandes teólogos puritanos como John Owen (1616–1683), Thomas Goodwin (1600–1680), Stephen Charnock (1628–1680) y Richard Baxter (1615–1691) escribieron obras de teología bíblica y experiencia cristiana que siguen siendo inigualables. Los bautistas particulares (calvinistas) emergieron en el siglo XVII, separándose tanto de la iglesia estatal como de los bautistas generales (arminianos). Publicaron la Primera Confesión de Londres (1644), la Segunda Confesión (1677) y finalmente la Confesión Bautista de Fe de 1689, basada en la Confesión de Westminster y la Savoy, pero modificada en los artículos sobre el bautismo y el gobierno de la iglesia. John Bunyan (1628–1688) escribió 'El Progreso del Peregrino', la alegoría cristiana más leída de la historia. En América, los puritanos establecieron colonias basadas en principios bíblicos, y Jonathan Edwards (1703–1758) lideró el Gran Avivamiento.",
    eventos: [
      { year: "1644", event: "Primera Confesión Bautista de Londres", importancia: "Confesión de los bautistas particulares" },
      { year: "1646", event: "Westminster: Catecismo Mayor", importancia: "Doctrina reformada para la iglesia" },
      { year: "1647", event: "Westminster: Catecismo Menor", importancia: "El catecismo reformado clásico" },
      { year: "1658", event: "Confesión de Savoy", importancia: "Congregacionalistas, base para 1689" },
      { year: "1662", event: "Acta de Uniformidad", importancia: "2000 pastores puritanos expulsados" },
      { year: "1677", event: "Segunda Confesión Bautista", importancia: "Borrador de la Confesión 1689" },
      { year: "1678", event: "Bunyan: El Progreso del Peregrino", importancia: "La alegoría cristiana más leída" },
      { year: "1683", event: "Muerte de John Owen", importancia: "El más grande teólogo puritano" },
      { year: "1685", event: "Muerte de Bunyan", importancia: "Predicador y escritor inmortal" },
      { year: "1688", event: "Revolución Gloriosa", importancia: "Libertad religiosa para los disidentes" },
      { year: "1689", event: "Acta de Tolerancia", importancia: "Libertad limitada para los bautistas" },
      { year: "1689", event: "Confesión Bautista de Fe 1689", importancia: "La confesión bautista reformada clásica" },
      { year: "1703", event: "Nacimiento de Jonathan Edwards", importancia: "Teólogo del avivamiento" },
      { year: "1734", event: "Gran Avivamiento en Northampton", importancia: "Avivamiento bajo Edwards" },
      { year: "1738", event: "Whitefield predica al aire libre", importancia: "Comienzo del Gran Despertar" },
      { year: "1741", event: "Edwards: Pecadores...", importancia: "El sermón más famoso de América" },
      { year: "1769", event: "Muerte de Gill", importancia: "Teólogo bautista particular eminente" },
      { year: "1789", event: "Constitución de EE.UU.", importancia: "Separación iglesia-estado" },
    ],
    figuras: [
      { name: "John Owen", role: "Teólogo puritano de la gloria de Cristo" },
      { name: "Thomas Goodwin", role: "Teólogo de la obra de Cristo y el Espíritu" },
      { name: "Stephen Charnock", role: "Teólogo de la existencia y atributos de Dios" },
      { name: "Richard Baxter", role: "Pastor puritano, The Reformed Pastor" },
      { name: "John Bunyan", role: "El Progreso del Peregrino, pastor bautista" },
      { name: "John Gill", role: "Teólogo bautista particular, comentarista" },
      { name: "Benjamin Keach", role: "Pastor bautista, himnodia, infancia espiritual" },
      { name: "Nehemías Coxe", role: "Editor de la Confesión 1689" },
      { name: "Jonathan Edwards", role: "Teólogo del avivamiento, la libertad de la voluntad" },
      { name: "George Whitefield", role: "Predicador del Gran Despertar, calvinista" },
    ],
    perspectivaReformada:
      "Este es el período formativo de nuestra identidad bautista reformada. La Confesión Bautista de Fe de 1689 es nuestro documento confesional, y los puritanos y bautistas particulares son nuestros padres teológicos. La Confesión 1689 representa la madurez de la teología reformada aplicada a la eclesiología bautista. Los puritanos nos enseñaron que la teología debe ser experimental —no solo conocimiento intelectual, sino experiencia vivida de la gracia de Dios. Edwards nos mostró que el avivamiento es obra soberana de Dios, no manipulación humana. Bunyan nos recordó que el camino del cristiano es una peregrinación llena de peligros, consuelos y la promesa segura de la Ciudad Celestial. Su legado es nuestra herencia.",
    confesion: "La Confesión Bautista de Fe de 1689 — La expresión más madura de la teología bautista reformada",
  },
  {
    id: "moderna",
    icon: "🌍",
    label: "Moderna y Contemporánea",
    date: "1789 – Actualidad",
    color: "#7f8c8d",
    tag: "Misiones y Desafíos",
    desc: "Misiones modernas, avivamientos, liberalismo teológico, el resurgimiento reformado, y los desafíos del siglo XXI.",
    detalle:
      "La era moderna trajo enormes cambios: la Revolución Francesa (1789) marcó el inicio de una nueva era política. El modernismo teológico cuestionó la autoridad de la Escritura, la historicidad de los milagros y la necesidad de la expiación vicaria. En respuesta, surgieron movimientos de avivamiento y reafirmación de la ortodoxia. El Gran Despertar (Whitefield, Edwards) fue seguido por avivamientos bajo Wesley (aunque arminiano) y luego por el movimiento misionero moderno. William Carey (1761–1834), bautista particular, es considerado el padre de las misiones modernas. Charles Spurgeon (1834–1892), 'el Príncipe de los Predicadores', pastoreó el Tabernáculo Metropolitano y defendió la fe reformada contra el liberalismo. B.B. Warfield (1852–1921) defendió la inerrancia bíblica. En el siglo XX, Karl Barth llamó a la Iglesia de vuelta a la Palabra de Dios. J. Gresham Machen defendió el evangelio contra el liberalismo. Abraham Kuyper (1837–1920) articuló una cosmovisión reformada para todas las áreas de la vida. El resurgimiento reformado del siglo XXI (John Piper, R.C. Sproul, Al Mohler, James White) ha traído una nueva generación a las doctrinas de la gracia.",
    eventos: [
      { year: "1789", event: "Revolución Francesa", importancia: "Secularización de Europa" },
      { year: "1792", event: "Carey: Misiones modernas", importancia: "Bautista particular, padre de las misiones" },
      { year: "1805", event: "Unitarismo en Harvard", importancia: "El liberalismo penetra la academia" },
      { year: "1833", event: "Movimiento de Oxford", importancia: "Resurgimiento católico en el anglicanismo" },
      { year: "1854", event: "Spurgeon comienza en Londres", importancia: "El Príncipe de los Predicadores" },
      { year: "1859", event: "Darwin: El Origen de las Especies", importancia: "Desafío evolucionista a la fe" },
      { year: "1870", event: "Infalibilidad papal", importancia: "Concilio Vaticano I, ultramontanismo" },
      { year: "1892", event: "Muerte de Spurgeon", importancia: "El predicador más influyente del siglo" },
      { year: "1910", event: "Fundamentalistas: The Fundamentals", importancia: "Defensa de la ortodoxia cristiana" },
      { year: "1917", event: "Barth: Comentario a Romanos", importancia: "Vuelta a la teología de la Palabra" },
      { year: "1923", event: "Machen: Cristianismo y Liberalismo", importancia: "El liberalismo no es cristianismo" },
      { year: "1929", event: "Westminster Seminary fundado", importancia: "Defensa de la fe reformada" },
      { year: "1943", event: "Declaración de la inerrancia", importancia: "Afirmación de la inspiración plenaria" },
      { year: "1974", event: "Fundación del Sínodo de las Iglesias Bautistas Reformadas", importancia: "Resurgimiento bautista reformado" },
      { year: "1994", event: "Fundación de CBTS", importancia: "Covenant Baptist Theological Seminary" },
      { year: "2009", event: "Fundación de Founders Ministries", importancia: "Resurgimiento bautista reformado en los EE.UU." },
      { year: "2015", event: "Liberty University: Resurgimiento reformado", importancia: "Nuevo interés reformado entre jóvenes" },
      { year: "Presente", event: "Desafíos posmodernos", importancia: "Sexualidad, verdad, persecución global" },
    ],
    figuras: [
      { name: "William Carey", role: "Padre de las misiones modernas, traductor bíblico" },
      { name: "Andrew Fuller", role: "Teólogo bautista, misiones, respuesta al hipercalvinismo" },
      { name: "Charles Spurgeon", role: "Predicador, pastor, reformado, bautista" },
      { name: "B.B. Warfield", role: "Defensor de la inerrancia bíblica" },
      { name: "J. Gresham Machen", role: "Defensor del cristianismo contra el liberalismo" },
      { name: "Abraham Kuyper", role: "Cosmovisión reformada, esferas de soberanía" },
      { name: "Karl Barth", role: "Teólogo dialéctico, vuelta a la Palabra" },
      { name: "John Murray", role: "Teólogo reformado, redención, ética" },
      { name: "Martyn Lloyd-Jones", role: "Predicador expositivo, médico espiritual" },
      { name: "R.C. Sproul", role: "Teólogo reformado, La santidad de Dios" },
      { name: "John Piper", role: "Teólogo del hedonismo cristiano" },
      { name: "Albert Mohler", role: "Presidente del SBTS, defensor de la ortodoxia" },
    ],
    perspectivaReformada:
      "Este período nos enfrenta a desafíos inmensos. El liberalismo teológico niega el evangelio mientras usa el lenguaje cristiano. El secularismo margina la fe a la esfera privada. La revolución sexual desafía la ética bíblica. Sin embargo, vemos señales de esperanza: el resurgimiento reformado ha traído una nueva generación a las doctrinas de la gracia; las misiones avanzan en África, Asia y América Latina (especialmente en países como Cuba y Bolivia, donde el crecimiento bautista reformado es notable); y la tecnología permite la difusión global del evangelio. Como bautistas reformados, afirmamos que la verdad no cambia con los tiempos. La Confesión 1689 sigue siendo una declaración fiel de lo que la Biblia enseña, y su mensaje es tan relevante hoy como en 1689. Nuestra tarea es proclamar fielmente el evangelio, plantar iglesias que confiesen la verdad, y preparar la próxima generación para defender la fe una vez dada a los santos.",
    confesion: "Capítulo 1: De las Sagradas Escrituras — 'La autoridad de la Santa Escritura... depende totalmente de Dios' (1689.1.4) — La verdad no cambia",
  },
];

const formatos = [
  { key: "timeline", label: "⏳ Línea" },
  { key: "grid", label: "🔲 Tarjetas" },
];

export default function HistoriaPage() {
  const [sel, setSel] = useState(periodos[1].id);
  const [formato, setFormato] = useState("timeline");
  const p = periodos.find((x) => x.id === sel) ?? periodos[1];

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgb(var(--color-surface-card))_0%,_rgb(var(--color-surface))_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
            Historia de la Iglesia
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-text mt-4 mb-6 leading-tight">
            Períodos de la{" "}
            <span className="text-gold">Iglesia Cristiana</span>
          </h1>
          <p className="text-text-2 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Un recorrido por la historia de la Iglesia desde una perspectiva bautista reformada.
            Cada período representa un desarrollo clave en la comprensión y preservación del evangelio.
          </p>
        </div>
      </section>

      {/* Formato toggle */}
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <div className="flex items-center justify-center md:justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-wider text-text-3 font-semibold">
              Período:
            </span>
            <div className="flex gap-1 flex-wrap">
              {periodos.map((per) => (
                <button
                  key={per.id}
                  onClick={() => setSel(per.id)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition ${
                    sel === per.id
                      ? "bg-gold/10 border-gold text-gold"
                      : "border-border text-text-2 hover:border-text-3"
                  }`}
                >
                  {per.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-1">
            {formatos.map((f) => (
              <button
                key={f.key}
                onClick={() => setFormato(f.key)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                  formato === f.key
                    ? "bg-gold/10 border-gold text-gold"
                    : "border-border text-text-3"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-24">
        {formato === "timeline" && (
          <div key={p.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header card */}
            <div
              className="rounded-2xl p-8 mb-8 border"
              style={{
                backgroundColor: `${p.color}08`,
                borderColor: `${p.color}40`,
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{ borderColor: p.color }}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: p.color }} />
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-wider font-semibold"
                    style={{ color: p.color }}
                  >
                    {p.tag}
                  </div>
                  <h2 className="font-serif text-3xl text-text">{p.label}</h2>
                  <span className="text-sm text-text-3 font-mono">{p.date}</span>
                </div>
              </div>
              <p className="text-text-2 text-sm leading-relaxed">{p.desc}</p>
            </div>

            {/* Descripción detallada */}
            <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="font-serif text-lg text-text mb-3">
                Panorama General
              </h3>
              <p className="text-text-2 text-sm leading-relaxed whitespace-pre-line">
                {p.detalle}
              </p>
            </div>

            {/* Perspectiva reformada */}
            <div className="bg-surface-card border border-gold/20 rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="font-serif text-lg text-gold mb-3 flex items-center gap-2">
                <span>✝</span> Perspectiva Bautista Reformada
              </h3>
              <p className="text-text-2 text-sm leading-relaxed">
                {p.perspectivaReformada}
              </p>
              <div className="mt-4 px-4 py-3 bg-surface-1 border border-border rounded-xl">
                <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                  Conexión con la Confesión 1689
                </span>
                <p className="text-xs text-text-2 mt-1 italic">
                  {p.confesion}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Eventos */}
              <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8">
                <h3 className="font-serif text-lg text-text mb-4 flex items-center gap-2">
                  <span>📅</span> Eventos Clave
                </h3>
                <div className="space-y-0">
                  {p.eventos.map((e, i) => (
                    <div
                      key={i}
                      className="flex gap-3 py-2.5 border-b border-border/50 last:border-0"
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: p.color }}
                        />
                        {i < p.eventos.length - 1 && (
                          <div className="w-px flex-1 bg-border my-0.5" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <span
                          className="text-[10px] font-mono font-semibold"
                          style={{ color: p.color }}
                        >
                          {e.year}
                        </span>
                        <p className="text-sm text-text leading-tight mt-0.5">
                          {e.event}
                        </p>
                        <p className="text-[10px] text-text-3 mt-0.5 italic">
                          {e.importancia}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Figuras */}
              <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8">
                <h3 className="font-serif text-lg text-text mb-4 flex items-center gap-2">
                  <span>👤</span> Figuras Clave
                </h3>
                <div className="space-y-3">
                  {p.figuras.map((f, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-3 rounded-xl bg-surface-1 border border-border"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                        style={{
                          backgroundColor: `${p.color}20`,
                          color: p.color,
                        }}
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text">{f.name}</p>
                        <p className="text-[11px] text-text-2">{f.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navegación entre períodos */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => {
                  const idx = periodos.findIndex((x) => x.id === sel);
                  if (idx > 0) setSel(periodos[idx - 1].id);
                }}
                className={`text-sm px-4 py-2 rounded-lg border transition flex items-center gap-2 ${
                  periodos.findIndex((x) => x.id === sel) > 0
                    ? "border-border text-text-2 hover:border-gold hover:text-gold"
                    : "border-transparent text-border-2 cursor-not-allowed"
                }`}
                disabled={periodos.findIndex((x) => x.id === sel) === 0}
              >
                ← Anterior
              </button>

              <div className="flex gap-1">
                {periodos.map((per, i) => (
                  <button
                    key={per.id}
                    onClick={() => setSel(per.id)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                       sel === per.id ? "bg-gold" : "bg-border hover:bg-text-3"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  const idx = periodos.findIndex((x) => x.id === sel);
                  if (idx < periodos.length - 1) setSel(periodos[idx + 1].id);
                }}
                className={`text-sm px-4 py-2 rounded-lg border transition flex items-center gap-2 ${
                  periodos.findIndex((x) => x.id === sel) < periodos.length - 1
                    ? "border-border text-text-2 hover:border-gold hover:text-gold"
                    : "border-transparent text-border-2 cursor-not-allowed"
                }`}
                disabled={
                  periodos.findIndex((x) => x.id === sel) === periodos.length - 1
                }
              >
                Siguiente →
              </button>
            </div>
          </div>
        )}

        {formato === "grid" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-500">
            {periodos.map((per) => (
              <button
                key={per.id}
                onClick={() => {
                  setSel(per.id);
                  setFormato("timeline");
                }}
                className="group bg-surface-card border border-border rounded-2xl p-6 text-left hover:border-gold transition hover:-translate-y-0.5"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: `${per.color}20` }}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: per.color }} />
                </div>
                <div
                  className="text-[10px] uppercase tracking-wider font-semibold mb-1"
                  style={{ color: per.color }}
                >
                  {per.tag}
                </div>
                <h3 className="font-serif text-lg text-text mb-1 group-hover:text-gold transition">
                  {per.label}
                </h3>
                <span className="text-xs text-text-3 font-mono">{per.date}</span>
                <p className="text-xs text-text-2 mt-3 leading-relaxed line-clamp-3">
                  {per.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-gold text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                  Explorar <span>→</span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
