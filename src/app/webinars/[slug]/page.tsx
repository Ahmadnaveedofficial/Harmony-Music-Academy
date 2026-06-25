import Image from "next/image";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import webinarData from "@/data/webinars.json";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function getImageSrc(imagePath?: string) {
  if (!imagePath) return null;
  const fullPath = path.join(process.cwd(), "public", imagePath);
  return fs.existsSync(fullPath) ? imagePath : null;
}

export default async function WebinarDetailPage({ params }: Props) {
  const { slug } = await params;

  const webinar = webinarData.webinars.find((webinar) => webinar.slug === slug);

  if (!webinar) {
    notFound();
  }

  const heroImageSrc = getImageSrc(webinar.image);
  const instructorAvatarSrc = getImageSrc(webinar.instructor.image);
  const instructorInitial =
    webinar.instructor.name?.trim().charAt(0).toUpperCase() || "?";
  const seatsLeft = webinar.seatsAvailable - webinar.seatsBooked;

  return (
    <div className="min-h-screen bg-black pb-20 pt-40 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
          <span>Webinars</span>
          <span>/</span>
          <span className="text-cyan-400">{webinar.category}</span>
        </div>

        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10">
          {heroImageSrc ? (
            <Image
              src={heroImageSrc}
              alt={webinar.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-cyan-500/10 text-5xl font-bold text-cyan-400">
              {webinar.title.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 font-medium text-cyan-400">
            {webinar.isFree ? "Free" : `Rs${webinar.price}`}
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400">
            {seatsLeft > 0
              ? `${seatsLeft} seats left of ${webinar.seatsAvailable}`
              : "Fully booked"}
          </span>
        </div>

        <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
          {webinar.title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
          {webinar.description}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
            <h2 className="mb-5 text-2xl font-bold">Webinar details</h2>

            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex justify-between">
                <span>Date</span>
                <span className="font-medium text-white">{webinar.date}</span>
              </div>

              <div className="flex justify-between">
                <span>Time</span>
                <span className="font-medium text-white">
                  {webinar.time} ({webinar.timezone})
                </span>
              </div>

              <div className="flex justify-between">
                <span>Duration</span>
                <span className="font-medium text-white">
                  {webinar.duration}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Mode</span>
                <span className="font-medium text-white">{webinar.mode}</span>
              </div>

              <div className="flex justify-between">
                <span>Price</span>
                <span className="font-medium text-white">
                  {webinar.isFree ? "Free" : `Rs${webinar.price}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Seats</span>
                <span className="font-medium text-white">
                  {webinar.seatsBooked} / {webinar.seatsAvailable}
                </span>
              </div>
            </div>

            <button className="cursor-pointer mt-6 w-full rounded-xl bg-cyan-500 py-3 font-bold text-black transition-colors hover:bg-cyan-400">
              Reserve your seat
            </button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
            <h2 className="mb-5 text-2xl font-bold">Instructor</h2>

            <div className="flex items-center gap-4">
              {instructorAvatarSrc ? (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={instructorAvatarSrc}
                    alt={webinar.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-cyan-500/10 text-xl font-bold text-cyan-400">
                  {instructorInitial}
                </div>
              )}

              <div>
                <h3 className="font-bold">{webinar.instructor.name}</h3>
                <p className="text-sm text-cyan-400">
                  {webinar.instructor.designation}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-3xl font-bold">Topics covered</h2>

          <div className="flex flex-wrap gap-3">
            {webinar.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}