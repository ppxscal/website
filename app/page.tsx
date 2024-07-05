"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-20 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >

      <div className="mb-[50px] text-2xl">
        Hi, my name is Pascal.
        I'm a senior at MIT, studying AI
      </div>

      <div className="mb-[50px]">
        <ul className="flex flex-row space-x-9">
          <li>
            Projects
          </li>
          <li>
            Thoughts
          </li>
          <li>
            Pictures
          </li>
        </ul>
      </div>
      
      <div className="relative z-10 flex place-items-center w-8/9 layout=responsive">
        <Image
          className="mountcocoran"
          src="/mount_corcoran.jpg"
          alt="Mount Corcoran"
          layout="responsive"
          width={100}
          height={37}
          priority
        />
      </div>
    </main>
  );
}