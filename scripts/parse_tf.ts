import fs from 'fs';

const html = fs.readFileSync('/home/z/my-project/scripts/tf_item.html', 'utf8');
console.log('Total length:', html.length);

// All image srcs
console.log('\n--- ALL IMAGE URLS ---');
const srcs = new Set<string>();
for (const m of html.matchAll(/(?:data-src|data-preview-url|src)="([^"]*)"/g)) {
  const src = m[1];
  if (src && !src.startsWith('data:') && !srcs.has(src)) {
    srcs.add(src);
    console.log('- ' + src);
  }
}

// Look for full screen preview links
console.log('\n--- PREVIEW LINKS ---');
for (const m of html.matchAll(/https?:\/\/[^\s"'<>]*preview[^\s"'<>]*/g)) {
  console.log('- ' + m[0].slice(0, 160));
}

// Extract meta description
const desc = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)?.[1];
if (desc) console.log('\n--- META DESC ---\n' + desc.replace(/&amp;/g, '&'));
