# build_subjects.py
import os
import re
import json
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
    text = re.sub(r'[^a-zA-Z0-9\s-]', '', text).strip().lower()
    return re.sub(r'[\s]+', '-', text)

def parse_markdown_subject(filepath, subject_code):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Split into units
    raw_units = [u for u in re.split(r'(?m)(?=^#\s+UNIT\s+)', text) if u.strip().startswith('# UNIT')]
    
    # Special handling for CA453 where Unit 1 has 4 parts
    if subject_code.lower() == "ca453":
        # First 4 chunks in raw_units are Part 1, 2, 3, 4 of Unit 1
        part1_to_4 = raw_units[:4]
        other_units = raw_units[4:] # Units 2, 3, 4, 5
        parsed_units = []
        
        # Unit 1
        unit1_title = "Unit 1: Computer Fundamentals, Software, Networks & Internet Protocols"
        unit1_concepts = []
        part_names = [
            ("Computer Fundamentals & Hardware Generations", "computer-fundamentals", "kmap"),
            ("Software Classification, Operating Systems & DOS", "software-and-dos", "flow"),
            ("Computer Networks & Topologies", "computer-networks", "network"),
            ("Internet Architecture & TCP/IP Model", "internet-and-tcp-ip", "tcp")
        ]
        for p_idx, (p_text, (p_title, p_slug, p_diag)) in enumerate(zip(part1_to_4, part_names)):
            secs = [s for s in re.split(r'(?m)(?=^##\s+)', p_text) if s.strip().startswith('## ')]
            notes_content = p_text.strip()
            summary = f"In-depth analysis of {p_title.lower()} covering foundational principles, system taxonomies, and architectural design."
            diag_svg = get_diagram(p_diag, p_title)
            quiz, cards = generate_quiz_and_cards("ca453", 1, p_idx + 1, p_title, notes_content)
            unit1_concepts.append({
                "id": p_slug,
                "title": p_title,
                "subtitle": f"CA453 Unit 1 Part {p_idx+1} Academic Mastery",
                "summary": summary,
                "estimatedMinutes": 20,
                "notes": notes_content,
                "diagrams": [
                    {
                        "id": f"diag-ca453-u1-{p_slug}",
                        "title": p_title,
                        "caption": f"Architectural visualization of {p_title.lower()}",
                        "svg": diag_svg
                    }
                ],
                "quiz": quiz,
                "flashcards": cards
            })
            
        parsed_units.append({
            "id": "unit-1",
            "unitNumber": 1,
            "title": unit1_title,
            "co": "CO1",
            "description": "Comprehensive foundation in computer architecture, hardware evolution, software categories, network topologies, and TCP/IP stack.",
            "concepts": unit1_concepts
        })
        
        # Now Units 2 to 5 for CA453
        for u_idx, u_text in enumerate(other_units):
            actual_unit_num = u_idx + 2
            u_lines = u_text.strip().split('\n')
            u_header = u_lines[0].replace('# ', '').strip()
            secs = [s for s in re.split(r'(?m)(?=^##\s+)', u_text) if s.strip().startswith('## ')]
            concepts = split_sections_into_concepts("ca453", actual_unit_num, u_header, secs, u_text)
            parsed_units.append({
                "id": f"unit-{actual_unit_num}",
                "unitNumber": actual_unit_num,
                "title": f"Unit {actual_unit_num}: {u_header}",
                "co": f"CO{actual_unit_num}",
                "description": f"Curriculum coverage for Unit {actual_unit_num}: {u_header}.",
                "concepts": concepts
            })
        return parsed_units
    else:
        # Standard subjects (CA452, CA454, CA455, CA456)
        parsed_units = []
        for u_idx, u_text in enumerate(raw_units):
            actual_unit_num = u_idx + 1
            u_lines = u_text.strip().split('\n')
            u_header = u_lines[0].replace('# ', '').strip()
            secs = [s for s in re.split(r'(?m)(?=^##\s+)', u_text) if s.strip().startswith('## ')]
            concepts = split_sections_into_concepts(subject_code, actual_unit_num, u_header, secs, u_text)
            parsed_units.append({
                "id": f"unit-{actual_unit_num}",
                "unitNumber": actual_unit_num,
                "title": f"Unit {actual_unit_num}: {u_header}",
                "co": f"CO{actual_unit_num}",
                "description": f"Deep study notes and assessment engine for Unit {actual_unit_num}.",
                "concepts": concepts
            })
        return parsed_units

def split_sections_into_concepts(subject_code, unit_num, unit_header, secs, full_unit_text):
    num_secs = len(secs)
    if num_secs == 0:
        secs = [full_unit_text]
        num_secs = 1

    # Split into 3 balanced concepts
    c1_count = max(1, num_secs // 3)
    c2_count = max(1, (num_secs - c1_count) // 2)
    
    group1 = secs[:c1_count]
    group2 = secs[c1_count:c1_count + c2_count]
    group3 = secs[c1_count + c2_count:]
    if not group3:
        group3 = group2
        group2 = []
    
    groups = [g for g in [group1, group2, group3] if g]
    
    concepts = []
    for c_idx, g_secs in enumerate(groups):
        first_h2 = ""
        for line in g_secs[0].split('\n'):
            if line.startswith('## '):
                first_h2 = line.replace('## ', '').strip()
                # strip numbering like 1. 2.
                first_h2 = re.sub(r'^[0-9]+\.\s*', '', first_h2)
                break
        
        c_title = f"{first_h2}" if first_h2 else f"Part {c_idx+1} Principles"
        # make slug
        c_slug = slugify(c_title)
        if not c_slug or c_slug in [c['id'] for c in concepts]:
            c_slug = f"concept-{c_idx+1}-{slugify(unit_header)[:20]}"

        notes_content = "\n\n".join(g_secs).strip()
        summary = f"Comprehensive study notes covering {c_title} with full theoretical rigor, proofs, diagrams, and code implementations."
        
        # diagram selection
        diag_key = f"{subject_code} {unit_header} {c_title}".lower()
        diag_svg = get_diagram(diag_key, c_title)
        
        quiz, cards = generate_quiz_and_cards(subject_code, unit_num, c_idx + 1, c_title, notes_content)
        
        concepts.append({
            "id": c_slug,
            "title": c_title,
            "subtitle": f"{subject_code.upper()} Unit {unit_num} Concept {c_idx+1}",
            "summary": summary,
            "estimatedMinutes": 18 + (len(g_secs) * 2),
            "notes": notes_content,
            "diagrams": [
                {
                    "id": f"diag-{subject_code}-u{unit_num}-c{c_idx+1}",
                    "title": c_title,
                    "caption": f"Polished SVG architectural visualization for {c_title}",
                    "svg": diag_svg
                }
            ],
            "quiz": quiz,
            "flashcards": cards
        })
    return concepts

def build_all():
    search_index = []
    registered_subjects = []

    print("Beginning StudyPlay Subject Processing...")

    for scfg in SUBJECTS_CONFIG:
        sub_id = scfg["id"]
        sub_code = scfg["code"]
        sub_title = scfg["title"]
        md_path = os.path.join(BASE_DIR, scfg["filename"])
        
        print(f"Processing {sub_code} ({scfg['filename']})...")
        units = parse_markdown_subject(md_path, sub_id)
        
        subject_data = {
            "id": sub_id,
            "code": sub_code,
            "title": sub_title,
            "degree": "mca",
            "semester": 1,
            "description": scfg["description"],
            "units": units
        }
        
        # Write subject JS file
        out_file = os.path.join(MCA_SEM1_DIR, f"{sub_id}.js")
        with open(out_file, 'w', encoding='utf-8') as f:
            f.write(f"// StudyPlay Subject Data: {sub_code} - {sub_title}\n")
            f.write(f"// Generated from university syllabus markdown\n\n")
            f.write("const subjectData = ")
            f.write(json.dumps(subject_data, indent=2, ensure_ascii=False))
            f.write(";\n\nexport default subjectData;\n")
        
        print(f"-> Created {out_file} with {len(units)} units and {sum(len(u['concepts']) for u in units)} concepts.")
        
        # Populate search index items
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
            "conceptsCount": sum(len(u["concepts"]) for u in units),
            "icon": scfg["icon"]
        })

    # Write search index
    search_index_file = os.path.join(CONTENT_DIR, "searchIndex.js")
    with open(search_index_file, 'w', encoding='utf-8') as f:
        f.write("// StudyPlay Static Client-Side Search Index\n")
        f.write("// Contains metadata for instant search without loading lazy subject modules\n\n")
        f.write("export const searchIndex = ")
        f.write(json.dumps(search_index, indent=2, ensure_ascii=False))
        f.write(";\n\nexport default searchIndex;\n")
    print(f"-> Created {search_index_file} with {len(search_index)} searchable concepts.")

    # Write registry.js
    registry_file = os.path.join(CONTENT_DIR, "registry.js")
    with open(registry_file, 'w', encoding='utf-8') as f:
        f.write("// StudyPlay Content Registry\n")
        f.write("// Defines degrees, semesters, subjects, metadata, and dynamic import loaders\n\n")
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
            f.write("            {\n")
            f.write(f"              id: '{sid}',\n")
            f.write(f"              code: '{s['code']}',\n")
            f.write(f"              title: '{s['title']}',\n")
            f.write(f"              description: '{s['description']}',\n")
            f.write(f"              unitsCount: {s['unitsCount']},\n")
            f.write(f"              conceptsCount: {s['conceptsCount']},\n")
            f.write(f"              icon: '{s['icon']}',\n")
            f.write(f"              loader: () => import('./degrees/mca/sem1/{sid}.js')\n")
            f.write("            },\n")
        f.write("          ]\n")
        f.write("        },\n")
        f.write("        {\n")
        f.write("          id: 'sem2',\n")
        f.write("          number: 2,\n")
        f.write("          name: 'Semester 2',\n")
        f.write("          isUpcoming: true,\n")
        f.write("          subjects: []\n")
        f.write("        },\n")
        f.write("        {\n")
        f.write("          id: 'sem3',\n")
        f.write("          number: 3,\n")
        f.write("          name: 'Semester 3',\n")
        f.write("          isUpcoming: true,\n")
        f.write("          subjects: []\n")
        f.write("        },\n")
        f.write("        {\n")
        f.write("          id: 'sem4',\n")
        f.write("          number: 4,\n")
        f.write("          name: 'Semester 4',\n")
        f.write("          isUpcoming: true,\n")
        f.write("          subjects: []\n")
        f.write("        }\n")
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
    print(f"-> Created {registry_file}.")

    # Write content/README.md
    readme_file = os.path.join(CONTENT_DIR, "README.md")
    with open(readme_file, 'w', encoding='utf-8') as f:
        f.write("""# StudyPlay Content Architecture & Future Content Workflow

## Overview
StudyPlay is an extensible, static study platform built with Vite, React, and Tailwind CSS.
The platform uses a pure **content-driven architecture** where academic curricula are decoupled from the application logic.

### Hierarchy
```
Degree
  └── Semester
        └── Subject
              └── Unit
                    └── Concept
```

Every concept contains:
1. **Interactive Study Notes**: Complete, formatted notes preserving formulas, code, tables, definitions, and ASCII art.
2. **Relevant Polished SVG Diagrams**: High-definition, dark-theme compatible vector illustrations with gradients and layered depth.
3. **HARD or SUPER-HARD Quiz**: Multi-step, tricky distractors, edge case problems with instant feedback, scoring, and explanations.
4. **Flashcards**: Front/back active-recall study cards with 3D flip animation and local mastery tracking.

---

## Directory Structure
```
content/
├── README.md               # This documentation
├── registry.js             # Degree, semester, and subject metadata with dynamic lazy loaders
├── searchIndex.js          # Fast client-side search index across all concepts
└── degrees/
    ├── mca/
    │   ├── sem1/
    │   │   ├── ca452.js    # Computer Organization & Architecture
    │   │   ├── ca453.js    # C Programming
    │   │   ├── ca454.js    # Unix & Shell Programming
    │   │   ├── ca455.js    # Software Engineering
    │   │   └── ca456.js    # Operating System
    │   ├── sem2/
    │   ├── sem3/
    │   └── sem4/
    └── msc-ai/             # Sacred Heart College MSc AI syllabus
        ├── sem1/
        ├── sem2/
        ├── sem3/
        └── sem4/
```

---

## Mandatory Workflow for Adding Future Content

> "Add [degree] Sem [N]: read content files [list], convert each file into the StudyPlay concept schema, save the modules under `content/degrees/...`, and register them in `registry.js`. Do not modify the renderers, routing, quiz engine, flashcard engine, search engine, or layout."

### Step-by-Step Procedure:

1. **Prepare Subject Content Module**:
   Create a JavaScript module under `content/degrees/<degree>/<sem>/<subject-id>.js`.
   The file must export a default object following the StudyPlay concept schema:
   ```javascript
   export default {
     id: 'ai501',
     code: 'AI501',
     title: 'Machine Learning & Neural Networks',
     degree: 'msc-ai',
     semester: 1,
     description: 'Supervised, unsupervised learning, deep architectures and optimization.',
     units: [
       {
         id: 'unit-1',
         unitNumber: 1,
         title: 'Foundations of Statistical Learning',
         co: 'CO1',
         description: '...',
         concepts: [
           {
             id: 'loss-functions-and-gradients',
             title: 'Loss Functions, Cost Surfaces & Gradient Descent',
             subtitle: 'Optimization Landscape & Convergence',
             summary: 'Analysis of convex vs non-convex loss surfaces, gradient computation, and learning rates.',
             estimatedMinutes: 20,
             notes: `## Markdown Study Notes ...`,
             diagrams: [
               {
                 id: 'diag-gradient-descent',
                 title: 'Gradient Descent Optimization',
                 caption: '3D contour surface with momentum updates',
                 svg: '<svg ...>...</svg>'
               }
             ],
             quiz: [
               {
                 id: 'q1',
                 difficulty: 'SUPER-HARD',
                 type: 'mcq',
                 question: 'What is the impact of learning rate η on saddle point escape in Stochastic Gradient Descent with Momentum?',
                 options: ['A', 'B', 'C', 'D'],
                 correctAnswer: 1,
                 explanation: '...'
               }
             ],
             flashcards: [
               {
                 front: 'What is the vanishing gradient problem in deep networks?',
                 back: 'During backpropagation, repeated multiplication of small weights/derivatives (< 1) causes gradients to exponentially decay toward zero in early layers.'
               }
             ]
           }
         ]
       }
     ]
   };
   ```

2. **Register the Subject in `content/registry.js`**:
   Add an entry into the target degree and semester's `subjects` array:
   ```javascript
   {
     id: 'ai501',
     code: 'AI501',
     title: 'Machine Learning & Neural Networks',
     description: 'Supervised, unsupervised learning, deep architectures and optimization.',
     unitsCount: 5,
     conceptsCount: 15,
     icon: 'Brain',
     loader: () => import('./degrees/msc-ai/sem1/ai501.js')
   }
   ```

3. **Update the Client Search Index in `content/searchIndex.js`**:
   Add lightweight metadata for each concept to enable immediate client-side search without eagerly fetching the full module.

4. **Verify Build**:
   Run:
   ```bash
   npm run build
   ```
   The application will automatically recognize and render the new degree, semester, units, and concepts without changing a single line of React code!
""")
    print(f"-> Created {readme_file}.")

if __name__ == "__main__":
    build_all()
