import { DonationForm } from "@/components/ui/donation-form";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  "Emergency medical care for injured or sick animals",
  "Daily food, enrichment, and safe shelter",
  "Foster support and post-adoption guidance",
  "Spay/neuter and community wellness events",
];

export default function DonatePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Donate</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Give pets the care they need to heal and thrive.</h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Your support helps animals receive immediate care, safety, and a path to a healthy future. Every gift creates space for rescue, recovery, and lasting adoption success.
          </p>

          <div className="mt-8 rounded-[28px] bg-emerald-50 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Why it matters</div>
            <ul className="mt-5 space-y-4 text-base leading-7 text-stone-700">
              {reasons.map((reason) => (
                <li key={reason}>• {reason}</li>
              ))}
            </ul>
          </div>
        </div>

        <DonationForm />
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Trust and transparency"
          title="A donation experience built on clarity and care."
          description="We are committed to using every gift responsibly, with clear communication and measurable outcomes."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Transparent impact", "See how support funds daily care, emergency rescue, and adoption programs."],
            ["Skilled team", "Your donation helps our medical and behavior staff provide expert, humane care."],
            ["Community support", "We work with veterinarians, fosters, and volunteers to maximize outcomes."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
              <div className="text-xl font-semibold text-stone-900">{title}</div>
              <p className="mt-3 text-base leading-7 text-stone-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
