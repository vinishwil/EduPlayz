import React from 'react';

interface MandalaProps extends React.SVGProps<SVGSVGElement> {
  fills: Record<string, string>;
  onPathClick: (id: string) => void;
}

export const Mandala1 = ({ fills, onPathClick, ...props }: MandalaProps) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2">
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path d="M100 100 L100 20" />
          <circle
            id={`m1-c1-${i}`}
            onClick={() => onPathClick(`m1-c1-${i}`)}
            fill={fills[`m1-c1-${i}`] || 'transparent'}
            cx="100" cy="40" r="10" className="fillable" 
          />
          <path
            id={`m1-p1-${i}`}
            onClick={() => onPathClick(`m1-p1-${i}`)}
            fill={fills[`m1-p1-${i}`] || 'transparent'}
            d="M100 60 C 120 70, 120 90, 100 100" className="fillable"
          />
          <path
            id={`m1-p2-${i}`}
            onClick={() => onPathClick(`m1-p2-${i}`)}
            fill={fills[`m1-p2-${i}`] || 'transparent'}
            d="M100 60 C 80 70, 80 90, 100 100" className="fillable"
          />
        </g>
      ))}
      <circle
        id="m1-center"
        onClick={() => onPathClick('m1-center')}
        fill={fills['m1-center'] || 'transparent'}
        cx="100" cy="100" r="20" className="fillable"
      />
    </g>
  </svg>
);
