import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import webinarData from "@/data/webinars.json";

function getImageSrc(imagePath?: string) {
  if (!imagePath) return null;
  const fullPath = path.join(process.cwd(), "public", imagePath);
  return fs.existsSync(fullPath) ? imagePath : null;
}

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-40 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-cyan-400">
            {webinarData.webinars.length} sessions scheduled
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Upcoming webinars
          </h1>

          <p className="mt-5 text-base leading-relaxed text-neutral-400">
            Learn from music industry experts in focused, live sessions built
            around the skills that matter most.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {webinarData.webinars.map((webinar) => {
            const imageSrc = getImageSrc(webinar.image);
            const seatsLeft = webinar.seatsAvailable - webinar.seatsBooked;

            return (
              <div
                key={webinar.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 transition-colors duration-300 hover:border-cyan-500/50"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={webinar.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-cyan-500/10 text-3xl font-bold text-cyan-400">
                      {webinar.title.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {webinar.isFree ? "Free" : `Rs${webinar.price}`}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold leading-snug">
                    {webinar.title}
                  </h2>

                  <p className="mt-3 line-clamp-2 text-sm text-neutral-400">
                    {webinar.shortDescription}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm">
                    <span className="font-medium text-cyan-400">
                      {webinar.date}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-400">{webinar.time}</span>
                  </div>

                  <div className="mt-1 text-sm text-neutral-500">
                    with {webinar.instructor.name}
                  </div>

                  <div className="mt-4 text-xs text-neutral-500">
                    {seatsLeft > 0
                      ? `${seatsLeft} seats left of ${webinar.seatsAvailable}`
                      : "Fully booked"}
                  </div>

                  <Link href={`/webinars/${webinar.slug}`} className="mt-auto">
                    <button className="mt-6 w-full cursor-pointer rounded-xl bg-cyan-500 py-3 font-bold text-black transition-colors hover:bg-cyan-400">
                      View details
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}