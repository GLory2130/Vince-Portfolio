#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(process.cwd());
const errors = [];
const notes = [];

const shells = {
  'index.html': 'home',
  'leadership.html': 'leadership',
  'projects.html': 'projects',
  'project.html': 'project',
  'gallery.html': 'gallery',
  'speaking.html': 'speaking',
  'appendix.html': 'appendix',
};

const jsFiles = [
  'assets/js/config.js',
  'assets/js/data.js',
  'assets/js/gallery-data.js',
  'assets/js/layout.js',
  'assets/js/pages.js',
  'assets/js/site.js',
];

function read(rel) {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    errors.push(`Missing required file: ${rel}`);
    return '';
  }
  return fs.readFileSync(abs, 'utf8');
}

function assert(condition, message) {
  if (!condition) errors.push(message);
}

const config = read('assets/js/config.js');
const versionMatch = config.match(/VM\.version\s*=\s*['"]([^'"]+)['"]/);
const version = versionMatch?.[1];
assert(Boolean(version), 'Could not read VM.version from assets/js/config.js');

for (const [file, page] of Object.entries(shells)) {
  const html = read(file);
  assert(/<meta\s+name=["']viewport["'][^>]*width=device-width/i.test(html),
    `${file}: missing responsive viewport meta`);
  assert(html.includes(`data-page="${page}"`),
    `${file}: body data-page must be "${page}"`);
  assert(/<meta\s+name=["']description["'][^>]*content=["'][^"']+/i.test(html),
    `${file}: missing meta description`);
  assert(/<link\s+rel=["']canonical["'][^>]*href=/i.test(html),
    `${file}: missing canonical link`);
  assert(/<title>[^<]+<\/title>/i.test(html),
    `${file}: missing document title`);
  assert(/<meta\s+property=["']og:title["'][^>]*content=/i.test(html),
    `${file}: missing Open Graph title`);
  assert(/<meta\s+property=["']og:description["'][^>]*content=/i.test(html),
    `${file}: missing Open Graph description`);
  assert(/<meta\s+property=["']og:image["'][^>]*content=/i.test(html),
    `${file}: missing Open Graph image`);
  assert(/<meta\s+name=["']twitter:card["'][^>]*content=["']summary_large_image["']/i.test(html),
    `${file}: missing Twitter summary card metadata`);
  assert(html.includes('lucide@0.468.0/dist/umd/lucide.min.js'),
    `${file}: Lucide must remain pinned to 0.468.0`);

  if (version) {
    const refs = [...html.matchAll(/[?&]v=([0-9]+\.[0-9]+\.[0-9]+)/g)].map(m => m[1]);
    assert(refs.length >= 6, `${file}: expected versioned CSS/JS references`);
    refs.forEach(v => assert(v === version,
      `${file}: stale asset version ${v}; expected ${version}`));
  }

  for (const m of html.matchAll(/(?:src|href)=["'](assets\/[^"'?#]+)[^"']*["']/g)) {
    const rel = m[1];
    assert(fs.existsSync(path.join(root, rel)), `${file}: missing local asset ${rel}`);
  }
}

for (const file of jsFiles) {
  const source = read(file);
  try {
    new vm.Script(source, { filename: file });
  } catch (error) {
    errors.push(`${file}: JavaScript syntax error: ${error.message}`);
  }
}

for (const file of ['assets/js/config.js', 'assets/js/data.js', 'assets/js/gallery-data.js', 'assets/js/pages.js']) {
  const source = read(file);
  for (const m of source.matchAll(/['"]((?:assets\/)[^'"]+\.(?:jpg|jpeg|png|webp|svg|pdf|ico))['"]/gi)) {
    const rel = m[1];
    assert(fs.existsSync(path.join(root, rel)), `${file}: referenced asset does not exist: ${rel}`);
  }
}

const pages = read('assets/js/pages.js');
for (const page of Object.values(shells)) {
  assert(pages.includes(`${page}:`) || pages.includes(`'${page}'`) || pages.includes(`"${page}"`),
    `assets/js/pages.js: renderer registration for "${page}" was not found`);
}

const css = read('assets/css/design-system.css');
assert(css.includes('@media (max-width: 479px)'),
  'design-system.css: missing small-phone responsive rules');
assert(css.includes('@media (min-width: 600px) and (max-width: 899px)'),
  'design-system.css: missing tablet responsive rules');
assert(css.includes('overflow-x: clip'),
  'design-system.css: horizontal overflow protection is missing');
assert(css.includes('100dvh'),
  'design-system.css: dynamic viewport handling is missing');

const index = read('index.html');
assert(index.includes('data-page="home"'), 'index.html must remain the home route');

notes.push(`Validated ${Object.keys(shells).length} HTML routes`);
notes.push(`Validated ${jsFiles.length} JavaScript files`);
if (version) notes.push(`Asset version: ${version}`);

if (errors.length) {
  console.error('\nSite validation failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('\nSite validation passed.');
for (const note of notes) console.log(`- ${note}`);
