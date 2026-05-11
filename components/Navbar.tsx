"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0.5 * window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled
          ? "translate-y-0 opacity-100 bg-background/70 backdrop-blur-md border-primary/30 py-3"
          : "-translate-y-full opacity-0 border-transparent py-5"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6">
        <div className="flex flex-col">
          <span className="font-bold text-lg tracking-tight">Tyler Hand</span>
          <span className="hidden md:block text-xs text-primary font-mono leading-none">
            Full-Stack Engineer
          </span>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <Link
            href="#projects"
            className="hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="hover:text-primary transition-colors"
          >
            History
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
