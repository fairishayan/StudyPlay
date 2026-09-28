# diagrams_ca453.py
# High-definition educational SVG diagrams for CA453: C Programming
from diagram_primitives import svg_canvas, card_box, pill_node, connector, footer_banner

def get_ca453_diagram(concept_id):
    cid = concept_id.lower()

    if "computer-fundamentals" in cid:
        content = f'''
        <!-- Von Neumann Architecture -->
        {card_box(40, 75, 250, 240, "Central Processing Unit", "Core Processing Engine", [
            ("ALU", "Arithmetic Logic Unit (Calculations)"),
            ("Control Unit", "Fetches & decodes instructions"),
            ("Registers", "High-speed internal storage"),
            ("PC", "Holds address of next instruction"),
            ("IR", "Holds current instruction"),
            ("AC", "Primary calculation accumulator")
        ], "#6366f1", "#1e1b4b")}

        {connector(290, 150, 370, 150, "Address Bus", "#818cf8", "mIndigo")}
        {connector(370, 240, 290, 240, "Data Bus", "#06b6d4", "mCyan")}

        {card_box(370, 75, 260, 240, "Primary Memory (RAM)", "Stored-Program Concept", [
            ("Unified Space", "Stores BOTH program instructions & data"),
            ("Linear Addr", "Byte-addressable memory cells"),
            ("MAR", "Memory Address Register interface"),
            ("MDR", "Memory Data Register interface"),
            ("Volatility", "RAM contents lost on power-off"),
            ("Bottleneck", "Von Neumann memory bus bottleneck")
        ], "#06b6d4", "#155e75")}

        {connector(630, 195, 710, 195, "I/O Bus", "#10b981", "mEmerald")}

        {card_box(710, 75, 170, 240, "I/O Devices", "Peripherals", [
            ("Input", "Keyboard, Mouse"),
            ("Output", "Monitor, Printer"),
            ("Secondary", "HDD, SSD Storage"),
            ("Interface", "Port Controllers")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Von Neumann Stored-Program Concept (1945)", "The fundamental architecture of modern general-purpose computers: programs and data share the same unified memory space.")}
        '''
        return svg_canvas("Von Neumann Computer Architecture Model", "CPU (ALU & CU), Unified Primary Memory, and I/O System Interconnects", [
            ("CPU Engine", "#6366f1", "card"),
            ("Memory Unit", "#06b6d4", "card"),
            ("Peripherals", "#10b981", "card")
        ], content)

    elif "network" in cid:
        content = f'''
        <!-- Network Topologies Comparison -->
        {card_box(40, 75, 250, 240, "Star Topology", "Hub / Switch Centered", [
            ("Center", "Central Switch / Hub controller"),
            ("Nodes", "Each device has dedicated point-to-point link"),
            ("Resilience", "Single cable break affects only that node"),
            ("Failure", "Central switch failure brings down network"),
            ("Cabling", "Requires high cable length"),
            ("Standard", "Modern Ethernet 10/100/1000Base-T")
        ], "#6366f1", "#1e1b4b")}

        {card_box(320, 75, 260, 240, "Mesh Topology (Full)", "Maximum Redundancy", [
            ("Formula", "N × (N - 1) / 2 physical links for N nodes"),
            ("For 6 Nodes", "6 × 5 / 2 = 15 dedicated links!"),
            ("Reliability", "Zero traffic bottlenecks; highest fault tolerance"),
            ("Privacy", "Every point-to-point link is private"),
            ("Drawback", "Extremely expensive cabling and I/O ports"),
            ("Use Case", "WAN backbones, critical military grids")
        ], "#06b6d4", "#155e75")}

        {card_box(610, 75, 270, 240, "Bus & Ring Topologies", "Shared Medium Models", [
            ("Bus", "Single linear backbone cable with terminators"),
            ("Collision", "Shared CSMA/CD collision domain"),
            ("Ring", "Tokens circulate unidirectionally around ring"),
            ("Latency", "Token delay increases with node count"),
            ("Hybrid", "Tree topology (hierarchical Star-Bus)"),
            ("FDDI", "Dual-ring counter-rotating fault tolerance")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Network Topology Trade-off Analysis", "Mesh maximizes fault tolerance at extreme cost; Star provides practical cost-effective isolation and dominates enterprise LANs.")}
        '''
        return svg_canvas("Computer Network Topologies: Star, Mesh, Bus & Ring", "Point-to-point dedicated links, multi-drop backbones, and fault tolerance comparisons", [
            ("Star Network", "#6366f1", "card"),
            ("Mesh Redundancy", "#06b6d4", "card"),
            ("Ring / Bus", "#10b981", "card")
        ], content)

    elif "tcp" in cid or "internet" in cid:
        content = f'''
        <!-- TCP/IP vs OSI Encapsulation -->
        {card_box(50, 75, 360, 240, "OSI 7-Layer Model", "ISO Theoretical Standard", [
            ("7. Application", "HTTP, SMTP, FTP, DNS (User interfaces)"),
            ("6. Presentation", "Data encryption, SSL/TLS, ASCII encoding"),
            ("5. Session", "Dialog management, RPC token sync"),
            ("4. Transport", "End-to-end reliability, TCP/UDP ports"),
            ("3. Network", "Logical IP addressing & packet routing"),
            ("2. Data Link", "MAC addressing, Ethernet framing, CRC check"),
            ("1. Physical", "Cables, optical fiber, wireless bit signaling")
        ], "#6366f1", "#1e1b4b")}

        {connector(410, 195, 490, 195, "maps to", "#818cf8", "mIndigo")}

        {card_box(490, 75, 380, 240, "TCP/IP Protocol Suite", "ARPANET Production Architecture", [
            ("Application", "Combined Application, Presentation & Session"),
            ("Transport", "TCP (Reliable Byte Stream) / UDP (Datagram)"),
            ("Internet", "IPv4, IPv6, ICMP, ARP routing"),
            ("Network Access", "Ethernet, Wi-Fi 802.11, Device Drivers"),
            ("PDU Flow", "Data -> Segment -> Packet -> Frame -> Bits"),
            ("Header Add", "Each layer prepends its control header (Encapsulation)")
        ], "#06b6d4", "#155e75")}

        {footer_banner(50, 335, 820, 55, "Data Encapsulation & Decapsulation Principle", "At sender: Headers are prepended as data moves DOWN the stack. At receiver: Headers are stripped as data moves UP the stack.")}
        '''
        return svg_canvas("TCP/IP vs OSI 7-Layer Protocol Suite Architecture", "Protocol mapping, layer boundaries, and packet encapsulation / decapsulation workflow", [
            ("OSI Model", "#6366f1", "card"),
            ("TCP/IP Model", "#06b6d4", "card"),
            ("Encapsulation", "#38bdf8", "line")
        ], content)

    elif "overview-of-c" in cid or "compilation" in cid:
        content = f'''
        <!-- 4-Stage Compilation Pipeline -->
        {card_box(40, 75, 180, 240, "1. Preprocessor", "cpp Engine", [
            ("Input", "source.c (Raw C code)"),
            ("Header Exp", "Replaces #include with file"),
            ("Macro Sub", "Expands #define constants"),
            ("Cond Comp", "Resolves #ifdef / #endif"),
            ("Strip", "Removes all C comments"),
            ("Output", "source.i (Preprocessed)")
        ], "#6366f1", "#1e1b4b")}

        {connector(220, 195, 270, 195, "cc1", "#818cf8", "mIndigo")}

        {card_box(270, 75, 180, 240, "2. Compiler Proper", "cc1 Engine", [
            ("Input", "source.i"),
            ("Lexical", "Tokenizes keyword stream"),
            ("Syntax/AST", "Builds abstract syntax tree"),
            ("Semantics", "Type checking & scoping"),
            ("Optimizer", "Dead code elimination"),
            ("Output", "source.s (Assembly code)")
        ], "#06b6d4", "#155e75")}

        {connector(450, 195, 500, 195, "as", "#06b6d4", "mCyan")}

        {card_box(500, 75, 180, 240, "3. Assembler", "as Engine", [
            ("Input", "source.s (Assembly)"),
            ("Translation", "Mnemonic to machine opcodes"),
            ("Relocation", "Symbol table generation"),
            ("Sections", ".text, .data, .bss, .rodata"),
            ("Format", "ELF relocatable binary"),
            ("Output", "source.o (Object file)")
        ], "#10b981", "#064e3b")}

        {connector(680, 195, 730, 195, "ld", "#10b981", "mEmerald")}

        {card_box(730, 75, 160, 240, "4. Linker", "ld Engine", [
            ("Input", "source.o + libc.a/so"),
            ("Resolves", "External symbols (printf)"),
            ("Relocates", "Combines sections"),
            ("Output", "a.out (Executable)")
        ], "#a855f7", "#581c87")}

        {footer_banner(40, 335, 850, 55, "Command-Line Equivalence: gcc -v main.c", "The compiler driver gcc coordinates cpp (preprocessing) -> cc1 (compiling) -> as (assembling) -> collect2/ld (linking).")}
        '''
        return svg_canvas("C Program Compilation & Linking Pipeline Architecture", "Four distinct phases: Preprocessor (.i) -> Compiler (.s) -> Assembler (.o) -> Linker (ELF Executable)", [
            ("Preprocessor", "#6366f1", "card"),
            ("Compiler", "#06b6d4", "card"),
            ("Assembler", "#10b981", "card"),
            ("Linker", "#a855f7", "card")
        ], content)

    elif "data-types" in cid:
        content = f'''
        <!-- Data Types Memory Sizes -->
        {card_box(40, 75, 260, 240, "Integer Types (Signed/Unsigned)", "Fixed-Width Integers", [
            ("char", "1 Byte (8 bits) | -128 to +127"),
            ("unsigned char", "1 Byte | 0 to 255"),
            ("short int", "2 Bytes (16 bits) | -32,768 to +32,767"),
            ("int", "4 Bytes (32 bits) | -2.14B to +2.14B"),
            ("unsigned int", "4 Bytes | 0 to 4,294,967,295"),
            ("long long", "8 Bytes (64 bits) | ±9.22 × 10^18"),
            ("Representation", "Stored in Two's Complement binary")
        ], "#6366f1", "#1e1b4b")}

        {card_box(320, 75, 270, 240, "Floating-Point Types", "IEEE 754 Standard", [
            ("float", "4 Bytes (32 bits) | ~7 decimal digits"),
            ("float layout", "1 Sign bit, 8 Exponent, 23 Mantissa"),
            ("double", "8 Bytes (64 bits) | ~15-17 decimal digits"),
            ("double layout", "1 Sign bit, 11 Exponent, 52 Mantissa"),
            ("long double", "16 Bytes (80/128 bits) | Extended prec"),
            ("Precision", "Subject to rounding errors (e.g. 0.1 + 0.2)"),
            ("Special", "+Inf, -Inf, NaN (Not a Number)")
        ], "#06b6d4", "#155e75")}

        {card_box(610, 75, 270, 240, "Derived & Pointer Types", "Address Variables", [
            ("Pointers", "8 Bytes on 64-bit arch (4 Bytes on 32-bit)"),
            ("char*", "Points to character/string buffer"),
            ("int*", "Address incremented by 4 bytes on ptr++"),
            ("void*", "Generic pointer; cannot be dereferenced"),
            ("NULL", "Defined as ((void*)0) in stddef.h"),
            ("size_t", "Unsigned integer type of sizeof operator")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Data Type Sizing Rule: sizeof(char) <= sizeof(short) <= sizeof(int) <= sizeof(long) <= sizeof(long long)", "Guaranteed by ISO C standard; actual sizes vary between 32-bit (ILP32) and 64-bit (LP64) architectures.")}
        '''
        return svg_canvas("C Fundamental Data Types, Sizes & Memory Encodings", "Integer Two's Complement, IEEE 754 Floating-Point, and 64-Bit Pointer Representations", [
            ("Integer Types", "#6366f1", "card"),
            ("Floating Point", "#06b6d4", "card"),
            ("Pointers", "#10b981", "card")
        ], content)

    elif "pointer" in cid:
        content = f'''
        <!-- Pointer Memory Indirection -->
        {card_box(50, 75, 240, 240, "Primitive Variable", "Stack Memory Cell", [
            ("Variable", "int a = 100;"),
            ("Address", "&a = 0x7ffd90 (Stack address)"),
            ("Size", "sizeof(a) = 4 Bytes"),
            ("Value", "Binary 00000000 00000000 ... 100"),
            ("Scope", "Local stack frame lifetime")
        ], "#6366f1", "#1e1b4b")}

        {connector(290, 195, 370, 195, "*ptr deref", "#818cf8", "mIndigo")}

        {card_box(370, 75, 250, 240, "Single Pointer (int*)", "Stores Address of a", [
            ("Declaration", "int *ptr = &a;"),
            ("Address", "&ptr = 0x7ffd98"),
            ("Value Stored", "0x7ffd90 (Address of a)"),
            ("Dereference", "*ptr resolves to 100"),
            ("Modification", "*ptr = 200 mutates a!"),
            ("Arithmetic", "ptr + 1 adds 4 bytes (sizeof(int))")
        ], "#06b6d4", "#155e75")}

        {connector(620, 195, 700, 195, "**dptr resolve", "#06b6d4", "mCyan")}

        {card_box(700, 75, 180, 240, "Double Pointer (int**)", "Pointer to Pointer", [
            ("Decl", "int **dptr = &ptr;"),
            ("Addr", "&dptr = 0x7ffda0"),
            ("Stores", "0x7ffd98 (&ptr)"),
            ("*dptr", "Resolves to ptr"),
            ("**dptr", "Resolves to a (100)")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 830, 55, "Pointer Arithmetic Axiom: (ptr + n) == (char*)ptr + (n × sizeof(*ptr))", "Adding 1 to an int* advances the address by 4 bytes; adding 1 to a double* advances the address by 8 bytes.")}
        '''
        return svg_canvas("Pointer Indirection & Multi-Level Addressing in Memory", "Address-of operator (&), Dereference operator (*), and Double Pointers (pointer-to-pointer)", [
            ("Scalar Object", "#6366f1", "card"),
            ("Pointer (int*)", "#06b6d4", "card"),
            ("Double Pointer", "#10b981", "card")
        ], content)

    elif "structure" in cid:
        content = f'''
        <!-- Structure Memory Padding -->
        {card_box(50, 75, 360, 240, "Struct Memory Padding (64-Bit)", "Compiler Alignment Rules", [
            ("Declaration", "struct Bad { char a; int b; char c; double d; };"),
            ("Byte 0", "char a (1 Byte)"),
            ("Bytes 1-3", "3 BYTES PADDING (to align int b to 4B)"),
            ("Bytes 4-7", "int b (4 Bytes)"),
            ("Byte 8", "char c (1 Byte)"),
            ("Bytes 9-15", "7 BYTES PADDING (to align double d to 8B)"),
            ("Bytes 16-23", "double d (8 Bytes)"),
            ("Total Size", "sizeof(struct Bad) = 24 BYTES! (10B wasted)")
        ], "#f43f5e", "#881337")}

        {connector(410, 195, 490, 195, "reorder", "#10b981", "mEmerald")}

        {card_box(490, 75, 380, 240, "Optimized Struct Layout", "Zero Wasted Padding", [
            ("Declaration", "struct Good { double d; int b; char a; char c; };"),
            ("Bytes 0-7", "double d (8 Bytes - natural 8B alignment)"),
            ("Bytes 8-11", "int b (4 Bytes - natural 4B alignment)"),
            ("Byte 12", "char a (1 Byte)"),
            ("Byte 13", "char c (1 Byte)"),
            ("Bytes 14-15", "2 Bytes tail padding (align to largest = 8B)"),
            ("Total Size", "sizeof(struct Good) = 16 BYTES!"),
            ("Memory Saved", "33% RAM footprint reduction per instance")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 820, 55, "Hardware Alignment Rule", "CPUs fetch memory in word chunks (4 or 8 bytes); accessing unaligned data causes multi-cycle penalties or hardware bus faults.")}
        '''
        return svg_canvas("C Structure Memory Alignment & Byte Padding Optimization", "How compiler struct padding rules affect memory footprint and cache utilization", [
            ("Unoptimized Struct", "#f43f5e", "card"),
            ("Optimized Struct", "#10b981", "card"),
            ("Alignment Saving", "#34d399", "line")
        ], content)

    elif "function" in cid or "call" in cid:
        content = f'''
        <!-- Call Stack Frames -->
        {card_box(50, 75, 230, 240, "Function Call (main)", "Initial Stack Frame", [
            ("Caller", "Operating System / crt0"),
            ("Local Vars", "int x = 10, y = 20"),
            ("Return Addr", "Address in __libc_start_main"),
            ("Frame Ptr", "Saved RBP of caller"),
            ("Stack Ptr", "RSP points to top of stack"),
            ("Action", "Pushes args and executes CALL")
        ], "#6366f1", "#1e1b4b")}

        {connector(280, 195, 360, 195, "CALL foo(x, y)", "#818cf8", "mIndigo")}

        {card_box(360, 75, 250, 240, "Callee Frame: foo()", "Activation Record Created", [
            ("Parameters", "Passed via registers (RDI, RSI) / stack"),
            ("Return Addr", "Pushed to stack by CALL instruction"),
            ("Saved RBP", "push rbp; mov rbp, rsp (Prologue)"),
            ("Local Space", "sub rsp, 32 (Allocates locals)"),
            ("Execution", "Computes result"),
            ("Epilogue", "mov rsp, rbp; pop rbp; ret")
        ], "#06b6d4", "#155e75")}

        {connector(610, 195, 690, 195, "RET returns", "#10b981", "mEmerald")}

        {card_box(690, 75, 190, 240, "Stack Deallocation", "Automatic Cleanup", [
            ("RSP Adjusted", "Stack space freed instantly"),
            ("Return Value", "Returned in RAX register"),
            ("Scope Expiry", "Local variables destroyed"),
            ("Dangling Ptr", "Returning &local is fatal!")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 830, 55, "Call Stack Axiom: Automatic Variable Lifetime", "Local variables are allocated upon entering function activation scope and automatically deallocated when the stack frame unwinds on return.")}
        '''
        return svg_canvas("Function Call Stack Frames & Activation Records", "Stack frame growth, parameter passing, return address push, and prologue/epilogue cleanup", [
            ("Caller Frame", "#6366f1", "card"),
            ("Callee Activation", "#06b6d4", "card"),
            ("Stack Unwinding", "#10b981", "card")
        ], content)

    elif "software-and-dos" in cid or "dos" in cid or "operating-system" in cid:
        content = f'''
        {card_box(40, 75, 270, 240, "System Software", "Controls Hardware Resources", [
            ("OS Kernel", "Core: process, memory, I/O management"),
            ("Device Drivers", "Hardware abstraction layer (HAL)"),
            ("Shell / CLI", "User command interpreter interface"),
            ("File System", "FAT32, NTFS, ext4 hierarchy"),
            ("MS-DOS", "Single-user, single-tasking CLI OS"),
            ("DOS Commands", "dir, copy, del, cd, cls, type"),
            ("Boot Sequence", "BIOS → MBR → Bootloader → Kernel")
        ], "#6366f1", "#1e1b4b")}

        {connector(310, 195, 390, 195, "runs on", "#818cf8", "mIndigo")}

        {card_box(390, 75, 260, 240, "Application Software", "End-User Programs", [
            ("General Purpose", "Word, Excel, Browsers, IDEs"),
            ("Special Purpose", "CAD, Accounting, ERP systems"),
            ("Packaged SW", "Pre-built commercial software"),
            ("Custom SW", "Tailored enterprise solutions"),
            ("Firmware", "Embedded in ROM/Flash hardware"),
            ("Middleware", "API bridge between OS and apps"),
            ("Utilities", "Compression, Antivirus, Backup")
        ], "#06b6d4", "#155e75")}

        {connector(650, 195, 720, 195, "interacts", "#10b981", "mEmerald")}

        {card_box(720, 75, 160, 240, "Programming Lang", "Source → Binary", [
            ("Low Level", "Machine code, ASM"),
            ("Mid Level", "C, C++"),
            ("High Level", "Python, Java"),
            ("4GL", "SQL, MATLAB"),
            ("Compiled", "→ .exe binary"),
            ("Interpreted", "→ runtime eval")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Software Classification Hierarchy", "System software manages hardware; application software provides user functionality built atop the OS abstraction.")}
        '''
        return svg_canvas("Software Classification: System, Application & Programming Languages", "OS types, DOS commands, software categories, and language level hierarchy", [
            ("System Software", "#6366f1", "card"),
            ("Application SW", "#06b6d4", "card"),
            ("Programming Lang", "#10b981", "card")
        ], content)

    elif "assignment-operator" in cid or "operator" in cid or "expression" in cid:
        content = f'''
        {card_box(40, 75, 260, 240, "Assignment & Arithmetic Ops", "Core C Operators", [
            ("=", "Simple assignment:  a = b"),
            ("+=, -=", "Compound:  a += 5  (a = a + 5)"),
            ("*=, /=, %=", "Compound multiply/divide/mod"),
            ("++a / a++", "Pre/post increment (returns differ)"),
            ("--a / a--", "Pre/post decrement operators"),
            ("Precedence", "BODMAS: (), *, /, +, -, ="),
            ("Associativity", "Assignment is right-to-left (RTL)")
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 195, 380, 195, "combines with", "#818cf8", "mIndigo")}

        {card_box(380, 75, 260, 240, "Relational & Logical Ops", "Boolean Evaluation", [
            ("==, !=", "Equality / Inequality check"),
            ("<, >, <=, >=", "Numeric comparison returns 0 or 1"),
            ("&&", "Logical AND (short-circuit eval)"),
            ("||", "Logical OR  (short-circuit eval)"),
            ("!", "Logical NOT  (negation)"),
            ("Ternary ?:", "cond ? val_t : val_f"),
            ("Comma ,", "Evaluates both; returns right")
        ], "#06b6d4", "#155e75")}

        {connector(640, 195, 710, 195, "bitwise ops", "#10b981", "mEmerald")}

        {card_box(710, 75, 170, 240, "Bitwise Ops", "Hardware Bit Ops", [
            ("& (AND)", "Bit mask/clear"),
            ("| (OR)", "Bit set flag"),
            ("^ (XOR)", "Toggle bits"),
            ("~ (NOT)", "Invert bits"),
            ("<< N", "Left shift ×2^N"),
            (">> N", "Right shift ÷2^N"),
            ("sizeof()", "Returns byte size")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Operator Precedence Rule", "Always use parentheses to clarify intent; never rely on implicit precedence order in complex expressions.")}
        '''
        return svg_canvas("C Operators: Assignment, Relational, Logical & Bitwise", "Complete operator taxonomy with precedence rules and associativity direction", [
            ("Assignment / Arithmetic", "#6366f1", "card"),
            ("Relational / Logical", "#06b6d4", "card"),
            ("Bitwise Ops", "#10b981", "card")
        ], content)

    elif "decision-control" in cid or "conditional" in cid or "if" in cid or "switch" in cid:
        content = f'''
        {card_box(40, 75, 270, 240, "if / else if / else", "Conditional Branching", [
            ("if (cond)", "Execute block only when cond is true"),
            ("else if", "Test alternative condition (chain)"),
            ("else", "Default block when all conds false"),
            ("Nested if", "if inside another if block"),
            ("Dangling else", "Ambiguity: matches nearest if"),
            ("Short-circuit", "&& stops at first false; || at first true"),
            ("Side Effects", "Avoid assignments inside conditions")
        ], "#6366f1", "#1e1b4b")}

        {connector(310, 195, 390, 195, "or use", "#818cf8", "mIndigo")}

        {card_box(390, 75, 260, 240, "switch / case", "Multi-branch Dispatch", [
            ("switch(expr)", "Evaluates integral/char expression"),
            ("case val:", "Match label — falls through by default"),
            ("break;", "Exits switch block; REQUIRED to stop fall-through"),
            ("default:", "Executes if no case matches"),
            ("Fall-through", "Intentional: multiple cases same code"),
            ("Allowed Types", "int, char, enum (NOT float/string)"),
            ("Optimization", "Compiler may use jump table for dense cases")
        ], "#06b6d4", "#155e75")}

        {connector(650, 195, 720, 195, "vs goto", "#a855f7", "mPurple")}

        {card_box(720, 75, 160, 240, "goto & labels", "Unconditional Jump", [
            ("goto label;", "Jumps to label:"),
            ("Scope", "Within same function"),
            ("Use Case", "Error cleanup exit"),
            ("Risk", "Spaghetti code"),
            ("Alternative", "break / continue"),
            ("Linux kernel", "Uses goto for cleanup"),
            ("Avoid in", "Normal app logic")
        ], "#a855f7", "#581c87")}

        {footer_banner(40, 335, 840, 55, "Decision Control Flow", "Prefer if-else for boolean logic; switch for fixed-value dispatch; avoid goto except in controlled cleanup paths.")}
        '''
        return svg_canvas("C Decision Control: if-else, switch-case & goto Mechanics", "Branching constructs, fall-through semantics, and conditional evaluation rules", [
            ("if / else chain", "#6366f1", "card"),
            ("switch / case", "#06b6d4", "card"),
            ("goto / labels", "#a855f7", "card")
        ], content)

    elif "loop" in cid or "iteration" in cid or "for" in cid or "while" in cid:
        content = f'''
        {card_box(40, 75, 270, 240, "for Loop", "Count-Controlled Iteration", [
            ("Syntax", "for (init; condition; update)"),
            ("init", "Runs once before loop starts"),
            ("condition", "Checked before EACH iteration"),
            ("update", "Executed after each iteration body"),
            ("break;", "Exit loop immediately"),
            ("continue;", "Skip to next iteration step"),
            ("Nested for", "O(n²) matrix/2D array traversal")
        ], "#6366f1", "#1e1b4b")}

        {connector(310, 195, 390, 195, "vs", "#818cf8", "mIndigo")}

        {card_box(390, 75, 260, 240, "while & do-while", "Condition-Controlled Loops", [
            ("while (cond)", "Tests condition BEFORE body runs"),
            ("do { } while", "Tests condition AFTER body runs (1+ iterations)"),
            ("Entry-Controlled", "while: may execute zero times"),
            ("Exit-Controlled", "do-while: always executes once"),
            ("Infinite loop", "while(1) or for(;;) with no break"),
            ("EOF pattern", "while((c=getchar()) != EOF)"),
            ("Sentinel loop", "Loop until special value encountered")
        ], "#06b6d4", "#155e75")}

        {connector(650, 195, 720, 195, "array use", "#10b981", "mEmerald")}

        {card_box(720, 75, 160, 240, "Array Loops", "Traversal Patterns", [
            ("Linear scan", "for i in 0..n-1"),
            ("Reverse", "for i in n-1..0"),
            ("2D nested", "Row × Col matrix"),
            ("String scan", "while s[i] != 0"),
            ("Sum/Max", "Accumulator pattern"),
            ("Search", "Break on match"),
            ("Pointer++", "Equivalent traversal")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Loop Selection Guideline", "for: known iteration count. while: condition-first. do-while: must run at least once.")}
        '''
        return svg_canvas("C Loop Constructs: for, while, do-while & Iteration Patterns", "Loop control mechanics, break/continue, and array traversal patterns", [
            ("for loop", "#6366f1", "card"),
            ("while / do-while", "#06b6d4", "card"),
            ("Array Traversal", "#10b981", "card")
        ], content)

    elif "array" in cid or "string" in cid:
        content = f'''
        {card_box(40, 75, 270, 240, "1D Array Mechanics", "Contiguous Memory Block", [
            ("Declaration", "int arr[10]; — 10 ints"),
            ("Zero-indexed", "arr[0] to arr[n-1]"),
            ("Memory", "Elements stored contiguously"),
            ("Base Address", "arr is pointer to arr[0]"),
            ("arr[i] equiv", "*(arr + i) — pointer arithmetic"),
            ("Initialization", "int a[] = {1,2,3} — size inferred"),
            ("Out-of-Bounds", "Undefined behavior — no runtime check!")
        ], "#6366f1", "#1e1b4b")}

        {connector(310, 195, 390, 195, "extends to", "#818cf8", "mIndigo")}

        {card_box(390, 75, 260, 240, "2D Arrays & Strings", "Multi-dim & char Arrays", [
            ("2D Syntax", "int mat[3][4]; — 3 rows × 4 cols"),
            ("Storage", "Row-major order in C"),
            ("mat[i][j]", "= *(mat + i*4 + j)"),
            ("String", "char s[] = \"hello\"; + '\\0' terminator"),
            ("strlen(s)", "Count until null terminator"),
            ("strcpy", "Copies including null terminator"),
            ("strcmp", "Returns 0 if equal, <0 or >0 otherwise")
        ], "#06b6d4", "#155e75")}

        {connector(650, 195, 720, 195, "vs pointer", "#10b981", "mEmerald")}

        {card_box(720, 75, 160, 240, "Array vs Pointer", "Key Differences", [
            ("sizeof", "Array: total bytes; Ptr: 8 bytes"),
            ("arr++", "ILLEGAL — array not assignable"),
            ("ptr++", "LEGAL — moves to next element"),
            ("&arr[0]", "= arr (same base address)"),
            ("char *p", "Points to string literal (read-only)"),
            ("char a[]", "Writable local copy"),
            ("Decay", "Array decays to ptr when passed")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Array Indexing = Pointer Arithmetic", "arr[i] is syntactic sugar for *(arr+i). Arrays decay to pointers when passed to functions — size information is lost.")}
        '''
        return svg_canvas("C Arrays & Strings: Memory Layout, 2D Access & Pointer Equivalence", "Contiguous storage, row-major order, string null-termination, and pointer decay", [
            ("1D Array", "#6366f1", "card"),
            ("2D / Strings", "#06b6d4", "card"),
            ("Pointer Equivalence", "#10b981", "card")
        ], content)

    elif "macro" in cid or "preprocessor" in cid or "include" in cid:
        content = f'''
        {card_box(40, 75, 270, 240, "#define Macros", "Text Substitution", [
            ("#define PI 3.14", "Object-like macro: constant"),
            ("#define SQ(x) ((x)*(x))", "Function-like macro (inline)"),
            ("No type check", "Macros have zero type safety"),
            ("Side effects", "SQ(n++) evaluates n++ twice!"),
            ("Parentheses", "ALWAYS wrap args and expansion"),
            ("#undef NAME", "Undefines a previously set macro"),
            ("Macro vs const", "const preferred for type safety")
        ], "#6366f1", "#1e1b4b")}

        {connector(310, 195, 390, 195, "and", "#818cf8", "mIndigo")}

        {card_box(390, 75, 260, 240, "Conditional Compilation", "#ifdef / #ifndef", [
            ("#include <h>", "System header (angle bracket)"),
            ("#include \"h\"", "User header (quoted path)"),
            ("#ifdef MACRO", "Include block if macro defined"),
            ("#ifndef _H_", "Header guard pattern (prevent re-include)"),
            ("#if / #elif", "Compile-time conditional on value"),
            ("#pragma once", "Modern header guard alternative"),
            ("#error msg", "Halt compilation with message")
        ], "#06b6d4", "#155e75")}

        {connector(650, 195, 720, 195, "phases", "#10b981", "mEmerald")}

        {card_box(720, 75, 160, 240, "Compilation Phases", "Preprocessing Step", [
            ("Phase 1", "Preprocessing → .i"),
            ("Phase 2", "Compilation → .s ASM"),
            ("Phase 3", "Assembling → .o"),
            ("Phase 4", "Linking → exe"),
            ("gcc -E", "Stop after preprocessing"),
            ("gcc -S", "Stop after assembly"),
            ("gcc -c", "Stop after object file")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Preprocessor Execution", "The C preprocessor runs BEFORE compilation, performing text substitution and conditional inclusion. It knows nothing about C types or scope.")}
        '''
        return svg_canvas("C Preprocessor: #define Macros, Conditional Compilation & Build Phases", "Text substitution, header guards, conditional includes, and compilation pipeline", [
            ("#define Macros", "#6366f1", "card"),
            ("Conditional Compile", "#06b6d4", "card"),
            ("Build Pipeline", "#10b981", "card")
        ], content)

    elif "fgetc" in cid or "file" in cid or "stream" in cid or "io" in cid:
        content = f'''
        {card_box(40, 75, 260, 240, "File I/O Functions", "stdio.h — FILE* Interface", [
            ("fopen(path, mode)", "Opens file, returns FILE* or NULL"),
            ("fclose(fp)", "Flushes buffer and closes file"),
            ("fgetc(fp)", "Reads one char, returns EOF at end"),
            ("fputc(c, fp)", "Writes one char to stream"),
            ("fgets(s, n, fp)", "Reads at most n-1 chars, adds \\0"),
            ("fputs(s, fp)", "Writes string without auto newline"),
            ("fprintf/fscanf", "Formatted file read/write")
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 195, 380, 195, "uses modes", "#818cf8", "mIndigo")}

        {card_box(380, 75, 260, 240, "File Open Modes", "r, w, a, rb, wb…", [
            ("\"r\"", "Read-only. File must exist."),
            ("\"w\"", "Write. Creates/truncates file."),
            ("\"a\"", "Append. Creates if not exist."),
            ("\"r+\"", "Read+Write. File must exist."),
            ("\"w+\"", "Read+Write. Truncates file."),
            ("\"rb\"/\"wb\"", "Binary read/write mode"),
            ("NULL check", "Always check fopen() != NULL")
        ], "#06b6d4", "#155e75")}

        {connector(640, 195, 710, 195, "random access", "#10b981", "mEmerald")}

        {card_box(710, 75, 170, 240, "Seek & Tell", "Random Access I/O", [
            ("fseek(fp,off,whence)", "Move file cursor"),
            ("SEEK_SET", "From start of file"),
            ("SEEK_CUR", "From current position"),
            ("SEEK_END", "From end of file"),
            ("ftell(fp)", "Returns current offset"),
            ("rewind(fp)", "Reset cursor to start"),
            ("feof(fp)", "Test end-of-file flag")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "File I/O Safety Rule", "Always check fopen() return for NULL. Always fclose() to flush buffers. Check ferror() after read/write operations.")}
        '''
        return svg_canvas("C File I/O: fopen/fclose, Stream Functions & Random Access", "FILE* interface, open modes, fgetc/fgets, fseek/ftell random access API", [
            ("File Functions", "#6366f1", "card"),
            ("Open Modes", "#06b6d4", "card"),
            ("Seek / Tell", "#10b981", "card")
        ], content)

    else:
        # High-definition default C programming memory diagram
        content = f'''
        {card_box(50, 75, 360, 240, "Process Virtual Memory Segments", "Linux / POSIX ELF Executable", [
            ("Stack [Top]", "Grows DOWNWARD | Local variables, call frames"),
            ("Shared Space", "<--- Unallocated dynamic memory gap --->"),
            ("Heap", "Grows UPWARD | malloc(), calloc(), free()"),
            ("BSS Segment", "Uninitialized static/global vars (zero-filled by OS)"),
            ("Data Segment", "Initialized global & static variables"),
            ("Text Segment", "Read-only compiled CPU machine instructions")
        ], "#6366f1", "#1e1b4b")}

        {connector(410, 195, 490, 195, "dynamic alloc", "#06b6d4", "mCyan")}

        {card_box(490, 75, 380, 240, "Heap Memory Management", "stdlib.h Allocator", [
            ("malloc(size)", "Allocates raw uninitialized memory block"),
            ("calloc(n, s)", "Allocates and clears memory with all zeros"),
            ("realloc(p, s)", "Resizes existing block; moves data if needed"),
            ("free(ptr)", "Returns block to memory manager free bin list"),
            ("Memory Leak", "Forgetting to free() heap memory"),
            ("Double Free", "Calling free() twice on same pointer (crash/exploit)"),
            ("Heap Frag", "Interleaved allocations leave non-contiguous holes")
        ], "#06b6d4", "#155e75")}

        {footer_banner(50, 335, 820, 55, "C Memory Rule: Stack vs Heap Ownership", "Stack variables are automatically reclaimed on function exit; Heap memory persists indefinitely until explicitly released with free().")}
        '''
        return svg_canvas("C Process Virtual Memory Layout & Dynamic Heap Architecture", "Text, Data, BSS, Heap growth, and Stack frame segments in virtual address space", [
            ("Memory Layout", "#6366f1", "card"),
            ("Heap Allocator", "#06b6d4", "card"),
            ("Pointer Reference", "#38bdf8", "line")
        ], content)
