import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    
    artist: z.string().optional(),
    surface: z.string().optional(),
    tipo: z.string().optional(),
    year: z.string(), 
		location: z.string().optional()
  }),
});

export const collections = { blog };