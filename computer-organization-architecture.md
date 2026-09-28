# UNIT 1: DIGITAL LOGIC CIRCUITS — CO1

## 1. Digital Logic Circuits

Digital logic circuits are electronic circuits that operate on discrete values, usually represented by two binary states: 0 and 1.

A digital system uses logic gates to process binary inputs and produce binary outputs.

```text
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
```

Digital circuits are mainly classified into:

```text
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
```

Combinational circuits include adders, subtractors, multiplexers and decoders. Sequential circuits include flip-flops, registers and counters.

---

## 2. Number Systems

A number system is a method of representing numerical values using a specific set of symbols and a base, or radix.

The four number systems commonly used in computer organization are:

```text
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
```

**Binary Number System**

Binary uses only two digits:

```text
0 and 1
```

Its base is 2.

Each position represents a power of 2.

Example:

```text
(1011)₂
= 1×2³ + 0×2² + 1×2¹ + 1×2⁰
= 8 + 0 + 2 + 1
= 11₁₀
```

Place-value representation:

```text
2³   2²   2¹   2⁰
       │    │    │    │
       8    4    2    1

       1    0    1    1
       │    │    │    │
       8    0    2    1
       └────┴────┴────┴──► 11
```

Binary is fundamental to digital computers because electronic circuits can conveniently represent two stable states.

---

**Decimal Number System**

Decimal uses ten digits:

```text
0 1 2 3 4 5 6 7 8 9
```

Its base is 10.

Example:

```text
(527)₁₀
= 5×10² + 2×10¹ + 7×10⁰
= 500 + 20 + 7
= 527
```

```text
10²    10¹    10⁰
        │      │      │
        5      2      7
        │      │      │
       500     20      7
        └──────┴──────┘
               │
              527
```

---

**Octal Number System**

Octal uses eight digits:

```text
0 1 2 3 4 5 6 7
```

Its base is 8.

Example:

```text
(725)₈
= 7×8² + 2×8¹ + 5×8⁰
= 448 + 16 + 5
= 469₁₀
```

Octal is useful because one octal digit represents exactly three binary bits.

```text
Binary       Octal

000   ─────►   0
001   ─────►   1
010   ─────►   2
011   ─────►   3
100   ─────►   4
101   ─────►   5
110   ─────►   6
111   ─────►   7
```

Example:

```text
Binary: 101 110 011
          │   │   │
          ▼   ▼   ▼
Octal:    5   6   3

Therefore:
(101110011)₂ = (563)₈
```

---

**Hexadecimal Number System**

Hexadecimal uses sixteen symbols:

```text
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

The letters represent:

```text
A = 10
B = 11
C = 12
D = 13
E = 14
F = 15
```

Its base is 16.

Example:

```text
(2AF)₁₆
= 2×16² + 10×16¹ + 15×16⁰
= 512 + 160 + 15
= 687₁₀
```

One hexadecimal digit represents exactly four binary bits.

```text
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
```

Example:

```text
Binary:       1010 1111 0011
                 │    │    │
                 ▼    ▼    ▼
Hexadecimal:     A    F    3

(101011110011)₂ = (AF3)₁₆
```

---

## 3. Logic Gates

Logic gates are fundamental digital circuits that perform logical operations on binary inputs.

The main gates are:

```text
AND
OR
NOT
NAND
NOR
XOR
XNOR
```

**AND Gate**

The AND gate produces 1 only when all inputs are 1.

```text
A ─────┐
       │
       ├───[ AND ]─── Y
       │
B ─────┘
```

Boolean expression:

```text
Y = A · B
```

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

```text
A ─────┐
       │
       ├───[ OR ]──── Y
       │
B ─────┘
```

Boolean expression:

```text
Y = A + B
```

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

```text
A ─────[ NOT ]──── Y
```

Boolean expression:

```text
Y = A̅
```

Truth table:

| A | Y |
| - | - |
| 0 | 1 |
| 1 | 0 |

---

**NAND Gate**

NAND means NOT-AND. It is the complement of the AND operation.

```text
A ─────┐
       ├──[ AND ]──o── Y
B ─────┘
```

Boolean expression:

```text
Y = (A·B)̅
```

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

```text
A ─────┐
       ├──[ OR ]──o── Y
B ─────┘
```

Boolean expression:

```text
Y = (A+B)̅
```

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

```text
A ─────┐
       ├──[ XOR ]──── Y
B ─────┘
```

Boolean expression:

```text
Y = A ⊕ B
```

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

```text
A ─────┐
       ├──[ XOR ]──o── Y
B ─────┘
```

Boolean expression:

```text
Y = (A ⊕ B)̅
```

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

```text
B
           0   1
        ┌───┬───┐
     A 0│   │   │
        ├───┼───┤
       1│   │   │
        └───┴───┘
```

For four variables, a 4 × 4 K-Map is used.

```text
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
```

The order is Gray-code order:

```text
00 → 01 → 11 → 10
```

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

```text
B
       0   1
    ┌───┬───┐
 A 0│ 1 │ 1 │
    ├───┼───┤
   1│ 0 │ 0 │
    └───┴───┘
```

The two 1s form one group.

```text
B
       0   1
    ┌───┬───┐
 A 0│ 1 │ 1 │ ← Group
    ├───┼───┤
   1│ 0 │ 0 │
    └───┴───┘
```

Within this group, A = 0 remains constant while B changes.

Therefore:

```text
F = A̅
```

K-Maps are generally used for small numbers of variables because the map becomes increasingly large as variables increase.

---

## 5. Combinational Logic Circuits

A combinational circuit is a digital circuit whose output depends only on the present input values.

```text
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
```

There is no memory element in a purely combinational circuit.

Examples:

```text
Combinational Circuits
        │
        ├── Half Adder
        ├── Full Adder
        ├── Subtractor
        ├── Multiplexer
        ├── Demultiplexer
        ├── Encoder
        └── Decoder
```

**Half Adder**

A half adder adds two one-bit binary numbers.

Inputs:

```text
A, B
```

Outputs:

```text
Sum, Carry
```

Circuit:

```text
┌──[ XOR ]──► Sum
A ───────────┤
             │
B ───────────┘

A ───────────┐
             ├──[ AND ]──► Carry
B ───────────┘
```

Equations:

```text
Sum   = A ⊕ B
Carry = A · B
```

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

```text
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
```

The feedback path allows the circuit to retain information about its previous state.

Examples:

```text
Sequential Circuits
       │
       ├── Flip-Flops
       ├── Registers
       ├── Counters
       └── Shift Registers
```

A basic flip-flop stores one bit.

```text
┌─────────────┐
D ────►│   D Flip-   │───► Q
CLK ──►│    Flop     │
       └─────────────┘
```

The clock controls when the stored state changes.

**Difference**

Combinational:

```text
Output = f(Current Inputs)
```

Sequential:

```text
Output = f(Current Inputs, Previous State)
```

---

## 7. Basic Processing

Basic processing in computer organization describes how information is moved and manipulated inside the CPU.

The major components involved are:

```text
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
```

**Basic processing cycle**

```text
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
```

During processing, data may move between registers, the ALU and memory through buses.

---

## 8. Register Transfer Language

Register Transfer Language, or RTL, is a symbolic notation used to describe the transfer of data between registers and the micro-operations performed on that data.

For example:

```text
R2 ← R1
```

means:

Copy the contents of R1 into R2.

The original contents of R1 remain unchanged.

Before:

```text
R1 = 1010
R2 = 0000
```

```text
        R1
         │
         │ Transfer
         ▼
        R2
```

After:

```text
R1 = 1010
R2 = 1010
```

Another example:

```text
R3 ← R1 + R2
```

means the contents of R1 and R2 are added and the result is transferred to R3.

```text
R1 ──────┐
         │
         ▼
       ┌─────┐
R2 ───►│ ALU │────► R3
       └─────┘
```

RTL can also represent conditional transfers:

```text
P: R2 ← R1
```

This means that if control condition P is true, the contents of R1 are transferred to R2.

**Common micro-operations**

Register transfer:

```text
R2 ← R1
```

Arithmetic:

```text
R3 ← R1 + R2
```

Logic:

```text
R3 ← R1 AND R2
```

Shift:

```text
R1 ← shl R1
```

---

## 9. Bus and Memory Transfers

A bus is a group of parallel communication lines used to transfer information between computer components.

```text
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
```

A system bus commonly contains:

```text
System Bus
    │
    ├── Address Bus
    ├── Data Bus
    └── Control Bus
```

**Address Bus**

Carries the address of the memory location or I/O location being accessed.

```text
CPU ───────────────► Memory
       Address
```

**Data Bus**

Carries actual data.

```text
CPU ◄──────────────► Memory
         Data
```

**Control Bus**

Carries control signals such as read and write.

```text
CPU ◄──────────────► Memory
       Control
```

**Memory Read**

```text
CPU
 │
 │ Address
 ▼
Memory
 │
 │ Data
 ▼
CPU
```

RTL representation:

```text
MAR ← Address
Read
MDR ← M[MAR]
```

Here:

```text
MAR = Memory Address Register
MDR = Memory Data Register
M[MAR] = memory contents at the address in MAR
```

**Memory Write**

```text
CPU
 │
 │ Address + Data
 ▼
Memory
```

RTL representation:

```text
MAR ← Address
MDR ← Data
Write
M[MAR] ← MDR
```

---

## 10. Bus Architecture

Bus architecture describes how different components of a computer system communicate through buses.

A simple common-bus arrangement is:

```text
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
```

A bus allows multiple components to communicate without requiring a separate physical connection between every pair.

**Three-bus concept**

Some CPU organizations use separate buses for source operands and result transfer.

```text
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
```

This can allow multiple data transfers in the same clock cycle.

---

## 11. Instruction Code

An instruction is a binary-coded command that tells the CPU what operation to perform.

An instruction generally contains an opcode and may contain information identifying operands.

```text
┌───────────────────┬──────────────────────┐
│      Opcode       │ Operand / Address    │
└───────────────────┴──────────────────────┘
```

**Opcode**

The opcode specifies the operation.

Examples:

```text
ADD
SUB
LOAD
STORE
JUMP
```

**Operand field**

The operand field identifies the data, register or memory location involved.

Example conceptual instruction:

```text
ADD R1, R2
```

can be represented internally by binary fields.

```text
Instruction
     │
     ├── Opcode → ADD
     │
     └── Operands → R1, R2
```

**Instruction processing**

```text
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
```

---

## 12. Instruction Set

An instruction set is the collection of machine-level instructions supported by a processor.

It defines the operations that the CPU can execute.

```text
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
```

Common categories include:

Data transfer instructions

```text
LOAD
STORE
MOVE
```

Arithmetic instructions

```text
ADD
SUB
MUL
DIV
INC
DEC
```

Logical instructions

```text
AND
OR
XOR
NOT
```

Control-transfer instructions

```text
JUMP
CALL
RETURN
BRANCH
```

The instruction set forms the interface between software and the processor hardware.

---

## 13. Microinstruction

A microinstruction is a low-level control instruction used to specify the micro-operations that the control unit should perform during execution of a machine instruction.

A machine instruction such as:

```text
ADD R1, R2
```

may require several internal operations.

```text
Machine Instruction
       │
       ▼
   Microinstructions
       │
       ├── Transfer operand
       ├── Perform ALU operation
       ├── Store result
       └── Update status
```

Conceptually:

```text
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
```

A microinstruction generates or specifies control signals required to perform one or more micro-operations.

**Relationship between instruction and microinstruction**

```text
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
```

For example, a simplified addition operation may involve:

```text
T1: R1 → ALU input
T2: R2 → ALU input
T3: ALU performs ADD
T4: ALU result → R1
```

These are internal micro-operations controlled by the processor's control mechanism.

---

## UNIT 1 COMPLETE FLOW

```text
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
```

# UNIT 2: BASIC ORGANIZATION — CO2

## 1. Basic Organization

Basic organization of a computer describes how the major components of a computer system are arranged and how they communicate to execute instructions.

The major components are CPU, memory, input/output units, and system buses.

```text
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
```

The CPU performs processing, memory stores instructions and data, and I/O units provide communication with external devices.

---

## 2. Instruction Cycle

The instruction cycle is the sequence of operations performed by the CPU to fetch, decode and execute an instruction.

The basic stages are:

```text
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
```

**Fetch Cycle**

During fetching, the CPU obtains the next instruction from memory.

A simplified sequence is:

```text
PC → MAR
Memory Read
Memory → MDR
MDR → IR
PC ← PC + 1
```

Where:

```text
PC = Program Counter
MAR = Memory Address Register
MDR = Memory Data Register
IR = Instruction Register
```

Diagram:

```text
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
```

**Decode**

The instruction in the IR is interpreted by the control unit.

```text
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
```

**Execute**

The CPU performs the operation specified by the instruction.

For example:

```text
R1 ← R2 + R3
```

```text
R2 ─────┐
        │
        ▼
      ┌─────┐
      │ ALU │──────► R1
      └─────┘
        ▲
        │
R3 ─────┘
```

---

## 3. Organization of Central Processing Unit

The CPU is the main processing component of a computer. It consists primarily of the ALU, control unit and registers.

```text
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
```

**ALU**

The Arithmetic Logic Unit performs arithmetic and logical operations.

```text
┌─────────────┐
A ──────────────►│             │
B ──────────────►│     ALU     │──────► Result
                 │             │
Control ────────►│             │
                 └──────┬──────┘
                        │
                        ▼
                     Flags
```

Operations include:

Arithmetic:

```text
ADD, SUB, INC, DEC
```

Logical:

```text
AND, OR, XOR, NOT
```

Comparison:

```text
Equal, Greater than, Less than
```

**Control Unit**

The control unit coordinates CPU operations.

```text
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
```

**Registers**

Registers are small, high-speed storage locations inside the CPU.

Common registers include:

```text
PC  → Program Counter
IR  → Instruction Register
MAR → Memory Address Register
MDR → Memory Data Register
ACC → Accumulator
```

---

## 4. Hardwired Control Unit

A hardwired control unit generates control signals using fixed electronic circuits such as logic gates, decoders, counters and flip-flops.

```text
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
```

The control logic is implemented directly through hardware.

**Characteristics**

```text
Fast operation
Fixed hardware logic
Difficult to modify
Suitable for simple instruction sets
Control signals are generated directly by circuits
```

---

## 5. Microprogrammed Control Unit

A microprogrammed control unit generates control signals using microinstructions stored in a control memory.

```text
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
```

The control memory contains microprograms. Each microinstruction specifies the control signals needed to perform internal CPU operations.

**Hardwired vs Microprogrammed**

| Hardwired Control | Microprogrammed Control |
| ----------------- | ----------------------- |
| Uses hardware logic | Uses control memory |
| Generally faster | Generally slower |
| Difficult to modify | Easier to modify |
| Complex to design for large instruction sets | Easier for complex instruction sets |

---

## 6. General Register Organization

Registers are organized inside the CPU so that data can be transferred efficiently between registers and the ALU.

A common arrangement uses a register file connected to buses and the ALU.

```text
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
```

The ALU receives operands from registers and sends the result back to a destination register.

Example:

```text
R1 ← R2 + R3
```

```text
R2 ─────► Bus A ──┐
                  │
                  ▼
                ┌─────┐
                │ ALU │────► Bus C ───► R1
                └─────┘
                  ▲
                  │
R3 ─────► Bus B ──┘
```

---

## 7. Stack Organization

A stack is a storage structure that follows the LIFO principle.

LIFO means:

```text
Last In → First Out
```

The two basic operations are:

```text
PUSH → Insert data
POP  → Remove data
```

Example:

```text
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
```

If C is popped:

```text
TOP
           │
           ▼
        ┌───────┐
        │   B   │
        ├───────┤
        │   A   │
        └───────┘
```

**Stack Pointer**

The Stack Pointer, or SP, contains the address of the top element of the stack.

```text
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
```

Stack organization is commonly used for function calls, return addresses, local variables and expression evaluation.

---

## 8. Addressing Modes

Addressing modes specify how the operand of an instruction is located.

Different addressing modes provide different ways to access data.

```text
Addressing Modes
                           │
       ┌───────────────────┼────────────────────┐
       ▼                   ▼                    ▼
    Immediate           Register             Direct
       │                   │                    │
       ▼                   ▼                    ▼
   Operand in          Operand in          Address in
   instruction          register          instruction
```

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

```c
MOV R1, #25
```

```text
Instruction
┌────────┬────────────┐
│ Opcode │   Data 25  │
└────────┴────────────┘
```

No separate memory lookup is required to obtain the operand.

---

**Direct Addressing**

The instruction contains the memory address of the operand.

```text
LOAD R1, 5000
```

```text
Instruction
      │
      │ Address = 5000
      ▼
   Memory[5000]
      │
      ▼
      R1
```

---

**Indirect Addressing**

The instruction specifies a location containing the actual address of the operand.

```text
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
```

Thus, an additional memory reference is required to obtain the effective address.

---

**Register Addressing**

The operand is located in a CPU register.

```text
ADD R1, R2
```

```text
R1 ──────┐
         ▼
       ┌─────┐
       │ ALU │
       └─────┘
         ▲
         │
R2 ──────┘
```

---

**Register Indirect Addressing**

A register contains the memory address of the operand.

```text
Register R1
    │
    │ Address
    ▼
  Memory
    │
    │ Data
    ▼
  Operand
```

---

**Indexed Addressing**

The effective address is obtained by adding an index register to a base address.

```text
Effective Address
        =
Base Address + Index Register
```

```text
Base Address ─────┐
                  ├──► ADD ───► Effective Address
Index Register ───┘
```

This is useful for accessing arrays.

---

**Relative Addressing**

The effective address is calculated relative to the current program counter.

```text
Effective Address
       =
PC + Displacement
```

```text
PC ─────────────┐
                ├──► ADD ───► Effective Address
Displacement ───┘
```

It is commonly used in branch instructions.

---

**Implied Addressing**

The operand is implied by the instruction itself.

For example, an instruction operating directly on an accumulator may not explicitly specify the accumulator.

```text
Instruction
     │
     ▼
Implicit Operand
     │
     ▼
Accumulator
```

---

## 9. Instruction Formats

An instruction format defines the arrangement of fields within a machine instruction.

A typical instruction contains:

```text
┌──────────────┬──────────────┬──────────────┐
│    Opcode    │ Addressing   │   Operand    │
│              │    Mode      │              │
└──────────────┴──────────────┴──────────────┘
```

The exact format depends on the processor architecture.

**Three-address instruction**

Contains three operand fields.

```text
ADD R1, R2, R3
```

Meaning:

```text
R1 ← R2 + R3
```

```text
┌────────┬────┬────┬────┐
│ Opcode │ R1 │ R2 │ R3 │
└────────┴────┴────┴────┘
```

**Two-address instruction**

```text
ADD R1, R2
```

Meaning:

```text
R1 ← R1 + R2
```

```text
┌────────┬────┬────┐
│ Opcode │ R1 │ R2 │
└────────┴────┴────┘
```

**One-address instruction**

Uses an implicit accumulator.

```text
ADD X
```

Meaning:

```text
AC ← AC + M[X]
```

```text
┌────────┬────────────┐
│ Opcode │  Address X │
└────────┴────────────┘
```

**Zero-address instruction**

Operands are implied by the stack.

```text
PUSH A
PUSH B
ADD
```

The ADD operation uses the top stack elements.

```text
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
```

---

## 10. Memory Organization

Memory organization describes how data and instructions are stored and accessed.

Memory consists of a large number of storage locations, each having a unique address.

```text
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
```

Each memory location can store a fixed number of bits.

For a memory with n address bits:

```text
Number of locations = 2ⁿ
```

For example, with 10 address bits:

```text
2¹⁰ = 1024 locations
```

---

## 11. Memory Hierarchy

Memory hierarchy organizes storage according to speed, cost and capacity.

The fastest memories are generally smaller and more expensive per bit, while slower memories provide larger storage capacity.

```text
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
```

General relationship:

Going upward:

```text
Speed ↑
Cost/bit ↑
Capacity ↓
```

Going downward:

```text
Speed ↓
Cost/bit ↓
Capacity ↑
```

The hierarchy improves system performance by keeping frequently used data in faster storage.

---

## 12. Auxiliary Memory

Auxiliary memory, also called secondary storage, provides long-term storage of programs and data.

Examples include:

```text
SSD
HDD
Optical Disk
USB Flash Drive
Memory Card
```

Basic arrangement:

```text
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
```

Characteristics:

```text
Non-volatile
Large capacity
Lower cost per bit
Slower than main memory
Used for permanent storage
```

---

## 13. Associative Memory

Associative memory is also called Content Addressable Memory (CAM).

Unlike conventional memory, which is accessed using an address, associative memory searches for data based on its content.

```text
Conventional Memory:

Address ───► Memory ───► Data

Associative Memory:

Search Key ───► Compare Contents
                     │
                     ▼
                Matching Data
```

Conceptual structure:

```text
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
```

All entries can be compared simultaneously, making associative memory useful for fast searching.

---

## 14. Cache Memory

Cache memory is a small, high-speed memory located between the CPU and main memory.

It stores frequently or recently used instructions and data.

```text
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
```

**Cache Hit**

If requested data is found in the cache:

```text
CPU
 │
 │ Request
 ▼
Cache
 │
 │ HIT
 ▼
Data → CPU
```

This is fast.

**Cache Miss**

If requested data is not found:

```text
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
```

**Cache hierarchy**

Modern systems may have multiple cache levels:

```text
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
```

Generally:

```text
L1 → Smallest and fastest
L2 → Larger and slower than L1
L3 → Larger and slower than L2
```

---

## 15. Virtual Memory

Virtual memory is a memory-management technique that allows a system to use secondary storage as an extension of main memory.

It provides each process with a large logical address space even when physical RAM is limited.

```text
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
```

Virtual memory commonly divides memory into fixed-size pages and physical memory into frames.

```text
Virtual Memory             Physical Memory

Page 0 ───────────────► Frame 3
Page 1 ───────────────► Frame 0
Page 2 ───────────────► Frame 5
Page 3 ───────────────► Disk
```

A page table keeps track of the mapping.

```text
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
```

If a required page is not present in RAM, a page fault occurs.

```text
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
```

---

## UNIT 2 COMPLETE FLOW

```text
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
```

The complete processing relationship can be represented as:

```text
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
```

# UNIT 3: I/O ORGANIZATION — CO3

## 1. I/O Organization

I/O organization describes how the CPU communicates with external devices such as keyboards, displays, printers, disks, sensors and communication devices.

The CPU generally cannot communicate directly with every peripheral. An I/O interface is used between the CPU and peripheral device.

```text
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
```

The I/O interface performs functions such as:

```text
Data buffering
Device selection
Control signal generation
Status reporting
Synchronization between CPU and peripheral
```

---

## 2. Peripheral Devices

Peripheral devices are hardware devices connected to a computer for input, output, storage or communication.

They can broadly be classified as:

```text
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
```

**Input Devices**

Input devices send data to the computer.

Examples:

```text
Keyboard → Characters
Mouse → Position and commands
Scanner → Images/documents
Microphone → Audio
Sensor → Physical measurements
```

**Output Devices**

Output devices receive processed information from the computer.

Examples:

```text
Monitor → Visual output
Printer → Hard copy
Speaker → Audio
Projector → Large-screen display
```

**Storage Devices**

Storage devices retain data for later use.

```text
HDD
SSD
USB Flash Drive
Memory Card
Optical Disk
```

---

## 3. I/O Interface

An I/O interface provides communication between the CPU/system bus and a peripheral device.

A typical interface contains:

```text
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
```

**Data Register**

Stores data being transferred between CPU and peripheral.

**Status Register**

Contains information about the current condition of the device.

For example:

```text
Ready = 1
Busy  = 1
Error = 1
```

**Control Register**

Contains commands or control information sent by the CPU.

For example:

```text
Start
Stop
Reset
Enable
```

The interface therefore acts as a bridge:

```text
CPU ⇄ System Bus ⇄ I/O Interface ⇄ Peripheral
```

---

## 4. Asynchronous Data Transfer

Asynchronous data transfer occurs when two devices exchange data without sharing a common clock.

This is necessary when the CPU and peripheral operate at different speeds.

```text
CPU                         Peripheral
 │                              │
 │ Different operating speeds   │
 │                              │
 └──────────────┬───────────────┘
                │
         Asynchronous
        Data Transfer
```

The sender and receiver coordinate the transfer using control signals.

Two important techniques are:

```text
Asynchronous Transfer
        │
        ├── Strobe Control
        │
        └── Handshaking
```

---

## 5. Strobe Control

In strobe control, a single control signal called a strobe is used to indicate when data is available or should be accepted.

There are two forms:

```text
Strobe Control
      │
 ┌────┴─────┐
 ▼          ▼
Source     Destination
Initiated   Initiated
```

**Source-Initiated Strobe**

The source generates the strobe signal after placing data on the bus.

```text
Source                     Destination
  │                             │
  │ Put data on bus             │
  ├────────────────────────────►│
  │                             │
  │ STROBE                      │
  ├────────────────────────────►│
  │                             │
  │                     Accept data
```

Sequence:

1. Source places data on bus.
2. Source activates STROBE.
3. Destination detects STROBE.
4. Destination reads the data.
5. Source removes STROBE and data.

**Destination-Initiated Strobe**

The destination generates the strobe when it is ready to receive data.

```text
Source                     Destination
  │                             │
  │                             │ STROBE
  │                     ◄───────┤
  │                             │
  │ Data                         │
  ├────────────────────────────►│
  │                             │
```

The major limitation of strobe control is that it does not provide confirmation that the receiving device actually accepted the data.

---

## 6. Handshaking

Handshaking is an asynchronous data-transfer method that uses two control signals to coordinate sender and receiver.

The two signals are commonly:

```text
Request / Data Valid
Acknowledge
```

Basic arrangement:

```text
Source                         Destination
          │                                │
          │──── Data ────────────────────►│
          │                                │
          │──── Request ─────────────────►│
          │                                │
          │◄─── Acknowledge ──────────────│
          │                                │
```

**Handshaking sequence**

```text
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
```

Unlike simple strobe control, handshaking allows both devices to confirm that the transfer has occurred.

---

## 7. Modes of Data Transfer

Data transfer between CPU and I/O devices can be organized into different modes.

```text
Data Transfer
                      │
          ┌───────────┼────────────┐
          ▼           ▼            ▼
      Programmed   Interrupt     DMA
         I/O       Driven I/O
                      │
                      ▼
                Priority Interrupt
```

The syllabus specifically covers:

1. Programmed I/O
2. Interrupt-driven I/O
3. Priority interrupt

---

## 8. Programmed I/O

In programmed I/O, the CPU continuously checks the status of the I/O device and performs the transfer itself.

The CPU remains involved throughout the operation.

```text
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
```

**Working**

1. CPU sends command to I/O device.
2. CPU reads device status.
3. If device is busy, CPU waits/checks again.
4. When device becomes ready, CPU transfers data.
5. CPU continues program execution.

Example:

```text
while device is not ready
       check status

transfer data
```

**Disadvantage**

The CPU wastes processing time repeatedly checking the device.

---

## 9. Interrupt-Driven I/O

In interrupt-driven I/O, the CPU does not continuously check the device.

Instead, the peripheral sends an interrupt signal when it needs CPU attention or becomes ready.

```text
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
```

**Working**

```text
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
```

ISR means Interrupt Service Routine.

**Advantage**

The CPU can perform useful work instead of continuously polling the device.

---

## 10. Priority Interrupt

When multiple I/O devices request service simultaneously, the CPU must determine which interrupt should be serviced first.

This is called priority interrupt handling.

```text
Device 1 ──┐
 Device 2 ──┤
 Device 3 ──┼──► Priority Resolver ───► CPU
 Device 4 ──┘
```

For example:

```text
Priority

Highest
  │
  ├── Device 1
  ├── Device 2
  ├── Device 3
  └── Device 4
  │
Lowest
```

If Device 1 and Device 3 request interrupts simultaneously, the priority mechanism selects Device 1 if it has the higher priority.

**Daisy-Chain Priority**

A common hardware method is daisy chaining.

```text
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
```

The device nearest the CPU receives the highest priority.

---

## 11. Programming

Programming in this unit includes assembly language programming for Intel 8085/8086 processors.

Assembly language uses symbolic instruction names called mnemonics.

Examples:

```text
MOV
MVI
ADD
SUB
INR
DCR
JMP
CALL
RET
```

The assembly program is converted into machine code by an assembler.

```text
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
```

---

## 12. Intel 8085 Microprocessor

The 8085 is an 8-bit microprocessor with an 8-bit data bus and a 16-bit address bus.

```text
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
```

Important registers include:

```text
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
```

---

## 13. 8085 Register Organization

```text
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
```

The general-purpose registers can be combined into register pairs:

```text
BC
DE
HL
```

The HL pair is frequently used to hold a memory address.

---

## 14. 8085 Instruction Groups

8085 instructions can be classified into:

```text
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
```

Other groups include:

Branch Instructions

```text
JMP
JZ
JNZ
JC
JNC
CALL
RET
```

Machine Control

```text
NOP
HLT
EI
DI
```

---

## 15. 8085 Data Transfer Instructions

Data transfer instructions move data from one location to another without changing the data itself.

Important instructions include:

```text
MOV
MVI
LXI
LDA
STA
LHLD
SHLD
```

---

**MOV Instruction**

Format:

```text
MOV destination, source
```

Example:

```text
MOV A, B
```

Meaning:

```text
A ← B
```

Diagram:

```text
B Register
    │
    │ Data
    ▼
Accumulator
```

The contents of B remain unchanged.

---

**MVI Instruction**

MVI means Move Immediate.

Format:

```text
MVI register, data
```

Example:

```text
MVI A, 25H
```

Meaning:

```text
A ← 25H
```

```text
Immediate Data
     25H
      │
      ▼
┌─────────────┐
│ Accumulator │
└─────────────┘
```

---

**LXI Instruction**

LXI loads a 16-bit immediate value into a register pair.

Example:

```text
LXI H, 2050H
```

Meaning:

```text
HL ← 2050H
```

```text
2050H
       /    \
     20H    50H
      │      │
      ▼      ▼
      H      L
```

---

**LDA Instruction**

LDA means Load Accumulator Directly.

Example:

```text
LDA 2050H
```

The contents of memory location 2050H are copied into the accumulator.

```text
Memory
2050H
  │
  │ Data
  ▼
┌─────────────┐
│ Accumulator │
└─────────────┘
```

---

**STA Instruction**

STA means Store Accumulator Directly.

Example:

```text
STA 2050H
```

The accumulator contents are stored at memory location 2050H.

```text
┌─────────────┐
│ Accumulator │
└──────┬──────┘
       │ Data
       ▼
Memory 2050H
```

---

**LHLD Instruction**

LHLD loads the contents of two consecutive memory locations into the H and L registers.

```text
LHLD 2050H
```

Conceptually:

```text
Memory 2050H ───► L
Memory 2051H ───► H
```

---

**SHLD Instruction**

SHLD stores the contents of H and L into two consecutive memory locations.

```text
SHLD 2050H
```

Conceptually:

```text
L ───► Memory 2050H
H ───► Memory 2051H
```

---

## 16. 8085 Data Transfer Programming Techniques

**Example: Transfer Data from One Memory Location to Another**

Suppose:

```text
Memory[2050H] → Memory[3050H]
```

Program:

```text
LDA 2050H
STA 3050H
HLT
```

Execution:

```text
Memory 2050H
     │
     ▼
     A
     │
     ▼
Memory 3050H
```

---

**Example: Transfer a Block of Data**

Suppose a block starts at 2050H and must be copied to 3050H.

A register pair can be used for the source address and another for the destination.

Conceptual process:

```text
Source                         Destination
2050H ──────────────────────► 3050H
2051H ──────────────────────► 3051H
2052H ──────────────────────► 3052H
2053H ──────────────────────► 3053H
```

Typical 8085 technique:

```text
LXI H, 2050H
LXI D, 3050H
```

Here:

```text
HL → Source
DE → Destination
```

The data can then be transferred repeatedly using memory access and register-pair increment operations.

---

## 17. 8086 Microprocessor

The 8086 is a 16-bit microprocessor with a 16-bit data bus and a 20-bit address bus.

It can address:

```text
2²⁰ = 1,048,576 bytes
```

or:

```text
1 MB
```

Its architecture is divided into two major units:

```text
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
```

---

## 18. Bus Interface Unit

The BIU handles communication with memory and I/O.

It contains:

```text
CS
DS
SS
ES
IP
6-byte instruction queue
```

Conceptual structure:

```text
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
```

---

## 19. Execution Unit

The Execution Unit fetches instructions from the instruction queue, decodes them and executes them.

```text
Execution Unit
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
       ALU       Registers       Flags
        │            │
        └────────────┼
                     ▼
                 Execution
```

General-purpose registers include:

```text
AX
BX
CX
DX
```

Pointer/index registers include:

```text
SP
BP
SI
DI
```

---

## 20. 8086 Data Transfer Instructions

Important 8086 data-transfer instructions include:

```text
MOV
PUSH
POP
XCHG
IN
OUT
LEA
LDS
LES
```

**MOV**

Copies data from source to destination.

```text
MOV AX, BX
```

Meaning:

```text
AX ← BX
```

```text
BX ───────► AX
```

---

**PUSH**

Places data onto the stack.

```text
PUSH AX
```

```text
Stack
         │
         ▼
      ┌──────┐
      │  AX  │ ← New top
      ├──────┤
      │ ...  │
      └──────┘
```

---

**POP**

Removes the top value from the stack and places it into a destination.

```text
POP BX
```

```text
Stack
        │
        ▼
      ┌──────┐
      │ Data │
      └──┬───┘
         │
         ▼
         BX
```

---

**XCHG**

Exchanges the contents of two operands.

```text
XCHG AX, BX
```

Before:

```text
AX = 1234H
BX = 5678H
```

After:

```text
AX = 5678H
BX = 1234H
```

```text
AX ◄────────► BX
```

---

## 21. Assembly Language Program Structure

A basic assembly language program can be represented as:

```text
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
```

An assembly statement commonly contains:

```text
LABEL   OPCODE   OPERAND   ; COMMENT
```

Example:

```text
START:  MOV A,B     ; Copy B into A
```

---

## 22. Conditional Call Instructions

A CALL instruction transfers control to a subroutine.

A conditional CALL transfers control only when a specified condition is satisfied.

8085 conditional CALL instructions include:

```text
CZ   → Call if Zero
CNZ  → Call if Not Zero
CC   → Call if Carry
CNC  → Call if Not Carry
CP   → Call if Positive
CM   → Call if Minus
CPE  → Call if Parity Even
CPO  → Call if Parity Odd
```

Example:

```text
CZ 2050H
```

Meaning:

```text
If Zero Flag = 1
       │
       ▼
CALL 2050H
```

```text
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
```

---

## 23. Conditional Return Instructions

A conditional return returns from a subroutine only when a specified condition is satisfied.

8085 conditional return instructions include:

```text
RZ   → Return if Zero
RNZ  → Return if Not Zero
RC   → Return if Carry
RNC  → Return if Not Carry
RP   → Return if Positive
RM   → Return if Minus
RPE  → Return if Parity Even
RPO  → Return if Parity Odd
```

Example:

```text
RZ
```

means:

```text
If Zero Flag = 1
       │
       ▼
Return from subroutine
```

Otherwise, execution continues with the next instruction in the subroutine.

---

## 24. CALL and RET Operation

When a CALL is executed, the return address is saved so that the processor can return after the subroutine finishes.

```text
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
```

The stack is used to preserve the return address.

Before CALL:

```text
        Stack
          │
          ▼
       ┌──────┐
       │ ...  │
       └──────┘
```

After CALL:

```text
        Stack
          │
          ▼
       ┌─────────────┐
       │Return Addr. │
       ├─────────────┤
       │     ...     │
       └─────────────┘
```

RET retrieves the saved return address and transfers execution back to the calling program.

---

## 25. Conditional Branching

Conditional branch instructions alter program execution based on flag conditions.

Examples:

```text
JZ   → Jump if Zero
JNZ  → Jump if Not Zero
JC   → Jump if Carry
JNC  → Jump if Not Carry
JP   → Jump if Positive
JM   → Jump if Minus
JPE  → Jump if Parity Even
JPO  → Jump if Parity Odd
```

Example:

```text
MVI A, 00H
CPI 00H
JZ  TARGET
```

Conceptual flow:

```text
Compare
                │
                ▼
           Zero Flag = 1?
             ┌───┴───┐
            YES      NO
             │        │
             ▼        ▼
          TARGET    Next
```

---

## 26. 8085 Flags

The 8085 contains five major condition flags.

```text
┌─────┬─────┬─────┬─────┬─────┐
│  S  │  Z  │  AC │  P  │  CY │
└─────┴─────┴─────┴─────┴─────┘
```

**Sign Flag (S)**

Indicates the sign of the result.

```text
S = 1 → Negative
S = 0 → Positive
```

**Zero Flag (Z)**

```text
Z = 1 → Result is zero
Z = 0 → Result is non-zero
```

**Auxiliary Carry (AC)**

Indicates carry from bit 3 to bit 4 during arithmetic operations.

**Parity Flag (P)**

```text
P = 1 → Even number of 1s
P = 0 → Odd number of 1s
```

**Carry Flag (CY)**

Indicates carry out of the most significant bit during addition or borrow during subtraction.

---

## 27. Complete I/O Data Transfer Flow

```text
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
```

---

## UNIT 3 COMPLETE FLOW

```text
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
```

# UNIT 4: PARALLEL COMPUTING — CO4

## 1. Introduction to Parallel Computing

Parallel computing is a computing technique in which multiple operations are performed simultaneously rather than executing every operation sequentially.

In conventional sequential processing, one operation is completed before the next operation begins.

**Sequential Processing**

```text
Task 1 ───► Task 2 ───► Task 3 ───► Task 4
```

In parallel processing, independent operations can be performed at the same time.

**Parallel Processing**

```text
Task 1 ───────────────►
Task 2 ───────────────►
Task 3 ───────────────►
Task 4 ───────────────►
        Same Time
```

The primary objective is to reduce execution time and increase system throughput.

```text
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
```

Parallelism can exist at different levels:

```text
Parallelism
    │
    ├── Bit-level parallelism
    ├── Instruction-level parallelism
    ├── Data-level parallelism
    └── Task-level parallelism
```

**Advantages**

```text
Reduces execution time.
Increases throughput.
Allows large problems to be divided into smaller tasks.
Makes better use of available hardware.
Supports computation-intensive applications.
Can improve scalability by adding processing resources.
```

---

## 2. Parallelism in Uniprocessor Systems

Parallelism does not necessarily require multiple processors. A single processor can exploit parallelism by overlapping or simultaneously performing different internal operations.

A uniprocessor may contain multiple functional units, registers, pipelines and other hardware that allow several operations to be in different stages at the same time.

```text
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
```

For example, while one instruction is being executed by the ALU, another instruction can be fetched from memory.

```text
Time ─────────────────────────────────────►

Instruction 1:  FETCH ──► DECODE ──► EXECUTE
Instruction 2:             FETCH ──► DECODE ──► EXECUTE
Instruction 3:                        FETCH ──► DECODE
```

This is a form of instruction-level parallelism.

**Types of parallelism in a uniprocessor**

```text
Uniprocessor Parallelism
                         │
            ┌────────────┼────────────┐
            ▼            ▼            ▼
       Pipelining    Multiple       Superscalar
                     Functional
                       Units
```

**Pipelining**

Different instructions are processed in different stages simultaneously.

```text
I1: F ─ D ─ E ─ W
I2:     F ─ D ─ E ─ W
I3:         F ─ D ─ E ─ W
```

**Multiple Functional Units**

A processor may contain separate units for different operations.

```text
Instruction Stream
                      │
          ┌───────────┼────────────┐
          ▼           ▼            ▼
        Integer       FP        Load/Store
          ALU         Unit          Unit
```

Independent instructions can therefore use different functional units concurrently.

---

## 3. Parallel Computer Structures

Parallel computers can be constructed using multiple processing elements that cooperate to execute a program.

A basic parallel computer consists of:

```text
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
```

The main components are:

1. Processing elements
2. Memory
3. Interconnection network
4. Input/output system
5. Control mechanism

---

### 3.1 Multiple Processor System

A multiprocessor system contains more than one processor.

```text
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
```

Processors may share memory or may have their own local memory.

---

## 4. Shared-Memory Parallel Structure

In a shared-memory system, multiple processors communicate through a common memory.

```text
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
```

All processors can access the shared memory.

**Advantages**

```text
Easy communication between processors.
Shared data can be accessed directly.
Convenient for many parallel applications.
```

**Limitation**

Multiple processors may compete for access to memory.

```text
P1 ──┐
P2 ──┼──► Shared Memory
P3 ──┘
       │
       ▼
   Memory Contention
```

---

## 5. Distributed-Memory Parallel Structure

In a distributed-memory system, each processor has its own local memory.

Processors communicate by exchanging messages.

```text
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
```

Communication takes place through an interconnection network.

```text
Processor 1
    │
    │ Message
    ▼
Network
    │
    ▼
Processor 2
```

Distributed-memory systems are useful for large-scale computing because additional processing nodes can be added.

---

## 6. Architectural Classification Schemes

Parallel computer architectures are commonly classified using Flynn's classification.

It classifies systems according to the number of instruction streams and data streams.

```text
Flynn's Classification
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
        SISD              SIMD              MIMD
          │                 │                 │
          │                 │                 │
     Single Instruction  Single Instruction  Multiple Instruction
     Single Data         Multiple Data       Multiple Data
```

The four categories are:

1. SISD
2. SIMD
3. MISD
4. MIMD

---

## 7. SISD

SISD means Single Instruction, Single Data.

It represents conventional sequential processing where one processor executes one instruction stream on one data stream.

```text
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
```

Example:

```text
A = 5
B = 10

C = A + B
```

One processor executes the instruction on the data.

```text
Instruction Stream
       │
       ▼
      CPU
       │
Data Stream
       │
       ▼
    Result
```

Traditional single-core sequential computers are examples of the SISD model.

---

## 8. SIMD

SIMD means Single Instruction, Multiple Data.

A single instruction is simultaneously applied to multiple data elements.

```text
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
```

Example:

```text
A = [1, 2, 3, 4]
B = [5, 6, 7, 8]

A + B
```

The same addition operation can be applied simultaneously:

```text
1 + 5 = 6
2 + 6 = 8
3 + 7 = 10
4 + 8 = 12
```

```text
ADD instruction
              │
     ┌────────┼────────┐
     ▼        ▼        ▼        ▼
   1 + 5    2 + 6    3 + 7    4 + 8
     │        │        │        │
     ▼        ▼        ▼        ▼
     6        8        10       12
```

SIMD is useful in image processing, graphics, scientific calculations and vector operations.

---

## 9. MISD

MISD means Multiple Instruction, Single Data.

Multiple processing units perform different instructions on the same data stream.

```text
Same Data
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      Instruction  Instruction  Instruction
          1            2            3
          │            │            │
          ▼            ▼            ▼
         PE1          PE2          PE3
```

MISD is uncommon in general-purpose computer systems.

It can be useful in specialized systems where the same input is processed through multiple different operations.

---

## 10. MIMD

MIMD means Multiple Instruction, Multiple Data.

Multiple processors execute different instructions on different data sets.

```text
Instruction 1 ──► PE1 ──► Data 1
Instruction 2 ──► PE2 ──► Data 2
Instruction 3 ──► PE3 ──► Data 3
Instruction 4 ──► PE4 ──► Data 4
```

```text
┌───────┐      ┌───────┐
I1 ──►│  PE1  │◄────►│Data 1 │
      └───────┘      └───────┘

      ┌───────┐      ┌───────┐
I2 ──►│  PE2  │◄────►│Data 2 │
      └───────┘      └───────┘

      ┌───────┐      ┌───────┐
I3 ──►│  PE3  │◄────►│Data 3 │
      └───────┘      └───────┘
```

Modern multicore processors and multiprocessor systems commonly follow the MIMD model.

---

## 11. Flynn's Classification Summary

| | Single Data | Multiple Data |
| - | ----------- | ------------- |
| Single Instr. | SISD | SIMD |
| Multi. Instr. | MISD | MIMD |

```text
SISD → 1 Instruction + 1 Data
SIMD → 1 Instruction + Multiple Data
MISD → Multiple Instructions + 1 Data
MIMD → Multiple Instructions + Multiple Data
```

---

## 12. Parallel Processing Applications

Parallel processing is useful when a problem contains many independent calculations or can be divided into smaller tasks.

Major applications include:

```text
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
```

Other applications include:

```text
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
```

For example, image processing can divide an image into multiple regions.

```text
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
```

Each processing element can work on a different region simultaneously.

---

## 13. Pipelining Processing

Pipelining is a technique in which a computation is divided into multiple stages, allowing different operations to be performed simultaneously in different stages.

It is similar to an industrial assembly line.

Without pipelining:

```text
Task 1 → Complete
Task 2 → Complete
Task 3 → Complete
Task 4 → Complete
```

With pipelining:

```text
Stage 1 → Stage 2 → Stage 3 → Stage 4
```

Different tasks occupy different stages at the same time.

```text
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
```

---

## 14. Overlapped Parallelism

Overlapped parallelism means that different operations are performed at the same time because they occupy different stages of a pipeline.

Suppose a pipeline contains four stages:

```text
S1 = Fetch
S2 = Decode
S3 = Execute
S4 = Write
```

For four instructions:

```text
Time →     1    2    3    4    5    6    7

I1        F    D    E    W
I2             F    D    E    W
I3                  F    D    E    W
I4                       F    D    E    W
```

At time 4:

```text
I1 → Write
I2 → Execute
I3 → Decode
I4 → Fetch
```

All four stages are being used simultaneously.

```text
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
```

This overlap improves throughput.

---

## 15. Instruction Pipeline

An instruction pipeline divides instruction processing into stages.

A common five-stage pipeline is:

```text
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
```

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

---

## 16. Instruction Pipeline Timing

Consider four instructions:

```text
I1, I2, I3, I4
```

With a five-stage pipeline:

```text
1    2    3    4    5    6    7    8
I1        IF   ID   EX   MEM  WB
I2             IF   ID   EX   MEM  WB
I3                  IF   ID   EX   MEM  WB
I4                       IF   ID   EX   MEM  WB
```

Without pipelining:

```text
1    2    3    4    5    6    7    8 ...
I1        IF   ID   EX   MEM  WB
I2                            IF   ID   EX   MEM  WB
I3                                                  ...
```

The pipeline does not necessarily reduce the time required for one individual instruction. Its main advantage is increasing the number of instructions completed per unit time.

---

## 17. Pipeline Speedup

Suppose:

```text
Number of pipeline stages = k
Number of instructions = n
Each stage takes one clock cycle.
```

Without pipelining:

```text
Time = n × k cycles
```

With ideal pipelining:

```text
Time = k + n - 1 cycles
```

Therefore:

```text
Speedup =
(n × k)
────────────
(k + n - 1)
```

For a large number of instructions:

```text
Speedup ≈ k
```

Thus, a 5-stage ideal pipeline can theoretically approach a speedup of 5 for a sufficiently large instruction stream, although real processors experience stalls, hazards and other overheads.

---

## 18. Pipeline Hazards

A pipeline hazard is a condition that prevents the next instruction from executing in its intended pipeline stage.

Major types are:

```text
Pipeline Hazards
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      Structural     Data        Control
       Hazard       Hazard        Hazard
```

**Structural Hazard**

Occurs when two operations require the same hardware resource simultaneously.

```text
I1 ─────► Memory ◄───── I2
            ▲
            │
       Resource Conflict
```

---

**Data Hazard**

Occurs when one instruction depends on the result of an earlier instruction.

```text
I1: R1 ← R2 + R3
I2: R4 ← R1 + R5
             ▲
             │
       Depends on I1
```

The second instruction needs the result produced by the first.

---

**Control Hazard**

Occurs mainly due to branch or jump instructions.

```text
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
```

The processor may not initially know which instruction should be fetched next.

---

## 19. Arithmetic Pipeline

An arithmetic pipeline divides an arithmetic computation into multiple stages.

It is particularly useful for complex operations involving several sequential arithmetic steps.

For example, consider:

```text
X = (A + B) × (C + D)
```

The computation can be divided into stages:

Stage 1:

```text
A + B
```

Stage 2:

```text
C + D
```

Stage 3:

```text
Multiply the two results
```

Conceptually:

```text
A ──┐
     ├──► ADD ──┐
 B ──┘          │
                ├──► MULTIPLY ──► Result
 C ──┐          │
     ├──► ADD ──┘
 D ──┘
```

For floating-point arithmetic, an arithmetic pipeline may contain stages such as:

```text
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
```

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

```text
S1 → S2 → S3 → S4
```

Four jobs are processed as follows:

```text
Time       1    2    3    4    5    6    7

Job 1      S1   S2   S3   S4
Job 2           S1   S2   S3   S4
Job 3                S1   S2   S3   S4
Job 4                     S1   S2   S3   S4
```

At time 4, all four pipeline stages are active:

```text
S1 → Job 4
S2 → Job 3
S3 → Job 2
S4 → Job 1
```

```text
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
```

This is the fundamental idea of overlapped parallelism.

---

## 22. Parallel Computing and Pipelining Relationship

Parallel computing and pipelining both exploit concurrency, but they do so differently.

**Parallel Processing**

```text
Parallel Processing
        │
        ├── Multiple processing elements
        │
        └── Multiple operations can execute simultaneously
```

**Pipelining**

```text
Pipelining
        │
        ├── One operation divided into stages
        │
        └── Different operations occupy different stages
```

Example:

Parallel Processing:

```text
Task A ───────────────► PE1
Task B ───────────────► PE2
Task C ───────────────► PE3
```

Pipelining:

```text
Task A → Stage 1 → Stage 2 → Stage 3
Task B       → Stage 1 → Stage 2 → Stage 3
Task C              → Stage 1 → Stage 2 → Stage 3
```

---

## UNIT 4 COMPLETE FLOW

```text
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
```

# UNIT 5: MULTIPROCESSOR — CO5

## 1. Multiprocessor

A multiprocessor system contains two or more processors that work together within a single computer system. The processors may share memory, I/O devices and other system resources.

```text
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
```

The main objectives are:

```text
Higher processing speed
Increased throughput
Better resource utilization
Improved reliability
Execution of parallel applications
```

A multiprocessor system can divide a large problem into smaller tasks.

```text
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
```

---

## 2. Characteristics of Multiprocessors

Important characteristics include:

**Multiple CPUs**

The system contains two or more processing units.

```text
P1 ──┐
P2 ──┼──► System
P3 ──┤
P4 ──┘
```

**Shared Resources**

Processors may share memory, I/O devices and communication networks.

**Parallel Execution**

Independent tasks can execute simultaneously.

**Interprocessor Communication**

Processors need mechanisms to exchange information and coordinate their operations.

**Synchronization**

Processors must coordinate access to shared resources.

```text
P1 ──► Shared Resource ◄── P2
          │
          ▼
     Synchronization
```

**Increased Throughput**

More than one processor can execute tasks during the same period.

---

## 3. Multiprocessor System Organization

A basic multiprocessor system contains processors, memory, I/O devices and an interconnection structure.

```text
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
```

The interconnection network provides communication between processors and memory.

---

## 4. Types of Multiprocessor Systems

Multiprocessor systems can be classified according to how processors access memory and how tightly they are coupled.

```text
Multiprocessors
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
      Shared Memory           Distributed Memory
          │
     ┌────┴─────┐
     ▼          ▼
    UMA        NUMA
```

Two important shared-memory organizations are:

```text
UMA
NUMA
```

---

## 5. UMA

UMA means Uniform Memory Access.

In a UMA system, all processors have approximately equal access time to the shared memory.

```text
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
```

The distance from each processor to the shared memory is effectively the same.

```text
P1 ── same access time ──► Memory
P2 ── same access time ──► Memory
P3 ── same access time ──► Memory
P4 ── same access time ──► Memory
```

**Advantages**

```text
Simple memory model
Easy programming model
Uniform memory access time
Suitable for smaller multiprocessor systems
```

**Limitation**

As the number of processors increases, contention for shared memory can become significant.

```text
P1 ──┐
P2 ──┤
P3 ──┼──► Shared Memory
P4 ──┘
        │
        ▼
   Memory Contention
```

---

## 6. NUMA

NUMA means Non-Uniform Memory Access.

In NUMA systems, processors have different access times depending on whether they access local or remote memory.

```text
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
```

Local memory access is generally faster:

```text
P1 ─────► Local Memory
 │          FAST
 │
 └────────► Remote Memory
             SLOWER
```

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

```text
Interconnection Structures
          │
     ┌────┼─────┬─────────┐
     ▼    ▼     ▼         ▼
    Bus  Crossbar Multistage Hypercube
```

The interconnection determines how processors communicate with memory and other processors.

---

## 9. Bus Interconnection

A bus is a shared communication path connecting processors, memory and I/O.

```text
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
```

Only one or a limited number of transfers can use the shared bus at a time.

**Advantages**

```text
Simple design
Low cost
Easy to implement
```

**Disadvantages**

```text
Shared resource creates contention
Performance decreases as processors increase
Limited scalability
```

---

## 10. Crossbar Switch

A crossbar provides multiple possible connections between processors and memory modules.

```text
Memory
        M1     M2     M3
        │      │      │
        │      │      │
P1 ─────┼──────┼──────┼
        │ ╲    │      │
P2 ─────┼──╲───┼──────┼
        │   ╲  │      │
P3 ─────┼────╲─┼──────┼
```

Conceptually, a crossbar contains switching points.

```text
M1   M2   M3
              │    │    │
          ┌───┼────┼────┼───┐
 P1 ──────┼───●────●────●───┤
 P2 ──────┼───●────●────●───┤
 P3 ──────┼───●────●────●───┤
          └──────────────────┘
```

Multiple independent processor-memory connections can occur simultaneously when different paths are selected.

**Advantage**

```text
High communication bandwidth.
```

**Disadvantage**

```text
Hardware complexity and cost increase rapidly as the number of processors and memory modules increases.
```

---

## 11. Multistage Interconnection Network

A multistage interconnection network uses multiple stages of switching elements to connect processors and memory.

```text
Processors       Stage 1       Stage 2       Memory
   P1 ───────────┌─────┐───────┌─────┐──────► M1
   P2 ───────────┤ SW  ├───────┤ SW  ├──────► M2
   P3 ───────────┤     ├───────┤     ├──────► M3
   P4 ───────────└─────┘───────└─────┘──────► M4
```

Each switching element controls how signals are routed.

The main idea is:

```text
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
```

Multistage networks provide a compromise between the simplicity of buses and the high connectivity of crossbar systems.

---

## 12. Hypercube Interconnection

A hypercube is an interconnection structure in which processing elements are connected according to the dimensions of a binary cube.

A 3-dimensional hypercube can be represented as:

```text
000────────001
            /  │         /│
          010────────011  │
           │   │        │ │
           │  100───────│101
           │ /          │/
          110──────────111
```

Each node is connected to nodes differing in exactly one binary bit.

For a n-dimensional hypercube:

```text
Number of nodes = 2ⁿ
```

Examples:

```text
1-D → 2 nodes
2-D → 4 nodes
3-D → 8 nodes
4-D → 16 nodes
```

The structure provides multiple communication paths between processing elements.

---

## 13. Interprocessor Communication

Interprocessor communication is the exchange of data and control information between processors.

```text
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
```

Communication may involve:

```text
Data exchange
Status information
Synchronization
Task coordination
```

Two processors may communicate using shared memory:

```text
P1 ─────► Shared Memory ◄───── P2
```

or message passing:

```text
P1 ─────► Message ─────► P2
```

---

## 14. Interprocessor Synchronization

Synchronization ensures that processors coordinate their operations correctly.

It is especially important when multiple processors access shared resources.

```text
P1 ─────┐
        │
        ▼
   Shared Data
        ▲
        │
P2 ─────┘
```

Without synchronization, simultaneous updates can produce incorrect results.

Example:

```text
Initial X = 10

P1 reads X = 10
P2 reads X = 10

P1 writes X = 11
P2 writes X = 11

Expected X = 12
Actual X   = 11
```

This is a race condition.

```text
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
```

Synchronization mechanisms prevent such conflicts.

---

## 15. Mutual Exclusion

Mutual exclusion ensures that only one processor accesses a critical section at a time.

```text
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
```

A critical section is a portion of a program where shared data or resources are accessed.

Conceptually:

```text
P1: ──► Enter ──► Critical Section ──► Exit
P2: ──► Wait  ───────────────────────► Enter
```

---

## 16. Synchronization Mechanisms

Common synchronization mechanisms include:

```text
Synchronization
      │
 ┌────┼─────────┐
 ▼    ▼         ▼
Lock  Semaphore  Monitor
```

**Lock**

A lock allows one processor/thread to enter a protected section.

```text
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
```

**Semaphore**

A semaphore is a synchronization variable used to control access to shared resources.

Basic operations are:

```text
WAIT
SIGNAL
```

Conceptually:

```text
WAIT(S)
   │
   ├── S available → Continue
   │
   └── S unavailable → Wait


SIGNAL(S)
   │
   ▼
Release / Notify
```

---

## 17. Cache Coherence

In multiprocessor systems, each processor may have its own cache.

The same memory location may therefore exist in multiple caches.

```text
Main Memory
               │
      ┌────────┼────────┐
      ▼        ▼        ▼
    Cache1   Cache2   Cache3
      │        │        │
      ▼        ▼        ▼
     P1       P2       P3
```

Suppose all caches contain:

```text
X = 10
```

If P1 changes X:

```text
P1:
X = 20
```

other caches may still contain:

```text
Cache1 = 20
Cache2 = 10
Cache3 = 10
```

This creates an inconsistency.

```text
X = 20
         │
         ▼
      Cache 1

Cache 2 → X = 10
Cache 3 → X = 10
```

Cache coherence ensures that processors see a consistent value for shared memory locations.

---

## 18. Cache Coherence Problem

The problem can be illustrated as:

```text
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
```

A coherence protocol must ensure that stale copies are invalidated or updated appropriately.

---

## 19. Cache Coherence Protocols

Two basic approaches are:

```text
Cache Coherence
      │
      ├── Write Invalidate
      │
      └── Write Update
```

**Write Invalidate**

When one processor writes to a cache line, other copies are invalidated.

```text
P1 Cache → WRITE X
              │
              ▼
        Invalidate X
        ┌─────┴─────┐
        ▼           ▼
     Cache P2    Cache P3
     Invalid     Invalid
```

**Write Update**

When one processor modifies a value, the updated value is propagated to other caches.

```text
P1 Cache → WRITE X=20
              │
        ┌─────┼─────┐
        ▼     ▼     ▼
     Cache P2 Cache P3
       X=20    X=20
```

---

## 20. Multiprocessor Operating System

An operating system for a multiprocessor system must manage multiple CPUs and distribute work efficiently.

Major responsibilities include:

```text
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
```

Important functions:

```text
Process scheduling
Load balancing
Processor allocation
Memory management
Synchronization
Interprocessor communication
Interrupt management
```

---

## 21. Multiprocessor Scheduling

The operating system assigns processes or threads to available processors.

```text
Ready Queue
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
       P1        P2        P3
        │         │         │
        ▼         ▼         ▼
       CPU1      CPU2      CPU3
```

The objective is to keep processors efficiently utilized.

---

## 22. Load Balancing

Load balancing distributes work among processors so that one processor does not remain overloaded while others are idle.

Poor distribution:

```text
P1 █████████████████
P2 ██
P3 █
P4 █
```

Balanced distribution:

```text
P1 █████
P2 █████
P3 █████
P4 █████
```

Conceptually:

```text
Tasks
                    │
                    ▼
              Load Balancer
             ┌──────┼──────┐
             ▼      ▼      ▼
            CPU1   CPU2   CPU3
```

Load balancing improves overall processor utilization.

---

## 23. Parallel Processing in Multiprocessors

A problem can be divided into independent tasks.

Example:

```text
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
```

If tasks are independent, they can execute simultaneously.

This reduces the total elapsed time compared with strictly sequential execution.

---

## 24. Multiprocessor Performance

Important performance measures include:

**Speedup**

Speedup measures how much faster a parallel system executes a task compared with a sequential system.

```text
Speedup = Sequential Execution Time
          ─────────────────────────
          Parallel Execution Time
```

For example:

```text
Sequential Time = 100 seconds
Parallel Time   = 25 seconds

Speedup = 100 / 25
        = 4
```

**Efficiency**

Efficiency measures how effectively processors are utilized.

```text
Efficiency = Speedup
             ────────
             Number of Processors
```

For 4 processors and speedup 4:

```text
Efficiency = 4 / 4
           = 1
           = 100%
```

In real systems, efficiency is usually below 100% because of communication, synchronization, load imbalance and sequential portions of the program.

---

## 25. Amdahl's Law

Amdahl's Law describes the theoretical speedup obtainable when only part of a program can be parallelized.

If:

```text
P = fraction of program that can be parallelized
N = number of processors
```

then:

```text
1
Speedup = ───────────────
          (1-P) + P/N
```

Example:

If 90% of a program can be parallelized:

```text
P = 0.90
N = 10
```

Then:

```text
Speedup = 1 / [(1-0.90) + 0.90/10]

        = 1 / [0.10 + 0.09]

        = 1 / 0.19

        ≈ 5.26
```

Even with 10 processors, the speedup is limited by the 10% sequential portion.

```text
Program
┌──────────────────────────────┐
│ Sequential │   Parallel     │
│    10%     │      90%       │
└──────────────────────────────┘
      │               │
      │               └──► Multiple CPUs
      │
      └──► Limits maximum speedup
```

As the number of processors approaches infinity:

```text
Maximum Speedup = 1 / (1-P)
```

For P = 0.90:

```text
Maximum Speedup = 1 / 0.10
                = 10
```

Thus, the sequential portion places a fundamental limit on parallel speedup.

---

## 26. Flynn Classification and Multiprocessors

Multiprocessor systems generally fall under the MIMD category because different processors can execute different instruction streams on different data.

```text
MIMD
               │
       ┌───────┼────────┐
       ▼       ▼        ▼
      P1      P2       P3
       │       │        │
      I1      I2       I3
       │       │        │
      D1      D2       D3
```

Each processor can independently execute its own instructions on its own data.

---

## 27. Shared-Memory Multiprocessor Flow

```text
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
```

This architecture requires careful management of:

```text
Shared Data
    │
    ├── Synchronization
    └── Cache Coherence
```

---

## 28. Distributed-Memory Multiprocessor Flow

```text
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
```

Each node owns local memory, and processors communicate through the network.

---

## 29. Complete Multiprocessor Architecture

```text
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
```

---

## 30. Complete Unit 5 Flow

```text
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
```

The complete concept is:

```text
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
```
