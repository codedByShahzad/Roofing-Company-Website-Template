"use client";

import React from "react";
import { Phone, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden m-2 rounded-2xl">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/assets/man-holding-hammer-drill-looking-away.jpg")',
        }}
      />

      {/* Brand overlay (professional) */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1D2B30]/95 via-[#1D2B30]/80 to-[#1D2B30]/55" />

      {/* Soft texture */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_20%,rgba(188,224,151,0.25),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_40%)]" />

      {/* Content */}
      <div className="relative mx-auto max-w-400 px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left content */}
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" />
              HeavenFix • Home Services
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fix it once.{" "}
              <span className="text-primary">Fix it right</span> — with HeavenFix.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Reliable technicians for repairs, installation, and maintenance —
              delivered with clear pricing, fast scheduling, and professional
              workmanship.
            </p>

            {/* Service chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Plumbing",
                "Electrical",
                "HVAC",
                "Handyman",
                "Appliance Repair",
                "Emergency Visits",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/85 backdrop-blur"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:opacity-95"
              >
                Get a Free Quote
              </a>

              <a
                href="tel:+10000000000"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/15"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>

            {/* Proof points */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "10k+", label: "Jobs Completed" },
                { value: "4.9★", label: "Avg. Rating" },
                { value: "60-min", label: "Response Time" },
                { value: "100%", label: "Satisfaction Focus" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                >
                  <div className="text-xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs text-white/70">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (LG+ only): mini contact form */}
          <div className="hidden lg:block lg:col-span-5">
            <div
              id="quote"
              className="rounded-3xl border border-white/15 bg-white/90 p-7 shadow-xl backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#1D2B30]">
                    Get a Free Estimate
                  </h3>
                  <p className="mt-1 text-sm text-[#1D2B30]/70">
                    We’ll call you back within the hour.
                  </p>
                </div>

                <span className="rounded-full bg-primary/30 px-3 py-1 text-xs font-semibold text-[#1D2B30]">
                  No obligation
                </span>
              </div>

              <form className="mt-6 space-y-4">
                <div>
                  <label className="text-xs font-medium text-[#1D2B30]/70">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#1D2B30]/70">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#1D2B30]/70">
                    Service Needed
                  </label>
                  <select className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary">
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>HVAC</option>
                    <option>Handyman</option>
                    <option>Appliance Repair</option>
                    <option>Other</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="w-full rounded-xl bg-[#1D2B30] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                >
                  Request Callback
                </button>

                <div className="pt-2 space-y-2 text-sm text-[#1D2B30]/70">
                  {[
                    "Upfront pricing & clear communication",
                    "Clean work, respectful technicians",
                    "Warranty-backed workmanship",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <p className="pt-1 text-xs text-[#1D2B30]/50">
                  By submitting, you agree to receive a call/text about your
                  request. Message & data rates may apply.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;