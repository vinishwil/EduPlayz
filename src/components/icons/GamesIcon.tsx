import * as React from 'react';

export const GamesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path
      d="M80,65H20C14.5,65,10,60.5,10,55V45C10,39.5,14.5,35,20,35H80C85.5,35,90,39.5,90,45V55C90,60.5,85.5,65,80,65Z"
      fill="#8E44AD"
    />
    <path
      d="M30,35V20C30,14.5,25.5,10,20,10S10,14.5,10,20V35H30Z"
      fill="#29ABE2"
    />
    <circle cx="20" cy="20" r="10" fill="#E74C3C" />
    <circle cx="70" cy="50" r="8" fill="#F39C12" />
    <circle cx="55" cy="50" r="5" fill="#F39C12" />
  </svg>
);
