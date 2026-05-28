export interface RegionData {
  region: string;
  descripcion: string;
  lugares: { nombre: string; relevancia: string; escritura?: string }[];
}

const mapasData: RegionData[] = [
  {
    region: 'Edén / Oriente Próximo',
    descripcion:
      'El origen de la humanidad y las primeras civilizaciones mencionadas en Génesis.',
    lugares: [
      { nombre: 'Edén', relevancia: 'Jardín donde Dios puso al hombre. Lugar de la caída.', escritura: 'Gn 2:8-15' },
      { nombre: 'Monte Ararat', relevancia: 'Donde reposó el arca de Noé después del diluvio.', escritura: 'Gn 8:4' },
      { nombre: 'Babel (Sinar)', relevancia: 'Torre de Babel y dispersión de las naciones.', escritura: 'Gn 11:1-9' },
    ],
  },
  {
    region: 'Mesopotamia',
    descripcion:
      'Cuna de los patriarcas. De aquí Dios llamó a Abraham.',
    lugares: [
      { nombre: 'Ur de los Caldeos', relevancia: 'Ciudad natal de Abraham. De allí Dios lo llamó.', escritura: 'Gn 11:31; Hch 7:2-4' },
      { nombre: 'Harán', relevancia: 'Abraham vivió aquí antes de partir a Canaán.', escritura: 'Gn 12:4-5' },
    ],
  },
  {
    region: 'Canaán / Israel',
    descripcion:
      'La Tierra Prometida. Escenario principal de la historia bíblica.',
    lugares: [
      { nombre: 'Siquem', relevancia: 'Dios prometió la tierra a Abraham. Lugar del pacto.', escritura: 'Gn 12:6-7' },
      { nombre: 'Bet-el', relevancia: 'Jacob tuvo el sueño de la escalera al cielo.', escritura: 'Gn 28:10-22' },
      { nombre: 'Jerusalén', relevancia: 'Ciudad del Gran Rey. Templo. Lugar de la crucifixión y resurrección.', escritura: '2 S 5:6-9; Sal 122; Mt 27:33' },
      { nombre: 'Belén', relevancia: 'Ciudad de David. Nacimiento de Jesús.', escritura: 'Miq 5:2; Mt 2:1' },
      { nombre: 'Nazaret', relevancia: 'Ciudad donde creció Jesús.', escritura: 'Mt 2:23; Lc 2:51-52' },
      { nombre: 'Cafarnaúm', relevancia: 'Centro del ministerio de Jesús en Galilea.', escritura: 'Mt 4:13; 9:1' },
      { nombre: 'Mar de Galilea', relevancia: 'Escenario de muchas enseñanzas y milagros de Jesús.', escritura: 'Mt 14:22-33; Lc 5:1-11' },
      { nombre: 'Monte de los Olivos', relevancia: 'Jesús oró, ascendió al cielo. Lugar de Su futura venida.', escritura: 'Zac 14:4; Hch 1:9-12' },
      { nombre: 'Gólgota', relevancia: 'Lugar de la crucifixión de Cristo.', escritura: 'Mt 27:33; Jn 19:17' },
      { nombre: 'Josafat (valle del Cedrón)', relevancia: 'Jesús cruzó este valle la noche de Su arresto.', escritura: 'Jn 18:1' },
    ],
  },
  {
    region: 'Egipto',
    descripcion:
      'Lugar de esclavitud del pueblo de Israel y escenario del éxodo.',
    lugares: [
      { nombre: 'Egipto (Gosén)', relevancia: 'Israel vivió aquí 430 años. Escenario de las plagas y el éxodo.', escritura: 'Ex 12:40-41' },
      { nombre: 'Monte Sinaí', relevancia: 'Dios entregó la Ley a Moisés. Pacto sinaítico.', escritura: 'Ex 19-20' },
    ],
  },
  {
    region: 'Desierto del Éxodo',
    descripcion:
      '40 años de peregrinación de Israel antes de entrar a la Tierra Prometida.',
    lugares: [
      { nombre: 'Cades-barnea', relevancia: 'Desde aquí los espías reconocieron Canaán. Punto de rebelión.', escritura: 'Nm 13:26; 14:1-4' },
      { nombre: 'Llanuras de Moab', relevancia: 'Moisés dio su discurso final. Aquí murió.', escritura: 'Dt 34:1-6' },
    ],
  },
  {
    region: 'Asia Menor (Turquía)',
    descripcion:
      'Región de las iglesias del Nuevo Testamento y ministerio de Pablo.',
    lugares: [
      { nombre: 'Antioquía de Pisidia', relevancia: 'Pablo predicó aquí. Primer viaje misionero.', escritura: 'Hch 13:14-52' },
      { nombre: 'Éfeso', relevancia: 'Iglesia del Apocalipsis. Pablo ministerió aquí 3 años.', escritura: 'Hch 19; Ap 2:1-7' },
      { nombre: 'Galacia', relevancia: 'Iglesias a las que Pablo escribió la epístola.', escritura: 'Gá 1:2' },
      { nombre: 'Colosas', relevancia: 'Iglesia a la que Pablo escribió desde la prisión.', escritura: 'Col 1:2' },
    ],
  },
  {
    region: 'Grecia',
    descripcion:
      'Centro de la cultura helenista. Pablo evangelizó aquí.',
    lugares: [
      { nombre: 'Corinto', relevancia: 'Iglesia con problemas. Dos epístolas de Pablo.', escritura: 'Hch 18:1-18; 1 Co' },
      { nombre: 'Filipos', relevancia: 'Primera iglesia en Europa. Carta de Pablo.', escritura: 'Hch 16:12-40; Fil' },
      { nombre: 'Tesalónica', relevancia: 'Iglesia perseguida. Dos epístolas escatológicas.', escritura: 'Hch 17:1-9; 1 Ts' },
      { nombre: 'Atenas', relevancia: 'Pablo discute con filósofos en el Areópago.', escritura: 'Hch 17:16-34' },
    ],
  },
  {
    region: 'Italia',
    descripcion:
      'Centro del Imperio Romano. Pablo llegó preso pero predicó.',
    lugares: [
      { nombre: 'Roma', relevancia: 'Pablo escribió Romanos. Predicó bajo arresto domiciliario. Tradición: martirizado aquí.', escritura: 'Hch 28:16-31; Ro 1:7' },
    ],
  },
];

export default mapasData;
