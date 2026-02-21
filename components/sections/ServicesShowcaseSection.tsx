"use client";

import React from "react";
import Image from "next/image";
import { Play, Wrench, Zap, Paintbrush, Settings } from "lucide-react";

const ServicesShowcaseSection = () => {
  const cards = [
    {
      title: "Plumbing Services",
      desc: "Quick fixes for leaks, clogs, and home maintenance — handled by experts.",
      active: true,
      Icon: Wrench,
    },
    {
      title: "Electrical Services",
      desc: "Safe wiring, lighting installs, and certified electrical repairs.",
      active: false,
      Icon: Zap,
    },
    {
      title: "Painting & Renovation",
      desc: "Fresh paint and upgrades that transform your space beautifully.",
      active: false,
      Icon: Paintbrush,
    },
    {
      title: "Appliance Repair",
      desc: "Fast diagnosis and repair for everyday appliances you rely on.",
      active: false,
      Icon: Settings,
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-400 px-6">
        {/* Top Heading */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold text-[#1D2B30] sm:text-4xl lg:text-5xl">
              Comprehensive Home Services You Can Count On
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#1D2B30]/70 sm:text-base">
              From quick fixes to major home improvements, our expert team offers
              reliable and affordable services tailored to your needs.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:items-start">
          {/* LEFT (remove col-span + reduce height) */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-3xl">
              {/* CHANGED: aspect ratio reduced */}
              <div className="relative aspect-3/4 w-full">
                <Image
                  src="/assets/man-working-roof-with-drill.jpg"
                  alt="Technician working"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-[#1D2B30] px-5 py-4 text-white">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-[#1D2B30] font-bold">
                    +
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight">
                      Quality
                      <br />
                      Services
                    </p>
                  </div>
                </div>
                <div className="text-3xl font-extrabold">99%</div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/10" />
            </div>
          </div>

          {/* MIDDLE */}
          <div className="w-full space-y-5">
            {cards.map(({ title, desc, active, Icon }) => (
              <div
                key={title}
                className={[
                  "w-full rounded-2xl px-6 py-5",
                  active
                    ? "bg-primary/40"
                    : "border border-[#1D2B30]/10 bg-[#F4F6F5]",
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={[
                      "grid h-10 w-10 shrink-0 place-items-center rounded-full",
                      active
                        ? "bg-[#1D2B30] text-white"
                        : "bg-white text-[#1D2B30]",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-[#1D2B30]">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-[#1D2B30]/70">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="w-full">
            <div className="flex items-start justify-between">
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-[#1D2B30] transition hover:opacity-90">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1D2B30] text-white">
                  <Play className="h-4 w-4" />
                </span>
                Learn More
              </button>

              <div className="text-right">
                <div className="text-5xl font-extrabold leading-none text-[#1D2B30]">
                  20 y+
                </div>
                <div className="mt-2 text-sm font-medium text-[#1D2B30]/60">
                  Experiences
                </div>
              </div>
            </div>

            <div className="mt-8 relative w-full overflow-hidden rounded-3xl">
              <div className="relative h-130 w-full">
                <Image
                  src="/assets/electrician-builder-work-servicing-fuselage-industrial-switchboard-professional-overalls-with-electrician-s-tool.jpg"
                  alt="Technician climbing ladder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcaseSection;