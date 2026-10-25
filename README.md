<p align="center"><img src="public/favicon.svg" width="96" alt="杕"></p>

<h1 align="center">贝贝成</h1>

<p align="center">
柔，上矛下木，形如一支木质钢笔；<br>
杕，左木右大，形容一棵树高大而繁茂的样子。<br>
柔杕，期许自己像树一样生长，<br>
柔软坚韧，温柔坚定，至柔至坚。<br>
个人作品集，详见 <a href="https://beichengbei.com">beichengbei.com</a>。
</p>

## 开发

```bash
npm run dev      # 本地预览，草稿可见
npm run build    # 构建 + 校验 frontmatter
```

作品在 `作品/` 下，一篇一个 `.md`，配图放 `作品/images/<slug>/`；frontmatter 字段见 `src/content.config.ts`。
`slug` 决定网址，发布后尽量不改；真要改，把旧地址加进 `astro.config.mjs` 的 `redirects`。

Astro 7 + Tailwind 4，静态输出，GitHub Actions 部署到 Pages。
