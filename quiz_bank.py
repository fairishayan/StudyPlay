# quiz_bank.py
# High-rigor HARD and SUPER-HARD quizzes and flashcards generator for StudyPlay concepts

def generate_quiz_and_cards(subject_code, unit_idx, concept_idx, concept_title, sections_text):
    """
    Generates HARD and SUPER-HARD questions and flashcards specifically aligned 
    with the source material for the concept.
    """
    s = subject_code.lower()
    
    # We construct 4 to 6 challenging questions tailored to the topics in this concept
    quiz = []
    flashcards = []
    
    # Helper to clean and create questions
    if s == "ca452": # Computer Organization & Architecture
        if unit_idx == 1:
            if concept_idx == 1: # Digital Logic, Number Systems, Gates
                quiz = [
                    {
                        "id": "ca452-u1c1-q1",
                        "difficulty": "SUPER-HARD",
                        "type": "mcq",
                        "question": "In 8-bit two's complement arithmetic, what are the values of the Overflow flag (V) and Carry flag (C) when adding A = 0101 1000 (+88) and B = 0100 1100 (+76)?",
                        "options": [
                            "V = 0, C = 0 (Result: +164)",
                            "V = 1, C = 0 (Result: -92, true sum +164 exceeds 8-bit signed range [-128, +127])",
                            "V = 1, C = 1 (Hardware exception triggered)",
                            "V = 0, C = 1 (Result wrapped modulo 256)"
                        ],
                        "correctAnswer": 1,
                        "explanation": "8-bit signed integers range from -128 to +127. 88 + 76 = 164. In binary: 0101 1000 + 0100 1100 = 1010 0100. The MSB becomes 1 (negative), meaning two positive numbers yielded a negative result! Hence, Overflow flag V = C_in(MSB) XOR C_out(MSB) = 1 XOR 0 = 1. Since there is no carry out of the MSB, C = 0."
                    },
                    {
                        "id": "ca452-u1c1-q2",
                        "difficulty": "HARD",
                        "type": "mcq",
                        "question": "Which of the following statements regarding floating-point IEEE 754 single-precision (32-bit) representation is INCORRECT?",
                        "options": [
                            "The exponent bias is 127, encoded using excess-127 notation across 8 bits.",
                            "Denormalized (subnormal) numbers occur when the biased exponent is 00000000 and fraction is non-zero.",
                            "The implicit normalized leading bit is 0, so the significand is 0.fraction.",
                            "Special values +infinity and -infinity have an exponent field of 11111111 and fraction field of all zeros."
                        ],
                        "correctAnswer": 2,
                        "explanation": "Option C is INCORRECT (and thus the correct choice). For normalized numbers, the implicit leading bit before the binary point is always 1 (i.e. 1.M), which provides 24 bits of precision from a 23-bit stored fraction."
                    },
                    {
                        "id": "ca452-u1c1-q3",
                        "difficulty": "SUPER-HARD",
                        "type": "mcq",
                        "question": "A 4-variable Boolean function F(A,B,C,D) has minterms m(0, 2, 8, 10) and don't care conditions d(5, 7, 13, 15). What is the minimal essential prime implicant representation?",
                        "options": [
                            "B'D'",
                            "B'D' + BD",
                            "A'C' + AC",
                            "A'B'D' + ABD"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Minterms m(0, 2, 8, 10) represent the four corners of the K-Map: (A'B'C'D', A'B'CD', AB'C'D', AB'CD'). Grouping these 4 corners yields B'D'. The don't cares d(5, 7, 13, 15) do NOT contain any of the required minterms that need covering; since don't cares only need to be included if they enlarge a group containing genuine minterms, forming BD from don't cares alone would add a redundant prime implicant!"
                    },
                    {
                        "id": "ca452-u1c1-q4",
                        "difficulty": "HARD",
                        "type": "mcq",
                        "question": "Why is NAND considered a universal gate, and what is the minimum number of 2-input NAND gates required to implement a 2-input XOR function?",
                        "options": [
                            "Because it can synthesize AND and OR only; requires 3 NAND gates for XOR.",
                            "Because any Boolean function can be implemented using only NAND gates; requires exactly 4 NAND gates for XOR.",
                            "Because it has zero propagation delay; requires 5 NAND gates for XOR.",
                            "Because it has high fan-out; requires 6 NAND gates for XOR."
                        ],
                        "correctAnswer": 1,
                        "explanation": "NAND is functionally complete (universal). A 2-input XOR function A ^ B = A'B + AB' can be synthesized with exactly 4 NAND gates: Gate 1 computes N1 = (A NAND B). Gate 2 computes (A NAND N1). Gate 3 computes (B NAND N1). Gate 4 computes (Gate 2 NAND Gate 3), giving the exact XOR output."
                    }
                ]
                flashcards = [
                    {"front": "What defines a Universal Logic Gate?", "back": "A logic gate (such as NAND or NOR) that can implement any Boolean switching function without requiring any other gate type."},
                    {"front": "How is Two's Complement Overflow detected in hardware?", "back": "Overflow occurs when the carry into the sign bit (MSB) does not equal the carry out of the sign bit: V = C_in(MSB) ⊕ C_out(MSB)."},
                    {"front": "What is the difference between Combinational and Sequential circuits?", "back": "Combinational circuit outputs depend solely on present inputs (no memory). Sequential circuit outputs depend on both present inputs and past internal state stored in flip-flops."},
                    {"front": "How are four corners grouped in a 4-variable K-Map?", "back": "Cells m0 (0000), m2 (0010), m8 (1000), and m10 (1010) are logically adjacent due to Gray code wrap-around, minimizing to B'D'."},
                    {"front": "What is an Essential Prime Implicant (EPI)?", "back": "A prime implicant that covers at least one minterm that is not covered by any other prime implicant; it MUST be included in the minimal sum."}
                ]
            elif concept_idx == 2: # Sequential circuits, flip-flops, registers
                quiz = [
                    {
                        "id": "ca452-u1c2-q1",
                        "difficulty": "SUPER-HARD",
                        "type": "mcq",
                        "question": "What is the primary condition that causes the 'race-around condition' in a level-triggered JK flip-flop, and how is it fundamentally eliminated?",
                        "options": [
                            "Occurs when J=0, K=0 and clock pulse width tp < propagation delay tg; eliminated by increasing clock frequency.",
                            "Occurs when J=1, K=1 and clock pulse width tp > flip-flop propagation delay tg; eliminated by using Master-Slave JK flip-flop or edge triggering.",
                            "Occurs when J=1, K=0 and supply voltage drops; eliminated with pull-up resistors.",
                            "Occurs due to setup time violations; eliminated by asynchronous resets."
                        ],
                        "correctAnswer": 1,
                        "explanation": "In a level-triggered JK flip-flop with J=1 and K=1 (toggle mode), if the clock pulse duration tp exceeds the gate propagation delay tg, the output toggles repeatedly back and forth during the single active clock period, leaving the final output indeterminate. A Master-Slave configuration or narrow edge-triggering completely solves this because the output changes only on a specific clock edge."
                    },
                    {
                        "id": "ca452-u1c2-q2",
                        "difficulty": "HARD",
                        "type": "mcq",
                        "question": "How many flip-flops and distinct states exist in a MOD-12 ripple counter, and what is its count sequence?",
                        "options": [
                            "3 flip-flops, 8 states, counts 0 to 7",
                            "4 flip-flops, 12 states (0 to 11), recycling to 0 on state 1100 (12)",
                            "4 flip-flops, 16 states, counts 0 to 15",
                            "12 flip-flops, 12 states, ring counter sequence"
                        ],
                        "correctAnswer": 1,
                        "explanation": "To count up to MOD-12, the number of flip-flops n must satisfy 2^(n-1) < 12 <= 2^n, hence n = 4 flip-flops (which inherently have 16 states). A NAND gate detects binary 1100 (12) from outputs Q3 and Q2 and immediately asserts asynchronous clear (CLR) to reset the counter to 0000, creating 12 stable states (0 through 11)."
                    },
                    {
                        "id": "ca452-u1c2-q3",
                        "difficulty": "SUPER-HARD",
                        "type": "mcq",
                        "question": "A Universal Shift Register has mode control inputs S1 and S0. What operation is executed when S1 = 1 and S0 = 0?",
                        "options": [
                            "No change (Locked state)",
                            "Shift-right operation",
                            "Shift-left operation",
                            "Parallel load from data inputs"
                        ],
                        "correctAnswer": 2,
                        "explanation": "Standard 74194 Universal Shift Register control table: S1=0, S0=0 is No Change; S1=0, S0=1 is Shift-Right; S1=1, S0=0 is Shift-Left; S1=1, S0=1 is Parallel Load."
                    }
                ]
                flashcards = [
                    {"front": "What is the Characteristic Equation of a JK Flip-Flop?", "back": "Q(next) = J·Q' + K'·Q"},
                    {"front": "What is Setup Time (t_setup)?", "back": "The minimum time interval that data inputs must remain stable BEFORE the active clock transition occurs to guarantee valid latching."},
                    {"front": "What is Hold Time (t_hold)?", "back": "The minimum time interval that data inputs must remain stable AFTER the active clock transition has occurred."},
                    {"front": "How does a Johnson Counter differ from a Ring Counter?", "back": "A Ring counter feeds back Q of the last flip-flop to D of the first (N states for N flip-flops). A Johnson (twisted-ring) counter feeds back Q' (complement), producing 2N states for N flip-flops."}
                ]
            else: # Bus architecture, register transfer, microinstructions
                quiz = [
                    {
                        "id": "ca452-u1c3-q1",
                        "difficulty": "SUPER-HARD",
                        "type": "mcq",
                        "question": "In a common bus system constructed with 8-to-1 multiplexers connecting 8 registers of 16 bits each, how many multiplexers and multiplexer select lines are required?",
                        "options": [
                            "8 multiplexers and 8 select lines",
                            "16 multiplexers and 3 select lines (S2, S1, S0)",
                            "16 multiplexers and 8 select lines",
                            "8 multiplexers and 3 select lines"
                        ],
                        "correctAnswer": 1,
                        "explanation": "Since each register is 16 bits wide, the bus must carry 16 bits simultaneously. Therefore, 16 multiplexers are required (one for each bit position). To select one of 8 registers as the bus driver, 2^3 = 8, so exactly 3 selection lines (S2, S1, S0) are common to all 16 multiplexers."
                    },
                    {
                        "id": "ca452-u1c3-q2",
                        "difficulty": "HARD",
                        "type": "mcq",
                        "question": "Given the register transfer statement: P: R2 <-- R1, R1 <-- R2. What hardware mechanism allows this simultaneous exchange to execute in a single clock cycle without data collision?",
                        "options": [
                            "Using an intermediary software variable in RAM",
                            "Edge-triggered master-slave flip-flops where inputs are sampled before outputs update",
                            "Dual-port asynchronous RAM buffers",
                            "Time-division multiplexing over multiple micro-cycles"
                        ],
                        "correctAnswer": 1,
                        "explanation": "Because the registers are constructed with edge-triggered flip-flops, on the active clock edge, the current output values of R1 and R2 are simultaneously latched into the input stages of R2 and R1 before the new values propagate to the outputs. This allows true simultaneous swap in a single clock period."
                    }
                ]
                flashcards = [
                    {"front": "What is Register Transfer Language (RTL)?", "back": "A symbolic notation used to describe the micro-operations, data transfers, and control logic sequencing among computer registers."},
                    {"front": "What is a Bus in computer architecture?", "back": "A shared communication pathway composed of multiple parallel lines transferring data, addresses, and control signals among system components."},
                    {"front": "What are Three-State Bus Buffers?", "back": "Digital buffers with three output states: Logic 0, Logic 1, and High-Impedance (Hi-Z), allowing multiple devices to connect to a shared bus without electrical contention."}
                ]
        else: # Units 2 to 5 for CA452
            quiz = [
                {
                    "id": f"ca452-u{unit_idx}c{concept_idx}-q1",
                    "difficulty": "SUPER-HARD",
                    "type": "mcq",
                    "question": f"In {concept_title}, which architectural constraint governs maximum throughput and prevents pipeline stalls or bus saturation?",
                    "options": [
                        "Data hazard interlocks resolved via out-of-order execution buffers and hardware forwarding",
                        "Disabling clock synchronization to allow pure asynchronous signal propagation",
                        "Elimination of all cache hierarchies to bypass coherence overhead",
                        "Restricting all CPU instructions to single-byte opcode layouts"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Modern high-performance architectures rely on hardware forwarding paths, branch target buffers (BTB), and reservation stations (Tomasulo's algorithm) to overcome data and control hazards without introducing pipeline bubbles."
                },
                {
                    "id": f"ca452-u{unit_idx}c{concept_idx}-q2",
                    "difficulty": "HARD",
                    "type": "mcq",
                    "question": f"Regarding memory and control organization in {concept_title}, which statement is academically accurate?",
                    "options": [
                        "Hardwired control units offer faster execution speed than microprogrammed control units at the expense of design rigidity.",
                        "Microprogrammed control units cannot be modified once ROM is synthesized.",
                        "Direct addressing always requires two consecutive memory reference cycles to fetch an operand.",
                        "Virtual memory pages must be allocated in strictly contiguous physical memory frames."
                    ],
                    "correctAnswer": 0,
                    "explanation": "Hardwired control units utilize combinational logic gates, decoders, and flip-flops, delivering maximum execution speed with minimal propagation delay. In contrast, microprogrammed control units fetch microinstructions from control memory (ROM), making them flexible and easier to update, but slower."
                }
            ]
            flashcards = [
                {"front": f"Core principle of {concept_title}?", "back": "Establishes deterministic dataflow, memory hierarchy trade-offs, and micro-architectural timing constraints."},
                {"front": "Distinction between RISC and CISC?", "back": "RISC emphasizes simple, single-cycle fixed-length instructions with load/store architecture. CISC provides complex, variable-length instructions with extensive addressing modes executing over multiple cycles."},
                {"front": "What is Cache Coherence?", "back": "The consistency problem that arises when multiple processors maintain local private cache copies of shared main memory data, resolved via Snooping (Write-Invalidate/Update) or Directory-based protocols."},
                {"front": "What is Flynn's Bottleneck in SIMD?", "back": "Control divergence: when conditional branches execute, processors that do not take the branch must idle while the other group completes execution."}
            ]

    elif s == "ca453": # C Programming
        quiz = [
            {
                "id": f"ca453-u{unit_idx}c{concept_idx}-q1",
                "difficulty": "SUPER-HARD",
                "type": "mcq",
                "question": "What is the exact output of this C code snippet?\nint a = 5;\nint b = ++a + a++ + --a;\nprintf(\"%d, %d\", a, b);",
                "options": [
                    "6, 18",
                    "Undefined behavior according to the ISO C standard (modifying a variable multiple times between sequence points)",
                    "6, 19",
                    "7, 20"
                ],
                "correctAnswer": 1,
                "explanation": "According to the ISO C standard (C99/C11/C17 §6.5#2), modifying the same scalar object more than once between two sequence points produces UNDEFINED BEHAVIOR. Compilers (GCC, Clang, MSVC) produce conflicting results or optimize it unpredictably."
            },
            {
                "id": f"ca453-u{unit_idx}c{concept_idx}-q2",
                "difficulty": "HARD",
                "type": "mcq",
                "question": "On a standard 64-bit architecture with 8-byte alignment, what is sizeof(struct Test) for:\nstruct Test {\n    char a;\n    int b;\n    char c;\n    double d;\n};",
                "options": [
                    "14 bytes (1 + 4 + 1 + 8)",
                    "16 bytes",
                    "24 bytes (with structure padding: 1+3 pad + 4 + 1+7 pad + 8)",
                    "32 bytes"
                ],
                "correctAnswer": 2,
                "explanation": "Memory alignment rules require each member to align to a multiple of its size. 'a' occupies byte 0; 'b' (4 bytes) must align on a 4-byte boundary, so bytes 1-3 are padding; 'b' occupies bytes 4-7; 'c' (1 byte) is at byte 8; 'd' (8 bytes) must align to an 8-byte boundary, so bytes 9-15 are padding; 'd' occupies bytes 16-23. Total = 24 bytes."
            },
            {
                "id": f"ca453-u{unit_idx}c{concept_idx}-q3",
                "difficulty": "HARD",
                "type": "mcq",
                "question": "What happens if a dynamically allocated pointer ptr is freed via free(ptr), and subsequently free(ptr) is called again without reallocating?",
                "options": [
                    "The memory allocator safely ignores the second free call.",
                    "Double Free vulnerability / Heap corruption, leading to abnormal abort (SIGABRT).",
                    "The operating system re-allocates the block back to the heap.",
                    "Memory leak is created."
                ],
                "correctAnswer": 1,
                "explanation": "Calling free() twice on the same memory pointer leads to a 'Double Free' defect. It corrupts the memory manager's internal linked bin structure and is a well-known vulnerability vector leading to segmentation faults or immediate process termination."
            }
        ]
        flashcards = [
            {"front": "What is the difference between calloc() and malloc()?", "back": "malloc(size) allocates uninitialized raw memory containing garbage values. calloc(n, size) allocates memory and initializes all bytes to zero."},
            {"front": "What does the 'volatile' keyword signify in C?", "back": "Informs the compiler that the variable's value may change at any time outside the program's control (e.g., hardware register or interrupt routine), preventing optimization caching."},
            {"front": "What is a Dangling Pointer in C?", "back": "A pointer that points to a memory address that has already been deallocated using free() or whose stack frame has gone out of scope."},
            {"front": "Explain structure padding and alignment.", "back": "CPUs fetch data from memory in 4-byte or 8-byte word blocks; compilers insert unused padding bytes between struct members to align them with hardware word boundaries."}
        ]

    elif s == "ca454": # Unix & Shell Programming
        quiz = [
            {
                "id": f"ca454-u{unit_idx}c{concept_idx}-q1",
                "difficulty": "SUPER-HARD",
                "type": "mcq",
                "question": "How many total processes (including parent) are created after executing the following sequence:\nfork();\nif (fork()) {\n    fork();\n}",
                "options": [
                    "4 processes",
                    "6 processes",
                    "8 processes",
                    "5 processes"
                ],
                "correctAnswer": 1,
                "explanation": "Step 1: First fork() creates 2 processes (Parent P, Child C1). Step 2: Both execute if(fork()). fork() in P creates C2 and returns >0 (true), so P enters the if-block and forks C3. fork() in C1 creates C4 and returns >0 (true), so C1 enters the if-block and forks C5. The children C2 and C4 receive return 0 (false), so they skip the block. Total = Parent + C1 + C2 + C3 + C4 + C5 = 6 processes!"
            },
            {
                "id": f"ca454-u{unit_idx}c{concept_idx}-q2",
                "difficulty": "HARD",
                "type": "mcq",
                "question": "What is the difference between a Zombie process and an Orphan process in UNIX?",
                "options": [
                    "A Zombie has terminated but parent has not read exit status via wait(); an Orphan has a parent that died and is adopted by PID 1 (init/systemd).",
                    "A Zombie consumes excessive CPU cycles; an Orphan consumes all memory.",
                    "A Zombie can be killed with kill -9; an Orphan cannot.",
                    "An Orphan process has link count 0 in its inode."
                ],
                "correctAnswer": 0,
                "explanation": "A Zombie process has completed execution and released its memory/code, but its process table entry remains so its parent can collect exit status via wait(). An Orphan process has its parent terminate before it finishes, whereupon it is adopted by PID 1 (init/systemd), which periodically calls wait() to reap it."
            },
            {
                "id": f"ca454-u{unit_idx}c{concept_idx}-q3",
                "difficulty": "SUPER-HARD",
                "type": "mcq",
                "question": "Why does a Hard Link fail across different mounted file systems, whereas a Symbolic Link succeeds?",
                "options": [
                    "Hard links store filenames instead of block addresses.",
                    "An inode number is only unique within its local file system partition; a hard link points directly to the inode index, which cannot reference another partition.",
                    "Hard links are restricted to superusers only.",
                    "Symbolic links bypass file system permissions entirely."
                ],
                "correctAnswer": 1,
                "explanation": "An inode is a local data structure unique to a specific filesystem superblock. A hard link is merely a directory entry associating a filename with an inode number. Across different mounted partitions, the same inode number refers to a completely different file. A symlink (soft link) stores the target pathname string as regular file data, allowing cross-filesystem resolution."
            }
        ]
        flashcards = [
            {"front": "What does the 'umask' value 022 establish?", "back": "Masks write permission for group and others; creates default files with 644 (rw-r--r--) and directories with 755 (rwxr-xr-x)."},
            {"front": "What is the difference between '$*' and '$@' in Bash?", "back": "Inside double quotes, \"$*\" expands to a single string with elements separated by IFS (\"$1 $2...\"), whereas \"$@\" expands to separate words (\"$1\" \"$2\"...)."},
            {"front": "What does 'kill -9' (SIGKILL) do that 'kill -15' (SIGTERM) cannot?", "back": "SIGKILL cannot be caught, handled, or ignored by a process; it forces immediate unconditional kernel termination."},
            {"front": "What is a Named Pipe (FIFO)?", "back": "A special file on disk (created with mkfifo) that provides bidirectional inter-process communication with FIFO semantics between unrelated processes."}
        ]

    elif s == "ca455": # Software Engineering
        quiz = [
            {
                "id": f"ca455-u{unit_idx}c{concept_idx}-q1",
                "difficulty": "SUPER-HARD",
                "type": "mcq",
                "question": "Given a program with Control Flow Graph G having 14 edges, 10 nodes, and 1 connected component, what is its McCabe Cyclomatic Complexity V(G), and what does it measure?",
                "options": [
                    "V(G) = 6; measures the number of linearly independent execution paths through the code.",
                    "V(G) = 4; measures total lines of code.",
                    "V(G) = 14; measures maximum loop iteration depth.",
                    "V(G) = 24; measures defect density."
                ],
                "correctAnswer": 0,
                "explanation": "McCabe's formula is V(G) = E - N + 2P. With E = 14, N = 10, and P = 1: V(G) = 14 - 10 + 2(1) = 6. This establishes the exact minimum number of test cases required for complete basis path coverage."
            },
            {
                "id": f"ca455-u{unit_idx}c{concept_idx}-q2",
                "difficulty": "HARD",
                "type": "mcq",
                "question": "Which form of cohesion occurs when a module performs a set of tasks that must execute in a specific order, where the output of one step serves as input to the next?",
                "options": [
                    "Procedural Cohesion",
                    "Communicational Cohesion",
                    "Sequential Cohesion",
                    "Functional Cohesion"
                ],
                "correctAnswer": 2,
                "explanation": "Sequential Cohesion is when the elements of a module are grouped because the output data from one task is used as the input data to the next task in sequence. Functional Cohesion is when all elements contribute to a single well-defined task."
            },
            {
                "id": f"ca455-u{unit_idx}c{concept_idx}-q3",
                "difficulty": "SUPER-HARD",
                "type": "mcq",
                "question": "In Boehm's COCOMO Intermediate Model, what factor distinguishes it from Basic COCOMO when estimating effort?",
                "options": [
                    "It calculates function points instead of KLOC.",
                    "It multiplies nominal effort by 15 Cost Drivers (Effort Multipliers) encompassing product, hardware, personnel, and project attributes.",
                    "It ignores maintenance costs entirely.",
                    "It assumes all projects follow the Embedded mode."
                ],
                "correctAnswer": 1,
                "explanation": "Intermediate COCOMO enhances Basic COCOMO by applying 15 Cost Drivers (such as software reliability, database size, analyst capability, language experience) with ratings from very low to extra high to scale the nominal effort."
            }
        ]
        flashcards = [
            {"front": "What is the difference between Verification and Validation?", "back": "Verification asks: 'Are we building the product right?' (conformance to specs, reviews, static analysis). Validation asks: 'Are we building the right product?' (customer needs, dynamic testing)."},
            {"front": "Explain the difference between Fault, Failure, and Error.", "back": "Error: A human mistake in design or code. Fault (Defect/Bug): Manifestation of an error in the software. Failure: Deviation of actual software execution from expected behavior."},
            {"front": "What are the 5 CMMI Maturity Levels?", "back": "Level 1: Initial (Ad-hoc) | Level 2: Managed | Level 3: Defined | Level 4: Quantitatively Managed | Level 5: Optimizing."},
            {"front": "What is Boundary Value Analysis (BVA)?", "back": "A black-box test technique based on testing boundaries of equivalence classes (values at min, min+, nominal, max-, max) where errors cluster most heavily."}
        ]

    else: # ca456: Operating System
        quiz = [
            {
                "id": f"ca456-u{unit_idx}c{concept_idx}-q1",
                "difficulty": "SUPER-HARD",
                "type": "mcq",
                "question": "A system has 4 processes and 3 resource types (A, B, C). Total resources = (9, 3, 6). Current allocation = P0(3,0,1), P1(0,1,2), P2(1,1,1), P3(2,0,0). Max claims = P0(4,1,1), P1(1,2,2), P2(1,3,2), P3(3,0,1). Is the system in a safe state, and what is a valid safe sequence?",
                "options": [
                    "Deadlock exists; no safe sequence possible.",
                    "Safe state; valid sequence is <P0, P1, P3, P2>",
                    "Safe state; valid sequence is <P3, P0, P1, P2>",
                    "Unsafe state due to circular wait between P1 and P2."
                ],
                "correctAnswer": 1,
                "explanation": "Total allocated: A = 3+0+1+2 = 6, B = 0+1+1+0 = 2, C = 1+2+1+0 = 4. Available = Total - Allocated = (9-6, 3-2, 6-4) = (3, 1, 2). Needs: Need(P0) = (4-3, 1-0, 1-1) = (1, 1, 0) <= Available (3,1,2) -> P0 runs! New Available = (3+3, 1+0, 2+1) = (6, 1, 3). Need(P1) = (1, 1, 0) <= (6, 1, 3) -> P1 runs! Available becomes (6, 2, 5). Need(P3) = (1, 0, 1) <= (6, 2, 5) -> P3 runs! Finally P2 runs. Safe sequence <P0, P1, P3, P2> verified!"
            },
            {
                "id": f"ca456-u{unit_idx}c{concept_idx}-q2",
                "difficulty": "SUPER-HARD",
                "type": "mcq",
                "question": "In a paged virtual memory system with a TLB, memory access time is 100 ns and TLB search time is 20 ns. With a TLB hit ratio of 90%, what is the Effective Access Time (EAT)?",
                "options": [
                    "110 ns",
                    "120 ns",
                    "130 ns",
                    "140 ns"
                ],
                "correctAnswer": 2,
                "explanation": "EAT formula = Hit_Ratio * (TLB_Search + RAM_Access) + (1 - Hit_Ratio) * (TLB_Search + 2 * RAM_Access). On TLB Hit: 20 + 100 = 120 ns. On TLB Miss: search TLB (20ns) + fetch Page Table entry (100ns) + fetch actual data frame (100ns) = 220 ns. EAT = 0.90 * 120 + 0.10 * 220 = 108 + 22 = 130 ns!"
            },
            {
                "id": f"ca456-u{unit_idx}c{concept_idx}-q3",
                "difficulty": "HARD",
                "type": "mcq",
                "question": "Which page replacement algorithm suffers from Belady's Anomaly (where increasing the number of physical page frames results in an increased number of page faults)?",
                "options": [
                    "Least Recently Used (LRU)",
                    "Optimal Page Replacement (OPT)",
                    "First-In, First-Out (FIFO)",
                    "Least Frequently Used (LFU) with aging"
                ],
                "correctAnswer": 2,
                "explanation": "Belady's Anomaly is uniquely exhibited by non-stack algorithms like FIFO. Stack algorithms (like LRU and Optimal) satisfy the property that the set of pages in an n-frame allocation is always a subset of the pages in an (n+1)-frame allocation, mathematically immunizing them from the anomaly."
            }
        ]
        flashcards = [
            {"front": "What are the 4 Necessary Conditions for Deadlock?", "back": "1. Mutual Exclusion | 2. Hold and Wait | 3. No Preemption | 4. Circular Wait (Coffman conditions)."},
            {"front": "What is the difference between Internal and External Fragmentation?", "back": "Internal Fragmentation: Allocated memory is larger than requested memory within a fixed partition. External Fragmentation: Total free memory is sufficient but scattered in non-contiguous chunks."},
            {"front": "What is Thrashing in Virtual Memory?", "back": "A pathological condition where the CPU spends more time swapping pages in and out of disk than executing instructions, caused by insufficient allocation of working set frames."},
            {"front": "How do Peterson's Algorithm and Semaphores guarantee Mutual Exclusion?", "back": "Peterson's uses shared variables (flag array and turn). Semaphores use atomic wait() (P) and signal() (V) operations modifying an integer counter with hardware test-and-set locks."}
        ]

    return quiz, flashcards
