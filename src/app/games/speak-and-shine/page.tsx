"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Mic, Sparkles, Volume2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';
import { numbers } from '@/lib/numbers';
import { alphabet } from '@/lib/alphabet';
import { useSpeech } from '@/hooks/use-speech';
import { useProgress } from '@/hooks/use-progress';
import { interpretKidSpeech } from '@/ai/flows/interpret-kid-speech';
import type { NumberInfo, AlphabetLetter } from '@/lib/types';
import Confetti from 'react-confetti';

const GAME_ID = 'speak-and-shine';

type GameItem = (AlphabetLetter & { type: 'letter' }) | (NumberInfo & { type: 'number' });

export default function SpeakAndShineGame() {
  const [task, setTask] = useState<GameItem | null>(null);
  const [gameState, setGameState] = useState<'playing' | 'correct' | 'incorrect'>('playing');
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isProcessingSpeech, setIsProcessingSpeech] = useState(false);
  
  const { speak, startListening, isListening, transcript, isSupported, setTranscript } = useSpeech();
  const { updateGameScore } = useProgress();
  const { toast } = useToast();

  const gameItems: GameItem[] = useMemo(() => {
    const letterItems: GameItem[] = alphabet.map(l => ({ ...l, type: 'letter' }));
    const numberItems: GameItem[] = numbers.map(n => ({ ...n, type: 'number' }));
    return [...letterItems, ...numberItems].sort(() => 0.5 - Math.random());
  }, []);

  const nextQuestion = useCallback(() => {
    const newQuestionNumber = questionNumber + 1;
    if (newQuestionNumber > 10) {
      updateGameScore(GAME_ID, score);
      setQuestionNumber(1);
      setScore(0);
      speak("You finished the game! Let's play again.");
      return;
    }

    setQuestionNumber(newQuestionNumber);
    const currentTask = gameItems[newQuestionNumber - 1];
    setTask(currentTask);
    setGameState('playing');
    
    setTimeout(() => {
      const prompt = currentTask.type === 'letter'
        ? `Can you say the letter ${currentTask.letter}?`
        : `Can you say the number ${currentTask.word}?`;
      speak(prompt);
    }, 500);
  }, [questionNumber, gameItems, score, updateGameScore, speak]);

  useEffect(() => {
    nextQuestion();
  }, []);

  useEffect(() => {
    async function processSpeech() {
      if (transcript && task && !isProcessingSpeech) {
        setIsProcessingSpeech(true);
        try {
          speak(`You said ${transcript}. Let's see if that's right.`);
          const expectedWord = task.type === 'letter' ? task.letter : task.word;
          const result = await interpretKidSpeech({ speech: transcript, expectedWord });

          if (result.isMatch) {
            setGameState('correct');
            setScore(s => s + 10);
            speak('You got it! Well done!');
            setTimeout(nextQuestion, 2500);
          } else {
            setGameState('incorrect');
            speak(`That didn't sound quite right. Try saying ${expectedWord}.`);
            setTimeout(() => {
              setGameState('playing');
            }, 2500);
          }
        } catch (e) {
          console.error(e);
          toast({
            title: "AI Error",
            description: "I had trouble understanding that. Let's try again.",
            variant: "destructive",
          });
          setGameState('playing');
        } finally {
          setIsProcessingSpeech(false);
          setTranscript('');
        }
      }
    }

    if (isSupported) {
        processSpeech();
    } else if (transcript) {
        // If not supported, we can't process, so just clear it.
        setTranscript('');
        toast({
            title: "Speech Not Supported",
            description: "Your browser doesn't support speech recognition. Try using Chrome.",
            variant: "destructive",
        })
    }
  }, [transcript, task, isSupported, speak, toast, setTranscript, isProcessingSpeech, nextQuestion]);


  if (!task) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  const taskValue = task.type === 'letter' ? task.letter : task.number;
  const taskWord = task.type === 'letter' ? task.letter : task.word;

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
       {gameState === 'correct' && <Confetti recycle={false} numberOfPieces={200} />}
      <Card className="w-full max-w-4xl p-6 md:p-10 shadow-2xl relative">
        <CardContent className="flex flex-col items-center gap-8">
            <div className="w-full">
                <div className="flex justify-between mb-2 text-lg font-bold">
                    <span>Question: {questionNumber} / 10</span>
                    <span className="text-primary">Score: {score}</span>
                </div>
                <Progress value={questionNumber * 10} className="w-full h-4" />
            </div>

            <h2 className="text-2xl md:text-4xl font-bold font-headline">
                Say What You See!
            </h2>
          
            <div className="flex items-center justify-center w-64 h-64 rounded-full relative bg-muted/50">
                {gameState === 'correct' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-60 h-60 text-yellow-400 animate-ping opacity-75" />
                        <Sparkles className="absolute w-48 h-48 text-yellow-300 animate-ping delay-150" />
                    </div>
                )}
                <span className={cn("text-9xl font-bold text-primary transition-transform duration-300",
                    gameState === 'correct' && 'scale-125',
                    gameState === 'incorrect' && 'animate-shake'
                )}>
                    {taskValue}
                </span>
            </div>

            <div className="mt-4 flex flex-col items-center gap-2">
                <Button onClick={startListening} disabled={!isSupported || isListening || isProcessingSpeech || gameState !== 'playing'} size="lg" className="rounded-full w-24 h-24 bg-accent hover:bg-accent/80">
                    <Mic className="w-12 h-12" />
                </Button>
                <p className="text-muted-foreground h-6 mt-2">
                    {isListening ? "I'm Listening..." : isProcessingSpeech ? "Thinking..." : "Tap and say it!"}
                </p>
                {!isSupported && <p className="text-destructive text-sm mt-2">Speech recognition not supported in this browser.</p>}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
