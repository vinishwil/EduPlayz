
'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';

import { vehicleFlashcards } from '@/lib/flashcard-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useSpeech } from '@/hooks/use-speech';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function VehicleFlashcardsPage() {
  const { speak, stopSpeaking } = useSpeech();
  const [api, setApi] = useState<CarouselApi>();
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => {
      setFlippedCard(null); // Reset flip on slide change
      stopSpeaking();
    };
    api.on('select', handleSelect);
    return () => {
      api.off('select', handleSelect);
    };
  }, [api, stopSpeaking]);

  const handleCardClick = (itemName: string) => {
    if (flippedCard === itemName) {
      setFlippedCard(null);
      stopSpeaking();
    } else {
      setFlippedCard(itemName);
      speak(itemName, undefined, true);
    }
  };

  return (
    <div className="flex flex-col h-full">
        <Header title="Vehicle Flashcards" />
        <main className="flex flex-col items-center justify-center flex-grow p-4 md:p-10 overflow-hidden">
        <Carousel
            setApi={setApi}
            opts={{
            align: 'center',
            loop: true,
            }}
            className="w-full max-w-sm md:max-w-lg lg:max-w-2xl"
        >
            <CarouselContent>
            {vehicleFlashcards.map((item) => {
                const placeholder = PlaceHolderImages.find((p) => p.id === item.imageId);
                const isFlipped = flippedCard === item.name;

                return (
                <CarouselItem key={item.name}>
                    <div className="p-1">
                      <div className="perspective-1000" onClick={() => handleCardClick(item.name)}>
                        <motion.div 
                          className="relative w-full aspect-[4/3] transform-style-3d transition-transform duration-700"
                          animate={{ rotateY: isFlipped ? 180 : 0 }}
                        >
                          {/* Front of card (Image) */}
                          <div className="absolute w-full h-full backface-hidden">
                            <Card className="h-full overflow-hidden shadow-2xl bg-card/80 backdrop-blur-sm border-2 border-primary/20">
                              <CardContent className="flex items-center justify-center h-full p-6">
                                {placeholder && (
                                  <Image
                                    src={placeholder.imageUrl}
                                    alt={placeholder.description}
                                    data-ai-hint={placeholder.imageHint}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-contain rounded-2xl"
                                    priority
                                  />
                                )}
                              </CardContent>
                            </Card>
                          </div>

                          {/* Back of card (Name) */}
                          <div className="absolute w-full h-full backface-hidden rotate-y-180">
                            <Card className="h-full overflow-hidden shadow-2xl bg-primary/90">
                              <CardContent className="flex items-center justify-center h-full p-6">
                                  <p className="text-5xl md:text-7xl font-bold text-primary-foreground">
                                    {item.name}
                                  </p>
                              </CardContent>
                            </Card>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                </CarouselItem>
                );
            })}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12 text-primary hover:text-primary-foreground hover:bg-primary" />
            <CarouselNext className="-right-4 md:-right-12 text-primary hover:text-primary-foreground hover:bg-primary" />
        </Carousel>
         <p className="mt-8 text-muted-foreground">Click a card to flip it and hear the name!</p>
        </main>
    </div>
  );
}
