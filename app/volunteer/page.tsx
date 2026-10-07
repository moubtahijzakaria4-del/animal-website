import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  "Meaningful, hands-on work that directly helps animals feel safer and more supported.",
  "Flexible scheduling for individuals, student groups, and community volunteers.",
  "Training, support, and a welcoming volunteer community built around compassion.",
];

const steps = [
  "Complete a brief application and orientation process.",
  "Choose a volunteer role that fits your schedule and strengths.",
  "Join a training session and begin helping with real programs.",
];

export default function VolunteerPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Volunteer</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Give your time to create brighter outcomes for animals.</h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Volunteers are essential to our mission. Whether you help with dog walks, community events, foster support, or admin tasks, your time has a direct impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact?topic=Volunteer">Apply to volunteer</Button>
            <Link href="/foster" className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-50">
              Explore foster care
            </Link>
          </div>
        </div>

        <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-[0_28px_60px_rgba(15,23,42,0.06)]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Dog walking", "1–2 hours weekly"],
              ["Cat care", "Shift-based support"],
              ["Events", "Community outreach"],
              ["Transport", "Weekend errands"],
            ].map(([role, time]) => (
              <div key={role} className="rounded-[22px] bg-stone-100 p-4">
                <div className="text-xl font-semibold text-stone-900">{role}</div>
                <div className="mt-2 text-sm text-stone-600">{time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Benefits"
          title="Why volunteers stay involved."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-base leading-7 text-stone-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[30px] bg-stone-900 p-8 text-white">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Requirements</div>
          <ul className="mt-6 space-y-4 text-base leading-7 text-stone-200">
            <li>• Must be at least 16 years old for most roles.</li>
            <li>• Complete a simple screening and orientation.</li>
            <li>• Commit to a regular schedule for the program you choose.</li>
            <li>• Show patience, respect for animal behavior, and a willingness to learn.</li>
          </ul>
        </div>

        <div>
          <SectionHeading
            eyebrow="How it works"
            title="A simple path into volunteering."
          />
          <div className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[24px] border border-stone-200 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
                  {index + 1}
                </div>
                <p className="pt-2 text-base leading-7 text-stone-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
