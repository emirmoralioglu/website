import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORY_LABELS, getAllPosts, getPostBySlug } from "@/lib/blog";

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
      <span className="inline-block rounded-full bg-black/5 px-2.5 py-0.5 text-xs font-medium text-black/60 no-underline dark:bg-white/10 dark:text-white/60">
        {CATEGORY_LABELS[post.meta.category]}
      </span>
      <h1>{post.meta.title}</h1>
      <p className="text-sm text-black/50 dark:text-white/50">{post.meta.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {post.meta.category === "trading" && (
        <p className="text-sm italic text-black/50 dark:text-white/50">
          Bu yazı yatırım tavsiyesi değildir, sadece kişisel öğrenme sürecimin bir kaydıdır.
        </p>
      )}
    </article>
  );
}
