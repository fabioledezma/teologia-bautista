export interface AreaDiscernimiento {
  id: string;
  titulo: string;
  descripcion: string;
  senales: string[];
  fundamento: string;
  actitud: string;
}

const areasDiscernimiento: AreaDiscernimiento[] = [
  {
    id: "manipulacion-espiritual",
    titulo: "Manipulación espiritual",
    descripcion:
      "Líderes que usan la autoridad espiritual para controlar, intimidar o explotar a otros. Se disfraza de 'rendición', 'sujeción' o 'cobertura espiritual', pero en realidad es control. Incluye exigir obediencia incuestionable, aislar a personas de sus familias o iglesias, y usar la culpa para manipular decisiones.",
    senales: [
      "Exigen lealtad personal antes que a Cristo",
      "Desalientan o prohíben preguntar o cuestionar",
      "Usan frases como 'Dios me dijo que...' para cerrar debates",
      "Aíslan a miembros de familiares o iglesias",
      "Exigen dinero bajo presión espiritual",
      "Afirman tener autoridad especial sobre la vida de otros",
    ],
    fundamento:
      "Cristo es la única Cabeza de la iglesia (Ef 1:22-23). Toda autoridad humana es delegada y bajo la autoridad de la Escritura. Los líderes deben ser ejemplo, no señores (1 P 5:1-4). Los bereanos examinaban las Escrituras para verificar hasta a Pablo (Hch 17:11). El fruto del Espíritu incluye bondad, no control.",
    actitud:
      "No todo liderazgo fuerte es manipulación. La sana autoridad pastoral guía, protege y enseña. Debemos someternos a líderes bíblicos (He 13:17), pero nunca cuando contradicen la Escritura. Examina con oración, confronta en amor si es necesario, y si hay patrón de control, busca ayuda de otros líderes fieles.",
  },
  {
    id: "abuso-de-versiculos",
    titulo: "Abuso de versículos",
    descripcion:
      "Usar la Biblia de manera incorrecta para justificar enseñanzas o prácticas que el texto no enseña. Incluye citar versículos fuera de contexto, aplicar promesas del AT a creyentes del NT sin mediación de Cristo, y usar pasajes aislados como 'palabra profética' para situaciones específicas.",
    senales: [
      "Citar versículos sin considerar su contexto histórico o literario",
      "Usar el AT como si el NT no hubiera sido escrito",
      "Aplicar promesas a individuos que fueron dadas a naciones",
      "Buscar 'revelación' en versículos fuera de contexto",
      "Forzar tipología donde no hay base textual",
      "Ignorar pasajes paralelos que clarifican",
    ],
    fundamento:
      "Toda la Escritura es inspirada, pero debe ser interpretada correctamente (2 Ti 2:15). La Escritura se interpreta a sí misma, pasajes claros iluminan a los oscuros. El NT cumple e interpreta el AT. No podemos aplicar promesas del AT a Israel directamente sin pasar por Cristo.",
    actitud:
      "Sé cuidadoso con cómo usas la Biblia. No cites versículos sueltos para probar puntos. Estudia el contexto antes de aplicar. Usa buenas traducciones, referencias cruzadas y comentarios fieles. Si alguien usa un versículo de manera sospechosa, examínalo tú mismo.",
  },
  {
    id: "evangelio-centrado-hombre",
    titulo: "Evangelio centrado en el hombre",
    descripcion:
      "Un evangelio que se enfoca en las necesidades, deseos y beneficios humanos en lugar de en la gloria de Dios y la obra de Cristo. Presenta la salvación como una 'mejora de vida' o 'solución a tus problemas' en lugar de rescate del pecado y la condenación. El mensaje se vuelve: 'Dios te puede hacer feliz, próspero y realizado'.",
    senales: [
      "El evangelio se presenta como 'Dios tiene un plan para tu felicidad'",
      "Se minimiza o ignora el pecado, la ira de Dios y el arrepentimiento",
      "La cruz se menciona solo como muestra de amor, no como expiación",
      "El llamado es a 'tomar una decisión' sin hablar de negarse a sí mismo",
      "Se promete salud, prosperidad y éxito como parte del evangelio",
      "El enfoque está en lo que Dios puede hacer por ti, no en quién es Él",
    ],
    fundamento:
      "El evangelio no es 'Dios te ama y tiene un plan maravilloso', sino que eres pecador, mereces condenación, y Cristo murió por tus pecados y resucitó. La salvación es por gracia, para la gloria de Dios. El evangelio no es sobre la realización personal sino sobre la redención del pecado.",
    actitud:
      "Predica el evangelio completo: ley que condena, gracia que salva. No escondas el costo del discipulado. No prometas lo que Dios no promete. El evangelio genuino produce humildad, no orgullo; gratitud, no entitlement; amor a Dios, no búsqueda de beneficios.",
  },
  {
    id: "experiencias-sobre-escritura",
    titulo: "Experiencias sobre la Escritura",
    descripcion:
      "Elevar las experiencias personales —visiones, sueños, profecías, emociones— al mismo nivel o por encima de la autoridad de la Escritura. Se valora más 'lo que Dios me dijo' que lo que Dios ya ha dicho en Su Palabra. La experiencia se vuelve el intérprete de la Escritura.",
    senales: [
      "'Dios me reveló' se usa para enseñar doctrinas nuevas",
      "Se busca dirección en sueños o visiones más que en la Palabra",
      "Las experiencias espirituales se usan como prueba de santidad",
      "Se menosprecia la enseñanza bíblica como 'mera letra' o 'religión'",
      "Se valora más 'sentir la presencia de Dios' que entender Su Palabra",
      "La falta de experiencias se ve como señal de frialdad espiritual",
    ],
    fundamento:
      "La Escritura es suficiente para toda fe y práctica (2 Ti 3:16-17). El canon está cerrado; no hay nueva revelación. Las experiencias deben ser evaluadas por la Escritura, no al revés. La fe viene por el oír de la Palabra, no por experiencias. Dios puede usar experiencias, pero nunca suplantan la Escritura.",
    actitud:
      "Valora las experiencias genuinas de Dios, pero supedítalas siempre a la Escritura. No desprecies a quienes no tienen tus mismas experiencias. Cuando alguien dice 'Dios me dijo', examínalo con la Palabra. Busca crecer más en conocimiento de la Escritura que en experiencias.",
  },
  {
    id: "emocionalismo",
    titulo: "Emocionalismo",
    descripcion:
      "Sustituir la adoración y la vida cristiana bíblica por experiencias emocionales intensas. Se mide la espiritualidad por la intensidad de las emociones más que por la obediencia y el conocimiento de Dios. La música, la atmósfera y la sugestión se usan para inducir estados emocionales que se confunden con la presencia de Dios.",
    senales: [
      "El culto se evalúa por 'cómo me sentí' más que por lo que se enseñó",
      "Se buscan experiencias emocionales repetidamente para sentirse cerca de Dios",
      "Las decisiones importantes se basan en emociones del momento",
      "Se menosprecia la enseñanza doctrinal por 'apagar el Espíritu'",
      "La manipulación musical se usa para generar respuestas emocionales",
      "Se valora más el tiempo de alabanza que la predicación de la Palabra",
    ],
    fundamento:
      "La adoración bíblica es en espíritu y verdad (Jn 4:24). Las emociones son parte de la vida cristiana (Sal 42; Fil 4:4), pero no son el fundamento. El fruto del Espíritu incluye gozo, pero también dominio propio. La fe no depende de sentimientos sino de la fidelidad de Dios. La emoción genuina sigue a la verdad, no la reemplaza.",
    actitud:
      "Disfruta la emoción genuina que viene de entender quién es Dios, pero no la busques como fin. Evalúa tu vida espiritual por tu obediencia a la Palabra, no por tus sentimientos. Sé agradecido por los momentos de gozo, pero no dependas de ellos. Adora a Dios por quién es, no por cómo te hace sentir.",
  },
  {
    id: "falsas-profecias",
    titulo: "Falsas profecías",
    descripcion:
      "Declaraciones proféticas que no se cumplen o que contradicen la Escritura. Incluye predicciones específicas sobre fechas, eventos mundiales, o decisiones personales presentadas como 'palabra de Dios'. Se usa para dirigir la vida de personas, iglesias o naciones con supuesta autoridad divina.",
    senales: [
      "Profecías específicas que no se cumplen pero nunca se corrigen",
      "Declaraciones ambiguas que pueden interpretarse de cualquier manera",
      "Usar 'si el pueblo se arrepiente' para evadir cumplimiento",
      "Profecías que contradicen enseñanzas claras de la Escritura",
      "Enfoque en fechas, líderes políticos o eventos mundiales",
      "Presentar opiniones personales como 'revelación divina'",
    ],
    fundamento:
      "El profeta que habla en nombre de Dios y no se cumple no es de Dios (Dt 18:20-22). El NT no abolió este principio. Las profecías deben ser evaluadas (1 Co 14:29). La profecía neotestamentaria está bajo la autoridad de la Escritura y no añade nueva revelación. El canon está cerrado.",
    actitud:
      "Examina toda profecía con la Escritura. No recibas como palabra de Dios lo que contradice la Biblia. Si alguien profetiza y falla, debe haber humildad para reconocerlo. No le des más peso a una 'palabra profética' que a la enseñanza bíblica. No temas pedir señales de verificación.",
  },
];

export default areasDiscernimiento;
