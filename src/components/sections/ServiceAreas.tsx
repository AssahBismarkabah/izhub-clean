import Link from "next/link";
import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceAreas() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
          <ScrollReveal className="lg:col-span-2">
            <p className="text-sm font-medium text-muted tracking-wide">
              Service areas
            </p>
            <h2 className="mt-3 text-3xl font-normal text-charcoal">
              <span className="text-gradient font-medium">Local</span> to you
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              We serve Tidworth and the surrounding Salisbury Plain area. Not
              sure if we cover your location?{" "}
              <Link href="/contact" className="font-medium text-charcoal underline underline-offset-4 decoration-border hover:decoration-charcoal transition-colors">
                Just ask
              </Link>
              .
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <div className="flex flex-wrap gap-3">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-medium text-charcoal"
                >
                  <MapPin className="h-3.5 w-3.5 text-muted" />
                  {area}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
