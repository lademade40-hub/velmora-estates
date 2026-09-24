import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function main() {
  try {
    const zai = await ZAI.create();
    const result = await zai.functions.invoke('page_reader', {
      url: 'https://kitpro.site/aurelis/'
    });
    fs.writeFileSync('/home/z/my-project/scripts/aurelis_reader.json', JSON.stringify(result, null, 2));
    const content = (result as any)?.content || (result as any)?.html || JSON.stringify(result);
    console.log('LEN:', content.length);
    console.log(content.slice(0, 2000));
  } catch (e: any) {
    console.error('READER ERROR:', e.message);
  }
}

main();
