"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

const UpcommingWebinars = () => {
  return (
    <main className="bg-gray-900 py-12">
      <div className="text-center">
        <h2 className="font-bold text-teal-600">FEATURED WEBINARS</h2>
        <p className="text-2xl md:text-3xl mt-3 font-extrabold">
          Enhance Your Musical Journey
        </p>
      </div>

      <article className="max-w-5xl mx-auto px-8">
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: "/",
          }))}
        />
      </article>

      <div className="mt-8 text-center">
        <Link href={"/"}>
          <Button
            borderRadius="1rem"
            className="bg-white dark:bg-gray-800 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm font-medium "
          >
            View All Webinars
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default UpcommingWebinars;
