# StudyPlay Content Architecture & Future Content Workflow

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
