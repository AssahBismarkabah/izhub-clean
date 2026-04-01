"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium text-muted tracking-wide">
              What we do
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-normal text-charcoal">
              Cleaning services for{" "}
              <span className="text-gradient font-medium">every situation</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.08}>
              <Link
                href={service.href}
                className="group relative flex flex-col rounded-2xl border border-border bg-white p-7 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface">
                    <service.icon className="h-5 w-5 text-charcoal/60" />
                  </div>
                  {service.startingPrice && (
                    <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-charcoal">
                      {service.startingPrice}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-xl font-medium text-charcoal">
                  {service.name}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {service.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal group-hover:gap-2.5 transition-all">
                  View details
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
