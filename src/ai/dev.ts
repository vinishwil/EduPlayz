'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/interpret-kid-speech.ts';
import '@/ai/flows/story-time.ts';
import '@/ai/flows/text-to-speech.ts';
import '@/ai/flows/illustrated-story.ts';
