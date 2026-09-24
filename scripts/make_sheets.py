#!/usr/bin/env python3
"""Build contact sheets per query prefix for visual inspection."""
from PIL import Image
import os, glob

RAW = '/home/z/my-project/public/images/raw'
SHEETS = '/home/z/my-project/scripts/sheets'
os.makedirs(SHEETS, exist_ok=True)

prefixes = ['man', 'vil', 'liv', 'por', 'pen', 'kit', 'bed', 'day']
THUMB = (300, 220)
COLS = 4

for p in prefixes:
    files = sorted(glob.glob(f'{RAW}/{p}[0-9][0-9].*'))
    if not files:
        continue
    rows = (len(files) + COLS - 1) // COLS
    sheet = Image.new('RGB', (COLS * THUMB[0], rows * (THUMB[1] + 26)), 'white')
    from PIL import ImageDraw
    draw = ImageDraw.Draw(sheet)
    for i, fp in enumerate(files):
        try:
            img = Image.open(fp).convert('RGB')
            img.thumbnail(THUMB)
            x = (i % COLS) * THUMB[0] + (THUMB[0] - img.width) // 2
            y = (i // COLS) * (THUMB[1] + 26)
            sheet.paste(img, (x, y))
            draw.text((x + 6, y + THUMB[1] + 4), os.path.basename(fp), fill='black')
        except Exception as e:
            print('bad', fp, e)
    out = f'{SHEETS}/sheet_{p}.jpg'
    sheet.save(out, quality=82)
    print(out, sheet.size)
