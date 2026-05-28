export interface Recurso {
  titulo: string;
  autor: string;
  tipo: 'libro' | 'conferencia' | 'articulo' | 'curso';
  nivel: 'basico' | 'intermedio' | 'avanzado';
  tema: string;
  url?: string;
  notas?: string;
}

const bibliotecaData: Recurso[] = [
  {
    titulo: "Biblia de Estudio MacArthur",
    autor: "John MacArthur",
    tipo: "libro",
    nivel: "basico",
    tema: "Escritura",
    notas:
      "Excelente Biblia de estudio con notas versículo por versículo desde una perspectiva reformada.",
  },
  {
    titulo: "Confesión de Fe Bautista de 1689",
    autor: "Varios",
    tipo: "libro",
    nivel: "basico",
    tema: "Doctrina",
    notas:
      "La confesión oficial de las iglesias bautistas reformadas. Lectura esencial.",
  },
  {
    titulo: "El lado oscuro de la práctica bautismal",
    autor: "James E. Dole",
    tipo: "articulo",
    nivel: "basico",
    tema: "Bautismo",
  },
  {
    titulo: "Dios nos libre",
    autor: "R. C. Sproul",
    tipo: "libro",
    nivel: "basico",
    tema: "Santidad",
    notas:
      "Una introducción clara a la doctrina de la santidad de Dios y sus implicaciones.",
  },
  {
    titulo: "Conoce las doctrinas de la gracia",
    autor: "James Montgomery Boice",
    tipo: "libro",
    nivel: "basico",
    tema: "Soteriología",
    notas:
      "Introducción accesible a las doctrinas de la gracia (TULIP).",
  },
  {
    titulo: "Fundamentos de la fe",
    autor: "John MacArthur",
    tipo: "libro",
    nivel: "basico",
    tema: "Teología sistemática",
    notas:
      "Resumen claro y accesible de las doctrinas fundamentales de la fe cristiana.",
  },
  {
    titulo: "Catecismo Bautista de Keach",
    autor: "Benjamin Keach",
    tipo: "libro",
    nivel: "basico",
    tema: "Catecismo",
    notas:
      "El catecismo histórico bautista reformado en formato de preguntas y respuestas.",
  },
  {
    titulo: "Teología sistemática",
    autor: "Wayne Grudem",
    tipo: "libro",
    nivel: "intermedio",
    tema: "Teología sistemática",
    notas:
      "Una de las sistemáticas más completas y accesibles. Ampliamente usada en seminarios.",
  },
  {
    titulo: "Teología sistemática",
    autor: "Louis Berkhof",
    tipo: "libro",
    nivel: "intermedio",
    tema: "Teología sistemática",
    notas:
      "Clásico reformado. Sólido, ordenado y profundo. Referencia obligada.",
  },
  {
    titulo: "La doctrina de la justificación",
    autor: "James Buchanan",
    tipo: "libro",
    nivel: "intermedio",
    tema: "Soteriología",
    notas: "El mejor tratamiento clásico sobre la justificación por fe.",
  },
  {
    titulo: "Cristología",
    autor: "Robert Letham",
    tipo: "libro",
    nivel: "intermedio",
    tema: "Cristología",
    notas:
      "Un estudio profundo y accesible sobre la persona y obra de Cristo.",
  },
  {
    titulo: "La Trinidad",
    autor: "Robert Letham",
    tipo: "libro",
    nivel: "intermedio",
    tema: "Teología propia",
    notas:
      "Excelente obra sobre la doctrina trinitaria desde una perspectiva reformada.",
  },
  {
    titulo: "Teología del Nuevo Testamento",
    autor: "Thomas R. Schreiner",
    tipo: "libro",
    nivel: "intermedio",
    tema: "Teología bíblica",
    notas:
      "Manual completo de teología neotestamentaria con énfasis en el mensaje unificador de las Escrituras.",
  },
  {
    titulo: "La obra de la Trinidad",
    autor: "Sinclair B. Ferguson",
    tipo: "libro",
    nivel: "intermedio",
    tema: "Teología propia",
    notas:
      "Estudio sobre la obra del Dios trino en la creación, redención y aplicación.",
  },
  {
    titulo: "La ley y el evangelio",
    autor: "Ernest Reisinger",
    tipo: "libro",
    nivel: "intermedio",
    tema: "Teología bíblica",
    notas:
      "Pequeño libro que aclara la relación entre la ley y el evangelio.",
  },
  {
    titulo: "El puritanismo",
    autor: "J. I. Packer",
    tipo: "libro",
    nivel: "intermedio",
    tema: "Historia",
    notas:
      "Una introducción a la teología y espiritualidad puritana.",
  },
  {
    titulo: "La suficiente y perfecta obra de Cristo",
    autor: "John Owen",
    tipo: "libro",
    nivel: "avanzado",
    tema: "Cristología",
    notas:
      "Defensa clásica de la expiación particular. Lectura densa pero invaluable.",
  },
  {
    titulo: "La mortificación del pecado",
    autor: "John Owen",
    tipo: "libro",
    nivel: "avanzado",
    tema: "Vida cristiana",
    notas:
      "Clásico puritano sobre cómo matar el pecado en la vida del creyente.",
  },
  {
    titulo: "La comunión con el Dios trino",
    autor: "John Owen",
    tipo: "libro",
    nivel: "avanzado",
    tema: "Vida cristiana",
    notas:
      "Obra cumbre sobre la comunión del creyente con cada Persona de la Trinidad.",
  },
  {
    titulo: "Teología de la Reforma",
    autor: "Herman Bavinck",
    tipo: "libro",
    nivel: "avanzado",
    tema: "Teología sistemática",
    notas:
      "Una de las sistemáticas reformadas más importantes del siglo XIX.",
  },
  {
    titulo: "Dogmática reformada",
    autor: "Herman Hoeksema",
    tipo: "libro",
    nivel: "avanzado",
    tema: "Teología sistemática",
    notas:
      "Sistemática reformada desde la perspectiva de la Teología del Pacto.",
  },
  {
    titulo: "Comentario de Romanos",
    autor: "Douglas Moo",
    tipo: "libro",
    nivel: "avanzado",
    tema: "Comentario",
    notas:
      "Comentario técnico y detallado de la epístola a los Romanos.",
  },
  {
    titulo: "Comentario de Hebreos",
    autor: "John Owen",
    tipo: "libro",
    nivel: "avanzado",
    tema: "Comentario",
    notas:
      "El comentario más extenso y profundo jamás escrito sobre Hebreos. 7 volúmenes.",
  },
  {
    titulo: "Teología del Antiguo Testamento",
    autor: "Bruce Waltke",
    tipo: "libro",
    nivel: "avanzado",
    tema: "Teología bíblica",
    notas:
      "Una teología del AT desde una perspectiva evangélica y reformada.",
  },
  {
    titulo: "La expiación",
    autor: "Leon Morris",
    tipo: "libro",
    nivel: "avanzado",
    tema: "Cristología",
    notas: "Estudio exhaustivo sobre el significado de la expiación en las Escrituras.",
  },
  {
    titulo: "Instituciones de la religión cristiana",
    autor: "Juan Calvino",
    tipo: "libro",
    nivel: "avanzado",
    tema: "Teología sistemática",
    notas:
      "La obra magna de la Reforma. Lectura indispensable para todo estudiante serio de teología.",
  },
  {
    titulo: "Conference Messages",
    autor: "Varios (Founders Ministries)",
    tipo: "conferencia",
    nivel: "intermedio",
    tema: "Varios",
    url: "https://founders.org",
    notas:
      "Conferencias anuales con énfasis en la teología bautista reformada.",
  },
  {
    titulo: "Ligonier Teaching Series",
    autor: "R. C. Sproul",
    tipo: "curso",
    nivel: "basico",
    tema: "Teología",
    url: "https://www.ligonier.org",
    notas:
      "Cursos gratuitos y de pago sobre doctrinas reformadas. Altamente recomendados.",
  },
];

export default bibliotecaData;
