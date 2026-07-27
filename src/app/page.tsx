import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Merhaba, ben Emir 👋</h1>
      <p className="text-black/70 dark:text-white/70">
        Bu benim kişisel sitem. Burada{" "}
        <Link href="/projeler" className="underline underline-offset-4">
          projelerimi
        </Link>{" "}
        ve{" "}
        <Link href="/blog" className="underline underline-offset-4">
          blog yazılarımı
        </Link>{" "}
        bulabilirsin.
      </p>
    </div>
  );
}
