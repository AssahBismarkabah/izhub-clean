import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { services, pricing } from "@/data/services";
import { CONTACT } from "@/lib/constants";
import { notFound } from "next/navigation";

const galleryImages: Record<string, { src: string; alt: string }[]> = {
  "domestic-cleaning": [
    { src: "/Domestic-Cleaningd3.png", alt: "Clean kitchen" },
    { src: "/Domestic-Cleaningd4.png", alt: "Clean bedroom" },
    { src: "/domestic-cleaning8.jpeg", alt: "Kitchen worktops and appliances" },
  ],
  "end-of-tenancy": [
    { src: "/Domestic-Cleaningd1.png", alt: "Clean living room ready for inspection" },
    { src: "/domestic-cleaningd6.png", alt: "Clean hallway" },
    { src: "/domestic-cleaning9.jpeg", alt: "Clean bathroom" },
  ],
  "commercial-cleaning": [
    { src: "/cleaning-image-office.png", alt: "Clean office workspace" },
    { src: "/cleaning-image.png", alt: "Professional cleaning in action" },
  ],
  "military-cleaning": [
    { src: "/cleaning-image-home.png", alt: "Bedroom with hotel-quality finish" },
    { src: "/Domestic-Cleaningd1.png", alt: "Clean living room" },
    { src: "/domestic-cleaing12.jpeg", alt: "Clean bathroom with attention to detail" },
  ],
};

const serviceImages: Record<string, string> = {
  "domestic-cleaning": "/cleaning-image-d1.png",
  "end-of-tenancy": "/cleaning-image-d2.png",
  "commercial-cleaning": "/cleaning-image-office.png",
  "military-cleaning": "/cleaning-image-home.png",
};

function getPricingForService(slug: string) {
  if (slug === "domestic-cleaning") return { type: "domestic" as const, data: pricing.domestic };
  if (slug === "end-of-tenancy") return { type: "endOfTenancy" as const, data: pricing.endOfTenancy };
  return null;
}

export function ServiceDetail({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const pricingData = getPricingForService(slug);
  const image = serviceImages[slug];

  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <nav className="text-sm text-muted mb-6">
              <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-charcoal transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-charcoal">{service.shortName}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-charcoal">
              {service.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-body">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-base font-medium text-white hover:bg-charcoal transition-colors"
              >
                Get a free quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={CONTACT.whatsappWithMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-base font-medium text-charcoal hover:bg-white transition-colors"
              >
                WhatsApp us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-medium text-muted tracking-wide">What&apos;s included</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
              A <span className="text-gradient font-medium">thorough</span> clean, every time
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {service.inclusions.map((category, i) => (
              <ScrollReveal key={category.category} delay={i * 0.08}>
                <div>
                  <h3 className="text-lg font-medium text-charcoal">{category.category}</h3>
                  <ul className="mt-3 space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-base text-body">{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing (if available) */}
      {pricingData && (
        <section className="bg-surface py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-sm font-medium text-muted tracking-wide">Pricing</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
                <span className="text-gradient font-medium">Transparent</span> pricing
              </h2>
              <p className="mt-3 text-base text-body">
                All prices are starting from. Final quote based on property assessment.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-8 max-w-xl space-y-6">
                {pricingData.type === "domestic" &&
                  pricingData.data.map((row) => (
                    <div
                      key={row.frequency}
                      className="flex items-baseline justify-between"
                    >
                      <div>
                        <p className="text-lg font-medium text-charcoal">{row.frequency}</p>
                        <p className="text-sm text-muted">Min. {row.minimum}</p>
                      </div>
                      <span className="text-2xl font-normal text-charcoal">{row.rate}</span>
                    </div>
                  ))}
                {pricingData.type === "endOfTenancy" &&
                  pricingData.data.map((row) => (
                    <div
                      key={row.bedrooms}
                      className="flex items-baseline justify-between"
                    >
                      <span className="text-lg text-charcoal">{row.bedrooms}</span>
                      <span className="text-2xl font-normal text-charcoal">{row.price}</span>
                    </div>
                  ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* No pricing for commercial/military - show custom quote card */}
      {!pricingData && (
        <section className="bg-surface py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-xl">
                <p className="text-sm font-medium text-muted tracking-wide">Pricing</p>
                <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
                  <span className="text-gradient font-medium">Tailored</span> to you
                </h2>
                <p className="mt-4 text-base text-body">
                  Every space is different. Get in touch and we will provide a clear,
                  no-obligation quote based on your specific requirements.
                </p>
                <Link
                  href="/quote"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-base font-medium text-white hover:bg-charcoal transition-colors"
                >
                  Request a quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Gallery (if available) */}
      {galleryImages[slug] && (
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-sm font-medium text-muted tracking-wide">Our work</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
                Real <span className="text-gradient font-medium">results</span>
              </h2>
            </ScrollReveal>
            <div className="mt-10 grid gap-3 grid-cols-2 lg:grid-cols-3">
              {galleryImages[slug].map((img, i) => (
                <ScrollReveal key={img.src} delay={i * 0.06}>
                  <div className="group overflow-hidden rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-normal text-charcoal">
                Ready to book your{" "}
                <span className="text-gradient font-medium">{service.shortName.toLowerCase()}</span> clean?
              </h2>
              <p className="mt-4 text-base text-body">
                Fully insured &middot; No hidden fees &middot; We respond within 2 hours
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-base font-medium text-white hover:bg-charcoal transition-colors"
                >
                  Get your free quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={CONTACT.whatsappWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-medium text-charcoal hover:bg-surface transition-colors"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
