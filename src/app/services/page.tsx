import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description:
    "Domestic, end-of-tenancy, commercial, and military accommodation cleaning services in Tidworth and surrounding areas.",
};

const serviceImages: Record<string, string> = {
  "domestic-cleaning": "/cleaning-image-d1.png",
  "end-of-tenancy": "/cleaning-image-d2.png",
  "commercial-cleaning": "/cleaning-image-office.png",
  "military-cleaning": "/cleaning-image-home.png",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-surface pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-5xl sm:text-6xl font-normal leading-[1.08] text-charcoal">
                Our <span className="text-gradient font-medium">services</span>
              </h1>
              <p className="mt-4 text-lg text-body">
                From regular home cleaning to specialist military march-out
                preparation. Fully insured, transparent pricing, inspection-ready results.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.08}>
                <Link
                  href={service.href}
                  className="group flex flex-col h-full overflow-hidden rounded-[20px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={serviceImages[service.slug]}
                      alt={service.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      loading={i < 2 ? "eager" : "lazy"}
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    {service.startingPrice && (
                      <span className="absolute bottom-4 left-4 rounded-lg bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-sm font-medium text-charcoal shadow-sm">
                        {service.startingPrice}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex-1">
                    <h2 className="text-lg font-medium text-charcoal">{service.name}</h2>
                    <p className="mt-2 text-base leading-normal text-body">
                      {service.shortDescription}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="mt-10 text-center text-base text-body">
              We also offer oven cleaning, carpet cleaning, and fridge cleaning as extras with any service.
              <br />
              <Link href="/pricing" className="font-medium text-charcoal underline underline-offset-4 decoration-border hover:decoration-charcoal transition-colors">
                View all pricing
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
