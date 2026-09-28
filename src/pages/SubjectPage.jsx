// src/pages/SubjectPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useRouter } from '../utils/router';
import { registry } from '../../content/registry';
import useProgress from '../hooks/useProgress';
import Breadcrumbs from '../components/Breadcrumbs';
import { 
  BookOpen, 
  CheckCircle2, 
  Award, 
  ChevronRight, 
  Clock, 
  HelpCircle, 
  Brain, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function SubjectPage({ subjectId }) {
  const [subjectData, setSubjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data } = useProgress();

  const mcaDegree = registry.degrees.find((d) => d.id === 'mca');
  const sem1 = mcaDegree?.semesters?.find((s) => s.id === 'sem1');
  const subjectMeta = sem1?.subjects?.find((s) => s.id === subjectId);

  useEffect(() => {
    if (!subjectMeta) {
      setError(`Subject "${subjectId}" not found in registry.`);
      setLoading(false);
      return;
    }

    setLoading(true);
    subjectMeta.loader()
      .then((mod) => {
        setSubjectData(mod.default || mod);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load subject module:', err);
        setError('Failed to load subject content.');
        setLoading(false);
      });
  }, [subjectId, subjectMeta]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
        <p className="text-xs text-slate-400 font-mono">Loading {subjectMeta?.code || 'Subject'} Syllabus...</p>
      </div>
    );
  }

  if (error || !subjectData) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Subject Not Found</h2>
        <p className="text-sm text-slate-400 mb-6">{error || 'Could not locate subject data.'}</p>
        <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold">
          Return to All Subjects
        </Link>
      </div>
    );
  }

  // Calculate subject-specific completion
  let totalConcepts = 0;
  let completedCount = 0;
  let quizzesAttempted = 0;

  subjectData.units.forEach((u) => {
    u.concepts.forEach((c) => {
      totalConcepts++;
      const key = `${subjectId}_${u.id}_${c.id}`;
      if (data.completedConcepts[key]) completedCount++;
      if (data.quizScores[key]) quizzesAttempted++;
    });
  });

  const completionPct = totalConcepts > 0 ? Math.round((completedCount / totalConcepts) * 100) : 0;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'MCA', to: '/' },
          { label: 'Semester 1', to: '/' },
          { label: `${subjectData.code} ${subjectData.title}` }
        ]}
      />

      {/* Subject Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#111827] via-[#0d1424] to-[#090d16] border border-slate-800 shadow-xl flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono text-sm font-bold">
            {subjectData.code}
          </span>
          <span className="text-xs text-slate-400">
            MCA Semester 1 Core Course
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {subjectData.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
            {subjectData.description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-2 pt-2 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Subject Mastery Progress</span>
            <span className="font-bold text-indigo-400">{completedCount} of {totalConcepts} Concepts Completed ({completionPct}%)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300"
              style={{ width: `${completionPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Units & Concepts List */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-400" />
            <span>Syllabus Units ({subjectData.units.length})</span>
          </h2>
          <span className="text-xs text-slate-400">
            {totalConcepts} Concepts with Notes, Diagrams &amp; Quizzes
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {subjectData.units.map((unit) => (
            <div 
              key={unit.id}
              className="rounded-2xl bg-[#0c121e] border border-slate-800/90 overflow-hidden shadow-lg flex flex-col"
            >
              {/* Unit Header */}
              <div className="p-5 sm:p-6 bg-[#0e1626]/80 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      UNIT {unit.unitNumber}
                    </span>
                    {unit.co && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        {unit.co}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {unit.title}
                  </h3>
                  {unit.description && (
                    <p className="text-xs text-slate-400 max-w-2xl">{unit.description}</p>
                  )}
                </div>

                <div className="text-xs text-slate-400 shrink-0">
                  <span className="font-semibold text-white">{unit.concepts.length}</span> Concepts
                </div>
              </div>

              {/* Concepts Grid / List within Unit */}
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {unit.concepts.map((concept, cIdx) => {
                  const cKey = `${subjectId}_${unit.id}_${concept.id}`;
                  const isDone = !!data.completedConcepts[cKey];
                  const qRecord = data.quizScores[cKey];

                  return (
                    <Link
                      key={concept.id}
                      to={`/mca/sem1/${subjectId}/${unit.id}/${concept.id}`}
                      className={`p-4 rounded-xl border transition-all flex flex-col justify-between gap-4 group min-h-[140px] ${
                        isDone
                          ? 'bg-[#0e1726]/60 border-emerald-500/30 hover:border-emerald-500/60'
                          : 'bg-slate-900/40 border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/80'
                      }`}
                    >
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[11px] font-semibold text-slate-500 group-hover:text-indigo-400 transition-colors">
                            Concept #{cIdx + 1}
                          </span>
                          {isDone ? (
                            <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Done</span>
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-slate-400" />
                              <span>{concept.estimatedMinutes || 20} min</span>
                            </span>
                          )}
                        </div>

                        <h4 className="text-sm font-bold text-white group-hover:text-indigo-200 transition-colors line-clamp-2 leading-snug">
                          {concept.title}
                        </h4>

                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {concept.summary}
                        </p>
                      </div>

                      {/* Concept Bottom Badges */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[11px]">
                        <div className="flex items-center gap-2">
                          {qRecord ? (
                            <span className="text-amber-400 font-semibold flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              <span>{qRecord.percentage}%</span>
                            </span>
                          ) : (
                            <span className="text-slate-400">Quiz Available</span>
                          )}
                          <span>•</span>
                          <span className="text-slate-400">{concept.flashcards?.length || 5} cards</span>
                        </div>

                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
