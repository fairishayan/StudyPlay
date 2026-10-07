// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useRouter } from '../utils/router';
import { 
  BookOpen, 
  Search, 
  Award, 
  Menu, 
  X, 
  Layers, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import useProgress from '../hooks/useProgress';

export default function Header({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { path } = useRouter();
  const { getStats } = useProgress();
  const stats = getStats(70);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#090d16]/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group select-none min-h-[44px] min-w-[44px] py-1">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/35 transition-all">
            <div className="w-full h-full bg-[#0b101b] rounded-[10px] flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent group-hover:to-cyan-200 transition-colors">
              StudyPlay
            </span>
            <span className="text-[10px] text-slate-400 -mt-1 font-medium tracking-wide">
              COLLEGE NOTES
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 text-sm font-medium">
          <Link
            to="/"
            className={`px-3 py-2 rounded-lg transition-colors min-h-[44px] flex items-center ${
              path === '/' 
                ? 'text-indigo-400 bg-indigo-500/10 font-semibold' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Curriculum
          </Link>
          <Link
            to="/mca/sem1/ca452"
            className={`px-3 py-2 rounded-lg transition-colors min-h-[44px] flex items-center ${
              path.includes('/ca452') 
                ? 'text-indigo-400 bg-indigo-500/10 font-semibold' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            CA452 Architecture
          </Link>
          <Link
            to="/mca/sem1/ca453"
            className={`px-3 py-2 rounded-lg transition-colors min-h-[44px] flex items-center ${
              path.includes('/ca453') 
                ? 'text-indigo-400 bg-indigo-500/10 font-semibold' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            CA453 C Lang
          </Link>
          <Link
            to="/mca/sem1/ca456"
            className={`px-3 py-2 rounded-lg transition-colors min-h-[44px] flex items-center ${
              path.includes('/ca456') 
                ? 'text-indigo-400 bg-indigo-500/10 font-semibold' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            CA456 OS
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 rounded-lg hover:border-slate-700 hover:text-slate-200 transition-all min-h-[44px]"
            title="Search concepts (Ctrl+K)"
            aria-label="Open search dialog"
          >
            <Search className="w-4 h-4 text-indigo-400" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden lg:inline-block text-[10px] bg-slate-800 border border-slate-700 text-slate-300 px-1.5 py-0.5 rounded">
              ⌘K
            </kbd>
          </button>

          {/* Progress / Mastery Button */}
          <Link
            to="/progress"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all min-h-[44px] ${
              path === '/progress'
                ? 'bg-indigo-600/20 border-indigo-500/50 text-indigo-300'
                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
            }`}
            title="View overall study progress"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline font-semibold">{stats.progressPercentage}%</span>
            <span className="text-[10px] text-slate-400 hidden md:inline">Mastered</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#090d16] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-150">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 pt-1">
            MCA Semester 1 Subjects
          </div>
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-slate-200 hover:bg-slate-800/70"
          >
            <span>All Courses &amp; Curriculum</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link
            to="/mca/sem1/ca452"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-slate-200 hover:bg-slate-800/70"
          >
            <span>CA452 Computer Organization &amp; Arch</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link
            to="/mca/sem1/ca453"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-slate-200 hover:bg-slate-800/70"
          >
            <span>CA453 C Programming</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link
            to="/mca/sem1/ca454"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-slate-200 hover:bg-slate-800/70"
          >
            <span>CA454 Unix &amp; Shell Programming</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link
            to="/mca/sem1/ca455"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-slate-200 hover:bg-slate-800/70"
          >
            <span>CA455 Software Engineering</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link
            to="/mca/sem1/ca456"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-slate-200 hover:bg-slate-800/70"
          >
            <span>CA456 Operating System</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </Link>
          
          <div className="pt-2 border-t border-slate-800">
            <Link
              to="/progress"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-amber-400 bg-amber-500/10 font-medium"
            >
              <Award className="w-4 h-4" />
              <span>Overall Progress &amp; Quizzes Dashboard</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
