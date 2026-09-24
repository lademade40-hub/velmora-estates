#!/usr/bin/env python3
"""Download Google Fonts woff2 files for self-hosting via next/font/local.
Cormorant Garamond (display serif) + Jost (sans)."""
import re, os, urllib.request

FDIR = '/home/z/my-project/src/fonts'
os.makedirs(FDIR, exist_ok=True)
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'

CSS = [
    ('cormorant', 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'),
    ('jost', 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap'),
]

for name, url in CSS:
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    css = urllib.request.urlopen(req, timeout=60).read().decode()
    # parse blocks: font-style, font-weight, url, unicode-range. Keep latin subset only.
    blocks = re.findall(r'/\* (\S+) \*/\s*@font-face\s*\{([^}]+)\}', css)
    seen = set()
    for subset, body in blocks:
        if subset != 'latin':
            continue
        style = re.search(r'font-style:\s*(\w+)', body).group(1)
        weight = re.search(r'font-weight:\s*(\d+)', body).group(1)
        src = re.search(r'url\((\S+?)\)\s*format', body).group(1)
        key = (style, weight)
        if key in seen:
            continue
        seen.add(key)
        fname = f'{name}-{weight}{"-italic" if style == "italic" else ""}.woff2'
        dest = os.path.join(FDIR, fname)
        r2 = urllib.request.Request(src, headers={'User-Agent': UA})
        with urllib.request.urlopen(r2, timeout=60) as resp, open(dest, 'wb') as out:
            out.write(resp.read())
        print(fname, os.path.getsize(dest) // 1024, 'KB')
