// Brand & Contact Information
export const SITE_NAME = "IZHUB Cleaning Service";
export const SITE_TAGLINE = "Connecting people with trusted local cleaners";
export const SITE_DOMAIN = "cleaning.izhub.uk";

export const CONTACT = {
  phone: "0786-9165-458",
  phoneInternational: "+44 7869 165458",
  phoneTel: "tel:+447869165458",
  email: "info@izhub.uk",
  whatsapp: "https://wa.me/447869165458",
  whatsappWithMessage:
    "https://wa.me/447869165458?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20cleaning%20services.",
  facebook: "https://www.facebook.com/IZHUBCleaningService",
  facebookName: "IZHUB Cleaning Service",
} as const;

export const SERVICE_AREAS = [
  "Tidworth",
  "Bulford",
  "Larkhill",
  "Amesbury",
  "Ludgershall",
  "Andover",
  "Salisbury Plain",
] as const;

// Navigation
interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Domestic Cleaning", href: "/services/domestic-cleaning" },
      { label: "End of Tenancy", href: "/services/end-of-tenancy" },
      { label: "Commercial Cleaning", href: "/services/commercial-cleaning" },
      { label: "Military Cleaning", href: "/services/military-cleaning" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Get a Quote", href: "/quote" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Domestic Cleaning", href: "/services/domestic-cleaning" },
    { label: "End of Tenancy", href: "/services/end-of-tenancy" },
    { label: "Commercial Cleaning", href: "/services/commercial-cleaning" },
    { label: "Military Cleaning", href: "/services/military-cleaning" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;
