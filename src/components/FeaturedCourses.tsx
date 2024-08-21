"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import courseData from "../data/data.json";
import { Button } from "./ui/moving-border";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <main className="bg-gray-900 py-12">
      <div className="text-center">
        <h2 className="font-bold text-teal-600">FEATURED COURSES</h2>
        <p className="text-3xl mt-3 font-extrabold">Learn With the Best</p>
      </div>
      <article className="mx-8">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient
                className="rounded-3xl h-full text-white bg-black font-bold dark:bg-zinc-800"
                animate={false}
              >
                {" "}
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </article>
      <div className="mt-3 text-center">
        <Link href={"/courses"}>
          <Button
            borderRadius="1rem"
            className="bg-white dark:bg-gray-800 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm font-medium "
          >
            View All Courses
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default FeaturedCourses;
