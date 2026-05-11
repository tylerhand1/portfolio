"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { type MouseEvent } from "react";

const HeroSection = () => {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    const targetElement = document.getElementById("projects");
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", "#projects");
    }
  };

  return (
    <section className="min-h-svh flex flex-col items-center justify-center gap-1 md:gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="scroll-m-20 text-center text-5xl md:text-7xl font-extrabold tracking-tight text-balance">
          Tyler Hand
        </h1>
        <h2 className="scroll-m-20 text-primary text-center text-2xl md:text-4xl font-semibold tracking-tight">
          Full-Stack Software Engineer
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <p className="sm:text-lg text-center text-balance leading-snug md:leading-relaxed text-muted-foreground max-w-2xl">
          Engineering{" "}
          <span className="text-primary font-medium">high-performance</span> web
          applications, complex state architectures, and local-first tools.
          Dedicated to building{" "}
          <span className="text-primary font-medium">scalable systems</span> and
          robust user interfaces across full-stack ecosystems.
        </p>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm font-bold font-mono text-primary justify-center max-w-4xl mx-auto">
          <span>React</span>
          <span className="text-foreground">•</span>
          <span>Next.js</span>
          <span className="text-foreground">•</span>
          <span>TypeScript</span>
          <span className="text-foreground">•</span>
          <span>Hono / Express</span>
          <span className="text-foreground">•</span>
          <span>.NET Core</span>
          <span className="text-foreground">•</span>
          <span>PostgreSQL</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button
          asChild
          className="font-semibold tracking-tight px-5 cursor-pointer"
        >
          <Link href="#projects" replace onClick={handleScroll}>
            Projects
          </Link>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://github.com/tylerhand1/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
