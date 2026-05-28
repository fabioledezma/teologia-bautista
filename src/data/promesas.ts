export interface PromesaEntry {
  promesa: string;
  referenciaAT: string;
  cumplimiento: string;
  referenciaNT: string;
  categoria: 'mesianica' | 'pacto' | 'restauracion' | 'escritura';
}

const promesasData: PromesaEntry[] = [
  {
    promesa: 'La Simiente de la mujer aplastará la cabeza de la serpiente',
    referenciaAT: 'Gn 3:15',
    cumplimiento: 'Cristo vence a Satanás en la cruz y resucita',
    referenciaNT: 'Col 2:15; He 2:14; 1 Jn 3:8',
    categoria: 'mesianica',
  },
  {
    promesa: 'En Abraham serán benditas todas las familias de la tierra',
    referenciaAT: 'Gn 12:3',
    cumplimiento: 'El evangelio es predicado a todas las naciones en Cristo',
    referenciaNT: 'Gá 3:8; Hch 3:25-26',
    categoria: 'pacto',
  },
  {
    promesa: 'Un profeta como Moisés levantará Dios',
    referenciaAT: 'Dt 18:15-19',
    cumplimiento: 'Jesús es el profeta mayor que Moisés',
    referenciaNT: 'Hch 3:22-23; 7:37; Jn 6:14',
    categoria: 'mesianica',
  },
  {
    promesa: 'Un rey del linaje de David reinará para siempre',
    referenciaAT: '2 S 7:12-16; Sal 89:3-4',
    cumplimiento: 'Jesús, Hijo de David, resucitado y sentado a la diestra de Dios',
    referenciaNT: 'Lc 1:32-33; Hch 2:29-36; Ap 22:16',
    categoria: 'mesianica',
  },
  {
    promesa: 'Una virgen concebirá y dará a luz un hijo llamado Emanuel',
    referenciaAT: 'Is 7:14',
    cumplimiento: 'Jesús nació de la virgen María',
    referenciaNT: 'Mt 1:22-23',
    categoria: 'mesianica',
  },
  {
    promesa: 'El Siervo Sufriente: herido por nuestras transgresiones',
    referenciaAT: 'Is 53:4-6, 12',
    cumplimiento: 'Cristo murió por nuestros pecados, sepultado y resucitó',
    referenciaNT: '1 P 2:24; Mt 27:38; Hch 8:32-35',
    categoria: 'mesianica',
  },
  {
    promesa: 'El Espíritu Santo será derramado sobre toda carne',
    referenciaAT: 'Jl 2:28-32',
    cumplimiento: 'Pentecostés: el Espíritu desciende sobre la iglesia',
    referenciaNT: 'Hch 2:16-21',
    categoria: 'restauracion',
  },
  {
    promesa: 'Nueva Alianza: perdonaré sus pecados y escribiré Mi ley en sus corazones',
    referenciaAT: 'Jer 31:31-34',
    cumplimiento: 'La Nueva Alianza en la sangre de Cristo',
    referenciaNT: 'Lc 22:20; He 8:8-12; 10:16-17',
    categoria: 'pacto',
  },
  {
    promesa: 'El Señor mismo os dará señal: la virgen concebirá',
    referenciaAT: 'Is 7:14',
    cumplimiento: 'Nacimiento virginal de Jesús',
    referenciaNT: 'Mt 1:18-25; Lc 1:26-38',
    categoria: 'mesianica',
  },
  {
    promesa: 'De Belén saldrá el gobernante de Israel',
    referenciaAT: 'Miq 5:2',
    cumplimiento: 'Jesús nace en Belén',
    referenciaNT: 'Mt 2:1-6; Jn 7:42',
    categoria: 'mesianica',
  },
  {
    promesa: 'No estarás sin rey por muchos días, después volverán los hijos de Israel',
    referenciaAT: 'Os 3:4-5',
    cumplimiento: 'Restauración espiritual en Cristo; los gentiles son injertados',
    referenciaNT: 'Ro 9:25-26; 11:23-27',
    categoria: 'restauracion',
  },
  {
    promesa: 'Multiplicaré tu descendencia como las estrellas del cielo',
    referenciaAT: 'Gn 15:5; 22:17',
    cumplimiento: 'La iglesia compuesta de judíos y gentiles en Cristo',
    referenciaNT: 'Gá 3:29; Ro 4:16-18',
    categoria: 'pacto',
  },
  {
    promesa: 'Un remanente volverá (Sear-jasub)',
    referenciaAT: 'Is 7:3; 10:20-22',
    cumplimiento: 'El remanente elegido por gracia, tanto de judíos como de gentiles',
    referenciaNT: 'Ro 9:27-29; 11:5',
    categoria: 'restauracion',
  },
  {
    promesa: 'He aquí Yo envío Mi mensajero delante de Tu faz',
    referenciaAT: 'Mal 3:1; Is 40:3',
    cumplimiento: 'Juan el Bautista prepara el camino del Señor',
    referenciaNT: 'Mt 11:10; Lc 7:27',
    categoria: 'mesianica',
  },
  {
    promesa: 'No quebrará la caña cascada ni apagará el pábilo que humea',
    referenciaAT: 'Is 42:3',
    cumplimiento: 'La ternura de Cristo hacia los débiles y quebrantados',
    referenciaNT: 'Mt 12:20',
    categoria: 'mesianica',
  },
  {
    promesa: 'Derramaré sobre la casa de David espíritu de gracia y oración',
    referenciaAT: 'Zac 12:10',
    cumplimiento: 'El Espíritu de gracia derramado en Pentecostés y la fe del creyente',
    referenciaNT: 'Jn 19:37; Hch 2:37',
    categoria: 'restauracion',
  },
  {
    promesa: 'El sol se convertirá en tinieblas y la luna en sangre',
    referenciaAT: 'Jl 2:31',
    cumplimiento: 'Señales cósmicas en la crucifixión y antes del día del Señor',
    referenciaNT: 'Mt 27:45; Hch 2:20; Ap 6:12',
    categoria: 'escritura',
  },
  {
    promesa: 'Jehová tu Dios levantará un profeta como yo',
    referenciaAT: 'Dt 18:15',
    cumplimiento: 'Jesús es el profeta que revela al Padre plenamente',
    referenciaNT: 'Jn 1:18; 6:14; Hch 3:22',
    categoria: 'mesianica',
  },
];

export default promesasData;
