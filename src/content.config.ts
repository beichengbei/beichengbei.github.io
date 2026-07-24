import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  // 正文放在仓库根的「作品/」目录，不藏在 src 里
  loader: glob({
    pattern: '**/*.md',
    base: './作品',
    generateId: ({ data }) => data.slug as string,
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    title_en: z.string().optional(),
    // 发表时被编辑改过的标题
    published_as: z.string().optional(),
    genre: z.enum(['短篇小说', '叙事+信息型文本', '信息型文本']),
    words: z.number().int().positive(),
    created: z.coerce.date().optional(),
    finished: z.coerce.date().optional(),
    published: z.coerce.date(),
    venue: z.enum(['初火创作', '计算语言实践基地', '开智学堂']),
    origin: z.string().optional(),
    reposts: z
      .array(
        z.object({
          date: z.coerce.date(),
          venue: z.string(),
          as: z.string().optional(),
        }),
      )
      .default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { works };
