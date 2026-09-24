import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function readPage(url: string, outfile: string) {
  try {
    const zai = await ZAI.create();
    const result: any = await zai.functions.invoke('page_reader', { url });
    const html = result?.data?.html || '';
    fs.writeFileSync(outfile, html);
    console.log(`OK ${url} -> ${outfile} (${html.length} bytes)`);
  } catch (e: any) {
    console.error(`FAIL ${url}: ${e.message}`);
  }
}

async function main() {
  await readPage('https://themeforest.net/item/aurelis-luxury-real-estate-elementor-template-kit/65132673', '/home/z/my-project/scripts/tf_item.html');
  await readPage('https://gplplugins.club/aurelis-luxury-real-estate-elementor-template-kit/', '/home/z/my-project/scripts/gpl_item.html');
  await readPage('https://thememarts.com/aurelis-luxury-real-estate-elementor-template-kit/', '/home/z/my-project/scripts/tm_item.html');
}

main();
