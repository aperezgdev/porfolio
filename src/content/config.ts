import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
  })
})

export const collections = { 'posts': posts }