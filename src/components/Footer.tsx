export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 py-6 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 text-sm text-black/70 dark:text-white/70">
        <span>© {new Date().getFullYear()} Emir Moralıoğlu</span>
        <a
          href="mailto:emirmoralioglu@gmail.com"
          className="underline underline-offset-4 hover:text-black dark:hover:text-white"
        >
          emirmoralioglu@gmail.com
        </a>
      </div>
    </footer>
  );
}
