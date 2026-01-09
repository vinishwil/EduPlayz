
'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stars, Loader2, StopCircle, Volume2, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"

import { numbers } from '@/lib/numbers';
import { useSpeech } from '@/hooks/use-speech';
import { useProgress } from '@/hooks/use-progress';
import { generateStory } from '@/ai/flows/story-time';
import type { StoryTimeOutput } from '@/ai/flows/story-time';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import type { NumberInfo } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

export default function NumbersPage() {
  const { speak, isSpeaking, stopSpeaking } = useSpeech();
  const { trackLessonCompletion } = useProgress();
  const [selectedNumber, setSelectedNumber] = useState<NumberInfo | null>(null);

  const [story, setStory] = useState<StoryTimeOutput | null>(null);
  const [isGeneratingStory, setIsGeneratingStory] = useState(false);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  
  useState(() => {
    trackLessonCompletion('numbers');
  });

  const handleNumberClick = (number: NumberInfo) => {
    setSelectedNumber(number);
    speak(number.word);
  };
  
  const handleGenerateStory = useCallback(async () => {
    if (!selectedNumber) return;

    setIsGeneratingStory(true);
    setStoryModalOpen(true);
    setStory(null);
    try {
        const result = await generateStory({
            topic: `the number ${selectedNumber.number}`,
            character: `a group of ${selectedNumber.word} friends`
        });
        setStory(result);
    } catch (e) {
        console.error("Failed to generate story", e);
        setStory({ title: "Error", story: "Could not create a story right now. Please try again later!", audio: '' });
    } finally {
        setIsGeneratingStory(false);
    }
  }, [selectedNumber]);
  
  const handleStoryModalChange = (open: boolean) => {
    if (!open) {
      stopSpeaking();
      setStory(null);
    }
    setStoryModalOpen(open);
  }

  const handleStoryAudio = () => {
      if (isSpeaking) {
          stopSpeaking();
      } else if (story?.audio) {
          speak(story.story, story.audio);
      }
  }
  
  const closeDetailView = () => {
    stopSpeaking();
    setSelectedNumber(null);
  }

  return (
    <div className="flex flex-col items-center justify-start flex-grow p-4 md:p-10 overflow-y-auto">
      <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8 text-primary">Number Land</h1>
      
      <AnimatePresence>
        {selectedNumber && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-full max-w-4xl p-4 md:p-8 bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-primary/20 z-10"
          >
            <div className="relative">
              <Button variant="ghost" size="icon" onClick={closeDetailView} className="absolute -top-2 -right-2 h-8 w-8 rounded-full">
                <X />
              </Button>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex-shrink-0 text-center">
                  <p className="text-9xl md:text-[10rem] font-bold leading-none text-primary">{selectedNumber.number}</p>
                </div>

                <div className="flex-grow flex flex-col items-center gap-4">
                  {(() => {
                      const placeholder = PlaceHolderImages.find(p => p.id === `counting-${selectedNumber.number}`);
                      return placeholder ? (
                        <Image
                          src={placeholder.imageUrl}
                          alt={placeholder.description}
                          data-ai-hint={placeholder.imageHint}
                          width={250}
                          height={200}
                          className="rounded-xl object-contain shadow-lg"
                        />
                      ) : null;
                  })()}
                  <p className="text-3xl font-bold text-accent-foreground">{selectedNumber.word}</p>
                  
                  <div className="flex gap-4 mt-4">
                     <Button onClick={() => speak(selectedNumber.word)} disabled={isSpeaking}>
                        <Volume2 className="mr-2 h-5 w-5" />
                        Hear Word
                    </Button>
                    <Button onClick={handleGenerateStory} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold" disabled={isGeneratingStory}>
                        <Stars className="mr-2 h-5 w-5" />
                        AI Story Time
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={cn("w-full max-w-6xl grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-3 md:gap-4 mt-8 transition-opacity duration-500", selectedNumber ? 'opacity-20 pointer-events-none' : 'opacity-100')}>
        {numbers.slice(0, 20).map((item) => (
          <Card 
            key={item.number}
            onClick={() => handleNumberClick(item)}
            className="aspect-square flex items-center justify-center cursor-pointer hover:bg-primary/10 hover:scale-105 transition-transform duration-200"
          >
            <CardContent className="p-1 flex items-center justify-center">
              <span className="text-3xl md:text-5xl font-bold text-primary">{item.number}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={storyModalOpen} onOpenChange={handleStoryModalChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            {isGeneratingStory ? (
                 <DialogTitle className="flex items-center justify-center text-2xl font-bold">
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" /> Thinking of a story...
                </DialogTitle>
            ) : (
                <DialogTitle className="text-2xl font-bold text-center">{story?.title}</DialogTitle>
            )}
          </DialogHeader>
          {story && !isGeneratingStory && (
            <div className="mt-4 text-muted-foreground space-y-4 max-h-[60vh] overflow-y-auto">
                <p>{story.story}</p>
                 <div className="flex justify-center gap-4 mt-4">
                    <Button onClick={handleStoryAudio} disabled={!story.audio}>
                        {isSpeaking ? <StopCircle className="mr-2 h-4 w-4" /> : <Volume2 className="mr-2 h-4 w-4" />}
                        {isSpeaking ? 'Stop' : 'Read to Me'}
                    </Button>
                    <DialogClose asChild>
                        <Button variant="outline">Close</Button>
                    </DialogClose>
                </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

    