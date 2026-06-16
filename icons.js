/* ============================================================
   O INVENTARIANTE DO TEMPO: A JORNADA DE ANA TERRA
   Medalhoes ornamentados dos 6 arquetipos de personagem
   Cada constante contem o SVG completo (240x240) como string,
   pronto para ser inserido via innerHTML.
   Versão 5.0
   ============================================================ */

const MEDALHOES = {

  ana_terra: `
<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Medalhao de Ana Terra">
<defs>
<linearGradient id="skyAna" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#f3e3c3"/>
<stop offset="100%" stop-color="#e8cfa0"/>
</linearGradient>
<clipPath id="clipAna"><circle cx="120" cy="120" r="94"/></clipPath>
</defs>
<rect width="240" height="240" fill="#f3e3c3"/>
<g stroke="#7a5530" stroke-width="1" fill="none" opacity="0.55">
<path d="M14 14 q12 0 12 12"/>
<path d="M14 14 q0 12 12 12"/>
<circle cx="20" cy="20" r="3"/>
<path d="M226 14 q-12 0 -12 12"/>
<path d="M226 14 q0 12 -12 12"/>
<circle cx="220" cy="20" r="3"/>
<path d="M14 226 q12 0 12 -12"/>
<path d="M14 226 q0 -12 12 -12"/>
<circle cx="20" cy="220" r="3"/>
<path d="M226 226 q-12 0 -12 -12"/>
<path d="M226 226 q0 -12 -12 -12"/>
<circle cx="220" cy="220" r="3"/>
</g>
<circle cx="120" cy="120" r="104" fill="url(#skyAna)" stroke="#7a5530" stroke-width="3"/>
<circle cx="120" cy="120" r="94" fill="none" stroke="#c08a3e" stroke-width="1.5"/>
<circle cx="120" cy="120" r="100" fill="none" stroke="#a9784f" stroke-width="0.5" stroke-dasharray="2 3"/>
<g clip-path="url(#clipAna)">
<path d="M0 175 Q60 155 120 172 Q180 188 240 168 L240 240 L0 240 Z" fill="#b08858" opacity="0.55"/>
<path d="M0 195 Q70 180 130 195 Q190 208 240 192 L240 240 L0 240 Z" fill="#8c6239" opacity="0.7"/>
<g transform="translate(120,108)">
<path d="M-2 -58 L-2 18" stroke="#6b4226" stroke-width="3" stroke-linecap="round"/>
<path d="M-2 -52 C 30 -56, 52 -38, 50 -10 C 48 18, 14 30, -10 12 C -28 -2, -22 -34, -2 -52 Z" fill="#caa467" stroke="#7a5530" stroke-width="1.2"/>
<path d="M-2 -52 C -34 -44, -42 -14, -22 8 C -10 20, 14 16, 22 -2" fill="none" stroke="#9c7846" stroke-width="0.8" opacity="0.6"/>
<path d="M6 -46 C 26 -42, 40 -24, 36 -2" fill="none" stroke="#9c7846" stroke-width="0.8" opacity="0.6"/>
<line x1="-2" x2="-2" y1="16" y2="34" stroke="#6b4226" stroke-width="3" stroke-linecap="round"/>
</g>
<g opacity="0.5">
<line x1="40" y1="60" x2="40" y2="92" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="34" cy="58" rx="9" ry="4" fill="none" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="46" cy="58" rx="9" ry="4" fill="none" stroke="#7a5530" stroke-width="1"/>
<line x1="200" y1="70" x2="200" y2="100" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="194" cy="68" rx="8" ry="3.5" fill="none" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="206" cy="68" rx="8" ry="3.5" fill="none" stroke="#7a5530" stroke-width="1"/>
</g>
</g>
</svg>`,

  pedro_missioneiro: `
<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Medalhao de Pedro Missioneiro">
<defs>
<linearGradient id="skyPedroM" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#f3e3c3"/>
<stop offset="100%" stop-color="#e8cfa0"/>
</linearGradient>
<clipPath id="clipPedroM"><circle cx="120" cy="120" r="94"/></clipPath>
</defs>
<rect width="240" height="240" fill="#f3e3c3"/>
<g stroke="#7a5530" stroke-width="1" fill="none" opacity="0.55">
<path d="M14 14 q12 0 12 12"/>
<path d="M14 14 q0 12 12 12"/>
<circle cx="20" cy="20" r="3"/>
<path d="M226 14 q-12 0 -12 12"/>
<path d="M226 14 q0 12 -12 12"/>
<circle cx="220" cy="20" r="3"/>
<path d="M14 226 q12 0 12 -12"/>
<path d="M14 226 q0 -12 12 -12"/>
<circle cx="20" cy="220" r="3"/>
<path d="M226 226 q-12 0 -12 -12"/>
<path d="M226 226 q0 -12 -12 -12"/>
<circle cx="220" cy="220" r="3"/>
</g>
<circle cx="120" cy="120" r="104" fill="url(#skyPedroM)" stroke="#7a5530" stroke-width="3"/>
<circle cx="120" cy="120" r="94" fill="none" stroke="#c08a3e" stroke-width="1.5"/>
<circle cx="120" cy="120" r="100" fill="none" stroke="#a9784f" stroke-width="0.5" stroke-dasharray="2 3"/>
<g clip-path="url(#clipPedroM)">
<path d="M0 180 Q60 162 120 178 Q180 194 240 174 L240 240 L0 240 Z" fill="#b08858" opacity="0.55"/>
<path d="M0 198 Q70 184 130 198 Q190 210 240 196 L240 240 L0 240 Z" fill="#8c6239" opacity="0.7"/>
<g transform="translate(120,110) rotate(-30)">
<path d="M0 -60 A 60 60 0 0 1 0 60" fill="none" stroke="#7a5530" stroke-width="3" stroke-linecap="round"/>
<line x1="0" y1="-60" x2="0" y2="60" stroke="#5b3b22" stroke-width="1.2"/>
<line x1="-3" y1="-58" x2="3" y2="-62" stroke="#5b3b22" stroke-width="1.2"/>
<line x1="-3" y1="58" x2="3" y2="62" stroke="#5b3b22" stroke-width="1.2"/>
</g>
<g transform="translate(120,110) rotate(30)">
<path d="M-26 -54 L 4 56" stroke="#6b4226" stroke-width="2.5" stroke-linecap="round"/>
<path d="M-26 -54 C -36 -44, -38 -32, -28 -26 C -20 -32, -14 -42, -16 -52 Z" fill="#caa467" stroke="#7a5530" stroke-width="1"/>
<path d="M-20 -38 C -30 -28, -32 -16, -22 -10 C -14 -16, -8 -26, -10 -36 Z" fill="#d8bd8a" stroke="#7a5530" stroke-width="1"/>
<path d="M-14 -22 C -24 -12, -26 0, -16 6 C -8 0, -2 -10, -4 -20 Z" fill="#caa467" stroke="#7a5530" stroke-width="1"/>
</g>
<g opacity="0.5">
<line x1="45" y1="62" x2="45" y2="94" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="39" cy="60" rx="9" ry="4" fill="none" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="51" cy="60" rx="9" ry="4" fill="none" stroke="#7a5530" stroke-width="1"/>
</g>
</g>
</svg>`,

  maneco_terra: `
<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Medalhao de Maneco Terra - Tradicao, Patriarcado e Autoridade">
<defs>
<linearGradient id="skyManeco" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#f3e3c3"/>
<stop offset="100%" stop-color="#e8cfa0"/>
</linearGradient>
<clipPath id="clipManeco"><circle cx="120" cy="120" r="94"/></clipPath>
</defs>
<rect width="240" height="240" fill="#f3e3c3"/>
<g stroke="#7a5530" stroke-width="1" fill="none" opacity="0.55">
<path d="M14 14 q12 0 12 12"/>
<path d="M14 14 q0 12 12 12"/>
<circle cx="20" cy="20" r="3"/>
<path d="M226 14 q-12 0 -12 12"/>
<path d="M226 14 q0 12 -12 12"/>
<circle cx="220" cy="20" r="3"/>
<path d="M14 226 q12 0 12 -12"/>
<path d="M14 226 q0 -12 12 -12"/>
<circle cx="20" cy="220" r="3"/>
<path d="M226 226 q-12 0 -12 -12"/>
<path d="M226 226 q0 -12 -12 -12"/>
<circle cx="220" cy="220" r="3"/>
</g>
<circle cx="120" cy="120" r="104" fill="url(#skyManeco)" stroke="#7a5530" stroke-width="3"/>
<circle cx="120" cy="120" r="94" fill="none" stroke="#c08a3e" stroke-width="1.5"/>
<circle cx="120" cy="120" r="100" fill="none" stroke="#a9784f" stroke-width="0.5" stroke-dasharray="2 3"/>
<g clip-path="url(#clipManeco)">
<path d="M0 178 Q60 160 120 176 Q180 192 240 172 L240 240 L0 240 Z" fill="#b08858" opacity="0.55"/>
<path d="M0 198 Q70 184 130 198 Q190 210 240 196 L240 240 L0 240 Z" fill="#8c6239" opacity="0.7"/>
<g transform="translate(120,112)">
<ellipse cx="0" cy="14" rx="62" ry="14" fill="#9c7846" stroke="#6b4226" stroke-width="1.2"/>
<path d="M-34 14 C -34 -22, 34 -22, 34 14 C 34 24, -34 24, -34 14 Z" fill="#caa467" stroke="#6b4226" stroke-width="1.2"/>
<ellipse cx="0" cy="2" rx="26" ry="7" fill="none" stroke="#7a5530" stroke-width="1"/>
</g>
<g transform="translate(168,98)">
<line x1="0" y1="0" x2="0" y2="70" stroke="#6b4226" stroke-width="3" stroke-linecap="round"/>
<path d="M-10 0 C -10 -10, 10 -10, 10 0 C 10 8, -10 8, -10 0 Z" fill="#caa467" stroke="#6b4226" stroke-width="1.2"/>
</g>
<g opacity="0.5">
<line x1="60" y1="64" x2="60" y2="96" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="54" cy="62" rx="9" ry="4" fill="none" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="66" cy="62" rx="9" ry="4" fill="none" stroke="#7a5530" stroke-width="1"/>
</g>
</g>
</svg>`,

  henriqueta: `
<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Medalhao de Henriqueta">
<defs>
<linearGradient id="skyHenriqueta" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#f3e3c3"/>
<stop offset="100%" stop-color="#e8cfa0"/>
</linearGradient>
<clipPath id="clipHenriqueta"><circle cx="120" cy="120" r="94"/></clipPath>
</defs>
<rect width="240" height="240" fill="#f3e3c3"/>
<g stroke="#7a5530" stroke-width="1" fill="none" opacity="0.55">
<path d="M14 14 q12 0 12 12"/>
<path d="M14 14 q0 12 12 12"/>
<circle cx="20" cy="20" r="3"/>
<path d="M226 14 q-12 0 -12 12"/>
<path d="M226 14 q0 12 -12 12"/>
<circle cx="220" cy="20" r="3"/>
<path d="M14 226 q12 0 12 -12"/>
<path d="M14 226 q0 -12 12 -12"/>
<circle cx="20" cy="220" r="3"/>
<path d="M226 226 q-12 0 -12 -12"/>
<path d="M226 226 q0 -12 -12 -12"/>
<circle cx="220" cy="220" r="3"/>
</g>
<circle cx="120" cy="120" r="104" fill="url(#skyHenriqueta)" stroke="#7a5530" stroke-width="3"/>
<circle cx="120" cy="120" r="94" fill="none" stroke="#c08a3e" stroke-width="1.5"/>
<circle cx="120" cy="120" r="100" fill="none" stroke="#a9784f" stroke-width="0.5" stroke-dasharray="2 3"/>
<g clip-path="url(#clipHenriqueta)">
<path d="M0 180 Q60 162 120 178 Q180 194 240 174 L240 240 L0 240 Z" fill="#b08858" opacity="0.55"/>
<path d="M0 198 Q70 184 130 198 Q190 210 240 196 L240 240 L0 240 Z" fill="#8c6239" opacity="0.7"/>
<g transform="translate(90,118)">
<path d="M-50 -10 L0 40 L50 -10 C 50 -40, -50 -40, -50 -10 Z" fill="#caa467" stroke="#6b4226" stroke-width="1.2"/>
<path d="M-50 -10 C -50 -38, 50 -38, 50 -10" fill="none" stroke="#9c7846" stroke-width="0.8" opacity="0.7"/>
<line x1="-38" y1="-22" x2="-26" y2="6" stroke="#9c7846" stroke-width="0.8" opacity="0.6"/>
<line x1="-12" y1="-30" x2="0" y2="14" stroke="#9c7846" stroke-width="0.8" opacity="0.6"/>
<line x1="14" y1="-30" x2="26" y2="6" stroke="#9c7846" stroke-width="0.8" opacity="0.6"/>
<line x1="38" y1="-22" x2="26" y2="6" stroke="#9c7846" stroke-width="0.8" opacity="0.6"/>
</g>
<g transform="translate(170,128)">
<path d="M-26 30 L-14 -6 L14 -6 L26 30 Z" fill="#9c7846" stroke="#6b4226" stroke-width="1.2"/>
<rect x="-30" y="26" width="60" height="8" rx="2" fill="#7a5530"/>
<path d="M-6 -10 C -10 -22, 2 -24, -2 -36 C 6 -28, 10 -16, 4 -8 C 0 -14, -6 -16, -6 -10 Z" fill="#c97c4a" stroke="#9c5a32" stroke-width="0.6"/>
</g>
<g opacity="0.5">
<line x1="40" y1="64" x2="40" y2="96" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="34" cy="62" rx="9" ry="4" fill="none" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="46" cy="62" rx="9" ry="4" fill="none" stroke="#7a5530" stroke-width="1"/>
</g>
</g>
</svg>`,

  horacio: `
<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Medalhao de Horacio">
<defs>
<linearGradient id="skyHoracio" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#f3e3c3"/>
<stop offset="100%" stop-color="#e8cfa0"/>
</linearGradient>
<clipPath id="clipHoracio"><circle cx="120" cy="120" r="94"/></clipPath>
</defs>
<rect width="240" height="240" fill="#f3e3c3"/>
<g stroke="#7a5530" stroke-width="1" fill="none" opacity="0.55">
<path d="M14 14 q12 0 12 12"/>
<path d="M14 14 q0 12 12 12"/>
<circle cx="20" cy="20" r="3"/>
<path d="M226 14 q-12 0 -12 12"/>
<path d="M226 14 q0 12 -12 12"/>
<circle cx="220" cy="20" r="3"/>
<path d="M14 226 q12 0 12 -12"/>
<path d="M14 226 q0 -12 12 -12"/>
<circle cx="20" cy="220" r="3"/>
<path d="M226 226 q-12 0 -12 -12"/>
<path d="M226 226 q0 -12 -12 -12"/>
<circle cx="220" cy="220" r="3"/>
</g>
<circle cx="120" cy="120" r="104" fill="url(#skyHoracio)" stroke="#7a5530" stroke-width="3"/>
<circle cx="120" cy="120" r="94" fill="none" stroke="#c08a3e" stroke-width="1.5"/>
<circle cx="120" cy="120" r="100" fill="none" stroke="#a9784f" stroke-width="0.5" stroke-dasharray="2 3"/>
<g clip-path="url(#clipHoracio)">
<path d="M0 185 Q60 168 120 184 Q180 200 240 180 L240 240 L0 240 Z" fill="#b08858" opacity="0.55"/>
<path d="M0 202 Q70 188 130 202 Q190 214 240 200 L240 240 L0 240 Z" fill="#8c6239" opacity="0.7"/>
<g stroke="#6b4226" stroke-width="2.5" stroke-linecap="round">
<line x1="40" y1="120" x2="40" y2="180"/>
<line x1="90" y1="110" x2="90" y2="180"/>
<line x1="140" y1="120" x2="140" y2="180"/>
<line x1="190" y1="110" x2="190" y2="180"/>
</g>
<g stroke="#7a5530" stroke-width="3" stroke-linecap="round">
<line x1="36" y1="140" x2="194" y2="132"/>
<line x1="36" y1="160" x2="194" y2="154"/>
</g>
<g transform="translate(150,84)">
<circle cx="0" cy="0" r="26" fill="#caa467" stroke="#6b4226" stroke-width="2"/>
<circle cx="0" cy="0" r="20" fill="none" stroke="#9c7846" stroke-width="0.8"/>
<line x1="0" y1="0" x2="0" y2="-12" stroke="#5b3b22" stroke-width="1.5" stroke-linecap="round"/>
<line x1="0" y1="0" x2="9" y2="4" stroke="#5b3b22" stroke-width="1.5" stroke-linecap="round"/>
<line x1="0" y1="-26" x2="0" y2="-32" stroke="#6b4226" stroke-width="2" stroke-linecap="round"/>
</g>
<g opacity="0.5">
<line x1="55" y1="64" x2="55" y2="96" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="49" cy="62" rx="9" ry="4" fill="none" stroke="#7a5530" stroke-width="1"/>
<ellipse cx="61" cy="62" rx="9" ry="4" fill="none" stroke="#7a5530" stroke-width="1"/>
</g>
</g>
</svg>`,

  pedro_terra: `
<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Medalhao de Pedro Terra">
<defs>
<linearGradient id="skyPedroT" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#f3e3c3"/>
<stop offset="100%" stop-color="#e8cfa0"/>
</linearGradient>
<clipPath id="clipPedroT"><circle cx="120" cy="120" r="94"/></clipPath>
</defs>
<rect width="240" height="240" fill="#f3e3c3"/>
<g stroke="#7a5530" stroke-width="1" fill="none" opacity="0.55">
<path d="M14 14 q12 0 12 12"/>
<path d="M14 14 q0 12 12 12"/>
<circle cx="20" cy="20" r="3"/>
<path d="M226 14 q-12 0 -12 12"/>
<path d="M226 14 q0 12 -12 12"/>
<circle cx="220" cy="20" r="3"/>
<path d="M14 226 q12 0 12 -12"/>
<path d="M14 226 q0 -12 12 -12"/>
<circle cx="20" cy="220" r="3"/>
<path d="M226 226 q-12 0 -12 -12"/>
<path d="M226 226 q0 -12 -12 -12"/>
<circle cx="220" cy="220" r="3"/>
</g>
<circle cx="120" cy="120" r="104" fill="url(#skyPedroT)" stroke="#7a5530" stroke-width="3"/>
<circle cx="120" cy="120" r="94" fill="none" stroke="#c08a3e" stroke-width="1.5"/>
<circle cx="120" cy="120" r="100" fill="none" stroke="#a9784f" stroke-width="0.5" stroke-dasharray="2 3"/>
<g clip-path="url(#clipPedroT)">
<path d="M0 178 Q60 160 120 176 Q180 192 240 172 L240 240 L0 240 Z" fill="#b08858" opacity="0.55"/>
<path d="M0 198 Q70 184 130 198 Q190 210 240 196 L240 240 L0 240 Z" fill="#8c6239" opacity="0.7"/>
<path d="M40 230 C 70 190, 110 200, 130 160 C 150 122, 180 110, 205 80" fill="none" stroke="#7a5530" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 6"/>
<g transform="translate(70,196)">
<ellipse cx="0" cy="6" rx="10" ry="4" fill="#9c7846" opacity="0.6"/>
<path d="M0 6 C 0 -6, -10 -10, -14 -20" fill="none" stroke="#6b4226" stroke-width="2" stroke-linecap="round"/>
<ellipse cx="-14" cy="-22" rx="7" ry="10" fill="#c9b27a" stroke="#7a5530" stroke-width="0.8"/>
</g>
<g transform="translate(120,150)">
<ellipse cx="0" cy="8" rx="12" ry="5" fill="#9c7846" opacity="0.6"/>
<path d="M0 8 C 0 -8, 10 -16, 8 -32" fill="none" stroke="#6b4226" stroke-width="2.5" stroke-linecap="round"/>
<ellipse cx="8" cy="-34" rx="9" ry="13" fill="#c9b27a" stroke="#7a5530" stroke-width="0.8"/>
<path d="M0 -2 C -8 -8, -14 -6, -18 -14" fill="none" stroke="#6b4226" stroke-width="1.5" stroke-linecap="round"/>
<ellipse cx="-18" cy="-16" rx="6" ry="8" fill="#caa467" stroke="#7a5530" stroke-width="0.6"/>
</g>
<g transform="translate(195,86)">
<ellipse cx="0" cy="10" rx="14" ry="5" fill="#9c7846" opacity="0.6"/>
<path d="M0 10 L0 -34" stroke="#6b4226" stroke-width="3" stroke-linecap="round"/>
<path d="M0 -10 C -16 -16, -20 -32, -10 -44 C 0 -32, 4 -18, 0 -10 Z" fill="#caa467" stroke="#7a5530" stroke-width="1"/>
<path d="M0 0 C 16 -6, 20 -22, 10 -34 C 0 -22, -4 -8, 0 0 Z" fill="#d8bd8a" stroke="#7a5530" stroke-width="1"/>
</g>
</g>
</svg>`

};

/* ============================================================
   Metadados dos arquetipos (nome de exibicao e tema)
   ============================================================ */

const ARQUETIPOS = [
  { id: "ana_terra", nome: "Ana Terra", tema: "Resistência feminina" },
  { id: "pedro_missioneiro", nome: "Pedro Missioneiro", tema: "Miscigenação e origem do povo gaúcho" },
  { id: "maneco_terra", nome: "Maneco Terra", tema: "Tradição, Patriarcado e Autoridade" },
  { id: "henriqueta", nome: "Henriqueta", tema: "Preservação dos costumes" },
  { id: "horacio", nome: "Horácio", tema: "Conservadorismo social" },
  { id: "pedro_terra", nome: "Pedro Terra", tema: "Continuidade das gerações" }
];
