import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  ShieldCheck,
  BadgePoundSterling,
  Clock,
  Award,
  Sparkles,
  Leaf,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Fully insured",
    description: "Public liability coverage on every job. Your property is protected.",
  },
  {
    icon: BadgePoundSterling,
    title: "Transparent pricing",
    description: "You know the cost before we start. No extras, no hidden charges.",
  },
  {
    icon: Clock,
    title: "Reliable & punctual",
    description: "We show up on time, every time. Consistency you can count on.",
  },
  {
    icon: Award,
    title: "Military specialist",
    description: "We know what inspectors look for. March-out ready, first time.",
  },
  {
    icon: Sparkles,
    title: "Professional-grade",
    description: "Commercial equipment and products, not off-the-shelf sprays.",
  },
  {
    icon: Leaf,
    title: "Eco options available",
    description: "Environmentally conscious products on request, at no extra cost.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium text-muted tracking-wide">
              Why IZHUB
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-normal text-charcoal">
              Built on{" "}
              <span className="text-gradient font-medium">standards</span>,
              not shortcuts
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.06}>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-surface">
                  <feature.icon className="h-5 w-5 text-charcoal/60" />
                </div>
                <h3 className="mt-4 text-base font-medium text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
