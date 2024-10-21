"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import ParticlesBackground from './components/ParticlesBackground';

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: any) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);


return (
  <main className={`relative flex min-h-screen flex-col items-center justify-center p-8 ${theme === "dark" ? "bg-black" : "bg-white"} text-white`}>
    <ParticlesBackground />
    <div className="max-w-3xl w-full text-center relative z-10">
      <div className="mb-12 text-2xl font-bold">
        Hi, my name is Pascal
      </div>
      <div className="mb-12">
        <ul className="flex flex-row justify-center space-x-12 text-xl">
          <li>
            <Link href="/papers" className="hover:underline">Papers</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">Projects</Link>
          </li>
          <li>
            <Link href="/thoughts" className="hover:underline">Thoughts</Link>
          </li>
        </ul>
      </div>
    </div>

    <a href="mailto:ppxscal@mit.edu">My Email</a>
  </main>
);
}
