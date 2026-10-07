const faqs = [
  {
    question: "How do I adopt an animal?",
    answer:
      "Start by browsing our adoption listings, then submit an inquiry or application. We review your home and lifestyle to match you with the right pet.",
  },
  {
    question: "Do I need to be a resident of the area to foster?",
    answer:
      "Foster opportunities are open to local households who can meet care needs and provide a safe, stable home environment. Some roles may have geographic requirements.",
  },
  {
    question: "Can I volunteer even if I have a busy schedule?",
    answer:
      "Yes. We offer a variety of volunteer roles with different time commitments, including recurring shifts and special-event support.",
  },
  {
    question: "How are animals matched to adopters?",
    answer:
      "We consider factors like age, lifestyle, energy level, and household structure to look for a strong long-term fit for both the pet and the adopter.",
  },
  {
    question: "How are donations used?",
    answer:
      "Gifts support emergency care, food, enrichment, transportation, foster supplies, and adoption programming across our organization.",
  },
];

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">FAQ</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Answers to common questions.</h1>
      </div>

      <div className="mt-12 space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm" open={faq.question === "How do I adopt an animal?"}>
            <summary className="cursor-pointer list-none text-lg font-semibold text-stone-900">
              {faq.question}
            </summary>
            <p className="mt-4 text-base leading-7 text-stone-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
