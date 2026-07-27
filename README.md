# emirmoralioglu.com

Next.js (App Router) ile yazılmış, Cloudflare Workers üzerinde yayınlanan kişisel site. SEO/GEO danışmanlığı ve trading üzerine öğrenme sürecimi belgelediğim bir günlük içeriyor.

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresinde açılır.

## Proje yapısı

- `src/app/` — sayfalar (Ana Sayfa, Hakkımda, Projeler, Günlük)
- `content/blog/*.mdx` — blog yazıları (frontmatter: `title`, `date`, `excerpt`, `category`)
- `scripts/generate-blog-posts.mjs` — blog yazılarını HTML'e derleyip `src/content/posts.json` üretir (build/dev öncesi otomatik çalışır)

## Yeni blog yazısı ekleme

`content/blog/` altına yeni bir `.mdx` dosyası ekle:

```mdx
---
title: "Başlık"
date: "YYYY-AA-GG"
excerpt: "Kısa özet"
category: "seo-geo" | "trading" | "genel"
---

İçerik buraya (Markdown).
```

## Deploy

Bu proje [OpenNext](https://opennext.js.org/cloudflare) ile Cloudflare Workers'a deploy ediliyor.

- **Otomatik**: `main` branch'ine push edildiğinde Cloudflare Workers Builds otomatik build alıp yayınlar.
- **Manuel**:

```bash
npm run deploy
```

## Kullanılan teknolojiler

Next.js · TypeScript · Tailwind CSS · Cloudflare Workers (`@opennextjs/cloudflare`) · Cloudflare Workers Builds (CI/CD)
