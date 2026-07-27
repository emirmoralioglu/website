import posts from "@/content/posts.json";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export function getAllPosts(): PostMeta[] {
  return posts.map(({ slug, title, date, excerpt }) => ({
    slug,
    title,
    date,
    excerpt,
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
    },
    html: post.html,
  };
}
