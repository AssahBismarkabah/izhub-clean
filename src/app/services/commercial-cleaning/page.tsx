import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Commercial Cleaning",
  description:
    "Professional office, shared space, and Airbnb cleaning with flexible scheduling. Get a custom quote for your business.",
};

export default function CommercialCleaningPage() {
  return <ServiceDetail slug="commercial-cleaning" />;
}
