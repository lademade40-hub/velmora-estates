#!/usr/bin/env python3
"""Download all searched images into public/images/raw with stable names."""
import json, os, urllib.request, concurrent.futures

RAW = '/home/z/my-project/public/images/raw'
os.makedirs(RAW, exist_ok=True)

queries = [
    ('q1_mansion.json', 'man'),
    ('q2_villa.json', 'vil'),
    ('q3_living.json', 'liv'),
    ('q4_portrait.json', 'por'),
    ('q5_penthouse.json', 'pen'),
    ('q6_kitchen.json', 'kit'),
    ('q7_bedroom.json', 'bed'),
    ('q8_exterior_day.json', 'day'),
]

tasks = []
for qfile, prefix in queries:
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
    if os.path.exists(dest) and os.path.getsize(dest) > 10000:
        return f'skip {name}'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=60) as resp, open(dest, 'wb') as out:
            out.write(resp.read())
        return f'ok   {name} {os.path.getsize(dest)//1024}KB'
    except Exception as e:
        return f'FAIL {name}: {e}'

with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
    for r in ex.map(dl, tasks):
        print(r)
print('TOTAL files:', len(os.listdir(RAW)))
