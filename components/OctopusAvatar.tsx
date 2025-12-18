import { type FC } from 'react';
import { Color } from '../types';

interface OctopusAvatarProps {
  speaking: boolean;
  mood: 'neutral' | 'happy' | 'angry';
  leftLegsColor: Color;
}

const OctopusAvatar: FC<OctopusAvatarProps> = ({ speaking, mood, leftLegsColor }) => {
  // Determine leg colors
  const leftFill = leftLegsColor === Color.RED ? '#ef4444' : '#f8fafc';
  const rightFill = leftLegsColor === Color.RED ? '#f8fafc' : '#ef4444';
  
  // Animation classes
  const bodyAnim = "animate-float";
  const mouthAnim = speaking ? "animate-[pulse-fast_0.5s_infinite]" : "";
  
  // Eye expression
  const eyeScale = mood === 'angry' ? 'scale-y-75 rotate-12' : 'scale-100';

  return (
    <div className={`relative w-64 h-64 mx-auto ${bodyAnim}`}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        {/* Legs - Left Side */}
        <g className="origin-top animate-wiggle" style={{ animationDelay: '0s' }}>
          <path d="M60 140 Q40 180 20 160" stroke={leftFill} strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M70 140 Q60 190 40 180" stroke={leftFill} strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M80 140 Q80 190 70 190" stroke={leftFill} strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M50 130 Q20 150 10 130" stroke={leftFill} strokeWidth="12" fill="none" strokeLinecap="round" />
        </g>

        {/* Legs - Right Side */}
        <g className="origin-top animate-wiggle" style={{ animationDelay: '0.5s' }}>
           <path d="M140 140 Q160 180 180 160" stroke={rightFill} strokeWidth="12" fill="none" strokeLinecap="round" />
           <path d="M130 140 Q140 190 160 180" stroke={rightFill} strokeWidth="12" fill="none" strokeLinecap="round" />
           <path d="M120 140 Q120 190 130 190" stroke={rightFill} strokeWidth="12" fill="none" strokeLinecap="round" />
           <path d="M150 130 Q180 150 190 130" stroke={rightFill} strokeWidth="12" fill="none" strokeLinecap="round" />
        </g>

        {/* Head */}
        <ellipse cx="100" cy="90" rx="70" ry="60" fill="#7e22ce" className="shadow-inner" />
        <ellipse cx="100" cy="85" rx="60" ry="50" fill="#9333ea" />

        {/* Eyes */}
        <g className={`transition-transform duration-300 ${eyeScale}`}>
          {/* Left Eye */}
          <circle cx="75" cy="80" r="15" fill="white" />
          <circle cx="75" cy="80" r="5" fill="black" />
          
          {/* Right Eye */}
          <circle cx="125" cy="80" r="15" fill="white" />
          <circle cx="125" cy="80" r="5" fill="black" />
          
          {/* Angry Brows */}
          {mood === 'angry' && (
            <>
              <path d="M60 65 L90 75" stroke="black" strokeWidth="4" strokeLinecap="round" />
              <path d="M140 65 L110 75" stroke="black" strokeWidth="4" strokeLinecap="round" />
            </>
          )}
        </g>

        {/* Mouth */}
        <g className={mouthAnim}>
          {speaking ? (
            <ellipse cx="100" cy="110" rx="10" ry="12" fill="black" />
          ) : (
            <path d="M85 110 Q100 120 115 110" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />
          )}
        </g>
        
        {/* Bubbles - Decorative */}
        <circle cx="160" cy="40" r="5" fill="rgba(255,255,255,0.4)" className="animate-bounce" />
        <circle cx="40" cy="60" r="3" fill="rgba(255,255,255,0.4)" className="animate-pulse" />
      </svg>
    </div>
  );
};

export default OctopusAvatar;
