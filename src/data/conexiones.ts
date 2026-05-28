export interface ConexionEntry {
  titulo: string;
  antiguo: string;
  nuevo: string;
  tipo: 'tipo-antitipo' | 'profecia-cumplimiento' | 'tema-transversal' | 'paralelo';
  explicacion: string;
}

const conexionesData: ConexionEntry[] = [
  {
    titulo: 'Adán y Cristo',
    antiguo: 'Adán: cabeza de la humanidad, trajo pecado y muerte.',
    nuevo: 'Cristo: postrer Adán, cabeza de la nueva creación, trae justicia y vida.',
    tipo: 'tipo-antitipo',
    explicacion:
      'Pablo establece el paralelo explícito: así como por Adán vino condenación a todos, por Cristo vino justificación a todos los que creen. Adán fue figura del que había de venir.',
  },
  {
    titulo: 'Pascua y Crucifixión',
    antiguo: 'Cordero pascual: sin defecto, su sangre protegía del juicio.',
    nuevo: 'Cristo es nuestro Cordero pascual, inmolado por nuestros pecados.',
    tipo: 'tipo-antitipo',
    explicacion:
      'Jesús murió durante la Pascua. Así como la sangre del cordero libró a Israel de la muerte, la sangre de Cristo libra al creyente de la condenación eterna.',
  },
  {
    titulo: 'Serpiente de Bronce y Cruz',
    antiguo: 'Moisés levantó una serpiente de bronce; quien la miraba vivía.',
    nuevo: 'Cristo fue levantado en la cruz; quien cree en Él tiene vida eterna.',
    tipo: 'tipo-antitipo',
    explicacion:
      'Jesús mismo usó esta tipología: "Como Moisés levantó la serpiente... así es necesario que el Hijo del Hombre sea levantado".',
  },
  {
    titulo: 'Sacrificios Levíticos y Cristo',
    antiguo: 'Sacrificios repetidos de animales, cubrían temporalmente el pecado.',
    nuevo: 'Cristo se ofreció una vez para siempre, quitando el pecado.',
    tipo: 'tipo-antitipo',
    explicacion:
      'Todo el sistema sacrificial apuntaba a Cristo. La carta a los Hebreos desarrolla esta tipología en detalle: la sombra (AT) vs la realidad (NT).',
  },
  {
    titulo: 'Éxodo y Redención',
    antiguo: 'Dios libró a Israel de la esclavitud en Egipto por sangre y poder.',
    nuevo: 'Dios libra a Su pueblo de la esclavitud del pecado por la sangre de Cristo y el poder del Espíritu.',
    tipo: 'tema-transversal',
    explicacion:
      'El éxodo es el patrón redentor del AT. Dios redime, sella con sangre, guía por el desierto, y lleva a la Tierra Prometida. Así también el creyente es redimido, sellado con el Espíritu, peregrina y espera la gloria.',
  },
  {
    titulo: 'Templo y Cristo / Iglesia',
    antiguo: 'Templo de Salomón: morada de Dios en medio de Su pueblo.',
    nuevo: 'Jesús es el verdadero Templo. La iglesia es morada de Dios por el Espíritu.',
    tipo: 'tipo-antitipo',
    explicacion:
      'Jesús dijo: "Destruid este templo y en tres días lo levantaré". Hablaba de Su cuerpo. El templo físico señalaba la presencia de Dios que ahora habita en Cristo y en Su iglesia.',
  },
  {
    titulo: 'Sumo Sacerdote y Cristo',
    antiguo: 'Sumo sacerdote entraba al Lugar Santísimo una vez al año con sangre.',
    nuevo: 'Cristo, nuestro Sumo Sacerdote, entró al cielo con Su propia sangre y vive para interceder.',
    tipo: 'tipo-antitipo',
    explicacion:
      'Aarón y sus sucesores eran tipos imperfectos del verdadero Sumo Sacerdote. Cristo es sacerdote según el orden de Melquisedec, eterno y perfecto.',
  },
  {
    titulo: 'David y Cristo',
    antiguo: 'David: rey según el corazón de Dios, pastor, guerrero, pecador.',
    nuevo: 'Cristo: el Hijo de David, Rey perfecto, Buen Pastor, vencedor, sin pecado.',
    tipo: 'profecia-cumplimiento',
    explicacion:
      'Dios prometió a David un hijo cuyo trono sería eterno. Jesús es ese Hijo. Los Salmos mesiánicos (2, 22, 110) encuentran cumplimiento en Él.',
  },
  {
    titulo: 'Isaías 53 y la Expiación',
    antiguo: 'El Siervo Sufriente: herido por nuestras rebeliones, molido por nuestros pecados.',
    nuevo: 'Cristo llevó nuestros pecados en Su cuerpo sobre el madero.',
    tipo: 'profecia-cumplimiento',
    explicacion:
      'Isaías 53 es la profecía más detallada de la expiación en el AT. El NT cita este capítulo repetidamente mostrando su cumplimiento en Jesús.',
  },
  {
    titulo: 'Elías, Eliseo y Cristo',
    antiguo: 'Profetas que hicieron milagros: resucitaron muertos, multiplicaron pan.',
    nuevo: 'Cristo hace milagros mayores; resucita muertos, multiplica panes, domina la naturaleza.',
    tipo: 'paralelo',
    explicacion:
      'Los milagros de Elías y Eliseo prepararon el camino para entender los milagros de Cristo. No son meras historias aisladas, sino señales del poder mesiánico.',
  },
  {
    titulo: 'Creación y Nueva Creación',
    antiguo: 'Dios creó los cielos y la tierra. Todo era bueno. El pecado devastó.',
    nuevo: 'Dios crea cielos nuevos y tierra nueva. Todo será restaurado y será perfecto.',
    tipo: 'tema-transversal',
    explicacion:
      'La Biblia comienza con un jardín y termina con una ciudad. Comienza con creación perfecta, pasa por redención, y culmina en nueva creación. Cristo es el centro y la meta de toda la historia.',
  },
  {
    titulo: 'Profetas y Apóstoles',
    antiguo: 'Profetas: hablaron de parte de Dios, anunciaron juicio y promesa.',
    nuevo: 'Apóstoles: testigos de Cristo, fundamento de la iglesia, escribieron el NT.',
    tipo: 'tema-transversal',
    explicacion:
      'Así como Dios levantó profetas para guiar a Israel, levantó apóstoles para fundar la iglesia. Ambos son portadores autorizados de la revelación de Dios.',
  },
  {
    titulo: 'Matrimonio y Cristo / Iglesia',
    antiguo: 'Matrimonio: pacto entre un hombre y una mujer, imagen de la fidelidad divina.',
    nuevo: 'Cristo es el Esposo; la iglesia es Su esposa. Las bodas del Cordero.',
    tipo: 'tipo-antitipo',
    explicacion:
      'Desde Génesis 2, el matrimonio apunta a algo mayor: la unión entre Cristo y Su iglesia. Pablo llama a esto "gran misterio" en Efesios 5.',
  },
  {
    titulo: 'Diluvio y Bautismo',
    antiguo: 'Dios juzgó al mundo con agua; salvó a Noé y su familia en el arca.',
    nuevo: 'El bautismo simboliza juicio al pecado y salvación en Cristo.',
    tipo: 'tipo-antitipo',
    explicacion:
      'Pedro explica que el diluvio es tipo del bautismo. Así como el agua juzgó al mundo pero salvó a Noé, el bautismo simboliza nuestra unión con Cristo en Su muerte y resurrección.',
  },
];

export default conexionesData;
