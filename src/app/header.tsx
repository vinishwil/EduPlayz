'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { GamesIcon } from '@/components/icons/GamesIcon';

export default function Header() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <header className="w-full p-4 bg-background/80 backdrop-blur-sm border-b sticky top-0 z-20">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary font-headline">
          <GamesIcon className="w-8 h-8" />
          <span>Eduplayz Adventures</span>
        </Link>
      </div>
    </header>
  );
}
