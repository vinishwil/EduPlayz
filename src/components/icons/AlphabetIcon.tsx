import * as React from 'react';

export const AlphabetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...props}>
    <g transform="rotate(-15 50 50)">
      <text
        x="20"
        y="60"
        fontFamily="'PT Sans', sans-serif"
        fontWeight="bold"
        fontSize="50"
        fill="#29ABE2"
        stroke="#fff"
        strokeWidth="2"
      >
        A
      </text>
    </g>
    <g transform="rotate(5 50 50)">
      <text
        x="45"
        y="75"
        fontFamily="'PT Sans', sans-serif"
        fontWeight="bold"
        fontSize="50"
        fill="#8E44AD"
        stroke="#fff"
        strokeWidth="2"
      >
        B
      </text>
    </g>
    <g transform="rotate(20 50 50)">
      <text
        x="65"
        y="50"
        fontFamily="'PT Sans', sans-serif"
        fontWeight="bold"
        fontSize="50"
        fill="#F39C12"
        stroke="#fff"
        strokeWidth="2"
      >
        C
      </text>
    </g>
  </svg>
);
