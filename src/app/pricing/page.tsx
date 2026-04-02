import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { pricing } from "@/data/services";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent cleaning prices. Domestic from £21/hr, end-of-tenancy from £160. No hidden fees. Tidworth and surrounding areas.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-5xl sm:text-6xl font-normal leading-[1.08] text-charcoal">
                <span className="text-gradient font-medium">Transparent</span> pricing
              </h1>
              <p className="mt-4 text-lg text-body">
                No hidden fees, no surprises. All prices are starting from, with
                final quotes based on property assessment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Domestic */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="text-sm font-medium text-muted tracking-wide">Regular cleaning</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
                Domestic cleaning
              </h2>
              <p className="mt-4 text-base text-body">
                Regular, one-off, and deep cleaning for homes and apartments.
                Minimum 2.5 hours per visit.
              </p>
              <Link
                href="/services/domestic-cleaning"
                className="mt-4 inline-flex items-center gap-2 text-base font-medium text-charcoal hover:gap-3 transition-all"
              >
                View service details <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                {pricing.domestic.map((row, i) => (
                  <div key={row.frequency} className="flex items-baseline justify-between">
                    <div>
                      <p className="text-lg font-medium text-charcoal">{row.frequency}</p>
                      <p className="text-sm text-muted">Min. {row.minimum}</p>
                    </div>
                    <span className="text-2xl font-normal text-charcoal">{row.rate}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* End of Tenancy */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="text-sm font-medium text-muted tracking-wide">Move-out cleaning</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
                End of tenancy
              </h2>
              <p className="mt-4 text-base text-body">
                Inspection-ready cleaning for tenants, landlords and letting agents.
                Top-to-bottom, every room.
              </p>
              <Link
                href="/services/end-of-tenancy"
                className="mt-4 inline-flex items-center gap-2 text-base font-medium text-charcoal hover:gap-3 transition-all"
              >
                View service details <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                {pricing.endOfTenancy.map((row) => (
                  <div key={row.bedrooms} className="flex items-baseline justify-between">
                    <span className="text-lg text-charcoal">{row.bedrooms}</span>
                    <span className="text-2xl font-normal text-charcoal">{row.price}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-3">
              <div className="overflow-hidden rounded-[16px]">
                <Image src="/domestic-cleaning11.jpeg" alt="Clean kitchen" width={400} height={300} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="overflow-hidden rounded-[16px]">
                <Image src="/cleaning-image-home.png" alt="Clean bedroom" width={400} height={300} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="overflow-hidden rounded-[16px]">
                <Image src="/domestic-cleaning9.jpeg" alt="Clean bathroom" width={400} height={300} className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="text-sm font-medium text-muted tracking-wide">Extras</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
                Add-on services
              </h2>
              <p className="mt-4 text-base text-body">
                Available alongside any of our core services. Just add them when you
                request your quote.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-5">
                {pricing.addOns.map((row) => (
                  <div
                    key={row.name}
                    className="flex items-baseline justify-between"
                  >
                    <span className="text-lg text-charcoal">{row.name}</span>
                    <span className="text-xl font-normal text-charcoal">{row.price}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Commercial + Military */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-[20px] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <p className="text-sm font-medium text-muted tracking-wide">Custom pricing</p>
                <h3 className="mt-2 text-2xl font-normal text-charcoal">Commercial cleaning</h3>
                <p className="mt-3 text-base text-body">
                  Every workspace is different. Contact us for a tailored quote
                  based on your space and schedule.
                </p>
                <Link
                  href="/quote"
                  className="mt-5 inline-flex items-center gap-2 text-base font-medium text-charcoal hover:gap-3 transition-all"
                >
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="rounded-[20px] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <p className="text-sm font-medium text-muted tracking-wide">Custom pricing</p>
                <h3 className="mt-2 text-2xl font-normal text-charcoal">Military accommodation</h3>
                <p className="mt-3 text-base text-body">
                  We understand the inspection process. Get in touch for a quote
                  specific to your situation.
                </p>
                <Link
                  href="/quote"
                  className="mt-5 inline-flex items-center gap-2 text-base font-medium text-charcoal hover:gap-3 transition-all"
                >
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-normal text-charcoal">
                Get your <span className="text-gradient font-medium">free quote</span> today
              </h2>
              <p className="mt-4 text-base text-body">
                We respond within 2 hours, often sooner.
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
