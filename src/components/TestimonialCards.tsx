"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";
import React from "react";
const musicSchoolTestimonials = [
  {
    quote:
      "The Guitar Fundamentals course gave me the confidence to perform in front of an audience for the first time. The lessons were practical, engaging, and easy to follow.",
    name: "Ahmad Raza",
    title: "Guitar Performance Student",
    rating: 4,
  },
  {
    quote:
      "I joined as a complete beginner and was amazed by how quickly I progressed. The instructors are supportive, knowledgeable, and genuinely invested in their students' success.",
    name: "Ayesha Khan",
    title: "Classical Piano Student",
    rating: 5,
  },
  {
    quote:
      "The vocal coaching sessions completely transformed my singing technique. I learned breath control, stage presence, and vocal confidence that I now use in every performance.",
    name: "Muhammad Hamza",
    title: "Professional Vocal Training Student",
    rating: 3,
  },
  {
    quote:
      "What sets this academy apart is the personalized guidance. My violin instructor helped me overcome technical challenges and improve my performance skills significantly.",
    name: "Fatima Noor",
    title: "Violin Performance Student",
    rating: 5,
  },
  {
    quote:
      "The Music Production program was exactly what I needed to start producing professional-quality tracks. The hands-on projects and expert mentorship were invaluable.",
    name: "Ali Hassan",
    title: "Music Production Student",
    rating: 4,
  },
  {
    quote:
      "The songwriting course helped me turn ideas into complete songs. I gained a deeper understanding of melody, harmony, and lyrical storytelling.",
    name: "Zain Ali",
    title: "Songwriting Student",
    rating: 5,
  },
  {
    quote:
      "The learning environment is inspiring and professional. Every lesson pushed me to improve while keeping the process enjoyable and motivating.",
    name: "Sara Ahmed",
    title: "Contemporary Music Student",
    rating: 3
  },
];
function MusicSchoolTestimonials() {
  return (
    <div className="relative flex h-[50rem] w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial Fade */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Content */}
      <div className="relative z-20 flex w-full flex-col items-center">
        <h2 className="mb-4 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
          What Our Students Say
        </h2>

        <p className="mb-10 max-w-2xl text-center text-neutral-400">
          Discover how our students transformed their musical journey through
          expert instruction, hands-on learning, and a supportive community.
        </p>

        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
