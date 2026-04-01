import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";

const steps = [
  {
    title: "Tell us about your property.",
    description:
      "Share your details and preferred dates. No lengthy forms, just the essentials.",
  },
  {
    title: "Get a clear price within 2 hours.",
    description:
      "Transparent, no-obligation. The price you see is the price you pay.",
  },
  {
    title: "We arrive on time. You enjoy the results.",
    description:
      "Professional equipment, thorough approach, consistent results.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <ScrollReveal>
            <p className="text-sm font-medium text-muted tracking-wide">
              How it works
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
              Simple from start{" "}
              <span className="text-gradient font-medium">to spotless</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              No complicated booking process. No hidden fees. Just reliable
              cleaning in three straightforward steps.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-base font-medium text-white hover:bg-charcoal transition-colors"
            >
              Start now, takes 2 minutes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>

          {/* Right: simple text timeline */}
          <div className="relative pl-8 lg:pl-10">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative">
                    {/* Dot on the line */}
                    <div className="absolute -left-8 lg:-left-10 top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-red-400 via-orange-400 to-purple-400 ring-4 ring-surface" />
                    <h3 className="text-lg font-medium text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-base leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
