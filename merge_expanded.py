#!/usr/bin/env python3
"""Merge expanded notes back into subject JS files."""
import json
import re
from pathlib import Path

BASE = Path("/home/hp/myed")
CONTENT_DIR = BASE / "content" / "degrees" / "mca" / "sem1"

for subj in ["ca452", "ca453", "ca454", "ca455", "ca456"]:
    js_path = CONTENT_DIR / f"{subj}.js"
    exp_path = BASE / f"{subj}_expanded.json"

    print(f"\n=== {subj} ===")

    # Load expanded notes
    with open(exp_path) as f:
        expanded = json.load(f)
    exp_map = {c["id"]: c["notes"] for c in expanded}
    print(f"Expanded concepts: {len(exp_map)}")

    # Load subject JS
    with open(js_path) as f:
        content = f.read()

    m = re.search(r'const subjectData = (.*?);\s*\nexport default', content, re.DOTALL)
    data = json.loads(m.group(1))

    # Replace notes
    replaced = 0
    missing = 0
    for u in data["units"]:
        for c in u["concepts"]:
            if c["id"] in exp_map:
                c["notes"] = exp_map[c["id"]]
                replaced += 1
            else:
                missing += 1

    print(f"Replaced: {replaced}, Missing: {missing}")

    # Write back
    with open(js_path, "w") as f:
        f.write(f"// StudyPlay Subject Data: {data['code']} - {data['title']}\n")
        f.write(f"// Notes expanded via DeepSeek\n\n")
        f.write("const subjectData = ")
        f.write(json.dumps(data, indent=2, ensure_ascii=False))
        f.write(";\n\nexport default subjectData;\n")

    print(f"Wrote {js_path}")

print("\n=== ALL DONE ===")
