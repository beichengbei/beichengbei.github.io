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
    genre: z.enum(['叙事型文本', '叙事+信息型文本', '信息型文本']),
    words: z.number().int().positive(),
    // 创作、原创发表两个日期每篇必填；不知道起笔日就填写完那天
    created: z.coerce.date(),
    finished: z.coerce.date().optional(),
    published: z.coerce.date(),
    venue: z.enum(['初火创作', '计算语言实践基地', '开智学堂', '开智学堂公众号']).optional(),
    // 单篇覆盖平台默认链接（默认见详情页 VENUE_URL），比如链到平台的专栏页而非首页
    venue_url: z.string().url().optional(),
    // 原创首发的原文链接，页脚「题为《…》」据此加链接
    published_url: z.string().url().optional(),
    origin: z.string().optional(),
    reposts: z
      .array(
        z.object({
          date: z.coerce.date(),
          venue: z.string(),
          as: z.string().optional(),
          // 转发的原文链接，页脚「题为《…》」据此加链接
          url: z.string().url().optional(),
        }),
      )
      .default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { works };
