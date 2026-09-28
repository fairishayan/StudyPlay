// src/pages/ConceptPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useRouter } from '../utils/router';
import { registry } from '../../content/registry';
import useProgress from '../hooks/useProgress';
import confetti from 'canvas-confetti';
import Breadcrumbs from '../components/Breadcrumbs';
import NotesRenderer from '../components/NotesRenderer';
import DiagramViewer from '../components/DiagramViewer';
import QuizEngine from '../components/QuizEngine';
import FlashcardEngine from '../components/FlashcardEngine';
import { 
  BookOpen, 
  Eye, 
  Zap, 
  Brain, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Clock,
  LayoutDashboard
} from 'lucide-react';

export default function ConceptPage({ subjectId, unitId, conceptId }) {
  const { navigate, query } = useRouter();
  // Default tab is 'diagram' so users see the rich SVG diagram first; also respects ?tab=notes/quiz/flashcards
  const [activeTab, setActiveTab] = useState(() => query.get('tab') || 'diagram');
  const [subjectData, setSubjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const conceptKey = `${subjectId}_${unitId}_${conceptId}`;
  const { isCompleted, toggleComplete } = useProgress(conceptKey);

  const mcaDegree = registry.degrees.find((d) => d.id === 'mca');
  const sem1 = mcaDegree?.semesters?.find((s) => s.id === 'sem1');
  const subjectMeta = sem1?.subjects?.find((s) => s.id === subjectId);

  // Lazy load subject data
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
        console.error('Failed to load subject content:', err);
        setError('Failed to load concept content.');
        setLoading(false);
      });
  }, [subjectId, subjectMeta]);

  // Sync tab when navigating to a different concept or changing query
  useEffect(() => {
    setActiveTab(query.get('tab') || 'diagram');
  }, [conceptId, query]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
        <p className="text-xs text-slate-400 font-mono">Loading Academic Modules &amp; Quizzes...</p>
      </div>
    );
  }

  if (error || !subjectData) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Concept Not Found</h2>
        <p className="text-sm text-slate-400 mb-6">{error || 'Could not locate concept.'}</p>
        <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold">
          Return to Curriculum
        </Link>
      </div>
    );
  }

  // Find target unit and concept
  const unit = subjectData.units.find((u) => u.id === unitId) || subjectData.units[0];
  const concept = unit?.concepts.find((c) => c.id === conceptId) || unit?.concepts[0];

  if (!unit || !concept) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Concept Not Found</h2>
        <p className="text-sm text-slate-400 mb-6">Specified unit or concept ID does not exist in {subjectData.code}.</p>
        <Link to={`/mca/sem1/${subjectId}`} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold">
          Return to {subjectData.code} Syllabus
        </Link>
      </div>
    );
  }

  // Linearize all concepts in this subject for Previous / Next buttons
  const allConcepts = [];
  subjectData.units.forEach((u) => {
    u.concepts.forEach((c) => {
      allConcepts.push({ unitId: u.id, unitTitle: u.title, concept: c });
    });
  });

  const currentIndex = allConcepts.findIndex((item) => item.concept.id === concept.id && item.unitId === unit.id);
  const prevItem = currentIndex > 0 ? allConcepts[currentIndex - 1] : null;
  const nextItem = currentIndex < allConcepts.length - 1 ? allConcepts[currentIndex + 1] : null;

  const handleToggleComplete = () => {
    const newState = toggleComplete({
      title: concept.title,
      subjectCode: subjectData.code,
      unitTitle: unit.title
    });
    if (newState) {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const hasDiagram = concept.diagrams && concept.diagrams.length > 0 && concept.diagrams[0].svg;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: 'MCA', to: '/' },
          { label: 'Semester 1', to: '/' },
          { label: `${subjectData.code}`, to: `/mca/sem1/${subjectId}` },
          { label: `Unit ${unit.unitNumber}`, to: `/mca/sem1/${subjectId}` },
          { label: concept.title }
        ]}
      />

      {/* Concept Header Card */}
      <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#101728] via-[#0d1424] to-[#090d16] border border-slate-800 shadow-xl flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30">
              {subjectData.code} • UNIT {unit.unitNumber}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{concept.estimatedMinutes || 20} min read</span>
            </span>
          </div>

          {/* Mark Complete Toggle Button */}
          <button
            onClick={handleToggleComplete}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[44px] ${
              isCompleted
                ? 'bg-emerald-950/80 border border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-950/40'
                : 'bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-600'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-400' : 'text-slate-500'}`} />
            <span>{isCompleted ? 'Completed' : 'Mark as Completed'}</span>
          </button>
        </div>

        <div>
          <h1 className="text-xl sm:text-3xl font-black text-white tracking-tight">
            {concept.title}
          </h1>
          {concept.subtitle && (
            <p className="text-xs sm:text-sm text-indigo-300/90 mt-1 font-medium">
              {concept.subtitle}
            </p>
          )}
          {concept.summary && (
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed max-w-4xl">
              {concept.summary}
            </p>
          )}
        </div>

        {/* Study Flow Tabs: VISUALIZE first, then READ, then TEST, then RECALL */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 overflow-x-auto scrollbar-none">
          
          {/* Tab 1: Visualize (SVG Diagram) — shown FIRST */}
          <button
            onClick={() => setActiveTab('diagram')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 min-h-[44px] ${
              activeTab === 'diagram'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>1. Visualize</span>
            {hasDiagram && (
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
            )}
          </button>

          {/* Tab 2: Read & Understand (Notes) */}
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 min-h-[44px] ${
              activeTab === 'notes'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>2. Read &amp; Understand</span>
          </button>

          {/* Tab 3: Hard Quiz */}
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 min-h-[44px] ${
              activeTab === 'quiz'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>3. Test (Hard Quiz)</span>
            <span className="text-[10px] bg-rose-950 text-rose-300 px-1.5 py-0.5 rounded border border-rose-500/30">
              {concept.quiz?.length || 0}
            </span>
          </button>

          {/* Tab 4: Flashcards */}
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 min-h-[44px] ${
              activeTab === 'flashcards'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>4. Recall (Flashcards)</span>
            <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">
              {concept.flashcards?.length || 0}
            </span>
          </button>
        </div>
      </div>

      {/* Main Tab View Canvas */}
      <div className="w-full">

        {/* === TAB: VISUALIZE (SVG Diagram) — PRIMARY VISUAL === */}
        {activeTab === 'diagram' && (
          <div className="flex flex-col gap-4">
            {hasDiagram ? (
              <div className="p-4 sm:p-6 rounded-2xl bg-[#0c121e] border border-cyan-900/40 shadow-xl">
                {/* Diagram label */}
                <div className="flex items-center gap-2 mb-4">
                  <LayoutDashboard className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                    Concept Architecture Diagram
                  </span>
                </div>
                {concept.diagrams.map((diag) => (
                  <DiagramViewer key={diag.id} diagram={diag} />
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-[#0c121e] border border-slate-800 text-center">
                <Eye className="w-8 h-8 mx-auto mb-3 text-slate-600" />
                <p className="text-sm text-slate-400">No visual diagram attached for this concept.</p>
                <button
                  onClick={() => setActiveTab('notes')}
                  className="mt-4 text-xs text-indigo-400 hover:text-indigo-300 underline"
                >
                  View study notes instead
                </button>
              </div>
            )}

            {/* Quick summary below diagram */}
            {concept.summary && (
              <div className="px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="font-semibold text-cyan-400">Concept: </span>
                  {concept.summary}
                </p>
              </div>
            )}

            {/* CTA to read notes */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('notes')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 hover:text-white hover:bg-indigo-600 text-xs sm:text-sm font-semibold transition-all min-h-[44px]"
              >
                <BookOpen className="w-4 h-4" />
                Read full study notes →
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-300 hover:text-white hover:bg-rose-600 text-xs sm:text-sm font-semibold transition-all min-h-[44px]"
              >
                <Zap className="w-4 h-4" />
                Take the quiz →
              </button>
            </div>
          </div>
        )}

        {/* === TAB: READ & UNDERSTAND (Notes with SVG preview at top) === */}
        {activeTab === 'notes' && (
          <div className="flex flex-col gap-4">
            {/* SVG Diagram preview at top of notes tab */}
            {hasDiagram && (
              <div className="p-3 sm:p-5 rounded-2xl bg-[#0c121e] border border-indigo-900/40 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                      Architecture Overview
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveTab('diagram')}
                    className="text-xs text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Open full diagram →
                  </button>
                </div>
                {/* Compact diagram preview */}
                <div className="w-full overflow-auto rounded-xl border border-slate-800/60 bg-[#090d16]">
                  <div
                    className="min-w-[600px]"
                    dangerouslySetInnerHTML={{ __html: concept.diagrams[0].svg }}
                  />
                </div>
              </div>
            )}

            {/* Notes content */}
            <div className="p-6 sm:p-10 rounded-2xl bg-[#0c121e] border border-slate-800/90 shadow-xl">
              <NotesRenderer markdown={concept.notes} />
            </div>
          </div>
        )}

        {/* === TAB: QUIZ === */}
        {activeTab === 'quiz' && (
          <div className="p-4 sm:p-8 rounded-2xl bg-[#0c121e] border border-slate-800/90 shadow-xl">
            <QuizEngine conceptKey={conceptKey} questions={concept.quiz} />
          </div>
        )}

        {/* === TAB: FLASHCARDS === */}
        {activeTab === 'flashcards' && (
          <div className="p-4 sm:p-8 rounded-2xl bg-[#0c121e] border border-slate-800/90 shadow-xl">
            <FlashcardEngine conceptKey={conceptKey} flashcards={concept.flashcards} />
          </div>
        )}
      </div>

      {/* Bottom Concept Navigation Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-800/80">
        {prevItem ? (
          <Link
            to={`/mca/sem1/${subjectId}/${prevItem.unitId}/${prevItem.concept.id}`}
            className="w-full sm:w-auto flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all min-h-[44px]"
          >
            <ChevronLeft className="w-4 h-4" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-slate-500 font-normal">Previous Concept</span>
              <span className="truncate max-w-[200px]">{prevItem.concept.title}</span>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block"></div>
        )}

        <Link
          to={`/mca/sem1/${subjectId}`}
          className="text-xs text-slate-400 hover:text-indigo-400 py-2 min-h-[44px] flex items-center font-medium"
        >
          View Full {subjectData.code} Syllabus
        </Link>

        {nextItem ? (
          <Link
            to={`/mca/sem1/${subjectId}/${nextItem.unitId}/${nextItem.concept.id}`}
            className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20 min-h-[44px]"
          >
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-indigo-200 font-normal">Next Concept</span>
              <span className="truncate max-w-[200px]">{nextItem.concept.title}</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <div className="hidden sm:block"></div>
        )}
      </div>
    </div>
  );
}
