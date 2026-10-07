"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/adopt", label: "Adopt" },
  { href: "/donate", label: "Donate" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const involvedLinks = [
  { href: "/volunteer", label: "Volunteer" },
  { href: "/foster", label: "Foster" },
  { href: "/donate/monthly", label: "Monthly Giving" },
  { href: "/locations", label: "Locations" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-semibold text-white shadow-md shadow-emerald-700/20">
            A
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight text-stone-900">Animal Haven</div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-stone-500">Rescue & Adoption</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-stone-700 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-stone-950">
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 transition hover:text-stone-950"
              aria-haspopup="true"
            >
              Get Involved
              <span aria-hidden="true">▾</span>
            </button>
            <div className="absolute left-1/2 top-full mt-3 hidden w-56 -translate-x-1/2 rounded-2xl border border-stone-200 bg-white p-3 shadow-xl shadow-stone-300/25 group-hover:block group-focus-within:block">
              <div className="flex flex-col gap-1">
                {involvedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2 text-sm text-stone-700 transition hover:bg-stone-100 hover:text-stone-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/search" className="rounded-full border border-stone-200 px-3 py-2 transition hover:border-stone-300 hover:bg-stone-50">
            Search
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/adopt" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:border-stone-400 hover:bg-stone-50">
            Meet Animals
          </Link>
          <Link href="/donate" className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:bg-emerald-800">
            Donate
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-lg text-stone-800 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 transition hover:bg-stone-100 hover:text-stone-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {involvedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 transition hover:bg-stone-100 hover:text-stone-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/search"
              className="rounded-xl px-3 py-2 transition hover:bg-stone-100 hover:text-stone-900"
              onClick={() => setMobileOpen(false)}
            >
              Search
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
