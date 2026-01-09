
"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useProgress } from '@/hooks/use-progress';
import { numbers } from '@/lib/numbers';
import { useSpeech } from '@/hooks/use-speech';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Confetti from 'react-confetti';

const GAME_ID = 'what-comes-after';

export default function WhatComesAfterGame() {
  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const [choices, setChoices] = useState<number[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'correct' | 'incorrect'>('playing');
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [lastClicked, setLastClicked] = useState<number | null>(null);

  const { updateGameScore } = useProgress();
  const { speak } = useSpeech();

  const numberSequence = useMemo(() => numbers.map(n => n.number).filter(n => n < 10), []);

  const nextQuestion = useCallback(() => {
    setLastClicked(null);
    const newQuestionNumber = questionNumber + 1;
    
    // Check if game is complete (9 questions total for this game)
    if (newQuestionNumber > 9) {
      setGameState('correct');
      updateGameScore(GAME_ID, score);
      speak('Congratulations! You completed all questions!');
      
      setTimeout(() => {
        setQuestionNumber(0);
        setScore(0);
        setGameState('playing');
        setTimeout(() => {
          const baseNumber = numberSequence[Math.floor(Math.random() * (numberSequence.length - 1))];
          setCurrentNumber(baseNumber);
          const correctAnswer = baseNumber + 1;
          const wrongAnswers = new Set<number>();
          while(wrongAnswers.size < 2) {
            const wrong = numberSequence[Math.floor(Math.random() * numberSequence.length)];
            if(wrong !== correctAnswer && wrong !== baseNumber) {
              wrongAnswers.add(wrong);
            }
          }
          const newChoices = [...Array.from(wrongAnswers), correctAnswer].sort(() => 0.5 - Math.random());
          setChoices(newChoices);
          setTimeout(() => speak(`What comes after ${baseNumber}?`), 500);
        }, 100);
      }, 4000);
      return;
    }

    setQuestionNumber(newQuestionNumber);
    const baseNumber = numberSequence[Math.floor(Math.random() * (numberSequence.length - 1))];
    setCurrentNumber(baseNumber);
    
    const correctAnswer = baseNumber + 1;
    const wrongAnswers = new Set<number>();
    while(wrongAnswers.size < 2) {
        const wrong = numberSequence[Math.floor(Math.random() * numberSequence.length)];
        if(wrong !== correctAnswer && wrong !== baseNumber) {
            wrongAnswers.add(wrong);
        }
    }

    const newChoices = [...Array.from(wrongAnswers), correctAnswer].sort(() => 0.5 - Math.random());
    setChoices(newChoices);
    setGameState('playing');
    
    setTimeout(() => {
        speak(`What comes after ${baseNumber}?`);
    }, 500);
  }, [questionNumber, score, updateGameScore, speak, numberSequence]);

  useEffect(() => {
    if (questionNumber === 0) {
      nextQuestion();
    }
  }, []);

  const handleChoice = (choice: number) => {
    if (gameState !== 'playing') return;

    setLastClicked(choice);
    const isCorrect = choice === currentNumber + 1;

    if (isCorrect) {
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
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
       {gameState === 'correct' && <Confetti recycle={false} numberOfPieces={200} />}
      <Card className="w-full max-w-4xl p-6 md:p-10 shadow-2xl">
        <CardContent className="flex flex-col items-center gap-8">
          <div className="w-full">
            <div className="flex justify-between mb-2 text-lg font-bold">
              <span>Question: {questionNumber} / 9</span>
              <span className="text-primary">Score: {score}</span>
            </div>
            <Progress value={questionNumber * 11} className="w-full h-4" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold font-headline">
            What comes after...?
          </h2>
          
          <div className="flex items-center justify-center gap-4 md:gap-8 bg-muted p-6 rounded-lg">
             <div className="w-24 h-24 md:w-32 md:h-32 bg-card rounded-lg flex items-center justify-center text-6xl md:text-7xl font-bold text-primary shadow-inner">
                {currentNumber}
             </div>
             <ArrowRight className="w-10 h-10 md:w-16 md:h-16 text-muted-foreground" />
             <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-dashed rounded-lg flex items-center justify-center text-6xl md:text-7xl font-bold text-muted-foreground">
                ?
             </div>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 w-full max-w-lg">
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

    