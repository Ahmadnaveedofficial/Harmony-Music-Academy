"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    instructor: string;
    date: string;
    level: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          className="relative block h-full w-full group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full rounded-3xl bg-slate-800/60"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-xs rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                {item.level}
              </span>

              <span className="text-xs text-neutral-500">
                {item.date}
              </span>
            </div>

            <CardTitle>{item.title}</CardTitle>

            <p className="mt-3 text-sm text-neutral-500">
              🎤 {item.instructor}
            </p>

            <CardDescription>
              {item.description}
            </CardDescription>

            <div className="mt-6 flex items-center text-teal-400 font-medium text-sm">
              Register Now →
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        h-full
        w-full
        p-6
        overflow-hidden
        bg-neutral-950
        border
        border-neutral-800
        group-hover:border-teal-500/40
        group-hover:-translate-y-1
        transition-all
        duration-300
        relative
        z-20
        `,
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-xl font-bold text-white tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-sm leading-relaxed text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};