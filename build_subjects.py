
# build_subjects.py — v2
# Fixed: Each numbered ## heading becomes its own concept
# No more "3 concepts per unit" collapse
import os
import re
import json
import sys
from diagram_bank import get_diagram
from quiz_bank import generate_quiz_and_cards

BASE_DIR = "/home/hp/myed"
CONTENT_DIR = os.path.join(BASE_DIR, "content")
MCA_SEM1_DIR = os.path.join(CONTENT_DIR, "degrees", "mca", "sem1")

os.makedirs(MCA_SEM1_DIR, exist_ok=True)

SUBJECTS_CONFIG = [
    {
        "id": "ca452",
        "code": "CA452",
        "title": "Computer Organization & Architecture",
        "filename": "computer-organization-architecture.md",
        "icon": "Cpu",
        "description": "Digital logic circuits, CPU organization, bus architecture, memory hierarchy, pipelining, and multiprocessor systems.",
        "unitsCount": 5
    },
    {
        "id": "ca453",
        "code": "CA453",
        "title": "C Programming",
        "filename": "c-programming.md",
        "icon": "Code",
        "description": "Computer fundamentals, networks, C syntax, pointers, data structures, dynamic memory, and file streams.",
        "unitsCount": 5
    },
    {
        "id": "ca454",
        "code": "CA454",
        "title": "Unix & Shell Programming",
        "filename": "unix-shell.md",
        "icon": "Terminal",
        "description": "UNIX architecture, shell scripting, sed & awk stream processing, system calls, IPC, and system administration.",
        "unitsCount": 5
    },
    {
        "id": "ca455",
        "code": "CA455",
        "title": "Software Engineering",
        "filename": "software-engineering.md",
        "icon": "Layers",
        "description": "SDLC models, requirements analysis, modular design, cohesion/coupling, size metrics, white/black box testing, and SQA.",
        "unitsCount": 4
    },
    {
        "id": "ca456",
        "code": "CA456",
        "title": "Operating System",
        "filename": "operating-system.md",
        "icon": "Server",
        "description": "Process management, CPU scheduling algorithms, synchronization, deadlocks, virtual memory, paging, and file allocation.",
        "unitsCount": 4
    }
]


def slugify(text):
    text = re.sub(r'[^a-zA-Z0-9\s-]', '', str(text)).strip().lower()
    text = re.sub(r'[\s]+', '-', text)
    return text[:60].strip('-')


def is_numbered_heading(heading_text):
    """Check if a ## heading starts with a number like '1. ' or '12. '"""
    return re.match(r'^\d+\.\s+', heading_text.strip()) is not None


def clean_heading(heading_text):
    """Remove leading numbering like '1. ' from heading."""
    return re.sub(r'^\d+\.\s+', '', heading_text.strip()).strip()


def build_concept(subject_code, unit_num, c_idx, title, notes, diagram_hint=None):
    """Build a single concept object from source notes."""
    c_slug = slugify(title)
    if not c_slug:
        c_slug = f"concept-{unit_num}-{c_idx}"

    # Estimate read time: ~1200 chars per minute, clamp between 8 and 45 min
    char_count = len(notes)
    est_min = max(8, min(45, char_count // 1200))

    summary = f"Complete study notes on {title}: definitions, principles, worked examples, formulas, and exam-relevant details derived from the syllabus source."

    # Diagram selection
    diag_key = f"{subject_code} {title} {diagram_hint or ''}".strip().lower()
    try:
        diag_svg = get_diagram(diag_key, title)
    except Exception as e:
        print(f"    [warn] diagram failed for '{title}': {e}")
        diag_svg = get_diagram("flow", title)

    # Quiz + flashcards
    try:
        quiz, cards = generate_quiz_and_cards(subject_code, unit_num, c_idx, title, notes)
    except Exception as e:
        print(f"    [warn] quiz generation failed for '{title}': {e}")
        quiz, cards = [], []

    return {
        "id": c_slug,
        "title": title,
        "subtitle": f"{subject_code.upper()} Unit {unit_num} Concept {c_idx}",
        "summary": summary,
        "estimatedMinutes": est_min,
        "notes": notes.strip(),
        "diagrams": [
            {
                "id": f"diag-{subject_code}-u{unit_num}-c{c_idx}",
                "title": title,
                "caption": f"Concept visualization for {title}",
                "svg": diag_svg
            }
        ],
        "quiz": quiz,
        "flashcards": cards
    }


def extract_concepts_from_unit(subject_code, unit_num, unit_text, title_prefix=""):
    """
    Extract concepts from a single unit's text.

    Strategy:
    - Split by '## ' headings
    - Each NUMBERED heading (e.g. '## 1. Topic') becomes its own concept
    - NON-numbered headings (e.g. '## UNIT 1 COMPLETE FLOW') become appendices
      attached to the previous concept
    - Preserves content between headings as notes for the preceding concept
    """
    # Split by ## headings (lookahead keeps the heading with its section)
    parts = re.split(r'(?m)(?=^##\s+)', unit_text)
    unit_intro = parts[0].strip() if parts else ""
    sections = parts[1:] if len(parts) > 1 else []

    if not sections:
        # Fallback: whole unit becomes one concept
        title = clean_heading(unit_text.split('\n')[0].replace('#', '').strip()) or f"Unit {unit_num} Overview"
        return [build_concept(subject_code, unit_num, 1, title_prefix + title, unit_text)]

    concepts = []
    appendix = []

    for sec in sections:
        lines = sec.split('\n', 1)
        first_line = lines[0].strip() if lines else ""
        heading = first_line.replace('##', '', 1).strip()
        body = lines[1] if len(lines) > 1 else ""

        if is_numbered_heading(heading):
            clean_title = clean_heading(heading)
            full_notes = f"## {clean_title}\n\n{body.strip()}" if body else f"## {clean_title}"
            concepts.append({
                "title": title_prefix + clean_title,
                "content": full_notes
            })
        else:
            # Non-numbered section (summary, comparison, etc.)
            appendix.append({
                "title": heading,
                "content": sec.strip()
            })

    # If we found no numbered sections, treat every ## as a concept
        # If we found no numbered sections, treat every ## as a concept
        # Prepend unit_intro (text before first ##) to the first concept
    # Strip the "# UNIT X: ..." header line, keep the intro paragraph
    if unit_intro.strip() and concepts:
        intro_lines = unit_intro.strip().split('\n', 1)
        # Skip the header line, keep rest
        if len(intro_lines) > 1 and intro_lines[1].strip():
            real_intro = intro_lines[1].strip()
            concepts[0]["content"] = real_intro + "\n\n---\n\n" + concepts[0]["content"]

    if not concepts:
        for sec in sections:
            lines = sec.split('\n', 1)
            heading = lines[0].strip().replace('##', '', 1).strip()
            body = lines[1] if len(lines) > 1 else ""
            concepts.append({
                "title": title_prefix + heading,
                "content": f"## {heading}\n\n{body.strip()}"
            })
        appendix = []

    # Attach appendices (summary/reference sections) to the LAST concept
    if appendix and concepts:
        extra = "\n\n---\n\n".join([ap["content"] for ap in appendix])
        concepts[-1]["content"] += "\n\n---\n\n" + extra

    # Build concept objects
    result = []
    used_slugs = set()
    for idx, c in enumerate(concepts):
        c_title = c["title"].strip()
        base_slug = slugify(c_title) or f"concept-{idx+1}"
        # Ensure slug uniqueness
        slug = base_slug
        suffix = 2
        while slug in used_slugs:
            slug = f"{base_slug}-{suffix}"
            suffix += 1
        used_slugs.add(slug)

        concept_obj = build_concept(subject_code, unit_num, idx + 1, c_title, c["content"])
        concept_obj["id"] = slug  # override to keep unique
        result.append(concept_obj)

    return result


def parse_markdown_subject(filepath, subject_code):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Split into top-level unit chunks
    raw_units = [u for u in re.split(r'(?m)(?=^#\s+UNIT\s+)', text)
                 if u.strip().startswith('# UNIT')]

    # ─────────────────────────────────────────────────────────
    # SPECIAL CASE: CA453 (C Programming) — Unit 1 has 4 parts
    # ─────────────────────────────────────────────────────────
    if subject_code.lower() == "ca453":
        part1_to_4 = raw_units[:4]
        other_units = raw_units[4:]

        # Merge all 4 parts into Unit 1, keeping part prefixes
        unit1_concepts = []
        for p_idx, p_text in enumerate(part1_to_4):
            part_header = p_text.strip().split('\n')[0].replace('#', '').strip()
            # Extract "PART N: TITLE" from header
            m = re.search(r'PART\s+\d+[:\-]\s*(.+)', part_header, re.IGNORECASE)
            part_label = m.group(1).strip() if m else f"Part {p_idx+1}"
            prefix = f"[{part_label}] " if len(part1_to_4) > 1 else ""
            concepts = extract_concepts_from_unit(
                subject_code="ca453",
                unit_num=1,
                unit_text=p_text,
                title_prefix=prefix
            )
            # Re-number them sequentially
            for c in concepts:
                c["subtitle"] = f"CA453 Unit 1 Concept {len(unit1_concepts) + 1}"
            unit1_concepts.extend(concepts)

        # Re-index slugs to avoid collisions
        seen = set()
        for i, c in enumerate(unit1_concepts):
            base = slugify(c["title"])
            slug = base
            n = 2
            while slug in seen:
                slug = f"{base}-{n}"
                n += 1
            seen.add(slug)
            c["id"] = slug

        parsed_units = [{
            "id": "unit-1",
            "unitNumber": 1,
            "title": "Unit 1: Computer Fundamentals, Software, Networks & Internet Protocols",
            "co": "CO1",
            "description": "Comprehensive foundation in computer architecture, hardware evolution, software categories, network topologies, and TCP/IP stack.",
            "concepts": unit1_concepts
        }]

        # Units 2..5
        for u_idx, u_text in enumerate(other_units):
            actual_unit_num = u_idx + 2
            u_header = u_text.strip().split('\n')[0].replace('#', '').strip()
            concepts = extract_concepts_from_unit(
                subject_code="ca453",
                unit_num=actual_unit_num,
                unit_text=u_text
            )
            parsed_units.append({
                "id": f"unit-{actual_unit_num}",
                "unitNumber": actual_unit_num,
                "title": f"Unit {actual_unit_num}: {u_header}",
                "co": f"CO{actual_unit_num}",
                "description": f"Curriculum coverage for Unit {actual_unit_num}: {u_header}.",
                "concepts": concepts
            })

        return parsed_units

    # ─────────────────────────────────────────────────────────
    # STANDARD SUBJECTS (CA452, CA454, CA455, CA456)
    # ─────────────────────────────────────────────────────────
    parsed_units = []
    for u_idx, u_text in enumerate(raw_units):
        actual_unit_num = u_idx + 1
        u_header = u_text.strip().split('\n')[0].replace('#', '').strip()
        concepts = extract_concepts_from_unit(
            subject_code=subject_code,
            unit_num=actual_unit_num,
            unit_text=u_text
        )
        parsed_units.append({
            "id": f"unit-{actual_unit_num}",
            "unitNumber": actual_unit_num,
            "title": f"Unit {actual_unit_num}: {u_header}",
            "co": f"CO{actual_unit_num}",
            "description": f"Deep study notes and assessment engine for Unit {actual_unit_num}.",
            "concepts": concepts
        })
    return parsed_units


def audit_only():
    """Print what concepts WILL be generated without writing files."""
    print("=" * 70)
    print("AUDIT MODE — NO FILES WILL BE WRITTEN")
    print("=" * 70)
    grand_total = 0
    for scfg in SUBJECTS_CONFIG:
        md_path = os.path.join(BASE_DIR, scfg["filename"])
        print(f"\n▶ {scfg['code']} — {scfg['title']}")
        print(f"  Source: {scfg['filename']}")
        units = parse_markdown_subject(md_path, scfg["id"])
        subj_total = 0
        for u in units:
            n = len(u["concepts"])
            subj_total += n
            print(f"  Unit {u['unitNumber']:>2}: {n:>3} concepts")
            for c in u["concepts"][:5]:
                print(f"      • {c['title']}  ({c['estimatedMinutes']} min)")
            if n > 5:
                print(f"      ... and {n - 5} more")
        print(f"  ── SUBJECT TOTAL: {subj_total} concepts")
        grand_total += subj_total
    print("\n" + "=" * 70)
    print(f"GRAND TOTAL: {grand_total} concepts across all 5 subjects")
    print("=" * 70)


def build_all():
    search_index = []
    registered_subjects = []

    print("Beginning StudyPlay Subject Processing (v2 — full concept extraction)...\n")

    for scfg in SUBJECTS_CONFIG:
        sub_id = scfg["id"]
        sub_code = scfg["code"]
        sub_title = scfg["title"]
        md_path = os.path.join(BASE_DIR, scfg["filename"])

        print(f"▶ Processing {sub_code} ({scfg['filename']})...")
        try:
            units = parse_markdown_subject(md_path, sub_id)
        except Exception as e:
            print(f"  [ERROR] Failed to parse {md_path}: {e}")
            continue

        concept_total = sum(len(u["concepts"]) for u in units)
        print(f"  → {len(units)} units, {concept_total} concepts")

        subject_data = {
            "id": sub_id,
            "code": sub_code,
            "title": sub_title,
            "degree": "mca",
            "semester": 1,
            "description": scfg["description"],
            "units": units
        }

        out_file = os.path.join(MCA_SEM1_DIR, f"{sub_id}.js")
        with open(out_file, 'w', encoding='utf-8') as f:
            f.write(f"// StudyPlay Subject Data: {sub_code} - {sub_title}\n")
            f.write(f"// Generated from university syllabus markdown (v2 — full concept extraction)\n\n")
            f.write("const subjectData = ")
            f.write(json.dumps(subject_data, indent=2, ensure_ascii=False))
            f.write(";\n\nexport default subjectData;\n")

        print(f"  → Wrote {out_file}")

        for u in units:
            for c in u["concepts"]:
                search_index.append({
                    "degreeId": "mca",
                    "degreeName": "MCA",
                    "semesterId": "sem1",
                    "semesterNumber": 1,
                    "subjectId": sub_id,
                    "subjectCode": sub_code,
                    "subjectTitle": sub_title,
                    "unitId": u["id"],
                    "unitNumber": u["unitNumber"],
                    "unitTitle": u["title"],
                    "conceptId": c["id"],
                    "conceptTitle": c["title"],
                    "subtitle": c["subtitle"],
                    "summary": c["summary"],
                    "quizCount": len(c["quiz"]),
                    "flashcardCount": len(c["flashcards"])
                })

        registered_subjects.append({
            "id": sub_id,
            "code": sub_code,
            "title": sub_title,
            "description": scfg["description"],
            "unitsCount": len(units),
            "conceptsCount": concept_total,
            "icon": scfg["icon"]
        })

    # ───── Write searchIndex.js ─────
    search_index_file = os.path.join(CONTENT_DIR, "searchIndex.js")
    with open(search_index_file, 'w', encoding='utf-8') as f:
        f.write("// StudyPlay Static Client-Side Search Index\n")
        f.write("// Auto-generated from source markdown\n\n")
        f.write("export const searchIndex = ")
        f.write(json.dumps(search_index, indent=2, ensure_ascii=False))
        f.write(";\n\nexport default searchIndex;\n")
    print(f"\n→ Wrote searchIndex.js with {len(search_index)} concepts")

    # ───── Write registry.js ─────
    registry_file = os.path.join(CONTENT_DIR, "registry.js")
    with open(registry_file, 'w', encoding='utf-8') as f:
        f.write("// StudyPlay Content Registry\n")
        f.write("// AUTO-GENERATED — do not edit by hand. Run build_subjects.py to regenerate.\n\n")
        f.write("export const registry = {\n")
        f.write("  degrees: [\n")
        f.write("    {\n")
        f.write("      id: 'mca',\n")
        f.write("      name: 'Master of Computer Applications',\n")
        f.write("      shortName: 'MCA',\n")
        f.write("      description: 'Advanced curriculum covering computer systems, programming, operating systems, and engineering.',\n")
        f.write("      semesters: [\n")
        f.write("        {\n")
        f.write("          id: 'sem1',\n")
        f.write("          number: 1,\n")
        f.write("          name: 'Semester 1',\n")
        f.write("          subjects: [\n")
        for s in registered_subjects:
            sid = s["id"]
            desc = s["description"].replace("'", "\\'")
            f.write("            {\n")
            f.write(f"              id: '{sid}',\n")
            f.write(f"              code: '{s['code']}',\n")
            f.write(f"              title: '{s['title']}',\n")
            f.write(f"              description: '{desc}',\n")
            f.write(f"              unitsCount: {s['unitsCount']},\n")
            f.write(f"              conceptsCount: {s['conceptsCount']},\n")
            f.write(f"              icon: '{s['icon']}',\n")
            f.write(f"              loader: () => import('./degrees/mca/sem1/{sid}.js')\n")
            f.write("            },\n")
        f.write("          ]\n")
        f.write("        },\n")
        f.write("        { id: 'sem2', number: 2, name: 'Semester 2', isUpcoming: true, subjects: [] },\n")
        f.write("        { id: 'sem3', number: 3, name: 'Semester 3', isUpcoming: true, subjects: [] },\n")
        f.write("        { id: 'sem4', number: 4, name: 'Semester 4', isUpcoming: true, subjects: [] }\n")
        f.write("      ]\n")
        f.write("    },\n")
        f.write("    {\n")
        f.write("      id: 'msc-ai',\n")
        f.write("      name: 'MSc Artificial Intelligence (Sacred Heart College)',\n")
        f.write("      shortName: 'MSc AI',\n")
        f.write("      description: 'Specialized syllabus in Machine Learning, Deep Learning, NLP, Computer Vision, and Autonomous Agents.',\n")
        f.write("      isUpcoming: true,\n")
        f.write("      semesters: [\n")
        f.write("        { id: 'sem1', number: 1, name: 'Semester 1', isUpcoming: true, subjects: [] },\n")
        f.write("        { id: 'sem2', number: 2, name: 'Semester 2', isUpcoming: true, subjects: [] },\n")
        f.write("        { id: 'sem3', number: 3, name: 'Semester 3', isUpcoming: true, subjects: [] },\n")
        f.write("        { id: 'sem4', number: 4, name: 'Semester 4', isUpcoming: true, subjects: [] }\n")
        f.write("      ]\n")
        f.write("    }\n")
        f.write("  ]\n")
        f.write("};\n\nexport default registry;\n")
    print(f"→ Wrote registry.js")

    print("\n" + "=" * 70)
    print("SUMMARY")
    print("=" * 70)
    for s in registered_subjects:
        print(f"  {s['code']}: {s['unitsCount']} units, {s['conceptsCount']} concepts")
    print(f"  TOTAL: {sum(s['conceptsCount'] for s in registered_subjects)} concepts")
    print("=" * 70)


if __name__ == "__main__":
    if "--audit" in sys.argv:
        audit_only()
    else:
        build_all()
