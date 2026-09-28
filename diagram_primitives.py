# diagram_primitives.py
# Low-level visual primitives for professional educational SVG diagrams
# Matching StudyPlay premium dark aesthetic and ER/Component reference quality

def svg_canvas(title, subtitle, legend_items, content, width=960, height=480, viewBox="0 0 960 480"):
    """
    Renders the outer educational diagram canvas with two-tier header:
    Tier 1 (y=0..48): Title and subtitle with traffic light accents
    Tier 2 (y=48..74): Dedicated Legend toolbar with discrete indicator badges
    Diagram content area: y=85..460
    """
    legend_svg = ""
    lx = 82
    for label, color, style in legend_items:
        if style == "card":
            bw = len(label) * 6.0 + 26
            legend_svg += f'''
            <g transform="translate({lx}, 53)">
              <rect width="{bw}" height="18" rx="4" fill="#0f172a" stroke="{color}" stroke-width="1.2"/>
              <rect x="4" y="4" width="9" height="9" rx="2" fill="{color}"/>
              <text x="18" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">{label}</text>
            </g>'''
            lx += bw + 10
        elif style == "pill":
            bw = len(label) * 6.0 + 24
            legend_svg += f'''
            <g transform="translate({lx}, 53)">
              <rect width="{bw}" height="18" rx="9" fill="{color}" opacity="0.9"/>
              <text x="{bw/2}" y="13" fill="#ffffff" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">{label}</text>
            </g>'''
            lx += bw + 10
        elif style == "line":
            bw = len(label) * 6.0 + 28
            legend_svg += f'''
            <g transform="translate({lx}, 53)">
              <rect width="{bw}" height="18" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1"/>
              <line x1="5" y1="9" x2="16" y2="9" stroke="{color}" stroke-width="2"/>
              <polygon points="14,6 18,9 14,12" fill="{color}"/>
              <text x="23" y="13" fill="#cbd5e1" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">{label}</text>
            </g>'''
            lx += bw + 10

    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewBox}" width="100%" height="auto" class="w-full h-auto rounded-xl select-none" style="filter: drop-shadow(0 12px 30px rgba(0,0,0,0.6));">
  <defs>
    <linearGradient id="canvBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="50%" stop-color="#0e1424"/>
      <stop offset="100%" stop-color="#080c14"/>
    </linearGradient>
    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#141c2e" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0c111e" stop-opacity="0.95"/>
    </linearGradient>
    <!-- Accent Gradients -->
    <linearGradient id="gIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#4338ca"/>
    </linearGradient>
    <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#0891b2"/>
    </linearGradient>
    <linearGradient id="gEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
    <linearGradient id="gAmber" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
    <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#6b21a8"/>
    </linearGradient>
    <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e"/>
      <stop offset="100%" stop-color="#be123c"/>
    </linearGradient>
    <!-- Arrow Markers -->
    <marker id="mIndigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8"/>
    </marker>
    <marker id="mCyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
    <marker id="mEmerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399"/>
    </marker>
    <marker id="mAmber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24"/>
    </marker>
    <marker id="mPurple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc"/>
    </marker>
    <marker id="mRose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb7185"/>
    </marker>
  </defs>

  <!-- Background Canvas Card -->
  <rect width="100%" height="100%" fill="url(#canvBg)" stroke="#1e293b" stroke-width="1.5" rx="16"/>
  
  <!-- Row 1: Header Bar -->
  <rect x="0" y="0" width="100%" height="48" fill="url(#headerGrad)" rx="16 16 0 0"/>
  <line x1="0" y1="48" x2="100%" y2="48" stroke="#1e293b" stroke-width="1"/>

  <!-- Window Dots -->
  <circle cx="22" cy="24" r="4" fill="#f43f5e" opacity="0.85"/>
  <circle cx="34" cy="24" r="4" fill="#fbbf24" opacity="0.85"/>
  <circle cx="46" cy="24" r="4" fill="#10b981" opacity="0.85"/>

  <!-- Title & Subtitle in Row 1 -->
  <text x="64" y="22" fill="#f8fafc" font-size="14" font-weight="800" font-family="system-ui, -apple-system, sans-serif">{title}</text>
  <text x="64" y="38" fill="#94a3b8" font-size="10.5" font-weight="500" font-family="system-ui, -apple-system, sans-serif">{subtitle}</text>

  <!-- Row 2: Dedicated Legend Toolbar -->
  <rect x="0" y="48" width="100%" height="26" fill="#070b14"/>
  <line x1="0" y1="74" x2="100%" y2="74" stroke="#1e293b" stroke-width="1"/>
  <text x="22" y="65" fill="#64748b" font-size="9" font-weight="700" letter-spacing="0.08em" font-family="system-ui, sans-serif">LEGEND:</text>
  {legend_svg}

  <!-- Diagram Visual Elements Canvas -->
  <g transform="translate(0, 10)">
    {content}
  </g>
</svg>'''

def card_box(x, y, w, h, title, subtitle="", items=[], stroke="#6366f1", head_bg="#1e1b4b", head_text="#c7d2fe"):
    """
    Creates a structured component/entity card with header and attributes.
    Uses sequential tspans to guarantee ZERO text overlap between tag and value!
    Intelligently suppresses subtitle if title + subtitle would collide in header.
    """
    lines_svg = ""
    cur_y = y + 54
    for item in items:
        if isinstance(item, tuple):
            tag, val = item
            lines_svg += f'''
            <text x="{x + 14}" y="{cur_y}" font-family="system-ui, -apple-system, sans-serif">
              <tspan fill="#818cf8" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" font-weight="700">{tag}: </tspan>
              <tspan fill="#e2e8f0" font-size="11">{val}</tspan>
            </text>'''
        else:
            lines_svg += f'''
            <text x="{x + 14}" y="{cur_y}" fill="#cbd5e1" font-size="11" font-family="system-ui, -apple-system, sans-serif">• {item}</text>'''
        cur_y += 21

    sub_svg = ""
    if subtitle:
        title_len = len(title) * 7.2
        sub_len = len(subtitle) * 5.6
        if title_len + sub_len + 32 <= w:
            sub_svg = f'<text x="{x + w - 12}" y="{y + 21}" fill="#94a3b8" font-size="9.5" text-anchor="end" font-family="system-ui, -apple-system, sans-serif">{subtitle}</text>'

    return f'''
    <g>
      <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="10" fill="#0f172a" stroke="{stroke}" stroke-width="1.5" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));"/>
      <rect x="{x}" y="{y}" width="{w}" height="32" rx="10 10 0 0" fill="{head_bg}"/>
      <text x="{x + 14}" y="{y + 21}" fill="{head_text}" font-size="12" font-weight="700" font-family="system-ui, -apple-system, sans-serif">{title}</text>
      {sub_svg}
      <line x1="{x}" y1="{y + 32}" x2="{x + w}" y2="{y + 32}" stroke="{stroke}" stroke-width="1" stroke-opacity="0.4"/>
      {lines_svg}
    </g>'''

def pill_node(x, y, w, h, label, bg="#312e81", border="#818cf8", text="#e0e7ff", icon=""):
    """Creates an entity/relationship/state pill node with centered text."""
    icon_svg = f'<tspan fill="{text}" font-size="11">{icon} </tspan>' if icon else ''
    return f'''
    <g>
      <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{h/2}" fill="{bg}" stroke="{border}" stroke-width="1.5" style="filter: drop-shadow(0 3px 8px rgba(0,0,0,0.35));"/>
      <text x="{x + w/2}" y="{y + h/2 + 4}" fill="{text}" font-size="11.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">{icon_svg}{label}</text>
    </g>'''

def connector(x1, y1, x2, y2, label="", color="#818cf8", marker="mIndigo", style="direct", label_bg="#0f172a"):
    """Creates a directed connector track with a centered text badge."""
    path_d = f"M {x1} {y1} L {x2} {y2}"
    if style == "elbow_h":
        mid_x = (x1 + x2) / 2
        path_d = f"M {x1} {y1} L {mid_x} {y1} L {mid_x} {y2} L {x2} {y2}"
    elif style == "elbow_v":
        mid_y = (y1 + y2) / 2
        path_d = f"M {x1} {y1} L {x1} {mid_y} L {x2} {mid_y} L {x2} {y2}"

    lbl_svg = ""
    if label:
        cx = (x1 + x2) / 2
        cy = (y1 + y2) / 2
        lw = max(34, min(140, len(label) * 6.0 + 14))
        lbl_svg = f'''
        <g transform="translate({cx - lw/2}, {cy - 10})">
          <rect width="{lw}" height="20" rx="5" fill="{label_bg}" stroke="{color}" stroke-width="1.2" style="filter: drop-shadow(0 2px 5px rgba(0,0,0,0.5));"/>
          <text x="{lw/2}" y="14" fill="#f1f5f9" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">{label}</text>
        </g>'''

    return f'''
    <g>
      <path d="{path_d}" stroke="{color}" stroke-width="2" fill="none" marker-end="url(#{marker})"/>
      {lbl_svg}
    </g>'''

def footer_banner(x, y, w, h, title, text, border="#334155", bg="#0d1424"):
    return f'''
    <g transform="translate({x}, {y})">
      <rect width="{w}" height="{h}" rx="8" fill="{bg}" stroke="{border}" stroke-width="1.5" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));"/>
      <text x="18" y="21" fill="#f8fafc" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">💡 {title}</text>
      <text x="18" y="39" fill="#94a3b8" font-size="10.5" font-family="system-ui, sans-serif">{text}</text>
    </g>'''
