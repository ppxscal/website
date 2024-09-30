"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import EntryCard from './components/EntryCard';

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
      className={`flex min-h-screen flex-col items-center justify-center p-8 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-3xl w-full text-center">
        <div className="mb-12 text-2xl font-bold">
          Hi, my name is Pascal
        </div>
        <div className="mb-12">
          <ul className="flex flex-row justify-center space-x-12 text-xl">
            {/* <li>
              <Link href="/pictures" className="hover:underline">Pictures</Link>
            </li> */}
            <li>
              <Link href="/projects" className="hover:underline">Projects</Link>
            </li>
            <li>
              <Link href="/thoughts" className="hover:underline">Thoughts</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="relative z-10 flex place-items-center w-full max-w-6xl">
        {/* <Image
          className="rounded-lg"
          src="/mount_corcoran.jpg"
          alt=""
          layout="responsive"
          width={4096} 
          height={370} 
          priority
        /> */}
      </div>
      <a href="ppxscal@mit.edu">My Email</a>
    </main>
  );
}