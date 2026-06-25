import Image from "next/image";
import { notFound } from "next/navigation";
import courseData from "@/data/music_course.json";
import fs from "fs";
import path from "path";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function getInstructorAvatarSrc(imagePath?: string) {
  if (!imagePath) return null;
  const fullPath = path.join(process.cwd(), "public", imagePath);
  return fs.existsSync(fullPath) ? imagePath : null;
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;

  const course = courseData.courses.find((course) => course.slug === slug);

  if (!course) {
    notFound();
  }

  const avatarSrc = getInstructorAvatarSrc(course.instructor.image);
  const instructorInitial =
    course.instructor.name?.trim().charAt(0).toUpperCase() || "?";

  return (
    <div className="min-h-screen bg-black pb-24 pt-40 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumb / eyebrow */}
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
          <span>Courses</span>
          <span>/</span>
          <span className="text-cyan-400">{course.level}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          {/* Left Side */}
          <div>
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 font-medium text-cyan-400">
                {course.level}
              </span>
              <span className="flex items-center gap-1 text-neutral-400">
                ⭐ <span className="font-semibold text-white">{course.rating}</span>
                <span>({course.reviews} reviews)</span>
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400">
                {course.students.toLocaleString()} students enrolled
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              {course.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
              {course.description}
            </p>

            <div className="mt-12">
              <h2 className="mb-5 text-2xl font-bold sm:text-3xl">
                Skills you&apos;ll learn
              </h2>

              <div className="flex flex-wrap gap-3">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="mb-5 text-2xl font-bold sm:text-3xl">
                Curriculum
              </h2>

              <div className="space-y-4">
                {course.curriculum.map((module, i) => (
                  <div
                    key={module.module}
                    className="rounded-xl border border-white/10 bg-zinc-900/60 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-semibold text-cyan-400">
                        {i + 1}
                      </span>
                      <h3 className="text-lg font-bold">{module.module}</h3>
                    </div>

                    <ul className="mt-4 space-y-2 pl-10 text-neutral-400">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2">
                          <span className="mt-0.5 text-cyan-400">✓</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="sticky top-32 rounded-2xl border border-white/10 bg-zinc-900/80 p-8 backdrop-blur-sm">
              <div className="flex items-baseline gap-3">
                <h2 className="text-4xl font-bold text-cyan-400">
                Rs{course.discountPrice}
                </h2>
                <p className="text-lg text-neutral-500 line-through">
                  Rs{course.price}
                </p>
              </div>

              <button className="mt-6 w-full rounded-xl bg-cyan-500 py-3 font-bold text-black transition-colors hover:bg-cyan-400">
                Enroll now
              </button>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="mb-5 text-xl font-bold">Instructor</h3>

                <div className="flex items-center gap-4">
                  {avatarSrc ? (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10">
                      <Image
                        src={avatarSrc}
                        alt={course.instructor.name}
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
                    <h4 className="font-bold">{course.instructor.name}</h4>
                    <p className="text-sm text-cyan-400">
                      {course.instructor.designation}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {course.instructor.experience}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-neutral-400">
                  {course.instructor.bio}
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="mb-4 text-lg font-bold">Course details</h3>

                <div className="space-y-3 text-sm text-neutral-400">
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span className="font-medium text-white">
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Lessons</span>
                    <span className="font-medium text-white">
                      {course.lessons}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Level</span>
                    <span className="font-medium text-white">
                      {course.level}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Language</span>
                    <span className="font-medium text-white">
                      {course.language}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Students</span>
                    <span className="font-medium text-white">
                      {course.students.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Rating</span>
                    <span className="font-medium text-white">
                      ⭐ {course.rating}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Certificate</span>
                    <span className="font-medium text-white">
                      {course.certificate ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}