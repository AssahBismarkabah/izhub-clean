"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-white.png"
                alt="IZHUB Cleaning Service"
                width={140}
                height={48}
                style={{ width: "auto" }}
                className="h-10 brightness-0 sm:h-12"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-charcoal/70 hover:text-charcoal transition-colors rounded-lg"
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    {servicesOpen && (
                      <div className="absolute left-0 top-full pt-2">
                        <div className="w-56 rounded-xl border border-border bg-white p-2 shadow-xl shadow-black/5">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block rounded-lg px-3 py-2.5 text-sm text-charcoal/70 hover:bg-surface hover:text-charcoal transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                          <div className="my-1 border-t border-border" />
                          <Link
                            href="/services"
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-surface transition-colors"
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-[15px] font-medium text-charcoal/70 hover:text-charcoal transition-colors rounded-lg"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={CONTACT.phoneTel}
                className="flex items-center gap-2 text-sm font-medium text-muted hover:text-charcoal transition-colors"
              >
                <Phone className="h-4 w-4" />
                {CONTACT.phone}
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-charcoal transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-charcoal hover:bg-surface transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg px-4 py-2 text-sm text-muted hover:bg-surface hover:text-charcoal transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href={CONTACT.phoneTel}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT.phone}
                </a>
                <Link
                  href="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl bg-black px-4 py-3 text-center text-sm font-medium text-white"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.05)] md:hidden">
        <div className="grid grid-cols-3 divide-x divide-border">
          <a
            href={CONTACT.phoneTel}
            className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-muted hover:text-charcoal transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call
          </a>
          <a
            href={CONTACT.whatsappWithMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-muted hover:text-whatsapp transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <Link
            href="/quote"
            className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-charcoal"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
