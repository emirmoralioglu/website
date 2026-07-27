import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeler | Emir Moralıoğlu",
};

type Project = {
  name: string;
  description: string;
  href?: string;
  status: "yakında" | "devam ediyor" | "tamamlandı";
};

const projects: Project[] = [
  {
    name: "Bu site",
    description:
      "Next.js + Cloudflare Workers ile kurulan, SEO/GEO ve trading öğrenme sürecimi belgelediğim kişisel site.",
    status: "tamamlandı",
  },
  {
    name: "Mini-SEO Denetim Şablonu",
    description:
      "İşletmeler için Google Business Profile, PageSpeed, SSL, robots.txt ve schema kontrollerini içeren puanlamalı denetim şablonu.",
    status: "yakında",
  },
  {
    name: "Python Backtest Scripti",
    description:
      "yfinance/ccxt ile geçmiş veri çekip seçtiğim trading stratejisini test eden, kazanma oranı/Sharpe/max drawdown hesaplayan script.",
    status: "yakında",
  },
  {
    name: "Makro Korelasyon Analizi",
    description:
      "DXY-altın gibi makro ilişkileri pandas ile hesaplayıp seaborn heatmap'leriyle görselleştiren analiz.",
    status: "yakında",
  },
];

const statusStyles: Record<Project["status"], string> = {
  "tamamlandı": "bg-green-500/10 text-green-700 dark:text-green-400",
  "devam ediyor": "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  "yakında": "bg-black/5 text-black/60 dark:bg-white/10 dark:text-white/60",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Projeler</h1>
        <p className="text-black/70 dark:text-white/70">
          SEO/GEO ve trading öğrenme planım ilerledikçe burada somut
          çıktılar birikecek.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl border border-black/10 p-5 transition-colors hover:border-black/20 dark:border-white/10 dark:hover:border-white/20"
          >
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
            >
              {project.status}
            </span>
            <h2 className="mt-2 text-lg font-semibold">
              {project.href ? (
                <a href={project.href} className="underline underline-offset-4">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h2>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
