
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

interface Instructor {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export const AnimatedTooltip = ({
  items,
}: {
  items: Instructor[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>(
    {}
  );

  const springConfig = {
    stiffness: 100,
    damping: 15,
  };

  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-25, 25]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-20, 20]),
    springConfig
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const target = event.currentTarget;
    const offsetX = event.nativeEvent.offsetX;

    animationFrameRef.current = requestAnimationFrame(() => {
      if (!target) return;
      const halfWidth = target.offsetWidth / 2;
      x.set(offsetX - halfWidth);
    });
  };

  const markImageFailed = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      {items.map((item) => {
        const showFallback = !item.image || failedImages[item.id];
        const initial = item.name?.trim().charAt(0).toUpperCase() || "?";

        return (
          <div
            key={item.id}
            className="group relative -mr-4 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <AnimatePresence>
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    scale: 0.8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 15,
                  }}
                  style={{
                    translateX,
                    rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-20 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-xl border border-white/10 bg-black/90 px-4 py-3 shadow-2xl backdrop-blur-md"
                >
                  <div className="text-sm font-bold text-white">
                    {item.name}
                  </div>

                  <div className="text-xs text-neutral-400">
                    {item.designation}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {showFallback ? (
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-cyan-500/10 text-xl font-bold text-cyan-400 transition-all duration-300 group-hover:z-30 group-hover:scale-110 group-hover:border-teal-400">
                {initial}
              </div>
            ) : (
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="h-16 w-16 rounded-full border-2 border-white object-cover object-center transition-all duration-300 group-hover:z-30 group-hover:scale-110 group-hover:border-teal-400"
                onError={() => markImageFailed(item.id)}
              />
            )}
          </div>
        );
      })}
    </>
  );
};