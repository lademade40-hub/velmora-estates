import fs from 'fs';

function analyze(file: string, label: string) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n########## ${label} (${html.length} bytes) ##########`);

  // Extract images with srcs
  const srcs = new Map<string, string>();
  for (const m of html.matchAll(/<img[^>]*>/g)) {
    const tag = m[0];
    const src = tag.match(/(?:data-src|src)="([^"]*)"/)?.[1];
    const alt = tag.match(/alt="([^"]*)"/)?.[1] || '';
    if (src && !srcs.has(src)) srcs.set(src, alt);
  }
  console.log('--- IMAGES ---');
  for (const [src, alt] of srcs) {
    if (src.includes('aurelis') || src.includes('real') || (alt && alt.length > 3)) {
      console.log(`- ${src}  [${alt}]`);
    }
  }

  // Extract meta description
  const desc = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)?.[1]
    || html.match(/<meta[^>]*property="og:description"[^>]*content="([^"]*)"/)?.[1];
  if (desc) console.log('\n--- DESCRIPTION ---\n' + desc.replace(/&amp;/g, '&').slice(0, 2000));

  // Extract headings
  console.log('\n--- HEADINGS ---');
  const seen = new Set<string>();
  for (const m of html.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)) {
    const text = m[2].replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ');
    if (text && text.length > 2 && !seen.has(text)) {
      seen.add(text);
      console.log(`H${m[1]}: ${text.slice(0, 120)}`);
    }
  }
}

analyze('/home/z/my-project/scripts/gpl_item.html', 'GPLPLUGINS');
analyze('/home/z/my-project/scripts/tm_item.html', 'THEMEMARTS');
