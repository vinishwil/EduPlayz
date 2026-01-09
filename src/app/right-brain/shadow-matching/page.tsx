
'use client';
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { DndContext, DragEndEvent, useDraggable, useDroppable } from '@dnd-kit/core';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { shadowMatchables } from '@/lib/flashcard-data';
import { cn } from '@/lib/utils';
import { CheckCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const shuffle = <T,>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

type GameObject = {
  id: string;
  imageId: string;
  name: string;
};

export default function ShadowMatchingPage() {
  const [objects, setObjects] = useState<GameObject[]>([]);
  const [shadows, setShadows] = useState<GameObject[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [isGameWon, setIsGameWon] = useState(false);

  const setupGame = () => {
    const gameSet = shuffle(shadowMatchables).slice(0, 4);
    const gameObjects = gameSet.map(item => ({ id: `obj-${item.imageId}`, imageId: item.imageId, name: item.name }));
    const shadowObjects = gameSet.map(item => ({ id: `shadow-${item.imageId}`, imageId: item.imageId, name: item.name }));

    setObjects(shuffle(gameObjects));
    setShadows(shuffle(shadowObjects));
    setMatchedPairs({});
    setIsGameWon(false);
  };

  useEffect(() => {
    setupGame();
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.data.current?.imageId === over.data.current?.imageId) {
      if (!matchedPairs[over.id as string]) {
        setMatchedPairs(prev => ({ ...prev, [over.id as string]: active.id as string }));
      }
    }
  };

  useEffect(() => {
    if (Object.keys(matchedPairs).length === 4 && objects.length > 0) {
      setIsGameWon(true);
    }
  }, [matchedPairs, objects]);

  return (
    <div className="flex flex-col h-full">
      <Header title="Shadow Matching" />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
            <div className="flex flex-col items-center gap-4 p-4 rounded-lg bg-card/50">
              <h2 className="font-bold text-xl text-primary">Objects</h2>
              <div className="grid grid-cols-2 gap-4">
                {objects.map(obj => (
                  <ObjectDraggable key={obj.id} obj={obj} isMatched={Object.values(matchedPairs).includes(obj.id)} />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-4 rounded-lg bg-card/50">
              <h2 className="font-bold text-xl text-primary">Shadows</h2>
              <div className="grid grid-cols-2 gap-4">
                {shadows.map(shadow => (
                  <ShadowDroppable key={shadow.id} shadow={shadow} matchedObject={matchedPairs[shadow.id] ? objects.find(o => o.id === matchedPairs[shadow.id]) : undefined} />
                ))}
              </div>
            </div>
          </div>
        </DndContext>
        {isGameWon && (
          <div className="flex flex-col items-center gap-4 mt-8">
            <Award className="w-16 h-16 text-yellow-500" />
            <h2 className="text-2xl font-bold text-accent">You matched them all!</h2>
            <Button onClick={setupGame}>Play Again</Button>
          </div>
        )}
      </main>
    </div>
  );
}

function ObjectDraggable({ obj, isMatched }: { obj: GameObject; isMatched: boolean }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: obj.id,
    data: { imageId: obj.imageId },
    disabled: isMatched,
  });

  const placeholder = PlaceHolderImages.find(p => p.id === obj.imageId);
  if (!placeholder) return null;

  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : {};

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={cn(
        'p-4 bg-white rounded-lg shadow-md touch-none',
        isMatched ? 'opacity-30 cursor-default' : 'cursor-grab'
      )}
    >
      <Image src={placeholder.imageUrl} alt={placeholder.description} width={150} height={150} className="object-contain" />
    </div>
  );
}

function ShadowDroppable({ shadow, matchedObject }: { shadow: GameObject; matchedObject?: GameObject }) {
  const { isOver, setNodeRef } = useDroppable({
    id: shadow.id,
    data: { imageId: shadow.imageId },
    disabled: !!matchedObject,
  });

  const placeholder = PlaceHolderImages.find(p => p.id === shadow.imageId);
  if (!placeholder) return null;
  
  const matchedPlaceholder = matchedObject ? PlaceHolderImages.find(p => p.id === matchedObject.imageId) : null;

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'relative w-[182px] h-[182px] rounded-lg flex items-center justify-center transition-colors',
        matchedObject ? 'bg-green-100' : 'bg-muted',
        isOver && !matchedObject && 'bg-accent/20'
      )}
    >
      {matchedObject && matchedPlaceholder ? (
         <Image src={matchedPlaceholder.imageUrl} alt={matchedPlaceholder.description} width={150} height={150} className="object-contain" />
      ) : (
        <Image src={placeholder.imageUrl} alt={`shadow of ${placeholder.description}`} width={150} height={150} className="object-contain brightness-0 opacity-40" />
      )}
      
      {matchedObject && (
        <CheckCircle className="absolute w-8 h-8 text-green-600 top-2 right-2" />
      )}
    </div>
  );
}
