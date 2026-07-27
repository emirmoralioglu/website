import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/projeler", label: "Projeler" },
  { href: "/blog", label: "Günlük" },
];

export function Nav() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4">
        <Link href="/" className="whitespace-nowrap">
          <span className="block text-xl font-semibold">Emir Moralıoğlu</span>
          <span className="block text-sm text-black/40 dark:text-white/40">
            Trust the process
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-base">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="whitespace-nowrap text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
