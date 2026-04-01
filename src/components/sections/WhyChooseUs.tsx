import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";

const trustItems = [
  "Fully insured",
  "Transparent pricing",
  "Reliable & punctual",
  "Professional equipment",
  "Extras available (oven, carpet, fridge)",
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Trust strip */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-base text-charcoal"
              >
                <Check className="h-4 w-4 text-green-600" strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Military specialist callout */}
        <ScrollReveal>
          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="group overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <Image
                  src="/cleaning-image-bathroom.png"
                  alt="Spotless inspection-ready accommodation"
                  width={600}
                  height={500}
                  className="object-cover w-full aspect-[5/4] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted tracking-wide">
                What makes us different
              </p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
                March-out cleaning{" "}
                <span className="text-gradient font-medium">specialists</span>
              </h2>
              <p className="mt-5 text-base leading-normal text-body">
                We understand military accommodation inspections inside and out.
                Our team knows exactly what inspectors look for and cleans to
                that standard, so you pass first time without the stress.
              </p>
              <p className="mt-4 text-base leading-normal text-body">
                From cupboard interiors to commonly-inspected areas, we cover
                every detail. Trusted by service families across Tidworth,
                Bulford, and Larkhill.
              </p>
              <Link
                href="/services/military-cleaning"
                className="mt-7 inline-flex items-center gap-2 text-base font-medium text-charcoal hover:gap-3 transition-all"
              >
                Learn about military cleaning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
