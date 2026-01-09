
"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useProgress } from '@/hooks/use-progress';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { numbers } from '@/lib/numbers';
import type { NumberInfo } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useSpeech } from '@/hooks/use-speech';
import Confetti from 'react-confetti';

const NUM_CHOICES = 4;
const GAME_ID = 'counting-game';

export default function CountingGame() {
  const [task, setTask] = useState<{ imageId: string, count: number } | null>(null);
  const [choices, setChoices] = useState<number[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'correct' | 'incorrect'>('playing');
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [lastClicked, setLastClicked] = useState<number | null>(null);
  const { updateGameScore } = useProgress();
  const { speak } = useSpeech();

  const gameItems = useMemo(() => 
    numbers.map(n => ({ imageId: `counting-${n.number}`, count: n.number }))
    .sort(() => 0.5 - Math.random()), 
  []);

  const nextQuestion = useCallback(() => {
    setLastClicked(null);
    const newQuestionNumber = questionNumber + 1;
    
    // Check if game is complete
    if (newQuestionNumber > 10) {
      setGameState('correct');
      updateGameScore(GAME_ID, score);
      speak('Congratulations! You completed all questions!');
      
      setTimeout(() => {
        setQuestionNumber(0);
        setScore(0);
        setGameState('playing');
        setTimeout(() => {
          const firstTask = gameItems[0];
          setTask(firstTask);
          const otherCounts = numbers
            .map(n => n.number)
            .filter(n => n !== firstTask.count)
            .sort(() => 0.5 - Math.random())
            .slice(0, NUM_CHOICES - 1);
          const newChoices = [...otherCounts, firstTask.count].sort(() => 0.5 - Math.random());
          setChoices(newChoices);
          setTimeout(() => speak(`How many items do you see?`), 500);
        }, 100);
      }, 4000);
      return;
    }

    setQuestionNumber(newQuestionNumber);
    
    const currentTask = gameItems[newQuestionNumber - 1];
    setTask(currentTask);

    const otherCounts = numbers
      .map(n => n.number)
      .filter(n => n !== currentTask.count)
      .sort(() => 0.5 - Math.random())
      .slice(0, NUM_CHOICES - 1);
    
    const newChoices = [...otherCounts, currentTask.count].sort(() => 0.5 - Math.random());
    setChoices(newChoices);
    setGameState('playing');
    
    setTimeout(() => {
        speak(`How many items do you see?`);
    }, 500);
  }, [questionNumber, gameItems, score, updateGameScore, speak]);

  useEffect(() => {
    if (questionNumber === 0) {
      nextQuestion();
    }
  }, []);

  const handleChoice = useCallback((choice: number) => {
    if (gameState !== 'playing' || !task) return;

    setLastClicked(choice);
    if (choice === task.count) {
      setGameState('correct');
      setScore(s => s + 10);
      speak('That is correct!');
      setTimeout(nextQuestion, 3000); // Wait for confetti and speech
    } else {
      setGameState('incorrect');
      speak('Oops, try again.');
      setTimeout(() => {
        setGameState('playing');
        setLastClicked(null);
      }, 2000); // Give more time for speech
    }
  }, [gameState, task, speak, nextQuestion]);
  
  const placeholder = PlaceHolderImages.find(p => p.id === task?.imageId);

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
       {gameState === 'correct' && <Confetti recycle={false} numberOfPieces={200} />}
      <Card className="w-full max-w-4xl p-6 md:p-10 shadow-2xl">
        <CardContent className="flex flex-col items-center gap-8">
          <div className="w-full">
            <div className="flex justify-between mb-2 text-lg font-bold">
              <span>Question: {questionNumber} / 10</span>
              <span className="text-primary">Score: {score}</span>
            </div>
            <Progress value={questionNumber * 10} className="w-full h-4" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold font-headline">
            How many items do you see?
          </h2>

          <Card className="p-4 bg-muted/50 w-full max-w-md h-64 flex items-center justify-center">
            {placeholder && (
              <Image
                src={placeholder.imageUrl}
                alt={placeholder.description}
                data-ai-hint={placeholder.imageHint}
                width={400}
                height={300}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </Card>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
            {choices.map((choice) => (
              <Button
                key={choice}
                onClick={() => handleChoice(choice)}
                disabled={gameState !== 'playing'}
                className={cn(
                  "h-24 md:h-32 text-6xl md:text-7xl font-bold transform transition-all duration-300",
                  gameState === 'correct' && lastClicked === choice && 'bg-green-500 scale-110',
                  gameState === 'incorrect' && lastClicked === choice && 'bg-red-500 animate-shake'
                )}
              >
                {choice}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

    