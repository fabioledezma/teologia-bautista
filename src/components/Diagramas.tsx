const C = '#FFFFFF';
const G = '#AF8C1E';
const T = '#000000';
const T2 = '#000000';
const T3 = '#000000';
const B = '#D2D2D2';

export function svgTULIP() {
  return `<svg viewBox="0 0 540 580" xmlns="http://www.w3.org/2000/svg">
    <rect width="540" height="580" fill="${C}" rx="12"/>
    <text x="270" y="40" text-anchor="middle" fill="${G}" font-family="serif" font-size="22" font-weight="bold">TULIP — Los Cinco Puntos</text>
    <g font-family="sans-serif" font-size="14">
      <rect x="70" y="70" width="400" height="60" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="110" y="92" fill="${G}" font-weight="bold">T</text>
      <text x="130" y="92" fill="${T}"> — Depravación Total</text>
      <text x="110" y="115" fill="${T2}" font-size="12">El pecado afecta cada aspecto de nuestra persona.</text>

      <line x1="270" y1="130" x2="270" y2="150" stroke="${B}" stroke-width="2"/>
      <polygon points="264,148 270,158 276,148" fill="${B}"/>

      <rect x="70" y="160" width="400" height="60" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="110" y="182" fill="${G}" font-weight="bold">U</text>
      <text x="130" y="182" fill="${T}"> — Elección Incondicional</text>
      <text x="110" y="205" fill="${T2}" font-size="12">Dios elige según Su soberana voluntad, no por mérito humano.</text>

      <line x1="270" y1="220" x2="270" y2="240" stroke="${B}" stroke-width="2"/>
      <polygon points="264,238 270,248 276,238" fill="${B}"/>

      <rect x="70" y="250" width="400" height="60" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="110" y="272" fill="${G}" font-weight="bold">L</text>
      <text x="130" y="272" fill="${T}"> — Expiación Limitada</text>
      <text x="110" y="295" fill="${T2}" font-size="12">Cristo murió eficazmente por los elegidos.</text>

      <line x1="270" y1="310" x2="270" y2="330" stroke="${B}" stroke-width="2"/>
      <polygon points="264,328 270,338 276,328" fill="${B}"/>

      <rect x="70" y="340" width="400" height="60" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="110" y="362" fill="${G}" font-weight="bold">I</text>
      <text x="130" y="362" fill="${T}"> — Gracia Irresistible</text>
      <text x="110" y="385" fill="${T2}" font-size="12">El llamado eficaz de Dios no puede ser resistido.</text>

      <line x1="270" y1="400" x2="270" y2="420" stroke="${B}" stroke-width="2"/>
      <polygon points="264,418 270,428 276,418" fill="${B}"/>

      <rect x="70" y="430" width="400" height="60" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="110" y="452" fill="${G}" font-weight="bold">P</text>
      <text x="130" y="452" fill="${T}"> — Perseverancia de los Santos</text>
      <text x="110" y="475" fill="${T2}" font-size="12">Dios preserva a Sus santos hasta el fin.</text>
    </g>
    <text x="270" y="540" text-anchor="middle" fill="${T3}" font-family="sans-serif" font-size="11">Los cinco puntos forman el acrónimo TULIP</text>
  </svg>`;
}

export function svgTrinity() {
  return `<svg viewBox="0 0 540 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="540" height="400" fill="${C}" rx="12"/>
    <text x="270" y="35" text-anchor="middle" fill="${G}" font-family="serif" font-size="22" font-weight="bold">La Santísima Trinidad</text>
    <text x="270" y="55" text-anchor="middle" fill="${T2}" font-family="sans-serif" font-size="13">Un solo Dios en tres Personas distintas</text>

    <circle cx="270" cy="200" r="90" fill="none" stroke="${B}" stroke-width="1" stroke-dasharray="4,4"/>

    <circle cx="270" cy="130" r="60" fill="${C}" stroke="${G}" stroke-width="2"/>
    <text x="270" y="125" text-anchor="middle" fill="${G}" font-family="serif" font-size="14" font-weight="bold">Padre</text>
    <text x="270" y="143" text-anchor="middle" fill="${T2}" font-family="sans-serif" font-size="11">Creador</text>

    <circle cx="160" cy="290" r="60" fill="${C}" stroke="${G}" stroke-width="2"/>
    <text x="160" y="285" text-anchor="middle" fill="${G}" font-family="serif" font-size="14" font-weight="bold">Hijo</text>
    <text x="160" y="303" text-anchor="middle" fill="${T2}" font-family="sans-serif" font-size="11">Redentor</text>

    <circle cx="380" cy="290" r="60" fill="${C}" stroke="${G}" stroke-width="2"/>
    <text x="380" y="285" text-anchor="middle" fill="${G}" font-family="serif" font-size="14" font-weight="bold">Espíritu</text>
    <text x="380" y="303" text-anchor="middle" fill="${T2}" font-family="sans-serif" font-size="11">Santificador</text>

    <line x1="235" y1="178" x2="190" y2="248" stroke="${B}" stroke-width="1.5"/>
    <line x1="305" y1="178" x2="350" y2="248" stroke="${B}" stroke-width="1.5"/>
    <line x1="220" y1="290" x2="320" y2="290" stroke="${B}" stroke-width="1.5"/>

    <text x="270" y="365" text-anchor="middle" fill="${T3}" font-family="sans-serif" font-size="11">Tres personas, un mismo Dios — &quot;Lo que el Padre es, eso es el Hijo, y eso el Espíritu Santo.&quot;</text>
  </svg>`;
}

export function svgOrdoSalutis() {
  return `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill="${C}" rx="12"/>
    <text x="400" y="35" text-anchor="middle" fill="${G}" font-family="serif" font-size="22" font-weight="bold">Ordo Salutis — Orden de la Salvación</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="300" y="65" width="200" height="44" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="400" y="83" text-anchor="middle" fill="${G}" font-weight="bold">Elección</text>
      <text x="400" y="98" text-anchor="middle" fill="${T2}" font-size="11">Efesios 1:4-5</text>

      <line x1="400" y1="109" x2="400" y2="129" stroke="${B}" stroke-width="2"/>
      <polygon points="394,127 400,137 406,127" fill="${B}"/>

      <rect x="300" y="140" width="200" height="44" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="400" y="158" text-anchor="middle" fill="${G}" font-weight="bold">Llamamiento</text>
      <text x="400" y="173" text-anchor="middle" fill="${T2}" font-size="11">Romanos 8:30</text>

      <line x1="400" y1="184" x2="400" y2="204" stroke="${B}" stroke-width="2"/>
      <polygon points="394,202 400,212 406,202" fill="${B}"/>

      <rect x="300" y="215" width="200" height="44" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="400" y="233" text-anchor="middle" fill="${G}" font-weight="bold">Regeneración</text>
      <text x="400" y="248" text-anchor="middle" fill="${T2}" font-size="11">Juan 3:3-8</text>

      <line x1="400" y1="259" x2="400" y2="279" stroke="${B}" stroke-width="2"/>
      <polygon points="394,277 400,287 406,277" fill="${B}"/>

      <rect x="300" y="290" width="200" height="44" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="400" y="308" text-anchor="middle" fill="${G}" font-weight="bold">Fe y Arrepentimiento</text>
      <text x="400" y="323" text-anchor="middle" fill="${T2}" font-size="11">Efesios 2:8</text>

      <line x1="400" y1="334" x2="400" y2="354" stroke="${B}" stroke-width="2"/>
      <polygon points="394,352 400,362 406,352" fill="${B}"/>

      <rect x="300" y="365" width="200" height="44" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="400" y="383" text-anchor="middle" fill="${G}" font-weight="bold">Justificación</text>
      <text x="400" y="398" text-anchor="middle" fill="${T2}" font-size="11">Romanos 3:28</text>

      <line x1="400" y1="409" x2="400" y2="429" stroke="${B}" stroke-width="2"/>
      <polygon points="394,427 400,437 406,427" fill="${B}"/>

      <rect x="290" y="440" width="220" height="44" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="400" y="458" text-anchor="middle" fill="${G}" font-weight="bold">Santificación</text>
      <text x="400" y="473" text-anchor="middle" fill="${T2}" font-size="11">1 Tesalonicenses 4:3</text>

      <line x1="400" y1="484" x2="400" y2="504" stroke="${B}" stroke-width="2"/>
      <polygon points="394,502 400,512 406,502" fill="${B}"/>

      <rect x="290" y="515" width="220" height="44" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="400" y="533" text-anchor="middle" fill="${G}" font-weight="bold">Perseverancia</text>
      <text x="400" y="548" text-anchor="middle" fill="${T2}" font-size="11">Filipenses 1:6</text>
    </g>
  </svg>`;
}

export function svgSolas() {
  return `<svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="320" fill="${C}" rx="12"/>
    <text x="450" y="35" text-anchor="middle" fill="${G}" font-family="serif" font-size="22" font-weight="bold">Las 5 Solas de la Reforma</text>

    <g font-family="sans-serif">
      <rect x="20" y="60" width="155" height="200" rx="10" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="97" y="95" text-anchor="middle" fill="${G}" font-size="13" font-weight="bold">Sola</text>
      <text x="97" y="112" text-anchor="middle" fill="${G}" font-size="13" font-weight="bold">Scriptura</text>
      <text x="97" y="145" text-anchor="middle" fill="${T}" font-size="11">La Biblia es la</text>
      <text x="97" y="162" text-anchor="middle" fill="${T}" font-size="11">autoridad máxima</text>
      <text x="97" y="179" text-anchor="middle" fill="${T}" font-size="11">para la fe y</text>
      <text x="97" y="196" text-anchor="middle" fill="${T}" font-size="11">la práctica.</text>
      <text x="97" y="240" text-anchor="middle" fill="${T2}" font-size="10">2 Timoteo 3:16-17</text>

      <rect x="195" y="60" width="155" height="200" rx="10" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="272" y="95" text-anchor="middle" fill="${G}" font-size="13" font-weight="bold">Sola</text>
      <text x="272" y="112" text-anchor="middle" fill="${G}" font-size="13" font-weight="bold">Fide</text>
      <text x="272" y="145" text-anchor="middle" fill="${T}" font-size="11">Somos salvos</text>
      <text x="272" y="162" text-anchor="middle" fill="${T}" font-size="11">solamente por</text>
      <text x="272" y="179" text-anchor="middle" fill="${T}" font-size="11">medio de la fe,</text>
      <text x="272" y="196" text-anchor="middle" fill="${T}" font-size="11">no por obras.</text>
      <text x="272" y="240" text-anchor="middle" fill="${T2}" font-size="10">Efesios 2:8-9</text>

      <rect x="370" y="60" width="155" height="200" rx="10" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="447" y="95" text-anchor="middle" fill="${G}" font-size="13" font-weight="bold">Sola</text>
      <text x="447" y="112" text-anchor="middle" fill="${G}" font-size="13" font-weight="bold">Gratia</text>
      <text x="447" y="145" text-anchor="middle" fill="${T}" font-size="11">La salvación es</text>
      <text x="447" y="162" text-anchor="middle" fill="${T}" font-size="11">un don gratuito</text>
      <text x="447" y="179" text-anchor="middle" fill="${T}" font-size="11">de la gracia</text>
      <text x="447" y="196" text-anchor="middle" fill="${T}" font-size="11">de Dios.</text>
      <text x="447" y="240" text-anchor="middle" fill="${T2}" font-size="10">Romanos 3:24</text>

      <rect x="545" y="60" width="155" height="200" rx="10" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="622" y="95" text-anchor="middle" fill="${G}" font-size="13" font-weight="bold">Solus</text>
      <text x="622" y="112" text-anchor="middle" fill="${G}" font-size="13" font-weight="bold">Christus</text>
      <text x="622" y="145" text-anchor="middle" fill="${T}" font-size="11">Cristo es el</text>
      <text x="622" y="162" text-anchor="middle" fill="${T}" font-size="11">único mediador</text>
      <text x="622" y="179" text-anchor="middle" fill="${T}" font-size="11">entre Dios y</text>
      <text x="622" y="196" text-anchor="middle" fill="${T}" font-size="11">los hombres.</text>
      <text x="622" y="240" text-anchor="middle" fill="${T2}" font-size="10">1 Timoteo 2:5</text>

      <rect x="720" y="60" width="155" height="200" rx="10" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="797" y="95" text-anchor="middle" fill="${G}" font-size="13" font-weight="bold">Soli</text>
      <text x="797" y="112" text-anchor="middle" fill="${G}" font-size="13" font-weight="bold">Deo Gloria</text>
      <text x="797" y="145" text-anchor="middle" fill="${T}" font-size="11">Toda la gloria</text>
      <text x="797" y="162" text-anchor="middle" fill="${T}" font-size="11">pertenece solo</text>
      <text x="797" y="179" text-anchor="middle" fill="${T}" font-size="11">a Dios por</text>
      <text x="797" y="196" text-anchor="middle" fill="${T}" font-size="11">siempre.</text>
      <text x="797" y="240" text-anchor="middle" fill="${T2}" font-size="10">Romanos 11:36</text>
    </g>
  </svg>`;
}

// --- Expansion diagrams ---

export function svgProblemaCristiano() {
  return `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#FFFFFF" rx="12"/>
    <text x="300" y="35" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">El Problema Cristiano en el Imperio Romano</text>
    <g font-family="sans-serif" font-size="13">
      <rect x="30" y="60" width="165" height="140" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="112" y="85" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Acusaciones</text>
      <text x="50" y="108" fill="#000000">• Ateísmo (sin dioses)</text>
      <text x="50" y="128" fill="#000000">• Canibalismo (Cena)</text>
      <text x="50" y="148" fill="#000000">• Incesto (ágape)</text>
      <text x="50" y="168" fill="#000000">• Odio al género humano</text>
      <text x="50" y="188" fill="#000000">• Traición al Imperio</text>

      <rect x="215" y="60" width="165" height="140" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="297" y="85" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Negativas Cristianas</text>
      <text x="235" y="108" fill="#000000">• No al culto imperial</text>
      <text x="235" y="128" fill="#000000">• No al servicio militar</text>
      <text x="235" y="148" fill="#000000">• No a festivales paganos</text>
      <text x="235" y="168" fill="#000000">• No a los dioses romanos</text>
      <text x="235" y="188" fill="#000000">• Lealtad a Cristo &gt; César</text>

      <rect x="400" y="60" width="170" height="140" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="485" y="85" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Consecuencias</text>
      <text x="420" y="108" fill="#000000">• Persecución imperial</text>
      <text x="420" y="128" fill="#000000">• Prisión y tortura</text>
      <text x="420" y="148" fill="#000000">• Ejecución pública</text>
      <text x="420" y="168" fill="#000000">• Exilio y confiscación</text>
      <text x="420" y="188" fill="#000000">• Martirio</text>

      <line x1="195" y1="130" x2="215" y2="130" stroke="#D2D2D2" stroke-width="2"/>
      <polygon points="210,126 220,130 210,134" fill="#D2D2D2"/>
      <line x1="380" y1="130" x2="400" y2="130" stroke="#D2D2D2" stroke-width="2"/>
      <polygon points="395,126 405,130 395,134" fill="#D2D2D2"/>

      <rect x="170" y="225" width="260" height="60" rx="8" fill="#AF8C1E" opacity="0.15" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="250" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="14">Paradoja Divina</text>
      <text x="300" y="270" text-anchor="middle" fill="#000000" font-size="12">"La sangre de los mártires es semilla de cristianos"</text>

      <rect x="50" y="310" width="500" height="65" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="330" text-anchor="middle" fill="#000000" font-weight="bold" font-size="12">Lección Bautista Reformada</text>
      <text x="300" y="350" text-anchor="middle" fill="#000000" font-size="11">La iglesia crece más bajo presión que bajo privilegio.</text>
      <text x="300" y="365" text-anchor="middle" fill="#000000" font-size="11">Cristo es Señor, no el Estado. Libertad de conciencia.</text>
    </g>
  </svg>`;
}

export function svgEntornoSoc() {
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="420" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Pirámide Social del Imperio Romano</text>
    <g font-family="sans-serif" font-size="12">
      <polygon points="300,55 420,100 180,100" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="80" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Senadores — &lt; 0.1%</text>

      <polygon points="300,100 445,160 155,160" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="128" text-anchor="middle" fill="#000000">Equites (Caballeros)</text>

      <polygon points="300,160 470,235 130,235" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="195" text-anchor="middle" fill="#000000">Decuriones (élite local)</text>

      <polygon points="300,235 490,310 110,310" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="270" text-anchor="middle" fill="#000000">Plebeyos libres (artesanos, comerciantes)</text>

      <polygon points="300,310 510,385 90,385" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="345" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Esclavos — ~30-40% de la población</text>
      <text x="300" y="362" text-anchor="middle" fill="#000000" font-size="11">Sin derechos legales, propiedad de sus amos</text>

      <line x1="300" y1="385" x2="300" y2="395" stroke="#D2D2D2" stroke-width="2"/>
      <polygon points="294,393 300,403 306,393" fill="#D2D2D2"/>

      <text x="300" y="415" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">"Ya no hay esclavo ni libre... todos sois uno en Cristo Jesús" (Gálatas 3:28)</text>
    </g>
  </svg>`;
}

export function svgTendenciasReligiosas() {
  return `<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="380" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">El Mercado Religioso del Imperio Romano</text>
    <g font-family="sans-serif" font-size="13">
      <circle cx="120" cy="140" r="70" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="120" y="125" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Religión</text>
      <text x="120" y="140" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Romana</text>
      <text x="120" y="160" text-anchor="middle" fill="#000000" font-size="11">Culto cívico</text>
      <text x="120" y="175" text-anchor="middle" fill="#000000" font-size="11">Pax deorum</text>
      <text x="120" y="190" text-anchor="middle" fill="#000000" font-size="11">Ritual público</text>

      <circle cx="300" cy="140" r="70" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="125" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Cultos de</text>
      <text x="300" y="140" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Misterio</text>
      <text x="300" y="160" text-anchor="middle" fill="#000000" font-size="11">Mitra, Isis</text>
      <text x="300" y="175" text-anchor="middle" fill="#000000" font-size="11">Salvación personal</text>
      <text x="300" y="190" text-anchor="middle" fill="#000000" font-size="11">Iniciación secreta</text>

      <circle cx="480" cy="140" r="70" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="480" y="125" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Culto</text>
      <text x="480" y="140" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Imperial</text>
      <text x="480" y="160" text-anchor="middle" fill="#000000" font-size="11">Lealtad política</text>
      <text x="480" y="175" text-anchor="middle" fill="#000000" font-size="11">Genio del emperador</text>
      <text x="480" y="190" text-anchor="middle" fill="#000000" font-size="11">Obligatorio</text>

      <circle cx="210" cy="280" r="70" fill="none" stroke="#AF8C1E" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="210" y="265" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Judaísmo</text>
      <text x="210" y="285" text-anchor="middle" fill="#000000" font-size="11">Monoteísmo</text>
      <text x="210" y="300" text-anchor="middle" fill="#000000" font-size="11">Escrituras</text>
      <text x="210" y="315" text-anchor="middle" fill="#000000" font-size="11">Diáspora</text>

      <circle cx="390" cy="280" r="70" fill="none" stroke="#000000" stroke-width="2"/>
      <text x="390" y="265" text-anchor="middle" fill="#000000" font-weight="bold">Cristianismo</text>
      <text x="390" y="285" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">Público, histórico</text>
      <text x="390" y="300" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">Fe, no ritual</text>
      <text x="390" y="315" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">Universal</text>

      <line x1="190" y1="210" x2="230" y2="250" stroke="#D2D2D2" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="410" y1="210" x2="370" y2="250" stroke="#D2D2D2" stroke-width="1" stroke-dasharray="3,3"/>
    </g>
  </svg>`;
}

export function svgMovFilosoficos() {
  return `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Escuelas Filosóficas del Tiempo Apostólico</text>
    <g font-family="sans-serif" font-size="13">
      <rect x="20" y="55" width="175" height="140" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="107" y="80" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Estoicismo</text>
      <line x1="40" y1="88" x2="175" y2="88" stroke="#D2D2D2" stroke-width="1"/>
      <text x="35" y="108" fill="#000000">• Logos (Razón divina)</text>
      <text x="35" y="128" fill="#000000">• Virtud = único bien</text>
      <text x="35" y="148" fill="#000000">• Aceptar el destino</text>
      <text x="35" y="168" fill="#000000">• Autosuficiencia</text>
      <text x="35" y="188" fill="#000000">• Séneca, Epicteto</text>

      <rect x="210" y="55" width="175" height="140" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="297" y="80" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Epicureísmo</text>
      <line x1="230" y1="88" x2="365" y2="88" stroke="#D2D2D2" stroke-width="1"/>
      <text x="225" y="108" fill="#000000">• Átomos y vacío</text>
      <text x="225" y="128" fill="#000000">• Dioses no intervienen</text>
      <text x="225" y="148" fill="#000000">• Alma mortal</text>
      <text x="225" y="168" fill="#000000">• Placer = bien supremo</text>
      <text x="225" y="188" fill="#000000">• Pablo en Atenas</text>

      <rect x="400" y="55" width="175" height="140" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="487" y="80" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Platonismo</text>
      <line x1="420" y1="88" x2="555" y2="88" stroke="#D2D2D2" stroke-width="1"/>
      <text x="415" y="108" fill="#000000">• Mundo espiritual</text>
      <text x="415" y="128" fill="#000000">• Alma inmortal</text>
      <text x="415" y="148" fill="#000000">• Contemplación</text>
      <text x="415" y="168" fill="#000000">• Filón de Alejandría</text>
      <text x="415" y="188" fill="#000000">• Influyó en Agustín</text>

      <rect x="80" y="220" width="440" height="60" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="245" text-anchor="middle" fill="#000000" font-weight="bold" font-size="12">Actitud Cristiana: "Toda verdad pertenece a Dios" (Agustín)</text>
      <text x="300" y="265" text-anchor="middle" fill="#000000" font-size="11">La filosofía es sierva, no maestra. Subordinada a la Escritura.</text>

      <rect x="80" y="300" width="440" height="75" rx="8" fill="#AF8C1E" opacity="0.12" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="325" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Perspectiva Bautista Reformada</text>
      <text x="300" y="345" text-anchor="middle" fill="#000000" font-size="11">"Llevando cautivo todo pensamiento a la obediencia de Cristo" (2 Corintios 10:5)</text>
      <text x="300" y="362" text-anchor="middle" fill="#000000" font-size="11">Sola Scriptura — la Escritura es la única regla infalible</text>
    </g>
  </svg>`;
}

export function svgClimaMor() {
  return `<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="380" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Roma vs. Cristianismo: Contraste Moral</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="25" y="55" width="270" height="150" rx="8" fill="none" stroke="#D2D2D2" stroke-width="1.5"/>
      <text x="160" y="80" text-anchor="middle" fill="#D2D2D2" font-weight="bold" font-size="14">Sociedad Romana</text>
      <line x1="40" y1="88" x2="280" y2="88" stroke="#D2D2D2" stroke-width="1"/>
      <text x="40" y="110" fill="#000000">• Aborto e infanticidio legal</text>
      <text x="40" y="130" fill="#000000">• Pederastia aceptada</text>
      <text x="40" y="150" fill="#000000">• Doble moral sexual</text>
      <text x="40" y="170" fill="#000000">• Divorcio fácil</text>
      <text x="40" y="190" fill="#000000">• Violencia como entretenimiento</text>

      <rect x="305" y="55" width="270" height="150" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="440" y="80" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="14">Enseñanza Cristiana</text>
      <line x1="320" y1="88" x2="560" y2="88" stroke="#AF8C1E" stroke-width="1"/>
      <text x="320" y="110" fill="#000000">• Vida sagrada (no al aborto)</text>
      <text x="320" y="130" fill="#000000">• Castidad para todos</text>
      <text x="320" y="150" fill="#000000">• Fidelidad conyugal</text>
      <text x="320" y="170" fill="#000000">• Matrimonio de por vida</text>
      <text x="320" y="190" fill="#000000">• Amor y misericordia</text>

      <rect x="100" y="230" width="400" height="55" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="300" y="252" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Impacto del Evangelio</text>
      <text x="300" y="272" text-anchor="middle" fill="#000000">Cristianos rescataban bebés, cuidaban enfermos, honraban a las mujeres</text>

      <text x="300" y="320" text-anchor="middle" fill="#AF8C1E" font-size="13" font-weight="bold">"Somos hechura suya, creados en Cristo Jesús para buenas obras" (Efesios 2:10)</text>
      <text x="300" y="340" text-anchor="middle" fill="#000000" font-size="11">La gracia produce santidad — no legalismo, no libertinaje</text>
      <text x="300" y="365" text-anchor="middle" fill="#000000" font-size="11" font-style="italic">Juliano el Apóstata: "Los galileos ganan adeptos porque cuidan a sus pobres... y a los nuestros"</text>
    </g>
  </svg>`;
}

export function svgExpansionIglesia() {
  return `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Factores de Expansión del Cristianismo Primitivo</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="30" y="55" width="260" height="160" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="160" y="80" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="14">Factores Humanos</text>
      <line x1="45" y1="88" x2="275" y2="88" stroke="#D2D2D2" stroke-width="1"/>
      <text x="45" y="110" fill="#000000">1. Pax Romana (caminos, paz)</text>
      <text x="45" y="130" fill="#000000">2. Koiné (idioma común)</text>
      <text x="45" y="150" fill="#000000">3. Diáspora judía</text>
      <text x="45" y="170" fill="#000000">4. Redes sociales y familiares</text>
      <text x="45" y="190" fill="#000000">5. Movilidad geográfica</text>

      <rect x="310" y="55" width="260" height="160" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="440" y="80" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="14">Factores Espirituales</text>
      <line x1="325" y1="88" x2="555" y2="88" stroke="#D2D2D2" stroke-width="1"/>
      <text x="325" y="110" fill="#000000">1. Testimonio de mártires</text>
      <text x="325" y="130" fill="#000000">2. Amor en epidemias</text>
      <text x="325" y="150" fill="#000000">3. Superioridad moral</text>
      <text x="325" y="170" fill="#000000">4. Cuidado de pobres</text>
      <text x="325" y="190" fill="#000000">5. Poder del Espíritu Santo</text>

      <rect x="100" y="240" width="400" height="55" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="260" text-anchor="middle" fill="#000000" font-weight="bold" font-size="13">Crecimiento Estimado (Rodney Stark)</text>
      <text x="300" y="280" text-anchor="middle" fill="#000000">40 d.C.: ~1,000 → 350 d.C.: ~33 millones</text>

      <rect x="100" y="310" width="400" height="65" rx="8" fill="#AF8C1E" opacity="0.12" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="332" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Lección Bautista Reformada</text>
      <text x="300" y="350" text-anchor="middle" fill="#000000" font-size="11">"Yo edificaré mi iglesia" (Mateo 16:18) — el crecimiento es de Dios</text>
      <text x="300" y="365" text-anchor="middle" fill="#000000" font-size="11">Fidelidad, no estrategia humana. Evangelio + Espíritu = iglesia</text>
    </g>
  </svg>`;
}

export const svgMap: Record<string, () => string> = {
  tulip: svgTULIP,
  trinity: svgTrinity,
  ordo: svgOrdoSalutis,
  solas: svgSolas,
  "problema-cristiano": svgProblemaCristiano,
  "entorno-social": svgEntornoSoc,
  "tendencias-religiosas": svgTendenciasReligiosas,
  "movimientos-filosoficos": svgMovFilosoficos,
  "clima-moral": svgClimaMor,
  "expansion-iglesia": svgExpansionIglesia,
};
