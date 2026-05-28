export interface AnswerWeight {
  cal: number; // Calvinismo
  arm: number; // Arminianismo
  hyp: number; // Hipercalvinismo
  sem: number; // Semi-pelagianismo
  pel: number; // Pelagianismo
  dec: number; // Decisionalismo
  aml: number; // Amilenialismo
  pmh: number; // Premilenialismo histórico
  pmd: number; // Premilenialismo dispensacional
  pms: number; // Posmilenialismo
  dis: number; // Dispensacionalismo
  pac: number; // Teología del pacto
  lib: number; // Libre albedrío (sinergismo)
  sov: number; // Soberanía absoluta
}

export interface QuestionOption {
  text: string;
  w: Partial<AnswerWeight>;
}

export interface Question {
  id: string;
  section?: string;
  type: "unica" | "multiple";
  question: string;
  options: QuestionOption[];
}

export interface Section {
  id: string;
  label: string;
  description: string;
  questions: Question[];
}

export interface ProfileResult {
  id: string;
  label: string;
  description: string;
  strengths: string[];
  warnings: string[];
  studySuggestions: string[];
  score: number;
}

export interface Tendency {
  id: string;
  label: string;
  score: number;
  description: string;
}

export interface TestResult {
  mainProfile: ProfileResult;
  secondaryTendencies: Tendency[];
  consistencyLevel: string;
  consistencyDescription: string;
  radarData: { axis: string; value: number }[];
  percentages: { label: string; value: number; color: string }[];
  scaleResults: { name: string; score: number; max: number }[];
}

const defWeight = (w: Partial<AnswerWeight>): AnswerWeight => ({
  cal: 0, arm: 0, hyp: 0, sem: 0, pel: 0, dec: 0,
  aml: 0, pmh: 0, pmd: 0, pms: 0, dis: 0, pac: 0, lib: 0, sov: 0,
  ...w,
});

export const sections: Section[] = [
  {
    id: "autoridad",
    label: "Autoridad bíblica",
    description: "Cómo entiendes la naturaleza, suficiencia y autoridad de la Escritura.",
    questions: [
      {
        id: "aut-1", type: "unica",
        question: "La Biblia es la Palabra de Dios. ¿Cuál afirmación describe mejor tu comprensión de su autoridad?",
        options: [
          { text: "La Biblia es la única autoridad infalible para la fe y la práctica, y es suficiente para toda necesidad espiritual del creyente.", w: defWeight({ cal: 5, pac: 3, sov: 2 }) },
          { text: "La Biblia es la autoridad principal, pero la tradición de la iglesia y la razón ayudan a interpretarla correctamente.", w: defWeight({ arm: 3, sem: 2, lib: 2 }) },
          { text: "La Biblia contiene la Palabra de Dios, pero debe entenderse a la luz de la cultura y el contexto histórico en que fue escrita.", w: defWeight({ lib: 5, arm: 3, sem: 3 }) },
          { text: "La Biblia es la autoridad suprema y autosuficiente; no necesitamos ayudas externas como psicología o filosofía para entender la verdad espiritual.", w: defWeight({ hyp: 4, cal: 3 }) },
        ],
      },
      {
        id: "aut-2", type: "unica",
        question: "Un amigo dice: 'Dios me habló' refiriéndose a una impresión personal. ¿Cómo evalúas esta afirmación?",
        options: [
          { text: "Dios habla hoy principalmente a través de Su Palabra escrita. Las impresiones personales deben someterse siempre a la Escritura.", w: defWeight({ cal: 4, pac: 3 }) },
          { text: "Dios habla de muchas maneras — Biblia, sueños, profecías, circunstancias. La Biblia es una guía entre otras.", w: defWeight({ pmd: 3, dec: 2, lib: 2 }) },
          { text: "Debemos estar abiertos a que Dios hable como Él quiera, pero siempre confirmando con la Escritura y el consejo de la iglesia.", w: defWeight({ arm: 3, sem: 2 }) },
          { text: "La revelación especial de Dios cesó con el cierre del canon. Las 'impresiones' son intuiciones humanas, no revelación divina.", w: defWeight({ cal: 5, hyp: 2, aml: 2, pac: 3 }) },
        ],
      },
      {
        id: "aut-3", type: "unica",
        question: "¿Cuál es tu postura sobre la inerrancia de la Biblia?",
        options: [
          { text: "La Biblia es inerrante en sus manuscritos originales y completamente verdadera en todo lo que afirma, incluyendo historia y ciencia.", w: defWeight({ cal: 5, pac: 3, sov: 2, aml: 2 }) },
          { text: "La Biblia es inerrante en asuntos de fe y práctica, pero no necesariamente en detalles históricos o científicos.", w: defWeight({ arm: 3, sem: 2, lib: 3 }) },
          { text: "La Biblia es confiable en su mensaje central de salvación, pero contiene errores históricos y científicos propios de su época.", w: defWeight({ lib: 5, pel: 2, sem: 2 }) },
          { text: "La Biblia es infalible: no puede fallar en cumplir su propósito, pero eso no requiere inerrancia en cada detalle.", w: defWeight({ hyp: 3, cal: 2, pms: 2 }) },
        ],
      },
      {
        id: "aut-4", type: "unica",
        question: "Cuando interpretas un pasaje difícil de la Biblia, ¿qué principio guía tu interpretación?",
        options: [
          { text: "La Escritura se interpreta a sí misma (analogía de la fe). Las partes claras iluminan las oscuras.", w: defWeight({ cal: 5, pac: 4, aml: 2 }) },
          { text: "El contexto histórico y literario del autor original es la clave para entender el pasaje.", w: defWeight({ arm: 3, pmh: 3, lib: 2 }) },
          { text: "Una interpretación literal y gramatical, considerando el género literario y el Dispensación en que fue escrito.", w: defWeight({ pmd: 5, dis: 5 }) },
          { text: "Debo interpretar el pasaje a la luz de cómo la iglesia lo ha entendido históricamente.", w: defWeight({ pms: 2, aml: 3, cal: 2 }) },
        ],
      },
    ],
  },
  {
    id: "naturaleza",
    label: "Naturaleza humana",
    description: "Tu comprensión del ser humano, el pecado original y la condición del hombre caído.",
    questions: [
      {
        id: "nat-1", type: "unica",
        question: "¿Cómo describirías la condición espiritual de una persona que no ha sido regenerada por el Espíritu Santo?",
        options: [
          { text: "Está muerta en sus pecados, espiritualmente incapaz de responder al evangelio por sí misma. Necesita que Dios la resucite.", w: defWeight({ cal: 5, hyp: 2, sov: 4 }) },
          { text: "Está separada de Dios pero aún tiene la capacidad de responder al evangelio si escucha y decide creer.", w: defWeight({ arm: 5, lib: 5, dec: 3 }) },
          { text: "Está herida por el pecado pero no muerta. Conserva la capacidad de buscar a Dios y cooperar con Su gracia.", w: defWeight({ sem: 5, lib: 4, pel: 2 }) },
          { text: "Está en una condición difícil pero puede decidir seguir a Dios por su propia voluntad, y Dios honrará esa decisión.", w: defWeight({ dec: 5, sem: 4, lib: 4, pel: 3 }) },
        ],
      },
      {
        id: "nat-2", type: "unica",
        question: "¿Qué efecto tuvo la caída de Adán en toda la humanidad?",
        options: [
          { text: "Toda la humanidad cayó en Adán (pecado original). Nacemos con una naturaleza corrupta y culpables delante de Dios.", w: defWeight({ cal: 5, pac: 3, aml: 2 }) },
          { text: "Todos heredamos una inclinación al pecado, pero no la culpa de Adán. Somos culpables solo cuando pecamos.", w: defWeight({ arm: 4, lib: 3, sem: 2 }) },
          { text: "El pecado de Adán afectó solo a Adán. Cada persona nace neutral y peca por imitación, no por herencia.", w: defWeight({ pel: 5, lib: 5, dec: 3 }) },
          { text: "La humanidad está totalmente depravada: el pecado afectó cada aspecto de nuestro ser, haciéndonos incapaces de inclinarnos a Dios.", w: defWeight({ cal: 5, hyp: 3, sov: 4 }) },
        ],
      },
      {
        id: "nat-3", type: "unica",
        question: "¿Puede una persona no regenerada hacer el bien que agrada a Dios?",
        options: [
          { text: "Puede hacer obras externamente buenas, pero no puede hacer obras que verdaderamente agraden a Dios porque no tiene fe.", w: defWeight({ cal: 4, pac: 3, sov: 3 }) },
          { text: "Puede hacer buenas obras e incluso buscar a Dios, pero necesita la gracia de Dios para ser salva.", w: defWeight({ arm: 4, sem: 3, lib: 3 }) },
          { text: "Sí, la gente puede hacer el bien y vivir moralmente sin ser cristiana. Dios valora esa bondad moral.", w: defWeight({ pel: 4, lib: 4, sem: 3 }) },
          { text: "El no regenerado solo puede pecar. Todo lo que hace fuera de la fe es pecado, incluso sus obras 'buenas'.", w: defWeight({ hyp: 4, cal: 3 }) },
        ],
      },
      {
        id: "nat-4", type: "unica",
        question: "Una persona te dice: 'Yo soy buena persona, hago el bien, ayudo a otros. Dios me aceptará porque soy sincero.' ¿Cómo respondes?",
        options: [
          { text: "Nuestra justicia es como trapo de inmundicia. Solo somos aceptos delante de Dios por la justicia de Cristo imputada, no por nuestra bondad.", w: defWeight({ cal: 5, sov: 3, pac: 3 }) },
          { text: "Ser sincero no es suficiente. Necesitas arrepentirte y aceptar a Cristo como tu Salvador personal.", w: defWeight({ dec: 4, arm: 3 }) },
          { text: "Dios valora la sinceridad, pero la Biblia dice que todos han pecado. Necesitas la gracia de Dios para ser salvo.", w: defWeight({ arm: 3, sem: 3 }) },
          { text: "La bondad humana sin Dios es imposible. Sin la regeneración del Espíritu, ni siquiera puedes querer hacer el bien verdadero.", w: defWeight({ cal: 4, hyp: 3, sov: 3 }) },
        ],
      },
      {
        id: "nat-5", type: "unica",
        question: "¿Cuál es el papel de la voluntad humana en la salvación?",
        options: [
          { text: "La voluntad humana está esclavizada al pecado. Dios debe liberarla mediante la regeneración para que el hombre pueda creer.", w: defWeight({ cal: 5, sov: 4, pac: 3, hyp: 1 }) },
          { text: "La voluntad humana es libre para aceptar o rechazar a Cristo. Dios respeta nuestra decisión.", w: defWeight({ arm: 5, lib: 5, dec: 4 }) },
          { text: "La voluntad humana coopera con la gracia de Dios. Dios da el primer paso, pero el hombre debe responder.", w: defWeight({ sem: 5, lib: 4, arm: 3 }) },
          { text: "La voluntad humana inicia la salvación. Dios responde cuando el hombre decide buscarlo.", w: defWeight({ pel: 4, sem: 3, dec: 4, lib: 4 }) },
        ],
      },
    ],
  },
  {
    id: "salvacion",
    label: "Salvación",
    description: "Tu comprensión de cómo una persona es salva: justificación, expiación y la obra de Cristo.",
    questions: [
      {
        id: "sal-1", type: "unica",
        question: "¿Por qué murió Cristo en la cruz?",
        options: [
          { text: "Cristo murió como sustituto de Su pueblo, cargando con sus pecados y asegurando eficazmente su salvación.", w: defWeight({ cal: 5, pac: 4, sov: 3 }) },
          { text: "Cristo murió para hacer posible la salvación de todos, pero Su muerte solo es efectiva si el hombre responde con fe.", w: defWeight({ arm: 5, dec: 3, lib: 3 }) },
          { text: "Cristo murió por todos sin excepción, pagando el precio por el pecado de toda la humanidad, pero la aplicación depende del libre albedrío.", w: defWeight({ arm: 4, sem: 3, lib: 3, pmd: 2 }) },
          { text: "La muerte de Cristo fue un ejemplo de amor y sacrificio que inspira al hombre a vivir mejor.", w: defWeight({ pel: 4, lib: 3, sem: 2 }) },
        ],
      },
      {
        id: "sal-2", type: "unica",
        question: "¿Qué es la justificación?",
        options: [
          { text: "Es el acto legal por el cual Dios declara justo al pecador basado únicamente en la justicia de Cristo imputada y recibida por fe sola.", w: defWeight({ cal: 5, pac: 4, sov: 3 }) },
          { text: "Es el proceso por el cual Dios hace justo al pecador mediante la fe y las obras que fluyen de ella.", w: defWeight({ arm: 3, sem: 3, lib: 2 }) },
          { text: "Es cuando Dios nos acepta porque Él ve nuestra fe y nos transforma progresivamente en personas justas.", w: defWeight({ sem: 4, arm: 3, dec: 2 }) },
          { text: "Es ser declarado justo porque Dios nos imputa la justicia de Cristo, pero el creyente debe mantener su salvación mediante la obediencia.", w: defWeight({ arm: 3, lib: 2, dec: 2 }) },
        ],
      },
      {
        id: "sal-3", type: "unica",
        question: "Una persona te pregunta: '¿Cómo puedo estar seguro de que soy salvo?' ¿Qué le dices?",
        options: [
          { text: "Tu seguridad no está en tu experiencia ni en tu decisión, sino en la obra terminada de Cristo y las promesas de Dios. Examina tu vida para ver frutos de la gracia.", w: defWeight({ cal: 5, pac: 3, sov: 2 }) },
          { text: "Si hiciste una oración sincera y aceptaste a Cristo en tu corazón, eres salvo. Dios es fiel a Su promesa.", w: defWeight({ dec: 5, arm: 3, lib: 2 }) },
          { text: "Puedes estar seguro si perseveras en la fe y produces frutos de arrepentimiento. El que persevere hasta el fin será salvo.", w: defWeight({ arm: 4, pmh: 2, sem: 2 }) },
          { text: "Si has sido elegido por Dios desde antes de la fundación del mundo, serás preservado hasta el final. Tu seguridad está en la soberanía de Dios.", w: defWeight({ cal: 4, hyp: 3, sov: 4 }) },
        ],
      },
      {
        id: "sal-4", type: "unica",
        question: "¿Cuál es la relación entre la fe y las buenas obras?",
        options: [
          { text: "Somos salvos solo por fe, pero la fe verdadera siempre produce buenas obras como evidencia necesaria de la salvación.", w: defWeight({ cal: 5, pac: 3 }) },
          { text: "Somos salvos por fe, pero las buenas obras son necesarias para mantenernos en la salvación.", w: defWeight({ arm: 4, lib: 3, dec: 2 }) },
          { text: "Somos salvos por fe y las buenas obras son una parte necesaria del proceso de salvación, no solo evidencia.", w: defWeight({ sem: 4, arm: 3 }) },
          { text: "Somos salvos solo por fe. Las obras son importantes pero no determinan ni evidencian necesariamente la salvación.", w: defWeight({ dec: 3, hyp: 2, pmd: 2 }) },
        ],
      },
      {
        id: "sal-5", type: "unica",
        question: "¿Qué lugar ocupa el arrepentimiento en la salvación?",
        options: [
          { text: "El arrepentimiento es un don de Dios que acompaña a la fe. Es un cambio de mente y corazón que Dios produce en el creyente.", w: defWeight({ cal: 4, pac: 3, sov: 3 }) },
          { text: "El arrepentimiento es una decisión que el pecador debe tomar para ser salvo. Dios espera que el hombre se arrepienta.", w: defWeight({ dec: 4, arm: 3, lib: 3 }) },
          { text: "El arrepentimiento es necesario para la salvación inicial, pero no es algo que deba caracterizar toda la vida cristiana.", w: defWeight({ dec: 3, pmd: 2, sem: 2 }) },
          { text: "El arrepentimiento es inseparable de la fe y es una gracia que Dios obra en el elegido, que continúa toda la vida.", w: defWeight({ cal: 5, pac: 3, sov: 2 }) },
        ],
      },
      {
        id: "sal-6", type: "unica",
        question: "Cuando piensas en la expiación de Cristo, ¿cuál imagen te parece más precisa?",
        options: [
          { text: "Cristo es el Cordero de Dios que carga con el pecado del mundo; Su muerte fue un sacrificio sustitutivo penal.", w: defWeight({ cal: 4, pac: 3, aml: 2 }) },
          { text: "Cristo venció al pecado y a la muerte, inaugurando el reino de Dios y derrotando los poderes de las tinieblas.", w: defWeight({ pms: 3, pmh: 3, sov: 2 }) },
          { text: "Cristo pagó el precio por el pecado de toda la humanidad, pero ese pago solo es efectivo cuando el hombre lo acepta.", w: defWeight({ arm: 4, dec: 3, lib: 2, pmd: 2 }) },
          { text: "Cristo es el segundo Adán que tuvo éxito donde el primero falló, cumpliendo el pacto de obras y asegurando la salvación de Su pueblo.", w: defWeight({ cal: 5, pac: 5, sov: 3 }) },
        ],
      },
    ],
  },
  {
    id: "gracia",
    label: "Gracia y elección",
    description: "Tu comprensión de la elección divina, la predestinación y la gracia de Dios en la salvación.",
    questions: [
      {
        id: "gra-1", type: "unica",
        question: "¿Qué es la elección divina?",
        options: [
          { text: "Dios, antes de la fundación del mundo, eligió soberanamente a ciertas personas para salvación basado únicamente en Su voluntad y amor.", w: defWeight({ cal: 5, pac: 4, sov: 4 }) },
          { text: "Dios eligió basándose en Su presciencia: Él sabía quiénes responderían al evangelio y los eligió en base a esa fe prevista.", w: defWeight({ arm: 5, lib: 3, dec: 2 }) },
          { text: "Dios desea salvar a todos, pero la elección es corporativa: Dios eligió a la iglesia en Cristo, no individuos específicos.", w: defWeight({ arm: 3, sem: 2, lib: 2 }) },
          { text: "Dios eligió a algunos para salvación a pesar de sus méritos, y dejó al resto en su pecado para manifestar Su justicia.", w: defWeight({ cal: 4, hyp: 3, sov: 4 }) },
        ],
      },
      {
        id: "gra-2", type: "unica",
        question: "¿Puede una persona resistir la gracia de Dios cuando Él decide salvarle?",
        options: [
          { text: "La gracia eficaz de Dios no puede ser resistida finalmente. Cuando Dios decide salvar, transforma la voluntad para que el pecador quiera venir.", w: defWeight({ cal: 5, sov: 4, pac: 3 }) },
          { text: "Sí, el hombre puede resistir la gracia de Dios. Debe cooperar voluntariamente para ser salvo.", w: defWeight({ arm: 5, lib: 5, sem: 4 }) },
          { text: "Dios ofrece gracia a todos, pero solo aquellos que responden positivamente son salvos. La resistencia es posible.", w: defWeight({ arm: 4, sem: 3, dec: 3 }) },
          { text: "Dios llama externamente a todos, pero solo los elegidos reciben el llamado interno eficaz que no puede ser resistido.", w: defWeight({ cal: 4, hyp: 2, sov: 3 }) },
        ],
      },
      {
        id: "gra-3", type: "unica",
        question: "Lee Romanos 9:13: 'A Jacob amé, mas a Esaú aborrecí.' ¿Cómo interpretas este texto?",
        options: [
          { text: "Dios, en Su soberanía, tiene el derecho de elegir a unos y pasar por alto a otros, y esto no es injusto porque nadie merece salvación.", w: defWeight({ cal: 5, sov: 4, pac: 3 }) },
          { text: "Dios amó a Jacob porque previó su fe, y aborreció a Esaú porque previó su rechazo. La elección se basa en la presciencia.", w: defWeight({ arm: 4, lib: 3, dec: 2 }) },
          { text: "Esto se refiere a naciones, no a individuos. Jacob (Israel) fue escogido para un propósito nacional, no para salvación individual.", w: defWeight({ arm: 3, sem: 2, pmd: 3 }) },
          { text: "Dios escogió soberanamente a Jacob para salvación y dejó a Esaú en su pecado. Esto ilustra la predestinación incondicional.", w: defWeight({ cal: 5, hyp: 3, sov: 5 }) },
        ],
      },
      {
        id: "gra-4", type: "unica",
        question: "Una persona dice: 'Creo que Dios me salvó porque vio que yo lo buscaría.' ¿Qué piensas de esta afirmación?",
        options: [
          { text: "La salvación no depende de la decisión humana sino de la misericordia de Dios. Dios no nos elige porque ve algo bueno en nosotros.", w: defWeight({ cal: 5, sov: 4, pac: 3 }) },
          { text: "Dios vio tu fe y te salvó. Eso no disminuye Su gracia, porque Él te dio la capacidad de buscarlo.", w: defWeight({ arm: 4, sem: 3, lib: 3 }) },
          { text: "Eso suena lógico. Dios sabe quién responderá y los elige en base a eso. No contradice la soberanía.", w: defWeight({ arm: 3, dec: 3, lib: 2 }) },
          { text: "Dios no solo vio tu fe: Él la produjo en ti. La fe es un don de Dios, no una capacidad natural que Dios previó.", w: defWeight({ cal: 5, hyp: 2, sov: 3, pac: 3 }) },
        ],
      },
      {
        id: "gra-5", type: "unica",
        question: "¿Cómo entiendes la relación entre la soberanía de Dios y la responsabilidad humana?",
        options: [
          { text: "Dios es soberano y el hombre es responsable. Ambas son verdades bíblicas que no se contradicen aunque no entendamos completamente cómo.", w: defWeight({ cal: 5, pac: 3, sov: 3 }) },
          { text: "Dios es soberano pero limita Su soberanía para respetar el libre albedrío humano. La responsabilidad humana requiere libertad real.", w: defWeight({ arm: 5, lib: 5, sem: 2 }) },
          { text: "La soberanía de Dios determina todas las cosas, incluyendo la salvación, y la responsabilidad humana es real pero subordinada a la soberanía.", w: defWeight({ cal: 4, hyp: 2, sov: 4 }) },
          { text: "Dios soberanamente provee la salvación para todos, y el hombre responsablemente decide si la acepta o rechaza.", w: defWeight({ arm: 4, dec: 3, pmd: 2 }) },
        ],
      },
    ],
  },
  {
    id: "perseverancia",
    label: "Perseverancia",
    description: "Tu comprensión de la seguridad, la perseverancia y la posibilidad de perder la salvación.",
    questions: [
      {
        id: "per-1", type: "unica",
        question: "¿Puede un verdadero creyente perder su salvación?",
        options: [
          { text: "No. Los que Dios ha elegido, redimido y regenerado serán preservados por Su poder hasta el final. Ninguno se pierde.", w: defWeight({ cal: 5, pac: 4, sov: 4 }) },
          { text: "Sí, un creyente verdadero puede apartarse de la fe y perder su salvación si no persevera.", w: defWeight({ arm: 5, lib: 4, sem: 2 }) },
          { text: "Un verdadero creyente no puede perder su salvación porque Dios lo guarda, pero debe perseverar como evidencia de que es genuino.", w: defWeight({ cal: 4, pac: 3 }) },
          { text: "Una persona que fue salva pero luego vive en pecado nunca fue verdaderamente salva. Los verdaderos creyentes perseveran.", w: defWeight({ cal: 3, hyp: 2, pmh: 2 }) },
        ],
      },
      {
        id: "per-2", type: "unica",
        question: "Una persona dice: 'Acepté a Cristo hace años, pero ahora vivo completamente apartado de Dios y sin arrepentimiento. ¿Aún soy salvo?'",
        options: [
          { text: "Si no hay evidencia de vida espiritual, es probable que nunca haya nacido de nuevo. La fe verdadera produce frutos.", w: defWeight({ cal: 4, pac: 3 }) },
          { text: "Si aceptaste a Cristo sinceramente, eres salvo independientemente de cómo vivas ahora. Tu salvación está basada en una decisión pasada.", w: defWeight({ dec: 5, hyp: 2 }) },
          { text: "Necesitas arrepentirte. Si mueres en ese estado, te perderás. La salvación se mantiene por fe viva, no por una oración del pasado.", w: defWeight({ arm: 4, sem: 2, lib: 3 }) },
          { text: "Dios preserva a Sus elegidos. Si fuiste verdaderamente salvo, Dios te traerá de vuelta. Tu vida actual sugiere que necesitas examinarte.", w: defWeight({ cal: 4, sov: 3, pac: 3 }) },
        ],
      },
      {
        id: "per-3", type: "unica",
        question: "¿Qué significa 'perseverancia de los santos'?",
        options: [
          { text: "Dios persevera con Sus santos. Es Dios quien nos guarda y nos preserva hasta el fin, no nuestro propio esfuerzo.", w: defWeight({ cal: 5, sov: 4, pac: 3 }) },
          { text: "Los verdaderos creyentes perseveran en la fe mediante el poder de Dios, pero también mediante su propia responsabilidad y esfuerzo.", w: defWeight({ cal: 3, arm: 2, pac: 2 }) },
          { text: "El creyente debe perseverar para ser salvo. La salvación final depende de la perseverancia hasta el fin.", w: defWeight({ arm: 4, sem: 3, lib: 2 }) },
          { text: "Los elegidos perseverarán porque Dios los guarda. El que se aparta nunca fue verdaderamente salvo.", w: defWeight({ cal: 4, hyp: 2, sov: 3 }) },
        ],
      },
      {
        id: "per-4", type: "unica",
        question: "Un cristiano batalla con el pecado persistentemente y a veces cae en pecados graves. ¿Cómo evalúas esta situación?",
        options: [
          { text: "La batalla contra el pecado es evidencia de vida espiritual. El verdadero creyente no puede vivir en pecado impenitente, pero lucha.", w: defWeight({ cal: 4, pac: 3 }) },
          { text: "Si continúa en pecado sin arrepentimiento, probablemente no es salvo. La fe verdadera transforma la vida radicalmente.", w: defWeight({ hyp: 3, cal: 2 }) },
          { text: "Es normal que los cristianos pequen. La gracia cubre nuestros pecados pasados, presentes y futuros. No debemos preocuparnos tanto.", w: defWeight({ dec: 3, sem: 2, lib: 2 }) },
          { text: "Debe arrepentirse y buscar restauración. Dios es fiel para perdonar, pero el pecado no tomado en serio puede llevar a la apostasía.", w: defWeight({ arm: 4, pmh: 2 }) },
        ],
      },
    ],
  },
  {
    id: "evangelismo",
    label: "Evangelismo",
    description: "Tu comprensión de la proclamación del evangelio, el llamado a la fe y la urgencia misionera.",
    questions: [
      {
        id: "eva-1", type: "unica",
        question: "¿Por qué debemos evangelizar si Dios ya ha elegido a los que se salvarán?",
        options: [
          { text: "Dios ha determinado salvar a Su pueblo a través de la predicación del evangelio. La elección no elimina el medio, lo establece.", w: defWeight({ cal: 5, sov: 3, pac: 3 }) },
          { text: "Debemos evangelizar porque Dios llama a todos al arrepentimiento y la decisión humana determina quién se salva.", w: defWeight({ arm: 4, dec: 4, lib: 3 }) },
          { text: "Evangelizamos por obediencia y porque no sabemos quiénes son los elegidos. El evangelio es una oferta genuina para todos.", w: defWeight({ cal: 4, pac: 2, sov: 2 }) },
          { text: "La elección no debe mencionarse al evangelizar. Debemos predicar a Cristo y llamar a todos a creer, sin mencionar doctrinas profundas.", w: defWeight({ dec: 3, hyp: 2, pmd: 2 }) },
        ],
      },
      {
        id: "eva-2", type: "unica",
        question: "Cuando presentas el evangelio a un incrédulo, ¿cuál es tu énfasis principal?",
        options: [
          { text: "Dios es santo y justo, el hombre ha pecado y merece el infierno, pero Cristo murió por los pecadores. Llama al arrepentimiento y la fe.", w: defWeight({ cal: 4, pac: 2 }) },
          { text: "Dios te ama y tiene un plan para tu vida. Acepta a Cristo en tu corazón y serás salvo.", w: defWeight({ dec: 4, arm: 3, lib: 2 }) },
          { text: "Cristo murió por tus pecados. Si confiesas con tu boca y crees en tu corazón, serás salvo. Dios respeta tu decisión.", w: defWeight({ arm: 3, dec: 3, lib: 2 }) },
          { text: "Dios te llama al arrepentimiento. El evangelio no es una oferta que puedes aceptar o rechazar; es un mandato que debes obedecer.", w: defWeight({ cal: 3, hyp: 2, sov: 3 }) },
        ],
      },
      {
        id: "eva-3", type: "unica",
        question: "Si una persona escucha el evangelio pero no responde, ¿a qué atribuyes principalmente su falta de respuesta?",
        options: [
          { text: "No respondió porque Dios no le ha concedido el arrepentimiento. El hombre natural no puede recibir las cosas del Espíritu.", w: defWeight({ cal: 5, sov: 4, hyp: 2 }) },
          { text: "No respondió porque decidió libremente rechazar a Cristo. Dios respeta su libre albedrío.", w: defWeight({ arm: 4, lib: 4, dec: 3 }) },
          { text: "No respondió porque el evangelio no fue presentado de manera clara o convincente. Debemos mejorar cómo comunicamos.", w: defWeight({ sem: 3, dec: 2, lib: 2 }) },
          { text: "Dios llama a todos externamente, pero solo los elegidos responden porque Dios obra en ellos internamente.", w: defWeight({ cal: 4, sov: 3, pac: 2 }) },
        ],
      },
      {
        id: "eva-4", type: "unica",
        question: "¿Cuán urgente es la tarea evangelística?",
        options: [
          { text: "Es urgente porque Dios ha determinado usar la predicación para salvar a Sus elegidos. No sabemos cuánto tiempo tenemos.", w: defWeight({ cal: 4, sov: 2 }) },
          { text: "Es extremadamente urgente porque las personas están perdiéndose y su destino eterno depende de que les hablemos de Cristo.", w: defWeight({ arm: 4, dec: 3, pmh: 2 }) },
          { text: "Es importante pero no urgente de manera extrema. Dios salvará a Sus elegidos con o sin nosotros.", w: defWeight({ hyp: 4, cal: 2 }) },
          { text: "Es urgente porque Cristo viene pronto y debemos alcanzar a tantos como sea posible antes de Su regreso.", w: defWeight({ pmd: 4, dec: 3 }) },
        ],
      },
      {
        id: "eva-5", type: "unica",
        question: "¿Debemos invitar a las personas a 'recibir a Cristo' o a 'arrepentirse y creer'?",
        options: [
          { text: "Debemos llamar al arrepentimiento y la fe. La invitación debe ser a rendirse a Cristo como Señor, no solo a 'recibir' bendiciones.", w: defWeight({ cal: 4, pac: 3 }) },
          { text: "Ambas son formas válidas. 'Recibir a Cristo' es la manera más accesible de presentar el evangelio.", w: defWeight({ dec: 4, arm: 3 }) },
          { text: "Debemos enfatizar el arrepentimiento. El evangelio no es una oferta, es un mandato de rendición incondicional.", w: defWeight({ cal: 3, hyp: 2, sov: 2 }) },
          { text: "Lo importante es que la persona ore la oración del pecador y acepte a Cristo. La teología viene después.", w: defWeight({ dec: 5, sem: 2 }) },
        ],
      },
    ],
  },
  {
    id: "iglesia",
    label: "Iglesia y adoración",
    description: "Tu comprensión de la naturaleza de la iglesia, las ordenanzas y la adoración.",
    questions: [
      {
        id: "igl-1", type: "unica",
        question: "¿Quiénes deben ser bautizados?",
        options: [
          { text: "Solo los creyentes que profesan fe en Cristo. El bautismo es una ordenanza para discípulos, no para infantes.", w: defWeight({ cal: 5, pac: 4 }) },
          { text: "Los creyentes y sus hijos. El bautismo reemplaza a la circuncisión como señal del pacto.", w: defWeight({ arm: 3, pac: 2 }) },
          { text: "Cualquier persona que desee ser bautizada, independientemente de su fe, porque es un sacramento que confiere gracia.", w: defWeight({ lib: 3, sem: 2 }) },
          { text: "Los creyentes por inmersión, como símbolo de su identificación con la muerte y resurrección de Cristo.", w: defWeight({ cal: 4, pac: 3, pmh: 2 }) },
        ],
      },
      {
        id: "igl-2", type: "unica",
        question: "¿Qué es la Cena del Señor?",
        options: [
          { text: "Es una ordenanza en la que el pan y el vino representan el cuerpo y la sangre de Cristo. Cristo está espiritualmente presente para la fe del creyente.", w: defWeight({ cal: 4, pac: 3 }) },
          { text: "Es un memorial. El pan y el vino son símbolos que nos recuerdan la obra de Cristo. No hay presencia real.", w: defWeight({ pmd: 3, dec: 2 }) },
          { text: "El pan y el vino se convierten literalmente en el cuerpo y la sangre de Cristo (transubstanciación).", w: defWeight({ lib: 3, sem: 2 }) },
          { text: "Es un medio de gracia donde Cristo alimenta espiritualmente a Su pueblo. Es más que un memorial, es una comunión real con Cristo.", w: defWeight({ cal: 4, pac: 3, aml: 2 }) },
        ],
      },
      {
        id: "igl-3", type: "unica",
        question: "¿Cómo debe gobernarse la iglesia local?",
        options: [
          { text: "Debe ser gobernada por ancianos (presbíteros) elegidos por la congregación, siguiendo el modelo del Nuevo Testamento.", w: defWeight({ cal: 4, pac: 3 }) },
          { text: "Debe tener una estructura jerárquica: obispos, sacerdotes y diáconos, con autoridad centralizada.", w: defWeight({ lib: 3, sem: 2 }) },
          { text: "Cada iglesia local es autónoma bajo Cristo, gobernada por ancianos y con la congregación ejerciendo gobierno colegiado.", w: defWeight({ cal: 4, pac: 3, pmh: 2 }) },
          { text: "No hay un modelo único. La iglesia debe adaptar su gobierno a las necesidades culturales y contextuales.", w: defWeight({ arm: 2, sem: 2, lib: 2 }) },
        ],
      },
      {
        id: "igl-4", type: "unica",
        question: "¿Cuál debe ser el centro de la adoración corporativa?",
        options: [
          { text: "La predicación expositiva de la Palabra de Dios y la administración fiel de las ordenanzas.", w: defWeight({ cal: 5, pac: 3 }) },
          { text: "La alabanza y la música, creando un ambiente donde las personas puedan experimentar la presencia de Dios.", w: defWeight({ dec: 3, arm: 2, sem: 2 }) },
          { text: "La celebración de la Eucaristía (misa) como el centro del culto.", w: defWeight({ lib: 3, sem: 2 }) },
          { text: "La adoración debe centrarse en Dios, ser regulada por la Escritura (principio regulativo) y edificante para la iglesia.", w: defWeight({ cal: 4, pac: 3, sov: 2 }) },
        ],
      },
    ],
  },
  {
    id: "hermeneutica",
    label: "Hermenéutica",
    description: "Tus principios de interpretación bíblica y cómo lees la Escritura.",
    questions: [
      {
        id: "her-1", type: "unica",
        question: "Al leer el Antiguo Testamento, ¿cómo entiendes su relación con el Nuevo Testamento?",
        options: [
          { text: "El AT es la preparación para Cristo y encuentra su cumplimiento en Él. Hay una unidad progresiva del pacto de gracia.", w: defWeight({ cal: 5, pac: 5, aml: 3 }) },
          { text: "El AT es la historia de Israel, y el NT es la historia de la iglesia. Son dos pueblos de Dios con propósitos distintos.", w: defWeight({ pmd: 5, dis: 5 }) },
          { text: "El AT promete un reino terrenal para Israel que será cumplido en el milenio. La iglesia no reemplaza a Israel.", w: defWeight({ pmd: 5, dis: 5 }) },
          { text: "El AT y el NT revelan progresivamente a Cristo y el evangelio. La iglesia es el Israel espiritual de Dios.", w: defWeight({ cal: 4, pac: 4, pms: 3, aml: 3 }) },
        ],
      },
      {
        id: "her-2", type: "unica",
        question: "¿Cómo interpretas las profecías del Antiguo Testamento?",
        options: [
          { text: "Muchas profecías tienen cumplimiento en Cristo y la iglesia (interpretación cristocéntrica). Otras esperan un cumplimiento futuro.", w: defWeight({ cal: 3, aml: 3, pmh: 3 }) },
          { text: "Deben interpretarse literalmente. Las profecías sobre Israel se cumplirán literalmente en el futuro milenio.", w: defWeight({ pmd: 5, dis: 5 }) },
          { text: "Las profecías se cumplen progresivamente en la historia, y la iglesia participa de las bendiciones prometidas a Israel.", w: defWeight({ pms: 4, cal: 2, pac: 2 }) },
          { text: "Deben interpretarse según su contexto histórico original y luego aplicarse a Cristo como cumplimiento supremo.", w: defWeight({ cal: 4, pmh: 3 }) },
        ],
      },
      {
        id: "her-3", type: "unica",
        question: "Lee 2 Pedro 3:9: 'el Señor no retarda su promesa... sino que es paciente para con nosotros, no queriendo que ninguno perezca, sino que todos procedan al arrepentimiento.' ¿Quiénes son 'todos'?",
        options: [
          { text: "Todos los elegidos de Dios. La paciencia de Dios espera hasta que todos los suyos hayan sido traídos al arrepentimiento.", w: defWeight({ cal: 5, sov: 3, pac: 3 }) },
          { text: "Toda persona sin excepción. Dios desea sinceramente que todos se salven, pero respeta el libre albedrío.", w: defWeight({ arm: 5, lib: 4, dec: 2 }) },
          { text: "Todas las personas, porque Cristo murió por todos y Dios ofrece salvación a todos, aunque no todos responderán.", w: defWeight({ arm: 4, sem: 2, pmd: 2 }) },
          { text: "Se refiere a 'nosotros' los creyentes. Pedro está diciendo que Dios es paciente con Su iglesia, no con todo el mundo.", w: defWeight({ hyp: 3, cal: 2 }) },
        ],
      },
      {
        id: "her-4", type: "unica",
        question: "¿Qué método de interpretación bíblica consideras más fiel?",
        options: [
          { text: "El método histórico-gramatical, interpretando el texto según su género literario, contexto histórico y la analogía de la fe.", w: defWeight({ cal: 4, pac: 3, aml: 2 }) },
          { text: "Una interpretación literal donde sea posible, y simbólica donde el texto indique, considerando las distinciones dispensacionales.", w: defWeight({ pmd: 4, dis: 4 }) },
          { text: "El método histórico-crítico, considerando las fuentes y la redacción del texto para entender su significado original.", w: defWeight({ lib: 4, arm: 2 }) },
          { text: "La interpretación que está en línea con la tradición de la iglesia y los credos históricos.", w: defWeight({ aml: 3, pms: 2, cal: 2 }) },
        ],
      },
    ],
  },
  {
    id: "escatologia",
    label: "Escatología",
    description: "Tu comprensión de las profecías, el milenio, el fin de los tiempos y el reino de Dios.",
    questions: [
      {
        id: "esc-1", type: "unica",
        question: "¿Qué es el milenio mencionado en Apocalipsis 20?",
        options: [
          { text: "Es el período actual entre la primera y la segunda venida de Cristo, durante el cual las almas de los creyentes reinan con Cristo en el cielo.", w: defWeight({ aml: 5, cal: 3, pac: 2 }) },
          { text: "Es un período futuro de 1.000 años literales donde Cristo reinará en la tierra desde Jerusalén.", w: defWeight({ pmd: 5, dis: 5 }) },
          { text: "Es un período futuro donde Cristo reinará en la tierra, pero no necesariamente 1.000 años literales. La iglesia participará en este reino.", w: defWeight({ pmh: 4 }) },
          { text: "Es la era del evangelio donde la iglesia, mediante la predicación, transformará el mundo antes de la segunda venida de Cristo.", w: defWeight({ pms: 5, cal: 2 }) },
        ],
      },
      {
        id: "esc-2", type: "unica",
        question: "¿Cuál es la relación entre Israel y la Iglesia en el plan de Dios?",
        options: [
          { text: "La iglesia es el Israel espiritual. No hay distinción futura. Un mismo pueblo de Dios, un mismo pacto de gracia.", w: defWeight({ aml: 5, cal: 4, pac: 4, pms: 3 }) },
          { text: "Israel y la iglesia son distintos. Dios tiene un plan futuro para Israel como nación que se cumplirá en el milenio.", w: defWeight({ pmd: 5, dis: 5 }) },
          { text: "Hay continuidad entre Israel y la iglesia, pero Dios cumplirá promesas específicas a Israel en el futuro.", w: defWeight({ pmh: 4, arm: 2 }) },
          { text: "La iglesia ha reemplazado a Israel, y todas las promesas hechas a Israel se cumplen ahora en la iglesia.", w: defWeight({ pms: 3, aml: 2 }) },
        ],
      },
      {
        id: "esc-3", type: "unica",
        question: "¿Cuándo ocurrirá la resurrección de los creyentes?",
        options: [
          { text: "En la segunda venida de Cristo. Todos los creyentes resucitarán juntos para juicio y vida eterna.", w: defWeight({ aml: 4, cal: 2, pmh: 3 }) },
          { text: "Los creyentes resucitarán antes del milenio para reinar con Cristo, y los incrédulos resucitarán después del milenio.", w: defWeight({ pmd: 5, dis: 4, pmh: 4 }) },
          { text: "Los creyentes resucitan espiritualmente al creer, y la resurrección física será al final, cuando Cristo venga.", w: defWeight({ pms: 3, aml: 3 }) },
          { text: "Hay dos resurrecciones: una al inicio del milenio (creyentes solamente) y otra al final del milenio (incrédulos).", w: defWeight({ pmd: 4, dis: 4 }) },
        ],
      },
      {
        id: "esc-4", type: "unica",
        question: "¿Qué es el 'rapto' de la iglesia?",
        options: [
          { text: "Es el encuentro de los creyentes con Cristo en el aire en Su segunda venida, después de la tribulación (post-tribulacional).", w: defWeight({ aml: 3, pmh: 3, cal: 2 }) },
          { text: "Es la remoción secreta de la iglesia antes de la gran tribulación, seguida por el regreso visible de Cristo 7 años después.", w: defWeight({ pmd: 5, dis: 5 }) },
          { text: "Es el mismo evento que la segunda venida. No hay un rapto secreto separado. Los creyentes son reunidos cuando Cristo regresa.", w: defWeight({ aml: 4, cal: 3, pmh: 3 }) },
          { text: "No hay un 'rapto' como se enseña popularmente. Cristo regresa una sola vez para juzgar y establecer Su reino para siempre.", w: defWeight({ aml: 4, pms: 3 }) },
        ],
      },
      {
        id: "esc-5", type: "unica",
        question: "¿Cómo entiendes Mateo 24 en relación con los tiempos finales?",
        options: [
          { text: "Mateo 24 se refiere principalmente a la destrucción de Jerusalén en el año 70 d.C., con tipología que apunta al fin final.", w: defWeight({ aml: 4, cal: 2, pac: 2 }) },
          { text: "Mateo 24 describe eventos que ocurrirán en la gran tribulación, antes de la segunda venida de Cristo en gloria.", w: defWeight({ pmd: 4, dis: 3, pmh: 3 }) },
          { text: "Mateo 24 es una profecía de doble cumplimiento: la destrucción de Jerusalén y el fin del mundo.", w: defWeight({ pmh: 3, arm: 2 }) },
          { text: "Mateo 24 describe la conquista del evangelio y la victoria de la iglesia sobre las naciones, culminando en el reino.", w: defWeight({ pms: 4 }) },
        ],
      },
    ],
  },
  {
    id: "casos",
    label: "Casos pastorales",
    description: "Escenarios prácticos de la vida real que revelan tu enfoque teológico aplicado.",
    questions: [
      {
        id: "cas-1", type: "unica",
        question: "Un joven en tu iglesia dice: 'Quiero ser salvo, pero siento que no puedo arrepentirme. ¿Qué hago?'",
        options: [
          { text: "El hecho de que quieras ser salvo y te preocupe tu falta de arrepentimiento es evidencia de que Dios ya está obrando en ti. Pide a Dios que te conceda el arrepentimiento.", w: defWeight({ cal: 5, sov: 3, pac: 3 }) },
          { text: "Dios te está llamando. Solo debes tomar la decisión de arrepentirte. Dios respeta tu elección, pero debes decidir.", w: defWeight({ dec: 4, arm: 3, lib: 3 }) },
          { text: "El arrepentimiento es un don de Dios. Si no puedes arrepentirte, quizás no eres elegido. Solo Dios puede darte arrepentimiento.", w: defWeight({ hyp: 5, cal: 2 }) },
          { text: "Dios no te pediría que te arrepientas si no pudieras hacerlo. Eres responsable de arrepentirte. Ora y decide seguir a Cristo.", w: defWeight({ arm: 4, sem: 3, lib: 3 }) },
        ],
      },
      {
        id: "cas-2", type: "unica",
        question: "Un miembro de tu congregación te dice: 'Oro, leo la Biblia, voy a la iglesia, pero no siento la presencia de Dios. ¿Qué me pasa?'",
        options: [
          { text: "La vida cristiana no se basa en sentimientos sino en las promesas de Dios. Tu fidelidad en los medios de gracia es evidencia de fe genuina. Confía en la Palabra, no en tus emociones.", w: defWeight({ cal: 4, pac: 3, sov: 2 }) },
          { text: "Tal vez hay pecado no confesado en tu vida. Examínate, confiesa y busca restauración. La comunión con Dios requiere pureza.", w: defWeight({ arm: 3, pmh: 2 }) },
          { text: "A veces Dios se esconde para probar nuestra fe. Sigue buscándolo. Él se revelará a Su tiempo. No depende de ti sino de Él.", w: defWeight({ cal: 3, hyp: 2, sov: 2 }) },
          { text: "Prueba ayuno, oración prolongada y alabanza intensa. Muchas veces necesitamos romper barreras espirituales para sentir Su presencia.", w: defWeight({ dec: 3, lib: 2, sem: 2 }) },
        ],
      },
      {
        id: "cas-3", type: "unica",
        question: "Un vecino te dice: 'No necesito a Dios. Soy buena persona, ayudo a otros, pago mis impuestos. ¿Por qué necesito religión?'",
        options: [
          { text: "La bondad humana sin Dios es como trapo de inmundicia. No eres bueno comparado con Dios santo. Necesitas un Salvador, no una religión.", w: defWeight({ cal: 4, sov: 3 }) },
          { text: "Dios te creó y te ama. Él quiere tener una relación personal contigo. Acepta a Cristo y experimentarás una vida plena.", w: defWeight({ dec: 4, arm: 2 }) },
          { text: "Tu bondad no te salvará. Sin Cristo, tu destino es el infierno. Dios te llama hoy al arrepentimiento.", w: defWeight({ cal: 3, hyp: 2, arm: 2 }) },
          { text: "Ser buena persona no es suficiente porque Dios es santo y nosotros hemos pecado contra Él. Necesitas el perdón que solo Cristo ofrece.", w: defWeight({ arm: 3, sem: 2, pmh: 2 }) },
        ],
      },
      {
        id: "cas-4", type: "unica",
        question: "Un cristiano en tu iglesia dice: 'He orado para que Dios salve a mi esposo, pero no se salva. ¿No quiere Dios salvarlo?'",
        options: [
          { text: "Dios salva soberanamente a quien Él quiere. Sigue orando y predicando con tu testimonio. El resultado está en las manos de Dios.", w: defWeight({ cal: 4, sov: 3 }) },
          { text: "Dios quiere salvar a tu esposo, pero respeta su libre albedrío. Sigue orando para que tu esposo tome la decisión correcta.", w: defWeight({ arm: 4, lib: 3, dec: 2 }) },
          { text: "No sabemos quiénes son los elegidos. Dios puede estar obrando de maneras que no vemos. No te desanimes, persevera en oración.", w: defWeight({ cal: 3, pac: 2 }) },
          { text: "Dios quiere que todos sean salvos (1 Ti 2:4). Si tu esposo no se salva, es porque él está resistiendo la gracia de Dios.", w: defWeight({ arm: 3, sem: 2, lib: 2 }) },
        ],
      },
      {
        id: "cas-5", type: "unica",
        question: "Una persona visita tu iglesia y después del servicio te dice: 'Nunca había escuchado que Dios es soberano en la salvación. Me da miedo pensar que si Dios no me elige, no puedo hacer nada.'",
        options: [
          { text: "El temor de Dios es el principio de la sabiduría. Pero el evangelio no es 'Dios te rechaza', sino 'Cristo murió por pecadores'. Ven a Cristo, y si vienes, es porque Dios te atrae.", w: defWeight({ cal: 5, sov: 3, pac: 3 }) },
          { text: "Dios no rechaza a nadie que venga a Él. Jesús dice: 'Venid a mí todos los que estáis trabajados'. Tú puedes venir hoy.", w: defWeight({ arm: 4, dec: 3, lib: 2 }) },
          { text: "La soberanía de Dios y la responsabilidad humana son ambas verdaderas. No tienes que entender todo para venir a Cristo. Ven, y Dios te recibirá.", w: defWeight({ cal: 3, arm: 2 }) },
          { text: "No debes preocuparte por la elección. Dios te ama y quiere que seas salvo. Solo debes aceptar a Cristo.", w: defWeight({ dec: 3, arm: 2, sem: 2 }) },
        ],
      },
      {
        id: "cas-6", type: "unica",
        question: "Un predicador famoso dice: 'Dios ha hecho todo lo que puede hacer para salvarte. Ahora la decisión es tuya. Dios está en el cielo esperando que decidas.' ¿Qué opinas?",
        options: [
          { text: "Esta afirmación es incorrecta. Dios no está limitado ni a la espera de la decisión humana. Él salva soberanamente a Su pueblo mediante la obra irresistible del Espíritu.", w: defWeight({ cal: 5, sov: 4, pac: 3 }) },
          { text: "Está básicamente correcta. Dios respeta nuestra libertad. Él provee la salvación y nosotros decidimos.", w: defWeight({ arm: 4, dec: 3, lib: 3 }) },
          { text: "Tiene algo de verdad pero es incompleta. Dios hace mucho más: Él atrae, convence, y obra en el creyente, pero el hombre debe responder.", w: defWeight({ sem: 3, arm: 2 }) },
          { text: "Es peligrosamente incorrecta. Minimiza la soberanía de Dios y exalta la capacidad humana. Dios no solo ofrece salvación: Él salva.", w: defWeight({ cal: 4, hyp: 2, sov: 3 }) },
        ],
      },
    ],
  },
];

export interface ProfileDef {
  id: string;
  label: string;
  shortLabel: string;
  color: string;
  description: string;
  strengths: string[];
  warnings: string[];
  studySuggestions: string[];
  match: (weights: AnswerWeight) => number;
}

export const profiles: ProfileDef[] = [
  {
    id: "calvinista",
    label: "Calvinismo Histórico Confesional",
    shortLabel: "Calvinista",
    color: "hsl(220, 70%, 45%)",
    description:
      "Tu perfil refleja una teología consistente con la tradición reformada histórica. Afirmas la soberanía de Dios en la salvación, la depravación total, la elección incondicional, la expiación particular, la gracia irresistible y la perseverancia de los santos. Tus raíces están en la teología de Agustín, Calvino, los puritanos y las confesiones reformadas como la Confesión Bautista de Fe de 1689.",
    strengths: [
      "Fuerte énfasis en la soberanía de Dios, que da una base sólida para la confianza y la seguridad.",
      "Comprensión profunda de la gracia: la salvación es completamente obra de Dios.",
      "La teología del pacto proporciona una lectura unificada de toda la Escritura.",
      "Énfasis en la predicación expositiva y la centralidad de la Palabra.",
    ],
    warnings: [
      "Cuidado con volverse intelectual o frío. La teología reformada debe producir pasión por Dios y amor por las personas.",
      "Evita el fatalismo: la soberanía de Dios no elimina la responsabilidad humana ni la urgencia del evangelismo.",
      "La doctrina de la elección debe llevar a la humildad, no al orgullo de 'tener la teología correcta'.",
    ],
    studySuggestions: [
      "Confesión Bautista de Fe de 1689 — tu herencia confesional.",
      "Juan Calvino — Institutos de la Religión Cristiana.",
      "John Owen — La Mortificación del Pecado y La Gloria de Cristo.",
      "Arthur Pink — Los Atributos de Dios.",
      "R.C. Sproul — La Santidad de Dios.",
    ],
    match: (w: AnswerWeight) => w.cal + w.pac + w.sov - w.arm - w.sem - w.pel - w.dec,
  },
  {
    id: "arminiano",
    label: "Arminianismo Clásico",
    shortLabel: "Arminiano",
    color: "hsl(30, 80%, 50%)",
    description:
      "Tu perfil se alinea con la teología arminiana histórica, basada en las enseñanzas de Jacobo Arminio y sistematizada en los Cinco Puntos del Arminianismo (Remonstrantes). Afirmas el libre albedrío humano, la elección basada en la presciencia, la expiación universal, la gracia resistible y la posibilidad de perder la salvación. Esta tradición valora la responsabilidad humana y el amor universal de Dios.",
    strengths: [
      "Fuerte énfasis en el amor de Dios por toda la humanidad y la oferta universal del evangelio.",
      "Valoración de la responsabilidad humana y la necesidad de una decisión personal.",
      "Urgencia evangelística: las personas deben escuchar y responder.",
    ],
    warnings: [
      "El énfasis en el libre albedrío puede llevar a un antropocentrismo donde el hombre es el centro de la historia de salvación.",
      "La posibilidad de perder la salvación puede generar inseguridad y ansiedad espiritual.",
      "Cuidado con minimizar la soberanía de Dios o la profundidad del pecado original.",
    ],
    studySuggestions: [
      "Jacobo Arminio — Declaración de Sentimientos.",
      "C.S. Lewis — Mero Cristianismo (lectura devocional).",
      "La Confesión Remonstrante de 1610.",
      "John Wesley — Sermones (especialmente 'Gracia Libre').",
    ],
    match: (w: AnswerWeight) => w.arm + w.lib + w.dec - w.cal - w.hyp - w.pac,
  },
  {
    id: "semipelagiano",
    label: "Semi-pelagianismo Práctico",
    shortLabel: "Semi-pelagiano",
    color: "hsl(50, 70%, 45%)",
    description:
      "Tu perfil muestra tendencias que históricamente se han identificado con el semi-pelagianismo. Esta perspectiva enseña que, aunque la gracia de Dios es necesaria, el ser humano tiene la capacidad de iniciar el movimiento hacia Dios o de cooperar con Su gracia para la salvación. A diferencia del pelagianismo (que niega el pecado original), reconoces cierta necesidad de la gracia, pero tiendes a ver la voluntad humana como capaz de dar el primer paso. Esta fue la posición condenada en el Concilio de Orange (529).",
    strengths: [
      "Reconoces la necesidad de la gracia de Dios, a diferencia del pelagianismo.",
      "Valoras la responsabilidad humana y la importancia de la decisión personal.",
    ],
    warnings: [
      "Esta visión fue condenada por la iglesia histórica (Concilio de Orange 529). El hombre no puede iniciar su salvación.",
      "La Escritura enseña que el hombre está muerto en pecados, no solo herido (Efesios 2:1-3).",
      "El semi-pelagianismo minimiza la profundidad de la caída y la necesidad de la gracia soberana.",
    ],
    studySuggestions: [
      "Agustín — Sobre la Gracia y el Libre Albedrío.",
      "Concilio de Orange (529) — Cánones sobre la Gracia.",
      "Juan Calvino — Institutos, Libro II (El conocimiento de Dios en Cristo).",
      "J.I. Packer — Introducción a la Muerte de la Muerte en la Muerte de Cristo.",
    ],
    match: (w: AnswerWeight) => w.sem + w.lib - w.cal - w.sov,
  },
  {
    id: "pelagiano",
    label: "Pelagianismo / Naturalismo Teológico",
    shortLabel: "Pelagiano",
    color: "hsl(0, 50%, 50%)",
    description:
      "Tu perfil muestra tendencias que se alinean con el pelagianismo, la enseñanza de Pelagio (siglo V) que fue condenada como herejía por la iglesia. Esta visión niega el pecado original, afirma que el ser humano nace neutral y es capaz de obedecer a Dios sin la ayuda de la gracia interna. La salvación se entiende más como un esfuerzo moral que como una obra soberana de Dios.",
    strengths: [
      "Reconoces la importancia de la responsabilidad moral y la obediencia a Dios.",
    ],
    warnings: [
      "El pelagianismo fue condenado como herejía por múltiples concilios (Cartago 418, Éfeso 431).",
      "Niega la doctrina bíblica del pecado original (Romanos 5:12-21, Efesios 2:1-3).",
      "Minimiza la necesidad de la gracia y la obra de Cristo como Salvador, no solo como ejemplo.",
      "La Escritura enseña que nadie puede venir a Cristo sin la atracción del Padre (Juan 6:44).",
    ],
    studySuggestions: [
      "Agustín — Sobre el Espíritu y la Letra (contra Pelagio).",
      "Romanos 5 — Estudio cuidadoso de la imputación del pecado de Adán.",
      "Efesios 2:1-10 — La muerte espiritual y la resurrección por gracia.",
      "Juan 6:37-44 — La doctrina de la atracción del Padre.",
    ],
    match: (w: AnswerWeight) => w.pel - w.cal - w.arm * 0.5,
  },
  {
    id: "hipercalvinista",
    label: "Hipercalvinismo",
    shortLabel: "Hipercalvinista",
    color: "hsl(280, 50%, 40%)",
    description:
      "Tu perfil muestra tendencias hacia el hipercalvinismo. El hipercalvinismo difiere del calvinismo histórico en varios puntos clave: tiende a negar la oferta libre y genuina del evangelio a todos, afirma que solo debemos predicar el evangelio a los 'elegidos', minimiza la responsabilidad humana, y a menudo sostiene que no debemos llamar a todos al arrepentimiento porque los no elegidos no pueden responder. El calvinismo histórico siempre ha rechazado estas posiciones.",
    strengths: [
      "Fuerte énfasis en la soberanía de Dios y la elección.",
      "Consistencia lógica en el sistema teológico.",
    ],
    warnings: [
      "El hipercalvinismo fue rechazado por los teólogos reformados históricos (Bunyan, Spurgeon, Fuller).",
      "Minimiza la oferta genuina del evangelio a todos (Mateo 11:28, Hechos 17:30).",
      "Puede llevar a la inactividad evangelística y falta de urgencia misionera.",
      "Dios llama a TODOS al arrepentimiento, aunque solo los elegidos respondan.",
    ],
    studySuggestions: [
      "Andrew Fuller — El Evangelio Digno de Toda Aceptación.",
      "Charles Spurgeon — Sermones evangelísticos (él era calvinista y evangelista).",
      "Juan 3:16 — 'De tal manera amó Dios al mundo' — el amor de Dios es real y genuino.",
      "Ezequiel 33:11 — 'No quiero la muerte del impío, sino que se vuelva y viva'.",
    ],
    match: (w: AnswerWeight) => w.hyp - w.arm - w.dec - w.sem,
  },
  {
    id: "decisionalista",
    label: "Decisionalismo Evangelístico",
    shortLabel: "Decisionalista",
    color: "hsl(180, 60%, 40%)",
    description:
      "Tu perfil refleja el decisionalismo, un enfoque evangelístico que enfatiza la 'decisión por Cristo' como el momento determinante de la salvación. Esta perspectiva se popularizó con Charles Finney y el revivalismo del siglo XIX. Tiende a reducir la conversión a un acto de la voluntad humana, a menudo asociado con una oración o una decisión en un evento evangelístico. El foco está en la respuesta humana más que en la obra de Dios.",
    strengths: [
      "Urgencia evangelística y deseo de ver personas venir a Cristo.",
      "Énfasis en la necesidad de una respuesta personal al evangelio.",
    ],
    warnings: [
      "Puede producir falsas conversiones, donde la 'decisión' no va acompañada de regeneración.",
      "La salvación no es una decisión que el hombre toma, sino una obra que Dios realiza.",
      "La fe salvadora es un don de Dios, no una capacidad natural que ejercitamos.",
      "El evangelio bíblico llama al arrepentimiento y la fe, no solo a 'tomar una decisión'.",
    ],
    studySuggestions: [
      "Charles Spurgeon — El Alma y Su Salvador (evangelismo reformado).",
      "J.I. Packer — Evangelismo y la Soberanía de Dios (el clásico reformado sobre el tema).",
      "Mateo 13 — La parábola del sembrador: no toda respuesta inicial es genuina.",
      "2 Corintios 13:5 — 'Examinaos a vosotros mismos si estáis en la fe'.",
    ],
    match: (w: AnswerWeight) => w.dec - w.cal - w.sov - w.pac * 0.5,
  },
  {
    id: "soberania",
    label: "Tendencia a la Soberanía Absoluta",
    shortLabel: "Soberanista",
    color: "hsl(260, 60%, 40%)",
    description:
      "Tu perfil muestra un énfasis muy fuerte en la soberanía de Dios en todas las áreas de la vida y la doctrina. Esta es una fortaleza cuando está equilibrada, pero puede tender hacia posiciones extremas si no se mantiene en tensión con otras verdades bíblicas como la responsabilidad humana y la bondad de Dios. El énfasis en la soberanía debe ir acompañado de una comprensión igualmente robusta de la bondad, el amor y la santidad de Dios.",
    strengths: [
      "Reconoces que Dios es soberano sobre todas las cosas, incluyendo la salvación.",
      "Teología centrada en Dios, no en el hombre.",
    ],
    warnings: [
      "La soberanía de Dios no elimina la responsabilidad humana: ambas son verdades bíblicas.",
      "Cuidado con hacer a Dios autor del pecado (Santiago 1:13).",
      "La soberanía debe entenderse junto con la bondad y el amor de Dios.",
      "Dios usa medios para lograr Sus fines: ora, evangeliza, usa los medios de gracia.",
    ],
    studySuggestions: [
      "Arthur Pink — Los Atributos de Dios.",
      "A.W. Tozer — El Conocimiento del Dios Santo.",
      "Romanos 9 — Elección y soberanía de Dios.",
      "Efesios 1 — Bendiciones espirituales en Cristo.",
    ],
    match: (w: AnswerWeight) => w.sov - w.lib - w.dec - w.sem - w.pel,
  },
  {
    id: "dispensacional",
    label: "Premilenialismo Dispensacional",
    shortLabel: "Dispensacional",
    color: "hsl(160, 70%, 35%)",
    description:
      "Tu perfil escatológico se alinea con el premilenialismo dispensacional. Esta visión, popularizada por J.N. Darby y la Biblia de Referencia Scofield, distingue rígidamente entre Israel y la Iglesia, interpreta las profecías del AT de manera literal para un cumplimiento futuro en Israel, y sostiene un rapto pretribulacional de la iglesia seguido por un milenio literal de 1.000 años.",
    strengths: [
      "Interpretación literal de las profecías del AT, respetando el sentido original del texto.",
      "Énfasis en el plan de Dios para Israel como nación.",
    ],
    warnings: [
      "Puede fragmentar la unidad de la Escritura al separar demasiado Israel de la iglesia.",
      "Cristo interpreta el AT cristocéntricamente (Lucas 24:27, Juan 5:39), no solo literalmente.",
      "El dispensacionalismo es una interpretación relativamente reciente (siglo XIX).",
    ],
    studySuggestions: [
      "Charles Ryrie — Teología Dispensacional.",
      "Biblia de Estudio MacArthur — Notas dispensacionales.",
      "Gálatas 3:26-29 — La unidad de todos los creyentes en Cristo.",
      "Efesios 2:11-22 — La reconciliación de judíos y gentiles en la iglesia.",
    ],
    match: (w: AnswerWeight) => w.pmd + w.dis - w.aml - w.pms - w.pac * 0.5,
  },
  {
    id: "amilenial",
    label: "Amilenialismo Reformado",
    shortLabel: "Amilenial",
    color: "hsl(200, 70%, 40%)",
    description:
      "Tu perfil escatológico se alinea con el amilenialismo reformado. Esta visión, sostenida por la mayoría de los teólogos reformados históricamente, entiende que el milenio de Apocalipsis 20 es el período actual entre la primera y la segunda venida de Cristo, durante el cual las almas de los creyentes fallecidos reinan con Cristo en el cielo y la iglesia proclama el evangelio en la tierra. Cristo regresa una sola vez para resurrección y juicio final.",
    strengths: [
      "Interpretación consistente con la teología del pacto y la unidad de la Escritura.",
      "Evita el sensacionalismo escatológico y enfoca en la vida presente del reino.",
    ],
    warnings: [
      "Cuidado con espiritualizar excesivamente las profecías bíblicas.",
      "Asegúrate de no perder la esperanza viva del regreso literal de Cristo.",
      "El amilenialismo puede llevar a un pesimismo cultural si no se equilibra con el avance del evangelio.",
    ],
    studySuggestions: [
      "Kim Riddlebarger — Un Caso para el Amilenialismo.",
      "Anthony Hoekema — La Biblia y el Futuro.",
      "Apocalipsis 20 — Estudio exegético cuidadoso.",
      "1 Corintios 15:20-28 — El reino de Cristo hasta que todos Sus enemigos sean puestos por estrado de Sus pies.",
    ],
    match: (w: AnswerWeight) => w.aml + w.pac * 0.5 - w.pmd - w.dis - w.pms,
  },
  {
    id: "premilenial",
    label: "Premilenialismo Histórico",
    shortLabel: "Premilenial (Hist.)",
    color: "hsl(140, 60%, 40%)",
    description:
      "Tu perfil escatológico se alinea con el premilenialismo histórico. Esta visión, sostenida por muchos padres de la iglesia primitiva (Ireneo, Justino Mártir), enseña que Cristo regresará antes de un período de reino terrenal (el milenio), pero a diferencia del dispensacionalismo, no distingue rígidamente entre Israel y la iglesia, ni sostiene un rapto pretribulacional secreto.",
    strengths: [
      "Es una de las posiciones escatológicas más antiguas de la iglesia.",
      "Toma en serio las promesas del AT de un reino terrenal de paz y justicia.",
    ],
    warnings: [
      "Asegúrate de que tu esperanza esté en Cristo y no en un programa profético.",
      "Evita el exceso de especulación sobre los tiempos y las señales.",
    ],
    studySuggestions: [
      "Justino Mártir — Diálogo con Trifón (escatología de la iglesia primitiva).",
      "George Ladd — Teología del Nuevo Testamento.",
      "Apocalipsis 20 — Estudio de las dos resurrecciones.",
      "1 Tesalonicenses 4:13-18 — La venida de Cristo.",
    ],
    match: (w: AnswerWeight) => w.pmh - w.aml - w.pms - w.pmd - w.dis,
  },
  {
    id: "posmilenial",
    label: "Posmilenialismo",
    shortLabel: "Posmilenial",
    color: "hsl(80, 60%, 35%)",
    description:
      "Tu perfil escatológico se alinea con el posmilenialismo. Esta visión enseña que el evangelio triunfará progresivamente en el mundo antes de la segunda venida de Cristo, resultando en un período de paz y justicia (el milenio) que no es necesariamente 1.000 años literales. Después de este período, Cristo regresará para la resurrección y el juicio final.",
    strengths: [
      "Énfasis en el avance del evangelio y la transformación de la cultura.",
      "Optimismo bíblico sobre el poder del evangelio para cambiar el mundo.",
    ],
    warnings: [
      "Cuidado con minimizar la realidad del sufrimiento y la persecución de la iglesia.",
      "El NT también advierte sobre la apostasía antes de la venida de Cristo (2 Tesalonicenses 2).",
      "El optimismo posmilenial puede llevar a una teología del dominio que no es bíblica.",
    ],
    studySuggestions: [
      "B.B. Warfield — Estudios Bíblicos y Teológicos (secciones escatológicas).",
      "Jonathan Edwards — Historia de la Redención.",
      "Salmo 72 — El reinado del Mesías sobre todas las naciones.",
      "Mateo 28:18-20 — 'Toda potestad me es dada... id y haced discípulos a todas las naciones'.",
    ],
    match: (w: AnswerWeight) => w.pms - w.aml - w.pmd - w.pmh,
  },
];

export const scaleLabels: { key: keyof AnswerWeight; label: string; color: string }[] = [
  { key: "cal", label: "Calvinismo", color: "#2563eb" },
  { key: "arm", label: "Arminianismo", color: "#f59e0b" },
  { key: "hyp", label: "Hipercalvinismo", color: "#7c3aed" },
  { key: "sem", label: "Semi-pelagianismo", color: "#d97706" },
  { key: "pel", label: "Pelagianismo", color: "#ef4444" },
  { key: "dec", label: "Decisionalismo", color: "#14b8a6" },
  { key: "sov", label: "Soberanía divina", color: "#6366f1" },
  { key: "lib", label: "Libre albedrío", color: "#f97316" },
  { key: "pac", label: "Teología del pacto", color: "#3b82f6" },
  { key: "dis", label: "Dispensacionalismo", color: "#22c55e" },
  { key: "aml", label: "Amilenialismo", color: "#0ea5e9" },
  { key: "pmh", label: "Premilenialismo histórico", color: "#10b981" },
  { key: "pmd", label: "Premilenialismo dispensacional", color: "#059669" },
  { key: "pms", label: "Posmilenialismo", color: "#65a30d" },
];

export function calculateResults(answers: Record<string, number[]>) {
  const totalWeights: AnswerWeight = {
    cal: 0, arm: 0, hyp: 0, sem: 0, pel: 0, dec: 0,
    aml: 0, pmh: 0, pmd: 0, pms: 0, dis: 0, pac: 0, lib: 0, sov: 0,
  };

  let maxPossible: AnswerWeight = {
    cal: 0, arm: 0, hyp: 0, sem: 0, pel: 0, dec: 0,
    aml: 0, pmh: 0, pmd: 0, pms: 0, dis: 0, pac: 0, lib: 0, sov: 0,
  };

  for (const section of sections) {
    for (const q of section.questions) {
      const answerIdx = answers[q.id]?.[0];
      if (answerIdx === undefined || answerIdx === null) continue;
      const selected = q.options[answerIdx];
      if (!selected) continue;
      const w = selected.w;
      for (const key of Object.keys(totalWeights) as (keyof AnswerWeight)[]) {
        const val = w[key] ?? 0;
        totalWeights[key] += val;
      }
    }
  }

  for (const section of sections) {
    for (const q of section.questions) {
      for (const opt of q.options) {
        const w = opt.w;
        for (const key of Object.keys(maxPossible) as (keyof AnswerWeight)[]) {
          const val = w[key] ?? 0;
          if (val > maxPossible[key]) maxPossible[key] = val;
        }
      }
    }
  }

  const normWeights: AnswerWeight = {} as AnswerWeight;
  for (const key of Object.keys(totalWeights) as (keyof AnswerWeight)[]) {
    const totalAnswers = sections.reduce((acc, s) => acc + s.questions.length, 0);
    normWeights[key] = (totalWeights[key] / totalAnswers) * 10;
  }

  const profileScores = profiles.map((p) => ({
    profile: p,
    score: Math.max(0, p.match(normWeights)),
  }));
  profileScores.sort((a, b) => b.score - a.score);

  const topProfile = profileScores[0];
  const mainProfile: ProfileResult = {
    id: topProfile.profile.id,
    label: topProfile.profile.label,
    description: topProfile.profile.description,
    strengths: topProfile.profile.strengths,
    warnings: topProfile.profile.warnings,
    studySuggestions: topProfile.profile.studySuggestions,
    score: Math.round(Math.min(100, topProfile.score)),
  };

  const secondary: Tendency[] = profileScores
    .filter((p) => p.profile.id !== topProfile.profile.id && p.score > 0)
    .slice(0, 3)
    .map((p) => ({
      id: p.profile.id,
      label: p.profile.shortLabel,
      score: Math.round(Math.min(100, p.score)),
      description: `Influencia significativa de la perspectiva ${p.profile.shortLabel.toLowerCase()} en tu pensamiento teológico.`,
    }));

  const radarData = scaleLabels.map((sl) => ({
    axis: sl.label,
    value: Math.round(Math.min(100, normWeights[sl.key] * 10)),
  }));

  const percentages = scaleLabels.map((sl) => ({
    label: sl.label,
    value: Math.round(Math.min(100, normWeights[sl.key] * 10)),
    color: sl.color,
  }));
  percentages.sort((a, b) => b.value - a.value);

  const consistencyScore = calculateConsistency(normWeights, totalWeights);
  let consistencyLevel: string;
  let consistencyDescription: string;

  if (consistencyScore >= 80) {
    consistencyLevel = "Muy consistente";
    consistencyDescription = "Tus respuestas muestran una alta coherencia teológica. Tus convicciones están bien formadas y alineadas. Sigue profundizando en las Escrituras y confesiones para fortalecer aún más tu entendimiento.";
  } else if (consistencyScore >= 60) {
    consistencyLevel = "Moderadamente consistente";
    consistencyDescription = "Tus respuestas muestran una coherencia teológica moderada, con algunas áreas donde tus convicciones están menos definidas o presentan tensiones. Esto es normal en el crecimiento teológico. Te animamos a estudiar las áreas donde identificas contradicciones.";
  } else if (consistencyScore >= 40) {
    consistencyLevel = "En desarrollo";
    consistencyDescription = "Tus respuestas reflejan influencias teológicas diversas, lo cual es común cuando se está formando un sistema teológico coherente. Te recomendamos estudiar las doctrinas bíblicas de manera sistemática, comenzando con la autoridad de la Escritura como fundamento.";
  } else {
    consistencyLevel = "Ecléctico";
    consistencyDescription = "Tus respuestas muestran una mezcla significativa de influencias teológicas diversas. Esto puede indicar que estás en un proceso de exploración o que tus convicciones no están completamente formadas. Te animamos a estudiar la Biblia sistemáticamente y a familiarizarte con las confesiones históricas de la fe.";
  }

  const scaleResults = scaleLabels.map((sl) => ({
    name: sl.label,
    score: Math.round(Math.min(100, normWeights[sl.key] * 10)),
    max: 100,
  }));

  return {
    mainProfile: {
      ...mainProfile,
      score: Math.round(Math.min(100, topProfile.score * 2)),
    },
    secondaryTendencies: secondary.map((t) => ({
      ...t,
      score: Math.round(Math.min(100, t.score * 2)),
    })),
    consistencyLevel,
    consistencyDescription,
    radarData,
    percentages,
    scaleResults,
  };
}

function calculateConsistency(norm: AnswerWeight, raw: AnswerWeight): number {
  const axes: (keyof AnswerWeight)[] = ["cal", "arm", "sem", "pel", "dec", "lib", "sov", "hyp"];
  const scores = axes.map((a) => norm[a]);
  const max = Math.max(...scores);
  const total = scores.reduce((a, b) => a + b, 0);
  if (total === 0) return 50;
  const dominance = max / Math.max(total / axes.length, 1);
  return Math.round(Math.min(100, dominance * 50));
}
