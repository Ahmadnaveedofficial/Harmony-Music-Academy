"use client";

import Link from "next/link";
import webinarData from "@/data/webinars.json";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

const UpcomingWebinars = () => {
  const featuredWebinars = webinarData.webinars.filter(
    (webinar) => webinar.isFeatured,
  );

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-teal-500 font-semibold tracking-[0.3em] uppercase">
            Live Webinars
          </h2>

          <h3 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Learn Directly From Industry Experts
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-neutral-400 text-lg">
            Join live sessions with professional musicians and industry experts.
          </p>
        </div>

        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.shortDescription,
            instructor: webinar.instructor.name,
            date: webinar.date,
            level: webinar.category,
            link: `/webinars/${webinar.slug}`,
          }))}
        />

        <div className="mt-16 text-center">
          <Link href="/webinars">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white cursor-pointer"
            >
              Explore All Webinars
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
