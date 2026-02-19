"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Watermark from "./Watermark";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

// ✅ underline animation helper classes (left -> right)
const underline =
  "relative inline-block pb-1 text-primaryLight/70 transition-colors hover:text-primaryLight " +
  "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primaryLight after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";

const Footer = () => {
  return (
    <div className="p-2">
      <div className="relative bg-secondary min-h-[70vh] rounded-2xl overflow-hidden px-6 sm:px-10 py-10 sm:py-14 text-primaryLight">
        <div className="mx-auto max-w-400">
          <Watermark text="HavenFix" />

          {/* ✅ 4 columns now */}
          {/* Content */}
<div className="relative z-10 mx-auto max-w-400">

  <div className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-12
    lg:gap-16
  ">

    {/* Left */}
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-white">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={44}
            height={44}
          />
        </div>

        <span className="text-xl sm:text-2xl font-semibold">
          HavenFix
        </span>
      </div>

      <p className="text-base sm:text-lg text-primaryLight/70 leading-7 sm:leading-8">
        HavenFix provides trusted home services—from repairs and
        maintenance to installations and upgrades. Our skilled team
        delivers clean, reliable work with clear pricing and on-time
        service.
      </p>
    </div>

    {/* Main Page */}
    <div className="space-y-5">
      <h3 className="text-xl sm:text-2xl font-semibold">
        Main Page
      </h3>

      <ul className="space-y-4 text-base sm:text-lg">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={underline}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/contact" className={`${underline} block`}>
        Contact
      </Link>
    </div>

    {/* Services */}
    <div className="space-y-5">
      <h3 className="text-xl sm:text-2xl font-semibold">
        Services
      </h3>

      <ul className="space-y-4 text-base sm:text-lg">
        {[
          "Home Repairs",
          "Plumbing Fixes",
          "Electrical Work",
          "Painting & Drywall",
          "Installations",
        ].map((item) => (
          <li key={item}>
            <Link href="/services" className={underline}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Follow Us */}
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-semibold">
        Follow Us
      </h3>

      <div className="flex gap-4">
        <Link
          href="#"
          className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-secondary transition hover:scale-105"
        >
          <FaFacebookF size={18} />
        </Link>

        <Link
          href="#"
          className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-secondary transition hover:scale-105"
        >
          <FaInstagram size={18} />
        </Link>

        <Link
          href="#"
          className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-secondary transition hover:scale-105"
        >
          <FaXTwitter size={18} />
        </Link>

        <Link
          href="#"
          className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-secondary transition hover:scale-105"
        >
          <FaLinkedinIn size={18} />
        </Link>
      </div>

      <p className="text-base sm:text-lg text-primaryLight/70">
        Follow for tips, updates, and before/after projects.
      </p>
    </div>

  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
