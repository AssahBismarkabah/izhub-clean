"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Select({ options, value, onChange, placeholder = "Select" }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between rounded-xl border border-border px-4 py-3 text-base bg-surface/50 focus:outline-none focus:border-charcoal focus:bg-white transition-all text-left"
      >
        <span className={value ? "text-charcoal" : "text-muted"}>
          {value || placeholder}
        </span>
        <ChevronDown className={`h-4 w-4 text-muted shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute z-20 mt-1 w-full rounded-xl border border-border bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="max-h-60 overflow-y-auto py-1">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-left text-base transition-colors ${
                  value === option
                    ? "bg-surface text-charcoal font-medium"
                    : "text-body hover:bg-surface/60"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
