import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Merhaba, ben Emir 👋</h1>
      <p className="text-black/70 dark:text-white/70">
        SEO/GEO danışmanlığı ve trading konularında kendimi geliştiriyorum, öğrendiklerimi{" "}
        <Link href="/blog" className="underline underline-offset-4">
          Günlük
        </Link>{" "}
        sayfasında, ortaya çıkan işleri de{" "}
        <Link href="/projeler" className="underline underline-offset-4">
          Projeler
        </Link>{" "}
        sayfasında paylaşıyorum.
      </p>
    </div>
  );
}
