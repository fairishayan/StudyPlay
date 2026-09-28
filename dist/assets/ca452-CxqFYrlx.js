var e={id:`ca452`,code:`CA452`,title:`Computer Organization & Architecture`,degree:`mca`,semester:1,description:`Digital logic circuits, CPU organization, bus architecture, memory hierarchy, pipelining, and multiprocessor systems.`,units:[{id:`unit-1`,unitNumber:1,title:`Unit 1: UNIT 1: DIGITAL LOGIC CIRCUITS — CO1`,co:`CO1`,description:`Deep study notes and assessment engine for Unit 1.`,concepts:[{id:`digital-logic-circuits`,title:`Digital Logic Circuits`,subtitle:`CA452 Unit 1 Concept 1`,summary:`Comprehensive study notes covering Digital Logic Circuits with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:26,notes:`## 1. Digital Logic Circuits

Digital logic circuits are electronic circuits that operate on discrete values, usually represented by two binary states: 0 and 1.

A digital system uses logic gates to process binary inputs and produce binary outputs.

\`\`\`text
Binary Inputs
     │
     │  0 / 1
     ▼
┌───────────────┐
│ Digital Logic │
│    Circuit    │
└───────┬───────┘
        │
        │  0 / 1
        ▼
   Binary Output
\`\`\`

Digital circuits are mainly classified into:

\`\`\`text
Digital Circuits
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
   Combinational        Sequential
     Circuits             Circuits
          │                   │
          ▼                   ▼
Output depends on      Output depends on
present inputs         inputs + previous state
\`\`\`

Combinational circuits include adders, subtractors, multiplexers and decoders. Sequential circuits include flip-flops, registers and counters.

---



## 2. Number Systems

A number system is a method of representing numerical values using a specific set of symbols and a base, or radix.

The four number systems commonly used in computer organization are:

\`\`\`text
Number Systems
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
    Binary             Octal          Decimal
   Base = 2           Base = 8         Base = 10
                         │
                         └──────────┐
                                    ▼
                              Hexadecimal
                                Base = 16
\`\`\`

**Binary Number System**

Binary uses only two digits:

\`\`\`text
0 and 1
\`\`\`

Its base is 2.

Each position represents a power of 2.

Example:

\`\`\`text
(1011)₂
= 1×2³ + 0×2² + 1×2¹ + 1×2⁰
= 8 + 0 + 2 + 1
= 11₁₀
\`\`\`

Place-value representation:

\`\`\`text
2³   2²   2¹   2⁰
       │    │    │    │
       8    4    2    1

       1    0    1    1
       │    │    │    │
       8    0    2    1
       └────┴────┴────┴──► 11
\`\`\`

Binary is fundamental to digital computers because electronic circuits can conveniently represent two stable states.

---

**Decimal Number System**

Decimal uses ten digits:

\`\`\`text
0 1 2 3 4 5 6 7 8 9
\`\`\`

Its base is 10.

Example:

\`\`\`text
(527)₁₀
= 5×10² + 2×10¹ + 7×10⁰
= 500 + 20 + 7
= 527
\`\`\`

\`\`\`text
10²    10¹    10⁰
        │      │      │
        5      2      7
        │      │      │
       500     20      7
        └──────┴──────┘
               │
              527
\`\`\`

---

**Octal Number System**

Octal uses eight digits:

\`\`\`text
0 1 2 3 4 5 6 7
\`\`\`

Its base is 8.

Example:

\`\`\`text
(725)₈
= 7×8² + 2×8¹ + 5×8⁰
= 448 + 16 + 5
= 469₁₀
\`\`\`

Octal is useful because one octal digit represents exactly three binary bits.

\`\`\`text
Binary       Octal

000   ─────►   0
001   ─────►   1
010   ─────►   2
011   ─────►   3
100   ─────►   4
101   ─────►   5
110   ─────►   6
111   ─────►   7
\`\`\`

Example:

\`\`\`text
Binary: 101 110 011
          │   │   │
          ▼   ▼   ▼
Octal:    5   6   3

Therefore:
(101110011)₂ = (563)₈
\`\`\`

---

**Hexadecimal Number System**

Hexadecimal uses sixteen symbols:

\`\`\`text
0 1 2 3 4 5 6 7 8 9 A B C D E F
\`\`\`

The letters represent:

\`\`\`text
A = 10
B = 11
C = 12
D = 13
E = 14
F = 15
\`\`\`

Its base is 16.

Example:

\`\`\`text
(2AF)₁₆
= 2×16² + 10×16¹ + 15×16⁰
= 512 + 160 + 15
= 687₁₀
\`\`\`

One hexadecimal digit represents exactly four binary bits.

\`\`\`text
Binary      Hexadecimal

0000   ───►    0
0001   ───►    1
0010   ───►    2
...
1001   ───►    9
1010   ───►    A
1011   ───►    B
1100   ───►    C
1101   ───►    D
1110   ───►    E
1111   ───►    F
\`\`\`

Example:

\`\`\`text
Binary:       1010 1111 0011
                 │    │    │
                 ▼    ▼    ▼
Hexadecimal:     A    F    3

(101011110011)₂ = (AF3)₁₆
\`\`\`

---



## 3. Logic Gates

Logic gates are fundamental digital circuits that perform logical operations on binary inputs.

The main gates are:

\`\`\`text
AND
OR
NOT
NAND
NOR
XOR
XNOR
\`\`\`

**AND Gate**

The AND gate produces 1 only when all inputs are 1.

\`\`\`text
A ─────┐
       │
       ├───[ AND ]─── Y
       │
B ─────┘
\`\`\`

Boolean expression:

\`\`\`text
Y = A · B
\`\`\`

Truth table:

| A | B | Y = A·B |
| - | - | ------- |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

---

**OR Gate**

The OR gate produces 1 when at least one input is 1.

\`\`\`text
A ─────┐
       │
       ├───[ OR ]──── Y
       │
B ─────┘
\`\`\`

Boolean expression:

\`\`\`text
Y = A + B
\`\`\`

Truth table:

| A | B | Y = A+B |
| - | - | ------- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

---

**NOT Gate**

The NOT gate has one input and produces its complement.

\`\`\`text
A ─────[ NOT ]──── Y
\`\`\`

Boolean expression:

\`\`\`text
Y = A̅
\`\`\`

Truth table:

| A | Y |
| - | - |
| 0 | 1 |
| 1 | 0 |

---

**NAND Gate**

NAND means NOT-AND. It is the complement of the AND operation.

\`\`\`text
A ─────┐
       ├──[ AND ]──o── Y
B ─────┘
\`\`\`

Boolean expression:

\`\`\`text
Y = (A·B)̅
\`\`\`

Truth table:

| A | B | Y |
| - | - | - |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

NAND is called a universal gate because basic logic gates can be constructed using only NAND gates.

---

**NOR Gate**

NOR means NOT-OR. It is the complement of the OR operation.

\`\`\`text
A ─────┐
       ├──[ OR ]──o── Y
B ─────┘
\`\`\`

Boolean expression:

\`\`\`text
Y = (A+B)̅
\`\`\`

Truth table:

| A | B | Y |
| - | - | - |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

NOR is also a universal gate.

---

**XOR Gate**

XOR means Exclusive-OR. It produces 1 when the inputs are different.

\`\`\`text
A ─────┐
       ├──[ XOR ]──── Y
B ─────┘
\`\`\`

Boolean expression:

\`\`\`text
Y = A ⊕ B
\`\`\`

Truth table:

| A | B | Y |
| - | - | - |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

---

**XNOR Gate**

XNOR is the complement of XOR. It produces 1 when the inputs are equal.

\`\`\`text
A ─────┐
       ├──[ XOR ]──o── Y
B ─────┘
\`\`\`

Boolean expression:

\`\`\`text
Y = (A ⊕ B)̅
\`\`\`

Truth table:

| A | B | Y |
| - | - | - |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

---



## 4. K-Map Simplification

A Karnaugh Map, or K-Map, is a graphical technique used to simplify Boolean expressions.

It reduces the number of logic gates and variables required to implement a Boolean function.

For two variables, a K-Map has four cells:

\`\`\`text
B
           0   1
        ┌───┬───┐
     A 0│   │   │
        ├───┼───┤
       1│   │   │
        └───┴───┘
\`\`\`

For four variables, a 4 × 4 K-Map is used.

\`\`\`text
CD
          00  01  11  10
       ┌───┬───┬───┬───┐
 AB 00 │   │   │   │   │
       ├───┼───┼───┼───┤
    01 │   │   │   │   │
       ├───┼───┼───┼───┤
    11 │   │   │   │   │
       ├───┼───┼───┼───┤
    10 │   │   │   │   │
       └───┴───┴───┴───┘
\`\`\`

The order is Gray-code order:

\`\`\`text
00 → 01 → 11 → 10
\`\`\`

so adjacent cells differ in only one variable.

**Basic grouping rules**

For Sum of Products simplification:

1. Place 1s in required cells.
2. Group adjacent 1s.
3. Groups contain 1, 2, 4, 8, ... cells.
4. Make groups as large as possible.
5. Groups may wrap around edges.
6. Overlapping groups are allowed when useful.
7. Derive the simplified Boolean expression.

Example:

\`\`\`text
B
       0   1
    ┌───┬───┐
 A 0│ 1 │ 1 │
    ├───┼───┤
   1│ 0 │ 0 │
    └───┴───┘
\`\`\`

The two 1s form one group.

\`\`\`text
B
       0   1
    ┌───┬───┐
 A 0│ 1 │ 1 │ ← Group
    ├───┼───┤
   1│ 0 │ 0 │
    └───┴───┘
\`\`\`

Within this group, A = 0 remains constant while B changes.

Therefore:

\`\`\`text
F = A̅
\`\`\`

K-Maps are generally used for small numbers of variables because the map becomes increasingly large as variables increase.

---`,diagrams:[{id:`diag-ca452-u1-c1`,title:`Digital Logic Circuits`,caption:`Polished SVG architectural visualization for Digital Logic Circuits`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Digital Logic Gates & Arithmetic Synthesis Architecture</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Truth table algebra, full adder modular synthesis, and ripple carry cascade</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="86.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Logic Gate</text> </g> <g transform="translate(178.0, 53)"> <rect width="98.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Adder Module</text> </g> <g transform="translate(286.0, 53)"> <rect width="94.0" height="18" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/> <line x1="5" y1="9" x2="16" y2="9" stroke="#818cf8" stroke-width="2"/> <polygon points="14,6 18,9 14,12" fill="#818cf8"/> <text x="23" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Signal Flow</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Logic Gates Matrix --> <g> <rect x="40" y="75" width="250" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="40" y="75" width="250" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="54" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Universal Gates</text> <text x="278" y="96" fill="#94a3b8" font-size="9.5" text-anchor="end" font-family="system-ui, -apple-system, sans-serif">NAND & NOR</text> <line x1="40" y1="107" x2="290" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="54" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">NAND: </tspan> <tspan fill="#e2e8f0" font-size="11">F = (A · B)'  | Universal gate</tspan> </text> <text x="54" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">NOR: </tspan> <tspan fill="#e2e8f0" font-size="11">F = (A + B)'  | Universal gate</tspan> </text> <text x="54" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">AND: </tspan> <tspan fill="#e2e8f0" font-size="11">F = A · B      | True if both high</tspan> </text> <text x="54" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">OR: </tspan> <tspan fill="#e2e8f0" font-size="11">F = A + B      | True if either high</tspan> </text> <text x="54" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">NOT: </tspan> <tspan fill="#e2e8f0" font-size="11">F = A'         | Complement inverter</tspan> </text> <text x="54" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">XOR: </tspan> <tspan fill="#e2e8f0" font-size="11">F = A ⊕ B      | Odd parity detector</tspan> </text> <text x="54" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">XNOR: </tspan> <tspan fill="#e2e8f0" font-size="11">F = (A ⊕ B)'   | Equivalence detector</tspan> </text> </g> <!-- Relationship connector --> <g> <path d="M 290 195 L 370 195" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(290.0, 185.0)"> <rect width="80.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="40.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">synthesizes</text> </g> </g> <!-- Full Adder Realization --> <g> <rect x="370" y="75" width="270" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="370" y="75" width="270" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="384" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">1-Bit Full Adder Circuit</text> <line x1="370" y1="107" x2="640" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="384" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Inputs: </tspan> <tspan fill="#e2e8f0" font-size="11">A, B, Carry-In (Cin)</tspan> </text> <text x="384" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Sum: </tspan> <tspan fill="#e2e8f0" font-size="11">S = A ⊕ B ⊕ Cin (2 XOR gates)</tspan> </text> <text x="384" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Cout: </tspan> <tspan fill="#e2e8f0" font-size="11">AB + Cin(A ⊕ B) (AND-OR logic)</tspan> </text> <text x="384" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Half 1: </tspan> <tspan fill="#e2e8f0" font-size="11">Sum1 = A ⊕ B, Carry1 = A · B</tspan> </text> <text x="384" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Half 2: </tspan> <tspan fill="#e2e8f0" font-size="11">S = Sum1 ⊕ Cin, Carry2 = Sum1 · Cin</tspan> </text> <text x="384" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">OR Gate: </tspan> <tspan fill="#e2e8f0" font-size="11">Cout = Carry1 + Carry2</tspan> </text> <text x="384" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Delay: </tspan> <tspan fill="#e2e8f0" font-size="11">Propagation: 2 XOR levels, 2 AND-OR</tspan> </text> </g> <g> <path d="M 640 195 L 710 195" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#mCyan)"/> <g transform="translate(635.0, 185.0)"> <rect width="80.0" height="20" rx="5" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="40.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">cascades to</text> </g> </g> <!-- Ripple Carry Adder --> <g> <rect x="710" y="75" width="170" height="240" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="710" y="75" width="170" height="32" rx="10 10 0 0" fill="#064e3b"/> <text x="724" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">4-Bit RCA</text> <line x1="710" y1="107" x2="880" y2="107" stroke="#10b981" stroke-width="1" stroke-opacity="0.4"/> <text x="724" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Stage 0: </tspan> <tspan fill="#e2e8f0" font-size="11">FA0: S0, C1</tspan> </text> <text x="724" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Stage 1: </tspan> <tspan fill="#e2e8f0" font-size="11">FA1: S1, C2</tspan> </text> <text x="724" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Stage 2: </tspan> <tspan fill="#e2e8f0" font-size="11">FA2: S2, C3</tspan> </text> <text x="724" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Stage 3: </tspan> <tspan fill="#e2e8f0" font-size="11">FA3: S3, C4</tspan> </text> <text x="724" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Carry: </tspan> <tspan fill="#e2e8f0" font-size="11">Ripple delay = 4 × 2τ</tspan> </text> <text x="724" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">CLA: </tspan> <tspan fill="#e2e8f0" font-size="11">Lookahead Carry resolves τ</tspan> </text> </g> <g transform="translate(40, 335)"> <rect width="840" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Hardware Axiom: Universal Gate Completeness</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Any combinational switching function can be realized using solely 2-input NAND gates (minimum 4 NAND gates for 2-input XOR).</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u1c1-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In 8-bit two's complement arithmetic, what are the values of the Overflow flag (V) and Carry flag (C) when adding A = 0101 1000 (+88) and B = 0100 1100 (+76)?`,options:[`V = 0, C = 0 (Result: +164)`,`V = 1, C = 0 (Result: -92, true sum +164 exceeds 8-bit signed range [-128, +127])`,`V = 1, C = 1 (Hardware exception triggered)`,`V = 0, C = 1 (Result wrapped modulo 256)`],correctAnswer:1,explanation:`8-bit signed integers range from -128 to +127. 88 + 76 = 164. In binary: 0101 1000 + 0100 1100 = 1010 0100. The MSB becomes 1 (negative), meaning two positive numbers yielded a negative result! Hence, Overflow flag V = C_in(MSB) XOR C_out(MSB) = 1 XOR 0 = 1. Since there is no carry out of the MSB, C = 0.`},{id:`ca452-u1c1-q2`,difficulty:`HARD`,type:`mcq`,question:`Which of the following statements regarding floating-point IEEE 754 single-precision (32-bit) representation is INCORRECT?`,options:[`The exponent bias is 127, encoded using excess-127 notation across 8 bits.`,`Denormalized (subnormal) numbers occur when the biased exponent is 00000000 and fraction is non-zero.`,`The implicit normalized leading bit is 0, so the significand is 0.fraction.`,`Special values +infinity and -infinity have an exponent field of 11111111 and fraction field of all zeros.`],correctAnswer:2,explanation:`Option C is INCORRECT (and thus the correct choice). For normalized numbers, the implicit leading bit before the binary point is always 1 (i.e. 1.M), which provides 24 bits of precision from a 23-bit stored fraction.`},{id:`ca452-u1c1-q3`,difficulty:`SUPER-HARD`,type:`mcq`,question:`A 4-variable Boolean function F(A,B,C,D) has minterms m(0, 2, 8, 10) and don't care conditions d(5, 7, 13, 15). What is the minimal essential prime implicant representation?`,options:[`B'D'`,`B'D' + BD`,`A'C' + AC`,`A'B'D' + ABD`],correctAnswer:0,explanation:`Minterms m(0, 2, 8, 10) represent the four corners of the K-Map: (A'B'C'D', A'B'CD', AB'C'D', AB'CD'). Grouping these 4 corners yields B'D'. The don't cares d(5, 7, 13, 15) do NOT contain any of the required minterms that need covering; since don't cares only need to be included if they enlarge a group containing genuine minterms, forming BD from don't cares alone would add a redundant prime implicant!`},{id:`ca452-u1c1-q4`,difficulty:`HARD`,type:`mcq`,question:`Why is NAND considered a universal gate, and what is the minimum number of 2-input NAND gates required to implement a 2-input XOR function?`,options:[`Because it can synthesize AND and OR only; requires 3 NAND gates for XOR.`,`Because any Boolean function can be implemented using only NAND gates; requires exactly 4 NAND gates for XOR.`,`Because it has zero propagation delay; requires 5 NAND gates for XOR.`,`Because it has high fan-out; requires 6 NAND gates for XOR.`],correctAnswer:1,explanation:`NAND is functionally complete (universal). A 2-input XOR function A ^ B = A'B + AB' can be synthesized with exactly 4 NAND gates: Gate 1 computes N1 = (A NAND B). Gate 2 computes (A NAND N1). Gate 3 computes (B NAND N1). Gate 4 computes (Gate 2 NAND Gate 3), giving the exact XOR output.`}],flashcards:[{front:`What defines a Universal Logic Gate?`,back:`A logic gate (such as NAND or NOR) that can implement any Boolean switching function without requiring any other gate type.`},{front:`How is Two's Complement Overflow detected in hardware?`,back:`Overflow occurs when the carry into the sign bit (MSB) does not equal the carry out of the sign bit: V = C_in(MSB) ⊕ C_out(MSB).`},{front:`What is the difference between Combinational and Sequential circuits?`,back:`Combinational circuit outputs depend solely on present inputs (no memory). Sequential circuit outputs depend on both present inputs and past internal state stored in flip-flops.`},{front:`How are four corners grouped in a 4-variable K-Map?`,back:`Cells m0 (0000), m2 (0010), m8 (1000), and m10 (1010) are logically adjacent due to Gray code wrap-around, minimizing to B'D'.`},{front:`What is an Essential Prime Implicant (EPI)?`,back:`A prime implicant that covers at least one minterm that is not covered by any other prime implicant; it MUST be included in the minimal sum.`}]},{id:`combinational-logic-circuits`,title:`Combinational Logic Circuits`,subtitle:`CA452 Unit 1 Concept 2`,summary:`Comprehensive study notes covering Combinational Logic Circuits with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:28,notes:`## 5. Combinational Logic Circuits

A combinational circuit is a digital circuit whose output depends only on the present input values.

\`\`\`text
Inputs
          │
          ▼
┌───────────────────┐
│  Combinational    │
│     Circuit       │
└─────────┬─────────┘
          │
          ▼
        Output
\`\`\`

There is no memory element in a purely combinational circuit.

Examples:

\`\`\`text
Combinational Circuits
        │
        ├── Half Adder
        ├── Full Adder
        ├── Subtractor
        ├── Multiplexer
        ├── Demultiplexer
        ├── Encoder
        └── Decoder
\`\`\`

**Half Adder**

A half adder adds two one-bit binary numbers.

Inputs:

\`\`\`text
A, B
\`\`\`

Outputs:

\`\`\`text
Sum, Carry
\`\`\`

Circuit:

\`\`\`text
┌──[ XOR ]──► Sum
A ───────────┤
             │
B ───────────┘

A ───────────┐
             ├──[ AND ]──► Carry
B ───────────┘
\`\`\`

Equations:

\`\`\`text
Sum   = A ⊕ B
Carry = A · B
\`\`\`

Truth table:

| A | B | Sum | Carry |
| - | - | --- | ----- |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

---



## 6. Sequential Logic Circuits

A sequential circuit is a digital circuit whose output depends on the present inputs as well as the previous state.

It therefore contains memory elements.

\`\`\`text
┌─────────────────┐
Input ──────────►│ Combinational   │──────► Output
                 │     Logic       │
                 └────────┬────────┘
                          │
                          ▼
                    ┌───────────┐
              ┌────►│  Memory   │
              │     └─────┬─────┘
              │           │
              └───────────┘
\`\`\`

The feedback path allows the circuit to retain information about its previous state.

Examples:

\`\`\`text
Sequential Circuits
       │
       ├── Flip-Flops
       ├── Registers
       ├── Counters
       └── Shift Registers
\`\`\`

A basic flip-flop stores one bit.

\`\`\`text
┌─────────────┐
D ────►│   D Flip-   │───► Q
CLK ──►│    Flop     │
       └─────────────┘
\`\`\`

The clock controls when the stored state changes.

**Difference**

Combinational:

\`\`\`text
Output = f(Current Inputs)
\`\`\`

Sequential:

\`\`\`text
Output = f(Current Inputs, Previous State)
\`\`\`

---



## 7. Basic Processing

Basic processing in computer organization describes how information is moved and manipulated inside the CPU.

The major components involved are:

\`\`\`text
CPU
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
   Registers      ALU     Control Unit
       │          │          │
       └──────────┼──────────┘
                  │
                  ▼
                 Bus
                  │
                  ▼
                Memory
\`\`\`

**Basic processing cycle**

\`\`\`text
Fetch
               │
               ▼
            Decode
               │
               ▼
            Execute
               │
               ▼
             Store
               │
               ▼
          Next Instruction
\`\`\`

During processing, data may move between registers, the ALU and memory through buses.

---



## 8. Register Transfer Language

Register Transfer Language, or RTL, is a symbolic notation used to describe the transfer of data between registers and the micro-operations performed on that data.

For example:

\`\`\`text
R2 ← R1
\`\`\`

means:

Copy the contents of R1 into R2.

The original contents of R1 remain unchanged.

Before:

\`\`\`text
R1 = 1010
R2 = 0000
\`\`\`

\`\`\`text
        R1
         │
         │ Transfer
         ▼
        R2
\`\`\`

After:

\`\`\`text
R1 = 1010
R2 = 1010
\`\`\`

Another example:

\`\`\`text
R3 ← R1 + R2
\`\`\`

means the contents of R1 and R2 are added and the result is transferred to R3.

\`\`\`text
R1 ──────┐
         │
         ▼
       ┌─────┐
R2 ───►│ ALU │────► R3
       └─────┘
\`\`\`

RTL can also represent conditional transfers:

\`\`\`text
P: R2 ← R1
\`\`\`

This means that if control condition P is true, the contents of R1 are transferred to R2.

**Common micro-operations**

Register transfer:

\`\`\`text
R2 ← R1
\`\`\`

Arithmetic:

\`\`\`text
R3 ← R1 + R2
\`\`\`

Logic:

\`\`\`text
R3 ← R1 AND R2
\`\`\`

Shift:

\`\`\`text
R1 ← shl R1
\`\`\`

---



## 9. Bus and Memory Transfers

A bus is a group of parallel communication lines used to transfer information between computer components.

\`\`\`text
┌──────────┐
              │   CPU    │
              └────┬─────┘
                   │
═══════════════════╪══════════════════
              SYSTEM BUS
══════════════════╪══════════════════
          ┌───────┴────────┐
          ▼                ▼
      ┌───────┐        ┌──────────┐
      │Memory │        │I/O Units │
      └───────┘        └──────────┘
\`\`\`

A system bus commonly contains:

\`\`\`text
System Bus
    │
    ├── Address Bus
    ├── Data Bus
    └── Control Bus
\`\`\`

**Address Bus**

Carries the address of the memory location or I/O location being accessed.

\`\`\`text
CPU ───────────────► Memory
       Address
\`\`\`

**Data Bus**

Carries actual data.

\`\`\`text
CPU ◄──────────────► Memory
         Data
\`\`\`

**Control Bus**

Carries control signals such as read and write.

\`\`\`text
CPU ◄──────────────► Memory
       Control
\`\`\`

**Memory Read**

\`\`\`text
CPU
 │
 │ Address
 ▼
Memory
 │
 │ Data
 ▼
CPU
\`\`\`

RTL representation:

\`\`\`text
MAR ← Address
Read
MDR ← M[MAR]
\`\`\`

Here:

\`\`\`text
MAR = Memory Address Register
MDR = Memory Data Register
M[MAR] = memory contents at the address in MAR
\`\`\`

**Memory Write**

\`\`\`text
CPU
 │
 │ Address + Data
 ▼
Memory
\`\`\`

RTL representation:

\`\`\`text
MAR ← Address
MDR ← Data
Write
M[MAR] ← MDR
\`\`\`

---`,diagrams:[{id:`diag-ca452-u1-c2`,title:`Combinational Logic Circuits`,caption:`Polished SVG architectural visualization for Combinational Logic Circuits`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Combinational Logic Modules: Multiplexers & Decoders</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Data selection, address routing, and universal Boolean function generation</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="92.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Multiplexer</text> </g> <g transform="translate(184.0, 53)"> <rect width="68.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Decoder</text> </g> <g transform="translate(262.0, 53)"> <rect width="76.0" height="18" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/> <line x1="5" y1="9" x2="16" y2="9" stroke="#38bdf8" stroke-width="2"/> <polygon points="14,6 18,9 14,12" fill="#38bdf8"/> <text x="23" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Data Bus</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- 4:1 MUX Card --> <g> <rect x="50" y="75" width="260" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="50" y="75" width="260" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="64" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">4-to-1 Multiplexer (MUX)</text> <line x1="50" y1="107" x2="310" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="64" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Inputs: </tspan> <tspan fill="#e2e8f0" font-size="11">Data: I0, I1, I2, I3 (4 lines)</tspan> </text> <text x="64" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Select: </tspan> <tspan fill="#e2e8f0" font-size="11">Control: S1, S0 (2 select lines)</tspan> </text> <text x="64" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Enable: </tspan> <tspan fill="#e2e8f0" font-size="11">Active-Low Strobe (E')</tspan> </text> <text x="64" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Boolean: </tspan> <tspan fill="#e2e8f0" font-size="11">Y = S1'S0'I0 + S1'S0 I1 +</tspan> </text> <text x="64" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Term 3: </tspan> <tspan fill="#e2e8f0" font-size="11">    S1 S0'I2 + S1 S0 I3</tspan> </text> <text x="64" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Function: </tspan> <tspan fill="#e2e8f0" font-size="11">Universal function generator</tspan> </text> <text x="64" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Decoder: </tspan> <tspan fill="#e2e8f0" font-size="11">Internal 2-to-4 active-high decoder</tspan> </text> </g> <g> <path d="M 310 195 L 380 195" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(302.0, 185.0)"> <rect width="86.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="43.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">decodes into</text> </g> </g> <!-- Decoder Box --> <g> <rect x="380" y="75" width="260" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="380" y="75" width="260" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="394" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">3-to-8 Binary Decoder</text> <line x1="380" y1="107" x2="640" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="394" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Inputs: </tspan> <tspan fill="#e2e8f0" font-size="11">A2, A1, A0 (3 bits)</tspan> </text> <text x="394" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Outputs: </tspan> <tspan fill="#e2e8f0" font-size="11">D0 through D7 (8 minterms)</tspan> </text> <text x="394" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Enable: </tspan> <tspan fill="#e2e8f0" font-size="11">Chip Select E1, E2', E3'</tspan> </text> <text x="394" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Equations: </tspan> <tspan fill="#e2e8f0" font-size="11">Di = m_i (exact minterm)</tspan> </text> <text x="394" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Expansion: </tspan> <tspan fill="#e2e8f0" font-size="11">Two 3x8 decoders make 4x16</tspan> </text> <text x="394" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">RAM Use: </tspan> <tspan fill="#e2e8f0" font-size="11">Selects 1 of 8 memory rows</tspan> </text> <text x="394" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Logic: </tspan> <tspan fill="#e2e8f0" font-size="11">Implements any n-variable function</tspan> </text> </g> <g> <path d="M 640 195 L 710 195" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#mCyan)"/> <g transform="translate(641.0, 185.0)"> <rect width="68.0" height="20" rx="5" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="34.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">routes to</text> </g> </g> <!-- DeMUX --> <g> <rect x="710" y="75" width="170" height="240" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="710" y="75" width="170" height="32" rx="10 10 0 0" fill="#581c87"/> <text x="724" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Demultiplexer</text> <line x1="710" y1="107" x2="880" y2="107" stroke="#a855f7" stroke-width="1" stroke-opacity="0.4"/> <text x="724" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Input: </tspan> <tspan fill="#e2e8f0" font-size="11">Single Data line I</tspan> </text> <text x="724" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Select: </tspan> <tspan fill="#e2e8f0" font-size="11">S1, S0 routes to</tspan> </text> <text x="724" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Outputs: </tspan> <tspan fill="#e2e8f0" font-size="11">Y0, Y1, Y2, or Y3</tspan> </text> <text x="724" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Identity: </tspan> <tspan fill="#e2e8f0" font-size="11">Decoder with E as data</tspan> </text> </g> <g transform="translate(50, 335)"> <rect width="830" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Design Principle: Multiplexers as Universal Logic Modules</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">An 2^n-to-1 MUX can synthesize any (n+1)-variable Boolean function without needing external logic gates.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u1c2-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`What is the primary condition that causes the 'race-around condition' in a level-triggered JK flip-flop, and how is it fundamentally eliminated?`,options:[`Occurs when J=0, K=0 and clock pulse width tp < propagation delay tg; eliminated by increasing clock frequency.`,`Occurs when J=1, K=1 and clock pulse width tp > flip-flop propagation delay tg; eliminated by using Master-Slave JK flip-flop or edge triggering.`,`Occurs when J=1, K=0 and supply voltage drops; eliminated with pull-up resistors.`,`Occurs due to setup time violations; eliminated by asynchronous resets.`],correctAnswer:1,explanation:`In a level-triggered JK flip-flop with J=1 and K=1 (toggle mode), if the clock pulse duration tp exceeds the gate propagation delay tg, the output toggles repeatedly back and forth during the single active clock period, leaving the final output indeterminate. A Master-Slave configuration or narrow edge-triggering completely solves this because the output changes only on a specific clock edge.`},{id:`ca452-u1c2-q2`,difficulty:`HARD`,type:`mcq`,question:`How many flip-flops and distinct states exist in a MOD-12 ripple counter, and what is its count sequence?`,options:[`3 flip-flops, 8 states, counts 0 to 7`,`4 flip-flops, 12 states (0 to 11), recycling to 0 on state 1100 (12)`,`4 flip-flops, 16 states, counts 0 to 15`,`12 flip-flops, 12 states, ring counter sequence`],correctAnswer:1,explanation:`To count up to MOD-12, the number of flip-flops n must satisfy 2^(n-1) < 12 <= 2^n, hence n = 4 flip-flops (which inherently have 16 states). A NAND gate detects binary 1100 (12) from outputs Q3 and Q2 and immediately asserts asynchronous clear (CLR) to reset the counter to 0000, creating 12 stable states (0 through 11).`},{id:`ca452-u1c2-q3`,difficulty:`SUPER-HARD`,type:`mcq`,question:`A Universal Shift Register has mode control inputs S1 and S0. What operation is executed when S1 = 1 and S0 = 0?`,options:[`No change (Locked state)`,`Shift-right operation`,`Shift-left operation`,`Parallel load from data inputs`],correctAnswer:2,explanation:`Standard 74194 Universal Shift Register control table: S1=0, S0=0 is No Change; S1=0, S0=1 is Shift-Right; S1=1, S0=0 is Shift-Left; S1=1, S0=1 is Parallel Load.`}],flashcards:[{front:`What is the Characteristic Equation of a JK Flip-Flop?`,back:`Q(next) = J·Q' + K'·Q`},{front:`What is Setup Time (t_setup)?`,back:`The minimum time interval that data inputs must remain stable BEFORE the active clock transition occurs to guarantee valid latching.`},{front:`What is Hold Time (t_hold)?`,back:`The minimum time interval that data inputs must remain stable AFTER the active clock transition has occurred.`},{front:`How does a Johnson Counter differ from a Ring Counter?`,back:`A Ring counter feeds back Q of the last flip-flop to D of the first (N states for N flip-flops). A Johnson (twisted-ring) counter feeds back Q' (complement), producing 2N states for N flip-flops.`}]},{id:`bus-architecture`,title:`Bus Architecture`,subtitle:`CA452 Unit 1 Concept 3`,summary:`Comprehensive study notes covering Bus Architecture with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:28,notes:`## 10. Bus Architecture

Bus architecture describes how different components of a computer system communicate through buses.

A simple common-bus arrangement is:

\`\`\`text
┌──────────────┐
                 │     CPU      │
                 │              │
                 │ Registers    │
                 │     │        │
                 │     ▼        │
                 │    ALU       │
                 └─────┬────────┘
                       │
═══════════════════════╪════════════════════
                     BUS
═══════════════════════╪════════════════════
             ┌─────────┼─────────┐
             ▼         ▼         ▼
          Memory      I/O     Other Units
\`\`\`

A bus allows multiple components to communicate without requiring a separate physical connection between every pair.

**Three-bus concept**

Some CPU organizations use separate buses for source operands and result transfer.

\`\`\`text
Register
 File
 ┌───────┐
 │       │
 └─┬───┬─┘
   │   │
  Bus A Bus B
   │   │
   ▼   ▼
 ┌─────────┐
 │   ALU   │
 └────┬────┘
      │
    Bus C
      │
      ▼
 Registers
\`\`\`

This can allow multiple data transfers in the same clock cycle.

---



## 11. Instruction Code

An instruction is a binary-coded command that tells the CPU what operation to perform.

An instruction generally contains an opcode and may contain information identifying operands.

\`\`\`text
┌───────────────────┬──────────────────────┐
│      Opcode       │ Operand / Address    │
└───────────────────┴──────────────────────┘
\`\`\`

**Opcode**

The opcode specifies the operation.

Examples:

\`\`\`text
ADD
SUB
LOAD
STORE
JUMP
\`\`\`

**Operand field**

The operand field identifies the data, register or memory location involved.

Example conceptual instruction:

\`\`\`text
ADD R1, R2
\`\`\`

can be represented internally by binary fields.

\`\`\`text
Instruction
     │
     ├── Opcode → ADD
     │
     └── Operands → R1, R2
\`\`\`

**Instruction processing**

\`\`\`text
Instruction
     │
     ▼
Fetch
     │
     ▼
Decode Opcode
     │
     ▼
Identify Operands
     │
     ▼
Execute
\`\`\`

---



## 12. Instruction Set

An instruction set is the collection of machine-level instructions supported by a processor.

It defines the operations that the CPU can execute.

\`\`\`text
Instruction Set
                    │
     ┌──────────────┼──────────────┐
     ▼              ▼              ▼
Data Transfer    Arithmetic      Control
     │              │              │
 LOAD             ADD            JUMP
 STORE            SUB            CALL
 MOVE             INC            RETURN
                  DEC
\`\`\`

Common categories include:

Data transfer instructions

\`\`\`text
LOAD
STORE
MOVE
\`\`\`

Arithmetic instructions

\`\`\`text
ADD
SUB
MUL
DIV
INC
DEC
\`\`\`

Logical instructions

\`\`\`text
AND
OR
XOR
NOT
\`\`\`

Control-transfer instructions

\`\`\`text
JUMP
CALL
RETURN
BRANCH
\`\`\`

The instruction set forms the interface between software and the processor hardware.

---



## 13. Microinstruction

A microinstruction is a low-level control instruction used to specify the micro-operations that the control unit should perform during execution of a machine instruction.

A machine instruction such as:

\`\`\`text
ADD R1, R2
\`\`\`

may require several internal operations.

\`\`\`text
Machine Instruction
       │
       ▼
   Microinstructions
       │
       ├── Transfer operand
       ├── Perform ALU operation
       ├── Store result
       └── Update status
\`\`\`

Conceptually:

\`\`\`text
Instruction
     │
     ▼
┌──────────────┐
│ Microprogram │
└──────┬───────┘
       │
       ├── μ1 → Register transfer
       ├── μ2 → ALU operation
       ├── μ3 → Result transfer
       └── μ4 → Control/status update
\`\`\`

A microinstruction generates or specifies control signals required to perform one or more micro-operations.

**Relationship between instruction and microinstruction**

\`\`\`text
Machine Instruction
                         │
                         ▼
                  Instruction Decode
                         │
                         ▼
                  Microinstructions
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      Register         ALU          Memory/I/O
      Transfer       Operation        Control
\`\`\`

For example, a simplified addition operation may involve:

\`\`\`text
T1: R1 → ALU input
T2: R2 → ALU input
T3: ALU performs ADD
T4: ALU result → R1
\`\`\`

These are internal micro-operations controlled by the processor's control mechanism.

---



## UNIT 1 COMPLETE FLOW

\`\`\`text
UNIT 1
                    DIGITAL LOGIC
                         │
       ┌─────────────────┼──────────────────┐
       │                 │                  │
       ▼                 ▼                  ▼
 Number Systems       Logic Gates      Logic Design
       │                 │                  │
       ├── Binary        ├── AND            ├── K-Map
       ├── Decimal       ├── OR             ├── Combinational
       ├── Octal         ├── NOT            └── Sequential
       └── Hexadecimal   ├── NAND
                         ├── NOR
                         ├── XOR
                         └── XNOR
                              │
                              ▼
                       BASIC PROCESSING
                              │
                  ┌───────────┼───────────┐
                  ▼           ▼           ▼
                 RTL         Bus       Instruction
                  │        Transfer       System
                  │           │           │
                  ▼           ▼           ├── Instruction Code
             Register      Memory          ├── Instruction Set
             Transfer     Transfer         └── Microinstruction
                  │           │
                  └─────┬─────┘
                        ▼
                       CPU
\`\`\``,diagrams:[{id:`diag-ca452-u1-c3`,title:`Bus Architecture`,caption:`Polished SVG architectural visualization for Bus Architecture`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Common Bus System & Register Transfer Architecture</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Multiplexer-based common bus interconnecting PC, AR, IR, DR, AC, and Memory Unit</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="80.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Registers</text> </g> <g transform="translate(172.0, 53)"> <rect width="98.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Multiplexers</text> </g> <g transform="translate(280.0, 53)"> <rect width="86.0" height="18" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#10b981"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Common Bus</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Common Bus System Diagram --> <g> <rect x="50" y="75" width="230" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="50" y="75" width="230" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="64" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Register Source Bank</text> <line x1="50" y1="107" x2="280" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="64" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">PC: </tspan> <tspan fill="#e2e8f0" font-size="11">Program Counter (12-bit)</tspan> </text> <text x="64" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">AR: </tspan> <tspan fill="#e2e8f0" font-size="11">Address Register (12-bit)</tspan> </text> <text x="64" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">IR: </tspan> <tspan fill="#e2e8f0" font-size="11">Instruction Register (16-bit)</tspan> </text> <text x="64" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">DR: </tspan> <tspan fill="#e2e8f0" font-size="11">Data Register (16-bit)</tspan> </text> <text x="64" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">AC: </tspan> <tspan fill="#e2e8f0" font-size="11">Accumulator (16-bit)</tspan> </text> <text x="64" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">TR: </tspan> <tspan fill="#e2e8f0" font-size="11">Temporary Register (16-bit)</tspan> </text> <text x="64" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">MEM: </tspan> <tspan fill="#e2e8f0" font-size="11">Memory Unit 4096x16</tspan> </text> </g> <g> <path d="M 280 195 L 360 195" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(283.0, 185.0)"> <rect width="74.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="37.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">MUX Select</text> </g> </g> <!-- Multiplexer Bank --> <g> <rect x="360" y="75" width="230" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="360" y="75" width="230" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="374" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Multiplexer Array (MUX)</text> <line x1="360" y1="107" x2="590" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="374" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Select: </tspan> <tspan fill="#e2e8f0" font-size="11">3 Selection lines: S2, S1, S0</tspan> </text> <text x="374" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">001: </tspan> <tspan fill="#e2e8f0" font-size="11">Selects Program Counter (PC)</tspan> </text> <text x="374" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">010: </tspan> <tspan fill="#e2e8f0" font-size="11">Selects Address Register (AR)</tspan> </text> <text x="374" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">011: </tspan> <tspan fill="#e2e8f0" font-size="11">Selects Data Register (DR)</tspan> </text> <text x="374" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">100: </tspan> <tspan fill="#e2e8f0" font-size="11">Selects Accumulator (AC)</tspan> </text> <text x="374" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">101: </tspan> <tspan fill="#e2e8f0" font-size="11">Selects Instruction Reg (IR)</tspan> </text> <text x="374" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">111: </tspan> <tspan fill="#e2e8f0" font-size="11">Selects Memory Unit (M[AR])</tspan> </text> </g> <g> <path d="M 590 195 L 670 195" stroke="#38bdf8" stroke-width="2" fill="none" marker-end="url(#mCyan)"/> <g transform="translate(596.0, 185.0)"> <rect width="68.0" height="20" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="34.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Bus Drive</text> </g> </g> <!-- Destination Registers --> <g> <rect x="670" y="75" width="210" height="240" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="670" y="75" width="210" height="32" rx="10 10 0 0" fill="#064e3b"/> <text x="684" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Common 16-Bit Bus</text> <line x1="670" y1="107" x2="880" y2="107" stroke="#10b981" stroke-width="1" stroke-opacity="0.4"/> <text x="684" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Bus: </tspan> <tspan fill="#e2e8f0" font-size="11">16 parallel signal lines</tspan> </text> <text x="684" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Control: </tspan> <tspan fill="#e2e8f0" font-size="11">Load (LD) asserted on clock</tspan> </text> <text x="684" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Transfer: </tspan> <tspan fill="#e2e8f0" font-size="11">R2 <-- R1 in 1 clock cycle</tspan> </text> <text x="684" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">ALU: </tspan> <tspan fill="#e2e8f0" font-size="11">AC & DR input to Adder</tspan> </text> <text x="684" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Memory: </tspan> <tspan fill="#e2e8f0" font-size="11">M[AR] <-- Bus on WRITE</tspan> </text> <text x="684" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">High-Z: </tspan> <tspan fill="#e2e8f0" font-size="11">Three-state buffer isolation</tspan> </text> </g> <g transform="translate(50, 335)"> <rect width="830" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Bus Transfer Rule: Single Driver Protocol</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Only ONE register/memory unit drives the common bus at any instant, selected by S2,S1,S0; multiple registers can simultaneously assert LD to capture the bus data.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u1c3-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In a common bus system constructed with 8-to-1 multiplexers connecting 8 registers of 16 bits each, how many multiplexers and multiplexer select lines are required?`,options:[`8 multiplexers and 8 select lines`,`16 multiplexers and 3 select lines (S2, S1, S0)`,`16 multiplexers and 8 select lines`,`8 multiplexers and 3 select lines`],correctAnswer:1,explanation:`Since each register is 16 bits wide, the bus must carry 16 bits simultaneously. Therefore, 16 multiplexers are required (one for each bit position). To select one of 8 registers as the bus driver, 2^3 = 8, so exactly 3 selection lines (S2, S1, S0) are common to all 16 multiplexers.`},{id:`ca452-u1c3-q2`,difficulty:`HARD`,type:`mcq`,question:`Given the register transfer statement: P: R2 <-- R1, R1 <-- R2. What hardware mechanism allows this simultaneous exchange to execute in a single clock cycle without data collision?`,options:[`Using an intermediary software variable in RAM`,`Edge-triggered master-slave flip-flops where inputs are sampled before outputs update`,`Dual-port asynchronous RAM buffers`,`Time-division multiplexing over multiple micro-cycles`],correctAnswer:1,explanation:`Because the registers are constructed with edge-triggered flip-flops, on the active clock edge, the current output values of R1 and R2 are simultaneously latched into the input stages of R2 and R1 before the new values propagate to the outputs. This allows true simultaneous swap in a single clock period.`}],flashcards:[{front:`What is Register Transfer Language (RTL)?`,back:`A symbolic notation used to describe the micro-operations, data transfers, and control logic sequencing among computer registers.`},{front:`What is a Bus in computer architecture?`,back:`A shared communication pathway composed of multiple parallel lines transferring data, addresses, and control signals among system components.`},{front:`What are Three-State Bus Buffers?`,back:`Digital buffers with three output states: Logic 0, Logic 1, and High-Impedance (Hi-Z), allowing multiple devices to connect to a shared bus without electrical contention.`}]}]},{id:`unit-2`,unitNumber:2,title:`Unit 2: UNIT 2: BASIC ORGANIZATION — CO2`,co:`CO2`,description:`Deep study notes and assessment engine for Unit 2.`,concepts:[{id:`basic-organization`,title:`Basic Organization`,subtitle:`CA452 Unit 2 Concept 1`,summary:`Comprehensive study notes covering Basic Organization with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:28,notes:`## 1. Basic Organization

Basic organization of a computer describes how the major components of a computer system are arranged and how they communicate to execute instructions.

The major components are CPU, memory, input/output units, and system buses.

\`\`\`text
COMPUTER SYSTEM
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
          ▼                    ▼                    ▼
       INPUT                PROCESSING            OUTPUT
        UNIT                   UNIT                UNIT
          │                    │                    │
          │              ┌─────┴─────┐              │
          │              │    CPU    │              │
          │              │           │              │
          │              │ ┌───────┐ │              │
          │              │ │  ALU  │ │              │
          │              │ └───────┘ │              │
          │              │ ┌───────┐ │              │
          │              │ │Control│ │              │
          │              │ │ Unit  │ │              │
          │              │ └───────┘ │              │
          │              │ Registers │              │
          │              └─────┬─────┘              │
          │                    │                    │
          └────────────────────┼────────────────────┘
                               │
                         SYSTEM BUS
                               │
                               ▼
                         ┌──────────┐
                         │  MEMORY  │
                         └──────────┘
\`\`\`

The CPU performs processing, memory stores instructions and data, and I/O units provide communication with external devices.

---



## 2. Instruction Cycle

The instruction cycle is the sequence of operations performed by the CPU to fetch, decode and execute an instruction.

The basic stages are:

\`\`\`text
┌─────────┐
        │  FETCH  │
        └────┬────┘
             │
             ▼
        ┌─────────┐
        │ DECODE  │
        └────┬────┘
             │
             ▼
        ┌─────────┐
        │ EXECUTE │
        └────┬────┘
             │
             ▼
        ┌─────────┐
        │  STORE  │
        └────┬────┘
             │
             ▼
      Next Instruction
             │
             └──────────► FETCH
\`\`\`

**Fetch Cycle**

During fetching, the CPU obtains the next instruction from memory.

A simplified sequence is:

\`\`\`text
PC → MAR
Memory Read
Memory → MDR
MDR → IR
PC ← PC + 1
\`\`\`

Where:

\`\`\`text
PC = Program Counter
MAR = Memory Address Register
MDR = Memory Data Register
IR = Instruction Register
\`\`\`

Diagram:

\`\`\`text
┌───────────────┐
          │ Program       │
          │ Counter (PC)  │
          └───────┬───────┘
                  │ Address
                  ▼
          ┌───────────────┐
          │     MAR       │
          └───────┬───────┘
                  │
                  ▼
             ┌─────────┐
             │ MEMORY  │
             └────┬────┘
                  │ Instruction
                  ▼
          ┌───────────────┐
          │     MDR       │
          └───────┬───────┘
                  │
                  ▼
          ┌───────────────┐
          │      IR       │
          └───────────────┘
\`\`\`

**Decode**

The instruction in the IR is interpreted by the control unit.

\`\`\`text
IR
             │
             ▼
     ┌────────────────┐
     │ Control Unit   │
     └───────┬────────┘
             │
       Decode Opcode
             │
       ┌─────┴─────┐
       ▼           ▼
   Operation      Operand
\`\`\`

**Execute**

The CPU performs the operation specified by the instruction.

For example:

\`\`\`text
R1 ← R2 + R3
\`\`\`

\`\`\`text
R2 ─────┐
        │
        ▼
      ┌─────┐
      │ ALU │──────► R1
      └─────┘
        ▲
        │
R3 ─────┘
\`\`\`

---



## 3. Organization of Central Processing Unit

The CPU is the main processing component of a computer. It consists primarily of the ALU, control unit and registers.

\`\`\`text
CPU
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
          Registers       ALU      Control Unit
             │            │            │
             │            │            │
             └────────────┼────────────┘
                          │
                          ▼
                         BUS
\`\`\`

**ALU**

The Arithmetic Logic Unit performs arithmetic and logical operations.

\`\`\`text
┌─────────────┐
A ──────────────►│             │
B ──────────────►│     ALU     │──────► Result
                 │             │
Control ────────►│             │
                 └──────┬──────┘
                        │
                        ▼
                     Flags
\`\`\`

Operations include:

Arithmetic:

\`\`\`text
ADD, SUB, INC, DEC
\`\`\`

Logical:

\`\`\`text
AND, OR, XOR, NOT
\`\`\`

Comparison:

\`\`\`text
Equal, Greater than, Less than
\`\`\`

**Control Unit**

The control unit coordinates CPU operations.

\`\`\`text
Instruction
     │
     ▼
┌───────────────┐
│ Control Unit  │
└───────┬───────┘
        │
 ┌──────┼──────────┐
 ▼      ▼          ▼
ALU   Registers   Memory
\`\`\`

**Registers**

Registers are small, high-speed storage locations inside the CPU.

Common registers include:

\`\`\`text
PC  → Program Counter
IR  → Instruction Register
MAR → Memory Address Register
MDR → Memory Data Register
ACC → Accumulator
\`\`\`

---



## 4. Hardwired Control Unit

A hardwired control unit generates control signals using fixed electronic circuits such as logic gates, decoders, counters and flip-flops.

\`\`\`text
Instruction
                     │
                     ▼
             ┌──────────────┐
             │ Instruction  │
             │   Decoder    │
             └──────┬───────┘
                    │
                    ▼
             ┌──────────────┐
Clock ──────►│ Control      │
             │ Logic        │
             └──────┬───────┘
                    │
        ┌───────────┼────────────┐
        ▼           ▼            ▼
       ALU       Registers     Memory
      Signals     Signals      Signals
\`\`\`

The control logic is implemented directly through hardware.

**Characteristics**

\`\`\`text
Fast operation
Fixed hardware logic
Difficult to modify
Suitable for simple instruction sets
Control signals are generated directly by circuits
\`\`\`

---



## 5. Microprogrammed Control Unit

A microprogrammed control unit generates control signals using microinstructions stored in a control memory.

\`\`\`text
Instruction
                       │
                       ▼
                ┌────────────┐
                │ Instruction│
                │  Register  │
                └─────┬──────┘
                      │
                      ▼
                ┌────────────┐
                │   Control  │
                │   Address  │
                │  Generator │
                └─────┬──────┘
                      │
                      ▼
                ┌────────────┐
                │   Control  │
                │   Memory   │
                └─────┬──────┘
                      │
                Microinstruction
                      │
                      ▼
                ┌────────────┐
                │   Control  │
                │   Signals  │
                └─────┬──────┘
                      │
             ┌────────┼────────┐
             ▼        ▼        ▼
            ALU    Registers  Memory
\`\`\`

The control memory contains microprograms. Each microinstruction specifies the control signals needed to perform internal CPU operations.

**Hardwired vs Microprogrammed**

| Hardwired Control | Microprogrammed Control |
| ----------------- | ----------------------- |
| Uses hardware logic | Uses control memory |
| Generally faster | Generally slower |
| Difficult to modify | Easier to modify |
| Complex to design for large instruction sets | Easier for complex instruction sets |

---`,diagrams:[{id:`diag-ca452-u2-c1`,title:`Basic Organization`,caption:`Polished SVG architectural visualization for Basic Organization`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">CPU Instruction Cycle & Control Unit State Machine</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Micro-operation state sequencing: Fetch, Decode, Effective Address, Execute, and Interrupt Handling</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="98.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Fetch/Decode</text> </g> <g transform="translate(190.0, 53)"> <rect width="80.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Execution</text> </g> <g transform="translate(280.0, 53)"> <rect width="116.0" height="18" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#f59e0b"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Interrupt Cycle</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Instruction Cycle Flow --> <g> <rect x="40" y="75" width="250" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="40" y="75" width="250" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="54" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">1. Fetch & Decode Cycle</text> <line x1="40" y1="107" x2="290" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="54" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">T0: </tspan> <tspan fill="#e2e8f0" font-size="11">AR <-- PC (Address setup)</tspan> </text> <text x="54" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">T1: </tspan> <tspan fill="#e2e8f0" font-size="11">IR <-- M[AR], PC <-- PC + 1</tspan> </text> <text x="54" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">T2: </tspan> <tspan fill="#e2e8f0" font-size="11">Decode Opcode IR(12-14)</tspan> </text> <text x="54" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">T2: </tspan> <tspan fill="#e2e8f0" font-size="11">AR <-- IR(0-11), I <-- IR(15)</tspan> </text> <text x="54" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">T3: </tspan> <tspan fill="#e2e8f0" font-size="11">Direct: Operand ready in AR</tspan> </text> <text x="54" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">T3: </tspan> <tspan fill="#e2e8f0" font-size="11">Indirect: AR <-- M[AR] (Resolve)</tspan> </text> <text x="54" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Decode: </tspan> <tspan fill="#e2e8f0" font-size="11">3x8 Decoder outputs D0..D7</tspan> </text> </g> <g> <path d="M 290 195 L 370 195" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(293.0, 185.0)"> <rect width="74.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="37.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Memory Ref</text> </g> </g> <!-- Execute Stage --> <g> <rect x="370" y="75" width="260" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="370" y="75" width="260" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="384" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">2. Execute Micro-operations</text> <line x1="370" y1="107" x2="630" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="384" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">AND: </tspan> <tspan fill="#e2e8f0" font-size="11">D0T4: DR <-- M[AR], D0T5: AC <-- AC & DR</tspan> </text> <text x="384" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">ADD: </tspan> <tspan fill="#e2e8f0" font-size="11">D1T4: DR <-- M[AR], D1T5: AC <-- AC + DR</tspan> </text> <text x="384" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">LDA: </tspan> <tspan fill="#e2e8f0" font-size="11">D2T4: DR <-- M[AR], D2T5: AC <-- DR</tspan> </text> <text x="384" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">STA: </tspan> <tspan fill="#e2e8f0" font-size="11">D3T4: M[AR] <-- AC (Store to RAM)</tspan> </text> <text x="384" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">BUN: </tspan> <tspan fill="#e2e8f0" font-size="11">D4T4: PC <-- AR (Branch Unconditional)</tspan> </text> <text x="384" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">BSA: </tspan> <tspan fill="#e2e8f0" font-size="11">D5T4: M[AR] <-- PC, PC <-- AR + 1</tspan> </text> <text x="384" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">ISZ: </tspan> <tspan fill="#e2e8f0" font-size="11">D6T4: DR <-- M[AR], D6T5: DR++, D6T6: M[AR]<--DR</tspan> </text> </g> <g> <path d="M 630 195 L 700 195" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#mCyan)"/> <g transform="translate(628.0, 185.0)"> <rect width="74.0" height="20" rx="5" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="37.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Flag Check</text> </g> </g> <!-- Interrupt Cycle --> <g> <rect x="700" y="75" width="180" height="240" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="700" y="75" width="180" height="32" rx="10 10 0 0" fill="#78350f"/> <text x="714" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">3. Interrupt Cycle</text> <line x1="700" y1="107" x2="880" y2="107" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.4"/> <text x="714" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">R=1: </tspan> <tspan fill="#e2e8f0" font-size="11">Triggered if IEN & (FGI|FGO)</tspan> </text> <text x="714" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">T0: </tspan> <tspan fill="#e2e8f0" font-size="11">AR <-- 0, TR <-- PC</tspan> </text> <text x="714" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">T1: </tspan> <tspan fill="#e2e8f0" font-size="11">M[AR] <-- TR, PC <-- 0</tspan> </text> <text x="714" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">T2: </tspan> <tspan fill="#e2e8f0" font-size="11">PC <-- PC + 1, IEN <-- 0</tspan> </text> <text x="714" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Return: </tspan> <tspan fill="#e2e8f0" font-size="11">Saved in RAM address 0</tspan> </text> <text x="714" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">ISR: </tspan> <tspan fill="#e2e8f0" font-size="11">Begins execution at addr 1</tspan> </text> </g> <g transform="translate(40, 335)"> <rect width="840" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Control Sequencing: Hardwired vs Microprogrammed</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Hardwired control uses combinational decoders for maximum clock speed; Microprogrammed control fetches micro-instructions from Control ROM.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u2c1-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In Basic Organization, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u2c1-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in Basic Organization, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of Basic Organization?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]},{id:`general-register-organization`,title:`General Register Organization`,subtitle:`CA452 Unit 2 Concept 2`,summary:`Comprehensive study notes covering General Register Organization with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:28,notes:`## 6. General Register Organization

Registers are organized inside the CPU so that data can be transferred efficiently between registers and the ALU.

A common arrangement uses a register file connected to buses and the ALU.

\`\`\`text
┌───────────────┐
       │   Registers   │
       │               │
R0 ───►│               │
R1 ───►│ Register File │
R2 ───►│               │
R3 ───►│               │
       └───┬───────┬───┘
           │       │
         Bus A    Bus B
           │       │
           ▼       ▼
          ┌───────────┐
          │    ALU    │
          └─────┬─────┘
                │
              Bus C
                │
                ▼
          Register File
\`\`\`

The ALU receives operands from registers and sends the result back to a destination register.

Example:

\`\`\`text
R1 ← R2 + R3
\`\`\`

\`\`\`text
R2 ─────► Bus A ──┐
                  │
                  ▼
                ┌─────┐
                │ ALU │────► Bus C ───► R1
                └─────┘
                  ▲
                  │
R3 ─────► Bus B ──┘
\`\`\`

---



## 7. Stack Organization

A stack is a storage structure that follows the LIFO principle.

LIFO means:

\`\`\`text
Last In → First Out
\`\`\`

The two basic operations are:

\`\`\`text
PUSH → Insert data
POP  → Remove data
\`\`\`

Example:

\`\`\`text
TOP
           │
           ▼
        ┌───────┐
        │   C   │ ← Last inserted
        ├───────┤
        │   B   │
        ├───────┤
        │   A   │ ← First inserted
        └───────┘
\`\`\`

If C is popped:

\`\`\`text
TOP
           │
           ▼
        ┌───────┐
        │   B   │
        ├───────┤
        │   A   │
        └───────┘
\`\`\`

**Stack Pointer**

The Stack Pointer, or SP, contains the address of the top element of the stack.

\`\`\`text
CPU
               │
               ▼
        ┌─────────────┐
        │ Stack       │
        │ Pointer SP  │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │     TOP     │
        ├─────────────┤
        │     ...     │
        ├─────────────┤
        │             │
        └─────────────┘
             Memory
\`\`\`

Stack organization is commonly used for function calls, return addresses, local variables and expression evaluation.

---



## 8. Addressing Modes

Addressing modes specify how the operand of an instruction is located.

Different addressing modes provide different ways to access data.

\`\`\`text
Addressing Modes
                           │
       ┌───────────────────┼────────────────────┐
       ▼                   ▼                    ▼
    Immediate           Register             Direct
       │                   │                    │
       ▼                   ▼                    ▼
   Operand in          Operand in          Address in
   instruction          register          instruction
\`\`\`

Common addressing modes include:

1. Immediate
2. Direct
3. Indirect
4. Register
5. Register Indirect
6. Indexed
7. Relative
8. Implied

**Immediate Addressing**

The operand is directly present in the instruction.

\`\`\`c
MOV R1, #25
\`\`\`

\`\`\`text
Instruction
┌────────┬────────────┐
│ Opcode │   Data 25  │
└────────┴────────────┘
\`\`\`

No separate memory lookup is required to obtain the operand.

---

**Direct Addressing**

The instruction contains the memory address of the operand.

\`\`\`text
LOAD R1, 5000
\`\`\`

\`\`\`text
Instruction
      │
      │ Address = 5000
      ▼
   Memory[5000]
      │
      ▼
      R1
\`\`\`

---

**Indirect Addressing**

The instruction specifies a location containing the actual address of the operand.

\`\`\`text
Instruction
    │
    ▼
Address A
    │
    ▼
Memory[A] = B
    │
    ▼
Memory[B] = Operand
\`\`\`

Thus, an additional memory reference is required to obtain the effective address.

---

**Register Addressing**

The operand is located in a CPU register.

\`\`\`text
ADD R1, R2
\`\`\`

\`\`\`text
R1 ──────┐
         ▼
       ┌─────┐
       │ ALU │
       └─────┘
         ▲
         │
R2 ──────┘
\`\`\`

---

**Register Indirect Addressing**

A register contains the memory address of the operand.

\`\`\`text
Register R1
    │
    │ Address
    ▼
  Memory
    │
    │ Data
    ▼
  Operand
\`\`\`

---

**Indexed Addressing**

The effective address is obtained by adding an index register to a base address.

\`\`\`text
Effective Address
        =
Base Address + Index Register
\`\`\`

\`\`\`text
Base Address ─────┐
                  ├──► ADD ───► Effective Address
Index Register ───┘
\`\`\`

This is useful for accessing arrays.

---

**Relative Addressing**

The effective address is calculated relative to the current program counter.

\`\`\`text
Effective Address
       =
PC + Displacement
\`\`\`

\`\`\`text
PC ─────────────┐
                ├──► ADD ───► Effective Address
Displacement ───┘
\`\`\`

It is commonly used in branch instructions.

---

**Implied Addressing**

The operand is implied by the instruction itself.

For example, an instruction operating directly on an accumulator may not explicitly specify the accumulator.

\`\`\`text
Instruction
     │
     ▼
Implicit Operand
     │
     ▼
Accumulator
\`\`\`

---



## 9. Instruction Formats

An instruction format defines the arrangement of fields within a machine instruction.

A typical instruction contains:

\`\`\`text
┌──────────────┬──────────────┬──────────────┐
│    Opcode    │ Addressing   │   Operand    │
│              │    Mode      │              │
└──────────────┴──────────────┴──────────────┘
\`\`\`

The exact format depends on the processor architecture.

**Three-address instruction**

Contains three operand fields.

\`\`\`text
ADD R1, R2, R3
\`\`\`

Meaning:

\`\`\`text
R1 ← R2 + R3
\`\`\`

\`\`\`text
┌────────┬────┬────┬────┐
│ Opcode │ R1 │ R2 │ R3 │
└────────┴────┴────┴────┘
\`\`\`

**Two-address instruction**

\`\`\`text
ADD R1, R2
\`\`\`

Meaning:

\`\`\`text
R1 ← R1 + R2
\`\`\`

\`\`\`text
┌────────┬────┬────┐
│ Opcode │ R1 │ R2 │
└────────┴────┴────┘
\`\`\`

**One-address instruction**

Uses an implicit accumulator.

\`\`\`text
ADD X
\`\`\`

Meaning:

\`\`\`text
AC ← AC + M[X]
\`\`\`

\`\`\`text
┌────────┬────────────┐
│ Opcode │  Address X │
└────────┴────────────┘
\`\`\`

**Zero-address instruction**

Operands are implied by the stack.

\`\`\`text
PUSH A
PUSH B
ADD
\`\`\`

The ADD operation uses the top stack elements.

\`\`\`text
Stack
       ┌─────┐
       │  B  │
       ├─────┤
       │  A  │
       └─────┘
          │
          ▼
         ADD
          │
          ▼
        A + B
\`\`\`

---



## 10. Memory Organization

Memory organization describes how data and instructions are stored and accessed.

Memory consists of a large number of storage locations, each having a unique address.

\`\`\`text
CPU
              │
              │ Address
              ▼
       ┌──────────────┐
       │    Memory    │
       ├──────────────┤
0000 → │ Instruction  │
0001 → │ Data         │
0010 → │ Instruction  │
0011 → │ Data         │
0100 → │ Data         │
       └──────────────┘
\`\`\`

Each memory location can store a fixed number of bits.

For a memory with n address bits:

\`\`\`text
Number of locations = 2ⁿ
\`\`\`

For example, with 10 address bits:

\`\`\`text
2¹⁰ = 1024 locations
\`\`\`

---`,diagrams:[{id:`diag-ca452-u2-c2`,title:`General Register Organization`,caption:`Polished SVG architectural visualization for General Register Organization`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">CPU General Register Organization & ALU Data Path</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Bus A/B routing, 5-bit ALU function selection, and destination write-back decoder</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="80.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Registers</text> </g> <g transform="translate(172.0, 53)"> <rect width="86.0" height="18" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#10b981"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">ALU Engine</text> </g> <g transform="translate(268.0, 53)"> <rect width="68.0" height="18" rx="4" fill="#0f172a" stroke="#a855f7" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#a855f7"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Decoder</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- General Register Organization --> <g> <rect x="50" y="75" width="230" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="50" y="75" width="230" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="64" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">CPU Register Array</text> <line x1="50" y1="107" x2="280" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="64" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Registers: </tspan> <tspan fill="#e2e8f0" font-size="11">7 general registers + Input</tspan> </text> <text x="64" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Width: </tspan> <tspan fill="#e2e8f0" font-size="11">16-bit words per register</tspan> </text> <text x="64" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">SELA: </tspan> <tspan fill="#e2e8f0" font-size="11">3 bits select Bus A source</tspan> </text> <text x="64" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">SELB: </tspan> <tspan fill="#e2e8f0" font-size="11">3 bits select Bus B source</tspan> </text> <text x="64" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">SELD: </tspan> <tspan fill="#e2e8f0" font-size="11">3 bits select Dest decoder</tspan> </text> <text x="64" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Outputs: </tspan> <tspan fill="#e2e8f0" font-size="11">Multiplexed into ALU inputs</tspan> </text> <text x="64" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Clock: </tspan> <tspan fill="#e2e8f0" font-size="11">Synchronous edge triggered</tspan> </text> </g> <g> <path d="M 280 150 L 360 150" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(271.0, 140.0)"> <rect width="98.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="49.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Bus A (16-bit)</text> </g> </g> <g> <path d="M 280 240 L 360 240" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#mCyan)"/> <g transform="translate(271.0, 230.0)"> <rect width="98.0" height="20" rx="5" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="49.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Bus B (16-bit)</text> </g> </g> <!-- ALU & Shifter --> <g> <rect x="360" y="75" width="250" height="240" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="360" y="75" width="250" height="32" rx="10 10 0 0" fill="#064e3b"/> <text x="374" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Arithmetic Logic Unit (ALU)</text> <line x1="360" y1="107" x2="610" y2="107" stroke="#10b981" stroke-width="1" stroke-opacity="0.4"/> <text x="374" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">OPR Code: </tspan> <tspan fill="#e2e8f0" font-size="11">5-bit operation selection</tspan> </text> <text x="374" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Arithmetic: </tspan> <tspan fill="#e2e8f0" font-size="11">ADD, SUB, INC, DEC, ADDX</tspan> </text> <text x="374" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Logic: </tspan> <tspan fill="#e2e8f0" font-size="11">AND, OR, XOR, NOT</tspan> </text> <text x="374" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Shifter: </tspan> <tspan fill="#e2e8f0" font-size="11">SHL, SHR, Circular rotate</tspan> </text> <text x="374" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Flags: </tspan> <tspan fill="#e2e8f0" font-size="11">Carry (C), Overflow (V), Zero (Z)</tspan> </text> <text x="374" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Output: </tspan> <tspan fill="#e2e8f0" font-size="11">16-bit computed result to bus</tspan> </text> <text x="374" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Latency: </tspan> <tspan fill="#e2e8f0" font-size="11">Pure combinational propagation</tspan> </text> </g> <g> <path d="M 610 195 L 690 195" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#mEmerald)"/> <g transform="translate(613.0, 185.0)"> <rect width="74.0" height="20" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="37.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Result Bus</text> </g> </g> <!-- Destination Decoder --> <g> <rect x="690" y="75" width="190" height="240" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="690" y="75" width="190" height="32" rx="10 10 0 0" fill="#581c87"/> <text x="704" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Destination Decoder</text> <line x1="690" y1="107" x2="880" y2="107" stroke="#a855f7" stroke-width="1" stroke-opacity="0.4"/> <text x="704" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">SELD: </tspan> <tspan fill="#e2e8f0" font-size="11">3 select bits: 001..111</tspan> </text> <text x="704" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Loads: </tspan> <tspan fill="#e2e8f0" font-size="11">Asserts LD on target Reg</tspan> </text> <text x="704" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">None: </tspan> <tspan fill="#e2e8f0" font-size="11">000 = No register loaded</tspan> </text> <text x="704" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Stack: </tspan> <tspan fill="#e2e8f0" font-size="11">SP register operations</tspan> </text> <text x="704" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Speed: </tspan> <tspan fill="#e2e8f0" font-size="11">1 clock cycle operation</tspan> </text> </g> <g transform="translate(50, 335)"> <rect width="830" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Register Organization Formula: R1 <-- R2 + R3</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Control word = [SELA: R2, SELB: R3, SELD: R1, OPR: ADD]; executed in exactly one clock cycle.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u2c2-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In General Register Organization, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u2c2-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in General Register Organization, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of General Register Organization?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]},{id:`memory-hierarchy`,title:`Memory Hierarchy`,subtitle:`CA452 Unit 2 Concept 3`,summary:`Comprehensive study notes covering Memory Hierarchy with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:30,notes:`## 11. Memory Hierarchy

Memory hierarchy organizes storage according to speed, cost and capacity.

The fastest memories are generally smaller and more expensive per bit, while slower memories provide larger storage capacity.

\`\`\`text
FASTEST
                    ▲
                    │
              ┌───────────┐
              │ Registers │
              ├───────────┤
              │   Cache   │
              ├───────────┤
              │ Main      │
              │ Memory    │
              ├───────────┤
              │ SSD/HDD   │
              ├───────────┤
              │ Auxiliary │
              │ Storage   │
              └───────────┘
                    │
                    ▼
                 SLOWEST
\`\`\`

General relationship:

Going upward:

\`\`\`text
Speed ↑
Cost/bit ↑
Capacity ↓
\`\`\`

Going downward:

\`\`\`text
Speed ↓
Cost/bit ↓
Capacity ↑
\`\`\`

The hierarchy improves system performance by keeping frequently used data in faster storage.

---



## 12. Auxiliary Memory

Auxiliary memory, also called secondary storage, provides long-term storage of programs and data.

Examples include:

\`\`\`text
SSD
HDD
Optical Disk
USB Flash Drive
Memory Card
\`\`\`

Basic arrangement:

\`\`\`text
Computer
                 │
                 ▼
        ┌─────────────────┐
        │ I/O Controller  │
        └────────┬────────┘
                 │
        ┌────────┼────────┐
        ▼        ▼        ▼
       SSD      HDD      USB
\`\`\`

Characteristics:

\`\`\`text
Non-volatile
Large capacity
Lower cost per bit
Slower than main memory
Used for permanent storage
\`\`\`

---



## 13. Associative Memory

Associative memory is also called Content Addressable Memory (CAM).

Unlike conventional memory, which is accessed using an address, associative memory searches for data based on its content.

\`\`\`text
Conventional Memory:

Address ───► Memory ───► Data

Associative Memory:

Search Key ───► Compare Contents
                     │
                     ▼
                Matching Data
\`\`\`

Conceptual structure:

\`\`\`text
Search Key
                 │
                 ▼
        ┌──────────────────┐
        │ Parallel Compare │
        └────────┬─────────┘
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
    Entry 1   Entry 2   Entry 3
       │         │         │
       └─────────┼─────────┘
                 ▼
              Match
\`\`\`

All entries can be compared simultaneously, making associative memory useful for fast searching.

---



## 14. Cache Memory

Cache memory is a small, high-speed memory located between the CPU and main memory.

It stores frequently or recently used instructions and data.

\`\`\`text
CPU
        │
        ▼
   ┌───────────┐
   │   Cache   │
   └─────┬─────┘
         │
         ▼
   ┌───────────┐
   │ Main      │
   │ Memory    │
   └───────────┘
\`\`\`

**Cache Hit**

If requested data is found in the cache:

\`\`\`text
CPU
 │
 │ Request
 ▼
Cache
 │
 │ HIT
 ▼
Data → CPU
\`\`\`

This is fast.

**Cache Miss**

If requested data is not found:

\`\`\`text
CPU
 │
 ▼
Cache
 │
 │ MISS
 ▼
Main Memory
 │
 ▼
Cache
 │
 ▼
CPU
\`\`\`

**Cache hierarchy**

Modern systems may have multiple cache levels:

\`\`\`text
CPU
              │
          ┌───┴───┐
          ▼       ▼
         L1      Registers
          │
          ▼
         L2
          │
          ▼
         L3
          │
          ▼
      Main Memory
\`\`\`

Generally:

\`\`\`text
L1 → Smallest and fastest
L2 → Larger and slower than L1
L3 → Larger and slower than L2
\`\`\`

---



## 15. Virtual Memory

Virtual memory is a memory-management technique that allows a system to use secondary storage as an extension of main memory.

It provides each process with a large logical address space even when physical RAM is limited.

\`\`\`text
CPU
              │
        Virtual Address
              │
              ▼
       ┌──────────────┐
       │ MMU / Page   │
       │ Translation  │
       └──────┬───────┘
              │
        Physical Address
              │
              ▼
       ┌──────────────┐
       │     RAM      │
       └──────┬───────┘
              │
        If page absent
              │
              ▼
       ┌──────────────┐
       │ Disk / SSD   │
       └──────────────┘
\`\`\`

Virtual memory commonly divides memory into fixed-size pages and physical memory into frames.

\`\`\`text
Virtual Memory             Physical Memory

Page 0 ───────────────► Frame 3
Page 1 ───────────────► Frame 0
Page 2 ───────────────► Frame 5
Page 3 ───────────────► Disk
\`\`\`

A page table keeps track of the mapping.

\`\`\`text
Virtual Address
      │
      ▼
┌──────────────┐
│ Page Number  │
│ Offset       │
└──────┬───────┘
       │
       ▼
   Page Table
       │
       ▼
 Frame Number
       │
       ▼
Physical Address
\`\`\`

If a required page is not present in RAM, a page fault occurs.

\`\`\`text
CPU requests page
       │
       ▼
 Is page in RAM?
    ┌──┴──┐
   YES    NO
    │      │
    ▼      ▼
 Access   Page Fault
 Memory      │
             ▼
       Load page from
        secondary storage
             │
             ▼
          Update Page Table
             │
             ▼
          Resume execution
\`\`\`

---



## UNIT 2 COMPLETE FLOW

\`\`\`text
UNIT 2
                   BASIC ORGANIZATION
                           │
        ┌──────────────────┼───────────────────┐
        │                  │                   │
        ▼                  ▼                   ▼
   CPU Organization    Instruction System   Memory System
        │                  │                   │
   ┌────┼────┐       ┌─────┼─────┐       ┌────┼─────────┐
   ▼    ▼    ▼       ▼     ▼     ▼       ▼    ▼    ▼    ▼
  ALU  CU  Registers Cycle Addressing  Hierarchy Cache Virtual
                    Modes    Modes      │          Memory
                              │         │
                              ▼         ├── Auxiliary
                         Instruction    ├── Associative
                           Formats      └── Main Memory
                              │
                              ▼
                       Register Organization
                              │
                              ▼
                       Stack Organization
\`\`\`

The complete processing relationship can be represented as:

\`\`\`text
┌───────────────────────┐
                 │      INSTRUCTION      │
                 └──────────┬────────────┘
                            │
                            ▼
                    ┌──────────────┐
                    │ Instruction  │
                    │    Cycle     │
                    └──────┬───────┘
                           │
                 ┌─────────┴─────────┐
                 ▼                   ▼
              Decode              Execute
                 │                   │
                 ▼                   ▼
          Control Unit ───────► ALU / Registers
                 │                   │
                 └─────────┬─────────┘
                           │
                           ▼
                         Memory
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
            Cache      Main Memory   Virtual Memory
              │            │            │
              └────────────┼────────────┘
                           ▼
                    Auxiliary Memory
\`\`\``,diagrams:[{id:`diag-ca452-u2-c3`,title:`Memory Hierarchy`,caption:`Polished SVG architectural visualization for Memory Hierarchy`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Computer Memory Hierarchy Architecture</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Speed, cost per bit, and capacity trade-offs across SRAM, DRAM, SSD, and Magnetic Disks</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="86.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">SRAM Cache</text> </g> <g transform="translate(178.0, 53)"> <rect width="92.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">DRAM Memory</text> </g> <g transform="translate(280.0, 53)"> <rect width="128.0" height="18" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#10b981"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Secondary Storage</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Pyramid Hierarchy --> <g> <rect x="60" y="75" width="220" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="60" y="75" width="220" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="74" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">CPU Internal Storage</text> <line x1="60" y1="107" x2="280" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="74" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Registers: </tspan> <tspan fill="#e2e8f0" font-size="11">16-64 words | < 1 ns latency</tspan> </text> <text x="74" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">L1 Cache: </tspan> <tspan fill="#e2e8f0" font-size="11">32-64 KB | 1-2 ns latency</tspan> </text> <text x="74" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">L2 Cache: </tspan> <tspan fill="#e2e8f0" font-size="11">256-512 KB | 3-5 ns latency</tspan> </text> <text x="74" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">L3 Cache: </tspan> <tspan fill="#e2e8f0" font-size="11">4-32 MB Shared | 10-15 ns</tspan> </text> <text x="74" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Technology: </tspan> <tspan fill="#e2e8f0" font-size="11">Static RAM (SRAM flip-flops)</tspan> </text> <text x="74" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Hit Ratio: </tspan> <tspan fill="#e2e8f0" font-size="11">Typically 90% - 98%</tspan> </text> </g> <g> <path d="M 280 195 L 360 195" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(283.0, 185.0)"> <rect width="74.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="37.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Bus misses</text> </g> </g> <g> <rect x="360" y="75" width="230" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="360" y="75" width="230" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="374" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Main Memory (RAM)</text> <line x1="360" y1="107" x2="590" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="374" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">DRAM: </tspan> <tspan fill="#e2e8f0" font-size="11">Dynamic RAM (Capacitor cells)</tspan> </text> <text x="374" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Capacity: </tspan> <tspan fill="#e2e8f0" font-size="11">8 GB - 64 GB</tspan> </text> <text x="374" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Latency: </tspan> <tspan fill="#e2e8f0" font-size="11">50 - 100 ns access time</tspan> </text> <text x="374" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Refresh: </tspan> <tspan fill="#e2e8f0" font-size="11">Requires periodic row refresh</tspan> </text> <text x="374" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Bandwidth: </tspan> <tspan fill="#e2e8f0" font-size="11">25 - 50 GB/s DDR4/DDR5</tspan> </text> <text x="374" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Virtual: </tspan> <tspan fill="#e2e8f0" font-size="11">Organized into 4KB Pages</tspan> </text> </g> <g> <path d="M 590 195 L 670 195" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#mCyan)"/> <g transform="translate(593.0, 185.0)"> <rect width="74.0" height="20" rx="5" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="37.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Page Fault</text> </g> </g> <g> <rect x="670" y="75" width="200" height="240" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="670" y="75" width="200" height="32" rx="10 10 0 0" fill="#064e3b"/> <text x="684" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Secondary Storage</text> <line x1="670" y1="107" x2="870" y2="107" stroke="#10b981" stroke-width="1" stroke-opacity="0.4"/> <text x="684" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">NVMe SSD: </tspan> <tspan fill="#e2e8f0" font-size="11">PCIe flash | 10-50 µs</tspan> </text> <text x="684" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">SATA SSD: </tspan> <tspan fill="#e2e8f0" font-size="11">Flash NAND | 100 µs</tspan> </text> <text x="684" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">HDD: </tspan> <tspan fill="#e2e8f0" font-size="11">Magnetic disk | 5-10 ms</tspan> </text> <text x="684" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Tape/Cloud: </tspan> <tspan fill="#e2e8f0" font-size="11">Archival | Seconds/Minutes</tspan> </text> <text x="684" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Cost: </tspan> <tspan fill="#e2e8f0" font-size="11">Lowest cost per gigabyte</tspan> </text> <text x="684" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Persistence: </tspan> <tspan fill="#e2e8f0" font-size="11">Retains data without power</tspan> </text> </g> <g transform="translate(60, 335)"> <rect width="810" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Locality of Reference: Temporal & Spatial</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Effective Access Time: EAT = Hit_Ratio × T_cache + (1 - Hit_Ratio) × T_ram. Principle of locality makes the hierarchy feel as fast as cache and as large as disk.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u2c3-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In Memory Hierarchy, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u2c3-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in Memory Hierarchy, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of Memory Hierarchy?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]}]},{id:`unit-3`,unitNumber:3,title:`Unit 3: UNIT 3: I/O ORGANIZATION — CO3`,co:`CO3`,description:`Deep study notes and assessment engine for Unit 3.`,concepts:[{id:`io-organization`,title:`I/O Organization`,subtitle:`CA452 Unit 3 Concept 1`,summary:`Comprehensive study notes covering I/O Organization with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:36,notes:`## 1. I/O Organization

I/O organization describes how the CPU communicates with external devices such as keyboards, displays, printers, disks, sensors and communication devices.

The CPU generally cannot communicate directly with every peripheral. An I/O interface is used between the CPU and peripheral device.

\`\`\`text
COMPUTER SYSTEM
                         │
              ┌──────────┴──────────┐
              │                     │
             CPU                  Memory
              │
              │ System Bus
              │
       ┌──────┴───────┐
       │  I/O Interface│
       └──────┬───────┘
              │
       ┌──────┼──────────────┐
       ▼      ▼              ▼
    Keyboard Display       Printer
\`\`\`

The I/O interface performs functions such as:

\`\`\`text
Data buffering
Device selection
Control signal generation
Status reporting
Synchronization between CPU and peripheral
\`\`\`

---



## 2. Peripheral Devices

Peripheral devices are hardware devices connected to a computer for input, output, storage or communication.

They can broadly be classified as:

\`\`\`text
Peripheral Devices
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
        Input          Output         Storage
          │              │              │
      Keyboard        Monitor           HDD
      Mouse           Printer           SSD
      Scanner         Speaker           USB
      Microphone      Projector
\`\`\`

**Input Devices**

Input devices send data to the computer.

Examples:

\`\`\`text
Keyboard → Characters
Mouse → Position and commands
Scanner → Images/documents
Microphone → Audio
Sensor → Physical measurements
\`\`\`

**Output Devices**

Output devices receive processed information from the computer.

Examples:

\`\`\`text
Monitor → Visual output
Printer → Hard copy
Speaker → Audio
Projector → Large-screen display
\`\`\`

**Storage Devices**

Storage devices retain data for later use.

\`\`\`text
HDD
SSD
USB Flash Drive
Memory Card
Optical Disk
\`\`\`

---



## 3. I/O Interface

An I/O interface provides communication between the CPU/system bus and a peripheral device.

A typical interface contains:

\`\`\`text
CPU
                  │
             System Bus
                  │
        ┌─────────┴─────────┐
        │    I/O Interface  │
        │                   │
        │ ┌───────────────┐ │
        │ │ Data Register │ │
        │ ├───────────────┤ │
        │ │ Status Reg.   │ │
        │ ├───────────────┤ │
        │ │ Control Reg.  │ │
        │ └───────────────┘ │
        └─────────┬─────────┘
                  │
                  ▼
             Peripheral
\`\`\`

**Data Register**

Stores data being transferred between CPU and peripheral.

**Status Register**

Contains information about the current condition of the device.

For example:

\`\`\`text
Ready = 1
Busy  = 1
Error = 1
\`\`\`

**Control Register**

Contains commands or control information sent by the CPU.

For example:

\`\`\`text
Start
Stop
Reset
Enable
\`\`\`

The interface therefore acts as a bridge:

\`\`\`text
CPU ⇄ System Bus ⇄ I/O Interface ⇄ Peripheral
\`\`\`

---



## 4. Asynchronous Data Transfer

Asynchronous data transfer occurs when two devices exchange data without sharing a common clock.

This is necessary when the CPU and peripheral operate at different speeds.

\`\`\`text
CPU                         Peripheral
 │                              │
 │ Different operating speeds   │
 │                              │
 └──────────────┬───────────────┘
                │
         Asynchronous
        Data Transfer
\`\`\`

The sender and receiver coordinate the transfer using control signals.

Two important techniques are:

\`\`\`text
Asynchronous Transfer
        │
        ├── Strobe Control
        │
        └── Handshaking
\`\`\`

---



## 5. Strobe Control

In strobe control, a single control signal called a strobe is used to indicate when data is available or should be accepted.

There are two forms:

\`\`\`text
Strobe Control
      │
 ┌────┴─────┐
 ▼          ▼
Source     Destination
Initiated   Initiated
\`\`\`

**Source-Initiated Strobe**

The source generates the strobe signal after placing data on the bus.

\`\`\`text
Source                     Destination
  │                             │
  │ Put data on bus             │
  ├────────────────────────────►│
  │                             │
  │ STROBE                      │
  ├────────────────────────────►│
  │                             │
  │                     Accept data
\`\`\`

Sequence:

1. Source places data on bus.
2. Source activates STROBE.
3. Destination detects STROBE.
4. Destination reads the data.
5. Source removes STROBE and data.

**Destination-Initiated Strobe**

The destination generates the strobe when it is ready to receive data.

\`\`\`text
Source                     Destination
  │                             │
  │                             │ STROBE
  │                     ◄───────┤
  │                             │
  │ Data                         │
  ├────────────────────────────►│
  │                             │
\`\`\`

The major limitation of strobe control is that it does not provide confirmation that the receiving device actually accepted the data.

---



## 6. Handshaking

Handshaking is an asynchronous data-transfer method that uses two control signals to coordinate sender and receiver.

The two signals are commonly:

\`\`\`text
Request / Data Valid
Acknowledge
\`\`\`

Basic arrangement:

\`\`\`text
Source                         Destination
          │                                │
          │──── Data ────────────────────►│
          │                                │
          │──── Request ─────────────────►│
          │                                │
          │◄─── Acknowledge ──────────────│
          │                                │
\`\`\`

**Handshaking sequence**

\`\`\`text
Source
  │
  │ 1. Place data
  ▼
Data Bus
  │
  │ 2. Request/Data Valid
  ▼
Destination
  │
  │ 3. Accept data
  │
  │ 4. Acknowledge
  ▼
Source
  │
  │ 5. Remove request/data
  ▼
Next transfer
\`\`\`

Unlike simple strobe control, handshaking allows both devices to confirm that the transfer has occurred.

---



## 7. Modes of Data Transfer

Data transfer between CPU and I/O devices can be organized into different modes.

\`\`\`text
Data Transfer
                      │
          ┌───────────┼────────────┐
          ▼           ▼            ▼
      Programmed   Interrupt     DMA
         I/O       Driven I/O
                      │
                      ▼
                Priority Interrupt
\`\`\`

The syllabus specifically covers:

1. Programmed I/O
2. Interrupt-driven I/O
3. Priority interrupt

---



## 8. Programmed I/O

In programmed I/O, the CPU continuously checks the status of the I/O device and performs the transfer itself.

The CPU remains involved throughout the operation.

\`\`\`text
CPU
                  │
                  │ Check Status
                  ▼
             I/O Interface
                  │
             ┌────┴────┐
             ▼         ▼
           Ready      Busy
             │         │
             ▼         │
          Transfer ◄────┘
             │
             ▼
           CPU
\`\`\`

**Working**

1. CPU sends command to I/O device.
2. CPU reads device status.
3. If device is busy, CPU waits/checks again.
4. When device becomes ready, CPU transfers data.
5. CPU continues program execution.

Example:

\`\`\`text
while device is not ready
       check status

transfer data
\`\`\`

**Disadvantage**

The CPU wastes processing time repeatedly checking the device.

---



## 9. Interrupt-Driven I/O

In interrupt-driven I/O, the CPU does not continuously check the device.

Instead, the peripheral sends an interrupt signal when it needs CPU attention or becomes ready.

\`\`\`text
CPU
                   │
             Main Program
                   │
                   ▼
            ┌─────────────┐
            │ Peripheral  │
            └──────┬──────┘
                   │
                Interrupt
                   │
                   ▼
                  CPU
                   │
             Save State
                   │
                   ▼
        Interrupt Service Routine
                   │
                   ▼
             Return to Program
\`\`\`

**Working**

\`\`\`text
CPU executes main program
          │
          ▼
Peripheral becomes ready
          │
          ▼
Peripheral sends interrupt
          │
          ▼
CPU completes current operation
          │
          ▼
CPU saves necessary state
          │
          ▼
CPU executes ISR
          │
          ▼
CPU returns to main program
\`\`\`

ISR means Interrupt Service Routine.

**Advantage**

The CPU can perform useful work instead of continuously polling the device.

---`,diagrams:[{id:`diag-ca452-u3-c1`,title:`I/O Organization`,caption:`Polished SVG architectural visualization for I/O Organization`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Asynchronous I/O Data Transfer: Strobe vs Handshaking</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Timing protocols, Data Valid (DAV) and Data Accepted (DAC) handshaking cycle</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="104.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Strobe Method</text> </g> <g transform="translate(196.0, 53)"> <rect width="134.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Two-Wire Handshake</text> </g> <g transform="translate(340.0, 53)"> <rect width="74.0" height="18" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#10b981"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">I/O Port</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Asynchronous Transfer --> <g> <rect x="50" y="75" width="250" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="50" y="75" width="250" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="64" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Strobe Control Method</text> <line x1="50" y1="107" x2="300" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="64" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Source: </tspan> <tspan fill="#e2e8f0" font-size="11">Places data on data bus</tspan> </text> <text x="64" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Strobe: </tspan> <tspan fill="#e2e8f0" font-size="11">Source asserts STROBE high</tspan> </text> <text x="64" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Destination: </tspan> <tspan fill="#e2e8f0" font-size="11">Reads data while strobe high</tspan> </text> <text x="64" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Limitation: </tspan> <tspan fill="#e2e8f0" font-size="11">No confirmation of reception</tspan> </text> <text x="64" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Flaw: </tspan> <tspan fill="#e2e8f0" font-size="11">If receiver is busy, data is lost</tspan> </text> <text x="64" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Timing: </tspan> <tspan fill="#e2e8f0" font-size="11">Fixed pulse duration requirement</tspan> </text> </g> <g> <path d="M 300 195 L 380 195" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(297.0, 185.0)"> <rect width="86.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="43.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">evolves into</text> </g> </g> <g> <rect x="380" y="75" width="280" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="380" y="75" width="280" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="394" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Two-Wire Handshaking</text> <line x1="380" y1="107" x2="660" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="394" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Line 1: </tspan> <tspan fill="#e2e8f0" font-size="11">Data Valid (DAV) / Request</tspan> </text> <text x="394" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Line 2: </tspan> <tspan fill="#e2e8f0" font-size="11">Data Accepted (DAC) / Acknowledge</tspan> </text> <text x="394" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Step 1: </tspan> <tspan fill="#e2e8f0" font-size="11">Source places data, asserts DAV=1</tspan> </text> <text x="394" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Step 2: </tspan> <tspan fill="#e2e8f0" font-size="11">Dest accepts data, asserts DAC=1</tspan> </text> <text x="394" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Step 3: </tspan> <tspan fill="#e2e8f0" font-size="11">Source drops DAV=0 (acknowledges)</tspan> </text> <text x="394" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Step 4: </tspan> <tspan fill="#e2e8f0" font-size="11">Dest drops DAC=0 (ready for next)</tspan> </text> <text x="394" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Advantage: </tspan> <tspan fill="#e2e8f0" font-size="11">Completely independent of bus speed</tspan> </text> </g> <g> <path d="M 660 195 L 720 195" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#mCyan)"/> <g transform="translate(662.0, 185.0)"> <rect width="56.0" height="20" rx="5" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="28.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">governs</text> </g> </g> <g> <rect x="720" y="75" width="160" height="240" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="720" y="75" width="160" height="32" rx="10 10 0 0" fill="#064e3b"/> <text x="734" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">I/O Interface</text> <line x1="720" y1="107" x2="880" y2="107" stroke="#10b981" stroke-width="1" stroke-opacity="0.4"/> <text x="734" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Data Port: </tspan> <tspan fill="#e2e8f0" font-size="11">In/Out buffer</tspan> </text> <text x="734" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Status: </tspan> <tspan fill="#e2e8f0" font-size="11">FGI / FGO flags</tspan> </text> <text x="734" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Control: </tspan> <tspan fill="#e2e8f0" font-size="11">Mode config</tspan> </text> <text x="734" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Addr Dec: </tspan> <tspan fill="#e2e8f0" font-size="11">Decodes port</tspan> </text> </g> <g transform="translate(50, 335)"> <rect width="830" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Asynchronous Communication Principle</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Two-wire handshaking eliminates race conditions and timing discrepancies between high-speed CPU and slow electromechanical peripheral devices.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u3c1-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In I/O Organization, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u3c1-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in I/O Organization, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of I/O Organization?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]},{id:`priority-interrupt`,title:`Priority Interrupt`,subtitle:`CA452 Unit 3 Concept 2`,summary:`Comprehensive study notes covering Priority Interrupt with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:36,notes:`## 10. Priority Interrupt

When multiple I/O devices request service simultaneously, the CPU must determine which interrupt should be serviced first.

This is called priority interrupt handling.

\`\`\`text
Device 1 ──┐
 Device 2 ──┤
 Device 3 ──┼──► Priority Resolver ───► CPU
 Device 4 ──┘
\`\`\`

For example:

\`\`\`text
Priority

Highest
  │
  ├── Device 1
  ├── Device 2
  ├── Device 3
  └── Device 4
  │
Lowest
\`\`\`

If Device 1 and Device 3 request interrupts simultaneously, the priority mechanism selects Device 1 if it has the higher priority.

**Daisy-Chain Priority**

A common hardware method is daisy chaining.

\`\`\`text
CPU
 │
 │ Interrupt Acknowledge
 ▼
┌──────────┐
│ Device 1 │
└────┬─────┘
     │
     ▼
┌──────────┐
│ Device 2 │
└────┬─────┘
     │
     ▼
┌──────────┐
│ Device 3 │
└──────────┘
\`\`\`

The device nearest the CPU receives the highest priority.

---



## 11. Programming

Programming in this unit includes assembly language programming for Intel 8085/8086 processors.

Assembly language uses symbolic instruction names called mnemonics.

Examples:

\`\`\`text
MOV
MVI
ADD
SUB
INR
DCR
JMP
CALL
RET
\`\`\`

The assembly program is converted into machine code by an assembler.

\`\`\`text
Assembly Program
       │
       ▼
    Assembler
       │
       ▼
 Machine Code
       │
       ▼
   Processor
\`\`\`

---



## 12. Intel 8085 Microprocessor

The 8085 is an 8-bit microprocessor with an 8-bit data bus and a 16-bit address bus.

\`\`\`text
8085
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
   Registers     ALU    Control Unit
       │          │          │
       └──────────┼──────────┘
                  │
          ┌───────┴───────┐
          ▼               ▼
      Data Bus        Address Bus
       8-bit             16-bit
\`\`\`

Important registers include:

\`\`\`text
Accumulator (A)
B Register
C Register
D Register
E Register
H Register
L Register
Program Counter (PC)
Stack Pointer (SP)
Flag Register
\`\`\`

---



## 13. 8085 Register Organization

\`\`\`text
8085 REGISTERS
                        │
          ┌─────────────┼──────────────┐
          ▼             ▼              ▼
     Accumulator    General Purpose   Special
         A            Registers       Registers
                       │              │
                  ┌────┼────┐      ┌──┴──────┐
                  ▼    ▼    ▼      ▼         ▼
                  B-C  D-E  H-L     PC        SP
\`\`\`

The general-purpose registers can be combined into register pairs:

\`\`\`text
BC
DE
HL
\`\`\`

The HL pair is frequently used to hold a memory address.

---



## 14. 8085 Instruction Groups

8085 instructions can be classified into:

\`\`\`text
8085 Instructions
                        │
     ┌──────────────────┼──────────────────┐
     ▼                  ▼                  ▼
Data Transfer       Arithmetic          Logical
     │                  │                  │
    MOV                ADD                ANA
    MVI                ADC                ORA
    LXI                SUB                XRA
    LDA                SBB                CMP
    STA                INR                CMA
    LHLD               DCR                RLC
    SHLD
\`\`\`

Other groups include:

Branch Instructions

\`\`\`text
JMP
JZ
JNZ
JC
JNC
CALL
RET
\`\`\`

Machine Control

\`\`\`text
NOP
HLT
EI
DI
\`\`\`

---



## 15. 8085 Data Transfer Instructions

Data transfer instructions move data from one location to another without changing the data itself.

Important instructions include:

\`\`\`text
MOV
MVI
LXI
LDA
STA
LHLD
SHLD
\`\`\`

---

**MOV Instruction**

Format:

\`\`\`text
MOV destination, source
\`\`\`

Example:

\`\`\`text
MOV A, B
\`\`\`

Meaning:

\`\`\`text
A ← B
\`\`\`

Diagram:

\`\`\`text
B Register
    │
    │ Data
    ▼
Accumulator
\`\`\`

The contents of B remain unchanged.

---

**MVI Instruction**

MVI means Move Immediate.

Format:

\`\`\`text
MVI register, data
\`\`\`

Example:

\`\`\`text
MVI A, 25H
\`\`\`

Meaning:

\`\`\`text
A ← 25H
\`\`\`

\`\`\`text
Immediate Data
     25H
      │
      ▼
┌─────────────┐
│ Accumulator │
└─────────────┘
\`\`\`

---

**LXI Instruction**

LXI loads a 16-bit immediate value into a register pair.

Example:

\`\`\`text
LXI H, 2050H
\`\`\`

Meaning:

\`\`\`text
HL ← 2050H
\`\`\`

\`\`\`text
2050H
       /    \\
     20H    50H
      │      │
      ▼      ▼
      H      L
\`\`\`

---

**LDA Instruction**

LDA means Load Accumulator Directly.

Example:

\`\`\`text
LDA 2050H
\`\`\`

The contents of memory location 2050H are copied into the accumulator.

\`\`\`text
Memory
2050H
  │
  │ Data
  ▼
┌─────────────┐
│ Accumulator │
└─────────────┘
\`\`\`

---

**STA Instruction**

STA means Store Accumulator Directly.

Example:

\`\`\`text
STA 2050H
\`\`\`

The accumulator contents are stored at memory location 2050H.

\`\`\`text
┌─────────────┐
│ Accumulator │
└──────┬──────┘
       │ Data
       ▼
Memory 2050H
\`\`\`

---

**LHLD Instruction**

LHLD loads the contents of two consecutive memory locations into the H and L registers.

\`\`\`text
LHLD 2050H
\`\`\`

Conceptually:

\`\`\`text
Memory 2050H ───► L
Memory 2051H ───► H
\`\`\`

---

**SHLD Instruction**

SHLD stores the contents of H and L into two consecutive memory locations.

\`\`\`text
SHLD 2050H
\`\`\`

Conceptually:

\`\`\`text
L ───► Memory 2050H
H ───► Memory 2051H
\`\`\`

---



## 16. 8085 Data Transfer Programming Techniques

**Example: Transfer Data from One Memory Location to Another**

Suppose:

\`\`\`text
Memory[2050H] → Memory[3050H]
\`\`\`

Program:

\`\`\`text
LDA 2050H
STA 3050H
HLT
\`\`\`

Execution:

\`\`\`text
Memory 2050H
     │
     ▼
     A
     │
     ▼
Memory 3050H
\`\`\`

---

**Example: Transfer a Block of Data**

Suppose a block starts at 2050H and must be copied to 3050H.

A register pair can be used for the source address and another for the destination.

Conceptual process:

\`\`\`text
Source                         Destination
2050H ──────────────────────► 3050H
2051H ──────────────────────► 3051H
2052H ──────────────────────► 3052H
2053H ──────────────────────► 3053H
\`\`\`

Typical 8085 technique:

\`\`\`text
LXI H, 2050H
LXI D, 3050H
\`\`\`

Here:

\`\`\`text
HL → Source
DE → Destination
\`\`\`

The data can then be transferred repeatedly using memory access and register-pair increment operations.

---



## 17. 8086 Microprocessor

The 8086 is a 16-bit microprocessor with a 16-bit data bus and a 20-bit address bus.

It can address:

\`\`\`text
2²⁰ = 1,048,576 bytes
\`\`\`

or:

\`\`\`text
1 MB
\`\`\`

Its architecture is divided into two major units:

\`\`\`text
8086
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
  Bus Interface Unit       Execution Unit
        BIU                     EU
          │                     │
          ▼                     ▼
 Segment Registers            ALU
 Instruction Queue         General Registers
 Address Generation        Flag Register
\`\`\`

---



## 18. Bus Interface Unit

The BIU handles communication with memory and I/O.

It contains:

\`\`\`text
CS
DS
SS
ES
IP
6-byte instruction queue
\`\`\`

Conceptual structure:

\`\`\`text
BIU
              │
    ┌─────────┼─────────┐
    ▼         ▼         ▼
 Segment      IP      Instruction
 Registers            Queue
    │
    ▼
Address Generation
    │
    ▼
Memory / I/O
\`\`\`

---`,diagrams:[{id:`diag-ca452-u3-c2`,title:`Priority Interrupt`,caption:`Polished SVG architectural visualization for Priority Interrupt`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Priority Interrupt System: Daisy-Chaining & Priority Encoders</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Serial daisy-chain acknowledge vs parallel 8-to-3 priority encoder vector resolution</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="92.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Daisy Chain</text> </g> <g transform="translate(184.0, 53)"> <rect width="122.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Parallel Encoder</text> </g> <g transform="translate(316.0, 53)"> <rect width="98.0" height="18" rx="4" fill="#0f172a" stroke="#a855f7" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#a855f7"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Vector Table</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Daisy Chain Priority --> <g> <rect x="50" y="75" width="250" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="50" y="75" width="250" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="64" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Daisy-Chaining Method</text> <line x1="50" y1="107" x2="300" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="64" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">PI Line: </tspan> <tspan fill="#e2e8f0" font-size="11">Priority In line from CPU</tspan> </text> <text x="64" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Device 1: </tspan> <tspan fill="#e2e8f0" font-size="11">Highest priority (Device 1)</tspan> </text> <text x="64" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Pass: </tspan> <tspan fill="#e2e8f0" font-size="11">If Device 1 has no IRQ: PO = 1</tspan> </text> <text x="64" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Block: </tspan> <tspan fill="#e2e8f0" font-size="11">If Device 1 has IRQ: PO = 0 (blocks)</tspan> </text> <text x="64" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Device 2: </tspan> <tspan fill="#e2e8f0" font-size="11">Receives PI from Device 1's PO</tspan> </text> <text x="64" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Vector: </tspan> <tspan fill="#e2e8f0" font-size="11">Active device places VAD on bus</tspan> </text> <text x="64" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Scalability: </tspan> <tspan fill="#e2e8f0" font-size="11">O(N) propagation latency across chain</tspan> </text> </g> <g> <path d="M 300 195 L 380 195" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(309.0, 185.0)"> <rect width="62.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="31.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Parallel</text> </g> </g> <g> <rect x="380" y="75" width="270" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="380" y="75" width="270" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="394" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Parallel Priority Interrupt</text> <line x1="380" y1="107" x2="650" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="394" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Inputs: </tspan> <tspan fill="#e2e8f0" font-size="11">8 IRQ lines (I0 through I7)</tspan> </text> <text x="394" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Outputs: </tspan> <tspan fill="#e2e8f0" font-size="11">3-bit binary vector address (x,y,z)</tspan> </text> <text x="394" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Mask Reg: </tspan> <tspan fill="#e2e8f0" font-size="11">Enables/disables individual IRQs</tspan> </text> <text x="394" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Speed: </tspan> <tspan fill="#e2e8f0" font-size="11">O(1) immediate priority resolution</tspan> </text> <text x="394" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">IST Flag: </tspan> <tspan fill="#e2e8f0" font-size="11">Interrupt Status flag asserted</tspan> </text> <text x="394" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">VAD Gen: </tspan> <tspan fill="#e2e8f0" font-size="11">Direct vector branch to ISR table</tspan> </text> </g> <g> <path d="M 650 195 L 720 195" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#mCyan)"/> <g transform="translate(639.0, 185.0)"> <rect width="92.0" height="20" rx="5" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="46.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">dispatches to</text> </g> </g> <g> <rect x="720" y="75" width="160" height="240" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="720" y="75" width="160" height="32" rx="10 10 0 0" fill="#581c87"/> <text x="734" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Interrupt Vector</text> <line x1="720" y1="107" x2="880" y2="107" stroke="#a855f7" stroke-width="1" stroke-opacity="0.4"/> <text x="734" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">VAD 0: </tspan> <tspan fill="#e2e8f0" font-size="11">Timer ISR</tspan> </text> <text x="734" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">VAD 1: </tspan> <tspan fill="#e2e8f0" font-size="11">Keyboard ISR</tspan> </text> <text x="734" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">VAD 2: </tspan> <tspan fill="#e2e8f0" font-size="11">Disk DMA ISR</tspan> </text> <text x="734" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">VAD 3: </tspan> <tspan fill="#e2e8f0" font-size="11">Network NIC</tspan> </text> <text x="734" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Priority: </tspan> <tspan fill="#e2e8f0" font-size="11">Higher preempts</tspan> </text> </g> <g transform="translate(50, 335)"> <rect width="830" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Priority Arbitration: Hardware vs Software Polling</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Hardware daisy-chaining and priority encoders resolve concurrent interrupt requests without wasting CPU clock cycles polling status registers.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u3c2-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In Priority Interrupt, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u3c2-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in Priority Interrupt, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of Priority Interrupt?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]},{id:`execution-unit`,title:`Execution Unit`,subtitle:`CA452 Unit 3 Concept 3`,summary:`Comprehensive study notes covering Execution Unit with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:38,notes:`## 19. Execution Unit

The Execution Unit fetches instructions from the instruction queue, decodes them and executes them.

\`\`\`text
Execution Unit
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
       ALU       Registers       Flags
        │            │
        └────────────┼
                     ▼
                 Execution
\`\`\`

General-purpose registers include:

\`\`\`text
AX
BX
CX
DX
\`\`\`

Pointer/index registers include:

\`\`\`text
SP
BP
SI
DI
\`\`\`

---



## 20. 8086 Data Transfer Instructions

Important 8086 data-transfer instructions include:

\`\`\`text
MOV
PUSH
POP
XCHG
IN
OUT
LEA
LDS
LES
\`\`\`

**MOV**

Copies data from source to destination.

\`\`\`text
MOV AX, BX
\`\`\`

Meaning:

\`\`\`text
AX ← BX
\`\`\`

\`\`\`text
BX ───────► AX
\`\`\`

---

**PUSH**

Places data onto the stack.

\`\`\`text
PUSH AX
\`\`\`

\`\`\`text
Stack
         │
         ▼
      ┌──────┐
      │  AX  │ ← New top
      ├──────┤
      │ ...  │
      └──────┘
\`\`\`

---

**POP**

Removes the top value from the stack and places it into a destination.

\`\`\`text
POP BX
\`\`\`

\`\`\`text
Stack
        │
        ▼
      ┌──────┐
      │ Data │
      └──┬───┘
         │
         ▼
         BX
\`\`\`

---

**XCHG**

Exchanges the contents of two operands.

\`\`\`text
XCHG AX, BX
\`\`\`

Before:

\`\`\`text
AX = 1234H
BX = 5678H
\`\`\`

After:

\`\`\`text
AX = 5678H
BX = 1234H
\`\`\`

\`\`\`text
AX ◄────────► BX
\`\`\`

---



## 21. Assembly Language Program Structure

A basic assembly language program can be represented as:

\`\`\`text
┌─────────────────────┐
│ Program Start       │
├─────────────────────┤
│ Initialize          │
├─────────────────────┤
│ Load Data           │
├─────────────────────┤
│ Process Data        │
├─────────────────────┤
│ Store Result        │
├─────────────────────┤
│ Program Termination │
└─────────────────────┘
\`\`\`

An assembly statement commonly contains:

\`\`\`text
LABEL   OPCODE   OPERAND   ; COMMENT
\`\`\`

Example:

\`\`\`text
START:  MOV A,B     ; Copy B into A
\`\`\`

---



## 22. Conditional Call Instructions

A CALL instruction transfers control to a subroutine.

A conditional CALL transfers control only when a specified condition is satisfied.

8085 conditional CALL instructions include:

\`\`\`text
CZ   → Call if Zero
CNZ  → Call if Not Zero
CC   → Call if Carry
CNC  → Call if Not Carry
CP   → Call if Positive
CM   → Call if Minus
CPE  → Call if Parity Even
CPO  → Call if Parity Odd
\`\`\`

Example:

\`\`\`text
CZ 2050H
\`\`\`

Meaning:

\`\`\`text
If Zero Flag = 1
       │
       ▼
CALL 2050H
\`\`\`

\`\`\`text
Main Program
                  │
                  ▼
             Check Flag
             ┌────┴────┐
             │         │
           True       False
             │         │
             ▼         ▼
        CALL 2050H   Continue
             │
             ▼
         Subroutine
             │
             ▼
            RET
             │
             ▼
        Main Program
\`\`\`

---



## 23. Conditional Return Instructions

A conditional return returns from a subroutine only when a specified condition is satisfied.

8085 conditional return instructions include:

\`\`\`text
RZ   → Return if Zero
RNZ  → Return if Not Zero
RC   → Return if Carry
RNC  → Return if Not Carry
RP   → Return if Positive
RM   → Return if Minus
RPE  → Return if Parity Even
RPO  → Return if Parity Odd
\`\`\`

Example:

\`\`\`text
RZ
\`\`\`

means:

\`\`\`text
If Zero Flag = 1
       │
       ▼
Return from subroutine
\`\`\`

Otherwise, execution continues with the next instruction in the subroutine.

---



## 24. CALL and RET Operation

When a CALL is executed, the return address is saved so that the processor can return after the subroutine finishes.

\`\`\`text
Main Program
     │
     ▼
   CALL
     │
     ├── Save Return Address
     │
     ▼
 Subroutine
     │
     ▼
    RET
     │
     └──────────────► Main Program
\`\`\`

The stack is used to preserve the return address.

Before CALL:

\`\`\`text
        Stack
          │
          ▼
       ┌──────┐
       │ ...  │
       └──────┘
\`\`\`

After CALL:

\`\`\`text
        Stack
          │
          ▼
       ┌─────────────┐
       │Return Addr. │
       ├─────────────┤
       │     ...     │
       └─────────────┘
\`\`\`

RET retrieves the saved return address and transfers execution back to the calling program.

---



## 25. Conditional Branching

Conditional branch instructions alter program execution based on flag conditions.

Examples:

\`\`\`text
JZ   → Jump if Zero
JNZ  → Jump if Not Zero
JC   → Jump if Carry
JNC  → Jump if Not Carry
JP   → Jump if Positive
JM   → Jump if Minus
JPE  → Jump if Parity Even
JPO  → Jump if Parity Odd
\`\`\`

Example:

\`\`\`text
MVI A, 00H
CPI 00H
JZ  TARGET
\`\`\`

Conceptual flow:

\`\`\`text
Compare
                │
                ▼
           Zero Flag = 1?
             ┌───┴───┐
            YES      NO
             │        │
             ▼        ▼
          TARGET    Next
\`\`\`

---



## 26. 8085 Flags

The 8085 contains five major condition flags.

\`\`\`text
┌─────┬─────┬─────┬─────┬─────┐
│  S  │  Z  │  AC │  P  │  CY │
└─────┴─────┴─────┴─────┴─────┘
\`\`\`

**Sign Flag (S)**

Indicates the sign of the result.

\`\`\`text
S = 1 → Negative
S = 0 → Positive
\`\`\`

**Zero Flag (Z)**

\`\`\`text
Z = 1 → Result is zero
Z = 0 → Result is non-zero
\`\`\`

**Auxiliary Carry (AC)**

Indicates carry from bit 3 to bit 4 during arithmetic operations.

**Parity Flag (P)**

\`\`\`text
P = 1 → Even number of 1s
P = 0 → Odd number of 1s
\`\`\`

**Carry Flag (CY)**

Indicates carry out of the most significant bit during addition or borrow during subtraction.

---



## 27. Complete I/O Data Transfer Flow

\`\`\`text
CPU
                          │
                    System Bus
                          │
                          ▼
                  ┌───────────────┐
                  │  I/O Interface│
                  │               │
                  │ Data Register │
                  │ Status Reg.   │
                  │ Control Reg.  │
                  └───────┬───────┘
                          │
                          ▼
                     Peripheral
                          │
          ┌───────────────┼────────────────┐
          ▼               ▼                ▼
       Strobe         Handshaking      Interrupt
          │               │                │
          └───────────────┼────────────────┘
                          ▼
                    Data Transfer
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
      Programmed      Interrupt       Priority
          I/O          Driven I/O      Interrupt
\`\`\`

---



## UNIT 3 COMPLETE FLOW

\`\`\`text
UNIT 3
                    I/O ORGANIZATION
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   I/O Hardware       Data Transfer       Programming
        │                  │                  │
        ├── Peripheral     ├── Async.        ├── 8085
        │   Devices        │   Transfer      │   │
        │                  │   ├── Strobe    │   ├── Registers
        └── I/O Interface  │   └── Handshake │   ├── Instructions
                           │                  │   └── Programs
                           ├── Programmed     │
                           │   I/O            └── 8086
                           │                      │
                           ├── Interrupt-Driven   ├── BIU
                           │                      ├── EU
                           └── Priority          └── Data Transfer
                               Interrupt
                                      │
                                      ▼
                           Conditional Control
                                      │
                         ┌────────────┼────────────┐
                         ▼            ▼            ▼
                       CALL          RET          JUMP
                         │            │            │
                         └────────────┼────────────┘
                                      ▼
                                  Flags / Conditions
\`\`\``,diagrams:[{id:`diag-ca452-u3-c3`,title:`Execution Unit`,caption:`Polished SVG architectural visualization for Execution Unit`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Direct Memory Access (DMA) & Bus Arbitration</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Bus Request (BR), Bus Grant (BG), Cycle Stealing, and high-speed memory block transfer</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="74.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Host CPU</text> </g> <g transform="translate(166.0, 53)"> <rect width="110.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">DMA Controller</text> </g> <g transform="translate(286.0, 53)"> <rect width="92.0" height="18" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#10b981"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Main Memory</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- DMA Architecture --> <g> <rect x="50" y="75" width="220" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="50" y="75" width="220" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="64" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">CPU (Bus Master)</text> <line x1="50" y1="107" x2="270" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="64" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Normal: </tspan> <tspan fill="#e2e8f0" font-size="11">CPU owns address & data buses</tspan> </text> <text x="64" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">BR Line: </tspan> <tspan fill="#e2e8f0" font-size="11">DMA asserts Bus Request (BR)</tspan> </text> <text x="64" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">BG Line: </tspan> <tspan fill="#e2e8f0" font-size="11">CPU asserts Bus Grant (BG)</tspan> </text> <text x="64" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Release: </tspan> <tspan fill="#e2e8f0" font-size="11">CPU puts buses into High-Z</tspan> </text> <text x="64" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Interrupt: </tspan> <tspan fill="#e2e8f0" font-size="11">DMA asserts IRQ when finished</tspan> </text> <text x="64" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Resume: </tspan> <tspan fill="#e2e8f0" font-size="11">CPU regains bus ownership</tspan> </text> </g> <g> <path d="M 270 150 L 350 150" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(255.0, 140.0)"> <rect width="110.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="55.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Bus Request (BR)</text> </g> </g> <g> <path d="M 350 240 L 270 240" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#mCyan)"/> <g transform="translate(261.0, 230.0)"> <rect width="98.0" height="20" rx="5" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="49.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">Bus Grant (BG)</text> </g> </g> <g> <rect x="350" y="75" width="260" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="350" y="75" width="260" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="364" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">DMA Controller (8237A)</text> <line x1="350" y1="107" x2="610" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="364" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Address Reg: </tspan> <tspan fill="#e2e8f0" font-size="11">Starting memory destination addr</tspan> </text> <text x="364" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Word Count: </tspan> <tspan fill="#e2e8f0" font-size="11">Number of words to transfer (decrements)</tspan> </text> <text x="364" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Control Reg: </tspan> <tspan fill="#e2e8f0" font-size="11">Read/Write mode selection</tspan> </text> <text x="364" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Status Reg: </tspan> <tspan fill="#e2e8f0" font-size="11">Completion flag & error bits</tspan> </text> <text x="364" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Burst Mode: </tspan> <tspan fill="#e2e8f0" font-size="11">Transfers block; halts CPU</tspan> </text> <text x="364" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Cycle Steal: </tspan> <tspan fill="#e2e8f0" font-size="11">Interleaves 1 memory cycle</tspan> </text> <text x="364" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Transparent: </tspan> <tspan fill="#e2e8f0" font-size="11">Transfers during CPU decode only</tspan> </text> </g> <g> <path d="M 610 195 L 690 195" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#mEmerald)"/> <g transform="translate(613.0, 185.0)"> <rect width="74.0" height="20" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="37.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">RAM Access</text> </g> </g> <g> <rect x="690" y="75" width="190" height="240" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="690" y="75" width="190" height="32" rx="10 10 0 0" fill="#064e3b"/> <text x="704" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Main Memory (RAM)</text> <line x1="690" y1="107" x2="880" y2="107" stroke="#10b981" stroke-width="1" stroke-opacity="0.4"/> <text x="704" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Direct Path: </tspan> <tspan fill="#e2e8f0" font-size="11">Bypasses CPU registers</tspan> </text> <text x="704" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Speed: </tspan> <tspan fill="#e2e8f0" font-size="11">Up to RAM max bandwidth</tspan> </text> <text x="704" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Efficiency: </tspan> <tspan fill="#e2e8f0" font-size="11">CPU continues compute</tspan> </text> <text x="704" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Disk I/O: </tspan> <tspan fill="#e2e8f0" font-size="11">Saves millions of instructions</tspan> </text> </g> <g transform="translate(50, 335)"> <rect width="830" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Direct Memory Access Advantage</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">DMA allows high-speed disk and network controllers to read/write memory directly at bus speed without CPU instruction intervention per byte.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u3c3-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In Execution Unit, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u3c3-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in Execution Unit, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of Execution Unit?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]}]},{id:`unit-4`,unitNumber:4,title:`Unit 4: UNIT 4: PARALLEL COMPUTING — CO4`,co:`CO4`,description:`Deep study notes and assessment engine for Unit 4.`,concepts:[{id:`introduction-to-parallel-computing`,title:`Introduction to Parallel Computing`,subtitle:`CA452 Unit 4 Concept 1`,summary:`Comprehensive study notes covering Introduction to Parallel Computing with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:32,notes:`## 1. Introduction to Parallel Computing

Parallel computing is a computing technique in which multiple operations are performed simultaneously rather than executing every operation sequentially.

In conventional sequential processing, one operation is completed before the next operation begins.

**Sequential Processing**

\`\`\`text
Task 1 ───► Task 2 ───► Task 3 ───► Task 4
\`\`\`

In parallel processing, independent operations can be performed at the same time.

**Parallel Processing**

\`\`\`text
Task 1 ───────────────►
Task 2 ───────────────►
Task 3 ───────────────►
Task 4 ───────────────►
        Same Time
\`\`\`

The primary objective is to reduce execution time and increase system throughput.

\`\`\`text
PARALLEL COMPUTING
                        │
          ┌─────────────┴─────────────┐
          │                           │
          ▼                           ▼
   Multiple Operations         Multiple Processing
   at the Same Time            Elements / Units
          │                           │
          └─────────────┬─────────────┘
                        ▼
               Higher Performance
\`\`\`

Parallelism can exist at different levels:

\`\`\`text
Parallelism
    │
    ├── Bit-level parallelism
    ├── Instruction-level parallelism
    ├── Data-level parallelism
    └── Task-level parallelism
\`\`\`

**Advantages**

\`\`\`text
Reduces execution time.
Increases throughput.
Allows large problems to be divided into smaller tasks.
Makes better use of available hardware.
Supports computation-intensive applications.
Can improve scalability by adding processing resources.
\`\`\`

---



## 2. Parallelism in Uniprocessor Systems

Parallelism does not necessarily require multiple processors. A single processor can exploit parallelism by overlapping or simultaneously performing different internal operations.

A uniprocessor may contain multiple functional units, registers, pipelines and other hardware that allow several operations to be in different stages at the same time.

\`\`\`text
UNIPROCESSOR
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
      ALU          Floating Point    Load/Store
                     Unit              Unit
       │               │                │
       └───────────────┼────────────────┘
                       ▼
                  Parallel Internal
                     Operations
\`\`\`

For example, while one instruction is being executed by the ALU, another instruction can be fetched from memory.

\`\`\`text
Time ─────────────────────────────────────►

Instruction 1:  FETCH ──► DECODE ──► EXECUTE
Instruction 2:             FETCH ──► DECODE ──► EXECUTE
Instruction 3:                        FETCH ──► DECODE
\`\`\`

This is a form of instruction-level parallelism.

**Types of parallelism in a uniprocessor**

\`\`\`text
Uniprocessor Parallelism
                         │
            ┌────────────┼────────────┐
            ▼            ▼            ▼
       Pipelining    Multiple       Superscalar
                     Functional
                       Units
\`\`\`

**Pipelining**

Different instructions are processed in different stages simultaneously.

\`\`\`text
I1: F ─ D ─ E ─ W
I2:     F ─ D ─ E ─ W
I3:         F ─ D ─ E ─ W
\`\`\`

**Multiple Functional Units**

A processor may contain separate units for different operations.

\`\`\`text
Instruction Stream
                      │
          ┌───────────┼────────────┐
          ▼           ▼            ▼
        Integer       FP        Load/Store
          ALU         Unit          Unit
\`\`\`

Independent instructions can therefore use different functional units concurrently.

---



## 3. Parallel Computer Structures

Parallel computers can be constructed using multiple processing elements that cooperate to execute a program.

A basic parallel computer consists of:

\`\`\`text
PARALLEL COMPUTER
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   Processor 1        Processor 2        Processor 3
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                    Interconnection
                        Network
                           │
                           ▼
                       Memory
\`\`\`

The main components are:

1. Processing elements
2. Memory
3. Interconnection network
4. Input/output system
5. Control mechanism

---

### 3.1 Multiple Processor System

A multiprocessor system contains more than one processor.

\`\`\`text
┌───────────┐
              │ Processor │
              │     P1    │
              └─────┬─────┘
                    │
              ┌─────┴─────┐
              │ Interconnect│
              └─────┬─────┘
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
      Memory      Memory      I/O
\`\`\`

Processors may share memory or may have their own local memory.

---



## 4. Shared-Memory Parallel Structure

In a shared-memory system, multiple processors communicate through a common memory.

\`\`\`text
┌────────────┐
          │ Processor 1│
          └─────┬──────┘
                │
          ┌─────┴──────┐
          │            │
          ▼            ▼
     ┌──────────────────────┐
     │    Shared Memory     │
     └──────────────────────┘
          ▲            ▲
          │            │
     ┌────┴──────┐ ┌───┴───────┐
     │Processor 2│ │Processor 3│
     └───────────┘ └───────────┘
\`\`\`

All processors can access the shared memory.

**Advantages**

\`\`\`text
Easy communication between processors.
Shared data can be accessed directly.
Convenient for many parallel applications.
\`\`\`

**Limitation**

Multiple processors may compete for access to memory.

\`\`\`text
P1 ──┐
P2 ──┼──► Shared Memory
P3 ──┘
       │
       ▼
   Memory Contention
\`\`\`

---



## 5. Distributed-Memory Parallel Structure

In a distributed-memory system, each processor has its own local memory.

Processors communicate by exchanging messages.

\`\`\`text
┌───────────────┐       ┌───────────────┐
│ Processor 1   │       │ Processor 2   │
│               │       │               │
│ Local Memory  │◄─────►│ Local Memory  │
└───────────────┘       └───────────────┘
        ▲                       ▲
        │                       │
        │       Network         │
        └───────────┬───────────┘
                    │
             ┌──────┴──────┐
             │ Processor 3 │
             │ Local Memory│
             └─────────────┘
\`\`\`

Communication takes place through an interconnection network.

\`\`\`text
Processor 1
    │
    │ Message
    ▼
Network
    │
    ▼
Processor 2
\`\`\`

Distributed-memory systems are useful for large-scale computing because additional processing nodes can be added.

---



## 6. Architectural Classification Schemes

Parallel computer architectures are commonly classified using Flynn's classification.

It classifies systems according to the number of instruction streams and data streams.

\`\`\`text
Flynn's Classification
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
        SISD              SIMD              MIMD
          │                 │                 │
          │                 │                 │
     Single Instruction  Single Instruction  Multiple Instruction
     Single Data         Multiple Data       Multiple Data
\`\`\`

The four categories are:

1. SISD
2. SIMD
3. MISD
4. MIMD

---



## 7. SISD

SISD means Single Instruction, Single Data.

It represents conventional sequential processing where one processor executes one instruction stream on one data stream.

\`\`\`text
Instruction
                  │
                  ▼
             ┌─────────┐
             │   CPU   │
             └────┬────┘
                  │
                Data
                  │
                  ▼
               Result
\`\`\`

Example:

\`\`\`text
A = 5
B = 10

C = A + B
\`\`\`

One processor executes the instruction on the data.

\`\`\`text
Instruction Stream
       │
       ▼
      CPU
       │
Data Stream
       │
       ▼
    Result
\`\`\`

Traditional single-core sequential computers are examples of the SISD model.

---`,diagrams:[{id:`diag-ca452-u4-c1`,title:`Introduction to Parallel Computing`,caption:`Polished SVG architectural visualization for Introduction to Parallel Computing`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Flynn's Parallel Computing Classification: SISD, SIMD, MIMD</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Architectural comparative analysis of Instruction Streams and Data Streams</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="86.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">SISD Model</text> </g> <g transform="translate(178.0, 53)"> <rect width="86.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">SIMD Model</text> </g> <g transform="translate(274.0, 53)"> <rect width="86.0" height="18" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#10b981"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">MIMD Model</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Flynn's Matrix --> <g> <rect x="40" y="75" width="230" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="40" y="75" width="230" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="54" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">SISD Architecture</text> <line x1="40" y1="107" x2="270" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="54" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Model: </tspan> <tspan fill="#e2e8f0" font-size="11">Classic Von Neumann uniprocessor</tspan> </text> <text x="54" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Control: </tspan> <tspan fill="#e2e8f0" font-size="11">Single Control Unit (CU)</tspan> </text> <text x="54" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">ALU: </tspan> <tspan fill="#e2e8f0" font-size="11">Single Processing Element (PE)</tspan> </text> <text x="54" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Memory: </tspan> <tspan fill="#e2e8f0" font-size="11">Single shared memory stream</tspan> </text> <text x="54" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Parallelism: </tspan> <tspan fill="#e2e8f0" font-size="11">Pipelining & superscalar issue</tspan> </text> <text x="54" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Examples: </tspan> <tspan fill="#e2e8f0" font-size="11">Legacy single-core CPUs</tspan> </text> </g> <g> <rect x="300" y="75" width="270" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="300" y="75" width="270" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="314" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">SIMD Architecture</text> <line x1="300" y1="107" x2="570" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="314" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Control: </tspan> <tspan fill="#e2e8f0" font-size="11">Single Control Unit broadcasts opcode</tspan> </text> <text x="314" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Processing: </tspan> <tspan fill="#e2e8f0" font-size="11">Array of N Processing Elements (PEs)</tspan> </text> <text x="314" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Data: </tspan> <tspan fill="#e2e8f0" font-size="11">Each PE computes on local data memory</tspan> </text> <text x="314" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Sync: </tspan> <tspan fill="#e2e8f0" font-size="11">Lock-step synchronous execution</tspan> </text> <text x="314" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Interconnect: </tspan> <tspan fill="#e2e8f0" font-size="11">Mesh, Hypercube, or Crossbar</tspan> </text> <text x="314" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Masking: </tspan> <tspan fill="#e2e8f0" font-size="11">PEs can conditionally disable execution</tspan> </text> <text x="314" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Examples: </tspan> <tspan fill="#e2e8f0" font-size="11">Modern GPUs, AVX-512, Array Processors</tspan> </text> </g> <g> <rect x="600" y="75" width="280" height="240" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="600" y="75" width="280" height="32" rx="10 10 0 0" fill="#064e3b"/> <text x="614" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">MIMD Architecture</text> <line x1="600" y1="107" x2="880" y2="107" stroke="#10b981" stroke-width="1" stroke-opacity="0.4"/> <text x="614" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Processors: </tspan> <tspan fill="#e2e8f0" font-size="11">Multiple independent autonomous CPUs</tspan> </text> <text x="614" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Instructions: </tspan> <tspan fill="#e2e8f0" font-size="11">Each CPU runs its own program stream</tspan> </text> <text x="614" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Data: </tspan> <tspan fill="#e2e8f0" font-size="11">Each CPU accesses its own data stream</tspan> </text> <text x="614" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">UMA/SMP: </tspan> <tspan fill="#e2e8f0" font-size="11">Shared central memory via bus/crossbar</tspan> </text> <text x="614" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">NUMA: </tspan> <tspan fill="#e2e8f0" font-size="11">Distributed shared memory nodes</tspan> </text> <text x="614" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Clusters: </tspan> <tspan fill="#e2e8f0" font-size="11">Distributed memory via Ethernet/InfiniBand</tspan> </text> <text x="614" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Examples: </tspan> <tspan fill="#e2e8f0" font-size="11">Multicore CPUs, Cloud Compute Clusters</tspan> </text> </g> <g transform="translate(40, 335)"> <rect width="840" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Flynn's Classical Classification Taxonomy (1966)</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Categorizes computer systems along two orthogonal dimensions: Instruction Stream multiplicity and Data Stream multiplicity.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u4c1-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In Introduction to Parallel Computing, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u4c1-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in Introduction to Parallel Computing, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of Introduction to Parallel Computing?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]},{id:`simd`,title:`SIMD`,subtitle:`CA452 Unit 4 Concept 2`,summary:`Comprehensive study notes covering SIMD with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:34,notes:`## 8. SIMD

SIMD means Single Instruction, Multiple Data.

A single instruction is simultaneously applied to multiple data elements.

\`\`\`text
Instruction
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
         PE1          PE2          PE3
          │            │            │
         D1           D2           D3
          │            │            │
          ▼            ▼            ▼
         R1           R2           R3
\`\`\`

Example:

\`\`\`text
A = [1, 2, 3, 4]
B = [5, 6, 7, 8]

A + B
\`\`\`

The same addition operation can be applied simultaneously:

\`\`\`text
1 + 5 = 6
2 + 6 = 8
3 + 7 = 10
4 + 8 = 12
\`\`\`

\`\`\`text
ADD instruction
              │
     ┌────────┼────────┐
     ▼        ▼        ▼        ▼
   1 + 5    2 + 6    3 + 7    4 + 8
     │        │        │        │
     ▼        ▼        ▼        ▼
     6        8        10       12
\`\`\`

SIMD is useful in image processing, graphics, scientific calculations and vector operations.

---



## 9. MISD

MISD means Multiple Instruction, Single Data.

Multiple processing units perform different instructions on the same data stream.

\`\`\`text
Same Data
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      Instruction  Instruction  Instruction
          1            2            3
          │            │            │
          ▼            ▼            ▼
         PE1          PE2          PE3
\`\`\`

MISD is uncommon in general-purpose computer systems.

It can be useful in specialized systems where the same input is processed through multiple different operations.

---



## 10. MIMD

MIMD means Multiple Instruction, Multiple Data.

Multiple processors execute different instructions on different data sets.

\`\`\`text
Instruction 1 ──► PE1 ──► Data 1
Instruction 2 ──► PE2 ──► Data 2
Instruction 3 ──► PE3 ──► Data 3
Instruction 4 ──► PE4 ──► Data 4
\`\`\`

\`\`\`text
┌───────┐      ┌───────┐
I1 ──►│  PE1  │◄────►│Data 1 │
      └───────┘      └───────┘

      ┌───────┐      ┌───────┐
I2 ──►│  PE2  │◄────►│Data 2 │
      └───────┘      └───────┘

      ┌───────┐      ┌───────┐
I3 ──►│  PE3  │◄────►│Data 3 │
      └───────┘      └───────┘
\`\`\`

Modern multicore processors and multiprocessor systems commonly follow the MIMD model.

---



## 11. Flynn's Classification Summary

| | Single Data | Multiple Data |
| - | ----------- | ------------- |
| Single Instr. | SISD | SIMD |
| Multi. Instr. | MISD | MIMD |

\`\`\`text
SISD → 1 Instruction + 1 Data
SIMD → 1 Instruction + Multiple Data
MISD → Multiple Instructions + 1 Data
MIMD → Multiple Instructions + Multiple Data
\`\`\`

---



## 12. Parallel Processing Applications

Parallel processing is useful when a problem contains many independent calculations or can be divided into smaller tasks.

Major applications include:

\`\`\`text
Parallel Processing
                       │
     ┌─────────────────┼──────────────────┐
     ▼                 ▼                  ▼
 Scientific         Artificial         Graphics
 Computing          Intelligence        & Gaming
     │                 │                  │
     ├── Simulation     ├── ML             ├── Rendering
     ├── Weather       ├── Neural Nets    └── Animation
     └── Physics       └── Data Analysis
\`\`\`

Other applications include:

\`\`\`text
Weather forecasting
Climate modelling
Image processing
Video processing
Computer graphics
Artificial intelligence
Machine learning
Scientific simulation
Big-data processing
Cryptography
Medical imaging
Engineering simulation
Search engines
\`\`\`

For example, image processing can divide an image into multiple regions.

\`\`\`text
IMAGE
     ┌───────┬───────┐
     │Region1│Region2│
     ├───────┼───────┤
     │Region3│Region4│
     └───────┴───────┘
        │       │
        ▼       ▼
       PE1     PE2
        │       │
        ▼       ▼
       PE3     PE4
        │       │
        └───┬───┘
            ▼
       Final Image
\`\`\`

Each processing element can work on a different region simultaneously.

---



## 13. Pipelining Processing

Pipelining is a technique in which a computation is divided into multiple stages, allowing different operations to be performed simultaneously in different stages.

It is similar to an industrial assembly line.

Without pipelining:

\`\`\`text
Task 1 → Complete
Task 2 → Complete
Task 3 → Complete
Task 4 → Complete
\`\`\`

With pipelining:

\`\`\`text
Stage 1 → Stage 2 → Stage 3 → Stage 4
\`\`\`

Different tasks occupy different stages at the same time.

\`\`\`text
┌────────┐
Input ─►│Stage 1 │
        └───┬────┘
            ▼
        ┌────────┐
        │Stage 2 │
        └───┬────┘
            ▼
        ┌────────┐
        │Stage 3 │
        └───┬────┘
            ▼
        ┌────────┐
        │Stage 4 │
        └───┬────┘
            ▼
          Output
\`\`\`

---



## 14. Overlapped Parallelism

Overlapped parallelism means that different operations are performed at the same time because they occupy different stages of a pipeline.

Suppose a pipeline contains four stages:

\`\`\`text
S1 = Fetch
S2 = Decode
S3 = Execute
S4 = Write
\`\`\`

For four instructions:

\`\`\`text
Time →     1    2    3    4    5    6    7

I1        F    D    E    W
I2             F    D    E    W
I3                  F    D    E    W
I4                       F    D    E    W
\`\`\`

At time 4:

\`\`\`text
I1 → Write
I2 → Execute
I3 → Decode
I4 → Fetch
\`\`\`

All four stages are being used simultaneously.

\`\`\`text
┌─────┐
I1 ────►│  W  │
        └─────┘
        ┌─────┐
I2 ────►│  E  │
        └─────┘
        ┌─────┐
I3 ────►│  D  │
        └─────┘
        ┌─────┐
I4 ────►│  F  │
        └─────┘
\`\`\`

This overlap improves throughput.

---



## 15. Instruction Pipeline

An instruction pipeline divides instruction processing into stages.

A common five-stage pipeline is:

\`\`\`text
┌────────┐
│   IF   │ Instruction Fetch
└───┬────┘
    ▼
┌────────┐
│   ID   │ Instruction Decode
└───┬────┘
    ▼
┌────────┐
│   EX   │ Execute
└───┬────┘
    ▼
┌────────┐
│   MEM  │ Memory Access
└───┬────┘
    ▼
┌────────┐
│   WB   │ Write Back
└────────┘
\`\`\`

**IF: Instruction Fetch**

The processor obtains the instruction from memory.

**ID: Instruction Decode**

The instruction is decoded and operands are identified.

**EX: Execute**

The ALU or another functional unit performs the required operation.

**MEM: Memory Access**

Memory is accessed if the instruction requires a read or write.

**WB: Write Back**

The result is written into the destination register.

---`,diagrams:[{id:`diag-ca452-u4-c2`,title:`SIMD`,caption:`Polished SVG architectural visualization for SIMD`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Flynn's Parallel Computing Classification: SISD, SIMD, MIMD</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Architectural comparative analysis of Instruction Streams and Data Streams</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="86.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">SISD Model</text> </g> <g transform="translate(178.0, 53)"> <rect width="86.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">SIMD Model</text> </g> <g transform="translate(274.0, 53)"> <rect width="86.0" height="18" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#10b981"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">MIMD Model</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Flynn's Matrix --> <g> <rect x="40" y="75" width="230" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="40" y="75" width="230" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="54" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">SISD Architecture</text> <line x1="40" y1="107" x2="270" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="54" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Model: </tspan> <tspan fill="#e2e8f0" font-size="11">Classic Von Neumann uniprocessor</tspan> </text> <text x="54" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Control: </tspan> <tspan fill="#e2e8f0" font-size="11">Single Control Unit (CU)</tspan> </text> <text x="54" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">ALU: </tspan> <tspan fill="#e2e8f0" font-size="11">Single Processing Element (PE)</tspan> </text> <text x="54" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Memory: </tspan> <tspan fill="#e2e8f0" font-size="11">Single shared memory stream</tspan> </text> <text x="54" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Parallelism: </tspan> <tspan fill="#e2e8f0" font-size="11">Pipelining & superscalar issue</tspan> </text> <text x="54" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Examples: </tspan> <tspan fill="#e2e8f0" font-size="11">Legacy single-core CPUs</tspan> </text> </g> <g> <rect x="300" y="75" width="270" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="300" y="75" width="270" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="314" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">SIMD Architecture</text> <line x1="300" y1="107" x2="570" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="314" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Control: </tspan> <tspan fill="#e2e8f0" font-size="11">Single Control Unit broadcasts opcode</tspan> </text> <text x="314" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Processing: </tspan> <tspan fill="#e2e8f0" font-size="11">Array of N Processing Elements (PEs)</tspan> </text> <text x="314" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Data: </tspan> <tspan fill="#e2e8f0" font-size="11">Each PE computes on local data memory</tspan> </text> <text x="314" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Sync: </tspan> <tspan fill="#e2e8f0" font-size="11">Lock-step synchronous execution</tspan> </text> <text x="314" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Interconnect: </tspan> <tspan fill="#e2e8f0" font-size="11">Mesh, Hypercube, or Crossbar</tspan> </text> <text x="314" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Masking: </tspan> <tspan fill="#e2e8f0" font-size="11">PEs can conditionally disable execution</tspan> </text> <text x="314" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Examples: </tspan> <tspan fill="#e2e8f0" font-size="11">Modern GPUs, AVX-512, Array Processors</tspan> </text> </g> <g> <rect x="600" y="75" width="280" height="240" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="600" y="75" width="280" height="32" rx="10 10 0 0" fill="#064e3b"/> <text x="614" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">MIMD Architecture</text> <line x1="600" y1="107" x2="880" y2="107" stroke="#10b981" stroke-width="1" stroke-opacity="0.4"/> <text x="614" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Processors: </tspan> <tspan fill="#e2e8f0" font-size="11">Multiple independent autonomous CPUs</tspan> </text> <text x="614" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Instructions: </tspan> <tspan fill="#e2e8f0" font-size="11">Each CPU runs its own program stream</tspan> </text> <text x="614" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Data: </tspan> <tspan fill="#e2e8f0" font-size="11">Each CPU accesses its own data stream</tspan> </text> <text x="614" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">UMA/SMP: </tspan> <tspan fill="#e2e8f0" font-size="11">Shared central memory via bus/crossbar</tspan> </text> <text x="614" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">NUMA: </tspan> <tspan fill="#e2e8f0" font-size="11">Distributed shared memory nodes</tspan> </text> <text x="614" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Clusters: </tspan> <tspan fill="#e2e8f0" font-size="11">Distributed memory via Ethernet/InfiniBand</tspan> </text> <text x="614" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Examples: </tspan> <tspan fill="#e2e8f0" font-size="11">Multicore CPUs, Cloud Compute Clusters</tspan> </text> </g> <g transform="translate(40, 335)"> <rect width="840" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Flynn's Classical Classification Taxonomy (1966)</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">Categorizes computer systems along two orthogonal dimensions: Instruction Stream multiplicity and Data Stream multiplicity.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u4c2-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In SIMD, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u4c2-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in SIMD, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of SIMD?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]},{id:`instruction-pipeline-timing`,title:`Instruction Pipeline Timing`,subtitle:`CA452 Unit 4 Concept 3`,summary:`Comprehensive study notes covering Instruction Pipeline Timing with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:34,notes:`## 16. Instruction Pipeline Timing

Consider four instructions:

\`\`\`text
I1, I2, I3, I4
\`\`\`

With a five-stage pipeline:

\`\`\`text
1    2    3    4    5    6    7    8
I1        IF   ID   EX   MEM  WB
I2             IF   ID   EX   MEM  WB
I3                  IF   ID   EX   MEM  WB
I4                       IF   ID   EX   MEM  WB
\`\`\`

Without pipelining:

\`\`\`text
1    2    3    4    5    6    7    8 ...
I1        IF   ID   EX   MEM  WB
I2                            IF   ID   EX   MEM  WB
I3                                                  ...
\`\`\`

The pipeline does not necessarily reduce the time required for one individual instruction. Its main advantage is increasing the number of instructions completed per unit time.

---



## 17. Pipeline Speedup

Suppose:

\`\`\`text
Number of pipeline stages = k
Number of instructions = n
Each stage takes one clock cycle.
\`\`\`

Without pipelining:

\`\`\`text
Time = n × k cycles
\`\`\`

With ideal pipelining:

\`\`\`text
Time = k + n - 1 cycles
\`\`\`

Therefore:

\`\`\`text
Speedup =
(n × k)
────────────
(k + n - 1)
\`\`\`

For a large number of instructions:

\`\`\`text
Speedup ≈ k
\`\`\`

Thus, a 5-stage ideal pipeline can theoretically approach a speedup of 5 for a sufficiently large instruction stream, although real processors experience stalls, hazards and other overheads.

---



## 18. Pipeline Hazards

A pipeline hazard is a condition that prevents the next instruction from executing in its intended pipeline stage.

Major types are:

\`\`\`text
Pipeline Hazards
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      Structural     Data        Control
       Hazard       Hazard        Hazard
\`\`\`

**Structural Hazard**

Occurs when two operations require the same hardware resource simultaneously.

\`\`\`text
I1 ─────► Memory ◄───── I2
            ▲
            │
       Resource Conflict
\`\`\`

---

**Data Hazard**

Occurs when one instruction depends on the result of an earlier instruction.

\`\`\`text
I1: R1 ← R2 + R3
I2: R4 ← R1 + R5
             ▲
             │
       Depends on I1
\`\`\`

The second instruction needs the result produced by the first.

---

**Control Hazard**

Occurs mainly due to branch or jump instructions.

\`\`\`text
Instruction
     │
     ▼
   Branch?
   ┌─┴─┐
  Yes  No
   │    │
   ▼    ▼
New    Next
Path   Instruction
\`\`\`

The processor may not initially know which instruction should be fetched next.

---



## 19. Arithmetic Pipeline

An arithmetic pipeline divides an arithmetic computation into multiple stages.

It is particularly useful for complex operations involving several sequential arithmetic steps.

For example, consider:

\`\`\`text
X = (A + B) × (C + D)
\`\`\`

The computation can be divided into stages:

Stage 1:

\`\`\`text
A + B
\`\`\`

Stage 2:

\`\`\`text
C + D
\`\`\`

Stage 3:

\`\`\`text
Multiply the two results
\`\`\`

Conceptually:

\`\`\`text
A ──┐
     ├──► ADD ──┐
 B ──┘          │
                ├──► MULTIPLY ──► Result
 C ──┐          │
     ├──► ADD ──┘
 D ──┘
\`\`\`

For floating-point arithmetic, an arithmetic pipeline may contain stages such as:

\`\`\`text
┌────────────┐
│ Compare    │
│ Exponents  │
└─────┬──────┘
      ▼
┌────────────┐
│ Align      │
│ Mantissas  │
└─────┬──────┘
      ▼
┌────────────┐
│ Arithmetic │
└─────┬──────┘
      ▼
┌────────────┐
│ Normalize  │
└─────┬──────┘
      ▼
┌────────────┐
│ Round      │
└────────────┘
\`\`\`

Multiple arithmetic operations can therefore be overlapped.

---



## 20. Instruction Pipeline vs Arithmetic Pipeline

| Instruction Pipeline | Arithmetic Pipeline |
| -------------------- | ------------------- |
| Processes instructions | Processes arithmetic operations |
| Divides instruction execution into stages | Divides arithmetic computation into stages |
| Fetch, decode, execute etc. | Alignment, calculation, normalization etc. |
| Improves instruction throughput | Improves arithmetic-operation throughput |
| Used in CPUs | Used in arithmetic/FPU units |

---



## 21. Pipeline Operation Example

Consider a four-stage pipeline:

\`\`\`text
S1 → S2 → S3 → S4
\`\`\`

Four jobs are processed as follows:

\`\`\`text
Time       1    2    3    4    5    6    7

Job 1      S1   S2   S3   S4
Job 2           S1   S2   S3   S4
Job 3                S1   S2   S3   S4
Job 4                     S1   S2   S3   S4
\`\`\`

At time 4, all four pipeline stages are active:

\`\`\`text
S1 → Job 4
S2 → Job 3
S3 → Job 2
S4 → Job 1
\`\`\`

\`\`\`text
┌─────────┐
Job 4 ─►   S1    │
       └─────────┘

       ┌─────────┐
Job 3 ─►   S2    │
       └─────────┘

       ┌─────────┐
Job 2 ─►   S3    │
       └─────────┘

       ┌─────────┐
Job 1 ─►   S4    │
       └─────────┘
\`\`\`

This is the fundamental idea of overlapped parallelism.

---



## 22. Parallel Computing and Pipelining Relationship

Parallel computing and pipelining both exploit concurrency, but they do so differently.

**Parallel Processing**

\`\`\`text
Parallel Processing
        │
        ├── Multiple processing elements
        │
        └── Multiple operations can execute simultaneously
\`\`\`

**Pipelining**

\`\`\`text
Pipelining
        │
        ├── One operation divided into stages
        │
        └── Different operations occupy different stages
\`\`\`

Example:

Parallel Processing:

\`\`\`text
Task A ───────────────► PE1
Task B ───────────────► PE2
Task C ───────────────► PE3
\`\`\`

Pipelining:

\`\`\`text
Task A → Stage 1 → Stage 2 → Stage 3
Task B       → Stage 1 → Stage 2 → Stage 3
Task C              → Stage 1 → Stage 2 → Stage 3
\`\`\`

---



## UNIT 4 COMPLETE FLOW

\`\`\`text
UNIT 4
                   PARALLEL COMPUTING
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   Introduction       Parallelism        Applications
        │              in Uniprocessor          │
        │                  │                    │
        ▼                  ▼                    ▼
  Parallel Computer   Pipelining          Scientific
     Structures           │                Computing
        │                 │                 AI / ML
   ┌────┴────┐            │                 Graphics
   ▼         ▼            ▼                 Simulation
Shared     Distributed  Overlapped
Memory      Memory      Parallelism
   │                        │
   └──────────┬─────────────┘
              ▼
       Architectural
       Classification
              │
       ┌──────┼──────┬──────┐
       ▼      ▼      ▼      ▼
     SISD    SIMD    MISD   MIMD
                       │
                       ▼
              Parallel Processing
                       │
                ┌──────┴──────┐
                ▼             ▼
        Instruction       Arithmetic
         Pipeline          Pipeline
                │             │
                └──────┬──────┘
                       ▼
                 Higher Throughput
\`\`\``,diagrams:[{id:`diag-ca452-u4-c3`,title:`Instruction Pipeline Timing`,caption:`Polished SVG architectural visualization for Instruction Pipeline Timing`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">5-Stage Instruction Pipelining & Hazard Resolution Architecture</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">IF, ID, EX, MEM, WB execution stages, data forwarding paths, and pipeline stalls</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="98.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Fetch/Decode</text> </g> <g transform="translate(190.0, 53)"> <rect width="92.0" height="18" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#10b981"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Execute ALU</text> </g> <g transform="translate(292.0, 53)"> <rect width="92.0" height="18" rx="4" fill="#0f172a" stroke="#a855f7" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#a855f7"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Memory / WB</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Pipeline Stages Space-Time Matrix --> <g> <rect x="40" y="75" width="170" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="40" y="75" width="170" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="54" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">1. IF Stage</text> <line x1="40" y1="107" x2="210" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="54" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Hardware: </tspan> <tspan fill="#e2e8f0" font-size="11">Instruction Cache</tspan> </text> <text x="54" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Action: </tspan> <tspan fill="#e2e8f0" font-size="11">IR <-- M[PC]</tspan> </text> <text x="54" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Next PC: </tspan> <tspan fill="#e2e8f0" font-size="11">PC <-- PC + 4</tspan> </text> <text x="54" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Hazard: </tspan> <tspan fill="#e2e8f0" font-size="11">I-Cache miss / Branch</tspan> </text> </g> <g> <path d="M 210 195 L 260 195" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(207.0, 185.0)"> <rect width="56.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="28.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">next CC</text> </g> </g> <g> <rect x="260" y="75" width="170" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="260" y="75" width="170" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="274" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">2. ID Stage</text> <line x1="260" y1="107" x2="430" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="274" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Hardware: </tspan> <tspan fill="#e2e8f0" font-size="11">Register File</tspan> </text> <text x="274" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Action: </tspan> <tspan fill="#e2e8f0" font-size="11">Read Regs Rs, Rt</tspan> </text> <text x="274" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Control: </tspan> <tspan fill="#e2e8f0" font-size="11">Generate ALU control</tspan> </text> <text x="274" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Hazard: </tspan> <tspan fill="#e2e8f0" font-size="11">RAW dependence stall</tspan> </text> </g> <g> <path d="M 430 195 L 480 195" stroke="#06b6d4" stroke-width="2" fill="none" marker-end="url(#mCyan)"/> <g transform="translate(427.0, 185.0)"> <rect width="56.0" height="20" rx="5" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="28.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">next CC</text> </g> </g> <g> <rect x="480" y="75" width="170" height="240" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="480" y="75" width="170" height="32" rx="10 10 0 0" fill="#064e3b"/> <text x="494" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">3. EX Stage</text> <line x1="480" y1="107" x2="650" y2="107" stroke="#10b981" stroke-width="1" stroke-opacity="0.4"/> <text x="494" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Hardware: </tspan> <tspan fill="#e2e8f0" font-size="11">ALU & Shifter</tspan> </text> <text x="494" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Action: </tspan> <tspan fill="#e2e8f0" font-size="11">Arithmetic computation</tspan> </text> <text x="494" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Branch: </tspan> <tspan fill="#e2e8f0" font-size="11">Branch target address</tspan> </text> <text x="494" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Forwarding: </tspan> <tspan fill="#e2e8f0" font-size="11">EX-to-EX bypass path</tspan> </text> </g> <g> <path d="M 650 195 L 700 195" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#mEmerald)"/> <g transform="translate(647.0, 185.0)"> <rect width="56.0" height="20" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="28.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">next CC</text> </g> </g> <g> <rect x="700" y="75" width="180" height="240" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="700" y="75" width="180" height="32" rx="10 10 0 0" fill="#581c87"/> <text x="714" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">4. MEM & WB</text> <line x1="700" y1="107" x2="880" y2="107" stroke="#a855f7" stroke-width="1" stroke-opacity="0.4"/> <text x="714" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">MEM: </tspan> <tspan fill="#e2e8f0" font-size="11">Load/Store to D-Cache</tspan> </text> <text x="714" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">WB: </tspan> <tspan fill="#e2e8f0" font-size="11">Write result into Rd</tspan> </text> <text x="714" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Hazards: </tspan> <tspan fill="#e2e8f0" font-size="11">Structural (shared bus)</tspan> </text> <text x="714" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Throughput: </tspan> <tspan fill="#e2e8f0" font-size="11">1 instruction per clock (ideal)</tspan> </text> </g> <g transform="translate(40, 335)"> <rect width="840" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Pipeline Speedup Equation: S_k = (n × k) / (k + n - 1)</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">For large n tasks, a k-stage pipeline achieves ideal k-fold speedup over non-pipelined execution.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u4c3-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In Instruction Pipeline Timing, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u4c3-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in Instruction Pipeline Timing, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of Instruction Pipeline Timing?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]}]},{id:`unit-5`,unitNumber:5,title:`Unit 5: UNIT 5: MULTIPROCESSOR — CO5`,co:`CO5`,description:`Deep study notes and assessment engine for Unit 5.`,concepts:[{id:`multiprocessor`,title:`Multiprocessor`,subtitle:`CA452 Unit 5 Concept 1`,summary:`Comprehensive study notes covering Multiprocessor with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:38,notes:`## 1. Multiprocessor

A multiprocessor system contains two or more processors that work together within a single computer system. The processors may share memory, I/O devices and other system resources.

\`\`\`text
MULTIPROCESSOR SYSTEM
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
          Processor 1  Processor 2  Processor 3
              │            │            │
              └────────────┼────────────┘
                           │
                    Interconnection
                           │
                           ▼
                    Shared Memory
                           │
                           ▼
                         I/O
\`\`\`

The main objectives are:

\`\`\`text
Higher processing speed
Increased throughput
Better resource utilization
Improved reliability
Execution of parallel applications
\`\`\`

A multiprocessor system can divide a large problem into smaller tasks.

\`\`\`text
Large Problem
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
      Task 1     Task 2     Task 3
        │          │          │
        ▼          ▼          ▼
       P1         P2         P3
        │          │          │
        └──────────┼──────────┘
                   ▼
             Final Result
\`\`\`

---



## 2. Characteristics of Multiprocessors

Important characteristics include:

**Multiple CPUs**

The system contains two or more processing units.

\`\`\`text
P1 ──┐
P2 ──┼──► System
P3 ──┤
P4 ──┘
\`\`\`

**Shared Resources**

Processors may share memory, I/O devices and communication networks.

**Parallel Execution**

Independent tasks can execute simultaneously.

**Interprocessor Communication**

Processors need mechanisms to exchange information and coordinate their operations.

**Synchronization**

Processors must coordinate access to shared resources.

\`\`\`text
P1 ──► Shared Resource ◄── P2
          │
          ▼
     Synchronization
\`\`\`

**Increased Throughput**

More than one processor can execute tasks during the same period.

---



## 3. Multiprocessor System Organization

A basic multiprocessor system contains processors, memory, I/O devices and an interconnection structure.

\`\`\`text
┌──────────────┐
             │ Processor P1 │
             └──────┬───────┘
                    │
             ┌──────┴───────┐
             │              │
             ▼              ▼
      ┌────────────┐   ┌────────────┐
      │ Processor P2│   │ Processor P3│
      └──────┬─────┘   └──────┬─────┘
             │                │
             └───────┬────────┘
                     ▼
             ┌──────────────┐
             │Interconnection│
             │   Network     │
             └──────┬───────┘
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
     Main Memory              I/O
\`\`\`

The interconnection network provides communication between processors and memory.

---



## 4. Types of Multiprocessor Systems

Multiprocessor systems can be classified according to how processors access memory and how tightly they are coupled.

\`\`\`text
Multiprocessors
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
      Shared Memory           Distributed Memory
          │
     ┌────┴─────┐
     ▼          ▼
    UMA        NUMA
\`\`\`

Two important shared-memory organizations are:

\`\`\`text
UMA
NUMA
\`\`\`

---



## 5. UMA

UMA means Uniform Memory Access.

In a UMA system, all processors have approximately equal access time to the shared memory.

\`\`\`text
P1       P2       P3       P4
         │        │        │        │
         └────────┼────────┼────────┘
                  │
             System Bus
                  │
                  ▼
          ┌──────────────┐
          │ Shared Memory│
          └──────────────┘
\`\`\`

The distance from each processor to the shared memory is effectively the same.

\`\`\`text
P1 ── same access time ──► Memory
P2 ── same access time ──► Memory
P3 ── same access time ──► Memory
P4 ── same access time ──► Memory
\`\`\`

**Advantages**

\`\`\`text
Simple memory model
Easy programming model
Uniform memory access time
Suitable for smaller multiprocessor systems
\`\`\`

**Limitation**

As the number of processors increases, contention for shared memory can become significant.

\`\`\`text
P1 ──┐
P2 ──┤
P3 ──┼──► Shared Memory
P4 ──┘
        │
        ▼
   Memory Contention
\`\`\`

---



## 6. NUMA

NUMA means Non-Uniform Memory Access.

In NUMA systems, processors have different access times depending on whether they access local or remote memory.

\`\`\`text
Node 1                         Node 2
   ┌─────────────┐               ┌─────────────┐
   │ Processor 1 │               │ Processor 2 │
   ├─────────────┤               ├─────────────┤
   │ Local Memory│               │ Local Memory│
   └──────┬──────┘               └──────┬──────┘
          │                             │
          └───────────┬─────────────────┘
                      │
                 Interconnect
\`\`\`

Local memory access is generally faster:

\`\`\`text
P1 ─────► Local Memory
 │          FAST
 │
 └────────► Remote Memory
             SLOWER
\`\`\`

NUMA improves scalability by distributing memory among processing nodes.

---



## 7. UMA vs NUMA

| UMA | NUMA |
| --- | ---- |
| Uniform memory access time | Memory access time varies |
| Central/shared memory is common | Memory is distributed among nodes |
| Simpler programming model | More complex memory organization |
| Scalability can be limited | Better scalability |
| Suitable for smaller systems | Suitable for larger multiprocessor systems |

---



## 8. Interconnection Structures

Processors and memory need an interconnection structure for communication.

Common structures include:

\`\`\`text
Interconnection Structures
          │
     ┌────┼─────┬─────────┐
     ▼    ▼     ▼         ▼
    Bus  Crossbar Multistage Hypercube
\`\`\`

The interconnection determines how processors communicate with memory and other processors.

---



## 9. Bus Interconnection

A bus is a shared communication path connecting processors, memory and I/O.

\`\`\`text
P1       P2       P3
 │        │        │
 └────────┼────────┘
          │
════════════════════════
          BUS
════════════════════════
     │            │
     ▼            ▼
  Memory          I/O
\`\`\`

Only one or a limited number of transfers can use the shared bus at a time.

**Advantages**

\`\`\`text
Simple design
Low cost
Easy to implement
\`\`\`

**Disadvantages**

\`\`\`text
Shared resource creates contention
Performance decreases as processors increase
Limited scalability
\`\`\`

---



## 10. Crossbar Switch

A crossbar provides multiple possible connections between processors and memory modules.

\`\`\`text
Memory
        M1     M2     M3
        │      │      │
        │      │      │
P1 ─────┼──────┼──────┼
        │ ╲    │      │
P2 ─────┼──╲───┼──────┼
        │   ╲  │      │
P3 ─────┼────╲─┼──────┼
\`\`\`

Conceptually, a crossbar contains switching points.

\`\`\`text
M1   M2   M3
              │    │    │
          ┌───┼────┼────┼───┐
 P1 ──────┼───●────●────●───┤
 P2 ──────┼───●────●────●───┤
 P3 ──────┼───●────●────●───┤
          └──────────────────┘
\`\`\`

Multiple independent processor-memory connections can occur simultaneously when different paths are selected.

**Advantage**

\`\`\`text
High communication bandwidth.
\`\`\`

**Disadvantage**

\`\`\`text
Hardware complexity and cost increase rapidly as the number of processors and memory modules increases.
\`\`\`

---`,diagrams:[{id:`diag-ca452-u5-c1`,title:`Multiprocessor`,caption:`Polished SVG architectural visualization for Multiprocessor`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Multiprocessor Memory Structures: UMA vs NUMA Architecture</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Uniform Memory Access shared bus vs Non-Uniform Distributed Memory interconnects</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="80.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">UMA / SMP</text> </g> <g transform="translate(172.0, 53)"> <rect width="98.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">NUMA Cluster</text> </g> <g transform="translate(280.0, 53)"> <rect width="100.0" height="18" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/> <line x1="5" y1="9" x2="16" y2="9" stroke="#38bdf8" stroke-width="2"/> <polygon points="14,6 18,9 14,12" fill="#38bdf8"/> <text x="23" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Interconnect</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Multiprocessor UMA vs NUMA --> <g> <rect x="50" y="75" width="360" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="50" y="75" width="360" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="64" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">UMA / Symmetric Multiprocessing (SMP)</text> <line x1="50" y1="107" x2="410" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="64" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Processors: </tspan> <tspan fill="#e2e8f0" font-size="11">CPU1, CPU2 ... CPUn share system bus</tspan> </text> <text x="64" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Memory: </tspan> <tspan fill="#e2e8f0" font-size="11">Single centralized physical RAM</tspan> </text> <text x="64" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Latency: </tspan> <tspan fill="#e2e8f0" font-size="11">Uniform access time for all processors</tspan> </text> <text x="64" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Interconnect: </tspan> <tspan fill="#e2e8f0" font-size="11">Time-shared common bus or Crossbar switch</tspan> </text> <text x="64" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Scalability: </tspan> <tspan fill="#e2e8f0" font-size="11">Limited to 8-32 CPUs due to bus saturation</tspan> </text> <text x="64" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Coherence: </tspan> <tspan fill="#e2e8f0" font-size="11">Snoopy bus protocols (MESI)</tspan> </text> <text x="64" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">OS Model: </tspan> <tspan fill="#e2e8f0" font-size="11">Single unified operating system kernel</tspan> </text> </g> <g> <path d="M 410 195 L 490 195" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(416.0, 185.0)"> <rect width="68.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="34.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">scales to</text> </g> </g> <g> <rect x="490" y="75" width="380" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="490" y="75" width="380" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="504" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">NUMA / Distributed Shared Memory</text> <line x1="490" y1="107" x2="870" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="504" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Node Model: </tspan> <tspan fill="#e2e8f0" font-size="11">Each node contains CPU + Local Memory</tspan> </text> <text x="504" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Access Time: </tspan> <tspan fill="#e2e8f0" font-size="11">Local access is fast; remote memory is slower</tspan> </text> <text x="504" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Interconnect: </tspan> <tspan fill="#e2e8f0" font-size="11">Multistage Omega network, 2D-Mesh, Hypercube</tspan> </text> <text x="504" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Scalability: </tspan> <tspan fill="#e2e8f0" font-size="11">Scales to hundreds/thousands of cores</tspan> </text> <text x="504" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">CC-NUMA: </tspan> <tspan fill="#e2e8f0" font-size="11">Directory-based cache coherence tracking</tspan> </text> <text x="504" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">COMA: </tspan> <tspan fill="#e2e8f0" font-size="11">Cache-Only Memory Architecture variant</tspan> </text> <text x="504" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Performance: </tspan> <tspan fill="#e2e8f0" font-size="11">Depends on memory page placement & locality</tspan> </text> </g> <g transform="translate(50, 335)"> <rect width="820" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Multiprocessor Memory Architecture Comparison</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">UMA provides uniform simplicity for small multicore chips; NUMA eliminates the central bus bottleneck for enterprise supercomputers.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u5c1-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In Multiprocessor, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u5c1-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in Multiprocessor, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of Multiprocessor?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]},{id:`multistage-interconnection-network`,title:`Multistage Interconnection Network`,subtitle:`CA452 Unit 5 Concept 2`,summary:`Comprehensive study notes covering Multistage Interconnection Network with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:38,notes:`## 11. Multistage Interconnection Network

A multistage interconnection network uses multiple stages of switching elements to connect processors and memory.

\`\`\`text
Processors       Stage 1       Stage 2       Memory
   P1 ───────────┌─────┐───────┌─────┐──────► M1
   P2 ───────────┤ SW  ├───────┤ SW  ├──────► M2
   P3 ───────────┤     ├───────┤     ├──────► M3
   P4 ───────────└─────┘───────└─────┘──────► M4
\`\`\`

Each switching element controls how signals are routed.

The main idea is:

\`\`\`text
Processor
    │
    ▼
Switching Stage 1
    │
    ▼
Switching Stage 2
    │
    ▼
Memory
\`\`\`

Multistage networks provide a compromise between the simplicity of buses and the high connectivity of crossbar systems.

---



## 12. Hypercube Interconnection

A hypercube is an interconnection structure in which processing elements are connected according to the dimensions of a binary cube.

A 3-dimensional hypercube can be represented as:

\`\`\`text
000────────001
            /  │         /│
          010────────011  │
           │   │        │ │
           │  100───────│101
           │ /          │/
          110──────────111
\`\`\`

Each node is connected to nodes differing in exactly one binary bit.

For a n-dimensional hypercube:

\`\`\`text
Number of nodes = 2ⁿ
\`\`\`

Examples:

\`\`\`text
1-D → 2 nodes
2-D → 4 nodes
3-D → 8 nodes
4-D → 16 nodes
\`\`\`

The structure provides multiple communication paths between processing elements.

---



## 13. Interprocessor Communication

Interprocessor communication is the exchange of data and control information between processors.

\`\`\`text
Processor 1
            │
       Message/Data
            │
            ▼
    ┌───────────────┐
    │ Interconnect  │
    └───────┬───────┘
            │
       Message/Data
            │
            ▼
       Processor 2
\`\`\`

Communication may involve:

\`\`\`text
Data exchange
Status information
Synchronization
Task coordination
\`\`\`

Two processors may communicate using shared memory:

\`\`\`text
P1 ─────► Shared Memory ◄───── P2
\`\`\`

or message passing:

\`\`\`text
P1 ─────► Message ─────► P2
\`\`\`

---



## 14. Interprocessor Synchronization

Synchronization ensures that processors coordinate their operations correctly.

It is especially important when multiple processors access shared resources.

\`\`\`text
P1 ─────┐
        │
        ▼
   Shared Data
        ▲
        │
P2 ─────┘
\`\`\`

Without synchronization, simultaneous updates can produce incorrect results.

Example:

\`\`\`text
Initial X = 10

P1 reads X = 10
P2 reads X = 10

P1 writes X = 11
P2 writes X = 11

Expected X = 12
Actual X   = 11
\`\`\`

This is a race condition.

\`\`\`text
Shared Variable X
              │
       ┌──────┴──────┐
       ▼             ▼
      P1             P2
       │             │
      Read          Read
       │             │
       └──────┬──────┘
              ▼
        Race Condition
\`\`\`

Synchronization mechanisms prevent such conflicts.

---



## 15. Mutual Exclusion

Mutual exclusion ensures that only one processor accesses a critical section at a time.

\`\`\`text
Critical Section
                    │
          ┌─────────┴─────────┐
          │                   │
         P1                   P2
          │                   │
      Enter first         Must wait
          │                   │
          ▼                   │
      Execute                 │
          │                   │
          ▼                   │
         Exit                 │
                              ▼
                         P2 enters
\`\`\`

A critical section is a portion of a program where shared data or resources are accessed.

Conceptually:

\`\`\`text
P1: ──► Enter ──► Critical Section ──► Exit
P2: ──► Wait  ───────────────────────► Enter
\`\`\`

---



## 16. Synchronization Mechanisms

Common synchronization mechanisms include:

\`\`\`text
Synchronization
      │
 ┌────┼─────────┐
 ▼    ▼         ▼
Lock  Semaphore  Monitor
\`\`\`

**Lock**

A lock allows one processor/thread to enter a protected section.

\`\`\`text
Lock = FREE
   │
   ▼
P1 acquires lock
   │
   ▼
Lock = BUSY
   │
   ▼
P1 uses resource
   │
   ▼
P1 releases lock
   │
   ▼
Lock = FREE
\`\`\`

**Semaphore**

A semaphore is a synchronization variable used to control access to shared resources.

Basic operations are:

\`\`\`text
WAIT
SIGNAL
\`\`\`

Conceptually:

\`\`\`text
WAIT(S)
   │
   ├── S available → Continue
   │
   └── S unavailable → Wait


SIGNAL(S)
   │
   ▼
Release / Notify
\`\`\`

---



## 17. Cache Coherence

In multiprocessor systems, each processor may have its own cache.

The same memory location may therefore exist in multiple caches.

\`\`\`text
Main Memory
               │
      ┌────────┼────────┐
      ▼        ▼        ▼
    Cache1   Cache2   Cache3
      │        │        │
      ▼        ▼        ▼
     P1       P2       P3
\`\`\`

Suppose all caches contain:

\`\`\`text
X = 10
\`\`\`

If P1 changes X:

\`\`\`text
P1:
X = 20
\`\`\`

other caches may still contain:

\`\`\`text
Cache1 = 20
Cache2 = 10
Cache3 = 10
\`\`\`

This creates an inconsistency.

\`\`\`text
X = 20
         │
         ▼
      Cache 1

Cache 2 → X = 10
Cache 3 → X = 10
\`\`\`

Cache coherence ensures that processors see a consistent value for shared memory locations.

---



## 18. Cache Coherence Problem

The problem can be illustrated as:

\`\`\`text
Shared Memory
                   X=10
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
       Cache P1  Cache P2  Cache P3
          │         │         │
         10        10        10
          │
       P1 writes
         X=20
          │
          ▼
        Cache P1
         X=20

Cache P2 → X=10  ← stale
Cache P3 → X=10  ← stale
\`\`\`

A coherence protocol must ensure that stale copies are invalidated or updated appropriately.

---



## 19. Cache Coherence Protocols

Two basic approaches are:

\`\`\`text
Cache Coherence
      │
      ├── Write Invalidate
      │
      └── Write Update
\`\`\`

**Write Invalidate**

When one processor writes to a cache line, other copies are invalidated.

\`\`\`text
P1 Cache → WRITE X
              │
              ▼
        Invalidate X
        ┌─────┴─────┐
        ▼           ▼
     Cache P2    Cache P3
     Invalid     Invalid
\`\`\`

**Write Update**

When one processor modifies a value, the updated value is propagated to other caches.

\`\`\`text
P1 Cache → WRITE X=20
              │
        ┌─────┼─────┐
        ▼     ▼     ▼
     Cache P2 Cache P3
       X=20    X=20
\`\`\`

---



## 20. Multiprocessor Operating System

An operating system for a multiprocessor system must manage multiple CPUs and distribute work efficiently.

Major responsibilities include:

\`\`\`text
Multiprocessor OS
                 │
      ┌──────────┼──────────┐
      ▼          ▼          ▼
 Process       CPU        Memory
 Scheduling  Scheduling   Management
      │          │          │
      └──────────┼──────────┘
                 ▼
          Synchronization
                 │
                 ▼
        Interprocessor Communication
\`\`\`

Important functions:

\`\`\`text
Process scheduling
Load balancing
Processor allocation
Memory management
Synchronization
Interprocessor communication
Interrupt management
\`\`\`

---`,diagrams:[{id:`diag-ca452-u5-c2`,title:`Multistage Interconnection Network`,caption:`Polished SVG architectural visualization for Multistage Interconnection Network`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Multiprocessor Memory Structures: UMA vs NUMA Architecture</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Uniform Memory Access shared bus vs Non-Uniform Distributed Memory interconnects</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="80.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">UMA / SMP</text> </g> <g transform="translate(172.0, 53)"> <rect width="98.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">NUMA Cluster</text> </g> <g transform="translate(280.0, 53)"> <rect width="100.0" height="18" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/> <line x1="5" y1="9" x2="16" y2="9" stroke="#38bdf8" stroke-width="2"/> <polygon points="14,6 18,9 14,12" fill="#38bdf8"/> <text x="23" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Interconnect</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Multiprocessor UMA vs NUMA --> <g> <rect x="50" y="75" width="360" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="50" y="75" width="360" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="64" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">UMA / Symmetric Multiprocessing (SMP)</text> <line x1="50" y1="107" x2="410" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="64" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Processors: </tspan> <tspan fill="#e2e8f0" font-size="11">CPU1, CPU2 ... CPUn share system bus</tspan> </text> <text x="64" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Memory: </tspan> <tspan fill="#e2e8f0" font-size="11">Single centralized physical RAM</tspan> </text> <text x="64" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Latency: </tspan> <tspan fill="#e2e8f0" font-size="11">Uniform access time for all processors</tspan> </text> <text x="64" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Interconnect: </tspan> <tspan fill="#e2e8f0" font-size="11">Time-shared common bus or Crossbar switch</tspan> </text> <text x="64" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Scalability: </tspan> <tspan fill="#e2e8f0" font-size="11">Limited to 8-32 CPUs due to bus saturation</tspan> </text> <text x="64" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Coherence: </tspan> <tspan fill="#e2e8f0" font-size="11">Snoopy bus protocols (MESI)</tspan> </text> <text x="64" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">OS Model: </tspan> <tspan fill="#e2e8f0" font-size="11">Single unified operating system kernel</tspan> </text> </g> <g> <path d="M 410 195 L 490 195" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(416.0, 185.0)"> <rect width="68.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="34.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">scales to</text> </g> </g> <g> <rect x="490" y="75" width="380" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="490" y="75" width="380" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="504" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">NUMA / Distributed Shared Memory</text> <line x1="490" y1="107" x2="870" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="504" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Node Model: </tspan> <tspan fill="#e2e8f0" font-size="11">Each node contains CPU + Local Memory</tspan> </text> <text x="504" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Access Time: </tspan> <tspan fill="#e2e8f0" font-size="11">Local access is fast; remote memory is slower</tspan> </text> <text x="504" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Interconnect: </tspan> <tspan fill="#e2e8f0" font-size="11">Multistage Omega network, 2D-Mesh, Hypercube</tspan> </text> <text x="504" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Scalability: </tspan> <tspan fill="#e2e8f0" font-size="11">Scales to hundreds/thousands of cores</tspan> </text> <text x="504" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">CC-NUMA: </tspan> <tspan fill="#e2e8f0" font-size="11">Directory-based cache coherence tracking</tspan> </text> <text x="504" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">COMA: </tspan> <tspan fill="#e2e8f0" font-size="11">Cache-Only Memory Architecture variant</tspan> </text> <text x="504" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Performance: </tspan> <tspan fill="#e2e8f0" font-size="11">Depends on memory page placement & locality</tspan> </text> </g> <g transform="translate(50, 335)"> <rect width="820" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Multiprocessor Memory Architecture Comparison</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">UMA provides uniform simplicity for small multicore chips; NUMA eliminates the central bus bottleneck for enterprise supercomputers.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u5c2-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In Multistage Interconnection Network, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u5c2-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in Multistage Interconnection Network, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of Multistage Interconnection Network?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]},{id:`multiprocessor-scheduling`,title:`Multiprocessor Scheduling`,subtitle:`CA452 Unit 5 Concept 3`,summary:`Comprehensive study notes covering Multiprocessor Scheduling with full theoretical rigor, proofs, diagrams, and code implementations.`,estimatedMinutes:38,notes:`## 21. Multiprocessor Scheduling

The operating system assigns processes or threads to available processors.

\`\`\`text
Ready Queue
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
       P1        P2        P3
        │         │         │
        ▼         ▼         ▼
       CPU1      CPU2      CPU3
\`\`\`

The objective is to keep processors efficiently utilized.

---



## 22. Load Balancing

Load balancing distributes work among processors so that one processor does not remain overloaded while others are idle.

Poor distribution:

\`\`\`text
P1 █████████████████
P2 ██
P3 █
P4 █
\`\`\`

Balanced distribution:

\`\`\`text
P1 █████
P2 █████
P3 █████
P4 █████
\`\`\`

Conceptually:

\`\`\`text
Tasks
                    │
                    ▼
              Load Balancer
             ┌──────┼──────┐
             ▼      ▼      ▼
            CPU1   CPU2   CPU3
\`\`\`

Load balancing improves overall processor utilization.

---



## 23. Parallel Processing in Multiprocessors

A problem can be divided into independent tasks.

Example:

\`\`\`text
Problem
                 │
      ┌──────────┼──────────┐
      ▼          ▼          ▼
    Task A     Task B     Task C
      │          │          │
      ▼          ▼          ▼
     P1         P2         P3
      │          │          │
      └──────────┼──────────┘
                 ▼
            Final Result
\`\`\`

If tasks are independent, they can execute simultaneously.

This reduces the total elapsed time compared with strictly sequential execution.

---



## 24. Multiprocessor Performance

Important performance measures include:

**Speedup**

Speedup measures how much faster a parallel system executes a task compared with a sequential system.

\`\`\`text
Speedup = Sequential Execution Time
          ─────────────────────────
          Parallel Execution Time
\`\`\`

For example:

\`\`\`text
Sequential Time = 100 seconds
Parallel Time   = 25 seconds

Speedup = 100 / 25
        = 4
\`\`\`

**Efficiency**

Efficiency measures how effectively processors are utilized.

\`\`\`text
Efficiency = Speedup
             ────────
             Number of Processors
\`\`\`

For 4 processors and speedup 4:

\`\`\`text
Efficiency = 4 / 4
           = 1
           = 100%
\`\`\`

In real systems, efficiency is usually below 100% because of communication, synchronization, load imbalance and sequential portions of the program.

---



## 25. Amdahl's Law

Amdahl's Law describes the theoretical speedup obtainable when only part of a program can be parallelized.

If:

\`\`\`text
P = fraction of program that can be parallelized
N = number of processors
\`\`\`

then:

\`\`\`text
1
Speedup = ───────────────
          (1-P) + P/N
\`\`\`

Example:

If 90% of a program can be parallelized:

\`\`\`text
P = 0.90
N = 10
\`\`\`

Then:

\`\`\`text
Speedup = 1 / [(1-0.90) + 0.90/10]

        = 1 / [0.10 + 0.09]

        = 1 / 0.19

        ≈ 5.26
\`\`\`

Even with 10 processors, the speedup is limited by the 10% sequential portion.

\`\`\`text
Program
┌──────────────────────────────┐
│ Sequential │   Parallel     │
│    10%     │      90%       │
└──────────────────────────────┘
      │               │
      │               └──► Multiple CPUs
      │
      └──► Limits maximum speedup
\`\`\`

As the number of processors approaches infinity:

\`\`\`text
Maximum Speedup = 1 / (1-P)
\`\`\`

For P = 0.90:

\`\`\`text
Maximum Speedup = 1 / 0.10
                = 10
\`\`\`

Thus, the sequential portion places a fundamental limit on parallel speedup.

---



## 26. Flynn Classification and Multiprocessors

Multiprocessor systems generally fall under the MIMD category because different processors can execute different instruction streams on different data.

\`\`\`text
MIMD
               │
       ┌───────┼────────┐
       ▼       ▼        ▼
      P1      P2       P3
       │       │        │
      I1      I2       I3
       │       │        │
      D1      D2       D3
\`\`\`

Each processor can independently execute its own instructions on its own data.

---



## 27. Shared-Memory Multiprocessor Flow

\`\`\`text
PROCESSORS
       ┌────────┼────────┐
       ▼        ▼        ▼
      P1       P2       P3
       │        │        │
       └────────┼────────┘
                ▼
        Interconnection
                │
                ▼
        ┌──────────────┐
        │ Shared Memory│
        └──────┬───────┘
               │
               ▼
          Cache System
               │
        ┌──────┼──────┐
        ▼      ▼      ▼
      Cache1 Cache2 Cache3
\`\`\`

This architecture requires careful management of:

\`\`\`text
Shared Data
    │
    ├── Synchronization
    └── Cache Coherence
\`\`\`

---



## 28. Distributed-Memory Multiprocessor Flow

\`\`\`text
Node 1                 Node 2
 ┌──────────────┐       ┌──────────────┐
 │ CPU + Memory │◄─────►│ CPU + Memory │
 └──────────────┘       └──────┬───────┘
          ▲                     │
          │                     │
          └────────┬────────────┘
                   │
                Network
                   │
             ┌─────┴─────┐
             │   Node 3  │
             │CPU+Memory │
             └───────────┘
\`\`\`

Each node owns local memory, and processors communicate through the network.

---



## 29. Complete Multiprocessor Architecture

\`\`\`text
MULTIPROCESSOR
                               │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼
             CPU 1           CPU 2          CPU 3
                │              │              │
                └──────────────┼──────────────┘
                               ▼
                       Interconnection
                         Structure
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
             Bus           Crossbar         Multistage
              │                │                │
              └────────────────┼────────────────┘
                               ▼
                         Memory System
                               │
                 ┌─────────────┴─────────────┐
                 ▼                           ▼
                UMA                         NUMA
                 │                           │
                 ▼                           ▼
          Uniform Access              Local/Remote Access
\`\`\`

---



## 30. Complete Unit 5 Flow

\`\`\`text
UNIT 5
                     MULTIPROCESSOR
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
  Multiprocessor      Interconnection     Communication
     Systems             Structures             │
        │                  │                   ├── Interprocessor
        │                  │                   │   Communication
        │             ┌────┼────┬────┐        │
        │             ▼    ▼    ▼    ▼        └── Synchronization
        │            Bus Crossbar MSN Hypercube       │
        │                                             │
        ├───────────────┐                             ▼
        ▼               ▼                       Mutual Exclusion
     Shared          Distributed                     │
     Memory            Memory                       ▼
        │               │                       Cache Coherence
     ┌──┴──┐            │                         │
     ▼     ▼            │                    ┌────┴────┐
    UMA   NUMA          │                    ▼         ▼
                        │                Invalidate   Update
                        │
                        ▼
                  Parallel Execution
                        │
                ┌───────┴────────┐
                ▼                ▼
          Load Balancing     Scheduling
                │                │
                └───────┬────────┘
                        ▼
                   Performance
                        │
                 ┌──────┴──────┐
                 ▼             ▼
              Speedup       Efficiency
                 │
                 ▼
             Amdahl's Law
\`\`\`

The complete concept is:

\`\`\`text
Multiple Processors
        │
        ▼
Parallel Execution
        │
        ▼
Interprocessor Communication
        │
        ▼
Synchronization + Cache Coherence
        │
        ▼
Efficient Resource Sharing
        │
        ▼
Higher Throughput / Reduced Execution Time
\`\`\``,diagrams:[{id:`diag-ca452-u5-c3`,title:`Multiprocessor Scheduling`,caption:`Polished SVG architectural visualization for Multiprocessor Scheduling`,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));"> <defs> <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#090d16"/> <stop offset="50%" stop-color="#0e1424"/> <stop offset="100%" stop-color="#080c14"/> </linearGradient> <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/> <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/> </linearGradient> <!-- Accent Gradients --> <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#6366f1"/> <stop offset="100%" stop-color="#4338ca"/> </linearGradient> <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#06b6d4"/> <stop offset="100%" stop-color="#0891b2"/> </linearGradient> <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#10b981"/> <stop offset="100%" stop-color="#047857"/> </linearGradient> <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f59e0b"/> <stop offset="100%" stop-color="#b45309"/> </linearGradient> <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#a855f7"/> <stop offset="100%" stop-color="#6b21a8"/> </linearGradient> <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#f43f5e"/> <stop offset="100%" stop-color="#be123c"/> </linearGradient> <!-- Arrow Markers --> <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/> </marker> <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/> </marker> <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/> </marker> <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/> </marker> <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/> </marker> <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/> </marker> </defs> <!-- Background Canvas Card --> <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/> <!-- Row 1: Header Bar --> <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/> <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/> <!-- Window Dots --> <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/> <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/> <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/> <!-- Title & Subtitle in Row 1 --> <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Multiprocessor Memory Structures: UMA vs NUMA Architecture</text> <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">Uniform Memory Access shared bus vs Non-Uniform Distributed Memory interconnects</text> <!-- Row 2: Dedicated Legend Toolbar --> <rect x="0" y="48" width="100%" height="26" fill="#070b14"/> <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/> <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text> <g transform="translate(82, 53)"> <rect width="80.0" height="18" rx="4" fill="#0f172a" stroke="#6366f1" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#6366f1"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">UMA / SMP</text> </g> <g transform="translate(172.0, 53)"> <rect width="98.0" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" stroke-width="1.2"/> <rect x="4" y="4" width="9" height="9" rx="2" fill="#06b6d4"/> <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">NUMA Cluster</text> </g> <g transform="translate(280.0, 53)"> <rect width="100.0" height="18" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/> <line x1="5" y1="9" x2="16" y2="9" stroke="#38bdf8" stroke-width="2"/> <polygon points="14,6 18,9 14,12" fill="#38bdf8"/> <text x="23" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Interconnect</text> </g> <!-- Diagram Visual Elements Canvas --> <g transform="translate(0, 10)"> <!-- Multiprocessor UMA vs NUMA --> <g> <rect x="50" y="75" width="360" height="240" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="50" y="75" width="360" height="32" rx="10 10 0 0" fill="#1e1b4b"/> <text x="64" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">UMA / Symmetric Multiprocessing (SMP)</text> <line x1="50" y1="107" x2="410" y2="107" stroke="#6366f1" stroke-width="1" stroke-opacity="0.4"/> <text x="64" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Processors: </tspan> <tspan fill="#e2e8f0" font-size="11">CPU1, CPU2 ... CPUn share system bus</tspan> </text> <text x="64" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Memory: </tspan> <tspan fill="#e2e8f0" font-size="11">Single centralized physical RAM</tspan> </text> <text x="64" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Latency: </tspan> <tspan fill="#e2e8f0" font-size="11">Uniform access time for all processors</tspan> </text> <text x="64" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Interconnect: </tspan> <tspan fill="#e2e8f0" font-size="11">Time-shared common bus or Crossbar switch</tspan> </text> <text x="64" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Scalability: </tspan> <tspan fill="#e2e8f0" font-size="11">Limited to 8-32 CPUs due to bus saturation</tspan> </text> <text x="64" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Coherence: </tspan> <tspan fill="#e2e8f0" font-size="11">Snoopy bus protocols (MESI)</tspan> </text> <text x="64" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">OS Model: </tspan> <tspan fill="#e2e8f0" font-size="11">Single unified operating system kernel</tspan> </text> </g> <g> <path d="M 410 195 L 490 195" stroke="#818cf8" stroke-width="2" fill="none" marker-end="url(#mIndigo)"/> <g transform="translate(416.0, 185.0)"> <rect width="68.0" height="20" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/> <text x="34.0" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">scales to</text> </g> </g> <g> <rect x="490" y="75" width="380" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/> <rect x="490" y="75" width="380" height="32" rx="10 10 0 0" fill="#155e75"/> <text x="504" y="96" fill="#c7d2fe" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">NUMA / Distributed Shared Memory</text> <line x1="490" y1="107" x2="870" y2="107" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/> <text x="504" y="129" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Node Model: </tspan> <tspan fill="#e2e8f0" font-size="11">Each node contains CPU + Local Memory</tspan> </text> <text x="504" y="150" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Access Time: </tspan> <tspan fill="#e2e8f0" font-size="11">Local access is fast; remote memory is slower</tspan> </text> <text x="504" y="171" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Interconnect: </tspan> <tspan fill="#e2e8f0" font-size="11">Multistage Omega network, 2D-Mesh, Hypercube</tspan> </text> <text x="504" y="192" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Scalability: </tspan> <tspan fill="#e2e8f0" font-size="11">Scales to hundreds/thousands of cores</tspan> </text> <text x="504" y="213" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">CC-NUMA: </tspan> <tspan fill="#e2e8f0" font-size="11">Directory-based cache coherence tracking</tspan> </text> <text x="504" y="234" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">COMA: </tspan> <tspan fill="#e2e8f0" font-size="11">Cache-Only Memory Architecture variant</tspan> </text> <text x="504" y="255" font-family="system-ui, -apple-system, sans-serif"> <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">Performance: </tspan> <tspan fill="#e2e8f0" font-size="11">Depends on memory page placement & locality</tspan> </text> </g> <g transform="translate(50, 335)"> <rect width="820" height="55" rx="8" fill="#0d1424" stroke="#334155" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/> <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 Multiprocessor Memory Architecture Comparison</text> <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">UMA provides uniform simplicity for small multicore chips; NUMA eliminates the central bus bottleneck for enterprise supercomputers.</text> </g> </g> </svg>`}],quiz:[{id:`ca452-u5c3-q1`,difficulty:`SUPER-HARD`,type:`mcq`,question:`In Multiprocessor Scheduling, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?`,options:[`Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding`,`Disabling clock synchronization to allow pure asynchronous signal propagation`,`Elimination of all cache hierarchies to bypass coherence overhead`,`Restricting all CPU instructions to single-byte opcode layouts`],correctAnswer:0,explanation:`Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles.`},{id:`ca452-u5c3-q2`,difficulty:`HARD`,type:`mcq`,question:`Regarding memory and control organization in Multiprocessor Scheduling, which statement is academically accurate?`,options:[`Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.`,`Microprogrammed control units cannot be modified once ROM is synthesized.`,`Direct addressing always requires two consecutive memory reference cycles to fetch an operand.`,`Virtual memory pages must be allocated in strictly contiguous physical memory frames.`],correctAnswer:0,explanation:`Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower.`}],flashcards:[{front:`Core principle of Multiprocessor Scheduling?`,back:`Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints.`},{front:`Distinction between RISC and CISC?`,back:`RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles.`},{front:`What is Cache Coherence?`,back:`The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols.`},{front:`What is Flynn's Bottleneck in SIMD?`,back:`Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution.`}]}]}]};export{e as default};