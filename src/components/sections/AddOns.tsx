import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";

const addOns = [
  { name: "Oven deep clean", description: "Grease, burnt-on residue, internal glass and shelves", price: "From £50" },
  { name: "Carpet cleaning", description: "Per-room stain treatment and deodorising", price: "From £40/room" },
  { name: "Fridge cleaning", description: "Internal shelves and compartment sanitation", price: "From £20" },
  { name: "Freezer cleaning", description: "Full defrost and internal deep clean", price: "From £25" },
  { name: "Fridge-freezer combo", description: "Both units, complete internal clean", price: "From £35" },
];

export function AddOns() {
  return (
    <section className="bg-white py-24 lg:py-32">
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

          {/* Menu-style list */}
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

            {/* Menu list */}
            <div className="mt-8 divide-y divide-border">
              {addOns.map((item) => (
                <div key={item.name} className="flex items-baseline justify-between gap-4 py-4">
                  <div className="min-w-0">
                    <p className="text-[15px] font-medium text-charcoal">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-charcoal whitespace-nowrap">
                    {item.price}
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
