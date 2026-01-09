import * as React from 'react';

export const NumbersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...props}>
    <g transform="rotate(10 50 50)">
      <text
        x="15"
        y="55"
        fontFamily="'PT Sans', sans-serif"
        fontWeight="bold"
        fontSize="50"
        fill="#8E44AD"
        stroke="#fff"
        strokeWidth="2"
      >
        1
      </text>
    </g>
    <g transform="rotate(-8 50 50)">
      <text
        x="40"
        y="80"
        fontFamily="'PT Sans', sans-serif"
        fontWeight="bold"
        fontSize="50"
        fill="#27AE60"
        stroke="#fff"
        strokeWidth="2"
      >
        2
      </text>
    </g>
    <g transform="rotate(15 50 50)">
      <text
        x="60"
        y="50"
        fontFamily="'PT Sans', sans-serif"
        fontWeight="bold"
        fontSize="50"
        fill="#E74C3C"
        stroke="#fff"
        strokeWidth="2"
      >
        3
      </text>
    </g>
  </svg>
);
