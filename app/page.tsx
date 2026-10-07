import Image from "next/image";
import Link from "next/link";
import { AnimalCard } from "@/components/ui/animal-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { animals } from "@/data/animals";
import { articles, successStories } from "@/data/articles";

const metrics = [
  { value: "2,840", label: "pets rescued this year" },
  { value: "91%", label: "placement success rate" },
  { value: "1,240", label: "active volunteers" },
  { value: "18", label: "community programs" },
];

const featuredAnimals = animals.filter((animal) => animal.featured).slice(0, 3);

export default function HomePage() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden bg-stone-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.14),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
              Compassion in action
            </div>
            <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.06em] text-stone-900 sm:text-5xl lg:text-6xl">
              Every animal deserves a safe place to land.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              We rescue, heal, and rehome animals in need while making sure the people who care for them feel supported, informed, and empowered.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/adopt">Adopt</Button>
              <Button href="/donate" variant="secondary">
                Donate
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-stone-600">
              <div>
                <div className="text-2xl font-semibold text-stone-900">1,800+</div>
                <div>animals placed</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-stone-900">24/7</div>
                <div>emergency response</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_35px_80px_rgba(15,23,42,0.18)]">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80"
                alt="A dog looking up with bright, hopeful eyes"
                width={1200}
                height={1400}
                className="h-[620px] w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-[26px] border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">Ready now</p>
                  <p className="mt-2 text-2xl font-semibold text-stone-900">143 pets</p>
                </div>
                <Link href="/adopt" className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-700">
                  Browse animals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Featured animals"
          title="Meet the companions waiting for their next chapter."
          description="We take a thoughtful approach to matching pets and people so every adoption has a stronger chance of success."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredAnimals.map((animal) => (
            <AnimalCard key={animal.slug} animal={animal} />
          ))}
        </div>
      </section>

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Our impact"
            title="A stronger safety net for pets and people."
            description="By combining rescue care, foster support, and community programs, we help animals recover and thrive."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-4xl font-semibold tracking-tight text-white">{metric.value}</div>
                <div className="mt-2 text-sm text-stone-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80"
              alt="Adopter meeting a dog during the adoption process"
              width={1200}
              height={1000}
              className="h-full min-h-[440px] w-full object-cover"
            />
          </div>
          <div className="rounded-[30px] bg-emerald-50 p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">Adoption process</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900">Thoughtful matching for lasting homes.</h2>
            <div className="mt-8 space-y-6">
              {[
                "Share your home, routine, and goals with our adoption team.",
                "Meet thoughtfully matched animals who fit your lifestyle.",
                "Receive guidance and support as your new companion settles in.",
              ].map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1.5 text-base leading-7 text-stone-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Volunteer"
                title="Build community, one gentle act at a time."
                description="From dog walking to events and enrichment, our volunteers help animals feel calm, safe, and cared for throughout their journeys."
              />
              <div className="flex flex-wrap gap-4">
                <Button href="/volunteer">Volunteer with us</Button>
                <Button href="/locations" variant="secondary">
                  Find a location
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Dog walking", text: "Boost socialization and confidence." },
                { label: "Cat care", text: "Support enrichment and comfort." },
                { label: "Event support", text: "Help our community events run seamlessly." },
                { label: "Transport", text: "Move animals safely to care and foster homes." },
              ].map((item) => (
                <div key={item.label} className="rounded-[28px] border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">{item.label}</div>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
            <Image
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80"
              alt="Happy dog resting in a foster home"
              width={1200}
              height={900}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Foster care"
              title="Open your home to a pet in transition."
              description="Foster homes provide the structure and comfort animals need to decompress, build confidence, and prepare for adoption."
            />
            <ul className="space-y-4 text-base leading-7 text-stone-700">
              <li>• Flexible short-term placements with experienced support.</li>
              <li>• Essential supplies and guidance provided by our team.</li>
              <li>• A direct way to help animals move more quickly into stable homes.</li>
            </ul>
            <Button href="/foster">Become a foster</Button>
          </div>
        </div>
      </section>

      <section className="bg-emerald-700 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-100">Give today</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Help us provide food, medical care, and safe shelter.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-emerald-50">
              Every contribution creates room for rescue, recovery, and a healthier future for animals reaching out for help.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/donate" className="bg-white text-emerald-800 hover:bg-emerald-50">Donate</Button>
              <Button href="/donate/monthly" variant="secondary" className="border-emerald-300 bg-emerald-700 text-white hover:border-emerald-200 hover:bg-emerald-800">
                Monthly giving
              </Button>
            </div>
          </div>
          <div className="rounded-[32px] border border-emerald-500/40 bg-white/10 p-6 backdrop-blur-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-3xl font-semibold">$65</div>
                <div className="mt-2 text-sm text-emerald-50">week of food and litter</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-3xl font-semibold">$180</div>
                <div className="mt-2 text-sm text-emerald-50">essential medical care</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-3xl font-semibold">$325</div>
                <div className="mt-2 text-sm text-emerald-50">foster care supplies</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-3xl font-semibold">$500</div>
                <div className="mt-2 text-sm text-emerald-50">emergency transport</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Success stories"
          title="Loved, healed, and home again."
          description="Our community sees the impact of compassionate care every day."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {successStories.map((story) => (
            <article key={story.name} className="overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
              <Image src={story.image} alt={story.imageAlt} width={900} height={700} className="h-72 w-full object-cover" />
              <div className="p-6">
                <p className="text-base leading-7 text-stone-700">“{story.quote}”</p>
                <div className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">{story.name}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Latest news"
            title="Updates from our rescue, care, and community work."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {articles.slice(0, 4).map((article) => (
              <article key={article.slug} className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm">
                <Image src={article.image} alt={article.imageAlt} width={900} height={600} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">{article.category}</div>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-stone-900">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{article.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-stone-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-[34px] bg-stone-900 px-5 py-10 text-white sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">Stay connected</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Join our newsletter for rescue updates and events.</h2>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-base text-white placeholder:text-stone-300 outline-none focus:border-emerald-400"
              />
              <button type="submit" className="rounded-full bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-500">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
