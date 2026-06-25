"use client";

import Link from "next/link";
import { Music2, Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Webinars", href: "/webinars" },
  { label: "Instructors", href: "/instructors" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

const contactDetails = [
  { icon: Mail, text: "info@harmonymusicacademy.com" },
  { icon: Phone, text: "+92 300 1234567" },
  { icon: MapPin, text: "Lahore, Pakistan" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-neutral-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 p-2">
                <Music2 className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">
             Harmony Music Academy
              </h2>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-400">
              Unlock your musical potential with expert-led courses,
              professional instructors, and a vibrant learning
              community built for every stage of your journey.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-all duration-200 hover:border-teal-400/50 hover:bg-teal-400/10 hover:text-teal-400"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-400 transition-colors duration-200 hover:text-teal-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-3">
              {contactDetails.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-2.5 text-sm text-neutral-400"
                >
                  <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-neutral-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-neutral-500">
            © 2026 Music Academy. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;