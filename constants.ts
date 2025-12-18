import { Difficulty, DifficultyConfig } from './types';

export const DIFFICULTY_SETTINGS: Record<Difficulty, DifficultyConfig> = {
  [Difficulty.EASY]: {
    label: 'Easy',
    maxTime: 3,
    rounds: 10,
    waitTime: 3,
  },
  [Difficulty.NORMAL]: {
    label: 'Normal',
    maxTime: 2,
    rounds: 20,
    waitTime: 2,
  },
  [Difficulty.HARD]: {
    label: 'Hard',
    maxTime: 1,
    rounds: 40,
    waitTime: 1,
  },
};

export const LEADERBOARD_KEY = 'octopus_leaderboard';
export const MAX_LEADERBOARD_ENTRIES = 15;

// Game mechanics
export const NOT_COMMAND_PROBABILITY = 0.15; // 15% chance for NOT commands (Target: 10-20%)

// AI Service
export const GEMINI_MODEL_NAME = 'gemini-2.5-flash-lite';
