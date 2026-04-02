import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for IZHUB Cleaning Service.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <div className="flex gap-4 text-sm text-muted mb-8">
          <span className="text-charcoal font-medium">Privacy Policy</span>
          <span>&middot;</span>
          <Link href="/terms" className="hover:text-charcoal transition-colors">Terms &amp; Conditions</Link>
        </div>
        <h1 className="text-4xl font-normal text-charcoal">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-base text-body leading-normal">
          <div>
            <h2 className="text-lg font-medium text-charcoal">Who we are</h2>
            <p className="mt-2">{SITE_NAME} is a cleaning service operating in Tidworth and the Salisbury Plain area. Our contact email is {CONTACT.email}.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">What data we collect</h2>
            <p className="mt-2">When you submit a quote request or contact form, we collect your name, email address, phone number, property postcode, and any additional details you provide about your cleaning requirements.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">How we use your data</h2>
            <p className="mt-2">We use your information solely to respond to your enquiry, provide quotes, arrange cleaning services, and communicate about your booking. We do not use your data for marketing purposes unless you have explicitly opted in.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Who we share your data with</h2>
            <p className="mt-2">We do not sell, trade, or share your personal information with third parties except where necessary to deliver our services (e.g. payment processing) or where required by law.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Data retention</h2>
            <p className="mt-2">We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, or as required by law. You may request deletion of your data at any time by contacting us.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Your rights</h2>
            <p className="mt-2">Under UK GDPR, you have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at {CONTACT.email}.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Cookies</h2>
            <p className="mt-2">This website uses essential cookies required for its operation. We do not use tracking cookies or third-party advertising cookies.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Contact</h2>
            <p className="mt-2">For any questions about this privacy policy, contact us at {CONTACT.email} or call {CONTACT.phone}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
