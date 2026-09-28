# SUBJECT: Software Engineering
# SUBJECT_META: Long-format notes · IUL MCA Sem 1 (CA455)

---

# UNIT 1: FUNDAMENTAL CONCEPTS OF SOFTWARE ENGINEERING

## 1. Introduction to Software Engineering

Software Engineering is the systematic, disciplined, and measurable approach used for the development, operation, testing, maintenance, and management of software.

Software engineering applies engineering principles to software development so that software is reliable, maintainable, efficient, and developed within required time and cost.

Basic Software Engineering Process:

```text
USER / CUSTOMER REQUIREMENTS
                    │
                    ▼
          ┌───────────────────┐
          │ Requirement       │
          │ Analysis          │
          └─────────┬─────────┘
                    │
                    ▼
          ┌───────────────────┐
          │ Software Design   │
          └─────────┬─────────┘
                    │
                    ▼
          ┌───────────────────┐
          │ Coding /          │
          │ Implementation    │
          └─────────┬─────────┘
                    │
                    ▼
          ┌───────────────────┐
          │ Testing           │
          └─────────┬─────────┘
                    │
                    ▼
          ┌───────────────────┐
          │ Deployment        │
          └─────────┬─────────┘
                    │
                    ▼
          ┌───────────────────┐
          │ Maintenance       │
          └───────────────────┘
```

Software engineering involves both technical activities and management activities.

---

## 2. Software Crisis

The software crisis refers to the difficulties faced by the software industry when software systems became larger and more complex. Many projects exceeded their budgets and schedules, while some failed to satisfy requirements.

**Major Causes**

- Increasing software complexity
- Increasing size of software
- Poor estimation
- Changing requirements
- Lack of proper methodologies
- Poor project management
- Insufficient testing
- Lack of documentation
- Difficulty in maintenance
- Shortage of skilled developers

**Effects**

```text
SOFTWARE CRISIS
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
   High Cost    Late Delivery   Poor Quality
       │            │            │
       └────────────┼────────────┘
                    ▼
              Project Failure
```

The development of software engineering methods was largely driven by the need to control these problems.

---

## 3. Software Problems

Software development can face problems at almost every stage.

**Common Problems**

1. Requirements may be incomplete.
2. Requirements may change.
3. Software may contain defects.
4. Development may exceed the budget.
5. Project delivery may be delayed.
6. Software may be difficult to maintain.
7. Poor design may reduce performance.
8. Security requirements may be ignored.
9. Communication between stakeholders may fail.

**Problem Chain**

```text
Poor Requirements
       │
       ▼
Poor Design
       │
       ▼
Incorrect Coding
       │
       ▼
Defects
       │
       ▼
Testing Problems
       │
       ▼
Maintenance Difficulty
       │
       ▼
Higher Cost
```

---

## 4. Software Engineering Problems

Software engineering problems are difficulties involved in producing and maintaining software systematically.

Important problems include:

- Managing complexity
- Understanding user requirements
- Estimating cost and time
- Maintaining quality
- Managing changing requirements
- Ensuring reliability
- Managing large development teams
- Maintaining software after deployment

A good software engineering process attempts to identify and control these problems throughout the software life cycle.

---

## 5. Characteristics of Software

Software differs from physical products such as machines and buildings.

**Important Characteristics**

1. **Intangible:** Software cannot be physically touched.
2. **Developed, not manufactured:** Most cost is associated with analysis, design, coding, testing, and maintenance rather than physical production.
3. **Does not wear out physically:** Software does not deteriorate due to physical use, although it can become unreliable because of modifications and changing environments.
4. **Highly complex:** Large software systems may contain millions of instructions and many interacting components.
5. **Easy to modify:** Software can generally be changed, but modifications can introduce new defects.
6. **Maintenance intensive:** Software requires maintenance to fix defects and adapt to changing requirements.

**Software Failure Concept**

```text
SOFTWARE
           │
           ▼
     ┌─────────────┐
     │ Development │
     └──────┬──────┘
            │
            ▼
       Delivered
            │
            ▼
      Modifications
            │
            ▼
    New Defects Possible
            │
            ▼
       Maintenance
```

---

## 6. Software Evaluation

Software evaluation is the process of assessing software against specified requirements and quality characteristics.

Important evaluation factors include:

- Correctness
- Reliability
- Efficiency
- Usability
- Maintainability
- Security
- Portability
- Performance

**Evaluation Structure**

```text
SOFTWARE
                     │
                     ▼
              Evaluation
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
 Functional       Quality       Performance
 Requirements    Attributes      Measures
       │             │             │
       └─────────────┼─────────────┘
                     ▼
              Evaluation Result
```

---

## 7. Software Applications

Software applications can be classified according to their purpose.

**Major Application Areas**

```text
SOFTWARE
                          │
       ┌──────────────────┼──────────────────┐
       ▼                  ▼                  ▼
   Business            Scientific         Embedded
   Software             Software          Software
       │                  │                  │
       ▼                  ▼                  ▼
 Banking             Simulation          Vehicles
 Payroll             Research            Appliances

       ┌──────────────────┼──────────────────┐
       ▼                  ▼                  ▼
    Web Apps          Mobile Apps       Real-Time
                                         Systems
```

Examples include:

- Banking systems
- Hospital management systems
- E-commerce
- Education systems
- Mobile applications
- Web applications
- Scientific simulations
- Embedded systems
- Operating systems
- Artificial intelligence systems
- Transportation systems

---

## 8. Requirement Analysis

Requirement analysis is the process of identifying, studying, organizing, and documenting what the customer expects from a software system.

Requirements generally include:

**Functional Requirements**

Describe what the system should do.

Example:

```text
User → Login → System verifies credentials → Dashboard
```

**Non-Functional Requirements**

Describe how the system should perform.

Examples:

- Performance
- Security
- Reliability
- Usability
- Scalability
- Availability

**Requirement Analysis Process**

```text
Customer / Stakeholders
                 │
                 ▼
        Requirement Gathering
                 │
                 ▼
             Analysis
                 │
                 ▼
           Classification
                 │
                 ▼
            Prioritization
                 │
                 ▼
            Validation
                 │
                 ▼
          Documentation
```

---

## 9. Requirement Specification Documents

A Software Requirement Specification (SRS) document formally describes the requirements of a software system.

**Typical SRS Structure**

```text
SRS DOCUMENT
                   │
       ┌───────────┼────────────┐
       ▼           ▼            ▼
 Introduction   Functional   Non-Functional
                Requirements   Requirements
       │           │            │
       ▼           ▼            ▼
 Scope          Features      Performance
 Purpose        Operations    Security
 Definitions    Inputs        Reliability
```

An SRS may contain:

1. Introduction
2. Purpose
3. Scope
4. Overall description
5. Functional requirements
6. Non-functional requirements
7. External interfaces
8. Constraints
9. Assumptions
10. Acceptance criteria

**Good SRS Characteristics**

A good SRS should be:

- Correct
- Complete
- Consistent
- Unambiguous
- Verifiable
- Modifiable
- Traceable
- Understandable

---

## 10. Software Design

Software design converts analyzed requirements into a technical structure that can be implemented through programming.

It defines:

- System architecture
- Modules
- Interfaces
- Data structures
- Components
- Relationships between components

**Design Transformation**

```text
Requirements
     │
     ▼
Requirement Analysis
     │
     ▼
Software Design
     │
     ├──────────────┐
     ▼              ▼
Architecture     Detailed Design
     │              │
     ▼              ▼
Components       Algorithms
     │              │
     └───────┬──────┘
             ▼
           Coding
```

---

## 11. Coding

Coding is the process of converting software design into instructions written in a programming language.

Example:

```text
Requirement
    │
    ▼
Design
    │
    ▼
Algorithm
    │
    ▼
Program Code
    │
    ▼
Executable Software
```

Good coding practices include:

- Meaningful names
- Proper indentation
- Modular programming
- Comments where useful
- Error handling
- Consistent coding style
- Avoiding unnecessary complexity

---

## 12. Testing

Software testing is the process of executing and evaluating software to identify defects and verify that it satisfies specified requirements.

**Testing Process**

```text
Software
                  │
                  ▼
             Test Planning
                  │
                  ▼
             Test Design
                  │
                  ▼
             Test Execution
                  │
          ┌───────┴────────┐
          ▼                ▼
       Pass              Fail
          │                │
          ▼                ▼
     Continue          Debug/Fix
                           │
                           ▼
                         Retest
```

Testing helps detect defects before and after deployment.

---

## 13. Maintenance

Software maintenance is the modification of software after delivery to correct faults, adapt to changes, or improve the system.

**Types of Maintenance**

- **Corrective:** Fixes defects.
- **Adaptive:** Adapts software to a changed environment.
- **Perfective:** Improves functionality or performance.
- **Preventive:** Reduces the possibility of future problems.

```text
MAINTENANCE
                       │
       ┌───────────────┼───────────────┐
       ▼               ▼               ▼
   Corrective       Adaptive        Perfective
       │               │               │
    Fix Bugs       Environment     Improvements
                       │
                       ▼
                  Preventive
                       │
                Future Problems
```

---

## 14. Verification and Validation

Verification and validation are two important quality activities.

**Verification**

"Are we building the product right?"

It checks whether software artifacts satisfy specified requirements and design specifications.

Examples:

- Reviews
- Inspections
- Walkthroughs
- Design verification
- Code review

**Validation**

"Are we building the right product?"

It checks whether the final software satisfies actual user needs.

Examples:

- Functional testing
- System testing
- Acceptance testing

**V-Model Representation**

```text
DEVELOPMENT                    TESTING

Requirements  ───────────────────► Acceptance Testing
     │                                    ▲
     ▼                                    │
System Design ───────────────────► System Testing
     │                                    ▲
     ▼                                    │
Architecture ────────────────────► Integration Testing
     │                                    ▲
     ▼                                    │
Detailed Design ─────────────────► Unit Testing
     │                                    ▲
     ▼                                    │
    Coding ───────────────────────────────┘
```

---

## 15. Monitoring and Control

Monitoring means continuously observing project activities and progress.

Control means taking corrective action when actual performance differs from the planned performance.

**Monitoring and Control Cycle**

```text
PROJECT PLAN
                  │
                  ▼
             Execute Work
                  │
                  ▼
              Monitor
                  │
                  ▼
          Compare with Plan
                  │
          ┌───────┴────────┐
          ▼                ▼
       On Track         Deviation
          │                │
          │                ▼
          │         Corrective Action
          │                │
          └────────┬───────┘
                   ▼
              Continue Work
```

Typical monitored parameters:

- Schedule
- Cost
- Resources
- Quality
- Scope
- Risks
- Defects

---

## 16. Metrics and Measurement

Measurement is the process of assigning numerical values to software attributes.

A software metric is a quantitative measure used to assess software, processes, or projects.

**Categories**

```text
SOFTWARE METRICS
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
     Product          Process          Project
      Metrics          Metrics          Metrics
        │               │                │
        ▼               ▼                ▼
     Size             Defect Rate      Cost
     Complexity       Productivity     Schedule
     Quality          Efficiency       Resources
```

Examples:

- Lines of Code (LOC)
- Number of defects
- Defect density
- Cyclomatic complexity
- Development effort
- Development cost
- Productivity

**Defect Density**

```text
Defect Density =
Number of Defects
──────────────────
Size of Software
```

---

## 17. Software Development Models

A software development model defines the systematic process used to develop software.

Major models in this unit are:

```text
DEVELOPMENT MODELS
                     │
     ┌───────────────┼────────────────┐
     ▼               ▼                ▼
 Waterfall       Prototyping        Spiral
     │               │                │
     ▼               ▼                ▼
 Iterative    Interactive        Evolutionary
 Models       Enhancement        Models
```

Different models are suitable for different project conditions.

---

## 18. Waterfall Model

The Waterfall Model is a sequential development model in which development progresses through predefined phases.

Design:

```text
Requirements
     │
     ▼
System Design
     │
     ▼
Implementation
     │
     ▼
Testing
     │
     ▼
Deployment
     │
     ▼
Maintenance
```

**Characteristics**

- Sequential process
- Each phase generally follows the previous phase
- Strong documentation
- Clear milestones
- Suitable when requirements are stable

**Advantages**

- Simple and easy to understand
- Easy to manage
- Clearly defined phases
- Good documentation

**Limitations**

- Difficult to accommodate changing requirements
- Testing occurs relatively late
- Customer feedback may arrive late

---

## 19. Prototyping Model

The Prototyping Model creates an early working model of the system to understand and validate requirements.

Design:

```text
Initial Requirements
              │
              ▼
       Quick Design
              │
              ▼
        Build Prototype
              │
              ▼
       Customer Evaluation
              │
        ┌─────┴─────┐
        ▼           ▼
     Accept      Changes
        │           │
        │           ▼
        │      Refine Prototype
        │           │
        └─────◄─────┘
              │
              ▼
       Final Development
```

Useful when requirements are unclear or customers need to see an early version.

---

## 20. Interactive Enhancement Model

The Interactive Enhancement Model develops software through repeated enhancement cycles.

Instead of attempting to build the complete system at once, an initial version is developed and enhanced through successive iterations.

```text
Initial Requirements
                     │
                     ▼
                Basic System
                     │
                     ▼
              ┌──────────────┐
              │ Enhancement  │
              └──────┬───────┘
                     │
                     ▼
                Version 2
                     │
                     ▼
              ┌──────────────┐
              │ Enhancement  │
              └──────┬───────┘
                     │
                     ▼
                Version 3
                     │
                     ▼
              Complete System
```

Each iteration adds or improves functionality.

---

## 21. Spiral Model

The Spiral Model combines iterative development with systematic risk analysis.

Each cycle of the spiral generally involves:

1. Planning
2. Risk analysis
3. Engineering/development
4. Customer evaluation

**Diagram**

```text
PLAN
                   │
                   ▼
             ┌───────────┐
             │           │
             │  RISK     │
             │ ANALYSIS  │
             │           │
             └─────┬─────┘
                   │
                   ▼
              DEVELOPMENT
                   │
                   ▼
             CUSTOMER
             EVALUATION
                   │
                   ▼
              NEXT CYCLE
                   │
                   └──────────►
```

**Spiral Concept**

```text
             ┌───────────────┐
             │   Cycle 1     │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │   Cycle 2     │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │   Cycle 3     │
             └───────┬───────┘
                     │
                     ▼
                Final System
```

The major distinguishing feature of the Spiral Model is its strong emphasis on risk analysis.

---

## 22. Iterative Models

An iterative model develops software through repeated development cycles.

Each iteration produces an improved version of the software.

```text
Requirements
     │
     ▼
Iteration 1
     │
     ▼
Basic Version
     │
     ▼
Iteration 2
     │
     ▼
Improved Version
     │
     ▼
Iteration 3
     │
     ▼
More Complete Version
     │
     ▼
Final Product
```

**Iteration Cycle**

```text
Plan
        │
        ▼
      Design
        │
        ▼
      Code
        │
        ▼
      Test
        │
        ▼
    Evaluate
        │
        └──────► Next Iteration
```

Advantages include early feedback, incremental improvement, and better handling of changing requirements.

---

## 23. Evolutionary Process Models

An evolutionary process model develops software through repeated versions that evolve according to feedback and changing requirements.

```text
Initial Requirements
        │
        ▼
   Initial Version
        │
        ▼
     Feedback
        │
        ▼
   Modified Version
        │
        ▼
     Feedback
        │
        ▼
   Improved Version
        │
        ▼
     Final System
```

Evolutionary models are useful when requirements are not completely known at the beginning.

**Main Idea**

```text
Version 1 → Version 2 → Version 3 → Version 4
    ↑          ↑           ↑           ↑
 Feedback   Feedback    Feedback    Feedback
```

---

## 24. Role of Management in Software Development

Software management involves planning, organizing, directing, monitoring, and controlling software projects.

**Major Management Activities**

- Project planning
- Cost estimation
- Effort estimation
- Scheduling
- Resource allocation
- Team management
- Risk management
- Quality management
- Configuration management
- Progress monitoring
- Communication
- Change management

**Management Structure**

```text
PROJECT MANAGEMENT
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
    Planning          Organizing         Control
       │                 │                 │
       ▼                 ▼                 ▼
    Schedule          Resources          Monitor
    Cost              Team               Progress
    Scope             Tasks              Quality
       │                 │                 │
       └─────────────────┼─────────────────┘
                         ▼
                  Project Success
```

---

## 25. Problem Analysis

Problem analysis is the systematic examination of a problem to understand its causes, requirements, constraints, and possible solutions.

**Problem Analysis Process**

```text
Identify Problem
                    │
                    ▼
            Gather Information
                    │
                    ▼
             Analyze Causes
                    │
                    ▼
            Define Requirements
                    │
                    ▼
           Identify Constraints
                    │
                    ▼
          Develop Alternatives
                    │
                    ▼
             Evaluate Solutions
                    │
                    ▼
             Select Solution
```

**Example**

Suppose a college wants an online attendance system.

```text
Problem:
Manual attendance takes too much time
              │
              ▼
Analysis:
Students + Teachers + Classes + Attendance
              │
              ▼
Requirements:
Login + Mark Attendance + Reports
              │
              ▼
Design:
Database + Web Interface + Authentication
              │
              ▼
Implementation:
Program Development
              │
              ▼
Testing:
Check attendance and reports
```

---

## 26. Complete Unit 1 Software Engineering Life Cycle

```text
SOFTWARE ENGINEERING
                                  │
                                  ▼
                         PROBLEM IDENTIFICATION
                                  │
                                  ▼
                         REQUIREMENT ANALYSIS
                                  │
                                  ▼
                              SRS
                                  │
                                  ▼
                         SOFTWARE DESIGN
                                  │
                                  ▼
                              CODING
                                  │
                                  ▼
                             TESTING
                                  │
                                  ▼
                           DEPLOYMENT
                                  │
                                  ▼
                          MAINTENANCE
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
                MONITORING                 MEASUREMENT
                    │                           │
                    └─────────────┬─────────────┘
                                  ▼
                         QUALITY CONTROL
```

## 27. Comparison of Major Development Models

| Model | Basic Approach | Requirement Change | Customer Feedback | Major Feature |
| ----- | -------------- | ------------------ | ----------------- | ------------- |
| Waterfall | Sequential | Difficult | Late | Clearly defined phases |
| Prototyping | Prototype first | Easier | Early | Requirement clarification |
| Interactive Enhancement | Repeated enhancement | Supported | Frequent | Progressive improvement |
| Iterative | Repeated cycles | Supported | Regular | Incremental development |
| Spiral | Iterative + risk analysis | Supported | Regular | Risk management |
| Evolutionary | System evolves through versions | Highly suitable | Continuous | Evolution through feedback |

## 28. Unit 1 Overall Concept

```text
SOFTWARE ENGINEERING
                             │
       ┌─────────────────────┼─────────────────────┐
       ▼                     ▼                     ▼
   FUNDAMENTALS         DEVELOPMENT            MANAGEMENT
       │                     │                     │
       ├─ Crisis             ├─ Waterfall          ├─ Planning
       ├─ Problems           ├─ Prototype           ├─ Scheduling
       ├─ Characteristics    ├─ Iterative           ├─ Resources
       ├─ Evaluation         ├─ Spiral              ├─ Risk
       └─ Applications       └─ Evolutionary        └─ Control
                             │
                             ▼
                       SOFTWARE LIFE CYCLE
                             │
       ┌─────────────────────┼─────────────────────┐
       ▼                     ▼                     ▼
 Requirements             Design                 Coding
       │                     │                     │
       └─────────────────────┼─────────────────────┘
                             ▼
                          Testing
                             │
                             ▼
                        Deployment
                             │
                             ▼
                        Maintenance
                             │
                             ▼
                     Continuous Improvement
```


---

# UNIT 2: SOFTWARE DESIGN

## 1. Software Design

Software design is the process of transforming software requirements into a detailed blueprint for implementation. It defines the architecture, modules, interfaces, data structures, relationships, and interactions of a software system.

The design phase acts as a bridge between requirements and coding.

```text
USER REQUIREMENTS
                 │
                 ▼
       ┌───────────────────┐
       │ Requirement       │
       │ Analysis          │
       └─────────┬─────────┘
                 │
                 ▼
       ┌───────────────────┐
       │  SOFTWARE DESIGN  │
       └─────────┬─────────┘
                 │
        ┌────────┼─────────┐
        ▼        ▼         ▼
   Architecture Modules   Data
        │        │       Design
        └────────┼─────────┘
                 ▼
              CODING
```

The major objectives of software design are:

- Convert requirements into an implementable structure.
- Divide a complex system into manageable components.
- Define relationships between components.
- Reduce complexity.
- Improve maintainability and reliability.
- Provide a clear basis for coding and testing.

---

## 2. Design Process

The software design process converts the SRS into an architectural and detailed design.

Design Process:

```text
SRS / REQUIREMENTS
                      │
                      ▼
             ┌─────────────────┐
             │ Architectural   │
             │ Design          │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Data Design     │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Interface       │
             │ Design          │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Component /     │
             │ Detailed Design │
             └────────┬────────┘
                      │
                      ▼
                   CODING
```

Main activities:

1. Analyze requirements.
2. Identify major system components.
3. Define system architecture.
4. Divide the system into modules.
5. Design data structures.
6. Design interfaces.
7. Define component relationships.
8. Specify algorithms and processing logic.
9. Review and refine the design.

---

## 3. Design Concepts

Important software design concepts provide principles for constructing understandable and maintainable systems.

Major concepts include:

- Abstraction
- Modularity
- Information hiding
- Architecture
- Refinement
- Functional independence
- Cohesion
- Coupling
- Problem partitioning
- Hierarchy

A good design attempts to create high cohesion and low coupling.

```text
GOOD SOFTWARE DESIGN
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
   HIGH COHESION           LOW COUPLING
          │                     │
          ▼                     ▼
 Related tasks stay       Modules remain
 together                 relatively independent
          │                     │
          └──────────┬──────────┘
                     ▼
             Easier Maintenance
```

---

## 4. Design Model

A design model represents different aspects of the software system before implementation.

It may describe:

- Data
- Architecture
- Components
- Interfaces
- Interactions
- Processing

Design Model:

```text
DESIGN MODEL
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
  Architectural       Data Model       Interface
     Model                                Model
       │                 │                 │
       ▼                 ▼                 ▼
 Components          Data Objects       User/System
 Relationships       Structures         Interfaces
       │
       ▼
 Component Design
       │
       ▼
 Detailed Design
```

The design model provides a representation that developers can use to construct the actual software.

---

## 5. Problem Partitioning and Hierarchy

Problem partitioning means dividing a large and complex problem into smaller subproblems.

Instead of solving one huge problem directly, it is divided into manageable components.

Example:

```text
UNIVERSITY SYSTEM
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
   Admission       Academics     Accounts
       │             │             │
   ┌───┼───┐      ┌──┼──┐       ┌──┼──┐
   ▼   ▼   ▼      ▼  ▼  ▼       ▼  ▼  ▼
Form Exam Fee   Course Exam Result Fee Bill
```

Hierarchy:

Hierarchy arranges components from higher-level concepts to lower-level details.

```text
SYSTEM
                │
       ┌────────┴────────┐
       ▼                 ▼
    MODULE A          MODULE B
       │                 │
   ┌───┴───┐         ┌───┴───┐
   ▼       ▼         ▼       ▼
  A1      A2        B1      B2
```

This makes complex systems easier to understand.

---

## 6. Abstraction

Abstraction means representing the important characteristics of an object or system while hiding unnecessary implementation details.

For example, a user can operate an ATM without knowing the internal code, database operations, or communication protocols.

```text
ATM SYSTEM
                 │
       ┌─────────┴─────────┐
       │     USER SEES     │
       │                   │
       │ Insert Card       │
       │ Enter PIN         │
       │ Select Transaction│
       │ Receive Cash      │
       └─────────┬─────────┘
                 │
          HIDDEN DETAILS
                 │
       ┌─────────┴─────────┐
       │ Authentication    │
       │ Database Access   │
       │ Transaction Logic │
       │ Network Protocol  │
       └───────────────────┘
```

Levels of Abstraction:

```text
High-Level
    │
    ▼
System Description
    │
    ▼
Subsystems
    │
    ▼
Modules
    │
    ▼
Functions
    │
    ▼
Detailed Implementation
Low-Level
```

Abstraction reduces unnecessary complexity and allows developers to focus on relevant information.

---

## 7. Modularity

Modularity means dividing a software system into independent or relatively independent modules.

Each module performs a specific responsibility.

Example:

```text
E-COMMERCE SYSTEM
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
   User Module      Product Module     Order Module
       │                 │                 │
       ▼                 ▼                 ▼
 Authentication       Catalog          Order Processing
 Registration         Search           Payment
 Profile              Inventory        Delivery
```

Advantages:

- Easier development
- Easier testing
- Easier debugging
- Easier maintenance
- Better understanding
- Possibility of parallel development

A well-modularized system avoids making every component dependent on every other component.

---

## 8. Top-Down Approach

The top-down approach begins with the complete system and progressively divides it into smaller subsystems and modules.

```text
COMPLETE SYSTEM
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Module A     Module B     Module C
          │            │            │
       ┌──┴──┐       ┌─┴─┐       ┌─┴─┐
       ▼     ▼       ▼   ▼       ▼   ▼
      A1    A2       B1  B2      C1  C2
```

Example:

For a banking system:

```text
BANKING SYSTEM
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
    Accounts      Loans       Reports
       │            │            │
    ┌──┴──┐       ┌─┴─┐       ┌─┴──┐
    ▼     ▼       ▼   ▼       ▼    ▼
 Balance Deposit  Apply Repay Daily Monthly
```

Advantages:

- Provides a clear overall structure.
- Begins with system-level requirements.
- Makes system architecture easier to understand.

---

## 9. Bottom-Up Approach

The bottom-up approach begins with low-level components and combines them to form larger subsystems and eventually the complete system.

```text
A1       A2       B1       B2
         │        │        │        │
         └───┬────┘        └───┬────┘
             ▼                 ▼
          Module A          Module B
             │                 │
             └────────┬────────┘
                      ▼
                  SYSTEM
```

Example:

```text
Functions
   │
   ▼
Small Modules
   │
   ▼
Subsystems
   │
   ▼
Complete System
```

It is useful when reusable low-level components are already available.

---

## 10. Top-Down vs Bottom-Up

| Top-Down | Bottom-Up |
| -------- | --------- |
| Starts with complete system | Starts with small components |
| Decomposes into modules | Combines components |
| Focuses on overall structure first | Focuses on reusable components first |
| Moves from general to specific | Moves from specific to general |
| Architecture is defined early | Components may be developed first |

```text
TOP-DOWN                     BOTTOM-UP

   SYSTEM                  COMPONENTS
     │                    ↙    ↓    ↘
     ▼                  Modules
   Modules                 │
     │                     ▼
     ▼                  Subsystems
Components                 │
     │                     ▼
     ▼                    SYSTEM
  Details
```

---

## 11. Structured Design Methodology

Structured design is a systematic approach to designing software by decomposing a system into functional modules.

It commonly uses:

- Functional decomposition
- Data-flow analysis
- Module hierarchy
- Structure charts
- Cohesion
- Coupling

Structured Design:

```text
SYSTEM
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
      M1       M2       M3
       │        │        │
     ┌─┴─┐    ┌─┴─┐    ┌─┴─┐
     ▼   ▼    ▼   ▼    ▼   ▼
    M11 M12  M21 M22  M31 M32
```

The purpose is to produce a clear and manageable module structure.

---

## 12. Functional Approach

The functional approach designs software around functions or processes that transform input into output.

```text
INPUT
         │
         ▼
   ┌────────────┐
   │ FUNCTION   │
   │ PROCESSING  │
   └──────┬─────┘
          │
          ▼
        OUTPUT
```

For example:

```text
Student Marks
              │
              ▼
       Calculate Total
              │
              ▼
       Calculate Average
              │
              ▼
        Assign Grade
              │
              ▼
            Result
```

The system is decomposed according to what it needs to do.

---

## 13. Object-Oriented Approach

The object-oriented approach organizes software around objects that contain both data and operations.

An object has:

- State
- Behavior
- Identity

Example:

```text
STUDENT OBJECT
          ┌──────────────────┐
          │ Data             │
          │                  │
          │ Name             │
          │ Roll Number      │
          │ Course           │
          ├──────────────────┤
          │ Methods          │
          │                  │
          │ Register()       │
          │ AttendClass()    │
          │ ViewResult()     │
          └──────────────────┘
```

Major OOP Concepts:

```text
OBJECT ORIENTATION
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
   Encapsulation   Inheritance   Polymorphism
       │              │              │
       └──────────────┼──────────────┘
                      ▼
                  Abstraction
```

---

## 14. Coupling

Coupling is the degree of dependency between software modules.

If one module heavily depends on another, coupling is high.

High Coupling:

```text
Module A
   │││
   ▼▼▼
 Module B
   │││
   ▼▼▼
 Module C
```

Changes in one module may affect several other modules.

Low Coupling:

```text
Module A        Module B        Module C
    │               │               │
    ▼               ▼               ▼
 Independent interfaces
```

Low coupling is generally desirable because it makes systems easier to modify, test, and maintain.

**Coupling Levels**

Common forms include:

- Content coupling
- Common coupling
- External coupling
- Control coupling
- Stamp coupling
- Data coupling

Generally, coupling is considered better when dependencies between modules are reduced.

---

## 15. Cohesion

Cohesion refers to how closely related the responsibilities within a single module are.

High Cohesion:

```text
MODULE
     ┌─────────┐
     │ Task A  │
     │ Task B  │
     │ Task C  │
     │    ↓    │
     │ Same    │
     │ Purpose │
     └─────────┘
```

The module performs closely related tasks.

Low Cohesion:

```text
MODULE
     ┌─────────┐
     │ Login   │
     │ Printing│
     │ Payment │
     │ Backup  │
     │ Reports │
     └─────────┘
```

The module contains unrelated responsibilities.

**Cohesion Types**

From weaker to stronger:

```text
Coincidental
     ↓
Logical
     ↓
Temporal
     ↓
Procedural
     ↓
Communicational
     ↓
Sequential
     ↓
Functional
```

Functional cohesion is generally considered the strongest form because the elements of the module contribute to one well-defined function.

---

## 16. Coupling and Cohesion Relationship

A good software design generally aims for:

```text
GOOD DESIGN
                   │
          ┌────────┴────────┐
          ▼                 ▼
     HIGH COHESION      LOW COUPLING
          │                 │
          ▼                 ▼
 Related tasks         Less dependency
 stay together         between modules
          │                 │
          └────────┬────────┘
                   ▼
             Maintainable
                System
```

---

## 17. Cyclomatic Complexity

Cyclomatic complexity is a software metric used to measure the number of independent paths through a program's control-flow structure.

It is particularly useful for estimating testing requirements.

Control Flow Example:

```text
START
            │
            ▼
         Condition
         /       \
      True       False
       │           │
       ▼           ▼
    Process A    Process B
       │           │
       └─────┬─────┘
             ▼
            END
```

For a connected control-flow graph:

```text
V(G) = E - N + 2
```

Where:

- E = number of edges
- N = number of nodes
- V(G) = cyclomatic complexity

For a simple program:

```text
Cyclomatic Complexity = Number of decision points + 1
```

For example, if a program contains three independent decision points:

```text
V(G) = 3 + 1 = 4
```

Thus, at least four independent paths need consideration for basis-path testing.

---

## 18. Object-Oriented Design

Object-Oriented Design (OOD) transforms system requirements into interacting objects and classes.

The design identifies:

- Classes
- Objects
- Attributes
- Methods
- Relationships
- Inheritance
- Interfaces

OOD Process:

```text
REQUIREMENTS
                │
                ▼
          OO ANALYSIS
                │
                ▼
       Identify Objects
                │
                ▼
       Identify Classes
                │
                ▼
      Identify Relationships
                │
                ▼
       Design Interactions
                │
                ▼
         OO DESIGN
                │
                ▼
             CODING
```

---

## 19. OO Analysis

Object-Oriented Analysis (OOA) examines the problem domain in terms of objects, classes, responsibilities, and relationships.

Example: College System

```text
COLLEGE SYSTEM
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
    Student       Teacher       Course
       │            │            │
       │            │            │
       └────────────┼────────────┘
                    ▼
               Department
```

The analysis identifies objects existing in the problem domain before implementation details are finalized.

---

## 20. OO Design

OO design converts the results of object-oriented analysis into an implementable structure.

For example:

```text
Class: Student
────────────────────
Attributes:
- studentID
- name
- course

Methods:
+ register()
+ attendClass()
+ viewResult()
```

The design defines how classes interact and how their responsibilities are distributed.

---

## 21. Classes and Objects

A class is a blueprint or template that defines attributes and methods.

An object is an instance of a class.

Diagram:

```text
CLASS
      ┌──────────────────┐
      │     STUDENT      │
      ├──────────────────┤
      │ name             │
      │ rollNo           │
      │ course           │
      ├──────────────────┤
      │ register()       │
      │ attend()         │
      │ result()         │
      └────────┬─────────┘
               │
        creates instances
       ┌───────┼────────┐
       ▼       ▼        ▼
    Object1  Object2  Object3
```

Example:

```java
Student s1;
Student s2;
```

Here, Student is the class and s1, s2 are objects.

---

## 22. Relationships Among Objects

Objects may have different relationships.

**Association**

A general relationship between objects.

```text
Student ─────────── Course
       enrolls in
```

**Aggregation**

Represents a whole-part relationship where parts can exist independently.

```text
Department
           ◇
          / \
         /   \
    Teacher  Course
```

**Composition**

A stronger whole-part relationship where the part depends on the whole.

```text
House
         ◆
        / \
       /   \
    Room   Room
```

**Inheritance**

Represents an is-a relationship.

```text
Person
                ▲
        ┌───────┴───────┐
        │               │
     Student          Teacher
```

---

## 23. Inheritance

Inheritance allows one class to acquire properties and behavior of another class.

The existing class is the base/superclass, and the derived class is the subclass.

```text
PERSON
              ┌──────────┐
              │ name     │
              │ age      │
              └────┬─────┘
                   ▲
          ┌────────┴────────┐
          │                 │
     STUDENT             TEACHER
   ┌───────────┐       ┌───────────┐
   │ rollNo    │       │ employeeNo│
   │ course    │       │ subject   │
   └───────────┘       └───────────┘
```

Benefits:

- Reusability
- Reduced duplication
- Easier maintenance
- Supports hierarchical classification

---

## 24. Polymorphism

Polymorphism means "many forms." It allows the same interface or operation to behave differently depending on the object or context.

Example:

```text
Shape
                    │
             draw() method
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
      Circle      Square     Triangle
        │           │           │
      draw()      draw()      draw()
        │           │           │
      Circle       Square     Triangle
      drawing      drawing     drawing
```

The same draw() operation produces different behavior for different objects.

---

## 25. Design Concepts in Object-Oriented Systems

Important OOD concepts include:

**Encapsulation**

Combines data and methods into a class and controls access to internal details.

```text
┌───────────────────┐
       │      CLASS        │
       │                   │
       │  Data             │
       │    +              │
       │  Methods          │
       │                   │
       └─────────┬─────────┘
                 │
            Controlled
              Access
```

**Abstraction**

Shows essential features while hiding implementation details.

**Inheritance**

Reuses features from an existing class.

**Polymorphism**

Allows common interfaces to represent different behaviors.

---

## 26. Design Notation and Specification

Design notation provides standardized methods for representing software structures and behavior.

Common design representations include:

- Flowcharts
- Structure charts
- Data-flow diagrams
- UML class diagrams
- UML sequence diagrams
- State diagrams
- Pseudocode

Example Structure Chart:

```text
MAIN
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
     INPUT     PROCESS      OUTPUT
       │          │          │
    ReadData   Calculate   Display
```

UML Class Representation:

```text
┌────────────────────────┐
│        Student         │
├────────────────────────┤
│ - name                 │
│ - rollNo               │
│ - course               │
├────────────────────────┤
│ + register()           │
│ + viewResult()         │
└────────────────────────┘
```

`-` commonly represents private members and `+` commonly represents public members in UML notation.

---

## 27. Design Methodology

Design methodology is a systematic set of techniques used to develop software designs.

Two fundamental approaches are:

```text
DESIGN METHODOLOGIES
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
        FUNCTIONAL          OBJECT-ORIENTED
         APPROACH               APPROACH
             │                   │
             ▼                   ▼
        Functions             Objects
        Processes             Classes
        Modules               Relationships
```

A design methodology provides guidelines for:

- Decomposition
- Abstraction
- Module identification
- Data organization
- Interface design
- Component interaction
- Design verification

---

## 28. Dynamic Modeling

Dynamic modeling describes how a system behaves and changes over time in response to events.

It focuses on:

- Events
- States
- Transitions
- Interactions
- Time-dependent behavior

Example: ATM

```text
             ┌──────────┐
             │  IDLE    │
             └────┬─────┘
                  │ Insert Card
                  ▼
             ┌──────────┐
             │  PIN     │
             │  ENTRY   │
             └────┬─────┘
                  │ Valid PIN
                  ▼
             ┌──────────┐
             │  MENU    │
             └────┬─────┘
                  │ Withdraw
                  ▼
             ┌──────────┐
             │ PROCESS  │
             │TRANSACTION│
             └────┬─────┘
                  │
                  ▼
             ┌──────────┐
             │  CASH    │
             │  DISPENSE│
             └────┬─────┘
                  │
                  ▼
               IDLE
```

Dynamic modeling is useful for systems where behavior changes according to events.

---

## 29. Functional Modeling

Functional modeling represents what a system does by showing functions, processes, inputs, and outputs.

Example: Payroll System

```text
Employee Data
      │
      ▼
┌───────────────┐
│ Calculate      │
│ Gross Salary   │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ Calculate      │
│ Deductions     │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ Calculate Net  │
│ Salary         │
└───────┬───────┘
        │
        ▼
   Salary Slip
```

Functional modeling focuses on the transformations performed by the system.

---

## 30. Functional Modeling vs Dynamic Modeling

| Functional Modeling | Dynamic Modeling |
| ------------------- | ---------------- |
| Describes what the system does | Describes how the system behaves over time |
| Focuses on functions/processes | Focuses on states/events |
| Shows input and output | Shows transitions and interactions |
| Useful for process understanding | Useful for behavioral understanding |
| Example: Payroll calculation | Example: ATM state transitions |

```text
FUNCTIONAL                    DYNAMIC

Input                          Event
  │                              │
  ▼                              ▼
Process                        State
  │                              │
  ▼                              ▼
Output                       Transition
```

---

## 31. Complete Software Design Structure

```text
SOFTWARE DESIGN
                                │
              ┌─────────────────┼─────────────────┐
              ▼                 ▼                 ▼
       ARCHITECTURAL        DATA DESIGN      INTERFACE DESIGN
          DESIGN                 │                 │
              │                  │                 │
              ▼                  ▼                 ▼
        System Modules      Data Structures     User Interfaces
              │
              ▼
       COMPONENT DESIGN
              │
       ┌──────┴───────┐
       ▼              ▼
 Functional       Object-Oriented
   Design             Design
       │              │
       ▼              ▼
  Functions        Classes
  Processes        Objects
       │              │
       └──────┬───────┘
              ▼
          DETAILED DESIGN
              │
              ▼
            CODING
```

## 32. Complete Unit 2 Concept Map

```text
UNIT 2
                    SOFTWARE DESIGN
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   DESIGN BASICS       DESIGN METHODS      DESIGN QUALITY
        │                  │                  │
        ├─ Process         ├─ Top-Down        ├─ Coupling
        ├─ Concepts        ├─ Bottom-Up       ├─ Cohesion
        ├─ Design Model    ├─ Functional      └─ Complexity
        ├─ Abstraction     └─ OO Approach
        └─ Modularity
                           │
                           ▼
                OBJECT-ORIENTED DESIGN
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
      OO Analysis      Classes/Objects   Relationships
          │                │                │
          ▼                ▼                ├─ Association
       OO Design       Encapsulation       ├─ Aggregation
                           │                ├─ Composition
                           ▼                ├─ Inheritance
                       Abstraction          └─ Polymorphism
                           │
                           ▼
                   DESIGN REPRESENTATION
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
       Dynamic Modeling          Functional Modeling
              │                         │
              ▼                         ▼
       States/Events             Functions/Processes
       Transitions               Input/Output
```


---

# UNIT 3: SOFTWARE CODING

## 1. Software Coding

Software coding is the process of converting software design into executable instructions using a programming language. Coding implements the algorithms, data structures, interfaces, and processing logic defined during the design phase.

```text
REQUIREMENTS
             │
             ▼
          DESIGN
             │
             ▼
        ALGORITHMS
             │
             ▼
          CODING
             │
             ▼
      COMPILED PROGRAM
             │
             ▼
          TESTING
             │
             ▼
      WORKING SOFTWARE
```

The major objectives of good coding are:

- Correct implementation of requirements
- Readable and understandable code
- Efficient execution
- Easy debugging
- Easy testing
- Easy maintenance
- Reusability
- Reliability

---

## 2. Programming Practice

Programming practice refers to the principles and techniques followed while writing software code.

Important practices include:

1. Understand requirements before coding.
2. Design the algorithm before implementation.
3. Use meaningful names.
4. Keep functions small and focused.
5. Avoid unnecessary complexity.
6. Follow consistent indentation.
7. Handle errors properly.
8. Document important logic.
9. Test code regularly.
10. Avoid duplicate code.

Basic Coding Flow:

```text
Requirement
    │
    ▼
Understand Problem
    │
    ▼
Design Algorithm
    │
    ▼
Write Code
    │
    ▼
Compile
    │
    ▼
Test
    │
 ┌──┴───┐
 ▼      ▼
Pass   Fail
 │      │
 │      ▼
 │    Debug
 │      │
 └──────┘
```

---

## 3. Top-Down Structured Programming

Top-down programming starts with the complete problem and repeatedly divides it into smaller functions or modules.

Diagram:

```text
MAIN PROGRAM
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
          INPUT        PROCESS      OUTPUT
             │           │           │
          ┌──┴──┐     ┌──┴──┐     ┌──┴──┐
          ▼     ▼     ▼     ▼     ▼     ▼
        Read   Validate Calculate Format Display Save
```

The process continues until each component is simple enough to implement directly.

Example:

For a payroll system:

```text
PAYROLL SYSTEM
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
   Employee Data  Salary      Report
                   │
              ┌────┼────┐
              ▼    ▼    ▼
            Basic Allowance Tax
```

Advantages:

- Easy to understand system structure
- Clear hierarchy
- Easier testing of individual modules
- Encourages modular programming
- Suitable for structured problem solving

---

## 4. Bottom-Up Structured Programming

Bottom-up programming begins with small reusable functions or modules and combines them into larger components.

```text
Small Functions
  ┌────┬────┬────┐
  ▼    ▼    ▼    ▼
 F1   F2   F3   F4
  │    │    │    │
  └─┬──┘    └─┬──┘
    ▼         ▼
 Module A   Module B
      \       /
       \     /
        ▼   ▼
       SYSTEM
```

Example:

```text
calculateTax()
calculateSalary()
generateSlip()
        │
        ▼
Payroll Module
        │
        ▼
Payroll System
```

Comparison:

| Top-Down | Bottom-Up |
| -------- | --------- |
| Starts with complete system | Starts with basic components |
| Decomposes system | Combines components |
| General → specific | Specific → general |
| Focuses on system structure | Focuses on reusable components |
| Uses functional decomposition | Uses component composition |

---

## 5. Information Hiding

Information hiding is a design and programming principle in which the internal implementation details of a module are hidden from other modules.

Only necessary information is exposed through a defined interface.

```text
MODULE
       ┌──────────────────┐
       │   PUBLIC PART    │
       │                  │
Other ─►│ Interface        │
Modules │                  │
       ├──────────────────┤
       │   HIDDEN PART    │
       │                  │
       │ Internal Data     │
       │ Algorithms        │
       │ Implementation    │
       └──────────────────┘
```

Example:

A banking module may provide:

```text
deposit()
withdraw()
checkBalance()
```

The calling program does not need to know how the database internally stores the account balance.

Advantages:

- Reduces dependency
- Protects internal implementation
- Makes maintenance easier
- Reduces accidental modification
- Improves modularity
- Allows internal implementation to change without affecting users of the module

---

## 6. Programming Style

Programming style refers to conventions followed while writing source code so that it remains readable, consistent, and maintainable.

Important elements include:

- Meaningful identifiers
- Consistent indentation
- Proper spacing
- Consistent naming conventions
- Appropriate comments
- Simple control structures
- Consistent brace placement
- Avoidance of unnecessary code
- Proper error handling

Example:

Poor style:

```c
int a,b,c;
c=a+b;
```

Better style:

```c
int firstNumber;
int secondNumber;
int sum;

sum = firstNumber + secondNumber;
```

The second version communicates intent more clearly.

---

## 7. Internal Documentation

Internal documentation consists of comments, descriptions, naming conventions, and other information included within source code to explain its implementation.

Example:

```c
/* Calculate the average marks of three subjects */
average = (m1 + m2 + m3) / 3;
```

Good internal documentation should explain:

- Why a particular operation is performed
- Complex algorithms
- Important assumptions
- Non-obvious decisions
- Special cases
- Important constraints

It should not unnecessarily describe obvious statements.

```text
SOURCE CODE
                 │
        ┌────────┴────────┐
        ▼                 ▼
     Program            Internal
      Logic          Documentation
        │                 │
        ▼                 ▼
   Implementation      Explanation
```

---

## 8. Size Measures

Software size measures estimate the physical or logical size of software.

Common measures include:

- Lines of Code
- Number of statements
- Number of functions
- Number of modules
- Function points

---

## 8.1 Lines of Code

LOC (Lines of Code) measures software size using the number of source-code lines.

A simple measure is:

```text
LOC = Number of source-code lines
```

Example:

```c
int a;
int b;
int sum;

a = 10;
b = 20;
sum = a + b;
```

If five executable/declaration lines are counted according to the chosen counting convention, LOC would be 5.

LOC can help estimate:

- Development effort
- Productivity
- Maintenance effort
- Defect density

However, LOC depends heavily on programming language and coding style.

---

## 9. Complexity Metrics

Complexity metrics measure how difficult software is to understand, test, modify, or maintain.

Common complexity measures include:

- Cyclomatic complexity
- Control-flow complexity
- Data complexity
- Structural complexity

Complexity Concept:

```text
Simple Program
      │
      ▼
Few Decisions
      │
      ▼
Fewer Execution Paths
      │
      ▼
Easier Testing

Complex Program
      │
      ▼
Many Decisions
      │
      ▼
Many Execution Paths
      │
      ▼
More Testing Required
```

---

## 10. Cyclomatic Complexity

Cyclomatic complexity measures the number of linearly independent paths through a program's control-flow graph.

For a connected graph:

```text
V(G) = E - N + 2
```

Where:

- E = number of edges
- N = number of nodes
- V(G) = cyclomatic complexity

Another commonly used form is:

```text
V(G) = D + 1
```

where D is the number of decision points.

Example:

```text
START
               │
               ▼
          ┌──────────┐
          │ Condition│
          └────┬─────┘
             /   \
          Yes     No
           │       │
           ▼       ▼
        Process A Process B
           │       │
           └───┬───┘
               ▼
              END
```

There is one decision:

```text
V(G) = 1 + 1 = 2
```

Therefore, there are two independent paths to consider.

---

## 11. Style Metrics

Style metrics assess characteristics related to the readability, consistency, and maintainability of source code.

They may consider:

- Naming conventions
- Indentation
- Comment density
- Function length
- Module size
- Nesting depth
- Statement complexity
- Coding consistency

Example:

```text
SOURCE CODE
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
   Naming         Formatting      Comments
       │              │              │
       ▼              ▼              ▼
 Meaningful       Consistent      Useful
 Identifiers      Indentation     Explanation
```

---

## 12. Software Testing

Software testing is the systematic process of executing and evaluating software to find defects and determine whether it satisfies specified requirements.

Testing is not simply "running the program." It involves planning test conditions, preparing test cases, executing them, recording results, and analyzing failures.

```text
SOFTWARE
                  │
                  ▼
             TEST PLAN
                  │
                  ▼
           TEST CASE DESIGN
                  │
                  ▼
           TEST EXECUTION
                  │
                  ▼
          RESULT COMPARISON
                  │
          ┌───────┴────────┐
          ▼                ▼
       Expected          Actual
        Result            Result
          │                │
          └───────┬────────┘
                  ▼
               Analysis
                  │
             ┌────┴────┐
             ▼         ▼
           PASS       FAIL
                       │
                       ▼
                     DEBUG
                       │
                       ▼
                     RETEST
```

---

## 13. Testing Fundamentals

Important testing concepts include:

**Error**

A human mistake made during development.

**Fault / Defect**

An incorrect implementation introduced into software because of an error.

**Failure**

An observable incorrect behavior of software during execution.

```text
Human Error
     │
     ▼
   Fault
     │
     ▼
   Execution
     │
     ▼
  Failure
```

Example:

```text
Developer writes:
if (marks > 40)

Requirement was:
if (marks >= 40)

        │
        ▼
      Fault
        │
        ▼
Student with 40 marks gets
incorrect result
        │
        ▼
      Failure
```

---

## 14. Testing Objectives

Testing aims to:

- Detect defects
- Verify requirements
- Validate user expectations
- Check functionality
- Check performance
- Check reliability
- Identify unexpected behavior
- Reduce software failure risk
- Provide information about software quality

Testing cannot mathematically prove that software contains no defects.

---

## 15. Test Case

A test case is a documented set of inputs, conditions, execution steps, and expected results used to verify a specific software behavior.

Test Case Structure:

```text
┌────────────────────────────┐
│ Test Case ID               │
├────────────────────────────┤
│ Objective                  │
├────────────────────────────┤
│ Preconditions              │
├────────────────────────────┤
│ Input Data                 │
├────────────────────────────┤
│ Execution Steps            │
├────────────────────────────┤
│ Expected Result            │
├────────────────────────────┤
│ Actual Result              │
├────────────────────────────┤
│ Status: Pass / Fail        │
└────────────────────────────┘
```

Example:

```text
Test Case ID: LOGIN-001
Input: Valid username + valid password
Expected: User reaches dashboard
Actual: User reaches dashboard
Status: PASS
```

---

## 16. Test Criteria

Test criteria are rules used to determine whether testing is sufficient or whether a particular test has achieved its objective.

Examples include:

- Requirement coverage
- Statement coverage
- Branch coverage
- Path coverage
- Condition coverage
- Functional coverage

Coverage Concept:

```text
PROGRAM
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
   Statements Branches  Paths
       │        │        │
       └────────┼────────┘
                ▼
          Test Coverage
```

---

## 17. Functional Testing

Functional testing checks whether software performs the functions specified in its requirements.

It focuses on what the system does, rather than how the internal code is implemented.

```text
INPUT
            │
            ▼
       ┌──────────┐
       │ SOFTWARE │
       └────┬─────┘
            │
            ▼
      OUTPUT / RESULT
            │
            ▼
    Compare with Expected
            │
       ┌────┴────┐
       ▼         ▼
    Correct   Incorrect
       │         │
       ▼         ▼
     PASS       FAIL
```

Examples:

- Login testing
- Registration testing
- Payment testing
- Search testing
- Report generation testing

---

## 18. Structural Testing

Structural testing examines the internal structure and logic of the program.

It is also called white-box testing.

It may examine:

- Statements
- Branches
- Conditions
- Paths
- Loops
- Control flow

Structural Testing:

```text
SOURCE CODE
                   │
                   ▼
            CONTROL FLOW
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
    Statements  Branches     Paths
        │          │          │
        └──────────┼──────────┘
                   ▼
               TEST CASES
```

---

## 19. Functional vs Structural Testing

| Functional Testing | Structural Testing |
| ------------------ | ------------------ |
| Also called black-box testing | Also called white-box testing |
| Based on requirements | Based on internal code |
| Tests external behavior | Tests internal logic |
| Tester may not need source code | Source code is generally examined |
| Focuses on inputs and outputs | Focuses on paths and conditions |

```text
FUNCTIONAL                  STRUCTURAL

Requirements                Source Code
     │                           │
     ▼                           ▼
Input/Output                Control Flow
     │                           │
     ▼                           ▼
Expected Result             Paths/Branches
```

---

## 20. Top-Down Testing Approach

In a top-down integration testing approach, testing starts with the highest-level modules and progressively integrates lower-level modules.

Stubs are used when lower-level modules are not yet available.

Diagram:

```text
MAIN MODULE
                 │
        ┌────────┴────────┐
        ▼                 ▼
     Module A           Module B
        │                 │
      Stub              Stub
```

After lower modules become available:

```text
MAIN
          /        \
         ▼          ▼
       A             B
      / \           / \
    A1  A2         B1  B2
```

Advantages:

- Major control logic tested early
- High-level interfaces tested early
- Useful for discovering architectural problems

Limitation:

- Lower-level functionality may be tested later.

---

## 21. Bottom-Up Testing Approach

In bottom-up integration testing, testing begins with lower-level modules and progressively combines them into larger subsystems.

Drivers may be used to invoke lower-level modules.

```text
A1      A2       B1      B2
      │       │        │       │
      └──┬────┘        └──┬────┘
         ▼                ▼
       Module A         Module B
            \            /
             \          /
              ▼        ▼
                 MAIN
```

Advantages:

- Low-level components tested early
- Useful for utility and service modules
- Does not require stubs for lower modules

Limitation:

- Overall system behavior becomes visible relatively late.

---

## 22. Top-Down vs Bottom-Up Testing

| Top-Down | Bottom-Up |
| -------- | --------- |
| Starts with high-level modules | Starts with low-level modules |
| Uses stubs | Uses drivers |
| Major control structure tested early | Utility components tested early |
| Lower-level modules tested later | Higher-level behavior tested later |
| Good for architectural validation | Good for component validation |

```text
TOP-DOWN                    BOTTOM-UP

    MAIN                   A1 A2 B1 B2
   /    \                   \ /   \ /
  A      B                   A     B
 / \    / \                   \   /
A1 A2  B1 B2                   MAIN
```

---

## 23. Testing Levels

Testing is performed at different levels.

```text
TESTING LEVELS
                     │
                     ▼
                 UNIT TESTING
                     │
                     ▼
              INTEGRATION TESTING
                     │
                     ▼
                SYSTEM TESTING
                     │
                     ▼
             ACCEPTANCE TESTING
```

Each level focuses on a different scope of the software.

---

## 24. Unit Testing

Unit testing tests individual units such as functions, classes, or modules independently.

```text
Module
         │
    ┌────┴────┐
    ▼         ▼
 Function A Function B
    │         │
    ▼         ▼
  Test A    Test B
```

Objectives:

- Verify individual components
- Detect coding errors
- Test boundary conditions
- Verify local logic
- Make debugging easier

Example:

```c
int add(int a, int b)
{
    return a + b;
}
```

Possible unit tests:

```c
add(2,3)  → 5
add(0,5)  → 5
add(-2,2) → 0
```

---

## 25. Integration Testing

Integration testing combines individually tested modules and verifies their interactions.

```text
Module A ───┐
             │
 Module B ───┼──► Integrated System
             │
 Module C ───┘
```

It focuses on:

- Interfaces
- Data transfer
- Communication
- Module interactions
- Integration-related defects

Integration Process:

```text
A Test
  │
  ▼
A + B
  │
  ▼
A + B + C
  │
  ▼
A + B + C + D
  │
  ▼
Integrated System
```

---

## 26. System Testing

System testing tests the complete integrated software system against specified requirements.

```text
Unit Tests
     │
     ▼
Integration Tests
     │
     ▼
 Complete System
     │
     ▼
 System Testing
     │
     ▼
 Requirement Verification
```

It may test:

- Functional requirements
- Performance
- Security
- Usability
- Reliability
- Compatibility
- Recovery
- Stress behavior

---

## 27. Acceptance Testing

Acceptance testing determines whether the completed system is acceptable to the customer or intended users.

```text
COMPLETE SYSTEM
                   │
                   ▼
           Acceptance Testing
                   │
          ┌────────┴────────┐
          ▼                 ▼
       Accepted          Rejected
          │                 │
          ▼                 ▼
      Deployment        Corrections
```

It generally focuses on business and user requirements.

---

## 28. Alpha Testing

Alpha testing is performed in a controlled environment, usually by the development organization or selected internal users, before wider release.

```text
Development Team
       │
       ▼
 Internal Test Environment
       │
       ▼
     Alpha Test
       │
       ▼
 Defects / Feedback
       │
       ▼
   Corrections
```

The goal is to discover problems before releasing the software to external users.

---

## 29. Beta Testing

Beta testing is performed by selected external users in a real or realistic environment before the final release.

```text
Near-Final Software
                │
                ▼
       Selected External Users
                │
                ▼
            Beta Testing
                │
                ▼
        Real-World Feedback
                │
                ▼
        Fixes / Improvements
                │
                ▼
          Final Release
```

Alpha vs Beta:

| Alpha Testing | Beta Testing |
| ------------- | ------------ |
| Controlled environment | Real-world environment |
| Usually internal | Usually external selected users |
| Earlier | Later |
| Development organization has greater control | User environment is less controlled |
| Finds defects before external release | Collects real-world feedback |

---

## 30. Software Testing Strategies

A testing strategy defines the overall approach used to test software.

A common strategy progresses from small components toward the complete system.

```text
SOFTWARE
                │
                ▼
          UNIT TESTING
                │
                ▼
       INTEGRATION TESTING
                │
                ▼
         VALIDATION TESTING
                │
                ▼
          SYSTEM TESTING
                │
                ▼
       ACCEPTANCE TESTING
```

The strategy combines:

- Unit testing
- Integration testing
- Validation testing
- System testing
- Acceptance testing

---

## 31. Unit Testing Strategy

The smallest software components are tested independently.

```text
Function
        │
        ▼
   Test Inputs
        │
        ▼
 Expected Output
        │
        ▼
 Actual Output
        │
        ▼
    Comparison
```

Focus areas include:

- Local data
- Boundary conditions
- Independent paths
- Error handling
- Interface behavior

---

## 32. Integration Testing Strategy

Integration testing focuses on relationships among modules.

```text
MODULE A
          │
          ▼
       MODULE B
          │
          ▼
       MODULE C
          │
          ▼
       MODULE D
```

Important defects include:

- Incorrect interfaces
- Incorrect data passing
- Communication errors
- Incorrect assumptions between modules

---

## 33. System Testing Strategy

System testing treats the software as an integrated whole.

```text
┌─────────────────────────────┐
│         SOFTWARE SYSTEM     │
│                             │
│ Input → Processing → Output │
│                             │
│ Security                    │
│ Performance                 │
│ Reliability                 │
│ Usability                   │
└─────────────────────────────┘
```

---

## 34. Test Plan

A test plan is a document describing the testing objectives, scope, resources, schedule, strategy, environment, and responsibilities.

Test Plan Structure:

```text
TEST PLAN
                     │
      ┌──────────────┼──────────────┐
      ▼              ▼              ▼
    Scope         Strategy       Resources
      │              │              │
      ▼              ▼              ▼
 Objectives       Test Levels      People
 Features         Techniques       Tools
      │
      └──────────────┬──────────────┘
                     ▼
                  Schedule
                     │
                     ▼
                Test Execution
```

A test plan generally includes:

1. Test objectives
2. Scope
3. Features to test
4. Features not to test
5. Testing strategy
6. Testing levels
7. Test environment
8. Test tools
9. Resources
10. Schedule
11. Entry criteria
12. Exit criteria
13. Risks
14. Deliverables

---

## 35. Test Case Specification

Test case specification documents exactly how an individual test should be performed.

Format:

```text
┌─────────────────────────────┐
│ Test Case ID                │
├─────────────────────────────┤
│ Test Objective              │
├─────────────────────────────┤
│ Requirement Reference       │
├─────────────────────────────┤
│ Preconditions               │
├─────────────────────────────┤
│ Test Data                   │
├─────────────────────────────┤
│ Test Steps                  │
├─────────────────────────────┤
│ Expected Result             │
├─────────────────────────────┤
│ Actual Result               │
├─────────────────────────────┤
│ Status                      │
└─────────────────────────────┘
```

---

## 36. Test Case Execution

Test case execution means performing the documented test steps using specified inputs and recording the actual result.

```text
Test Case
    │
    ▼
Prepare Environment
    │
    ▼
Provide Input
    │
    ▼
Execute Software
    │
    ▼
Record Actual Result
    │
    ▼
Compare with Expected
    │
 ┌──┴──┐
 ▼     ▼
PASS  FAIL
       │
       ▼
   Defect Report
```

---

## 37. Test Case Analysis

Test case analysis examines the results obtained during testing to determine whether the software behaved correctly and whether defects exist.

```text
TEST RESULTS
                  │
                  ▼
          Analyze Results
                  │
          ┌───────┴────────┐
          ▼                ▼
       Expected         Unexpected
       Behavior           Behavior
          │                │
          ▼                ▼
        PASS            Investigate
                           │
                           ▼
                       Defect Found
                           │
                           ▼
                        Correction
                           │
                           ▼
                         Retest
```

---

## 38. Test Case Design Techniques

Test cases should cover both normal and abnormal conditions.

Important considerations:

- Valid inputs
- Invalid inputs
- Boundary values
- Empty values
- Extreme values
- Unexpected sequences
- Error conditions

Boundary Example:

If age must be between 18 and 60:

```text
Valid Range: 18 ─────────────── 60

Test:
17  → Invalid
18  → Valid
19  → Valid
59  → Valid
60  → Valid
61  → Invalid
```

Boundary values are important because defects frequently occur near limits.

---

## 39. Structural Test Coverage

Structural testing can measure coverage of program elements.

**Statement Coverage**

Checks whether each executable statement has been executed.

```text
Statement A ──► Executed ✓
Statement B ──► Executed ✓
Statement C ──► Executed ✓
```

**Branch Coverage**

Checks whether each decision outcome has been executed.

```text
Condition
              /     \
           True     False
             ✓         ✓
```

**Path Coverage**

Attempts to execute independent execution paths.

```text
START
          │
          ▼
       Decision
       /      \
      A        B
       \      /
        \    /
         ▼  ▼
          END
```

---

## 40. Complete Unit 3 Testing Flow

```text
SOFTWARE
                       │
                       ▼
                  TEST PLANNING
                       │
                       ▼
                TEST CASE DESIGN
                       │
                       ▼
                  UNIT TESTING
                       │
                       ▼
              INTEGRATION TESTING
                       │
                       ▼
               VALIDATION TESTING
                       │
                       ▼
                 SYSTEM TESTING
                       │
                       ▼
              ACCEPTANCE TESTING
                       │
              ┌────────┴────────┐
              ▼                 ▼
            ALPHA              BETA
              │                 │
              └────────┬────────┘
                       ▼
                  FINAL RELEASE
```

## 41. Complete Unit 3 Concept Map

```text
UNIT 3
                    SOFTWARE CODING
                           │
          ┌────────────────┼─────────────────┐
          ▼                ▼                 ▼
       CODING          SOFTWARE TESTING    METRICS
          │                │                 │
   ┌──────┼──────┐     ┌───┼────────┐       ├─ LOC
   ▼      ▼      ▼     ▼   ▼        ▼       ├─ Complexity
Top-Down Bottom-Up  Information  Functional  └─ Style
Structured Structured Hiding     Testing
Programming Programming    │        │
   │       │               │        ▼
   │       │               │   Structural
   │       │               │     Testing
   │       │               │
   └───────┼───────────────┘
           ▼
       Programming
          Style
           │
           ▼
    Internal Documentation
           │
           ▼
     Testing Strategies
           │
     ┌─────┼──────────────┐
     ▼     ▼              ▼
    Unit Integration     System
     │       │              │
     └───────┼──────────────┘
             ▼
        Acceptance
          Testing
             │
       ┌─────┴─────┐
       ▼           ▼
     Alpha        Beta
       │           │
       └─────┬─────┘
             ▼
         TEST PLAN
             │
             ▼
      TEST CASE SPECIFICATION
             │
             ▼
        TEST EXECUTION
             │
             ▼
         TEST ANALYSIS
             │
             ▼
      PASS / DEFECT / RETEST
```


---

# UNIT 4: SOFTWARE TESTING AND QUALITY ASSURANCE

## 1. Software Quality

Software quality is the degree to which software satisfies specified requirements, user expectations, and quality attributes. Quality is not limited to whether a program runs correctly. It also includes reliability, usability, efficiency, maintainability, security, and other characteristics.

```text
SOFTWARE QUALITY
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
   FUNCTIONALITY    RELIABILITY       USABILITY
        │               │                │
        └───────────────┼────────────────┘
                        ▼
                 MAINTAINABILITY
                        │
                        ▼
                   EFFICIENCY
                        │
                        ▼
                    SECURITY
```

A quality software system should:

- Satisfy requirements
- Produce correct results
- Be dependable
- Be easy to use
- Be maintainable
- Use resources efficiently
- Protect data and operations

---

## 2. Software Quality Assurance

Software Quality Assurance (SQA) is a systematic set of planned activities used to ensure that software development processes and products meet defined quality standards.

SQA focuses not only on finding defects but also on preventing defects by improving the development process.

```text
SOFTWARE DEVELOPMENT
                      │
                      ▼
             Quality Planning
                      │
                      ▼
             Process Standards
                      │
                      ▼
             Reviews & Audits
                      │
                      ▼
                   Testing
                      │
                      ▼
              Defect Analysis
                      │
                      ▼
             Process Improvement
                      │
                      ▼
              QUALITY SOFTWARE
```

---

## 3. Quality Assurance vs Quality Control

Quality Assurance is mainly process-oriented, while Quality Control is mainly product-oriented.

```text
SOFTWARE QUALITY
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
     QUALITY ASSURANCE    QUALITY CONTROL
          │                   │
      Process Focus       Product Focus
          │                   │
   Prevent Defects       Detect Defects
          │                   │
   Reviews, Standards    Testing, Inspection
```

| Quality Assurance | Quality Control |
| ----------------- | --------------- |
| Process-oriented | Product-oriented |
| Prevents defects | Detects defects |
| Focuses on development process | Focuses on software product |
| Includes standards and audits | Includes testing and inspection |
| Continuous throughout development | Often concentrated around evaluation activities |

---

## 4. Software Quality Factors

Software quality can be evaluated using several quality factors.

Important factors include:

- Correctness
- Reliability
- Efficiency
- Integrity
- Usability
- Maintainability
- Flexibility
- Testability
- Portability
- Reusability
- Interoperability

```text
QUALITY
                       │
       ┌───────────────┼───────────────┐
       ▼               ▼               ▼
   Correctness      Reliability      Usability
       │               │               │
       ▼               ▼               ▼
   Efficiency      Maintainability   Portability
       │               │               │
       └───────────────┼───────────────┘
                       ▼
                 Overall Quality
```

---

## 5. Correctness

Correctness is the degree to which software performs the functions specified by its requirements.

Example:

If a banking application must calculate account balance as:

```text
Balance = Deposits - Withdrawals
```

then the software should consistently produce the correct balance.

```text
Input Data
            │
            ▼
      ┌────────────┐
      │ Processing │
      └─────┬──────┘
            │
            ▼
       Expected Result
            │
            ▼
       Actual Result
            │
       ┌────┴────┐
       ▼         ▼
     Equal    Different
       │         │
       ▼         ▼
    Correct    Defect
```

---

## 6. Reliability

Reliability is the ability of software to perform its required functions consistently for a specified period under specified conditions.

A reliable system should minimize failures.

```text
SOFTWARE
           │
           ▼
     Execute Repeatedly
           │
      ┌────┴────┐
      ▼         ▼
   Success    Failure
      │         │
      ▼         ▼
  Reliable   Investigate
```

Reliability is particularly important for systems such as:

- Banking systems
- Medical systems
- Transportation systems
- Industrial control systems

---

## 7. Efficiency

Efficiency refers to how effectively software uses system resources such as CPU time, memory, storage, and network bandwidth.

```text
EFFICIENCY
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
       CPU        Memory      Storage
        │           │           │
        └───────────┼───────────┘
                    ▼
              Resource Usage
```

An efficient application should perform required operations without unnecessary consumption of resources.

---

## 8. Usability

Usability describes how easily users can learn, understand, operate, and use software.

Important aspects include:

- Ease of learning
- Ease of operation
- Clear interface
- Understandable messages
- Accessibility
- User satisfaction

```text
USER
              │
              ▼
       ┌─────────────┐
       │ User        │
       │ Interface   │
       └──────┬──────┘
              │
              ▼
        Easy Operation
              │
              ▼
          User Goal
```

---

## 9. Maintainability

Maintainability is the ease with which software can be corrected, modified, improved, or adapted.

```text
SOFTWARE
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
       Correct    Modify    Improve
          │         │         │
          └─────────┼─────────┘
                    ▼
              Maintenance
```

Maintainable software usually has:

- Clear structure
- Modular design
- Good documentation
- Meaningful names
- Low coupling
- High cohesion

---

## 10. Portability

Portability is the ease with which software can be transferred from one hardware or software environment to another.

```text
SOFTWARE
                │
        ┌───────┼────────┐
        ▼       ▼        ▼
     Windows   Linux    macOS
        │       │        │
        └───────┼────────┘
                ▼
            Portability
```

For example, software designed to work on multiple operating systems has greater portability.

---

## 11. Software Reliability

Software reliability measures the probability that software performs without failure for a specified time and environment.

Important concepts include:

- Failure
- Fault
- Error
- Mean Time Between Failures
- Mean Time To Repair
- Availability

```text
Error
  │
  ▼
Fault
  │
  ▼
Failure
  │
  ▼
Repair
  │
  ▼
Operational System
```

---

## 12. Failure, Fault and Error

These terms describe different stages of software problems.

**Error**

A human mistake.

**Fault**

A defect in the software caused by an error.

**Failure**

The observable incorrect behavior produced when the fault is executed.

```text
Developer Mistake
       │
       ▼
      Error
       │
       ▼
      Fault
       │
       ▼
Program Executes Faulty Code
       │
       ▼
    Failure
```

Example:

```text
Requirement:
Age >= 18 should be accepted.

Incorrect code:
if(age > 18)

For age = 18:

Code executes
      │
      ▼
Condition becomes false
      │
      ▼
Incorrect output
      │
      ▼
Failure
```

---

## 13. Software Metrics

Software metrics are quantitative measurements used to assess characteristics of software or the software development process.

They can measure:

- Size
- Complexity
- Quality
- Productivity
- Reliability
- Maintainability
- Defect density

```text
SOFTWARE METRICS
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
      SIZE          COMPLEXITY        QUALITY
        │               │               │
        ▼               ▼               ▼
       LOC         Cyclomatic       Defect Rate
       FP          Complexity       Reliability
```

---

## 14. Lines of Code

LOC (Lines of Code) is a basic measure of software size.

```text
LOC = Number of lines of source code
```

Example:

```c
int a;
int b;
int sum;

a = 10;
b = 20;
sum = a + b;
```

Depending on the counting convention, comments, blank lines, and declarations may be treated differently.

Uses:

- Estimate development size
- Compare productivity
- Estimate maintenance effort
- Calculate defect density

Limitation:

- Different programming languages can accomplish the same task with very different numbers of lines.

---

## 15. Function Point

Function Point (FP) measures software size based on the functionality delivered to users rather than the number of source-code lines.

It considers five major categories:

```text
FUNCTION POINT
                       │
       ┌───────────────┼───────────────┐
       ▼               ▼               ▼
 External          External         External
 Inputs            Outputs          Inquiries
       │               │               │
       └───────────────┼───────────────┘
                       ▼
                 Internal Logical
                     Files
                       │
                       ▼
              External Interfaces
```

The five categories are:

1. External Inputs (EI)
2. External Outputs (EO)
3. External Inquiries (EQ)
4. Internal Logical Files (ILF)
5. External Interface Files (EIF)

Function points are useful because they are less dependent on a particular programming language.

---

## 16. Defect Density

Defect density represents the number of defects relative to software size.

A common formula is:

```text
Defect Density = Number of Defects / Software Size
```

For example, if 20 defects are found in 10 KLOC:

```text
Defect Density = 20 / 10 = 2
```

So the defect density is 2 defects/KLOC.

```text
Defects Found
                 │
                 ▼
          ┌─────────────┐
          │ Divide by   │
          │ Software    │
          │ Size        │
          └──────┬──────┘
                 ▼
          Defect Density
```

---

## 17. Software Reviews

A software review is a systematic examination of software work products to identify defects and improve quality.

Reviews can be applied to:

- Requirements
- Design
- Source code
- Test plans
- Documentation

```text
Work Product
             │
             ▼
       Review Meeting
             │
      ┌──────┴──────┐
      ▼             ▼
   Examine        Discuss
      │             │
      └──────┬──────┘
             ▼
        Find Defects
             │
             ▼
       Correct Defects
```

Reviews help identify problems early, when they are generally less costly to correct.

---

## 18. Technical Review

A technical review is an evaluation performed by technically qualified people to determine whether a software work product satisfies technical requirements and standards.

It may examine:

- Design correctness
- Algorithms
- Interfaces
- Standards
- Architecture
- Technical risks

```text
Work Product
                  │
                  ▼
          Technical Review
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
    Design      Code      Interface
       │          │          │
       └──────────┼──────────┘
                  ▼
             Review Result
```

---

## 19. Walkthrough

A walkthrough is a review in which the author explains a software work product step by step to other participants.

```text
AUTHOR
                   │
                   ▼
             Explains Work
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
    Reviewer 1  Reviewer 2  Reviewer 3
        │          │          │
        └──────────┼──────────┘
                   ▼
               Findings
```

Participants may identify:

- Logical errors
- Missing requirements
- Poor assumptions
- Interface problems
- Documentation issues

---

## 20. Inspection

Inspection is a formal and systematic review technique used to identify defects in software work products.

Unlike an informal review, inspection follows defined procedures and roles.

```text
SOFTWARE PRODUCT
                    │
                    ▼
               Preparation
                    │
                    ▼
              Inspection Meeting
                    │
                    ▼
             Defect Identification
                    │
                    ▼
              Defect Recording
                    │
                    ▼
                 Rework
                    │
                    ▼
              Follow-up Review
```

Inspection is particularly effective for finding defects before software execution.

---

## 21. Formal Technical Review

A Formal Technical Review (FTR) is a structured review of software products conducted to identify defects, verify compliance with standards, and improve quality.

Typical participants may include:

- Author
- Review leader
- Technical reviewers
- Recorder

```text
FTR
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
     Author     Reviewers  Recorder
       │          │          │
       └──────────┼──────────┘
                  ▼
           Defects / Findings
                  │
                  ▼
                Rework
                  │
                  ▼
              Follow-up
```

---

## 22. Software Configuration Management

Software Configuration Management (SCM) is the process of controlling and tracking changes to software and related artifacts throughout the software life cycle.

Configuration items can include:

- Source code
- Requirements
- Design documents
- Test cases
- Build files
- Documentation

```text
CONFIGURATION ITEMS
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
     Source        Design        Tests
      Code        Documents      Cases
       │             │             │
       └─────────────┼─────────────┘
                     ▼
             Configuration
              Management
```

---

## 23. Version Control

Version control records changes made to files and allows developers to manage different versions of software.

```text
PROJECT
                    │
                    ▼
               Version 1.0
                    │
                 Changes
                    ▼
               Version 1.1
                    │
                 Changes
                    ▼
               Version 1.2
                    │
                 Changes
                    ▼
               Version 2.0
```

A version-control system can provide:

- Change history
- Collaboration
- Branching
- Merging
- Rollback
- Version identification

---

## 24. Change Management

Change management controls modifications to software after requirements, design, or implementation have been established.

```text
CHANGE REQUEST
                    │
                    ▼
              Impact Analysis
                    │
                    ▼
              Review / Approval
                    │
             ┌──────┴──────┐
             ▼             ▼
          Approved       Rejected
             │
             ▼
        Implement Change
             │
             ▼
            Test
             │
             ▼
         Release Change
```

The purpose is to prevent uncontrolled changes from damaging system consistency.

---

## 25. Change Control

Change control is the formal process used to evaluate, approve, implement, and verify requested changes.

A change request generally contains:

- Description
- Reason
- Priority
- Impact
- Cost
- Risk
- Approval status

```text
Request
   │
   ▼
Analysis
   │
   ▼
Approval
   │
   ▼
Implementation
   │
   ▼
Testing
   │
   ▼
Release
```

---

## 26. Software Configuration Item

A Software Configuration Item (SCI) is a software artifact placed under configuration management.

Examples:

```text
SOFTWARE PROJECT
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   Requirements      Source Code    Test Cases
        │              │              │
        ▼              ▼              ▼
      Design        Build Files    Documents
```

Each item can have an identified version and controlled change history.

---

## 27. Baseline

A baseline is an officially reviewed and approved version of a software work product that serves as a reference point for future development.

```text
Version 1.0
    │
    ▼
Reviewed
    │
    ▼
Approved
    │
    ▼
 BASELINE
    │
    ▼
Changes require
controlled process
```

Examples:

- Requirements baseline
- Design baseline
- Product baseline

---

## 28. Software Quality Standards

Software organizations may use standards and models to establish consistent quality practices.

Common examples include:

- ISO/IEC 25010
- ISO 9001
- CMMI

These provide frameworks or characteristics for evaluating and improving software processes and products.

```text
QUALITY STANDARDS
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
    ISO/IEC       ISO 9001     CMMI
     25010          │           │
        │           ▼           ▼
        ▼       Quality       Process
    Product      System      Maturity
     Quality
```

---

## 29. ISO/IEC 25010 Quality Model

ISO/IEC 25010 defines a software product quality model with characteristics such as:

- Functional suitability
- Performance efficiency
- Compatibility
- Usability
- Reliability
- Security
- Maintainability
- Portability

```text
ISO/IEC 25010
                       │
 ┌──────────┬──────────┼───────────┬──────────┐
 ▼          ▼          ▼           ▼          ▼
Function  Performance Compatibility Usability Reliability
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Security   Maintainability Portability
```

---

## 30. CMMI

Capability Maturity Model Integration (CMMI) is a framework used to assess and improve organizational processes.

It represents increasing levels of process maturity.

```text
LEVEL 5
          OPTIMIZING
               ▲
               │
             LEVEL 4
          QUANTITATIVELY
            MANAGED
               ▲
               │
             LEVEL 3
            DEFINED
               ▲
               │
             LEVEL 2
            MANAGED
               ▲
               │
             LEVEL 1
            INITIAL
```

Higher maturity indicates greater process definition, management, measurement, and improvement.

---

## 31. Software Quality Assurance Activities

Major SQA activities include:

```text
SQA ACTIVITIES
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
   Standards      Reviews       Audits
       │            │            │
       ▼            ▼            ▼
    Metrics       Testing     Compliance
       │            │            │
       └────────────┼────────────┘
                    ▼
             Process Improvement
```

Other activities include:

- Quality planning
- Process monitoring
- Configuration management
- Defect tracking
- Documentation control
- Risk management
- Training
- Quality reporting

---

## 32. Defect Management

Defect management is the systematic process of identifying, recording, analyzing, fixing, and verifying software defects.

```text
Defect Detection
                 │
                 ▼
          Defect Recording
                 │
                 ▼
          Defect Classification
                 │
                 ▼
           Priority Assignment
                 │
                 ▼
              Fixing
                 │
                 ▼
              Retesting
                 │
          ┌──────┴──────┐
          ▼             ▼
       Verified       Still Fails
          │             │
          ▼             ▼
        Close        Reopen
```

---

## 33. Defect Life Cycle

A defect passes through several states.

```text
NEW
              │
              ▼
           ASSIGNED
              │
              ▼
           ANALYZED
              │
              ▼
            FIXED
              │
              ▼
           RETESTED
          /         \
       PASS          FAIL
        │              │
        ▼              ▼
      CLOSED         REOPENED
                         │
                         ▼
                       FIXED
```

---

## 34. Defect Severity and Priority

Severity indicates the technical impact of a defect.

Priority indicates how urgently the defect should be addressed.

```text
Severity
   │
   ├── Critical
   ├── High
   ├── Medium
   └── Low

Priority
   │
   ├── Immediate
   ├── High
   ├── Medium
   └── Low
```

A defect can have high severity but a different priority depending on the project context.

---

## 35. Software Quality Improvement

Quality improvement is a continuous process.

```text
PLAN
              │
              ▼
              DO
              │
              ▼
            CHECK
              │
              ▼
             ACT
              │
              ▼
          IMPROVE PROCESS
              │
              └──────────► PLAN
```

This creates a continuous improvement cycle.

---

## 36. Verification and Validation

Verification asks:

> Are we building the product correctly?

It checks whether work products conform to specifications.

Validation asks:

> Are we building the correct product?

It checks whether the final software satisfies user needs and intended use.

```text
V & V
                   │
          ┌────────┴────────┐
          ▼                 ▼
     VERIFICATION        VALIDATION
          │                 │
   Specification          User Needs
          │                 │
   Reviews/Inspection      Testing
          │                 │
          ▼                 ▼
 "Build the product     "Build the right
      correctly"             product"
```

---

## 37. Verification Techniques

Verification may use:

- Reviews
- Inspections
- Walkthroughs
- Technical reviews
- Static analysis
- Requirement checking
- Design checking

```text
Requirement
             │
             ▼
          Review
             │
             ▼
           Design
             │
             ▼
          Review
             │
             ▼
           Code
             │
             ▼
       Static Analysis
```

Verification often occurs without executing the program.

---

## 38. Validation Techniques

Validation primarily involves executing the software and evaluating whether it satisfies intended requirements.

```text
SOFTWARE
                 │
                 ▼
            Execute
                 │
                 ▼
          Observe Results
                 │
                 ▼
       Compare with Requirements
                 │
            ┌────┴────┐
            ▼         ▼
         Satisfies   Does Not
            │         │
            ▼         ▼
          Valid     Defect
```

Testing is a major validation activity.

---

## 39. Verification vs Validation

| Verification | Validation |
| ------------ | ---------- |
| Checks conformance to specifications | Checks suitability for intended use |
| "Are we building the product right?" | "Are we building the right product?" |
| Reviews and inspections are common | Execution-based testing is common |
| Can often be performed without execution | Usually requires execution |
| Focuses on intermediate work products | Focuses strongly on resulting software |

---

## 40. Complete Unit 4 Quality Structure

```text
UNIT 4
          SOFTWARE QUALITY ASSURANCE
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
    QUALITY          QUALITY          SOFTWARE
    CONCEPTS         ASSURANCE        METRICS
       │               │                │
       ├─ Correctness  ├─ Reviews      ├─ LOC
       ├─ Reliability  ├─ Audits       ├─ Function Points
       ├─ Efficiency   ├─ Standards    ├─ Defect Density
       ├─ Usability    ├─ Testing      └─ Complexity
       ├─ Maintain.    └─ Improvement
       └─ Portability
                       │
                       ▼
             CONFIGURATION MANAGEMENT
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Version       Change       Baseline
       Control       Control
          │            │
          └────────────┼────────────┘
                       ▼
                DEFECT MANAGEMENT
                       │
                       ▼
              Verification & Validation
                       │
              ┌────────┴────────┐
              ▼                 ▼
        Verification        Validation
              │                 │
        Reviews/Inspection    Testing
              │                 │
              └────────┬────────┘
                       ▼
                 QUALITY SOFTWARE
```

## 41. Complete Unit 4 Concept Map

```text
UNIT 4
                           │
                           ▼
                SOFTWARE QUALITY
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
 Quality Factors       SQA Activities     Metrics
        │                  │                  │
   ┌────┼────┐        ┌────┼────┐       ┌────┼────┐
   ▼    ▼    ▼        ▼    ▼    ▼       ▼    ▼    ▼
Correct Reliable   Review Audit Test    LOC   FP Defects
Usability Efficient Standards      Complexity
Maintainability
Portability
        │
        ▼
   Quality Assurance
        │
        ▼
 Verification & Validation
        │
    ┌───┴────┐
    ▼        ▼
Verification Validation
    │        │
 Reviews    Testing
 Inspection
 Walkthrough
    │
    ▼
Configuration Management
    │
 ┌──┼──────────┐
 ▼  ▼          ▼
Version Change Baseline
Control Control
    │
    ▼
Defect Management
    │
    ▼
Detect → Record → Analyze
    │
    ▼
Fix → Retest → Close
    │
    ▼
Continuous Quality Improvement
```
