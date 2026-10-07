import Image from "next/image";
import Link from "next/link";
import type { Animal } from "@/data/animals";
import { FavoriteButton } from "@/components/ui/favorite-button";

export function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_64px_rgba(15,23,42,0.10)]">
      <div className="relative">
        <Link href={`/animals/${animal.slug}`} className="block overflow-hidden">
          <Image
            src={animal.image}
            alt={animal.imageAlt}
            width={800}
            height={700}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute right-4 top-4">
          <FavoriteButton label={animal.name} />
        </div>
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-700 backdrop-blur-sm">
          {animal.status}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-semibold text-stone-900">{animal.name}</h3>
            <p className="mt-1 text-sm text-stone-600">
              {animal.breed} • {animal.age}
            </p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
            {animal.species}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-stone-600">
          <span className="rounded-full bg-stone-100 px-2.5 py-1">{animal.gender}</span>
          <span className="rounded-full bg-stone-100 px-2.5 py-1">{animal.size}</span>
          <span className="rounded-full bg-stone-100 px-2.5 py-1">{animal.location}</span>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-stone-600">{animal.story}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <Link href={`/animals/${animal.slug}`} className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
            Meet {animal.name}
          </Link>
          <Link
            href={`/adopt?species=${encodeURIComponent(animal.species)}`}
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Adopt
          </Link>
        </div>
      </div>
    </article>
  );
}
