import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Military Accommodation Cleaning",
  description:
    "Specialist march-out and inspection cleaning for military families in Tidworth, Bulford, and Larkhill. We know what inspectors look for.",
};

export default function MilitaryCleaningPage() {
  return <ServiceDetail slug="military-cleaning" />;
}
