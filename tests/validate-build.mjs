import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const routes = ['index', 'research/index', 'talks/index', 'about/index', 'updates/index'];

await Promise.all(routes.map((route) => access(`dist/${route}.html`)));
await Promise.all([
  access('dist/og.png'),
  access('dist/Yunfei_CV.pdf'),
  access('dist/papers/cellfusion.pdf'),
  access('dist/papers/xlink.pdf'),
]);

const home = await readFile('dist/index.html', 'utf8');
const research = await readFile('dist/research/index.html', 'utf8');

assert.match(home, /Building the networks behind/);
assert.match(home, /property="og:image"/);
assert.match(home, /Skip to content/);
assert.doesNotMatch(home, /jquery|bootstrap\.min/i);
assert.match(research, /Cellfusion/);
assert.match(research, /Enabling Deep-Tissue Networking/);

console.log('Production build validation passed.');
