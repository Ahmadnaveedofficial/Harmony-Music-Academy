"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

interface MapPin {
  lat: number;
  lng: number;
  label?: string;
}

export function WorldMap({
  pin,
  lineColor = "#3b82f6",
}: {
  pin: MapPin;
  lineColor?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#3b3b3b",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const { x, y } = projectPoint(pin.lat, pin.lng);

  return (
    <div className="relative w-full aspect-[2/1] rounded-lg font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
        alt="world map"
        height={400}
        width={800}
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <g>
          <circle
            cx={x}
            cy={y}
            r="3"
            fill={lineColor}
          />
          <circle cx={x} cy={y} r="3" fill={lineColor} opacity="0.6">
            <animate
              attributeName="r"
              from="3"
              to="14"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.6"
              to="0"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>

      {pin.label && (
        <div
          className="absolute -translate-x-1/2 -translate-y-full"
          style={{
            left: `${(x / 800) * 100}%`,
            top: `${(y / 400) * 100}%`,
          }}
        >
          <div className="relative flex flex-col items-center">
            <span className="mb-2 whitespace-nowrap rounded-md bg-neutral-800 px-2 py-1 text-xs font-medium text-white shadow-md">
              {pin.label}
            </span>
            <motion.div
              className="h-10 w-px"
              style={{
                background: `linear-gradient(to bottom, ${lineColor}, transparent)`,
              }}
              initial={{ height: 0 }}
              animate={{ height: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}