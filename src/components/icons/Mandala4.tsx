import React from 'react';

interface MandalaProps extends React.SVGProps<SVGSVGElement> {
  fills: Record<string, string>;
  onPathClick: (id: string) => void;
}

export const Mandala4 = ({ fills, onPathClick, ...props }: MandalaProps) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle
        id="m4-center"
        onClick={() => onPathClick('m4-center')}
        fill={fills['m4-center'] || 'transparent'}
        cx="100" cy="100" r="10"
      />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path
            id={`m4-p1-${i}`}
            onClick={() => onPathClick(`m4-p1-${i}`)}
            fill={fills[`m4-p1-${i}`] || 'transparent'}
            d="M100 90 C 120 70, 120 50, 100 40"
          />
          <path
            id={`m4-p2-${i}`}
            onClick={() => onPathClick(`m4-p2-${i}`)}
            fill={fills[`m4-p2-${i}`] || 'transparent'}
            d="M100 90 C 80 70, 80 50, 100 40"
          />
           <path
            id={`m4-p3-${i}`}
            onClick={() => onPathClick(`m4-p3-${i}`)}
            fill={fills[`m4-p3-${i}`] || 'transparent'}
            d="M100,20 A 40 40 0 0 1 140 35 L 100 60 Z"
          />
        </g>
      ))}
    </g>
  </svg>
);
