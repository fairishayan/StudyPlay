// src/components/FlashcardEngine.jsx
import React, { useState, useEffect } from 'react';
import { 
  RotateCw, 
  Check, 
  HelpCircle, 
  Shuffle, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  Brain,
  Sparkles
} from 'lucide-react';
import useProgress from '../hooks/useProgress';

export default function FlashcardEngine({ conceptKey, flashcards = [] }) {
  const { cardStates, saveCard } = useProgress(conceptKey);
  const [deck, setDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    resetDeck(false);
  }, [flashcards, conceptKey]);

  const resetDeck = (doShuffle = false) => {
    if (!flashcards || flashcards.length === 0) return;
    let list = [...flashcards];
    if (doShuffle) {
      list.sort(() => Math.random() - 0.5);
    }
    setDeck(list);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  if (!deck || deck.length === 0) {
    return (
      <div className="p-8 text-center bg-slate-900/40 rounded-xl border border-slate-800 text-slate-400">
        <Brain className="w-8 h-8 mx-auto mb-2 text-slate-500" />
        <p>No flashcards available for this concept.</p>
      </div>
    );
  }

  const currentCard = deck[currentIndex];
  const cardId = currentCard.id || `card-${currentIndex}`;
  const status = cardStates[cardId]?.status; // 'know' | 'learning'

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < deck.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const markKnown = () => {
    saveCard(cardId, 'know');
    if (currentIndex < deck.length - 1) {
      setTimeout(handleNext, 300);
    }
  };

  const markLearning = () => {
    saveCard(cardId, 'learning');
    if (currentIndex < deck.length - 1) {
      setTimeout(handleNext, 300);
    }
  };

  // Count progress
  let knownCount = 0;
  let learningCount = 0;
  deck.forEach((c, idx) => {
    const cid = c.id || `card-${idx}`;
    if (cardStates[cid]?.status === 'know') knownCount++;
    if (cardStates[cid]?.status === 'learning') learningCount++;
  });

  return (
    <div className="w-full flex flex-col gap-6 items-center">
      {/* Deck Controls & Progress Indicator */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-cyan-400" />
          <span className="text-xs text-slate-400">
            Card <span className="text-white font-bold">{currentIndex + 1}</span> of{' '}
            <span className="text-white font-bold">{deck.length}</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            {knownCount} Known
          </span>
          <span className="text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
            {learningCount} Learning
          </span>

          <button
            onClick={() => resetDeck(true)}
            className="flex items-center gap-1 px-2.5 py-1 text-slate-400 hover:text-white bg-slate-800/80 rounded transition-colors min-h-[36px]"
            title="Shuffle deck"
          >
            <Shuffle className="w-3 h-3" />
            <span className="hidden sm:inline">Shuffle</span>
          </button>
        </div>
      </div>

      {/* 3D Flip Card Container */}
      <div 
        className="w-full max-w-xl h-72 sm:h-80 cursor-pointer select-none"
        style={{ perspective: '1200px' }}
        onClick={handleFlip}
      >
        <div 
          className="relative w-full h-full rounded-2xl transition-transform duration-500 shadow-2xl"
          style={{ 
            transformStyle: 'preserve-3d', 
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
          }}
        >
          {/* Card Front */}
          <div 
            className="absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#131b2e] via-[#0f172a] to-[#090d16] border border-slate-700/80 flex flex-col justify-between"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-indigo-400">
                Front — Question / Prompt
              </span>
              <span className="text-[11px] bg-slate-800/80 px-2 py-0.5 rounded text-slate-300">
                Click to Flip
              </span>
            </div>

            <div className="my-auto text-center px-4">
              <p className="text-base sm:text-xl font-bold text-white leading-relaxed">
                {currentCard.front}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>StudyPlay Active Recall</span>
              <RotateCw className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Card Back */}
          <div 
            className="absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0e1a2b] via-[#0d1624] to-[#080d16] border border-cyan-500/30 flex flex-col justify-between"
            style={{ 
              backfaceVisibility: 'hidden', 
              transform: 'rotateY(180deg)' 
            }}
          >
            <div className="flex items-center justify-between text-xs text-cyan-400 font-semibold">
              <span className="uppercase tracking-wider">Back — Explanation &amp; Key Concept</span>
              <span className="text-[11px] bg-cyan-950/80 px-2 py-0.5 rounded text-cyan-300 border border-cyan-500/20">
                Answer
              </span>
            </div>

            <div className="my-auto overflow-y-auto px-2 max-h-48 scrollbar-thin">
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-sans">
                {currentCard.back}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Mastery Verification</span>
              <RotateCw className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Card Evaluation Buttons (Know vs Still Learning) */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={(e) => { e.stopPropagation(); markLearning(); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all min-h-[44px] ${
            status === 'learning'
              ? 'bg-amber-950/80 border-amber-500 text-amber-200 ring-2 ring-amber-500/30'
              : 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-amber-950/40 hover:border-amber-500/40'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Still Learning</span>
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); markKnown(); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all min-h-[44px] ${
            status === 'know'
              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/30'
              : 'bg-slate-900 border-slate-800 text-emerald-400 hover:bg-emerald-950/40 hover:border-emerald-500/40'
          }`}
        >
          <Check className="w-4 h-4" />
          <span>Know (Mastered)</span>
        </button>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm text-slate-400 hover:text-white disabled:opacity-40 disabled:hover:text-slate-400 min-h-[44px] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>
        <span className="text-xs text-slate-500 font-mono">
          {currentIndex + 1} / {deck.length}
        </span>
        <button
          onClick={handleNext}
          disabled={currentIndex === deck.length - 1}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm text-slate-400 hover:text-white disabled:opacity-40 disabled:hover:text-slate-400 min-h-[44px] transition-colors"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
