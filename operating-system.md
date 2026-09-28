# CA456 — Operating System

# UNIT 1: INTRODUCTION

## 1. Operating System: Definition

An Operating System (OS) is system software that acts as an interface between the user/application programs and computer hardware. It manages hardware resources such as CPU, memory, storage and I/O devices, and provides services required by application programs.

```text
USER
                  │
                  ▼
        ┌──────────────────┐
        │ Application      │
        │ Programs         │
        └────────┬─────────┘
                 │
                 ▼
        ┌──────────────────┐
        │ OPERATING SYSTEM │
        │                  │
        │ Process Manager  │
        │ Memory Manager   │
        │ File Manager     │
        │ I/O Manager      │
        │ Security         │
        └────────┬─────────┘
                 │
                 ▼
        ┌──────────────────┐
        │     HARDWARE     │
        │ CPU • Memory     │
        │ Disk • I/O       │
        └──────────────────┘
```

The OS performs two major roles:

1. Resource Manager: Allocates CPU, memory, files and I/O devices among programs.
2. Control Program: Controls execution of programs and prevents improper use of hardware.

---

## 2. Types of Operating Systems

Operating systems can be classified according to how they manage users, processes, processors and timing requirements.

```text
OPERATING SYSTEMS
                           │
       ┌───────────┬───────┼────────┬───────────┐
       ▼           ▼       ▼        ▼           ▼
     Batch    Multiprogramming  Time-Sharing  Parallel
       │                           │
       └──────────────┬────────────┘
                      ▼
                Distributed
                      │
                      ▼
                 Real-Time
```

Major types in this syllabus are:

- Batch Operating System
- Multiprogramming Operating System
- Time-Sharing Operating System
- Parallel Operating System
- Distributed Operating System
- Real-Time Operating System

---

## 3. Batch Operating System

A Batch Operating System executes jobs in batches without requiring continuous interaction between the user and the computer during execution.

Users submit jobs, and similar jobs are grouped together for processing.

```text
Jobs submitted
      │
      ▼
┌───────────────┐
│ Job Queue     │
│               │
│ Job 1         │
│ Job 2         │
│ Job 3         │
│ Job 4         │
└───────┬───────┘
        │
        ▼
   Batch Processing
        │
        ▼
┌───────────────┐
│ CPU           │
│ Job 1 → Job 2 │
│      → Job 3  │
│      → Job 4  │
└───────┬───────┘
        │
        ▼
     Output
```

Characteristics:

- Jobs are collected before execution.
- User interaction during execution is minimal.
- Jobs are generally executed sequentially.
- Suitable for large repetitive tasks.

Example:

Payroll processing can be performed as a batch:

```text
Employee Records
       │
       ▼
   Batch Job
       │
       ▼
Payroll Processing
       │
       ▼
Salary Reports
```

Advantages:

- Efficient for large repetitive jobs.
- Reduces setup time between similar jobs.
- Good CPU utilization when jobs are properly organized.

Disadvantages:

- Long response time.
- Debugging is difficult.
- Users cannot interact directly with running jobs.

---

## 4. Multiprogramming

Multiprogramming keeps multiple programs in main memory simultaneously so that the CPU can switch to another program whenever the current program is waiting for I/O.

The main objective is to increase CPU utilization.

```text
MAIN MEMORY
┌─────────────────────────────┐
│ Operating System            │
├─────────────────────────────┤
│ Program A                   │
├─────────────────────────────┤
│ Program B                   │
├─────────────────────────────┤
│ Program C                   │
├─────────────────────────────┤
│ Program D                   │
└─────────────────────────────┘
          │
          ▼
         CPU
```

Suppose:

```text
Program A → CPU → I/O Wait
                    │
                    ▼
Program B → CPU → I/O Wait
                    │
                    ▼
Program C → CPU
```

Instead of keeping the CPU idle during A's I/O operation, the OS gives the CPU to B or C.

CPU Utilization:

```text
Without Multiprogramming:
CPU → A A A | IDLE | IDLE | A A

With Multiprogramming:
CPU → A A | B B B | C C | A A | B B
```

Important Point:

Multiprogramming primarily improves CPU utilization and throughput, not necessarily interactive response time.

---

## 5. Time-Sharing System

A Time-Sharing Operating System allows multiple users or processes to share the CPU by giving each process a small time interval called a time slice or time quantum.

```text
CPU
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
     User 1     User 2    User 3
      P1          P2        P3
        │         │         │
        └─────────┼─────────┘
                  ▼
            Time Sharing
```

Example:

```text
Time →
┌────┬────┬────┬────┬────┬────┐
│ P1 │ P2 │ P3 │ P1 │ P2 │ P3 │
└────┴────┴────┴────┴────┴────┘
  T    T    T    T    T    T
```

Each process gets CPU time for a limited period.

Objectives:

- Fast response.
- Interactive computing.
- Fair CPU sharing.
- Multiple users/processes can work concurrently.

Time Quantum:

If the time quantum is 10 ms:

```text
P1 → 10 ms
P2 → 10 ms
P3 → 10 ms
P1 → 10 ms
...
```

This creates the appearance that all processes are executing simultaneously.

---

## 6. Parallel Systems

A Parallel System contains multiple processors that work together to execute tasks.

```text
Shared Memory
          ┌─────────────────┐
          │                 │
          └───────┬─────────┘
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
    CPU 1       CPU 2       CPU 3
       │          │          │
       └──────────┼──────────┘
                  ▼
              I/O Devices
```

Main objectives:

- Increased computational speed.
- Increased throughput.
- Better reliability.
- Efficient resource utilization.

Types:

Two common forms are:

1. Symmetric multiprocessing (SMP)
2. Asymmetric multiprocessing (AMP)

---

## 7. Symmetric Multiprocessing

In SMP, multiple processors have equal access to memory and I/O resources, and each processor can execute OS tasks.

```text
Shared Memory
          ┌─────────────────┐
          │      OS + Data  │
          └─────────────────┘
             ▲    ▲    ▲
             │    │    │
          ┌──┴┐ ┌─┴─┐ ┌┴──┐
          │CPU│ │CPU│ │CPU│
          │ 1 │ │ 2 │ │ 3 │
          └───┘ └───┘ └───┘
```

Advantages:

- Better load distribution.
- Increased performance.
- If one processor becomes unavailable, other processors may continue operating.

---

## 8. Asymmetric Multiprocessing

In AMP, processors may have different responsibilities. One processor can act as the master and assign tasks to other processors.

```text
Master CPU
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
    CPU 1      CPU 2      CPU 3
   Worker      Worker      Worker
```

The master processor controls scheduling or specific system activities while other processors perform assigned tasks.

---

## 9. Distributed Operating System

A Distributed Operating System manages a collection of networked computers and attempts to make them appear as an integrated computing environment.

```text
Distributed System
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
   Computer 1    Computer 2    Computer 3
       │             │             │
       └────────── Network ─────────┘
                     │
                     ▼
               Shared Services
```

Each computer has its own processor and memory.

Features:

- Resource sharing.
- Communication between computers.
- Distributed processing.
- Load sharing.
- Fault tolerance.

Example Concept:

```text
Task
 │
 ├──► Computer A → Part 1
 ├──► Computer B → Part 2
 └──► Computer C → Part 3
                    │
                    ▼
              Combined Result
```

---

## 10. Real-Time Operating System

A Real-Time Operating System (RTOS) is designed to provide a response within a specified timing constraint.

The correctness of a real-time system depends not only on the result but also on when the result is produced.

```text
Real-Time System
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       Input                 Output
          │                   ▲
          ▼                   │
      RTOS + CPU ─────────────┘
          │
          ▼
     Deadline
```

Types:

**Hard Real-Time System**

Missing a deadline may cause system failure.

Example:

```text
Aircraft Control
       │
       ▼
Sensor Input
       │
       ▼
RTOS
       │
       ▼
Control Action
       │
       ▼
Must occur before deadline
```

**Soft Real-Time System**

Missing an occasional deadline reduces performance but may not cause catastrophic failure.

Examples include multimedia and online communication systems.

---

## 11. Operating System Structure

Operating system structure describes how OS components are organized and interact.

A simplified structure is:

```text
┌─────────────────────────────┐
│       User Applications     │
├─────────────────────────────┤
│       System Programs       │
├─────────────────────────────┤
│       System Call Interface │
├─────────────────────────────┤
│       Operating System      │
│                             │
│ Process Management          │
│ Memory Management           │
│ File Management             │
│ I/O Management              │
│ Protection & Security       │
├─────────────────────────────┤
│          Hardware           │
└─────────────────────────────┘
```

The kernel is the central part of the OS that runs with privileged access and manages core resources.

---

## 12. Operating System Components

Major OS components include:

```text
OPERATING SYSTEM
                        │
       ┌────────────────┼─────────────────┐
       ▼                ▼                 ▼
Process Management  Memory Management  File Management
       │                │                 │
       ▼                ▼                 ▼
Scheduling          Allocation         Files/Directories
Threads             Virtual Memory     Permissions
       │
       ├───────────────┐
       ▼               ▼
  I/O Management   Protection/Security
```

Major components:

1. Process Management
2. Main Memory Management
3. File Management
4. I/O System Management
5. Secondary Storage Management
6. Protection and Security
7. Networking
8. Command Interpreter/User Interface

---

## 13. Process Management

The OS manages the complete life cycle of processes.

Important responsibilities include:

- Creating processes.
- Terminating processes.
- Scheduling processes.
- Suspending and resuming processes.
- Providing synchronization.
- Providing inter-process communication.
- Handling deadlocks.

```text
PROCESS MANAGEMENT
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
   Creation       Scheduling    Termination
       │              │
       ▼              ▼
   Process       CPU Allocation
       │
       ▼
 Synchronization
       │
       ▼
      IPC
```

---

## 14. Memory Management

Memory management controls the allocation and deallocation of main memory.

The OS keeps track of:

- Which memory locations are in use.
- Which process owns each memory region.
- How much memory is available.
- Which process should receive memory.

```text
MAIN MEMORY
┌──────────────────────────────┐
│ Operating System             │
├──────────────────────────────┤
│ Process P1                   │
├──────────────────────────────┤
│ Process P2                   │
├──────────────────────────────┤
│ Free Memory                  │
├──────────────────────────────┤
│ Process P3                   │
└──────────────────────────────┘
          ▲
          │
     Memory Manager
```

---

## 15. File Management

The OS provides an abstraction for storing information as files and organizes files into directories.

```text
FILE SYSTEM
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
      Directory              Files
          │                     │
     ┌────┼────┐          ┌─────┼─────┐
     ▼    ▼    ▼          ▼     ▼     ▼
   Dir1  Dir2 Dir3       A.txt B.txt C.txt
```

File management includes:

- Creating files.
- Deleting files.
- Reading files.
- Writing files.
- Renaming files.
- Managing directories.
- Controlling access permissions.

---

## 16. I/O Management

The OS manages communication between applications and input/output devices.

```text
Application
     │
     ▼
Operating System
     │
     ▼
Device Driver
     │
     ▼
I/O Controller
     │
     ▼
Hardware Device
```

Examples:

- Keyboard
- Mouse
- Printer
- Disk
- Network interface
- Display

A device driver provides software support for communicating with a particular hardware device.

---

## 17. Secondary Storage Management

The OS manages storage devices such as HDDs and SSDs.

Responsibilities include:

- Free-space management.
- Storage allocation.
- Disk scheduling.
- File-system management.

```text
Secondary Storage
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
       HDD         SSD        USB
        │           │           │
        └───────────┼───────────┘
                    ▼
                  OS
                    │
                    ▼
             Storage Manager
```

---

## 18. Protection and Security

Protection controls how processes and users access system resources.

Security protects the system from unauthorized access and attacks.

```text
User
 │
 ▼
Authentication
 │
 ▼
Authorization
 │
 ▼
Resource Access
 │
 ▼
┌───────────────────┐
│ File / Memory /   │
│ CPU / Devices     │
└───────────────────┘
```

Authentication:

Determines who the user is.

Example:

```text
Username + Password
        │
        ▼
   Authentication
```

Authorization:

Determines what the authenticated user is allowed to access.

---

## 19. Operating System Services

The OS provides services to users and application programs.

```text
OS SERVICES
                      │
 ┌─────────┬──────────┼─────────┬──────────┐
 ▼         ▼          ▼         ▼          ▼
Program   I/O       File      Process   Communication
Execution Management Management Management
 │
 ├── Error Detection
 ├── Resource Allocation
 ├── Protection
 └── Accounting
```

Major services:

1. User Interface
2. Program Execution
3. I/O Operations
4. File-System Manipulation
5. Communication
6. Error Detection
7. Resource Allocation
8. Accounting
9. Protection and Security

---

## 20. User Interface

The OS provides a way for users to interact with the system.

Common interfaces include:

**Command-Line Interface**

```text
User
 │
 ▼
Command
 │
 ▼
Shell
 │
 ▼
Operating System
 │
 ▼
Hardware
```

Example:

```text
$ ls
$ mkdir test
$ cd test
```

**Graphical User Interface**

```text
User
 │
 ▼
GUI
 │
 ▼
Operating System
 │
 ▼
Hardware
```

GUI uses windows, icons, menus, buttons and pointers.

---

## 21. Program Execution

The OS loads a program into memory and provides the environment required for execution.

```text
Program on Disk
      │
      ▼
Load into Memory
      │
      ▼
Create Process
      │
      ▼
Allocate Resources
      │
      ▼
CPU Executes
      │
      ▼
Program Terminates
      │
      ▼
Release Resources
```

---

## 22. System Calls

A system call is a programming interface through which a user-level program requests a service from the operating system kernel.

```text
┌──────────────────────────┐
│ User Application         │
└────────────┬─────────────┘
             │
        System Call
             │
             ▼
┌──────────────────────────┐
│ Kernel                   │
│                          │
│ OS Service               │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│ Hardware                 │
└──────────────────────────┘
```

Example:

```c
read(fd, buffer, count);
```

The application requests the kernel to perform a read operation.

---

## 23. Types of System Calls

System calls can be grouped into major categories.

```text
SYSTEM CALLS
                      │
     ┌────────────────┼────────────────┐
     ▼                ▼                ▼
Process            File             Device
Control           Management        Management
     │                │                │
 create()          open()           read()
 exit()            read()           write()
 wait()            write()          ioctl()
     │
     ├──────────────┐
     ▼              ▼
Information      Communication
Maintenance
```

**Process Control**

Examples:

- Create process
- Terminate process
- Load program
- Execute program
- Wait for process

**File Management**

Examples:

- Create
- Open
- Read
- Write
- Close
- Delete

**Device Management**

Examples:

- Request device
- Release device
- Read
- Write

**Information Maintenance**

Examples:

- Get time
- Get system information
- Get process information

**Communication**

Examples:

- Create communication channel.
- Send data.
- Receive data.
- Shared memory.
- Message passing.

---

## 24. System Call Flow

Consider a program requesting a file read.

```text
User Program
     │
     │ read()
     ▼
System Call Interface
     │
     ▼
Kernel
     │
     ▼
File System
     │
     ▼
Device Driver
     │
     ▼
Disk
     │
     ▼
Data returned
     │
     ▼
User Program
```

The transition from user mode to kernel mode is controlled by the system-call mechanism.

---

## 25. System Programs

System programs provide a convenient environment for developing and executing programs. They are generally not themselves the kernel, but they use OS services.

Categories include:

```text
SYSTEM PROGRAMS
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
 File Management   Status Information   Editors
       │               │                │
       ▼               ▼                ▼
 copy, delete      date, time       vi, nano
```

Other examples include:

- Compilers
- Assemblers
- Linkers
- Loaders
- Command interpreters
- Debuggers
- Communication programs

---

## 26. Virtual Machine

A Virtual Machine (VM) is a software-created computing environment that behaves like a physical computer.

A virtualization layer provides virtual hardware to a guest operating system.

```text
┌──────────────────────────────┐
│ Application                  │
├──────────────────────────────┤
│ Guest Operating System       │
├──────────────────────────────┤
│ Virtual Hardware             │
│ CPU • Memory • Disk • I/O    │
├──────────────────────────────┤
│ Hypervisor / Virtualization  │
│ Layer                        │
├──────────────────────────────┤
│ Physical Hardware            │
└──────────────────────────────┘
```

Multiple virtual machines can run on the same physical system.

```text
Physical Computer
                     │
                 Hypervisor
          ┌──────────┼──────────┐
          ▼          ▼          ▼
         VM1        VM2        VM3
          │          │          │
        Guest      Guest      Guest
          OS         OS         OS
```

Advantages:

- Isolation.
- Efficient resource utilization.
- Testing different operating systems.
- Server consolidation.
- Easier experimentation.

---

## 27. Process Concept

A process is a program in execution.

A program is passive, while a process is an active executing entity.

```text
Program
(Passive)
    │
    │ Loaded into memory
    ▼
Process
(Active)
    │
    ├── Program Code
    ├── Data
    ├── Stack
    ├── Heap
    └── CPU State
```

For example:

```text
Google Chrome executable → Program
Running Chrome instance  → Process
```

---

## 28. Process in Memory

A process generally contains several logical regions.

```text
High Address
┌──────────────────────┐
│ Stack                │
├──────────────────────┤
│                      │
│ Free / Unused        │
│                      │
├──────────────────────┤
│ Heap                 │
├──────────────────────┤
│ Data                 │
├──────────────────────┤
│ Code / Text          │
└──────────────────────┘
Low Address
```

**Code/Text**

Contains executable instructions.

**Data**

Contains global and static variables.

**Heap**

Used for dynamically allocated memory.

**Stack**

Contains function calls, local variables and related execution information.

---

## 29. Process Control Block (PCB)

The OS maintains information about each process in a Process Control Block (PCB).

```text
PROCESS CONTROL BLOCK
┌────────────────────────────────────┐
│ Process ID                         │
├────────────────────────────────────┤
│ Process State                      │
├────────────────────────────────────┤
│ Program Counter                    │
├────────────────────────────────────┤
│ CPU Registers                      │
├────────────────────────────────────┤
│ CPU Scheduling Information         │
├────────────────────────────────────┤
│ Memory Management Information      │
├────────────────────────────────────┤
│ I/O Status Information             │
├────────────────────────────────────┤
│ Accounting Information             │
└────────────────────────────────────┘
```

PCB allows the OS to suspend and later resume a process.

---

## 30. Process States

A process moves through different states during its lifetime.

Basic states:

1. New
2. Ready
3. Running
4. Waiting/Blocked
5. Terminated

```text
                 ┌─────────┐
                 │   NEW   │
                 └────┬────┘
                      │
                  Admit
                      ▼
                 ┌─────────┐
        ┌───────►│  READY  │◄─────────┐
        │        └────┬────┘          │
        │             │               │
        │          Dispatch           │
        │             ▼               │
        │        ┌─────────┐          │
        │        │ RUNNING │          │
        │        └──┬───┬──┘          │
        │           │   │             │
        │      I/O Wait  │ Preemption │
        │           │   │             │
        │           ▼   └─────────────┘
        │       ┌─────────┐
        └───────│ WAITING │
                └────┬────┘
                     │
                 I/O Complete
                     │
                     ▼
                   READY

RUNNING ───────────────► TERMINATED
          Exit
```

---

## 31. Process Scheduling

Process scheduling is the activity of selecting a process from the ready queue and allocating the CPU to it.

```text
Ready Queue
┌─────┬─────┬─────┬─────┐
│ P1  │ P2  │ P3  │ P4  │
└──┬──┴─────┴─────┴─────┘
   │
   ▼
Scheduler
   │
   ▼
┌─────────┐
│   CPU   │
└─────────┘
```

The scheduler decides which ready process should execute next.

Main objectives:

- High CPU utilization.
- High throughput.
- Low waiting time.
- Low turnaround time.
- Low response time.
- Fairness.

Detailed scheduling algorithms such as FCFS, SJF, Round Robin and Priority Scheduling belong to CPU Scheduling in Unit 2.

---

## 32. Cooperating Processes

Processes may be independent or cooperating.

An independent process does not affect or depend on other processes.

A cooperating process can affect or be affected by another process.

```text
Process P1
           │
           │ Data
           ▼
    ┌──────────────┐
    │ Shared Area  │
    └──────────────┘
           ▲
           │ Data
           │
       Process P2
```

Reasons for process cooperation:

- Information sharing.
- Computation speedup.
- Modularity.
- Convenience.

---

## 33. Producer-Consumer Concept

A common cooperating-process example is the Producer-Consumer problem.

The producer generates data and places it into a buffer. The consumer removes data from the buffer.

```text
┌───────────┐
│ Producer  │
└─────┬─────┘
      │ produce
      ▼
┌───────────────────┐
│      BUFFER       │
│ [ ][ ][ ][ ][ ]   │
└─────────┬─────────┘
          │ consume
          ▼
    ┌───────────┐
    │ Consumer  │
    └───────────┘
```

If the buffer is full, the producer may need to wait.

If the buffer is empty, the consumer may need to wait.

Synchronization is therefore required.

---

## 34. Threads

A thread is the basic unit of CPU utilization within a process.

A process can contain one or multiple threads.

```text
PROCESS
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Thread 1     Thread 2     Thread 3
          │            │            │
          ▼            ▼            ▼
       Execution    Execution    Execution
```

Threads belonging to the same process share:

- Code
- Data
- Heap
- Open files and other process resources

Each thread has its own:

- Program counter
- Registers
- Stack

```text
PROCESS
┌──────────────────────────────────┐
│ Shared Code                       │
│ Shared Data                       │
│ Shared Heap                       │
│ Shared Resources                  │
│                                  │
│ ┌────────┐ ┌────────┐ ┌────────┐│
│ │Thread 1│ │Thread 2│ │Thread 3││
│ │Stack   │ │Stack   │ │Stack   ││
│ │Regs    │ │Regs    │ │Regs    ││
│ │PC      │ │PC      │ │PC      ││
│ └────────┘ └────────┘ └────────┘│
└──────────────────────────────────┘
```

---

## 35. Single-Threaded and Multithreaded Process

**Single-threaded**

```text
Process
   │
   ▼
Thread
   │
   ▼
Execution
```

**Multithreaded**

```text
Process
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
      T1        T2         T3
       │         │         │
       └─────────┼─────────┘
                 ▼
              Execution
```

Multithreading can improve responsiveness and allow tasks to overlap.

---

## 36. Benefits of Multithreading

Major benefits include:

**Responsiveness**

One thread can continue while another waits.

```text
Thread 1 → I/O Wait
Thread 2 → Continues Execution
```

**Resource Sharing**

Threads naturally share resources belonging to their process.

**Economy**

Creating and switching between threads can be less expensive than creating and switching between separate processes, depending on the OS.

**Scalability**

Multiple threads can execute on multiple processors or cores.

```text
Multithreaded Process
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
         T1        T2         T3
          │         │         │
         CPU1      CPU2      CPU3
```

---

## 37. Inter-Process Communication (IPC)

Inter-Process Communication (IPC) provides mechanisms through which processes exchange data and coordinate their activities.

Two fundamental IPC models are:

1. Shared Memory
2. Message Passing

```text
IPC
                  │
          ┌───────┴────────┐
          ▼                ▼
    Shared Memory     Message Passing
          │                │
          ▼                ▼
   Common Memory       send()/receive()
```

---

## 38. Shared Memory IPC

In shared-memory IPC, multiple processes access a common memory region.

```text
Process P1
              │
              ▼
      ┌────────────────┐
      │ Shared Memory  │
      │                │
      │    Data        │
      └────────────────┘
              ▲
              │
          Process P2
```

Example:

```text
P1 writes data
      │
      ▼
Shared Memory
      │
      ▼
P2 reads data
```

Advantage:

Very fast after the shared region has been established because processes can communicate through memory.

Problem:

Processes must synchronize access to shared data to prevent race conditions.

---

## 39. Message Passing IPC

Processes communicate by sending and receiving messages.

```text
┌───────────┐
│ Process P1│
└─────┬─────┘
      │
    send()
      │
      ▼
┌───────────────┐
│ Message Queue │
└───────┬───────┘
        │
      receive()
        │
        ▼
┌───────────┐
│ Process P2│
└───────────┘
```

Basic operations:

```c
send(message)
receive(message)
```

Message passing can be useful when processes do not share memory directly.

---

## 40. Shared Memory vs Message Passing

| Shared Memory | Message Passing |
| ------------- | --------------- |
| Processes communicate through common memory | Processes communicate through messages |
| Usually very efficient for large data after setup | Communication involves send/receive operations |
| Requires synchronization | Communication mechanism provides coordination |
| Suitable for processes on the same system | Can support communication across systems in suitable implementations |
| Data is directly accessed from shared region | Data is transferred through messages |

---

## 41. IPC Diagram

```text
INTER-PROCESS COMMUNICATION
                              │
                ┌─────────────┴─────────────┐
                ▼                           ▼
        SHARED MEMORY                 MESSAGE PASSING
                │                           │
       ┌────────┴────────┐          ┌───────┴───────┐
       ▼                 ▼          ▼               ▼
      P1                 P2       send()          receive()
       │                 │          │               │
       └───────┐ ┌───────┘          └───────┬───────┘
               ▼                            ▼
        Shared Memory                 Message Channel
```

---

## 42. Process Creation

A process can create another process.

```text
Parent Process
                    │
              Process Creation
                    │
           ┌────────┴────────┐
           ▼                 ▼
       Child P1           Child P2
```

This creates a process hierarchy.

```text
P0
             /  \
           P1    P2
          /  \
        P3    P4
```

The original process is called the parent, and the newly created process is the child.

---

## 43. Process Termination

A process terminates when it completes execution or is explicitly terminated.

```text
RUNNING
           │
        exit()
           │
           ▼
      TERMINATED
           │
           ▼
 Resources Released
```

Resources such as memory, open files and other process-owned resources are eventually released by the OS.

---

## 44. Process Scheduling Example

Although detailed scheduling algorithms are covered in Unit 2, the basic concept can be understood with a simple CPU timeline.

Suppose three processes are ready:

```text
P1 = 5 ms
P2 = 3 ms
P3 = 2 ms
```

If they execute sequentially in the order P1 → P2 → P3:

```text
Time →
0        5        8       10
│--------│--------│--------│
   P1        P2       P3
   5ms       3ms      2ms
```

Completion times:

```text
P1 = 5 ms
P2 = 8 ms
P3 = 10 ms
```

Turnaround time, assuming all arrive at time 0:

```text
Turnaround Time = Completion Time − Arrival Time
```

Therefore:

```text
P1 = 5 − 0  = 5 ms
P2 = 8 − 0  = 8 ms
P3 = 10 − 0 = 10 ms
```

Average turnaround time:

```text
Average TAT = (5 + 8 + 10) / 3
            = 23 / 3
            = 7.67 ms
```

This demonstrates the basic numerical concepts used in CPU scheduling.

---

## 45. Important Scheduling Terms

**Arrival Time (AT)**

Time at which a process enters the ready queue.

**Burst Time (BT)**

Amount of CPU time required by a process.

**Completion Time (CT)**

Time at which the process finishes execution.

**Turnaround Time (TAT)**

```text
TAT = CT − AT
```

**Waiting Time (WT)**

Time spent waiting in the ready queue.

```text
WT = TAT − BT
```

**Response Time (RT)**

Time from process arrival until it first receives CPU service.

```text
RT = First CPU Start Time − Arrival Time
```

Example:

Given:

```text
AT = 2 ms
BT = 5 ms
CT = 10 ms
First CPU Start = 4 ms
```

Then:

```text
TAT = CT − AT
    = 10 − 2
    = 8 ms

WT = TAT − BT
   = 8 − 5
   = 3 ms

RT = First Start − AT
   = 4 − 2
   = 2 ms
```

---

## 46. Unit 1 Complete Concept Map

```text
UNIT 1
                    OPERATING SYSTEM
                           │
        ┌──────────────────┼───────────────────┐
        ▼                  ▼                   ▼
       OS TYPES       OS STRUCTURE       OS SERVICES
        │                  │                   │
   ┌────┼────┐             │          ┌────────┼────────┐
   ▼    ▼    ▼             ▼          ▼        ▼        ▼
 Batch Multi Time      Components   Program     I/O     Files
       program Sharing     │        Execution
        │    │              │
        ├────┼──────┐       ├─ Process
        ▼    ▼      ▼       ├─ Memory
     Parallel Distributed   ├─ File
        │      │            ├─ I/O
        └──────┼────────────└─ Security
               ▼
          Real-Time


                      PROCESS MANAGEMENT
                              │
             ┌────────────────┼────────────────┐
             ▼                ▼                ▼
        Process Concept   Scheduling      Cooperating
             │                │             Processes
             ▼                │                │
            PCB               │                ▼
             │                │             Producer/
             ▼                │             Consumer
       Process States         │
             │                │
     ┌───────┼────────┐       │
     ▼       ▼        ▼       ▼
    New    Ready    Running  CPU
                       │
                 ┌─────┴─────┐
                 ▼           ▼
              Waiting     Terminated


                         THREADS
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
          Thread 1      Thread 2      Thread 3
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                     Shared Process
                       Resources


                           IPC
                            │
                 ┌──────────┴──────────┐
                 ▼                     ▼
           Shared Memory        Message Passing
                 │                     │
                 ▼                     ▼
          Common Memory          send/receive
```

## 47. Numerical Formula Sheet for Unit 1

```text
Turnaround Time (TAT)
= Completion Time − Arrival Time

Waiting Time (WT)
= Turnaround Time − CPU Burst Time

Response Time (RT)
= First CPU Start Time − Arrival Time

Average Turnaround Time
= Σ Turnaround Times / Number of Processes

Average Waiting Time
= Σ Waiting Times / Number of Processes

Average Response Time
= Σ Response Times / Number of Processes

CPU Utilization
= (CPU Busy Time / Total Time) × 100

Throughput
= Number of Processes Completed / Total Time

Basic Gantt Chart Format

Time →
0       4       7       10
│-------│-------│--------│
   P1      P2       P3
```


---

# UNIT 2: CPU SCHEDULING AND PROCESS SYNCHRONIZATION

## 1. CPU Scheduling

CPU scheduling is the process of selecting one process from the ready queue and allocating the CPU to it. When several processes are ready to execute, the scheduler decides which process should run next.

```text
READY QUEUE
        ┌────┬────┬────┬────┐
        │ P1 │ P2 │ P3 │ P4 │
        └─┬──┴────┴────┴────┘
          │
          ▼
   ┌───────────────┐
   │ CPU Scheduler │
   └───────┬───────┘
           │
           ▼
       ┌───────┐
       │  CPU  │
       └───┬───┘
           │
       Execution
           │
           ▼
    ┌─────────────┐
    │ I/O / Exit  │
    └─────────────┘
```

The main goals of CPU scheduling are:

- Maximize CPU utilization.
- Maximize throughput.
- Minimize turnaround time.
- Minimize waiting time.
- Minimize response time.
- Provide fairness among processes.

---

## 2. CPU Scheduling Criteria

**CPU Utilization**

CPU utilization represents the percentage of time during which the CPU is busy.

```text
CPU Utilization =
(CPU Busy Time / Total Time) × 100
```

For example, if the CPU is busy for 90 ms during a 100 ms interval:

```text
CPU Utilization = (90 / 100) × 100
                = 90%
```

**Throughput**

Throughput is the number of processes completed per unit of time.

```text
Throughput =
Number of Completed Processes / Total Time
```

If 20 processes are completed in 10 seconds:

```text
Throughput = 20 / 10
           = 2 processes/second
```

**Turnaround Time**

Turnaround time is the total time taken by a process from arrival to completion.

```text
TAT = Completion Time − Arrival Time
```

**Waiting Time**

Waiting time is the total time a process spends waiting in the ready queue.

```text
WT = Turnaround Time − Burst Time
```

**Response Time**

Response time is the time between process arrival and the first time it receives CPU service.

```text
RT = First CPU Start Time − Arrival Time
```

---

## 3. Scheduling Types

CPU scheduling can be broadly classified as:

```text
CPU Scheduling
                      │
             ┌────────┴────────┐
             ▼                 ▼
       Non-Preemptive      Preemptive
             │                 │
       Process keeps      CPU can be taken
       CPU until exit     from a running process
       or blocking
```

**Non-Preemptive Scheduling**

Once a process gets the CPU, it keeps it until it terminates or enters a waiting state.

Examples:

- FCFS
- Non-preemptive SJF
- Non-preemptive Priority

**Preemptive Scheduling**

The OS can interrupt a running process and allocate the CPU to another process.

Examples:

- Round Robin
- Shortest Remaining Time First
- Preemptive Priority

---

## 4. First-Come, First-Served (FCFS)

FCFS schedules processes in the order in which they arrive.

It follows the FIFO principle.

```text
Ready Queue

┌────┬────┬────┐
│ P1 │ P2 │ P3 │
└────┴────┴────┘
  │
  ▼
 P1 → P2 → P3
```

FCFS is normally non-preemptive.

Numerical Example:

Given:

| Process | Arrival Time | Burst Time |
| ------- | ------------ | ---------- |
| P1 | 0 | 5 |
| P2 | 1 | 3 |
| P3 | 2 | 2 |

Execution:

```text
0       5       8       10
│-------│-------│--------│
   P1      P2       P3
```

Completion times:

```text
P1 = 5
P2 = 8
P3 = 10
```

Turnaround time:

```text
P1 = 5 − 0 = 5
P2 = 8 − 1 = 7
P3 = 10 − 2 = 8
```

Waiting time:

```text
P1 = 5 − 5 = 0
P2 = 7 − 3 = 4
P3 = 8 − 2 = 6
```

Average waiting time:

```text
AWT = (0 + 4 + 6) / 3
    = 10 / 3
    = 3.33 ms
```

Average turnaround time:

```text
ATAT = (5 + 7 + 8) / 3
     = 20 / 3
     = 6.67 ms
```

Convoy Effect:

FCFS can suffer from the convoy effect, where short processes wait behind a long process.

```text
Long Process
    P1
    │
    ├──────────────────────────────►
                     Short P2
                         │
                         ├──►
                     Short P3
                         │
                         ├──►
```

This can result in poor average waiting time.

---

## 5. Shortest Job First (SJF)

SJF selects the process having the smallest CPU burst time.

```text
Ready Processes
 ┌────┬────┬────┐
 │ P1 │ P2 │ P3 │
 │ 8  │ 3  │ 5  │  ← Burst Time
 └────┴────┴────┘
       │
       ▼
     P2 → P3 → P1
```

SJF is normally non-preemptive.

Numerical Example:

All processes arrive at time 0.

| Process | Burst Time |
| ------- | ---------- |
| P1 | 6 |
| P2 | 2 |
| P3 | 4 |
| P4 | 3 |

Shortest burst first:

```text
P2 → P4 → P3 → P1
```

Gantt chart:

```text
0     2     5      9       15
│-----│-----│------│--------│
  P2    P4     P3       P1
```

Waiting times:

```text
P2 = 0
P4 = 2
P3 = 5
P1 = 9
```

Average waiting time:

```text
AWT = (0 + 2 + 5 + 9) / 4
    = 16 / 4
    = 4 ms
```

Turnaround times:

```text
P2 = 2
P4 = 5
P3 = 9
P1 = 15
```

Average turnaround time:

```text
ATAT = (2 + 5 + 9 + 15) / 4
     = 31 / 4
     = 7.75 ms
```

SJF provides minimum average waiting time when accurate burst-time information is available.

---

## 6. Shortest Remaining Time First (SRTF)

SRTF is the preemptive version of SJF.

The process having the shortest remaining CPU time gets the CPU.

```text
SRTF
              │
              ▼
     Compare remaining times
              │
              ▼
     Shortest remaining job
              │
              ▼
             CPU
```

If a new process arrives with a shorter remaining time than the currently running process, the current process can be preempted.

Numerical Example:

| Process | Arrival Time | Burst Time |
| ------- | ------------ | ---------- |
| P1 | 0 | 8 |
| P2 | 1 | 4 |
| P3 | 2 | 2 |

At time 0:

P1 starts

At time 1:

```text
P1 remaining = 7
P2 burst     = 4
```

P2 is shorter → P1 is preempted

At time 2:

```text
P2 remaining = 3
P3 burst     = 2
```

P3 is shorter → P2 is preempted

Execution:

```text
0    1    2    4       7           14
│ P1 │ P2 │ P3 │  P2   │     P1    │
```

Completion times:

```text
P3 = 4
P2 = 7
P1 = 14
```

Turnaround:

```text
P1 = 14 − 0 = 14
P2 = 7 − 1 = 6
P3 = 4 − 2 = 2
```

Waiting:

```text
P1 = 14 − 8 = 6
P2 = 6 − 4 = 2
P3 = 2 − 2 = 0
```

Average waiting time:

```text
AWT = (6 + 2 + 0) / 3
    = 2.67 ms
```

---

## 7. Priority Scheduling

In priority scheduling, each process is assigned a priority, and the scheduler selects a process according to its priority.

Depending on the system, a smaller number may represent higher priority.

```text
Process       Priority
  P1              3
  P2              1
  P3              2

Higher priority
      │
      ▼
P2 → P3 → P1
```

It can be either preemptive or non-preemptive.

Numerical Example:

Assume smaller number means higher priority.

| Process | Burst Time | Priority |
| ------- | ---------- | -------- |
| P1 | 4 | 3 |
| P2 | 3 | 1 |
| P3 | 2 | 2 |

Execution:

```text
0       3      5       9
│-------│------│-------│
   P2      P3      P1
```

Waiting times:

```text
P2 = 0
P3 = 3
P1 = 5
```

Average waiting time:

```text
AWT = (0 + 3 + 5) / 3
    = 2.67 ms
```

Starvation:

A low-priority process may wait indefinitely if higher-priority processes continuously arrive.

Aging:

Aging gradually increases the priority of a waiting process.

```text
Low Priority
     │
     │ waiting
     ▼
Higher Priority
     │
     ▼
CPU allocation
```

Aging reduces starvation.

---

## 8. Round Robin Scheduling

Round Robin is a preemptive scheduling algorithm designed mainly for time-sharing systems.

Each process receives a fixed time quantum.

```text
Ready Queue
       ┌───┬───┬───┐
       │P1 │P2 │P3 │
       └─┬─┴───┴───┘
         │
         ▼
       CPU
         │
      Quantum
         │
         ▼
   ┌────────────┐
   │ CPU given  │
   │ to next P  │
   └─────┬──────┘
         │
         ▼
   Process unfinished?
      │          │
     Yes         No
      │           │
      ▼           ▼
   Queue again   Exit
```

Numerical Example:

Processes:

| Process | Burst Time |
| ------- | ---------- |
| P1 | 5 |
| P2 | 4 |
| P3 | 2 |

Time quantum = 2 ms.

Execution:

```text
0   2   4   6   8   10  11
│P1 │P2 │P3 │P1 │P2 │P1 │
```

Detailed execution:

```text
P1: 0–2
P2: 2–4
P3: 4–6  → completed
P1: 6–8
P2: 8–10 → completed
P1: 10–11 → completed
```

Completion times:

```text
P1 = 11
P2 = 10
P3 = 6
```

Since all arrive at 0:

```text
TAT(P1) = 11
TAT(P2) = 10
TAT(P3) = 6
```

Waiting times:

```text
WT(P1) = 11 − 5 = 6
WT(P2) = 10 − 4 = 6
WT(P3) = 6 − 2 = 4
```

Average waiting time:

```text
AWT = (6 + 6 + 4) / 3
    = 16 / 3
    = 5.33 ms
```

If the time quantum is extremely large, Round Robin approaches FCFS.

If the quantum is too small, the number of context switches becomes large.

---

## 9. Multiple Processor Scheduling

In multiprocessor systems, more than one CPU/core is available.

```text
Ready Queue
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
        CPU 1      CPU 2      CPU 3
          │          │          │
         P1         P2         P3
          │          │          │
          └──────────┼──────────┘
                     ▼
                Completed
```

The scheduler must decide:

- Which process should execute?
- On which processor should it execute?
- How should workload be distributed?

**Processor Affinity**

Processor affinity attempts to keep a process on the same CPU.

```text
Process P1
    │
    ▼
 CPU 1
    │
    ├── cache data remains useful
    │
    ▼
 P1 continues on CPU 1
```

This can improve cache performance.

**Load Balancing**

Load balancing distributes work among processors.

Before balancing:

```text
CPU1 → P1 P2 P3 P4
CPU2 → P5
CPU3 → P6
```

After balancing:

```text
CPU1 → P1 P2
CPU2 → P3 P5
CPU3 → P4 P6
```

---

## 10. Real-Time Scheduling

Real-time scheduling is used when processes have deadlines.

```text
Task
         │
         ▼
    Release Time
         │
         ▼
      Execution
         │
         ▼
      Deadline
```

A real-time process can be represented as:

```text
Release Time ───────────────► Deadline
     │                           │
     ▼                           ▼
     ├──────── Execution ────────┤
```

Two major approaches are:

**Rate Monotonic Scheduling (RMS)**

A fixed-priority algorithm.

Tasks with shorter periods receive higher priority.

```text
Shorter Period
      │
      ▼
Higher Priority
```

**Earliest Deadline First (EDF)**

The process with the earliest deadline gets the CPU.

```text
P1 deadline = 20
P2 deadline = 12
P3 deadline = 18

Execution priority:

P2 → P3 → P1
```

---

## 11. Algorithm Evaluation

Scheduling algorithms must be evaluated using measurable criteria.

```text
Algorithm
                 │
      ┌──────────┼───────────┐
      ▼          ▼           ▼
  Waiting      Response    Turnaround
   Time          Time        Time
      │          │           │
      └──────────┼───────────┘
                 ▼
          Overall Evaluation
```

Common methods include:

**Deterministic Modeling**

Uses a fixed set of processes and calculates exact results.

**Queueing Models**

Uses mathematical models to estimate system performance.

**Simulation**

A model of the scheduling system is executed with selected workloads.

```text
Real System
     │
     ▼
Simulation Model
     │
     ▼
Run Workload
     │
     ▼
Collect Results
     │
     ▼
Evaluate Algorithm
```

---

## 12. Process Synchronization

Process synchronization coordinates processes that share data or resources.

Without synchronization, concurrent processes may produce inconsistent results.

```text
Process P1 ───┐
              ▼
         Shared Data
              ▲
Process P2 ───┘
              │
        Synchronization
```

---

## 13. Critical Section Problem

A critical section is the part of a process where shared data or resources are accessed.

```text
Process
   │
   ▼
Entry Section
   │
   ▼
Critical Section
   │
   ▼
Exit Section
   │
   ▼
Remainder Section
```

Example:

```c
counter = counter + 1;
```

If two processes execute this statement simultaneously, incorrect results may occur.

The synchronization solution must satisfy three requirements:

1. Mutual Exclusion
2. Progress
3. Bounded Waiting

---

## 14. Mutual Exclusion

Only one process can execute its critical section at a time.

```text
Critical Section
               │
       ┌───────┴───────┐
       ▼               ▼
      P1               P2
       │               │
     ENTER             WAIT
       │
       ▼
   [CRITICAL]
       │
       ▼
      EXIT
       │
       ▼
      P2
```

If P1 is inside the critical section, P2 must wait.

---

## 15. Progress

If no process is executing in the critical section and some processes want to enter, the decision about which process enters cannot be postponed indefinitely.

```text
Critical Section
      │
      ▼
   Empty
      │
 ┌────┴────┐
 ▼         ▼
 P1        P2
 wants     wants
 to enter  to enter
 └────┬────┘
      ▼
Selection must occur
within a finite time
```

---

## 16. Bounded Waiting

A process should not wait indefinitely to enter its critical section.

```text
P1 waiting
    │
    ▼
P2 enters
    │
    ▼
P3 enters
    │
    ▼
P1 eventually enters
```

There must be a limit on how many times other processes can enter before P1 receives its turn.

---

## 17. Race Condition

A race condition occurs when multiple processes access shared data concurrently and the final result depends on the order of execution.

Suppose:

```c
counter = 5
```

Both P1 and P2 execute:

```c
counter = counter + 1
```

Internally:

```text
LOAD counter
ADD 1
STORE counter
```

Possible execution:

```text
P1: LOAD 5
P2: LOAD 5
P1: ADD 1
P2: ADD 1
P1: STORE 6
P2: STORE 6
```

Expected result:

```text
7
```

Actual result:

```text
6
```

This is a race condition.

---

## 18. Synchronization Hardware

Hardware mechanisms can provide atomic operations used for synchronization.

Common mechanisms include:

- Test-and-Set
- Compare-and-Swap
- Atomic instructions
- Disabling interrupts in appropriate kernel contexts

**Test-and-Set**

Conceptually:

```text
Test-and-Set(lock)
       │
       ├── test old value
       │
       └── set lock
           atomically
```

A lock can be represented as:

```text
lock = 0 → available
lock = 1 → occupied
```

```text
Process
   │
   ▼
Test-and-Set
   │
 ┌─┴──────────┐
 ▼            ▼
0            1
│            │
▼            ▼
Enter       Wait
```

---

## 19. Mutex Lock

A mutex provides mutual exclusion.

```text
Mutex
            │
      ┌─────┴─────┐
      ▼           ▼
   Locked       Unlocked
      │             │
      ▼             ▼
   Process        Process
    waits          enters
```

Basic operations:

```text
acquire()
critical section
release()
```

Conceptually:

```c
acquire(lock);

/* critical section */

release(lock);
```

---

## 20. Semaphore

A semaphore is a synchronization variable accessed through atomic operations.

Two fundamental operations are:

```c
wait(S)
signal(S)
```

They are also commonly called:

```c
P(S)
V(S)
```

Conceptually:

```text
wait(S)
   │
   ▼
S = S − 1
   │
   ▼
If resource unavailable → wait

signal(S)
   │
   ▼
S = S + 1
   │
   ▼
Wake waiting process if necessary
```

---

## 21. Binary Semaphore

A binary semaphore can have values 0 and 1.

```text
S = 1 → resource available
S = 0 → resource unavailable
```

```text
Semaphore
             │
        ┌────┴────┐
        ▼         ▼
       S=1       S=0
        │         │
      Enter      Wait
```

It can be used similarly to a mutex for mutual exclusion.

---

## 22. Counting Semaphore

A counting semaphore can represent multiple identical resources.

Suppose five identical resources exist:

```text
S = 5
```

Each successful wait reduces S:

```text
5 → 4 → 3 → 2 → 1 → 0
```

When a resource is released:

```text
0 → 1 → 2 → ...
```

Example:

```text
5 Printers
           │
           ▼
     Semaphore = 5
           │
     ┌─────┼─────┐
     ▼     ▼     ▼
    P1     P2    P3
     │     │     │
   Printer Printer Printer
```

---

## 23. Classical Synchronization Problems

Important classical problems include:

1. Producer-Consumer Problem
2. Readers-Writers Problem
3. Dining Philosophers Problem

---

## 24. Producer-Consumer Problem

The producer places items into a shared buffer and the consumer removes them.

```text
Producer
   │
   │ produce
   ▼
┌──────────────────┐
│      BUFFER      │
│ [ ][ ][ ][ ][ ]  │
└────────┬─────────┘
         │
         │ consume
         ▼
      Consumer
```

Three synchronization requirements are important:

- Producer must not insert into a full buffer.
- Consumer must not remove from an empty buffer.
- Producer and consumer must not simultaneously modify the buffer.

For a buffer of size N, common semaphores are:

```c
empty = N
full  = 0
mutex = 1
```

Conceptually:

```c
Producer:
wait(empty)
wait(mutex)
insert item
signal(mutex)
signal(full)

Consumer:
wait(full)
wait(mutex)
remove item
signal(mutex)
signal(empty)
```

---

## 25. Readers-Writers Problem

Multiple readers may read shared data simultaneously, but a writer requires exclusive access.

```text
Shared Data
                 │
       ┌─────────┴─────────┐
       ▼                   ▼
    Readers              Writer
   R1 R2 R3                W1
       │                   │
       └── concurrent ─────┘
           reading
```

Writer requires exclusive access.

Valid situation:

```text
R1 ─┐
R2 ─┼──► READ
R3 ─┘
```

But:

```text
R1 ──► READ
W1 ──► WAIT
```

A writer cannot modify the data while readers are using it.

---

## 26. Dining Philosophers Problem

Five philosophers sit around a table. Each needs two chopsticks to eat.

```text
P1
              🥢     🥢
          P5             P2
           │             │
          🥢             🥢
          P4             P3
              🥢     🥢
```

Conceptually:

```text
P1
     /    \
   C1      C2
   │        │
  P5        P2
   │        │
   C5      C3
     \    /
       P4
        │
       C4
```

Each philosopher alternates between thinking and eating.

```text
THINKING → Hungry → Eating → THINKING
              │
              ▼
          acquire two
           chopsticks
```

If every philosopher picks up one chopstick and waits for the other, deadlock can occur.

---

## 27. Critical Regions

A critical region is a synchronization construct used to control access to shared data.

```text
Process
   │
   ▼
┌─────────────────────┐
│ Critical Region     │
│                     │
│ Shared Data Access  │
└─────────────────────┘
```

Only the appropriate process can execute the protected region at a time.

---

## 28. Monitors

A monitor is a high-level synchronization mechanism that encapsulates shared data and the procedures operating on it.

Only one process can execute inside a monitor at a time.

```text
MONITOR
┌────────────────────────────────┐
│ Shared Data                    │
│                                │
│ Procedure 1                    │
│ Procedure 2                    │
│ Procedure 3                    │
│                                │
│ Condition Variables            │
└───────────────┬────────────────┘
                │
        One process at a time
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
      P1       P2       P3
```

Monitors commonly use condition variables for waiting and signaling.

```c
wait(condition)
signal(condition)
```

---

## 29. Synchronization Hardware vs Software Mechanisms

```text
Synchronization
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       Hardware             Software
          │                   │
    Test-and-Set          Semaphore
    Compare-and-Swap      Mutex
                          Monitor
                          Critical Region
```

Hardware mechanisms provide atomic primitives, while higher-level software mechanisms use these primitives to construct synchronization facilities.

---

## 30. CPU Scheduling Numerical Formula Set

```text
Completion Time (CT)
= Time at which process finishes

Turnaround Time (TAT)
= CT − AT

Waiting Time (WT)
= TAT − BT

Response Time (RT)
= First Start Time − AT

Average Waiting Time
= ΣWT / Number of Processes

Average Turnaround Time
= ΣTAT / Number of Processes

Average Response Time
= ΣRT / Number of Processes

CPU Utilization
= (Busy Time / Total Time) × 100

Throughput
= Completed Processes / Total Time
```

---

## 31. Complete CPU Scheduling Numerical

Given:

| Process | Arrival Time | Burst Time | Priority |
| ------- | ------------ | ---------- | -------- |
| P1 | 0 | 7 | 3 |
| P2 | 1 | 4 | 1 |
| P3 | 2 | 2 | 2 |
| P4 | 3 | 1 | 4 |

For FCFS, execution order is based on arrival:

```text
P1 → P2 → P3 → P4
```

Gantt chart:

```text
0        7        11       13      14
│--------│---------│--------│-------│
   P1         P2       P3      P4
```

Completion times:

```text
P1 = 7
P2 = 11
P3 = 13
P4 = 14
```

Turnaround times:

```text
P1 = 7 − 0 = 7
P2 = 11 − 1 = 10
P3 = 13 − 2 = 11
P4 = 14 − 3 = 11
```

Waiting times:

```text
P1 = 7 − 7  = 0
P2 = 10 − 4 = 6
P3 = 11 − 2 = 9
P4 = 11 − 1 = 10
```

Average waiting time:

```text
AWT = (0 + 6 + 9 + 10) / 4
    = 25 / 4
    = 6.25 ms
```

Average turnaround time:

```text
ATAT = (7 + 10 + 11 + 11) / 4
     = 39 / 4
     = 9.75 ms
```

---

## 32. Scheduling Algorithm Comparison

| Algorithm | Preemptive | Main Selection Rule | Major Issue |
| --------- | ---------- | ------------------- | ----------- |
| FCFS | No | Arrival order | Convoy effect |
| SJF | No | Shortest burst | Starvation possible |
| SRTF | Yes | Shortest remaining time | More context switches |
| Priority | Yes/No | Highest priority | Starvation |
| Round Robin | Yes | Time quantum | Quantum selection |
| EDF | Yes | Earliest deadline | Deadline-based workload |
| RMS | Generally fixed priority | Shorter period = higher priority | Fixed priorities |

---

## 33. Context Switching

A context switch occurs when the CPU changes from executing one process/thread to another.

```text
Process P1
           │
           ▼
      Save Context
           │
           ▼
      Load Context
           │
           ▼
       Process P2
```

The context may include:

- Program counter
- CPU registers
- Process state
- Scheduling information

During context switching, the CPU performs management work rather than useful application execution.

```text
Time →
┌───────┬──────┬───────┬──────┬───────┐
│  P1   │ CS   │  P2   │  CS  │  P3   │
└───────┴──────┴───────┴──────┴───────┘
          ↑             ↑
       Context       Context
       Switch        Switch
```

---

## 34. Dispatcher

The dispatcher gives control of the CPU to the process selected by the scheduler.

```text
Ready Queue
    │
    ▼
Scheduler
    │
    ▼
Selected Process
    │
    ▼
Dispatcher
    │
    ├── Context Switch
    ├── Switch to User Mode
    └── Jump to Proper Program Location
    │
    ▼
   CPU
```

The time required by the dispatcher to stop one process and start another is called dispatch latency.

---

## 35. Scheduling Flow

```text
Processes
                  │
                  ▼
             Ready Queue
                  │
                  ▼
          ┌──────────────┐
          │   Scheduler  │
          └──────┬───────┘
                 │
                 ▼
             Dispatcher
                 │
                 ▼
                CPU
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
      Exit       I/O     Preemption
       │         │         │
       ▼         ▼         ▼
   Terminated  Waiting   Ready Queue
                 │
                 │ I/O complete
                 ▼
             Ready Queue
```

---

## 36. Preemptive vs Non-Preemptive Scheduling

```text
Scheduling
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
   Non-Preemptive       Preemptive
        │                   │
        ▼                   ▼
Process retains CPU     CPU can be
until blocking/exit     taken away
```

| Non-Preemptive | Preemptive |
| -------------- | ---------- |
| Process normally keeps CPU until blocking or completion | OS can interrupt a running process |
| Simpler | More complex |
| Lower context-switch overhead | Higher context-switch overhead |
| FCFS, SJF | Round Robin, SRTF |
| Less responsive for interactive workloads | Better responsiveness |

---

## 37. Unit 2 Concept Relationship

```text
UNIT 2
                            │
             ┌──────────────┴──────────────┐
             ▼                             ▼
       CPU SCHEDULING                SYNCHRONIZATION
             │                             │
    ┌────────┼─────────┐          ┌────────┼────────┐
    ▼        ▼         ▼          ▼        ▼        ▼
  FCFS      SJF     Priority   Critical  Hardware Semaphores
    │        │         │       Section      │
    │       SRTF       │          │         │
    │        │         │          ▼         ▼
    └────────┼─────────┘      Mutex      Monitors
             │
             ▼
       Round Robin
             │
             ▼
   Multiple Processors
             │
             ▼
     Real-Time Scheduling
             │
       ┌─────┴─────┐
       ▼           ▼
      EDF         RMS


SYNCHRONIZATION
                          │
            ┌─────────────┼─────────────┐
            ▼             ▼             ▼
       Critical       Synchronization   Classical
       Section           Hardware       Problems
            │             │             │
     ┌──────┼──────┐      │       ┌─────┼─────┐
     ▼      ▼      ▼      ▼       ▼     ▼     ▼
 Mutual  Progress Bounded Test-   P-C   R-W  Dining
Exclusion       Waiting  and-Set
                         │
                         ▼
                    Semaphores
                         │
                         ▼
                      Monitors
```


---

# UNIT 3: DEADLOCK AND STORAGE MANAGEMENT

## 1. Deadlock

A deadlock is a situation in which a set of processes is permanently blocked because every process is waiting for a resource held by another process in the same set.

```text
             ┌──────────────┐
             │   Process P1  │
             └──────┬───────┘
                    │ holds R1
                    ▼
             ┌──────────────┐
             │   Resource R1 │
             └──────┬───────┘
                    │
                    │ requested by P2
                    ▼
             ┌──────────────┐
             │   Process P2  │
             └──────┬───────┘
                    │ holds R2
                    ▼
             ┌──────────────┐
             │   Resource R2 │
             └──────┬───────┘
                    │
                    │ requested by P1
                    └──────────────► P1
```

Therefore:

- P1 waits for R2
- R2 is held by P2
- P2 waits for R1
- R1 is held by P1

Neither process can continue.

---

## 2. Deadlock System Model

A system contains:

- Processes
- Resource types
- Instances of resources
- Requests
- Allocations

A process normally follows:

```text
Request Resource
       │
       ▼
   Use Resource
       │
       ▼
 Release Resource
```

For example:

```text
P1 ──request──► R1
P1 ◄──allocate─ R1
P1 ──use──────► R1
P1 ──release──► R1
```

Resources may include:

- Printers
- Files
- Memory
- I/O devices
- Locks
- Database records

---

## 3. Resource Allocation Graph

A Resource Allocation Graph (RAG) represents processes and resources graphically.

Notation:

```text
Process:
  (P1)

Resource:
  [R1]

Request edge:
  P1 ─────► R1

Assignment edge:
  R1 ─────► P1
```

Example:

```text
Request
P1 ─────────────► [R2]

[R1] ────────────► P1
 Assignment
```

Meaning:

- P1 is holding R1.
- P1 is requesting R2.

A cycle can indicate deadlock when each resource has a single instance.

---

## 4. Resource Allocation Graph with Deadlock

```text
        ┌─────────┐
        │   P1    │
        └────┬────┘
             │ request
             ▼
          ┌──────┐
          │  R2  │
          └──┬───┘
             │ allocated
             ▼
        ┌─────────┐
        │   P2    │
        └────┬────┘
             │ request
             ▼
          ┌──────┐
          │  R1  │
          └──┬───┘
             │ allocated
             ▼
        ┌─────────┐
        │   P1    │
        └─────────┘
```

Cycle:

```text
P1 → R2 → P2 → R1 → P1
```

With one instance of each resource, this cycle indicates deadlock.

---

## 5. Four Necessary Conditions for Deadlock

Deadlock can occur only when all four conditions exist simultaneously.

**1. Mutual Exclusion**

At least one resource must be non-shareable.

```text
Resource R1
             │
             ▼
          Process P1
             │
             ▼
        Other processes
           must wait
```

Only one process can use the resource at a time.

**2. Hold and Wait**

A process holds at least one resource while waiting for another.

```text
P1
 │
 ├── holds ──► R1
 │
 └── waits ──► R2
```

**3. No Preemption**

A resource cannot be forcibly taken from a process.

```text
P1 ──holds──► R1

P2 ──requests─► R1
       │
       ▼
     WAIT
```

R1 must be released voluntarily by P1.

**4. Circular Wait**

A circular chain of processes exists where every process waits for a resource held by the next process.

```text
P1 → R2 → P2 → R3 → P3 → R1 → P1
```

All four together:

```text
Deadlock
                  │
      ┌───────────┼───────────┐
      ▼           ▼           ▼
 Mutual       Hold &       No
Exclusion      Wait      Preemption
                  │
                  ▼
             Circular Wait
```

---

## 6. Deadlock Characterization

A deadlock is characterized by a set of processes where:

- P1 waits for resource held by P2
- P2 waits for resource held by P3
- P3 waits for resource held by P1

Diagram:

```text
       ┌──────┐
       │  P1  │
       └──┬───┘
          │ waits
          ▼
       ┌──────┐
       │  P2  │
       └──┬───┘
          │ waits
          ▼
       ┌──────┐
       │  P3  │
       └──┬───┘
          │ waits
          └────────► P1
```

This circular dependency prevents progress.

---

## 7. Methods for Handling Deadlocks

Operating systems generally use four approaches:

```text
Deadlock Handling
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
 Prevention         Avoidance       Detection
       │               │                │
       └───────────────┴────────────────┘
                       │
                       ▼
                    Recovery
```

The approaches are:

1. Deadlock Prevention
2. Deadlock Avoidance
3. Deadlock Detection
4. Deadlock Recovery

---

## 8. Deadlock Prevention

Deadlock prevention ensures that at least one of the four necessary conditions never occurs.

**Prevent Mutual Exclusion**

Make resources shareable whenever possible.

For example:

```text
Shared Read-only File
        │
 ┌──────┼──────┐
 ▼      ▼      ▼
P1     P2     P3
```

However, some resources such as printers cannot practically be shared this way.

**Prevent Hold and Wait**

Require a process to request all required resources before execution.

```text
P1
 │
 ├── request R1
 ├── request R2
 ├── request R3
 │
 ▼
Execute
```

Alternatively, the process must release all currently held resources before requesting another resource.

**Prevent No Preemption**

If a process requests a resource that is unavailable, its currently held resources may be released where possible.

```text
P1 holds R1
     │
     ▼
Requests R2
     │
     ▼
R2 unavailable
     │
     ▼
Release R1
```

**Prevent Circular Wait**

Assign an ordering to resources.

Example:

```text
R1 < R2 < R3 < R4
```

A process must request resources only in increasing order.

Valid:

```text
R1 → R2 → R3
```

Invalid:

```text
R3 → R1
```

This prevents circular dependency.

---

## 9. Deadlock Avoidance

Deadlock avoidance requires additional information about future resource requirements.

Before allocating a resource, the OS checks whether the allocation leaves the system in a safe state.

```text
Resource Request
       │
       ▼
Temporary Allocation
       │
       ▼
Check Safe State
    │         │
   Yes        No
    │         │
    ▼         ▼
 Allocate    Wait
```

The most important algorithm is the Banker's Algorithm.

---

## 10. Safe State

A system is in a safe state if there exists at least one sequence in which every process can obtain its required resources, finish, and release resources.

This sequence is called a safe sequence.

```text
Safe State
    │
    ▼
P2 finishes
    │
    ▼
P1 finishes
    │
    ▼
P3 finishes
    │
    ▼
All processes finish
```

Example:

```text
Safe sequence = <P2, P1, P3>
```

A safe state does not mean that deadlock exists. It means the system has a guaranteed path to completion.

---

## 11. Unsafe State

An unsafe state is a state from which the system cannot guarantee that all processes can finish.

```text
System State
                  │
          ┌───────┴────────┐
          ▼                ▼
        SAFE             UNSAFE
          │                │
          ▼                ▼
 Safe sequence       Deadlock may occur
 exists
```

An unsafe state is not necessarily already a deadlock, but the OS must avoid entering it when using deadlock avoidance.

---

## 12. Banker's Algorithm

The Banker's Algorithm is a deadlock avoidance algorithm.

It uses:

- Available
- Maximum
- Allocation
- Need

The basic relationship is:

```text
Need = Maximum − Allocation
```

Diagram:

```text
Banker's Algorithm
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      Allocation       Maximum       Available
          │              │
          └──────┬───────┘
                 ▼
          Need = Max − Alloc
                 │
                 ▼
           Safety Algorithm
                 │
          ┌──────┴──────┐
          ▼             ▼
        Safe          Unsafe
```

---

## 13. Banker's Algorithm Numerical

Suppose there are three processes and one resource type.

| Process | Allocation | Maximum |
| ------- | ---------- | ------- |
| P1 | 2 | 4 |
| P2 | 1 | 2 |
| P3 | 1 | 3 |

Available resources:

```text
Available = 1
```

Calculate Need:

```text
P1 Need = 4 − 2 = 2
P2 Need = 2 − 1 = 1
P3 Need = 3 − 1 = 2
```

Table:

| Process | Allocation | Maximum | Need |
| ------- | ---------- | ------- | ---- |
| P1 | 2 | 4 | 2 |
| P2 | 1 | 2 | 1 |
| P3 | 1 | 3 | 2 |

Initially:

```text
Available = 1
```

P2 needs 1:

```text
Need(P2) ≤ Available
1 ≤ 1
```

Therefore P2 can finish.

After P2 finishes:

```text
Available = Available + Allocation(P2)
         = 1 + 1
         = 2
```

Now:

```text
Available = 2
```

P1 can finish:

```text
Need(P1) = 2 ≤ 2
```

After P1:

```text
Available = 2 + 2
         = 4
```

P3:

```text
Need(P3) = 2 ≤ 4
```

Therefore P3 finishes.

Safe sequence:

```text
<P2, P1, P3>
```

Hence the system is in a safe state.

---

## 14. Banker's Algorithm for Multiple Resources

For multiple resource types, the tables become:

```text
Allocation Matrix
             R1 R2 R3
P1           1  0  0
P2           0  1  1
P3           1  1  0

Maximum Matrix
             R1 R2 R3
P1           3  2  2
P2           1  2  2
P3           2  2  1
```

Need is calculated element by element:

```text
Need[i][j] =
Maximum[i][j] − Allocation[i][j]
```

Example:

```text
P1:
Maximum    = (3,2,2)
Allocation = (1,0,0)

Need = (2,2,2)
```

---

## 15. Banker's Safety Algorithm

Steps:

1. Work = Available
2. Find process Pi such that:

```text
       Need[i] ≤ Work
```

3. If found:

```text
       Work = Work + Allocation[i]
       Mark Pi finished
```

4. Repeat
5. If every process finishes: SAFE
6. Otherwise: UNSAFE

Flow:

```text
Available
                 │
                 ▼
          Calculate Need
                 │
                 ▼
       Find Need ≤ Available
          │             │
         Yes            No
          │             │
          ▼             ▼
   Process can finish  Unsafe
          │
          ▼
 Available += Allocation
          │
          ▼
   All processes done?
      │           │
     Yes          No
      │           │
      ▼           └──► Repeat
    SAFE
```

---

## 16. Deadlock Detection

Deadlock detection allows deadlocks to occur and periodically checks whether a deadlock exists.

```text
Processes + Resources
         │
         ▼
    Run Detection
         │
    ┌────┴────┐
    ▼         ▼
 No Deadlock  Deadlock
    │         │
    ▼         ▼
 Continue    Recovery
```

For a single instance of each resource, cycle detection in the resource allocation graph can identify deadlock.

For multiple instances, a detection algorithm similar to the Banker's safety algorithm is used.

---

## 17. Deadlock Detection Example

Suppose:

- P1 holds R1 and requests R2
- P2 holds R2 and requests R3
- P3 holds R3 and requests R1

Graph:

```text
R1 ──► P1 ──► R2 ──► P2 ──► R3
▲                              │
│                              ▼
└────────────── P3 ◄───────────┘
```

The dependency cycle is:

```text
P1 → P2 → P3 → P1
```

Therefore, deadlock exists.

---

## 18. Recovery from Deadlock

Once a deadlock has been detected, the OS can recover by:

1. Process termination
2. Resource preemption

```text
Deadlock
                 │
        ┌────────┴────────┐
        ▼                 ▼
Terminate Processes   Resource Preemption
        │                 │
        ▼                 ▼
Remove deadlock       Take resources
                      and reallocate
```

---

## 19. Process Termination

The OS can terminate one or more processes.

Two approaches:

**Abort All Deadlocked Processes**

```text
P1 ─┐
P2 ─┼──► TERMINATE
P3 ─┘
```

This is simple but may cause significant loss of work.

**Abort One Process at a Time**

```text
P1 → terminate
      │
      ▼
Check deadlock
      │
      ▼
Still deadlocked?
      │
     Yes
      ▼
Terminate another
```

---

## 20. Resource Preemption

The OS temporarily takes resources from one process and gives them to another.

```text
P1 ──holds──► R1

        R1
        │
        │ preempt
        ▼
      OS
        │
        ▼
       P2
```

Issues include:

- Selecting a victim
- Rollback
- Starvation

---

## 21. Starvation During Recovery

If the same process is repeatedly selected as a victim:

```text
P1
 │
 ▼
Resource taken
 │
 ▼
Restart
 │
 ▼
Resource taken again
 │
 ▼
Restart
 │
 └──────────────► ...
```

P1 may never complete.

Aging or considering the number of previous rollbacks can reduce starvation.

---

## 22. Combined Approach to Deadlock Handling

A practical OS may combine different strategies.

```text
Resources
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
  Prevention  Avoidance  Detection
       │         │         │
       └─────────┼─────────┘
                 ▼
             Recovery
```

Different resource types can use different methods.

---

# STORAGE MANAGEMENT

## 23. Storage Management

Storage management deals with managing memory and storage resources efficiently.

In this unit, the major memory-management concepts are:

```text
Storage Management
       │
       ├── Memory Management
       │      ├── Address Spaces
       │      ├── Swapping
       │      ├── Contiguous Allocation
       │      ├── Paging
       │      └── Segmentation with Paging
       │
       └── Memory Allocation
```

---

## 24. Memory Management

Memory management is the function of the OS responsible for managing main memory.

It keeps track of:

- Which parts of memory are in use.
- Which parts are free.
- Which process owns which region.
- How memory is allocated and released.

```text
Operating System
                    │
                    ▼
             Memory Manager
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
    Process P1   Process P2   Process P3
       │            │            │
       ▼            ▼            ▼
     Memory       Memory       Memory
```

---

## 25. Logical Address

A logical address is an address generated by the CPU.

It is also called a virtual address in systems using virtual memory.

```text
CPU
 │
 │ logical address
 ▼
Memory Management Unit
 │
 │ physical address
 ▼
Main Memory
```

---

## 26. Physical Address

A physical address identifies an actual location in main memory.

```text
CPU
 │
 ▼
Logical Address
 │
 ▼
   MMU
 │
 ▼
Physical Address
 │
 ▼
RAM
```

The MMU performs address translation.

---

## 27. Logical vs Physical Address

```text
CPU
         │
         ▼
 Logical Address
         │
         ▼
        MMU
         │
         ▼
Physical Address
         │
         ▼
        RAM
```

Example:

```text
Logical Address = 2050
Physical Address = 8050
```

The mapping depends on the memory-management technique being used.

---

## 28. Address Binding

Address binding is the process of associating program instructions and data with memory addresses.

It can occur at:

1. Compile time
2. Load time
3. Execution time

```text
Source Program
      │
      ▼
   Compiler
      │
      ▼
Object Code
      │
      ▼
    Loader
      │
      ▼
    Memory
```

Execution-time binding allows a process to be moved during execution.

---

## 29. Swapping

Swapping temporarily moves a process between main memory and secondary storage.

```text
Main Memory
             ┌────────────┐
             │    P1      │
             │    P2      │
             │    P3      │
             └─────┬──────┘
                   │
                Swap Out
                   │
                   ▼
             ┌────────────┐
             │   Disk     │
             │    P4      │
             └─────┬──────┘
                   │
                Swap In
                   │
                   ▼
             Main Memory
```

**Swap Out**

Memory → Disk

**Swap In**

Disk → Memory

Swapping can increase the number of processes that can be managed, but disk access is much slower than RAM access.

---

## 30. Contiguous Memory Allocation

In contiguous allocation, each process occupies one continuous region of physical memory.

```text
Main Memory

┌──────────────────────┐
│ Operating System     │
├──────────────────────┤
│ Process P1           │
├──────────────────────┤
│ Process P2           │
├──────────────────────┤
│ Free Space           │
├──────────────────────┤
│ Process P3           │
└──────────────────────┘
```

Each process occupies consecutive memory addresses.

---

## 31. Fixed Partitioning

Memory is divided into fixed-size partitions.

```text
┌─────────────────────┐
│ Operating System    │
├─────────────────────┤
│ Partition 1         │
│       P1            │
├─────────────────────┤
│ Partition 2         │
│       P2            │
├─────────────────────┤
│ Partition 3         │
│       Free          │
├─────────────────────┤
│ Partition 4         │
│       P3            │
└─────────────────────┘
```

A process is loaded into a partition large enough to contain it.

**Internal Fragmentation**

Unused space inside an allocated partition is called internal fragmentation.

```text
Partition = 100 KB
Process   = 70 KB

┌──────────────────┐
│ Process 70 KB    │
├──────────────────┤
│ Unused 30 KB     │
└──────────────────┘
```

30 KB is wasted inside the allocated partition.

---

## 32. Variable Partitioning

Partitions are created according to process requirements.

```text
┌─────────────────────┐
│ Operating System    │
├─────────────────────┤
│ P1                  │
├─────────────────────┤
│ P2                  │
├─────────────────────┤
│ Free                │
├─────────────────────┤
│ P3                  │
├─────────────────────┤
│ Free                │
└─────────────────────┘
```

This reduces internal fragmentation but can produce external fragmentation.

---

## 33. External Fragmentation

External fragmentation occurs when enough total free memory exists, but it is divided into small non-contiguous holes.

Memory:

```text
┌───────┐
│  P1   │
├───────┤
│ Free  │ 20 KB
├───────┤
│  P2   │
├───────┤
│ Free  │ 30 KB
├───────┤
│  P3   │
├───────┤
│ Free  │ 25 KB
└───────┘
```

Total free memory:

```text
20 + 30 + 25 = 75 KB
```

A 60 KB process may still fail to fit into a single contiguous block.

---

## 34. Memory Allocation Strategies

Important allocation strategies include:

- First Fit
- Best Fit
- Worst Fit

```text
Free Memory
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
   First Fit   Best Fit   Worst Fit
```

---

## 35. First Fit

First Fit allocates the first hole that is large enough.

Example:

Holes:

```text
100 KB
500 KB
200 KB
300 KB
600 KB
```

Process = 212 KB

First suitable hole:

```text
300 KB
```

Allocation:

```text
300 KB
┌─────────────────┐
│ Process 212 KB  │
├─────────────────┤
│ Free 88 KB      │
└─────────────────┘
```

---

## 36. Best Fit

Best Fit chooses the smallest hole that is large enough.

For:

```text
Holes:
100, 500, 200, 300, 600 KB
```

Process = 212 KB

Suitable holes:

```text
500 KB
300 KB
600 KB
```

Smallest suitable hole:

```text
300 KB
```

Therefore, Best Fit also selects the 300 KB hole.

---

## 37. Worst Fit

Worst Fit chooses the largest available hole.

For:

```text
Holes:
100, 500, 200, 300, 600 KB
```

Process = 212 KB

Largest hole:

```text
600 KB
```

Allocation:

```text
600 KB
┌─────────────────┐
│ Process 212 KB  │
├─────────────────┤
│ Free 388 KB     │
└─────────────────┘
```

---

## 38. Memory Allocation Numerical

Free holes:

```text
100 KB
500 KB
200 KB
300 KB
600 KB
```

Processes:

```text
P1 = 212 KB
P2 = 417 KB
P3 = 112 KB
P4 = 426 KB
```

First Fit:

```text
P1 = 212:

500 → remaining 288

P2 = 417:

600 → remaining 183

P3 = 112:

100 unsuitable
288 → remaining 176

P4 = 426:

No suitable block
```

Final result:

```text
P1 → 500 KB
P2 → 600 KB
P3 → 288 KB remainder
P4 → Not allocated
```

---

## 39. Paging

Paging divides:

- Logical memory into fixed-size pages
- Physical memory into fixed-size frames

```text
Logical Memory                 Physical Memory

┌──────────────┐               ┌──────────────┐
│ Page 0       │               │ Frame 0      │
├──────────────┤               ├──────────────┤
│ Page 1       │               │ Frame 1      │
├──────────────┤               ├──────────────┤
│ Page 2       │               │ Frame 2      │
├──────────────┤               ├──────────────┤
│ Page 3       │               │ Frame 3      │
└──────────────┘               └──────────────┘
       │                              ▲
       │                              │
       └──────── Page Table ──────────┘
```

A page can be stored in any available frame.

---

## 40. Page and Frame

```text
Logical Address
┌───────────────┬──────────────┐
│ Page Number   │ Page Offset  │
└───────────────┴──────────────┘
        │
        ▼
    Page Table
        │
        ▼
   Frame Number
        │
        ▼
┌───────────────┬──────────────┐
│ Frame Number  │ Page Offset  │
└───────────────┴──────────────┘
        │
        ▼
Physical Address
```

The offset remains unchanged during translation.

---

## 41. Page Table

A page table maps page numbers to frame numbers.

Example:

| Page | Frame |
| ---- | ----- |
| 0 | 3 |
| 1 | 7 |
| 2 | 1 |
| 3 | 5 |

Therefore:

```text
Page 0 → Frame 3
Page 1 → Frame 7
Page 2 → Frame 1
Page 3 → Frame 5
```

---

## 42. Paging Numerical: Address Translation

Suppose:

```text
Page size = 1 KB = 1024 bytes
Logical address = 2500
```

Calculate page number:

```text
Page Number = 2500 / 1024
            = 2
```

Remainder:

```text
Offset = 2500 mod 1024
       = 452
```

Therefore:

```text
Page Number = 2
Offset      = 452
```

Suppose the page table contains:

```text
Page 2 → Frame 5
```

Physical address:

```text
Physical Address
= Frame × Page Size + Offset
= 5 × 1024 + 452
= 5120 + 452
= 5572
```

Therefore:

```text
Logical Address 2500
        │
        ▼
Page 2, Offset 452
        │
        ▼
Page Table
        │
        ▼
Frame 5
        │
        ▼
Physical Address = 5572
```

---

## 43. Paging Numerical: Number of Pages

Suppose logical address space:

```text
64 KB
```

Page size:

```text
4 KB
```

Number of pages:

```text
64 / 4 = 16 pages
```

If physical memory is:

```text
32 KB
```

Number of frames:

```text
32 / 4 = 8 frames
```

Therefore:

```text
Logical Memory  → 16 pages
Physical Memory → 8 frames
```

---

## 44. Address Bits in Paging

Suppose:

```text
Logical address = 16 bits
Page size = 1 KB
```

Since:

```text
1 KB = 1024 = 2¹⁰
```

Offset requires 10 bits.

Therefore:

```text
Logical Address
┌──────────────┬──────────────┐
│ Page Number  │   Offset     │
│    6 bits    │   10 bits    │
└──────────────┴──────────────┘
```

Number of pages:

```text
2⁶ = 64 pages
```

---

## 45. Page Table Entry

A page-table entry may contain:

```text
┌──────────────┬──────┬──────┬──────┐
│ Frame Number │Valid │Prot. │Other │
└──────────────┴──────┴──────┴──────┘
```

Important fields include:

- Frame number
- Valid/invalid bit
- Protection bits
- Reference bit
- Dirty bit

---

## 46. Translation Lookaside Buffer (TLB)

A TLB is a fast associative cache containing recent page-table mappings.

```text
CPU
 │
 ▼
Logical Address
 │
 ▼
 ┌─────────────┐
 │     TLB     │
 └──────┬──────┘
        │
   ┌────┴─────┐
   ▼          ▼
  Hit        Miss
   │          │
   ▼          ▼
Frame     Page Table
   │          │
   │          ▼
   │        Frame
   └────┬─────┘
        ▼
Physical Memory
```

**TLB Hit**

Mapping is found directly in the TLB.

**TLB Miss**

The page table in main memory must be accessed.

---

## 47. TLB Effective Access Time Numerical

Suppose:

```text
TLB lookup = 10 ns
Memory access = 100 ns
TLB hit ratio = 80%
```

For a hit:

```text
10 + 100 = 110 ns
```

For a miss:

```text
10 + 100 + 100 = 210 ns
```

Effective Access Time:

```text
EAT = Hit Ratio × Hit Time
    + Miss Ratio × Miss Time

    = 0.8 × 110
    + 0.2 × 210

    = 88 + 42
    = 130 ns
```

Therefore:

```text
EAT = 130 ns
```

---

## 48. Advantages of Paging

Paging provides:

- No external fragmentation.
- Processes need not occupy contiguous memory.
- Efficient physical memory utilization.
- Easy allocation of free frames.
- Support for virtual memory.

Disadvantage:

- Page-table memory overhead.
- Address translation overhead.
- Possible internal fragmentation in the last page.

---

## 49. Segmentation

Segmentation divides a program according to logical units rather than fixed-size blocks.

Typical segments include:

```text
Program
  │
  ├── Code Segment
  ├── Data Segment
  ├── Stack Segment
  ├── Heap Segment
  └── Other Segments
```

Diagram:

```text
Logical Program

┌────────────────────┐
│ Code               │ Segment 0
├────────────────────┤
│ Data               │ Segment 1
├────────────────────┤
│ Heap               │ Segment 2
├────────────────────┤
│ Stack              │ Segment 3
└────────────────────┘
```

---

## 50. Segmented Address

A logical address in segmentation contains:

```text
┌─────────────────┬────────────┐
│ Segment Number  │   Offset   │
└─────────────────┴────────────┘
```

The segment table contains:

| Segment | Base | Limit |

Example:

| Segment | Base | Limit |
| ------- | ---- | ----- |
| 0 | 1000 | 500 |
| 1 | 4000 | 1000 |
| 2 | 7000 | 600 |

For:

```text
Segment = 1
Offset = 250
```

Physical address:

```text
Base + Offset
= 4000 + 250
= 4250
```

Since:

```text
250 < 1000
```

the address is valid.

---

## 51. Segmentation with Paging

Segmentation with paging combines both techniques.

```text
Logical Address
      │
      ▼
┌───────────────┐
│ Segment No.   │
│ Page No.      │
│ Offset        │
└───────┬───────┘
        │
        ▼
 Segment Table
        │
        ▼
   Page Table
        │
        ▼
     Frame
        │
        ▼
Physical Memory
```

This provides logical program organization through segmentation and fixed-size allocation through paging.

---

## 52. Segmentation with Paging Address Translation

```text
CPU
         │
         ▼
┌─────────────────────┐
│ Segment | Page | Off │
└─────────┬───────────┘
          │
          ▼
    Segment Table
          │
          ▼
      Page Table
          │
          ▼
        Frame
          │
          ▼
     Physical Memory
```

The segment number selects the appropriate segment table entry.

The page number selects a page within that segment.

The offset identifies the byte within the page.

---

## 53. Paging vs Segmentation

| Paging | Segmentation |
| ------ | ------------ |
| Fixed-size pages | Variable-size segments |
| Physical memory divided into frames | Logical program divided into segments |
| Programmer generally does not see pages | Segments represent logical program units |
| Avoids external fragmentation | Can suffer external fragmentation |
| May cause internal fragmentation | Generally no internal fragmentation due to fixed page size |
| Uses page table | Uses segment table |

---

## 54. Unit 3 Complete Concept Flow

```text
UNIT 3
                            │
             ┌──────────────┴──────────────┐
             ▼                             ▼
         DEADLOCK                   STORAGE MANAGEMENT
             │                             │
    ┌────────┼─────────┐          ┌────────┼──────────┐
    ▼        ▼         ▼          ▼        ▼          ▼
Character. Prevention Avoidance  Memory   Address    Swapping
    │                  │        Mgmt.     Spaces        │
    ▼                  ▼          │          │          │
4 Conditions       Banker's       │      Logical/       │
    │              Algorithm      │      Physical       │
    ▼                  │          │                     │
RAG                  Safe/        │              Contiguous
    │                Unsafe       │               Allocation
    ▼                             │                     │
Detection                         ▼              ┌──────┼──────┐
    │                           Paging           ▼      ▼      ▼
    ▼                             │          First   Best   Worst
Recovery                         │           Fit     Fit    Fit
    │                             │
 ┌──┴───────┐                     ▼
 ▼          ▼               Segmentation
Termination Preemption            │
                                  ▼
                         Segmentation + Paging
```

## 55. Overall Unit 3 Relationship

```text
OPERATING SYSTEM
                          │
                          ▼
                  Resource Management
                          │
             ┌────────────┴────────────┐
             ▼                         ▼
         DEADLOCK                 MEMORY MANAGEMENT
             │                         │
       ┌─────┴─────┐            ┌──────┴──────┐
       ▼           ▼            ▼             ▼
   Prevention   Avoidance   Physical      Virtual/
       │           │         Allocation     Logical
       │           │            │             │
       │        Banker's        │        ┌────┼────┐
       │        Algorithm       │        ▼    ▼    ▼
       │           │            │      Paging Seg. Swap
       ▼           ▼            │        │
   Detection     Safe State     │        ▼
       │           │            │   Page Table
       ▼           ▼            │        │
    Recovery   Safe Sequence   │        ▼
       │                        │       TLB
   ┌───┴────┐                   │
   ▼        ▼                   │
Terminate Preempt               │
                                ▼
                         Contiguous Allocation
                                │
                       ┌────────┼────────┐
                       ▼        ▼        ▼
                   First Fit Best Fit Worst Fit
```


---

# UNIT 4: VIRTUAL MEMORY AND FILE MANAGEMENT

## 1. Demand Paging

Demand paging is a virtual-memory technique in which a page is loaded into main memory only when it is actually required by a running process.

Instead of loading the complete process into RAM:

```text
Process
                 │
        ┌────────┼────────┐
        ▼        ▼        ▼
      Page 0    Page 1   Page 2
        │         │        │
        │      required    │
        │         │        │
        └─────────┼────────┘
                  ▼
                 RAM
```

Pages that are not currently required remain on secondary storage.

```text
CPU
              │
              ▼
       Logical Address
              │
              ▼
         Page Table
          │       │
       Present   Not Present
          │          │
          ▼          ▼
        Frame     Page Fault
          │          │
          ▼          ▼
         RAM      Disk
                     │
                     ▼
                Load Page
                     │
                     ▼
                    RAM
```

The valid/invalid bit in the page table indicates whether a page is currently in physical memory.

```text
Valid = 1  → Page is in memory
Valid = 0  → Page is not in memory
```

---

## 2. Page Fault

A page fault occurs when a process references a page that is not currently present in main memory.

Example:

```text
CPU requests Page 5
       │
       ▼
Page Table
       │
       ▼
Valid bit = 0
       │
       ▼
 PAGE FAULT
       │
       ▼
Check disk
       │
       ▼
Load Page 5 into free frame
       │
       ▼
Update Page Table
       │
       ▼
Restart instruction
```

The page-fault handling process is:

1. CPU generates a logical address.
2. Page table is checked.
3. If the page is present, execution continues.
4. If the page is absent, a page fault occurs.
5. OS checks whether the reference is valid.
6. A free frame is obtained.
7. Required page is read from disk.
8. Page table is updated.
9. The interrupted instruction is restarted.

---

## 3. Page Fault Handling

```text
Page Reference
                    │
                    ▼
              Page Table
                    │
             ┌──────┴──────┐
             ▼             ▼
        Page Present    Page Absent
             │             │
             ▼             ▼
        Access Frame    Page Fault
                           │
                           ▼
                    Valid Reference?
                       │        │
                      No       Yes
                       │        │
                       ▼        ▼
                 Abort Process Find Frame
                                │
                                ▼
                          Read Page from Disk
                                │
                                ▼
                         Update Page Table
                                │
                                ▼
                         Restart Instruction
```

---

## 4. Demand Paging Advantages

Demand paging:

- Reduces initial memory requirements.
- Allows larger programs to execute.
- Increases degree of multiprogramming.
- Loads only required pages.
- Supports virtual memory.

Its major disadvantage is the high cost of page faults because disk access is much slower than RAM access.

---

## 5. Effective Access Time with Page Fault

The effective access time can be represented as:

```text
EAT = (1 − p) × Memory Access Time
      + p × Page Fault Service Time
```

where:

```text
p = page-fault rate
```

For a more detailed calculation:

```text
EAT =
(1 − p) × memory access time
+
p × page-fault time
```

Usually, the page-fault time dominates the calculation.

---

## 6. Page Replacement

If a page fault occurs and no free frame is available, the OS must remove an existing page from memory.

This is called page replacement.

```text
Page Fault
                 │
                 ▼
          Free Frame Available?
             │          │
            Yes         No
             │          │
             ▼          ▼
        Load Page    Select Victim
                          │
                          ▼
                    Replace Page
                          │
                          ▼
                     Load New Page
                          │
                          ▼
                    Update Table
```

The removed page is called the victim page.

---

## 7. Page Replacement Algorithms

Important page replacement algorithms are:

```text
Page Replacement
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
     FIFO           LRU          Optimal
       │             │             │
       └─────────────┼─────────────┘
                     ▼
               Other Methods
                     │
                     ▼
                 Second Chance
```

The syllabus specifically requires page replacement algorithms and their evaluation.

---

## 8. FIFO Page Replacement

FIFO means First-In, First-Out.

The page that entered memory first is replaced first.

```text
Oldest                              Newest
  │                                    │
  ▼                                    ▼
┌────┬────┬────┐
│ P1 │ P2 │ P3 │
└────┴────┴────┘
  ▲
Replace first
```

Example:

Reference string:

```text
1  2  3  1  4
```

Number of frames = 3.

Initial:

```text
Reference 1:
[1] [-] [-]     Fault

Reference 2:

[1] [2] [-]     Fault

Reference 3:

[1] [2] [3]     Fault

Reference 1:

[1] [2] [3]     Hit

Reference 4:

The oldest page is 1.

[4] [2] [3]     Fault
```

FIFO is simple, but it can suffer from Belady's anomaly, where increasing the number of frames can sometimes increase page faults.

---

## 9. FIFO Numerical

Reference string:

```text
7, 0, 1, 2, 0, 3, 0, 4
```

Frames = 3.

| Reference | Frame 1 | Frame 2 | Frame 3 | Result |
| --------- | ------- | ------- | ------- | ------ |
| 7 | 7 | - | - | Fault |
| 0 | 7 | 0 | - | Fault |
| 1 | 7 | 0 | 1 | Fault |
| 2 | 2 | 0 | 1 | Fault |
| 0 | 2 | 0 | 1 | Hit |
| 3 | 2 | 3 | 1 | Fault |
| 0 | 2 | 3 | 0 | Fault |
| 4 | 4 | 3 | 0 | Fault |

Total page faults:

```text
7, 0, 1, 2, 3, 0, 4
= 7 faults
```

Page-fault rate:

```text
Page Fault Rate
= 7 / 8 × 100
= 87.5%
```

---

## 10. LRU Page Replacement

LRU means Least Recently Used.

The page that has not been used for the longest period is replaced.

```text
Recent Use
   │
   ▼
P3 → P1 → P2

P2 was used least recently
        │
        ▼
   Replace P2
```

Example:

Reference sequence:

```text
1  2  3  1  4
```

After accessing 1, 2 and 3:

```text
[1] [2] [3]
```

When 1 is accessed:

```text
Recent:
1 → 3 → 2
```

When 4 is required, page 2 is least recently used.

```text
[1] [4] [3]
```

LRU generally performs better than FIFO for workloads showing temporal locality, but it requires additional hardware/software support to track usage.

---

## 11. LRU Numerical

Reference string:

```text
1, 2, 3, 1, 4, 2
```

Frames = 3.

| Reference | Frame 1 | Frame 2 | Frame 3 | Result |
| --------- | ------- | ------- | ------- | ------ |
| 1 | 1 | - | - | Fault |
| 2 | 1 | 2 | - | Fault |
| 3 | 1 | 2 | 3 | Fault |
| 1 | 1 | 2 | 3 | Hit |
| 4 | 1 | 4 | 3 | Fault |
| 2 | 1 | 4 | 2 | Fault |

Total:

```text
Page Faults = 5
Hits = 1
```

Page-fault rate:

```text
5 / 6 × 100
= 83.33%
```

---

## 12. Optimal Page Replacement

The Optimal algorithm replaces the page that will not be used for the longest time in the future.

```text
Current Page Request
        │
        ▼
Look at future references
        │
        ▼
Which page is needed farthest
in the future?
        │
        ▼
Replace that page
```

Example:

Current memory:

```text
[1] [2] [3]
```

Future:

```text
1 ... 2 ... 3
```

If page 3 will be needed much later than pages 1 and 2, page 3 is selected for replacement.

Optimal replacement provides the minimum possible number of page faults for a given reference string and number of frames. However, the OS cannot normally implement it exactly because future references are not known.

---

## 13. Optimal Replacement Numerical

Reference string:

```text
1, 2, 3, 4, 1, 2, 5
```

Frames = 3.

First three:

```text
1 → [1 - -] Fault
2 → [1 2 -] Fault
3 → [1 2 3] Fault
```

Reference 4:

Future:

```text
1, 2, 5
```

Among current pages:

```text
1 → used soon
2 → used soon
3 → never used again
```

Replace 3:

```text
[1 2 4] Fault
```

Reference 1:

```text
[1 2 4] Hit
```

Reference 2:

```text
[1 2 4] Hit
```

Reference 5:

Neither 1 nor 2 nor 4 will be needed again, so any victim may be selected.

```text
[5 2 4] Fault
```

Total:

```text
Page faults = 5
```

---

## 14. Comparison of Page Replacement Algorithms

| Algorithm | Replacement Basis | Future Knowledge | Main Characteristic |
| --------- | ----------------- | ---------------- | ------------------- |
| FIFO | Oldest page | No | Simple |
| LRU | Least recently used | No | Uses past behavior |
| Optimal | Farthest future use | Yes | Theoretical minimum |

---

## 15. Allocation of Frames

When multiple processes execute simultaneously, the OS must decide how many frames each process receives.

```text
Physical Memory
┌──────────────────────┐
│ Operating System     │
├──────────────────────┤
│ P1 Frames            │
├──────────────────────┤
│ P2 Frames            │
├──────────────────────┤
│ P3 Frames            │
└──────────────────────┘
```

Frame allocation can be:

- Equal allocation
- Proportional allocation
- Priority allocation

---

## 16. Equal Allocation

If there are 100 frames and 5 processes:

```text
100 / 5 = 20 frames
```

Each process receives:

```text
P1 = 20
P2 = 20
P3 = 20
P4 = 20
P5 = 20
```

This is simple but does not consider process size.

---

## 17. Proportional Allocation

Frames are allocated according to process size.

Suppose:

```text
Physical frames = 100

P1 size = 20 KB
P2 size = 30 KB
P3 size = 50 KB
```

Total:

```text
20 + 30 + 50 = 100 KB
```

Frames:

```text
P1 = 20 frames
P2 = 30 frames
P3 = 50 frames
```

Formula:

```text
Allocationᵢ =
(Process Sizeᵢ / Total Process Size)
× Total Available Frames
```

---

## 18. Thrashing

Thrashing occurs when a system spends more time handling page faults and swapping pages than executing useful instructions.

```text
Too Few Frames
                │
                ▼
          More Page Faults
                │
                ▼
        More Disk Operations
                │
                ▼
       Less CPU Utilization
                │
                ▼
      OS increases multiprogramming
                │
                ▼
          Even fewer frames
                │
                └──────────────►
                    Thrashing
```

Symptoms:

- Very high page-fault rate.
- Excessive disk activity.
- Low CPU utilization.
- Poor system performance.

---

## 19. Thrashing and Working Set

The working set is the collection of pages actively used by a process during a particular period.

Reference String:

```text
1 2 3 1 2 4 1 2 3 5
```

Current Working Set:

```text
{1,2,3}
```

If a process does not have enough frames for its working set, page faults increase dramatically.

```text
Working Set = {1,2,3,4}

Allocated Frames = 2
        │
        ▼
Frequent Page Faults
        │
        ▼
Thrashing
```

---

## 20. Page Size Considerations

Page size affects:

- Page-table size.
- Internal fragmentation.
- Number of page faults.
- I/O efficiency.
- TLB effectiveness.

Small pages:

```text
Smaller Internal Fragmentation
        +
Larger Page Table
```

Large pages:

```text
Smaller Page Table
        +
Potentially Larger Internal Fragmentation
```

Therefore, page size is a design trade-off.

---

## 21. Demand Segmentation

Segmentation can also be used with demand loading.

A segment is loaded into memory only when referenced.

```text
Program
 ┌────────────┐
 │ Code       │
 ├────────────┤
 │ Data       │
 ├────────────┤
 │ Stack      │
 └────────────┘
       │
       ▼
Segment Reference
       │
       ▼
Segment Present?
   │          │
  Yes         No
   │          │
   ▼          ▼
Execute    Segment Fault
              │
              ▼
         Load Segment
```

Demand segmentation provides logical program organization while allowing only required segments to reside in memory.

---

# FILE MANAGEMENT

## 22. File Management

A file is a named collection of related information stored on secondary storage.

Examples:

```text
document.txt
program.c
photo.jpg
database.db
```

The OS provides mechanisms to:

- Create files.
- Delete files.
- Open files.
- Close files.
- Read files.
- Write files.
- Rename files.
- Organize files into directories.
- Control file access.

```text
File Management
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      Files        Directories      Access
        │              │              │
        ▼              ▼              ▼
 Create/Delete    Organization    Read/Write
 Read/Write                         Execute
```

---

## 23. File Concept

A file has attributes such as:

- Name
- Identifier
- Type
- Location
- Size
- Protection
- Creation time
- Modification time
- Owner information

Conceptually:

```text
┌──────────────────────────────┐
│ File                         │
├──────────────────────────────┤
│ Name                         │
│ Type                         │
│ Size                         │
│ Location                     │
│ Protection                   │
│ Timestamps                  │
│ Owner                        │
└──────────────────────────────┘
```

---

## 24. File Operations

Common file operations:

```text
Create
  │
  ▼
Open
  │
  ▼
Read / Write
  │
  ▼
Close
  │
  ▼
Delete
```

Other operations include:

- Seek
- Append
- Rename
- Truncate

---

## 25. File Creation

General process:

```text
Application
    │
    ▼
Create File Request
    │
    ▼
Operating System
    │
    ▼
File System
    │
    ├── Create metadata
    ├── Allocate storage
    └── Create directory entry
            │
            ▼
          File
```

---

## 26. File Open

Before reading or writing, a file is usually opened.

```text
Program
  │
  │ open("data.txt")
  ▼
Operating System
  │
  ▼
File System
  │
  ▼
Open File Table
  │
  ▼
File Descriptor / Handle
  │
  ▼
Program
```

The OS uses an open-file table to maintain information about currently opened files.

---

## 27. File Access Methods

Important file access methods:

1. Sequential access
2. Direct access
3. Indexed access

```text
File Access
                   │
       ┌───────────┼───────────┐
       ▼           ▼           ▼
 Sequential      Direct      Indexed
```

---

## 28. Sequential Access

Data is processed sequentially from beginning to end.

```text
Start
  │
  ▼
Record 1
  │
  ▼
Record 2
  │
  ▼
Record 3
  │
  ▼
Record 4
```

To reach Record 4, earlier records are normally passed through.

Used commonly in:

- Text processing.
- Logs.
- Sequential data processing.

---

## 29. Direct Access

Direct access allows a program to access a specific block or record without processing all previous records.

```text
File:
┌────┬────┬────┬────┬────┐
│ R1 │ R2 │ R3 │ R4 │ R5 │
└────┴────┴────┴────┴────┘
             ▲
             │
          Direct
          Access
```

Useful for databases and random-access files.

---

## 30. Indexed Access

An index stores pointers to file records.

```text
Index
        ┌──────────────┐
        │ Key  → Block │
        ├──────────────┤
        │ A   → B1     │
        │ B   → B5     │
        │ C   → B9     │
        └──────┬───────┘
               │
               ▼
             File
      ┌────┬────┬────┬────┐
      │ B1 │ B5 │ B7 │ B9 │
      └────┴────┴────┴────┘
```

The index reduces the search time for particular records.

---

## 31. File System

A file system determines how files and directories are organized and stored on secondary storage.

```text
File System
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
     Files        Directories   Free Space
        │             │             │
        ▼             ▼             ▼
   Metadata       Hierarchy     Allocation
```

Examples of file systems include NTFS, ext4, FAT32 and others.

---

## 32. File-System Structure

A typical storage organization can be represented as:

```text
┌──────────────────────────────┐
│ Physical Disk                │
├──────────────────────────────┤
│ Boot Control Block           │
├──────────────────────────────┤
│ File-System Metadata         │
├──────────────────────────────┤
│ Directory Structure          │
├──────────────────────────────┤
│ File Data                    │
├──────────────────────────────┤
│ Free Space                   │
└──────────────────────────────┘
```

Exact structures vary between file systems.

---

## 33. Secondary Storage Structure

Secondary storage includes devices such as:

- HDDs
- SSDs
- Optical storage
- External storage

Traditional disk organization:

```text
Disk
      ┌─────────────────┐
      │   Platter       │
      │  ┌───────────┐  │
      │  │  Tracks   │  │
      │  │ ○ ○ ○ ○   │  │
      │  │ ○ ○ ○ ○   │  │
      │  └───────────┘  │
      └─────────────────┘
```

A traditional HDD contains platters, tracks and sectors.

Modern SSDs use flash memory rather than rotating magnetic platters.

---

## 34. Directory

A directory organizes files and other directories.

Example:

```text
Root
│
├── Documents
│   ├── notes.txt
│   └── report.pdf
│
├── Pictures
│   ├── photo1.jpg
│   └── photo2.jpg
│
└── Programs
    ├── app.exe
    └── code.c
```

---

## 35. Directory Implementation

A directory generally maps file names to file metadata or file-system identifiers.

```text
Directory
┌──────────────────────────┐
│ filename → file metadata │
├──────────────────────────┤
│ a.txt → inode 105        │
│ b.txt → inode 221        │
│ c.c   → inode 305        │
└──────────────────────────┘
```

The exact implementation depends on the file system.

---

## 36. Directory Structures

Common directory structures:

1. Single-level directory
2. Two-level directory
3. Tree-structured directory
4. Acyclic graph directory
5. General graph directory

---

## 37. Single-Level Directory

All files exist in one directory.

```text
Root
        │
 ┌──────┼──────┬──────┐
 ▼      ▼      ▼      ▼
A.txt  B.txt  C.txt  D.txt
```

Simple but unsuitable for large systems because file-name conflicts can occur.

---

## 38. Two-Level Directory

Each user gets a separate directory.

```text
Master Directory
             /              \
            /                \
       User 1               User 2
       /    \               /    \
    A.txt  B.txt          A.txt  C.txt
```

Different users can have files with the same name.

---

## 39. Tree-Structured Directory

Directories can contain subdirectories.

```text
Root
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
     User1                User2
       │                     │
   ┌───┴───┐              ┌──┴──┐
   ▼       ▼              ▼     ▼
 Docs    Pics            Docs  Code
```

This is widely used in modern operating systems.

---

## 40. Acyclic Graph Directory

An acyclic graph allows shared files or directories but does not allow cycles.

```text
Root
      /    \
     A      B
      \    /
       \  /
       Shared
```

A shared object can have multiple references.

There must be no path that returns to the same directory.

---

## 41. General Graph Directory

A general graph can contain cycles.

```text
A
│
▼
B
│
▼
C
│
└──────► A
```

This creates:

```text
A → B → C → A
```

The file system must use mechanisms such as reference tracking or cycle detection to manage such structures.

---

## 42. File Allocation

File allocation determines how disk blocks are assigned to files.

Important methods:

- Contiguous allocation
- Linked allocation
- Indexed allocation

```text
File Allocation
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
  Contiguous      Linked       Indexed
```

---

## 43. Contiguous File Allocation

All blocks of a file are stored consecutively.

Disk Blocks:

```text
10  11  12  13  14  15  16
```

```text
    ┌───────────────┐
    │     File A    │
    └───────────────┘
       11-14
```

Metadata can store:

```text
Starting Block = 11
Length = 4
```

Advantages:

- Simple.
- Fast sequential access.
- Fast direct access.

Disadvantage:

- External fragmentation.
- File growth can be difficult.

---

## 44. Linked Allocation

Each file block contains a pointer to the next block.

```text
┌─────────┐      ┌─────────┐      ┌─────────┐
│ Block 9 │ ───► │ Block 16│ ───► │ Block 1 │
└─────────┘      └─────────┘      └─────────┘
                                      │
                                      ▼
                                  Block 10
```

The blocks need not be contiguous.

Advantages:

- No external fragmentation.
- Files can grow easily.

Disadvantage:

- Direct access is inefficient.
- Pointer storage consumes space.

---

## 45. Indexed Allocation

An index block contains pointers to the file's data blocks.

```text
Index Block
          ┌──────────────┐
          │ 9            │
          │ 16           │
          │ 1            │
          │ 10           │
          └──────┬───────┘
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
     Block 9   Block 16   Block 1
                              │
                              ▼
                           Block 10
```

Advantages:

- Supports direct access.
- Blocks need not be contiguous.

Disadvantage:

- Additional index-block space is required.

---

## 46. Comparison of File Allocation

| Method | Block Arrangement | Direct Access | Fragmentation |
| ------ | ----------------- | ------------- | ------------- |
| Contiguous | Consecutive | Excellent | External |
| Linked | Scattered + pointers | Poor | No external |
| Indexed | Scattered + index | Good | No external |

---

## 47. File-System Free-Space Management

The OS must keep track of unused disk blocks.

Common methods:

- Bit map
- Linked list
- Grouping
- Counting

---

## 48. Bit Map

Each disk block is represented by a bit.

Example:

```text
1 = allocated
0 = free
```

Blocks:

```text
1 0 1 1 0 0 1 0
```

Diagram:

```text
Block:  0 1 2 3 4 5 6 7
        ─────────────────
Bit:    1 0 1 1 0 0 1 0
```

Free blocks:

```text
1, 4, 5, 7
```

---

## 49. Linked Free Space

Free blocks are connected through pointers.

```text
Free Block
    │
    ▼
┌──────┐    ┌──────┐    ┌──────┐
│ B2   │───►│ B7   │───►│ B12  │
└──────┘    └──────┘    └──────┘
```

---

## 50. File-System Mounting

Before accessing a file system, the OS may need to mount it into the existing directory hierarchy.

```text
Storage Device
      │
      ▼
File System
      │
      ▼
   Mount
      │
      ▼
Directory Tree
      │
      ▼
Accessible Files
```

Example:

```text
/
├── home
├── etc
├── usr
└── mnt
      └── external
```

The mounted file system becomes accessible through a directory called the mount point.

---

## 51. File-System Recovery

File-system recovery deals with restoring consistency after failures.

Possible failures:

- Power failure.
- System crash.
- Hardware failure.
- Corrupted metadata.
- Interrupted write operation.

```text
Failure
   │
   ▼
File System May Become Inconsistent
   │
   ▼
Recovery Mechanism
   │
   ├── Journal / Log
   ├── Consistency Checking
   └── Backup / Restore
   │
   ▼
Consistent File System
```

---

## 52. Journaling

A journaling file system records intended changes in a journal before applying them to the main file-system structures.

```text
Application
    │
    ▼
File Operation
    │
    ▼
Journal
    │
    ▼
Main File System
```

If the system crashes:

```text
Journal
   │
   ▼
Replay / Complete Operation
   │
   ▼
Consistent File System
```

This reduces recovery time after crashes.

---

## 53. File-System Efficiency and Performance

Performance depends on:

- Disk access time.
- Cache.
- Buffering.
- Block size.
- Allocation method.
- Directory implementation.
- Free-space management.
- Read/write patterns.

General flow:

```text
Application
    │
    ▼
System Call
    │
    ▼
File System
    │
    ▼
Cache / Buffer
    │
    ▼
Storage Device
```

Caching frequently used data can reduce expensive storage accesses.

---

## 54. File Protection

File protection controls who can access a file and what operations they can perform.

Typical permissions:

- Read    (r)
- Write   (w)
- Execute (x)

Example:

```text
Owner       Group       Others
 rwx         r-x         r--
```

Meaning:

- Owner  → read, write, execute
- Group  → read, execute
- Others → read only

---

## 55. Access Control

A simplified access-control model:

```text
File
              │
      ┌───────┼────────┐
      ▼       ▼        ▼
    User    Group    Others
      │       │        │
      ▼       ▼        ▼
   Read/    Read/    Read/
   Write/   Write/   Write/
   Execute  Execute  Execute
```

The OS checks permissions before allowing an operation.

---

## 56. File Descriptor

A file descriptor is an identifier used by a process to refer to an open file.

```text
Process
   │
   │ file descriptor
   ▼
Open File Table
   │
   ▼
File Metadata
   │
   ▼
Disk Blocks
```

In Unix-like systems, standard descriptors commonly include:

```text
0 → Standard Input
1 → Standard Output
2 → Standard Error
```

---

## 57. Unit 4 Complete Concept Flow

```text
UNIT 4
                                │
                ┌───────────────┴────────────────┐
                ▼                                ▼
          VIRTUAL MEMORY                    FILE MANAGEMENT
                │                                │
      ┌─────────┼─────────┐            ┌─────────┼─────────┐
      ▼         ▼         ▼            ▼         ▼         ▼
Demand Paging  Page      Page       File      Directory   Allocation
               Fault   Replacement  Concept   Structure      │
                         │                         │      ┌───┼────┐
                  ┌──────┼──────┐                  │      ▼   ▼    ▼
                  ▼      ▼      ▼                  │   Contig Linked Indexed
                 FIFO   LRU  Optimal              │
                                                   ▼
                                           Access Methods
                                           ┌────┼────┐
                                           ▼    ▼    ▼
                                      Sequential Direct Indexed
                │
                ▼
          Frame Allocation
                │
          ┌─────┼─────┐
          ▼     ▼     ▼
        Equal Proportional Priority
                │
                ▼
             Thrashing
                │
                ▼
          Working Set
                │
                ▼
        Page Size Issues
                │
                ▼
        Demand Segmentation
```

## 58. Overall Relationship of Unit 4

```text
MEMORY MANAGEMENT
                            │
          ┌─────────────────┴─────────────────┐
          ▼                                   ▼
   Virtual Memory                         File System
          │                                   │
          ▼                                   ▼
   Demand Paging                         File Concept
          │                                   │
          ▼                                   ▼
     Page Faults                         File Operations
          │                                   │
          ▼                                   ▼
   Page Replacement                    Access Methods
          │                                   │
     ┌────┼────┐                              ▼
     ▼    ▼    ▼                         Directories
    FIFO LRU Optimal                          │
                                              ▼
                                       File Allocation
                                         │    │    │
                                         ▼    ▼    ▼
                                    Contiguous Linked Indexed
                                              │
                                              ▼
                                      Free-Space Management
                                              │
                                              ▼
                                           Recovery
```
