// src/components/NotesRenderer.jsx
import React, { useMemo } from 'react';
import { marked } from 'marked';

// Configure marked globally once with GFM, breaks, and custom code block rendering
marked.use({
  gfm: true,
  breaks: true,
  renderer: {
    code({ text, lang }) {
      const isAsciiDiagram = 
        lang === 'text' || 
        /[┌┐└┘├┤┬┴┼│─▼▲]|\+--|-->|\|---|---|==>|<==/.test(text);

      if (isAsciiDiagram) {
        return `
        <details class="my-5 rounded-xl border border-slate-800 bg-[#060a12]/80 p-3 text-xs group transition-all">
          <summary class="cursor-pointer text-slate-400 hover:text-indigo-300 font-mono text-[11px] font-semibold select-none flex items-center justify-between">
            <span class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] uppercase font-bold tracking-wider border border-slate-700">Reference</span>
              <span>Supplementary ASCII Source Diagram (Click to expand)</span>
            </span>
            <span class="text-[10px] text-slate-500 font-mono group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div class="mt-3 overflow-x-auto rounded-lg border border-slate-800/80 bg-slate-950 p-3.5">
            <pre class="text-[11px] font-mono text-slate-300 leading-tight whitespace-pre"><code>${text}</code></pre>
          </div>
        </details>`;
      }

      // Normal code blocks (C, Bash, Python, etc.)
      return `
      <div class="my-5 rounded-xl border border-slate-800 bg-[#080c15] overflow-hidden shadow-lg">
        <div class="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/50 text-[11px] font-mono text-slate-400">
          <span>${(lang || 'code').toUpperCase()}</span>
        </div>
        <pre class="p-4 overflow-x-auto text-[13px] font-mono text-slate-200"><code>${text}</code></pre>
      </div>`;
    }
  }
});

export default function NotesRenderer({ markdown = '' }) {
  const parsedHtml = useMemo(() => {
    if (!markdown) return '';
    try {
      return marked.parse(markdown);
    } catch (e) {
      console.error('Failed to parse markdown:', e);
      return `<pre>${markdown}</pre>`;
    }
  }, [markdown]);

  return (
    <div className="studyplay-notes w-full text-slate-200">
      {/* Dynamic Content Container */}
      <div 
        className="prose prose-invert prose-slate max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight 
          prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:text-indigo-300 prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-2.5 prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-lg sm:prose-h3:text-xl prose-h3:text-cyan-300 prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
          prose-strong:text-white prose-strong:font-semibold
          prose-code:text-cyan-300 prose-code:bg-slate-900/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-slate-800 prose-code:font-mono prose-code:text-[13px]
          prose-table:w-full prose-table:text-sm prose-table:border-collapse
          prose-th:bg-slate-900/90 prose-th:text-indigo-300 prose-th:p-3 prose-th:border prose-th:border-slate-800 prose-th:text-left
          prose-td:p-3 prose-td:border prose-td:border-slate-800/80 prose-td:text-slate-300
          prose-ul:my-3 prose-li:my-1.5 prose-li:text-slate-300
          prose-hr:border-slate-800/80 prose-hr:my-8"
        dangerouslySetInnerHTML={{ __html: parsedHtml }}
      />
    </div>
  );
}
