import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch via WhatsApp, phone, or email. Serving Tidworth, Bulford, Amesbury, Andover and the Salisbury Plain.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-surface pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-5xl sm:text-6xl font-normal leading-[1.08] text-charcoal">
                Get in <span className="text-gradient font-medium">touch</span>
              </h1>
              <p className="mt-4 text-lg text-body">
                The quickest way to reach us is via WhatsApp.
                We usually respond within minutes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left: contact methods as clean text */}
            <ScrollReveal>
              <div className="space-y-10">
                <div>
                  <p className="text-sm font-medium text-muted tracking-wide">Best way to reach us</p>
                  <a
                    href={CONTACT.whatsappWithMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-2xl font-normal text-charcoal hover:text-gradient transition-colors"
                  >
                    WhatsApp
                  </a>
                  <p className="mt-1 text-base text-body">Quick response, usually within minutes</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted tracking-wide">Call us</p>
                  <a
                    href={CONTACT.phoneTel}
                    className="mt-3 block text-2xl font-normal text-charcoal"
                  >
                    {CONTACT.phone}
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted tracking-wide">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-3 block text-2xl font-normal text-charcoal"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted tracking-wide">Social</p>
                  <a
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-2xl font-normal text-charcoal"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: team photo + areas + quote CTA */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-10">
                <div className="group overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                  <Image
                    src="/domestic-izhubd2.png"
                    alt="IZHUB team member ready to help"
                    width={600}
                    height={500}
                    className="object-cover w-full aspect-[5/4] object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-muted tracking-wide">Areas we cover</p>
                  <p className="mt-3 text-base text-body">
                    We serve Tidworth, Bulford, Larkhill, Amesbury,
                    Ludgershall, Andover, and the wider Salisbury Plain area.
                    Not sure if we cover your location? Just get in touch.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted tracking-wide">Need a quote?</p>
                  <p className="mt-3 text-base text-body">
                    Use our quote form to share your details and we will
                    respond within 2 hours with a clear, no-obligation price.
                  </p>
                  <Link
                    href="/quote"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-base font-medium text-white hover:bg-charcoal transition-colors"
                  >
                    Get a free quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
