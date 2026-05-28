export interface EtapaRedencion {
  id: string;
  titulo: string;
  periodo: string;
  resumen: string;
  cumpleCristo: string;
  escrituras: string[];
}

const historiaRedencion: EtapaRedencion[] = [
  {
    id: "creacion",
    titulo: "Creación",
    periodo: "Génesis 1–2",
    resumen:
      "Dios crea los cielos y la tierra de la nada por Su Palabra. Todo es bueno. Crea al hombre a Su imagen, varón y mujer, para que gobierne la creación en relación con Él. Establece el pacto de obras con Adán: obediencia perfecta con promesa de vida y amenaza de muerte.",
    cumpleCristo:
      "Cristo es el Verbo por quien todo fue creado (Jn 1:1-3; Col 1:16). Él es la imagen perfecta de Dios (Col 1:15), el segundo Adán que cumple donde el primero falló (Ro 5:12-21). El reposo del séptimo día apunta al reposo eterno que Cristo provee (He 4:9-10).",
    escrituras: ["Gn 1–2", "Jn 1:1-3", "Col 1:15-17", "He 4:9-10"],
  },
  {
    id: "caida",
    titulo: "Caída",
    periodo: "Génesis 3",
    resumen:
      "Adán y Eva desobedecen a Dios, comiendo del árbol prohibido. El pecado entra al mundo, trayendo muerte, maldición y separación de Dios. Toda la humanidad cae en Adán. La imagen de Dios es distorsionada, no destruida.",
    cumpleCristo:
      "Dios promete la Simiente de la mujer que aplastará la cabeza de la serpiente (Gn 3:15) — el protoevangelio, la primera promesa del evangelio. Cristo es esa Simiente (Gá 4:4; 1 Jn 3:8). Adán cubrió su pecado con hojas; Dios cubrió su pecado con pieles (sacrificio) — Cristo es el Cordero de Dios que quita el pecado (Jn 1:29).",
    escrituras: ["Gn 3", "Ro 5:12-21", "Gá 4:4", "1 Jn 3:8"],
  },
  {
    id: "pacto-noe",
    titulo: "Pacto con Noé",
    periodo: "Génesis 6–9",
    resumen:
      "El pecado humano llena la tierra. Dios envía el diluvio para juzgar, pero preserva a Noé y su familia. Después del juicio, Dios establece un pacto con Noé: nunca más destruirá la tierra con agua. Promete estabilidad mientras la tierra exista. Este pacto es universal e incondicional.",
    cumpleCristo:
      "Cristo es el verdadero Arca: en Él somos salvos del juicio de Dios (1 P 3:20-21). Así como Noé fue preservado a través del juicio, nosotros somos preservados en Cristo. El arcoíris es señal de la promesa de Dios; Cristo es la garantía de un pacto mejor (He 7:22).",
    escrituras: ["Gn 6–9", "1 P 3:20-21", "He 7:22"],
  },
  {
    id: "pacto-abraham",
    titulo: "Pacto con Abraham",
    periodo: "Génesis 12–22",
    resumen:
      "Dios llama a Abraham de la idolatría y hace un pacto con él: le dará tierra, descendencia y bendición. Todas las familias de la tierra serán bendecidas por medio de su simiente. El pacto es por gracia, sellado con la circuncisión. Abraham cree a Dios y le es contado por justicia.",
    cumpleCristo:
      "La Simiente de Abraham es Cristo (Gá 3:16). Todas las promesas del pacto abrahámico encuentran su cumplimiento en Él: la bendición a todas las naciones es el evangelio predicado a los gentiles (Gá 3:8-9, 14). Abraham vio el día de Cristo y se gozó (Jn 8:56). La justicia por fe que Abraham experimentó es la misma que tenemos en Cristo.",
    escrituras: ["Gn 12:1-3", "Gn 15:6", "Gn 17", "Gá 3:6-9, 14, 16", "Jn 8:56"],
  },
  {
    id: "exodo-pacto-sinai",
    titulo: "Éxodo y Pacto Sinaítico",
    periodo: "Éxodo — Deuteronomio",
    resumen:
      "Dios libera a Israel de la esclavitud en Egipto por sangre del cordero. Los hace Su pueblo, les da la ley en Sinaí, y establece el sacerdocio y el tabernáculo. La ley muestra el estándar santo de Dios; los sacrificios señalan la necesidad de expiación. Israel falla repetidamente en guardar el pacto.",
    cumpleCristo:
      "Cristo es el Cordero Pascual perfecto (1 Co 5:7), cuya sangre nos libera de la esclavitud del pecado. Él es el profeta mayor que Moisés (Dt 18:15-19; Hch 3:22), el sumo sacerdote según el orden de Melquisedec (He 7), y el cumplimiento de la ley (Mt 5:17). El tabernáculo era una sombra de Cristo, Dios habitando entre nosotros (Jn 1:14; He 9:11-12).",
    escrituras: ["Ex 12", "Ex 20", "Lv 16", "Dt 18:15-19", "1 Co 5:7", "He 7–10"],
  },
  {
    id: "pacto-davidico",
    titulo: "Pacto Davídico y Reyes",
    periodo: "1–2 Samuel, 1–2 Reyes, Crónicas",
    resumen:
      "Dios promete a David que su descendencia reinará para siempre (2 S 7). Salomón construye el templo. Pero los reyes de Israel y Judá son infieles. El reino se divide, y finalmente ambos son llevados al exilio. Los profetas anuncian juicio pero también esperanza de un Rey justo por venir.",
    cumpleCristo:
      "Cristo es el Hijo de David, heredero del trono eterno (Mt 1:1; Lc 1:32-33). Él es el Rey justo profetizado (Is 11:1-5; Jer 23:5-6). Entra a Jerusalén como Rey (Zac 9:9; Mt 21:5). Pero Su reino no es de este mundo (Jn 18:36). Ahora reina a la diestra del Padre y un día volverá como Rey de Reyes (Ap 19:16).",
    escrituras: ["2 S 7:12-16", "Sal 89:3-4", "Is 11:1-5", "Jer 23:5-6", "Mt 1:1", "Lc 1:32-33", "Ap 19:16"],
  },
  {
    id: "profetas-exilio",
    titulo: "Profetas y Exilio",
    periodo: "Isaías — Malaquías",
    resumen:
      "Dios envía profetas para llamar a Su pueblo al arrepentimiento. Anuncian juicio por el pecado pero también consuelo y esperanza de restauración. Israel es llevado a Asiria, Judá a Babilonia. El remanente regresa, pero la gloria del segundo templo es menor. Los profetas hablan de un nuevo pacto y un Siervo Sufriente.",
    cumpleCristo:
      "Isaías 53 describe al Siervo Sufriente: herido por nuestras transgresiones, molido por nuestros pecados — cumplido en Cristo. Jeremías 31:31-34 promete un nuevo pacto, inaugurado por Cristo (Lc 22:20; He 8). Ezequiel promete un corazón nuevo (Ez 36:26-27) y pastores según el corazón de Dios — cumplido en Cristo y el Espíritu. Daniel ve al Hijo del Hombre recibiendo el reino eterno (Dn 7:13-14). Zacarías ve al Rey humilde (9:9) y al traspasado (12:10). Malaquías anuncia la venida del mensajero del pacto (3:1).",
    escrituras: ["Is 53", "Jer 31:31-34", "Ez 36:26-27", "Dn 7:13-14", "Zac 9:9; 12:10", "Mal 3:1", "He 8"],
  },
  {
    id: "encarnacion",
    titulo: "Encarnación: Cristo",
    periodo: "Mateo — Juan",
    resumen:
      "El Verbo se hace carne. Jesucristo, verdadero Dios y verdadero hombre, nace de una virgen, vive una vida perfecta, enseña con autoridad, realiza señales y milagros, llama a discípulos, anuncia el reino de Dios. Es ungido por el Espíritu en Su bautismo. Es rechazado por los líderes religiosos.",
    cumpleCristo:
      "Jesús es el cumplimiento de todas las promesas (2 Co 1:20). Él mismo declara que las Escrituras hablan de Él (Lc 24:27, 44-47; Jn 5:39). Cada aspecto de Su vida cumple el AT: nace de una virgen (Is 7:14; Mt 1:22-23), en Belén (Mi 5:2; Mt 2:6), sale de Egipto (Os 11:1; Mt 2:15), es precedido por Elías/Juan (Mal 4:5; Mt 11:14).",
    escrituras: ["Mt 1–4", "Jn 1:1-14", "Lc 24:27, 44-47", "Jn 5:39", "2 Co 1:20", "Fil 2:5-11"],
  },
  {
    id: "muerte-resurreccion",
    titulo: "Muerte y Resurrección",
    periodo: "Evangelios — Hechos 1",
    resumen:
      "Jesús muere en la cruz, llevando el pecado de Su pueblo, satisfaciendo la ira de Dios. Es sepultado. Al tercer día resucita físicamente, victorioso sobre la muerte. Aparece a muchos testigos. Después de cuarenta días, asciende al cielo y es exaltado a la diestra de Dios.",
    cumpleCristo:
      "Cristo es el Cordero de Dios que quita el pecado del mundo (Jn 1:29). Su muerte es el cumplimiento de todos los sacrificios del AT (He 10:1-14). Es levantado como la serpiente en el desierto (Jn 3:14; Nm 21:9). Es el Siervo Sufriente de Isaías 53. Su resurrección es las primicias de los que durmieron (1 Co 15:20-23). Su ascensión lo entrona como Señor sobre todo (Fil 2:9-11).",
    escrituras: ["Mt 27–28", "Jn 19–20", "Is 53", "Sal 16:10", "1 Co 15:3-8, 20-23", "Fil 2:5-11", "He 1:1-11"],
  },
  {
    id: "iglesia",
    titulo: "La Iglesia",
    periodo: "Hechos — Apocalipsis 3",
    resumen:
      "El Espíritu Santo es derramado en Pentecostés. La iglesia nace y se expande desde Jerusalén hasta los confines de la tierra. El evangelio va a los gentiles. Las epístolas enseñan la doctrina y la vida cristiana. La iglesia espera el regreso de Cristo. Es el cuerpo de Cristo, columna y baluarte de la verdad.",
    cumpleCristo:
      "Cristo es la Cabeza de la iglesia, y ella es Su cuerpo (Ef 1:22-23). La iglesia es la esposa de Cristo (Ef 5:25-27; Ap 19:7-9). Cristo edifica Su iglesia (Mt 16:18). La Gran Comisión (Mt 28:18-20) es la misión de la iglesia hasta que Él vuelva. Las epístolas aplican la obra de Cristo a cada área de la vida.",
    escrituras: ["Hch 2", "Ef 1:22-23; 5:25-27", "Col 1:18", "Mt 16:18; 28:18-20", "Ap 2–3"],
  },
  {
    id: "nueva-creacion",
    titulo: "Nueva Creación",
    periodo: "Apocalipsis 4–22",
    resumen:
      "Cristo vuelve en gloria. Los muertos resucitan. Hay juicio final. Los impíos son castigados eternamente. Los redimidos heredan el reino. Dios crea cielos nuevos y tierra nueva. No habrá más muerte, ni llanto, ni dolor. Dios habitará con Su pueblo para siempre. El Cordero es la luz de la nueva Jerusalén.",
    cumpleCristo:
      "Cristo es el Alfa y la Omega, el Principio y el Fin (Ap 22:13). Él es el Cordero en el trono (Ap 5; 22:1-3). La nueva creación es la consumación del plan redentor: todo es restaurado en Cristo (Ef 1:10; Col 1:20). El árbol de la vida, perdido en la caída, es restaurado (Ap 22:2). La maldición es quitada (Ap 22:3). El propósito eterno de Dios: ser todo en todos (1 Co 15:28).",
    escrituras: ["Ap 21–22", "1 Co 15:20-28, 50-58", "2 P 3:13", "Ro 8:18-25", "Ef 1:9-10"],
  },
];

export default historiaRedencion;
