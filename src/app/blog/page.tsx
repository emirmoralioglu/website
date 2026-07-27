import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Emir Moralıoğlu",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-black/10 pb-6 dark:border-white/10">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold underline-offset-4 hover:underline">
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
