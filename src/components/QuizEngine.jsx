// src/components/QuizEngine.jsx
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Shuffle, 
  Award, 
  Flame, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import useProgress from '../hooks/useProgress';

export default function QuizEngine({ conceptKey, questions = [] }) {
  const { quizRecord, saveQuiz } = useProgress(conceptKey);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [qIndex]: selectedOptionIndex }
  const [showExplanation, setShowExplanation] = useState({}); // { [qIndex]: boolean }
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  // Initialize or reset questions
  useEffect(() => {
    resetQuiz(false);
  }, [questions, conceptKey]);

  const resetQuiz = (doShuffle = false) => {
    if (!questions || questions.length === 0) return;
    let qs = [...questions];
    if (doShuffle) {
      qs.sort(() => Math.random() - 0.5);
    }
    setShuffledQuestions(qs);
    setCurrentIndex(0);
    setUserAnswers({});
    setShowExplanation({});
    setIsFinished(false);
    setScore(0);
  };

  const handleSelectOption = (optionIndex) => {
    if (userAnswers[currentIndex] !== undefined) return; // Already answered

    const currentQ = shuffledQuestions[currentIndex];
    const isCorrect = optionIndex === currentQ.correctAnswer;
    const updatedAnswers = { ...userAnswers, [currentIndex]: optionIndex };
    setUserAnswers(updatedAnswers);
    setShowExplanation({ ...showExplanation, [currentIndex]: true });

    // Calculate updated score
    let currentScore = 0;
    Object.keys(updatedAnswers).forEach((idx) => {
      if (updatedAnswers[idx] === shuffledQuestions[idx].correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);

    // If last question answered, finish quiz
    if (Object.keys(updatedAnswers).length === shuffledQuestions.length) {
      setIsFinished(true);
      const res = saveQuiz(currentScore, shuffledQuestions.length);
      if (res && res.percentage >= 75) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (!shuffledQuestions || shuffledQuestions.length === 0) {
    return (
      <div className="p-8 text-center bg-slate-900/40 rounded-xl border border-slate-800 text-slate-400">
        <HelpCircle className="w-8 h-8 mx-auto mb-2 text-slate-500" />
        <p>No quiz questions available for this concept.</p>
      </div>
    );
  }

  const currentQ = shuffledQuestions[currentIndex];
  const hasAnswered = userAnswers[currentIndex] !== undefined;
  const bestRecord = quizRecord;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Quiz Top Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            <span>{currentQ.difficulty || 'HARD'} QUIZ</span>
          </div>
          <span className="text-xs text-slate-400">
            Question <span className="text-white font-bold">{currentIndex + 1}</span> of{' '}
            <span className="text-white font-bold">{shuffledQuestions.length}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {bestRecord && (
            <div className="flex items-center gap-1 text-xs text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
              <Award className="w-3.5 h-3.5" />
              <span>Best: {bestRecord.bestScore}/{bestRecord.total} ({bestRecord.percentage}%)</span>
            </div>
          )}

          <button
            onClick={() => resetQuiz(true)}
            className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-md transition-colors min-h-[36px]"
            title="Shuffle questions order"
          >
            <Shuffle className="w-3 h-3" />
            <span className="hidden sm:inline">Shuffle</span>
          </button>

          <button
            onClick={() => resetQuiz(false)}
            className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-md transition-colors min-h-[36px]"
            title="Reset answers"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Retake</span>
          </button>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-1">
        {shuffledQuestions.map((q, idx) => {
          const ans = userAnswers[idx];
          const isCurrent = idx === currentIndex;
          let dotColor = 'bg-slate-800 border-slate-700 text-slate-500';
          if (ans !== undefined) {
            dotColor = ans === q.correctAnswer 
              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-400' 
              : 'bg-rose-950/80 border-rose-500 text-rose-400';
          } else if (isCurrent) {
            dotColor = 'bg-indigo-600/30 border-indigo-400 text-indigo-300 font-bold';
          }
          return (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-7 h-7 shrink-0 rounded-lg text-xs flex items-center justify-center border transition-all ${dotColor}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Main Question Card */}
      {!isFinished ? (
        <div className="w-full p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 shadow-xl flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Question #{currentIndex + 1}
            </span>
            <p className="text-base sm:text-lg font-semibold text-slate-100 leading-snug whitespace-pre-line">
              {currentQ.question}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((opt, oIdx) => {
              const isSelected = userAnswers[currentIndex] === oIdx;
              const isCorrectAnswer = currentQ.correctAnswer === oIdx;
              
              let btnClass = 'border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 hover:border-slate-700 text-slate-200';
              if (hasAnswered) {
                if (isCorrectAnswer) {
                  btnClass = 'border-emerald-500/80 bg-emerald-950/60 text-emerald-200 ring-1 ring-emerald-500';
                } else if (isSelected) {
                  btnClass = 'border-rose-500/80 bg-rose-950/60 text-rose-200 ring-1 ring-rose-500';
                } else {
                  btnClass = 'border-slate-800/50 bg-slate-900/30 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelectOption(oIdx)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-xl border text-left flex items-start gap-3 transition-all min-h-[50px] ${btnClass}`}
                >
                  <span className={`w-6 h-6 shrink-0 rounded-lg text-xs font-bold flex items-center justify-center border mt-0.5 ${
                    hasAnswered && isCorrectAnswer 
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400' 
                      : hasAnswered && isSelected 
                        ? 'bg-rose-500 text-white border-rose-400' 
                        : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}>
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed grow">
                    {opt}
                  </span>
                  {hasAnswered && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {hasAnswered && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Feedback & In-Depth Explanation Box */}
          {hasAnswered && (
            <div className={`p-5 rounded-xl border flex flex-col gap-2.5 animate-in fade-in duration-200 ${
              userAnswers[currentIndex] === currentQ.correctAnswer
                ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
                : 'bg-rose-950/40 border-rose-500/30 text-rose-200'
            }`}>
              <div className="flex items-center gap-2 font-bold text-sm">
                {userAnswers[currentIndex] === currentQ.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Correct Analysis!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span className="text-rose-300">Incorrect Choice</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 text-xs sm:text-sm text-slate-400 hover:text-white disabled:opacity-40 disabled:hover:text-slate-400 min-h-[44px]"
            >
              ← Previous Question
            </button>
            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20 min-h-[44px]"
            >
              <span>{currentIndex === shuffledQuestions.length - 1 ? 'Complete Quiz' : 'Next Question'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Final Score Card */
        <div className="w-full p-8 rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 shadow-2xl flex flex-col items-center text-center gap-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[2px] shadow-xl shadow-indigo-500/20">
            <div className="w-full h-full bg-[#0b101b] rounded-[14px] flex items-center justify-center">
              <Award className="w-8 h-8 text-indigo-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-2xl font-black text-white">Quiz Completed</h3>
            <p className="text-sm text-slate-400 max-w-md">
              You scored <span className="text-indigo-400 font-bold">{score}</span> out of{' '}
              <span className="text-white font-bold">{shuffledQuestions.length}</span> (
              <span className="text-cyan-400 font-bold">{Math.round((score / shuffledQuestions.length) * 100)}%</span>).
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 py-2">
            <div className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
              <span className="text-xs text-slate-400">Current Score</span>
              <span className="text-xl font-black text-white">{score}/{shuffledQuestions.length}</span>
            </div>
            <div className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center">
              <span className="text-xs text-slate-400">Mastery Grade</span>
              <span className={`text-xl font-black ${
                (score / shuffledQuestions.length) >= 0.8 ? 'text-emerald-400' : 'text-amber-400'
              }`}>
                {(score / shuffledQuestions.length) >= 0.8 ? 'EXAM READY' : 'REVISE TOPIC'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => resetQuiz(false)}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all min-h-[44px] shadow-lg shadow-indigo-600/20"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => resetQuiz(true)}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all min-h-[44px]"
            >
              Shuffle &amp; Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
