
'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Header } from '@/components/Header';
import { 
  animalFlashcards, 
  fruitFlashcards, 
  birdFlashcards, 
  vegetableFlashcards, 
  vehicleFlashcards, 
  shapeFlashcards,
  sightWords as allSightWords,
  type FlashcardItem
} from '@/lib/flashcard-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion, AnimatePresence } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const categories: { name: string; items: FlashcardItem[] }[] = [
  { name: 'All Words', items: allSightWords },
  { name: 'Animals', items: animalFlashcards },
  { name: 'Fruits', items: fruitFlashcards },
  { name: 'Birds', items: birdFlashcards },
  { name: 'Vegetables', items: vegetableFlashcards },
  { name: 'Vehicles', items: vehicleFlashcards },
  { name: 'Shapes', items: shapeFlashcards },
];


export default function SpeedySightWordsPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRepetition, setCurrentRepetition] = useState(1);
  const [delay, setDelay] = useState(1); // Delay in seconds
  const [selectedCategory, setSelectedCategory] = useState('All Words');
  
  const currentDeck = useMemo(() => {
    return categories.find(c => c.name === selectedCategory)?.items || [];
  }, [selectedCategory]);

  const [cardCount, setCardCount] = useState(Math.min(10, currentDeck.length));
  const [repetitions, setRepetitions] = useState(1);

  const shuffledWords = useMemo(() => [...currentDeck].sort(() => 0.5 - Math.random()), [currentDeck]);
  const activeDeck = useMemo(() => shuffledWords.slice(0, cardCount), [shuffledWords, cardCount]);

  const handleReset = useCallback(() => {
    setIsPlaying(false);
    setCurrentIndex(0);
    setCurrentRepetition(1);
  }, []);
  
  useEffect(() => {
    handleReset();
    setCardCount(Math.min(10, currentDeck.length));
  }, [selectedCategory, handleReset, currentDeck.length]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying && activeDeck.length > 0) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= activeDeck.length) {
            if (currentRepetition < repetitions) {
              setCurrentRepetition(cr => cr + 1);
              return 0; // Loop back to the start
            } else {
              setIsPlaying(false); // Stop playing after last repetition
              return prevIndex; // Stay on the last card
            }
          }
          return nextIndex;
        });
      }, delay * 1000);
    }

    return () => clearInterval(intervalId);
  }, [isPlaying, delay, activeDeck.length, repetitions, currentRepetition]);

  const handlePlayPause = () => {
    if (activeDeck.length > 0) {
       if (currentIndex === activeDeck.length - 1 && currentRepetition >= repetitions) {
        handleReset();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const currentItem = activeDeck[currentIndex];
  const placeholder = currentItem ? PlaceHolderImages.find((p) => p.id === currentItem.imageId) : null;

  return (
    <div className="flex flex-col h-full">
      <Header title="Speedy Sight Words" />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-2xl flex flex-col items-center gap-6">
          <Card className="w-full aspect-video relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="popLayout">
              {currentItem && (
                <motion.div
                  key={`${currentIndex}-${currentRepetition}`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6"
                >
                  {placeholder && placeholder.imageUrl ? (
                    <Image
                      src={placeholder.imageUrl}
                      alt={placeholder.description}
                      width={400}
                      height={300}
                      className="max-h-[60%] w-auto object-contain rounded-lg"
                    />
                  ) : placeholder && !placeholder.imageUrl ? (
                     <div
                        className="w-full h-3/4 rounded-lg"
                        style={{ backgroundColor: placeholder.imageHint }}
                      />
                  ) : null}
                  <p className="mt-4 text-4xl md:text-6xl font-bold text-primary">
                    {currentItem.name}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>

          <Card className="w-full p-6 bg-card/80 backdrop-blur-sm">
            <CardContent className="flex flex-col items-center justify-center gap-6 p-0">
               <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-4">
                 <div className="w-full">
                    <Label htmlFor="category-select" className="mb-2 block">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory} disabled={isPlaying}>
                      <SelectTrigger id="category-select" className="w-full">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.name} value={cat.name}>
                            {cat.name} ({cat.items.length} cards)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                 <div className="flex items-center gap-4 justify-center sm:justify-end">
                    <Button onClick={handlePlayPause} size="lg" className="w-24">
                      {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2" />}
                      {isPlaying ? 'Pause' : 'Play'}
                    </Button>
                    <Button onClick={handleReset} size="lg" variant="outline">
                      <RotateCcw className="mr-2" />
                      Reset
                    </Button>
                  </div>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-6">
                <div className="w-full flex flex-col gap-2">
                  <Label htmlFor="delay-slider">
                    Delay: {delay.toFixed(1)} seconds
                  </Label>
                  <Slider
                    id="delay-slider"
                    min={0.2}
                    max={5}
                    step={0.1}
                    value={[delay]}
                    onValueChange={(value) => setDelay(value[0])}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Label htmlFor="card-count-slider">
                    Card Count: {cardCount}
                  </Label>
                  <Slider
                    id="card-count-slider"
                    min={1}
                    max={currentDeck.length || 1}
                    step={1}
                    value={[cardCount]}
                    onValueChange={(value) => setCardCount(value[0])}
                    disabled={isPlaying}
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Label htmlFor="repetitions-slider">
                    Repetitions: {repetitions}
                  </Label>
                  <Slider
                    id="repetitions-slider"
                    min={1}
                    max={5}
                    step={1}
                    value={[repetitions]}
                    onValueChange={(value) => setRepetitions(value[0])}
                    disabled={isPlaying}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
