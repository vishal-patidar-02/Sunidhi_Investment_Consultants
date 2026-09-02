import path from 'node:path';
import { mkdir, rm } from 'node:fs/promises';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const publicDir = path.join(root, 'public');
const distPublicDir = path.join(root, 'dist', 'public');
const portraitSource = path.join(publicDir, 'smita-tapadia-portrait.png');
const portraitDir = path.join(publicDir, 'images', 'portrait');
const ogDir = path.join(publicDir, 'og');
const brandDir = path.join(publicDir, 'brand');
const headerLogoSource = path.join(brandDir, 'sunidhi-header-icon.png');

await mkdir(portraitDir, { recursive: true });
await mkdir(ogDir, { recursive: true });
await mkdir(brandDir, { recursive: true });

async function roundedPng(input, output, size, radiusRatio = 0.2) {
  const radius = Math.round(size * radiusRatio);
  const mask = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/>
    </svg>
  `);

  await sharp(input)
    .resize({ width: size, height: size, fit: 'cover', position: 'center' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(output);
}

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

await sharp(headerLogoSource)
  .resize({ width: 160, height: 160, fit: 'contain', withoutEnlargement: true })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(path.join(brandDir, 'sunidhi-header-icon-160.png'));

await sharp(headerLogoSource)
  .resize({ width: 256, height: 256, fit: 'contain', withoutEnlargement: true })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(path.join(brandDir, 'sunidhi-header-icon-256.png'));

await roundedPng(headerLogoSource, path.join(publicDir, 'favicon-32x32.png'), 32, 0.22);
await roundedPng(headerLogoSource, path.join(publicDir, 'favicon-48x48.png'), 48, 0.22);
await roundedPng(headerLogoSource, path.join(publicDir, 'apple-touch-icon.png'), 180, 0.2);

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
          <text x="70" y="250" fill="#fff8eb" font-size="62" font-family="Georgia, serif" font-weight="700">Financial Planning</text>
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

export async function removeUnusedProductionAssets() {
  await Promise.all([
    rm(path.join(distPublicDir, 'smita-tapadia-portrait.png'), { force: true }),
    rm(path.join(distPublicDir, 'smita-tapadia-portrait1.png'), { force: true }),
    rm(path.join(distPublicDir, 'images', 'portrait', 'smita-tapadia-original.png'), { force: true }),
    rm(path.join(distPublicDir, 'brand', 'sunidhi-investments-logo-full.png'), { force: true }),
    rm(path.join(distPublicDir, 'brand', 'sunidhi-investments-logo-full1.png'), { force: true }),
    rm(path.join(distPublicDir, 'brand', 'sunidhi-header-icon.png'), { force: true }),
  ]);
}

