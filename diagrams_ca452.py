# diagrams_ca452.py
# High-definition educational SVG diagrams for CA452: Computer Organization & Architecture
from diagram_primitives import svg_canvas, card_box, pill_node, connector, footer_banner

def get_ca452_diagram(concept_id):
    cid = concept_id.lower()
    
    if "digital-logic" in cid:
        content = f'''
        <!-- Logic Gates Matrix -->
        {card_box(40, 75, 250, 240, "Universal Gates", "NAND & NOR", [
            ("NAND", "F = (A · B)'  | Universal gate"),
            ("NOR", "F = (A + B)'  | Universal gate"),
            ("AND", "F = A · B      | True if both high"),
            ("OR",  "F = A + B      | True if either high"),
            ("NOT", "F = A'         | Complement inverter"),
            ("XOR", "F = A ⊕ B      | Odd parity detector"),
            ("XNOR","F = (A ⊕ B)'   | Equivalence detector")
        ], "#6366f1", "#1e1b4b")}

        <!-- Relationship connector -->
        {connector(290, 195, 370, 195, "synthesizes", "#818cf8", "mIndigo")}

        <!-- Full Adder Realization -->
        {card_box(370, 75, 270, 240, "1-Bit Full Adder Circuit", "Sum & Carry Out", [
            ("Inputs", "A, B, Carry-In (Cin)"),
            ("Sum", "S = A ⊕ B ⊕ Cin (2 XOR gates)"),
            ("Cout", "AB + Cin(A ⊕ B) (AND-OR logic)"),
            ("Half 1", "Sum1 = A ⊕ B, Carry1 = A · B"),
            ("Half 2", "S = Sum1 ⊕ Cin, Carry2 = Sum1 · Cin"),
            ("OR Gate", "Cout = Carry1 + Carry2"),
            ("Delay", "Propagation: 2 XOR levels, 2 AND-OR")
        ], "#06b6d4", "#155e75")}

        {connector(640, 195, 710, 195, "cascades to", "#06b6d4", "mCyan")}

        <!-- Ripple Carry Adder -->
        {card_box(710, 75, 170, 240, "4-Bit RCA", "Parallel Adder", [
            ("Stage 0", "FA0: S0, C1"),
            ("Stage 1", "FA1: S1, C2"),
            ("Stage 2", "FA2: S2, C3"),
            ("Stage 3", "FA3: S3, C4"),
            ("Carry", "Ripple delay = 4 × 2τ"),
            ("CLA", "Lookahead Carry resolves τ")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Hardware Axiom: Universal Gate Completeness", "Any combinational switching function can be realized using solely 2-input NAND gates (minimum 4 NAND gates for 2-input XOR).")}
        '''
        return svg_canvas("Digital Logic Gates & Arithmetic Synthesis Architecture", "Truth table algebra, full adder modular synthesis, and ripple carry cascade", [
            ("Logic Gate", "#6366f1", "card"),
            ("Adder Module", "#06b6d4", "card"),
            ("Signal Flow", "#818cf8", "line")
        ], content)

    elif "combinational" in cid:
        content = f'''
        <!-- 4:1 MUX Card -->
        {card_box(50, 75, 260, 240, "4-to-1 Multiplexer (MUX)", "Data Selector", [
            ("Inputs", "Data: I0, I1, I2, I3 (4 lines)"),
            ("Select", "Control: S1, S0 (2 select lines)"),
            ("Enable", "Active-Low Strobe (E')"),
            ("Boolean", "Y = S1'S0'I0 + S1'S0 I1 +"),
            ("Term 3", "    S1 S0'I2 + S1 S0 I3"),
            ("Function", "Universal function generator"),
            ("Decoder", "Internal 2-to-4 active-high decoder")
        ], "#6366f1", "#1e1b4b")}

        {connector(310, 195, 380, 195, "decodes into", "#818cf8", "mIndigo")}

        <!-- Decoder Box -->
        {card_box(380, 75, 260, 240, "3-to-8 Binary Decoder", "Address Decoding", [
            ("Inputs", "A2, A1, A0 (3 bits)"),
            ("Outputs", "D0 through D7 (8 minterms)"),
            ("Enable", "Chip Select E1, E2', E3'"),
            ("Equations", "Di = m_i (exact minterm)"),
            ("Expansion", "Two 3x8 decoders make 4x16"),
            ("RAM Use", "Selects 1 of 8 memory rows"),
            ("Logic", "Implements any n-variable function")
        ], "#06b6d4", "#155e75")}

        {connector(640, 195, 710, 195, "routes to", "#06b6d4", "mCyan")}

        <!-- DeMUX -->
        {card_box(710, 75, 170, 240, "Demultiplexer", "Data Distributor", [
            ("Input", "Single Data line I"),
            ("Select", "S1, S0 routes to"),
            ("Outputs", "Y0, Y1, Y2, or Y3"),
            ("Identity", "Decoder with E as data")
        ], "#a855f7", "#581c87")}

        {footer_banner(50, 335, 830, 55, "Design Principle: Multiplexers as Universal Logic Modules", "An 2^n-to-1 MUX can synthesize any (n+1)-variable Boolean function without needing external logic gates.")}
        '''
        return svg_canvas("Combinational Logic Modules: Multiplexers & Decoders", "Data selection, address routing, and universal Boolean function generation", [
            ("Multiplexer", "#6366f1", "card"),
            ("Decoder", "#06b6d4", "card"),
            ("Data Bus", "#38bdf8", "line")
        ], content)

    elif "bus" in cid:
        content = f'''
        <!-- Common Bus System Diagram -->
        {card_box(50, 75, 230, 240, "Register Source Bank", "Internal CPU", [
            ("PC", "Program Counter (12-bit)"),
            ("AR", "Address Register (12-bit)"),
            ("IR", "Instruction Register (16-bit)"),
            ("DR", "Data Register (16-bit)"),
            ("AC", "Accumulator (16-bit)"),
            ("TR", "Temporary Register (16-bit)"),
            ("MEM", "Memory Unit 4096x16")
        ], "#6366f1", "#1e1b4b")}

        {connector(280, 195, 360, 195, "MUX Select", "#818cf8", "mIndigo")}

        <!-- Multiplexer Bank -->
        {card_box(360, 75, 230, 240, "Multiplexer Array (MUX)", "16 Multiplexers (8-to-1)", [
            ("Select", "3 Selection lines: S2, S1, S0"),
            ("001", "Selects Program Counter (PC)"),
            ("010", "Selects Address Register (AR)"),
            ("011", "Selects Data Register (DR)"),
            ("100", "Selects Accumulator (AC)"),
            ("101", "Selects Instruction Reg (IR)"),
            ("111", "Selects Memory Unit (M[AR])")
        ], "#06b6d4", "#155e75")}

        {connector(590, 195, 670, 195, "Bus Drive", "#38bdf8", "mCyan")}

        <!-- Destination Registers -->
        {card_box(670, 75, 210, 240, "Common 16-Bit Bus", "Destination Latch", [
            ("Bus", "16 parallel signal lines"),
            ("Control", "Load (LD) asserted on clock"),
            ("Transfer", "R2 <-- R1 in 1 clock cycle"),
            ("ALU", "AC & DR input to Adder"),
            ("Memory", "M[AR] <-- Bus on WRITE"),
            ("High-Z", "Three-state buffer isolation")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 830, 55, "Bus Transfer Rule: Single Driver Protocol", "Only ONE register/memory unit drives the common bus at any instant, selected by S2,S1,S0; multiple registers can simultaneously assert LD to capture the bus data.")}
        '''
        return svg_canvas("Common Bus System & Register Transfer Architecture", "Multiplexer-based common bus interconnecting PC, AR, IR, DR, AC, and Memory Unit", [
            ("Registers", "#6366f1", "card"),
            ("Multiplexers", "#06b6d4", "card"),
            ("Common Bus", "#10b981", "card")
        ], content)

    elif "basic-organization" in cid or "instruction-cycle" in cid:
        content = f'''
        <!-- Instruction Cycle Flow -->
        {card_box(40, 75, 250, 240, "1. Fetch & Decode Cycle", "Timing T0 - T3", [
            ("T0", "AR <-- PC (Address setup)"),
            ("T1", "IR <-- M[AR], PC <-- PC + 1"),
            ("T2", "Decode Opcode IR(12-14)"),
            ("T2", "AR <-- IR(0-11), I <-- IR(15)"),
            ("T3", "Direct: Operand ready in AR"),
            ("T3", "Indirect: AR <-- M[AR] (Resolve)"),
            ("Decode", "3x8 Decoder outputs D0..D7")
        ], "#6366f1", "#1e1b4b")}

        {connector(290, 195, 370, 195, "Memory Ref", "#818cf8", "mIndigo")}

        <!-- Execute Stage -->
        {card_box(370, 75, 260, 240, "2. Execute Micro-operations", "Timing T4 - T6", [
            ("AND", "D0T4: DR <-- M[AR], D0T5: AC <-- AC & DR"),
            ("ADD", "D1T4: DR <-- M[AR], D1T5: AC <-- AC + DR"),
            ("LDA", "D2T4: DR <-- M[AR], D2T5: AC <-- DR"),
            ("STA", "D3T4: M[AR] <-- AC (Store to RAM)"),
            ("BUN", "D4T4: PC <-- AR (Branch Unconditional)"),
            ("BSA", "D5T4: M[AR] <-- PC, PC <-- AR + 1"),
            ("ISZ", "D6T4: DR <-- M[AR], D6T5: DR++, D6T6: M[AR]<--DR")
        ], "#06b6d4", "#155e75")}

        {connector(630, 195, 700, 195, "Flag Check", "#06b6d4", "mCyan")}

        <!-- Interrupt Cycle -->
        {card_box(700, 75, 180, 240, "3. Interrupt Cycle", "Hardware Flag R = 1", [
            ("R=1", "Triggered if IEN & (FGI|FGO)"),
            ("T0", "AR <-- 0, TR <-- PC"),
            ("T1", "M[AR] <-- TR, PC <-- 0"),
            ("T2", "PC <-- PC + 1, IEN <-- 0"),
            ("Return", "Saved in RAM address 0"),
            ("ISR", "Begins execution at addr 1")
        ], "#f59e0b", "#78350f")}

        {footer_banner(40, 335, 840, 55, "Control Sequencing: Hardwired vs Microprogrammed", "Hardwired control uses combinational decoders for maximum clock speed; Microprogrammed control fetches micro-instructions from Control ROM.")}
        '''
        return svg_canvas("CPU Instruction Cycle & Control Unit State Machine", "Micro-operation state sequencing: Fetch, Decode, Effective Address, Execute, and Interrupt Handling", [
            ("Fetch/Decode", "#6366f1", "card"),
            ("Execution", "#06b6d4", "card"),
            ("Interrupt Cycle", "#f59e0b", "card")
        ], content)

    elif "general-register" in cid:
        content = f'''
        <!-- General Register Organization -->
        {card_box(50, 75, 230, 240, "CPU Register Array", "R1 through R7", [
            ("Registers", "7 general registers + Input"),
            ("Width", "16-bit words per register"),
            ("SELA", "3 bits select Bus A source"),
            ("SELB", "3 bits select Bus B source"),
            ("SELD", "3 bits select Dest decoder"),
            ("Outputs", "Multiplexed into ALU inputs"),
            ("Clock", "Synchronous edge triggered")
        ], "#6366f1", "#1e1b4b")}

        {connector(280, 150, 360, 150, "Bus A (16-bit)", "#818cf8", "mIndigo")}
        {connector(280, 240, 360, 240, "Bus B (16-bit)", "#06b6d4", "mCyan")}

        <!-- ALU & Shifter -->
        {card_box(360, 75, 250, 240, "Arithmetic Logic Unit (ALU)", "Operation Selector OPR", [
            ("OPR Code", "5-bit operation selection"),
            ("Arithmetic", "ADD, SUB, INC, DEC, ADDX"),
            ("Logic", "AND, OR, XOR, NOT"),
            ("Shifter", "SHL, SHR, Circular rotate"),
            ("Flags", "Carry (C), Overflow (V), Zero (Z)"),
            ("Output", "16-bit computed result to bus"),
            ("Latency", "Pure combinational propagation")
        ], "#10b981", "#064e3b")}

        {connector(610, 195, 690, 195, "Result Bus", "#10b981", "mEmerald")}

        <!-- Destination Decoder -->
        {card_box(690, 75, 190, 240, "Destination Decoder", "3-to-8 Line Decoder", [
            ("SELD", "3 select bits: 001..111"),
            ("Loads", "Asserts LD on target Reg"),
            ("None", "000 = No register loaded"),
            ("Stack", "SP register operations"),
            ("Speed", "1 clock cycle operation")
        ], "#a855f7", "#581c87")}

        {footer_banner(50, 335, 830, 55, "Register Organization Formula: R1 <-- R2 + R3", "Control word = [SELA: R2, SELB: R3, SELD: R1, OPR: ADD]; executed in exactly one clock cycle.")}
        '''
        return svg_canvas("CPU General Register Organization & ALU Data Path", "Bus A/B routing, 5-bit ALU function selection, and destination write-back decoder", [
            ("Registers", "#6366f1", "card"),
            ("ALU Engine", "#10b981", "card"),
            ("Decoder", "#a855f7", "card")
        ], content)

    elif "memory-hierarchy" in cid:
        content = f'''
        <!-- Pyramid Hierarchy -->
        {card_box(60, 75, 220, 240, "CPU Internal Storage", "Fastest / Lowest Capacity", [
            ("Registers", "16-64 words | < 1 ns latency"),
            ("L1 Cache", "32-64 KB | 1-2 ns latency"),
            ("L2 Cache", "256-512 KB | 3-5 ns latency"),
            ("L3 Cache", "4-32 MB Shared | 10-15 ns"),
            ("Technology", "Static RAM (SRAM flip-flops)"),
            ("Hit Ratio", "Typically 90% - 98%")
        ], "#6366f1", "#1e1b4b")}

        {connector(280, 195, 360, 195, "Bus misses", "#818cf8", "mIndigo")}

        {card_box(360, 75, 230, 240, "Main Memory (RAM)", "Medium Speed & Capacity", [
            ("DRAM", "Dynamic RAM (Capacitor cells)"),
            ("Capacity", "8 GB - 64 GB"),
            ("Latency", "50 - 100 ns access time"),
            ("Refresh", "Requires periodic row refresh"),
            ("Bandwidth", "25 - 50 GB/s DDR4/DDR5"),
            ("Virtual", "Organized into 4KB Pages")
        ], "#06b6d4", "#155e75")}

        {connector(590, 195, 670, 195, "Page Fault", "#06b6d4", "mCyan")}

        {card_box(670, 75, 200, 240, "Secondary Storage", "Non-Volatile / High Capacity", [
            ("NVMe SSD", "PCIe flash | 10-50 µs"),
            ("SATA SSD", "Flash NAND | 100 µs"),
            ("HDD", "Magnetic disk | 5-10 ms"),
            ("Tape/Cloud", "Archival | Seconds/Minutes"),
            ("Cost", "Lowest cost per gigabyte"),
            ("Persistence", "Retains data without power")
        ], "#10b981", "#064e3b")}

        {footer_banner(60, 335, 810, 55, "Locality of Reference: Temporal & Spatial", "Effective Access Time: EAT = Hit_Ratio × T_cache + (1 - Hit_Ratio) × T_ram. Principle of locality makes the hierarchy feel as fast as cache and as large as disk.")}
        '''
        return svg_canvas("Computer Memory Hierarchy Architecture", "Speed, cost per bit, and capacity trade-offs across SRAM, DRAM, SSD, and Magnetic Disks", [
            ("SRAM Cache", "#6366f1", "card"),
            ("DRAM Memory", "#06b6d4", "card"),
            ("Secondary Storage", "#10b981", "card")
        ], content)

    elif "io-organization" in cid:
        content = f'''
        <!-- Asynchronous Transfer -->
        {card_box(50, 75, 250, 240, "Strobe Control Method", "One-Way Handshake", [
            ("Source", "Places data on data bus"),
            ("Strobe", "Source asserts STROBE high"),
            ("Destination", "Reads data while strobe high"),
            ("Limitation", "No confirmation of reception"),
            ("Flaw", "If receiver is busy, data is lost"),
            ("Timing", "Fixed pulse duration requirement")
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 195, 380, 195, "evolves into", "#818cf8", "mIndigo")}

        {card_box(380, 75, 280, 240, "Two-Wire Handshaking", "Full Asynchronous Confirmation", [
            ("Line 1", "Data Valid (DAV) / Request"),
            ("Line 2", "Data Accepted (DAC) / Acknowledge"),
            ("Step 1", "Source places data, asserts DAV=1"),
            ("Step 2", "Dest accepts data, asserts DAC=1"),
            ("Step 3", "Source drops DAV=0 (acknowledges)"),
            ("Step 4", "Dest drops DAC=0 (ready for next)"),
            ("Advantage", "Completely independent of bus speed")
        ], "#06b6d4", "#155e75")}

        {connector(660, 195, 720, 195, "governs", "#06b6d4", "mCyan")}

        {card_box(720, 75, 160, 240, "I/O Interface", "Device Ports", [
            ("Data Port", "In/Out buffer"),
            ("Status", "FGI / FGO flags"),
            ("Control", "Mode config"),
            ("Addr Dec", "Decodes port")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 830, 55, "Asynchronous Communication Principle", "Two-wire handshaking eliminates race conditions and timing discrepancies between high-speed CPU and slow electromechanical peripheral devices.")}
        '''
        return svg_canvas("Asynchronous I/O Data Transfer: Strobe vs Handshaking", "Timing protocols, Data Valid (DAV) and Data Accepted (DAC) handshaking cycle", [
            ("Strobe Method", "#6366f1", "card"),
            ("Two-Wire Handshake", "#06b6d4", "card"),
            ("I/O Port", "#10b981", "card")
        ], content)

    elif "priority-interrupt" in cid:
        content = f'''
        <!-- Daisy Chain Priority -->
        {card_box(50, 75, 250, 240, "Daisy-Chaining Method", "Hardware Serial Priority", [
            ("PI Line", "Priority In line from CPU"),
            ("Device 1", "Highest priority (Device 1)"),
            ("Pass", "If Device 1 has no IRQ: PO = 1"),
            ("Block", "If Device 1 has IRQ: PO = 0 (blocks)"),
            ("Device 2", "Receives PI from Device 1's PO"),
            ("Vector", "Active device places VAD on bus"),
            ("Scalability", "O(N) propagation latency across chain")
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 195, 380, 195, "Parallel", "#818cf8", "mIndigo")}

        {card_box(380, 75, 270, 240, "Parallel Priority Interrupt", "Priority Encoder 74148", [
            ("Inputs", "8 IRQ lines (I0 through I7)"),
            ("Outputs", "3-bit binary vector address (x,y,z)"),
            ("Mask Reg", "Enables/disables individual IRQs"),
            ("Speed", "O(1) immediate priority resolution"),
            ("IST Flag", "Interrupt Status flag asserted"),
            ("VAD Gen", "Direct vector branch to ISR table")
        ], "#06b6d4", "#155e75")}

        {connector(650, 195, 720, 195, "dispatches to", "#06b6d4", "mCyan")}

        {card_box(720, 75, 160, 240, "Interrupt Vector", "Vector Table", [
            ("VAD 0", "Timer ISR"),
            ("VAD 1", "Keyboard ISR"),
            ("VAD 2", "Disk DMA ISR"),
            ("VAD 3", "Network NIC"),
            ("Priority", "Higher preempts")
        ], "#a855f7", "#581c87")}

        {footer_banner(50, 335, 830, 55, "Priority Arbitration: Hardware vs Software Polling", "Hardware daisy-chaining and priority encoders resolve concurrent interrupt requests without wasting CPU clock cycles polling status registers.")}
        '''
        return svg_canvas("Priority Interrupt System: Daisy-Chaining & Priority Encoders", "Serial daisy-chain acknowledge vs parallel 8-to-3 priority encoder vector resolution", [
            ("Daisy Chain", "#6366f1", "card"),
            ("Parallel Encoder", "#06b6d4", "card"),
            ("Vector Table", "#a855f7", "card")
        ], content)

    elif "execution-unit" in cid or "dma" in cid:
        content = f'''
        <!-- DMA Architecture -->
        {card_box(50, 75, 220, 240, "CPU (Bus Master)", "Host Processor", [
            ("Normal", "CPU owns address & data buses"),
            ("BR Line", "DMA asserts Bus Request (BR)"),
            ("BG Line", "CPU asserts Bus Grant (BG)"),
            ("Release", "CPU puts buses into High-Z"),
            ("Interrupt", "DMA asserts IRQ when finished"),
            ("Resume", "CPU regains bus ownership")
        ], "#6366f1", "#1e1b4b")}

        {connector(270, 150, 350, 150, "Bus Request (BR)", "#818cf8", "mIndigo")}
        {connector(350, 240, 270, 240, "Bus Grant (BG)", "#06b6d4", "mCyan")}

        {card_box(350, 75, 260, 240, "DMA Controller (8237A)", "Secondary Bus Master", [
            ("Address Reg", "Starting memory destination addr"),
            ("Word Count", "Number of words to transfer (decrements)"),
            ("Control Reg", "Read/Write mode selection"),
            ("Status Reg", "Completion flag & error bits"),
            ("Burst Mode", "Transfers block; halts CPU"),
            ("Cycle Steal", "Interleaves 1 memory cycle"),
            ("Transparent", "Transfers during CPU decode only")
        ], "#06b6d4", "#155e75")}

        {connector(610, 195, 690, 195, "RAM Access", "#10b981", "mEmerald")}

        {card_box(690, 75, 190, 240, "Main Memory (RAM)", "Direct Transfer", [
            ("Direct Path", "Bypasses CPU registers"),
            ("Speed", "Up to RAM max bandwidth"),
            ("Efficiency", "CPU continues compute"),
            ("Disk I/O", "Saves millions of instructions")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 830, 55, "Direct Memory Access Advantage", "DMA allows high-speed disk and network controllers to read/write memory directly at bus speed without CPU instruction intervention per byte.")}
        '''
        return svg_canvas("Direct Memory Access (DMA) & Bus Arbitration", "Bus Request (BR), Bus Grant (BG), Cycle Stealing, and high-speed memory block transfer", [
            ("Host CPU", "#6366f1", "card"),
            ("DMA Controller", "#06b6d4", "card"),
            ("Main Memory", "#10b981", "card")
        ], content)

    elif "parallel" in cid or "simd" in cid:
        content = f'''
        <!-- Flynn's Matrix -->
        {card_box(40, 75, 230, 240, "SISD Architecture", "Single Inst, Single Data", [
            ("Model", "Classic Von Neumann uniprocessor"),
            ("Control", "Single Control Unit (CU)"),
            ("ALU", "Single Processing Element (PE)"),
            ("Memory", "Single shared memory stream"),
            ("Parallelism", "Pipelining & superscalar issue"),
            ("Examples", "Legacy single-core CPUs")
        ], "#6366f1", "#1e1b4b")}

        {card_box(300, 75, 270, 240, "SIMD Architecture", "Single Inst, Multiple Data", [
            ("Control", "Single Control Unit broadcasts opcode"),
            ("Processing", "Array of N Processing Elements (PEs)"),
            ("Data", "Each PE computes on local data memory"),
            ("Sync", "Lock-step synchronous execution"),
            ("Interconnect", "Mesh, Hypercube, or Crossbar"),
            ("Masking", "PEs can conditionally disable execution"),
            ("Examples", "Modern GPUs, AVX-512, Array Processors")
        ], "#06b6d4", "#155e75")}

        {card_box(600, 75, 280, 240, "MIMD Architecture", "Multiple Inst, Multiple Data", [
            ("Processors", "Multiple independent autonomous CPUs"),
            ("Instructions", "Each CPU runs its own program stream"),
            ("Data", "Each CPU accesses its own data stream"),
            ("UMA/SMP", "Shared central memory via bus/crossbar"),
            ("NUMA", "Distributed shared memory nodes"),
            ("Clusters", "Distributed memory via Ethernet/InfiniBand"),
            ("Examples", "Multicore CPUs, Cloud Compute Clusters")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Flynn's Classical Classification Taxonomy (1966)", "Categorizes computer systems along two orthogonal dimensions: Instruction Stream multiplicity and Data Stream multiplicity.")}
        '''
        return svg_canvas("Flynn's Parallel Computing Classification: SISD, SIMD, MIMD", "Architectural comparative analysis of Instruction Streams and Data Streams", [
            ("SISD Model", "#6366f1", "card"),
            ("SIMD Model", "#06b6d4", "card"),
            ("MIMD Model", "#10b981", "card")
        ], content)

    elif "pipeline" in cid:
        content = f'''
        <!-- Pipeline Stages Space-Time Matrix -->
        {card_box(40, 75, 170, 240, "1. IF Stage", "Instruction Fetch", [
            ("Hardware", "Instruction Cache"),
            ("Action", "IR <-- M[PC]"),
            ("Next PC", "PC <-- PC + 4"),
            ("Hazard", "I-Cache miss / Branch")
        ], "#6366f1", "#1e1b4b")}

        {connector(210, 195, 260, 195, "next CC", "#818cf8", "mIndigo")}

        {card_box(260, 75, 170, 240, "2. ID Stage", "Instruction Decode", [
            ("Hardware", "Register File"),
            ("Action", "Read Regs Rs, Rt"),
            ("Control", "Generate ALU control"),
            ("Hazard", "RAW dependence stall")
        ], "#06b6d4", "#155e75")}

        {connector(430, 195, 480, 195, "next CC", "#06b6d4", "mCyan")}

        {card_box(480, 75, 170, 240, "3. EX Stage", "Execution / ALU", [
            ("Hardware", "ALU & Shifter"),
            ("Action", "Arithmetic computation"),
            ("Branch", "Branch target address"),
            ("Forwarding", "EX-to-EX bypass path")
        ], "#10b981", "#064e3b")}

        {connector(650, 195, 700, 195, "next CC", "#10b981", "mEmerald")}

        {card_box(700, 75, 180, 240, "4. MEM & WB", "Memory & Write-Back", [
            ("MEM", "Load/Store to D-Cache"),
            ("WB", "Write result into Rd"),
            ("Hazards", "Structural (shared bus)"),
            ("Throughput", "1 instruction per clock (ideal)")
        ], "#a855f7", "#581c87")}

        {footer_banner(40, 335, 840, 55, "Pipeline Speedup Equation: S_k = (n × k) / (k + n - 1)", "For large n tasks, a k-stage pipeline achieves ideal k-fold speedup over non-pipelined execution.")}
        '''
        return svg_canvas("5-Stage Instruction Pipelining & Hazard Resolution Architecture", "IF, ID, EX, MEM, WB execution stages, data forwarding paths, and pipeline stalls", [
            ("Fetch/Decode", "#6366f1", "card"),
            ("Execute ALU", "#10b981", "card"),
            ("Memory / WB", "#a855f7", "card")
        ], content)

    elif "multiprocessor" in cid or "multistage" in cid:
        content = f'''
        <!-- Multiprocessor UMA vs NUMA -->
        {card_box(50, 75, 360, 240, "UMA / Symmetric Multiprocessing (SMP)", "Shared Central Memory", [
            ("Processors", "CPU1, CPU2 ... CPUn share system bus"),
            ("Memory", "Single centralized physical RAM"),
            ("Latency", "Uniform access time for all processors"),
            ("Interconnect", "Time-shared common bus or Crossbar switch"),
            ("Scalability", "Limited to 8-32 CPUs due to bus saturation"),
            ("Coherence", "Snoopy bus protocols (MESI)"),
            ("OS Model", "Single unified operating system kernel")
        ], "#6366f1", "#1e1b4b")}

        {connector(410, 195, 490, 195, "scales to", "#818cf8", "mIndigo")}

        {card_box(490, 75, 380, 240, "NUMA / Distributed Shared Memory", "Non-Uniform Memory Access", [
            ("Node Model", "Each node contains CPU + Local Memory"),
            ("Access Time", "Local access is fast; remote memory is slower"),
            ("Interconnect", "Multistage Omega network, 2D-Mesh, Hypercube"),
            ("Scalability", "Scales to hundreds/thousands of cores"),
            ("CC-NUMA", "Directory-based cache coherence tracking"),
            ("COMA", "Cache-Only Memory Architecture variant"),
            ("Performance", "Depends on memory page placement & locality")
        ], "#06b6d4", "#155e75")}

        {footer_banner(50, 335, 820, 55, "Multiprocessor Memory Architecture Comparison", "UMA provides uniform simplicity for small multicore chips; NUMA eliminates the central bus bottleneck for enterprise supercomputers.")}
        '''
        return svg_canvas("Multiprocessor Memory Structures: UMA vs NUMA Architecture", "Uniform Memory Access shared bus vs Non-Uniform Distributed Memory interconnects", [
            ("UMA / SMP", "#6366f1", "card"),
            ("NUMA Cluster", "#06b6d4", "card"),
            ("Interconnect", "#38bdf8", "line")
        ], content)

    else:
        # High-definition default CA452 architectural diagram
        content = f'''
        {card_box(50, 75, 260, 240, "Control Unit Subsystem", "Hardware Sequencing", [
            ("CAR", "Control Address Register"),
            ("Control ROM", "Microprogram microinstructions"),
            ("Sequencer", "Next-address logic generation"),
            ("Decoders", "3x8 micro-operation decoders"),
            ("Timing", "Ring counter clock pulses T0-T7"),
            ("Control Bus", "Broadcasts control signals to CPU")
        ], "#6366f1", "#1e1b4b")}

        {connector(310, 195, 390, 195, "micro-commands", "#818cf8", "mIndigo")}

        {card_box(390, 75, 260, 240, "Datapath & ALU Subsystem", "Execution Core", [
            ("ALU", "16-bit parallel adder/logic unit"),
            ("Accumulator", "AC primary working register"),
            ("Data Reg", "DR operand buffer register"),
            ("Status", "Flags: Sign, Zero, Carry, Overflow"),
            ("Shifter", "Bidirectional bit shifter"),
            ("Bus Link", "Interconnects with Common Bus")
        ], "#06b6d4", "#155e75")}

        {connector(650, 195, 720, 195, "memory access", "#10b981", "mEmerald")}

        {card_box(720, 75, 160, 240, "Memory & I/O", "System Interface", [
            ("MAR", "Memory Address"),
            ("MDR", "Memory Data"),
            ("I/O Ports", "Peripheral link"),
            ("Speed", "Synchronized")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 830, 55, "System Architecture: Datapath & Control Separation", "The control unit orchestrates the flow of data across registers and ALU datapath according to fetched machine instructions.")}
        '''
        return svg_canvas("CPU Architecture & Micro-architectural Datapath", "Detailed component interaction between Control Unit, ALU Datapath, and Memory Subsystem", [
            ("Control Unit", "#6366f1", "card"),
            ("Datapath / ALU", "#06b6d4", "card"),
            ("Memory Subsystem", "#10b981", "card")
        ], content)
