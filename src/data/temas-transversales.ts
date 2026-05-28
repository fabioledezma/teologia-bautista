export interface TemaTransversal {
  tema: string;
  resumen: string;
  desarrollo: string[];
  culminacion: string;
  escrituras: string[];
}

const temasTransversalesData: TemaTransversal[] = [
  {
    tema: 'El Pacto',
    resumen:
      'Dios establece relaciones de pacto con Su pueblo, desde Adán hasta la Nueva Alianza en Cristo.',
    desarrollo: [
      'Pacto de obras con Adán (Gn 2:16-17; Os 6:7)',
      'Pacto de gracia con Abraham (Gn 12:1-3; 15; 17)',
      'Pacto mosaico con Israel en Sinaí (Ex 19-24)',
      'Pacto davídico (2 S 7:8-16)',
      'Nueva Alianza profetizada por Jeremías (Jer 31:31-34)',
      'Instituida por Cristo en Su sangre (Lc 22:20; He 8-9)',
    ],
    culminacion:
      'Cristo es el mediador de la Nueva Alianza, mejor que la antigua, establecida sobre mejores promesas, escrita en el corazón por el Espíritu Santo.',
    escrituras: ['He 8:6-13', 'He 9:15', '2 Co 3:6'],
  },
  {
    tema: 'El Reino de Dios',
    resumen:
      'Dios es Rey. Su reinado se manifiesta en la creación, en Israel, en Cristo, y será consumado al final.',
    desarrollo: [
      'Dios reina como Creador y Soberano sobre todo (Sal 103:19)',
      'Dios es Rey de Israel (Ex 15:18; Jue 8:23)',
      'El reino davídico como tipo del reino mesiánico (2 S 7)',
      'Jesús anuncia: "El reino de Dios se ha acercado" (Mr 1:15)',
      'El reino presente en Cristo pero no consumado (Mt 13; Col 1:13)',
      'Cristo entregará el reino al Padre después de vencer todo enemigo (1 Co 15:24-28)',
    ],
    culminacion:
      'El reino de Dios no es comida ni bebida, sino justicia, paz y gozo en el Espíritu Santo. Será consumado cuando Cristo vuelva.',
    escrituras: ['Ro 14:17', 'Ap 11:15', 'Mt 6:10'],
  },
  {
    tema: 'La Gloria de Dios',
    resumen:
      'El fin supremo de todas las cosas. Dios crea, redime y consuma todo para Su gloria.',
    desarrollo: [
      'La gloria de Dios en la creación (Sal 19:1; Is 6:3)',
      'La gloria Shekinah en el tabernáculo y templo (Ex 40:34; 1 R 8:11)',
      'La gloria de Dios en Cristo: "Hemos visto Su gloria" (Jn 1:14)',
      'La gloria revelada en la cruz (Jn 12:23-28)',
      'El creyente es transformado de gloria en gloria (2 Co 3:18)',
      'Todo será para alabanza de Su gloria (Ef 1:12-14)',
    ],
    culminacion:
      'La nueva Jerusalén resplandecerá con la gloria de Dios. Ya no habrá templo porque Dios mismo será Su luz.',
    escrituras: ['Ap 21:23', 'Hab 2:14', 'Ro 11:36'],
  },
  {
    tema: 'El Remanente',
    resumen:
      'Dios siempre preserva un grupo fiel dentro de Su pueblo, por gracia soberana.',
    desarrollo: [
      'Noé y su familia: remanente del juicio del diluvio (Gn 6-8)',
      'Elías: 7,000 que no doblaron la rodilla ante Baal (1 R 19:18)',
      'Isaías nombra a su hijo Sear-jasub: "un remanente volverá" (Is 7:3)',
      'Miqueas y los profetas anuncian un remanente restaurado (Miq 2:12)',
      'Pablo aplica el remanente a la elección por gracia (Ro 11:5)',
      'Los 144,000 sellados: remanente simbólico de Israel (Ap 7:4-8)',
    ],
    culminacion:
      'El remanente según la elección de la gracia demuestra que la salvación es de Dios, no del esfuerzo humano.',
    escrituras: ['Ro 11:5-6', 'Is 10:20-22', 'Sof 3:12-13'],
  },
  {
    tema: 'El Día de Jehová',
    resumen:
      'El día del juicio y la salvación de Dios, inminente para los profetas y consumado en el último día.',
    desarrollo: [
      'Juicio contra Israel y las naciones (Am 5:18-20; Sof 1:14-18)',
      'Juicio y purificación del remanente (Mal 3:2-3)',
      'Proféticamente cercano y escatológicamente final',
      'Jesús habla del "día del Hijo del Hombre" (Lc 17:22-37)',
      'Pablo: día del Señor vendrá como ladrón (1 Ts 5:2; 2 Ts 2:2)',
      'Pedro: los cielos pasarán con gran estruendo (2 P 3:10-13)',
    ],
    culminacion:
      'El Día de Jehová culmina en el juicio final y la restauración de todas las cosas. Cristo, el Juez, es también la salvación de Su pueblo.',
    escrituras: ['Jl 2:31', 'Mal 4:5', '2 P 3:10', 'Ap 20:11-15'],
  },
  {
    tema: 'Sacrificio y Expiación',
    resumen:
      'Sin derramamiento de sangre no hay perdón. Todo el sistema sacrificial apunta a Cristo.',
    desarrollo: [
      'Dios viste a Adán y Eva con pieles: primer sacrificio (Gn 3:21)',
      'Abel ofreció un sacrificio aceptable (Gn 4:4; He 11:4)',
      'El sistema levítico: holocaustos, expiación, propiciación (Lv 1-7; 16)',
      'El sacrificio de Isaac: tipo de la provisión divina (Gn 22)',
      'La Pascua: sangre del cordero (Ex 12)',
      'Cristo: Cordero de Dios que quita el pecado del mundo (Jn 1:29; He 9:26)',
    ],
    culminacion:
      'Cristo se ofreció una vez para siempre. Con Su propia sangre entró al Lugar Santísimo, obteniendo redención eterna.',
    escrituras: ['He 9:11-14', 'He 10:10-14', '1 P 1:18-19'],
  },
  {
    tema: 'La Simiente de la Mujer',
    resumen:
      'La promesa de un descendiente que aplastaría la cabeza de la serpiente, cumplida en Cristo.',
    desarrollo: [
      'Protoevangelio: "Simiente de la mujer te aplastará la cabeza" (Gn 3:15)',
      'La simiente de Abraham: en ti serán benditas todas las naciones (Gn 12:3)',
      'La simiente de David: reinará para siempre (2 S 7:12-13)',
      'Isaías: un niño nos es nacido, un hijo nos es dado (Is 9:6)',
      'Cristo: la Simiente prometida, el Hijo de Abraham, Hijo de David (Mt 1:1)',
      'Pablo: la simiente es Cristo (Gá 3:16)',
    ],
    culminacion:
      'Jesucristo es la simiente prometida. En Él, todas las naciones son bendecidas. Él ha vencido a Satanás, el pecado y la muerte.',
    escrituras: ['Ro 16:20', 'He 2:14-15', '1 Jn 3:8'],
  },
  {
    tema: 'El Pastor y el Rebaño',
    resumen:
      'Dios es el Pastor de Su pueblo. Cristo es el Buen Pastor. Los líderes son pastores bajo Él.',
    desarrollo: [
      'Dios es Pastor de Israel (Sal 23; 80:1)',
      'David: pastor tipo del Mesías (1 S 16:11; Sal 78:70-72)',
      'Profetas contra pastores infieles (Ez 34:1-10)',
      'Dios mismo pastoreará a Su pueblo (Ez 34:11-16)',
      'Cristo: el Buen Pastor que da Su vida por las ovejas (Jn 10:11-18)',
      'Pedro: pastoread la grey de Dios (1 P 5:2-4)',
    ],
    culminacion:
      'El Cordero que está en medio del trono las pastoreará y las guiará a fuentes de aguas de vida.',
    escrituras: ['Ap 7:17', 'Jn 10:27-28', 'He 13:20'],
  },
];

export default temasTransversalesData;
