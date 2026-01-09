
"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useProgress } from '@/hooks/use-progress';
import { alphabet } from '@/lib/alphabet';
import { useSpeech } from '@/hooks/use-speech';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Confetti from 'react-confetti';

const GAME_ID = 'whats-next';

export default function WhatsNextGame() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [choices, setChoices] = useState<string[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'correct' | 'incorrect'>('playing');
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [lastClicked, setLastClicked] = useState<string | null>(null);

  const { updateGameScore } = useProgress();
  const { speak } = useSpeech();

  const letterSequence = useMemo(() => alphabet.map(l => l.letter), []);

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
          const startIndex = Math.floor(Math.random() * (letterSequence.length - 3));
          const currentSequence = letterSequence.slice(startIndex, startIndex + 2);
          setSequence(currentSequence);
          const correctAnswer = letterSequence[startIndex + 2];
          const wrongAnswers = new Set<string>();
          while(wrongAnswers.size < 2) {
            const wrong = letterSequence[Math.floor(Math.random() * letterSequence.length)];
            if(wrong !== correctAnswer && !currentSequence.includes(wrong)) {
              wrongAnswers.add(wrong);
            }
          }
          const newChoices = [...Array.from(wrongAnswers), correctAnswer].sort(() => 0.5 - Math.random());
          setChoices(newChoices);
          setTimeout(() => speak(`What's next? ${currentSequence.join(', ')}`), 500);
        }, 100);
      }, 4000);
      return;
    }

    setQuestionNumber(newQuestionNumber);
    
    const startIndex = Math.floor(Math.random() * (letterSequence.length - 3));
    const currentSequence = letterSequence.slice(startIndex, startIndex + 2);
    setSequence(currentSequence);
    
    const correctAnswer = letterSequence[startIndex + 2];
    
    const wrongAnswers = new Set<string>();
    while(wrongAnswers.size < 2) {
        const wrong = letterSequence[Math.floor(Math.random() * letterSequence.length)];
        if(wrong !== correctAnswer && !currentSequence.includes(wrong)) {
            wrongAnswers.add(wrong);
        }
    }

    const newChoices = [...Array.from(wrongAnswers), correctAnswer].sort(() => 0.5 - Math.random());
    setChoices(newChoices);
    setGameState('playing');
    
    setTimeout(() => {
        speak(`What's next? ${currentSequence.join(', ')}`);
    }, 500);
  }, [questionNumber, score, updateGameScore, speak, letterSequence]);

  useEffect(() => {
    if (questionNumber === 0) {
      nextQuestion();
    }
  }, []);

  const handleChoice = (choice: string) => {
    if (gameState !== 'playing') return;

    setLastClicked(choice);
    const currentIndex = letterSequence.indexOf(sequence[1]);
    const isCorrect = letterSequence[currentIndex + 1] === choice;

    if (isCorrect) {
      setGameState('correct');
      setScore(s => s + 10);
      speak('Correct!');
      setTimeout(nextQuestion, 3000); // Wait for confetti and speech
    } else {
      setGameState('incorrect');
      speak('Not quite, try again.');
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
              <span>Question: {questionNumber} / 10</span>
              <span className="text-primary">Score: {score}</span>
            </div>
            <Progress value={questionNumber * 10} className="w-full h-4" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold font-headline">
            What's the next letter?
          </h2>
          
          <div className="flex items-center justify-center gap-2 md:gap-4 bg-muted p-6 rounded-lg">
            {sequence.map(letter => (
                 <div key={letter} className="w-20 h-20 md:w-28 md:h-28 bg-card rounded-lg flex items-center justify-center text-5xl md:text-7xl font-bold text-primary shadow-inner">
                    {letter}
                 </div>
            ))}
             <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground mx-2" />
             <div className="w-20 h-20 md:w-28 md:h-28 border-4 border-dashed rounded-lg flex items-center justify-center text-5xl md:text-7xl font-bold text-muted-foreground">
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

    