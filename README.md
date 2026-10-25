# 贝贝成

存放已发表的中文作品。→ https://beichengbei.com

## 作品

| 创作日期 | 作品 | 体裁 | 字数 | 首发平台 |
|---|---|---|---|---|
| 2026-09-29 | [我的 AI 自主系统：荷钱犹小，徐徐生长](https://beichengbei.com/works/heqian-xuxu/) | 叙事+信息型文本 | 3,514 | 计算语言实践基地 |
| 2025-11-23 | [神的指引](https://beichengbei.com/works/shen-de-zhiyin/) | 叙事+信息型文本 | 1,346 | 计算语言实践基地 |
| 2025-09-07 | [语言理解，比语言产出更容易？](https://beichengbei.com/works/yuyan-lijie-yu-chanchu/) | 叙事+信息型文本 | 2,483 | 计算语言实践基地 |
| 2025-03-08 | [幸而为徒，十分期待](https://beichengbei.com/works/xinger-weitu/) | 叙事+信息型文本 | 1,941 | 开智学堂公众号 |
| 2024-07-29 | [合一：在 AI 时代，淡忘自我，回到情境](https://beichengbei.com/works/heyi/) | 信息型文本 | 3,393 | 计算语言实践基地 |
| 2023-07-01 | [敬，中年学者](https://beichengbei.com/works/jing-zhongnian-xuezhe/) | 叙事+信息型文本 | 2,898 | 计算语言实践基地 |
| 2022-10-29 | [十八平米的山](https://beichengbei.com/works/shiba-pingmi-de-shan/) | 叙事型文本 | 3,921 | 计算语言实践基地 |
| 2021-12-31 | [我与心灵有个约定：你陪我追寻爱，我用一生陪你创作](https://beichengbei.com/works/yu-xinling-yueding/) | 叙事+信息型文本 | 2,191 | 初火创作 |
| 2021-05-21 | [魂魄典当行](https://beichengbei.com/works/hunpo-diandanghang/) | 叙事型文本 | 2,818 | 初火创作 |

共 9 篇，24,505 字。

## 加一篇新作品

1. 在 `作品/` 下新建 `年份-标题.md`
2. 照着已有文件填 frontmatter（字段定义见 `src/content.config.ts` 的 schema）
3. 配图放 `作品/images/<slug>/`，正文以 `./images/<slug>/x.jpg` 引用（`./` 开头才会压成 WebP）
4. 写正文，`draft: false`
5. `npm run build` 通过后 `git push`

`slug` 决定网址，发布后尽量不改；真要改，把旧地址加进 `astro.config.mjs` 的 `redirects`，旧链接会自动跳转。

## 开发

```bash
npm run dev      # localhost:4321，草稿可见
npm run build    # 构建 + 校验 frontmatter
```

Astro 7 + Tailwind 4，静态输出，GitHub Actions 部署到 Pages。
