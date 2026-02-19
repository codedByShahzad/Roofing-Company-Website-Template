"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  hasCaret?: boolean;
  hasDot?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h16M4 12h16M4 17h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PillLink({
  item,
  active,
  onClick,
  pillWClass,
}: {
  item: NavItem;
  active: boolean;
  onClick?: () => void;
  pillWClass: string; // fixed width for equal pills
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={[
        "relative inline-flex items-center justify-center rounded-full  lg:w-28 px-4 py-2 text-sm font-medium transition",
        "h-10", // same height
        active
          ? "bg-primary text-secondary shadow-sm"
          : "bg-white text-secondary/70 border border-border hover:bg-primaryLight hover:text-secondary",
      ].join(" ")}
    >
      <span className="truncate">{item.label}</span>
    </Link>
  );
}

function ContactButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={[
        "inline-flex items-center gap-2 rounded-full bg-primary pl-2 pr-4 py-4 text-sm font-semibold text-secondary transition hover:opacity-95 shadow-sm",
        "h-10",
        className,
      ].join(" ")}
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-primaryLight">
        <PlayIcon />
      </span>
      <span className="whitespace-nowrap">Contact Us</span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => {
    const found = navItems.find((x) => x.href === pathname);
    return found?.href ?? "/";
  }, [pathname]);

  const pillWClass = "w-[112px]";

  // ✅ navbar height (h-16 = 64px)
  const NAV_H = 64;

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ✅ FIXED NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-secondary/10 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-400 pr-2 lg:pr-auto lg:px-4">
          <div className="flex h-16 items-center justify-between gap-3">
            {/* Left: Brand */}
            <Link href="/" className="flex items-center ">
              <Image
                src="/assets/logo.png"
                alt="HavenFix logo"
                width={60}
                height={60}
                className="rounded-full"
                priority
              />
              <span className="text-[20px] font-bold tracking-tight text-secondary">
                HavenFix
              </span>
            </Link>

            {/* Center: Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <PillLink
                  key={item.href}
                  item={item}
                  active={activeHref === item.href}
                  pillWClass={pillWClass}
                />
              ))}
            </nav>

            {/* Right: Desktop CTA */}
            <div className="hidden md:flex items-center">
              <ContactButton />
            </div>

            {/* Mobile Right */}
            <div className="md:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-secondary shadow-sm"
              >
                <MenuIcon />
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div
            className={[
              "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
              open ? "max-h-130 opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="pb-4 ml-2 pt-2">
              <div className="rounded-2xl border border-border bg-white p-2 shadow-sm">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const active = activeHref === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={[
                          "flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition",
                          active
                            ? "bg-primary text-secondary"
                            : "bg-white text-secondary/80 hover:bg-primaryLight",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    );
                  })}

                  <div className="pt-1">
                    <ContactButton className="w-full justify-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Spacer so content is visible (navbar no longer hides it) */}
      <div style={{ height: NAV_H }} />
    </>
  );
}
