"use client";

import React from "react";
import {
  Settings,
  Hammer,
  BadgeCheck,
  Wrench,
  Zap,
  Wind,
} from "lucide-react";

const FeatureCardsSection = () => {
  const items = [
    {
      title: "General Maintenance",
      desc: "Keep your home in top shape with routine checkups and expert care.",
      Icon: Settings,
    },
    {
      title: "Furniture Assembly",
      desc: "Fast, clean assembly for furniture, shelves, and more—done right.",
      Icon: Hammer,
    },
    {
      title: "Best Services",
      desc: "Trusted pros, clear pricing, and quality workmanship every time.",
      Icon: BadgeCheck,
    },
    {
      title: "Plumbing Repair",
      desc: "Leak fixes, pipe installations, and emergency plumbing support.",
      Icon: Wrench,
    },
    {
      title: "Electrical Services",
      desc: "Safe wiring, lighting installs, and certified electrical work.",
      Icon: Zap,
    },
    {
      title: "HVAC Solutions",
      desc: "Heating, cooling, and ventilation services for year-round comfort.",
      Icon: Wind,
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-400 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white px-6 py-5 transition hover:shadow-md"
            >
              {/* Icon circle */}
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#1D2B30]">
                <Icon className="h-5 w-5 text-white" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;