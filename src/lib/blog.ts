import posts from "@/content/posts.json";

export type PostCategory = "seo-geo" | "trading" | "genel";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: PostCategory;
};

export function getAllPosts(): PostMeta[] {
  return posts.map(({ slug, title, date, excerpt, category }) => ({
    slug,
    title,
    date,
    excerpt,
    category: category as PostCategory,
  }));
}

export function getPostBySlug(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;

  return {
    meta: {
      slug: post.slug,
      title: post.title,
      date: post.date,
      excerpt: post.excerpt,
      category: post.category as PostCategory,
    },
    html: post.html,
  };
}

export const CATEGORY_LABELS: Record<PostCategory, string> = {
  "seo-geo": "SEO/GEO",
  trading: "Trading",
  genel: "Genel",
};
