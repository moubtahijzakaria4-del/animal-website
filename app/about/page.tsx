import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const values = [
  {
    title: "Humane care",
    text: "Animals are treated with compassion, patience, and individualized attention throughout every stage of their journey.",
  },
  {
    title: "Evidence-based matching",
    text: "We use thoughtful assessments and careful screening to match animals with homes that fit their needs and temperament.",
  },
  {
    title: "Community support",
    text: "We build networks of adopters, fosters, volunteers, and donors to ensure animals experience long-term stability and care.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">About us</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">We believe every pet deserves a path to safety, care, and love.</h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Animal Haven is a regional rescue and adoption organization committed to reducing harm, improving welfare, and helping animals thrive in healthy homes.
          </p>
          <p className="mt-4 text-base leading-7 text-stone-600">
            From rescue and medical care to humane adoption support, we focus on the full journey—because a compassionate start is only the beginning of a lasting success story.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
          <Image
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80"
            alt="A dog standing next to a volunteer"
            width={1200}
            height={900}
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="What guides us"
          title="Our values, in practice."
          description="Progress happens when care, expertise, and community all work together."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-[28px] border border-stone-200 bg-white p-7 shadow-sm">
              <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                {value.title}
              </div>
              <p className="mt-5 text-base leading-7 text-stone-600">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[32px] bg-stone-900 p-8 text-white sm:p-10">
        <SectionHeading
          eyebrow="Our story"
          title="Built for animals and the people who love them."
          description="Over the years, we have grown from a small volunteer effort into a multi-program, community-centered rescue organization."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["2010", "Animal Haven began as a foster-based rescue dedicated to urgent intake and safe placements."],
            ["2017", "We expanded our clinic and transport network to improve medical outcomes for injured and vulnerable pets."],
            ["2026", "Today, our services span rescue, foster, education, and long-term support for adopters and families."],
          ].map(([year, text]) => (
            <div key={year} className="rounded-[26px] border border-white/10 bg-white/5 p-6">
              <div className="text-2xl font-semibold text-emerald-300">{year}</div>
              <p className="mt-3 text-sm leading-7 text-stone-200">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
