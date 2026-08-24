import path from 'node:path';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const publicDir = path.join(root, 'dist', 'public');
const serverEntry = path.join(root, 'dist', 'server', 'entry-server.js');
const templatePath = path.join(publicDir, 'index.html');

const { render, renderHead, getPrerenderRoutes, renderSitemap, renderRobots } = await import(pathToFileURL(serverEntry).href);
const template = await readFile(templatePath, 'utf8');

function outputPath(route) {
  if (route === '/') return path.join(publicDir, 'index.html');
  return path.join(publicDir, route.replace(/^\//, ''), 'index.html');
}

for (const route of getPrerenderRoutes()) {
  const appHtml = render(route);
  const headHtml = renderHead(route);
  const html = template
    .replace('<!--app-head-->', headHtml)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const file = outputPath(route);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
}

const notFoundHtml = template
  .replace('<!--app-head-->', renderHead('/404'))
  .replace('<div id="root"></div>', `<div id="root">${render('/404')}</div>`);
await writeFile(path.join(publicDir, '404.html'), notFoundHtml);
await writeFile(path.join(publicDir, 'sitemap.xml'), renderSitemap());
await writeFile(path.join(publicDir, 'robots.txt'), renderRobots());
