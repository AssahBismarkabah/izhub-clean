import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Share your details",
    description: "Tell us about your property, the service you need, and your preferred dates.",
  },
  {
    number: "02",
    title: "Get a clear quote",
    description: "We respond within 2 hours with a transparent, no-obligation price.",
  },
  {
    number: "03",
    title: "We handle the rest",
    description: "Our team arrives on time with professional equipment. You enjoy the results.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <ScrollReveal>
            <p className="text-sm font-medium text-muted tracking-wide">
              How it works
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-normal text-charcoal">
              Simple from start{" "}
              <span className="text-gradient font-medium">to spotless</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              No complicated booking process. No hidden fees. Just reliable
              cleaning in three straightforward steps.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-[15px] font-medium text-white hover:bg-charcoal transition-colors"
            >
              Start now, takes 2 minutes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>

          {/* Right */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.12}>
                <div className="group rounded-2xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <div className="flex gap-5">
                    <span className="text-2xl font-normal text-gradient shrink-0">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-charcoal">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
