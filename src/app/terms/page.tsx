import type { Metadata } from "next";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for IZHUB Cleaning Service.",
};

export default function TermsPage() {
  return (
    <section className="bg-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl font-normal text-charcoal">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-muted">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-base text-body leading-normal">
          <div>
            <h2 className="text-lg font-medium text-charcoal">Agreement</h2>
            <p className="mt-2">By using the services provided by {SITE_NAME}, you agree to the following terms and conditions. Please read them carefully before booking.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Services</h2>
            <p className="mt-2">We provide domestic, commercial, end-of-tenancy, and military accommodation cleaning services. The specific scope of work will be agreed upon when your quote is confirmed.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Quotes and pricing</h2>
            <p className="mt-2">All quotes are provided based on the information you supply. Final pricing may be adjusted if the property condition or scope differs significantly from what was described. Any price changes will be communicated before work begins.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Booking and cancellation</h2>
            <p className="mt-2">Bookings are confirmed once a quote is accepted. We ask for at least 48 hours notice for cancellations or rescheduling. Late cancellations may incur a charge.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Access and preparation</h2>
            <p className="mt-2">You are responsible for providing access to the property at the agreed time. Properties should be reasonably prepared for cleaning (e.g. personal items secured, pets arranged).</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Insurance and liability</h2>
            <p className="mt-2">{SITE_NAME} holds public liability insurance. While we take every care, we are not liable for damage to items not disclosed before the clean or for pre-existing damage. Any concerns should be reported within 24 hours of the service.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Satisfaction</h2>
            <p className="mt-2">If you are not satisfied with any aspect of our service, please contact us within 24 hours. We will arrange a re-clean at no additional cost where the concern is valid.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-charcoal">Contact</h2>
            <p className="mt-2">For questions about these terms, contact us at {CONTACT.email} or call {CONTACT.phone}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
