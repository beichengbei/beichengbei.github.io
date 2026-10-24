import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'works'>;

/**
 * 列表的排序与显示日期：作品集按「什么时候写的」排，不按什么时候发的。
 * 取写完那天，没记录就用起笔日，与详情页页脚「创作」一致。
 * 详情页顶部那行小字不走这里——它署的是发表信息，另算。
 */
export function workDate(w: Work): Date {
  return w.data.finished ?? w.data.created;
}

/** 按日期倒序；生产环境隐藏草稿，开发环境全部显示 */
export async function getWorks(): Promise<Work[]> {
  const all = await getCollection('works', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => workDate(b).valueOf() - workDate(a).valueOf());
}

/**
 * frontmatter 里的 `2021-05-07` 被解析为 UTC 零点，
 * 用本地时区取值会退回前一天，所以必须走 UTC getter。
 */
export function formatDate(d: Date): string {
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}
