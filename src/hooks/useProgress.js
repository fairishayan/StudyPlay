// src/hooks/useProgress.js
import { useState, useEffect } from 'react';
import progressStore from '../utils/progressStore';

export function useProgress(conceptKey = null) {
  const [data, setData] = useState(() => progressStore.getSnapshot());

  useEffect(() => {
    const handleUpdate = (e) => {
      setData(e.detail || progressStore.getSnapshot());
    };

    window.addEventListener('studyplay_progress_updated', handleUpdate);
    return () => {
      window.removeEventListener('studyplay_progress_updated', handleUpdate);
    };
  }, []);

  const isCompleted = conceptKey ? !!data.completedConcepts[conceptKey] : false;
  const quizRecord = conceptKey ? data.quizScores[conceptKey] || null : null;
  const cardStates = conceptKey ? data.flashcardStatus[conceptKey] || {} : {};

  return {
    data,
    isCompleted,
    quizRecord,
    cardStates,
    toggleComplete: (meta) => conceptKey && progressStore.toggleConceptCompletion(conceptKey, meta),
    markComplete: (val, meta) => conceptKey && progressStore.markConceptCompleted(conceptKey, val, meta),
    saveQuiz: (score, total) => conceptKey && progressStore.saveQuizScore(conceptKey, score, total),
    saveCard: (cardId, status) => conceptKey && progressStore.saveFlashcardStatus(conceptKey, cardId, status),
    getStats: (totalConcepts) => progressStore.getGlobalStats(totalConcepts),
    resetAll: () => progressStore.resetAllProgress()
  };
}

export default useProgress;
