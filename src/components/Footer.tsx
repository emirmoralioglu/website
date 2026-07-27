export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 py-6 dark:border-white/10">
      <div className="mx-auto max-w-3xl px-6 text-sm text-black/50 dark:text-white/50">
        © {new Date().getFullYear()} Emir Moralıoğlu
      </div>
    </footer>
  );
}
