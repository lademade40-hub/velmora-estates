import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function readPage(zai: any, url: string, outfile: string) {
  try {
    const result: any = await zai.functions.invoke('page_reader', { url });
    const html = result?.data?.html || '';
    fs.writeFileSync(outfile, html);
    const title = result?.data?.title || '';
    console.log(`OK ${url} -> ${outfile} (${html.length}b) title="${title}"`);
    return html;
  } catch (e: any) {
    console.error(`FAIL ${url}: ${e.message?.slice(0, 100)}`);
    return '';
  }
}

async function main() {
  const zai = await ZAI.create();
  // Try demo homepage again (maybe transient error) and wp-json API
  await readPage(zai, 'https://kitpro.site/aurelis/', '/home/z/my-project/scripts/try_home2.html');
  await readPage(zai, 'https://kitpro.site/aurelis/wp-json/wp/v2/pages', '/home/z/my-project/scripts/try_pages.json');
  await readPage(zai, 'https://kitpro.site/aurelis/wp-json/wp/v2/media?per_page=100', '/home/z/my-project/scripts/try_media.json');
}

main();
