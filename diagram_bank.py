# diagram_bank.py
# High-definition SVG educational diagrams for StudyPlay

def svg_card(title, subtitle, inner_svg, viewBox="0 0 850 480"):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewBox}" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 10px 25px rgba(0,0,0,0.5));">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b101b"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
    <linearGradient id="accInd" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#4f46e5"/>
    </linearGradient>
    <linearGradient id="accCyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#0891b2"/>
    </linearGradient>
    <linearGradient id="accEm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="accAmb" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="accPurp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/>
    </marker>
    <marker id="arrCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
    <marker id="arrEm" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/>
    </marker>
  </defs>

  <!-- Card Surface -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="1.5" rx="14"/>
  <rect x="0" y="0" width="100%" height="68" fill="#131b2e" fill-opacity="0.7" rx="14 14 0 0"/>
  <line x1="0" y1="68" x2="100%" y2="68" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Title & Indicator dots -->
  <circle cx="28" cy="34" r="5" fill="#6366f1"/>
  <circle cx="44" cy="34" r="5" fill="#06b6d4"/>
  <circle cx="60" cy="34" r="5" fill="#10b981"/>
  <text x="82" y="32" fill="#f8fafc" font-size="15" font-weight="700" font-family="system-ui, -apple-system, sans-serif">{title}</text>
  <text x="82" y="50" fill="#94a3b8" font-size="11.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">{subtitle}</text>

  <!-- Graphic Elements -->
  <g transform="translate(0, 10)">
    {inner_svg}
  </g>
</svg>"""

def get_diagram(category, title_hint=""):
    """Returns a tailored SVG diagram according to concept topic."""
    c = category.lower()
    
    if "kmap" in c or "logic" in c or "gate" in c:
        inner = '''
        <g transform="translate(40, 85)">
          <rect width="360" height="320" rx="10" fill="#111827" stroke="#334155" stroke-width="1.5"/>
          <text x="180" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">4-Variable K-Map (AB \\ CD)</text>
          
          <text x="40" y="65" fill="#94a3b8" font-size="11" font-family="monospace">AB \\ CD</text>
          <text x="110" y="65" fill="#a5b4fc" font-size="11" font-family="monospace">00   01   11   10</text>
          
          <rect x="80" y="80" width="260" height="200" fill="#0f172a" stroke="#334155" rx="6"/>
          <!-- Cells -->
          <circle cx="110" cy="105" r="16" fill="#312e81" stroke="#6366f1"/>
          <text x="110" y="110" fill="#c7d2fe" font-size="12" font-weight="700" text-anchor="middle">1</text>
          
          <circle cx="175" cy="105" r="16" fill="#1e293b"/>
          <text x="175" y="110" fill="#64748b" font-size="12" text-anchor="middle">0</text>
          
          <circle cx="240" cy="105" r="16" fill="#1e293b"/>
          <text x="240" y="110" fill="#64748b" font-size="12" text-anchor="middle">0</text>
          
          <circle cx="305" cy="105" r="16" fill="#312e81" stroke="#6366f1"/>
          <text x="305" y="110" fill="#c7d2fe" font-size="12" font-weight="700" text-anchor="middle">1</text>
          
          <!-- Middle quad -->
          <rect x="150" y="135" width="120" height="90" rx="8" fill="#1e1b4b" stroke="#818cf8" stroke-width="2" stroke-dasharray="5 3"/>
          <text x="210" y="175" fill="#a5b4fc" font-size="13" font-weight="800" text-anchor="middle">QUAD (B·D)</text>
          
          <circle cx="110" cy="255" r="16" fill="#312e81" stroke="#6366f1"/>
          <text x="110" y="260" fill="#c7d2fe" font-size="12" font-weight="700" text-anchor="middle">1</text>
          
          <circle cx="305" cy="255" r="16" fill="#312e81" stroke="#6366f1"/>
          <text x="305" y="260" fill="#c7d2fe" font-size="12" font-weight="700" text-anchor="middle">1</text>
          
          <text x="180" y="305" fill="#34d399" font-size="11" text-anchor="middle">Corner Grouping: m0, m2, m8, m10 = B&#773;·D&#773;</text>
        </g>
        <g transform="translate(440, 85)">
          <rect width="370" height="320" rx="10" fill="#111827" stroke="#334155" stroke-width="1.5"/>
          <text x="185" y="30" fill="#a855f7" font-size="13" font-weight="700" text-anchor="middle">Synthesized Minimal Hardware Implementation</text>
          
          <rect x="25" y="55" width="320" height="70" rx="8" fill="#1e293b" stroke="#6366f1"/>
          <text x="40" y="80" fill="#818cf8" font-size="12" font-weight="700">Prime Implicants Minimized Equation:</text>
          <text x="40" y="105" fill="#f8fafc" font-size="14" font-family="monospace">F(A,B,C,D) = (B · D) + (B&#773; · D&#773;) = B ⊙ D</text>
          
          <rect x="25" y="145" width="320" height="150" rx="8" fill="#0f172a" stroke="#10b981"/>
          <text x="40" y="175" fill="#34d399" font-size="12" font-weight="700">Digital Circuit Realization:</text>
          <text x="40" y="200" fill="#cbd5e1" font-size="11">• Input B and D directly fed to XNOR gate</text>
          <text x="40" y="222" fill="#cbd5e1" font-size="11">• Replaces 16 AND gates with 1 minimal gate</text>
          <text x="40" y="244" fill="#cbd5e1" font-size="11">• Gate Delay: 1τ propagation delay</text>
          <text x="40" y="266" fill="#a5b4fc" font-size="11">• Eliminates static-1 dynamic hazards</text>
        </g>
        '''
        return svg_card("K-Map Minimization & Logic Gate Synthesis", "4-Variable grouping adjacent minterms & hardware circuit reduction", inner)

    elif "bus" in c or "register" in c or "rtl" in c:
        inner = '''
        <g transform="translate(50, 85)">
          <rect width="750" height="330" rx="10" fill="#111827" stroke="#334155" stroke-width="1.5"/>
          <text x="375" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">16-Bit Common Bus System with Multiplexers &amp; Three-State Buffers</text>
          
          <!-- Bus line across top -->
          <rect x="50" y="55" width="650" height="18" rx="4" fill="#312e81" stroke="#818cf8"/>
          <text x="375" y="69" fill="#e0e7ff" font-size="11" font-weight="700" text-anchor="middle">16-BIT COMMON SYSTEM BUS</text>
          
          <!-- Registers -->
          <g transform="translate(60, 100)">
            <!-- PC -->
            <rect x="0" y="0" width="110" height="60" rx="6" fill="#1e293b" stroke="#6366f1"/>
            <text x="55" y="25" fill="#c7d2fe" font-size="11" font-weight="700" text-anchor="middle">PC (12-bit)</text>
            <text x="55" y="45" fill="#94a3b8" font-size="9" text-anchor="middle">Prog Counter</text>
            
            <!-- MAR / AR -->
            <rect x="130" y="0" width="110" height="60" rx="6" fill="#1e293b" stroke="#6366f1"/>
            <text x="185" y="25" fill="#c7d2fe" font-size="11" font-weight="700" text-anchor="middle">MAR (12-bit)</text>
            <text x="185" y="45" fill="#94a3b8" font-size="9" text-anchor="middle">Addr Register</text>
            
            <!-- IR -->
            <rect x="260" y="0" width="110" height="60" rx="6" fill="#1e293b" stroke="#a855f7"/>
            <text x="315" y="25" fill="#e9d5ff" font-size="11" font-weight="700" text-anchor="middle">IR (16-bit)</text>
            <text x="315" y="45" fill="#94a3b8" font-size="9" text-anchor="middle">Instruction</text>
            
            <!-- MDR / DR -->
            <rect x="390" y="0" width="110" height="60" rx="6" fill="#1e293b" stroke="#a855f7"/>
            <text x="445" y="25" fill="#e9d5ff" font-size="11" font-weight="700" text-anchor="middle">MDR (16-bit)</text>
            <text x="445" y="45" fill="#94a3b8" font-size="9" text-anchor="middle">Data Register</text>
            
            <!-- AC -->
            <rect x="520" y="0" width="110" height="60" rx="6" fill="#1e293b" stroke="#10b981"/>
            <text x="575" y="25" fill="#a7f3d0" font-size="11" font-weight="700" text-anchor="middle">AC (16-bit)</text>
            <text x="575" y="45" fill="#94a3b8" font-size="9" text-anchor="middle">Accumulator</text>
          </g>
          
          <!-- Memory Unit and ALU below -->
          <rect x="60" y="195" width="290" height="95" rx="8" fill="#1e1b4b" stroke="#6366f1"/>
          <text x="80" y="225" fill="#c7d2fe" font-size="13" font-weight="700">Memory Unit (4096 × 16)</text>
          <text x="80" y="245" fill="#cbd5e1" font-size="11">• Address inputs from MAR (0-11)</text>
          <text x="80" y="265" fill="#94a3b8" font-size="11">• Read: M[MAR] -> Bus | Write: Bus -> M[MAR]</text>
          
          <rect x="380" y="195" width="310" height="95" rx="8" fill="#064e3b" stroke="#10b981"/>
          <text x="400" y="225" fill="#a7f3d0" font-size="13" font-weight="700">Arithmetic Logic Unit (ALU)</text>
          <text x="400" y="245" fill="#cbd5e1" font-size="11">• Inputs from AC and Data Register (DR)</text>
          <text x="400" y="265" fill="#94a3b8" font-size="11">• Adder &amp; Logic Circuit -> AC, Flag E</text>
          
          <!-- Connection lines -->
          <path d="M 115 100 L 115 73" stroke="#818cf8" stroke-width="2" marker-end="url(#arr)"/>
          <path d="M 245 100 L 245 73" stroke="#818cf8" stroke-width="2" marker-end="url(#arr)"/>
          <path d="M 375 100 L 375 73" stroke="#a855f7" stroke-width="2" marker-end="url(#arr)"/>
        </g>
        '''
        return svg_card("Common Bus Architecture & Register Interconnect", "Multiplexed bus with selection inputs S2, S1, S0 connecting CPU registers", inner)

    elif "instruction" in c or "cpu" in c or "cycle" in c:
        inner = '''
        <g transform="translate(45, 90)">
          <!-- State blocks -->
          <g transform="translate(10, 20)">
            <rect width="160" height="120" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
            <text x="80" y="30" fill="#a5b4fc" font-size="12" font-weight="700" text-anchor="middle">1. FETCH (T0-T2)</text>
            <text x="20" y="60" fill="#f8fafc" font-size="11" font-family="monospace">AR &lt;-- PC</text>
            <text x="20" y="80" fill="#f8fafc" font-size="11" font-family="monospace">IR &lt;-- M[AR]</text>
            <text x="20" y="100" fill="#cbd5e1" font-size="11" font-family="monospace">PC &lt;-- PC + 1</text>
          </g>
          
          <path d="M 170 80 L 205 80" stroke="#818cf8" stroke-width="3" marker-end="url(#arr)"/>
          
          <g transform="translate(205, 20)">
            <rect width="160" height="120" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
            <text x="80" y="30" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">2. DECODE (T3)</text>
            <text x="20" y="60" fill="#f8fafc" font-size="11" font-family="monospace">Opcode IR(12-14)</text>
            <text x="20" y="80" fill="#f8fafc" font-size="11" font-family="monospace">Mode I = IR(15)</text>
            <text x="20" y="100" fill="#cbd5e1" font-size="11" font-family="monospace">AR &lt;-- IR(0-11)</text>
          </g>
          
          <path d="M 365 80 L 400 80" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrCyan)"/>
          
          <g transform="translate(400, 20)">
            <rect width="160" height="120" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
            <text x="80" y="30" fill="#c084fc" font-size="12" font-weight="700" text-anchor="middle">3. EFFECTIVE ADDR</text>
            <text x="20" y="60" fill="#f8fafc" font-size="11" font-family="monospace">If I=1 (Indirect):</text>
            <text x="20" y="80" fill="#34d399" font-size="11" font-family="monospace">AR &lt;-- M[AR]</text>
            <text x="20" y="100" fill="#94a3b8" font-size="11" font-family="monospace">Else Direct Addr</text>
          </g>
          
          <path d="M 560 80 L 595 80" stroke="#a855f7" stroke-width="3" marker-end="url(#arr)"/>
          
          <g transform="translate(595, 20)">
            <rect width="160" height="120" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
            <text x="80" y="30" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">4. EXECUTE (T4-T6)</text>
            <text x="20" y="60" fill="#f8fafc" font-size="11" font-family="monospace">Memory-Ref</text>
            <text x="20" y="80" fill="#f8fafc" font-size="11" font-family="monospace">Register-Ref</text>
            <text x="20" y="100" fill="#cbd5e1" font-size="11" font-family="monospace">I/O Reference</text>
          </g>
          
          <!-- Bottom interrupt flow -->
          <g transform="translate(100, 180)">
            <rect width="560" height="120" rx="10" fill="#111827" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="280" y="30" fill="#fbbf24" font-size="13" font-weight="700" text-anchor="middle">INTERRUPT CYCLE (Triggered when IEN = 1 and FGI/FGO = 1)</text>
            <text x="30" y="60" fill="#f8fafc" font-size="11" font-family="monospace">T0: AR &lt;-- 0, TR &lt;-- PC  |  T1: M[AR] &lt;-- TR, PC &lt;-- 0  |  T2: PC &lt;-- PC + 1, IEN &lt;-- 0</text>
            <text x="30" y="85" fill="#cbd5e1" font-size="11">• Return address saved to memory location 0</text>
            <text x="30" y="105" fill="#94a3b8" font-size="11">• Control branches to location 1 to execute Interrupt Service Routine (ISR)</text>
          </g>
        </g>
        '''
        return svg_card("CPU Instruction Execution Cycle & Interrupt Flow", "Micro-operation sequence for Fetch, Decode, Effective Address & Execution", inner)

    elif "pipe" in c or "hazard" in c:
        inner = '''
        <g transform="translate(45, 85)">
          <rect width="760" height="330" rx="10" fill="#111827" stroke="#334155" stroke-width="1.5"/>
          <text x="380" y="28" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">5-Stage Linear Instruction Pipeline &amp; Hazard Resolution</text>
          
          <!-- Pipeline stages -->
          <g transform="translate(25, 45)">
            <rect x="0" y="0" width="130" height="42" rx="6" fill="#312e81" stroke="#6366f1"/><text x="65" y="25" fill="#c7d2fe" font-size="11" font-weight="700" text-anchor="middle">IF (Fetch)</text>
            <rect x="145" y="0" width="130" height="42" rx="6" fill="#155e75" stroke="#06b6d4"/><text x="210" y="25" fill="#bae6fd" font-size="11" font-weight="700" text-anchor="middle">ID (Decode)</text>
            <rect x="290" y="0" width="130" height="42" rx="6" fill="#064e3b" stroke="#10b981"/><text x="355" y="25" fill="#a7f3d0" font-size="11" font-weight="700" text-anchor="middle">EX (Execute)</text>
            <rect x="435" y="0" width="130" height="42" rx="6" fill="#78350f" stroke="#f59e0b"/><text x="500" y="25" fill="#fde68a" font-size="11" font-weight="700" text-anchor="middle">MEM (Memory)</text>
            <rect x="580" y="0" width="130" height="42" rx="6" fill="#581c87" stroke="#a855f7"/><text x="645" y="25" fill="#f5d0fe" font-size="11" font-weight="700" text-anchor="middle">WB (Write-Back)</text>
          </g>
          
          <!-- Hazard Table -->
          <g transform="translate(25, 110)">
            <rect width="710" height="195" rx="8" fill="#0f172a" stroke="#334155"/>
            <text x="20" y="28" fill="#f8fafc" font-size="12" font-weight="700">Pipeline Hazard Categories &amp; Mitigation Techniques:</text>
            
            <rect x="20" y="45" width="215" height="135" rx="6" fill="#1e293b" stroke="#f87171"/>
            <text x="30" y="68" fill="#f87171" font-size="11" font-weight="700">1. Data Hazard (RAW/WAR)</text>
            <text x="30" y="90" fill="#cbd5e1" font-size="10">• Dependent operand not written</text>
            <text x="30" y="108" fill="#34d399" font-size="10">• Hardware Forwarding / Bypassing</text>
            <text x="30" y="126" fill="#cbd5e1" font-size="10">• Compiler instruction reordering</text>
            <text x="30" y="144" fill="#94a3b8" font-size="10">• Hardware stall bubble insertion</text>
            
            <rect x="247" y="45" width="215" height="135" rx="6" fill="#1e293b" stroke="#f59e0b"/>
            <text x="257" y="68" fill="#fbbf24" font-size="11" font-weight="700">2. Control Hazard (Branch)</text>
            <text x="257" y="90" fill="#cbd5e1" font-size="10">• Target PC unknown at fetch</text>
            <text x="257" y="108" fill="#34d399" font-size="10">• Branch Prediction (1-bit / 2-bit)</text>
            <text x="257" y="126" fill="#cbd5e1" font-size="10">• Branch Target Buffer (BTB)</text>
            <text x="257" y="144" fill="#94a3b8" font-size="10">• Delayed Branch with delay slot</text>
            
            <rect x="475" y="45" width="215" height="135" rx="6" fill="#1e293b" stroke="#38bdf8"/>
            <text x="485" y="68" fill="#38bdf8" font-size="11" font-weight="700">3. Structural Hazard</text>
            <text x="485" y="90" fill="#cbd5e1" font-size="10">• Hardware resource conflict</text>
            <text x="485" y="108" fill="#34d399" font-size="10">• Harvard Architecture separation</text>
            <text x="485" y="126" fill="#cbd5e1" font-size="10">• Separate I-Cache &amp; D-Cache</text>
            <text x="485" y="144" fill="#94a3b8" font-size="10">• Multiple execution ALU units</text>
          </g>
        </g>
        '''
        return svg_card("Linear Pipelining Architecture & Hazard Analysis", "5-stage pipeline throughput and hardware mitigation strategies", inner)

    elif "dma" in c or "interrupt" in c or "io" in c:
        inner = '''
        <g transform="translate(50, 85)">
          <rect width="750" height="330" rx="10" fill="#111827" stroke="#334155" stroke-width="1.5"/>
          <text x="375" y="28" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">Direct Memory Access (DMA) Architecture &amp; Cycle Stealing</text>
          
          <rect x="50" y="55" width="160" height="100" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
          <text x="130" y="85" fill="#a5b4fc" font-size="13" font-weight="700" text-anchor="middle">CPU</text>
          <text x="130" y="110" fill="#cbd5e1" font-size="11" text-anchor="middle">Relinquishes Buses</text>
          <text x="130" y="130" fill="#94a3b8" font-size="10" text-anchor="middle">Bus Request / Grant</text>
          
          <rect x="300" y="55" width="180" height="100" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
          <text x="390" y="85" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">DMA CONTROLLER</text>
          <text x="390" y="105" fill="#cbd5e1" font-size="10" text-anchor="middle">Address Register | Word Count</text>
          <text x="390" y="125" fill="#a7f3d0" font-size="10" text-anchor="middle">Control &amp; Status Register</text>
          
          <rect x="560" y="55" width="150" height="100" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
          <text x="635" y="85" fill="#34d399" font-size="13" font-weight="700" text-anchor="middle">MAIN MEMORY</text>
          <text x="635" y="110" fill="#cbd5e1" font-size="11" text-anchor="middle">RAM</text>
          <text x="635" y="130" fill="#94a3b8" font-size="10" text-anchor="middle">Direct Block Transfer</text>
          
          <!-- Transfer Mode comparison -->
          <g transform="translate(50, 185)">
            <rect width="660" height="125" rx="8" fill="#0f172a" stroke="#334155"/>
            <text x="20" y="26" fill="#f8fafc" font-size="12" font-weight="700">Modes of DMA Data Transfer:</text>
            <text x="20" y="52" fill="#818cf8" font-size="11" font-weight="700">1. Burst Transfer Mode:</text>
            <text x="170" y="52" fill="#cbd5e1" font-size="11">DMA holds bus until entire contiguous block is transferred; maximum speed for disks.</text>
            <text x="20" y="76" fill="#38bdf8" font-size="11" font-weight="700">2. Cycle Stealing Mode:</text>
            <text x="170" y="76" fill="#cbd5e1" font-size="11">DMA takes 1 memory cycle per word transfer; CPU interleaved without stall.</text>
            <text x="20" y="100" fill="#34d399" font-size="11" font-weight="700">3. Transparent Mode:</text>
            <text x="170" y="100" fill="#cbd5e1" font-size="11">DMA executes only during CPU instruction decode cycles when memory bus is idle.</text>
          </g>
        </g>
        '''
        return svg_card("Direct Memory Access (DMA) & I/O Control", "Bus Request (BR), Bus Grant (BG), Cycle Stealing, and Burst block transfer", inner)

    elif "multiprocessor" in c or "parallel" in c:
        inner = '''
        <g transform="translate(50, 85)">
          <rect width="750" height="330" rx="10" fill="#111827" stroke="#334155" stroke-width="1.5"/>
          <text x="375" y="28" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">Multiprocessor Architectural Models: UMA vs NUMA</text>
          
          <!-- Left: UMA -->
          <g transform="translate(25, 45)">
            <rect width="330" height="260" rx="8" fill="#0f172a" stroke="#6366f1"/>
            <text x="165" y="25" fill="#a5b4fc" font-size="12" font-weight="700" text-anchor="middle">Uniform Memory Access (UMA / SMP)</text>
            
            <rect x="20" y="45" width="80" height="40" rx="5" fill="#1e293b" stroke="#6366f1"/><text x="60" y="70" fill="#e0e7ff" font-size="11" text-anchor="middle">CPU 1</text>
            <rect x="125" y="45" width="80" height="40" rx="5" fill="#1e293b" stroke="#6366f1"/><text x="165" y="70" fill="#e0e7ff" font-size="11" text-anchor="middle">CPU 2</text>
            <rect x="230" y="45" width="80" height="40" rx="5" fill="#1e293b" stroke="#6366f1"/><text x="270" y="70" fill="#e0e7ff" font-size="11" text-anchor="middle">CPU N</text>
            
            <rect x="20" y="115" width="290" height="30" rx="4" fill="#312e81" stroke="#818cf8"/>
            <text x="165" y="135" fill="#c7d2fe" font-size="11" font-weight="700" text-anchor="middle">System Bus / Crossbar Switch</text>
            
            <rect x="20" y="175" width="290" height="45" rx="6" fill="#1e293b" stroke="#10b981"/>
            <text x="165" y="198" fill="#a7f3d0" font-size="11" font-weight="700" text-anchor="middle">Shared Central Memory</text>
            <text x="165" y="212" fill="#94a3b8" font-size="9" text-anchor="middle">Equal Latency for all CPUs · Bus Bottleneck</text>
            <text x="165" y="245" fill="#cbd5e1" font-size="10" text-anchor="middle">Scales to 8-32 processors</text>
          </g>
          
          <!-- Right: NUMA -->
          <g transform="translate(390, 45)">
            <rect width="330" height="260" rx="8" fill="#0f172a" stroke="#06b6d4"/>
            <text x="165" y="25" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">Non-Uniform Memory Access (NUMA)</text>
            
            <rect x="20" y="45" width="135" height="65" rx="6" fill="#1e293b" stroke="#06b6d4"/>
            <text x="87" y="68" fill="#bae6fd" font-size="10" font-weight="700" text-anchor="middle">Node 1: CPU + Mem</text>
            <text x="87" y="85" fill="#34d399" font-size="9" text-anchor="middle">Fast Local Access</text>
            
            <rect x="175" y="45" width="135" height="65" rx="6" fill="#1e293b" stroke="#06b6d4"/>
            <text x="242" y="68" fill="#bae6fd" font-size="10" font-weight="700" text-anchor="middle">Node 2: CPU + Mem</text>
            <text x="242" y="85" fill="#34d399" font-size="9" text-anchor="middle">Fast Local Access</text>
            
            <rect x="20" y="130" width="290" height="40" rx="6" fill="#155e75" stroke="#38bdf8"/>
            <text x="165" y="155" fill="#e0f2fe" font-size="11" font-weight="700" text-anchor="middle">Interconnection Network (Mesh/Hypercube)</text>
            
            <text x="165" y="200" fill="#cbd5e1" font-size="10" text-anchor="middle">• Local memory access is much faster than remote</text>
            <text x="165" y="220" fill="#a5b4fc" font-size="10" text-anchor="middle">• CC-NUMA: Cache Coherence maintained via directories</text>
            <text x="165" y="245" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Scales to 1000s of processors</text>
          </g>
        </g>
        '''
        return svg_card("Multiprocessor Memory Architecture: UMA vs NUMA", "Symmetric Shared Bus vs Distributed Interconnection Networks", inner)

    elif "network" in c or "tcp" in c or "osi" in c:
        inner = '''
        <g transform="translate(50, 85)">
          <rect width="750" height="330" rx="10" fill="#111827" stroke="#334155" stroke-width="1.5"/>
          <text x="375" y="28" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TCP/IP Protocol Suite vs 7-Layer OSI Reference Model</text>
          
          <!-- OSI 7 Layers -->
          <g transform="translate(40, 45)">
            <text x="130" y="20" fill="#a5b4fc" font-size="12" font-weight="700" text-anchor="middle">OSI 7-Layer Model</text>
            <rect x="0" y="30" width="260" height="28" rx="4" fill="#312e81"/><text x="130" y="49" fill="#e0e7ff" font-size="10" text-anchor="middle">7. Application (HTTP, DNS, FTP)</text>
            <rect x="0" y="62" width="260" height="28" rx="4" fill="#312e81"/><text x="130" y="81" fill="#e0e7ff" font-size="10" text-anchor="middle">6. Presentation (SSL/TLS, ASCII)</text>
            <rect x="0" y="94" width="260" height="28" rx="4" fill="#312e81"/><text x="130" y="113" fill="#e0e7ff" font-size="10" text-anchor="middle">5. Session (Sockets, RPC)</text>
            <rect x="0" y="126" width="260" height="28" rx="4" fill="#155e75"/><text x="130" y="145" fill="#bae6fd" font-size="10" text-anchor="middle">4. Transport (TCP, UDP - Segments)</text>
            <rect x="0" y="158" width="260" height="28" rx="4" fill="#064e3b"/><text x="130" y="177" fill="#a7f3d0" font-size="10" text-anchor="middle">3. Network (IP, ICMP - Packets)</text>
            <rect x="0" y="190" width="260" height="28" rx="4" fill="#78350f"/><text x="130" y="209" fill="#fde68a" font-size="10" text-anchor="middle">2. Data Link (Ethernet, MAC - Frames)</text>
            <rect x="0" y="222" width="260" height="28" rx="4" fill="#581c87"/><text x="130" y="241" fill="#f5d0fe" font-size="10" text-anchor="middle">1. Physical (Cables, Bits 0/1)</text>
          </g>
          
          <!-- Mapping arrows -->
          <path d="M 315 90 L 415 90" stroke="#818cf8" stroke-width="2" marker-end="url(#arr)"/>
          <path d="M 315 155 L 415 155" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrCyan)"/>
          <path d="M 315 188 L 415 188" stroke="#34d399" stroke-width="2" marker-end="url(#arrEm)"/>
          <path d="M 315 240 L 415 240" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr)"/>
          
          <!-- TCP/IP 4 Layers -->
          <g transform="translate(430, 45)">
            <text x="130" y="20" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">TCP/IP 4-Layer Architecture</text>
            <rect x="0" y="30" width="260" height="85" rx="6" fill="#1e1b4b" stroke="#818cf8"/>
            <text x="130" y="65" fill="#c7d2fe" font-size="12" font-weight="700" text-anchor="middle">Application Layer</text>
            <text x="130" y="85" fill="#a5b4fc" font-size="10" text-anchor="middle">HTTP, SMTP, SSH, DNS, FTP</text>
            
            <rect x="0" y="125" width="260" height="42" rx="6" fill="#164e63" stroke="#06b6d4"/>
            <text x="130" y="145" fill="#bae6fd" font-size="11" font-weight="700" text-anchor="middle">Transport Layer (TCP / UDP)</text>
            <text x="130" y="159" fill="#7dd3fc" font-size="9" text-anchor="middle">Port Addressing · Flow &amp; Congestion Control</text>
            
            <rect x="0" y="177" width="260" height="42" rx="6" fill="#064e3b" stroke="#10b981"/>
            <text x="130" y="197" fill="#a7f3d0" font-size="11" font-weight="700" text-anchor="middle">Internet Layer (IP / ICMP / ARP)</text>
            <text x="130" y="211" fill="#6ee7b7" font-size="9" text-anchor="middle">Logical IP Routing · Packet Delivery</text>
            
            <rect x="0" y="229" width="260" height="38" rx="6" fill="#78350f" stroke="#f59e0b"/>
            <text x="130" y="249" fill="#fde68a" font-size="11" font-weight="700" text-anchor="middle">Network Access / Link Layer</text>
            <text x="130" y="261" fill="#fef08a" font-size="9" text-anchor="middle">Device Drivers · Ethernet / Wi-Fi Frames</text>
          </g>
        </g>
        '''
        return svg_card("OSI 7-Layer vs TCP/IP 4-Layer Architecture", "Layer mapping, protocol units (Data, Segment, Packet, Frame, Bit) and encapsulation", inner)

    else:
        # Default modern concept diagram
        inner = f'''
        <g transform="translate(60, 95)">
          <rect width="730" height="310" rx="10" fill="#111827" stroke="#334155" stroke-width="1.5"/>
          <text x="365" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">{title_hint or "Core Conceptual Flow"}</text>
          
          <g transform="translate(30, 60)">
            <rect x="0" y="0" width="190" height="90" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
            <text x="95" y="30" fill="#c7d2fe" font-size="12" font-weight="700" text-anchor="middle">1. Input / Specification</text>
            <text x="95" y="55" fill="#cbd5e1" font-size="10" text-anchor="middle">Academic Foundation</text>
            <text x="95" y="72" fill="#94a3b8" font-size="10" text-anchor="middle">Parameters &amp; Constraints</text>
            
            <path d="M 190 45 L 240 45" stroke="#818cf8" stroke-width="3" marker-end="url(#arr)"/>
            
            <rect x="240" y="0" width="190" height="90" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
            <text x="335" y="30" fill="#bae6fd" font-size="12" font-weight="700" text-anchor="middle">2. Transformation Process</text>
            <text x="335" y="55" fill="#cbd5e1" font-size="10" text-anchor="middle">System Mechanism</text>
            <text x="335" y="72" fill="#94a3b8" font-size="10" text-anchor="middle">Algorithm Execution</text>
            
            <path d="M 430 45 L 480 45" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrCyan)"/>
            
            <rect x="480" y="0" width="190" height="90" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
            <text x="575" y="30" fill="#a7f3d0" font-size="12" font-weight="700" text-anchor="middle">3. Architectural Outcome</text>
            <text x="575" y="55" fill="#cbd5e1" font-size="10" text-anchor="middle">Optimal State Achieved</text>
            <text x="575" y="72" fill="#94a3b8" font-size="10" text-anchor="middle">Deterministic Output</text>
          </g>
          
          <rect x="30" y="180" width="670" height="90" rx="8" fill="#0f172a" stroke="#334155"/>
          <text x="50" y="210" fill="#f8fafc" font-size="12" font-weight="700">Engineering Trade-Offs &amp; Constraints:</text>
          <text x="50" y="235" fill="#cbd5e1" font-size="11">• Balance between temporal latency, space complexity, and hardware costs</text>
          <text x="50" y="255" fill="#94a3b8" font-size="11">• Verified against syllabus benchmarks and university examination criteria</text>
        </g>
        '''
        return svg_card("System Architecture & Processing Flow", title_hint or "Detailed conceptual breakdown", inner)
