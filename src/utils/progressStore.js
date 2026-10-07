// src/utils/progressStore.js
// LocalStorage-backed reactive progress and mastery tracker for StudyPlay

const STORAGE_KEY = 'studyplay_progress_v1';

function getStoredData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        completedConcepts: {},
        quizScores: {},
        flashcardStatus: {},
        recentConcept: null
      };
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load studyplay progress from localStorage:', e);
    return {
      completedConcepts: {},
      quizScores: {},
      flashcardStatus: {},
      recentConcept: null
    };
  }
}

function saveStoredData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('studyplay_progress_updated', { detail: data }));
  } catch (e) {
    console.error('Failed to save studyplay progress to localStorage:', e);
  }
}

export const progressStore = {
  getSnapshot() {
    return getStoredData();
  },

  isConceptCompleted(conceptKey) {
    const data = getStoredData();
    return !!data.completedConcepts[conceptKey];
  },

  toggleConceptCompletion(conceptKey, metadata = {}) {
    const data = getStoredData();
    if (data.completedConcepts[conceptKey]) {
      delete data.completedConcepts[conceptKey];
    } else {
      data.completedConcepts[conceptKey] = {
        completedAt: new Date().toISOString(),
        ...metadata
      };
    }
    saveStoredData(data);
    return !!data.completedConcepts[conceptKey];
  },

  markConceptCompleted(conceptKey, completed = true, metadata = {}) {
    const data = getStoredData();
    if (completed) {
      data.completedConcepts[conceptKey] = {
        completedAt: new Date().toISOString(),
        ...metadata
      };
    } else {
      delete data.completedConcepts[conceptKey];
    }
    saveStoredData(data);
  },

  saveQuizScore(conceptKey, score, total) {
    const data = getStoredData();
    const prev = data.quizScores[conceptKey] || { bestScore: 0, total: total, attempts: 0 };
    const percentage = Math.round((score / total) * 100);
    const prevPercentage = Math.round((prev.bestScore / (prev.total || total)) * 100);

    const isNewBest = score > prev.bestScore || percentage > prevPercentage;

    data.quizScores[conceptKey] = {
      bestScore: isNewBest ? score : prev.bestScore,
      total: total,
      percentage: isNewBest ? percentage : prevPercentage,
      attempts: (prev.attempts || 0) + 1,
      lastScore: score,
      lastAttemptAt: new Date().toISOString()
    };

    saveStoredData(data);
    return { isNewBest, percentage };
  },

  getQuizBestScore(conceptKey) {
    const data = getStoredData();
    return data.quizScores[conceptKey] || null;
  },

  saveFlashcardStatus(conceptKey, cardId, status) {
    // status: 'know' | 'learning'
    const data = getStoredData();
    if (!data.flashcardStatus[conceptKey]) {
      data.flashcardStatus[conceptKey] = {};
    }
    data.flashcardStatus[conceptKey][cardId] = {
      status,
      updatedAt: new Date().toISOString()
    };
    saveStoredData(data);
  },

  getFlashcardStatus(conceptKey) {
    const data = getStoredData();
    return data.flashcardStatus[conceptKey] || {};
  },

  setRecentConcept(recent) {
    const data = getStoredData();
    data.recentConcept = recent;
    saveStoredData(data);
  },

  getRecentConcept() {
    const data = getStoredData();
    return data.recentConcept;
  },

  getGlobalStats(totalRegisteredConcepts = 70) {
    const data = getStoredData();
    const completedCount = Object.keys(data.completedConcepts || {}).length;
    
    const quizEntries = Object.values(data.quizScores || {});
    const quizzesAttempted = quizEntries.length;
    const avgScore = quizzesAttempted > 0
      ? Math.round(quizEntries.reduce((acc, q) => acc + (q.percentage || 0), 0) / quizzesAttempted)
      : 0;

    let flashcardsKnown = 0;
    let flashcardsLearning = 0;
    Object.values(data.flashcardStatus || {}).forEach(deck => {
      Object.values(deck).forEach(card => {
        if (card.status === 'know') flashcardsKnown++;
        if (card.status === 'learning') flashcardsLearning++;
      });
    });

    return {
      completedCount,
      totalConcepts: totalRegisteredConcepts,
      progressPercentage: Math.min(100, Math.round((completedCount / totalRegisteredConcepts) * 100)),
      quizzesAttempted,
      avgScore,
      flashcardsKnown,
      flashcardsLearning
    };
  },

  resetAllProgress() {
    const empty = {
      completedConcepts: {},
      quizScores: {},
      flashcardStatus: {},
      recentConcept: null
    };
    saveStoredData(empty);
  }
};

export default progressStore;
