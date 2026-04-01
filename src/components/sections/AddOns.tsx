import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";

const addOns = [
  { name: "Oven deep clean", price: "From £50" },
  { name: "Carpet cleaning", price: "From £40/room" },
  { name: "Fridge cleaning", price: "From £20" },
  { name: "Freezer cleaning", price: "From £25" },
  { name: "Fridge-freezer combo", price: "From £35" },
];

export function AddOns() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="group overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-shadow duration-300">
              <Image
                src="/cleaning-image.png"
                alt="Professional oven cleaning"
                width={600}
                height={500}
                className="object-cover w-full aspect-[5/4] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.1}>
            <p className="text-sm font-medium text-muted tracking-wide">
              Add-on services
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-charcoal">
              Enhance any clean
              <br />
              with <span className="text-gradient font-medium">extras</span>
            </h2>

            {/* Clean price list */}
            <div className="mt-8 rounded-2xl border border-border overflow-hidden">
              {addOns.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between px-5 py-4 ${
                    i !== addOns.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-base text-charcoal">{item.name}</span>
                  <span className="text-base font-medium text-charcoal">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/quote"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-base font-medium text-white hover:bg-charcoal transition-colors"
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
