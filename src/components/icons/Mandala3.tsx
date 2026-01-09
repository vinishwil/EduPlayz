import React from 'react';

interface MandalaProps extends React.SVGProps<SVGSVGElement> {
  fills: Record<string, string>;
  onPathClick: (id: string) => void;
}

export const Mandala3 = ({ fills, onPathClick, ...props }: MandalaProps) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="100" cy="100" r="80" />
      <circle cx="100" cy="100" r="60" />
      <circle
        id="m3-c1"
        onClick={() => onPathClick('m3-c1')}
        fill={fills['m3-c1'] || 'transparent'}
        cx="100" cy="100" r="40" className="fillable"
      />
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path d="M100 20 L100 40" />
          <path
            id={`m3-p1-${i}`}
            onClick={() => onPathClick(`m3-p1-${i}`)}
            fill={fills[`m3-p1-${i}`] || 'transparent'}
            d="M100 60 L85 90 L115 90 Z" className="fillable"
          />
        </g>
      ))}
    </g>
  </svg>
);
