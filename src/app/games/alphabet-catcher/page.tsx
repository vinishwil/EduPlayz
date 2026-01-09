
"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useProgress } from '@/hooks/use-progress';
import { useSpeech } from '@/hooks/use-speech';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, School, Star, Bomb, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { levelData } from '@/lib/level-data';
import Confetti from 'react-confetti';

const GAME_ID = 'alphabet-runner';

// --- World & Camera ---
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const WORLD_WIDTH = 5000;
const CAMERA_LERP_FACTOR = 0.1;

// --- Player Physics ---
const GRAVITY = 0.8;
const JUMP_FORCE = -20;
const MAX_SPEED = 8;
const ACCELERATION = 0.8;
const FRICTION = 0.9;
const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 50;

// --- Game Object Types ---
type PlayerState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  onGround: boolean;
};

type Platform = typeof levelData.platforms[0];
type LetterObject = typeof levelData.letters[0];
type BombObject = typeof levelData.bombs[0];


const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

export default function AlphabetRunnerGame() {
  const [player, setPlayer] = useState<PlayerState>({ x: 200, y: SCREEN_HEIGHT - 100, vx: 0, vy: 0, onGround: false });
  const [cameraX, setCameraX] = useState(0);
  const [collectedLetters, setCollectedLetters] = useState<Set<string>>(new Set());
  const [activeBombs, setActiveBombs] = useState<Set<number>>(() => new Set(levelData.bombs.map(b => b.id)));
  const [hearts, setHearts] = useState(3);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'won' | 'over'>('start');
  const [justCollected, setJustCollected] = useState<string | null>(null);

  const gameLoopRef = useRef<number>();
  const keysRef = useRef<Record<string, boolean>>({});

  const { updateGameScore } = useProgress();
  const { speak } = useSpeech();

  const initializeGame = useCallback(() => {
    setPlayer({ x: 200, y: SCREEN_HEIGHT - 100, vx: 0, vy: 0, onGround: false });
    setCameraX(0);
    setCollectedLetters(new Set());
    setActiveBombs(new Set(levelData.bombs.map(b => b.id)));
    setHearts(3);
    setGameState('playing');
    speak("Get ready to run and jump for letters!");
  }, [speak]);

  const gameLoop = useCallback(() => {
    setPlayer(p => {
      let newVx = p.vx;
      if (keysRef.current['ArrowLeft']) newVx -= ACCELERATION;
      if (keysRef.current['ArrowRight']) newVx += ACCELERATION;
      
      newVx *= FRICTION;
      if (Math.abs(newVx) > MAX_SPEED) newVx = Math.sign(newVx) * MAX_SPEED;

      let newVy = p.vy + GRAVITY;
      let newX = p.x + newVx;
      let newY = p.y + newVy;
      let newOnGround = false;

      // World boundaries
      if (newX < 0) newX = 0;
      if (newX + PLAYER_WIDTH > WORLD_WIDTH) newX = WORLD_WIDTH - PLAYER_WIDTH;

      // Platform collision
      for (const platform of levelData.platforms) {
        if (
          newX + PLAYER_WIDTH > platform.x &&
          newX < platform.x + platform.width &&
          p.y + PLAYER_HEIGHT <= platform.y &&
          newY + PLAYER_HEIGHT >= platform.y
        ) {
          newVy = 0;
          newY = platform.y - PLAYER_HEIGHT;
          newOnGround = true;
          break;
        }
      }
      
      return { x: newX, y: newY, vx: newVx, vy: newVy, onGround: newOnGround };
    });

    // Update Camera
    setCameraX(prevCamX => {
        const targetCamX = player.x - SCREEN_WIDTH / 2;
        const newCamX = prevCamX + (targetCamX - prevCamX) * CAMERA_LERP_FACTOR;
        return Math.max(0, Math.min(WORLD_WIDTH - SCREEN_WIDTH, newCamX));
    });

    // Collision with letters
    const playerRect = { x: player.x, y: player.y, width: PLAYER_WIDTH, height: PLAYER_HEIGHT };
    levelData.letters.forEach(letter => {
        if (!collectedLetters.has(letter.char)) {
            const letterRect = { x: letter.x, y: letter.y, width: 40, height: 40 };
            if (
                playerRect.x < letterRect.x + letterRect.width &&
                playerRect.x + playerRect.width > letterRect.x &&
                playerRect.y < letterRect.y + letterRect.height &&
                playerRect.y + playerRect.height > letterRect.y
            ) {
                setCollectedLetters(prevSet => new Set(prevSet).add(letter.char));
                setJustCollected(letter.char);
                setTimeout(() => setJustCollected(null), 500);
                speak(letter.char);
            }
        }
    });

    // Collision with bombs
    levelData.bombs.forEach(bomb => {
        if (activeBombs.has(bomb.id)) {
            const bombRect = { x: bomb.x, y: bomb.y, width: 30, height: 30 };
            if (
                playerRect.x < bombRect.x + bombRect.width &&
                playerRect.x + playerRect.width > bombRect.x &&
                playerRect.y < bombRect.y + bombRect.height &&
                playerRect.y + playerRect.height > bombRect.y
            ) {
                setActiveBombs(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(bomb.id);
                    return newSet;
                });
                setHearts(h => Math.max(0, h - 1));
                speak("Ouch");
            }
        }
    });

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [player.x, player.y, collectedLetters, activeBombs, speak]);

  const jump = () => {
    if (gameState === 'playing' && player.onGround) {
        setPlayer(p => ({ ...p, vy: JUMP_FORCE, onGround: false }));
    }
  }
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        keysRef.current[e.key] = true;
        if (e.key === 'ArrowUp' || e.key === ' ') {
            e.preventDefault();
            jump();
        }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
        keysRef.current[e.key] = false;
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState, player.onGround]);

  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
      return () => {
        if(gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
      };
    }
  }, [gameState, gameLoop]);
  
  useEffect(() => {
    if(collectedLetters.size === allLetters.length) {
        setGameState('won');
    }
    if (hearts === 0) {
        setGameState('over');
    }
  }, [collectedLetters, hearts]);

  useEffect(() => {
    if (gameState === 'over' || gameState === 'won') {
      if(gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
      const score = collectedLetters.size * 10;
      updateGameScore(GAME_ID, score);
      if (gameState === 'won') {
        speak(`You collected all the letters! Amazing! Your score is ${score}`);
      } else {
        speak(`Game over! Try again! Your score is ${score}`);
      }
    }
  }, [gameState, collectedLetters.size, updateGameScore, speak]);

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-4">
      {gameState === 'won' && <Confetti recycle={false} numberOfPieces={200} />}
      <Card className="w-full max-w-4xl p-4 shadow-2xl bg-slate-100">
        <CardContent className="flex flex-col items-center gap-2">
           <h2 className="text-2xl md:text-4xl font-bold font-headline text-primary">Alphabet Runner</h2>
           {/* Alphabet Progress Display */}
            <div className="w-full bg-slate-200 rounded-md p-2 flex flex-wrap gap-x-1.5 gap-y-1 justify-center">
                {allLetters.map(l => {
                    const isCollected = collectedLetters.has(l);
                    const isJustCollected = justCollected === l;
                    return (
                        <motion.span 
                            key={l} 
                            className={cn(
                                "text-sm font-bold text-slate-400 transition-all duration-300", 
                                isCollected && "text-yellow-500 font-extrabold"
                            )}
                            animate={isJustCollected ? { scale: [1, 1.5, 1], y: [0, -5, 0] } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            {l}
                        </motion.span>
                    );
                })}
            </div>
           <div className="w-full flex justify-between items-center text-lg font-bold px-2 mt-2 text-slate-700">
             <div className="flex items-center gap-1">
                {Array.from({length: 3}).map((_, i) => (
                    <Heart key={i} className={cn("w-6 h-6", i < hearts ? 'text-red-500 fill-current' : 'text-slate-300')}/>
                ))}
             </div>
             <span>Collected: {collectedLetters.size} / {allLetters.length}</span>
           </div>
          <div
            className="relative overflow-hidden w-full rounded-lg bg-gradient-to-b from-blue-300 to-blue-500"
            style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
          >
            <AnimatePresence>
                {gameState === 'start' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/70 z-20 flex flex-col items-center justify-center gap-4 text-center p-8">
                        <h3 className="text-5xl font-bold text-white font-headline">Alphabet Runner</h3>
                        <p className="text-white text-xl">Use Left/Right arrow keys to run and Up arrow to jump.</p>
                        <p className="text-lg text-yellow-300">Collect all 26 letters!</p>
                        <Button onClick={initializeGame} size="lg" className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">Start Game</Button>
                    </motion.div>
                )}
                 {(gameState === 'over' || gameState === 'won') && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/70 z-20 flex flex-col items-center justify-center gap-4">
                        <Star className={cn("w-24 h-24", gameState === 'won' ? "text-yellow-400" : "text-gray-500")} fill={gameState === 'won' ? 'currentColor' : 'none'}/>
                        <h3 className="text-5xl font-bold text-white font-headline">{gameState === 'won' ? "You Won!" : "Game Over!"}</h3>
                        <p className="text-3xl text-white">You collected {collectedLetters.size} letters!</p>
                        <Button onClick={initializeGame} className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">Play Again</Button>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* World Container */}
            <motion.div 
                className="absolute top-0 left-0"
                animate={{ x: -cameraX }}
                transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
                style={{ width: WORLD_WIDTH, height: SCREEN_HEIGHT }}
            >
                {/* Platforms */}
                {levelData.platforms.map(p => (
                    <div key={p.id} className="absolute bg-green-600 border-b-8 border-green-800 rounded" style={{ left: p.x, top: p.y, width: p.width, height: p.height }} />
                ))}

                {/* Letters */}
                {levelData.letters.map(obj => !collectedLetters.has(obj.char) && (
                    <motion.div
                      key={obj.id}
                      className="absolute text-4xl font-bold flex items-center justify-center text-yellow-300 drop-shadow-md"
                      style={{ x: obj.x, y: obj.y, width: 40, height: 40 }}
                      initial={{ scale: 1 }}
                      animate={{ y: [obj.y, obj.y - 10, obj.y], transition: { repeat: Infinity, duration: 1.5 } }}
                    >
                        {obj.char}
                        <Sparkles className="absolute w-12 h-12 text-yellow-200/50 -z-10" />
                    </motion.div>
                ))}

                {/* Bombs */}
                {levelData.bombs.map(bomb => activeBombs.has(bomb.id) && (
                    <div key={bomb.id} className="absolute" style={{ left: bomb.x, top: bomb.y }}>
                        <Bomb className="w-8 h-8 text-slate-800" />
                    </div>
                ))}


                {/* Player */}
                {gameState === 'playing' && (
                  <motion.div
                    className="absolute"
                    style={{
                      width: PLAYER_WIDTH,
                      height: PLAYER_HEIGHT,
                      left: player.x,
                      top: player.y,
                    }}
                  >
                      <School className="w-full h-full text-yellow-400 drop-shadow-lg" fill="currentColor" />
                  </motion.div>
                )}
            </motion.div>
          </div>
          {/* Controls */}
          {gameState === 'playing' && (
            <div className="w-full flex justify-between items-center mt-4 px-16">
                 <Button onMouseDown={() => keysRef.current['ArrowLeft'] = true} onMouseUp={() => keysRef.current['ArrowLeft'] = false} onMouseLeave={() => keysRef.current['ArrowLeft'] = false} size="lg" className="w-32 h-16 text-2xl font-bold">{'⬅️'}</Button>
                 <Button onClick={jump} size="lg" className="w-32 h-16 text-2xl font-bold">{'⬆️'}</Button>
                 <Button onMouseDown={() => keysRef.current['ArrowRight'] = true} onMouseUp={() => keysRef.current['ArrowRight'] = false} onMouseLeave={() => keysRef.current['ArrowRight'] = false} size="lg" className="w-32 h-16 text-2xl font-bold">{'➡️'}</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
    

    