import React from 'react';

interface MandalaProps extends React.SVGProps<SVGSVGElement> {
  fills: Record<string, string>;
  onPathClick: (id: string) => void;
}

export const Mandala7 = ({ fills, onPathClick, ...props }: MandalaProps) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2">
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path
            id={`m7-p1-${i}`}
            onClick={() => onPathClick(`m7-p1-${i}`)}
            fill={fills[`m7-p1-${i}`] || 'transparent'}
            d="M100 100 L160 100 L 130 50 Z"
          />
          <path
            id={`m7-p2-${i}`}
            onClick={() => onPathClick(`m7-p2-${i}`)}
            fill={fills[`m7-p2-${i}`] || 'transparent'}
            d="M100,100 C120,80 140,80 160,100"
          />
        </g>
      ))}
       <circle
        id="m7-center"
        onClick={() => onPathClick('m7-center')}
        fill={fills['m7-center'] || 'transparent'}
        cx="100" cy="100" r="25"
      />
    </g>
  </svg>
);
