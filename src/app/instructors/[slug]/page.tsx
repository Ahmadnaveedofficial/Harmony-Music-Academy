import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

import instructorData from "@/data/instructors.json";
import courseData from "@/data/music_course.json";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function getAvatarSrc(imagePath?: string) {
  if (!imagePath) return null;
  const fullPath = path.join(process.cwd(), "public", imagePath);
  return fs.existsSync(fullPath) ? imagePath : null;
}

function getCourseImageSrc(imagePath?: string) {
  if (!imagePath) return null;
  const fullPath = path.join(process.cwd(), "public", imagePath);
  return fs.existsSync(fullPath) ? imagePath : null;
}

export default async function InstructorDetailPage({ params }: Props) {
  const { slug } = await params;

  const instructor = instructorData.instructors.find(
    (item) => item.slug === slug
  );

  if (!instructor) {
    notFound();
  }

  const courses = courseData.courses.filter(
    (course) => course.instructor.name === instructor.name
  );

  const avatarSrc = getAvatarSrc(instructor.image);
  const initial = instructor.name?.trim().charAt(0).toUpperCase() || "?";

  return (
    <div className="min-h-screen bg-black pb-20 pt-40 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
          <span>Instructors</span>
          <span>/</span>
          <span className="text-cyan-400">{instructor.specialty}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[340px_1fr]">
          {/* Left */}
          <div className="h-fit rounded-2xl border border-white/10 bg-zinc-900/60 p-8">
            {avatarSrc ? (
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border border-white/10">
                <Image
                  src={avatarSrc}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-cyan-500/10 text-4xl font-bold text-cyan-400">
                {initial}
              </div>
            )}

            <h1 className="mt-6 text-center text-2xl font-bold sm:text-3xl">
              {instructor.name}
            </h1>

            <p className="mt-1 text-center font-medium text-cyan-400">
              {instructor.designation}
            </p>

            <p className="mt-2 text-center text-sm text-neutral-500">
              {instructor.specialty}
            </p>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-neutral-400">
              <div className="flex justify-between">
                <span>Experience</span>
                <span className="font-medium text-white">
                  {instructor.experience}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Rating</span>
                <span className="font-medium text-white">
                  ⭐ {instructor.rating}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Students</span>
                <span className="font-medium text-white">
                  {instructor.students.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              About {instructor.name}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400">
              {instructor.bio}
            </p>

            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
                Courses by {instructor.name}
              </h2>

              {courses.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  {courses.map((course) => {
                    const courseImageSrc = getCourseImageSrc(course.image);

                    return (
                      <Link
                        key={course.id}
                        href={`/courses/${course.slug}`}
                        className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 transition-colors duration-300 hover:border-cyan-500/50"
                      >
                        <div className="relative h-48 w-full overflow-hidden">
                          {courseImageSrc ? (
                            <Image
                              src={courseImageSrc}
                              alt={course.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-cyan-500/10 text-2xl font-bold text-cyan-400">
                              {course.title.charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>

                        <div className="p-5">
                          <h3 className="text-lg font-bold">{course.title}</h3>
                          <p className="mt-2 text-sm text-neutral-400">
                            {course.shortDescription}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-neutral-500">
                  No courses listed for this instructor yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}