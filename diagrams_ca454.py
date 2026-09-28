# diagrams_ca454.py
# High-definition educational SVG diagrams for CA454: Unix & Shell Programming
from diagram_primitives import svg_canvas, card_box, pill_node, connector, footer_banner

def get_ca454_diagram(concept_id):
    cid = concept_id.lower()

    if "introduction-to-unix" in cid:
        content = f'''
        <!-- Concentric Layers Model -->
        {card_box(40, 75, 230, 240, "Hardware Layer", "Physical Computer", [
            ("CPU", "Multi-core processor Ring 0/3"),
            ("Memory", "Physical RAM & MMU"),
            ("Disks", "Block storage partitions"),
            ("Controllers", "Network, Graphics, USB"),
            ("Interrupts", "Hardware timer & IRQ lines")
        ], "#64748b", "#0f172a")}

        {connector(270, 195, 340, 195, "controls", "#818cf8", "mIndigo")}

        {card_box(340, 75, 260, 240, "UNIX Kernel (Ring 0)", "Monolithic Architecture", [
            ("Process Mgr", "CPU scheduler & context switch"),
            ("Memory Mgr", "Virtual memory, paging & swap"),
            ("File Subsystem", "VFS, Inodes & buffer cache"),
            ("Device Drivers", "Character & block drivers"),
            ("IPC", "Pipes, signals, shared memory"),
            ("Privilege", "Supervisor Mode (Ring 0)")
        ], "#6366f1", "#1e1b4b")}

        {connector(600, 195, 670, 195, "system calls", "#06b6d4", "mCyan")}

        {card_box(670, 75, 210, 240, "User Space (Ring 3)", "Shell & Applications", [
            ("Shell", "bash, sh, zsh, ksh"),
            ("Utilities", "grep, awk, sed, ls, cat"),
            ("Compilers", "gcc, make, python"),
            ("Services", "sshd, cron, systemd"),
            ("Safety", "Isolated user mode")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "UNIX Architectural Axiom: The Kernel as the Core Abstraction", "All user processes interact with computer hardware exclusively through controlled System Call gateways, ensuring system stability and multi-tenant security.")}
        '''
        return svg_canvas("UNIX Concentric Layered System Architecture", "Concentric hierarchy: Hardware -> Monolithic Kernel -> System Calls -> Shell & User Space", [
            ("Hardware Layer", "#64748b", "card"),
            ("Kernel Ring 0", "#6366f1", "card"),
            ("User Space", "#10b981", "card")
        ], content)

    elif "chmod" in cid or "permission" in cid:
        content = f'''
        <!-- File Permissions Matrix -->
        {card_box(40, 75, 260, 240, "Permission Bits (rwx)", "9 Mode Bits Matrix", [
            ("Owner (User)", "Read (4) + Write (2) + Execute (1)"),
            ("Group", "Read (4) + Write (2) + Execute (1)"),
            ("Others (World)", "Read (4) + Write (2) + Execute (1)"),
            ("Directory (r)", "Can list directory filenames"),
            ("Directory (w)", "Can create/delete files in directory"),
            ("Directory (x)", "Can cd into directory & access inodes")
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 195, 370, 195, "octal calc", "#818cf8", "mIndigo")}

        {card_box(370, 75, 270, 240, "Octal Permission Examples", "chmod Commands", [
            ("755 (rwxr-xr-x)", "Owner: rwx (7), Group: r-x (5), Other: r-x (5)"),
            ("644 (rw-r--r--)", "Owner: rw- (6), Group: r-- (4), Other: r-- (4)"),
            ("700 (rwx------)", "Private executable; accessible by owner only"),
            ("600 (rw-------)", "Private data file (SSH keys, databases)"),
            ("umask 022", "Default: 777 - 022 = 755 (dirs) / 644 (files)"),
            ("Symbolic", "chmod u+x,g-w,o=r file.txt")
        ], "#06b6d4", "#155e75")}

        {connector(640, 195, 710, 195, "special modes", "#06b6d4", "mCyan")}

        {card_box(710, 75, 170, 240, "Special Bits", "SUID / SGID / Sticky", [
            ("SUID (4000)", "Runs with owner UID"),
            ("SGID (2000)", "Inherits parent GID"),
            ("Sticky (1000)", "Only owner deletes (/tmp)"),
            ("passwd", "Classic SUID root tool")
        ], "#f59e0b", "#78350f")}

        {footer_banner(40, 335, 840, 55, "UNIX Security Rule: Least Privilege", "The 12 permission bits (3 special + 9 rwx) are stored directly inside the file's Inode, independent of the filename.")}
        '''
        return svg_canvas("UNIX File Permissions Matrix & Octal Encoding Architecture", "User, Group, Other permission triads, Octal arithmetic, umask, and SUID/Sticky bits", [
            ("Permissions Matrix", "#6366f1", "card"),
            ("Octal Modes", "#06b6d4", "card"),
            ("Special Flags", "#f59e0b", "card")
        ], content)

    elif "write" in cid or "system-call" in cid:
        content = f'''
        <!-- Syscall vs Lib Function -->
        {card_box(50, 75, 360, 240, "Library Function: printf()", "User Space (Ring 3)", [
            ("Location", "Implemented in C Standard Library (libc.so)"),
            ("Buffering", "Line-buffered or fully buffered in user RAM"),
            ("Execution", "Runs completely in user mode (fast)"),
            ("System Calls", "Flushes buffer only when newline '\\n' or full"),
            ("Overhead", "Minimizes expensive context switches to kernel"),
            ("Error Code", "Returns EOF; sets errno on failure")
        ], "#6366f1", "#1e1b4b")}

        {connector(410, 195, 490, 195, "invokes write() trap", "#06b6d4", "mCyan")}

        {card_box(490, 75, 380, 240, "System Call: write()", "Kernel Space (Ring 0)", [
            ("Hardware Trap", "Software interrupt (int 0x80 or SYSCALL instruction)"),
            ("Mode Switch", "CPU switches from User Mode (Ring 3) to Kernel (Ring 0)"),
            ("Syscall Table", "Kernel looks up __NR_write (Syscall #1 on x86-64)"),
            ("VFS Layer", "Virtual File System resolves file descriptor 1"),
            ("Device Driver", "Copies data to hardware terminal / disk page cache"),
            ("Return", "Switches back to user space via SYSRET")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 820, 55, "Context Switch Cost: System Calls vs Library Calls", "Library functions provide user-space buffering to avoid invoking the expensive hardware trap and context switch on every character output.")}
        '''
        return svg_canvas("System Calls vs Standard Library Functions Architecture", "User space libc buffering contrasted with privileged Ring 0 hardware trap execution", [
            ("User Space libc", "#6366f1", "card"),
            ("Privileged Kernel", "#10b981", "card"),
            ("Hardware Trap", "#38bdf8", "line")
        ], content)

    elif "process-synchronization" in cid or "wait" in cid:
        content = f'''
        <!-- Process Lifecycle State Machine -->
        {card_box(40, 75, 170, 240, "1. fork()", "Process Creation", [
            ("Action", "Clones parent PCB"),
            ("Copy-on-Write", "Shares RAM pages"),
            ("PID", "New unique PID assigned"),
            ("Return (Parent)", "Returns Child PID (>0)"),
            ("Return (Child)", "Returns 0")
        ], "#6366f1", "#1e1b4b")}

        {connector(210, 195, 260, 195, "execve()", "#818cf8", "mIndigo")}

        {card_box(260, 75, 180, 240, "2. execve()", "Image Replacement", [
            ("Action", "Replaces address space"),
            ("Loads ELF", "New binary into RAM"),
            ("Preserves", "PID, open FDs remain"),
            ("Start", "Begins at _start/main()")
        ], "#06b6d4", "#155e75")}

        {connector(440, 195, 490, 195, "exit(code)", "#06b6d4", "mCyan")}

        {card_box(490, 75, 180, 240, "3. Zombie State", "Dead but Unreaped", [
            ("Memory", "RAM released immediately"),
            ("PCB Entry", "Remains in process table"),
            ("Holds", "Exit status code for parent"),
            ("Danger", "Exhausts process table IDs")
        ], "#f43f5e", "#881337")}

        {connector(670, 195, 720, 195, "wait(&status)", "#10b981", "mEmerald")}

        {card_box(720, 75, 160, 240, "4. wait() Reaping", "Parent Cleanup", [
            ("wait()", "Reads child exit status"),
            ("Reaped", "PCB deleted from table"),
            ("Orphan", "Adopted by PID 1 (init)")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "UNIX Process Lifecycle Axiom: fork() -> exec() -> exit() -> wait()", "If a parent dies without calling wait(), the child becomes an Orphan and is automatically adopted and reaped by PID 1 (systemd/init).")}
        '''
        return svg_canvas("UNIX Process Lifecycle & State Machine Architecture", "fork() cloning, execve() image overwrite, Zombie process state, and wait() status collection", [
            ("Process Fork", "#6366f1", "card"),
            ("Execution", "#06b6d4", "card"),
            ("Zombie State", "#f43f5e", "card"),
            ("Reaping", "#10b981", "card")
        ], content)

    elif "error-redirection" in cid or "pipe" in cid:
        content = f'''
        <!-- Standard Streams & Redirection -->
        {card_box(50, 75, 230, 240, "Standard Streams (FDs)", "POSIX File Descriptors", [
            ("FD 0: stdin", "Standard Input (Default: Keyboard)"),
            ("FD 1: stdout", "Standard Output (Default: Terminal)"),
            ("FD 2: stderr", "Standard Error (Default: Terminal)"),
            ("Redirection", "cmd < input.txt (redirects stdin)"),
            ("Overwrite", "cmd > output.txt (redirects stdout)"),
            ("Append", "cmd >> output.txt (appends stdout)"),
            ("Error Merge", "cmd > log.txt 2>&1 (merges 1 & 2)")
        ], "#6366f1", "#1e1b4b")}

        {connector(280, 195, 360, 195, "pipe '|'", "#818cf8", "mIndigo")}

        {card_box(360, 75, 260, 240, "UNIX Pipe Subsystem", "Kernel Ring Buffer (64KB)", [
            ("Concept", "cmd1 | cmd2 (stdout of 1 -> stdin of 2)"),
            ("Kernel Buffer", "Circular in-memory FIFO queue"),
            ("Zero Disk I/O", "Data flows directly through RAM"),
            ("Synchronization", "cmd2 blocks if pipe is empty"),
            ("Backpressure", "cmd1 blocks if pipe is full (64KB)"),
            ("Broken Pipe", "SIGPIPE signal sent if reader terminates")
        ], "#06b6d4", "#155e75")}

        {connector(620, 195, 700, 195, "filtered", "#10b981", "mEmerald")}

        {card_box(700, 75, 180, 240, "Data Sink / Display", "Final Destination", [
            ("Terminal", "Display on screen"),
            ("/dev/null", "Bit bucket discard"),
            ("File", "Saved permanently"),
            ("Pipe Chain", "cmd1 | cmd2 | cmd3")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 830, 55, "The UNIX Philosophy: Modular Tools Connected by Text Streams", "Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams.")}
        '''
        return svg_canvas("UNIX Standard I/O Streams, Redirection & Pipelines Architecture", "File descriptors 0/1/2, pipe (|) kernel circular buffer, and stdout/stderr redirection", [
            ("Standard Streams", "#6366f1", "card"),
            ("Kernel Pipe", "#06b6d4", "card"),
            ("Destination", "#10b981", "card")
        ], content)

    elif "unix-shell-programming" in cid or "shell-programming" in cid or "shell" in cid:
        content = f'''
        {card_box(40, 75, 260, 240, "Shell Script Structure", "Executable Text Programs", [
            ("Shebang", "#!/bin/bash — specifies interpreter"),
            ("Variables", "NAME=value (no spaces around =)"),
            ("$VAR / ${VAR}", "Variable expansion in strings"),
            ("Read input", "read -p 'Prompt: ' VAR"),
            ("Positional", "$1 $2 $# $@ — script arguments"),
            ("Exit status", "$? — 0 = success, non-zero = error"),
            ("Exec bit", "chmod +x script.sh → ./script.sh")
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 195, 380, 195, "uses", "#818cf8", "mIndigo")}

        {card_box(380, 75, 260, 240, "Shell Control Constructs", "Flow Control in Bash", [
            ("if/elif/else/fi", "Conditional branching blocks"),
            ("for var in list", "Iteration over word list"),
            ("while [ cond ]", "Pre-test loop construct"),
            ("until [ cond ]", "Loop until condition is true"),
            ("case / esac", "Pattern match dispatch"),
            ("Functions", "fname() { body; }  — callable"),
            ("source/.", "Import another script's variables")
        ], "#06b6d4", "#155e75")}

        {connector(640, 195, 710, 195, "tools", "#10b981", "mEmerald")}

        {card_box(710, 75, 170, 240, "Text Processing", "Stream Utilities", [
            ("grep pattern", "Filter lines by regex"),
            ("sed 's/a/b/'", "Stream editor substitution"),
            ("awk '{print $1}'", "Column-based processing"),
            ("cut -d: -f1", "Field extraction delimiter"),
            ("sort / uniq", "Sort and deduplicate"),
            ("wc -l", "Count lines, words, bytes"),
            ("tr 'a-z' 'A-Z'", "Character translation")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Shell Scripting Rule", "Always quote variables (\"$VAR\"), check exit codes with $?, and test scripts with 'bash -n' for syntax errors before running.")}
        '''
        return svg_canvas("UNIX Shell Scripting: Variables, Control Flow & Text Processing Tools", "Bash script structure, conditional/loop constructs, and grep/sed/awk pipeline utilities", [
            ("Script Structure", "#6366f1", "card"),
            ("Control Flow", "#06b6d4", "card"),
            ("Text Tools", "#10b981", "card")
        ], content)

    elif "message-queue" in cid or "ipc" in cid or "unix-environment" in cid or "portability" in cid:
        content = f'''
        {card_box(40, 75, 260, 240, "System V IPC Mechanisms", "Inter-Process Communication", [
            ("Pipes (|)", "Unidirectional byte stream (anonymous)"),
            ("Named Pipe (FIFO)", "mkfifo — persists in filesystem"),
            ("Message Queues", "msgget/msgsnd/msgrcv — typed messages"),
            ("Shared Memory", "shmget/shmat — fastest IPC"),
            ("Semaphores", "semget/semop — synchronization locks"),
            ("Signals", "kill/signal — async notification"),
            ("Sockets", "TCP/UDP network-capable IPC")
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 195, 380, 195, "uses", "#818cf8", "mIndigo")}

        {card_box(380, 75, 260, 240, "Message Queue API", "msgget / msgsnd / msgrcv", [
            ("msgget(key,flags)", "Create/open message queue"),
            ("msgsnd(qid,msg,sz,flg)", "Send typed message"),
            ("msgrcv(qid,buf,sz,type,flg)", "Receive by message type"),
            ("msgctl(qid,IPC_RMID,0)", "Delete queue"),
            ("struct msgbuf", "{ long mtype; char mtext[]; }"),
            ("Message Types", "Positive: fetch specific type"),
            ("IPC_NOWAIT", "Non-blocking flag option")
        ], "#06b6d4", "#155e75")}

        {connector(640, 195, 710, 195, "env vars", "#10b981", "mEmerald")}

        {card_box(710, 75, 170, 240, "UNIX Environment", "Process Environment Block", [
            ("env / printenv", "Display all env variables"),
            ("export VAR=val", "Add to child processes"),
            ("PATH", "Colon-separated bin directories"),
            ("HOME, USER", "User identity variables"),
            ("getenv(\"PATH\")", "C function to read env"),
            ("environ[]", "char** array of env vars"),
            ("putenv(str)", "Set env from C program")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "IPC Selection Guide", "Pipes for parent-child; FIFOs for unrelated processes; Message Queues for typed delivery; Shared Memory for high-speed data exchange.")}
        '''
        return svg_canvas("UNIX IPC: Pipes, Message Queues, Shared Memory & Environment Variables", "System V IPC mechanisms, message queue API, and process environment block management", [
            ("IPC Mechanisms", "#6366f1", "card"),
            ("Message Queue API", "#06b6d4", "card"),
            ("Environment Block", "#10b981", "card")
        ], content)

    elif "numeric-comparison" in cid or "conditional-statements" in cid or "comparison" in cid:
        content = f'''
        {card_box(40, 75, 260, 240, "Numeric Comparisons", "Shell [ ] Test Operators", [
            ("-eq", "Equal:         [ $a -eq $b ]"),
            ("-ne", "Not Equal:     [ $a -ne $b ]"),
            ("-lt", "Less Than:     [ $a -lt $b ]"),
            ("-le", "Less or Equal: [ $a -le $b ]"),
            ("-gt", "Greater Than:  [ $a -gt $b ]"),
            ("-ge", "Greater/Equal: [ $a -ge $b ]"),
            ("(( ))", "Arithmetic: (( a > b )) — Bash extension")
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 195, 380, 195, "with", "#818cf8", "mIndigo")}

        {card_box(380, 75, 260, 240, "String & File Tests", "[ ] String and Path Operators", [
            ("=", "String equal:     [ \"$a\" = \"$b\" ]"),
            ("!=", "String not equal: [ \"$a\" != \"$b\" ]"),
            ("-z", "Zero length:      [ -z \"$str\" ]"),
            ("-n", "Non-empty:        [ -n \"$str\" ]"),
            ("-f file", "Regular file exists"),
            ("-d dir", "Directory exists"),
            ("-r/-w/-x", "File readable/writable/executable")
        ], "#06b6d4", "#155e75")}

        {connector(640, 195, 710, 195, "in", "#10b981", "mEmerald")}

        {card_box(710, 75, 170, 240, "if Conditional", "Shell if/elif/fi", [
            ("if [ cond ]", "Open conditional block"),
            ("then", "Begin true branch"),
            ("elif [ cond2 ]", "Alternative condition"),
            ("else", "Default fallback branch"),
            ("fi", "End of if block"),
            ("&&, ||", "Compound conditions"),
            ("! [ cond ]", "Negate the test result")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Shell Test Operators", "Always quote string variables in [ ] to handle empty/space values. Use (( )) for pure arithmetic comparisons — cleaner and faster.")}
        '''
        return svg_canvas("UNIX Shell Conditional Tests: Numeric, String & File Comparisons", "Test operators [ ], numeric -eq/-lt/-gt, string =/!=/-z, file -f/-d/-x in if/elif/fi", [
            ("Numeric Tests", "#6366f1", "card"),
            ("String/File Tests", "#06b6d4", "card"),
            ("if / elif / fi", "#10b981", "card")
        ], content)

    elif "system-booting" in cid or "authorization" in cid or "unix-system-administration" in cid or "admin" in cid:
        content = f'''
        {card_box(40, 75, 260, 240, "UNIX Boot Sequence", "System Startup Chain", [
            ("BIOS/UEFI", "POST + locate bootable device"),
            ("Bootloader", "GRUB2 loads kernel image"),
            ("Kernel Init", "Decompress vmlinuz, mount initramfs"),
            ("init / systemd", "PID 1: first user-space process"),
            ("Runlevels", "0=halt, 1=single-user, 3=multi, 5=GUI, 6=reboot"),
            ("/etc/inittab", "Traditional init configuration"),
            ("systemctl", "systemd service management command")
        ], "#6366f1", "#1e1b4b")}

        {connector(300, 195, 380, 195, "manages", "#818cf8", "mIndigo")}

        {card_box(380, 75, 260, 240, "User & Group Admin", "Authorization & Access Control", [
            ("/etc/passwd", "User accounts: name:x:UID:GID:gecos:home:shell"),
            ("/etc/shadow", "Encrypted password hashes"),
            ("/etc/group", "Group definitions and memberships"),
            ("useradd -m user", "Create user with home directory"),
            ("passwd user", "Set/change user password"),
            ("usermod -aG grp", "Add user to supplementary group"),
            ("su / sudo", "Switch user / superuser execute")
        ], "#06b6d4", "#155e75")}

        {connector(640, 195, 710, 195, "monitors", "#10b981", "mEmerald")}

        {card_box(710, 75, 170, 240, "Monitoring Tools", "Sysadmin Commands", [
            ("ps aux", "List all running processes"),
            ("top / htop", "Live CPU/Memory monitor"),
            ("df -h", "Disk filesystem usage"),
            ("du -sh *", "Directory size summary"),
            ("netstat/ss", "Network socket statistics"),
            ("dmesg", "Kernel ring buffer messages"),
            ("journalctl", "systemd service logs")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "UNIX Administration Principle", "Always prefer sudo over su root. Use systemctl for service management. Monitor /var/log/syslog and dmesg for system health indicators.")}
        '''
        return svg_canvas("UNIX System Administration: Boot Sequence, User Auth & Monitoring", "BIOS→GRUB→systemd boot chain, /etc/passwd auth, useradd/sudo, ps/df monitoring tools", [
            ("Boot Sequence", "#6366f1", "card"),
            ("User/Group Admin", "#06b6d4", "card"),
            ("Monitoring Tools", "#10b981", "card")
        ], content)

    else:
        # High-definition default Unix & Shell diagram
        content = f'''
        {card_box(50, 75, 360, 240, "UNIX Filesystem Hierarchy (FHS)", "Single Root Tree Directory", [
            ("/ (root)", "The absolute top of the directory hierarchy"),
            ("/bin, /usr/bin", "Essential command binaries (ls, cp, grep)"),
            ("/etc", "System-wide configuration files (passwd, fstab)"),
            ("/dev", "Special device files (null, zero, sda, tty)"),
            ("/home", "User personal home directories"),
            ("/var", "Variable runtime data (logs, mail, spool)"),
            ("/proc, /sys", "Virtual pseudo-filesystems exposing kernel state")
        ], "#6366f1", "#1e1b4b")}

        {connector(410, 195, 490, 195, "indexed by", "#06b6d4", "mCyan")}

        {card_box(490, 75, 380, 240, "Inode Disk Block Structure", "Multi-Level Block Addressing", [
            ("Metadata", "Permissions, UID, GID, file size, timestamps"),
            ("Direct Blocks", "Pointers 0-9 point directly to 10 data blocks"),
            ("Single Indirect", "Points to index block containing 1024 data pointers"),
            ("Double Indirect", "Points to index of index blocks (1024 × 1024)"),
            ("Triple Indirect", "Points to 3rd level index blocks (Terabyte files)"),
            ("Link Count", "Hard links share inode; deleting original keeps data")
        ], "#06b6d4", "#155e75")}

        {footer_banner(50, 335, 820, 55, "UNIX File Axiom: Everything is a File", "Regular files, directories, disk partitions, sockets, pipes, and terminal devices are all represented uniformly as byte streams via file descriptors.")}
        '''
        return svg_canvas("UNIX File System Architecture: FHS Tree & Inode Structure", "Hierarchical root filesystem structure and multi-level indirect inode disk block addressing", [
            ("FHS Tree", "#6366f1", "card"),
            ("Inode Subsystem", "#06b6d4", "card"),
            ("Block Reference", "#38bdf8", "line")
        ], content)
