import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'works'>;

/** 按原创发表日倒序；生产环境隐藏草稿，开发环境全部显示 */
export async function getWorks(): Promise<Work[]> {
  const all = await getCollection('works', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}

/**
 * frontmatter 里的 `2021-05-07` 被解析为 UTC 零点，
 * 用本地时区取值会退回前一天，所以必须走 UTC getter。
 */
export function formatDate(d: Date): string {
  return `${d.getUTCFullYear()}.${String(d.getUTCMonth() + 1).padStart(2, '0')}.${String(d.getUTCDate()).padStart(2, '0')}`;
}
