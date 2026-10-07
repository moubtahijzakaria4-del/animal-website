import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MonthlyGivingPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[36px] bg-stone-900 p-8 text-white sm:p-10 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">Monthly giving</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">A steady source of care for animals in transition.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
          Monthly donors provide reliable support for food, shelter, vaccination, and emergency treatment—helping us plan ahead with confidence and compassion.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/donate" className="bg-emerald-600 text-white hover:bg-emerald-500">Start monthly giving</Button>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
            Talk with our team
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          ["Reliable care", "Monthly support helps us purchase food, medications, and emergency supplies before crises arise."],
          ["Faster response", "Steady funding allows us to respond quickly to rescues, injuries, and urgent transport needs."],
          ["Longer-term outcomes", "Thoughtful support builds continuity for foster, adoption, and post-placement success."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="text-xl font-semibold text-stone-900">{title}</div>
            <p className="mt-3 text-base leading-7 text-stone-600">{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
