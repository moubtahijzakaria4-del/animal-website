import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">This page isn’t available.</h1>
      <p className="mt-5 text-base leading-7 text-stone-600">
        The pet, story, or page you’re looking for may have moved.
      </p>
      <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
        Return home
      </Link>
    </main>
  );
}
