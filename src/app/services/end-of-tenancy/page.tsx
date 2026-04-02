import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "End of Tenancy Cleaning",
  description:
    "Inspection-ready end-of-tenancy and move-out cleaning. From £160. Tidworth, Bulford, Amesbury and surrounding areas.",
};

export default function EndOfTenancyPage() {
  return <ServiceDetail slug="end-of-tenancy" />;
}
