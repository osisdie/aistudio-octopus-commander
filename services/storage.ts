import { ScoreEntry, Difficulty } from '../types';
import { LEADERBOARD_KEY, MAX_LEADERBOARD_ENTRIES } from '../constants';

export const getLeaderboard = (): ScoreEntry[] => {
  try {
    const data = localStorage.getItem(LEADERBOARD_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to load leaderboard", e);
    return [];
  }
};

export const saveScore = (name: string, score: number, difficulty: Difficulty) => {
  const current = getLeaderboard();
  const newEntry: ScoreEntry = {
    name,
    score,
    difficulty,
    date: new Date().toISOString(),
  };

  const updated = [...current, newEntry]
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_LEADERBOARD_ENTRIES);

  try {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save score", e);
  }
};
