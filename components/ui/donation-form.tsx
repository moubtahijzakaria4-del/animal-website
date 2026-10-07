"use client";

import { useMemo, useState } from "react";

const presetAmounts = [25, 50, 100, 250, 500];

export function DonationForm() {
  const [givingType, setGivingType] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");

  const chosenAmount = useMemo(() => {
    const value = customAmount ? Number(customAmount) : selectedAmount ?? 0;
    return Number.isFinite(value) && value > 0 ? value : 0;
  }, [customAmount, selectedAmount]);

  return (
    <div className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setGivingType("one-time")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            givingType === "one-time" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"
          }`}
        >
          One-time
        </button>
        <button
          type="button"
          onClick={() => setGivingType("monthly")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            givingType === "monthly" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"
          }`}
        >
          Monthly
        </button>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {presetAmounts.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount("");
            }}
            className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
              selectedAmount === amount && !customAmount
                ? "border-emerald-600 bg-emerald-50 text-emerald-900"
                : "border-stone-200 bg-white text-stone-700 hover:border-stone-300"
            }`}
          >
            ${amount}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <label htmlFor="custom-amount" className="mb-2 block text-sm font-medium text-stone-700">
          Custom amount
        </label>
        <div className="flex items-center rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
          <span className="mr-2 text-stone-500">$</span>
          <input
            id="custom-amount"
            type="number"
            min="5"
            placeholder="Enter amount"
            value={customAmount}
            onChange={(event) => {
              setCustomAmount(event.target.value);
              setSelectedAmount(null);
            }}
            className="w-full border-0 bg-transparent text-base text-stone-900 outline-none"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="purpose" className="mb-2 block text-sm font-medium text-stone-700">
            Donation purpose
          </label>
          <select
            id="purpose"
            defaultValue="General care"
            className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500"
          >
            <option>General care</option>
            <option>Emergency medical care</option>
            <option>Foster support</option>
            <option>Adoption assistance</option>
            <option>Food and supplies</option>
          </select>
        </div>
        <div>
          <label htmlFor="frequency" className="mb-2 block text-sm font-medium text-stone-700">
            Frequency
          </label>
          <select
            id="frequency"
            value={givingType}
            onChange={(event) => setGivingType(event.target.value as "one-time" | "monthly")}
            className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500"
          >
            <option value="one-time">One-time</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-stone-100 p-4">
        <div className="flex items-center justify-between text-sm text-stone-700">
          <span>Your gift</span>
          <span className="text-xl font-semibold text-stone-900">${chosenAmount.toLocaleString()}</span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-stone-700">
            First name
          </label>
          <input
            id="first-name"
            type="text"
            placeholder="Jordan"
            className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-stone-700">
            Last name
          </label>
          <input
            id="last-name"
            type="text"
            placeholder="Lee"
            className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500"
        />
      </div>

      <button type="submit" className="mt-8 w-full rounded-full bg-emerald-700 px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800">
        Give {givingType === "monthly" ? "Monthly" : "Today"}
      </button>

      <p className="mt-4 text-center text-xs text-stone-500">Secure donation processing. Your generosity directly supports care and adoption success.</p>
    </div>
  );
}
