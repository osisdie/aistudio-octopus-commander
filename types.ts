export enum GameState {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER',
  VICTORY = 'VICTORY'
}

export enum Difficulty {
  EASY = 'EASY',
  NORMAL = 'NORMAL',
  HARD = 'HARD'
}

export interface DifficultyConfig {
  label: string;
  maxTime: number; // Seconds
  rounds: number;
  waitTime: number; // Seconds
}

export interface ScoreEntry {
  name: string;
  score: number;
  difficulty: Difficulty;
  date: string;
}

export enum Color {
  RED = 'RED',
  WHITE = 'WHITE'
}

export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN'
}

export interface Command {
  color: Color;
  direction: Direction;
  isNegated: boolean;
}
