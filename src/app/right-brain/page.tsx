
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Paintbrush, Puzzle, Train, Workflow } from 'lucide-react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const activities = [
  {
    title: 'Speedy Sight Words',
    description: 'A high-speed flashcard game to boost visual memory and intuition.',
    href: '/right-brain/speedy-sight-words',
    icon: <BrainCircuit className="w-16 h-16 text-accent" />,
  },
  {
    title: 'Mandala Coloring',
    description: 'A relaxing coloring activity to improve focus and creativity.',
    href: '/right-brain/mandala-coloring',
    icon: <Paintbrush className="w-16 h-16 text-accent" />,
  },
  {
    title: 'Shadow Matching',
    description: 'Match the objects to their correct shadows.',
    href: '/right-brain/shadow-matching',
    icon: <Puzzle className="w-16 h-16 text-accent" />,
  },
  {
    title: 'Memory Match',
    description: 'Find the matching pairs of letters and pictures.',
    href: '/games/memory-match',
    icon: <BrainCircuit className="w-16 h-16 text-accent" />,
  },
  {
    title: 'Alphabet Sequence',
    description: 'Complete the letter sequence to find out what comes next.',
    href: '/games/whats-next',
    icon: <Train className="w-16 h-16 text-accent" />,
  },
  {
    title: 'Number Sequence',
    description: 'Figure out which number comes next in the sequence.',
    href: '/games/what-comes-after',
    icon: <Workflow className="w-16 h-16 text-accent" />,
  },
];

export default function RightBrainPage() {
  return (
    <div className="flex flex-col h-full flex-1">
      <div className="p-4 flex items-center gap-4 bg-primary/10">
         <Link href="/" passHref>
          <Button variant="outline" size="icon">
            <ArrowLeft />
          </Button>
        </Link>
        <Header title="Right Brain Training" />
      </div>
      <main className="flex flex-col items-center flex-1 p-4 sm:p-8">
        <div className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
            Creative Activities
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mt-4">
            Boost creativity, memory, and intuition with these fun exercises!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {activities.map((activity) => (
            <Link href={activity.href} key={activity.title} className="group">
              <Card className="h-full text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden bg-card/80 backdrop-blur-sm flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="font-headline text-xl md:text-2xl text-accent-foreground bg-accent/90 rounded-lg p-3">
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center flex-grow gap-4 p-6">
                  <div className="transform transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 flex-grow flex items-center justify-center h-24">
                    {activity.icon}
                  </div>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
