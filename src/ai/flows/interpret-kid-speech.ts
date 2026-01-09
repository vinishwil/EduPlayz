'use server';

/**
 * @fileOverview Interprets kid's speech using AI to accurately match their input in games.
 *
 * - interpretKidSpeech - A function that interprets kid's speech.
 * - InterpretKidSpeechInput - The input type for the interpretKidSpeech function.
 * - InterpretKidSpeechOutput - The return type for the interpretKidSpeech function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InterpretKidSpeechInputSchema = z.object({
  speech: z.string().describe('The speech input from the child.'),
  expectedWord: z.string().describe('The expected correct word or phrase.'),
});
export type InterpretKidSpeechInput = z.infer<typeof InterpretKidSpeechInputSchema>;

const InterpretKidSpeechOutputSchema = z.object({
  isMatch: z.boolean().describe('Whether the interpreted speech matches the expected word.'),
  confidence: z.number().describe('The confidence level of the match (0 to 1).'),
  correctedWord: z.string().describe('The AI-corrected word or phrase, if any.'),
});
export type InterpretKidSpeechOutput = z.infer<typeof InterpretKidSpeechOutputSchema>;

export async function interpretKidSpeech(input: InterpretKidSpeechInput): Promise<InterpretKidSpeechOutput> {
  return interpretKidSpeechFlow(input);
}

const prompt = ai.definePrompt({
  name: 'interpretKidSpeechPrompt',
  input: {schema: InterpretKidSpeechInputSchema},
  output: {schema: InterpretKidSpeechOutputSchema},
  prompt: `You are an AI speech interpreter designed to understand children's speech.

Given the child's speech and the expected word, determine if the speech is a match.

Child's Speech: {{{speech}}}
Expected Word: {{{expectedWord}}}

Output the corrected word (if needed), a boolean indicating if it's a match, and a confidence score.

Consider common mispronunciations and phonetic similarities.

Ensure that the outputted JSON is valid and parsable.
`,
});

const interpretKidSpeechFlow = ai.defineFlow(
  {
    name: 'interpretKidSpeechFlow',
    inputSchema: InterpretKidSpeechInputSchema,
    outputSchema: InterpretKidSpeechOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
