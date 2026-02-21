"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

const ComfortCareSection = () => {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-400 px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1D2B30] md:text-5xl">
              Your Trusted Partner for <br className="hidden sm:block" />
              Home Comfort and Care
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1D2B30]/70 sm:text-base">
              We’re more than just a home service team — we’re your dedicated
              partners in keeping your home safe, comfortable, and running
              smoothly. With years of experience and a passion for quality, we
              deliver care you can trust.
            </p>

            {/* Stats list */}
            <div className="mt-10 space-y-7">
              <div className="flex items-end md:w-1/2 justify-between gap-6 border-b border-[#1D2B30] pb-5">
                <div className="text-4xl font-extrabold text-[#1D2B30] sm:text-5xl">
                  5000K
                </div>
                <div className="text-sm font-medium text-[#1D2B30]/70">
                  Home Services
                </div>
              </div>

              <div className="flex items-end md:w-2/3 justify-between gap-6 border-b border-[#1D2B30] pb-5">
                <div className="text-4xl font-extrabold text-[#1D2B30] sm:text-5xl">
                  14M
                </div>
                <div className="text-sm font-medium text-[#1D2B30]/70">
                  Customer
                </div>
              </div>

              <div className="flex items-end justify-between gap-6 border-b border-[#1D2B30] pb-5">
                <div className="text-4xl font-extrabold text-[#1D2B30] sm:text-5xl">
                  20+
                </div>
                <div className="text-sm font-medium text-[#1D2B30]/70">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl">
              {/* Image */}
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/assets/man-with-white-helmet-near-solar-panel (1).jpg" // ✅ change to your image
                  alt="HeavenFix technician at work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Call button */}
              <a
                href="tel:+10000000000"
                className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-[#1D2B30] shadow-sm backdrop-blur transition hover:bg-white"
              >
                <Phone className="h-4 w-4" />
                Call Us Now
              </a>

              {/* subtle border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComfortCareSection;
