import { type FC } from 'react';
import { Color, Direction } from '../types';

interface GameButtonProps {
  color: Color;
  direction: Direction;
  onClick: () => void;
  disabled: boolean;
}

const GameButton: FC<GameButtonProps> = ({ color, direction, onClick, disabled }) => {
  const baseColor = color === Color.RED ? 'bg-red-500 hover:bg-red-400' : 'bg-slate-100 hover:bg-white';
  const textColor = color === Color.RED ? 'text-white' : 'text-slate-900';
  const borderColor = color === Color.RED ? 'border-red-700' : 'border-slate-300';
  
  // Arrow icon
  const arrow = direction === Direction.UP ? '↑' : '↓';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseColor} ${textColor} ${borderColor}
        w-full h-32 md:h-40 rounded-2xl border-b-8 active:border-b-0 active:translate-y-2
        text-4xl font-black shadow-lg transition-all duration-75
        flex flex-col items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      <span className="text-xl uppercase tracking-widest">{color}</span>
      <span className="text-6xl">{arrow}</span>
    </button>
  );
};

export default GameButton;
