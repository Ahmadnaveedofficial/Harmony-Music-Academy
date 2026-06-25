import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
            >
              Explore Courses
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="rounded-xl border border-neutral-800 bg-black/30 p-4 backdrop-blur-sm hover:border-teal-500 transition-all duration-300">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              50+
            </h3>
            <p className="text-neutral-400 mt-2">Courses</p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-black/30 p-4 backdrop-blur-sm hover:border-teal-500 transition-all duration-300">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              10K+
            </h3>
            <p className="text-neutral-400 mt-2">Students</p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-black/30 p-4 backdrop-blur-sm hover:border-teal-500 transition-all duration-300">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              100+
            </h3>
            <p className="text-neutral-400 mt-2">Instructors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;