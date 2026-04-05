"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-surface pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/cleaning-image-home.png"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(236,241,244,0.55)_0%,rgba(236,241,244,0.7)_42%,rgba(236,241,244,0.92)_100%)]" />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-br from-red-100/30 via-orange-100/20 to-purple-100/30 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-charcoal"
          >
            Professional cleaning
            <br />
            that{" "}
            <span className="text-gradient font-medium">
              earns your trust
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 mx-auto max-w-xl text-lg sm:text-xl leading-normal text-body"
          >
            House cleaning, Office cleaning, End of tenancy and Airbnb
            cleaning, fully insured, reliable and inspection-ready
            results every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-base font-medium text-white hover:bg-charcoal transition-colors"
            >
              Get a free quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={CONTACT.whatsappWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-base font-medium text-charcoal hover:bg-surface transition-colors"
            >
              <svg
                className="h-5 w-5 text-whatsapp"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp us
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 border-t border-border pt-10"
        >
          {[
            { value: "Salisbury", label: "Surrounding areas" },
            { value: "Flexible", label: "Scheduling" },
            { value: "Insured", label: "Public liability" },
            { value: "5★", label: "Service standard" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl lg:text-5xl font-normal text-charcoal">
                {stat.value}
              </p>
              <p className="mt-1 text-base text-body">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
