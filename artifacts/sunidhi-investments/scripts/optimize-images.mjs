import path from 'node:path';
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const publicDir = path.join(root, 'public');
const portraitSource = path.join(publicDir, 'smita-tapadia-portrait.png');
const portraitDir = path.join(publicDir, 'images', 'portrait');
const ogDir = path.join(publicDir, 'og');

await mkdir(portraitDir, { recursive: true });
await mkdir(ogDir, { recursive: true });

const widths = [480, 768, 1120];

for (const width of widths) {
  await sharp(portraitSource)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(portraitDir, `smita-tapadia-${width}.webp`));

  await sharp(portraitSource)
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 58 })
    .toFile(path.join(portraitDir, `smita-tapadia-${width}.avif`));
}

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: '#10243d',
  },
})
  .composite([
    {
      input: await sharp(portraitSource)
        .resize({ height: 560 })
        .webp({ quality: 86 })
        .toBuffer(),
      left: 730,
      top: 35,
    },
    {
      input: Buffer.from(`
        <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
          <rect width="1200" height="630" fill="none"/>
          <text x="70" y="160" fill="#d9b56d" font-size="34" font-family="Arial, sans-serif" font-weight="700">Sunidhi Investments</text>
          <text x="70" y="250" fill="#fff8eb" font-size="62" font-family="Georgia, serif" font-weight="700">Financial Advisor</text>
          <text x="70" y="325" fill="#fff8eb" font-size="62" font-family="Georgia, serif" font-weight="700">in Indore</text>
          <text x="72" y="400" fill="#d8deea" font-size="28" font-family="Arial, sans-serif">Mutual funds, SIPs, retirement planning,</text>
          <text x="72" y="438" fill="#d8deea" font-size="28" font-family="Arial, sans-serif">Mediclaim and family financial guidance</text>
          <text x="72" y="525" fill="#d9b56d" font-size="26" font-family="Arial, sans-serif" font-weight="700">Smita Tapadia</text>
        </svg>
      `),
      left: 0,
      top: 0,
    },
  ])
  .webp({ quality: 86 })
  .toFile(path.join(ogDir, 'sunidhi-investments-og.webp'));
