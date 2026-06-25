"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import courseData from "@/data/music_course.json";

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-black px-6 pb-20 pt-40 md:px-12">
      <div className="mb-10 text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-cyan-400">
          {courseData.courses.length} courses available
        </span>

        <h1 className="mt-4 text-5xl font-bold text-white md:text-7xl">
          Explore our courses
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
          Discover world-class music education designed to help you master
          instruments, vocals, songwriting, and music production.
        </p>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-x-1 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        {courseData.courses.map((course) => {
          return (
            <CardContainer key={course.slug} containerClassName="py-0">
              <CardBody className="h-[580px] w-[380px] rounded-2xl border border-white/10 bg-black p-6 transition-all duration-300 hover:border-cyan-500/40">
                <CardItem
                  translateZ={50}
                  className="text-2xl font-bold text-white"
                >
                  {course.title}
                </CardItem>

                <CardItem
                  translateZ={40}
                  className="mt-2 text-sm text-cyan-400"
                >
                  {course.level} • {course.duration}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ={60}
                  className="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-400"
                >
                  {course.shortDescription}
                </CardItem>

                <CardItem translateZ={100} className="mt-6 w-full">
                  <CourseThumbnail src={course.image} title={course.title} />
                </CardItem>

                <CardItem
                  translateZ={30}
                  className="mt-5 flex items-end justify-between gap-4 border-t border-white/10 pt-4"
                >
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500 line-through">
                      Rs{course.price}
                    </p>

                    <p className="text-xl font-bold text-cyan-400">
                      Rs{course.discountPrice}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="font-medium text-yellow-400">
                      ⭐ {course.rating}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {course.students}+ Students
                    </p>
                  </div>
                </CardItem>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <Link href={`/courses/${course.slug}`} className="flex-1">
                    <button className="w-full cursor-pointer rounded-xl border border-cyan-500 px-4 py-2 text-cyan-400 transition hover:bg-cyan-500/10">
                      View details
                    </button>
                  </Link>

                  <button className="flex-1 cursor-pointer rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-400">
                    Enroll now
                  </button>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </div>
  );
};

function CourseThumbnail({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative h-60 w-full overflow-hidden rounded-xl bg-cyan-500/10">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const fallback = target.parentElement?.querySelector(
            "[data-fallback]",
          ) as HTMLElement;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div
        data-fallback
        className="absolute inset-0 hidden items-center justify-center text-3xl font-bold text-cyan-400"
      >
        {title.charAt(0).toUpperCase()}
      </div>
    </div>
  );
}

export default CoursesPage;
