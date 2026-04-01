import Link from "next/link";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function ServiceAreas() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-muted tracking-wide">
              Areas we cover
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-normal text-charcoal">
              Based in{" "}
              <span className="text-gradient font-medium">Tidworth</span>
            </h2>
            <p className="mt-5 text-[15px] leading-normal text-muted">
              We provide professional cleaning services in Tidworth,
              Bulford, Larkhill, Amesbury, Ludgershall, Andover,
              and across the wider Salisbury Plain area.
            </p>
            <p className="mt-4 text-sm text-muted">
              Not sure if we cover your location?{" "}
              <Link
                href="/contact"
                className="font-medium text-charcoal underline underline-offset-4 decoration-border hover:decoration-charcoal transition-colors"
              >
                Just ask
              </Link>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
