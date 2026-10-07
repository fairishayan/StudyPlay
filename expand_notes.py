#!/usr/bin/env python3
"""Auto-expand StudyPlay concept notes using DeepSeek API."""
import json
import os
import sys
import time
from pathlib import Path
from urllib import request, error

API_KEY = "sk-43a256a25106444d81accf1a2a61d3a7"
if not API_KEY:
    print("ERROR: Set DEEPSEEK_API_KEY environment variable")
    sys.exit(1)

API_URL = "https://api.deepseek.com/v1/chat/completions"
MODEL = "deepseek-chat"

SYSTEM_PROMPT = """You are an academic content expander for StudyPlay, an MCA study platform.

TASK: Expand the given concept's notes to academic depth.

RULES:
1. Preserve ALL existing content (never remove anything).
2. Add these sections: Academic Definition, Working Principle, Detailed Examples, Mathematical Formulations, Comparative Analysis (table), Common Mistakes, Exam Tips.
3. Use ONLY facts present in the given notes. Do NOT fabricate numbers or citations.
4. Target 4000-6000 characters total.
5. Use Markdown: ##, ###, tables, code blocks, bold, LaTeX math where appropriate.
6. Keep original terminology.

OUTPUT: Return ONLY the expanded markdown notes. No preamble, no JSON wrapper."""


def call_api(notes, title):
    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": f"Concept title: {title}\n\nExisting notes:\n\n{notes}"}
        ],
        "temperature": 0.3,
        "max_tokens": 8000,
    }
    req = request.Request(
        API_URL,
        data=json.dumps(payload).encode('utf-8'),
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {API_KEY}",
        },
        method="POST",
    )
    with request.urlopen(req, timeout=180) as resp:
        data = json.loads(resp.read().decode('utf-8'))
    return data["choices"][0]["message"]["content"]


def expand_file(input_path, output_path):
    with open(input_path) as f:
        concepts = json.load(f)

    done = {}
    if output_path.exists():
        try:
            with open(output_path) as f:
                for item in json.load(f):
                    done[item["id"]] = item
            print(f"Resuming: {len(done)} concepts already done")
        except Exception:
            done = {}

    total = len(concepts)
    for i, c in enumerate(concepts, 1):
        if c["id"] in done:
            continue

        title = c["title"]
        notes = c["notes"]
        print(f"[{i}/{total}] Expanding: {title}")
        sys.stdout.flush()

        for attempt in range(3):
            try:
                expanded = call_api(notes, title)
                done[c["id"]] = {
                    "id": c["id"],
                    "unit": c["unit"],
                    "title": title,
                    "notes": expanded,
                    "notes_len": len(expanded),
                }
                with open(output_path, "w") as f:
                    json.dump(list(done.values()), f, indent=2, ensure_ascii=False)
                print(f"   OK {len(expanded)} chars")
                sys.stdout.flush()
                break
            except error.HTTPError as e:
                print(f"   HTTP {e.code}: retry {attempt+1}/3")
                sys.stdout.flush()
                time.sleep(5 * (attempt + 1))
            except Exception as e:
                print(f"   Error: {e}: retry {attempt+1}/3")
                sys.stdout.flush()
                time.sleep(5 * (attempt + 1))
        else:
            print(f"   FAILED: {title}")
            sys.stdout.flush()

        time.sleep(1)

    print(f"\nDone. Output: {output_path}")


if __name__ == "__main__":
    base = Path("/home/hp/myed")
    subjects = ["ca452", "ca453", "ca454", "ca455", "ca456"]

    for subj in subjects:
        inp = base / f"{subj}_concepts.json"
        if not inp.exists():
            print(f"Skip {subj}: {inp} not found")
            continue
        out = base / f"{subj}_expanded.json"
        print(f"\n{'='*60}\nSubject: {subj}\n{'='*60}")
        sys.stdout.flush()
        expand_file(inp, out)
