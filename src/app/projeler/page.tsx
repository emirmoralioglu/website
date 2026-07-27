import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeler | Emir Moralıoğlu",
};

type Project = {
  name: string;
  description: string;
  href?: string;
};

const projects: Project[] = [
  {
    name: "Örnek Proje",
    description: "Buraya gerçek projelerini eklemek için bu listeyi düzenle.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Projeler</h1>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.name} className="border-b border-black/10 pb-6 dark:border-white/10">
            <h2 className="text-xl font-semibold">
              {project.href ? (
                <a href={project.href} className="underline underline-offset-4">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h2>
            <p className="mt-2 text-black/70 dark:text-white/70">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
