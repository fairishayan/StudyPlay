// src/pages/HomePage.jsx
import React from 'react';
import { Link } from '../utils/router';
import { registry } from '../../content/registry';
import useProgress from '../hooks/useProgress';
import { 
  BookOpen, 
  Cpu, 
  Code, 
  Terminal, 
  Layers, 
  Server, 
  Award, 
  ChevronRight, 
  Flame, 
  Brain, 
  Compass, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const ICON_MAP = {
  Cpu: Cpu,
  Code: Code,
  Terminal: Terminal,
  Layers: Layers,
  Server: Server,
};

export default function HomePage({ onOpenSearch }) {
  const { getStats, data } = useProgress();
  const stats = getStats(70);
  const mcaDegree = registry.degrees.find((d) => d.id === 'mca');
  const sem1 = mcaDegree?.semesters?.find((s) => s.id === 'sem1');
  const subjects = sem1?.subjects || [];
  const recent = data.recentConcept;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#111827] via-[#0d1424] to-[#090d16] border border-slate-800/80 p-6 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold w-fit">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive College Study &amp; Exam Mastery</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            StudyPlay — Deep College Notes, Visuals &amp; Quizzes.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A premium, mobile-first static learning platform. Explore deeply structured academic notes, polished SVG system diagrams, exam-grade hard quizzes, and active-recall flashcards.
          </p>

          {/* READ -> UNDERSTAND -> VISUALIZE -> TEST -> RECALL Pill Flow */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 text-xs font-semibold text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200">READ</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-500/30">UNDERSTAND</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/30">VISUALIZE</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded-md bg-rose-950 text-rose-300 border border-rose-500/30">TEST</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-500/30">RECALL</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all min-h-[44px]"
            >
              <span>Search 70+ Concepts (⌘K)</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <Link
              to="/progress"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all min-h-[44px]"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Overall Progress ({stats.progressPercentage}%)</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Resume Recent Concept (if available) */}
      {recent && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">
                Resume Where You Left Off
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white">
                {recent.title}
              </h4>
              <p className="text-xs text-slate-400">
                {recent.subjectCode} • {recent.unitTitle}
              </p>
            </div>
          </div>
          <Link
            to={`/mca/sem1/${recent.subjectId}/${recent.unitId}/${recent.conceptId}`}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all shrink-0 min-h-[44px]"
          >
            <span>Continue Concept</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Degree & Semester Showcase */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span>Master of Computer Applications</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold">
                MCA SEM 1
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Complete theoretical syllabus converted into interactive study modules, architectural SVGs, and hard quizzes.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-white font-bold">5</span> Core Subjects
            <span>•</span>
            <span className="text-white font-bold">23</span> Units
            <span>•</span>
            <span className="text-white font-bold">70</span> Concepts
          </div>
        </div>

        {/* Subjects Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects.map((sub) => {
            const IconComponent = ICON_MAP[sub.icon] || BookOpen;
            return (
              <div
                key={sub.id}
                className="group relative rounded-2xl bg-[#0c121e] border border-slate-800/90 hover:border-indigo-500/40 p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between gap-5 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-bold">
                      {sub.code}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-slate-700/80 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors leading-snug">
                      {sub.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                      {sub.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-3 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{sub.unitsCount} Units</span>
                    <span>{sub.conceptsCount} Interactive Concepts</span>
                  </div>

                  <Link
                    to={`/mca/sem1/${sub.id}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 group-hover:bg-indigo-600 text-slate-200 group-hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-between transition-all min-h-[44px]"
                  >
                    <span>Explore Syllabus Units</span>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Future Syllabus Expansion Section */}
      <div className="p-6 rounded-2xl bg-[#0a0e17] border border-slate-800/80 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <h3 className="text-sm font-bold text-white">Upcoming Programs &amp; Semesters</h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">Architecture Ready</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
          The StudyPlay platform is architected for continuous academic growth. Additional content will be added without modifying the core UI or engines:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col gap-1">
            <span className="font-bold text-indigo-300">MCA Semesters 2, 3, 4</span>
            <span className="text-slate-400">Advanced Algorithms, Cloud, AI</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col gap-1">
            <span className="font-bold text-cyan-300">MSc Artificial Intelligence</span>
            <span className="text-slate-400">Sacred Heart College syllabus</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col gap-1">
            <span className="font-bold text-emerald-300">Mathematics</span>
            <span className="text-slate-400">Discrete Math, Stats &amp; Linear Algebra</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col gap-1">
            <span className="font-bold text-amber-300">Undergraduate (UG)</span>
            <span className="text-slate-400">BCA &amp; B.Sc Computer Science notes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
