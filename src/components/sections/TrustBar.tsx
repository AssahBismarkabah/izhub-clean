import { ScrollReveal } from "@/components/common/ScrollReveal";

export function TrustBar() {
  return (
    <section className="bg-surface py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-base text-muted">
            <span className="font-medium text-charcoal">We clean for:</span>
            {[
              "Homeowners",
              "Tenants & Landlords",
              "Offices & Businesses",
              "Military Families",
              "Airbnb & Short-lets",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-gradient-to-r from-red-500 to-purple-500" />
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
