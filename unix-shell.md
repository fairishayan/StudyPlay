
# UNIT 1: INTRODUCTION — CO1

## 1. Introduction to UNIX

UNIX is a multiuser, multitasking operating system originally developed at AT&T Bell Laboratories. It provides an environment in which multiple users can work simultaneously and run multiple processes.

UNIX is widely associated with portability, security, hierarchical file management, process management, networking and a powerful command-line interface.

```text
UNIX OPERATING SYSTEM
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
    Multiuser         Multitasking       Portable
        │                  │                  │
        ▼                  ▼                  ▼
Multiple users      Multiple programs    Runs on many
can work            can execute          hardware systems
simultaneously      concurrently
```

A UNIX system can be viewed as several layers:

```text
┌──────────────────────┐
             │       USER           │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │  Shell / Applications│
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │       Kernel         │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │      Hardware        │
             └──────────────────────┘
```

The kernel controls hardware and system resources, while the shell provides an interface through which users communicate with the operating system.

---

## 2. Features of UNIX

Important features of UNIX are:

**Multiuser**

Several users can use the system simultaneously.

```text
User 1 ──┐
User 2 ──┼──► UNIX System
User 3 ──┤
User 4 ──┘
```

**Multitasking**

A user can run several processes at the same time.

```text
UNIX
               │
      ┌────────┼────────┐
      ▼        ▼        ▼
   Editor    Browser   Compiler
```

**Portability**

UNIX can be implemented on different hardware architectures with relatively few hardware-dependent changes.

**Hierarchical File System**

Files are organized in directories and subdirectories.

```text
/
├── bin
├── etc
├── home
│   ├── user1
│   └── user2
├── tmp
└── usr
```

**Security**

UNIX provides user authentication, file ownership and permissions.

```text
File
 │
 ├── Owner
 ├── Group
 └── Others
```

**Networking**

UNIX provides extensive support for network communication and distributed systems.

**Powerful Shell**

Commands can be combined using pipes, redirection, variables and shell scripts.

---

## 3. UNIX System Organization

The UNIX system is organized into different layers.

```text
USERS
                       │
                       ▼
              ┌────────────────┐
              │    Commands    │
              │  Applications  │
              └───────┬────────┘
                      │
                      ▼
              ┌────────────────┐
              │     SHELL      │
              └───────┬────────┘
                      │
            ┌─────────┴─────────┐
            ▼                   ▼
     System Calls         Shell Utilities
            │
            ▼
       ┌───────────┐
       │  KERNEL   │
       └─────┬─────┘
             │
             ▼
       ┌───────────┐
       │ HARDWARE  │
       └───────────┘
```

The major components are:

1. Kernel
2. Shell
3. File system
4. System utilities
5. Application programs

---

## 4. Kernel

The kernel is the central part of the UNIX operating system. It directly interacts with hardware and manages system resources.

```text
KERNEL
                    │
     ┌──────────────┼───────────────┐
     ▼              ▼               ▼
 Process         Memory            File
Management      Management       Management
     │              │               │
     └──────────────┼───────────────┘
                    ▼
              Device Management
                    │
                    ▼
                 Hardware
```

Major responsibilities of the kernel include:

```text
Process management
Memory management
File-system management
Device management
I/O management
Security and access control
Interprocess communication
```

For example, when a program needs to read a file, it does not directly control the disk. It requests the kernel to perform the operation.

```text
Application
     │
     │ System Call
     ▼
  Kernel
     │
     ▼
File System
     │
     ▼
 Disk Device
```

---

## 5. Shell

The shell is a command interpreter that provides an interface between the user and the UNIX kernel.

```text
User
 │
 │ Command
 ▼
Shell
 │
 │ System Call / Request
 ▼
Kernel
 │
 ▼
Hardware
```

For example:

```text
ls
```

The shell interprets the command and requests the appropriate operation from the operating system.

Common UNIX shells include:

```text
Shells
  │
  ├── sh   → Bourne Shell
  ├── bash → Bourne Again Shell
  ├── csh  → C Shell
  ├── ksh  → Korn Shell
  └── zsh  → Z Shell
```

---

## 6. Kernel vs Shell

| Kernel | Shell |
| ------ | ----- |
| Core of UNIX | Command interpreter |
| Manages hardware/resources | Interprets user commands |
| Manages processes | Starts programs/processes |
| Manages memory | Provides scripting facilities |
| Manages files and devices | Provides command-line interface |
| Runs with high system privileges | Runs as a user-level program |

```text
USER
 │
 ▼
SHELL
 │
 ▼
KERNEL
 │
 ▼
HARDWARE
```

---

## 7. UNIX File System

The UNIX file system organizes files in a hierarchical tree structure.

The topmost directory is called the root directory, represented by `/`.

```text
/
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
       bin              home              etc
                         │
                  ┌──────┴──────┐
                  ▼             ▼
               user1          user2
                  │
             ┌────┴────┐
             ▼         ▼
          file1.txt  project
                       │
                       ▼
                    main.c
```

Important directories traditionally include:

| Directory | Purpose |
| --------- | ------- |
| `/` | Root directory |
| `/bin` | Essential executable commands |
| `/sbin` | System administration commands |
| `/etc` | System configuration files |
| `/home` | Users' home directories |
| `/tmp` | Temporary files |
| `/usr` | User programs, libraries and data |
| `/var` | Variable data such as logs |
| `/dev` | Device files |
| `/lib` | Essential libraries |

---

## 8. Files and Directories

A file is a collection of related data stored under a name.

A directory is a special file that contains information about files and subdirectories.

```text
Directory
   │
   ├── file1
   ├── file2
   ├── directory1
   │      ├── file3
   │      └── file4
   └── file5
```

UNIX treats many resources as files, including devices.

```text
UNIX File System
      │
      ├── Regular Files
      ├── Directories
      ├── Device Files
      ├── Named Pipes
      └── Other Special Files
```

---

## 9. Absolute and Relative Pathnames

A pathname specifies the location of a file or directory.

**Absolute pathname**

An absolute pathname starts from the root `/`.

Example:

```text
/home/fairish/project/main.c
```

```text
/
└── home
    └── fairish
        └── project
            └── main.c
```

**Relative pathname**

A relative pathname starts from the current working directory.

If the current directory is:

```text
/home/fairish/project
```

then:

```text
main.c
```

refers to:

```text
/home/fairish/project/main.c
```

Special path symbols:

```text
.   → Current directory
..  → Parent directory
~   → User's home directory
/   → Root directory
```

Example:

```text
cd ..
```

moves to the parent directory.

---

## 10. Important Basic UNIX Commands

**pwd**

Displays the current working directory.

```text
pwd
```

Example:

```text
$ pwd
/home/user
```

Diagram:

```text
Current Location
       │
       ▼
      pwd
       │
       ▼
Print pathname
```

---

**ls**

Lists files and directories.

```text
ls
```

Useful options:

```text
ls -l
ls -a
ls -la
ls -lh
```

Example:

```text
$ ls
file1.txt
file2.txt
project
```

`-l` gives detailed information.

```text
$ ls -l
-rw-r--r--  user  user  1200  file1.txt
```

`-a` displays hidden files.

---

**cd**

Changes the current directory.

```text
cd directory_name
```

Examples:

```text
cd Documents
cd ..
cd ~
cd /
```

```text
Current Directory
       │
       │ cd Documents
       ▼
Documents
```

---

**mkdir**

Creates a directory.

```text
mkdir project
```

Before:

```text
home
└── user
```

After:

```text
home
└── user
    └── project
```

Create multiple directories:

```text
mkdir dir1 dir2 dir3
```

Create nested directories:

```text
mkdir -p project/src/code
```

---

**rmdir**

Removes an empty directory.

```text
rmdir project
```

It generally cannot remove a directory containing files.

---

**touch**

Creates an empty file or updates its timestamp.

```text
touch file.txt
```

```text
Current Directory
       │
       ▼
     touch
       │
       ▼
   file.txt
```

---

**cat**

Displays the contents of a file.

```text
cat file.txt
```

It can also create a simple file from terminal input:

```text
cat > file.txt
```

Then enter text and press Ctrl+D to finish.

---

**cp**

Copies files or directories.

```text
cp source.txt destination.txt
```

Example:

```text
source.txt
    │
    │ cp
    ▼
destination.txt
```

Copy a directory recursively:

```text
cp -r project backup
```

---

**mv**

Moves or renames files and directories.

Rename:

```text
mv old.txt new.txt
```

Move:

```text
mv file.txt Documents/
```

```text
file.txt
    │
    │ mv
    ▼
Documents/file.txt
```

---

**rm**

Removes files.

```text
rm file.txt
```

Remove multiple files:

```text
rm file1 file2
```

Remove a directory recursively:

```text
rm -r project
```

Force removal:

```text
rm -rf project
```

---

**clear**

Clears the terminal screen.

```text
clear
```

---

**echo**

Displays text or variable values.

```text
echo Hello
```

Output:

```text
Hello
```

It can also display environment variables:

```text
echo $HOME
```

---

**man**

Displays the manual page for a command.

```text
man ls
```

```text
man ls
   │
   ▼
Manual Page
   │
   ├── NAME
   ├── SYNOPSIS
   ├── DESCRIPTION
   ├── OPTIONS
   └── EXAMPLES
```

---

**who**

Displays users currently logged into the system.

```text
who
```

---

**whoami**

Displays the current username.

```text
whoami
```

---

**date**

Displays the current date and time.

```text
date
```

---

**cal**

Displays a calendar.

```text
cal
```

---

**uname**

Displays information about the UNIX/Linux system.

```text
uname
```

Useful:

```text
uname -a
```

---

## 11. File Viewing Commands

UNIX provides several commands for viewing files.

**more**

Displays a file one screen at a time.

```text
more file.txt
```

**less**

Provides interactive viewing and scrolling.

```text
less file.txt
```

**head**

Displays the beginning of a file.

```text
head file.txt
```

By default, it commonly displays the first 10 lines.

```text
head -5 file.txt
```

Displays the first five lines.

**tail**

Displays the end of a file.

```text
tail file.txt
```

Example:

```text
tail -5 file.txt
```

Displays the last five lines.

```text
file.txt
             ┌─────────────┐
head ───────►│ First lines │
             │     ...     │
             │     ...     │
tail ───────►│ Last lines  │
             └─────────────┘
```

---

## 12. File and Directory Permissions

UNIX uses permissions to control access to files and directories.

Three classes of users are:

```text
Permissions
     │
     ├── Owner
     ├── Group
     └── Others
```

Three basic permissions are:

```text
r → Read
w → Write
x → Execute
```

Therefore:

```text
rwx
│││
││└── Execute
│└─── Write
└──── Read
```

Example:

```text
-rwxr-xr--
```

Can be divided as:

```text
- | rwx | r-x | r--
  |     |     |
  |     |     └── Others
  |     └──────── Group
  └────────────── Owner
```

Permission values are:

```text
Read     = 4
Write    = 2
Execute  = 1
```

Therefore:

```text
rwx = 4 + 2 + 1 = 7
r-x = 4 + 0 + 1 = 5
r-- = 4 + 0 + 0 = 4
```

So:

```text
rwxr-xr--
   ↓
  754
```

---

## 13. chmod

chmod changes file permissions.

Symbolic form:

```text
chmod u+x program.sh
```

Here:

```text
u → user/owner
+ → add
x → execute
```

Numeric form:

```text
chmod 755 program.sh
```

Meaning:

```text
Owner  → 7 → rwx
Group  → 5 → r-x
Others → 5 → r-x
```

```text
755
│││
││└── Others
│└─── Group
└──── Owner
```

---

## 14. chown

Changes the owner of a file.

```text
chown user file.txt
```

Change owner and group:

```text
chown user:group file.txt
```

Conceptually:

```text
File
 │
 ├── Old Owner
 │
 └── Old Group

       │ chown
       ▼

File
 │
 ├── New Owner
 └── New Group
```

---

## 15. chgrp

Changes the group ownership of a file.

```text
chgrp developers file.txt
```

---

## 16. UNIX Editors

The syllabus includes vi and ed.

Editors allow users to create and modify text files.

```text
Text Editors
                  │
             ┌────┴────┐
             ▼         ▼
            vi         ed
```

---

## 17. vi Editor

vi is a screen-oriented text editor commonly available on UNIX systems.

Start vi:

```text
vi filename
```

If the file does not exist, vi can create it.

```text
$ vi program.c
       │
       ▼
┌─────────────────────┐
│      vi Editor      │
│                     │
│ #include <stdio.h>  │
│ int main()          │
│ {                   │
│     printf("Hi");   │
│ }                   │
└─────────────────────┘
```

vi primarily operates in different modes.

```text
vi
                   │
       ┌───────────┴───────────┐
       ▼                       ▼
 Command Mode             Insert Mode
       │                       │
       │ i / a / o             │
       └──────────────────────►│
                               │
                          Esc │
       ◄───────────────────────┘
```

**Command Mode**

Used for navigation, deletion, copying, saving and other commands.

**Insert Mode**

Used to enter text.

**Last-Line / Ex Mode**

Used for commands such as saving and quitting.

---

## 18. Important vi Commands

Start:

```text
vi file.txt
```

Enter insert mode:

```text
i
```

Append after cursor:

```text
a
```

Open a new line below:

```text
o
```

Return to command mode:

```text
Esc
```

Save:

```text
:w
```

Quit:

```text
:q
```

Save and quit:

```text
:wq
```

Force quit without saving:

```text
:q!
```

Save and quit:

```text
ZZ
```

Delete current character:

```text
x
```

Delete current line:

```text
dd
```

Copy current line:

```text
yy
```

Paste:

```text
p
```

Undo:

```text
u
```

Search:

```text
/text
```

Move to beginning of line:

```text
0
```

Move to end of line:

```text
$
```

Move to first line:

```text
gg
```

Move to last line:

```text
G
```

---

## 19. ed Editor

ed is a line-oriented text editor.

It operates primarily through commands entered at a prompt.

Start:

```text
ed file.txt
```

Basic operations include:

```text
a  → append text
i  → insert text
d  → delete
p  → print
w  → write/save
q  → quit
```

Example:

```text
$ ed file.txt
a
Hello UNIX
.
w
q
```

Conceptually:

```text
User
 │
 ▼
ed
 │
 ├── a → Add text
 ├── p → Display text
 ├── d → Delete
 ├── w → Save
 └── q → Quit
```

---

## 20. Library Functions

A library function is a predefined function provided by a programming library. Programs can call these functions instead of implementing every operation themselves.

Examples in C include:

```text
printf()
scanf()
strlen()
strcpy()
malloc()
```

Common header files:

```text
<stdio.h>     → Input/output
<string.h>    → String operations
<stdlib.h>    → General utilities
<math.h>      → Mathematical functions
```

Example:

```c
#include <stdio.h>

int main()
{
    printf("Hello UNIX");
    return 0;
}
```

Here:

```text
Program
   │
   ▼
printf()
   │
   ▼
C Library
   │
   ▼
Operating System
   │
   ▼
Terminal
```

---

## 21. Library Function vs System Call

A library function is generally provided by a programming library, whereas a system call provides a controlled interface through which a user-level program requests a service from the kernel.

```text
Application Program
        │
        ▼
 Library Function
        │
        ▼
   System Call
        │
        ▼
      Kernel
        │
        ▼
     Hardware
```

Examples of commonly encountered UNIX system-call interfaces include:

```text
open()
read()
write()
close()
fork()
exec()
wait()
```

Library functions may internally use system calls when operating-system services are required.

---

## 22. System Calls

A system call is a mechanism through which a user-level program requests a service from the UNIX kernel.

```text
User Program
     │
     │ System Call
     ▼
┌──────────────┐
│    Kernel    │
└──────┬───────┘
       │
       ▼
Hardware / Resource
```

Major categories include:

```text
System Calls
     │
     ├── Process Control
     │     ├── fork()
     │     ├── exec()
     │     └── wait()
     │
     ├── File Management
     │     ├── open()
     │     ├── read()
     │     ├── write()
     │     └── close()
     │
     ├── Device Management
     │
     ├── Information Management
     │
     └── Communication
```

---

## 23. open()

open() is used to open a file and obtain a file descriptor.

Conceptually:

```text
fd = open("file.txt", O_RDONLY);
```

Flow:

```text
Program
   │
   ▼
open()
   │
   ▼
Kernel
   │
   ▼
File System
   │
   ▼
File Descriptor
```

A file descriptor is a small integer used by a process to refer to an open file.

---

## 24. read()

read() obtains data from an open file descriptor.

Conceptually:

```text
read(fd, buffer, size);
```

```text
File
 │
 ▼
Kernel
 │
 ▼
read()
 │
 ▼
Buffer
```

---

## 25. write()

write() sends data to a file descriptor.

Conceptually:

```text
write(fd, buffer, size);
```

```text
Buffer
  │
  ▼
write()
  │
  ▼
Kernel
  │
  ▼
File / Device
```

---

## 26. close()

close() releases an open file descriptor.

```text
close(fd);
```

```text
Open File
    │
    ▼
close()
    │
    ▼
File Descriptor Released
```

---

## 27. fork()

fork() creates a new process by duplicating the calling process.

```text
Parent Process
                    │
                  fork()
                    │
             ┌──────┴──────┐
             ▼             ▼
          Parent         Child
          Process        Process
```

After a successful fork(), there are two processes.

Before:

```text
       P
```

After:

```text
       P
      / \
     P   C
```

---

## 28. exec()

The exec family replaces the current process image with another program.

```text
Process
   │
   │ exec()
   ▼
New Program
```

Conceptually:

Before:

```text
┌─────────────┐
│ Program A   │
└─────────────┘
```

       │ exec()

After:

```text
┌─────────────┐
│ Program B   │
└─────────────┘
```

The process identity generally remains the same, but its program image is replaced.

---

## 29. fork() and exec() Together

A common UNIX technique is:

```text
Parent
  │
  │ fork()
  ▼
┌─────────────┐
│   Child     │
└──────┬──────┘
       │
       │ exec()
       ▼
  New Program
```

The parent can continue executing while the child executes another program.

---

## 30. wait()

wait() allows a parent process to wait for a child process to terminate.

```text
Parent
  │
  │ wait()
  ▼
Wait for Child
  │
  │
  ▼
Child Terminates
  │
  ▼
Parent Continues
```

---

## 31. Standard Input, Output and Error

UNIX provides three standard file descriptors:

```text
Descriptor 0 → stdin
Descriptor 1 → stdout
Descriptor 2 → stderr
```

```text
Process
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
     stdin        stdout        stderr
       │            │            │
       ▼            ▼            ▼
    Keyboard      Screen       Screen
```

**Standard Input**

Normally comes from the keyboard.

**Standard Output**

Normally goes to the terminal screen.

**Standard Error**

Used for error messages and normally goes to the terminal.

---

## 32. Command-Line Interface

A UNIX terminal commonly provides a prompt where commands are entered.

```text
$ ls
```

The complete flow is:

```text
User enters command
        │
        ▼
      Shell
        │
   Parses command
        │
        ▼
Runs program / requests service
        │
        ▼
      Kernel
        │
        ▼
     Result
        │
        ▼
     Terminal
```

Example:

```text
$ pwd
/home/user
```

Here the shell receives pwd, executes the corresponding command, and displays the result.

---

## 33. UNIX Command Structure

A typical UNIX command has:

```text
command [options] [arguments]
```

Example:

```text
ls -l /home
```

```text
ls     → Command
-l     → Option
/home  → Argument
```

Another example:

```text
cp file1.txt backup.txt
```

```text
cp          → Command
file1.txt   → Source argument
backup.txt  → Destination argument
```

---

## 34. UNIX Environment

The UNIX environment contains variables and settings that affect the behavior of the shell and programs.

Important environment variables include:

```text
HOME
PATH
USER
SHELL
PWD
TERM
```

Display a variable:

```text
echo $HOME
```

Display the shell:

```text
echo $SHELL
```

Display the current directory:

```text
echo $PWD
```

Display environment variables:

```text
env
```

or:

```text
printenv
```

---

## 35. PATH

PATH specifies directories in which the shell searches for executable commands.

Example:

```text
PATH=/usr/local/bin:/usr/bin:/bin
```

When the user enters:

```text
ls
```

the shell searches directories listed in PATH.

```text
ls
                 │
                 ▼
               Shell
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
 /usr/local/bin /usr/bin  /bin
                           │
                           ▼
                          ls
```

Display PATH:

```text
echo $PATH
```

---

## 36. Complete UNIX Architecture

```text
USER
                           │
                           ▼
                 ┌──────────────────┐
                 │   Applications   │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │      SHELL       │
                 │  Command Parser  │
                 └────────┬─────────┘
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
       UNIX Commands             System Calls
                                      │
                                      ▼
                              ┌──────────────┐
                              │    KERNEL    │
                              ├──────────────┤
                              │ Process Mgmt │
                              │ Memory Mgmt  │
                              │ File System  │
                              │ I/O Mgmt     │
                              │ Device Mgmt  │
                              │ IPC          │
                              └──────┬───────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │   HARDWARE   │
                              ├──────────────┤
                              │ CPU          │
                              │ Memory       │
                              │ Disk         │
                              │ Devices      │
                              └──────────────┘
```

## 37. Unit 1 Concept Flow

```text
UNIX
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
            Shell                     Kernel
              │                         │
              ▼                         ▼
        UNIX Commands             System Services
              │                         │
              └────────────┬────────────┘
                           ▼
                     File System
                           │
                ┌──────────┴──────────┐
                ▼                     ▼
              Files              Directories
                │
                ▼
        Permissions / Ownership
                │
                ▼
       Library Functions
                │
                ▼
          System Calls
                │
                ▼
             Hardware
                │
                ▼
        UNIX Applications
```


---

# UNIT 2: UNIX SHELL PROGRAMMING — CO2

## 1. UNIX Shell Programming

A shell is a command interpreter that acts as an interface between the user and the UNIX operating system. Shell programming allows a sequence of commands to be stored in a file called a shell script and executed as a program.

```text
USER
                      │
                      │ Commands
                      ▼
                ┌───────────┐
                │   SHELL   │
                └─────┬─────┘
                      │
             ┌────────┴────────┐
             ▼                 ▼
       UNIX Commands      Shell Script
             │                 │
             └────────┬────────┘
                      ▼
                   KERNEL
                      │
                      ▼
                  HARDWARE
```

A shell script can automate repetitive tasks such as file management, backups, calculations, process control and system administration.

Basic shell script:

```sh
#!/bin/sh

echo "Hello UNIX"
```

Save it as `hello.sh`, then execute:

```sh
chmod +x hello.sh
./hello.sh
```

Alternatively:

```sh
sh hello.sh
```

---

## 2. Types of Shells

UNIX provides several shells. Each shell has its own syntax and features.

```text
UNIX SHELLS
                              │
        ┌─────────────┬───────┼───────────┬──────────┐
        ▼             ▼       ▼           ▼          ▼
       sh            bash     csh         ksh        zsh
       │               │       │           │          │
    Bourne          Bourne   C Shell     Korn       Z Shell
    Shell           Again
                    Shell
```

**Bourne Shell (sh)** — the original Bourne shell; basic shell programming features.

```sh
sh
```

**Bash (bash)** — Bourne Again Shell; widely used in Linux and UNIX-like systems.

```sh
bash
```

**C Shell (csh)** — syntax has similarities with the C programming language; interactive features.

```sh
csh
```

**Korn Shell (ksh)** — combines features of the Bourne shell with additional programming and interactive facilities.

```sh
ksh
```

**Z Shell (zsh)** — advanced interactive features, completion, customization and scripting capabilities.

```sh
zsh
```

---

## 3. Shell Identification

The current shell can commonly be checked using:

```sh
echo $SHELL
```

Example:

```text
/bin/bash
```

The current process's shell-related environment information can also be examined using:

```sh
ps
```

To start another shell:

```sh
bash
```

To leave it:

```sh
exit
```

```text
Current Shell
     │
     │ bash
     ▼
 New Bash Shell
     │
     │ exit
     ▼
Previous Shell
```

---

## 4. Shell Metacharacters

Shell metacharacters are special characters interpreted by the shell rather than being treated simply as ordinary characters.

Important metacharacters include:

```text
;   &   &&   ||   |   >   >>   <   *   ?   [ ]   $   ' '   " "   ` `   \
```

They perform operations such as command separation, background execution, piping, redirection, wildcard matching and variable expansion.

---

## 5. Semicolon `;`

The semicolon separates multiple commands on the same command line.

```sh
date; pwd; ls
```

Execution:

```text
date
 │
 ▼
pwd
 │
 ▼
ls
```

The next command is executed regardless of whether the previous command succeeds.

---

## 6. Ampersand `&`

`&` runs a command in the background.

```sh
command &
```

Example:

```sh
gedit &
```

Conceptually:

```text
Shell
               │
            command &
               │
        ┌──────┴──────┐
        ▼             ▼
     Shell         Process
   continues       executes
```

The terminal can continue accepting commands while the background process runs.

---

## 7. Logical AND `&&`

`&&` executes the second command only if the first command succeeds.

```sh
mkdir project && cd project
```

```text
Command 1
   │
   ├── Success ──► Command 2
   │
   └── Failure ──► Command 2 not executed
```

Example:

```sh
gcc main.c && ./a.out
```

The program runs only if compilation succeeds.

---

## 8. Logical OR `||`

`||` executes the second command if the first command fails.

```sh
mkdir project || echo "Directory creation failed"
```

```text
Command 1
   │
   ├── Success ──► Stop
   │
   └── Failure ──► Command 2
```

---

## 9. Pipe `|`

A pipe sends the output of one command directly as input to another command.

```sh
ls | sort
```

```text
┌────────┐      ┌──────┐      ┌──────┐
│  ls    │ ───► │  |   │ ───► │ sort │
└────────┘      └──────┘      └──────┘
   Output                       Input
```

Another example:

```sh
cat file.txt | grep "UNIX"
```

Here, the contents produced by cat become input for grep.

Multiple pipes can be chained:

```sh
cat file.txt | grep "UNIX" | wc -l
```

```text
cat
 │
 ▼
grep
 │
 ▼
wc
```

---

## 10. Output Redirection `>`

`>` redirects standard output into a file.

```sh
ls > files.txt
```

```text
ls
 │
 │ stdout
 ▼
>
 │
 ▼
files.txt
```

If the file already exists, its previous contents are normally overwritten.

---

## 11. Append Redirection `>>`

`>>` appends output to the end of a file.

```sh
echo "New line" >> file.txt
```

```text
Existing File
     │
     ▼
    >>
     │
     ▼
New Data Added
```

Unlike `>`, it does not normally overwrite existing contents.

---

## 12. Input Redirection `<`

`<` takes standard input from a file.

```sh
command < input.txt
```

```text
input.txt
    │
    ▼
    <
    │
    ▼
 command
```

Example:

```sh
sort < names.txt
```

The sort command reads its input from names.txt.

---

## 13. Wildcards

Wildcards are used for filename pattern matching.

Important wildcards:

```text
*       Any number of characters
?       Exactly one character
[ ]     One character from a specified set/range
```

**`*`**

```sh
ls *.txt
```

Matches:

```text
a.txt
notes.txt
report.txt
```

**`?`**

```sh
ls file?.txt
```

Can match:

```text
file1.txt
file2.txt
fileA.txt
```

but not:

```text
file10.txt
```

**`[ ]`**

```sh
ls file[123].txt
```

Matches:

```text
file1.txt
file2.txt
file3.txt
```

---

## 14. Shell Variables

A shell variable stores a value that can be used by the shell or a shell script.

Creating a variable:

```sh
name="Fairish"
```

There must normally be no spaces around `=`.

Incorrect:

```sh
name = "Fairish"
```

Correct:

```sh
name="Fairish"
```

Accessing a variable:

```sh
echo $name
```

Output:

```text
Fairish
```

```text
Variable
                  │
            name="Fairish"
                  │
                  ▼
             ┌─────────┐
             │  name   │
             ├─────────┤
             │ Fairish │
             └─────────┘
                  │
                  ▼
             $name
                  │
                  ▼
               echo
```

---

## 15. Rules for Shell Variables

Variable names generally:

- Begin with a letter or underscore.
- Can contain letters, digits and underscores.
- Cannot contain spaces.
- Are case-sensitive.

Examples:

```sh
name="Ayan"
age=21
student_id=101
_total=500
```

These are different:

```sh
name="Ayan"
Name="Student"
```

because shell variable names are case-sensitive.

---

## 16. Reading User Input

The read command accepts input from the terminal.

```sh
read name
echo "Hello $name"
```

Example:

```text
Enter your name:
Ayan

Hello Ayan
```

Diagram:

```text
Keyboard
   │
   ▼
 read
   │
   ▼
Variable
   │
   ▼
 echo
   │
   ▼
Screen
```

Prompt can be provided using:

```sh
read -p "Enter name: " name
echo "Hello $name"
```

---

## 17. Shell Script

A shell script is a text file containing a sequence of shell commands.

Example:

```sh
#!/bin/bash

echo "Enter your name:"
read name
echo "Hello $name"
```

Execution:

```sh
chmod +x script.sh
./script.sh
```

Structure:

```text
Shell Script
     │
     ├── Shebang
     │
     ├── Variables
     │
     ├── Commands
     │
     ├── Input
     │
     ├── Processing
     │
     └── Output
```

---

## 18. Shebang

The first line of many shell scripts specifies the interpreter.

```sh
#!/bin/bash
```

or:

```sh
#!/bin/sh
```

The `#!` sequence is called the shebang.

```text
#!/bin/bash
│ │
│ └── Interpreter
└──── Shebang marker
```

When the script is executed directly:

```sh
./script.sh
```

the system uses the interpreter specified by the shebang.

---

## 19. Shell Comments

Comments are ignored during execution.

A comment begins with `#`.

```sh
# This is a comment
echo "Hello"
```

---

## 20. Shell Commands

Shell commands can be divided broadly into:

```text
Shell Commands
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
         Built-in Commands       External Commands
              │                       │
          cd, echo, read          ls, cp, grep
          export, pwd*            cat, sort, wc
```

A built-in command is implemented by the shell itself.

Examples:

```sh
cd
echo
read
export
unset
```

An external command is normally a separate executable program.

Examples:

```sh
ls
cp
mv
grep
sort
wc
```

pwd can vary by shell/system and may be available both as a shell builtin and as an external utility.

---

## 21. Important Shell Commands

**echo**

```sh
echo "Hello"
```

Displays text.

**read**

```sh
read name
```

Reads input.

**cd**

```sh
cd /home/user
```

Changes directory.

**pwd**

```sh
pwd
```

Displays the current directory.

**export**

```sh
export NAME="Ayan"
```

Makes a shell variable available to child processes.

**unset**

```sh
unset NAME
```

Removes a shell variable.

**exit**

```sh
exit
```

Terminates the current shell or script.

---

## 22. UNIX Environment

The shell environment contains variables that provide information used by commands and programs.

Common variables:

```text
HOME
PATH
USER
SHELL
PWD
TERM
```

View a variable:

```sh
echo $HOME
```

View PATH:

```sh
echo $PATH
```

Display environment:

```sh
env
```

or:

```sh
printenv
```

```text
Shell Environment
                          │
       ┌──────────────────┼─────────────────┐
       ▼                  ▼                 ▼
     HOME                PATH              USER
       │                  │                 │
  Home directory    Command search       Username
```

---

## 23. HOME

HOME stores the path of the user's home directory.

```sh
echo $HOME
```

Example:

```text
/home/user
```

Using:

```sh
cd $HOME
```

moves to the home directory.

---

## 24. USER

USER commonly stores the current username.

```sh
echo $USER
```

Example:

```text
fairish
```

---

## 25. PWD

PWD normally contains the current working directory.

```sh
echo $PWD
```

Example:

```text
/home/user/project
```

---

## 26. SHELL

SHELL commonly identifies the user's default shell.

```sh
echo $SHELL
```

Example:

```text
/bin/bash
```

---

## 27. Integer Arithmetic

Shell arithmetic can be performed using arithmetic expansion.

```sh
a=10
b=5
sum=$((a+b))
echo $sum
```

Output:

```text
15
```

Common operators:

```text
+    Addition
-    Subtraction
*    Multiplication
/    Division
%    Modulus
```

Example:

```sh
a=20
b=6

echo $((a+b))
echo $((a-b))
echo $((a*b))
echo $((a/b))
echo $((a%b))
```

Output:

```text
26
14
120
3
2
```

Diagram:

```text
a = 20
b = 6
 │
 ▼
Arithmetic Expansion
$((a+b))
$((a-b))
$((a*b))
$((a/b))
$((a%b))
 │
 ▼
Result
```

---

## 28. Increment and Decrement

Arithmetic expansion supports increment and decrement.

```sh
a=10
a=$((a+1))
echo $a
```

Output:

```text
11
```

Decrement:

```sh
a=$((a-1))
```

With arithmetic syntax:

```sh
((a++))
((a--))
```

---

## 29. String Manipulation

Shell variables can store strings.

```sh
name="UNIX"
echo "$name"
```

String concatenation:

```sh
first="Fairish"
last="Ayan"

full="$first $last"

echo "$full"
```

Output:

```text
Fairish Ayan
```

```text
first ──┐
        ├──► "$first $last" ──► full
last ───┘
```

String length:

```sh
name="UNIX"
echo ${#name}
```

Output:

```text
4
```

---

## 30. Command Substitution

Command substitution stores the output of a command in a variable.

Modern syntax:

```sh
today=$(date)
echo "$today"
```

Traditional syntax:

```sh
today=`date`
```

Preferred form:

```sh
$(command)
```

Diagram:

```text
date
 │
 ▼
Command Output
 │
 ▼
$(date)
 │
 ▼
Variable
```

Example:

```sh
current_dir=$(pwd)
echo "$current_dir"
```

---

## 31. Special Command-Line Characters

Several characters have special meanings in shell programming.

```text
$     Variable expansion
;     Command separator
&     Background execution
|     Pipe
>     Output redirection
<     Input redirection
*     Wildcard
?     Single-character wildcard
#     Comment
\     Escape character
' '   Literal string
" "   Expand variables inside string
```

---

## 32. Single Quotes

Single quotes preserve the literal meaning of most characters inside them.

```sh
name="Ayan"
echo '$name'
```

Output:

```text
$name
```

The variable is not expanded.

---

## 33. Double Quotes

Double quotes allow variable expansion.

```sh
name="Ayan"
echo "$name"
```

Output:

```text
Ayan
```

Comparison:

```text
echo '$name'  → $name
echo "$name"  → Ayan
```

---

## 34. Escape Character `\`

The backslash is used to prevent special interpretation of the following character.

Example:

```sh
echo "\$HOME"
```

Output:

```text
$HOME
```

Without the backslash:

```sh
echo "$HOME"
```

the value of HOME is expanded.

---

## 35. Command-Line Arguments

Arguments can be passed to a shell script when it is executed.

Script:

```sh
#!/bin/bash

echo "First argument: $1"
echo "Second argument: $2"
```

Execution:

```sh
./script.sh Ayan 21
```

Output:

```text
First argument: Ayan
Second argument: 21
```

Important special parameters:

```text
$0   Script name
$1   First argument
$2   Second argument
$3   Third argument
$#   Number of arguments
$@   All arguments
$?   Exit status of previous command
$$   Process ID of current shell
```

Diagram:

```text
./script.sh Ayan 21
      │       │    │
      │       │    └── $2
      │       └─────── $1
      └─────────────── $0
```

---

## 36. `$#`

`$#` gives the number of positional arguments.

```sh
echo "Arguments: $#"
```

Execution:

```sh
./test.sh A B C
```

Output:

```text
Arguments: 3
```

---

## 37. `$@`

`$@` represents the positional arguments.

```sh
echo "$@"
```

Example:

```sh
./test.sh A B C
```

Output:

```text
A B C
```

It is especially useful for processing all arguments.

---

## 38. `$?`

`$?` contains the exit status of the most recently executed command.

Conventionally:

```text
0       Success
Non-zero Failure/error
```

Example:

```sh
ls
echo $?
```

If `ls` succeeds:

```text
0
```

If a command fails, a non-zero value is generally returned.

```text
Command
   │
   ▼
Exit Status
   │
 ┌─┴─────┐
 ▼       ▼
 0     Non-zero
 │       │
Success Failure
```

---

## 39. Decision Making

Shell scripts support conditional execution using:

- if
- if-else
- if-elif-else
- case

Basic structure:

```sh
if condition
then
    commands
fi
```

Diagram:

```text
Condition
                 │
          ┌──────┴──────┐
          ▼             ▼
        True           False
          │             │
          ▼             ▼
      Commands        Skip
```

---

## 40. if Statement

Example:

```sh
#!/bin/bash

age=21

if [ $age -ge 18 ]
then
    echo "Adult"
fi
```

Output:

```text
Adult
```

The condition is tested using `[ ... ]`, which is commonly the shell test command syntax.

---

## 41. if-else

```sh
if [ condition ]
then
    commands
else
    commands
fi
```

Example:

```sh
read age

if [ $age -ge 18 ]
then
    echo "Eligible"
else
    echo "Not eligible"
fi
```

Flow:

```text
age >= 18?
             /        \
           Yes        No
            │          │
            ▼          ▼
        Eligible    Not eligible
```

---

## 42. if-elif-else

Used when there are multiple conditions.

```sh
if [ condition1 ]
then
    commands
elif [ condition2 ]
then
    commands
else
    commands
fi
```

Example:

```sh
marks=75

if [ $marks -ge 80 ]
then
    echo "A"
elif [ $marks -ge 60 ]
then
    echo "B"
else
    echo "C"
fi
```

Flow:

```text
Condition 1
              /       \
            Yes        No
             │          │
             ▼          ▼
          Block 1   Condition 2
                       /    \
                     Yes     No
                      │       │
                      ▼       ▼
                   Block 2  Else
```

---

## 43. Numeric Comparison Operators

Common test operators:

```text
-eq    Equal
-ne    Not equal
-gt    Greater than
-ge    Greater than or equal
-lt    Less than
-le    Less than or equal
```

Example:

```sh
if [ $a -gt $b ]
then
    echo "a is greater"
fi
```

---

## 44. String Comparison

Common string tests include:

```text
=       Equal
!=      Not equal
-z      String is empty
-n      String is not empty
```

Example:

```sh
name="Ayan"

if [ "$name" = "Ayan" ]
then
    echo "Name matched"
fi
```

---

## 45. File Tests

Shell provides operators for checking file properties.

```text
-f    Regular file
-d    Directory
-e    Exists
-r    Readable
-w    Writable
-x    Executable
-s    File exists and has non-zero size
```

Example:

```sh
if [ -f "data.txt" ]
then
    echo "File exists"
fi
```

Diagram:

```text
data.txt
                 │
              -f test
                 │
          ┌──────┴──────┐
          ▼             ▼
        True           False
          │             │
          ▼             ▼
     File exists    File absent
```

---

## 46. Logical Operators in Conditions

Conditions can be combined.

Common forms:

```text
&&    AND
||    OR
!     NOT
```

Example:

```sh
if [ $age -ge 18 ] && [ $age -le 60 ]
then
    echo "Valid age"
fi
```

```text
Condition A ──┐
              ├── AND ──► Result
Condition B ──┘
```

---

## 47. case Statement

case is useful when one value must be compared against multiple patterns.

Syntax:

```sh
case $variable in
    pattern1)
        commands
        ;;
    pattern2)
        commands
        ;;
    *)
        default commands
        ;;
esac
```

Example:

```sh
read choice

case $choice in
    1)
        echo "Add"
        ;;
    2)
        echo "Delete"
        ;;
    3)
        echo "Exit"
        ;;
    *)
        echo "Invalid choice"
        ;;
esac
```

Flow:

```text
choice
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
          1            2            3
          │            │            │
          ▼            ▼            ▼
         Add         Delete        Exit
                       │
                 Other values
                       │
                       ▼
                    Invalid
```

---

## 48. Loop Control

Loops repeatedly execute commands.

```text
Loops
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
         for        while      until
          │           │           │
       Known       Condition    Until
       iteration   based        condition
```

The syllabus particularly includes loop control using shell constructs.

---

## 49. for Loop

The for loop processes a sequence of values.

Syntax:

```sh
for variable in list
do
    commands
done
```

Example:

```sh
for name in Ayan Rahul Sara
do
    echo "$name"
done
```

Output:

```text
Ayan
Rahul
Sara
```

Flow:

```text
List
 │
 ▼
Get next value
 │
 ▼
Execute commands
 │
 ▼
More values?
 ├── Yes ──► Get next value
 └── No ───► Exit loop
```

---

## 50. for Loop with Files

```sh
for file in *.txt
do
    echo "$file"
done
```

If the directory contains:

```text
a.txt
b.txt
c.txt
```

the loop processes each matching filename.

---

## 51. while Loop

The while loop executes commands while a condition remains true.

Syntax:

```sh
while [ condition ]
do
    commands
done
```

Example:

```sh
i=1

while [ $i -le 5 ]
do
    echo $i
    i=$((i+1))
done
```

Output:

```text
1
2
3
4
5
```

Flow:

```text
Start
               │
               ▼
          Test condition
               │
        ┌──────┴──────┐
        ▼             ▼
      True           False
        │              │
        ▼              ▼
    Execute          Exit
    commands
        │
        ▼
    Update value
        │
        └──────────────► Test
```

---

## 52. until Loop

Although not explicitly named in every shell syllabus, it is an important shell loop-control construct.

It executes commands until the condition becomes true.

```sh
i=1

until [ $i -gt 5 ]
do
    echo $i
    i=$((i+1))
done
```

Output:

```text
1
2
3
4
5
```

Conceptually:

```text
Condition true?
   │
 ┌─┴───┐
Yes    No
 │      │
Exit   Execute
        │
        ▼
      Repeat
```

---

## 53. break

break terminates the current loop immediately.

```sh
for i in 1 2 3 4 5
do
    if [ $i -eq 3 ]
    then
        break
    fi
    echo $i
done
```

Output:

```text
1
2
```

```text
Loop
 │
 ▼
i = 3?
 │
 ├── No ──► Continue loop
 │
 └── Yes ─► break ─► Exit loop
```

---

## 54. continue

continue skips the remaining commands of the current iteration and starts the next iteration.

```sh
for i in 1 2 3 4 5
do
    if [ $i -eq 3 ]
    then
        continue
    fi
    echo $i
done
```

Output:

```text
1
2
4
5
```

```text
Iteration
    │
    ▼
Condition?
    │
 ┌──┴───┐
 │      │
No     Yes
 │      │
 ▼      ▼
Work  continue
 │      │
 └──┬───┘
    ▼
Next iteration
```

---

## 55. Controlling Terminal Input

Shell scripts normally receive input through standard input (stdin).

```text
Keyboard
    │
    ▼
 stdin
    │
    ▼
 Shell Script
    │
    ▼
 read
    │
    ▼
 Variable
```

Example:

```sh
echo "Enter age:"
read age
echo "Age = $age"
```

Input can also be redirected:

```sh
./script.sh < input.txt
```

```text
input.txt
    │
    ▼
 stdin
    │
    ▼
script.sh
```

---

## 56. Terminal Output Control

Standard output can be redirected.

```sh
echo "Hello" > output.txt
```

```text
echo
 │
 ▼
stdout
 │
 ▼
>
 │
 ▼
output.txt
```

Errors can be redirected using standard error descriptor 2.

```sh
command 2> error.txt
```

Standard output and standard error can be combined:

```sh
command > output.txt 2>&1
```

Conceptually:

```text
command
             /     \
         stdout    stderr
           │         │
           ▼         ▼
          file      same
                    destination
```

---

## 57. Trapping Signals

A signal is a notification sent to a process to indicate that an event has occurred.

Examples:

```text
SIGINT   → Interrupt, commonly Ctrl+C
SIGTERM  → Request termination
SIGKILL  → Forceful termination
SIGHUP   → Hangup
SIGQUIT  → Quit
```

Shell scripts can respond to signals using trap.

Syntax:

```sh
trap 'commands' SIGNAL
```

Example:

```sh
trap 'echo "Interrupted"' INT
```

When the script receives SIGINT, the specified command is executed.

```text
User
 │
 │ Ctrl+C
 ▼
SIGINT
 │
 ▼
trap
 │
 ▼
Handler Command
```

---

## 58. Example of trap

```sh
#!/bin/bash

trap 'echo "Signal received"' INT

while true
do
    echo "Running..."
    sleep 2
done
```

When Ctrl+C generates SIGINT, the trap handler executes.

Another example:

```sh
trap 'echo "Cleaning up"; exit' INT TERM
```

This can perform cleanup before terminating.

---

## 59. Arrays

An array stores multiple values under one variable name.

In Bash:

```sh
names=("Ayan" "Rahul" "Sara")
```

Access an element:

```sh
echo "${names[0]}"
```

Output:

```text
Ayan
```

Array indexing starts at 0.

```text
names
 │
 ├── [0] → Ayan
 ├── [1] → Rahul
 └── [2] → Sara
```

---

## 60. Creating and Accessing Arrays

```sh
numbers=(10 20 30 40 50)

echo "${numbers[0]}"
echo "${numbers[2]}"
```

Output:

```text
10
30
```

Modify an element:

```sh
numbers[2]=100
```

Now:

```text
[0] → 10
[1] → 20
[2] → 100
[3] → 40
[4] → 50
```

---

## 61. Array Length

Number of elements:

```sh
echo "${#numbers[@]}"
```

Example:

```sh
numbers=(10 20 30 40)

echo "${#numbers[@]}"
```

Output:

```text
4
```

---

## 62. Loop Through an Array

```sh
names=("Ayan" "Rahul" "Sara")

for name in "${names[@]}"
do
    echo "$name"
done
```

Output:

```text
Ayan
Rahul
Sara
```

Diagram:

```text
Array
               │
      ┌────────┼────────┐
      ▼        ▼        ▼
    Ayan     Rahul     Sara
      │        │        │
      └────────┼────────┘
               ▼
             for
               │
               ▼
             echo
```

---

## 63. Complete Shell Programming Flow

```text
SHELL SCRIPT
                              │
                              ▼
                     Read Shell Script
                              │
                              ▼
                    Variable Expansion
                              │
             ┌────────────────┼────────────────┐
             ▼                ▼                ▼
          Commands        Conditions          Loops
             │                │                │
             │         ┌──────┴──────┐    ┌────┴────┐
             │         ▼             ▼    ▼         ▼
             │        if           case  for      while
             │
             └────────────────┬─────────────────┘
                              ▼
                     Input / Output
                              │
                 ┌────────────┼────────────┐
                 ▼            ▼            ▼
                stdin       stdout       stderr
                 │            │            │
                 └────────────┼────────────┘
                              ▼
                           Kernel
                              │
                              ▼
                           Output
```

## 64. Complete Unit 2 Concept Map

```text
UNIX SHELL PROGRAMMING
                                  │
        ┌─────────────────────────┼──────────────────────────┐
        ▼                         ▼                          ▼
   Types of Shells          Shell Programming          Shell Commands
        │                         │                          │
   ┌────┼────┐              ┌─────┼─────┐             ┌─────┴─────┐
   ▼    ▼    ▼              ▼     ▼     ▼             ▼           ▼
  sh   bash  csh          Variables Scripts       Built-in    External
   │    │     │              │       │
   └────┴─────┘              │       │
                             ▼       ▼
                     ┌──────────────────────┐
                     │   Metacharacters     │
                     └──────────┬───────────┘
                                │
       ┌──────────────┬─────────┼──────────┬─────────────┐
       ▼              ▼         ▼          ▼             ▼
       |              >         <          *             ?
      Pipe          Output    Input     Wildcard      Wildcard
                 Redirection Redirection
                                │
                                ▼
                       UNIX Environment
                                │
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
                   HOME        PATH        USER
                                │
                                ▼
                       Arithmetic / Strings
                                │
                                ▼
                       Decision Making
                                │
                  ┌─────────────┼──────────────┐
                  ▼             ▼              ▼
                 if           case          Conditions
                                │
                                ▼
                         Loop Control
                                │
              ┌─────────────────┼─────────────────┐
              ▼                 ▼                 ▼
             for             while             until
              │
              ├── break
              └── continue
                                │
                                ▼
                       Terminal Input/Output
                                │
                                ▼
                         Signal Handling
                                │
                                ▼
                              trap
                                │
                                ▼
                             Arrays
```


---

# UNIT 3: PORTABILITY WITH C — CO3

## 1. Portability with C

Portability means the ability of a C program to run on different UNIX/Linux systems with little or no modification.

C provides portability because the same source code can generally be compiled for different systems using a suitable compiler.

```text
C Source Program
                           │
                           ▼
                    ┌─────────────┐
                    │   Compiler  │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
           Linux/UNIX    BSD/UNIX     Other UNIX
              │            │            │
              ▼            ▼            ▼
          Executable   Executable   Executable
```

Portability is affected by:

- Operating-system interfaces
- Compiler differences
- Hardware architecture
- Data type sizes
- System calls
- File-system conventions
- Endianness
- Platform-dependent libraries

---

## 2. Command-Line Arguments

Command-line arguments allow values to be passed to a C program when it is executed.

The standard `main()` form is:

```c
int main(int argc, char *argv[])
{
    /* program */
}
```

Here:

```text
argc = argument count
argv = argument vector
argv[0] = program name
argv[1] = first argument
argv[2] = second argument
```

Example:

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    printf("Number of arguments: %d\n", argc);

    for (int i = 0; i < argc; i++)
        printf("argv[%d] = %s\n", i, argv[i]);

    return 0;
}
```

Compile:

```sh
gcc args.c -o args
```

Execute:

```sh
./args Ayan 21
```

Conceptually:

```text
./args Ayan 21
   │    │    │
   │    │    └── argv[2]
   │    └─────── argv[1]
   └──────────── argv[0]

argc = 3
```

---

## 3. argc

argc stores the number of command-line arguments, including the program name.

Example:

```sh
./program one two three
```

The values are:

```text
argc = 4

argv[0] = "./program"
argv[1] = "one"
argv[2] = "two"
argv[3] = "three"
```

Diagram:

```text
argc = 4
                  │
        ┌─────────┴─────────┐
        ▼         ▼         ▼         ▼
      argv[0]   argv[1]   argv[2]   argv[3]
        │         │         │         │
    program       one       two      three
```

---

## 4. argv

argv is an array of character pointers.

Each element points to a string containing one command-line argument.

```c
printf("%s\n", argv[1]);
```

For:

```sh
./test Hello
```

the result is:

```text
Hello
```

The conceptual memory structure is:

```text
argv
 │
 ├── argv[0] ──► "./test"
 │
 ├── argv[1] ──► "Hello"
 │
 └── argv[2] ──► NULL
```

---

## 5. Background Processes

A background process runs independently while the shell remains available for additional commands.

A command can be placed in the background using `&`.

```sh
./program &
```

Example:

```sh
sleep 30 &
```

The shell immediately returns to the prompt.

```text
Shell
                │
          command &
                │
        ┌───────┴────────┐
        ▼                ▼
    Background        Shell prompt
     Process               │
        │                  ▼
        │             New commands
        ▼
     Execution
```

Foreground execution:

```sh
./program
```

Background execution:

```sh
./program &
```

---

## 6. Process ID

Every running process has a unique Process ID (PID) assigned by the operating system.

A C program can obtain its PID using:

```c
#include <stdio.h>
#include <unistd.h>

int main()
{
    printf("PID = %d\n", getpid());
    return 0;
}
```

Compile:

```sh
gcc pid.c -o pid
```

Run:

```sh
./pid
```

Example output:

```text
PID = 2458
```

The shell can also display process information:

```sh
ps
```

More detailed:

```sh
ps -ef
```

---

## 7. Process Synchronization

Process synchronization coordinates the execution of processes so that they access shared resources safely and in the required order.

Without synchronization:

```text
Process A ──► Shared Data ◄── Process B
                  │
                  ▼
             Conflict/Race
```

With synchronization:

```text
Process A ──► Synchronization ──► Shared Data
                                      ▲
                                      │
Process B ──► Synchronization ────────┘
```

Synchronization is required when processes:

- Share data
- Access common files
- Communicate through IPC mechanisms
- Modify shared resources

---

## 8. Race Condition

A race condition occurs when multiple processes access shared data concurrently and the final result depends on the order in which operations occur.

Suppose:

```text
Shared value = 10
```

Two processes both execute:

```c
value = value + 1;
```

Possible sequence:

```text
Process A: Read 10
Process B: Read 10
Process A: Write 11
Process B: Write 11
```

Final value:

```text
11
```

instead of the expected:

```text
12
```

Diagram:

```text
Shared Data = 10
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       Process A           Process B
       Read 10             Read 10
          │                   │
       Write 11            Write 11
          │                   │
          └─────────┬─────────┘
                    ▼
               Final = 11
```

Synchronization mechanisms prevent such conflicts.

---

## 9. Sharing of Data

Processes can exchange or share information through Inter-Process Communication (IPC) mechanisms.

Common mechanisms include:

```text
IPC
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
     Pipes          FIFOs       Message Queues
       │             │             │
       └─────────────┼─────────────┘
                     ▼
                Shared Memory
                     │
                     ▼
                  Sockets
```

Each mechanism has different characteristics and use cases.

---

## 10. Inter-Process Communication

IPC is a collection of mechanisms that allow processes to exchange data and coordinate execution.

Common UNIX IPC mechanisms:

1. Pipes
2. FIFOs
3. Message queues
4. Shared memory
5. Semaphores
6. Sockets

Basic communication:

```text
┌─────────────┐                  ┌─────────────┐
│   Process A │ ────── IPC ───► │   Process B │
└─────────────┘                  └─────────────┘
      │                                  │
      └──────────── Data ────────────────┘
```

---

## 11. Pipes

A pipe provides a unidirectional communication channel between processes.

At the shell level:

```sh
ls | grep ".c"
```

Here:

```text
ls
 │
 │ stdout
 ▼
Pipe
 │
 │ stdin
 ▼
grep
```

The output of `ls` becomes the input of `grep`.

---

## 12. Pipe in C

The `pipe()` system call creates a pipe.

Header:

```c
#include <unistd.h>
```

Syntax:

```c
int pipe(int fd[2]);
```

The array contains two file descriptors:

```text
fd[0] → Read end
fd[1] → Write end
```

Diagram:

```text
Pipe
      ┌─────────────────┐
      │                 │
fd[1] ──► WRITE     READ ──► fd[0]
      │                 │
      └─────────────────┘
```

Example:

```c
#include <stdio.h>
#include <unistd.h>

int main()
{
    int fd[2];

    if (pipe(fd) == -1)
    {
        perror("pipe");
        return 1;
    }

    printf("Read FD: %d\n", fd[0]);
    printf("Write FD: %d\n", fd[1]);

    return 0;
}
```

---

## 13. Pipe Between Parent and Child

A common use is communication between a parent and child process.

```text
Parent Process
                    │
                    │ write()
                    ▼
              ┌───────────┐
              │   PIPE    │
              └─────┬─────┘
                    │
                    │ read()
                    ▼
              Child Process
```

Example:

```c
#include <stdio.h>
#include <unistd.h>
#include <string.h>

int main()
{
    int fd[2];
    char buffer[100];

    pipe(fd);

    if (fork() == 0)
    {
        close(fd[1]);

        read(fd[0], buffer, sizeof(buffer));
        printf("Child received: %s\n", buffer);

        close(fd[0]);
    }
    else
    {
        close(fd[0]);

        char msg[] = "Hello from parent";
        write(fd[1], msg, strlen(msg) + 1);

        close(fd[1]);
    }

    return 0;
}
```

Important functions:

- `pipe()`
- `fork()`
- `read()`
- `write()`
- `close()`

---

## 14. File Descriptors

A file descriptor is a small integer used by UNIX processes to identify open files and communication channels.

Standard descriptors:

```text
0 → stdin
1 → stdout
2 → stderr
```

Diagram:

```text
Process
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
      FD 0         FD 1         FD 2
     stdin        stdout       stderr
       │            │            │
    Keyboard      Screen       Screen
```

Files and pipes also receive file descriptors when opened.

---

## 15. FIFO

FIFO stands for First In, First Out.

A FIFO is a named pipe that appears as a special file in the file system.

Unlike an ordinary unnamed pipe, a FIFO can be accessed by unrelated processes.

```text
Process A
   │
   │ write
   ▼
┌───────────────┐
│ FIFO / Named  │
│     Pipe      │
└───────┬───────┘
        │
        │ read
        ▼
    Process B
```

Create a FIFO from the shell:

```sh
mkfifo myfifo
```

Check it:

```sh
ls -l myfifo
```

Write:

```sh
echo "Hello" > myfifo
```

Read from another terminal:

```sh
cat < myfifo
```

---

## 16. FIFO in C

A FIFO can be created using `mkfifo()`.

Header:

```c
#include <sys/types.h>
#include <sys/stat.h>
```

Syntax:

```c
int mkfifo(const char *pathname, mode_t mode);
```

Example:

```c
#include <sys/types.h>
#include <sys/stat.h>
#include <stdio.h>

int main()
{
    if (mkfifo("myfifo", 0666) == -1)
        perror("mkfifo");

    return 0;
}
```

Compile:

```sh
gcc fifo.c -o fifo
```

---

## 17. Message Queues

A message queue provides a structured way for processes to exchange messages.

Unlike a basic pipe, messages can be stored as separate units.

```text
Process A
    │
    │ Message 1
    │ Message 2
    │ Message 3
    ▼
┌────────────────────┐
│   Message Queue    │
├────────────────────┤
│ Message 1          │
│ Message 2          │
│ Message 3          │
└─────────┬──────────┘
          │
          ▼
      Process B
```

Messages can be sent and received independently.

---

## 18. System V Message Queues

Common System V message queue functions:

```text
msgget()   → Create/access queue
msgsnd()   → Send message
msgrcv()   → Receive message
msgctl()   → Control/remove queue
```

Headers commonly include:

```c
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/msg.h>
```

Basic flow:

```text
msgget()
                │
                ▼
          Message Queue
             /      \
            /        \
       msgsnd()     msgrcv()
          │            │
          ▼            ▼
      Sender         Receiver
```

---

## 19. msgget()

Creates a new message queue or obtains an existing one.

Syntax:

```c
int msgget(key_t key, int msgflg);
```

Example:

```c
int id = msgget(IPC_PRIVATE, 0666 | IPC_CREAT);
```

The returned value is the message queue identifier.

---

## 20. msgsnd()

Sends a message to the queue.

Syntax:

```c
int msgsnd(int msqid,
           const void *msgp,
           size_t msgsz,
           int msgflg);
```

Basic sequence:

```text
Message
   │
   ▼
msgsnd()
   │
   ▼
Message Queue
```

---

## 21. msgrcv()

Receives a message from a message queue.

Syntax:

```c
ssize_t msgrcv(int msqid,
               void *msgp,
               size_t msgsz,
               long msgtyp,
               int msgflg);
```

Flow:

```text
Message Queue
      │
      ▼
   msgrcv()
      │
      ▼
Receiver Buffer
```

---

## 22. Shared Memory

Shared memory allows multiple processes to access a common memory region.

It is one of the fastest IPC mechanisms because data can be accessed directly from the shared region rather than repeatedly copying it through another IPC mechanism.

```text
Shared Memory
          ┌─────────────────┐
          │                 │
          │    Data Area    │
          │                 │
          └─────────────────┘
             ▲           ▲
             │           │
          Process A    Process B
```

Both processes must coordinate access when the data is modified.

---

## 23. Shared Memory Concept

```text
┌──────────────┐       ┌──────────────┐
│   Process A  │       │   Process B  │
│              │       │              │
│ Virtual      │       │ Virtual      │
│ Address      │       │ Address      │
│ Space        │       │ Space        │
└──────┬───────┘       └──────┬───────┘
       │                       │
       └──────────┬────────────┘
                  ▼
        ┌──────────────────┐
        │ Shared Memory    │
        │ Segment          │
        └──────────────────┘
```

Typical System V functions:

```text
shmget()   → Create/get shared memory
shmat()    → Attach to process
shmdt()    → Detach
shmctl()   → Control/remove
```

---

## 24. shmget()

Creates or obtains a shared-memory segment.

Syntax:

```c
int shmget(key_t key, size_t size, int shmflg);
```

Example:

```c
int id = shmget(IPC_PRIVATE, 1024, 0666 | IPC_CREAT);
```

---

## 25. shmat()

Attaches the shared-memory segment to the process address space.

Syntax:

```c
void *shmat(int shmid, const void *shmaddr, int shmflg);
```

Example:

```c
char *ptr = (char *)shmat(id, NULL, 0);
```

Conceptually:

```text
Shared Memory Segment
         │
         │ shmat()
         ▼
Process Address Space
         │
         ▼
      Pointer
```

---

## 26. shmdt()

Detaches the shared-memory segment from the process.

```c
shmdt(ptr);
```

Flow:

```text
Process
   │
   │ attached
   ▼
Shared Memory
   │
   │ shmdt()
   ▼
Detached
```

---

## 27. Semaphores

A semaphore is a synchronization mechanism used to control access to shared resources.

A semaphore can be viewed as a counter or signaling mechanism.

```text
Semaphore
                  │
         ┌────────┴────────┐
         ▼                 ▼
       wait()           signal()
         │                 │
         ▼                 ▼
     Decrease           Increase
       value              value
```

The two fundamental operations are often called:

```text
wait / P / down
signal / V / up
```

---

## 28. Semaphore for Mutual Exclusion

Suppose two processes need to access the same shared resource.

```text
Shared Resource
                    ▲
                    │
          ┌─────────┴─────────┐
          │                   │
      Process A           Process B
          │                   │
          └─────────┬─────────┘
                    │
                Semaphore
```

Only one process should enter the critical section at a time.

```text
Process A
   │
 wait()
   │
   ▼
Critical Section
   │
 signal()
   │
   ▼
Process B
```

---

## 29. Critical Section

A critical section is a portion of code that accesses a shared resource and must be executed under controlled access.

```text
Process
   │
   ▼
Normal Code
   │
   ▼
wait()
   │
   ▼
┌──────────────────┐
│ Critical Section │
│ Shared Resource  │
└────────┬─────────┘
         │
      signal()
         │
         ▼
     Normal Code
```

---

## 30. Shared Variables

A shared variable is data that can be accessed by multiple processes or execution contexts.

Example concept:

```c
int counter = 0;
```

If two processes modify the same logical resource concurrently, synchronization may be necessary.

```text
counter
                │
        ┌───────┴───────┐
        ▼               ▼
    Process A        Process B
       │                 │
       └───────┬─────────┘
               ▼
         Synchronization
               │
               ▼
         Consistent Data
```

A normal global variable is not automatically shared between independent processes after `fork()`. Each process ordinarily has its own address space. Actual inter-process sharing requires mechanisms such as shared memory.

---

## 31. User ID

A User ID (UID) identifies a user account in UNIX/Linux.

The system uses the UID to determine ownership and permissions.

C can obtain the current UID using:

```c
#include <unistd.h>

uid_t uid = getuid();
```

Example:

```c
#include <stdio.h>
#include <unistd.h>

int main()
{
    printf("UID = %d\n", getuid());
    return 0;
}
```

Shell command:

```sh
id
```

Example information:

```text
uid=1000(user) gid=1000(user) groups=1000(user)
```

---

## 32. Group ID

A Group ID (GID) identifies the group associated with a process or user.

C function:

```c
getgid()
```

Example:

```c
#include <stdio.h>
#include <unistd.h>

int main()
{
    printf("GID = %d\n", getgid());
    return 0;
}
```

Relationship:

```text
User
                 │
          ┌──────┴──────┐
          ▼             ▼
         UID            GID
          │             │
       User ID       Group ID
```

---

## 33. Effective User ID and Group ID

UNIX also maintains effective identity information.

Functions include:

```c
geteuid()
getegid()
```

They are important when permissions are checked for process operations.

```text
Process
   │
   ├── Real UID
   ├── Effective UID
   ├── Real GID
   └── Effective GID
```

---

## 34. Process Synchronization with wait()

A parent process can wait for a child process to finish using `wait()`.

Header:

```c
#include <sys/wait.h>
```

Example:

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main()
{
    if (fork() == 0)
    {
        printf("Child running\n");
        return 0;
    }
    else
    {
        wait(NULL);
        printf("Child completed\n");
    }

    return 0;
}
```

Flow:

```text
Parent
  │
  ├── fork()
  │
  ├──────────────► Child
  │                  │
  │                  ▼
  │               Execute
  │                  │
  │                  ▼
  │               Exit
  │
  └── wait() ◄───────┘
       │
       ▼
 Parent continues
```

---

## 35. waitpid()

`waitpid()` allows a parent process to wait for a particular child process.

Syntax:

```c
pid_t waitpid(pid_t pid, int *status, int options);
```

Example:

```c
pid_t pid = fork();

if (pid == 0)
{
    printf("Child\n");
}
else
{
    waitpid(pid, NULL, 0);
    printf("Parent continues\n");
}
```

---

## 36. Pipes and Process Synchronization

Pipes can also provide synchronization because a blocking read may wait until data becomes available.

```text
Parent
  │
  │ write()
  ▼
┌──────────────┐
│     Pipe     │
└──────┬───────┘
       │
       │ read()
       ▼
     Child
```

This creates an ordering relationship between processes.

---

## 37. Introduction to Socket Programming

A socket is an endpoint used for communication between processes.

Sockets can communicate:

- On the same machine
- Across a network

Basic network communication:

```text
┌──────────────┐                      ┌──────────────┐
│ Client       │                      │ Server       │
│ Process      │                      │ Process      │
└──────┬───────┘                      └──────┬───────┘
       │                                     │
       │              Network                │
       │                                     │
       └──────────── Socket Connection ──────┘
```

---

## 38. Client-Server Model

Socket programming commonly follows the client-server model.

```text
SERVER
                       │
                    socket()
                       │
                    bind()
                       │
                   listen()
                       │
                   accept()
                       │
                       ▲
                       │
                 Connection
                       │
                       ▼
                    CLIENT
                       │
                    socket()
                       │
                   connect()
```

The server waits for client requests.

---

## 39. Socket Functions

Important socket functions include:

```text
socket()      Create socket
bind()        Assign address
listen()      Wait for connections
accept()      Accept connection
connect()     Connect to server
send()        Send data
recv()        Receive data
close()       Close socket
```

---

## 40. socket()

Creates a socket.

Syntax:

```c
int socket(int domain, int type, int protocol);
```

Example:

```c
int sockfd = socket(AF_INET, SOCK_STREAM, 0);
```

Common values:

```text
AF_INET       IPv4
AF_INET6      IPv6

SOCK_STREAM   TCP-style reliable byte stream
SOCK_DGRAM    UDP-style datagrams
```

---

## 41. bind()

`bind()` associates a socket with a local address and port.

Conceptually:

```text
Socket
   │
   │ bind()
   ▼
IP Address + Port
```

A server generally uses `bind()` before listening.

---

## 42. listen()

`listen()` places a stream socket into a passive state so that it can accept incoming connections.

```c
listen(sockfd, 5);
```

Conceptually:

```text
Client Requests
      │
      ▼
┌─────────────┐
│ Listen Queue│
└──────┬──────┘
       │
       ▼
    accept()
```

---

## 43. accept()

`accept()` accepts a pending client connection.

```c
int newfd = accept(sockfd, NULL, NULL);
```

The listening socket normally continues to listen while the returned socket is used for communication with the accepted client.

```text
Listening Socket
       │
       ▼
   accept()
       │
       ▼
Connected Socket
       │
       ▼
send()/recv()
```

---

## 44. connect()

A client uses `connect()` to request a connection to a server.

```c
connect(sockfd, ...);
```

Flow:

```text
Client
  │
  │ connect()
  ▼
Server Listening Socket
  │
  ▼
accept()
  │
  ▼
Connection Established
```

---

## 45. TCP Socket Communication

TCP provides reliable, connection-oriented communication.

Typical sequence:

```text
SERVER                              CLIENT

socket()                            socket()
   │                                   │
bind()                                 │
   │                                   │
listen()                               │
   │                                   │
accept() ◄──────── connect() ──────────┘
   │
   ├──────────── send/recv ────────────┐
   │                                   │
   └───────────────────────────────────┘
               close()
```

---

## 46. UDP Socket Communication

UDP is connectionless and uses datagrams.

Typical functions:

```text
sendto()
recvfrom()
```

Conceptual flow:

```text
Client
  │
  │ sendto()
  ▼
Network
  │
  ▼
Server
  │
  │ recvfrom()
```

Unlike TCP, UDP does not establish a persistent connection before sending each datagram.

---

## 47. Pipes vs FIFOs vs Message Queues vs Shared Memory vs Sockets

| Mechanism | Main Purpose | Named? | Typical Communication |
| --------- | ------------ | ------ | --------------------- |
| Pipe | Simple IPC | No | Related processes |
| FIFO | Named IPC | Yes | Unrelated processes possible |
| Message Queue | Message-based IPC | Kernel object | Structured messages |
| Shared Memory | High-speed data sharing | Kernel object | Shared data region |
| Socket | Local/network communication | Address endpoint | Same/different machines |

---

## 48. IPC Selection

```text
Need IPC?
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
    Simple stream    Structured      Shared
       data           messages        data
          │             │             │
          ▼             ▼             ▼
        Pipe       Message Queue   Shared Memory
          │
          ▼
   Unrelated processes?
       │          │
      No         Yes
       │          │
       ▼          ▼
     Pipe        FIFO

             Network communication?
                       │
                       ▼
                    Socket
```

---

## 49. Process and IPC Relationship

```text
UNIX KERNEL
                              │
       ┌──────────────────────┼──────────────────────┐
       ▼                      ▼                      ▼
   Process A              IPC Mechanisms          Process B
       │                      │                      │
       │              ┌───────┼───────┐              │
       │              ▼       ▼       ▼              │
       └───────────► Pipe   FIFO   Queue ◄────────────┘
                              │
                              ▼
                        Shared Memory
                              │
                              ▼
                           Socket
```

---

## 50. Complete Unit 3 Concept Map

```text
UNIT 3
                    PORTABILITY WITH C
                           │
       ┌───────────────────┼────────────────────┐
       ▼                   ▼                    ▼
 Command-Line           Processes              IPC
  Arguments                │                    │
       │                   │          ┌─────────┼──────────┐
       ▼                   ▼          ▼         ▼          ▼
 argc / argv           Background   Pipe       FIFO     Message Queue
                           │
                           ▼
                         PID
                           │
                           ▼
                    Synchronization
                           │
              ┌────────────┼─────────────┐
              ▼            ▼             ▼
            wait()       waitpid()    Semaphores
              │                            │
              ▼                            ▼
          Parent/Child              Critical Section
                                           │
                                           ▼
                                      Shared Data
                                           │
                         ┌─────────────────┼─────────────────┐
                         ▼                 ▼                 ▼
                    Shared Memory       Variables         Processes
                         │
                         ▼
                  shmget/shmat/
                  shmdt/shmctl

       ┌───────────────────────────────────────────────┐
       │                  UNIX IDENTITY                │
       ├───────────────────────────────────────────────┤
       │ UID → User ID                                 │
       │ GID → Group ID                                │
       │ EUID → Effective User ID                      │
       │ EGID → Effective Group ID                     │
       └───────────────────────────────────────────────┘

                           │
                           ▼
                   SOCKET PROGRAMMING
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
           TCP/Stream                UDP/Datagram
              │                         │
              ▼                         ▼
           socket()                  socket()
              │
              ▼
            bind()
              │
              ▼
           listen()
              │
              ▼
           accept()
              │
              ▼
       send()/recv()
              │
              ▼
           close()

                           │
                           ▼
                    PORTABLE C PROGRAM
                           │
       ┌───────────────────┼────────────────────┐
       ▼                   ▼                    ▼
 Standard C            POSIX APIs           UNIX APIs
       │                   │                    │
       ▼                   ▼                    ▼
 Portable code      Process/IPC support   System-specific
```


---

# UNIT 4: UNIX SYSTEM ADMINISTRATION — CO4

## 1. UNIX System Administration

UNIX system administration is the management of a UNIX/Linux system to ensure that users, files, storage, processes, security, and system services operate correctly.

A system administrator, commonly called a system administrator or sysadmin, manages:

- Users and groups
- File systems
- Storage and disks
- System booting
- Shutdown and restart
- File permissions and security
- Backup and recovery
- System configuration
- System resources

```text
UNIX SYSTEM
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
      Users                File System            Storage
        │                     │                     │
        ▼                     ▼                     ▼
   User Accounts         Mount/Unmount          Disk Commands
        │                     │
        └─────────────┬───────┘
                      ▼
                 Administration
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
     Boot           Security       Backup
       │              │              │
       ▼              ▼              ▼
   Shutdown       Permissions     Recovery
```

---

## 2. UNIX File System

The UNIX file system organizes data in a hierarchical tree structure.

The top-level directory is called the root directory, represented by `/`.

```text
/
                         │
       ┌─────────────────┼──────────────────┐
       ▼                 ▼                  ▼
     /bin              /home              /etc
       │                 │                  │
       │          ┌──────┴──────┐           │
       │          ▼             ▼           │
       │       user1          user2         │
       │          │             │           │
       │       files         files          │
       │
       ├── /dev
       ├── /tmp
       ├── /usr
       ├── /var
       └── /mnt
```

Important directories:

| Directory | Purpose |
| --------- | ------- |
| `/` | Root of the file system |
| `/bin` | Essential executable commands |
| `/sbin` | System administration commands |
| `/etc` | System configuration files |
| `/home` | Users' home directories |
| `/dev` | Device files |
| `/tmp` | Temporary files |
| `/usr` | User applications and libraries |
| `/var` | Variable data such as logs |
| `/mnt` | Common mount point |
| `/boot` | Boot-related files |

---

## 3. File System Hierarchy

UNIX uses a hierarchical structure in which directories can contain files and other directories.

```text
/
│
├── bin
├── boot
├── dev
├── etc
│   ├── passwd
│   └── hosts
├── home
│   ├── user1
│   │   ├── file1
│   │   └── file2
│   └── user2
├── tmp
├── usr
│   ├── bin
│   └── lib
└── var
    └── log
```

The structure makes file organization easier and allows administrators to control access systematically.

---

## 4. File System Commands

**pwd**

Displays the current working directory.

```sh
pwd
```

Example:

```text
/home/user
```

**ls**

Lists files and directories.

```sh
ls
```

Detailed listing:

```sh
ls -l
```

Including hidden files:

```sh
ls -la
```

**cd**

Changes the current directory.

```sh
cd /home/user
```

Move to parent directory:

```sh
cd ..
```

Move to home directory:

```sh
cd ~
```

---

## 5. Creating Directories

The mkdir command creates directories.

```sh
mkdir project
```

Multiple directories:

```sh
mkdir dir1 dir2 dir3
```

Create nested directories:

```sh
mkdir -p project/src/code
```

Diagram:

Before:

```text
project
  └── src
       └── code
```

After mkdir -p:

```text
project/
└── src/
    └── code/
```

---

## 6. Creating Files

The touch command can create an empty file.

```sh
touch file.txt
```

Multiple files:

```sh
touch file1.txt file2.txt
```

A file can also be created using redirection:

```sh
echo "Hello" > file.txt
```

---

## 7. Copying Files

The cp command copies files or directories.

```sh
cp source.txt destination.txt
```

Copy a file to a directory:

```sh
cp file.txt /home/user/Documents/
```

Copy a directory recursively:

```sh
cp -r project backup/
```

Concept:

```text
source.txt
     │
     │ cp
     ▼
destination.txt
```

---

## 8. Moving and Renaming Files

The mv command moves or renames files.

Rename:

```sh
mv old.txt new.txt
```

Move:

```sh
mv file.txt /home/user/Documents/
```

Concept:

```text
old.txt
   │
   │ mv
   ▼
new.txt
```

---

## 9. Removing Files and Directories

Remove a file:

```sh
rm file.txt
```

Remove an empty directory:

```sh
rmdir directory
```

Remove a directory and its contents:

```sh
rm -r directory
```

Force removal:

```sh
rm -rf directory
```

rm -rf is powerful and destructive. UNIX does not generally provide a friendly "Are you sure?" safety net for such commands, because apparently civilization decided competence was enough.

---

## 10. File Permissions

UNIX provides permissions to control who can read, write, or execute a file.

There are three basic permissions:

```text
r → Read
w → Write
x → Execute
```

They are applied to three categories:

```text
u → User/Owner
g → Group
o → Others
```

Diagram:

```text
File
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
     User       Group      Others
       │          │          │
      rwx        rwx        rwx
```

---

## 11. Permission Representation

Consider:

```text
-rwxr-xr--
```

Breakdown:

```text
- | rwx | r-x | r--
  │   │     │     │
  │   │     │     └── Others
  │   │     └──────── Group
  │   └────────────── Owner
  └────────────────── File type
```

Meaning:

```text
Owner  → read + write + execute
Group  → read + execute
Others → read only
```

---

## 12. File Type Indicators

The first character of a long listing indicates the file type.

```text
-   Regular file
d   Directory
l   Symbolic link
c   Character device
b   Block device
p   Named pipe
s   Socket
```

Example:

```sh
ls -l
```

Output:

```text
drwxr-xr-x  user user 4096 Documents
-rw-r--r--  user user  250 file.txt
```

---

## 13. chmod

chmod changes file permissions.

Symbolic method:

```sh
chmod u+x script.sh
```

This gives the owner execute permission.

Remove write permission from others:

```sh
chmod o-w file.txt
```

Give read and write permission to group:

```sh
chmod g+rw file.txt
```

---

## 14. Numeric Permission System

Permissions have numeric values:

```text
Read     = 4
Write    = 2
Execute  = 1
```

Therefore:

```text
rwx = 4 + 2 + 1 = 7
rw- = 4 + 2     = 6
r-x = 4 +     1 = 5
r-- = 4         = 4
-w- =     2     = 2
--x =         1 = 1
--- = 0
```

Example:

```sh
chmod 755 script.sh
```

Means:

```text
7 → Owner  → rwx
5 → Group  → r-x
5 → Others → r-x
```

Diagram:

```text
chmod 755
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
       7         5         5
       │         │         │
      rwx       r-x       r-x
     Owner     Group     Others
```

---

## 15. chown

chown changes the owner of a file.

```sh
chown user file.txt
```

Change owner and group:

```sh
chown user:group file.txt
```

For a directory and its contents:

```sh
chown -R user:group directory
```

Concept:

Before:

```text
file.txt
Owner = user1
```

        │ chown user2
        ▼

After:

```text
file.txt
Owner = user2
```

---

## 16. chgrp

Changes the group ownership.

```sh
chgrp developers file.txt
```

For a directory recursively:

```sh
chgrp -R developers project/
```

---

## 17. Mounting a File System

Mounting means attaching a file system to a directory in the existing UNIX directory tree.

For example:

```sh
mount /dev/sdb1 /mnt/data
```

Concept:

Before:

```text
/
├── home
├── usr
└── mnt
    └── data
```

```text
/dev/sdb1
     │
     │ mount
     ▼
   /mnt/data
```

After mounting:

```text
/
└── mnt
    └── data
        ├── file1
        ├── file2
        └── directory
```

---

## 18. Mount Points

A mount point is a directory where an additional file system becomes accessible.

Example:

```sh
mkdir /mnt/data
mount /dev/sdb1 /mnt/data
```

Diagram:

```text
/dev/sdb1
    │
    │ mounted at
    ▼
/mnt/data
    │
    ├── file1
    ├── file2
    └── folder
```

---

## 19. mount Command

To display currently mounted file systems:

```sh
mount
```

To mount a file system:

```sh
mount /dev/sdb1 /mnt/data
```

Specify file-system type:

```sh
mount -t ext4 /dev/sdb1 /mnt/data
```

Modern Linux systems may also use:

```sh
findmnt
```

to inspect mount relationships.

---

## 20. Unmounting a File System

Unmounting removes a file system from the active directory tree.

Command:

```sh
umount /mnt/data
```

or:

```sh
umount /dev/sdb1
```

Concept:

Mounted:

```text
/mnt/data
    │
    ▼
/dev/sdb1
    │
    ▼
Files accessible
```

        │
      umount
        ▼

```text
/mnt/data
    │
    ▼
No longer connected to /dev/sdb1
```

A file system usually cannot be unmounted while it is busy.

---

## 21. /etc/fstab

The /etc/fstab file contains persistent file-system mount configuration.

Conceptually:

```text
/etc/fstab
    │
    ├── Device
    ├── Mount Point
    ├── File System Type
    ├── Options
    ├── Dump
    └── fsck Order
```

Example:

```text
/dev/sdb1   /mnt/data   ext4   defaults   0   2
```

This allows the system to mount configured file systems automatically during boot.

---

## 22. System Booting

Booting is the process of starting the operating system.

Typical Linux boot sequence:

```text
Power ON
   │
   ▼
Firmware
BIOS / UEFI
   │
   ▼
Bootloader
GRUB
   │
   ▼
Linux Kernel
   │
   ▼
initramfs
   │
   ▼
systemd / init
   │
   ▼
System Services
   │
   ▼
Login / Desktop / Shell
```

---

## 23. Bootloader

A bootloader loads the operating system kernel into memory.

A common Linux bootloader is GRUB.

```text
Firmware
   │
   ▼
GRUB
   │
   ├── Select kernel
   │
   └── Load kernel
          │
          ▼
        Linux
```

The bootloader may also provide a menu for selecting different operating systems or kernel configurations.

---

## 24. Linux Kernel During Boot

After the bootloader loads the kernel, the kernel initializes important system components.

```text
Kernel
  │
  ├── CPU initialization
  ├── Memory management
  ├── Device initialization
  ├── Driver loading
  ├── File-system setup
  └── Process management
          │
          ▼
       PID 1
```

On modern Linux systems, PID 1 is commonly systemd.

---

## 25. systemd

systemd is a system and service manager used by many modern Linux distributions.

It manages:

- System services
- Startup dependencies
- Logging integration
- Mount points
- Targets
- Background services

Useful commands:

```sh
systemctl status
```

View a service:

```sh
systemctl status ssh
```

Start:

```sh
systemctl start ssh
```

Stop:

```sh
systemctl stop ssh
```

Restart:

```sh
systemctl restart ssh
```

Enable at boot:

```sh
systemctl enable ssh
```

Disable at boot:

```sh
systemctl disable ssh
```

---

## 26. System Shutdown

Shutdown safely terminates running processes and powers off the system.

Command:

```sh
shutdown -h now
```

Another common command:

```sh
poweroff
```

Restart:

```sh
reboot
```

Using systemctl:

```sh
systemctl poweroff
```

```sh
systemctl reboot
```

Concept:

```text
Shutdown Request
       │
       ▼
Stop Services
       │
       ▼
Terminate Processes
       │
       ▼
Unmount File Systems
       │
       ▼
Sync Data
       │
       ▼
Power Off
```

---

## 27. Handling User Accounts

UNIX is a multi-user operating system.

Each user generally has:

- Username
- UID
- Primary GID
- Home directory
- Login shell
- Password/authentication information

```text
USER ACCOUNT
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
     Username           UID              GID
        │                                 │
        ▼                                 ▼
    Login name                         Group
        │
        ├──────── Home Directory
        │
        └──────── Login Shell
```

---

## 28. Creating a User

The useradd command creates a user account.

```sh
sudo useradd username
```

Create with a home directory:

```sh
sudo useradd -m username
```

Specify a shell:

```sh
sudo useradd -m -s /bin/bash username
```

Set a password:

```sh
sudo passwd username
```

---

## 29. adduser

On distributions that provide it, adduser offers a more interactive account-creation process.

```sh
sudo adduser username
```

It may ask for:

- Password
- Full Name
- Room Number
- Work Phone
- Home Phone
- Other

The exact behavior depends on the UNIX/Linux distribution.

---

## 30. Deleting a User

Delete an account:

```sh
sudo userdel username
```

Delete the account and its home directory:

```sh
sudo userdel -r username
```

Concept:

```text
User Account
     │
     ├── UID
     ├── Group
     ├── Home
     └── Files
          │
          ▼
      userdel
          │
          ▼
    Account removed
```

---

## 31. User Information Commands

Current user:

```sh
whoami
```

User identity and groups:

```sh
id
```

Currently logged-in users:

```sh
who
```

More detailed login information:

```sh
w
```

Last login records:

```sh
last
```

---

## 32. Groups

Groups allow administrators to manage permissions for multiple users.

Create a group:

```sh
sudo groupadd developers
```

Add a user to a group:

```sh
sudo usermod -aG developers username
```

View groups:

```sh
groups username
```

Concept:

```text
developers
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
       user1          user2          user3
          │             │             │
          └─────────────┼─────────────┘
                        ▼
                Shared Permissions
```

---

## 33. /etc/passwd

/etc/passwd contains basic user account information.

Typical structure:

```text
username:x:UID:GID:comment:home:shell
```

Example:

```text
user:x:1000:1000:User:/home/user:/bin/bash
```

Fields:

1. Username
2. Password placeholder
3. UID
4. GID
5. User information
6. Home directory
7. Login shell

The actual password hashes are normally stored separately in /etc/shadow.

---

## 34. /etc/group

/etc/group contains group information.

Typical structure:

```text
groupname:x:GID:members
```

Example:

```text
developers:x:1001:user1,user2
```

---

## 35. /etc/shadow

/etc/shadow stores password-related authentication information and password-aging data on systems using traditional shadow passwords.

It is normally restricted to privileged access.

```text
/etc/passwd
      │
      ├── User identity information
      │
      ▼
/etc/shadow
      │
      └── Password authentication data
```

---

## 36. Backup

A backup is a copy of important data stored separately so that it can be restored after accidental deletion, hardware failure, corruption, or another data-loss event.

```text
Original Data
                      │
                      ▼
                   Backup
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
    Local Backup            Remote Backup
          │                       │
          ▼                       ▼
   External Disk              Server/Cloud
```

A good backup system considers:

- What data is backed up
- How often backups occur
- Where backups are stored
- How restoration is tested
- Retention requirements

---

## 37. tar

tar is commonly used to archive files and directories.

Create an archive:

```sh
tar -cvf backup.tar Documents/
```

Create compressed gzip archive:

```sh
tar -czvf backup.tar.gz Documents/
```

Extract:

```sh
tar -xvf backup.tar
```

Extract gzip archive:

```sh
tar -xzvf backup.tar.gz
```

List contents:

```sh
tar -tvf backup.tar
```

Concept:

```text
Files
 │
 ├── file1
 ├── file2
 └── file3
       │
       ▼
     tar
       │
       ▼
 backup.tar
```

---

## 38. cp for Backup

A simple local backup can be created using:

```sh
cp -r Documents Documents_backup
```

However, this is only a basic copy and does not provide the features of a proper backup strategy.

---

## 39. rsync

rsync efficiently synchronizes files and directories.

Example:

```sh
rsync -av Documents/ backup/
```

Remote synchronization:

```sh
rsync -av Documents/ user@server:/backup/Documents/
```

Concept:

```text
Source
  │
  │ rsync
  ▼
Compare Changes
  │
  ▼
Transfer Required Data
  │
  ▼
Destination
```

It can avoid retransmitting unchanged data, making repeated synchronization efficient.

---

## 40. Recovery

Recovery is the process of restoring data or system functionality after failure or data loss.

Typical recovery sequence:

```text
Failure
   │
   ▼
Identify Problem
   │
   ▼
Locate Backup
   │
   ▼
Restore Data
   │
   ▼
Verify Files
   │
   ▼
Resume Operation
```

Example:

```sh
tar -xzvf backup.tar.gz
```

Restores files from a gzip-compressed archive.

---

## 41. Security in UNIX

UNIX security protects:

- Users
- Files
- Processes
- System resources
- Network services
- Authentication information

Main security mechanisms:

```text
UNIX SECURITY
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
 Authentication       Authorization        Auditing
        │                  │                  │
        ▼                  ▼                  ▼
    Passwords          Permissions          Logs
    Accounts           Ownership
    Groups             ACLs
```

---

## 42. Authentication

Authentication verifies the identity of a user.

```text
User
 │
 │ Username + Authentication
 ▼
Authentication System
 │
 ├── Valid ──► Access
 │
 └── Invalid ─► Denied
```

Examples include:

```sh
login
ssh username@server
```

---

## 43. Authorization

Authorization determines what an authenticated user is allowed to access.

Example:

```text
User
 │
 ▼
Authentication
 │
 ▼
Identity
 │
 ▼
Permissions
 │
 ├── Read
 ├── Write
 └── Execute
```

For example, a user may be allowed to read a file but not modify it.

---

## 44. sudo

sudo allows an authorized user to execute commands with elevated privileges.

Example:

```sh
sudo apt update
```

Administrative shell:

```sh
sudo -i
```

Concept:

```text
Normal User
     │
     │ sudo
     ▼
Privilege Check
     │
 ┌───┴────┐
 ▼        ▼
Allowed  Denied
 │
 ▼
Privileged Command
```

---

## 45. Access Control Lists

Traditional UNIX permissions provide owner, group, and others permissions.

ACLs provide more fine-grained access control.

View ACL:

```sh
getfacl file.txt
```

Set an ACL:

```sh
setfacl -m u:user2:r file.txt
```

Concept:

```text
Traditional:
Owner → rwx
Group → r-x
Others → r--

ACL:
Owner → rwx
Group → r-x
user2 → r--
user3 → rw-
Others → ---
```

---

## 46. File Security Commands

Important commands:

```sh
chmod
chown
chgrp
umask
getfacl
setfacl
```

umask controls default permission bits removed when new files and directories are created.

Example:

```sh
umask
```

Set:

```sh
umask 022
```

---

## 47. Creating Files

Files can be created using several commands.

Using touch:

```sh
touch file.txt
```

Using echo:

```sh
echo "Hello" > file.txt
```

Using cat:

```sh
cat > file.txt
```

Then enter:

```text
Hello UNIX
```

Press:

```text
Ctrl + D
```

to finish input.

---

## 48. Writing to Files

Overwrite:

```sh
echo "New data" > file.txt
```

Append:

```sh
echo "More data" >> file.txt
```

Diagram:

```text
>                 >>
          │                 │
          ▼                 ▼
       Overwrite          Append
          │                 │
          ▼                 ▼
    Existing data       Existing data
      replaced          + new data
```

---

## 49. Reading Files

cat:

```sh
cat file.txt
```

less:

```sh
less file.txt
```

First lines:

```sh
head file.txt
```

Last lines:

```sh
tail file.txt
```

Follow a changing file:

```sh
tail -f logfile
```

Concept:

```text
File
 │
 ├── cat   → Display all
 ├── head  → Display beginning
 ├── tail  → Display end
 └── less  → Paginated viewing
```

---

## 50. Disk Storage

UNIX provides commands for examining disk and storage usage.

Important commands:

```sh
df
du
lsblk
mount
findmnt
```

---

## 51. df

df displays available and used space on mounted file systems.

```sh
df
```

Human-readable:

```sh
df -h
```

Example:

```text
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1       100G   50G   45G  53% /
```

Concept:

```text
Disk/File System
      │
      ├── Used Space
      ├── Free Space
      └── Mount Point
```

---

## 52. du

du displays disk usage of files and directories.

```sh
du
```

Human-readable:

```sh
du -h
```

Directory summary:

```sh
du -sh Documents
```

Concept:

```text
Documents/
├── file1 → 2 MB
├── file2 → 5 MB
└── file3 → 3 MB

Total → 10 MB
```

---

## 53. lsblk

lsblk displays block devices and their relationships.

```sh
lsblk
```

Concept:

```text
Disk
 │
 ├── Partition 1
 ├── Partition 2
 └── Partition 3
```

Example:

```text
sda
├─sda1
├─sda2
└─sda3
```

---

## 54. fdisk

fdisk is a disk partitioning utility.

```sh
sudo fdisk -l
```

It can display partition information and, depending on permissions and context, modify partition tables.

Basic conceptual structure:

```text
Physical Disk
┌─────────────────────────────────────┐
│ Partition 1 │ Partition 2 │ Part. 3│
└─────────────────────────────────────┘
```

Partitioning should be performed carefully because incorrect changes can destroy data.

---

## 55. free

Displays memory usage.

```sh
free
```

Human-readable:

```sh
free -h
```

Typical information:

```text
total   used   free
Memory
Swap
```

Concept:

```text
RAM
┌───────────────────────────────┐
│ Used │ Available │ Buffers... │
└───────────────────────────────┘
```

---

## 56. top

top provides a dynamic view of running processes and system resource usage.

```sh
top
```

It commonly displays:

- Process ID
- User
- CPU usage
- Memory usage
- Process state
- Command

Concept:

```text
top
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
      CPU           RAM          Processes
       │             │             │
       └─────────────┼─────────────┘
                     ▼
               System Status
```

---

## 57. Process Commands

Important process-related commands:

```sh
ps
top
pgrep
kill
pkill
jobs
bg
fg
```

Display processes:

```sh
ps
```

All processes:

```sh
ps -ef
```

---

## 58. kill

kill sends a signal to a process.

```sh
kill PID
```

Force termination:

```sh
kill -9 PID
```

Concept:

```text
Process
   │
   │ PID
   ▼
kill PID
   │
   ▼
Signal
   │
   ▼
Process handles/terminates
```

kill -9 sends SIGKILL, which cannot be caught or ignored by the target process.

---

## 59. Disk-Related Commands Summary

```text
DISK MANAGEMENT
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
      df            du         lsblk
       │            │            │
  File-system    Directory     Block
    usage          usage       devices
       │
       ▼
     mount
       │
       ▼
   File System
       │
       ▼
    umount
```

Additional command:

```sh
sudo fdisk -l
```

---

## 60. Log Files

UNIX/Linux systems maintain logs containing information about system events.

Common locations include:

```text
/var/log/
```

Examples may include:

```text
/var/log/syslog
/var/log/auth.log
```

The exact files vary by distribution and logging configuration.

View logs:

```sh
ls /var/log
```

Read a log:

```sh
less /var/log/syslog
```

Follow a log:

```sh
tail -f /var/log/syslog
```

On systems using systemd, the journal can be queried with:

```sh
journalctl
```

---

## 61. journalctl

journalctl displays logs collected by the systemd journal.

View logs:

```sh
journalctl
```

Current boot:

```sh
journalctl -b
```

Kernel messages:

```sh
journalctl -k
```

Service logs:

```sh
journalctl -u ssh
```

Follow logs:

```sh
journalctl -f
```

Concept:

```text
System Events
      │
      ▼
systemd-journald
      │
      ▼
Journal
      │
      ▼
journalctl
      │
      ▼
Administrator
```

---

## 62. System Administration Workflow

```text
UNIX ADMINISTRATION
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
      Manage Users      Manage Files      Manage Storage
          │                 │                 │
          ▼                 ▼                 ▼
      useradd            mkdir              df
      passwd             cp                 du
      usermod            mv                 lsblk
      userdel            rm                 mount
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ▼
                         Security
                            │
                ┌───────────┼───────────┐
                ▼           ▼           ▼
             chmod        chown        sudo
                │
                ▼
          System Operation
                │
       ┌────────┼─────────┐
       ▼        ▼         ▼
      Boot    Services  Shutdown
       │        │         │
       ▼        ▼         ▼
      GRUB   systemctl  reboot
                         poweroff
                            │
                            ▼
                     Backup & Recovery
                            │
                      ┌─────┴─────┐
                      ▼           ▼
                     tar        rsync
```

---

## 63. Important UNIX Administration Commands

| Task | Command |
| ---- | ------- |
| Current directory | `pwd` |
| List files | `ls` |
| Change directory | `cd` |
| Create directory | `mkdir` |
| Create file | `touch` |
| Copy | `cp` |
| Move/Rename | `mv` |
| Delete file | `rm` |
| Delete directory | `rmdir` |
| Change permissions | `chmod` |
| Change owner | `chown` |
| Change group | `chgrp` |
| User identity | `whoami, id` |
| Add user | `useradd` |
| Delete user | `userdel` |
| Change password | `passwd` |
| Add group | `groupadd` |
| Add user to group | `usermod -aG` |
| Mount | `mount` |
| Unmount | `umount` |
| Disk usage | `df, du` |
| Block devices | `lsblk` |
| Partition information | `fdisk -l` |
| Processes | `ps` |
| Dynamic process view | `top` |
| Terminate process | `kill` |
| Service management | `systemctl` |
| Logs | `journalctl` |
| Archive | `tar` |
| Synchronize files | `rsync` |
| Shutdown | `shutdown, poweroff` |
| Restart | `reboot` |

---

## 64. Complete Unit 4 Concept Map

```text
UNIT 4
              UNIX SYSTEM ADMINISTRATION
                         │
 ┌───────────────────────┼────────────────────────┐
 ▼                       ▼                        ▼
FILE SYSTEM            USERS                    STORAGE
 │                       │                        │
 ├── /                   ├── UID                  ├── df
 ├── /home               ├── GID                  ├── du
 ├── /etc                ├── passwd              ├── lsblk
 ├── /var                ├── shadow              └── fdisk
 ├── /dev                └── group
 └── /usr
 │
 ├── mkdir
 ├── touch
 ├── cp
 ├── mv
 └── rm
                         │
                         ▼
                    PERMISSIONS
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
            Owner       Group      Others
              │          │          │
             rwx        rwx        rwx
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
            chmod      chown       chgrp
                         │
                         ▼
                       sudo
                         │
                         ▼
                     SECURITY

 ┌───────────────────────┼────────────────────────┐
 ▼                       ▼                        ▼
MOUNTING               BOOTING                 SHUTDOWN
 │                       │                        │
 ├── mount               ├── BIOS/UEFI            ├── shutdown
 ├── umount              ├── GRUB                 ├── poweroff
 └── /etc/fstab          ├── Kernel               └── reboot
                         ├── systemd
                         └── Services

                         │
                         ▼
                    SYSTEM SERVICES
                         │
                         ▼
                     systemctl
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
            start       stop      restart
              │
              ▼
                       Logs
                         │
                  ┌──────┴──────┐
                  ▼             ▼
              /var/log      journalctl

                         │
                         ▼
                  BACKUP & RECOVERY
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
             tar        rsync       cp
              │          │
              ▼          ▼
          Archive    Synchronize
              │          │
              └─────┬────┘
                    ▼
                RESTORE
                    │
                    ▼
              RECOVER DATA
```


---

# UNIT 5: SHELL PROGRAMMING — CO5

## 1. Shell Programming

A shell is a command interpreter that provides an interface between the user and the UNIX/Linux operating system. It accepts commands from the user, interprets them, and asks the operating system to execute them.

```text
USER
               │
               │ Commands
               ▼
             SHELL
               │
       ┌───────┴────────┐
       ▼                ▼
  Interpret          Execute
  Commands           Commands
       │                │
       └───────┬────────┘
               ▼
            KERNEL
               │
               ▼
           HARDWARE
```

A shell script is a text file containing a sequence of shell commands that can be executed as a program.

---

## 2. Types of Shells

Common UNIX/Linux shells include:

```text
UNIX SHELLS
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
       sh               csh              ksh
        │                │                │
     Bourne           C Shell          Korn Shell
        │
        ▼
      bash
   Bourne Again Shell
```

Other shells include:

```text
zsh
fish
tcsh
```

Bash is one of the most commonly used shells on Linux systems.

---

## 3. Shell Prompt

The shell displays a prompt indicating that it is ready to accept a command.

Example:

```text
$
```

or:

```text
user@computer:~$
```

For the root user, the prompt commonly appears as:

```text
#
```

Example:

```text
user@computer:~$ ls
```

The user enters `ls`, and the shell interprets and executes it.

---

## 4. Shell Script Structure

A basic shell script can contain:

```sh
#!/bin/bash

echo "Hello World"
```

The first line is called the shebang or hashbang.

```text
#!/bin/bash
    │
    └── Specifies the interpreter
```

Execution:

```text
Shell Script
     │
     ▼
#!/bin/bash
     │
     ▼
Bash Interpreter
     │
     ▼
Commands
     │
     ▼
Output
```

---

## 5. Creating a Shell Script

Create a file:

```sh
nano script.sh
```

Write:

```sh
#!/bin/bash
echo "Hello World"
```

Save the file.

Give execute permission:

```sh
chmod +x script.sh
```

Execute:

```sh
./script.sh
```

Another method:

```sh
bash script.sh
```

---

## 6. Shell Comments

Comments are ignored by the shell and are used to explain code.

Single-line comment:

```sh
# This is a comment
```

Example:

```sh
#!/bin/bash

# Display a message
echo "Hello"
```

Comments improve readability and help explain the purpose of commands.

---

## 7. Shell Variables

A variable stores data that can be used later in a script.

Syntax:

```sh
variable=value
```

Example:

```sh
name="Fairish"
```

Access the value using `$`:

```sh
echo $name
```

Output:

```text
Fairish
```

Important: spaces should not normally be placed around `=`.

Correct:

```sh
name="Fairish"
```

Incorrect:

```sh
name = "Fairish"
```

---

## 8. Variable Concept

```text
Variable
                 │
                 ▼
          ┌─────────────┐
          │    name     │
          ├─────────────┤
          │  "Fairish"  │
          └─────────────┘
                 │
                 │ $name
                 ▼
              Output
```

Example:

```sh
name="Fairish"
age=21

echo "Name: $name"
echo "Age: $age"
```

---

## 9. Types of Shell Variables

Shell variables can broadly be used as:

1. User-defined variables
2. Environment variables
3. Positional parameters
4. Special variables

Example:

```sh
name="John"
```

is a user-defined variable.

Common environment variables include:

```sh
$HOME
$PATH
$USER
$SHELL
$PWD
```

---

## 10. Environment Variables

Environment variables provide information about the current shell environment.

Display a variable:

```sh
echo $HOME
```

Examples:

```sh
echo $USER
echo $SHELL
echo $PATH
echo $PWD
```

Display many environment variables:

```sh
env
```

or:

```sh
printenv
```

Concept:

```text
SHELL ENVIRONMENT
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
      HOME           PATH          USER
        │             │             │
        ▼             ▼             ▼
   Home folder    Command paths   Username
```

---

## 11. PATH Variable

PATH contains directories where the shell searches for executable commands.

Display:

```sh
echo $PATH
```

Concept:

```text
Command entered
      │
      ▼
     PATH
      │
 ┌────┼────┬────┐
 ▼    ▼    ▼    ▼
/bin /usr/bin /usr/local/bin ...
      │
      ▼
Executable found
```

For example, when the user types:

```sh
ls
```

the shell searches directories listed in PATH for the executable.

---

## 12. Command Substitution

Command substitution allows the output of one command to be stored or used inside another command.

Modern syntax:

```sh
$(command)
```

Example:

```sh
today=$(date)
echo "$today"
```

Another example:

```sh
files=$(ls)
echo "$files"
```

Concept:

```text
date
 │
 ▼
Output
 │
 ▼
$(date)
 │
 ▼
Variable
 │
 ▼
echo
```

---

## 13. Quoting

Shell quoting controls how the shell interprets characters.

Three important forms are:

```text
'...'    Single quotes
"..."    Double quotes
`...`    Command substitution
```

Modern command substitution is preferably:

```sh
$(...)
```

Example:

```sh
name="Fairish"

echo "$name"
echo '$name'
```

Output:

```text
Fairish
$name
```

Double quotes allow variable expansion, while single quotes generally prevent it.

---

## 14. Input Using read

The read command accepts input from the user.

Example:

```sh
#!/bin/bash

echo "Enter your name:"
read name

echo "Hello $name"
```

Flow:

```text
User
 │
 ▼
read
 │
 ▼
Variable
 │
 ▼
echo
 │
 ▼
Output
```

---

## 15. read -p

A prompt can be provided directly:

```sh
read -p "Enter your name: " name
echo "Hello $name"
```

Example:

```text
Enter your name: Fairish
Hello Fairish
```

---

## 16. Command-Line Arguments

Shell scripts can receive values from the command line.

Example script:

```sh
#!/bin/bash

echo "First argument: $1"
echo "Second argument: $2"
```

Run:

```sh
./script.sh Hello World
```

Output:

```text
First argument: Hello
Second argument: World
```

---

## 17. Positional Parameters

Important positional parameters:

```text
$0   Script name
$1   First argument
$2   Second argument
$3   Third argument
...
$9   Ninth argument
```

For arguments beyond 9:

```sh
${10}
${11}
```

Concept:

```text
./script.sh A B C
     │       │ │ │
     │       │ │ └── $3
     │       │ └──── $2
     │       └────── $1
     └────────────── $0
```

---

## 18. Special Shell Variables

Important special variables include:

| Variable | Meaning |
| -------- | ------- |
| `$0` | Script/command name |
| `$1, $2...` | Positional arguments |
| `$#` | Number of positional arguments |
| `$@` | All arguments |
| `$*` | All arguments |
| `$?` | Exit status of previous command |
| `$$` | PID of current shell |
| `$!` | PID of most recently executed background process |

Example:

```sh
echo "Arguments: $#"
echo "Process ID: $$"
echo "Exit status: $?"
```

---

## 19. Exit Status

Every command generally returns an exit status.

```text
0           Success
Non-zero    Failure/error
```

Example:

```sh
ls
echo $?
```

If `ls` succeeds:

```text
0
```

If the command fails, a non-zero status is normally returned.

Concept:

```text
Command
   │
   ▼
Execution
   │
 ┌─┴────────────┐
 ▼              ▼
Success        Failure
 │              │
 ▼              ▼
  0          Non-zero
```

---

## 20. exit

The exit command terminates a shell script.

```sh
exit
```

A specific status can be supplied:

```sh
exit 0
```

or:

```sh
exit 1
```

Example:

```sh
if [ "$age" -lt 18 ]; then
    echo "Not eligible"
    exit 1
fi
```

---

## 21. Arithmetic Operations

Shell supports arithmetic expressions.

Using `$(( ))`:

```sh
a=10
b=5

sum=$((a + b))
echo $sum
```

Output:

```text
15
```

Operators include:

```text
+    Addition
-    Subtraction
*    Multiplication
/    Division
%    Modulus
```

Example:

```sh
result=$((20 % 3))
echo $result
```

Output:

```text
2
```

---

## 22. Arithmetic Expansion

Syntax:

```sh
$((expression))
```

Example:

```sh
a=20
b=4

echo $((a+b))
echo $((a-b))
echo $((a*b))
echo $((a/b))
```

Concept:

```text
Variables
   │
   ▼
$(( Expression ))
   │
   ▼
Arithmetic Evaluation
   │
   ▼
Result
```

---

## 23. Conditional Statements

Conditional statements allow a script to make decisions.

Basic structure:

```sh
if condition
then
    commands
fi
```

Example:

```sh
if [ "$age" -ge 18 ]
then
    echo "Adult"
fi
```

Concept:

```text
Condition
                 │
          ┌──────┴──────┐
          ▼             ▼
         True          False
          │             │
          ▼             ▼
      Execute       Skip/Else
```

---

## 24. if-else

Syntax:

```sh
if condition
then
    commands
else
    commands
fi
```

Example:

```sh
if [ "$num" -gt 0 ]
then
    echo "Positive"
else
    echo "Not positive"
fi
```

---

## 25. if-elif-else

Used when there are multiple conditions.

```sh
if [ "$marks" -ge 90 ]
then
    echo "A"
elif [ "$marks" -ge 75 ]
then
    echo "B"
elif [ "$marks" -ge 60 ]
then
    echo "C"
else
    echo "D"
fi
```

Flow:

```text
marks >= 90?
                │
        ┌───────┴───────┐
       Yes              No
        │                │
        ▼                ▼
        A          marks >= 75?
                         │
                  ┌──────┴──────┐
                 Yes            No
                  │              │
                  ▼              ▼
                  B        marks >= 60?
                                  │
                           ┌──────┴──────┐
                          Yes            No
                           │              │
                           ▼              ▼
                           C              D
```

---

## 26. Test Conditions

Shell uses test expressions to evaluate conditions.

Examples:

```sh
[ "$a" -eq "$b" ]
[ "$a" -gt "$b" ]
[ "$a" -lt "$b" ]
```

Numeric operators:

```text
-eq    Equal
-ne    Not equal
-gt    Greater than
-ge    Greater than or equal
-lt    Less than
-le    Less than or equal
```

---

## 27. String Conditions

Common string comparisons:

```sh
[ "$a" = "$b" ]
[ "$a" != "$b" ]
```

Check whether a string is empty:

```sh
[ -z "$name" ]
```

Check whether it is non-empty:

```sh
[ -n "$name" ]
```

Example:

```sh
if [ -z "$name" ]
then
    echo "Name is empty"
fi
```

---

## 28. File Conditions

Shell can test files and directories.

Common tests:

```text
-f    Regular file exists
-d    Directory exists
-e    Path exists
-r    Readable
-w    Writable
-x    Executable
-s    File exists and is non-empty
```

Example:

```sh
if [ -f "data.txt" ]
then
    echo "File exists"
fi
```

Concept:

```text
Path
                │
                ▼
          File Test
                │
       ┌────────┴────────┐
       ▼                 ▼
      True              False
       │                 │
       ▼                 ▼
   Execute            Else/Skip
```

---

## 29. Logical Operators

Conditions can be combined.

AND:

```sh
[ condition1 ] && [ condition2 ]
```

OR:

```sh
[ condition1 ] || [ condition2 ]
```

NOT:

```sh
! condition
```

Example:

```sh
if [ "$age" -ge 18 ] && [ "$age" -le 60 ]
then
    echo "Within range"
fi
```

---

## 30. case Statement

case is useful when a variable can have several possible values.

Syntax:

```sh
case "$choice" in
    1)
        command
        ;;
    2)
        command
        ;;
    *)
        command
        ;;
esac
```

Example:

```sh
case "$choice" in
    1)
        echo "Add"
        ;;
    2)
        echo "Delete"
        ;;
    3)
        echo "Exit"
        ;;
    *)
        echo "Invalid choice"
        ;;
esac
```

Flow:

```text
Choice
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
       1          2          3
       │          │          │
      Add       Delete      Exit
```

---

## 31. for Loop

A for loop repeats commands for a set of values.

Syntax:

```sh
for variable in values
do
    commands
done
```

Example:

```sh
for i in 1 2 3 4 5
do
    echo $i
done
```

Output:

```text
1
2
3
4
5
```

Flow:

```text
Start
  │
  ▼
Get next value
  │
  ▼
Execute commands
  │
  ▼
More values?
 ┌┴──────┐
Yes      No
 │        │
 └───►    ▼
       End
```

---

## 32. C-Style for Loop

Bash also supports C-style arithmetic loops:

```sh
for ((i=1; i<=5; i++))
do
    echo $i
done
```

Output:

```text
1
2
3
4
5
```

---

## 33. while Loop

A while loop continues as long as its condition is true.

Syntax:

```sh
while condition
do
    commands
done
```

Example:

```sh
i=1

while [ "$i" -le 5 ]
do
    echo $i
    i=$((i+1))
done
```

Flow:

```text
Start
         │
         ▼
      Condition
         │
    ┌────┴────┐
   True      False
    │           │
    ▼           ▼
 Commands      End
    │
    ▼
 Update
    │
    └──────► Condition
```

---

## 34. until Loop

until repeatedly executes commands until the condition becomes true.

```sh
i=1

until [ "$i" -gt 5 ]
do
    echo $i
    i=$((i+1))
done
```

Concept:

```text
Condition
    │
    ▼
False ──► Execute
    │         │
    │         ▼
    └────── Condition

True
 │
 ▼
End
```

---

## 35. break

break terminates the current loop.

Example:

```sh
for i in 1 2 3 4 5
do
    if [ "$i" -eq 3 ]
    then
        break
    fi

    echo $i
done
```

Output:

```text
1
2
```

Flow:

```text
Loop
 │
 ▼
Condition
 │
 ├── False → Continue
 │
 └── True → break → Exit Loop
```

---

## 36. continue

continue skips the remaining commands in the current iteration and starts the next iteration.

Example:

```sh
for i in 1 2 3 4 5
do
    if [ "$i" -eq 3 ]
    then
        continue
    fi

    echo $i
done
```

Output:

```text
1
2
4
5
```

---

## 37. Shell Functions

A function is a reusable block of commands.

Syntax:

```sh
function_name()
{
    commands
}
```

Example:

```sh
greet()
{
    echo "Hello"
}

greet
```

Output:

```text
Hello
```

Concept:

```text
Function
                 │
        ┌────────┴────────┐
        ▼                 ▼
     Define             Call
        │                 │
        ▼                 ▼
   Commands          Execute
```

---

## 38. Function Parameters

Functions can receive arguments.

```sh
greet()
{
    echo "Hello $1"
}

greet Fairish
```

Output:

```text
Hello Fairish
```

Here:

```text
$1 → First function argument
```

Multiple parameters:

```sh
add()
{
    echo $(( $1 + $2 ))
}

add 10 20
```

Output:

```text
30
```

---

## 39. Function Return Value

A shell function can return an exit status using return.

```sh
check()
{
    return 0
}

check
echo $?
```

Output:

```text
0
```

The return value is normally an exit status from 0 to 255, rather than an arbitrary string or general-purpose value.

---

## 40. Shell Arrays

Bash supports indexed arrays.

Create:

```sh
numbers=(10 20 30 40)
```

Access an element:

```sh
echo "${numbers[0]}"
```

Output:

```text
10
```

Display all:

```sh
echo "${numbers[@]}"
```

Array structure:

```text
numbers
   │
   ├── [0] → 10
   ├── [1] → 20
   ├── [2] → 30
   └── [3] → 40
```

Number of elements:

```sh
echo "${#numbers[@]}"
```

---

## 41. String Handling

A string is a sequence of characters.

Example:

```sh
name="Fairish Ayan"
```

Display:

```sh
echo "$name"
```

Length:

```sh
echo "${#name}"
```

Extract part of a string:

```sh
echo "${name:0:7}"
```

Strings are commonly used for names, paths, messages, and command output.

---

## 42. Redirection

Shell provides input and output redirection.

Standard streams:

```text
0 → Standard Input
1 → Standard Output
2 → Standard Error
```

Diagram:

```text
PROCESS
           ┌─────┼─────┐
           │     │     │
           ▼     ▼     ▼
         stdin stdout stderr
           0      1      2
```

---

## 43. Output Redirection

`>` redirects output to a file and normally overwrites it.

```sh
echo "Hello" > file.txt
```

`>>` appends output.

```sh
echo "World" >> file.txt
```

Concept:

```text
Command
   │
   ▼
 stdout
   │
   ├── >  ──► Overwrite file
   │
   └── >> ──► Append file
```

---

## 44. Input Redirection

`<` takes input from a file.

```sh
command < input.txt
```

Concept:

```text
input.txt
    │
    │ <
    ▼
 stdin
    │
    ▼
Command
```

---

## 45. Error Redirection

Standard error is file descriptor 2.

Redirect errors:

```sh
command 2> error.txt
```

Append errors:

```sh
command 2>> error.txt
```

Redirect output and error separately:

```sh
command > output.txt 2> error.txt
```

---

## 46. Redirect Standard Output and Error

Both can be redirected to the same destination.

Bash syntax:

```sh
command > output.txt 2>&1
```

Meaning:

```text
stdout ──► output.txt
stderr ──► stdout ──► output.txt
```

---

## 47. Pipes

A pipe `|` sends the output of one command as input to another command.

Example:

```sh
ls | grep ".txt"
```

Concept:

```text
Command 1
   │
 stdout
   │
   │ |
   ▼
Command 2
   │
 stdout
   ▼
 Output
```

Example:

```sh
cat file.txt | grep "UNIX"
```

---

## 48. Multiple Pipes

Multiple commands can be connected.

```sh
cat file.txt | grep "UNIX" | sort
```

Flow:

```text
cat
 │
 ▼
grep
 │
 ▼
sort
 │
 ▼
Output
```

Pipes allow simple commands to be combined into more powerful processing operations.

---

## 49. grep

grep searches text for a pattern.

Example:

```sh
grep "UNIX" file.txt
```

Case-insensitive:

```sh
grep -i "unix" file.txt
```

Show line numbers:

```sh
grep -n "UNIX" file.txt
```

Recursive search:

```sh
grep -r "UNIX" directory/
```

Concept:

```text
File
 │
 ├── line 1
 ├── line 2 → UNIX
 ├── line 3
 └── line 4 → UNIX
              │
              ▼
            grep
              │
              ▼
        Matching lines
```

---

## 50. sort

sort arranges lines in order.

```sh
sort names.txt
```

Reverse order:

```sh
sort -r names.txt
```

Numeric sorting:

```sh
sort -n numbers.txt
```

Combined with pipes:

```sh
cat names.txt | sort
```

---

## 51. wc

wc counts lines, words, and characters.

```sh
wc file.txt
```

Line count:

```sh
wc -l file.txt
```

Word count:

```sh
wc -w file.txt
```

Character/byte count:

```sh
wc -c file.txt
```

Concept:

```text
File
 │
 ▼
 wc
 │
 ├── Lines
 ├── Words
 └── Characters/Bytes
```

---

## 52. cut

cut extracts selected portions of lines.

Example:

```sh
cut -d: -f1 /etc/passwd
```

Here:

```text
-d:    Delimiter is :
-f1    Select first field
```

Concept:

```text
user:x:1000:1000
 │
 ├── Field 1 → user
 ├── Field 2 → x
 ├── Field 3 → 1000
 └── Field 4 → 1000
```

---

## 53. tr

tr translates or deletes characters.

Convert lowercase to uppercase:

```sh
echo "hello" | tr 'a-z' 'A-Z'
```

Output:

```text
HELLO
```

Delete a character:

```sh
echo "hello123" | tr -d '0-9'
```

Output:

```text
hello
```

---

## 54. sed

sed is a stream editor used to process text.

Replace text:

```sh
sed 's/old/new/' file.txt
```

Replace all occurrences on each line:

```sh
sed 's/old/new/g' file.txt
```

Concept:

```text
Input
  │
  ▼
 sed
  │
  ├── Search
  ├── Replace
  ├── Delete
  └── Transform
  │
  ▼
Output
```

---

## 55. awk

awk is a powerful text-processing language useful for field-based processing.

Example:

```sh
awk '{print $1}' file.txt
```

It prints the first whitespace-separated field.

Example input:

```text
John 25 Delhi
```

Output:

```text
John
```

Concept:

```text
Input Line
    │
    ▼
 ┌────┬────┬─────┐
 │ $1 │ $2 │ $3  │
 └────┴────┴─────┘
    │
    ▼
 print $1
    │
    ▼
  Output
```

---

## 56. File Tests in Shell Scripts

Example:

```sh
if [ -f "$1" ]
then
    echo "Regular file exists"
else
    echo "File does not exist"
fi
```

Directory test:

```sh
if [ -d "$1" ]
then
    echo "Directory exists"
fi
```

This is useful for writing scripts that validate input before performing operations.

---

## 57. Menu-Driven Shell Script

A menu-driven script presents choices to the user.

```sh
#!/bin/bash

echo "1. List files"
echo "2. Show current directory"
echo "3. Show date"
echo "4. Exit"

read -p "Enter choice: " choice

case "$choice" in
    1) ls ;;
    2) pwd ;;
    3) date ;;
    4) exit 0 ;;
    *) echo "Invalid choice" ;;
esac
```

Flow:

```text
MENU
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
      1         2        3
      │         │        │
      ▼         ▼        ▼
     ls         pwd      date
                │
                ▼
              Choice
                │
                ▼
              case
                │
                ▼
             Command
```

---

## 58. Shell Script Execution Flow

```text
Start
                │
                ▼
          Read Script
                │
                ▼
       Identify Interpreter
                │
                ▼
          Execute Commands
                │
       ┌────────┴────────┐
       ▼                 ▼
    Condition?         Command
       │                 │
       ▼                 ▼
   Decision           Execute
       │                 │
       └────────┬────────┘
                ▼
          More Commands?
             │
        ┌────┴────┐
       Yes        No
        │          │
        └─────►    ▼
                 End
```

---

## 59. Shell Script Example: Even or Odd

```sh
#!/bin/bash

read -p "Enter a number: " n

if [ $((n % 2)) -eq 0 ]
then
    echo "Even"
else
    echo "Odd"
fi
```

Flow:

```text
Input Number
     │
     ▼
n % 2
     │
 ┌───┴────┐
 │        │
 0       Not 0
 │        │
 ▼        ▼
Even     Odd
```

---

## 60. Shell Script Example: Largest of Two Numbers

```sh
#!/bin/bash

read -p "Enter first number: " a
read -p "Enter second number: " b

if [ "$a" -gt "$b" ]
then
    echo "$a is larger"
elif [ "$b" -gt "$a" ]
then
    echo "$b is larger"
else
    echo "Both are equal"
fi
```

---

## 61. Shell Script Example: Factorial

```sh
#!/bin/bash

read -p "Enter a number: " n

fact=1

for ((i=1; i<=n; i++))
do
    fact=$((fact * i))
done

echo "Factorial = $fact"
```

Flow:

```text
n
       │
       ▼
   fact = 1
       │
       ▼
      i=1
       │
       ▼
    i <= n?
    │     │
   Yes    No
    │      │
    ▼      ▼
fact=fact*i  Output
    │
    ▼
  i=i+1
    │
    └──────► Condition
```

---

## 62. Shell Script Example: File Check

```sh
#!/bin/bash

read -p "Enter filename: " file

if [ -f "$file" ]
then
    echo "File exists"
else
    echo "File does not exist"
fi
```

This prevents a script from blindly assuming that the requested file exists, which is a surprisingly useful habit in computing.

---

## 63. Shell Script Example: Backup

```sh
#!/bin/bash

source="$HOME/Documents"
backup="$HOME/Documents_backup.tar.gz"

tar -czf "$backup" "$source"

echo "Backup created: $backup"
```

Flow:

```text
Documents
    │
    ▼
   tar
    │
    ▼
Compression
    │
    ▼
Documents_backup.tar.gz
```

---

## 64. Shell Script Example: User and System Information

```sh
#!/bin/bash

echo "User: $USER"
echo "Home: $HOME"
echo "Shell: $SHELL"
echo "Current Directory: $PWD"
echo "Date: $(date)"
echo "Hostname: $(hostname)"
```

This demonstrates variables and command substitution.

---

## 65. Advantages of Shell Programming

Shell programming provides:

1. Automation of repetitive tasks.
2. Easy execution of system commands.
3. File and directory management.
4. Process management.
5. Backup automation.
6. System monitoring.
7. Text processing.
8. User and system administration.
9. Command pipelines.
10. Integration of multiple UNIX utilities.

```text
SHELL SCRIPT
                  │
     ┌────────────┼────────────┐
     ▼            ▼            ▼
 Automation    Commands     Utilities
     │            │            │
     └────────────┼────────────┘
                  ▼
          Automated Tasks
```

---

## 66. Complete Unit 5 Concept Map

```text
UNIT 5
                  SHELL PROGRAMMING
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
     SHELL            VARIABLES          INPUT
       │                 │                 │
       ├── sh            ├── User          └── read
       ├── bash          ├── Environment
       ├── ksh           ├── Positional
       ├── csh           └── Special
       └── zsh
       │
       ▼
   SHELL SCRIPT
       │
       ├── Shebang
       ├── Comments
       ├── Commands
       └── Execution
       │
       ▼
   CONTROL STRUCTURES
       │
 ┌─────┼───────────┐
 ▼     ▼           ▼
if   case         loops
 │     │       ┌────┼────┐
 │     │       ▼    ▼    ▼
 │     │      for while until
 │     │
 │     └── Multiple choices
 │
 └── Conditions
       │
       ├── Numeric
       ├── String
       └── File Tests

                         │
                         ▼
                     FUNCTIONS
                         │
                    ┌────┴────┐
                    ▼         ▼
                 Define     Call
                    │
                    ▼
                 Parameters
                    │
                    ▼
                  return

                         │
                         ▼
                    TEXT TOOLS
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
        grep           sed            awk
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                   Text Processing

                         │
                         ▼
                  REDIRECTION
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
              <          >         >>
           Input      Overwrite    Append
                         │
                         ▼
                       PIPE
                         │
                         ▼
                 command | command

                         │
                         ▼
                 SYSTEM UTILITIES
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
         sort            wc             cut
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                   Processed Output
```
