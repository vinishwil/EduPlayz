'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <footer className="w-full p-4 text-center text-sm text-muted-foreground bg-background">
      © {new Date().getFullYear()} Eduplayz Adventures. All Rights Reserved.
    </footer>
  );
}
