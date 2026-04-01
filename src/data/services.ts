import {
  Home,
  PackageOpen,
  Building2,
  Shield,
  CookingPot,
  Brush,
  Snowflake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  href: string;
  startingPrice?: string;
  inclusions: {
    category: string;
    items: string[];
  }[];
}

export interface AddOn {
  name: string;
  description: string;
  price: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "domestic-cleaning",
    name: "Domestic Cleaning",
    shortName: "Domestic",
    description:
      "Regular, one-off and deep cleaning for homes and apartments. We keep your living space fresh, hygienic, and welcoming, on a schedule that suits you.",
    shortDescription:
      "Regular, one-off and deep cleaning for homes and apartments",
    icon: Home,
    href: "/services/domestic-cleaning",
    startingPrice: "From £21/hour",
    inclusions: [
      {
        category: "General Areas",
        items: [
          "Surface dusting and wiping",
          "Skirting boards, doors, frames cleaned",
          "Interior windows and glass cleaned",
          "Floor vacuuming and mopping",
          "Cobweb removal",
        ],
      },
      {
        category: "Kitchen",
        items: [
          "Worktop and cupboard cleaning",
          "Sink/tap descaling and polishing",
          "External appliance cleaning",
          "Hob surface cleaning",
          "Bin area sanitation",
        ],
      },
      {
        category: "Bathrooms",
        items: [
          "Toilet, sink, shower, bath sanitisation",
          "Tile descaling where needed",
          "Mirror and fitting polishing",
          "Floor cleaning",
        ],
      },
    ],
  },
  {
    slug: "end-of-tenancy",
    name: "End of Tenancy & Move Cleaning",
    shortName: "End of Tenancy",
    description:
      "Inspection-ready cleaning for tenants, landlords and letting agents. We ensure your property meets handover standards, top to bottom, every time.",
    shortDescription:
      "Inspection-ready cleaning for tenants, landlords and letting agents",
    icon: PackageOpen,
    href: "/services/end-of-tenancy",
    startingPrice: "From £160",
    inclusions: [
      {
        category: "General Areas",
        items: [
          "Surface dusting and wiping",
          "Skirting boards, doors, frames cleaned",
          "Interior windows and glass cleaned",
          "Floor vacuuming and mopping",
          "Cobweb removal",
        ],
      },
      {
        category: "Kitchen",
        items: [
          "Worktop and cupboard deep cleaning",
          "Sink/tap descaling and polishing",
          "External appliance cleaning",
          "Hob surface cleaning",
          "Bin area sanitation",
        ],
      },
      {
        category: "Bathrooms",
        items: [
          "Toilet, sink, shower, bath sanitisation",
          "Tile and grout deep cleaning",
          "Mirror and fitting polishing",
          "Floor cleaning",
        ],
      },
    ],
  },
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortName: "Commercial",
    description:
      "Reliable cleaning for offices, shared spaces and short-let properties (Airbnb and serviced accommodation), with flexible scheduling to fit your business.",
    shortDescription:
      "Reliable cleaning for offices, shared spaces and short-let properties",
    icon: Building2,
    href: "/services/commercial-cleaning",
    startingPrice: "Custom quote",
    inclusions: [
      {
        category: "Work Areas",
        items: [
          "Desk and surface wiping",
          "High-touch point disinfection",
          "Skirting and door cleaning",
          "Floor maintenance",
          "Glass interior cleaning",
        ],
      },
      {
        category: "Kitchen / Break Areas",
        items: [
          "Worktop cleaning",
          "Sink sanitation",
          "Appliance exterior cleaning",
          "Bin management",
        ],
      },
      {
        category: "Washrooms",
        items: [
          "Toilet and sink sanitisation",
          "Mirror polishing",
          "Consumable replenishment (if supplied)",
        ],
      },
    ],
  },
  {
    slug: "military-cleaning",
    name: "Military Accommodation Cleaning",
    shortName: "Military",
    description:
      "Specialist cleaning to support service families with inspections, march-out and move preparation. We understand the inspection process and clean to standard.",
    shortDescription:
      "Specialist cleaning to support service families with inspections and march-out",
    icon: Shield,
    href: "/services/military-cleaning",
    startingPrice: "Get a quote",
    inclusions: [
      {
        category: "General Areas",
        items: [
          "Surface dusting and wiping",
          "Skirting boards, doors, frames cleaned",
          "Interior windows and glass cleaned",
          "Floor vacuuming and mopping",
          "Cupboard interiors (if empty)",
        ],
      },
      {
        category: "Kitchen",
        items: [
          "Worktop and cupboard cleaning",
          "Sink/tap descaling and polishing",
          "External appliance cleaning",
          "Hob surface cleaning",
          "Bin area sanitation",
        ],
      },
      {
        category: "Bathrooms",
        items: [
          "Toilet, sink, shower, bath sanitisation",
          "Tile descaling where needed",
          "Mirror and fitting polishing",
          "Commonly-inspected areas emphasis",
        ],
      },
    ],
  },
];

export const addOns: AddOn[] = [
  {
    name: "Oven Deep Cleaning",
    description: "Grease and burnt-on food removal, internal glass and shelves",
    price: "From £50",
    icon: CookingPot,
  },
  {
    name: "Carpet Cleaning",
    description: "Per-room stain treatment and deodorising",
    price: "From £40/room",
    icon: Brush,
  },
  {
    name: "Fridge & Freezer Cleaning",
    description: "Shelf and compartment sanitation, internal deep clean",
    price: "From £20",
    icon: Snowflake,
  },
];

export const pricing = {
  domestic: [
    { frequency: "Weekly", rate: "From £21/hour", minimum: "2.5 hours" },
    { frequency: "Fortnightly", rate: "From £22/hour", minimum: "2.5 hours" },
    {
      frequency: "One-off / Deep Clean",
      rate: "From £23/hour",
      minimum: "2.5 hours",
    },
  ],
  endOfTenancy: [
    { bedrooms: "1 Bedroom", price: "From £160" },
    { bedrooms: "2 Bedrooms", price: "From £190" },
    { bedrooms: "3 Bedrooms", price: "From £230" },
    { bedrooms: "4 Bedrooms", price: "From £270" },
  ],
  addOns: [
    { name: "Oven Deep Cleaning", price: "From £50" },
    { name: "Carpet Cleaning", price: "From £40 per room" },
    { name: "Fridge Cleaning", price: "From £20" },
    { name: "Freezer Cleaning", price: "From £25" },
    { name: "Fridge-Freezer Combo", price: "From £35" },
  ],
} as const;
