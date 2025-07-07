"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-transform"
    >
      {theme === "dark" ? (
        <span role="img" aria-label="Sun">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="Moon">
          🌙
        </span>
      )}
    </button>
  );
}
