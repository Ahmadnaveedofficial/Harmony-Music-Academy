"use client";

import Link from "next/link";
import Image from "next/image";
import courseData from "@/data/music_course.json";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";
import { Users, Star, Clock } from "lucide-react";

const FeatureSection = () => {
  const featuredCourses = courseData.courses.filter(
    (course) => course.isFeatured,
  );

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-teal-500 font-semibold uppercase tracking-widest">
            Featured Courses
          </h2>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white">
            Learn Music From Industry Experts
          </h1>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Explore our premium music courses designed by experienced
            instructors. Build real-world skills and become a confident
            musician.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <BackgroundGradient
              key={course.id}
              className="rounded-3xl bg-zinc-900 overflow-hidden h-full"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                <div className="absolute top-4 right-4 bg-teal-500 text-black font-semibold px-3 py-1 rounded-full text-sm">
                  Rs{course.discountPrice}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-400 text-sm mb-7">
                  {course.shortDescription}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4  mb-5 text-center">
                  <div>
                    <Star className="mx-auto h-4 w-4 text-yellow-400" />
                    <p className="text-white text-sm mt-1">{course.rating}</p>
                  </div>

                  <div>
                    <Users className="mx-auto h-4 w-4 text-blue-400" />
                    <p className="text-white text-sm mt-1">{course.students}</p>
                  </div>

                  <div>
                    <Clock className="mx-auto h-4 w-4 text-green-400" />
                    <p className="text-white text-sm mt-1">{course.duration}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold text-white">
                    Rs{course.discountPrice}
                  </span>

                  <span className="text-gray-500 line-through">
                    Rs{course.price}
                  </span>
                </div>

                {/* Button */}
                <Link href={`/courses/${course.slug}`}>
                  <button className="w-full rounded-xl bg-teal-500 py-3 font-semibold text-black transition hover:bg-teal-400 cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-16 text-center">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
