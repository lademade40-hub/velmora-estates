#!/bin/bash
# Run image searches sequentially, extract JSON from stdout
cd /home/z/my-project/scripts/imgsearch

extract() {
  # extract from first { to last }
  awk '/^{/{flag=1} flag{print}' | tee "$1" > /dev/null
}

run() {
  local out="$1"; shift
  local query="$1"; shift
  local count="$1"; shift
  if [ -s "$out" ]; then echo "SKIP $out (exists)"; return; fi
  echo "RUN $out"
  z-ai image-search -q "$query" -c "$count" --gl us --no-rank 2>/dev/null | extract "$out"
  sleep 6
}

run q1_mansion.json "modern luxury mansion exterior at dusk with warm lights and swimming pool" 8
run q2_villa.json "contemporary luxury villa exterior architecture with pool" 10
run q3_living.json "luxury modern living room interior floor to ceiling windows" 10
run q4_portrait.json "professional business headshot portrait confident realtor in suit" 10
run q5_penthouse.json "luxury penthouse terrace city skyline view sunset" 6
run q6_kitchen.json "elegant luxury kitchen marble island interior" 6
run q7_bedroom.json "luxury bedroom interior panoramic windows" 5
run q8_exterior_day.json "modern luxury house exterior daylight driveway" 8

echo "=== DONE ==="
for f in q*.json; do
  local_ok=$(python3 -c "
import json,sys
try:
    d=json.load(open('$f'))
    print('$f', d.get('count'), 'OK' if d.get('success') else 'FAIL')
except Exception as e:
    print('$f parse error', e)
")
  echo "$local_ok"
done
