
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { flashcardCategories } from '@/lib/flashcard-data';
import { Header } from '@/components/Header';
import { PawPrint, Sprout, Apple, Carrot, Car, Square, Palette, SpellCheck, Baseline } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  Animals: <PawPrint className="w-16 h-16 text-accent" />,
  Fruits: <Apple className="w-16 h-16 text-accent" />,
  Birds: <Sprout className="w-16 h-16 text-accent" />, // Placeholder, maybe a Feather icon later
  Vegetables: <Carrot className="w-16 h-16 text-accent" />,
  Vehicles: <Car className="w-16 h-16 text-accent" />,
  Shapes: <Square className="w-16 h-16 text-accent" />,
  Colors: <Palette className="w-16 h-16 text-accent" />,
  Letter: <SpellCheck className="w-16 h-16 text-accent" />,
  Number: <Baseline className="w-16 h-16 text-accent" />,
};

export default function FlashcardsPage() {
  return (
    <div className="flex flex-col h-full flex-1">
      <div className="p-4 flex items-center gap-4 bg-primary/10">
         <Link href="/" passHref>
          <Button variant="outline" size="icon">
            <ArrowLeft />
          </Button>
        </Link>
        <Header title="Flashcards" />
      </div>
      <main className="flex flex-col items-center flex-1 p-4 sm:p-8">
        <div className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">
            Flashcard Categories
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mt-4">
            Choose a category to start learning!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {flashcardCategories.map((category) => (
            <Link href={category.href} key={category.title} className="group">
              <Card className="h-full text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden bg-card/80 backdrop-blur-sm flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="font-headline text-xl md:text-2xl text-accent-foreground bg-accent/90 rounded-lg p-3">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center flex-grow gap-4 p-6">
                  <div className="transform transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 flex-grow flex items-center justify-center h-24">
                    {category.icon && iconMap[category.icon]}
                  </div>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
