import { z } from "zod";

export const quoteFormSchema = z.object({
  // Step 1
  fullName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Please enter your phone number"),
  customerType: z.enum(["new", "existing"]).optional(),

  // Step 2
  postcode: z.string().min(3, "Please enter your postcode"),
  propertyType: z.string().optional(),
  bedrooms: z.string().optional(),
  cleaningType: z.string().optional(),
  cleaningTypeOther: z.string().optional(),
  propertyEmpty: z.string().optional(),
  propertyCondition: z.string().optional(),

  // Step 3
  additionalServices: z.array(z.string()).optional(),
  preferredDate: z.string().optional(),
  shortNotice: z.string().optional(),
  contactPreference: z.string().min(1, "Please select a contact preference"),
  notes: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Please enter a message"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
