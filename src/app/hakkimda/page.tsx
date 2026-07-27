import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda | Emir Moralıoğlu",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Hakkımda</h1>
      <p className="text-black/70 dark:text-white/70">
        Buraya kısa bir biyografi, ilgi alanların ve neler yaptığın hakkında
        bilgi ekleyebilirsin.
      </p>
    </div>
  );
}
