"use client";

import { useState } from "react";

export function FavoriteButton({ label }: { label: string }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      type="button"
      aria-label={`${isFavorite ? "Remove from favorites" : "Add to favorites"} for ${label}`}
      aria-pressed={isFavorite}
      onClick={() => setIsFavorite((current) => !current)}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
        isFavorite
          ? "border-rose-200 bg-rose-50 text-rose-600"
          : "border-stone-200 bg-white text-stone-500 hover:border-stone-300 hover:text-stone-700"
      }`}
    >
      <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
    </button>
  );
}
