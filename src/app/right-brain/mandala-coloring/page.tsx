
'use client';
import { useState, useEffect, type FC } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Paintbrush, Eraser } from 'lucide-react';
import { Mandala1 } from '@/components/icons/Mandala1';
import { Mandala2 } from '@/components/icons/Mandala2';
import { Mandala3 } from '@/components/icons/Mandala3';
import { Mandala4 } from '@/components/icons/Mandala4';
import { Mandala5 } from '@/components/icons/Mandala5';
import { Mandala6 } from '@/components/icons/Mandala6';
import { Mandala7 } from '@/components/icons/Mandala7';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import * as React from 'react';

const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#FED766', '#F7786B',
  '#2E294E', '#9A1750', '#EE4C7C', '#F39C12', '#2ECC71'
];

const mandalas: { id: string; component: FC<any> }[] = [
    { id: 'mandala1', component: Mandala1 },
    { id: 'mandala2', component: Mandala2 },
    { id: 'mandala3', component: Mandala3 },
    { id: 'mandala4', component: Mandala4 },
    { id: 'mandala5', component: Mandala5 },
    { id: 'mandala6', component: Mandala6 },
    { id: 'mandala7', component: Mandala7 },
];

export default function MandalaColoringPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [fills, setFills] = useState<Record<string, Record<string, string>>>({});
  const [api, setApi] = useState<CarouselApi>();
  const [currentMandalaIndex, setCurrentMandalaIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrentMandalaIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleColorClick = (pathId: string) => {
      const mandalaId = mandalas[currentMandalaIndex].id;
      
      setFills(prevFills => {
        const newMandalaFills = { ...(prevFills[mandalaId] || {}) };
        if (newMandalaFills[pathId] === selectedColor) {
           delete newMandalaFills[pathId];
        } else {
          newMandalaFills[pathId] = selectedColor;
        }
        return {
          ...prevFills,
          [mandalaId]: newMandalaFills
        };
      });
  };

  const clearFills = () => {
     setFills(prev => {
        const newFills = {...prev};
        delete newFills[mandalas[currentMandalaIndex].id];
        return newFills;
     });
  };

  return (
    <div className="flex flex-col h-full">
      <Header title="Mandala Coloring" />
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center p-4 sm:p-8 gap-8">
        
        <Card className="w-full md:w-auto p-4 flex flex-col items-center gap-4 bg-card/80">
          <CardContent className="p-0 flex flex-col gap-4">
             <div className="flex items-center gap-2">
                <Paintbrush className="w-6 h-6 text-primary"/>
                <h3 className="font-bold text-lg">Choose a Color</h3>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    'w-10 h-10 rounded-full border-2 transition-transform transform hover:scale-110',
                    selectedColor === color ? 'border-primary scale-110' : 'border-transparent'
                  )}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <Button onClick={clearFills} variant="outline" className="w-full">
                <Eraser className="mr-2"/>
                Clear Coloring
            </Button>
          </CardContent>
        </Card>

        <div className="w-full max-w-lg">
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {mandalas.map(({ id, component: MandalaComponent }) => {
                        const mandalaFills = fills[id] || {};
                        return (
                            <CarouselItem key={id}>
                                <Card className="aspect-square flex items-center justify-center p-4 shadow-lg">
                                <MandalaComponent
                                    onPathClick={handleColorClick}
                                    fills={mandalaFills}
                                    className="w-full h-full cursor-pointer"
                                />
                                </Card>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
            </Carousel>
        </div>
      </main>
    </div>
  );
}
