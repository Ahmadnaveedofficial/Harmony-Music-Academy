"use client";

import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <section
      className={cn(
        "relative flex min-h-screen items-center justify-center overflow-hidden bg-black",
        className
      )}
      {...props}
    >
      {/* Aurora Layer */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,#14b8a6 10%,#3b82f6 15%,#06b6d4 20%,#8b5cf6 25%,#14b8a6 30%)",

            "--dark-gradient":
              "repeating-linear-gradient(100deg,#000 0%,#000 7%,transparent 10%,transparent 12%,#000 16%)",

            "--transparent": "transparent",
            "--black": "#000",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `
            absolute
            -inset-[10px]
            opacity-50
            blur-3xl
            will-change-transform
            pointer-events-none

            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,200%]
            [background-position:50%_50%]
            animate-aurora

            after:absolute
            after:inset-0
            after:content-['']
            after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,100%]
            after:mix-blend-difference
            `,
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
          )}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};