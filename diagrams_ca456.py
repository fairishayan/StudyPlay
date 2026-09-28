# diagrams_ca456.py
# High-definition educational SVG diagrams for CA456: Operating System
from diagram_primitives import svg_canvas, card_box, pill_node, connector, footer_banner

def get_ca456_diagram(concept_id):
    cid = concept_id.lower()

    if "operating-system-definition" in cid:
        content = f'''
        <!-- OS Layered Architecture: User → App → OS → Hardware -->
        {card_box(50, 75, 250, 138, "User / Applications", "Ring 3 — Unprivileged", [
            ("Users", "Human users, scripts, services"),
            ("Applications", "Browser, IDE, Database, CLI"),
            ("API Calls", "write(), read(), fork(), exec()"),
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 144, 370, 144, "System Call", "#818cf8", "mIndigo")}

        {card_box(370, 75, 470, 140, "Operating System Kernel", "Ring 0 — Privileged Supervisor", [
            ("Process Manager", "Scheduling, fork, exec, context switch"),
            ("Memory Manager", "Virtual memory, paging, segmentation"),
            ("File System", "VFS, inodes, directories, permissions"),
            ("I/O Manager", "Device drivers, DMA, buffering, IRQ"),
            ("Security", "Kernel mode, ACL, capability enforcement"),
        ], "#0e7490", "#083344")}

        {connector(300, 280, 370, 260, "Kernel API", "#06b6d4", "mCyan")}

        {card_box(50, 230, 250, 130, "System Programs", "Shell & Utilities", [
            ("Shell", "bash, sh — command interpreter"),
            ("Utilities", "ls, grep, cp, ps, mount"),
            ("Compilers", "gcc, python, java runtime"),
            ("Services", "cron, sshd, systemd daemons"),
        ], "#a855f7", "#3b0764")}

        {connector(610, 215, 680, 265, "HW Access", "#10b981", "mEmerald")}

        {card_box(680, 230, 200, 130, "Hardware Layer", "Physical Resources", [
            ("CPU", "Cores, caches, ALU"),
            ("RAM", "Physical memory pages"),
            ("Disk", "HDD, SSD block I/O"),
            ("Devices", "NIC, GPU, USB, timers"),
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 376, 830, 52, "OS Role: Resource Manager & Control Program", "The OS is the trusted intermediary — providing safe, fair, concurrent access to physical hardware resources for all user-level programs.")}
        '''
        return svg_canvas("Operating System Architecture: User → Application → OS Kernel → Hardware", "Layered OS model: user space, OS management subsystems (Process/Memory/File/I/O/Security), hardware abstraction", [
            ("User / Apps", "#6366f1", "card"),
            ("OS Kernel", "#0e7490", "card"),
            ("Hardware", "#10b981", "card")
        ], content)

    elif "cpu-scheduling" in cid:
        content = f'''
        <!-- CPU Scheduling Comparison -->
        {card_box(40, 75, 260, 240, "1. FCFS (Convoy Effect)", "Non-Preemptive", [
            ("Queue", "P1 (24ms), P2 (3ms), P3 (3ms) arrive at 0"),
            ("Gantt Chart", "P1 [0..24] | P2 [24..27] | P3 [27..30]"),
            ("Waiting Time", "P1: 0ms, P2: 24ms, P3: 27ms"),
            ("Average WT", "(0 + 24 + 27) / 3 = 17.0 ms!"),
            ("Convoy Effect", "Short processes stuck behind long CPU burst"),
            ("Efficiency", "Poor for interactive timesharing")
        ], "#f43f5e", "#881337")}

        {connector(300, 195, 360, 195, "optimized by", "#10b981", "mEmerald")}

        {card_box(360, 75, 260, 240, "2. Shortest Job First (SJF)", "Provably Optimal WT", [
            ("Order", "P2 (3ms), P3 (3ms), P1 (24ms)"),
            ("Gantt Chart", "P2 [0..3] | P3 [3..6] | P1 [6..30]"),
            ("Waiting Time", "P2: 0ms, P3: 3ms, P1: 6ms"),
            ("Average WT", "(0 + 3 + 6) / 3 = 3.0 ms! (5.6x faster!)"),
            ("Preemptive", "SRTF (Shortest Remaining Time First)"),
            ("Challenge", "Cannot know future CPU burst length in advance")
        ], "#10b981", "#064e3b")}

        {connector(620, 195, 680, 195, "fair sharing", "#06b6d4", "mCyan")}

        {card_box(680, 75, 200, 240, "3. Round Robin (RR)", "Time Quantum = 4ms", [
            ("Concept", "Preemptive timesharing"),
            ("Gantt", "P1(4)|P2(3)|P3(3)|P1.."),
            ("Responsiveness", "Excellent for multi-user"),
            ("Quantum Size", "Large = FCFS; Small = overhead")
        ], "#06b6d4", "#155e75")}

        {footer_banner(40, 335, 840, 55, "CPU Scheduling Criteria: Turnaround Time (TAT) & Waiting Time (WT)", "TAT = Completion_Time - Arrival_Time | WT = Turnaround_Time - Burst_Time. SJF is mathematically proven to yield minimum average waiting time.")}
        '''
        return svg_canvas("CPU Scheduling Algorithms: FCFS Convoy Effect vs Optimal SJF vs Round Robin", "Comparative Gantt chart evaluations, waiting times, and preemptive time-slicing trade-offs", [
            ("FCFS Convoy", "#f43f5e", "card"),
            ("Optimal SJF", "#10b981", "card"),
            ("Round Robin", "#06b6d4", "card")
        ], content)

    elif "critical-section" in cid or "readers-writers" in cid:
        content = f'''
        <!-- Critical Section & Semaphores -->
        {card_box(50, 75, 260, 240, "Critical Section Problem", "3 Fundamental Requirements", [
            ("1. Mutual Exclusion", "Only 1 process in Critical Section at once"),
            ("2. Progress", "Only processes outside remainder decide entry"),
            ("3. Bounded Waiting", "Limit on number of entries ahead of a waiting process"),
            ("Race Condition", "Outcome depends on concurrent execution timing"),
            ("Hardware Locks", "Test-and-Set / Compare-and-Swap atomics")
        ], "#f59e0b", "#78350f")}

        {connector(310, 195, 380, 195, "via Locks", "#10b981", "mEmerald")}

        {card_box(380, 75, 270, 240, "Semaphores (wait & signal)", "Dijkstra Synchronization", [
            ("Atomic Value", "Integer variable S accessed via P() and V()"),
            ("wait(S) / P(S)", "while (S <= 0); S--; (Blocks if resource busy)"),
            ("signal(S) / V(S)", "S++; (Releases resource and wakes waiter)"),
            ("Binary Semaphore", "Value is 0 or 1; functions as Mutex Lock"),
            ("Counting Sem", "Value represents available resource pool"),
            ("Deadlock Risk", "Nested inversions cause permanent deadlock")
        ], "#10b981", "#064e3b")}

        {connector(650, 195, 710, 195, "solves", "#06b6d4", "mCyan")}

        {card_box(710, 75, 170, 240, "Classic Problems", "Synchronization", [
            ("Producer-Consumer", "Bounded buffer queue"),
            ("Readers-Writers", "Read concurrency"),
            ("Dining Philo", "Deadlock avoidance"),
            ("Sleeping Barber", "Thread signaling")
        ], "#06b6d4", "#155e75")}

        {footer_banner(50, 335, 830, 55, "Peterson's Algorithm: flag[i] = true; turn = j;", "Software-based solution for two processes satisfying Mutual Exclusion, Progress, and Bounded Waiting without special hardware instructions.")}
        '''
        return svg_canvas("Process Synchronization: Critical Section & Semaphores Architecture", "Peterson's Algorithm, Atomic wait(P) and signal(V) semaphores, and classical synchronization problems", [
            ("Critical Section", "#f59e0b", "card"),
            ("Semaphores", "#10b981", "card"),
            ("Classic Problems", "#06b6d4", "card")
        ], content)

    elif "deadlock" in cid or "process-termination" in cid:
        content = f'''
        <!-- Deadlock & Banker's Algorithm -->
        {card_box(50, 75, 360, 240, "4 Coffman Deadlock Conditions", "Simultaneous Necessity", [
            ("1. Mutual Exclusion", "At least one non-sharable resource held"),
            ("2. Hold and Wait", "Process holds resource while waiting for others"),
            ("3. No Preemption", "Resources released only voluntarily by holder"),
            ("4. Circular Wait", "P0 waits for P1, P1 waits for P2 ... Pn waits for P0"),
            ("Prevention", "Invalidate any ONE condition (e.g. resource ordering)"),
            ("Detection", "Resource Allocation Graph (RAG) cycle detection")
        ], "#f43f5e", "#881337")}

        {connector(410, 195, 490, 195, "avoidance via", "#10b981", "mEmerald")}

        {card_box(490, 75, 380, 240, "Banker's Algorithm for Safe State", "Dijkstra Avoidance Model", [
            ("Available [m]", "Available instances of each resource type"),
            ("Max [n × m]", "Maximum claim of each process"),
            ("Allocation [n × m]", "Currently allocated resources to each process"),
            ("Need [n × m]", "Need[i][j] = Max[i][j] - Allocation[i][j]"),
            ("Safety Test", "Find process with Need_i <= Available; simulate run"),
            ("Safe Sequence", "<P0, P1, P3, P2> proves system cannot deadlock"),
            ("Request Grant", "Granted ONLY if state remains safe after allocation")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 820, 55, "Deadlock State Taxonomy: Deadlock ⊂ Unsafe State ⊂ State Space", "An unsafe state is NOT necessarily a deadlock; however, an unsafe state may lead to a deadlock if processes request maximum claims simultaneously.")}
        '''
        return svg_canvas("Deadlock Characterization & Banker's Safety Algorithm", "Resource Allocation Graph cycles, Coffman conditions, and Banker's Algorithm Allocation/Need matrices", [
            ("Coffman Conditions", "#f43f5e", "card"),
            ("Banker's Algorithm", "#10b981", "card"),
            ("Safety Verification", "#34d399", "line")
        ], content)

    elif "demand-paging" in cid or "worst-fit" in cid or "page-size" in cid:
        content = f'''
        <!-- Paging & TLB Translation -->
        {card_box(40, 75, 230, 240, "Logical Address (CPU)", "Virtual Memory Address", [
            ("Page Number (p)", "Upper bits index into Page Table"),
            ("Page Offset (d)", "Lower bits specify byte within page"),
            ("Page Size", "Typically 4 KB (2^12 = 12 offset bits)"),
            ("Address Space", "Independent 64-bit virtual map per process"),
            ("Protection", "Read, Write, Execute permission flags")
        ], "#6366f1", "#1e1b4b")}

        {connector(270, 150, 350, 150, "TLB check", "#06b6d4", "mCyan")}
        {connector(270, 240, 350, 240, "Page Table Miss", "#818cf8", "mIndigo")}

        {card_box(350, 75, 280, 240, "Translation Lookaside Buffer (TLB)", "High-Speed Hardware Cache", [
            ("TLB Hit", "Associative lookup resolves Frame (f) in < 1ns!"),
            ("TLB Miss", "Accesses Page Table in RAM (100ns penalty)"),
            ("Page Fault", "Valid/Invalid bit = 0 (Page on disk)"),
            ("Page Table", "Array mapping Page # -> Physical Frame #"),
            ("EAT Formula", "Hit_Ratio × (T_tlb + T_ram) + Miss × (T_tlb + 2×T_ram)"),
            ("Hit Ratio", "Typically 95% - 99% in modern CPUs")
        ], "#06b6d4", "#155e75")}

        {connector(630, 195, 710, 195, "physical address (f,d)", "#10b981", "mEmerald")}

        {card_box(710, 75, 170, 240, "Physical Memory", "RAM Frames", [
            ("Frame # (f)", "Target physical RAM"),
            ("Offset (d)", "Direct byte access"),
            ("No External", "Zero ext fragmentation"),
            ("Frame Size", "Exact match to page")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Virtual Memory Paging Principle", "Paging decouples logical contiguous memory from physical allocation, allowing processes to execute even if RAM is non-contiguous or partially swapped to disk.")}
        '''
        return svg_canvas("Paging Address Translation & Hardware TLB Architecture", "Translating logical (p, d) to physical (f, d) via fast TLB cache and Page Table lookup", [
            ("Logical Address", "#6366f1", "card"),
            ("Hardware TLB", "#06b6d4", "card"),
            ("Physical RAM", "#10b981", "card")
        ], content)

    elif "io-management" in cid or "cooperating-processes" in cid:
        content = f'''
        {card_box(40, 75, 260, 240, "I/O Management Subsystem", "Kernel I/O Architecture", [
            ("I/O Hardware", "Disks, NIC, USB, GPU — connected via buses"),
            ("Device Controllers", "Mini-CPUs with local buffers & registers"),
            ("Device Drivers", "Kernel modules: interrupt & DMA handlers"),
            ("I/O Scheduling", "Disk: FCFS, SSTF, SCAN, C-SCAN algorithms"),
            ("Buffering", "Single, Double, Circular buffer strategies"),
            ("Spooling", "SPOOL queue for slow devices (printer)"),
            ("DMA Controller", "Transfers blocks to RAM without CPU involvement")
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 195, 380, 195, "enables", "#818cf8", "mIndigo")}

        {card_box(380, 75, 260, 240, "Process Cooperation", "Shared Resource Models", [
            ("Producer-Consumer", "Bounded buffer with head/tail indices"),
            ("Shared Memory", "mmap/shmget — processes read same RAM page"),
            ("Message Passing", "send(P,msg) / receive(Q,msg) kernel mediated"),
            ("Pipes", "Half-duplex byte stream between parent-child"),
            ("Sockets", "Full-duplex bidirectional network I/O"),
            ("Critical Section", "Mutual exclusion on shared resource"),
            ("Race Condition", "Non-deterministic result from unsync access")
        ], "#06b6d4", "#155e75")}

        {connector(640, 195, 710, 195, "needs", "#10b981", "mEmerald")}

        {card_box(710, 75, 165, 240, "Synchronization", "Coordination Primitives", [
            ("Mutex Lock", "Binary: 0=free, 1=locked"),
            ("Semaphore", "wait(S): S--; signal(S): S++"),
            ("Counting Sem", "Controls N concurrent slots"),
            ("Condition Var", "wait/signal on condition"),
            ("Monitor", "OO synchronized object"),
            ("Barrier", "All threads rendezvous"),
            ("Spinlock", "Busy-wait for short critical")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "I/O Bottleneck Principle", "I/O operations are 10,000x slower than CPU operations. Efficient I/O management via DMA, buffering, and scheduling is critical to overall system throughput.")}
        '''
        return svg_canvas("OS I/O Management, Process Cooperation & Synchronization Primitives", "Device driver architecture, producer-consumer cooperation, and mutex/semaphore synchronization", [
            ("I/O Subsystem", "#6366f1", "card"),
            ("Process Cooperation", "#06b6d4", "card"),
            ("Synchronization", "#10b981", "card")
        ], content)

    elif "tree-structured-directory" in cid or "directory" in cid or "file-system" in cid:
        content = f'''
        {card_box(40, 75, 260, 240, "Directory Structure Types", "File System Organization", [
            ("Single-Level", "All files in one root directory (collision risk)"),
            ("Two-Level", "Separate directory per user (/home/user/)"),
            ("Tree-Structured", "Hierarchical: / → subdirs → files"),
            ("Acyclic Graph", "Symbolic/hard links to shared files"),
            ("General Graph", "Allows cycles — requires garbage collection"),
            ("Path Names", "Absolute: /home/user/file vs Relative: ../file"),
            ("Working Dir", "CWD: current directory context (chdir/cd)")
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 195, 380, 195, "allocates via", "#818cf8", "mIndigo")}

        {card_box(380, 75, 260, 240, "File Allocation Methods", "Disk Block Assignment", [
            ("Contiguous", "Sequential blocks; fast read; fragmentation"),
            ("Linked List", "Each block has pointer to next; no random access"),
            ("Indexed", "Index block holds all data block pointers"),
            ("FAT", "File Allocation Table: linked list in memory"),
            ("Inode", "UNIX: multi-level indirect block pointers"),
            ("Free-Space", "Bitmap or linked free list management"),
            ("Extent-Based", "Ranges (start,length) for large files")
        ], "#06b6d4", "#155e75")}

        {connector(640, 195, 710, 195, "with", "#10b981", "mEmerald")}

        {card_box(710, 75, 165, 240, "File Attributes", "Metadata & Permissions", [
            ("Name", "Human-readable identifier"),
            ("Inode / ID", "Unique file system ID"),
            ("Type", "regular, dir, symlink, device"),
            ("Size", "Byte count of contents"),
            ("Timestamps", "atime, mtime, ctime"),
            ("Owner/Group", "UID, GID ownership"),
            ("Permissions", "rwxrwxrwx octal mode")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "File System Organization Axiom", "Tree-structured directories with inode-based allocation provide the best balance of hierarchy, sharing via links, and efficient multi-level block addressing.")}
        '''
        return svg_canvas("OS File System: Directory Structures, Allocation Methods & File Metadata", "Tree directories, contiguous/indexed/inode allocation, and file attribute management", [
            ("Directory Types", "#6366f1", "card"),
            ("Allocation Methods", "#06b6d4", "card"),
            ("File Attributes", "#10b981", "card")
        ], content)

    else:
        # High-definition default Operating System diagram
        content = f'''
        {card_box(50, 75, 240, 240, "Process Control Block (PCB)", "Task Struct in Kernel", [
            ("PID", "Process Identifier (unique integer)"),
            ("State", "Ready, Running, Waiting, Terminated"),
            ("Program Counter", "Address of next instruction"),
            ("CPU Registers", "Saved RAX, RBX, RSP, RBP on switch"),
            ("Memory Limits", "Base/limit registers, page table pointer"),
            ("Open Files", "File descriptor table (0, 1, 2...)")
        ], "#6366f1", "#1e1b4b")}

        {connector(290, 195, 370, 195, "Context Switch", "#818cf8", "mIndigo")}

        {card_box(370, 75, 260, 240, "CPU Dispatcher & Scheduler", "Kernel Context Switch", [
            ("Step 1", "Save context of old process to its PCB"),
            ("Step 2", "Update scheduling queues (Ready / Wait)"),
            ("Step 3", "Select next process via scheduling algorithm"),
            ("Step 4", "Load registers and memory map from new PCB"),
            ("Step 5", "Jump to new Program Counter in user mode"),
            ("Switch Overhead", "Pure latency overhead (1-5 microseconds)")
        ], "#06b6d4", "#155e75")}

        {connector(630, 195, 710, 195, "executes on", "#10b981", "mEmerald")}

        {card_box(710, 75, 160, 240, "CPU Hardware", "Running State", [
            ("Core", "Active CPU Core"),
            ("Time Slice", "Quantum expires"),
            ("Interrupt", "Timer IRQ trap"),
            ("I/O Wait", "Blocks on read")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 830, 55, "Process Management Axiom: The Context Switch", "The Operating System creates the illusion of simultaneous multi-processing by rapidly saving and restoring Process Control Blocks across CPU cores.")}
        '''
        return svg_canvas("Operating System Process Management & PCB Context Switching", "Process Control Block structure, CPU scheduler queue dispatching, and hardware register restoration", [
            ("Process PCB", "#6366f1", "card"),
            ("CPU Dispatcher", "#06b6d4", "card"),
            ("Hardware Execution", "#10b981", "card")
        ], content)
