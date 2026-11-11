const sharp = require('sharp');
const fs = require('fs');

// Helper to create realistic SVG mask overlay
function createMaskSvg(width, height, elements) {
  return Buffer.from(`
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Soft ambient occlusion shadow -->
    <filter id="maskShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="-1" dy="2" stdDeviation="3" flood-color="#050811" flood-opacity="0.45" />
    </filter>
    <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.3" />
    </filter>

    <!-- Deep navy fabric gradient -->
    <linearGradient id="navyFabric1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>

    <!-- Medical blue gradient for variety if needed -->
    <linearGradient id="medBlue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="40%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>

    <!-- Dark charcoal / black gradient -->
    <linearGradient id="darkCharcoal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#334155" />
      <stop offset="45%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>

    <!-- Highlight fold gradient -->
    <linearGradient id="highlightFold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#475569" stop-opacity="0.5" />
      <stop offset="50%" stop-color="#64748b" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#334155" stop-opacity="0.1" />
    </linearGradient>
  </defs>

  ${elements}
</svg>
`);
}

async function processAll() {
  // 1. cuci-ac-01.jpg
  // Technician looking left
  const mask1 = createMaskSvg(1200, 896, `
    <!-- Ear loop -->
    <path d="M 815 225 Q 842 220 848 238 Q 840 252 810 255"
          fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round" opacity="0.85" />
    <!-- Mask Body -->
    <path d="M 770 195 Q 762 205 758 216 Q 754 230 760 248 Q 766 265 776 270 Q 795 275 815 256 Q 822 238 815 222 Q 792 205 770 195 Z"
          fill="url(#darkCharcoal)" filter="url(#maskShadow)" />
    <!-- 3D Contour ridge -->
    <path d="M 770 195 Q 764 208 762 218 Q 760 235 768 255"
          fill="none" stroke="url(#highlightFold)" stroke-width="2" />
    <path d="M 762 218 Q 785 228 815 222"
          fill="none" stroke="#64748b" stroke-width="1.2" opacity="0.4" />
  `);

  // 2. isi-freon-01.jpg
  // Technician 3/4 profile looking right and down
  const mask2 = createMaskSvg(1200, 896, `
    <!-- Ear loop behind left ear -->
    <path d="M 470 265 Q 445 250 445 235 Q 450 225 475 240"
          fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round" opacity="0.85" />
    <!-- Mask Body -->
    <path d="M 510 230 Q 535 245 554 270 Q 556 285 548 305 Q 538 325 520 338 Q 495 342 468 300 Q 458 275 470 252 Q 490 238 510 230 Z"
          fill="url(#navyFabric1)" filter="url(#maskShadow)" />
    <!-- Center seam & highlight -->
    <path d="M 510 230 Q 535 250 554 270 Q 545 300 520 338"
          fill="none" stroke="url(#highlightFold)" stroke-width="2.2" />
    <!-- Side fold -->
    <path d="M 554 270 Q 510 285 470 270"
          fill="none" stroke="#475569" stroke-width="1.2" opacity="0.5" />
  `);

  // 3. bongkar-pasang-01.jpg
  // Two technicians!
  const mask3 = createMaskSvg(1200, 896, `
    <!-- Tech 1 (left) -->
    <path d="M 480 178 Q 502 170 508 185 Q 502 196 480 198"
          fill="none" stroke="#0f172a" stroke-width="2.5" opacity="0.85" />
    <path d="M 442 160 Q 430 168 425 178 Q 422 190 430 205 Q 436 218 448 222 Q 465 225 480 208 Q 485 192 480 178 Q 462 165 442 160 Z"
          fill="url(#darkCharcoal)" filter="url(#maskShadow)" />
    <path d="M 442 160 Q 432 170 428 178 Q 425 195 435 212"
          fill="none" stroke="url(#highlightFold)" stroke-width="1.8" />

    <!-- Tech 2 (right) -->
    <path d="M 750 395 Q 772 390 776 405 Q 770 416 748 418"
          fill="none" stroke="#0f172a" stroke-width="2.5" opacity="0.85" />
    <path d="M 718 375 Q 708 382 704 392 Q 700 404 708 416 Q 714 426 724 430 Q 740 432 752 418 Q 756 405 750 395 Q 735 382 718 375 Z"
          fill="url(#darkCharcoal)" filter="url(#maskShadow)" />
    <path d="M 718 375 Q 710 384 706 392 Q 704 406 712 422"
          fill="none" stroke="url(#highlightFold)" stroke-width="1.8" />
  `);

  // 4. cuci-ac-02.jpg
  // Technician facing slightly right, pull mask over nose/mouth
  const mask4 = createMaskSvg(1200, 896, `
    <!-- Top strap over ear -->
    <path d="M 495 240 Q 470 230 460 215 Q 465 205 485 220"
          fill="none" stroke="#eab308" stroke-width="2.5" opacity="0.85" />
    <!-- Mask body (dust respirator matching his existing chin mask) -->
    <path d="M 515 205 Q 528 215 536 226 Q 538 238 532 252 Q 525 268 510 276 Q 490 278 472 255 Q 465 238 475 222 Q 495 210 515 205 Z"
          fill="#e2e8f0" filter="url(#maskShadow)" />
    <path d="M 515 205 Q 528 215 536 226 Q 528 252 510 276"
          fill="none" stroke="#cbd5e1" stroke-width="2" />
    <!-- Valve / contour detail -->
    <circle cx="510" cy="242" r="7" fill="#94a3b8" />
    <circle cx="510" cy="242" r="5" fill="#64748b" />
    <!-- Bottom strap -->
    <path d="M 495 268 Q 470 260 455 250"
          fill="none" stroke="#eab308" stroke-width="2.5" opacity="0.85" />
  `);

  // 5. perbaikan-01.jpg
  // Technician wearing glasses, 3/4 profile looking right and down
  const mask5 = createMaskSvg(1200, 896, `
    <!-- Ear loop -->
    <path d="M 465 390 Q 440 375 440 360 Q 448 350 470 365"
          fill="none" stroke="#0f172a" stroke-width="3" opacity="0.85" />
    <!-- Mask Body nestled below safety glasses -->
    <path d="M 540 360 Q 555 372 562 388 Q 562 402 552 422 Q 540 442 518 452 Q 492 455 465 418 Q 455 395 468 375 Q 495 362 540 360 Z"
          fill="url(#navyFabric1)" filter="url(#maskShadow)" />
    <!-- Center 3D fold -->
    <path d="M 540 360 Q 555 375 562 388 Q 550 422 518 452"
          fill="none" stroke="url(#highlightFold)" stroke-width="2.2" />
    <!-- Top nose wire seal -->
    <path d="M 505 363 Q 525 360 545 365"
          fill="none" stroke="#475569" stroke-width="1.8" />
  `);

  // 6. cuci-ac-03.jpg
  // Technician standing in corridor looking down-right
  const mask6 = createMaskSvg(1200, 896, `
    <!-- Ear loop -->
    <path d="M 490 295 Q 475 285 475 278 Q 480 272 492 282"
          fill="none" stroke="#0f172a" stroke-width="2" opacity="0.85" />
    <!-- Mask Body -->
    <path d="M 515 278 Q 524 285 528 293 Q 526 302 522 312 Q 516 322 505 328 Q 492 330 482 312 Q 478 300 484 290 Q 498 282 515 278 Z"
          fill="url(#darkCharcoal)" filter="url(#subtleShadow)" />
    <!-- Center ridge -->
    <path d="M 515 278 Q 524 285 528 293 Q 520 312 505 328"
          fill="none" stroke="url(#highlightFold)" stroke-width="1.5" />
  `);

  const list = [
    { file: 'cuci-ac-01.jpg', svg: mask1 },
    { file: 'isi-freon-01.jpg', svg: mask2 },
    { file: 'bongkar-pasang-01.jpg', svg: mask3 },
    { file: 'cuci-ac-02.jpg', svg: mask4 },
    { file: 'perbaikan-01.jpg', svg: mask5 },
    { file: 'cuci-ac-03.jpg', svg: mask6 },
  ];

  for (const item of list) {
    const inputPath = 'public/pekerjaan/' + item.file;
    const inputBuf = fs.readFileSync(inputPath);
    const buf = await sharp(inputBuf)
      .composite([{ input: item.svg, top: 0, left: 0 }])
      .jpeg({ quality: 92 })
      .toBuffer();
    fs.writeFileSync(inputPath, buf);
    console.log('Processed', item.file);
  }
}

processAll().catch(console.error);
