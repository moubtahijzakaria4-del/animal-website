import Link from "next/link";
import { animals } from "@/data/animals";
import { articles } from "@/data/articles";

function normalizeQuery(value: unknown) {
  if (Array.isArray(value)) return value[0] ?? "";
  return typeof value === "string" ? value : "";
}

export default async function SearchPage({ searchParams }: { searchParams?: Promise<Record<string, string | string[] | undefined>> }) {
  const params = (await searchParams) ?? {};
  const query = normalizeQuery(params.q).trim().toLowerCase();

  const animalResults = query
    ? animals.filter(
        (animal) =>
          animal.name.toLowerCase().includes(query) ||
          animal.breed.toLowerCase().includes(query) ||
          animal.story.toLowerCase().includes(query) ||
          animal.location.toLowerCase().includes(query),
      )
    : animals.slice(0, 6);

  const articleResults = query
    ? articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) || article.excerpt.toLowerCase().includes(query),
      )
    : articles.slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Search</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Find a pet or story that matches what you’re looking for.</h1>
      </div>

      <form method="get" className="mt-10 flex flex-col gap-4 sm:flex-row">
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
        <input
          id="search-input"
          name="q"
          defaultValue={query}
          placeholder="Search dogs, cats, foster stories, and topics"
          className="w-full rounded-full border border-stone-200 bg-white px-5 py-3.5 text-base text-stone-900 outline-none focus:border-emerald-500"
        />
        <button type="submit" className="rounded-full bg-emerald-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800">
          Search
        </button>
      </form>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-stone-900">Animals</h2>
          {animalResults.length > 0 ? (
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {animalResults.map((animal) => (
                <article key={animal.slug} className="rounded-[26px] border border-stone-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xl font-semibold text-stone-900">{animal.name}</div>
                      <div className="text-sm text-stone-600">{animal.species} • {animal.breed}</div>
                    </div>
                    <Link href={`/animals/${animal.slug}`} className="rounded-full bg-stone-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-stone-700">
                      View
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-stone-600">No animals matched your search.</p>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-stone-900">Articles</h2>
          {articleResults.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {articleResults.map((article) => (
                <article key={article.slug} className="rounded-[26px] border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">{article.category}</div>
                  <h3 className="mt-3 text-xl font-semibold text-stone-900">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{article.excerpt}</p>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-stone-600">No articles matched your search.</p>
          )}
        </section>
      </div>
    </main>
  );
}
