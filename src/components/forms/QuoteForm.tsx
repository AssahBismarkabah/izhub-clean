"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations";
import { CONTACT } from "@/lib/constants";
import { Select } from "@/components/ui/Select";

const steps = ["About you", "Your property", "Preferences"];

const inputClass =
  "w-full rounded-xl border border-border px-4 py-3 text-base text-charcoal bg-surface/50 focus:outline-none focus:border-charcoal focus:bg-white transition-all";

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      additionalServices: [],
      contactPreference: "",
      customerType: undefined,
      shortNotice: undefined,
    },
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
      // silent
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
          <a
            href={CONTACT.whatsappWithMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            WhatsApp
          </a>
          .
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
              <span
                className={`text-sm ${
                  i === step ? "text-charcoal font-medium" : "text-muted"
                }`}
              >
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
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Full name *
              </label>
              <input
                {...register("fullName")}
                className={inputClass}
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Email *
              </label>
              <input
                {...register("email")}
                type="email"
                className={inputClass}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Phone / WhatsApp *
              </label>
              <input
                {...register("phone")}
                type="tel"
                className={inputClass}
                placeholder="07xxx xxx xxx"
              />
              <p className="mt-1 text-sm text-muted">
                We usually respond via WhatsApp for speed
              </p>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Are you a new customer?
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2.5 text-base text-body cursor-pointer">
                  <input
                    {...register("customerType")}
                    type="radio"
                    value="new"
                  />
                  New customer
                </label>
                <label className="flex items-center gap-2.5 text-base text-body cursor-pointer">
                  <input
                    {...register("customerType")}
                    type="radio"
                    value="existing"
                  />
                  Existing customer
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Property */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Property postcode *
              </label>
              <input
                {...register("postcode")}
                className={inputClass}
                placeholder="e.g. SP9 7DY"
              />
              {errors.postcode && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.postcode.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Property type
              </label>
              <Controller
                control={control}
                name="propertyType"
                render={({ field }) => (
                  <Select
                    options={["Flat / Apartment", "House", "Other"]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select property type"
                  />
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Number of bedrooms
              </label>
              <Controller
                control={control}
                name="bedrooms"
                render={({ field }) => (
                  <Select
                    options={[
                      "Studio / 1-bed",
                      "2-bed",
                      "3-bed",
                      "4-bed",
                      "5+ bedrooms",
                    ]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select bedrooms"
                  />
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Type of cleaning
              </label>
              <Controller
                control={control}
                name="cleaningType"
                render={({ field }) => (
                  <Select
                    options={[
                      "Domestic regular",
                      "Domestic one-off / deep clean",
                      "End-of-tenancy / move-out",
                      "March-out / inspection (military)",
                      "Commercial",
                    ]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select cleaning type"
                  />
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Is the property empty?
              </label>
              <Controller
                control={control}
                name="propertyEmpty"
                render={({ field }) => (
                  <Select
                    options={[
                      "Yes, completely empty",
                      "Mostly empty",
                      "No",
                    ]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select"
                  />
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Overall condition
              </label>
              <Controller
                control={control}
                name="propertyCondition"
                render={({ field }) => (
                  <Select
                    options={[
                      "Good condition",
                      "Average use",
                      "Heavy use / needs deep clean",
                    ]}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select condition"
                  />
                )}
              />
            </div>
          </div>
        )}

        {/* Step 3: Preferences */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Additional services
              </label>
              <div className="space-y-3">
                {[
                  "Oven cleaning",
                  "Carpet cleaning",
                  "Fridge / freezer cleaning",
                ].map((svc) => (
                  <label
                    key={svc}
                    className="flex items-center gap-2.5 text-base text-body cursor-pointer"
                  >
                    <input
                      {...register("additionalServices")}
                      type="checkbox"
                      value={svc}
                    />
                    {svc}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Preferred cleaning date
              </label>
              <input
                {...register("preferredDate")}
                className={inputClass}
                placeholder="e.g. 15 April 2026"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Is this short notice (within 7 days)?
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2.5 text-base text-body cursor-pointer">
                  <input
                    {...register("shortNotice")}
                    type="radio"
                    value="yes"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2.5 text-base text-body cursor-pointer">
                  <input
                    {...register("shortNotice")}
                    type="radio"
                    value="no"
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                How should we contact you? *
              </label>
              <div className="flex gap-6">
                {["WhatsApp", "Phone call", "Email"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-2.5 text-base text-body cursor-pointer"
                  >
                    <input
                      {...register("contactPreference")}
                      type="radio"
                      value={method}
                    />
                    {method}
                  </label>
                ))}
              </div>
              {errors.contactPreference && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.contactPreference.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Anything else?
              </label>
              <textarea
                {...register("notes")}
                rows={3}
                className={`${inputClass} resize-none`}
                placeholder="Optional"
              />
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
