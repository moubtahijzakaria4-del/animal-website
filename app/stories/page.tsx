import Image from "next/image";
import { successStories } from "@/data/articles";

export default function StoriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Success stories</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Second chances turn into lasting bonds.</h1>
        <p className="mt-5 text-lg leading-8 text-stone-600">
          These stories reflect what becomes possible when animals are given safety, time, care, and a family ready to love them.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {successStories.map((story) => (
          <article key={story.name} className="overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
            <Image src={story.image} alt={story.imageAlt} width={900} height={700} className="h-72 w-full object-cover" />
            <div className="p-6">
              <p className="text-base leading-7 text-stone-700">“{story.quote}”</p>
              <div className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">{story.name}</div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
