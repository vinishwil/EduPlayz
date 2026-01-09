
"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import { useProgress } from '@/hooks/use-progress';
import { useSpeech } from '@/hooks/use-speech';
import { alphabet } from '@/lib/alphabet';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import type { AlphabetLetter } from '@/lib/types';
import { Check, Star } from 'lucide-react';
import Confetti from 'react-confetti';

const GAME_ID = 'memory-match';
const NUM_PAIRS = 6; // Creates a 3x4 grid

type MemoryCard = {
  id: number;
  type: 'letter' | 'image';
  value: string; // Letter or imageId
  isFlipped: boolean;
  isMatched: boolean;
};

export default function MemoryMatchGame() {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { updateGameScore } = useProgress();
  const { speak } = useSpeech();

  const gameAlphabet = useMemo(() => 
    [...alphabet].sort(() => 0.5 - Math.random()).slice(0, NUM_PAIRS), 
  []);

  const initializeGame = useCallback(() => {
    const gameCards: { type: 'letter' | 'image', value: string }[] = [];
    gameAlphabet.forEach(item => {
      gameCards.push({ type: 'letter', value: item.letter });
      gameCards.push({ type: 'image', value: item.imageId });
    });

    const shuffled = gameCards
      .sort(() => 0.5 - Math.random())
      .map((card, index) => ({
        ...card,
        id: index,
        isFlipped: false,
        isMatched: false,
      }));
    
    setCards(shuffled);
    setMoves(0);
    setScore(0);
    setFlippedCards([]);
    setIsGameOver(false);
    setShowConfetti(false);
    speak("Let's play Memory Match!");
  }, [gameAlphabet, speak]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped) return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    setFlippedCards([...flippedCards, id]);
  };

  useEffect(() => {
    if (flippedCards.length !== 2) return;

    setMoves(m => m + 1);
    const [firstId, secondId] = flippedCards;
    const firstCard = cards[firstId];
    const secondCard = cards[secondId];

    const firstLetterData = gameAlphabet.find(
      (l) => l.letter === firstCard.value || l.imageId === firstCard.value
    );
    const secondLetterData = gameAlphabet.find(
      (l) => l.letter === secondCard.value || l.imageId === secondCard.value
    );
    
    if (firstLetterData && firstLetterData === secondLetterData) {
      // Match!
      speak('Match!');
      setScore(s => s + 20);
      setShowConfetti(true);
      const newCards = cards.map(card => 
        card.id === firstId || card.id === secondId ? { ...card, isMatched: true } : card
      );
      setTimeout(() => {
        setCards(newCards);
        setFlippedCards([]);
      }, 800); // Give time for speech
    } else {
      // No match
      speak('No match.');
      setTimeout(() => {
        const newCards = cards.map(card => 
          card.id === firstId || card.id === secondId ? { ...card, isFlipped: false } : card
        );
        setCards(newCards);
        setFlippedCards([]);
      }, 2000); // Give more time for speech
    }
  }, [flippedCards, cards, gameAlphabet, speak]);

  useEffect(() => {
    const allMatched = cards.length > 0 && cards.every(c => c.isMatched);
    if (allMatched) {
      setIsGameOver(true);
      const finalScore = Math.max(0, 100 - (moves - NUM_PAIRS) * 5) + score;
      updateGameScore(GAME_ID, finalScore);
      speak(`You did it! Your score is ${finalScore}.`);
    }
  }, [cards, moves, score, updateGameScore, speak]);


  return (
    <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
      {showConfetti && <Confetti recycle={false} onConfettiComplete={() => setShowConfetti(false)} numberOfPieces={100} />}
      <Card className="w-full max-w-4xl p-6 md:p-10 shadow-2xl">
        <CardContent className="flex flex-col items-center gap-6">
          <div className="w-full">
            <div className="flex justify-between mb-2 text-lg font-bold">
              <span>Moves: {moves}</span>
              <span className="text-primary">Score: {score}</span>
            </div>
            <Progress value={(score / (NUM_PAIRS * 20)) * 100} className="w-full h-4" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold font-headline">
            Memory Match
          </h2>

          {isGameOver ? (
            <div className="flex flex-col items-center gap-4 text-center">
                <Star className="w-24 h-24 text-yellow-400" />
                <h3 className="text-3xl font-bold">Game Over!</h3>
                <p className="text-xl">Final Score: {score}</p>
                <Button onClick={initializeGame}>Play Again</Button>
            </div>
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 w-full justify-center">
              {cards.map((card) => (
                <MemoryCardComponent 
                  key={card.id} 
                  card={card} 
                  onClick={handleCardClick} 
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

const MemoryCardComponent = ({ card, onClick }: { card: MemoryCard, onClick: (id: number) => void }) => {
  const placeholder = card.type === 'image' ? PlaceHolderImages.find(p => p.id === card.value) : null;
  const isFlipping = card.isFlipped && !card.isMatched;

  return (
    <div className="aspect-square perspective-1000" onClick={() => !card.isFlipped && onClick(card.id)}>
      <div 
        className={cn(
          "relative w-full h-full transform-style-3d transition-transform duration-700",
          card.isFlipped && "rotate-y-180"
        )}
      >
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-primary rounded-lg shadow-lg cursor-pointer">
          <Star className="w-1/2 h-1/2 text-primary-foreground/50" />
        </div>

        {/* Front of card */}
        <div className={cn("absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center rounded-lg shadow-lg",
           card.isMatched ? 'bg-green-200' : 'bg-card'
        )}>
          {card.isMatched && <div className="absolute inset-0 bg-green-500/50 flex items-center justify-center"><Check className="w-1/2 h-1/2 text-white" /></div>}
          {card.type === 'letter' ? (
            <span className="text-5xl md:text-7xl font-bold text-primary">{card.value}</span>
          ) : placeholder ? (
            <Image
              src={placeholder.imageUrl}
              alt={placeholder.description}
              data-ai-hint={placeholder.imageHint}
              width={150}
              height={150}
              className="object-contain p-2 w-full h-full"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

// Add these styles to a global css file or a style tag if needed for 3D transform
// .perspective-1000 { perspective: 1000px; }
// .transform-style-3d { transform-style: preserve-3d; }
// .rotate-y-180 { transform: rotateY(180deg); }
// .backface-hidden { backface-visibility: hidden; }
// Add to tailwind.config.js keyframes if shake animation is desired
// shake: { '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' }, ... }
// animation: { shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both' }
// The current globals.css already has shake animation.

// Add custom utilities to tailwind.config.ts if not present
// theme: { extend: { perspective: { '1000': '1000px' }, ... }}
// plugins: [
//   plugin(function({ addUtilities }) {
//     addUtilities({
//       '.transform-style-3d': { 'transform-style': 'preserve-3d' },
//       '.rotate-y-180': { 'transform': 'rotateY(180deg)' },
//       '.backface-hidden': { 'backface-visibility': 'hidden' },
//     })
//   })
// ]
    

    