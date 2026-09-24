#!/usr/bin/env python3
"""Copy raw images to public/images with final semantic names."""
import shutil, os

RAW = '/home/z/my-project/public/images/raw'
OUT = '/home/z/my-project/public/images'
os.makedirs(OUT, exist_ok=True)

def ext(name):
    for e in ('.png', '.webp', '.jpg'):
        if os.path.exists(f'{RAW}/{name}{e}'):
            return f'{RAW}/{name}{e}'
    raise FileNotFoundError(name)

mapping = {
    # page level
    'hero.jpg': 'man06',
    'home-about.jpg': 'liv02',
    'cta-dark.jpg': 'man02',
    'banner-properties.jpg': 'man05',
    'banner-agents.jpg': 'vil06',
    'banner-services.jpg': 'kit03',
    'banner-contact.jpg': 'day05',
    'about-story.jpg': 'man08',
    'about-craft.jpg': 'vil01',
    'services-side.jpg': 'vil08',
    # properties: main + gallery (main repeated as gallery[0])
    'prop-wetherly-1.jpg': 'man01',
    'prop-wetherly-2.jpg': 'liv10',
    'prop-wetherly-3.jpg': 'kit06',
    'prop-wetherly-4.jpg': 'bed03',
    'prop-casa-del-mar-1.jpg': 'vil02',
    'prop-casa-del-mar-2.jpg': 'liv05',
    'prop-casa-del-mar-3.jpg': 'kit04',
    'prop-casa-del-mar-4.jpg': 'vil04',
    'prop-roxbury-1.jpg': 'day03',
    'prop-roxbury-2.jpg': 'liv08',
    'prop-roxbury-3.jpg': 'kit01',
    'prop-roxbury-4.jpg': 'bth08',
    'prop-palisades-1.jpg': 'vil03',
    'prop-palisades-2.jpg': 'liv01',
    'prop-palisades-3.jpg': 'kit05',
    'prop-palisades-4.jpg': 'msc01',
    'prop-skyline-1.jpg': 'pen04',
    'prop-skyline-2.jpg': 'pen01',
    'prop-skyline-3.jpg': 'pen02',
    'prop-skyline-4.jpg': 'kit02',
    'prop-canyon-1.jpg': 'man07',
    'prop-canyon-2.jpg': 'day04',
    'prop-canyon-3.jpg': 'bed02',
    'prop-canyon-4.jpg': 'bth05',
    'prop-oakmont-1.jpg': 'day07',
    'prop-oakmont-2.jpg': 'vil07',
    'prop-oakmont-3.jpg': 'msc02',
    'prop-oakmont-4.jpg': 'bth01',
    'prop-shoreline-1.jpg': 'vil10',
    'prop-shoreline-2.jpg': 'liv03',
    'prop-shoreline-3.jpg': 'bth06',
    'prop-shoreline-4.jpg': 'msc06',
    'prop-garden-1.jpg': 'day06',
    'prop-garden-2.jpg': 'day02',
    'prop-garden-3.jpg': 'vil09',
    'prop-garden-4.jpg': 'bed01',
    # agents
    'agent-diana.jpg': 'por08',
    'agent-marcus.jpg': 'por07',
    'agent-sofia.jpg': 'por02',
    'agent-james.jpg': 'por03',
    # testimonials
    'client-1.jpg': 'por01',
    'client-2.jpg': 'por10',
    'client-3.jpg': 'por04',
    'client-4.jpg': 'por09',
}

for dest, src in mapping.items():
    shutil.copy(ext(src), f'{OUT}/{dest}')
print('copied', len(mapping), 'images')

# Optimize: convert oversized pngs to jpg for web weight
from PIL import Image
for f in os.listdir(OUT):
    fp = f'{OUT}/{f}'
    if f.endswith('.jpg') and os.path.getsize(fp) > 900_000:
        img = Image.open(fp).convert('RGB')
        w, h = img.size
        if w > 2000:
            img = img.resize((2000, int(h * 2000 / w)), Image.LANCZOS)
        img.save(fp, quality=84, optimize=True)
        print('resized', f, os.path.getsize(fp) // 1024, 'KB')
print('done. total:', len(os.listdir(OUT)))
