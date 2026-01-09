
"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Mic, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast"
import { cn } from '@/lib/utils';
import { numbers } from '@/lib/numbers';
import { useSpeech } from '@/hooks/use-speech';
import { useProgress } from '@/hooks/use-progress';
import { interpretKidSpeech } from '@/ai/flows/interpret-kid-speech';
import type { NumberInfo } from '@/lib/types';
import Confetti from 'react-confetti';

const NUM_CHOICES = 4;
const GAME_ID = 'find-the-number';

export default function FindTheNumberGame() {
  const [task, setTask] = useState<NumberInfo | null>(null);
  const [choices, setChoices] = useState<NumberInfo[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'correct' | 'incorrect'>('playing');
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [isProcessingSpeech, setIsProcessingSpeech] = useState(false);
  const [lastClicked, setLastClicked] = useState<number | null>(null);
  const { speak, startListening, isListening, transcript, isSupported, setTranscript } = useSpeech();
  const { updateGameScore } = useProgress();
  const { toast } = useToast();

  const shuffledNumbers = useMemo(() => [...numbers].sort(() => 0.5 - Math.random()), []);

  const nextQuestion = useCallback(() => {
    setLastClicked(null);
    const newQuestionNumber = questionNumber + 1;
    
    // Check if game is complete
    if (newQuestionNumber > 10) {
      setGameState('correct'); // Keep showing confetti
      updateGameScore(GAME_ID, score);
      speak('Congratulations! You completed all questions!');
      
      // Reset game after celebration
      setTimeout(() => {
        setQuestionNumber(0);
        setScore(0);
        setGameState('playing');
        // Start first question
        setTimeout(() => {
          const firstTask = shuffledNumbers[0];
          setTask(firstTask);
          const otherChoices = shuffledNumbers
            .filter(n => n.number !== firstTask.number)
            .slice(0, NUM_CHOICES - 1);
          const newChoices = [...otherChoices, firstTask].sort(() => 0.5 - Math.random());
          setChoices(newChoices);
          setTimeout(() => speak(`Find the number ${firstTask.word}`), 500);
        }, 100);
      }, 4000);
      return;
    }

    setQuestionNumber(newQuestionNumber);
    
    const currentTask = shuffledNumbers[newQuestionNumber - 1];
    setTask(currentTask);

    const otherChoices = shuffledNumbers
      .filter(n => n.number !== currentTask.number)
      .slice(0, NUM_CHOICES - 1);
    
    const newChoices = [...otherChoices, currentTask].sort(() => 0.5 - Math.random());
    setChoices(newChoices);
    setGameState('playing');
    
    setTimeout(() => {
        speak(`Find the number ${currentTask.word}`);
    }, 500);
  }, [questionNumber, shuffledNumbers, speak, score, updateGameScore]);

  useEffect(() => {
    if (questionNumber === 0) {
      nextQuestion();
    }
  }, []);

  const handleChoice = useCallback((choice: NumberInfo) => {
    if (gameState !== 'playing' || !task) return;

    setLastClicked(choice.number);
    if (choice.number === task.number) {
      setGameState('correct');
      setScore(s => s + 10);
      speak('Excellent!');
      setTimeout(nextQuestion, 3000); // Wait for confetti and speech
    } else {
      setGameState('incorrect');
      speak('Not quite, try again.');
      setTimeout(() => {
        setGameState('playing');
        setLastClicked(null);
      }, 2000); // Give more time for speech
    }
  }, [gameState, task, speak, nextQuestion]);

  useEffect(() => {
    async function processSpeech() {
      if (transcript && task && !isProcessingSpeech && isPremium) {
        setIsProcessingSpeech(true);
        try {
          speak(`You said ${transcript}. Let's check.`);
          const result = await interpretKidSpeech({ speech: transcript, expectedWord: task.word });

          const foundChoice = choices.find(c => c.word.toLowerCase() === result.correctedWord.toLowerCase() || String(c.number) === result.correctedWord);

          if (result.isMatch && task) {
            handleChoice(task);
          } else if (foundChoice) {
            handleChoice(foundChoice)
          }
          else {
            setGameState('incorrect');
            speak(`That doesn't sound like ${task.word}. Try again.`);
            setTimeout(() => {
                setGameState('playing');
                setLastClicked(null);
            }, 2000);
          }
        } catch(e) {
            console.error(e);
            toast({
              title: "AI Error",
              description: "Couldn't interpret speech. Please try again.",
              variant: "destructive",
            });
            setGameState('playing');
        } finally {
            setIsProcessingSpeech(false);
            setTranscript('');
        }
      }
    }
    if (transcript && isPremium) {
        processSpeech();
    }
  }, [transcript, task, choices, handleChoice, speak, toast, setTranscript, isProcessingSpeech, isPremium]);

  const handlePremiumToggle = (checked: boolean) => {
    setIsPremium(checked);
    if (checked && !isSupported) {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Your browser doesn't support speech recognition. Try Chrome or Safari.",
        variant: "destructive",
      });
      setIsPremium(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
       {gameState === 'correct' && <Confetti recycle={false} numberOfPieces={200} />}
      <Card className="w-full max-w-4xl p-6 md:p-10 shadow-2xl relative">
        <div className="absolute top-4 right-4 flex items-center space-x-2">
            <Switch id="premium-mode" checked={isPremium} onCheckedChange={handlePremiumToggle} />
            <Label htmlFor="premium-mode" className="flex items-center gap-1 text-yellow-500 font-bold">
                <Star className="w-4 h-4" /> Premium AI
            </Label>
        </div>
        <CardContent className="flex flex-col items-center gap-8">
            <div className="w-full">
                <div className="flex justify-between mb-2 text-lg font-bold">
                    <span>Question: {questionNumber} / 10</span>
                    <span className="text-primary">Score: {score}</span>
                </div>
                <Progress value={questionNumber * 10} className="w-full h-4" />
            </div>

            <div className="flex items-center gap-4">
                <h2 className="text-2xl md:text-4xl font-bold font-headline">
                    {`Find the number...`}
                </h2>
                <Button variant="outline" size="icon" onClick={() => task && speak(task.word)} className="rounded-full w-16 h-16">
                    <span className="text-5xl font-bold">{task?.number}</span>
                </Button>
            </div>
          
            {!isPremium && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
                {choices.map((choice) => (
                <Button
                    key={choice.number}
                    onClick={() => handleChoice(choice)}
                    disabled={gameState !== 'playing'}
                    className={cn(
                    "h-24 md:h-32 text-6xl md:text-7xl font-bold transform transition-all duration-300",
                    gameState === 'correct' && lastClicked === choice.number && 'bg-green-500 scale-110',
                    gameState === 'incorrect' && lastClicked === choice.number && 'bg-red-500 animate-shake'
                    )}
                >
                    {choice.number}
                </Button>
                ))}
            </div>
            )}

          {isPremium && (
            <div className="mt-4 flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-64 h-64 border-4 border-dashed rounded-full relative">
                    {gameState === 'correct' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Sparkles className="w-48 h-48 text-yellow-400 animate-ping" />
                        </div>
                    )}
                    <Button onClick={startListening} disabled={isListening || isProcessingSpeech || gameState !== 'playing'} size="lg" className="rounded-full w-32 h-32 bg-accent hover:bg-accent/80">
                        <Mic className="w-16 h-16" />
                    </Button>
                 </div>
                <p className="text-muted-foreground h-6 mt-4">
                    {isListening ? "Listening..." : isProcessingSpeech ? "Thinking..." : "Tap the mic and say the number"}
                </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

    