import { locations } from "@/data/locations";

export default function LocationsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Locations</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Find support, care, and adoptions near you.</h1>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {locations.map((location) => (
          <article key={location.name} className="rounded-[30px] border border-stone-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
            <div className="text-xl font-semibold text-stone-900">{location.name}</div>
            <div className="mt-3 text-sm text-stone-600">{location.city}</div>
            <div className="mt-5 space-y-3 text-sm leading-7 text-stone-700">
              <p>{location.address}</p>
              <p>{location.phone}</p>
              <p>{location.hours}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {location.services.map((service) => (
                <span key={service} className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800">
                  {service}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
