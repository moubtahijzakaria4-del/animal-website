import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  "Short-term placements help animals decompress and settle more quickly.",
  "Fostering improves readiness for adoption and gives pets valuable close-to-home experience.",
  "Our team provides training, supplies, and support throughout the process.",
];

const steps = [
  "Apply to become a foster and share your home details.",
  "Complete a short orientation and home assessment.",
  "Pick a foster program that matches your household and routine.",
  "Receive support while your foster pet settles and thrives.",
];

export default function FosterPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Foster</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Foster animals into a calmer, safer chapter.</h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Foster homes provide a crucial bridge between rescue and adoption. They reduce stress, improve learnings for new pets, and open doors to permanent homes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact?topic=Foster">Apply to foster</Button>
            <Link href="/volunteer" className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-50">
              Learn about volunteering
            </Link>
          </div>
        </div>

        <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-[0_30px_60px_rgba(15,23,42,0.06)]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Dog foster", "Ideal for active households or crate training support"],
              ["Cat foster", "Great for kittens or shy adult cats"],
              ["Short-term care", "Support during recovery or transitions"],
              ["Emergency foster", "Flexible homes for urgent intake"],
            ].map(([type, info]) => (
              <div key={type} className="rounded-[22px] bg-stone-100 p-4">
                <div className="text-xl font-semibold text-stone-900">{type}</div>
                <p className="mt-2 text-sm leading-6 text-stone-600">{info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Why foster"
          title="The benefits are immediate and lasting."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-base leading-7 text-stone-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[32px] bg-stone-900 p-8 text-white sm:p-10">
        <SectionHeading
          eyebrow="How it works"
          title="A simple, supported foster experience."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Step {index + 1}</div>
              <p className="mt-4 text-base leading-7 text-stone-200">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
