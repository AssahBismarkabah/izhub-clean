import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "IZHUB Cleaning Service is a local cleaning company serving Salisbury and the Salisbury Plain. Professional standards, clear communication, reliable delivery.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-5xl sm:text-6xl font-normal leading-[1.08] text-charcoal">
                About <span className="text-gradient font-medium">IZHUB</span>
              </h1>
              <p className="mt-4 text-lg text-body">
                A local cleaning company providing domestic, commercial,
                end-of-tenancy and march-out cleaning across Salisbury and surrounding areas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div className="group overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <Image
                  src="/domestic-izhubd2.png"
                  alt="IZHUB team member with professional cleaning equipment"
                  width={600}
                  height={700}
                  priority
                  className="object-cover w-full aspect-[4/5] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="text-sm font-medium text-muted tracking-wide">Our approach</p>
                <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
                  Professional cleaning, clear communication,{" "}
                  <span className="text-gradient font-medium">dependable delivery</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-8 space-y-5 text-base text-body">
                  <p>
                    IZHUB Cleaning Services serves tenants, landlords, letting agents,
                    homeowners, businesses, and military families across Tidworth, Bulford,
                    Larkhill, Amesbury, Andover, and the wider Salisbury Plain area.
                  </p>
                  <p>
                    We focus on delivering cleaning that meets handover and inspection
                    standards without unnecessary stress. Whether you need a regular
                    domestic clean, a thorough end-of-tenancy turnaround, or a
                    specialist march-out clean for military accommodation, we apply the
                    same professional approach every time.
                  </p>
                  <p>
                    Our team uses professional-grade equipment and products, works to a
                    structured method, and communicates clearly at every step. No
                    surprises, no shortcuts, just consistent results you can rely on.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <p className="text-sm font-medium text-muted tracking-wide">What we stand for</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
                Three <span className="text-gradient font-medium">principles</span>
              </h2>
            </ScrollReveal>

            <div className="mt-10 space-y-8">
              {[
                {
                  title: "Professional standards",
                  text: "We maintain high standards on every job. Professional-grade equipment, structured methods, and attention to the details that matter.",
                },
                {
                  title: "Clear communication",
                  text: "No surprises. Transparent quotes, open dialogue throughout, and we tell you exactly what to expect before we start.",
                },
                {
                  title: "Reliable delivery",
                  text: "We show up on time, every time, and deliver consistent results. Punctuality and dependability are not negotiable.",
                },
              ].map((pillar, i) => (
                <ScrollReveal key={pillar.title} delay={i * 0.08}>
                  <div>
                    <h3 className="text-lg font-medium text-charcoal">{pillar.title}</h3>
                    <p className="mt-2 text-base text-body">{pillar.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Military callout */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div className="group overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <Image
                  src="/Domestic-Cleaningd1.png"
                  alt="Clean living room in military accommodation"
                  width={600}
                  height={500}
                  className="object-cover w-full aspect-[5/4] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-sm font-medium text-muted tracking-wide">Military families</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
                We understand <span className="text-gradient font-medium">inspections</span>
              </h2>
              <p className="mt-5 text-base text-body">
                We know what inspectors look for and clean to that standard, so you
                pass first time without the stress. From cupboard interiors to
                commonly-inspected areas, we cover every detail.
              </p>
              <Link
                href="/services/military-cleaning"
                className="mt-6 inline-flex items-center gap-2 text-base font-medium text-charcoal hover:gap-3 transition-all"
              >
                Learn about military cleaning <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-normal text-charcoal">
                See what we can do <span className="text-gradient font-medium">for you</span>
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-base font-medium text-white hover:bg-charcoal transition-colors"
                >
                  Explore our services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
