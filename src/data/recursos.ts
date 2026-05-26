export interface Recurso {
  type: string;
  title: string;
  author: string;
  desc: string;
  tags: string[];
}

const recursosData: Recurso[] = [
  { type: "Libro", title: "La Confesión Bautista de Fe de 1689", author: "Asamblea de Bautistas Particulares", desc: "La confesión de fe histórica que define la teología bautista reformada. Fundamento doctrinal indispensable para iglesias y estudiantes serios de la Palabra. Incluye referencias escriturales para cada punto doctrinal.", tags: ["Confesión", "Histórico", "Fundamental"] },
  { type: "Libro", title: "Comentario de la Confesión Bautista de Fe de 1689", author: "Samuel E. Waldron", desc: "Exposición capítulo por capítulo de la Confesión de 1689 desde una perspectiva bautista reformada contemporánea. Explica el significado histórico y la relevancia actual de cada artículo de fe.", tags: ["Confesión", "Comentario", "Sistemática"] },
  { type: "Libro", title: "Teología Sistemática", author: "Wayne Grudem", desc: "Manual completo de teología sistemática desde una perspectiva evangélica y reformada. Cubre todas las doctrinas principales con profundidad bíblica y aplicación práctica. Ampliamente usado en seminarios reformados.", tags: ["Sistemática", "Manual", "Evangélica"] },
  { type: "Libro", title: "Los Cinco Puntos del Calvinismo", author: "David N. Steele y Curtis C. Thomas", desc: "Introducción clara y accesible a las doctrinas de la gracia (TULIP). Explica cada punto con Escritura, historia y aplicación. Ideal para quienes se acercan por primera vez a la teología reformada.", tags: ["Calvinismo", "Introducción", "TULIP"] },
  { type: "Libro", title: "La Obra del Espíritu", author: "Abraham Booth", desc: "Clásico bautista reformado del siglo XVIII sobre la aplicación de la redención. Exposición profunda y pastoral de cómo el Espíritu Santo obra en la salvación, desde la regeneración hasta la perseverancia.", tags: ["Pneumatología", "Clásico", "Soteriología"] },
  { type: "Libro", title: "Cristo de los Pactos", author: "O. Palmer Robertson", desc: "Estudio bíblico exhaustivo sobre la teología del pacto, fundamental para entender la unidad de las Escrituras y el plan redentor de Dios desde Génesis hasta Apocalipsis.", tags: ["Pactos", "Teología Bíblica", "Hermenéutica"] },
  { type: "Libro", title: "La Doctrina Bautista de la Iglesia", author: "Mark Dever", desc: "Defensa bíblica del gobierno congregacional y la eclesiología bautista reformada. Explica la naturaleza, el gobierno, la disciplina y la misión de la iglesia local.", tags: ["Eclesiología", "Gobierno", "Iglesia Local"] },
  { type: "Libro", title: "La Predestinación", author: "Loraine Boettner", desc: "Tratado clásico sobre la doctrina reformada de la predestinación. Examina la enseñanza bíblica, responde objeciones y muestra el consuelo de esta doctrina.", tags: ["Elección", "Predestinación", "Profundo"] },
  { type: "Libro", title: "Mortificación del Pecado", author: "John Owen", desc: "Clásico puritano sobre la lucha cristiana contra el pecado. Owen muestra cómo el creyente debe, por el poder del Espíritu, dar muerte a las obras de la carne en su vida diaria.", tags: ["Puritano", "Santificación", "Práctico"] },
  { type: "Libro", title: "La Inerrancia de la Escritura", author: "John D. Hannah (ed.)", desc: "Defensa académica de la doctrina de la inerrancia bíblica. Artículos de diversos teólogos reformados que afirman la autoridad y confiabilidad total de las Escrituras.", tags: ["Bibliología", "Inspiración", "Apologética"] },
  { type: "Web", title: "Fundación Bautista Reformada", author: "Varios", desc: "Recursos en español sobre teología bautista reformada: artículos, sermones, confesiones, cursos gratuitos y materiales de estudio. Un ministerio para la comunidad hispanohablante.", tags: ["Recursos", "Español", "En línea"] },
  { type: "Web", title: "CBTS Español", author: "Covenant Baptist Theological Seminary", desc: "Programa en español del CBTS: estudios teológicos a nivel de diploma y MDiv, completamente en español, basados en la Confesión Bautista de Fe de 1689. Educación teológica confesional accesible.", tags: ["CBTS", "Seminario", "En línea"] },
];

export default recursosData;
