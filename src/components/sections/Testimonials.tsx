import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";

const guarantees = [
  "Fully insured with public liability coverage",
  "Professional-grade equipment and products",
  "Consistent, inspection-ready results",
  "We re-clean free if you're not satisfied",
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-normal text-charcoal">
              Our{" "}
              <span className="text-gradient font-medium">promise</span> to you
            </h2>
            <div className="mt-8 inline-flex flex-col items-start gap-4 text-left">
              {guarantees.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check
                    className="h-4 w-4 shrink-0 text-green-600"
                    strokeWidth={2.5}
                  />
                  <span className="text-[15px] text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
