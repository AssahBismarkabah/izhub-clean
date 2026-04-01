export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Fantastic clean before our property inspection. Everything was spotless and we passed without any issues. Highly recommend!",
    name: "Sarah T.",
    location: "Tidworth",
    rating: 5,
  },
  {
    quote:
      "Used IZHUB for our march-out clean and passed first time. They know exactly what the inspectors look for. Will definitely use again.",
    name: "James W.",
    location: "Bulford",
    rating: 5,
  },
  {
    quote:
      "Brilliant job on the oven and carpets. The oven looks brand new and the carpets are fresh. Great add-on service at a fair price.",
    name: "Emma R.",
    location: "Amesbury",
    rating: 5,
  },
  {
    quote:
      "We use IZHUB for our fortnightly clean and the team is always punctual, thorough, and professional. Our home has never felt so clean.",
    name: "David M.",
    location: "Larkhill",
    rating: 5,
  },
  {
    quote:
      "As a landlord, finding a reliable end-of-tenancy cleaner is crucial. IZHUB delivers consistent, inspection-ready results every time.",
    name: "Rachel K.",
    location: "Andover",
    rating: 5,
  },
];
