"use client";

import { useState, useEffect, useCallback } from 'react';

const PROGRESS_KEY = 'eduplay-adventures-progress';

type ProgressData = {
  completedLessons: string[];
  gameScores: Record<string, number>;
};

const initialProgress: ProgressData = {
  completedLessons: [],
  gameScores: {},
};

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(initialProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedProgress = window.localStorage.getItem(PROGRESS_KEY);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error('Failed to load progress from localStorage', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const updateProgress = useCallback((newProgress: Partial<ProgressData>) => {
    setProgress(prevProgress => {
      const updated = { ...prevProgress, ...newProgress };
      try {
        window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error('Failed to save progress to localStorage', error);
      }
      return updated;
    });
  }, []);

  const clearProgress = useCallback(() => {
    try {
      window.localStorage.removeItem(PROGRESS_KEY);
      setProgress(initialProgress);
    } catch (error) {
      console.error('Failed to clear progress from localStorage', error);
    }
  }, []);

  const trackLessonCompletion = useCallback((lessonId: string) => {
    if (progress.completedLessons.includes(lessonId)) return;
    
    updateProgress({
      completedLessons: [...progress.completedLessons, lessonId],
    });
  }, [progress.completedLessons, updateProgress]);

  const updateGameScore = useCallback((gameId: string, score: number) => {
    const currentScores = progress.gameScores;
    if ((currentScores[gameId] || 0) < score) {
        updateProgress({
            gameScores: {
                ...currentScores,
                [gameId]: score,
            },
        });
    }
  }, [progress.gameScores, updateProgress]);


  return { progress, isLoaded, updateProgress, clearProgress, trackLessonCompletion, updateGameScore };
}
