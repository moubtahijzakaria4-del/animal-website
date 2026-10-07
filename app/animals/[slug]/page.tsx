import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimalCard } from "@/components/ui/animal-card";
import { FavoriteButton } from "@/components/ui/favorite-button";
import { getAnimalBySlug, getRelatedAnimals } from "@/data/animals";

export async function generateStaticParams() {
  return [
    { slug: "milo" },
    { slug: "luna" },
    { slug: "olive" },
    { slug: "sasha" },
    { slug: "poppy" },
    { slug: "beau" },
    { slug: "fern" },
    { slug: "ozzy" },
    { slug: "nori" },
    { slug: "mango" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const animal = getAnimalBySlug(slug);

  if (!animal) {
    return {
      title: "Animal not found",
    };
  }

  return {
    title: `${animal.name} | Animal Haven`,
    description: `${animal.name} is a ${animal.age} ${animal.species.toLowerCase()} in ${animal.location}.`,
  };
}

export default async function AnimalProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const animal = getAnimalBySlug(slug);

  if (!animal) {
    notFound();
  }

  const related = getRelatedAnimals(slug);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <div className="overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
            <Image
              src={animal.image}
              alt={animal.imageAlt}
              width={1200}
              height={900}
              className="h-[520px] w-full object-cover"
              priority
            />
          </div>
        </div>

        <aside className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-[0_24px_56px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">{animal.species}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900">{animal.name}</h1>
            </div>
            <FavoriteButton label={animal.name} />
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-stone-600">
            <span className="rounded-full bg-stone-100 px-2.5 py-1">{animal.breed}</span>
            <span className="rounded-full bg-stone-100 px-2.5 py-1">{animal.age}</span>
            <span className="rounded-full bg-stone-100 px-2.5 py-1">{animal.gender}</span>
            <span className="rounded-full bg-stone-100 px-2.5 py-1">{animal.size}</span>
          </div>

          <div className="mt-6 rounded-2xl bg-stone-100 p-4 text-sm text-stone-700">
            <div className="flex justify-between gap-3">
              <span>Location</span>
              <span className="font-medium text-stone-900">{animal.location}</span>
            </div>
            <div className="mt-3 flex justify-between gap-3">
              <span>Adoption status</span>
              <span className="font-medium text-stone-900">{animal.status}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/adopt" className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800">
              Adopt {animal.name}
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-50">
              Ask a question
            </Link>
          </div>
        </aside>
      </div>

      <section className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900">About {animal.name}</h2>
          <p className="mt-5 text-base leading-8 text-stone-700">{animal.story}</p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-stone-900">Personality</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {animal.personality.map((trait) => (
                <span key={trait} className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-800">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[30px] border border-stone-200 bg-stone-50 p-6">
          <h3 className="text-xl font-semibold text-stone-900">Quick facts</h3>
          <dl className="mt-5 space-y-4 text-sm text-stone-700">
            <div className="flex justify-between gap-5 border-b border-stone-200 pb-3">
              <dt>Species</dt>
              <dd className="font-medium text-stone-900">{animal.species}</dd>
            </div>
            <div className="flex justify-between gap-5 border-b border-stone-200 pb-3">
              <dt>Breed</dt>
              <dd className="font-medium text-stone-900">{animal.breed}</dd>
            </div>
            <div className="flex justify-between gap-5 border-b border-stone-200 pb-3">
              <dt>Age</dt>
              <dd className="font-medium text-stone-900">{animal.age}</dd>
            </div>
            <div className="flex justify-between gap-5 border-b border-stone-200 pb-3">
              <dt>Gender</dt>
              <dd className="font-medium text-stone-900">{animal.gender}</dd>
            </div>
            <div className="flex justify-between gap-5 border-b border-stone-200 pb-3">
              <dt>Size</dt>
              <dd className="font-medium text-stone-900">{animal.size}</dd>
            </div>
            <div className="flex justify-between gap-5">
              <dt>Location</dt>
              <dd className="font-medium text-stone-900">{animal.location}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900">More animals to meet</h2>
          <Link href="/adopt" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
            View all animals
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {related.map((item) => (
            <AnimalCard key={item.slug} animal={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
