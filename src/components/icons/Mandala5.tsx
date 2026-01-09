import React from 'react';

interface MandalaProps extends React.SVGProps<SVGSVGElement> {
  fills: Record<string, string>;
  onPathClick: (id: string) => void;
}

export const Mandala5 = ({ fills, onPathClick, ...props }: MandalaProps) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2">
      {[0, 90, 180, 270].map((angle, i) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path
            id={`m5-p1-${i}`}
            onClick={() => onPathClick(`m5-p1-${i}`)}
            fill={fills[`m5-p1-${i}`] || 'transparent'}
            d="M100,20 Q150,50 150,100"
          />
          <path
            id={`m5-p2-${i}`}
            onClick={() => onPathClick(`m5-p2-${i}`)}
            fill={fills[`m5-p2-${i}`] || 'transparent'}
            d="M100,20 Q50,50 50,100"
          />
          <circle
            id={`m5-c1-${i}`}
            onClick={() => onPathClick(`m5-c1-${i}`)}
            fill={fills[`m5-c1-${i}`] || 'transparent'}
            cx="150" cy="100" r="15"
          />
        </g>
      ))}
      <circle
        id="m5-center"
        onClick={() => onPathClick('m5-center')}
        fill={fills['m5-center'] || 'transparent'}
        cx="100" cy="100" r="30"
      />
    </g>
  </svg>
);
