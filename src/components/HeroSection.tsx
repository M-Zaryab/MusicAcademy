"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

const HeroSection = () => {
  return (
    <main className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="mt-20 h-auto p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 mx-auto max-w-lg font-normal text-sm md:text-base text-neutral-300">
          Dive into the comprehensive music courses and transform your musical
          journey today. Weather you are a beginner or loking to refine your
          skills join us to unlock your true potential
        </p>
        <div className="mt-10">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm font-medium "
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
