
'use server';
/**
 * @fileOverview Creates an illustrated short story for a child.
 *
 * - generateIllustratedStory - A function that generates a story with illustrations.
 * - IllustratedStoryInput - The input type for the generateIllustratedStory function.
 * - IllustratedStoryOutput - The return type for the generateIllustratedStory function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const IllustratedStoryInputSchema = z.object({
  topic: z.string().describe('The general topic for the story (e.g., "a friendly animal on an adventure").'),
});
export type IllustratedStoryInput = z.infer<typeof IllustratedStoryInputSchema>;

const StoryPageSchema = z.object({
    paragraph: z.string().describe('A single paragraph of the story.'),
    image: z.string().describe("A data URI of a generated image illustrating the paragraph. Expected format: 'data:image/png;base64,<encoded_data>'."),
});

const IllustratedStoryOutputSchema = z.object({
  title: z.string().describe('The title of the generated story.'),
  pages: z.array(StoryPageSchema).describe('An array of pages, each with a paragraph and a corresponding image.'),
});
export type IllustratedStoryOutput = z.infer<typeof IllustratedStoryOutputSchema>;


const storyTextPrompt = ai.definePrompt({
    name: 'storyTextPrompt',
    input: { schema: IllustratedStoryInputSchema },
    output: { schema: z.object({
        title: z.string(),
        paragraphs: z.array(z.string()).length(3),
    })},
    prompt: `You are a master storyteller for young children (ages 3-6).

Create a very short, simple, and imaginative story about {{{topic}}}.

The story must have exactly 3 paragraphs.
The story should be positive, engaging, and easy for a young child to understand.
Give the story a simple, catchy title.

Generate the response in a valid JSON format.
`,
});

export const generateIllustratedStoryFlow = ai.defineFlow(
  {
    name: 'generateIllustratedStoryFlow',
    inputSchema: IllustratedStoryInputSchema,
    outputSchema: IllustratedStoryOutputSchema,
  },
  async (input) => {
    // 1. Generate the story text
    const { output: storyTextOutput } = await storyTextPrompt(input);
    if (!storyTextOutput) {
        throw new Error('Failed to generate story text.');
    }

    // 2. Generate an image for each paragraph
    const pagePromises = storyTextOutput.paragraphs.map(async (paragraph) => {
      const { media } = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: `A beautiful, whimsical, and cute children's storybook illustration for the following scene: ${paragraph}`,
        config: {
          aspectRatio: '4:3',
        }
      });
      
      return {
        paragraph,
        image: media.url,
      };
    });

    const pages = await Promise.all(pagePromises);

    return {
      title: storyTextOutput.title,
      pages,
    };
  }
);

export async function generateIllustratedStory(input: IllustratedStoryInput): Promise<IllustratedStoryOutput> {
    return generateIllustratedStoryFlow(input);
}
