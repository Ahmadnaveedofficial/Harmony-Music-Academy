"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => index / cardLength
    );

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);

        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }

        return acc;
      },
      0
    );

    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#020617", "#000000", "#0f172a"];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const backgroundGradient =
    linearGradients[activeCard % linearGradients.length];

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{
        backgroundColor:
          backgroundColors[activeCard % backgroundColors.length],
      }}
      className={cn(
        "relative mx-auto flex h-[40rem] max-w-7xl gap-16",
        "overflow-y-auto rounded-3xl border border-neutral-800",
        "bg-black/40 p-8 md:p-12 backdrop-blur-sm"
      )}
    >
      {/* Left Content */}
      <div className="relative flex items-start px-2 md:px-4">
        <div className="max-w-3xl">
          {content.map((item, index) => (
            <div key={`${item.title}-${index}`} className="mb-32">
              <motion.h2
                initial={false}
                animate={{
                  opacity: activeCard === index ? 1 : 0.35,
                }}
                className={cn("text-3xl md:text-4xl font-bold text-white")}
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={false}
                animate={{
                  opacity: activeCard === index ? 1 : 0.35,
                }}
                className={cn(
                  "mt-6 max-w-xl text-lg leading-relaxed text-neutral-300"
                )}
              >
                {item.description}
              </motion.p>
            </div>
          ))}

          <div className="h-40" />
        </div>
      </div>

      {/* Right Sticky Preview */}
      <div
        style={{
          background: backgroundGradient,
        }}
        className={cn(
          "sticky top-10 hidden h-[28rem] w-[32rem] overflow-hidden",
          "rounded-3xl border border-neutral-800 bg-neutral-900",
          "shadow-[0_0_40px_rgba(20,184,166,0.15)] lg:block",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};