
"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { DndContext, useDraggable, useDroppable, closestCenter } from '@dnd-kit/core';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { useProgress } from '@/hooks/use-progress';
import { useSpeech } from '@/hooks/use-speech';
import { alphabet } from '@/lib/alphabet';
import { cn } from '@/lib/utils';
import type { AlphabetLetter } from '@/lib/types';
import Confetti from 'react-confetti';

const GAME_ID = 'alphabet-pairs';
const NUM_PAIRS = 5;

type PairItem = {
  id: string;
  letter: string;
  type: 'uppercase' | 'lowercase';
};

export default function AlphabetPairsGame() {
  const [pairs, setPairs] = useState<AlphabetLetter[]>([]);
  const [uppercases, setUppercases] = useState<PairItem[]>([]);
  const [lowercases, setLowercases] = useState<PairItem[]>([]);
  const [matched, setMatched] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const { updateGameScore } = useProgress();
  const { speak } = useSpeech();

  const initializeGame = useCallback(() => {
    const gameSubset = [...alphabet].sort(() => 0.5 - Math.random()).slice(0, NUM_PAIRS);
    setPairs(gameSubset);
    
    const uppers = gameSubset.map(l => ({ id: `upper-${l.letter}`, letter: l.letter, type: 'uppercase' as const }));
    const lowers = gameSubset.map(l => ({ id: `lower-${l.letter}`, letter: l.letter.toLowerCase(), type: 'lowercase' as const }));

    setUppercases(uppers.sort(() => 0.5 - Math.random()));
    setLowercases(lowers.sort(() => 0.5 - Math.random()));
    
    setMatched({});
    setScore(0);
    setIsGameOver(false);
    setShowConfetti(false);
    speak("Match the uppercase and lowercase letters.");
  }, [speak]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);
  
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!active || !over) return;
    
    const upperLetter = active.data.current?.letter;
    const lowerLetter = over.data.current?.letter;

    if (upperLetter && lowerLetter && upperLetter.toLowerCase() === lowerLetter) {
        if (!matched[over.id]) {
            setMatched(prev => ({ ...prev, [over.id]: active.id }));
            setScore(s => s + 20);
            speak("Match!");
            setShowConfetti(true);
        }
    } else {
        speak("Try again.");
    }
  };
  
  useEffect(() => {
    if (Object.keys(matched).length === NUM_PAIRS) {
      setIsGameOver(true);
      updateGameScore(GAME_ID, 100);
      speak("You found all the matches! Great job!");
    }
  }, [matched, updateGameScore, speak]);

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
        {showConfetti && <Confetti recycle={false} onConfettiComplete={() => setShowConfetti(false)} numberOfPieces={200} />}
        <Card className="w-full max-w-4xl p-6 md:p-10 shadow-2xl">
            <CardContent className="flex flex-col items-center gap-6">
                 <div className="w-full">
                    <div className="flex justify-between mb-2 text-lg font-bold">
                        <span className="text-primary">Score: {score}</span>
                    </div>
                    <Progress value={score} className="w-full h-4" />
                </div>
                 <h2 className="text-2xl md:text-4xl font-bold font-headline">
                    Alphabet Pairs
                </h2>

                {isGameOver ? (
                    <div className="flex flex-col items-center gap-4 text-center min-h-[300px] justify-center">
                        <Star className="w-24 h-24 text-yellow-400" />
                        <h3 className="text-3xl font-bold">You did it!</h3>
                        <p className="text-xl">Final Score: {score}</p>
                        <Button onClick={initializeGame}>Play Again</Button>
                    </div>
                ) : (
                    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
                        <div className="flex justify-around w-full items-start min-h-[300px]">
                            <div className="flex flex-col gap-4">
                                {uppercases.filter(u => !Object.values(matched).includes(u.id)).map((upper) => (
                                    <DraggableLetter key={upper.id} id={upper.id} letter={upper.letter} />
                                ))}
                            </div>
                            <div className="flex flex-col gap-4">
                                {lowercases.map((lower) => (
                                    <DroppableLetter key={lower.id} id={lower.id} letter={lower.letter} isMatched={!!matched[lower.id]} />
                                ))}
                            </div>
                        </div>
                    </DndContext>
                )}
            </CardContent>
        </Card>
    </div>
  );
}

function DraggableLetter({ id, letter }: { id: string, letter: string }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
        data: { letter: letter }
    });
    const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : {};

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="touch-none">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-lg flex items-center justify-center text-5xl md:text-7xl font-bold text-secondary-foreground cursor-grab active:cursor-grabbing shadow-md">
                {letter}
            </div>
        </div>
    );
}

function DroppableLetter({ id, letter, isMatched }: { id: string, letter: string, isMatched: boolean }) {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
        data: { letter: letter }
    });

    return (
        <div ref={setNodeRef} className={cn(
            "relative w-24 h-24 md:w-32 md:h-32 border-4 border-dashed rounded-lg flex items-center justify-center text-5xl md:text-7xl font-bold text-muted-foreground",
            isOver && 'border-primary',
            isMatched && 'border-solid border-green-500 bg-green-100'
        )}>
            {letter}
            {isMatched && <Check className="absolute w-12 h-12 text-green-600" />}
        </div>
    );
}

    