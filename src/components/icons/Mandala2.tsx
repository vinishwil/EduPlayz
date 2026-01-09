import React from 'react';

interface MandalaProps extends React.SVGProps<SVGSVGElement> {
  fills: Record<string, string>;
  onPathClick: (id: string) => void;
}

export const Mandala2 = ({ fills, onPathClick, ...props }: MandalaProps) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={angle} transform={`rotate(${angle} 100 100)`}>
          <path d="M100,100 C130,70 130,30 100,20" />
          <path
            id={`m2-p1-${i}`}
            onClick={() => onPathClick(`m2-p1-${i}`)}
            fill={fills[`m2-p1-${i}`] || 'transparent'}
            d="M100,100 l35,-35" className="fillable"
          />
          <path
            id={`m2-p2-${i}`}
            onClick={() => onPathClick(`m2-p2-${i}`)}
            fill={fills[`m2-p2-${i}`] || 'transparent'}
            d="M135,65 C125,85 105,75 100,100" className="fillable"
          />
        </g>
      ))}
      <circle
        id="m2-center"
        onClick={() => onPathClick('m2-center')}
        fill={fills['m2-center'] || 'transparent'}
        cx="100" cy="100" r="15" className="fillable"
      />
    </g>
  </svg>
);
