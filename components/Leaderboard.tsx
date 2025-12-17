import React from 'react';
import { ScoreEntry } from '../types';

interface LeaderboardProps {
  scores: ScoreEntry[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
  return (
    <div className="bg-slate-800/80 rounded-xl p-6 backdrop-blur-sm border border-slate-700 w-full max-w-2xl max-h-96 overflow-y-auto custom-scrollbar">
      <h3 className="text-2xl font-bold mb-4 text-center text-cyan-400">Deep Sea Legends</h3>
      {scores.length === 0 ? (
        <p className="text-center text-slate-400 italic">No legends yet. Be the first!</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead className="text-slate-400 text-sm uppercase border-b border-slate-600">
            <tr>
              <th className="py-2 px-3">#</th>
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Score</th>
              <th className="py-2 px-3">Mode</th>
            </tr>
          </thead>
          <tbody className="text-slate-200">
            {scores.map((entry, idx) => (
              <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                <td className="py-3 px-3 font-mono text-cyan-600 font-bold">{idx + 1}</td>
                <td className="py-3 px-3 font-semibold">{entry.name}</td>
                <td className="py-3 px-3 font-mono text-yellow-400">{Math.round(entry.score)}</td>
                <td className="py-3 px-3 text-xs">
                  <span className={`
                    px-2 py-1 rounded-full 
                    ${entry.difficulty === 'HARD' ? 'bg-red-900/50 text-red-300' : 
                      entry.difficulty === 'NORMAL' ? 'bg-blue-900/50 text-blue-300' : 
                      'bg-green-900/50 text-green-300'}
                  `}>
                    {entry.difficulty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
