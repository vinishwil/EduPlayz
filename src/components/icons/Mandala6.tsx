import React from 'react';

interface MandalaProps extends React.SVGProps<SVGSVGElement> {
  fills: Record<string, string>;
  onPathClick: (id: string) => void;
}

export const Mandala6 = ({ fills, onPathClick, ...props }: MandalaProps) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="100" cy="100" r="90" />
      <circle
        id="m6-center"
        onClick={() => onPathClick('m6-center')}
        fill={fills['m6-center'] || 'transparent'}
        cx="100" cy="100" r="15"
      />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path
            id={`m6-p1-${i}`}
            onClick={() => onPathClick(`m6-p1-${i}`)}
            fill={fills[`m6-p1-${i}`] || 'transparent'}
            d="M100 85 L100 40"
          />
          <path
            id={`m6-p2-${i}`}
            onClick={() => onPathClick(`m6-p2-${i}`)}
            fill={fills[`m6-p2-${i}`] || 'transparent'}
            d="M100 40 A 20 20 0 0 1 120 45 L 100 65 Z"
          />
           <path
            id={`m6-p3-${i}`}
            onClick={() => onPathClick(`m6-p3-${i}`)}
            fill={fills[`m6-p3-${i}`] || 'transparent'}
            d="M100 40 A 20 20 0 0 0 80 45 L 100 65 Z"
          />
        </g>
      ))}
    </g>
  </svg>
);
