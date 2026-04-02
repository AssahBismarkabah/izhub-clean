import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Domestic Cleaning",
  description:
    "Regular, one-off, and deep cleaning for homes and apartments in Tidworth. From £21/hour. Fully insured, professional equipment.",
};

export default function DomesticCleaningPage() {
  return <ServiceDetail slug="domestic-cleaning" />;
}
