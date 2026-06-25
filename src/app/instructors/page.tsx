import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import instructorData from "@/data/instructors.json";

function getAvatarSrc(imagePath?: string) {
  if (!imagePath) return null;
  const fullPath = path.join(process.cwd(), "public", imagePath);
  return fs.existsSync(fullPath) ? imagePath : null;
}

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-black pb-20 pt-40 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-cyan-400">
            {instructorData.instructors.length} expert instructors
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Our instructors
          </h1>

          <p className="mt-5 text-base leading-relaxed text-neutral-400">
            Learn from industry professionals and experienced musicians who
            bring real-world expertise to every lesson.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {instructorData.instructors.map((instructor) => {
            const avatarSrc = getAvatarSrc(instructor.image);
            const initial =
              instructor.name?.trim().charAt(0).toUpperCase() || "?";

            return (
              <Link key={instructor.id} href={`/instructors/${instructor.slug}`}>
                <div className="group h-full rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-colors duration-300 hover:border-cyan-500/50">
                  {avatarSrc ? (
                    <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-white/10">
                      <Image
                        src={avatarSrc}
                        alt={instructor.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-cyan-500/10 text-3xl font-bold text-cyan-400">
                      {initial}
                    </div>
                  )}

                  <h2 className="mt-5 text-center text-xl font-bold">
                    {instructor.name}
                  </h2>

                  <p className="mt-1 text-center text-sm font-medium text-cyan-400">
                    {instructor.designation}
                  </p>

                  <p className="mt-2 text-center text-sm text-neutral-500">
                    {instructor.experience}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-neutral-400">
                    <span className="flex items-center gap-1">
                      ⭐ <span className="font-medium text-white">{instructor.rating}</span>
                    </span>
                    <span>{instructor.students.toLocaleString()} students</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}