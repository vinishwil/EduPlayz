import * as React from 'react';

export const RightBrainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path d="M50 10 C 80 10, 90 40, 90 50 C 90 60, 80 90, 50 90 C 20 90, 10 60, 10 50 C 10 40, 20 10, 50 10 Z" fill="none" stroke="#e91e63" strokeWidth="4" />
    <circle cx="35" cy="40" r="5" fill="#ffeb3b" />
    <path d="M60 40 Q 65 50, 70 40" stroke="#4caf50" strokeWidth="4" fill="none" />
    <path d="M30 70 L 40 60" stroke="#2196f3" strokeWidth="4" />
    <g transform="translate(60, 65) rotate(45)">
      <rect x="-5" y="-5" width="10" height="10" fill="#9c27b0" />
    </g>
  </svg>
);
