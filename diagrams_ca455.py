# diagrams_ca455.py
# High-definition educational SVG diagrams for CA455: Software Engineering
from diagram_primitives import svg_canvas, card_box, pill_node, connector, footer_banner

def get_ca455_diagram(concept_id):
    cid = concept_id.lower()

    if "relationships-among-objects" in cid or "cohesion" in cid or "coupling" in cid:
        content = f'''
        <!-- Cohesion vs Coupling Spectrum -->
        {card_box(50, 75, 360, 240, "Cohesion Spectrum (Intra-Module)", "Strength of Internal Focus", [
            ("Functional [BEST]", "Module performs single well-defined task"),
            ("Sequential", "Output of one element is input to next"),
            ("Communicational", "Functions operate on same input/output data"),
            ("Procedural", "Functions execute in specified sequential order"),
            ("Temporal", "Functions executed at same startup/exit time"),
            ("Logical", "Functions grouped by category (e.g. all print)"),
            ("Coincidental [WORST]", "Arbitrary grouping; zero logical relationship")
        ], "#10b981", "#064e3b")}

        {connector(410, 195, 490, 195, "strive for", "#10b981", "mEmerald")}

        {card_box(490, 75, 380, 240, "Coupling Spectrum (Inter-Module)", "Degree of Interdependence", [
            ("Data [BEST / LOWEST]", "Passes scalar primitive variables only"),
            ("Stamp", "Passes entire composite data structure"),
            ("Control", "Passes flags or tokens directing internal logic"),
            ("Common", "Modules read/write shared global variables"),
            ("Content [WORST]", "Module directly modifies code/data of another!"),
            ("Design Rule", "MAXIMIZE COHESION, MINIMIZE COUPLING")
        ], "#f43f5e", "#881337")}

        {footer_banner(50, 335, 820, 55, "Golden Software Architecture Principle: High Cohesion + Low Coupling", "High cohesion produces independent, maintainable, reusable components; low coupling minimizes ripple effects when changing code.")}
        '''
        return svg_canvas("Modularity Architecture: Cohesion Spectrum vs Coupling Spectrum", "Intra-module cohesion levels (Coincidental to Functional) and inter-module coupling levels", [
            ("Cohesion Scale", "#10b981", "card"),
            ("Coupling Scale", "#f43f5e", "card"),
            ("Design Goal", "#34d399", "line")
        ], content)

    elif "prototyping" in cid or "model" in cid or "waterfall" in cid or "spiral" in cid:
        content = f'''
        <!-- Waterfall vs Spiral Model -->
        {card_box(50, 75, 360, 240, "Classical Waterfall with Feedback", "Linear Sequential Lifecycle", [
            ("Feasibility", "Economic, technical & operational assessment"),
            ("SRS Phase", "Software Requirements Specification IEEE 830"),
            ("Design", "Architectural & detailed component design"),
            ("Coding", "Module implementation & unit testing"),
            ("Integration", "System assembly & alpha/beta verification"),
            ("Maintenance", "Consumes 60%+ of total lifetime software cost"),
            ("Feedback", "Each phase feeds back defect corrections upstream")
        ], "#6366f1", "#1e1b4b")}

        {connector(410, 195, 490, 195, "Risk Cycle", "#818cf8", "mIndigo")}

        {card_box(490, 75, 380, 240, "Boehm's Spiral Model", "Risk-Driven Incremental Lifecycle", [
            ("Quadrant I", "Determine objectives, alternatives & constraints"),
            ("Quadrant II", "Identify & resolve technical risks (Prototypes!)"),
            ("Quadrant III", "Develop & verify next-level software increment"),
            ("Quadrant IV", "Customer evaluation & review; plan next spiral"),
            ("Radius", "Angular dimension = Progress; Radial distance = Cost"),
            ("Use Case", "High-risk, mission-critical large scale systems")
        ], "#06b6d4", "#155e75")}

        {footer_banner(50, 335, 820, 55, "Software Process Selection Principle", "Waterfall is optimal for well-understood, stable requirements; Spiral and Agile are necessary when risks and requirements evolve dynamically.")}
        '''
        return svg_canvas("Software Life Cycle Models: Waterfall vs Boehm's Spiral", "Sequential linear phase gating with feedback loops contrasted with Risk-Driven iterative spirals", [
            ("Waterfall Flow", "#6366f1", "card"),
            ("Spiral Risk Model", "#06b6d4", "card"),
            ("Process Evolution", "#38bdf8", "line")
        ], content)

    elif "alpha-testing" in cid or "testing" in cid:
        content = f'''
        <!-- Testing Techniques & Cyclomatic Complexity -->
        {card_box(50, 75, 360, 240, "Black-Box Testing (Functional)", "Specification-Based Verification", [
            ("Concept", "Tests functionality without inspecting source code"),
            ("Equivalence (EP)", "Partitions inputs into valid & invalid classes"),
            ("Boundary (BVA)", "Tests values at boundaries (min, min+1, max-1, max)"),
            ("Error Guessing", "Heuristic test cases based on developer experience"),
            ("State Transition", "Tests system behavior across state changes"),
            ("Decision Table", "Tests complex boolean logic combinations")
        ], "#6366f1", "#1e1b4b")}

        {connector(410, 195, 490, 195, "complemented by", "#06b6d4", "mCyan")}

        {card_box(490, 75, 380, 240, "White-Box Testing (Structural)", "Code Logic & Basis Path Coverage", [
            ("Control Flow", "Constructs Control Flow Graph (Nodes & Edges)"),
            ("McCabe Formula", "V(G) = E - N + 2P (Edges - Nodes + 2×Components)"),
            ("Predicate Nodes", "Alternative formula: V(G) = P + 1"),
            ("Basis Paths", "Exact count of linearly independent code paths"),
            ("Statement Cov", "Guarantees every line executes at least once"),
            ("Branch Coverage", "Guarantees every true/false decision branch tested"),
            ("Condition Cov", "Evaluates all compound condition terms (A && B)")
        ], "#06b6d4", "#155e75")}

        {footer_banner(50, 335, 820, 55, "Testing Axiom: Testing Shows the Presence of Bugs, Not Their Absence", "Combining Black-Box Equivalence Partitioning with White-Box Cyclomatic Basis Path testing maximizes defect yield.")}
        '''
        return svg_canvas("Software Testing Strategies: Black-Box vs White-Box Testing", "Equivalence Partitioning, Boundary Value Analysis, and McCabe's Cyclomatic Complexity V(G)", [
            ("Black-Box Testing", "#6366f1", "card"),
            ("White-Box Basis Path", "#06b6d4", "card"),
            ("Coverage Metric", "#34d399", "line")
        ], content)

    elif "software-quality" in cid or "cmmi" in cid:
        content = f'''
        <!-- SQA McCall and CMMI -->
        {card_box(50, 75, 360, 240, "McCall's Quality Factors Triangle", "11 Software Quality Dimensions", [
            ("Product Operation", "Correctness, Reliability, Efficiency, Integrity, Usability"),
            ("Product Revision", "Maintainability, Flexibility, Testability"),
            ("Product Transition", "Portability, Reusability, Interoperability"),
            ("Defect Density", "Defects / KLOC or Defects / Function Point"),
            ("Reviews & Audits", "Formal Technical Reviews (FTR), Walkthroughs, Inspections")
        ], "#6366f1", "#1e1b4b")}

        {connector(410, 195, 490, 195, "CMMI Model", "#10b981", "mEmerald")}

        {card_box(490, 75, 380, 240, "CMMI 5 Maturity Levels", "Process Capability Maturity", [
            ("Level 1: Initial", "Ad-hoc, chaotic processes; individual heroics"),
            ("Level 2: Managed", "Project-level planning, requirements tracking"),
            ("Level 3: Defined", "Organization-wide standard software processes"),
            ("Level 4: Quantitatively", "Sub-processes measured with statistical control"),
            ("Level 5: Optimizing", "Continuous process improvement & defect prevention")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 820, 55, "Quality Assurance vs Quality Control", "QA is process-oriented (preventing defects from entering the build); QC is product-oriented (identifying defects in the finished software).")}
        '''
        return svg_canvas("Software Quality Assurance (SQA) & CMMI Maturity Architecture", "McCall's 11 Quality Factors and CMMI 5-Level Process Capability Maturity Model", [
            ("McCall Quality Model", "#6366f1", "card"),
            ("CMMI Process Levels", "#10b981", "card"),
            ("Continuous Improvement", "#34d399", "line")
        ], content)

    elif "introduction-to-software-engineering" in cid or "software-engineering" in cid:
        content = f'''
        {card_box(40, 75, 250, 240, "SDLC Overview", "Software Development Lifecycle", [
            ("Requirements", "Problem understanding & SRS specification"),
            ("Design", "Architecture: HLD → LLD modules"),
            ("Implementation", "Coding with standards & code reviews"),
            ("Testing", "Unit, Integration, System, Acceptance"),
            ("Deployment", "Release to production environment"),
            ("Maintenance", "Bug fixes, enhancements, patches"),
            ("Process Models", "Waterfall, Agile, Spiral, Prototype")
        ], "#6366f1", "#1e1b4b")}

        {connector(290, 195, 370, 195, "follows", "#818cf8", "mIndigo")}

        {card_box(370, 75, 250, 240, "Requirements Engineering", "IEEE 830 SRS Standard", [
            ("Feasibility Study", "Technical, economic, schedule assessment"),
            ("Elicitation", "Interviews, surveys, JAD sessions"),
            ("Analysis", "Use-case models, DFD, state diagrams"),
            ("Specification", "Functional & Non-Functional requirements"),
            ("Validation", "Client review and sign-off process"),
            ("Change Control", "Formal change request procedures"),
            ("Traceability", "Requirements → Design → Test mapping")
        ], "#06b6d4", "#155e75")}

        {connector(620, 195, 700, 195, "as", "#10b981", "mEmerald")}

        {card_box(700, 75, 165, 240, "SE Challenges", "Modern Issues", [
            ("Scale", "Millions of LOC"),
            ("Concurrency", "Race conditions"),
            ("Security", "Threat modeling"),
            ("Legacy", "Technical debt"),
            ("Cost", "Budget overruns"),
            ("Time", "Schedule slippage"),
            ("People", "Team coordination")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Software Engineering vs Programming", "SE applies systematic, disciplined, quantifiable approaches to development. It manages complexity that individual programming cannot address alone.")}
        '''
        return svg_canvas("Software Engineering: SDLC, Requirements Engineering & Challenges", "Complete lifecycle phases, requirements elicitation, and modern SE complexity challenges", [
            ("SDLC Phases", "#6366f1", "card"),
            ("Requirements Eng", "#06b6d4", "card"),
            ("SE Challenges", "#10b981", "card")
        ], content)

    elif "software-coding" in cid or "coding" in cid or "structured-design" in cid or "software-design" in cid or "lines-of-code" in cid:
        content = f'''
        {card_box(40, 75, 250, 240, "Software Coding Standards", "Implementation Best Practices", [
            ("Naming Conventions", "camelCase, snake_case, PascalCase rules"),
            ("Comments", "Intent-documenting (why, not what)"),
            ("Single Responsibility", "One module = one clear purpose"),
            ("DRY Principle", "Don't Repeat Yourself — extract common code"),
            ("KISS", "Keep It Simple, Stupid — avoid overengineering"),
            ("Code Reviews", "Peer inspection catches 60-70% of defects"),
            ("Version Control", "Git commits: atomic, meaningful messages")
        ], "#6366f1", "#1e1b4b")}

        {connector(290, 195, 370, 195, "measured by", "#818cf8", "mIndigo")}

        {card_box(370, 75, 250, 240, "Size Metrics & Estimation", "LOC, FP, Cocomo Models", [
            ("LOC", "Lines of Code — simplest size metric"),
            ("KLOC", "Kilo-LOC = 1000 lines"),
            ("Function Points", "Inputs, Outputs, Queries, Files, Interfaces"),
            ("COCOMO I", "Effort = a × (KLOC)^b person-months"),
            ("COCOMO II", "Refined with cost drivers & scale factors"),
            ("Halstead Metrics", "Volume, Difficulty, Effort from operators/operands"),
            ("McCabe CC", "Cyclomatic Complexity = E - N + 2P")
        ], "#06b6d4", "#155e75")}

        {connector(620, 195, 700, 195, "via", "#10b981", "mEmerald")}

        {card_box(700, 75, 165, 240, "Structured Design", "Modular Architecture", [
            ("Top-Down", "Decompose system to modules"),
            ("Module Size", "Fit in 1 screen (≤50 LOC)"),
            ("High Cohesion", "Module does ONE thing"),
            ("Low Coupling", "Minimal cross-dependencies"),
            ("SC Diagram", "Structure Chart hierarchy"),
            ("Fan-out", "# of subordinate modules"),
            ("Fan-in", "# callers (reuse metric)")
        ], "#10b981", "#064e3b")}

        {footer_banner(40, 335, 840, 55, "Software Size & Estimation Principle", "LOC is simple but language-dependent. Function Points are language-independent. COCOMO converts size to effort in person-months.")}
        '''
        return svg_canvas("Software Coding Standards, Size Metrics & Structured Design Principles", "Coding best practices, LOC/FP metrics, COCOMO estimation, and modular design hierarchy", [
            ("Coding Standards", "#6366f1", "card"),
            ("Size / Estimation", "#06b6d4", "card"),
            ("Structured Design", "#10b981", "card")
        ], content)

    else:
        # High-definition default Software Engineering diagram
        content = f'''
        {card_box(50, 75, 230, 240, "Requirements (SRS)", "Problem Definition", [
            ("Elicitation", "Interviews, surveys, user stories"),
            ("Analysis", "Feasibility, DFD, use-case models"),
            ("IEEE 830", "SRS functional & non-functional spec"),
            ("Validation", "Sign-off with client stakeholders")
        ], "#6366f1", "#1e1b4b")}

        {connector(280, 195, 360, 195, "architects", "#818cf8", "mIndigo")}

        {card_box(360, 75, 250, 240, "Design & Architecture", "High & Low Level Design", [
            ("High Level (HLD)", "System architecture, modules, DFD"),
            ("Low Level (LLD)", "Class diagrams, algorithm flowcharts"),
            ("Principles", "Information hiding, abstraction"),
            ("Coupling", "Strive for loose data coupling")
        ], "#06b6d4", "#155e75")}

        {connector(610, 195, 690, 195, "validates", "#10b981", "mEmerald")}

        {card_box(690, 75, 190, 240, "Testing & V-Model", "Verification & Validation", [
            ("Unit Test", "Function level"),
            ("Integration", "Interface test"),
            ("System Test", "Complete build"),
            ("Acceptance", "Client UAT")
        ], "#10b981", "#064e3b")}

        {footer_banner(50, 335, 830, 55, "The Software Engineering V-Model Relationship", "Each development phase has a corresponding testing verification phase to guarantee specification compliance.")}
        '''
        return svg_canvas("Software Engineering Lifecycle & Architectural Workflow", "Requirements Engineering, Modular Architectural Design, and V-Model Verification", [
            ("Requirements SRS", "#6366f1", "card"),
            ("Modular Design", "#06b6d4", "card"),
            ("V-Model Testing", "#10b981", "card")
        ], content)
