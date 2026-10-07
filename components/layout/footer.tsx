import Link from "next/link";

const footerLinks = {
  Explore: [
    { href: "/adopt", label: "Adopt" },
    { href: "/donate", label: "Donate" },
    { href: "/stories", label: "Success stories" },
    { href: "/blog", label: "Blog & news" },
  ],
  "Get Involved": [
    { href: "/volunteer", label: "Volunteer" },
    { href: "/foster", label: "Foster" },
    { href: "/donate/monthly", label: "Monthly giving" },
    { href: "/locations", label: "Locations" },
  ],
  About: [
    { href: "/about", label: "Our mission" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
    { href: "/search", label: "Search" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                A
              </div>
              <div>
                <div className="text-lg font-semibold text-white">Animal Haven</div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-stone-400">Rescue & adoption</div>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-stone-300">
              We are a regional animal welfare organization helping pets and people thrive together through rescue,
              adoption, fostering, and compassionate care.
            </p>
            <div className="mt-7 flex gap-3 text-sm text-stone-300">
              <span>Portland, OR</span>
              <span>•</span>
              <span>(503) 555-0144</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">{heading}</h3>
              <ul className="mt-5 space-y-3 text-sm text-stone-300">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-stone-800 pt-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Animal Haven. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
