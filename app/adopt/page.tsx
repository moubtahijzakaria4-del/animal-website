import { AnimalCard } from "@/components/ui/animal-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { animals } from "@/data/animals";

const speciesOptions = ["All", "Dog", "Cat", "Rabbit", "Bird", "Other"] as const;
const ageOptions = ["All", "Puppy", "Young", "Adult", "Senior"] as const;
const sizeOptions = ["All", "Small", "Medium", "Large"] as const;
const statusOptions = ["All", "Available", "Pending"] as const;
const locations = ["All", "Portland, OR", "Seattle, WA", "Spokane, WA", "Bend, OR", "Tacoma, WA", "Boise, ID", "Eugene, OR", "Denver, CO", "Vancouver, WA"] as const;

function normalizeValue(value: unknown) {
  if (Array.isArray(value)) return value[0] ?? "All";
  return typeof value === "string" ? value : "All";
}

export default async function AdoptPage({ searchParams }: { searchParams?: Promise<Record<string, string | string[] | undefined>> }) {
  const params = (await searchParams) ?? {};

  const species = normalizeValue(params.species) ?? "All";
  const age = normalizeValue(params.age) ?? "All";
  const gender = normalizeValue(params.gender) ?? "All";
  const size = normalizeValue(params.size) ?? "All";
  const location = normalizeValue(params.location) ?? "All";
  const status = normalizeValue(params.status) ?? "All";
  const sort = normalizeValue(params.sort) ?? "featured";

  let filtered = animals.filter((animal) => {
    const matchesSpecies = species === "All" || animal.species === species;
    const matchesAge = age === "All" || animal.age.includes(age === "Puppy" ? "months" : age === "Young" ? "year" : age === "Adult" ? "years" : "years") || (age === "Adult" && animal.age.includes("5") ? true : false);
    const matchesGender = gender === "All" || animal.gender === gender;
    const matchesSize = size === "All" || animal.size === size;
    const matchesLocation = location === "All" || animal.location === location;
    const matchesStatus = status === "All" || animal.status === status;
    return matchesSpecies && matchesAge && matchesGender && matchesSize && matchesLocation && matchesStatus;
  });

  if (sort === "name-asc") {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "name-desc") {
    filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort === "age-youngest") {
    filtered = [...filtered].sort((a, b) => parseInt(a.age, 10) - parseInt(b.age, 10));
  } else if (sort === "largest") {
    filtered = [...filtered].sort((a, b) => (b.size === "Large" ? 3 : b.size === "Medium" ? 2 : 1) - (a.size === "Large" ? 3 : a.size === "Medium" ? 2 : 1));
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Adopt"
        title="Meet the animals ready for a fresh start."
        description="Browse available companions by temperament, age, size, and location to find the right match for your home."
      />

      <form method="get" className="mt-10 rounded-[30px] border border-stone-200 bg-white p-5 shadow-[0_18px_44px_rgba(15,23,42,0.04)]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          <label className="flex flex-col gap-2 text-sm text-stone-700">
            <span>Species</span>
            <select name="species" defaultValue={species} className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500">
              {speciesOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm text-stone-700">
            <span>Age</span>
            <select name="age" defaultValue={age} className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500">
              {ageOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm text-stone-700">
            <span>Gender</span>
            <select name="gender" defaultValue={gender} className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500">
              <option value="All">All</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm text-stone-700">
            <span>Size</span>
            <select name="size" defaultValue={size} className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500">
              {sizeOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm text-stone-700">
            <span>Location</span>
            <select name="location" defaultValue={location} className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500">
              {locations.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm text-stone-700">
            <span>Status</span>
            <select name="status" defaultValue={status} className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500">
              {statusOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm text-stone-700">
            <span>Sort</span>
            <select name="sort" defaultValue={sort} className="rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500">
              <option value="featured">Featured</option>
              <option value="name-asc">Name A–Z</option>
              <option value="name-desc">Name Z–A</option>
              <option value="age-youngest">Youngest first</option>
              <option value="largest">Largest first</option>
            </select>
          </label>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button type="submit" className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800">
            Apply filters
          </button>
          <a href="/adopt" className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:bg-stone-50">
            Reset
          </a>
        </div>
      </form>

      <div className="mt-10 flex items-center justify-between gap-3">
        <p className="text-sm text-stone-600">{filtered.length} animals match your search</p>
        <p className="text-sm text-stone-500">Updated this week</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((animal) => <AnimalCard key={animal.slug} animal={animal} />)
        ) : (
          <div className="rounded-[28px] border border-dashed border-stone-300 bg-stone-50 p-10 text-center text-stone-600 lg:col-span-3">
            No animals match those filters right now. Try broadening your search or check back soon.
          </div>
        )}
      </div>
    </main>
  );
}
