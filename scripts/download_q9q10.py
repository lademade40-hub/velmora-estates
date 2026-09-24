#!/usr/bin/env python3
"""Download q9/q10 and build contact sheets."""
import json, os, urllib.request, concurrent.futures
from PIL import Image, ImageDraw
import glob

RAW = '/home/z/my-project/public/images/raw'
os.makedirs(RAW, exist_ok=True)

tasks = []
for qfile, prefix in [('q9_bath.json', 'bth'), ('q10_misc.json', 'msc')]:
    with open(f'/home/z/my-project/scripts/imgsearch/{qfile}') as f:
        data = json.load(f)
    for i, r in enumerate(data.get('results', [])):
        url = r['original_url']
        ext = '.jpg'
        low = url.lower()
        if '.png' in low: ext = '.png'
        elif '.webp' in low: ext = '.webp'
        tasks.append((url, f'{prefix}{i+1:02d}{ext}'))

def dl(args):
    url, name = args
    dest = os.path.join(RAW, name)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=60) as resp, open(dest, 'wb') as out:
            out.write(resp.read())
        return f'ok {name}'
    except Exception as e:
        return f'FAIL {name}: {e}'

with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
    for r in ex.map(dl, tasks):
        print(r)

# contact sheet
SHEETS = '/home/z/my-project/scripts/sheets'
THUMB = (300, 220)
COLS = 4
for p in ['bth', 'msc']:
    files = sorted(glob.glob(f'{RAW}/{p}[0-9][0-9].*'))
    if not files: continue
    rows = (len(files) + COLS - 1) // COLS
    sheet = Image.new('RGB', (COLS * THUMB[0], rows * (THUMB[1] + 26)), 'white')
    draw = ImageDraw.Draw(sheet)
    for i, fp in enumerate(files):
        img = Image.open(fp).convert('RGB')
        img.thumbnail(THUMB)
        x = (i % COLS) * THUMB[0] + (THUMB[0] - img.width) // 2
        y = (i // COLS) * (THUMB[1] + 26)
        sheet.paste(img, (x, y))
        draw.text((x + 6, y + THUMB[1] + 4), os.path.basename(fp), fill='black')
    sheet.save(f'{SHEETS}/sheet_{p}.jpg', quality=82)
    print('sheet', p)
