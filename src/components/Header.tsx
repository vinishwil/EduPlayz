"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header({ title }: { title: string }) {
  return (
    <h1 className="font-headline text-2xl md:text-3xl font-bold text-primary">
      {title}
    </h1>
  );
}
