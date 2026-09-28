#!/usr/bin/env python3
"""
update_diagrams.py
Replace every concept's 'svg' value in the subject .js files with the 
concept-specific SVG from the diagram modules.
"""

import re, json

from diagrams_ca452 import get_ca452_diagram
from diagrams_ca453 import get_ca453_diagram
from diagrams_ca454 import get_ca454_diagram
from diagrams_ca455 import get_ca455_diagram
from diagrams_ca456 import get_ca456_diagram

BASE = "/home/hp/myed/content/degrees/mca/sem1"

SUBJECT_FUNCS = {
    "ca452": get_ca452_diagram,
    "ca453": get_ca453_diagram,
    "ca454": get_ca454_diagram,
    "ca455": get_ca455_diagram,
    "ca456": get_ca456_diagram,
}

def escape_svg_for_json(svg: str) -> str:
    """Escape SVG string so it can be safely embedded as a JSON string value."""
    # Compact whitespace inside the SVG (remove leading spaces per line)
    lines = [line.strip() for line in svg.strip().split('\n') if line.strip()]
    compact = ' '.join(lines)
    # Now escape for JSON string
    return compact.replace('\\', '\\\\').replace('"', '\\"')

def process_subject(code: str):
    fn = SUBJECT_FUNCS[code]
    js_path = f"{BASE}/{code}.js"

    with open(js_path, 'r', encoding='utf-8') as f:
        text = f.read()

    # Find all concept blocks via regex:
    # Each concept has: "id": "<concept-id>", "title": "...", "subtitle": ...
    # and later: "diagrams": [{ ... "svg": "..." }]
    #
    # Strategy: split the file into "concept segments" around each "id" occurrence
    # that is followed by "subtitle" (marks a concept, not a diagram entry).
    # Then, in each segment, replace the "svg": "..." inside "diagrams": [

    # Step 1: Collect all concept ids in order (they appear before "subtitle")
    concept_id_pattern = re.compile(
        r'"id"\s*:\s*"([^"]+)"\s*,\s*"title"\s*:\s*"[^"]*"\s*,\s*"subtitle"'
    )
    concept_ids = concept_id_pattern.findall(text)

    if not concept_ids:
        print(f"  [{code}] ERROR: No concepts found via pattern!")
        return

    print(f"  [{code}] Found {len(concept_ids)} concepts: {concept_ids}")

    # Step 2: For each concept, find the "diagrams" block that follows its "id" definition
    # and replace the svg field inside it.
    # We process them in order, using cursor positions.
    
    result = text
    cursor = 0  # track search position through file

    for cid in concept_ids:
        # Generate new SVG
        svg_raw = fn(cid)
        svg_escaped = escape_svg_for_json(svg_raw)
        new_svg_field = f'"svg": "{svg_escaped}"'

        # Find this concept's position in result starting from current cursor
        pos_start = result.find(f'"id": "{cid}",', cursor)
        if pos_start == -1:
            pos_start = result.find(f'"id": "{cid}"', cursor)
        if pos_start == -1:
            print(f"    [{code}] WARNING: Could not find concept id {cid!r} after cursor {cursor}")
            continue

        # Now find "diagrams": [ after pos_start
        diagrams_marker = '"diagrams": ['
        diag_pos = result.find(diagrams_marker, pos_start)
        if diag_pos == -1:
            print(f"    [{code}/{cid}] WARNING: Could not find diagrams block")
            continue

        # Find "svg": "..." within the diagrams block
        svg_pattern = re.compile(r'"svg"\s*:\s*"((?:[^"\\]|\\.)*)"\s*')
        svg_match = svg_pattern.search(result, diag_pos, diag_pos + 100000)
        if not svg_match:
            print(f"    [{code}/{cid}] WARNING: Could not find svg field")
            continue

        # Replace
        result = result[:svg_match.start()] + new_svg_field + result[svg_match.end():]
        cursor = svg_match.start() + len(new_svg_field)

        print(f"    [{code}/{cid}] -> SVG updated ({len(svg_raw)} bytes raw)")

    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(result)
    print(f"  [{code}] Written to {js_path}")


if __name__ == "__main__":
    for code in ["ca452", "ca453", "ca454", "ca455", "ca456"]:
        print(f"\n=== Processing {code} ===")
        try:
            process_subject(code)
        except Exception as e:
            import traceback
            print(f"  [{code}] FAILED: {e}")
            traceback.print_exc()
    print("\n=== Done ===")
