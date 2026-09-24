import fs from 'fs';

const raw = JSON.parse(fs.readFileSync('/home/z/my-project/scripts/aurelis_reader.json', 'utf8'));
const data = typeof raw === 'object' && raw !== null && 'data' in raw ? raw.data : raw;
const html = data.html || '';
fs.writeFileSync('/home/z/my-project/scripts/aurelis_home_full.html', html);
console.log('HTML length:', html.length);
console.log('TITLE:', data.title);

// Extract all images
const imgs = [...html.matchAll(/<img[^>]*>/g)].map(m => m[0]);
console.log('\n=== IMAGES (' + imgs.length + ') ===');
const srcs = new Set<string>();
for (const img of imgs) {
  const src = img.match(/src="([^"]*)"/)?.[1];
  const alt = img.match(/alt="([^"]*)"/)?.[1];
  const w = img.match(/width="([^"]*)"/)?.[1];
  const h = img.match(/height="([^"]*)"/)?.[1];
  if (src && !srcs.has(src)) {
    srcs.add(src);
    console.log(`- ${src}\n  alt="${alt}" ${w}x${h}`);
  }
}

// Extract links
console.log('\n=== LINKS ===');
const links = new Set<string>();
for (const m of html.matchAll(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)) {
  const href = m[1];
  const text = m[2].replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ').slice(0, 60);
  const key = href + ' | ' + text;
  if (!links.has(key)) {
    links.add(key);
    console.log(`- ${href} => "${text}"`);
  }
}

// Extract headings
console.log('\n=== HEADINGS ===');
for (const m of html.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)) {
  const text = m[2].replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ');
  if (text) console.log(`H${m[1]}: ${text}`);
}
