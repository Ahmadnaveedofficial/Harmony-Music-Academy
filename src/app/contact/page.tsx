"use client";

import React, { useState } from "react";
import { Mail, MapPin, Clock3 } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("Message sent successfully!");
  };

  return (
    <section className="min-h-screen w-full bg-black p-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
              <Mail className="h-6 w-6 text-cyan-400" />
            </div>

            <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Let's Start Your Musical Journey
            </h1>

            <p className="mt-5 max-w-lg text-neutral-400 leading-relaxed">
              Have questions about our courses, instructors, or enrollment
              process? Our team is here to help you choose the perfect learning
              path and achieve your musical goals.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <a
                href="mailto:info@harmonymusicacademy.com"
                className="text-cyan-400 hover:text-cyan-300"
              >
                info@harmonymusicacademy.com
              </a>

              <span className="text-neutral-600">•</span>

              <a
                href="tel:+923001234567"
                className="text-neutral-300 hover:text-white"
              >
                +92 300 1234567
              </a>

              <span className="text-neutral-600">•</span>

              <span className="text-neutral-400">
              Lahore, Pakistan
              </span>
            </div>

            {/* Info Cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
                <MapPin className="mb-2 h-5 w-5 text-cyan-400" />
                <h4 className="font-semibold text-white">Location</h4>
                <p className="mt-1 text-sm text-neutral-400">
                 Lahore, Pakistan
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
                <Mail className="mb-2 h-5 w-5 text-cyan-400" />
                <h4 className="font-semibold text-white">Support</h4>
                <p className="mt-1 text-sm text-neutral-400">
                  Response within 24 Hours
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
                <Clock3 className="mb-2 h-5 w-5 text-cyan-400" />
                <h4 className="font-semibold text-white">Office Hours</h4>
                <p className="mt-1 text-sm text-neutral-400">
                  Mon - Sat • 9AM - 8PM
                </p>
              </div>
            </div>

            {/* World Map */}
            <div className="mt-10">
              <WorldMap
                pin={{
                  lat: 24.8607,
                  lng: 67.0011,
                  label: "Harmony Music Academy",
                }}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/70 p-8 backdrop-blur-sm">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right,#404040 1px,transparent 1px),linear-gradient(to bottom,#404040 1px,transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Full Name
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Course Interested In
                </label>

                <input
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  placeholder="Guitar, Piano, Vocals..."
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-200">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer w-fit rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
              >
                Send Message
              </button>

              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                <p className="text-sm text-cyan-300">
                  🎵 Enrollment is currently open for Guitar, Piano, Vocals,
                  Violin, Drums, and Music Production programs.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;