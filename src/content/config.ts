import { defineCollection, z } from 'astro:content'

export const collections = {
  about: defineCollection({
    schema: z.object({
      title: z.string(),
      subtitle: z.string(),
      profile_picture: z.string(),
      img_alt: z.string(),
      cv: z.string()
    })
  }),
  projects: defineCollection({
    schema: z.object({
      order: z.number(),
      name: z.string(),
      stack: z.array(z.string()),
      website: z.string(),
      repository: z.string(),
      img_alt: z.string(),
      img_mobile: z.string(),
      img_laptop: z.string(),
      img_desktop: z.string()
    })
  }),
  skills: defineCollection({
    schema: z.object({
      stacks: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          image: z.string()
        })
      )
    })
  })
}
