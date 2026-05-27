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

// --- Patristica diagrams ---

export function svgQueEsPatristica() {
  return `<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="380" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">La Patrística en la Historia de la Iglesia</text>
    <g font-family="sans-serif" font-size="12">
      <line x1="50" y1="80" x2="550" y2="80" stroke="#D2D2D2" stroke-width="2"/>
      <text x="90" y="70" text-anchor="middle" fill="#000000" font-size="11">Nuevo Testamento</text>
      <text x="90" y="95" text-anchor="middle" fill="#000000" font-size="10">(30–100 d.C.)</text>
      <polygon points="80,75 90,68 100,75" fill="#D2D2D2"/>
      <rect x="160" y="58" width="280" height="45" rx="8" fill="none" stroke="#AF8C1E" stroke-width="2"/>
      <text x="300" y="75" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Patrística (100–451 d.C.)</text>
      <text x="300" y="92" text-anchor="middle" fill="#000000" font-size="10">Padres Apostólicos → Apologistas → Concilios Ecuménicos</text>
      <polygon points="440,75 450,68 460,75" fill="#D2D2D2"/>
      <text x="510" y="70" text-anchor="middle" fill="#000000" font-size="11">Edad Media</text>
      <text x="510" y="95" text-anchor="middle" fill="#000000" font-size="10">(451–1500 d.C.)</text>

      <rect x="50" y="125" width="155" height="100" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="127" y="148" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Definición Doctrinal</text>
      <text x="65" y="168" fill="#000000">• Canon del NT</text>
      <text x="65" y="186" fill="#000000">• Trinidad (Nicea 325)</text>
      <text x="65" y="204" fill="#000000">• Cristología (Calcedonia 451)</text>
      <text x="65" y="218" fill="#000000">• Credos ecuménicos</text>

      <rect x="225" y="125" width="155" height="100" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="302" y="148" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Defensa de la Fe</text>
      <text x="240" y="168" fill="#000000">• Apologías al Imperio</text>
      <text x="240" y="186" fill="#000000">• Refutación de herejías</text>
      <text x="240" y="204" fill="#000000">• Martirio y testimonio</text>
      <text x="240" y="218" fill="#000000">• Regla de fe</text>

      <rect x="400" y="125" width="155" height="100" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="477" y="148" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Organización</text>
      <text x="415" y="168" fill="#000000">• Ancianos → Obispos</text>
      <text x="415" y="186" fill="#000000">• Concilios locales</text>
      <text x="415" y="204" fill="#000000">• Liturgia y adoración</text>
      <text x="415" y="218" fill="#000000">• Disciplina eclesiástica</text>

      <rect x="100" y="250" width="400" height="70" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="272" text-anchor="middle" fill="#000000" font-weight="bold" font-size="13">La Patrística sentó las bases de toda la teología cristiana posterior</text>
      <text x="300" y="294" text-anchor="middle" fill="#000000" font-size="11">Los padres no son infalibles, pero son testigos irremplazables de la fe apostólica.</text>

      <rect x="150" y="335" width="300" height="30" rx="4" fill="#AF8C1E" opacity="0.15" stroke="#AF8C1E" stroke-width="1"/>
      <text x="300" y="353" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="11">Período clave para entender el cristianismo histórico</text>
    </g>
  </svg>`;
}

export function svgPadresApostolicos() {
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="420" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Los Padres Apostólicos y sus Escritos</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="30" y="55" width="170" height="155" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="115" y="78" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Clemente de Roma</text>
      <text x="50" y="98" fill="#000000">✝ c. 96–99 d.C.</text>
      <text x="50" y="118" fill="#000000">• 1 Clemente (c. 96)</text>
      <text x="50" y="138" fill="#000000">• Interviene en Corinto</text>
      <text x="50" y="158" fill="#000000">• Afirma orden de presbíteros</text>
      <text x="50" y="178" fill="#000000">• No reclama autoridad papal</text>
      <text x="50" y="198" fill="#000000">• Usa lenguaje del AT</text>

      <rect x="215" y="55" width="170" height="155" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="78" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Ignacio de Antioquía</text>
      <text x="235" y="98" fill="#000000">✝ c. 107 d.C.</text>
      <text x="235" y="118" fill="#000000">• 7 cartas camino al martirio</text>
      <text x="235" y="138" fill="#000000">• Enfatiza al obispo</text>
      <text x="235" y="158" fill="#000000">• Combate el docetismo</text>
      <text x="235" y="178" fill="#000000">• "Donde está el obispo..."</text>
      <text x="235" y="198" fill="#000000">• Anhela el martirio</text>

      <rect x="400" y="55" width="170" height="155" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="485" y="78" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Policarpo de Esmirna</text>
      <text x="420" y="98" fill="#000000">✝ c. 155 d.C.</text>
      <text x="420" y="118" fill="#000000">• Discípulo de Juan</text>
      <text x="420" y="138" fill="#000000">• Carta a los Filipenses</text>
      <text x="420" y="158" fill="#000000">• Martirio ejemplar</text>
      <text x="420" y="178" fill="#000000">• "86 años le sirvo..."</text>
      <text x="420" y="198" fill="#000000">• Quemado vivo</text>

      <rect x="30" y="230" width="170" height="155" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="115" y="253" text-anchor="middle" fill="#AF8C1E" font-weight="bold">La Didaché</text>
      <text x="50" y="273" fill="#000000">• Manual de iglesia (c. 100)</text>
      <text x="50" y="293" fill="#000000">• Bautismo por inmersión</text>
      <text x="50" y="313" fill="#000000">• Cena del Señor semanal</text>
      <text x="50" y="333" fill="#000000">• Profetas y maestros</text>
      <text x="50" y="353" fill="#000000">• Dos caminos (vida/muerte)</text>
      <text x="50" y="373" fill="#000000">• Anónimo</text>

      <rect x="215" y="230" width="170" height="155" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="300" y="253" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Pastor de Hermas</text>
      <text x="235" y="273" fill="#000000">• Escrito apocalíptico</text>
      <text x="235" y="293" fill="#000000">• Arrepentimiento post-bautismo</text>
      <text x="235" y="313" fill="#000000">• Parábolas y visiones</text>
      <text x="235" y="333" fill="#000000">• Muy popular s. II</text>
      <text x="235" y="353" fill="#000000">• Incluido en algunos códices</text>
      <text x="235" y="373" fill="#000000">• c. 140 d.C.</text>

      <rect x="400" y="230" width="170" height="155" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="485" y="253" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Papías de Hierápolis</text>
      <text x="420" y="273" fill="#000000">• Exposición de los Oráculos</text>
      <text x="420" y="293" fill="#000000">• Discípulo de Juan</text>
      <text x="420" y="313" fill="#000000">• Preservó tradiciones</text>
      <text x="420" y="333" fill="#000000">• Mateo: palabras hebreas</text>
      <text x="420" y="353" fill="#000000">• Marcos: intérprete de Pedro</text>
      <text x="420" y="373" fill="#000000">• Premilenialista</text>

      <text x="300" y="410" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="12">"Ochenta y seis años le he servido, y ningún mal me ha hecho" — Policarpo</text>
    </g>
  </svg>`;
}

export function svgEscritosPatristicos() {
  return `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Géneros Literarios de la Literatura Patrística</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="25" y="50" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="110" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Cartas</text>
      <text x="40" y="90" fill="#000000">• 1 Clemente, Ignacio, Policarpo</text>
      <text x="40" y="108" fill="#000000">• Correspondencia de Cipriano</text>
      <text x="40" y="126" fill="#000000">• Instrucción y consejo pastoral</text>

      <rect x="215" y="50" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Apologías</text>
      <text x="230" y="90" fill="#000000">• Justino Mártir, Atenágoras</text>
      <text x="230" y="108" fill="#000000">• Defensa ante el Imperio</text>
      <text x="230" y="126" fill="#000000">• Responden acusaciones</text>

      <rect x="405" y="50" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="490" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Tratados</text>
      <text x="420" y="90" fill="#000000">• Ireneo: Contra Herejías</text>
      <text x="420" y="108" fill="#000000">• Tertuliano: varias obras</text>
      <text x="420" y="126" fill="#000000">• Refutación doctrinal</text>

      <rect x="25" y="160" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="110" y="182" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Comentarios</text>
      <text x="40" y="200" fill="#000000">• Orígenes: Hexapla, Comentarios</text>
      <text x="40" y="218" fill="#000000">• Crisóstomo: Homilías</text>
      <text x="40" y="236" fill="#000000">• Interpretación bíblica</text>

      <rect x="215" y="160" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="182" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Historias</text>
      <text x="230" y="200" fill="#000000">• Eusebio: Hist. Eclesiástica</text>
      <text x="230" y="218" fill="#000000">• Hechos de mártires</text>
      <text x="230" y="236" fill="#000000">• Preserva documentos antiguos</text>

      <rect x="405" y="160" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="490" y="182" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Homilías</text>
      <text x="420" y="200" fill="#000000">• 2 Clemente (c. 150)</text>
      <text x="420" y="218" fill="#000000">• Predicación expositiva</text>
      <text x="420" y="236" fill="#000000">• Primera homilía conservada</text>

      <rect x="100" y="275" width="400" height="55" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="296" text-anchor="middle" fill="#000000" font-weight="bold">Los escritos patrísticos no son Escritura, pero son testigos de cómo la iglesia primitiva la entendía.</text>
      <text x="300" y="316" text-anchor="middle" fill="#000000" font-size="11">Deben leerse con discernimiento, evaluándolos siempre por la Biblia.</text>

      <rect x="100" y="345" width="400" height="40" rx="4" fill="#AF8C1E" opacity="0.15" stroke="#AF8C1E" stroke-width="1"/>
      <text x="300" y="360" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">La literatura patrística es el eslabón entre el Nuevo Testamento y la teología posterior.</text>
      <text x="300" y="376" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">Sin ella, no tendríamos el canon del NT ni los credos históricos.</text>
    </g>
  </svg>`;
}

export function svgCaracterGeneral() {
  return `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Carácter General del Período Patrístico</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="30" y="50" width="260" height="145" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="160" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Transiciones Históricas</text>
      <text x="50" y="92" fill="#000000">1. Secta judía → Iglesia gentil</text>
      <text x="50" y="112" fill="#000000">2. Fe perseguida → Religión legalizada</text>
      <text x="50" y="132" fill="#000000">3. Tradición oral → Escritos definidos</text>
      <text x="50" y="152" fill="#000000">4. Diversidad local → Unidad imperial</text>
      <text x="50" y="172" fill="#000000">5. Carismas → Oficios eclesiásticos</text>

      <rect x="310" y="50" width="260" height="145" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="440" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Tensiones Teológicas</text>
      <text x="330" y="92" fill="#000000">1. Escritura vs. Tradición</text>
      <text x="330" y="112" fill="#000000">2. Gracia vs. Libre albedrío</text>
      <text x="330" y="132" fill="#000000">3. Fe vs. Obras</text>
      <text x="330" y="152" fill="#000000">4. Iglesia visible vs. Invisible</text>
      <text x="330" y="172" fill="#000000">5. Autoridad local vs. Central</text>

      <rect x="30" y="215" width="260" height="145" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="160" y="237" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Escuelas Teológicas</text>
      <text x="50" y="257" fill="#AF8C1E" font-weight="bold">Alejandrina</text>
      <text x="50" y="277" fill="#000000">• Interpretación alegórica</text>
      <text x="50" y="297" fill="#000000">• Énfasis en la deidad de Cristo</text>
      <text x="50" y="317" fill="#000000">• Clemente, Orígenes, Atanasio</text>
      <text x="50" y="342" fill="#AF8C1E" font-weight="bold">Antiochena</text>
      <text x="50" y="355" fill="#000000">• Interpretación literal</text>
      <text x="160" y="277" fill="#000000">• Énfasis en la humanidad de Cristo</text>
      <text x="160" y="342" fill="#000000">• Crisóstomo, Teodoro, Diodoro</text>

      <rect x="310" y="215" width="260" height="145" rx="8" fill="none" stroke="#000000" stroke-width="1.5"/>
      <text x="440" y="237" text-anchor="middle" fill="#000000" font-weight="bold">Logros Duraderos</text>
      <text x="330" y="257" fill="#000000">• Canon del Nuevo Testamento</text>
      <text x="330" y="277" fill="#000000">• Credo Niceno (325)</text>
      <text x="330" y="297" fill="#000000">• Credo de Calcedonia (451)</text>
      <text x="330" y="317" fill="#000000">• Liturgia cristiana básica</text>
      <text x="330" y="337" fill="#000000">• Principio de sola Scriptura</text>
      <text x="330" y="352" fill="#000000">• Teología trinitaria</text>

      <rect x="200" y="375" width="200" height="20" rx="4" fill="#AF8C1E" opacity="0.15"/>
      <text x="300" y="389" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">La Patrística: cimientos de la fe cristiana</text>
    </g>
  </svg>`;
}

export function svgSignificadoDoctrinal() {
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="420" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Doctrinas Centrales en la Patrística</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="30" y="50" width="170" height="145" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="115" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Trinidad</text>
      <text x="50" y="92" fill="#000000">• Tertuliano: "una sustancia, tres personas"</text>
      <text x="50" y="112" fill="#000000">• Atanasio: homousios</text>
      <text x="50" y="132" fill="#000000">• Capadocios: tres hipóstasis</text>
      <text x="50" y="152" fill="#000000">• Nicea (325): Contra Arrio</text>
      <text x="50" y="175" fill="#000000">• Padre, Hijo, Espíritu = un Dios</text>

      <rect x="215" y="50" width="170" height="145" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Cristología</text>
      <text x="235" y="92" fill="#000000">• Verdadero Dios y verdadero hombre</text>
      <text x="235" y="112" fill="#000000">• Contra docetismo</text>
      <text x="235" y="132" fill="#000000">• Contra arrianismo</text>
      <text x="235" y="152" fill="#000000">• Contra apolinarismo</text>
      <text x="235" y="175" fill="#000000">• Calcedonia (451): dos naturalezas</text>

      <rect x="400" y="50" width="170" height="145" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="485" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Soteriología</text>
      <text x="420" y="92" fill="#000000">• Ireneo: recapitulación</text>
      <text x="420" y="112" fill="#000000">• Agustín: gracia vs. Pelagio</text>
      <text x="420" y="132" fill="#000000">• Salvación por gracia</text>
      <text x="420" y="152" fill="#000000">• Fe y obras (tensión)</text>
      <text x="420" y="175" fill="#000000">• Expiación vicaria</text>

      <rect x="30" y="215" width="170" height="100" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="115" y="237" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Escrituras</text>
      <text x="50" y="257" fill="#000000">• Inspiración divina</text>
      <text x="50" y="277" fill="#000000">• Canon del NT (Atanasio 367)</text>
      <text x="50" y="297" fill="#000000">• Autoridad suprema (en teoría)</text>

      <rect x="215" y="215" width="170" height="100" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="237" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Iglesia</text>
      <text x="235" y="257" fill="#000000">• Cuerpo de Cristo</text>
      <text x="235" y="277" fill="#000000">• Unidad y catolicidad</text>
      <text x="235" y="297" fill="#000000">• Sacramento del bautismo y Cena</text>

      <rect x="400" y="215" width="170" height="100" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="485" y="237" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Escatología</text>
      <text x="420" y="257" fill="#000000">• Resurrección corporal</text>
      <text x="420" y="277" fill="#000000">• Premilenialismo temprano</text>
      <text x="420" y="297" fill="#000000">• Amilenialismo (Agustín)</text>

      <rect x="100" y="340" width="400" height="65" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="360" text-anchor="middle" fill="#000000" font-weight="bold">Las definiciones doctrinales de la Patrística son presupuestas tanto por católicos como por protestantes.</text>
      <text x="300" y="380" text-anchor="middle" fill="#000000" font-size="11">La Reforma afirmó la cristología y trinitología patrística mientras corregía la soteriología.</text>
      <text x="300" y="395" text-anchor="middle" fill="#000000" font-size="11">Agustín es el padre teológico de la Reforma.</text>

      <rect x="200" y="410" width="200" height="20" rx="4" fill="#AF8C1E" opacity="0.15"/>
      <text x="300" y="424" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">Doctrina bíblica definida por la iglesia</text>
    </g>
  </svg>`;
}

export function svgGobiernoEclesiastico() {
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="420" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Evolución del Gobierno Eclesiástico en la Patrística</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="30" y="50" width="250" height="100" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="155" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Modelo del Nuevo Testamento</text>
      <text x="50" y="92" fill="#000000">• Ancianos (presbíteros) = Obispos (epíscopos)</text>
      <text x="50" y="112" fill="#000000">• Gobierno plural en cada iglesia</text>
      <text x="50" y="132" fill="#000000">• Elegidos por la congregación</text>
      <text x="50" y="145" fill="#000000">• Apóstoles: autoridad supra-local temporal</text>

      <rect x="320" y="50" width="250" height="100" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="445" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Padres Apostólicos (95–160 d.C.)</text>
      <text x="340" y="92" fill="#000000">• Clemente: presbíteros y obispos</text>
      <text x="340" y="112" fill="#000000">• Didaché: profetas + obispos locales</text>
      <text x="340" y="132" fill="#000000">• Ignacio: obispo monárquico incipiente</text>

      <line x1="155" y1="150" x2="445" y2="150" stroke="#D2D2D2" stroke-width="1.5"/>
      <polygon points="440,146 450,150 440,154" fill="#D2D2D2"/>

      <rect x="30" y="170" width="250" height="95" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="155" y="192" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Siglo II–III</text>
      <text x="50" y="212" fill="#000000">• Ireneo: sucesión apostólica</text>
      <text x="50" y="232" fill="#000000">• Cipriano: obispo = unidad</text>
      <text x="50" y="252" fill="#000000">• Obispo monárquico se generaliza</text>

      <rect x="320" y="170" width="250" height="95" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="445" y="192" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Siglo IV–V</text>
      <text x="340" y="212" fill="#000000">• Nicea (325): metropolitanos</text>
      <text x="340" y="232" fill="#000000">• Jerarquía de patriarcas</text>
      <text x="340" y="252" fill="#000000">• Roma busca primacía</text>

      <line x1="155" y1="265" x2="445" y2="265" stroke="#D2D2D2" stroke-width="1.5"/>
      <polygon points="440,261 450,265 440,269" fill="#D2D2D2"/>

      <rect x="100" y="285" width="400" height="60" rx="8" fill="none" stroke="#000000" stroke-width="1.5"/>
      <text x="300" y="307" text-anchor="middle" fill="#000000" font-weight="bold">Desarrollo: Ancianos plurales → Obispo monárquico → Jerarquía metropolitana</text>
      <text x="300" y="327" text-anchor="middle" fill="#000000" font-size="11">Este desarrollo fue una adaptación a las estructuras políticas del Imperio, no un mandato bíblico.</text>

      <rect x="100" y="360" width="400" height="45" rx="8" fill="#AF8C1E" opacity="0.15" stroke="#AF8C1E" stroke-width="1"/>
      <text x="300" y="380" text-anchor="middle" fill="#AF8C1E" font-size="12" font-weight="bold">La Reforma restauró el modelo bíblico: ancianos plurales, congregaciones autónomas.</text>
      <text x="300" y="396" text-anchor="middle" fill="#AF8C1E" font-size="11">"Uno es vuestro Maestro, y todos vosotros sois hermanos" (Mateo 23:8)</text>
    </g>
  </svg>`;
}

// --- Teología Histórica diagrams ---

export function svgProlegomenosTH() {
  return `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">La Teología Histórica y las Disciplinas Teológicas</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="200" y="55" width="200" height="45" rx="8" fill="none" stroke="#AF8C1E" stroke-width="2"/>
      <text x="300" y="82" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="14">Teología Histórica</text>
      <line x1="300" y1="100" x2="300" y2="120" stroke="#D2D2D2" stroke-width="2"/>
      <polygon points="294,118 300,128 306,118" fill="#D2D2D2"/>
      <text x="300" y="145" text-anchor="middle" fill="#000000" font-size="11">Estudia el desarrollo de la doctrina</text>
      <text x="300" y="162" text-anchor="middle" fill="#000000" font-size="11">a través de la historia de la iglesia</text>
      <rect x="30" y="190" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="115" y="212" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Exégesis Bíblica</text>
      <text x="45" y="232" fill="#000000">• Qué dice el texto bíblico</text>
      <text x="45" y="250" fill="#000000">• En su contexto original</text>
      <text x="45" y="268" fill="#000000">• Idiomas originales</text>
      <rect x="215" y="190" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="212" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Teología Sistemática</text>
      <text x="230" y="232" fill="#000000">• Organiza la doctrina</text>
      <text x="230" y="250" fill="#000000">• Relaciona temas</text>
      <text x="230" y="268" fill="#000000">• Formula confesionalmente</text>
      <rect x="400" y="190" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="485" y="212" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Teología Práctica</text>
      <text x="415" y="232" fill="#000000">• Predicación</text>
      <text x="415" y="250" fill="#000000">• Discipulado</text>
      <text x="415" y="268" fill="#000000">• Consejería</text>
      <line x1="200" y1="235" x2="215" y2="235" stroke="#D2D2D2" stroke-width="1.5"/>
      <line x1="385" y1="235" x2="400" y2="235" stroke="#D2D2D2" stroke-width="1.5"/>
      <text x="110" y="235" text-anchor="middle" fill="#D2D2D2" font-size="15">⟷</text>
      <text x="490" y="235" text-anchor="middle" fill="#D2D2D2" font-size="15">⟷</text>
      <rect x="80" y="305" width="440" height="75" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="328" text-anchor="middle" fill="#000000" font-weight="bold" font-size="13">La Teología Histórica conecta las tres disciplinas</text>
      <text x="300" y="348" text-anchor="middle" fill="#000000" font-size="11">Muestra cómo la iglesia ha entendido la Escritura (exégesis),</text>
      <text x="300" y="365" text-anchor="middle" fill="#000000" font-size="11">formulado su enseñanza (sistemática) y aplicado la verdad (práctica)</text>
    </g>
  </svg>`;
}

export function svgIglesiaPrimitivaTH() {
  return `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Línea de Tiempo de la Iglesia Primitiva (30–100 d.C.)</text>
    <g font-family="sans-serif" font-size="12">
      <line x1="60" y1="85" x2="540" y2="85" stroke="#AF8C1E" stroke-width="2"/>
      <circle cx="80" cy="85" r="6" fill="#AF8C1E"/>
      <text x="80" y="68" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="10">30</text>
      <text x="80" y="108" text-anchor="middle" fill="#000000" font-size="10">Pentecostés</text>
      <circle cx="155" cy="85" r="5" fill="#D2D2D2"/>
      <text x="155" y="68" text-anchor="middle" fill="#D2D2D2" font-weight="bold" font-size="10">44</text>
      <text x="155" y="108" text-anchor="middle" fill="#000000" font-size="10">Santiago mártir</text>
      <circle cx="230" cy="85" r="5" fill="#D2D2D2"/>
      <text x="230" y="68" text-anchor="middle" fill="#D2D2D2" font-weight="bold" font-size="10">49</text>
      <text x="230" y="108" text-anchor="middle" fill="#000000" font-size="10">Concilio Jerusalén</text>
      <circle cx="310" cy="85" r="6" fill="#AF8C1E"/>
      <text x="310" y="68" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="10">64</text>
      <text x="310" y="108" text-anchor="middle" fill="#000000" font-size="10">Pedro y Pablo mártires</text>
      <circle cx="390" cy="85" r="5" fill="#D2D2D2"/>
      <text x="390" y="68" text-anchor="middle" fill="#D2D2D2" font-weight="bold" font-size="10">70</text>
      <text x="390" y="108" text-anchor="middle" fill="#000000" font-size="10">Caída de Jerusalén</text>
      <circle cx="470" cy="85" r="5" fill="#D2D2D2"/>
      <text x="470" y="68" text-anchor="middle" fill="#D2D2D2" font-weight="bold" font-size="10">95</text>
      <text x="470" y="108" text-anchor="middle" fill="#000000" font-size="10">Juan en Patmos</text>
      <circle cx="520" cy="85" r="5" fill="#D2D2D2"/>
      <text x="520" y="68" text-anchor="middle" fill="#D2D2D2" font-weight="bold" font-size="10">100</text>
      <text x="520" y="108" text-anchor="middle" fill="#000000" font-size="10">Muere Juan</text>
      <rect x="50" y="140" width="240" height="110" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="170" y="162" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Fundamentos Apostólicos</text>
      <text x="65" y="182" fill="#000000">• Predicación del evangelio</text>
      <text x="65" y="200" fill="#000000">• Bautismo y Cena del Señor</text>
      <text x="65" y="218" fill="#000000">• Ancianos y diáconos</text>
      <text x="65" y="236" fill="#000000">• Cartas apostólicas</text>
      <rect x="310" y="140" width="240" height="110" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="430" y="162" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Desafíos Tempranos</text>
      <text x="325" y="182" fill="#000000">• Judaizantes (Gálatas)</text>
      <text x="325" y="200" fill="#000000">• Gnosticismo incipiente</text>
      <text x="325" y="218" fill="#000000">• Persecución romana</text>
      <text x="325" y="236" fill="#000000">• Divisiones internas</text>
      <rect x="100" y="275" width="400" height="55" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="296" text-anchor="middle" fill="#000000" font-weight="bold" font-size="13">Expansión: Jerusalén → Judea → Samaria → Antioquía → Asia → Roma</text>
      <text x="300" y="316" text-anchor="middle" fill="#000000" font-size="11">"Me seréis testigos en Jerusalén, en toda Judea y Samaria, y hasta lo último de la tierra" (Hechos 1:8)</text>
      <rect x="100" y="345" width="400" height="40" rx="4" fill="#AF8C1E" opacity="0.15" stroke="#AF8C1E" stroke-width="1"/>
      <text x="300" y="360" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">La iglesia primitiva estableció el patrón de doctrina y vida para todas las generaciones</text>
      <text x="300" y="376" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">Su ejemplo: fidelidad al evangelio, amor fraternal, misión al mundo</text>
    </g>
  </svg>`;
}

export function svgCanonTH() {
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="420" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Formación del Canon del Nuevo Testamento</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="30" y="50" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="115" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Escritos Apostólicos</text>
      <text x="45" y="92" fill="#000000">• Cartas de Pablo (50–67)</text>
      <text x="45" y="110" fill="#000000">• Evangelios (65–95)</text>
      <text x="45" y="128" fill="#000000">• Escritos de Juan (90–95)</text>
      <polygon points="200,95 210,90 200,85" fill="#D2D2D2"/>
      <rect x="215" y="50" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Reconocimiento Temprano</text>
      <text x="230" y="92" fill="#000000">• Pedro reconoce a Pablo (2 Pe 3:16)</text>
      <text x="230" y="110" fill="#000000">• Uso en iglesias locales</text>
      <text x="230" y="128" fill="#000000">• Lectura litúrgica</text>
      <polygon points="385,95 395,90 385,85" fill="#D2D2D2"/>
      <rect x="400" y="50" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="485" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Respuesta a Herejías</text>
      <text x="415" y="92" fill="#000000">• Marción (140): canon limitado</text>
      <text x="415" y="110" fill="#000000">• Ireneo: 4 evangelios</text>
      <text x="415" y="128" fill="#000000">• Canon Muratoriano (170)</text>
      <rect x="30" y="160" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="115" y="182" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Listas Canónicas</text>
      <text x="45" y="202" fill="#000000">• Orígenes (c. 240)</text>
      <text x="45" y="220" fill="#000000">• Eusebio (c. 324)</text>
      <text x="45" y="238" fill="#000000">• Atanasio 39 (367) — 27 libros</text>
      <polygon points="200,205 210,200 200,195" fill="#D2D2D2"/>
      <rect x="215" y="160" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="182" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Concilios</text>
      <text x="230" y="202" fill="#000000">• Hipona (393)</text>
      <text x="230" y="220" fill="#000000">• Cartago (397)</text>
      <text x="230" y="238" fill="#000000">• Ratifican 27 libros</text>
      <polygon points="385,205 395,200 385,195" fill="#D2D2D2"/>
      <rect x="400" y="160" width="170" height="90" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="485" y="182" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Canon Cerrado</text>
      <text x="415" y="202" fill="#000000">• 27 libros reconocidos</text>
      <text x="415" y="220" fill="#000000">• No hay nueva revelación</text>
      <text x="415" y="238" fill="#000000">• Escritura = única autoridad</text>
      <rect x="100" y="275" width="400" height="60" rx="8" fill="none" stroke="#000000" stroke-width="1.5"/>
      <text x="300" y="297" text-anchor="middle" fill="#000000" font-weight="bold" font-size="13">Criterios de Canonicidad</text>
      <text x="120" y="318" fill="#000000">Autoría apostólica</text>
      <text x="260" y="318" fill="#000000">Contenido doctrinal</text>
      <text x="400" y="318" fill="#000000">Uso universal</text>
      <rect x="100" y="355" width="400" height="50" rx="8" fill="none" stroke="#D2D2D2" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="375" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="12">La iglesia no creó el canon — lo reconoció bajo la guía del Espíritu Santo</text>
      <text x="300" y="393" text-anchor="middle" fill="#000000" font-size="11">"Toda la Escritura es inspirada por Dios" (2 Timoteo 3:16)</text>
    </g>
  </svg>`;
}

export function svgTrinidadTH() {
  return `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">El Desarrollo de la Doctrina Trinitaria</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="25" y="50" width="260" height="130" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="155" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="14">Base Bíblica</text>
      <line x1="40" y1="80" x2="270" y2="80" stroke="#D2D2D2" stroke-width="1"/>
      <text x="40" y="100" fill="#000000">• Monoteísmo: "Jehová uno es" (Dt 6:4)</text>
      <text x="40" y="118" fill="#000000">• Deidad del Hijo: Juan 1:1; 20:28</text>
      <text x="40" y="136" fill="#000000">• Deidad del Espíritu: Hechos 5:3-4</text>
      <text x="40" y="154" fill="#000000">• Fórmula trinitaria: Mateo 28:19</text>
      <rect x="315" y="50" width="260" height="130" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="445" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="14">Herejías</text>
      <line x1="330" y1="80" x2="560" y2="80" stroke="#D2D2D2" stroke-width="1"/>
      <text x="330" y="100" fill="#000000">• Modalismo (Sabelio): modos, no personas</text>
      <text x="330" y="118" fill="#000000">• Arrianismo (Arrio): Hijo = criatura</text>
      <text x="330" y="136" fill="#000000">• Subordinacionismo: inferior en esencia</text>
      <text x="330" y="154" fill="#000000">• Macedonismo: Espíritu = criatura</text>
      <line x1="155" y1="180" x2="445" y2="180" stroke="#D2D2D2" stroke-width="1.5"/>
      <polygon points="440,176 450,180 440,184" fill="#D2D2D2"/>
      <rect x="80" y="195" width="440" height="45" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="215" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="14">Formulación Ortodoxa</text>
      <text x="300" y="232" text-anchor="middle" fill="#000000" font-size="11">Tertuliano → Nicea (325) → Capadocios → Constantinopla (381)</text>
      <rect x="80" y="260" width="200" height="55" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="180" y="282" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="12">Unidad de Esencia</text>
      <text x="180" y="300" text-anchor="middle" fill="#000000" font-size="11">Un solo Dios (ousia)</text>
      <rect x="320" y="260" width="200" height="55" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="420" y="282" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="12">Tres Personas</text>
      <text x="420" y="300" text-anchor="middle" fill="#000000" font-size="11">Padre, Hijo, Espíritu (hypostasis)</text>
      <rect x="120" y="335" width="360" height="50" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="352" text-anchor="middle" fill="#000000" font-weight="bold" font-size="12">"Lo que el Padre es, eso es el Hijo, y eso el Espíritu Santo"</text>
      <text x="300" y="370" text-anchor="middle" fill="#000000" font-size="11">Confesión 1689, Cap. 2 — Afirma la Trinidad en los términos de Nicea y Constantinopla</text>
    </g>
  </svg>`;
}

export function svgCristologiaTH() {
  return `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Concilios Cristológicos y Definiciones</text>
    <g font-family="sans-serif" font-size="11">
      <line x1="60" y1="75" x2="540" y2="75" stroke="#D2D2D2" stroke-width="2"/>
      <polygon points="112,75 120,68 128,75" fill="#AF8C1E"/>
      <rect x="75" y="50" width="90" height="22" rx="4" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="120" y="64" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="10">Nicea 325</text>
      <text x="120" y="105" text-anchor="middle" fill="#000000" font-size="9">Deidad de Cristo</text>
      <text x="120" y="117" text-anchor="middle" fill="#000000" font-size="9">Homousios</text>
      <polygon points="245,75 253,68 261,75" fill="#AF8C1E"/>
      <rect x="208" y="50" width="90" height="22" rx="4" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="253" y="64" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="10">Constantinopla 381</text>
      <text x="253" y="105" text-anchor="middle" fill="#000000" font-size="9">Deidad del Espíritu</text>
      <polygon points="365,75 373,68 381,75" fill="#AF8C1E"/>
      <rect x="328" y="50" width="90" height="22" rx="4" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="373" y="64" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="10">Éfeso 431</text>
      <text x="373" y="105" text-anchor="middle" fill="#000000" font-size="9">Theotokos</text>
      <polygon points="485,75 493,68 501,75" fill="#AF8C1E"/>
      <rect x="448" y="50" width="90" height="22" rx="4" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="493" y="64" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="10">Calcedonia 451</text>
      <text x="493" y="105" text-anchor="middle" fill="#000000" font-size="9">Dos naturalezas</text>
      <rect x="25" y="135" width="260" height="105" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="155" y="157" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Herejías Cristológicas</text>
      <text x="40" y="177" fill="#000000">• Docetismo: solo apariencia humana</text>
      <text x="40" y="195" fill="#000000">• Apolinarismo: sin mente humana</text>
      <text x="40" y="213" fill="#000000">• Nestorianismo: dos personas separadas</text>
      <text x="40" y="228" fill="#000000">• Eutiquianismo: naturalezas mezcladas</text>
      <rect x="305" y="135" width="270" height="105" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="440" y="157" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Definición de Calcedonia</text>
      <text x="320" y="177" fill="#000000">Una persona, dos naturalezas:</text>
      <text x="320" y="195" fill="#000000">• Sin confusión (no mezcladas)</text>
      <text x="320" y="213" fill="#000000">• Sin cambio (cada naturaleza intacta)</text>
      <text x="320" y="228" fill="#000000">• Sin división (una persona)</text>
      <text x="320" y="240" fill="#000000">• Sin separación (unidos para siempre)</text>
      <rect x="100" y="260" width="400" height="55" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="280" text-anchor="middle" fill="#000000" font-weight="bold" font-size="12">Verdadero Dios + Verdadero Hombre = Un Solo Cristo</text>
      <text x="300" y="298" text-anchor="middle" fill="#000000" font-size="11">"Dos naturalezas enteras, perfectas y distintas" — Confesión 1689, Cap. 8</text>
      <rect x="100" y="335" width="400" height="50" rx="8" fill="#AF8C1E" opacity="0.15" stroke="#AF8C1E" stroke-width="1"/>
      <text x="300" y="355" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="12">La cristología ortodoxa es necesaria para la salvación</text>
      <text x="300" y="373" text-anchor="middle" fill="#000000" font-size="10">Solo un Salvador que es Dios-hombre puede mediar entre Dios y los hombres</text>
    </g>
  </svg>`;
}

export function svgGraciaTH() {
  return `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">Pelagianismo vs. Agustinianismo</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="25" y="55" width="270" height="150" rx="8" fill="none" stroke="#D2D2D2" stroke-width="1.5"/>
      <text x="160" y="78" text-anchor="middle" fill="#D2D2D2" font-weight="bold" font-size="14">Pelagio (c. 354–418)</text>
      <line x1="40" y1="86" x2="280" y2="86" stroke="#D2D2D2" stroke-width="1"/>
      <text x="40" y="106" fill="#000000">• No hay pecado original</text>
      <text x="40" y="124" fill="#000000">• Libre albedrío suficiente</text>
      <text x="40" y="142" fill="#000000">• Gracia = ayuda externa</text>
      <text x="40" y="160" fill="#000000">• Salvación por esfuerzo moral</text>
      <text x="40" y="178" fill="#000000">• "Si debo, puedo"</text>
      <rect x="305" y="55" width="270" height="150" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="440" y="78" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="14">Agustín (354–430)</text>
      <line x1="320" y1="86" x2="560" y2="86" stroke="#AF8C1E" stroke-width="1"/>
      <text x="320" y="106" fill="#000000">• Pecado original universal</text>
      <text x="320" y="124" fill="#000000">• Voluntad esclavizada al pecado</text>
      <text x="320" y="142" fill="#000000">• Gracia = poder transformador</text>
      <text x="320" y="160" fill="#000000">• Salvación por gracia soberana</text>
      <text x="320" y="178" fill="#000000">• "La gracia es necesaria para todo"</text>
      <line x1="160" y1="205" x2="440" y2="205" stroke="#D2D2D2" stroke-width="1.5"/>
      <text x="300" y="218" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">El Concilio de Cartago (418) condenó a Pelagio</text>
      <rect x="60" y="235" width="220" height="70" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="170" y="257" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="12">Semipelagianismo (c. 430)</text>
      <text x="75" y="277" fill="#000000" font-size="11">"El hombre inicia la fe,</text>
      <text x="75" y="293" fill="#000000" font-size="11">Dios la completa"</text>
      <rect x="320" y="235" width="220" height="70" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="430" y="257" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="12">Concilio de Orange (529)</text>
      <text x="335" y="277" fill="#000000" font-size="11">"La gracia es necesaria</text>
      <text x="335" y="293" fill="#000000" font-size="11">para el inicio de la fe"</text>
      <rect x="80" y="325" width="440" height="60" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="346" text-anchor="middle" fill="#000000" font-weight="bold" font-size="13">La Reforma recuperó a Agustín contra el pelagianismo</text>
      <text x="300" y="364" text-anchor="middle" fill="#000000" font-size="11">Lutero: "La voluntad esclavizada" | Calvino: Institución de la religión cristiana</text>
      <text x="300" y="378" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">Confesión 1689: capítulos 6, 9, 10, 17 — totalmente agustinianos</text>
    </g>
  </svg>`;
}

export function svgEdadMediaTH() {
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="420" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">La Edad Media: Corrupción y Preservación</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="25" y="50" width="270" height="135" rx="8" fill="none" stroke="#D2D2D2" stroke-width="1.5"/>
      <text x="160" y="72" text-anchor="middle" fill="#D2D2D2" font-weight="bold" font-size="14">Corrupción Doctrinal</text>
      <line x1="40" y1="80" x2="280" y2="80" stroke="#D2D2D2" stroke-width="1"/>
      <text x="40" y="100" fill="#000000">• Supremacía papal</text>
      <text x="40" y="118" fill="#000000">• Transubstanciación</text>
      <text x="40" y="136" fill="#000000">• Misa como sacrificio</text>
      <text x="40" y="154" fill="#000000">• Indulgencias</text>
      <text x="40" y="172" fill="#000000">• Siete sacramentos</text>
      <rect x="305" y="50" width="270" height="135" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="440" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="14">Preservación de la Verdad</text>
      <line x1="320" y1="80" x2="560" y2="80" stroke="#AF8C1E" stroke-width="1"/>
      <text x="320" y="100" fill="#000000">• Valdenses (c. 1170)</text>
      <text x="320" y="118" fill="#000000">• Wycliffe (1324–1384)</text>
      <text x="320" y="136" fill="#000000">• Lolardos</text>
      <text x="320" y="154" fill="#000000">• Juan Hus (1372–1415)</text>
      <text x="320" y="172" fill="#000000">• Husitas</text>
      <line x1="160" y1="185" x2="440" y2="185" stroke="#D2D2D2" stroke-width="1.5"/>
      <rect x="60" y="200" width="200" height="80" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="160" y="222" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="12">Preparación Providencial</text>
      <text x="75" y="242" fill="#000000">• Imprenta (Gutenberg, 1455)</text>
      <text x="75" y="260" fill="#000000">• Caída de Constantinopla (1453)</text>
      <text x="75" y="278" fill="#000000">• Renacimiento</text>
      <rect x="340" y="200" width="200" height="80" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="440" y="222" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="12">Lo que Preservaron</text>
      <text x="355" y="242" fill="#000000">• Biblia en lengua vernácula</text>
      <text x="355" y="260" fill="#000000">• Autoridad de la Escritura</text>
      <text x="355" y="278" fill="#000000">• Evangelio de la gracia</text>
      <rect x="100" y="305" width="400" height="50" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="325" text-anchor="middle" fill="#000000" font-weight="bold" font-size="13">Dios nunca dejó a su pueblo sin testimonio</text>
      <text x="300" y="342" text-anchor="middle" fill="#000000" font-size="11">"Edificaré mi iglesia, y las puertas del Hades no prevalecerán contra ella" (Mateo 16:18)</text>
      <rect x="100" y="370" width="400" height="40" rx="4" fill="#AF8C1E" opacity="0.15" stroke="#AF8C1E" stroke-width="1"/>
      <text x="300" y="386" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">Los valdenses, wyclifitas y husitas fueron la "Reforma antes de la Reforma"</text>
      <text x="300" y="402" text-anchor="middle" fill="#AF8C1E" font-size="11" font-weight="bold">Su sangre fue semilla de la Reforma del siglo XVI</text>
    </g>
  </svg>`;
}

export function svgReformaTH() {
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="420" fill="#FFFFFF" rx="12"/>
    <text x="300" y="30" text-anchor="middle" fill="#AF8C1E" font-family="serif" font-size="18" font-weight="bold">La Reforma Protestante y las 5 Solas</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="30" y="50" width="170" height="100" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="115" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Lutero</text>
      <text x="45" y="92" fill="#000000">• 95 Tesis (1517)</text>
      <text x="45" y="110" fill="#000000">• Justificación por fe</text>
      <text x="45" y="128" fill="#000000">• Biblia en alemán</text>
      <text x="45" y="143" fill="#000000">• Worms (1521)</text>
      <polygon points="200,100 210,95 200,90" fill="#D2D2D2"/>
      <rect x="215" y="50" width="170" height="100" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5"/>
      <text x="300" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Calvino</text>
      <text x="230" y="92" fill="#000000">• Institutos (1536)</text>
      <text x="230" y="110" fill="#000000">• Gracia soberana</text>
      <text x="230" y="128" fill="#000000">• Ginebra</text>
      <text x="230" y="143" fill="#000000">• Teología del pacto</text>
      <polygon points="385,100 395,95 385,90" fill="#D2D2D2"/>
      <rect x="400" y="50" width="170" height="100" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="485" y="72" text-anchor="middle" fill="#AF8C1E" font-weight="bold">Reforma Radical</text>
      <text x="415" y="92" fill="#000000">• Bautismo creyente</text>
      <text x="415" y="110" fill="#000000">• Separación iglesia-estado</text>
      <text x="415" y="128" fill="#000000">• Autonomía local</text>
      <text x="415" y="143" fill="#000000">• Libertad conciencia</text>
      <rect x="35" y="175" width="530" height="90" rx="8" fill="none" stroke="#000000" stroke-width="1.5"/>
      <text x="300" y="197" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="15">Las 5 Solas de la Reforma</text>
      <text x="50" y="220" fill="#AF8C1E" font-weight="bold">Sola Scriptura</text>
      <text x="50" y="238" fill="#000000" font-size="11">La Biblia, única autoridad</text>
      <text x="158" y="220" fill="#AF8C1E" font-weight="bold">Sola Fide</text>
      <text x="158" y="238" fill="#000000" font-size="11">Justificación solo por fe</text>
      <text x="266" y="220" fill="#AF8C1E" font-weight="bold">Sola Gratia</text>
      <text x="266" y="238" fill="#000000" font-size="11">Salvación por pura gracia</text>
      <text x="374" y="220" fill="#AF8C1E" font-weight="bold">Solo Christus</text>
      <text x="374" y="238" fill="#000000" font-size="11">Cristo, único mediador</text>
      <text x="482" y="220" fill="#AF8C1E" font-weight="bold">Soli Deo Gloria</text>
      <text x="482" y="238" fill="#000000" font-size="11">Gloria solo a Dios</text>
      <rect x="60" y="280" width="480" height="60" rx="8" fill="none" stroke="#AF8C1E" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="300" y="302" text-anchor="middle" fill="#AF8C1E" font-weight="bold" font-size="13">Herencia Bautista Reformada</text>
      <text x="300" y="322" text-anchor="middle" fill="#000000" font-size="11">Teología reformada (Calvino) + Eclesiología bautista (Anabautistas)</text>
      <rect x="80" y="355" width="440" height="50" rx="8" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="300" y="375" text-anchor="middle" fill="#000000" font-weight="bold" font-size="13">La Reforma restauró el evangelio bíblico después de siglos de oscuridad</text>
      <text x="300" y="393" text-anchor="middle" fill="#000000" font-size="11">"Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo" (Romanos 5:1)</text>
    </g>
  </svg>`;
}

function svgHermeneuticaIntro() {
  return `<svg viewBox="0 0 540 380" xmlns="http://www.w3.org/2000/svg">
    <rect width="540" height="380" fill="${C}" rx="12"/>
    <text x="270" y="35" text-anchor="middle" fill="${G}" font-family="serif" font-size="18" font-weight="bold">La Biblia: La Palabra Inspirada por Dios</text>
    <g font-family="sans-serif" font-size="13">
      <rect x="40" y="60" width="460" height="55" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="60" y="82" fill="${G}" font-weight="bold">Dios habl\u00f3 por autores humanos</text>
      <text x="60" y="102" fill="${T2}" font-size="12">En un tiempo real, a personas reales, en contextos reales.</text>

      <rect x="40" y="130" width="460" height="55" rx="8" fill="none" stroke="#E53E3E" stroke-width="1.5"/>
      <text x="60" y="152" fill="#E53E3E" font-weight="bold">No podemos aislar vers\u00edculos de su contexto</text>
      <text x="60" y="172" fill="${T2}" font-size="12">Un pasaje sin su contexto pierde el significado original.</text>

      <rect x="40" y="200" width="460" height="55" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="60" y="222" fill="${G}" font-weight="bold">Debemos estudiar el contexto completo</text>
      <text x="60" y="242" fill="${T2}" font-size="12">Contexto hist\u00f3rico, cultural, literario y teol\u00f3gico.</text>

      <rect x="40" y="270" width="460" height="55" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="60" y="292" fill="${G}" font-weight="bold">As\u00ed entendemos el mensaje fielmente</text>
      <text x="60" y="312" fill="${T2}" font-size="12">La meta es conocer a Dios y ser transformados por su verdad.</text>

      <text x="270" y="352" text-anchor="middle" fill="${T3}" font-size="11" font-style="italic">"Un texto fuera de contexto se convierte en un pretexto"</text>
    </g>
  </svg>`;
}

function svgHermeneuticaContexto() {
  return `<svg viewBox="0 0 540 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="540" height="420" fill="${C}" rx="12"/>
    <text x="270" y="35" text-anchor="middle" fill="${G}" font-family="serif" font-size="18" font-weight="bold">Los 5 Niveles del Contexto</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="40" y="55" width="460" height="45" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="60" y="73" fill="${G}" font-weight="bold">1. Contexto inmediato</text>
      <text x="60" y="90" fill="${T2}">Lo que est\u00e1 antes y despu\u00e9s del vers\u00edculo (lee todo el cap\u00edtulo)</text>

      <rect x="40" y="110" width="460" height="45" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="60" y="128" fill="${G}" font-weight="bold">2. Contexto del libro</text>
      <text x="60" y="145" fill="${T2}">\u00bfA qui\u00e9n se escribi\u00f3? \u00bfPor qu\u00e9? \u00bfQu\u00e9 problema aborda?</text>

      <rect x="40" y="165" width="460" height="45" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="60" y="183" fill="${G}" font-weight="bold">3. Contexto hist\u00f3rico</text>
      <text x="60" y="200" fill="${T2}">\u00bfQu\u00e9 estaba pasando en el mundo en ese momento?</text>

      <rect x="40" y="220" width="460" height="45" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="60" y="238" fill="${G}" font-weight="bold">4. Contexto cultural</text>
      <text x="60" y="255" fill="${T2}">Costumbres, creencias y pr\u00e1cticas de la \u00e9poca</text>

      <rect x="40" y="275" width="460" height="45" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="60" y="293" fill="${G}" font-weight="bold">5. Contexto de toda la Biblia</text>
      <text x="60" y="310" fill="${T2}">\u00bfC\u00f3mo se relaciona este pasaje con el resto de la Escritura?</text>

      <rect x="80" y="340" width="380" height="50" rx="8" fill="none" stroke="#E53E3E" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="270" y="358" text-anchor="middle" fill="#E53E3E" font-weight="bold">Peligro de ignorar el contexto</text>
      <text x="270" y="375" text-anchor="middle" fill="${T2}" font-size="11">Manipulaci\u00f3n · Falsas doctrinas · Culpa falsa · Promesas falsas · Abuso espiritual</text>
    </g>
  </svg>`;
}

function svgHermeneuticaErrores() {
  return `<svg viewBox="0 0 540 450" xmlns="http://www.w3.org/2000/svg">
    <rect width="540" height="450" fill="${C}" rx="12"/>
    <text x="270" y="35" text-anchor="middle" fill="${G}" font-family="serif" font-size="16" font-weight="bold">C\u00f3mo NO interpretar la Biblia  vs  C\u00f3mo S\u00cd interpretar</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="30" y="55" width="480" height="55" rx="8" fill="none" stroke="#E53E3E" stroke-width="1.5"/>
      <text x="50" y="75" fill="#E53E3E" font-weight="bold">Mala pr\u00e1ctica</text>
      <text x="50" y="95" fill="${T2}">Vers\u00edculo aislado  →  Opini\u00f3n personal  →  Doctrina inventada</text>
      <text x="50" y="105" fill="${T3}" font-size="10">("Yo creo que esto significa...")</text>

      <rect x="30" y="125" width="480" height="55" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="50" y="145" fill="${G}" font-weight="bold">Buena pr\u00e1ctica</text>
      <text x="50" y="165" fill="${T2}">Texto  →  Contexto  →  Autor  →  Audiencia  →  Toda la Biblia  →  Aplicaci\u00f3n</text>
      <text x="50" y="175" fill="${T3}" font-size="10">("\u00bfQu\u00e9 quiso decir el autor a sus lectores originales?")</text>

      <rect x="30" y="200" width="480" height="55" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="50" y="220" fill="${G}" font-weight="bold">Pir\u00e1mide de Interpretaci\u00f3n B\u00edblica</text>
      <text x="270" y="250" text-anchor="middle" fill="${G}" font-weight="bold">Toda la Biblia</text>
      <polygon points="210,260 330,260 340,270 200,270" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="270" y="285" text-anchor="middle" fill="${T}" font-weight="bold">El Libro Completo</text>
      <polygon points="230,295 310,295 320,305 220,305" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="270" y="320" text-anchor="middle" fill="${T}" font-weight="bold">El Cap\u00edtulo</text>
      <polygon points="250,330 290,330 300,340 240,340" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="270" y="358" text-anchor="middle" fill="${T}" font-weight="bold">El Vers\u00edculo</text>
      <line x1="270" y1="365" x2="270" y2="380" stroke="${G}" stroke-width="1"/>
      <polygon points="266,378 270,388 274,378" fill="${G}"/>

      <rect x="100" y="395" width="340" height="35" rx="6" fill="none" stroke="#E53E3E" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="270" y="418" text-anchor="middle" fill="#E53E3E" font-size="11" font-weight="bold">Un vers\u00edculo sin contexto no es fundamento para una doctrina</text>
    </g>
  </svg>`;
}

function svgHermeneuticaSignificado() {
  return `<svg viewBox="0 0 540 320" xmlns="www.w3.org/2000/svg">
    <rect width="540" height="320" fill="${C}" rx="12"/>
    <text x="270" y="35" text-anchor="middle" fill="${G}" font-family="serif" font-size="17" font-weight="bold">Preguntas para Interpretar Correctamente</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="30" y="55" width="230" height="50" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="145" y="73" text-anchor="middle" fill="${G}" font-weight="bold">\u00bfQui\u00e9n habla?</text>
      <text x="145" y="92" text-anchor="middle" fill="${T2}">Autor y su contexto</text>

      <rect x="280" y="55" width="230" height="50" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="395" y="73" text-anchor="middle" fill="${G}" font-weight="bold">\u00bfA qui\u00e9n le habla?</text>
      <text x="395" y="92" text-anchor="middle" fill="${T2}">Audiencia original</text>

      <rect x="30" y="120" width="230" height="50" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="145" y="138" text-anchor="middle" fill="${G}" font-weight="bold">\u00bfPor qu\u00e9 lo dice?</text>
      <text x="145" y="157" text-anchor="middle" fill="${T2}">Prop\u00f3sito y circunstancias</text>

      <rect x="280" y="120" width="230" height="50" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="395" y="138" text-anchor="middle" fill="${G}" font-weight="bold">\u00bfQu\u00e9 dice antes/despu\u00e9s?</text>
      <text x="395" y="157" text-anchor="middle" fill="${T2}">Contexto inmediato</text>

      <rect x="30" y="185" width="230" height="50" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="145" y="203" text-anchor="middle" fill="${G}" font-weight="bold">\u00bfQu\u00e9 ense\u00f1a toda la Biblia?</text>
      <text x="145" y="222" text-anchor="middle" fill="${T2}">Analog\u00eda de la fe</text>

      <rect x="280" y="185" width="230" height="50" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="395" y="203" text-anchor="middle" fill="${G}" font-weight="bold">\u00bfC\u00f3mo apunta a Cristo?</text>
      <text x="395" y="222" text-anchor="middle" fill="${T2}">Hermen\u00e9utica cristoc\u00e9ntrica</text>

      <text x="270" y="280" text-anchor="middle" fill="${G}" font-weight="bold" font-size="13">El significado es UNO. La aplicaci\u00f3n puede variar. La imposici\u00f3n es peligrosa.</text>
      <text x="270" y="303" text-anchor="middle" fill="${T3}" font-size="11">\u00bfQu\u00e9 signific\u00f3 para ellos? \u2192 \u00bfQu\u00e9 significa para nosotros?</text>
    </g>
  </svg>`;
}

function svgHermeneuticaGuia() {
  return `<svg viewBox="0 0 540 380" xmlns="www.w3.org/2000/svg">
    <rect width="540" height="380" fill="${C}" rx="12"/>
    <text x="270" y="35" text-anchor="middle" fill="${G}" font-family="serif" font-size="17" font-weight="bold">Gu\u00eda Pr\u00e1ctica de 8 Pasos</text>
    <g font-family="sans-serif" font-size="12">
      <text x="50" y="65" fill="${G}" font-weight="bold">1.</text>
      <text x="70" y="65" fill="${T}">\u00bfQui\u00e9n est\u00e1 hablando? (Dios, profeta, ap\u00f3stol, salmista...)</text>

      <text x="50" y="92" fill="${G}" font-weight="bold">2.</text>
      <text x="70" y="92" fill="${T}">\u00bfA qui\u00e9n le habla? (Israel, iglesia, persona espec\u00edfica...)</text>

      <text x="50" y="119" fill="${G}" font-weight="bold">3.</text>
      <text x="70" y="119" fill="${T}">\u00bfEn qu\u00e9 circunstancias? (Guerra, paz, persecuci\u00f3n, exilio...)</text>

      <text x="50" y="146" fill="${G}" font-weight="bold">4.</text>
      <text x="70" y="146" fill="${T}">\u00bfQu\u00e9 dice antes y despu\u00e9s? (Lee al menos el cap\u00edtulo)</text>

      <text x="50" y="173" fill="${G}" font-weight="bold">5.</text>
      <text x="70" y="173" fill="${T}">\u00bfQu\u00e9 signific\u00f3 para los primeros oyentes?</text>

      <text x="50" y="200" fill="${G}" font-weight="bold">6.</text>
      <text x="70" y="200" fill="${T}">\u00bfQu\u00e9 principio eterno puedo aprender?</text>

      <text x="50" y="227" fill="${G}" font-weight="bold">7.</text>
      <text x="70" y="227" fill="${T}">\u00bfC\u00f3mo se relaciona con Cristo y el evangelio?</text>

      <text x="50" y="254" fill="${G}" font-weight="bold">8.</text>
      <text x="70" y="254" fill="${T}">\u00bfQu\u00e9 debo creer, sentir o hacer en respuesta?</text>

      <rect x="50" y="275" width="440" height="45" rx="8" fill="none" stroke="${G}" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="270" y="295" text-anchor="middle" fill="${G}" font-weight="bold">Ejemplo: Filipenses 4:13</text>
      <text x="270" y="312" text-anchor="middle" fill="${T2}" font-size="11">Pablo preso hablando de contentamiento, no de lograr metas personales</text>

      <rect x="50" y="330" width="440" height="35" rx="6" fill="none" stroke="#E53E3E" stroke-width="1"/>
      <text x="270" y="353" text-anchor="middle" fill="#E53E3E" font-size="11" font-style="italic">Copia estas 8 preguntas y \u00fasalas al leer tu Biblia</text>
    </g>
  </svg>`;
}

function svgHermeneuticaEspiritu() {
  return `<svg viewBox="0 0 540 280" xmlns="www.w3.org/2000/svg">
    <rect width="540" height="280" fill="${C}" rx="12"/>
    <text x="270" y="35" text-anchor="middle" fill="${G}" font-family="serif" font-size="17" font-weight="bold">El Equilibrio B\u00edblico: Palabra + Esp\u00edritu</text>
    <g font-family="sans-serif" font-size="12">
      <rect x="30" y="55" width="220" height="80" rx="8" fill="none" stroke="#E53E3E" stroke-width="1.5"/>
      <text x="140" y="75" text-anchor="middle" fill="#E53E3E" font-weight="bold">Extremo 1: Solo el Esp\u00edritu</text>
      <text x="140" y="95" text-anchor="middle" fill="${T2}" font-size="11">"Dios me revel\u00f3..."</text>
      <text x="140" y="112" text-anchor="middle" fill="${T2}" font-size="11">Sin estudio, sin contexto</text>
      <text x="140" y="127" text-anchor="middle" fill="${T3}" font-size="10">(Subjetivismo)</text>

      <rect x="290" y="55" width="220" height="80" rx="8" fill="none" stroke="#E53E3E" stroke-width="1.5"/>
      <text x="400" y="75" text-anchor="middle" fill="#E53E3E" font-weight="bold">Extremo 2: Solo estudio</text>
      <text x="400" y="95" text-anchor="middle" fill="${T2}" font-size="11">"An\u00e1lisis cr\u00edtico..."</text>
      <text x="400" y="112" text-anchor="middle" fill="${T2}" font-size="11">Sin oraci\u00f3n, sin dependencia</text>
      <text x="400" y="127" text-anchor="middle" fill="${T3}" font-size="10">(Racionalismo)</text>

      <rect x="80" y="155" width="380" height="55" rx="8" fill="none" stroke="${G}" stroke-width="2"/>
      <text x="270" y="175" text-anchor="middle" fill="${G}" font-weight="bold">El equilibrio reformado</text>
      <text x="270" y="195" text-anchor="middle" fill="${T2}">Palabra + Esp\u00edritu · Estudio + Oracion · Mente + Coraz\u00f3n</text>

      <text x="270" y="245" text-anchor="middle" fill="${T3}" font-size="11" font-style="italic">"El Esp\u00edritu Santo ilumina la Palabra, no reemplaza la Palabra"</text>
      <text x="270" y="263" text-anchor="middle" fill="${T3}" font-size="11" font-style="italic">"Sin el Esp\u00edritu no podemos entender; sin la Palabra no tenemos qu\u00e9 entender"</text>
    </g>
  </svg>`;
}

function svgHermeneuticaComparacion() {
  return `<svg viewBox="0 0 540 380" xmlns="www.w3.org/2000/svg">
    <rect width="540" height="380" fill="${C}" rx="12"/>
    <text x="270" y="35" text-anchor="middle" fill="${G}" font-family="serif" font-size="16" font-weight="bold">Mala Interpretaci\u00f3n  vs  Interpretaci\u00f3n Sana</text>
    <g font-family="sans-serif" font-size="11">
      <rect x="30" y="55" width="230" height="25" rx="4" fill="#E53E3E10" stroke="#E53E3E" stroke-width="1"/>
      <text x="145" y="71" text-anchor="middle" fill="#E53E3E" font-weight="bold">Mala pr\u00e1ctica</text>

      <rect x="280" y="55" width="230" height="25" rx="4" fill="${G}10" stroke="${G}" stroke-width="1"/>
      <text x="395" y="71" text-anchor="middle" fill="${G}" font-weight="bold">Interpretaci\u00f3n sana</text>

      <rect x="30" y="90" width="230" height="30" rx="4" fill="none" stroke="#E53E3E" stroke-width="0.5"/>
      <text x="145" y="108" text-anchor="middle" fill="${T}">Sacar vers\u00edculo aislado</text>

      <rect x="280" y="90" width="230" height="30" rx="4" fill="none" stroke="${G}" stroke-width="0.5"/>
      <text x="395" y="108" text-anchor="middle" fill="${T}">Leer el contexto completo</text>

      <rect x="30" y="125" width="230" height="30" rx="4" fill="none" stroke="#E53E3E" stroke-width="0.5"/>
      <text x="145" y="143" text-anchor="middle" fill="${T}">Buscar solo emociones</text>

      <rect x="280" y="125" width="230" height="30" rx="4" fill="none" stroke="${G}" stroke-width="0.5"/>
      <text x="395" y="143" text-anchor="middle" fill="${T}">Buscar el significado original</text>

      <rect x="30" y="160" width="230" height="30" rx="4" fill="none" stroke="#E53E3E" stroke-width="0.5"/>
      <text x="145" y="178" text-anchor="middle" fill="${T}">"Dios me dijo" sin Biblia</text>

      <rect x="280" y="160" width="230" height="30" rx="4" fill="none" stroke="${G}" stroke-width="0.5"/>
      <text x="395" y="178" text-anchor="middle" fill="${T}">Examinar todo con la Escritura</text>

      <rect x="30" y="195" width="230" height="30" rx="4" fill="none" stroke="#E53E3E" stroke-width="0.5"/>
      <text x="145" y="213" text-anchor="middle" fill="${T}">Ignorar historia y cultura</text>

      <rect x="280" y="195" width="230" height="30" rx="4" fill="none" stroke="${G}" stroke-width="0.5"/>
      <text x="395" y="213" text-anchor="middle" fill="${T}">Considerar el contexto original</text>

      <rect x="30" y="230" width="230" height="30" rx="4" fill="none" stroke="#E53E3E" stroke-width="0.5"/>
      <text x="145" y="248" text-anchor="middle" fill="${T}">Imponer mis ideas al texto</text>

      <rect x="280" y="230" width="230" height="30" rx="4" fill="none" stroke="${G}" stroke-width="0.5"/>
      <text x="395" y="248" text-anchor="middle" fill="${T}">Dejar que el texto me hable</text>

      <rect x="30" y="265" width="230" height="30" rx="4" fill="none" stroke="#E53E3E" stroke-width="0.5"/>
      <text x="145" y="283" text-anchor="middle" fill="${T}">Una doctrina de 1 vers\u00edculo</text>

      <rect x="280" y="265" width="230" height="30" rx="4" fill="none" stroke="${G}" stroke-width="0.5"/>
      <text x="395" y="283" text-anchor="middle" fill="${T}">Consejo completo de Dios</text>

      <text x="270" y="335" text-anchor="middle" fill="${G}" font-weight="bold" font-size="13">La diferencia est\u00e1 en los frutos</text>
      <text x="270" y="355" text-anchor="middle" fill="${T2}" font-size="11">Fruto malo: Confusi\u00f3n, divisi\u00f3n, manipulación</text>
      <text x="270" y="370" text-anchor="middle" fill="${T2}" font-size="11">Fruto bueno: Fe s\u00f3lida, unidad, amor a la verdad</text>
    </g>
  </svg>`;
}

function svgHermeneuticaConclusion() {
  return `<svg viewBox="0 0 540 300" xmlns="www.w3.org/2000/svg">
    <rect width="540" height="300" fill="${C}" rx="12"/>
    <text x="270" y="40" text-anchor="middle" fill="${G}" font-family="serif" font-size="18" font-weight="bold">La Meta Final de Toda Interpretaci\u00f3n</text>
    <g font-family="sans-serif" font-size="13">
      <rect x="40" y="60" width="460" height="45" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="60" y="82" fill="${G}" font-weight="bold">No es tener raz\u00f3n</text>
      <text x="60" y="98" fill="${T2}" font-size="12">Es conocer a Dios y ser transformado por \u00c9l</text>

      <rect x="40" y="115" width="460" height="45" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="60" y="137" fill="${G}" font-weight="bold">No es saber m\u00e1s</text>
      <text x="60" y="153" fill="${T2}" font-size="12">Es amar m\u00e1s a Cristo y a su iglesia</text>

      <rect x="40" y="170" width="460" height="45" rx="8" fill="none" stroke="${G}" stroke-width="1.5"/>
      <text x="60" y="192" fill="${G}" font-weight="bold">No es sentirnos superiores</text>
      <text x="60" y="208" fill="${T2}" font-size="12">Es protegernos del error y caminar en la verdad</text>

      <text x="270" y="260" text-anchor="middle" fill="${G}" font-weight="bold" font-size="14">"L\u00e1mpara es a mis pies tu palabra, y lumbrera a mi camino"</text>
      <text x="270" y="283" text-anchor="middle" fill="${T3}" font-size="12">Salmo 119:105</text>
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
  "que-es-patristica": svgQueEsPatristica,
  "padres-apostolicos": svgPadresApostolicos,
  "escritos-patristicos": svgEscritosPatristicos,
  "caracter-general": svgCaracterGeneral,
  "significado-doctrinal": svgSignificadoDoctrinal,
  "gobierno-eclesiastico": svgGobiernoEclesiastico,
  "prolegomenos-th": svgProlegomenosTH,
  "iglesia-primitiva-th": svgIglesiaPrimitivaTH,
  "canon-biblico-th": svgCanonTH,
  "trinidad-th": svgTrinidadTH,
  "cristologia-th": svgCristologiaTH,
  "gracia-th": svgGraciaTH,
  "edad-media-th": svgEdadMediaTH,
  "reforma-th": svgReformaTH,
  "hermeneutica-intro": svgHermeneuticaIntro,
  "hermeneutica-contexto": svgHermeneuticaContexto,
  "hermeneutica-errores": svgHermeneuticaErrores,
  "hermeneutica-significado": svgHermeneuticaSignificado,
  "hermeneutica-guia": svgHermeneuticaGuia,
  "hermeneutica-espiritu": svgHermeneuticaEspiritu,
  "hermeneutica-comparacion": svgHermeneuticaComparacion,
  "hermeneutica-conclusion": svgHermeneuticaConclusion,
};
