"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-8">
              <p className="text-2xl sm:text-3xl font-normal leading-snug text-charcoal">
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-400 via-orange-400 to-purple-400 text-sm font-medium text-white">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-charcoal">{t.name}</p>
                <p className="text-xs text-muted">{t.location}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white hover:bg-surface transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4 text-charcoal" />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-6 bg-gradient-to-r from-red-500 to-purple-500"
                        : "w-1.5 bg-charcoal/15 hover:bg-charcoal/25"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white hover:bg-surface transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4 text-charcoal" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
