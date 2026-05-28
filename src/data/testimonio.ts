export interface TestimonioEntry {
  afirmacion: string;
  base: string;
  explicacion: string;
  escritura: string;
}

const testimonioData: {
  introduccion: string;
  puntos: TestimonioEntry[];
  citas: { texto: string; fuente: string }[];
} = {
  introduccion:
    'Una de las distinciones más importantes de la fe reformada es que la Palabra de Dios no necesita la aprobación de ninguna institución humana para ser verdadera. La Escritura es autopistós — se autentica a sí misma. El testimonio del Espíritu Santo en el corazón del creyente es el que produce la certeza plena de que la Biblia es la Palabra de Dios.',
  puntos: [
    {
      afirmacion: 'La autoridad de la Escritura depende de Dios, no de la iglesia',
      base: '1689 LBCF 1.4',
      explicacion:
        'La autoridad de la Santa Escritura no depende del testimonio de ningún hombre o iglesia, sino completamente de Dios, que es la Verdad misma, su Autor. Por lo tanto, la Escritura debe ser recibida porque es la Palabra de Dios. No necesita que el magisterio de la iglesia, un concilio, un pastor ni una experiencia personal le otorguen autoridad. Ella tiene autoridad por sí misma, porque proviene de Dios.',
      escritura: '2 P 1:19-21; 2 Ti 3:16; 1 Ts 2:13',
    },
    {
      afirmacion: 'La iglesia no le da autoridad a la Escritura, la reconoce',
      base: '1689 LBCF 1.4',
      explicacion:
        'La iglesia no crea la autoridad de la Escritura ni la valida. La iglesia recibe la Escritura y se somete a ella. La evidencia externa (la historia de la transmisión del texto, la preservación providencial, el testimonio de la iglesia a través de los siglos) nos mueve a tener un alto y reverente aprecio por las Escrituras. Pero la certeza plena viene por otra vía.',
      escritura: 'Ef 2:20; Hch 17:11; Jn 10:27',
    },
    {
      afirmacion: 'El testimonio interno del Espíritu Santo es la certeza suprema',
      base: '1689 LBCF 1.5',
      explicacion:
        'Nuestra plena persuasión y seguridad de la verdad infalible y autoridad divina de la Escritura procede de la obra interna del Espíritu Santo, que da testimonio por medio de la Palabra y con la Palabra en nuestros corazones. Esto no es una revelación nueva ni una voz mística, sino la iluminación del Espíritu que abre los ojos del creyente para ver la gloria de Dios en la Escritura y reconocerla como lo que es: Palabra de Dios.',
      escritura: '1 Co 2:10-14; Jn 16:13-14; 1 Jn 2:20, 27',
    },
    {
      afirmacion: 'El verdadero creyente reconoce la voz de su Pastor',
      base: 'Teología bíblica reformada',
      explicacion:
        'Las ovejas de Cristo reconocen Su voz. No necesitan que un tercero les certifique que la voz del Pastor es auténtica. El mismo Espíritu que inspiró la Escritura es el que ilumina al creyente para recibirla con fe. Esto no es un conocimiento meramente intelectual, sino una certeza espiritual y vivencial que produce gozo, sumisión y amor por la Palabra. El incrédulo puede leer la misma Escritura y no ver su gloria, porque falta el testimonio del Espíritu.',
      escritura: 'Jn 10:3-5, 27; 1 Co 2:14; Mt 16:17',
    },
    {
      afirmacion: 'La Escritura se interpreta a sí misma',
      base: 'Principio reformado (analogía de la fe)',
      explicacion:
        'La Escritura es su propio intérprete. Lo que es oscuro en un lugar es aclarado en otro. El juez supremo en materia de fe no es un concilio, un credo ni una autoridad humana, sino el Espíritu Santo hablando en la Escritura. Esto no significa que cada persona pueda interpretar la Biblia caprichosamente, sino que la Escritura misma, bajo la iluminación del Espíritu, es la regla final de interpretación.',
      escritura: '2 P 3:16; Is 8:20; Hch 17:11; Sal 119:105',
    },
    {
      afirmacion: 'La fe no se funda en milagros, razón o experiencia, sino en la Palabra',
      base: '1689 LBCF 1.1; Teología reformada',
      explicacion:
        'Aunque los milagros, la racionalidad del contenido bíblico y la experiencia personal pueden confirmar nuestra fe, el fundamento último de la certeza es la Palabra de Dios atestiguada por el Espíritu Santo. La fe reformada rechaza tanto el racionalismo (que somete la Biblia al juicio de la razón humana) como el misticismo (que busca revelaciones o experiencias fuera de la Escritura). La fe viene por el oír, y el oír por la Palabra de Dios.',
      escritura: 'Ro 10:17; He 11:1; 2 Co 5:7; Jn 20:29',
    },
  ],
  citas: [
    {
      texto: 'La autoridad de la Santa Escritura, por la cual debe ser creída, no depende del testimonio de ningún hombre o iglesia, sino completamente de Dios (que es la Verdad misma), el Autor de ella; por lo tanto, debe ser recibida porque es la Palabra de Dios.',
      fuente: 'Confesión Bautista de Fe 1689, Capítulo 1, Párrafo 4',
    },
    {
      texto: 'Nuestra plena persuasión y seguridad de la infalible verdad y autoridad divina de la misma, procede de la obra interna del Espíritu Santo, quien da testimonio por medio de la Palabra y con la Palabra en nuestros corazones.',
      fuente: 'Confesión Bautista de Fe 1689, Capítulo 1, Párrafo 5',
    },
    {
      texto: 'El Juez Supremo, por el cual todos los asuntos de religión deben ser determinados, y todos los decretos de concilios, opiniones de escritores antiguos, doctrinas de hombres y espíritus privados deben ser examinados, no puede ser otro que el Espíritu Santo hablando en la Escritura.',
      fuente: 'Confesión Bautista de Fe 1689, Capítulo 1, Párrafo 10',
    },
  ],
};

export default testimonioData;
