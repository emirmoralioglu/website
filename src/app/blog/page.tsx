import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORY_LABELS, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Emir Moralıoğlu",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Günlük</h1>
        <p className="text-black/70 dark:text-white/70">
          SEO/GEO ve trading üzerine öğrendiklerimin günlük/haftalık kaydı.
        </p>
      </div>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-black/10 pb-6 dark:border-white/10">
            <span className="inline-block rounded-full bg-black/5 px-2.5 py-0.5 text-xs font-medium text-black/60 dark:bg-white/10 dark:text-white/60">
              {CATEGORY_LABELS[post.category]}
            </span>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="mt-2 text-xl font-semibold underline-offset-4 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="mt-1 text-sm text-black/50 dark:text-white/50">
              {post.date}
            </p>
            <p className="mt-2 text-black/70 dark:text-white/70">
              {post.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
