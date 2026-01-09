
'use client';

import { useState } from 'react';
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
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { IllustratedStory } from '@/lib/illustrated-stories';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface StorybookProps {
  story: IllustratedStory;
}

export function Storybook({ story }: StorybookProps) {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="bg-background rounded-lg p-4 md:p-8">
      <DialogHeader className="mb-4">
        <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary font-headline">
          {story.title}
        </DialogTitle>
      </DialogHeader>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {story.pages.map((page, index) => {
            const image = PlaceHolderImages.find(p => p.id === page.imageId);
            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex flex-col gap-4 p-4 items-center justify-center">
                      {image && (
                         <div className="relative w-full aspect-video md:aspect-[4/3] rounded-lg overflow-hidden shadow-inner">
                            <Image
                                src={image.imageUrl}
                                alt={`Illustration for story page ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                      )}
                      <p className="text-muted-foreground text-center text-base md:text-lg">
                        {page.paragraph}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-4 md:-left-10" />
        <CarouselNext className="-right-4 md:-right-10" />
      </Carousel>
    </div>
  );
}
