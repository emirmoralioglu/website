"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark ?? false}
      aria-label="Aydınlık/koyu temayı değiştir"
      className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full bg-black/10 transition-colors duration-300 dark:bg-white/20"
    >
      <span
        className={`inline-flex h-5 w-5 translate-x-1 transform items-center justify-center rounded-full bg-white text-[11px] shadow transition-transform duration-300 ease-in-out dark:translate-x-6 dark:bg-black`}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
