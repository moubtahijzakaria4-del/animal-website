import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">We’re here to help.</h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Reach out about adoption questions, volunteer opportunities, foster support, or donations.
          </p>

          <div className="mt-8 space-y-5 rounded-[30px] bg-stone-100 p-6 text-sm text-stone-700">
            <div>
              <div className="font-semibold text-stone-900">Email</div>
              <div className="mt-1">hello@animalhaven.org</div>
            </div>
            <div>
              <div className="font-semibold text-stone-900">Phone</div>
              <div className="mt-1">(503) 555-0144</div>
            </div>
            <div>
              <div className="font-semibold text-stone-900">Hours</div>
              <div className="mt-1">Tuesday–Sunday, 10:00 AM–5:30 PM</div>
            </div>
          </div>
        </div>

        <form className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-stone-700">
              <span className="mb-2 block font-medium">First name</span>
              <input type="text" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-emerald-500" placeholder="Jordan" />
            </label>
            <label className="block text-sm text-stone-700">
              <span className="mb-2 block font-medium">Last name</span>
              <input type="text" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-emerald-500" placeholder="Lee" />
            </label>
            <label className="block text-sm text-stone-700 sm:col-span-2">
              <span className="mb-2 block font-medium">Email address</span>
              <input type="email" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-emerald-500" placeholder="you@example.com" />
            </label>
            <label className="block text-sm text-stone-700 sm:col-span-2">
              <span className="mb-2 block font-medium">How can we help?</span>
              <select className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-emerald-500">
                <option>Adoption question</option>
                <option>Volunteer inquiry</option>
                <option>Foster application</option>
                <option>Donation question</option>
                <option>General support</option>
              </select>
            </label>
            <label className="block text-sm text-stone-700 sm:col-span-2">
              <span className="mb-2 block font-medium">Message</span>
              <textarea rows={6} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-emerald-500" placeholder="Tell us a little about what you need help with." />
            </label>
          </div>

          <div className="mt-6">
            <Button href="/contact" type="submit" className="w-full">Send message</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
