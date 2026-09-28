// src/components/SearchModal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../utils/router';
import { searchIndex } from '../../content/searchIndex';
import { Search, X, BookOpen, ChevronRight, Hash } from 'lucide-react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { navigate } = useRouter();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults(searchIndex.slice(0, 8)); // initial recommendations
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Global keyboard shortcut: Cmd+K / Ctrl+K & Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open search triggered by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter search index
  useEffect(() => {
    if (!query.trim()) {
      setResults(searchIndex.slice(0, 8));
      return;
    }

    const q = query.toLowerCase().trim();
    const filtered = searchIndex.filter((item) => {
      const matchConcept = item.conceptTitle.toLowerCase().includes(q);
      const matchSub = item.subjectTitle.toLowerCase().includes(q) || item.subjectCode.toLowerCase().includes(q);
      const matchUnit = item.unitTitle.toLowerCase().includes(q);
      const matchSummary = item.summary.toLowerCase().includes(q);
      return matchConcept || matchSub || matchUnit || matchSummary;
    });

    setResults(filtered.slice(0, 20));
    setSelectedIndex(0);
  }, [query]);

  // Handle arrow key navigation in results
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      goToResult(results[selectedIndex]);
    }
  };

  const goToResult = (item) => {
    navigate(`/${item.degreeId}/${item.semesterId}/${item.subjectId}/${item.unitId}/${item.conceptId}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#0c121e] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-[#090d16]">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search concepts across MCA Sem 1 (e.g. pipeline, k-map, pointers, fork, deadlock)..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white p-1 rounded min-h-[36px] min-w-[36px] flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs bg-slate-800 border border-slate-700 text-slate-400 px-2 py-1 rounded hover:text-white min-h-[36px]"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1.5 scrollbar-thin">
          {results.length > 0 ? (
            results.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={`${item.subjectId}-${item.unitId}-${item.conceptId}`}
                  onClick={() => goToResult(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full p-3 rounded-xl cursor-pointer text-left transition-all flex flex-col gap-1 border ${
                    isSelected
                      ? 'bg-indigo-600/15 border-indigo-500/50 text-white'
                      : 'border-transparent hover:bg-slate-800/40 text-slate-300'
                  }`}
                >
                  {/* Academic Hierarchy Label */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-semibold">
                      {item.degreeName} • Sem {item.semesterNumber}
                    </span>
                    <span>•</span>
                    <span className="text-cyan-300 font-semibold">{item.subjectCode}</span>
                    <span>•</span>
                    <span className="truncate max-w-[200px]">{item.unitTitle}</span>
                  </div>

                  {/* Concept Title */}
                  <div className="flex items-center justify-between gap-2 mt-0.5">
                    <span className="font-bold text-sm sm:text-base text-white">
                      {item.conceptTitle}
                    </span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-indigo-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>

                  {/* Snippet / Summary */}
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {item.summary}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-500 text-sm">
              No matching concepts found for "{query}".
            </div>
          )}
        </div>

        {/* Search Modal Footer */}
        <div className="px-4 py-2.5 bg-[#090d16] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span>{results.length} concepts matched</span>
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>esc to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
