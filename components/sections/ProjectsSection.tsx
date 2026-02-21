"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type Project = {
  title: string;
  year: string;
  tag: string; // e.g. "Quality Service"
  image: string;
};

const ProjectsSection = () => {
  const [activeYear, setActiveYear] = useState<"2022" | "2023" | "2024" | "2025">(
    "2022"
  );

  const years = useMemo(() => ["2022", "2023", "2024", "2025"] as const, []);

  // ✅ ONLINE IMAGES (Unsplash CDN)
  const projectsByYear: Record<(typeof years)[number], Project[]> = {
    "2022": [
      {
        title: "Deck Restoration",
        year: "2022",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Bathroom Remodel",
        year: "2022",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Kitchen Renovation",
        year: "2022",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Roof Repair",
        year: "2022",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1590479773265-7464e5d48118?q=80&w=1600&auto=format&fit=crop",
      },
    ],
    "2023": [
      {
        title: "HVAC Installation",
        year: "2023",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Electrical Upgrade",
        year: "2023",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Bathroom Refresh",
        year: "2023",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Kitchen Makeover",
        year: "2023",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=1600&auto=format&fit=crop",
      },
    ],
    "2024": [
      {
        title: "Full Home Renovation",
        year: "2024",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Solar Panel Setup",
        year: "2024",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Deck Rebuild",
        year: "2024",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Bathroom Upgrade",
        year: "2024",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1600&auto=format&fit=crop",
      },
    ],
    "2025": [
      {
        title: "Luxury Kitchen",
        year: "2025",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Outdoor Restoration",
        year: "2025",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Roof Replacement",
        year: "2025",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1590479773265-7464e5d48118?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Electrical Remodel",
        year: "2025",
        tag: "Quality Service",
        image:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  };

  const projects = projectsByYear[activeYear];

  return (
    <section className="relative overflow-hidden bg-[#1D2B30] py-16 lg:py-20">
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-[110px] font-extrabold tracking-tight text-white/5 sm:text-[160px] lg:text-[220px]">
          Our Portfolio
        </div>
      </div>

      <div className="relative mx-auto max-w-400 px-6">
        {/* Top label */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-white/15" />
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[#1D2B30]">
              ✕
            </span>
            Our Portfolio
          </span>
          <span className="h-px w-16 bg-white/15" />
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-6 max-w-3xl text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Explore Our Work—Real Projects Real Results
        </h2>

        {/* Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: 2 cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {projects.slice(0, 2).map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>

          {/* Right: year tabs + description */}
          <div className="lg:col-span-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex rounded-full bg-white/10 p-1">
                {years.map((y) => {
                  const isActive = y === activeYear;
                  return (
                    <button
                      key={y}
                      onClick={() => setActiveYear(y)}
                      className={[
                        "rounded-full px-4 py-2 text-xs font-semibold transition",
                        isActive
                          ? "bg-primary text-[#1D2B30]"
                          : "text-white/70 hover:text-white",
                      ].join(" ")}
                    >
                      {y}
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Our work speaks for itself. From minor repairs to full-scale home
              upgrades, our portfolio showcases quality, care, and attention to
              detail we bring to every project.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          {/* View More */}
          <div className="lg:col-span-4">
            <button className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/15">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-[#1D2B30]">
                <Play className="h-4 w-4" />
              </span>
              View More
            </button>

            <div className="mt-10">
              <h3 className="text-4xl font-extrabold text-white">Works</h3>
              <p className="mt-2 text-sm text-white/60">32K Completed</p>
            </div>
          </div>

          {/* 2 more cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {projects.slice(2, 4).map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
      <div className="relative aspect-[4/3] w-full">
        <Image src={p.image} alt={p.title} fill className="object-cover" />
      </div>

      {/* Bottom overlay */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="bg-black/55 px-5 py-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/85">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {p.tag}
            </span>
            <span className="text-xs font-semibold text-white/70">{p.year}</span>
          </div>

          <h3 className="mt-2 text-base font-bold text-white">{p.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;