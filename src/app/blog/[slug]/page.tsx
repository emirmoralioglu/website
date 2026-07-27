import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.meta.title} | Emir Moralıoğlu` };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>{post.meta.title}</h1>
      <p className="text-sm text-black/50 dark:text-white/50">{post.meta.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
