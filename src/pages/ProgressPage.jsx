// src/pages/ProgressPage.jsx
import React, { useState } from 'react';
import { Link } from '../utils/router';
import { registry } from '../../content/registry';
import useProgress from '../hooks/useProgress';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  Award, 
  CheckCircle2, 
  Brain, 
  Flame, 
  RotateCcw, 
  BookOpen, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export default function ProgressPage() {
  const { data, getStats, resetAll } = useProgress();
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const stats = getStats(70);

  const mcaDegree = registry.degrees.find((d) => d.id === 'mca');
  const sem1 = mcaDegree?.semesters?.find((s) => s.id === 'sem1');
  const subjects = sem1?.subjects || [];

  const handleReset = () => {
    resetAll();
    setShowConfirmReset(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'MCA', to: '/' },
          { label: 'Study Progress & Mastery' }
        ]}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <Award className="w-7 h-7 text-amber-400" />
            <span>Study Progress &amp; Exam Mastery</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Tracking concept completion, hard quiz best scores, and flashcard recall state stored locally on your device.
          </p>
        </div>

        <div>
          {!showConfirmReset ? (
            <button
              onClick={() => setShowConfirmReset(true)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-950/30 hover:bg-rose-950/60 border border-rose-500/30 rounded-xl transition-colors min-h-[44px]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Progress</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs text-rose-300 font-semibold">Are you sure?</span>
              <button
                onClick={handleReset}
                className="px-3 py-1.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg min-h-[36px]"
              >
                Yes, Reset
              </button>
              <button
                onClick={() => setShowConfirmReset(false)}
                className="px-3 py-1.5 text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg min-h-[36px]"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Stats KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Completed Concepts */}
        <div className="p-5 rounded-2xl bg-[#0c121e] border border-slate-800 flex flex-col gap-2 shadow-lg">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Concepts Completed</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{stats.completedCount}</span>
            <span className="text-xs text-slate-500 font-medium">/ {stats.totalConcepts}</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mt-1">
            <div 
              className="h-full bg-indigo-500" 
              style={{ width: `${stats.progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Card 2: Overall Percentage */}
        <div className="p-5 rounded-2xl bg-[#0c121e] border border-slate-800 flex flex-col gap-2 shadow-lg">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Curriculum Mastery</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-indigo-400">{stats.progressPercentage}%</span>
            <span className="text-xs text-slate-500 font-medium">overall</span>
          </div>
          <span className="text-[11px] text-slate-400">Across 5 MCA Core Subjects</span>
        </div>

        {/* Card 3: Quizzes */}
        <div className="p-5 rounded-2xl bg-[#0c121e] border border-slate-800 flex flex-col gap-2 shadow-lg">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Quizzes Attempted</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-amber-400">{stats.quizzesAttempted}</span>
            <span className="text-xs text-slate-500 font-medium">avg {stats.avgScore}%</span>
          </div>
          <span className="text-[11px] text-slate-400">HARD &amp; SUPER-HARD quizzes</span>
        </div>

        {/* Card 4: Flashcards */}
        <div className="p-5 rounded-2xl bg-[#0c121e] border border-slate-800 flex flex-col gap-2 shadow-lg">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Flashcards</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-400">{stats.flashcardsKnown}</span>
            <span className="text-xs text-slate-500 font-medium">Known ({stats.flashcardsLearning} Learning)</span>
          </div>
          <span className="text-[11px] text-slate-400">Spaced repetition recall</span>
        </div>
      </div>

      {/* Subject-by-Subject Breakdown */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-400" />
          <span>Subject Mastery Breakdown</span>
        </h2>

        <div className="flex flex-col gap-3">
          {subjects.map((sub) => {
            // Count completed for this subject
            let subCompleted = 0;
            let subTotal = sub.conceptsCount || 14;
            Object.keys(data.completedConcepts || {}).forEach((k) => {
              if (k.startsWith(`${sub.id}_`)) subCompleted++;
            });
            const subPct = subTotal > 0 ? Math.round((subCompleted / subTotal) * 100) : 0;

            return (
              <div 
                key={sub.id}
                className="p-4 sm:p-5 rounded-xl bg-[#0c121e] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-indigo-300 font-mono text-xs font-bold">
                    {sub.code}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {sub.title}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {sub.unitsCount} Units • {subCompleted} of {subTotal} Concepts Mastered
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-32 sm:w-40 flex flex-col gap-1 text-right">
                    <span className="text-xs font-bold text-indigo-400">{subPct}%</span>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: `${subPct}%` }} />
                    </div>
                  </div>

                  <Link
                    to={`/mca/sem1/${sub.id}`}
                    className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold transition-colors min-h-[44px] flex items-center justify-center shrink-0"
                  >
                    <span>View Syllabus</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
