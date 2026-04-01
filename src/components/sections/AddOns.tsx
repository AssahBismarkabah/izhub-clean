import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { addOns } from "@/data/services";

export function AddOns() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <ScrollReveal>
            <Image
              src="/cleaning-image.png"
              alt="Professional oven cleaning"
              width={600}
              height={700}
              className="rounded-[20px] object-cover w-full aspect-[4/5] shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            />
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.1}>
            <p className="text-sm font-medium text-muted tracking-wide">
              Add-on services
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-normal text-charcoal">
              Enhance any clean with{" "}
              <span className="text-gradient font-medium">extras</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Available alongside any of our core services. Just add them when
              you request your quote.
            </p>

            <div className="mt-8 space-y-3">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface">
                    <addon.icon className="h-5 w-5 text-charcoal/50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-medium text-charcoal">
                      {addon.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted truncate">
                      {addon.description}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-charcoal shrink-0">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-[15px] font-medium text-white hover:bg-charcoal transition-colors"
            >
              Add to your quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
