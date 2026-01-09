import * as React from 'react';

export const FlashcardsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...props}>
    <g transform="rotate(-10 50 50) translate(-5, -5)">
      <rect x="20" y="30" width="50" height="60" rx="5" fill="#f1c40f" stroke="#fff" strokeWidth="2" />
      <text x="30" y="65" fontSize="30" fontWeight="bold" fill="#fff">A</text>
    </g>
    <g transform="rotate(10 50 50) translate(5, 5)">
      <rect x="30" y="20" width="50" height="60" rx="5" fill="#3498db" stroke="#fff" strokeWidth="2" />
      <text x="45" y="60" fontSize="30" fontWeight="bold" fill="#fff">1</text>
    </g>
  </svg>
);
