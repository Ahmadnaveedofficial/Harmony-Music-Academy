"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const navItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "webinars", label: "Webinars", href: "/webinars" },
  { key: "instructors", label: "Instructors", href: "/instructors" },
  { key: "contact", label: "Contact", href: "/contact" },
];

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link key={navItems[0].key} href={navItems[0].href}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={navItems[0].label}
          />
        </Link>

        <MenuItem
          key="courses"
          setActive={setActive}
          active={active}
          item="Courses"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses/classical-music-history">Classical Music History</HoveredLink>
            <HoveredLink href="/courses/advanced-vocal-techniques">Advance Composition</HoveredLink>
            <HoveredLink href="/courses/songwriting-essentials">Song Writing</HoveredLink>
            <HoveredLink href="/courses/music-production-fundamentals">Music Production</HoveredLink>
          </div>
        </MenuItem>

        {navItems.slice(1).map(({ key, label, href }) => (
          <Link key={key} href={href}>
            <MenuItem setActive={setActive} active={active} item={label} />
          </Link>
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;