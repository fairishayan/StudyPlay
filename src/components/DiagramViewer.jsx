// src/components/DiagramViewer.jsx
import React, { useState } from 'react';
import { Maximize2, Minimize2, ZoomIn, ZoomOut, RotateCcw, Info } from 'lucide-react';

export default function DiagramViewer({ diagram }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!diagram || !diagram.svg) {
    return (
      <div className="w-full p-8 text-center bg-slate-900/40 rounded-xl border border-slate-800 text-slate-400">
        <Info className="w-6 h-6 mx-auto mb-2 text-slate-500" />
        <p>No SVG diagram attached for this concept.</p>
      </div>
    );
  }

  const handleZoomIn = () => setZoomLevel((z) => Math.min(2.5, z + 0.25));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(0.75, z - 0.25));
  const handleReset = () => setZoomLevel(1);

  return (
    <div className={`w-full flex flex-col gap-3 ${
      isFullscreen 
        ? 'fixed inset-0 z-50 bg-[#070b13]/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-auto' 
        : ''
    }`}>
      {/* Diagram Action Toolbar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2 px-1">
        <div>
          <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            {diagram.title || 'Architectural System Diagram'}
          </h4>
          {diagram.caption && (
            <p className="text-xs text-slate-400 mt-0.5">{diagram.caption}</p>
          )}
        </div>

        {/* Zoom & Fullscreen Controls */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 p-1 rounded-lg">
          <button
            onClick={handleZoomOut}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded min-h-[36px] min-w-[36px] flex items-center justify-center transition-colors"
            title="Zoom Out"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-slate-400 px-1 select-none">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded min-h-[36px] min-w-[36px] flex items-center justify-center transition-colors"
            title="Zoom In"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded min-h-[36px] min-w-[36px] flex items-center justify-center transition-colors"
            title="Reset Zoom"
            aria-label="Reset zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded min-h-[36px] min-w-[36px] flex items-center justify-center transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="sm:hidden px-1">
        <span className="text-[10px] text-cyan-400/90 font-mono font-medium">↔ Scroll horizontally to explore full diagram</span>
      </div>

      {/* SVG Canvas Box with Responsive Scroll */}
      <div 
        className={`w-full overflow-x-auto overflow-y-hidden rounded-xl border border-slate-800/90 bg-[#090d16] flex items-center justify-start sm:justify-center transition-all ${
          isFullscreen ? 'max-w-6xl max-h-[85vh] p-2' : 'p-2 sm:p-4'
        }`}
      >
        <div 
          className="min-w-[680px] sm:min-w-0 w-full transition-transform duration-200 origin-center flex items-center justify-center"
          style={{ transform: `scale(${zoomLevel})` }}
          dangerouslySetInnerHTML={{ __html: diagram.svg }}
        />
      </div>

      {/* Legend & Guide */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] text-slate-400 px-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Color System:</span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> Primary Bus / Control
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Data Flow / Translation
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Validated Memory / Outcome
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Execution Stage / Timing
        </span>
      </div>

    </div>
  );
}
