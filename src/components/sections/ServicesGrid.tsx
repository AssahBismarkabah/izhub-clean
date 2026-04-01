"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { services } from "@/data/services";

const serviceImages: Record<string, string> = {
  "domestic-cleaning": "/cleaning-image-d1.png",
  "end-of-tenancy": "/cleaning-image-d2.png",
  "commercial-cleaning": "/cleaning-image-office.png",
  "military-cleaning": "/cleaning-image-bathroom.png",
};

export function ServicesGrid() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium text-muted tracking-wide">
              What we do
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
              Cleaning services for{" "}
              <span className="text-gradient font-medium">every situation</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.08}>
              <Link
                href={service.href}
                className="group block overflow-hidden rounded-[20px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={serviceImages[service.slug]}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                  {service.startingPrice && (
                    <span className="absolute bottom-4 left-4 rounded-lg bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-sm font-medium text-charcoal shadow-sm">
                      {service.startingPrice}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-medium text-charcoal">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
