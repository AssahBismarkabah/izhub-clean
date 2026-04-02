"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations";
import { CONTACT } from "@/lib/constants";

const steps = ["About you", "Your property", "Preferences"];

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { additionalServices: [] },
  });

  const nextStep = async () => {
    const fieldsPerStep: (keyof QuoteFormData)[][] = [
      ["fullName", "email", "phone"],
      ["postcode"],
      ["contactPreference"],
    ];
    const valid = await trigger(fieldsPerStep[step]);
    if (valid) setStep((s) => Math.min(s + 1, 2));
  };

  const onSubmit = async (data: QuoteFormData) => {
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // silent - form shows success regardless for now
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
          <Check className="h-7 w-7 text-green-600" />
        </div>
        <h2 className="mt-6 text-2xl font-normal text-charcoal">
          Quote request submitted
        </h2>
        <p className="mt-3 text-base text-body">
          We will be in touch within 2 hours. For a faster response,
          message us on{" "}
          <a href={CONTACT.whatsappWithMessage} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">
            WhatsApp
          </a>.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicators */}
      <div className="flex items-center gap-3 mb-8">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div
                className={`h-2 w-2 rounded-full transition-colors ${
                  i <= step
                    ? "bg-gradient-to-r from-red-500 to-purple-500"
                    : "bg-border"
                }`}
              />
              <span className={`text-sm ${i === step ? "text-charcoal font-medium" : "text-muted"}`}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && <div className="w-8 h-px bg-border" />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: About you */}
        {step === 0 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Full name *</label>
              <input {...register("fullName")} className="w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-white focus:outline-none focus:border-charcoal transition-colors" placeholder="Your full name" />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Email *</label>
              <input {...register("email")} type="email" className="w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-white focus:outline-none focus:border-charcoal transition-colors" placeholder="you@example.com" />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Phone / WhatsApp *</label>
              <input {...register("phone")} type="tel" className="w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-white focus:outline-none focus:border-charcoal transition-colors" placeholder="07xxx xxx xxx" />
              <p className="mt-1 text-sm text-muted">We usually respond via WhatsApp for speed</p>
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Are you a new customer?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-base text-body cursor-pointer">
                  <input {...register("customerType")} type="radio" value="new" className="accent-charcoal" /> New customer
                </label>
                <label className="flex items-center gap-2 text-base text-body cursor-pointer">
                  <input {...register("customerType")} type="radio" value="existing" className="accent-charcoal" /> Existing customer
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Property */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Property postcode *</label>
              <input {...register("postcode")} className="w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-white focus:outline-none focus:border-charcoal transition-colors" placeholder="e.g. SP9 7DY" />
              {errors.postcode && <p className="mt-1 text-sm text-red-500">{errors.postcode.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Property type</label>
              <select {...register("propertyType")} className="w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-white focus:outline-none focus:border-charcoal transition-colors">
                <option value="">Select</option>
                <option>Flat / Apartment</option>
                <option>House</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Number of bedrooms</label>
              <select {...register("bedrooms")} className="w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-white focus:outline-none focus:border-charcoal transition-colors">
                <option value="">Select</option>
                <option>Studio / 1-bed</option>
                <option>2-bed</option>
                <option>3-bed</option>
                <option>4-bed</option>
                <option>5+ bedrooms</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Type of cleaning</label>
              <select {...register("cleaningType")} className="w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-white focus:outline-none focus:border-charcoal transition-colors">
                <option value="">Select</option>
                <option>Domestic regular</option>
                <option>Domestic one-off / deep clean</option>
                <option>End-of-tenancy / move-out</option>
                <option>March-out / inspection (military)</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Is the property empty?</label>
              <select {...register("propertyEmpty")} className="w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-white focus:outline-none focus:border-charcoal transition-colors">
                <option value="">Select</option>
                <option>Yes, completely empty</option>
                <option>Mostly empty</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Overall condition</label>
              <select {...register("propertyCondition")} className="w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-white focus:outline-none focus:border-charcoal transition-colors">
                <option value="">Select</option>
                <option>Good condition</option>
                <option>Average use</option>
                <option>Heavy use / needs deep clean</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Preferences */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Additional services</label>
              <div className="space-y-2">
                {["Oven cleaning", "Carpet cleaning", "Fridge / freezer cleaning"].map((svc) => (
                  <label key={svc} className="flex items-center gap-2 text-base text-body cursor-pointer">
                    <input {...register("additionalServices")} type="checkbox" value={svc} className="accent-charcoal" />
                    {svc}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Preferred cleaning date</label>
              <input {...register("preferredDate")} type="date" className="w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-white focus:outline-none focus:border-charcoal transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Is this short notice (within 7 days)?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-base text-body cursor-pointer">
                  <input {...register("shortNotice")} type="radio" value="yes" className="accent-charcoal" /> Yes
                </label>
                <label className="flex items-center gap-2 text-base text-body cursor-pointer">
                  <input {...register("shortNotice")} type="radio" value="no" className="accent-charcoal" /> No
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">How should we contact you? *</label>
              <div className="flex gap-4">
                {["WhatsApp", "Phone call", "Email"].map((method) => (
                  <label key={method} className="flex items-center gap-2 text-base text-body cursor-pointer">
                    <input {...register("contactPreference")} type="radio" value={method} className="accent-charcoal" /> {method}
                  </label>
                ))}
              </div>
              {errors.contactPreference && <p className="mt-1 text-sm text-red-500">{errors.contactPreference.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Anything else?</label>
              <textarea {...register("notes")} rows={3} className="w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-white focus:outline-none focus:border-charcoal transition-colors resize-none" placeholder="Optional" />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="inline-flex items-center gap-2 text-base font-medium text-charcoal hover:text-muted transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          ) : (
            <div />
          )}

          {step < 2 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-base font-medium text-white hover:bg-charcoal transition-colors"
            >
              Next <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-7 py-3.5 text-base font-medium text-white hover:bg-charcoal transition-colors"
            >
              Submit request <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
