"use client";

const items = [
  "Homeowners",
  "Tenants & Landlords",
  "Offices & Businesses",
  "Military Families",
  "Airbnb & Short-lets",
];

export function TrustBar() {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          {/* Narrow edge fades only */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10" style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10" style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

          <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
            {[0, 1, 2, 3].map((set) => (
              <div key={set} className="flex items-center gap-10 shrink-0">
                {items.map((item) => (
                  <span
                    key={`${item}-${set}`}
                    className="flex items-center gap-2 text-base text-body"
                  >
                    <span className="h-1 w-1 rounded-full bg-gradient-to-r from-red-500 to-purple-500" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
