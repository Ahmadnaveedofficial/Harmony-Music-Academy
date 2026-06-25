"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
  {
    title: "Guitar Fundamentals",
    description:
      "Learn the basics of guitar playing, including chords, strumming patterns, and essential techniques. Perfect for beginners starting their musical journey.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-[0_0_30px_rgba(20,184,166,0.15)]">
        <Image
          src="/courses/guitar.jpg"
          alt="Guitar Fundamentals"
          fill
          sizes="(max-width: 1024px) 100vw, 512px"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    ),
  },
  {
    title: "Advanced Vocal Techniques",
    description:
      "Enhance your singing abilities with professional breathing exercises, vocal control techniques, and performance skills designed for serious vocalists.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-[0_0_30px_rgba(20,184,166,0.15)]">
        <Image
          src="/courses/vocalist.jpg"
          alt="Advanced Vocal Techniques"
          fill
          sizes="(max-width: 1024px) 100vw, 512px"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    ),
  },
  {
    title: "Music Production Fundamentals",
    description:
      "Discover the world of music production, sound engineering, mixing, and mastering. Learn how professional tracks are created from start to finish.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-[0_0_30px_rgba(20,184,166,0.15)]">
        <Image
          src="/courses/music-prod.jpg"
          alt="Music Production Fundamentals"
          fill
          sizes="(max-width: 1024px) 100vw, 512px"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    ),
  },
  {
    title: "Songwriting Essentials",
    description:
      "Develop your creativity and learn how to write memorable lyrics, melodies, and song structures that connect with audiences.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-[0_0_30px_rgba(20,184,166,0.15)]">
        <Image
          src="/courses/song-writing.jpg"
          alt="Songwriting Essentials"
          fill
          sizes="(max-width: 1024px) 100vw, 512px"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    ),
  },
];
const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 bg-black">
      <div className="text-center mb-16 px-4">
        <h2 className="text-sm md:text-base text-teal-500 font-semibold tracking-widest uppercase">
          Why Choose Us
        </h2>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white">
          Learn Music From Industry Experts
        </h1>

        <p className="mt-6 text-neutral-400 max-w-3xl mx-auto text-lg">
          From guitar and vocals to music production and songwriting,
          our courses are designed to help you grow your skills and
          achieve your musical goals.
        </p>
      </div>

      <StickyScroll content={content} />
    </section>
  );
};

export default WhyChooseUs;

