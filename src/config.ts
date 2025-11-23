import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const eventsCollection = defineCollection({
    loader: glob({pattern: '**/*.md', base: './src/content/events'}),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        description: z.string().optional(),
        program: z.array(
            z.object({
                time: z.string(),
                title: z.string(),
                description: z.string().optional(),
                speaker: z.string().optional(),
                type: z.string().optional(),
                language: z.string().optional(),
            })
        ),
        location: z.object({
            name: z.string(),
            address: z.string(),
            mapsUrl: z.string().url(),
        }),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }).optional(),
    })
});

export const collections = {
  events: eventsCollection,
};