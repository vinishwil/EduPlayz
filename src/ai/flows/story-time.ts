'use server';

/**
 * @fileOverview Creates a short story for a child and converts it to speech.
 *
 * - generateStory - A function that generates a story with audio.
 * - StoryTimeInput - The input type for the generateStory function.
 * - StoryTimeOutput - The return type for the generateStory function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { textToSpeech } from './text-to-speech';

const StoryTimeInputSchema = z.object({
  topic: z.string().describe('The main subject of the story (e.g., "the letter A", "the number 5").'),
  character: z.string().describe('A character to include in the story (e.g., "a friendly fox").'),
});
export type StoryTimeInput = z.infer<typeof StoryTimeInputSchema>;

const StoryTimeOutputSchema = z.object({
  title: z.string().describe('The title of the generated story.'),
  story: z.string().describe('The full text of the generated story, which should be 2-3 paragraphs long.'),
  audio: z.string().describe('The base64 encoded WAV audio data URI of the story.'),
});
export type StoryTimeOutput = z.infer<typeof StoryTimeOutputSchema>;

export async function generateStory(input: StoryTimeInput): Promise<StoryTimeOutput> {
  return storyTimeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'storyTimePrompt',
  input: { schema: z.object({
    topic: z.string(),
    character: z.string(),
  }) },
  output: { schema: z.object({
    title: z.string(),
    story: z.string(),
  }) },
  prompt: `You are a master storyteller for young children (ages 3-6).

Create a very short, simple, and imaginative story about {{{topic}}}. The story must feature a character: {{{character}}}.

The story should be positive, engaging, and easy for a young child to understand. It should be about 2-3 short paragraphs.

Give the story a simple title.

Generate the response in a valid JSON format.
`,
});

const storyTimeFlow = ai.defineFlow(
  {
    name: 'storyTimeFlow',
    inputSchema: StoryTimeInputSchema,
    outputSchema: StoryTimeOutputSchema,
  },
  async input => {
    const { output: storyOutput } = await prompt(input);
    if (!storyOutput) {
        throw new Error('Failed to generate story text.');
    }
    
    const fullStoryText = `${storyOutput.title}. ${storyOutput.story}`;
    const { audio } = await textToSpeech(fullStoryText);
    
    return {
        ...storyOutput,
        audio,
    };
  }
);
