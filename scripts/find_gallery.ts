import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function search(zai: any, query: string) {
  try {
    const results: any[] = await zai.functions.invoke('web_search', { query, num: 10 });
    console.log(`\n=== ${query} ===`);
    for (const r of results) {
      console.log(`- ${r.url} | ${r.name}`);
    }
  } catch (e: any) {
    console.error('search fail:', e.message?.slice(0, 80));
  }
}

async function main() {
  const zai = await ZAI.create();
  await search(zai, '"aurelis" "large_preview" s3.envato.com');
  await search(zai, 'aurelis real estate template kit screenshots "01_home"');
  await search(zai, 'aurelis kitpro template "02_" preview jpg');
}

main();
