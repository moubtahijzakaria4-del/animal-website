import Image from "next/image";
import { articles } from "@/data/articles";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Blog & news</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Helpful stories, practical guidance, and rescue updates.</h1>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {articles.map((article) => (
          <article key={article.slug} className="overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
            <Image src={article.image} alt={article.imageAlt} width={1000} height={700} className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">{article.category}</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-900">{article.title}</h2>
              <p className="mt-3 text-base leading-7 text-stone-600">{article.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-stone-500">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
