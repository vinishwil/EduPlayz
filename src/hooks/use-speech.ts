"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

export function useSpeech() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef<any>(null);
  const [isSupported, setIsSupported] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const isInitializedRef = useRef(false);
  const speakQueueRef = useRef<Array<{text: string, audioDataUri?: string, forceBrowserVoice?: boolean}>>([]);
  const isProcessingRef = useRef(false);

  const populateVoiceList = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        const newVoices = window.speechSynthesis.getVoices();
        console.log("📢 Voices loaded:", newVoices.length, newVoices.map(v => v.name));
        if (newVoices.length > 0) {
          setVoices(newVoices);
        }
      } catch (error) {
        console.error("Error loading speech synthesis voices:", error);
      }
    }
  }, []);

  useEffect(() => {
    // --- Speech Recognition Setup ---
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        setIsSupported(true);
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onresult = (event: any) => {
          const currentTranscript = event.results[0][0].transcript;
          setTranscript(currentTranscript);
          setIsListening(false);
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };
        
        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      } else {
        setIsSupported(false);
      }
    }

    // --- Speech Synthesis Setup ---
    if (typeof window !== 'undefined' && window.speechSynthesis) {
        populateVoiceList();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = populateVoiceList;
        }
    }

    // --- Audio Player and Synthesis Cleanup ---
    const cleanup = () => {
        try {
          if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.src = "";
          }
          if (typeof window !== 'undefined' && window.speechSynthesis) {
              window.speechSynthesis.cancel();
          }
        } catch (error) {
          console.error("Error during cleanup:", error);
        }
    };

    return cleanup;
  }, [populateVoiceList]);
  
  const stopSpeaking = useCallback(() => {
    try {
      if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          audioRef.current.src = "";
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
          if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
              window.speechSynthesis.cancel();
          }
      }
    } catch (error) {
      console.error("Error stopping speech:", error);
    } finally {
      setIsSpeaking(false);
      isProcessingRef.current = false;
      speakQueueRef.current = []; // Clear queue
    }
  }, []);


  const speak = useCallback((text: string, audioDataUri?: string, forceBrowserVoice = false) => {
    if (!text || text.trim() === '') {
      return;
    }
    
    console.log('🔊 speak() called:', text, 'isProcessing:', isProcessingRef.current);
    
    // Add to queue if currently speaking
    if (isProcessingRef.current) {
      console.log('⏸️ Speech in progress, queueing:', text);
      speakQueueRef.current.push({ text, audioDataUri, forceBrowserVoice });
      return;
    }
    
    console.log('▶️ Starting speech:', text);
    isProcessingRef.current = true;
    
    // Chrome: Initialize audio context on first user interaction
    if (typeof window !== 'undefined' && window.speechSynthesis && !isInitializedRef.current) {
      try {
        const unlockUtterance = new SpeechSynthesisUtterance('');
        unlockUtterance.volume = 0;
        window.speechSynthesis.speak(unlockUtterance);
        window.speechSynthesis.cancel();
        isInitializedRef.current = true;
      } catch (error) {
        console.warn("Could not initialize audio context:", error);
      }
    }
    
    // Stop any audio playback first
    try {
      if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          audioRef.current.src = "";
      }
    } catch (error) {
      console.error("Error stopping audio:", error);
    }

    const speakBrowser = () => {
        if (typeof window !== 'undefined' && window.speechSynthesis && text) {
            // Cancel any ongoing speech
            if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
                window.speechSynthesis.cancel();
            }
            
            // Wait and create new utterance
            setTimeout(() => {
                try {
                    const utterance = new SpeechSynthesisUtterance(text);
                    
                    // Select a clear female voice
                    let selectedVoice = voices.find(voice => 
                        (voice.name === 'Samantha' || voice.name === 'Karen') && voice.lang === 'en-US'
                    );
                    
                    // Fallback: Any female-sounding en-US local voice
                    if (!selectedVoice) {
                        selectedVoice = voices.find(voice => 
                            voice.lang === 'en-US' && voice.localService &&
                            (voice.name.includes('female') || voice.name === 'Victoria' || voice.name === 'Allison')
                        );
                    }
                    
                    // Fallback: Any en-US local voice
                    if (!selectedVoice) {
                        selectedVoice = voices.find(voice => voice.lang === 'en-US' && voice.localService);
                    }
                    
                    // Fallback: Google voice
                    if (!selectedVoice) {
                        selectedVoice = voices.find(voice => voice.name === 'Google US English');
                    }
                    
                    // Fallback: Any en-US voice
                    if (!selectedVoice) {
                        selectedVoice = voices.find(voice => voice.lang === 'en-US');
                    }

                    // If still no voices, try to load them first
                    if (!selectedVoice && voices.length === 0) {
                        console.warn('⚠️ No voices available, trying to load voices...');
                        const freshVoices = window.speechSynthesis.getVoices();
                        console.log('Fresh voices:', freshVoices.length);
                        if (freshVoices.length > 0) {
                            setVoices(freshVoices);
                            selectedVoice = freshVoices.find(v => v.lang === 'en-US') || freshVoices[0];
                        } else {
                            // Just speak with default voice - don't retry!
                            console.warn('⚠️ Using default system voice');
                        }
                    }
                    
                    console.log('🎤 Selected voice:', selectedVoice?.name || 'default system voice');
                    
                    utterance.voice = selectedVoice || null;
                    utterance.lang = 'en-US';
                    utterance.rate = 0.9;
                    utterance.pitch = 1.0;
                    utterance.volume = 1.0;

                    utterance.onstart = () => {
                        console.log('✅ Speech started:', text);
                        setIsSpeaking(true);
                    };
                    
                    utterance.onend = () => {
                        console.log('✅ Speech ended:', text);
                        setIsSpeaking(false);
                        isProcessingRef.current = false;
                        
                        // Process next item in queue
                        if (speakQueueRef.current.length > 0) {
                            console.log('📋 Processing queue, items:', speakQueueRef.current.length);
                            const next = speakQueueRef.current.shift();
                            if (next) {
                                setTimeout(() => speak(next.text, next.audioDataUri, next.forceBrowserVoice), 100);
                            }
                        }
                    };
                    
                    utterance.onerror = (e: SpeechSynthesisErrorEvent) => {
                        if (e.error === 'canceled' || e.error === 'interrupted') {
                            setIsSpeaking(false);
                            isProcessingRef.current = false;
                            return;
                        }
                        
                        console.error("Speech synthesis error:", e.error);
                        setIsSpeaking(false);
                        isProcessingRef.current = false;
                        
                        if (e.error === 'network' || e.error === 'synthesis-failed') {
                            setTimeout(() => {
                                try {
                                    if (window.speechSynthesis) {
                                        window.speechSynthesis.speak(utterance);
                                    }
                                } catch (retryError) {
                                    console.error("Retry failed:", retryError);
                                    isProcessingRef.current = false;
                                }
                            }, 500);
                        }
                    };
                    
                    utteranceRef.current = utterance;
                    
                    // Chrome: Resume before speaking
                    if (window.speechSynthesis.paused) {
                        window.speechSynthesis.resume();
                    }
                    
                    window.speechSynthesis.speak(utterance);
                    
                } catch (error) {
                    console.error("Speech synthesis error:", error);
                    setIsSpeaking(false);
                    isProcessingRef.current = false;
                }
            }, 150);
        } else {
            setIsSpeaking(false);
            isProcessingRef.current = false;
        }
    };

    // Execute
    try {
      if (forceBrowserVoice || (!audioDataUri && text)) {
          speakBrowser();
      } else if (audioDataUri) {
          if (!audioRef.current) {
              audioRef.current = new Audio();
          }
          const audio = audioRef.current;
          
          const onPlaying = () => setIsSpeaking(true);
          const onEnded = () => {
              setIsSpeaking(false);
              audio.removeEventListener('playing', onPlaying);
              audio.removeEventListener('ended', onEnded);
              audio.removeEventListener('pause', onEnded);
              audio.removeEventListener('error', onError);
          };
          
          const onError = () => {
              console.error("Audio playback error, falling back to browser TTS.");
              onEnded();
              speakBrowser();
          };

          audio.addEventListener('playing', onPlaying);
          audio.addEventListener('ended', onEnded);
          audio.addEventListener('pause', onEnded);
          audio.addEventListener('error', onError);
          
          try {
              audio.src = audioDataUri;
              audio.play().catch(error => {
                  console.error("Failed to play AI audio, falling back to browser TTS.", error);
                  onEnded();
                  speakBrowser();
              });
          } catch (error) {
              console.error("Error setting audio source, falling back to browser TTS.", error);
              onEnded();
              speakBrowser();
          }
      } else {
          setIsSpeaking(false);
      }
    } catch (error) {
      console.error("Error in speak function:", error);
      setIsSpeaking(false);
    }
  }, [voices]);

  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListening) {
      setTranscript('');
      recognitionRef.current.start();
      setIsListening(true);
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }, [isListening]);

  return { speak, startListening, stopListening, isListening, transcript, isSupported, setTranscript, isSpeaking, stopSpeaking };
}
