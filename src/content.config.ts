import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

export const POST_TYPES = ['Nota', 'Proyecto', 'Evento', 'Plusvalía urbana'] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      type: z.enum(POST_TYPES),
      summary: z.string(),
      image: image(),
      imageAlt: z.string(),
      sample: z.boolean().default(true), // marca "[Contenido de ejemplo]"
    }),
});

export const collections = { blog };
