export interface FacultadArea {
  icon: string;
  num: string;
  title: string;
  desc: string;
  topics: string[];
}

const facultadData: FacultadArea[] = [
  {
    icon: "📖", num: "I",
    title: "Teología Exegética",
    desc: "Estudio de las lenguas bíblicas (hebreo, arameo, griego), hermenéutica, crítica textual y teología bíblica para la interpretación fiel de la Escritura.",
    topics: ["Hebreo Bíblico", "Griego Koiné", "Hermenéutica", "Teología Bíblica", "Crítica Textual", "Exégesis del AT", "Exégesis del NT"],
  },
  {
    icon: "🏛️", num: "II",
    title: "Teología Histórica",
    desc: "Estudio de la historia de la iglesia, el desarrollo de la doctrina, la patrística, la Reforma, los puritanos y la tradición bautista particular confesional.",
    topics: ["Patrística", "Edad Media", "Reforma Protestante", "Puritanismo", "Confesiones Históricas", "Historia Bautista", "Historia de los Credos"],
  },
  {
    icon: "📚", num: "III",
    title: "Teología Sistemática",
    desc: "Los ocho loci clásicos de la teología sistemática: Bibliología, Teología Propia, Cristología, Pneumatología, Antropología, Soteriología, Eclesiología y Escatología.",
    topics: ["Bibliología", "Teología Propia", "Cristología", "Pneumatología", "Antropología", "Soteriología", "Eclesiología", "Escatología"],
  },
  {
    icon: "📣", num: "IV",
    title: "Teología Práctica",
    desc: "Aplicación de la teología en la vida y ministerio de la iglesia: homilética, consejería bíblica, liderazgo pastoral, misiones, apologética y discipulado.",
    topics: ["Homilética", "Consejería Bíblica", "Liderazgo Pastoral", "Misiones", "Apologética", "Discipulado", "Educación Cristiana"],
  },
];

export default facultadData;
