'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlphabetIcon } from '@/components/icons/AlphabetIcon';
import { NumbersIcon } from '@/components/icons/NumbersIcon';
import { GamesIcon } from '@/components/icons/GamesIcon';
import { FlashcardsIcon } from '@/components/icons/FlashcardsIcon';
import { RightBrainIcon } from '@/components/icons/RightBrainIcon';
import { BookOpen } from 'lucide-react';
import { Storybook } from '@/components/Storybook';
import { illustratedStories, type IllustratedStory } from '@/lib/illustrated-stories';

const modules = [
  {
    title: 'Learn',
    href: '/learn/alphabet',
    icon: <AlphabetIcon className="w-20 h-20" />,
    description: 'Explore the ABCs with fun images and sounds.',
    className: 'bg-green-200/50 hover:bg-green-300/60 border-green-300',
    textColor: 'text-green-800',
  },
  {
    title: 'Numbers',
    href: '/learn/numbers',
    icon: <NumbersIcon className="w-20 h-20" />,
    description: 'Learn to count with playful objects.',
    className: 'bg-blue-200/50 hover:bg-blue-300/60 border-blue-300',
    textColor: 'text-blue-800',
  },
  {
    title: 'Games',
    href: '/games',
    icon: <GamesIcon className="w-20 h-20" />,
    description: 'Test your knowledge with exciting mini-games.',
    className: 'bg-yellow-200/50 hover:bg-yellow-300/60 border-yellow-300',
    textColor: 'text-yellow-800',
  },
  {
    title: 'Flashcards',
    href: '/flashcards',
    icon: <FlashcardsIcon className="w-20 h-20" />,
    description: 'Learn with interactive flashcards.',
    className: 'bg-purple-200/50 hover:bg-purple-300/60 border-purple-300',
    textColor: 'text-purple-800',
  },
  {
    title: 'Right Brain',
    href: '/right-brain',
    icon: <RightBrainIcon className="w-20 h-20" />,
    description: 'Boost creativity and intuition.',
    className: 'bg-pink-200/50 hover:bg-pink-300/60 border-pink-300',
    textColor: 'text-pink-800',
  },
];

export default function Home() {
    const [story, setStory] = useState<IllustratedStory | null>(null);
    const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
    const [randomStory, setRandomStory] = useState<IllustratedStory | null>(null);

    useEffect(() => {
        // This ensures that the random story is only selected on the client side
        // to avoid hydration mismatches.
        setRandomStory(illustratedStories[Math.floor(Math.random() * illustratedStories.length)]);
    }, []);

    const handleStoryClick = () => {
        setStory(randomStory);
        setIsStoryModalOpen(true);
    }

    const handleModalChange = (isOpen: boolean) => {
        setIsStoryModalOpen(isOpen);
        if (!isOpen) {
            // Optional: clear story when closing and set a new random one for next time
            setTimeout(() => {
                setStory(null)
                setRandomStory(illustratedStories[Math.floor(Math.random() * illustratedStories.length)]);
            }, 300);
        }
    }


  return (
    <div className="flex flex-col items-center justify-center flex-1 p-4 sm:p-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-200 z-[-1]">
        <div className="absolute bottom-0 left-[-10%] w-[120%] h-[30%] bg-green-200 rounded-t-full" />
      </div>

      <div className="text-center mb-12 z-10">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary drop-shadow-lg">
          Eduplayz Adventures
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mt-4">
          Let's Learn and Play!
        </p>
      </div>

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 w-full max-w-7xl z-10 mb-12">
        {modules.map((module, index) => (
          <Link href={module.href} key={module.title} className="group adventure-item" style={{ animationDelay: `${index * 150}ms` }}>
            <div className={`relative w-36 h-36 md:w-48 md:h-48 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer shadow-xl group-hover:scale-110 group-hover:-translate-y-2 ${module.className}`}>
                {module.icon}
                <div className="absolute bottom-[-20px] bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-md">
                    <p className={`font-bold font-headline text-md ${module.textColor}`}>{module.title}</p>
                </div>
            </div>
          </Link>
        ))}
      </div>
      
       <div className="mt-8 z-10">
            <Button 
                onClick={handleStoryClick}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full shadow-lg text-lg animate-pulse"
                disabled={!randomStory}
            >
                <BookOpen className="mr-3 h-6 w-6" />
                Read Me a Story!
            </Button>
       </div>

        <Dialog open={isStoryModalOpen} onOpenChange={handleModalChange}>
            <DialogContent className="max-w-2xl w-full p-0 border-0">
                {!story ? (
                    <div className="h-[70vh] flex flex-col items-center justify-center gap-4">
                        <DialogHeader>
                          <DialogTitle>Loading Story</DialogTitle>
                        </DialogHeader>
                        <p className="text-muted-foreground">Getting a story ready...</p>
                    </div>
                ) : (
                    <Storybook story={story} />
                )}
            </DialogContent>
        </Dialog>

    </div>
  );
}
