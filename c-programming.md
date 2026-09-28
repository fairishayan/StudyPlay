# SUBJECT: Fundamentals of Computer and C Programming
# SUBJECT_META: IUL MCA Sem 1 (CA453) — detailed notes, long format

# UNIT 1 — PART 1: COMPUTER FUNDAMENTALS

## 1. Introduction to Computers

A **computer** is an electronic programmable device that accepts data as input, processes it according to a set of instructions, stores data and produces meaningful information as output. It can perform arithmetic, logical, storage and communication operations at high speed and accuracy.

The basic working of a computer can be represented as:

```text
        INPUT
          │
          ▼
   ┌──────────────┐
   │  Processing  │
   │     Unit     │
   └──────┬───────┘
          │
          ▼
        OUTPUT
          │
          ▼
       STORAGE
```

A computer system mainly consists of **hardware** and **software**. Hardware includes physical components such as the keyboard, monitor, CPU and memory, while software consists of programs and instructions that control the hardware.

### Basic functions of a computer

```text
Data → Input → Processing → Output
                    │
                    ▼
                 Storage
```

1. **Input:** Accepts raw data and instructions.
2. **Processing:** Performs calculations and logical operations.
3. **Output:** Produces useful information.
4. **Storage:** Saves data, instructions and results for future use.
5. **Communication:** Exchanges information with other computers and devices.

---

## 2. History of Computers

The development of computers took place gradually from simple calculating devices to modern electronic systems.

### Important stages

```text
Abacus
  ↓
Napier's Bones
  ↓
Pascaline
  ↓
Difference Engine
  ↓
Analytical Engine
  ↓
ENIAC
  ↓
UNIVAC
  ↓
Modern Computers
```

### Abacus

The **Abacus** is one of the earliest known calculating devices. It consists of beads arranged on rods and was used for arithmetic calculations.

### Napier's Bones

Invented by **John Napier**, it used numbered rods to simplify multiplication, division and other calculations.

### Pascaline

Invented by **Blaise Pascal** around 1642, the Pascaline was a mechanical calculator capable of performing addition and subtraction.

### Difference Engine

Designed by **Charles Babbage**, the Difference Engine was a mechanical machine intended to calculate mathematical tables automatically.

### Analytical Engine

Charles Babbage later designed the **Analytical Engine**, which contained concepts similar to modern computers, including a processing unit, memory, input and output.

```text
        ┌───────────────┐
Input → │ Analytical    │ → Output
        │ Engine        │
        │               │
        │  ┌─────────┐  │
        │  │ Memory  │  │
        │  └─────────┘  │
        └───────────────┘
```

Because of this work, **Charles Babbage is commonly called the Father of the Computer**.

### ENIAC

**ENIAC (Electronic Numerical Integrator and Computer)** was an early general-purpose electronic digital computer. It used thousands of vacuum tubes and occupied a large physical space.

### UNIVAC

**UNIVAC (Universal Automatic Computer)** was one of the early commercial computers designed for general-purpose data processing.

---

## 3. Generations of Computers

Computer generations describe major stages in the development of computer technology. Each generation introduced important improvements in electronic components, size, speed, reliability and programming.

```text
1st Generation → Vacuum Tubes
       ↓
2nd Generation → Transistors
       ↓
3rd Generation → Integrated Circuits
       ↓
4th Generation → Microprocessors
       ↓
5th Generation → AI & Advanced Technologies
```

### First Generation: Vacuum Tubes

**Period:** Approximately 1940–1956

First-generation computers used **vacuum tubes** for electronic switching and processing. They were very large, expensive, consumed considerable electricity and generated substantial heat.

**Features:**

* Vacuum tubes used
* Very large size
* High power consumption
* Generated considerable heat
* Less reliable
* Machine language was mainly used

**Examples:** ENIAC, UNIVAC-I

```text
Data → Vacuum Tube Circuits → Result
             │
             ▼
        Large Computer
```

### Second Generation: Transistors

**Period:** Approximately 1956–1963

Transistors replaced vacuum tubes. They were smaller, faster, more reliable and consumed less power.

**Features:**

* Transistors used
* Smaller than first generation
* Lower power consumption
* More reliable
* Less heat generation
* Assembly language and high-level languages used

**Examples:** IBM 1401, CDC 1604

```text
Vacuum Tube
     ↓
  Transistor
     ↓
Smaller + Faster + More Reliable
```

### Third Generation: Integrated Circuits

**Period:** Approximately 1964–1971

Third-generation computers used **Integrated Circuits (ICs)**. An IC contains many electronic components on a small semiconductor chip.

**Features:**

* IC technology used
* Smaller size
* Higher processing speed
* Greater reliability
* Lower cost
* Operating systems became more common
* High-level languages such as COBOL and FORTRAN were widely used

```text
┌─────────────────────┐
│       IC Chip       │
│  ┌─┐ ┌─┐ ┌─┐ ┌─┐  │
│  │C│ │C│ │C│ │C│  │
│  └─┘ └─┘ └─┘ └─┘  │
└─────────────────────┘
      Integrated
       Circuit
```

### Fourth Generation: Microprocessors

**Period:** From approximately 1971

The **microprocessor** placed the functions of the CPU on a single chip. This led to the development of personal computers.

**Features:**

* Microprocessors used
* Very small size
* High speed
* Low power consumption
* Lower cost
* Personal computers became widespread
* Large memory capacity

```text
        ┌─────────────────┐
        │ Microprocessor  │
        │      CPU        │
        └────────┬────────┘
                 │
        ┌────────┴────────┐
        ▼                 ▼
     Memory            Devices
```

**Examples:** IBM PC, Apple Macintosh and modern personal computers.

### Fifth Generation: Artificial Intelligence

Fifth-generation computers focus on **Artificial Intelligence (AI)**, parallel processing, natural language processing, robotics and advanced computing techniques.

**Features:**

* AI-based systems
* Natural language processing
* Machine learning
* Robotics
* Parallel processing
* Advanced semiconductor technologies

```text
              ┌───────────────┐
              │ Fifth         │
              │ Generation    │
              └───────┬───────┘
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
      AI           Robotics      NLP/ML
```

---

## 4. Classification of Computers

Computers can be classified according to **purpose, data handling method and size/performance**.

### Classification based on data handled

```text
                    Computers
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
     Analog          Digital        Hybrid
```

### Analog Computers

Analog computers process **continuous data**, such as temperature, pressure, speed and voltage.

**Examples:** Older scientific measurement systems and certain industrial control systems.

### Digital Computers

Digital computers process data in **discrete form**, generally using binary digits, 0 and 1.

**Examples:** Desktop computers, laptops, smartphones and digital calculators.

### Hybrid Computers

Hybrid computers combine features of both analog and digital computers.

**Example:** Certain medical monitoring and industrial systems.

---

### Classification based on size and processing capability

```text
Computers
    │
    ├── Microcomputers
    ├── Minicomputers
    ├── Mainframes
    └── Supercomputers
```

### Microcomputers

Microcomputers are relatively small computers generally designed for individual users.

**Examples:** Desktop PCs, laptops and tablets.

### Minicomputers

Minicomputers are medium-sized systems designed to support multiple users and applications. Historically, they were used by organizations for departmental computing.

### Mainframe Computers

Mainframes are powerful computers designed to process large volumes of data and support many users simultaneously.

**Uses:** Banking, airline reservations, government databases and large-scale business processing.

### Supercomputers

Supercomputers are extremely powerful systems designed for highly complex calculations and simulations.

**Uses:**

* Weather forecasting
* Scientific research
* Space research
* Nuclear simulations
* Climate modelling

```text
Processing Power
      ↑
      │
Supercomputer
      │
Mainframe
      │
Minicomputer
      │
Microcomputer
      └────────────────→
          Size/Users
```

---

## 5. Characteristics of Computers

Computers have several characteristics that make them useful for solving complex problems and processing large amounts of data.

### 1. Speed

Computers can perform millions or billions of operations in a short period.

### 2. Accuracy

Computers normally produce highly accurate results when the input data and instructions are correct.

```text
Correct Input
     +
Correct Program
     ↓
Accurate Result
```

### 3. Diligence

A computer does not become tired or lose concentration while repeatedly performing the same operation.

### 4. Storage Capacity

Computers can store large amounts of data and retrieve it whenever required.

```text
Data → Storage → Retrieval → Processing
```

### 5. Automation

Once a program and required data are provided, a computer can perform operations automatically according to the instructions.

### 6. Versatility

A computer can perform different types of tasks, such as calculations, document processing, communication, multimedia and data analysis.

### 7. Reliability

Computers can perform repetitive operations consistently with a low error rate when properly programmed and maintained.

### 8. Multitasking

Modern operating systems allow computers to handle multiple applications or tasks concurrently.

### 9. Connectivity

Computers can communicate and exchange data through networks and the Internet.

### 10. Programmability

A computer can be programmed to perform different tasks by changing the instructions given to it.

---

## 6. Input Devices

**Input devices** are hardware components used to enter data and instructions into a computer.

```text
                 INPUT DEVICES
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
   Keyboard         Mouse        Scanner
       │              │              │
       └──────────────┼──────────────┘
                      ▼
                  Computer
```

Common input devices include:

* Keyboard
* Mouse
* Scanner
* Microphone
* Webcam
* Joystick
* Touchscreen
* Barcode reader
* Biometric devices

### Working of an input device

```text
User
 │
 ▼
Input Device
 │
 ▼
Computer
 │
 ▼
Processing
```

Input devices convert human actions or physical information into a form that the computer can process.

---

## 7. Keyboard

A **keyboard** is an input device used to enter text, numbers, symbols and commands into a computer.

A standard keyboard contains different groups of keys.

```text
┌──────────────────────────────────────────────┐
│ F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12    │
├──────────────────────────────────────────────┤
│ Q W E R T Y U I O P                         │
│ A S D F G H J K L                           │
│ Z X C V B N M                               │
├──────────────────────────────────────────────┤
│ Ctrl Alt   Spacebar       Enter   Shift     │
└──────────────────────────────────────────────┘
```

### Types of keyboard keys

**1. Alphanumeric keys:**
Used to enter letters, numbers and symbols.

**2. Function keys:**
F1 to F12 provide special functions depending on the software.

**3. Control keys:**
Keys such as Ctrl, Alt, Shift and Esc are used with other keys to perform commands.

**4. Navigation keys:**
Arrow keys, Home, End, Page Up and Page Down help move through documents or screens.

**5. Numeric keypad:**
Provides keys for quick numerical data entry.

**6. Special keys:**
Enter, Backspace, Delete, Spacebar, Tab and Caps Lock perform specific operations.

### Keyboard working

```text
Key Pressed
     ↓
Keyboard Controller
     ↓
Keyboard Signal
     ↓
Computer
     ↓
Operating System
     ↓
Application
```

---

## 8. Mouse

A **mouse** is a pointing input device used to control the pointer or cursor on the computer screen.

It commonly contains:

* Left button
* Right button
* Scroll wheel

```text
             Mouse
        ┌─────────────┐
        │  L     R    │
        │     ○       │ ← Scroll wheel
        │             │
        └──────┬──────┘
               │
            Movement
               ↓
          Screen Pointer
```

### Common mouse operations

**1. Click:** Pressing a mouse button once.

**2. Double-click:** Quickly pressing the left button twice.

**3. Right-click:** Pressing the right button to display a context menu.

**4. Drag and drop:** Holding a button while moving the pointer and then releasing it.

**5. Scroll:** Moving through a document or webpage using the scroll wheel.

### Working

```text
Mouse Movement
      ↓
Movement Sensor
      ↓
Computer
      ↓
Pointer Movement
      ↓
Screen
```

---

## 9. Output Devices

**Output devices** are hardware components that present the processed information from a computer to the user.

```text
              Computer
                  │
            Processed Data
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
     Monitor    Printer   Speakers
        │         │         │
        ▼         ▼         ▼
     Visual     Printed    Audio
     Output     Output     Output
```

Common output devices include:

* Monitor
* Printer
* Speakers
* Headphones
* Projector
* Plotter

### Types of output

**Soft copy:** Information displayed electronically, such as on a monitor.

**Hard copy:** Information produced physically on paper, such as a printed document.

---

## 10. Printer

A **printer** is an output device that produces a physical copy, or **hard copy**, of text, images or other computer-generated information.

```text
Computer
   │
   │ Data
   ▼
┌───────────┐
│  Printer  │
└─────┬─────┘
      │
      ▼
 Printed Document
```

### Classification of printers

```text
                 Printers
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      Impact              Non-Impact
          │                   │
     ┌────┴────┐        ┌─────┴─────┐
     ▼         ▼        ▼           ▼
 Dot Matrix   Daisy    Inkjet      Laser
              Wheel
```

### Impact Printers

Impact printers produce output by physically striking an ink ribbon against paper.

**Examples:**

* Dot matrix printer
* Daisy wheel printer

#### Dot Matrix Printer

A dot matrix printer uses a print head containing pins. The pins strike an ink ribbon to form characters and images from dots.

```text
Print Head
 ● ● ● ●
   ↓
 Ink Ribbon
 ─────────
   ↓
 Paper
 ═════════
```

### Non-Impact Printers

Non-impact printers produce output without physically striking the paper.

#### Inkjet Printer

An inkjet printer sprays tiny droplets of ink onto paper to create text and images.

#### Laser Printer

A laser printer uses a laser beam, toner and a heated fuser mechanism to produce high-quality printed output.

| Impact Printer                    | Non-Impact Printer              |
| --------------------------------- | ------------------------------- |
| Physically strikes paper          | Does not strike paper           |
| Usually noisier                   | Usually quieter                 |
| Example: Dot matrix               | Example: Inkjet, Laser          |
| Suitable for some multipart forms | Good for high-quality documents |

---

## 11. Storage Units

Computer storage is measured using units based on **bits and bytes**.

### Bit

A **bit** is the smallest unit of digital information. It can have a value of **0 or 1**.

### Byte

A **byte** consists of **8 bits**.

```text
1 Byte
┌───┬───┬───┬───┬───┬───┬───┬───┐
│ 0 │ 1 │ 0 │ 1 │ 1 │ 0 │ 0 │ 1 │
└───┴───┴───┴───┴───┴───┴───┴───┘
       8 bits = 1 Byte
```

### Common storage units

```text
1 Byte (B)
     ↓
1 KB
     ↓
1 MB
     ↓
1 GB
     ↓
1 TB
     ↓
1 PB
```

Commonly used binary relationships are:

* **1 Byte = 8 bits**
* **1 KiB = 1024 Bytes**
* **1 MiB = 1024 KiB**
* **1 GiB = 1024 MiB**
* **1 TiB = 1024 GiB**
* **1 PiB = 1024 TiB**

In everyday storage-device specifications, decimal units are also commonly used, where **1 KB = 1000 bytes**, **1 MB = 1000 KB**, and so on.

---

## 12. Primary Memory

**Primary memory**, also called **main memory**, is the memory directly accessible by the CPU. It stores programs and data that are currently being processed.

```text
             CPU
              │
              │ Direct Access
              ▼
       ┌──────────────┐
       │ Primary      │
       │ Memory       │
       ├──────────────┤
       │ RAM          │
       │ ROM          │
       └──────────────┘
```

The major types are **RAM** and **ROM**.

### RAM

**RAM (Random Access Memory)** is a read/write memory used to temporarily store programs and data currently being used.

It is generally **volatile**, meaning its contents are lost when power is removed.

```text
Running Program
      ↓
     RAM
      ↓
     CPU
```

### ROM

**ROM (Read-Only Memory)** stores information that is retained even when the power is turned off. It is **non-volatile**.

ROM is used for firmware and essential startup instructions.

### RAM vs ROM

| RAM                                          | ROM                                           |
| -------------------------------------------- | --------------------------------------------- |
| Usually volatile                             | Non-volatile                                  |
| Read and write memory                        | Primarily stores persistent instructions/data |
| Used for running programs                    | Used for firmware/startup functions           |
| Contents normally lost when power is removed | Contents retained without power               |

---

## 13. Secondary Memory

**Secondary memory** is non-volatile storage used to store data and programs permanently or for long-term use. It normally has greater storage capacity than primary memory but is not directly used by the CPU in the same way as main memory.

Examples include:

* Hard Disk Drive (HDD)
* Solid State Drive (SSD)
* USB flash drive
* Memory card
* Optical disc

```text
             Computer
                 │
        ┌────────┴────────┐
        ▼                 ▼
 Primary Memory     Secondary Memory
        │                 │
     RAM/ROM        ┌─────┼─────┐
                    ▼     ▼     ▼
                   HDD   SSD   USB
```

### HDD

A **Hard Disk Drive** stores data magnetically on rotating disks called platters.

```text
      HDD
┌─────────────────┐
│  ┌───────────┐  │
│  │  Platter  │  │
│  │     ●     │  │
│  └───────────┘  │
│      Head       │
└─────────────────┘
```

### SSD

A **Solid State Drive** stores data using semiconductor memory and has no moving mechanical parts.

```text
┌─────────────────────┐
│        SSD          │
│ ┌───┐ ┌───┐ ┌───┐  │
│ │Mem│ │Mem│ │Mem│  │
│ └───┘ └───┘ └───┘  │
└─────────────────────┘
```

### HDD vs SSD

| HDD                                  | SSD                                         |
| ------------------------------------ | ------------------------------------------- |
| Uses magnetic platters               | Uses flash memory                           |
| Has moving parts                     | No moving parts                             |
| Generally slower                     | Generally faster                            |
| Mechanical operation                 | Electronic operation                        |
| Usually cheaper per unit of capacity | Usually more expensive per unit of capacity |

### Primary vs Secondary Memory

| Primary Memory                | Secondary Memory                  |
| ----------------------------- | --------------------------------- |
| Directly accessible by CPU    | Used for long-term storage        |
| Generally faster              | Generally slower than main memory |
| Usually smaller capacity      | Usually larger capacity           |
| RAM is volatile               | Generally non-volatile            |
| Used during active processing | Used for persistent storage       |
| Examples: RAM, ROM            | Examples: SSD, HDD, USB drive     |

# UNIT 1 — PART 2: SOFTWARE & DOS

## 14. Basic Software Concepts

**Software** is a collection of programs, instructions and related data that tells a computer how to perform specific tasks. Unlike hardware, software has no physical form.

A computer system requires both hardware and software to function properly.

```text
              COMPUTER SYSTEM
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       Hardware            Software
          │                   │
    Physical Parts      Programs & Instructions
          │                   │
          └─────────┬─────────┘
                    ▼
             Working Computer
```

For example, a keyboard is hardware, while a word-processing program used to type a document is software.

### Main functions of software

1. Controls computer hardware.
2. Provides instructions to the CPU.
3. Helps users perform specific tasks.
4. Manages computer resources.
5. Provides an interface between the user and hardware.

---

## 15. Definition of Software

**Software** can be defined as a set of programs, procedures and instructions that directs a computer to perform specific operations.

```text
User
 │
 ▼
Software
 │
 ▼
Instructions
 │
 ▼
Hardware
 │
 ▼
Result
```

Software acts as an intermediary between the user and computer hardware.

For example, when a user opens a text editor, the software sends appropriate instructions to the operating system and hardware so that the application can run and display information on the screen.

---

## 16. Classification of Software

Software can broadly be classified into **system software** and **application software**. Utility programs are commonly treated as a supporting category of system software.

```text
                    SOFTWARE
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
    System Software          Application Software
          │                         │
     ┌────┴────┐              ┌────┴─────┐
     ▼         ▼              ▼          ▼
 Operating   Utilities     General     Specific
  Systems                 Purpose      Purpose
```

### 1. System Software

System software manages hardware and provides a platform for application programs.

Examples:

* Operating systems
* Device drivers
* Language translators
* Utility programs

### 2. Application Software

Application software is designed to help users perform specific tasks.

Examples:

* Word processors
* Web browsers
* Media players
* Accounting software
* Educational software

### Difference

| System Software                                           | Application Software                   |
| --------------------------------------------------------- | -------------------------------------- |
| Manages computer resources                                | Performs user-oriented tasks           |
| Works closely with hardware                               | Works mainly for specific user needs   |
| Usually starts with or supports the operating environment | Usually runs on top of system software |
| Example: Operating system                                 | Example: Word processor                |

---

## 17. System Software

**System software** is software that controls and manages computer hardware and provides the environment required for application programs to run.

```text
┌───────────────────────────┐
│    Application Software   │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│      System Software      │
│ OS | Drivers | Translators│
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│         Hardware          │
│ CPU | Memory | Devices    │
└───────────────────────────┘
```

### Types of system software

#### 1. Operating System

An operating system manages hardware resources and provides services to application programs.

Examples:

* Windows
* Linux
* macOS
* Android

#### 2. Device Drivers

A device driver allows the operating system to communicate with a particular hardware device.

```text
Application
     ↓
Operating System
     ↓
Device Driver
     ↓
Hardware Device
```

#### 3. Language Translators

These convert programs written in programming languages into forms that the computer can execute.

Main types:

* **Compiler:** Translates an entire program into machine code or another lower-level representation.
* **Interpreter:** Translates and executes program instructions one at a time.
* **Assembler:** Converts assembly language into machine code.

```text
High-Level Program
        │
        ▼
     Compiler
        │
        ▼
 Machine/Object Code
        │
        ▼
     Computer
```

---

## 18. Application Software

**Application software** is designed to perform tasks directly related to the needs of users.

Examples include:

* MS Word for document processing
* Web browsers for accessing websites
* Media players for multimedia
* Spreadsheet software for calculations
* Presentation software for creating presentations

### Types of application software

```text
        Application Software
                │
       ┌────────┴────────┐
       ▼                 ▼
 General-Purpose    Specific-Purpose
       │                 │
       ▼                 ▼
 Word Processor      Banking System
 Spreadsheet         Hospital System
 Browser             Payroll System
```

### General-purpose software

Designed to perform common tasks for many users.

Examples:

* Word processors
* Spreadsheets
* Presentation software
* Web browsers

### Specific-purpose software

Designed for a particular organization, task or industry.

Examples:

* Railway reservation system
* Hospital management system
* Banking software
* Payroll system

---

## 19. Utilities

**Utility software** consists of programs that help maintain, manage, protect and optimize a computer system.

Utilities are generally considered part of system software.

```text
              Utility Software
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
   Antivirus     Backup      Disk Tools
       │            │            │
       ▼            ▼            ▼
   Security      Recovery   Maintenance
```

### Common utilities

**1. Antivirus:** Detects and helps remove or prevent malicious software.

**2. Backup Utility:** Creates copies of important data for recovery.

**3. Disk Cleanup:** Removes unnecessary files to free storage space.

**4. File Compression:** Reduces file size for storage or transmission.

**5. Disk Management Tools:** Help manage storage devices and partitions.

**6. File Management Utilities:** Help users organize, copy, move, rename and delete files.

### Importance of utilities

Utilities help improve system maintenance, security, storage management and data protection.

---

# 20. Introduction to DOS

**DOS (Disk Operating System)** is a command-line operating system designed to manage files, memory, disks and other computer resources.

Microsoft's widely known version was **MS-DOS (Microsoft Disk Operating System)**.

Unlike modern graphical operating systems, DOS primarily uses typed commands.

```text
User
 │
 │ Types Command
 ▼
DOS Command Interpreter
 │
 ▼
Operating System Functions
 │
 ▼
Hardware
```

### Main functions of DOS

1. Manages files and directories.
2. Manages disks and storage.
3. Loads and executes programs.
4. Provides a command-line interface.
5. Performs basic system management operations.

### DOS command prompt

A DOS prompt may look like:

```text
C:\>
```

The user types a command after the prompt.

```text
C:\> DIR
```

DOS interprets the command and displays the requested result.

---

# 21. DOS Basics

DOS organizes information on storage devices using **files** and **directories**.

### File

A **file** is a named collection of related data stored on a storage device.

Example:

```text
NOTES.TXT
PROGRAM.C
DATA.DAT
```

A DOS filename traditionally consists of a filename and extension:

```text
filename.extension
     │       │
     │       └── File type
     └────────── File name
```

For example:

```text
REPORT.TXT
│      │
│      └── Extension
└───────── File name
```

### Directory

A directory is a location used to organize files and other directories.

```text
C:\
│
├── DOS
│   ├── COMMAND.COM
│   └── FILE1.TXT
│
├── PROGRAM
│   └── TEST.C
│
└── DATA
    └── MARKS.TXT
```

### Path

A path specifies the location of a file or directory.

Example:

```text
C:\PROGRAM\TEST.C
```

Here:

* `C:` = drive
* `PROGRAM` = directory
* `TEST.C` = file

### Common DOS concepts

**Drive:** Storage location such as `C:` or `D:`.

**Directory:** Organizes files.

**Subdirectory:** A directory inside another directory.

**Prompt:** Indicates that DOS is ready to receive a command.

Example:

```text
C:\DOS>
```

---

# 22. Internal DOS Commands

**Internal DOS commands** are commands built into the command interpreter, traditionally `COMMAND.COM`. They are available without requiring a separate executable file for each command.

```text
DOS
 │
 ▼
COMMAND.COM
 │
 ├── DIR
 ├── CD
 ├── MD
 ├── RD
 ├── COPY
 ├── DEL
 ├── REN
 └── TYPE
```

### Important internal commands

### 1. DIR

Displays files and directories in the current directory.

```text
C:\> DIR
```

Example output:

```text
FILE1.TXT
PROGRAM.C
DATA
```

### 2. CD / CHDIR

Changes the current directory.

```text
C:\> CD DOS
```

The current location becomes:

```text
C:\DOS>
```

### 3. MD / MKDIR

Creates a new directory.

```text
C:\> MD PROGRAM
```

### 4. RD / RMDIR

Removes an empty directory.

```text
C:\> RD PROGRAM
```

### 5. COPY

Copies one or more files.

```text
C:\> COPY A.TXT B.TXT
```

This creates a copy of `A.TXT` named `B.TXT`.

### 6. DEL / ERASE

Deletes files.

```text
C:\> DEL A.TXT
```

### 7. REN / RENAME

Changes the name of a file.

```text
C:\> REN OLD.TXT NEW.TXT
```

### 8. TYPE

Displays the contents of a text file.

```text
C:\> TYPE NOTES.TXT
```

### 9. CLS

Clears the command screen.

```text
C:\> CLS
```

### 10. DATE

Displays or allows modification of the system date.

```text
C:\> DATE
```

### 11. TIME

Displays or allows modification of the system time.

```text
C:\> TIME
```

### Internal command flow

```text
User
 │
 ▼
C:\> DIR
 │
 ▼
COMMAND.COM
 │
 ▼
DOS Processes Command
 │
 ▼
Directory Contents
```

---

# 23. External DOS Commands

**External DOS commands** are commands stored as separate executable files on disk. They are loaded into memory when required.

```text
        DOS
         │
         ▼
 External Command File
         │
   ┌─────┼─────┐
   ▼     ▼     ▼
 FORMAT  CHKDSK  XCOPY
```

Common external commands include:

* FORMAT
* CHKDSK
* XCOPY
* DISKCOPY
* ATTRIB
* EDIT
* TREE
* DOSKEY

### 1. FORMAT

Formats a disk or storage volume for use.

```text
C:\> FORMAT A:
```

Formatting can remove existing data from the target storage, depending on the operation and system.

### 2. CHKDSK

Checks a disk for file-system and storage-related errors and reports information about disk usage.

```text
C:\> CHKDSK
```

### 3. XCOPY

Copies files and directories, including directory structures.

```text
C:\> XCOPY A:\DATA C:\DATA /S
```

### 4. DISKCOPY

Copies the contents of one disk to another compatible disk.

```text
C:\> DISKCOPY A: A:
```

### 5. ATTRIB

Displays or changes file attributes such as read-only, hidden, system and archive attributes.

```text
C:\> ATTRIB
```

### 6. TREE

Displays the directory structure in a tree-like format.

```text
C:\> TREE
```

Example:

```text
C:\
├── DOS
├── PROGRAM
│   ├── C
│   └── DATA
└── NOTES
```

### 7. EDIT

Starts the DOS text editor in versions of DOS that provide it.

```text
C:\> EDIT NOTES.TXT
```

### 8. DOSKEY

Provides command-history and command-editing functionality in DOS environments that support it.

```text
C:\> DOSKEY
```

### Internal vs External DOS Commands

| Internal Commands                                           | External Commands                         |
| ----------------------------------------------------------- | ----------------------------------------- |
| Built into the command interpreter                          | Stored as separate program files          |
| Generally available when the command interpreter is running | Loaded from storage when needed           |
| Do not require a separate executable file                   | Require an executable command file        |
| Examples: DIR, CD, COPY, DEL                                | Examples: FORMAT, CHKDSK, XCOPY           |
| Mainly basic command-line operations                        | Often provide additional system utilities |

# UNIT 1 — PART 3: COMPUTER NETWORKS

## 24. Basics of Computer Networks

A **computer network** is a collection of two or more computers and other devices connected together to communicate and share data, resources and services.

```text
              COMPUTER NETWORK
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
     Computer     Printer     Server
        │           │           │
        └───────────┼───────────┘
                    │
                 Network
                 Connection
```

A network allows connected devices to exchange information using communication links and networking protocols.

### Basic components of a network

```text
              Network
                 │
     ┌───────────┼───────────┐
     ▼           ▼           ▼
  Devices    Transmission   Protocols
             Medium
```

### 1. Nodes

A **node** is any device connected to a network that can send, receive or process data.

Examples:

* Computer
* Smartphone
* Printer
* Server
* Network device

### 2. Transmission Medium

The transmission medium carries data from one device to another.

It may be:

**Wired:**

* Twisted-pair cable
* Coaxial cable
* Optical fiber

**Wireless:**

* Wi-Fi
* Bluetooth
* Radio communication

```text
Wired:
Computer ───── Cable ───── Computer

Wireless:
Computer )))  Radio/Wi-Fi  ((( Computer
```

### 3. Network Devices

Network devices help connect and manage computers and other devices.

Examples:

* Hub
* Switch
* Router
* Modem
* Access point

### 4. Protocols

A **protocol** is a set of rules that controls communication between devices.

Examples:

* TCP/IP
* HTTP
* FTP
* SMTP

### Why are computer networks used?

1. **Resource sharing:** Printers, storage and other resources can be shared.
2. **Data sharing:** Files and information can be transferred between devices.
3. **Communication:** Users can communicate through email, messaging and other services.
4. **Centralized management:** Data and resources can be managed centrally.
5. **Internet access:** Multiple devices can access Internet services through a network.

### Basic network communication

```text
Sender
  │
  │ Data
  ▼
Network Device
  │
  │ Communication Medium
  ▼
Network Device
  │
  ▼
Receiver
```

For example, when Computer A sends a file to Computer B:

```text
Computer A
    │
    │ File
    ▼
  Switch
    │
    ▼
Computer B
```

---

# 25. Network Types

Computer networks can be classified according to the geographical area or distance they cover.

The major types are:

```text
                    NETWORKS
                       │
       ┌───────────────┼───────────────┐
       ▼               ▼               ▼
      LAN             MAN              WAN
       │               │               │
   Small Area      City Area      Large Area
```

## 1. LAN — Local Area Network

A **Local Area Network (LAN)** connects computers and devices within a relatively small geographical area.

Examples:

* Computer laboratory
* Office
* School
* Home
* College building

```text
        LAN
 ┌─────────────────────┐
 │                     │
 │ PC ──┐              │
 │      │              │
 │ PC ──┼── Switch ─ PC│
 │      │              │
 │Printer              │
 │                     │
 └─────────────────────┘
```

### Characteristics of LAN

* Covers a small geographical area.
* Usually provides high data-transfer rates.
* Generally owned and managed by an organization or individual.
* Used for sharing files, printers and other resources.

### Example

A college computer laboratory containing 50 computers connected through switches forms a LAN.

---

## 2. MAN — Metropolitan Area Network

A **Metropolitan Area Network (MAN)** connects networks across a city or a large metropolitan area.

It is larger than a LAN but generally smaller than a WAN.

```text
                 MAN
        ┌──────────────────┐
        │      City        │
        │                  │
 Building A ─────── Building B
        │                  │
        └──── Building C ──┘
```

### Characteristics of MAN

* Covers a city or metropolitan region.
* Connects multiple LANs.
* Covers a larger area than LAN.
* Can be operated by organizations, institutions or service providers.

### Example

A network connecting several branches of a university located at different places within a city can function as a MAN.

---

## 3. WAN — Wide Area Network

A **Wide Area Network (WAN)** connects computers and networks across large geographical areas such as countries or continents.

The **Internet** is the largest example of an interconnected global network.

```text
             WAN
              │
      ┌───────┴────────┐
      ▼                ▼
   City A            City B
     │                  │
    LAN                LAN
     │                  │
     └────── WAN ───────┘
```

### Characteristics of WAN

* Covers very large geographical areas.
* Connects multiple LANs and MANs.
* Uses various communication technologies.
* Can involve public or private infrastructure.
* Generally has greater propagation and management complexity than a LAN.

### Example

A multinational company connecting offices in India, the United States and Europe can use a WAN.

---

## Comparison of LAN, MAN and WAN

| Feature   | LAN                         | MAN                                  | WAN                                       |
| --------- | --------------------------- | ------------------------------------ | ----------------------------------------- |
| Full form | Local Area Network          | Metropolitan Area Network            | Wide Area Network                         |
| Coverage  | Small area                  | City/metropolitan area               | Very large area                           |
| Example   | College lab                 | City-wide network                    | Global corporate network                  |
| Speed     | Generally high              | Generally high                       | Varies                                    |
| Ownership | Usually private             | Private or service-provider operated | Private, public or carrier infrastructure |
| Connects  | Devices within a local area | Multiple LANs                        | LANs/MANs over large distances            |

---

# 26. Network Topologies

**Network topology** refers to the physical or logical arrangement of computers, network devices and communication links in a network.

```text
              NETWORK TOPOLOGIES
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
      Bus            Star           Ring
       │              │              │
       ▼              ▼              ▼
     Mesh           Tree          Hybrid
```

The major topologies are **Bus, Star, Ring, Mesh, Tree and Hybrid**.

---

## 1. Bus Topology

In a **bus topology**, all devices are connected to a single main communication cable called the **backbone**.

```text
       Main Backbone Cable
══════════════════════════════════
    │          │          │
    │          │          │
   PC1        PC2        PC3
```

### Working

Data transmitted by one device travels along the backbone. Devices examine the transmitted data and determine whether it is intended for them.

### Advantages

* Simple design.
* Requires relatively less cable.
* Easy to install for small networks.
* Less expensive than some other topologies.

### Disadvantages

* Failure of the backbone can affect the entire network.
* Performance can decrease as network traffic increases.
* Fault detection can be difficult.
* Adding many devices can make the network less efficient.

---

## 2. Star Topology

In a **star topology**, every device is connected to a central device such as a switch.

```text
                 PC1
                  │
                  │
            ┌─────┴─────┐
            │   Switch  │
            └─┬──┬──┬──┘
              │  │  │
             PC2 PC3 Printer
```

### Working

When one device sends data, the data is sent through the central network device, which forwards it toward the appropriate destination.

### Advantages

* Easy to install and manage.
* Failure of one cable usually affects only one device.
* Easy to add or remove devices.
* Fault identification is relatively easy.
* Commonly used in modern Ethernet networks.

### Disadvantages

* Failure of the central device can affect the entire network.
* Requires more cable than bus topology.
* Installation cost can be higher because of the central device and cabling.

---

## 3. Ring Topology

In a **ring topology**, each device is connected to two neighboring devices, forming a closed loop.

```text
          PC1 ───── PC2
           │          │
           │          │
          PC4 ───── PC3
```

The data travels around the ring according to the network's communication mechanism.

### Advantages

* Devices have an organized connection structure.
* Data transmission can be predictable in appropriately designed ring networks.
* No central device is required in a basic ring.

### Disadvantages

* Failure of a link or device can disrupt communication in a basic ring.
* Adding or removing devices can be more complicated.
* Troubleshooting can be difficult.

---

## 4. Mesh Topology

In a **mesh topology**, devices are connected through multiple communication links. In a **full mesh**, every device has a direct connection to every other device.

```text
          PC1
         / | \
        /  |  \
      PC2--|---PC3
        \  |  /
         \ | /
          PC4
```

### Full mesh

For `n` devices, the number of direct links required in a full mesh is:

$$
\frac{n(n-1)}{2}
$$

For example, with 4 devices:

$$
\frac{4(4-1)}{2}=6
$$

### Advantages

* High redundancy.
* Multiple paths are available.
* Failure of one link does not necessarily stop communication.
* Reliable for critical networks.

### Disadvantages

* Requires a large number of connections.
* Expensive to install.
* Difficult to manage as the number of devices increases.

---

## 5. Tree Topology

A **tree topology** combines hierarchical organization with multiple star-like network segments.

```text
                    Core
                     │
              ┌──────┴──────┐
              │             │
            Switch         Switch
           /     \         /     \
         PC1     PC2      PC3     PC4
```

It is often described as a hierarchical topology because devices are arranged in levels.

### Advantages

* Supports hierarchical organization.
* Easy to expand by adding branches.
* Suitable for large networks.
* Different sections can be managed separately.

### Disadvantages

* Failure of an important higher-level device can affect an entire branch.
* Requires more cabling and network equipment.
* Management can become complex as the network grows.

---

## 6. Hybrid Topology

A **hybrid topology** combines two or more different network topologies.

For example, a network may combine star and bus structures.

```text
             Switch
            /      \
           /        \
        PC1          PC2
         │
      Backbone
════════════════════════
     │              │
   Switch          Switch
   /   \            /   \
 PC3   PC4         PC5   PC6
```

### Advantages

* Flexible design.
* Can be adapted to organizational requirements.
* Different topology types can be used in different network sections.
* Suitable for large and complex networks.

### Disadvantages

* More expensive.
* Design and management can be complex.
* Troubleshooting may require specialized knowledge.

---

## Comparison of Network Topologies

| Topology | Basic Structure | Main Advantage          | Main Disadvantage                          |
| -------- | --------------- | ----------------------- | ------------------------------------------ |
| Bus      | Single backbone | Simple and economical   | Backbone failure affects network           |
| Star     | Central device  | Easy management         | Central device is critical                 |
| Ring     | Closed loop     | Organized communication | Link/device failure can disrupt basic ring |
| Mesh     | Multiple links  | High redundancy         | Expensive and complex                      |
| Tree     | Hierarchical    | Easy expansion          | Higher-level failure can affect branches   |
| Hybrid   | Combination     | Flexible                | Complex and costly                         |

# UNIT 1 — PART 4: INTERNET & TCP/IP

## 27. Introduction to Internet

The **Internet** is a worldwide system of interconnected computer networks that communicate with each other using standard communication protocols, mainly the **TCP/IP protocol suite**.

It allows computers, smartphones, servers and other devices to exchange information and access services across the world.

```text
                         INTERNET
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
      Network A           Network B           Network C
        │                   │                   │
    ┌───┼───┐           ┌───┼───┐           ┌───┼───┐
    PC  PC Router        PC  PC Router        PC  Server
         │                   │                   │
         └───────────────────┼───────────────────┘
                             │
                       Global Network
```

The Internet is not a single computer or network. It is a **network of interconnected networks**.

### Basic working of the Internet

When a user accesses a website, the request passes through several networks and devices before reaching the destination server.

```text
User Device
     │
     ▼
Wi-Fi / Local Network
     │
     ▼
Router
     │
     ▼
ISP
     │
     ▼
Internet
     │
     ▼
Web Server
     │
     ▼
Requested Data
     │
     ▼
User Device
```

### Major uses of the Internet

1. **World Wide Web:** Accessing websites and online information.
2. **Email:** Sending and receiving electronic messages.
3. **File Transfer:** Uploading and downloading files.
4. **Online Communication:** Messaging, voice calls and video conferencing.
5. **Online Education:** Accessing courses, lectures and learning resources.
6. **E-commerce:** Buying and selling products and services.
7. **Online Banking:** Performing banking and financial transactions.
8. **Entertainment:** Streaming music, movies, videos and games.
9. **Cloud Services:** Storing and processing data using remote servers.

---

# 28. Internet Basic Terminologies

Several technical terms are commonly used when discussing the Internet.

### 1. Internet

The **Internet** is a global interconnected network of networks that allows devices to communicate and exchange information.

### 2. World Wide Web

The **World Wide Web (WWW)** is a service that operates over the Internet and consists of interconnected webpages and resources accessed using web browsers.

```text
Internet
   │
   ├── World Wide Web
   ├── Email
   ├── File Transfer
   ├── Online Gaming
   └── Other Services
```

The Internet and WWW are therefore not the same thing. The Web is one service provided through the Internet.

### 3. Website

A **website** is a collection of related webpages and resources available under a common web address or domain.

Example:

```text
Website
   │
   ├── Home Page
   ├── About
   ├── Services
   └── Contact
```

### 4. Webpage

A **webpage** is an individual document or resource available on the Web, usually accessed through a URL.

### 5. Web Browser

A **web browser** is software used to access and display webpages and other Web resources.

Examples:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

```text
User
 │
 ▼
Web Browser
 │
 ▼
Internet
 │
 ▼
Web Server
 │
 ▼
Webpage
```

### 6. Web Server

A **web server** is a computer system and software that stores, processes and delivers web resources to clients over a network.

```text
Browser
   │
   │ Request
   ▼
Web Server
   │
   │ Response
   ▼
Browser
```

### 7. Client

A **client** is a device or software application that requests services or resources from a server.

Example: A web browser acts as a client when requesting a webpage.

### 8. Server

A **server** provides resources or services to other computers called clients.

```text
             Server
          /     |     \
         /      |      \
      Client  Client  Client
```

### 9. IP Address

An **IP address** is a numerical address used to identify a network interface or device for communication on an IP network.

Example of IPv4:

```text
192.168.1.10
```

IPv6 uses a much larger address space and is written in hexadecimal groups, for example:

```text
2001:db8::1
```

### 10. Domain Name

A **domain name** is a human-readable name used to identify a website or Internet service.

Example:

```text
example.com
```

Instead of remembering a numerical IP address, users can use a domain name.

### 11. DNS

**DNS (Domain Name System)** translates domain names into IP addresses and performs other name-resolution functions.

```text
User enters:
www.example.com
        │
        ▼
       DNS
        │
        ▼
IP Address
        │
        ▼
Web Server
```

### 12. HTTP

**HTTP (Hypertext Transfer Protocol)** is a protocol used for transferring web resources between clients and servers.

### 13. HTTPS

**HTTPS (Hypertext Transfer Protocol Secure)** is HTTP used with encryption provided by TLS, helping protect data exchanged between a client and server.

```text
HTTP
Client ─────────────── Server

HTTPS
Client ═══ Encrypted ═══ Server
```

### 14. Download

**Downloading** means receiving data from a remote computer or server onto a local device.

```text
Server
   │
   │ Data
   ▼
User Device
```

### 15. Upload

**Uploading** means sending data from a local device to a remote computer or server.

```text
User Device
   │
   │ Data
   ▼
Server
```

---

# 29. URL

**URL (Uniform Resource Locator)** is the address used to identify and locate a resource on the Internet or Web.

Example:

```text
https://www.example.com:443/products/item.html?id=10#details
```

A URL can contain several components.

```text
https://www.example.com:443/products/item.html?id=10#details
│       │               │   │                │          │
│       │               │   │                │          └─ Fragment
│       │               │   │                └──────────── Query
│       │               │   └──────────────────────────── Path
│       │               └──────────────────────────────── Port
│       └──────────────────────────────────────────────── Host
└──────────────────────────────────────────────────────── Scheme
```

### Components of a URL

### 1. Scheme

Specifies the protocol used to access the resource.

Examples:

```text
http
https
ftp
```

### 2. Host / Domain

Identifies the server or host.

Example:

```text
www.example.com
```

### 3. Port

Identifies the network port used by the service.

Example:

```text
:443
```

Port numbers may be omitted when the standard port is implied.

### 4. Path

Specifies the location of a resource on the server.

Example:

```text
/products/item.html
```

### 5. Query

Contains parameters sent to the server.

Example:

```text
?id=10
```

### 6. Fragment

Identifies a specific section or location within a resource.

Example:

```text
#details
```

### URL working

```text
URL
 │
 ▼
DNS resolves domain
 │
 ▼
Server identified
 │
 ▼
Request sent
 │
 ▼
Resource returned
 │
 ▼
Browser displays resource
```

---

# 30. Search Engine

A **search engine** is an online service that helps users find information and resources on the Web by entering search queries.

Examples include:

* Google
* Bing
* DuckDuckGo
* Yahoo

### Basic working of a search engine

Search engines generally use **crawling, indexing and ranking** to provide results.

```text
             Web Pages
                 │
                 ▼
             Crawlers
                 │
                 ▼
              Index
                 │
                 ▼
          Search Query
                 │
                 ▼
        Search Algorithm
                 │
                 ▼
         Ranked Results
                 │
                 ▼
               User
```

### 1. Crawling

Search-engine crawlers automatically discover and visit webpages.

### 2. Indexing

Information collected from webpages is processed and stored in a searchable index.

### 3. Searching

When a user enters a query, the search engine examines its index for relevant information.

### 4. Ranking

The search engine orders results using various algorithms and signals to present potentially relevant results.

### Example

If the user searches:

```text
C programming tutorials
```

the search engine processes the query and returns webpages related to C programming.

---

# 31. Internet Service Provider (ISP)

An **Internet Service Provider (ISP)** is an organization that provides users or organizations with access to the Internet and related services.

Examples of ISP services include:

* Internet connectivity
* Broadband connections
* Mobile Internet
* Fiber Internet
* DNS services
* Email services in some cases

```text
                INTERNET
                    │
                    │
                   ISP
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
        Home      Office    Mobile
        User       User      User
```

### Working of an ISP

```text
User Device
     │
     ▼
Home/Office Router
     │
     ▼
ISP Network
     │
     ▼
Internet
     │
     ▼
Destination Server
```

When a user connects to the Internet, the ISP provides the network connection that allows the user's device or local network to communicate with remote networks.

### Functions of an ISP

1. Provides Internet connectivity.
2. Connects customers to wider networks.
3. Provides network addressing and routing services.
4. May provide DNS services.
5. May offer additional services such as email or hosting.

---

# 32. TCP/IP

**TCP/IP (Transmission Control Protocol/Internet Protocol)** is a suite of communication protocols used to connect devices and exchange data across interconnected networks, including the Internet.

It defines how data is **addressed, packaged, transmitted, routed and delivered**.

```text
Application
     │
     ▼
Transport
     │
     ▼
Internet
     │
     ▼
Network Access
```

## TCP/IP Model

A commonly used four-layer TCP/IP model contains:

```text
┌────────────────────────────┐
│ Application Layer          │
├────────────────────────────┤
│ Transport Layer            │
├────────────────────────────┤
│ Internet Layer             │
├────────────────────────────┤
│ Network Access Layer       │
└────────────────────────────┘
```

### 1. Application Layer

The application layer provides network services used by applications.

Examples:

* HTTP/HTTPS
* DNS
* FTP
* SMTP

```text
Web Browser
    │
    ▼
 HTTP/HTTPS
    │
    ▼
Application Layer
```

### 2. Transport Layer

The transport layer provides communication between applications running on different devices.

Important protocols include:

* **TCP**
* **UDP**

### TCP

**Transmission Control Protocol (TCP)** provides reliable, connection-oriented data delivery. It uses mechanisms such as sequencing, acknowledgements and retransmission to help deliver data correctly.

```text
Sender
  │
  │ Segment 1 ──────────►
  │ Segment 2 ──────────►
  │ Segment 3 ──────────►
  │
  │ ◄──── Acknowledgements
  ▼
Receiver
```

### UDP

**User Datagram Protocol (UDP)** provides connectionless transport without TCP's reliability mechanisms. It is useful where low overhead and speed are important.

Examples of applications that can use UDP include certain real-time communication and streaming systems.

---

### 3. Internet Layer

The Internet layer is responsible for logical addressing and routing packets between networks.

The major protocol is **IP (Internet Protocol)**.

```text
Computer A
   │
   ▼
   IP
   │
   ▼
Router
   │
   ▼
   IP
   │
   ▼
Computer B
```

IP uses addresses to identify source and destination network interfaces and enables routers to forward packets toward their destination.

---

### 4. Network Access Layer

The Network Access layer handles communication over the local network technology and the transmission of data over the physical or link-level medium.

Examples include:

* Ethernet
* Wi-Fi

```text
IP Packet
    │
    ▼
Network Access
    │
    ▼
Ethernet / Wi-Fi
    │
    ▼
Physical Network
```

---

## TCP/IP Data Flow

When a user sends data over a network, each layer performs its corresponding function.

```text
Sender
  │
  ▼
Application Data
  │
  ▼
TCP/UDP Segment
  │
  ▼
IP Packet
  │
  ▼
Network Frame
  │
  ▼
Network
  │
  ▼
Network Frame
  │
  ▼
IP Packet
  │
  ▼
TCP/UDP Segment
  │
  ▼
Application Data
  │
  ▼
Receiver
```

### TCP/IP Example

When a user opens a website:

```text
Web Browser
     │
     │ HTTP/HTTPS
     ▼
Application Layer
     │
     ▼
TCP
     │
     ▼
IP
     │
     ▼
Wi-Fi / Ethernet
     │
     ▼
Internet
     │
     ▼
Web Server
```

Thus, TCP/IP provides the fundamental communication framework that allows different types of computers and networks to communicate with each other.

# UNIT 2 — OVERVIEW OF C LANGUAGE — CO2

PART 1: C INTRODUCTION & FUNDAMENTALS

## 1. Overview of C Language

C is a general-purpose, procedural programming language developed for system programming and application development. It provides low-level memory manipulation through pointers while also supporting structured, high-level programming constructs.

C is widely used for operating systems, embedded systems, compilers, utilities and performance-sensitive applications.

```text
C LANGUAGE
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
   Structured       Procedural        Portable
   Programming     Programming       Language
        │               │                │
        └───────────────┼────────────────┘
                        ▼
               System & Application
                  Development
```

A C program is written as source code, translated by a compiler and then executed by the computer.

```text
C Source Program
       │
       ▼
    Compiler
       │
       ▼
Object Code
       │
       ▼
     Linker
       │
       ▼
Executable Program
       │
       ▼
     Output
```

---

## 2. History of C Language

C was developed by **Dennis Ritchie** at **Bell Laboratories** in the early 1970s.

Its development was influenced by earlier languages such as BCPL and B.

```text
BCPL
  │
  ▼
 B Language
  │
  ▼
 C Language
  │
  ▼
Unix & System Software
```

C was initially developed to implement the Unix operating system and later became widely used for many other types of software.

**Important developments**

- BCPL influenced the development of B.
- B was developed by Ken Thompson.
- Dennis Ritchie developed C at Bell Labs.
- C became closely associated with Unix.
- The language was standardized to improve portability and consistency.

The first major standard was ANSI C, commonly associated with the 1989/1990 standardization effort. Later standards included C99, C11, C17 and C23.

---

## 3. Features of C Language

**1. Simple**

C has a relatively small set of core language features and keywords.

**2. Structured**

Programs can be divided into functions and logical blocks.

```text
Program
   │
   ├── Function 1
   ├── Function 2
   ├── Function 3
   └── Function 4
```

**3. Portable**

C programs can often be compiled on different platforms with appropriate modifications or configuration.

**4. Fast**

C is compiled into efficient machine code and provides relatively direct access to hardware and memory.

**5. Rich Operators**

C provides arithmetic, relational, logical, bitwise, assignment and other operators.

**6. Pointers**

C supports pointers, allowing programs to work directly with memory addresses.

**7. Dynamic Memory Allocation**

Memory can be allocated and released during program execution using functions such as malloc(), calloc() and free().

**8. Extensible**

Program functionality can be expanded through functions, libraries and user-defined components.

**9. Middle-Level Characteristics**

C combines high-level programming constructs with low-level capabilities such as pointer manipulation and direct memory access.

---

## 4. Structure of C Programs

A C program generally contains several logical sections.

```text
┌──────────────────────────────┐
│ Documentation / Comments     │
├──────────────────────────────┤
│ Preprocessor Directives      │
├──────────────────────────────┤
│ Global Declarations          │
├──────────────────────────────┤
│ main() Function              │
│   ├── Local Declarations     │
│   ├── Statements             │
│   └── Return                 │
├──────────────────────────────┤
│ User-Defined Functions       │
└──────────────────────────────┘
```

**Example**

```c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main()
{
    int result;

    result = add(10, 20);

    printf("%d", result);

    return 0;
}
```

**Important components**

Preprocessor directive:

```c
#include <stdio.h>
```

Includes declarations needed from the standard input/output library.

Function:

```c
int add(int a, int b)
```

Defines a user-defined function.

main():

```c
int main()
```

The program execution begins from main().

Statement:

```c
result = add(10, 20);
```

Performs an operation.

Return statement:

```c
return 0;
```

Terminates main() and returns a status value to the operating environment.

---

## 5. Compilation of C Programs

Compilation is the process of translating C source code into a form that can eventually be executed by the computer.

```text
Source Code
   │
   ▼
Preprocessor
   │
   ▼
Compiler
   │
   ▼
Assembly/Object Code
   │
   ▼
Linker
   │
   ▼
Executable File
```

**Major stages**

**1. Preprocessing**

Handles directives such as:

```c
#include
#define
```

**2. Compilation**

The compiler analyzes the C source code and translates it into lower-level code.

**3. Assembly**

Assembly code is converted into machine/object code by an assembler.

**4. Linking**

The linker combines object code with required library code and produces an executable program.

```text
program.c
   │
   ▼
Preprocessor
   │
   ▼
program.i
   │
   ▼
Compiler
   │
   ▼
program.s
   │
   ▼
Assembler
   │
   ▼
program.o
   │
   ├──────────────┐
   │              │
   ▼              ▼
Object Code    Libraries
       \         /
        \       /
         ▼     ▼
          Linker
             │
             ▼
       Executable
```

---

## 6. Execution of C Programs

After compilation and linking, the executable program is loaded into memory and executed by the operating system.

```text
C Source
   ↓
Preprocessing
   ↓
Compilation
   ↓
Assembly
   ↓
Linking
   ↓
Executable
   ↓
Load into Memory
   ↓
CPU Executes
   ↓
Output
```

For example:

```c
#include <stdio.h>

int main()
{
    printf("Hello");
    return 0;
}
```

Execution produces:

```text
Hello
```

The operating system loads the executable, the CPU executes its instructions, and output is produced through the appropriate device or stream.

---

## 7. Types of Errors

Errors are problems that prevent a program from being compiled correctly, executed correctly or producing the intended result.

**Main types**

```text
Errors
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
   Syntax        Runtime       Logical
    Error         Error         Error
```

**1. Syntax Error**

Occurs when the program violates the syntax rules of C.

Example:

```c
printf("Hello")
```

The semicolon is missing.

Correct:

```c
printf("Hello");
```

**2. Runtime Error**

Occurs while the program is running.

Example:

```c
int a = 10;
int b = 0;

printf("%d", a / b);
```

Division by zero causes a runtime problem.

**3. Logical Error**

The program compiles and executes but produces an incorrect result because the logic is wrong.

Example:

```c
int a = 10;
int b = 20;

printf("%d", a - b);
```

If the intended operation was addition, the program executes successfully but gives the wrong result.

**4. Linker Error**

Occurs when the linker cannot resolve required functions or symbols.

For example, a program may refer to a function whose required definition or library is missing.

```text
Source Code
    ↓
Compiler
    ↓
Object Code
    ↓
Linker
    ↓
ERROR
```

---

## 8. Debugging Techniques

Debugging is the process of identifying, analyzing and correcting errors in a program.

```text
Program
   ↓
Run
   ↓
Error / Unexpected Output
   ↓
Find Cause
   ↓
Fix Code
   ↓
Test Again
   ↓
Correct Program
```

**Common debugging techniques**

**1. Compiler messages**

Read compiler warnings and errors carefully.

**2. Trace execution**

Follow program statements step by step.

**3. Print debugging**

Display intermediate values using printf().

```c
printf("Value of x = %d\n", x);
```

**4. Use a debugger**

Debuggers allow programmers to set breakpoints, inspect variables and execute programs step by step.

**5. Check boundary conditions**

Test values such as:

- Zero
- Negative values
- Maximum values
- Minimum values
- Empty input

**6. Divide the problem**

Test individual functions or sections separately.

---

## 9. C Language Fundamentals

C programs are built from several fundamental elements.

```text
C Program
   │
   ├── Character Set
   ├── Tokens
   ├── Keywords
   ├── Identifiers
   ├── Constants
   ├── Variables
   ├── Data Types
   ├── Operators
   └── Expressions
```

**Tokens**

A token is the smallest meaningful unit recognized by the C compiler.

Examples:

```c
int age = 21;
```

Tokens include:

```text
int     → keyword
age     → identifier
=       → operator
21      → constant
;       → punctuator
```

---

## 10. C Character Set

The C character set consists of characters that can be used to construct C programs.

**Main categories**

```text
C Character Set
      │
 ┌────┼────┬──────────┐
 ▼    ▼    ▼          ▼
Letters Digits Special Whitespace
         Characters
```

**Letters**

```text
A-Z
a-z
```

**Digits**

```text
0-9
```

**Special characters**

Examples:

```text
+ - * / % = < > ! & | ^ ~
( ) { } [ ] ; , . : ? #
' " _
```

**Whitespace characters**

Examples:

- Space
- Tab
- Newline

Whitespace generally separates tokens and improves readability.

---

## 11. Identifiers

An identifier is a name given to program elements such as variables, functions, arrays and structures.

Examples:

```c
int age;
float salary;
int calculate();
```

Here:

```text
age       → identifier
salary    → identifier
calculate → identifier
```

**Rules for identifiers**

1. Can contain letters, digits and underscore.
2. Cannot begin with a digit.
3. Cannot contain spaces.
4. Cannot be a C keyword.
5. C identifiers are case-sensitive.

**Valid:**

```text
age
student1
_total
marks2026
```

**Invalid:**

```text
1student
student name
float
total-cost
```

```text
Valid Identifier
       │
       ├── Letter / _
       │
       └── Followed by letters,
           digits or _
```

---

## 12. Keywords

Keywords are reserved words that have predefined meanings in the C language. They cannot normally be used as identifiers.

Examples:

```text
int
char
float
double
if
else
for
while
return
switch
case
break
continue
struct
union
typedef
const
void
```

Example:

```c
int age;
```

Here int is a keyword and age is an identifier.

```text
Keyword
   ↓
Reserved by C
   ↓
Cannot be used as normal variable/function name
```

---

## 13. Modifiers

Type modifiers are keywords used to modify the range or representation of certain integer and character data types.

Common modifiers include:

```text
signed
unsigned
short
long
```

Examples:

```c
short int a;
long int b;
unsigned int c;
signed int d;
```

**Concept**

```text
Data Type
           │
     ┌─────┴─────┐
     ▼           ▼
   short        long
     │           │
     ▼           ▼
   Smaller      Larger
   range        range
```

unsigned allows an integer type to represent only non-negative values, thereby increasing its positive range for the same storage width.

---

## 14. Data Types

A data type specifies the type of value a variable can store and influences its representation, size and operations.

```text
Data Types
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
    Basic          Derived       User-Defined
       │              │              │
   int, char       array          struct
   float, double   pointer        union
                  function        enum
```

**Basic data types**

```text
char
int
float
double
void
```

Example:

```c
int age = 21;
float marks = 85.5f;
char grade = 'A';
double salary = 50000.50;
```

**Derived types**

Examples:

- Arrays
- Pointers
- Functions

**User-defined types**

Examples:

- struct
- union
- enum
- typedef names

---

## 15. Data Type Sizes

The memory occupied by a data type depends on the C implementation and target architecture. Therefore, sizes should not be assumed universally.

The sizeof() operator can be used to determine the size in bytes on the current implementation.

```c
printf("%zu", sizeof(int));
```

Typical modern systems often have:

| Data Type | Common Size |
| --------- | ----------- |
| char      | 1 byte      |
| short     | 2 bytes     |
| int       | 4 bytes     |
| long      | 4 or 8 bytes|
| long long | 8 bytes     |
| float     | 4 bytes     |
| double    | 8 bytes     |

These are common values, not universal requirements for every C implementation.

```text
Data Type
    │
    ▼
Memory Representation
    │
    ▼
sizeof(type)
    │
    ▼
Number of Bytes
```

---

## 16. Variables

A variable is a named memory location used to store a value that can generally change during program execution.

```c
int age = 21;
```

Conceptually:

```text
Variable
           │
           ▼
      ┌──────────┐
age → │    21    │
      └──────────┘
       Memory
```

The value can change:

```c
age = 22;
```

Now:

```text
┌──────────┐
age → │    22    │
      └──────────┘
```

A variable has:

- Name
- Data type
- Value
- Memory location
- Scope
- Storage duration characteristics

---

## 17. Declaration of Variables

A declaration tells the compiler about a variable's name and type.

**Syntax:**

```c
data_type variable_name;
```

Example:

```c
int age;
float marks;
char grade;
```

Multiple variables can be declared:

```c
int a, b, c;
```

```text
Declaration
     │
     ▼
┌─────────────┐
│ int age;    │
└─────────────┘
     │
     ▼
Compiler knows:
age is an integer variable
```

---

## 18. Initialization of Variables

Initialization means assigning an initial value to a variable when it is defined.

```c
int age = 21;
float marks = 85.5f;
char grade = 'A';
```

Declaration:

```c
int age;
```

Initialization:

```c
int age = 21;
```

**Assignment after declaration**

```c
int age;
age = 21;
```

This is assignment rather than initialization because the variable was already declared.

---

## 19. Scope of Variables

Scope refers to the region of a program where an identifier can be accessed.

Common scopes include:

```text
Scope
 │
 ├── Block Scope
 ├── Function Scope
 ├── Function Prototype Scope
 └── File Scope
```

**Local variable**

A variable declared inside a block generally has block scope.

```c
int main()
{
    int x = 10;

    printf("%d", x);

    return 0;
}
```

x is accessible within its block.

**Global variable**

A variable declared outside all functions generally has file scope.

```c
int x = 10;

int main()
{
    printf("%d", x);
    return 0;
}
```

```text
Global Variable
      │
      ▼
┌──────────────────────┐
│ Program File         │
│                      │
│ int x = 10;          │
│                      │
│ main()               │
│ function1()          │
│ function2()          │
└──────────────────────┘
```

The exact accessibility can be affected by declarations and linkage, but the basic distinction is that local variables are limited to their relevant blocks while file-scope declarations are outside functions.

---

## 20. Constants

A constant is a value that does not change during program execution.

Examples:

```c
10
3.14
'A'
"Hello"
```

A named constant can also be created using const:

```c
const int MAX = 100;
```

Attempting to modify MAX through its ordinary identifier is not permitted.

```text
Constant
   │
   ▼
Fixed Value
   │
   ├── 10
   ├── 3.14
   ├── 'A'
   └── "Hello"
```

---

## 21. Types of Constants

C constants can be classified into several categories.

```text
Constants
   │
   ├── Integer
   ├── Floating-point
   ├── Character
   ├── String
   └── Enumeration Constants
```

**1. Integer Constants**

Examples:

```c
10
25
-50
0
```

C also supports different integer literal forms, such as:

```c
25      → decimal
031     → octal
0x1F    → hexadecimal
```

**2. Floating-Point Constants**

Examples:

```c
3.14
-2.5
6.02e23
```

**3. Character Constants**

A character constant is written inside single quotes.

```c
'A'
'7'
'+'
```

**4. String Literals**

A string literal is written inside double quotes.

```c
"Hello"
"Computer"
```

**5. Enumeration Constants**

Created using enum.

```c
enum day
{
    MON,
    TUE,
    WED
};
```

Here MON, TUE and WED are enumeration constants.

---

## 22. typedef

typedef creates an alternative name, or alias, for an existing type.

**Syntax:**

```c
typedef existing_type new_name;
```

Example:

```c
typedef unsigned int uint;

uint age = 21;
```

Here uint is an alias for unsigned int.

**With structures**

```c
typedef struct
{
    int id;
    char grade;
} Student;
```

Now:

```c
Student s1;
```

instead of:

```c
struct Student s1;
```

**Concept**

```text
Existing Type
     │
     ▼
  typedef
     │
     ▼
New Type Alias
     │
     ▼
Easier Declaration
```

typedef does not create a completely new underlying data type. It creates another name for an existing type.

---

## 23. Type Conversion

Type conversion is the process of converting a value from one data type to another.

There are two major forms:

```text
Type Conversion
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      Implicit             Explicit
      Conversion          Conversion
                              │
                              ▼
                           Casting
```

**Implicit Type Conversion**

The compiler automatically converts a value when required by the context.

Example:

```c
int a = 10;
float b;

b = a;
```

The integer value is converted to a floating-point value.

```text
int 10
  │
  ▼
float 10.0
```

Example involving arithmetic:

```c
int a = 10;
float b = 2.5;

float result = a + b;
```

The integer value is converted as necessary for the arithmetic operation.

---

**Explicit Type Conversion**

The programmer explicitly specifies the desired type using a cast.

**Syntax:**

```c
(type) expression
```

Example:

```c
int a = 5;
int b = 2;

float result = (float)a / b;
```

Without the cast:

```c
a / b
```

performs integer division.

With:

```c
(float)a / b
```

the calculation produces a floating-point result.

```text
a = 5
        │
        ▼
(float)a
        │
        ▼
      5.0
        │
        ▼
    5.0 / 2
        │
        ▼
      2.5
```

---

# PART 2: OPERATORS IN C

## 24. Operators in C

An operator is a symbol that tells the compiler to perform an operation on one or more operands.

Example:

```c
c = a + b;
```

Here:

```text
a, b → operands
+    → operator
c    → result variable
```

```text
+
        /   \
       a     b
```

---

## 25. Types of Operators

C provides several types of operators.

```text
Operators
                        │
     ┌──────────┬───────┼────────┬──────────┐
     ▼          ▼       ▼        ▼          ▼
 Arithmetic  Relational Logical Assignment Bitwise
     │          │       │        │          │
     └──────────┴───────┴────────┴──────────┘
```

Other important operators include:

- Unary operators
- Increment/decrement
- Conditional operator
- sizeof
- Comma operator

---

## 26. Unary Operators

A unary operator operates on one operand.

Examples:

```c
-x
++x
--x
!x
~x
```

```text
Unary Operator
      │
      ▼
    Operand
```

Example:

```c
int x = 5;
int y = -x;
```

Result:

```text
y = -5
```

---

## 27. Binary Operators

A binary operator operates on two operands.

Examples:

```c
a + b
a - b
a * b
a > b
a && b
```

```text
Binary Operator
          /       \
     Operand    Operand
```

Example:

```c
int c = a + b;
```

`+` operates on `a` and `b`.

---

## 28. Assignment Operator

The basic assignment operator is:

```c
=
```

It assigns the value of the expression on the right to the object on the left.

Example:

```c
int x;
x = 10;
```

```text
10
        │
        ▼
      x = 10
        │
        ▼
   x contains 10
```

**Compound assignment operators**

```c
+=
-=
*=
/=
%=
&=
|=
^=
<<=
>>=
```

Example:

```c
x += 5;
```

is equivalent in effect to:

```c
x = x + 5;
```

---

## 29. Arithmetic Operators

Arithmetic operators perform mathematical operations.

| Operator | Meaning      | Example |
| -------- | ------------ | ------- |
| +        | Addition     | a + b   |
| -        | Subtraction  | a - b   |
| *        | Multiplication| a * b  |
| /        | Division     | a / b   |
| %        | Remainder    | a % b   |

Example:

```c
int a = 10;
int b = 3;

printf("%d", a + b);  // 13
printf("%d", a - b);  // 7
printf("%d", a * b);  // 30
printf("%d", a / b);  // 3
printf("%d", a % b);  // 1
```

For integer operands, `/` performs integer division.

---

## 30. Relational Operators

Relational operators compare two values.

| Operator | Meaning                  |
| -------- | ------------------------ |
| ==       | Equal to                 |
| !=       | Not equal to             |
| >        | Greater than             |
| <        | Less than                |
| >=       | Greater than or equal to |
| <=       | Less than or equal to    |

Example:

```c
int a = 10;
int b = 20;

printf("%d", a < b);
```

The comparison is true, so the result is 1 in a typical C expression context.

```text
10 < 20
          │
          ▼
        True
          │
          ▼
           1
```

`==` is the equality comparison operator, whereas `=` performs assignment.

---

## 31. Logical Operators

Logical operators combine or negate conditions.

| Operator | Meaning     |
| -------- | ----------- |
| &&       | Logical AND |
| \|\|     | Logical OR  |
| !        | Logical NOT |

**AND**

```c
(a > 5) && (b < 20)
```

Both conditions must be true for the result to be true.

| A | B | A && B |
| - | - | ------ |
| 0 | 0 | 0      |
| 0 | 1 | 0      |
| 1 | 0 | 0      |
| 1 | 1 | 1      |

**OR**

```c
(a > 5) || (b < 20)
```

At least one condition must be true.

| A | B | A \|\| B |
| - | - | -------- |
| 0 | 0 | 0        |
| 0 | 1 | 1        |
| 1 | 0 | 1        |
| 1 | 1 | 1        |

**NOT**

```c
!A
```

Reverses the logical value.

| A | !A |
| - | -- |
| 0 | 1  |
| 1 | 0  |

---

## 32. Increment Operator

The increment operator:

```c
++
```

increases its operand by 1.

Two forms exist:

```c
++x;   // Pre-increment
x++;   // Post-increment
```

**Pre-increment**

The value is incremented before its value is used in the surrounding expression.

```c
int x = 5;
int y = ++x;
```

Result:

```text
x = 6
y = 6
```

**Post-increment**

The original value is used in the surrounding expression before the increment takes effect.

```c
int x = 5;
int y = x++;
```

Result:

```text
y = 5
x = 6
```

```text
Pre:
x = 5 → ++x → 6 → use 6

Post:
x = 5 → use 5 → x becomes 6
```

---

## 33. Decrement Operator

The decrement operator:

```c
--
```

decreases its operand by 1.

**Pre-decrement**

```c
int x = 5;
int y = --x;
```

Result:

```text
x = 4
y = 4
```

**Post-decrement**

```c
int x = 5;
int y = x--;
```

Result:

```text
y = 5
x = 4
```

```text
Pre:
x = 5 → --x → 4 → use 4

Post:
x = 5 → use 5 → x becomes 4
```

---

## 34. Conditional Operator

The conditional operator `?:` is a ternary operator that selects one of two expressions based on a condition.

**Syntax:**

```c
condition ? expression1 : expression2;
```

Example:

```c
int max;

max = (a > b) ? a : b;
```

```text
a > b ?
             /     \
          Yes       No
           │         │
           ▼         ▼
           a         b
```

If `a > b` is true, `a` is selected. Otherwise, `b` is selected.

It is commonly used as a compact alternative to a simple if-else statement.

---

## 35. sizeof() Operator

sizeof determines the size in bytes of a type or expression.

Example:

```c
int x;

printf("%zu", sizeof(x));
```

It can also be used with a type:

```c
sizeof(int)
```

```text
sizeof(int)
           │
           ▼
 Number of bytes used
 by int on this system
```

sizeof is particularly useful because data type sizes can vary between C implementations.

The result type of sizeof is `size_t`.

---

## 36. Comma Operator

The comma operator `,` evaluates its left operand and then its right operand. The value of the complete comma expression is the value of the rightmost expression.

Example:

```c
int x;

x = (10, 20, 30);
```

The expressions are evaluated from left to right, and the resulting value of the complete comma expression is:

```text
30
```

```text
10
 ↓
20
 ↓
30
 ↓
Result = 30
```

Another example:

```c
int a, b;

a = 5, b = 10;
```

Both assignments are evaluated.

The comma used to separate function arguments or declarations is not necessarily the comma operator. The operator specifically refers to a comma expression.

---

## 37. Bitwise Operators

Bitwise operators operate on individual bits of integer operands.

**Main operators:**

| Operator | Meaning     |
| -------- | ----------- |
| &        | Bitwise AND |
| \|       | Bitwise OR  |
| ^        | Bitwise XOR |
| ~        | Bitwise NOT |
| <<       | Left shift  |
| >>       | Right shift |

**Example**

Consider:

```text
A = 5  → 0101
B = 3  → 0011
```

**Bitwise AND**

```text
0101
& 0011
------
  0001
```

Result:

```text
1
```

**Bitwise OR**

```text
0101
| 0011
------
  0111
```

Result:

```text
7
```

**Bitwise XOR**

```text
0101
^ 0011
------
  0110
```

Result:

```text
6
```

**Bitwise NOT**

`~` reverses each bit.

```text
0101
    ↓
  1010
```

The numerical result depends on the operand type and representation.

**Left Shift**

```c
5 << 1
```

Conceptually:

```text
0101 << 1
 ↓
1010
```

For suitable unsigned values, shifting left by one position corresponds to multiplication by 2 when no significant bits are lost.

**Right Shift**

```c
8 >> 1
```

Conceptually:

```text
1000 >> 1
 ↓
0100
```

For unsigned values, this corresponds to division by 2 with truncation.

---

# PART 3: EXPRESSIONS & EVALUATION

## 38. Expressions

An expression is a combination of operands, operators and function calls that can be evaluated to produce a value or otherwise perform an operation.

Examples:

```c
a + b
x * y
a > b
x = 10
```

```text
Expression
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
     Operand   Operator   Operand
        │         │         │
        a         +         b
                  │
                  ▼
                a + b
```

Example:

```c
int result = a + b * 2;
```

The expression:

```c
a + b * 2
```

is evaluated according to C's operator precedence and associativity rules.

---

## 39. Types of Expressions

C expressions can be classified according to the operations they perform.

**1. Arithmetic Expression**

Contains arithmetic operators.

```c
a + b * c
```

**2. Relational Expression**

Performs comparison.

```c
a > b
```

**3. Logical Expression**

Combines logical conditions.

```c
a > 10 && b < 20
```

**4. Assignment Expression**

Assigns a value.

```c
x = 10
```

**5. Conditional Expression**

Uses the `?:` operator.

```c
a > b ? a : b
```

**6. Bitwise Expression**

Uses bitwise operators.

```c
a & b
```

**7. Increment/Decrement Expression**

Uses `++` or `--`.

```c
++a
b--
```

```text
Expressions
                       │
     ┌─────────┬───────┼────────┬─────────┐
     ▼         ▼       ▼        ▼         ▼
 Arithmetic Relational Logical Assignment Conditional
     │         │       │        │         │
     └─────────┴───────┴────────┴─────────┘
                       │
                  Other Types
                 Bitwise, etc.
```

---

## 40. Operator Precedence

Operator precedence determines which operator is considered first when an expression contains multiple operators.

Example:

```c
int result = 10 + 5 * 2;
```

Multiplication has higher precedence than addition.

Therefore:

```text
10 + 5 * 2
    │
    ▼
10 + 10
    │
    ▼
20
```

not:

```text
(10 + 5) * 2
= 30
```

**Important precedence order**

A simplified high-to-low order is:

```text
Highest
   │
   ▼
() [] -> .
   │
   ▼
Unary: ++ -- ! ~ + - sizeof
   │
   ▼
* / %
   │
   ▼
+ -
   │
   ▼
<< >>
   │
   ▼
< <= > >=
   │
   ▼
== !=
   │
   ▼
&
   │
   ▼
^
   │
   ▼
|
   │
   ▼
&&
   │
   ▼
||
   │
   ▼
?:
   │
   ▼
Assignment
   │
   ▼
,
   │
   ▼
Lowest
```

Parentheses can be used to explicitly control grouping.

Example:

```c
int x = (10 + 5) * 2;
```

Now:

```text
(10 + 5) → 15
15 * 2   → 30
```

---

## 41. Order of Evaluation

Order of evaluation refers to when different parts of an expression are evaluated during execution. It is important to distinguish this from operator precedence.

Precedence determines how an expression is grouped, but it does not necessarily specify the exact runtime order in which independent operands are evaluated.

Example:

```c
a + b * c
```

Precedence determines:

```c
a + (b * c)
```

But this does not mean every subexpression in every C expression has a universally fixed left-to-right execution order.

**Associativity**

When operators have the same precedence, associativity helps determine grouping.

For example, subtraction is left-associative:

```c
20 - 5 - 3
```

is grouped as:

```c
(20 - 5) - 3
```

Result:

```text
15 - 3 = 12
```

Assignment operators are right-associative:

```c
a = b = c = 10;
```

is grouped as:

```c
a = (b = (c = 10));
```

**Important distinction**

```text
Operator Precedence
        │
        ▼
Determines grouping

Associativity
        │
        ▼
Determines grouping when
operators have equal precedence

Evaluation Order
        │
        ▼
Determines when operands/
subexpressions are actually evaluated
```

**Example of a dangerous expression**

```c
int i = 5;

printf("%d %d", i++, i++);
```

The order in which the function arguments are evaluated is not something a programmer should assume to be left-to-right. Expressions that modify the same scalar object multiple times without an appropriate sequencing relationship can lead to undefined behavior in C.

The safe approach is to separate the operations:

```c
int i = 5;

int a = i++;
int b = i++;

printf("%d %d", a, b);
```

This makes the sequence explicit and avoids relying on unspecified evaluation order.

# UNIT 3: DECISION CONTROL STATEMENTS — CO3

PART 1: DECISION & JUMP CONTROL STATEMENTS

## 1. Decision Control Statements

Decision control statements allow a C program to make decisions based on conditions. The program evaluates a condition and then executes one block of statements or another depending on the result.

```text
Condition
                        │
                  ┌─────┴─────┐
                  │           │
                True        False
                  │           │
                  ▼           ▼
             Statement 1   Statement 2
```

The major decision-making statements in C are:

```text
Decision Control
       │
       ├── if
       ├── if-else
       ├── nested if-else
       └── switch
```

Jump statements are used to alter the normal flow of execution.

```text
Jump Statements
       │
       ├── break
       ├── continue
       └── goto
```

---

## 2. if Statement

The if statement executes a block of code only when a specified condition is true.

**Syntax**

```c
if (condition)
{
    statements;
}
```

**Flow**

```text
Start
                │
                ▼
          Evaluate Condition
                │
          ┌─────┴─────┐
        True         False
          │             │
          ▼             │
   Execute if-block     │
          │             │
          └──────┬──────┘
                 ▼
                End
```

**Example**

```c
int age = 20;

if (age >= 18)
{
    printf("Eligible");
}
```

Since age >= 18 is true, the statement inside the if block executes.

**Important point**

If the condition is false, the if block is simply skipped.

```text
Condition = True
      ↓
Execute block

Condition = False
      ↓
Skip block
```

---

## 3. if-else Statement

The if-else statement provides two alternatives. One block executes when the condition is true and another executes when it is false.

**Syntax**

```c
if (condition)
{
    statements1;
}
else
{
    statements2;
}
```

**Flowchart**

```text
Start
                   │
                   ▼
             Condition?
              /       \
           True       False
             │           │
             ▼           ▼
        if-block      else-block
             │           │
             └─────┬─────┘
                   ▼
                  End
```

**Example**

```c
int number = 10;

if (number % 2 == 0)
{
    printf("Even");
}
else
{
    printf("Odd");
}
```

Output:

```text
Even
```

**Working**

```text
number = 10
     │
     ▼
10 % 2 == 0?
     │
    True
     │
     ▼
  "Even"
```

---

## 4. Nested if-else Statement

A nested if-else means placing one if or if-else statement inside another if or else block.

It is useful when a decision depends on another decision.

**Structure**

```c
if (condition1)
{
    if (condition2)
    {
        statements;
    }
    else
    {
        statements;
    }
}
else
{
    statements;
}
```

**Flowchart**

```text
Start
                   │
                   ▼
              Condition 1?
              /          \
           True          False
             │              │
             ▼              ▼
       Condition 2?      Else Block
        /       \
     True       False
       │           │
       ▼           ▼
   Block 1      Block 2
       │           │
       └─────┬─────┘
             ▼
            End
```

**Example**

```c
int marks = 85;

if (marks >= 40)
{
    if (marks >= 75)
    {
        printf("Distinction");
    }
    else
    {
        printf("Pass");
    }
}
else
{
    printf("Fail");
}
```

Output:

```text
Distinction
```

The first condition checks whether the student passed. If true, the second condition determines whether the marks qualify for distinction.

---

## 5. switch Statement

The switch statement is used for multi-way selection. It compares an expression with several constant case values and executes the matching case.

**Syntax**

```c
switch (expression)
{
    case constant1:
        statements;
        break;

    case constant2:
        statements;
        break;

    default:
        statements;
}
```

**Flowchart**

```text
Start
                    │
                    ▼
               Evaluate
               expression
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
       Case 1     Case 2    Case 3
          │         │         │
          ▼         ▼         ▼
       Block 1   Block 2   Block 3
          │         │         │
          └─────────┼─────────┘
                    │
                    ▼
                   End
```

**Example**

```c
int choice = 2;

switch (choice)
{
    case 1:
        printf("Addition");
        break;

    case 2:
        printf("Subtraction");
        break;

    case 3:
        printf("Multiplication");
        break;

    default:
        printf("Invalid choice");
}
```

Output:

```text
Subtraction
```

**break in switch**

break terminates the switch statement.

Without break, execution can continue into the following case statements. This is called fall-through.

```text
case 1
  │
  ▼
Statements
  │
break
  │
  ▼
Exit switch
```

**default**

The default block executes when none of the case values matches the expression.

---

## 6. break Statement

The break statement immediately terminates the nearest enclosing loop or switch statement.

**Flow in loop**

```text
Loop
               │
               ▼
           Condition
               │
          ┌────┴────┐
        False      True
          │           │
          ▼           ▼
         Exit      Statements
                      │
                      ▼
                 break?
                    │
                   Yes
                    │
                    ▼
                  Exit
```

**Example**

```c
int i;

for (i = 1; i <= 10; i++)
{
    if (i == 5)
        break;

    printf("%d ", i);
}
```

Output:

```text
1 2 3 4
```

When i becomes 5, break immediately terminates the loop.

**In switch**

```c
switch (choice)
{
    case 1:
        printf("One");
        break;

    case 2:
        printf("Two");
        break;
}
```

Here break prevents execution from continuing into the next case.

---

## 7. continue Statement

The continue statement skips the remaining statements of the current loop iteration and starts the next iteration.

It can be used only within loops.

**Flow**

```text
Loop
               │
               ▼
          Execute Body
               │
               ▼
           continue?
            /      \
          Yes       No
           │         │
           │         ▼
           │     Remaining
           │     statements
           │         │
           └────┬────┘
                ▼
          Next iteration
```

**Example**

```c
int i;

for (i = 1; i <= 5; i++)
{
    if (i == 3)
        continue;

    printf("%d ", i);
}
```

Output:

```text
1 2 4 5
```

When i == 3, continue skips printf() for that iteration.

**Difference between break and continue**

```text
break
  ↓
Terminates the entire loop

continue
  ↓
Skips current iteration
and continues with next iteration
```

---

## 8. goto Statement

The goto statement transfers program control directly to a labeled statement within the same function.

**Syntax**

```c
goto label;

...

label:
    statement;
```

**Flow**

```text
Statement A
     │
     ▼
   goto
     │
     │
     └────────────────┐
                      ▼
                   label:
                      │
                      ▼
                 Statement B
```

**Example**

```c
#include <stdio.h>

int main()
{
    int n = 1;

    if (n == 1)
        goto message;

    printf("This is skipped");

message:
    printf("Hello");

    return 0;
}
```

Output:

```text
Hello
```

The goto statement transfers control directly to message:.

Excessive use of goto can make program flow difficult to understand, so structured control statements are generally preferred.

---

# PART 2: LOOPS

## 9. Loops

A loop repeatedly executes a block of statements while a specified condition permits it.

Loops are useful when the same operation must be performed multiple times.

```text
Loops
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
           for         while      do-while
```

**General working**

```text
Start
                │
                ▼
             Condition
                │
          ┌─────┴─────┐
        True         False
          │             │
          ▼             ▼
       Execute         Exit
        body
          │
          └───────► Condition
```

**Types based on condition checking**

```text
Pre-test loops
    │
    ├── for
    └── while

Post-test loop
    │
    └── do-while
```

A pre-test loop checks the condition before executing its body. A post-test loop executes its body first and checks the condition afterward.

---

## 10. for Loop

The for loop is commonly used when the number of iterations or the loop-control pattern is known.

**Syntax**

```c
for (initialization; condition; update)
{
    statements;
}
```

**Flowchart**

```text
Start
                   │
                   ▼
              Initialization
                   │
                   ▼
               Condition?
                /      \
             True      False
               │          │
               ▼          ▼
          Loop Body      Exit
               │
               ▼
             Update
               │
               └──────────►
                         Condition
```

**Example**

```c
int i;

for (i = 1; i <= 5; i++)
{
    printf("%d ", i);
}
```

Output:

```text
1 2 3 4 5
```

**Working**

```text
i = 1
 │
 ▼
i <= 5? ──Yes──> Print i
 │                 │
 │                 ▼
 │               i++
 │                 │
 └─────────────────┘

i <= 5? ──No──> Exit
```

**Components**

```text
for (initialization; condition; update)
     │                  │         │
     │                  │         └── Changes loop variable
     │                  └──────────── Controls continuation
     └────────────────────────────── Sets initial value
```

---

## 11. while Loop

The while loop repeatedly executes a block as long as its condition remains true.

**Syntax**

```c
while (condition)
{
    statements;
}
```

**Flowchart**

```text
Start
                   │
                   ▼
              Condition?
              /        \
           True        False
             │            │
             ▼            ▼
         Loop Body       Exit
             │
             │
             └────────────►
                     Condition
```

**Example**

```c
int i = 1;

while (i <= 5)
{
    printf("%d ", i);
    i++;
}
```

Output:

```text
1 2 3 4 5
```

The condition is checked before each iteration.

If the condition is false initially, the body does not execute even once.

```text
Condition false initially
          │
          ▼
     Loop body skipped
```

---

## 12. do-while Loop

The do-while loop executes its body first and checks the condition afterward.

**Syntax**

```c
do
{
    statements;
}
while (condition);
```

**Flowchart**

```text
Start
                   │
                   ▼
               Loop Body
                   │
                   ▼
              Condition?
               /       \
            True       False
              │           │
              └─────┐     ▼
                    │    Exit
                    │
                    ▼
                Loop Body
```

**Example**

```c
int i = 1;

do
{
    printf("%d ", i);
    i++;
}
while (i <= 5);
```

Output:

```text
1 2 3 4 5
```

**Important difference**

A do-while loop executes at least once.

```c
int i = 10;

do
{
    printf("%d", i);
}
while (i < 5);
```

Output:

```text
10
```

Although i < 5 is false, the body has already executed once.

---

## Comparison of Loops

| Feature | for | while | do-while |
| ------- | --- | ----- | -------- |
| Condition checked | Before body | Before body | After body |
| Minimum executions | 0 | 0 | 1 |
| Initialization commonly included | Yes | Usually separate | Usually separate |
| Update commonly included | Yes | Usually inside body | Usually inside body |
| Best suited for | Count-controlled loops | Condition-controlled loops | Body must execute once |

---

# PART 3: ARRAYS

## 13. Arrays

An array is a collection of elements of the same data type stored in contiguous memory locations and accessed using a common name with an index.

Example:

```c
int marks[5];
```

Conceptually:

```text
Array: marks

Index     0     1     2     3     4
        ┌─────┬─────┬─────┬─────┬─────┐
        │ 78  │ 85  │ 91  │ 67  │ 88  │
        └─────┴─────┴─────┴─────┴─────┘
          ↑
        First
       element
```

C array indexing begins at 0.

Therefore, for an array of 5 elements:

```text
First index = 0
Last index  = 4
```

**Memory concept**

```text
marks[0] → Address A
marks[1] → Address A + sizeof(int)
marks[2] → Address A + 2*sizeof(int)
...
```

The elements are stored contiguously.

---

## 14. Defining an Array

An array is defined by specifying its data type, name and number of elements.

**Syntax**

```c
data_type array_name[size];
```

Example:

```c
int marks[5];
```

This creates an array capable of storing five int elements.

```text
int marks[5]

┌─────┬─────┬─────┬─────┬─────┐
│ [0] │ [1] │ [2] │ [3] │ [4] │
└─────┴─────┴─────┴─────┴─────┘
```

Each element has the same type.

---

## 15. Types of Arrays

Arrays can be classified based on their dimensions.

```text
Arrays
                      │
             ┌────────┴────────┐
             ▼                 ▼
       One-Dimensional     Multidimensional
             │                 │
        Linear Array       2D, 3D, etc.
```

**1. One-dimensional array**

```c
int marks[5];
```

```text
[10] [20] [30] [40] [50]
```

**2. Two-dimensional array**

```c
int matrix[2][3];
```

```text
Column
       0    1    2
    ┌────┬────┬────┐
 0  │ 10 │ 20 │ 30 │
    ├────┼────┼────┤
 1  │ 40 │ 50 │ 60 │
    └────┴────┴────┘
       Rows
```

**3. Multidimensional array**

An array can have more than two dimensions.

```c
int a[2][3][4];
```

This can be visualized as multiple two-dimensional arrays.

---

## 16. Array Declaration

Array declaration specifies the data type, name and size.

**Syntax**

```c
data_type array_name[size];
```

Examples:

```c
int numbers[10];
float prices[20];
char letters[26];
```

For a two-dimensional array:

```c
int matrix[3][4];
```

```text
matrix[3][4]

Rows    Columns
 3  ×     4

┌────┬────┬────┬────┐
│    │    │    │    │
├────┼────┼────┼────┤
│    │    │    │    │
├────┼────┼────┼────┤
│    │    │    │    │
└────┴────┴────┴────┘
```

---

## 17. Array Initialization

Array initialization means assigning initial values when the array is declared.

**Full initialization**

```c
int marks[5] = {70, 80, 90, 85, 75};
```

```text
Index       0    1    2    3    4
           ┌────┬────┬────┬────┐
Value      │ 70 │ 80 │ 90 │ 85 │ 75 │
           └────┴────┴────┴────┘
```

**Partial initialization**

```c
int numbers[5] = {10, 20};
```

The remaining elements are initialized to zero.

Conceptually:

```text
[10] [20] [0] [0] [0]
```

**Size inferred from initializer**

```c
int numbers[] = {10, 20, 30, 40};
```

The compiler determines the number of elements from the initializer.

```text
Number of elements = 4
```

**Character array initialization**

```c
char name[] = "C";
```

A string literal includes a terminating null character '\0', so the array has space for it.

Conceptually:

```text
['C'] ['\0']
```

---

## 18. Linear Arrays

A linear array, also called a one-dimensional array, stores elements in a single sequence.

Example:

```c
int numbers[5] = {10, 20, 30, 40, 50};
```

```text
Index:
   0      1      2      3      4
   ↓      ↓      ↓      ↓      ↓
┌──────┬──────┬──────┬──────┬──────┐
│  10  │  20  │  30  │  40  │  50  │
└──────┴──────┴──────┴──────┴──────┘
```

**Accessing elements**

```c
printf("%d", numbers[0]);
```

Output:

```text
10
```

Another example:

```c
printf("%d", numbers[3]);
```

Output:

```text
40
```

**Traversing an array**

```c
int i;

for (i = 0; i < 5; i++)
{
    printf("%d ", numbers[i]);
}
```

Output:

```text
10 20 30 40 50
```

**Flow**

```text
i = 0
 │
 ▼
i < 5?
 │
 ▼
numbers[i]
 │
 ▼
Print
 │
 ▼
i++
 │
 └──────────► Condition
```

---

## 19. Multidimensional Arrays

A multidimensional array contains arrays as its elements. The most common form is a two-dimensional array.

**Declaration**

```c
int matrix[3][3];
```

It contains 3 rows and 3 columns.

```text
Columns
          0    1    2
       ┌────┬────┬────┐
Row 0  │    │    │    │
       ├────┼────┼────┤
Row 1  │    │    │    │
       ├────┼────┼────┤
Row 2  │    │    │    │
       └────┴────┴────┘
```

**Initialization**

```c
int matrix[2][3] =
{
    {1, 2, 3},
    {4, 5, 6}
};
```

Representation:

```text
Column
          0   1   2
       ┌───┬───┬───┐
Row 0  │ 1 │ 2 │ 3 │
       ├───┼───┼───┤
Row 1  │ 4 │ 5 │ 6 │
       └───┴───┴───┘
```

**Accessing an element**

```c
printf("%d", matrix[1][2]);
```

Output:

```text
6
```

The first index identifies the row and the second identifies the column.

**Traversing a two-dimensional array**

```c
int i, j;

for (i = 0; i < 2; i++)
{
    for (j = 0; j < 3; j++)
    {
        printf("%d ", matrix[i][j]);
    }

    printf("\n");
}
```

Output:

```text
1 2 3
4 5 6
```

**Memory representation**

In a typical C implementation, a two-dimensional array is stored in row-major order.

```text
matrix[0][0]
     ↓
matrix[0][1]
     ↓
matrix[0][2]
     ↓
matrix[1][0]
     ↓
matrix[1][1]
     ↓
matrix[1][2]
```

---

# PART 4: STRINGS

## 20. Strings

A string in C is a sequence of characters stored in a character array and terminated by a null character '\0'.

C does not have a separate built-in string data type.

Example:

```c
char name[] = "HELLO";
```

Memory representation:

```text
Index
  0     1     2     3     4     5
┌─────┬─────┬─────┬─────┬─────┬─────┐
│ H   │ E   │ L   │ L   │ O   │ \0  │
└─────┴─────┴─────┴─────┴─────┴─────┘
```

The '\0' marks the end of the string.

**Character sequence vs string**

```c
char a[] = {'H', 'i'};
```

This is a character array but does not contain a terminating null character.

```c
char b[] = {'H', 'i', '\0'};
```

This is a valid C string.

---

## 21. Character Arrays

A character array is an array whose elements have type char.

Example:

```c
char name[10];
```

It can store individual characters:

```c
name[0] = 'A';
name[1] = 'y';
name[2] = 'a';
```

For a string, a null terminator is required:

```text
A y a \0
```

**Character array initialization**

```c
char word[] = {'C', 'o', 'd', 'e', '\0'};
```

Equivalent string-literal initialization:

```c
char word[] = "Code";
```

Memory:

```text
┌─────┬─────┬─────┬─────┬─────┐
│  C  │  o  │  d  │  e  │ \0  │
└─────┴─────┴─────┴─────┴─────┘
```

The size required is 5 characters including the null terminator.

---

## 22. Arrays and Strings

Strings are implemented using character arrays.

```c
char city[] = "Kochi";
```

Conceptually:

```text
city
 │
 ▼
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  K  │  o  │  c  │  h  │  i  │ \0  │
└─────┴─────┴─────┴─────┴─────┴─────┘
```

**String input**

A string can be read using functions such as fgets().

```c
char name[50];

fgets(name, sizeof(name), stdin);
```

**String output**

```c
printf("%s", name);
```

The %s format specifier is used for a null-terminated string.

**Array of strings**

Multiple strings can be stored using a two-dimensional character array.

```c
char names[3][20] =
{
    "Alice",
    "Bob",
    "Charlie"
};
```

Conceptually:

```text
20 characters
        ┌────────────────────┐
names[0]│ Alice\0            │
        ├────────────────────┤
names[1]│ Bob\0              │
        ├────────────────────┤
names[2]│ Charlie\0          │
        └────────────────────┘
```

---

## 23. String Manipulation

String manipulation means performing operations such as finding length, copying, comparing, concatenating and searching within strings.

The standard string functions are declared in:

```c
#include <string.h>
```

Common operations include:

```text
String Manipulation
       │
       ├── Find length
       ├── Copy
       ├── Concatenate
       ├── Compare
       ├── Search
       └── Find characters/substrings
```

**Example**

```c
char first[20] = "Hello";
char second[20] = "World";
```

Concatenation can produce:

```text
Hello + World
     ↓
HelloWorld
```

Comparison determines whether strings are equal or which one comes first according to the function's comparison result.

---

## 24. String Functions

C provides several standard library functions for manipulating null-terminated strings.

They are declared in:

```c
#include <string.h>
```

**strlen()**

Returns the number of characters in a string, excluding the terminating '\0'.

```c
char str[] = "Hello";

printf("%zu", strlen(str));
```

Output:

```text
5
```

```text
H e l l o \0
←── 5 ──→
```

---

**strcpy()**

Copies a string from the source to the destination.

**Syntax:**

```c
strcpy(destination, source);
```

Example:

```c
char source[] = "Hello";
char destination[20];

strcpy(destination, source);
```

Result:

```text
source
┌─────┬─────┬─────┬─────┬─────┬─────┐
│ H   │ e   │ l   │ l   │ o   │ \0  │
└─────┴─────┴─────┴─────┴─────┴─────┘
                 │
                 │ strcpy()
                 ▼
destination
┌─────┬─────┬─────┬─────┬─────┬─────┐
│ H   │ e   │ l   │ l   │ o   │ \0  │
└─────┴─────┴─────┴─────┴─────┴─────┘
```

The destination must have enough space for the copied string including its terminating null character.

---

**strcat()**

Appends one string to the end of another.

**Syntax:**

```c
strcat(destination, source);
```

Example:

```c
char a[20] = "Hello ";
char b[] = "World";

strcat(a, b);
```

Result:

```text
Hello World
```

Conceptually:

```text
Before:

a → Hello \0
b → World \0

After:

a → Hello World \0
```

The destination must have enough capacity for the resulting string.

---

**strcmp()**

Compares two null-terminated strings lexicographically.

**Syntax:**

```c
strcmp(string1, string2);
```

Example:

```c
char a[] = "apple";
char b[] = "apple";

int result = strcmp(a, b);
```

For equal strings:

```text
result = 0
```

For unequal strings, the result is negative or positive according to the comparison of the strings.

Conceptually:

```text
strcmp(a, b)

Equal        → 0
a < b        → negative
a > b        → positive
```

---

**strchr()**

Finds the first occurrence of a character in a string.

```c
char str[] = "Computer";

char *p = strchr(str, 'p');
```

The returned pointer points to the first matching p, or is NULL if the character is not found.

```text
C o m p u t e r
      ↑
      p
```

---

**strstr()**

Finds the first occurrence of a substring within another string.

```c
char str[] = "C programming";
char *p = strstr(str, "program");
```

Conceptually:

```text
C   p r o g r a m m i n g
    └──────────┘
      program
```

If the substring is not found, NULL is returned.

---

**strncpy()**

Copies up to a specified number of characters.

**Syntax:**

```c
strncpy(destination, source, n);
```

Example:

```c
char source[] = "Computer";
char destination[20];

strncpy(destination, source, 4);
```

The first four characters are copied:

```text
Comp
```

Care must be taken because strncpy() does not necessarily append '\0' when the source length is at least n.

---

**strncmp()**

Compares at most the first n characters of two strings.

**Syntax:**

```c
strncmp(string1, string2, n);
```

Example:

```c
strncmp("Computer", "Compare", 3);
```

Only the first three characters are compared:

```text
Com
Com
```

Therefore, the first three characters match.

---

**Common String Functions Summary**

| Function  | Purpose                   |
| --------- | ------------------------- |
| strlen()  | Finds string length       |
| strcpy()  | Copies a string           |
| strncpy() | Copies up to n characters |
| strcat()  | Concatenates strings      |
| strcmp()  | Compares strings          |
| strncmp() | Compares first n characters |
| strchr()  | Searches for a character  |
| strstr()  | Searches for a substring  |

**Overall string structure**

```text
STRING
                        │
                        ▼
              Character Array
                        │
                        ▼
             Null Character '\0'
                        │
                        ▼
               String Functions
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
     strlen()         strcpy()         strcat()
        │               │                │
      Length           Copy          Concatenate

        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
     strcmp()        strchr()         strstr()
        │               │                │
     Compare         Character        Substring
                      Search            Search
```

# UNIT 4: FUNCTIONS — CO4

PART 1: FUNCTIONS

## 1. Functions

A function is a named block of code designed to perform a specific task. Functions divide a large program into smaller, manageable and reusable sections.

A function may accept input through parameters and may return a value to the calling program.

```text
Main Program
                      │
                      ▼
                Function Call
                      │
                      ▼
              ┌───────────────┐
              │    Function   │
              │               │
              │   Statements  │
              │       │       │
              │    return     │
              └───────┬───────┘
                      │
                      ▼
                Main Program
```

**General structure**

```c
return_type function_name(parameters)
{
    statements;
    return value;
}
```

Example:

```c
int add(int a, int b)
{
    return a + b;
}
```

A function provides modularity, code reuse, easier testing and easier maintenance.

```text
Large Program
     │
     ├── Function 1
     ├── Function 2
     ├── Function 3
     └── Function 4
```

---

## 2. Built-in Functions

Built-in functions, commonly called library functions, are functions already provided by the C standard library.

They can be used by including the appropriate header file.

Examples:

```c
#include <stdio.h>
#include <string.h>
#include <math.h>
```

Common examples:

```text
stdio.h
 │
 ├── printf()
 ├── scanf()
 ├── getchar()
 └── putchar()

string.h
 │
 ├── strlen()
 ├── strcpy()
 ├── strcat()
 └── strcmp()

math.h
 │
 ├── sqrt()
 ├── pow()
 └── ceil()
```

Example:

```c
#include <stdio.h>
#include <math.h>

int main()
{
    printf("%.0f", sqrt(25));
    return 0;
}
```

Output:

```text
5
```

Library functions reduce the need to implement commonly required operations manually.

---

## 3. User-Defined Functions

A user-defined function is a function created by the programmer to perform a particular operation.

Example:

```c
int square(int n)
{
    return n * n;
}
```

Calling it:

```c
int result = square(5);
```

Output value:

```text
25
```

**Types based on arguments and return value**

```text
User-Defined Functions
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
    Arguments       Arguments       No arguments
     + return        + no return
```

The commonly studied four forms are:

1. No arguments, no return value
2. Arguments, no return value
3. No arguments, return value
4. Arguments, return value

Example of arguments and return value:

```c
int add(int a, int b)
{
    return a + b;
}
```

---

## 4. Function Declaration

A function declaration tells the compiler about a function before it is called.

It specifies the function's return type, name and parameter types.

**Syntax**

```c
return_type function_name(parameter_list);
```

Example:

```c
int add(int, int);
```

This tells the compiler:

```text
Function name  → add
Return type    → int
Parameters     → two int values
```

**Complete structure**

```c
#include <stdio.h>

int add(int, int);

int main()
{
    int result;

    result = add(10, 20);

    printf("%d", result);

    return 0;
}

int add(int a, int b)
{
    return a + b;
}
```

**Flow**

```text
Function Declaration
        │
        ▼
Function Call
        │
        ▼
Function Definition
        │
        ▼
Return Value
```

The declaration is also called a function prototype.

---

## 5. Function Definition

A function definition contains the actual statements that specify what the function does.

**Syntax**

```c
return_type function_name(parameters)
{
    statements;
}
```

Example:

```c
int multiply(int a, int b)
{
    int result;

    result = a * b;

    return result;
}
```

The function definition contains:

```text
Function Definition
        │
        ├── Return type
        ├── Function name
        ├── Parameters
        ├── Function body
        └── return statement
```

Example:

```c
int add(int a, int b)
{
    return a + b;
}
│   │    │
│   │    └── Parameters
│   └─────── Function name
└─────────── Return type
```

---

## 6. Function Call

A function call transfers program control to the function so that its statements can execute.

Example:

```c
int result;

result = add(10, 20);
```

Here:

```text
add(10, 20)
    │
    ▼
Function receives
a = 10, b = 20
    │
    ▼
a + b
    │
    ▼
30
    │
    ▼
result
```

**Complete example:**

```c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main()
{
    int result;

    result = add(10, 20);

    printf("%d", result);

    return 0;
}
```

Output:

```text
30
```

The calling function waits for the called function to finish and return control.

---

## 7. Nesting of Functions

Nesting refers to using one function in the execution flow of another function.

In standard C, a function cannot normally be defined inside another function. However, one function can call another function.

Example:

```c
#include <stdio.h>

int square(int n)
{
    return n * n;
}

int calculate(int n)
{
    return square(n) + 10;
}

int main()
{
    printf("%d", calculate(5));

    return 0;
}
```

**Execution**

```text
main()
  │
  ▼
calculate(5)
  │
  ▼
square(5)
  │
  ▼
25
  │
  ▼
25 + 10
  │
  ▼
35
```

Thus, functions can call other functions to divide complex operations into smaller tasks.

---

## 8. Parameter Passing

Parameter passing is the process of supplying values to a function.

```c
int add(int a, int b)
{
    return a + b;
}

add(10, 20);
```

Here:

```text
Actual arguments              Formal parameters

     10 ──────────────────────► a
     20 ──────────────────────► b
```

**Actual parameters**

Values supplied during the function call are called actual arguments.

```c
add(10, 20);
```

**Formal parameters**

Variables receiving those values in the function definition are formal parameters.

```c
int add(int a, int b)
```

**Flow**

```text
Calling Function
       │
       │ arguments
       ▼
Called Function
       │
       │ parameters
       ▼
Process
       │
       ▼
Return
```

C primarily uses pass-by-value, meaning a function receives copies of argument values.

---

## 9. Recursive Functions

A recursive function is a function that calls itself.

A recursive function must contain a base condition to stop further calls.

**Structure**

```text
Function
             │
             ▼
       Base condition?
        /          \
      Yes           No
       │             │
       ▼             ▼
     Return       Function
                    calls
                    itself
                      │
                      └──────►
```

**Example: factorial**

```c
int factorial(int n)
{
    if (n == 0)
        return 1;

    return n * factorial(n - 1);
}
```

Calling:

```c
factorial(5);
```

**Execution:**

```text
factorial(5)
     │
     ▼
5 × factorial(4)
     │
     ▼
4 × factorial(3)
     │
     ▼
3 × factorial(2)
     │
     ▼
2 × factorial(1)
     │
     ▼
1 × factorial(0)
     │
     ▼
     1
```

**Returning:**

```text
1 × 1 = 1
2 × 1 = 2
3 × 2 = 6
4 × 6 = 24
5 × 24 = 120
```

Therefore:

```text
5! = 120
```

**Components**

```text
Recursive Function
       │
       ├── Base case
       │
       └── Recursive case
```

Without a suitable base condition, recursive calls can continue until available stack space is exhausted.

---

## 10. Multifile Programs

A multifile program divides a C program into multiple source files instead of placing all code in one file.

For example:

```text
Project
 │
 ├── main.c
 ├── math.c
 └── math.h
```

math.h contains declarations:

```c
int add(int a, int b);
```

math.c contains the definition:

```c
int add(int a, int b)
{
    return a + b;
}
```

main.c uses the function:

```c
#include <stdio.h>
#include "math.h"

int main()
{
    printf("%d", add(10, 20));

    return 0;
}
```

**Structure**

```text
Multifile Program
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       main.c        math.c       math.h
          │            │            │
          │            │      Declarations
          │            │
          │      Function definitions
          │            │
          └────────────┴────────────┐
                                    ▼
                              Compilation
                                    │
                                    ▼
                              Executable
```

Advantages include modularity, easier maintenance, code reuse and separation of responsibilities.

---

# PART 2: POINTERS

## 11. Pointers

A pointer is a variable that stores the memory address of another variable.

Example:

```c
int x = 10;
int *p = &x;
```

Conceptually:

```text
Variable x
┌──────────────┐
│     10       │
└──────────────┘
      ▲
      │
      │ address
      │
┌──────────────┐
│      p       │
│  address of x│
└──────────────┘
```

A pointer does not normally store the value 10 itself. It stores the address where x is located.

```text
x  → value
p  → address of x
*p → value stored at that address
```

---

## 12. Introduction to Pointers

Pointers are declared using the * symbol.

```c
int *p;
```

This means p is a pointer to an integer.

Example:

```c
int x = 25;
int *p = &x;
```

**Memory concept:**

```text
Address             Value

     1000 ─────────────►   25
                          x

     2000 ─────────────►  1000
                          p
```

Therefore:

```text
x
```

gives:

```text
25
```

while:

```text
p
```

represents the address of x, and:

```text
*p
```

gives:

```text
25
```

**Pointer chain**

```text
p
│
│ contains address
▼
x
│
│ contains value
▼
25
```

Pointers are important for arrays, functions, dynamic memory allocation and data structures.

---

## 13. Pointer Operators

Two fundamental operators are used with pointers.

**Address-of operator &**

The & operator returns the address of a variable.

```c
int x = 10;

printf("%p", (void *)&x);
```

Conceptually:

```text
&x
 │
 ▼
Address of x
```

**Dereference operator ***

The * operator accesses the value stored at the address held by a pointer.

```c
int x = 10;
int *p = &x;

printf("%d", *p);
```

Output:

```text
10
```

**Relationship**

```text
&x
              │
              ▼
        Address of x
              ▲
              │
              │
              p
              │
             *p
              │
              ▼
        Value of x
```

Example:

```c
int x = 50;
int *p = &x;

*p = 100;
```

Now:

```text
x = 100
```

because *p refers to the memory location of x.

---

## 14. Pointer Arithmetic

Pointer arithmetic allows certain arithmetic operations on pointers.

For a pointer to an array element, incrementing the pointer moves it to the next element.

Example:

```c
int a[3] = {10, 20, 30};

int *p = a;
```

Conceptually:

```text
p
│
▼
┌────┬────┬────┐
│ 10 │ 20 │ 30 │
└────┴────┴────┘
  ↑
 a[0]
```

After:

```c
p++;
```

the pointer points to the next int.

```text
┌────┬────┬────┐
│ 10 │ 20 │ 30 │
└────┴────┴────┘
       ↑
      p
```

**Common pointer operations**

```text
p++
p--
p + n
p - n
p1 - p2
```

For an int *, p + 1 advances by sizeof(int) bytes, not necessarily one byte.

```text
p
│
▼
Element 0

p + 1
│
▼
Element 1

p + 2
│
▼
Element 2
```

Pointer arithmetic is meaningful mainly within the same array object, subject to C's pointer rules.

---

## 15. Call by Value

In call by value, the function receives a copy of the argument.

Example:

```c
void change(int x)
{
    x = 100;
}

int main()
{
    int a = 10;

    change(a);

    printf("%d", a);

    return 0;
}
```

Output:

```text
10
```

**Why?**

```text
Main
 a = 10
   │
   │ copy
   ▼
Function
 x = 10
   │
 x = 100
   │
   ▼
Function ends

Original a = 10
```

Changing x does not change the original a.

C function arguments are passed by value. What is often called "call by reference" in C is implemented by passing a pointer value.

---

## 16. Call by Reference

In C, a function can modify the caller's variable by receiving its address through a pointer.

Example:

```c
void change(int *x)
{
    *x = 100;
}

int main()
{
    int a = 10;

    change(&a);

    printf("%d", a);

    return 0;
}
```

Output:

```text
100
```

**Working**

```text
Main

a = 10
 │
 │ &a
 ▼
Function
 x ─────────► a
 │            │
 │            ▼
 │           10
 │
 └── *x = 100

             ↓

a = 100
```

This allows a function to modify the original object.

**Swap example**

```c
void swap(int *a, int *b)
{
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}
```

Calling:

```c
swap(&x, &y);
```

allows the function to modify both original variables.

---

# PART 3: DYNAMIC MEMORY ALLOCATION

## 17. Dynamic Memory Allocation

Dynamic memory allocation means allocating memory during program execution rather than fixing its size completely at compile time.

The functions for dynamic memory allocation are provided by:

```c
#include <stdlib.h>
```

Main functions include:

```text
Dynamic Memory Allocation
          │
          ├── malloc()
          ├── calloc()
          ├── realloc()
          └── free()
```

The topics in this unit specifically include malloc() and calloc().

**Static vs dynamic allocation**

```text
Static Allocation
      │
      ▼
Size generally determined
before execution


Dynamic Allocation
      │
      ▼
Memory requested
during execution
```

Dynamic memory is allocated from the heap.

```text
Program Memory
┌─────────────────────┐
│ Code                │
├─────────────────────┤
│ Static/Global Data  │
├─────────────────────┤
│ Heap                │ ← Dynamic allocation
│                     │
├─────────────────────┤
│ Stack               │
└─────────────────────┘
```

A dynamically allocated block should eventually be released using free() when it is no longer required.

---

## 18. malloc() Function

malloc() means memory allocation.

It allocates a specified number of bytes and returns a pointer to the allocated memory.

**Syntax**

```c
ptr = malloc(number_of_bytes);
```

A common form is:

```c
int *p = malloc(n * sizeof *p);
```

Example:

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n = 5;

    int *p = malloc(n * sizeof *p);

    if (p == NULL)
    {
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        p[i] = i + 1;
    }

    free(p);

    return 0;
}
```

**Working**

```text
malloc()
                │
                ▼
        Request memory
                │
        ┌───────┴────────┐
        ▼                ▼
    Successful          Failed
        │                │
        ▼                ▼
   Pointer returned    NULL
        │
        ▼
   Use memory
        │
        ▼
      free()
```

**Important characteristics**

malloc():

- Allocates one contiguous block of the requested number of bytes.
- Returns a pointer to the beginning of the block.
- Returns NULL if allocation fails.
- Does not initialize the allocated memory to zero.

For example:

```c
int *p = malloc(5 * sizeof *p);
```

allocates enough space for five int objects.

---

## 19. calloc() Function

calloc() means contiguous allocation.

It allocates memory for a specified number of elements and initializes all allocated bytes to zero.

**Syntax**

```c
ptr = calloc(number_of_elements, size_of_each_element);
```

Example:

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n = 5;

    int *p = calloc(n, sizeof *p);

    if (p == NULL)
    {
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        printf("%d ", p[i]);
    }

    free(p);

    return 0;
}
```

Output for int objects:

```text
0 0 0 0 0
```

**Working**

```text
calloc()
                  │
                  ▼
        Number of elements
                  +
        Size of each element
                  │
                  ▼
          Allocate memory
                  │
                  ▼
          Zero-initialized
             allocation
                  │
                  ▼
              Pointer
```

**malloc() vs calloc()**

| Feature | malloc() | calloc() |
| ------- | -------- | -------- |
| Purpose | Allocates memory | Allocates memory for elements |
| Arguments | Number of bytes | Number of elements, size of each |
| Initial contents | Indeterminate | All allocated bytes initialized to zero |
| Header | `<stdlib.h>` | `<stdlib.h>` |
| Return value | Pointer or NULL | Pointer or NULL |

Example:

```c
int *a = malloc(5 * sizeof *a);
```

Memory allocated

```text
[ ? ][ ? ][ ? ][ ? ][ ? ]
```

The values are indeterminate.

With:

```c
int *b = calloc(5, sizeof *b);
```

Memory allocated

```text
[ 0 ][ 0 ][ 0 ][ 0 ][ 0 ]
```

For dynamically allocated objects, the memory should be released after use:

```c
free(a);
free(b);
```

**Complete Dynamic Memory Flow**

```text
Program
                       │
                       ▼
             Need memory at runtime
                       │
                       ▼
               malloc() / calloc()
                       │
                 ┌─────┴─────┐
                 ▼           ▼
             Success       Failure
                 │           │
                 ▼           ▼
          Pointer returned   NULL
                 │
                 ▼
            Use memory
                 │
                 ▼
               free()
                 │
                 ▼
         Memory released
```

---

## UNIT 4 OVERALL CONCEPT

```text
UNIT 4
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
      FUNCTIONS         POINTERS        DYNAMIC MEMORY
          │                │                │
          │                │                ├── malloc()
          │                │                └── calloc()
          │                │
          │                ├── Pointer operators
          │                ├── Pointer arithmetic
          │                ├── Call by value
          │                └── Call by reference
          │
          ├── Built-in functions
          ├── User-defined functions
          ├── Declaration
          ├── Definition
          ├── Function call
          ├── Nesting
          ├── Parameter passing
          ├── Recursion
          └── Multifile programs
```


# UNIT 5: STRUCTURE, UNION, ENUMERATION, MACROS AND FILE HANDLING — CO5

## 1. Structure in C

A structure is a user-defined data type in C that groups variables of different data types under one name.

```c
struct Student
{
    int roll;
    char name[30];
    float marks;
};
```

Concept:

```text
struct Student
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
     roll          name         marks
      int          char[]       float
```

Unlike an array, whose elements normally have the same data type, a structure can contain different data types.

---

## 2. Definition and Concept of Structure

The general syntax is:

```c
struct structure_name
{
    data_type member1;
    data_type member2;
    ...
};
```

Example:

```c
struct Employee
{
    int id;
    char name[30];
    float salary;
};
```

Here:

```text
Employee
 ├── id       → int
 ├── name     → char array
 └── salary   → float
```

The declaration defines the structure format. Memory is allocated when structure variables are declared.

---

## 3. Structure Declaration

A structure variable can be declared separately:

```c
struct Student
{
    int roll;
    float marks;
};

struct Student s1;
```

Or along with the structure definition:

```c
struct Student
{
    int roll;
    float marks;
} s1, s2;
```

Multiple variables:

```text
struct Student
       │
       ├── s1
       ├── s2
       └── s3
```

---

## 4. Structure Initialization

A structure can be initialized when its variable is declared.

```c
struct Student
{
    int roll;
    float marks;
};

struct Student s1 = {101, 85.5};
```

Conceptually:

```text
s1
┌──────────────┐
│ roll  = 101  │
│ marks = 85.5 │
└──────────────┘
```

Members can also be initialized using designated initializers:

```c
struct Student s1 = {
    .roll = 101,
    .marks = 85.5
};
```

---

## 5. Structure Variables

A structure variable stores values for all members of the structure.

```c
struct Student
{
    int roll;
    char grade;
    float marks;
};

struct Student s1;
```

Accessing members uses the dot operator:

```c
s1.roll = 101;
s1.grade = 'A';
s1.marks = 88.5;
```

Diagram:

```text
s1
 │
 ├── .roll  ──► 101
 ├── .grade ──► 'A'
 └── .marks ──► 88.5
```

---

## 6. Accessing Structure Members

The dot operator . is used with an ordinary structure variable.

```c
printf("%d", s1.roll);
printf("%.2f", s1.marks);
```

For a structure pointer, the arrow operator -> is used:

```c
struct Student *ptr = &s1;

printf("%d", ptr->roll);
```

Relationship:

```text
Structure variable
       │
       └── . ──► member

Structure pointer
       │
       └── -> ──► member
```

---

## 7. Array of Structures

An array of structures stores multiple records of the same structure type.

```c
struct Student
{
    int roll;
    float marks;
};

struct Student s[3];
```

Concept:

```text
s[0] ──► roll, marks
s[1] ──► roll, marks
s[2] ──► roll, marks
```

Example:

```c
s[0].roll = 101;
s[0].marks = 85.5;

s[1].roll = 102;
s[1].marks = 91.0;
```

---

## 8. Nested Structures

A structure can contain another structure as a member.

```c
struct Date
{
    int day;
    int month;
    int year;
};

struct Student
{
    int roll;
    struct Date dob;
};
```

Diagram:

```text
Student
├── roll
└── dob
    ├── day
    ├── month
    └── year
```

Access:

```c
s1.dob.day
s1.dob.month
s1.dob.year
```

---

## 9. Structure and Functions

A structure can be passed to a function.

```c
void display(struct Student s)
{
    printf("%d", s.roll);
}
```

Calling:

```c
display(s1);
```

A structure can also be returned from a function.

```c
struct Student createStudent()
{
    struct Student s = {101, 90.5};
    return s;
}
```

---

## 10. Union

A union is a user-defined data type in which all members share the same memory location.

```c
union Data
{
    int i;
    float f;
    char c;
};
```

Concept:

```text
union Data
       ┌─────────────┐
       │     i       │
       │     f       │
       │     c       │
       │             │
       │ SAME MEMORY │
       └─────────────┘
```

Only one member should generally contain a meaningful value at a time.

---

## 11. Union Declaration

Syntax:

```c
union union_name
{
    data_type member1;
    data_type member2;
    ...
};
```

Example:

```c
union Data
{
    int i;
    float f;
    char c;
};

union Data d1;
```

Members are accessed using the dot operator:

```c
d1.i = 10;
d1.f = 25.5;
```

Writing another member can overwrite the previous representation.

---

## 12. Union Initialization

A union can be initialized when declared.

```c
union Data
{
    int i;
    float f;
};

union Data d = {10};
```

The first member is initialized in this form.

A designated initializer can explicitly select a member:

```c
union Data d = {.f = 10.5};
```

Concept:

```text
Union d
┌───────────────┐
│ shared memory │
└───────────────┘
       ▲
       │
   one member
   at a time
```

---

## 13. Union Variables

Example:

```c
union Data
{
    int i;
    float f;
    char c;
};

union Data d1;

d1.i = 100;
```

The same memory is then reused when another member is assigned:

```c
d1.f = 25.5;
```

Conceptually:

Before:

```text
┌──────────────┐
│      i       │
└──────────────┘
```

After assigning f:

```text
┌──────────────┐
│      f       │
└──────────────┘
```

---

## 14. Structure vs Union

| Feature | Structure | Union |
| ------- | --------- | ----- |
| Memory | Separate memory for members | Shared memory |
| Simultaneous values | All members can hold values | One member's value is generally meaningful at a time |
| Size | Approximately sum of members plus padding | At least enough for its largest member, subject to alignment |
| Use | Records with multiple attributes | Alternative representations sharing storage |

Example:

Structure:

```text
┌───────┬───────┬───────┐
│ int   │ float │ char  │
└───────┴───────┴───────┘
```

Union:

```text
┌─────────────────────────┐
│ int / float / char      │
│     shared storage      │
└─────────────────────────┘
```

---

## 15. Enumeration

An enumeration, or enum, is a user-defined type consisting of named integer constants.

Syntax:

```c
enum Day
{
    MON,
    TUE,
    WED,
    THU,
    FRI
};
```

By default:

```text
MON = 0
TUE = 1
WED = 2
THU = 3
FRI = 4
```

Example:

```c
enum Day today;
today = WED;
```

Custom values can be assigned:

```c
enum Level
{
    LOW = 1,
    MEDIUM = 5,
    HIGH = 10
};
```

Concept:

```text
enum Level
   │
   ├── LOW    → 1
   ├── MEDIUM → 5
   └── HIGH   → 10
```

---

## 16. Macros

A macro is a symbolic name defined using the C preprocessor directive #define.

Example:

```c
#define PI 3.14159
```

Usage:

```c
float area = PI * r * r;
```

Before compilation, the preprocessor replaces the macro with its defined text.

```text
Source Code
    │
    ▼
#define PI 3.14159
    │
    ▼
Preprocessor
    │
    ▼
PI replaced by 3.14159
    │
    ▼
Compiler
```

---

## 17. Function-like Macros

A macro can accept arguments.

```c
#define SQUARE(x) ((x) * (x))
```

Example:

```c
int result = SQUARE(5);
```

Conceptually:

```text
SQUARE(5)
    │
    ▼
((5) * (5))
    │
    ▼
25
```

Parentheses are important for avoiding unexpected results in complex expressions.

---

## 18. C Preprocessor

The C preprocessor processes source code before actual compilation.

Common preprocessor directives include:

```c
#include
#define
#undef
#if
#ifdef
#ifndef
#else
#elif
#endif
```

Overall compilation:

```text
C Source Code
      │
      ▼
Preprocessor
      │
      ▼
Expanded Source
      │
      ▼
Compiler
      │
      ▼
Object Code
      │
      ▼
Linker
      │
      ▼
Executable
```

---

## 19. #include

#include includes the contents of a header file.

Example:

```c
#include <stdio.h>
```

Concept:

```text
program.c
    │
    │ #include
    ▼
stdio.h
    │
    ▼
Preprocessed source
```

It provides declarations needed by functions such as printf() and scanf().

---

## 20. Conditional Compilation

Conditional compilation allows selected portions of source code to be compiled depending on conditions.

Example:

```c
#ifdef DEBUG
printf("Debug mode");
#endif
```

Concept:

```text
DEBUG defined?
               /      \
             Yes       No
              │         │
              ▼         ▼
        Compile code   Skip code
```

Another example:

```c
#ifndef SIZE
#define SIZE 100
#endif
```

This defines SIZE only if it has not already been defined.

---

## 21. File Handling in C

File handling allows a C program to store and retrieve data from files.

```text
C Program
                 │
                 ▼
          File Operations
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
     Create     Read      Write
       │         │         │
       └─────────┼─────────┘
                 ▼
                File
```

Files provide persistent storage, meaning data can remain available after the program terminates.

---

## 22. Definition of Files

A file is a named collection of data stored on secondary storage.

Examples:

```text
student.txt
marks.dat
employee.dat
data.csv
```

C provides the FILE type through <stdio.h>.

```c
FILE *fp;
```

Here fp is a file pointer used to work with an opened file.

---

## 23. Creating a Data File

A file can be created using fopen() with a suitable mode.

```c
FILE *fp;

fp = fopen("student.txt", "w");
```

If the file does not exist, "w" generally creates it.

Basic flow:

```text
Program
   │
   ▼
fopen()
   │
   ▼
File System
   │
   ▼
Create/Open File
   │
   ▼
FILE pointer
```

Always check whether opening succeeded:

```c
if (fp == NULL)
{
    printf("File cannot be opened");
}
```

---

## 24. File Opening Modes

Common modes:

| Mode | Meaning |
| ---- | ------- |
| "r" | Open for reading |
| "w" | Open for writing, creating/truncating |
| "a" | Open for appending |
| "r+" | Read and write |
| "w+" | Read and write, creating/truncating |
| "a+" | Read and append |
| "rb" | Read binary |
| "wb" | Write binary |
| "ab" | Append binary |

Concept:

```text
fopen()
                │
      ┌─────────┼─────────┐
      ▼         ▼         ▼
     "r"       "w"       "a"
      │         │         │
     Read     Write     Append
```

---

## 25. fopen()

fopen() opens a file and returns a file pointer.

Syntax:

```c
FILE *fopen(const char *filename, const char *mode);
```

Example:

```c
FILE *fp;

fp = fopen("data.txt", "r");
```

If successful:

```text
fopen()
   │
   ▼
FILE *
   │
   ▼
Opened File
```

If unsuccessful:

```c
if (fp == NULL)
{
    printf("Error opening file");
}
```

---

## 26. fclose()

fclose() closes an opened file.

Syntax:

```c
fclose(fp);
```

Example:

```c
FILE *fp = fopen("data.txt", "r");

if (fp != NULL)
{
    /* file operations */
    fclose(fp);
}
```

Concept:

```text
Opened File
    │
    ▼
Read / Write
    │
    ▼
fclose()
    │
    ▼
Closed File
```

Closing a file releases associated resources and ensures buffered output is flushed appropriately.

---

## 27. feof()

feof() checks whether the end-of-file indicator has been set for a stream.

Syntax:

```c
feof(fp);
```

It returns non-zero when the end-of-file indicator is set.

A common reading pattern is:

```c
int ch;

while ((ch = fgetc(fp)) != EOF)
{
    putchar(ch);
}
```

This is generally preferable to using feof() as the loop condition because EOF is detected by the read operation itself.

---

## 28. fseek()

fseek() changes the current file position.

Syntax:

```c
fseek(fp, offset, origin);
```

Common origins:

```text
SEEK_SET → Beginning
SEEK_CUR → Current position
SEEK_END → End
```

Example:

```c
fseek(fp, 0, SEEK_SET);
```

Diagram:

```text
File:
┌────┬────┬────┬────┬────┐
│ A  │ B  │ C  │ D  │ E  │
└────┴────┴────┴────┘
  ▲
  │
SEEK_SET
```

After moving:

```text
┌────┬────┬────┬────┬────┐
│ A  │ B  │ C  │ D  │ E  │
└────┴────┴────┴────┴────┘
             ▲
             │
        Current position
```

---

## 29. rewind()

rewind() moves the file position back to the beginning.

Syntax:

```c
rewind(fp);
```

Equivalent conceptually to:

```c
fseek(fp, 0, SEEK_SET);
```

Diagram:

Before:

```text
A ── B ── C ── D ── E
             ▲
             │
           Current
```

```c
rewind(fp);
```

After:

```text
A ── B ── C ── D ── E
▲
│
Beginning
```

---

## 30. Text Files

A text file stores data as characters.

Examples:

```text
student.txt
data.csv
notes.txt
```

Example contents:

```text
101 Fairish 85
102 Rahul   90
103 Aman    78
```

Text-file operations can use functions such as:

```text
fgetc()
fputc()
fgets()
fputs()
fprintf()
fscanf()
```

---

## 31. Using Text Files

Basic text-file workflow:

```text
Start
          │
          ▼
       fopen()
          │
          ▼
     Read / Write
          │
          ▼
       fclose()
          │
          ▼
         End
```

Example:

```c
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("data.txt", "w");

    if (fp == NULL)
        return 1;

    fprintf(fp, "Hello C");

    fclose(fp);

    return 0;
}
```

---

## 32. fgetc()

fgetc() reads one character from a file.

Syntax:

```c
int fgetc(FILE *stream);
```

Example:

```c
int ch;

ch = fgetc(fp);
```

Reading an entire file:

```c
int ch;

while ((ch = fgetc(fp)) != EOF)
{
    putchar(ch);
}
```

Diagram:

```text
File
┌─────────────────┐
│ H e l l o       │
└─────────────────┘
       │
       ▼
    fgetc()
       │
       ▼
      'H'
```

The return type is int so that all unsigned-char values plus the special EOF value can be represented.

---

## 33. fputc()

fputc() writes one character to a file.

Syntax:

```c
fputc(character, fp);
```

Example:

```c
fputc('A', fp);
```

Concept:

```text
'A'
 │
 ▼
fputc()
 │
 ▼
File
┌─────┐
│  A  │
└─────┘
```

---

## 34. fscanf()

fscanf() reads formatted data from a file.

Syntax:

```c
fscanf(fp, "format", &variables);
```

Example:

```c
int roll;
float marks;

fscanf(fp, "%d %f", &roll, &marks);
```

Concept:

```text
File
 │
 │ "101 85.5"
 ▼
fscanf()
 │
 ├──► roll  = 101
 └──► marks = 85.5
```

It behaves similarly to scanf(), except the input source is a file stream.

---

## 35. fprintf()

fprintf() writes formatted data to a file.

Syntax:

```c
fprintf(fp, "format", values);
```

Example:

```c
int roll = 101;
float marks = 85.5;

fprintf(fp, "%d %.2f", roll, marks);
```

Output in file:

```text
101 85.50
```

Diagram:

```text
Variables
  │
  ▼
fprintf()
  │
  ▼
Text File
```

---

## 36. fgets()

fgets() reads a string or line from a file.

Syntax:

```c
fgets(buffer, size, fp);
```

Example:

```c
char line[100];

fgets(line, 100, fp);
```

Concept:

```text
File
│
│ "Operating System\n"
▼
fgets()
│
▼
line[100]
```

It reads at most size - 1 characters and adds a terminating null character when input is successfully read.

---

## 37. fputs()

fputs() writes a string to a file.

Syntax:

```c
fputs(string, fp);
```

Example:

```c
fputs("Hello World\n", fp);
```

Concept:

```text
"Hello World"
      │
      ▼
    fputs()
      │
      ▼
     File
```

---

## 38. Binary Files

Binary files store data in binary representation rather than human-readable text form.

Examples:

```text
database.dat
image files
compiled files
```

Binary operations commonly use:

```c
fread()
fwrite()
```

Concept:

```text
C Data
  │
  ▼
fwrite()
  │
  ▼
Binary File
  │
  ▼
fread()
  │
  ▼
C Data
```

---

## 39. fread()

fread() reads blocks of binary data.

Syntax:

```c
fread(pointer, size, count, fp);
```

Example:

```c
struct Student s;

fread(&s, sizeof(s), 1, fp);
```

Meaning:

```text
Address       Size              Count
  │            │                  │
  ▼            ▼                  ▼
 &s         sizeof(s)             1
```

---

## 40. fwrite()

fwrite() writes blocks of binary data.

Syntax:

```c
fwrite(pointer, size, count, fp);
```

Example:

```c
struct Student s = {101, 85.5};

fwrite(&s, sizeof(s), 1, fp);
```

Concept:

```text
Structure
    │
    ▼
  fwrite()
    │
    ▼
Binary File
```

---

## 41. File Position Indicator

Every opened stream maintains a current file position.

```text
File:
┌────┬────┬────┬────┬────┬────┐
│ A  │ B  │ C  │ D  │ E  │ F  │
└────┴────┴────┴────┴────┘
             ▲
             │
        File Position
```

Functions such as:

```text
fgetc()
fputc()
fseek()
rewind()
```

can affect or use the file position.

---

## 42. ftell()

ftell() returns the current file position indicator.

Syntax:

```c
long ftell(FILE *fp);
```

Example:

```c
long position;

position = ftell(fp);
```

Concept:

```text
A B C D E F
      ▲
      │
   Position = 3
```

The exact interpretation of positions depends on the stream and mode, especially for text streams.

---

## 43. Other File Handling Functions

Important functions include:

```text
fopen()    → Open file
fclose()   → Close file
fgetc()    → Read character
fputc()    → Write character
fgets()    → Read string/line
fputs()    → Write string
fscanf()   → Formatted input
fprintf()  → Formatted output
fread()    → Binary input
fwrite()   → Binary output
fseek()    → Move file position
ftell()    → Get file position
rewind()   → Move to beginning
feof()     → Test EOF indicator
```

---

## 44. Complete File-Handling Flow

```text
FILE HANDLING
                              │
                              ▼
                           fopen()
                              │
                 ┌────────────┼────────────┐
                 ▼            ▼            ▼
                Read        Write        Append
                 │            │            │
        ┌────────┼──────┐     │            │
        ▼        ▼      ▼     ▼            ▼
      fgetc    fgets  fscanf fputc       fprintf
        │        │      │     │            │
        └────────┴──────┴─────┴────────────┘
                              │
                              ▼
                           fseek()
                              │
                              ▼
                           ftell()
                              │
                              ▼
                          rewind()
                              │
                              ▼
                           fclose()
```

---

## 45. Structure, Union, Enumeration and Macro Relationship

```text
C USER-DEFINED /
                         PREPROCESSOR FEATURES
                                  │
             ┌────────────────────┼────────────────────┐
             ▼                    ▼                    ▼
         Structure              Union              Enumeration
             │                    │                    │
       Multiple values       Shared memory       Named constants
       simultaneously        among members
             │                    │
             └──────────┬─────────┘
                        ▼
                    Data Modeling


                    Preprocessor
                         │
               ┌─────────┴─────────┐
               ▼                   ▼
             Macros             Directives
               │                   │
            #define            #include
                               #if / #ifdef
```

---

## 46. Complete Unit 5 Concept Flow

```text
UNIT 5
                                │
        ┌───────────────────────┼────────────────────────┐
        │                       │                        │
        ▼                       ▼                        ▼
    STRUCTURE                  UNION                 ENUMERATION
        │                       │                        │
        ├── Definition          ├── Definition           └── Named Constants
        ├── Declaration        ├── Declaration
        ├── Initialization      ├── Initialization
        ├── Variables           └── Variables
        ├── Members
        ├── Arrays
        └── Nested Structures

                                │
                                ▼
                         C PREPROCESSOR
                                │
                    ┌───────────┴───────────┐
                    ▼                       ▼
                  MACROS                DIRECTIVES
                    │                       │
                 #define                 #include
                 Function               #if/#ifdef
                 Macros                 #ifndef
                    │                       │
                    └───────────┬───────────┘
                                ▼
                          SOURCE PROCESSING
                                │
                                ▼
                         COMPILATION


                         FILE HANDLING
                                │
             ┌──────────────────┼──────────────────┐
             ▼                  ▼                  ▼
          Text Files       Binary Files       File Position
             │                  │                  │
       ┌─────┼─────┐       ┌────┴────┐       ┌────┼────┐
       ▼     ▼     ▼       ▼         ▼       ▼    ▼    ▼
    fgetc  fgets fscanf   fread    fwrite   fseek ftell rewind
       │     │     │       │         │
       └─────┼─────┘       └────┬────┘
             │                  │
             └────────┬─────────┘
                      ▼
                   fopen()
                      │
                      ▼
                  File Opened
                      │
                      ▼
                 Read / Write
                      │
                      ▼
                  fclose()
```

## 47. Unit 5 Overall Structure

```text
┌──────────────────────────────────────────────────────────────┐
│                         UNIT 5                               │
├──────────────────────────────────────────────────────────────┤
│ STRUCTURE                                                    │
│  ├── Definition and Concept                                 │
│  ├── Declaration                                            │
│  ├── Initialization                                         │
│  └── Structure Variables                                    │
├──────────────────────────────────────────────────────────────┤
│ UNION                                                        │
│  ├── Definition and Concept                                 │
│  ├── Declaration                                            │
│  ├── Initialization                                         │
│  ├── Union Variables                                        │
│  └── Structure vs Union                                     │
├──────────────────────────────────────────────────────────────┤
│ ENUMERATION                                                  │
│  └── Named Integer Constants                                │
├──────────────────────────────────────────────────────────────┤
│ MACROS                                                       │
│  └── #define                                                 │
├──────────────────────────────────────────────────────────────┤
│ C PREPROCESSORS                                              │
│  ├── #include                                                │
│  ├── #define                                                 │
│  ├── #undef                                                  │
│  ├── #if                                                     │
│  ├── #ifdef                                                  │
│  ├── #ifndef                                                 │
│  ├── #else                                                   │
│  ├── #elif                                                   │
│  └── #endif                                                  │
├──────────────────────────────────────────────────────────────┤
│ FILE HANDLING                                                │
│  ├── Definition of Files                                    │
│  ├── Creating a Data File                                   │
│  ├── Opening Modes                                          │
│  ├── fopen()                                                │
│  ├── fclose()                                               │
│  ├── feof()                                                 │
│  ├── fseek()                                                │
│  ├── rewind()                                               │
│  ├── Text Files                                             │
│  ├── fgetc()                                                │
│  ├── fputc()                                                │
│  ├── fscanf()                                               │
│  └── Other File Functions                                   │
└──────────────────────────────────────────────────────────────┘
```
