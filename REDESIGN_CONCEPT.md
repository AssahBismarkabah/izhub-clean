# IZHUB Cleaning Service — Redesign Concept

> Version: 1.0
> Date: 2026-04-01
> Reference: [SITE_DOCUMENTATION.md](./SITE_DOCUMENTATION.md)
> Status: Approved — ready for implementation

---

## Table of Contents

1. [Design Vision](#1-design-vision)
2. [Brand Identity](#2-brand-identity)
3. [Site Architecture](#3-site-architecture)
4. [Page-by-Page Design Specification](#4-page-by-page-design-specification)
   - 4.1 [Home Page](#41-home-page)
   - 4.2 [Services Overview Page](#42-services-overview-page)
   - 4.3 [Service Detail Pages (x4)](#43-service-detail-pages)
   - 4.4 [About Page](#44-about-page)
   - 4.5 [Pricing Page](#45-pricing-page)
   - 4.6 [Get a Quote Page](#46-get-a-quote-page)
   - 4.7 [Contact Page](#47-contact-page)
   - 4.8 [Legal Pages](#48-legal-pages)
5. [Global UI Components](#5-global-ui-components)
6. [Interaction & Animation Design](#6-interaction--animation-design)
7. [Responsive Design Strategy](#7-responsive-design-strategy)
8. [SEO & Performance Requirements](#8-seo--performance-requirements)
9. [Tech Stack](#9-tech-stack)
10. [Content Requirements](#10-content-requirements)

---

## 1. Design Vision

### The Problem

The current site is built on Google Sites — it feels generic, has no native forms (relies on external Google Forms), lacks social proof, and doesn't reflect the professionalism of the service being offered. It works, but it doesn't inspire trust or convert visitors effectively.

### The Goal

Create a modern, professional, conversion-optimized website that:

- **Instills trust instantly** — visitors should feel confident within 3 seconds of landing
- **Makes getting a quote effortless** — native multi-step form, no external redirects
- **Showcases services clearly** — detailed, well-organized service pages with transparent pricing
- **Works beautifully on mobile** — 70%+ of local service searches happen on mobile
- **Differentiates IZHUB** — highlight the military-specialist expertise and local roots
- **Drives conversions** — every page guides visitors toward getting a quote or making contact

### Design Principles

1. **Trust First** — Professional colors, clean typography, visible credentials
2. **Clarity Over Cleverness** — Simple navigation, scannable content, obvious CTAs
3. **Mobile-Native** — Designed for mobile first, enhanced for desktop
4. **Speed Matters** — Fast loading, optimized images, minimal JavaScript
5. **Accessible** — WCAG AA compliant, readable by everyone

---

## 2. Brand Identity

### 2.1 Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary** | Deep Navy | `#0F2B5B` | Headers, nav, footer, primary text emphasis |
| **Secondary** | Fresh Teal | `#0EA5A0` | Accent elements, icons, highlights, secondary buttons |
| **CTA / Accent** | Warm Amber | `#F59E0B` | Primary buttons, CTAs, attention-drawing elements |
| **Background** | Clean White | `#FFFFFF` | Main page backgrounds |
| **Surface** | Soft Gray | `#F7F8FA` | Alternating section backgrounds, card backgrounds |
| **Border** | Light Gray | `#E2E8F0` | Card borders, dividers, form input borders |
| **Text Primary** | Charcoal | `#1E293B` | Body text, headings |
| **Text Secondary** | Slate | `#64748B` | Subtext, descriptions, helper text |
| **Text Muted** | Gray | `#94A3B8` | Placeholders, disabled states |
| **Success** | Emerald | `#10B981` | Success states, confirmations, WhatsApp button |
| **Error** | Red | `#EF4444` | Error states, validation messages |
| **Warning** | Amber Light | `#FBBF24` | Warning states |

#### Extended Palette (Hover / Active States)

| Base | Hover | Active |
|------|-------|--------|
| Navy `#0F2B5B` | `#0A1F42` | `#071630` |
| Teal `#0EA5A0` | `#0C8C88` | `#0A7470` |
| Amber `#F59E0B` | `#D97706` | `#B45309` |

#### Gradient Definitions

```
Hero Gradient:     linear-gradient(135deg, #0F2B5B 0%, #0EA5A0 100%)
CTA Banner:        linear-gradient(135deg, #0F2B5B 0%, #134074 50%, #0EA5A0 100%)
Card Hover Glow:   0 8px 30px rgba(14, 165, 160, 0.15)
```

### 2.2 Typography

**Font Family:** Inter (Google Fonts) — single family for performance + consistency

| Element | Weight | Size (Desktop) | Size (Mobile) | Line Height | Color |
|---------|--------|----------------|---------------|-------------|-------|
| H1 (Hero) | 700 (Bold) | 56px | 36px | 1.15 | `#0F2B5B` |
| H2 (Section) | 700 (Bold) | 40px | 28px | 1.2 | `#0F2B5B` |
| H3 (Subsection) | 600 (Semi) | 28px | 22px | 1.3 | `#1E293B` |
| H4 (Card Title) | 600 (Semi) | 22px | 18px | 1.3 | `#1E293B` |
| Body | 400 (Regular) | 16px | 15px | 1.65 | `#1E293B` |
| Body Small | 400 (Regular) | 14px | 13px | 1.6 | `#64748B` |
| Button | 600 (Semi) | 16px | 15px | 1.2 | varies |
| Caption/Label | 500 (Medium) | 13px | 12px | 1.4 | `#64748B` |
| Nav Link | 500 (Medium) | 15px | 16px | 1.2 | `#1E293B` |

**Fallback Stack:** `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### 2.3 Logo Treatment

- Keep the "IZHUB Cleaning Service" brand name
- Update logo colors to work with the new navy/teal palette
- Logo should work on both light and dark backgrounds (provide white variant for footer)
- Minimum size: 120px wide on desktop, 100px on mobile

### 2.4 Iconography

- **Style:** Lucide React icons (open source, consistent, clean line style)
- **Size:** 24px default, 40-48px for feature icons, 20px for inline icons
- **Color:** Teal `#0EA5A0` for feature icons, `#64748B` for UI icons
- **Stroke width:** 1.5px (matches Inter's visual weight)

---

## 3. Site Architecture

### 3.1 Page Map

```
/                              → Home
/services                      → Services Overview
/services/domestic-cleaning    → Domestic Cleaning (detail)
/services/end-of-tenancy       → End of Tenancy Cleaning (detail)
/services/commercial-cleaning  → Commercial Cleaning (detail)
/services/military-cleaning    → Military Accommodation Cleaning (detail)
/about                         → About IZHUB
/pricing                       → Pricing
/quote                         → Get a Free Quote (multi-step form)
/contact                       → Contact Us
/privacy                       → Privacy Policy
/terms                         → Terms & Conditions
```

**Total: 12 pages** (7 core + 4 service detail + 1 quote form, plus 2 legal)

### 3.2 Navigation Structure

**Desktop Header (Sticky)**

```
┌─────────────────────────────────────────────────────────────────────┐
│ [LOGO]     Home  Services▾  About  Pricing  Contact   📞 0786.. [Get a Quote] │
└─────────────────────────────────────────────────────────────────────┘
                      ┌──────────────────────┐
                      │ Domestic Cleaning     │
           Services ▾ │ End of Tenancy        │  (dropdown on hover)
                      │ Commercial Cleaning   │
                      │ Military Cleaning     │
                      │ ────────────────────  │
                      │ View All Services     │
                      └──────────────────────┘
```

- Transparent background on hero, transitions to solid white with `box-shadow: 0 1px 3px rgba(0,0,0,0.1)` on scroll
- Phone number visible on desktop at all times
- "Get a Quote" — amber button, always visible in nav

**Mobile Header + Bottom Bar**

```
┌──────────────────────────────────┐
│ [LOGO]              [☰ Menu]     │  ← Sticky top
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  📞 Call   💬 WhatsApp  📋 Quote │  ← Fixed bottom bar
└──────────────────────────────────┘
```

- Hamburger menu opens full-screen overlay with all nav links
- Bottom action bar persistent on all pages (< 768px)

### 3.3 Footer Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│                         (Dark Navy #0F2B5B)                         │
│                                                                     │
│  [LOGO - white]          Quick Links       Services        Contact  │
│  IZHUB Cleaning          Home              Domestic        📞 Phone │
│  Service                 Services          End of Tenancy  ✉ Email  │
│  Connecting people       About             Commercial      💬 WhatsApp│
│  with trusted local      Pricing           Military        📘 Facebook│
│  cleaners                Get a Quote       Add-Ons                  │
│                          Contact                                    │
│                                                                     │
│─────────────────────────────────────────────────────────────────────│
│  © 2026 IZHUB Cleaning Service     Privacy Policy  |  Terms & Conditions  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 4. Page-by-Page Design Specification

### 4.1 Home Page

**URL:** `/`
**Purpose:** First impression, service overview, build trust, drive quote requests

#### Section 1: Hero (Full Viewport Height)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   Professional Cleaning              ┌─────────────────────┐        │
│   You Can Trust                      │                     │        │
│                                      │   [Hero Image:      │        │
│   Reliable domestic, commercial &    │    Sparkling clean   │        │
│   military cleaning across Tidworth  │    living room]      │        │
│   and the Salisbury Plain.           │                     │        │
│                                      └─────────────────────┘        │
│   [Get a Free Quote]  [View Our Services]                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

- **Layout:** Split — 55% text left, 45% image right (stacks vertically on mobile)
- **Headline:** "Professional Cleaning You Can Trust" — H1, 56px, Navy
- **Subtext:** "Reliable domestic, commercial & military cleaning across Tidworth and the Salisbury Plain." — 18px, Slate
- **CTA 1:** "Get a Free Quote" — Amber filled button → `/quote`
- **CTA 2:** "View Our Services" — Navy outlined button → `/services`
- **Background:** Soft white `#F7F8FA` with subtle dot pattern or clean gradient
- **Image:** High-quality photo of a sparkling clean home interior (rounded corners, subtle shadow)

#### Section 2: Trust Bar

```
┌─────────────────────────────────────────────────────────────────────┐
│    🛡 Fully Insured    ⭐ 5-Star Rated    📍 Local & Reliable    🎖 Military Friendly   │
└─────────────────────────────────────────────────────────────────────┘
```

- **Background:** White with top/bottom border `#E2E8F0`
- **Layout:** 4 items in a row (2x2 on mobile)
- **Each item:** Teal icon (40px) + bold label (14px, semibold, charcoal) + optional subtitle
- **Animation:** Fade-in on scroll

#### Section 3: Services Overview (4 Cards)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    Our Cleaning Services                            │
│            Everything you need for a spotless space                 │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────┐│
│  │ 🏠            │  │ 📦            │  │ 🏢            │  │ 🎖        ││
│  │ Domestic      │  │ End of       │  │ Commercial   │  │ Military ││
│  │ Cleaning      │  │ Tenancy      │  │ Cleaning     │  │ Cleaning ││
│  │               │  │              │  │              │  │          ││
│  │ Regular, one- │  │ Inspection-  │  │ Offices,     │  │ March-out││
│  │ off and deep  │  │ ready for    │  │ shared spaces│  │ & inspect││
│  │ cleaning...   │  │ tenants...   │  │ & Airbnb...  │  │ support..││
│  │               │  │              │  │              │  │          ││
│  │ Learn More →  │  │ Learn More → │  │ Learn More → │  │ Learn →  ││
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────┘│
└─────────────────────────────────────────────────────────────────────┘
```

- **Background:** Soft gray `#F7F8FA`
- **Layout:** 4-column grid desktop (min 260px), 2-column tablet, 1-column mobile
- **Card design:**
  - White background, `border-radius: 12px`
  - `box-shadow: 0 2px 8px rgba(0,0,0,0.06)`
  - Teal icon (48px) at top
  - Title: H4, 20px, semibold, charcoal
  - Description: 14px, regular, slate (3 lines max)
  - "Learn More →" link: Teal, 14px, semibold
  - Padding: 32px
- **Hover:** Card lifts 4px (`translateY(-4px)`), shadow deepens to `0 12px 24px rgba(0,0,0,0.1)`, 200ms ease

#### Section 4: How It Works (3 Steps)

```
┌─────────────────────────────────────────────────────────────────────┐
│                     How It Works                                    │
│              Getting started is simple                              │
│                                                                     │
│      ①─────────────────②─────────────────③                          │
│                                                                     │
│   📋 Tell Us About       💬 Get Your          ✨ We Clean,          │
│      Your Property          Free Quote           You Relax          │
│                                                                     │
│   Share your property    We'll send you a    Our team handles       │
│   details and when       clear, no-obligation everything — you      │
│   you need us.           quote within hours. enjoy the results.     │
│                                                                     │
│              [Start Now — It Takes 2 Minutes]                       │
└─────────────────────────────────────────────────────────────────────┘
```

- **Background:** White
- **Layout:** 3 equal columns with connecting line/dots between steps
- **Step numbers:** Teal circles (48px) with white numbers
- **Icons:** Below step numbers, 40px
- **Title:** H4, semibold, charcoal
- **Description:** 14px, regular, slate
- **Connecting line:** Dashed teal line between steps (hidden on mobile, steps stack vertically)
- **CTA:** "Start Now — It Takes 2 Minutes" — Amber button → `/quote`

#### Section 5: Why Choose IZHUB

```
┌─────────────────────────────────────────────────────────────────────┐
│                   Why Choose IZHUB?                                 │
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │
│  │ 🔧 Professional  │  │ 🛡 Fully Insured │  │ 💷 Transparent   │     │
│  │    Equipment     │  │   Public        │  │    Pricing       │     │
│  │                  │  │   Liability     │  │                  │     │
│  ├─────────────────┤  ├─────────────────┤  ├─────────────────┤     │
│  │ ⏰ Reliable &    │  │ 🎖 Military      │  │ 🌿 Eco-Friendly  │     │
│  │    Punctual      │  │   Specialist    │  │    Available     │     │
│  │                  │  │                 │  │                  │     │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘     │
└─────────────────────────────────────────────────────────────────────┘
```

- **Background:** Soft gray `#F7F8FA`
- **Layout:** 3x2 grid (3 columns, 2 rows) on desktop, 2x3 on tablet, 1x6 on mobile
- **Each item:** Teal icon (40px) + bold title (16px) + one-line description (14px, slate)
- **Style:** No card borders — clean, minimal, icon-driven
- **Animation:** Stagger fade-in on scroll (100ms delay between items)

#### Section 6: Testimonials

```
┌─────────────────────────────────────────────────────────────────────┐
│                  What Our Customers Say                             │
│                  ⭐⭐⭐⭐⭐ Rated 5/5 by local families               │
│                                                                     │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│  │ ⭐⭐⭐⭐⭐           │  │ ⭐⭐⭐⭐⭐           │  │ ⭐⭐⭐⭐⭐           │  │
│  │                   │  │                   │  │                   │  │
│  │ "Fantastic clean  │  │ "Used for our     │  │ "Brilliant job    │  │
│  │  before our       │  │  march-out and    │  │  on the oven and  │  │
│  │  inspection..."   │  │  passed first     │  │  carpets..."      │  │
│  │                   │  │  time..."         │  │                   │  │
│  │  — Sarah T.       │  │  — James W.       │  │  — Emma R.        │  │
│  │    Tidworth        │  │    Bulford         │  │    Amesbury        │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘  │
│                         ● ○ ○                                      │
└─────────────────────────────────────────────────────────────────────┘
```

- **Background:** White
- **Layout:** 3-card carousel on desktop (auto-rotate every 5s), 1-card swipeable on mobile
- **Card design:** White bg, subtle border `#E2E8F0`, rounded 12px, padding 28px
- **Content:** 5 amber stars + quote text (italic, 15px) + name (semibold) + location (slate)
- **Navigation dots:** Below carousel, teal active / gray inactive
- **Note:** Use placeholder testimonials initially, replace with real ones when available

#### Section 7: Service Areas

```
┌─────────────────────────────────────────────────────────────────────┐
│                  Areas We Cover                                     │
│                                                                     │
│  ┌─────────────────────────┐   ┌─────────────────────────────────┐ │
│  │                         │   │                                 │ │
│  │   [Illustrated Map      │   │  Tidworth ●  Bulford ●         │ │
│  │    of service area]     │   │  Larkhill ●  Amesbury ●        │ │
│  │                         │   │  Ludgershall ●  Andover ●      │ │
│  │                         │   │  Salisbury Plain area ●        │ │
│  │                         │   │                                 │ │
│  └─────────────────────────┘   │  Not sure if we cover your     │ │
│                                │  area? Get in touch!            │ │
│                                │                                 │ │
│                                │  [Check My Area]                │ │
│                                └─────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

- **Background:** Soft gray `#F7F8FA`
- **Layout:** Split — map illustration left (50%), location list right (50%)
- **Location tags:** Pill-shaped badges, teal background with white text (or outlined)
- **CTA:** "Check My Area" → opens WhatsApp or contact page
- **Map:** Static illustrated map or embedded Leaflet map with service area boundary

#### Section 8: CTA Banner (Pre-Footer)

```
┌─────────────────────────────────────────────────────────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (Navy → Teal Gradient) ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│                                                                     │
│           Ready for a Spotless Home?                                │
│                                                                     │
│    Get your free, no-obligation quote today.                        │
│    We typically respond within 2 hours.                             │
│                                                                     │
│    [Get Your Free Quote]     or     💬 WhatsApp Us                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

- **Background:** Navy-to-teal gradient
- **Text:** White, centered
- **Headline:** H2, 36px, bold, white
- **Subtext:** 18px, white/90% opacity
- **CTA:** Amber button + WhatsApp text link (white, underlined)

---

### 4.2 Services Overview Page

**URL:** `/services`
**Purpose:** Present all services at a glance with clear paths to detail pages

#### Layout

1. **Page Hero**
   - Heading: "Our Cleaning Services"
   - Subtext: "From regular home cleaning to specialist military march-out preparation — we've got you covered."
   - Breadcrumb: Home > Services
   - Background: Soft gray with subtle navy gradient overlay at top

2. **Core Services (4 Large Cards)**
   - Larger format than homepage cards
   - Each card includes:
     - Service illustration or photo (top, 200px height, cover)
     - Service name (H3)
     - 3-line description
     - Key inclusions (3-5 bullet points with teal check icons)
     - Starting price: "From £21/hour" or "From £160"
     - Dual CTA: "View Details" (teal outlined) + "Get a Quote" (amber filled)
   - Layout: 2x2 grid desktop, 1-column mobile

3. **Add-On Services Section**
   - Section heading: "Add-On Services"
   - Subtext: "Enhance any cleaning with these extras"
   - 3 cards in a row:
     - **Oven Cleaning** — from £50
     - **Carpet Cleaning** — from £40/room
     - **Fridge & Freezer** — from £20
   - Each: Icon + name + price + brief description

4. **Bottom CTA**
   - "Need something specific? Let's talk."
   - [Contact Us] button → `/contact`

---

### 4.3 Service Detail Pages

**URLs:** `/services/domestic-cleaning`, `/services/end-of-tenancy`, `/services/commercial-cleaning`, `/services/military-cleaning`

**Purpose:** Detailed breakdown of each service with inclusions, pricing, and a service-specific CTA

#### Template Layout (Same structure, different content)

1. **Service Hero**
   - Service name as H1
   - One-line description
   - Breadcrumb: Home > Services > [Service Name]
   - Hero image relevant to the service

2. **What's Included (Checklist Sections)**
   Organized by area (varies by service):

   **Domestic / End of Tenancy:**
   ```
   General Areas          Kitchen               Bathrooms
   ✓ Surface dusting      ✓ Worktops & cupboards ✓ Toilet & sink
   ✓ Skirting boards      ✓ Sink descaling       ✓ Shower & bath
   ✓ Interior windows     ✓ Appliance exteriors   ✓ Tile descaling
   ✓ Vacuuming & mopping  ✓ Hob cleaning         ✓ Mirror polishing
   ✓ Cobweb removal       ✓ Bin area             ✓ Floor cleaning
   ```

   **Commercial:**
   ```
   Work Areas             Kitchen/Break          Washrooms
   ✓ Desk & surfaces      ✓ Worktop cleaning     ✓ Toilet & sink
   ✓ High-touch disinfect ✓ Sink sanitation      ✓ Mirror polishing
   ✓ Skirting & doors     ✓ Appliance exteriors   ✓ Consumable restock
   ✓ Floor maintenance    ✓ Bin management
   ✓ Glass cleaning
   ```

   **Military:**
   - Same as domestic with emphasis on inspection-specific areas
   - Cupboard interiors (if empty)
   - Commonly-inspected areas highlighted

   - Layout: 3-column checklist grid, teal checkmark icons
   - Mobile: Stacked single column

3. **Pricing Card**
   - Prominent pricing display for this service
   - Domestic: frequency table (weekly/fortnightly/one-off hourly rates)
   - End of Tenancy: bedroom-based table
   - Commercial: "Custom quote based on assessment"
   - Military: "Contact us for a tailored quote"
   - CTA: "Get a Quote for [Service Name]" — amber button

4. **How It Works (Mini)**
   - Condensed 3-step flow (same as homepage but smaller)

5. **FAQ Accordion**
   - 4-6 service-specific questions
   - Example (Domestic):
     - "How long does a typical domestic clean take?"
     - "Do I need to be home during the clean?"
     - "What products do you use?"
     - "Can I change my schedule?"
   - Smooth expand/collapse animation (200ms)

6. **Related Services**
   - "You Might Also Need" section
   - 2-3 cards linking to other services + add-ons
   - Smaller card format

7. **Bottom CTA**
   - "Get a Quote for [Service Name]" → `/quote` (pre-selects service type)

---

### 4.4 About Page

**URL:** `/about`
**Purpose:** Build trust, humanize the brand, tell the IZHUB story

#### Layout

1. **Page Hero**
   - Heading: "About IZHUB Cleaning Service"
   - Subtext: "Local, professional, and trusted across Tidworth and the Salisbury Plain"

2. **Our Story Section**
   - Split layout: Text left (60%), image right (40%)
   - Content: Company story — who IZHUB is, why it was started, what drives it
   - Warm, professional tone — not corporate, not casual
   - Key text from existing site: "IZHUB Cleaning Services is a local cleaning company providing domestic, commercial, end-of-tenancy and march-out cleaning across Tidworth, Bulford, Larkhill, Amesbury, Andover and surrounding areas."
   - Expand with: founding motivation, commitment to the local community, military family understanding

3. **Our Values (3 Cards)**
   ```
   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
   │ ⭐ Professional│  │ 💬 Clear      │  │ 🤝 Reliable   │
   │   Standards   │  │   Communication│  │   Delivery   │
   │               │  │               │  │               │
   │ We maintain   │  │ No surprises. │  │ We show up on │
   │ high standards│  │ Transparent   │  │ time, every   │
   │ on every job. │  │ quotes & open │  │ time, and     │
   │               │  │ dialogue.     │  │ deliver.      │
   └──────────────┘  └──────────────┘  └──────────────┘
   ```
   - 3 equal cards, teal icons, navy titles

4. **Why We're Different**
   - Highlight: Military-specialist expertise (unique differentiator)
   - Highlight: Genuinely local — knows the area, the properties, the community
   - Highlight: Serving tenants, landlords, agents, homeowners, businesses, and military families
   - Format: Feature list with icons or split text+image sections

5. **Team / Founder Section** (optional — if photos/bios available)
   - Founder photo + brief bio
   - "The face behind IZHUB"
   - If not available: skip this section or use a generic team message

6. **CTA Section**
   - "See What We Can Do For You"
   - [Explore Our Services] → `/services`

---

### 4.5 Pricing Page

**URL:** `/pricing`
**Purpose:** Transparent pricing to build trust and qualify leads before they request a quote

#### Layout

1. **Page Hero**
   - Heading: "Transparent Pricing"
   - Subtext: "No hidden fees, no surprises. Here's what our services cost."
   - Note badge: "All prices are 'from' — final quote based on property assessment"

2. **Domestic Cleaning Table**

   | Frequency | Rate | Minimum |
   |-----------|------|---------|
   | Weekly | from £21/hour | 2.5 hours |
   | Fortnightly | from £22/hour | 2.5 hours |
   | One-off / Deep Clean | from £23/hour | 2.5 hours |

   - Card-style table with header row in navy
   - CTA: "Get a Domestic Cleaning Quote" — amber button

3. **End of Tenancy Table**

   | Property Size | Price |
   |--------------|-------|
   | 1 Bedroom | from £160 |
   | 2 Bedrooms | from £190 |
   | 3 Bedrooms | from £230 |
   | 4 Bedrooms | from £270 |

   - Card-style table
   - CTA: "Get an End of Tenancy Quote" — amber button

4. **Add-Ons Table**

   | Add-On | Price |
   |--------|-------|
   | Oven Deep Cleaning | from £50 |
   | Carpet Cleaning | from £40 per room |
   | Fridge Cleaning | from £20 |
   | Freezer Cleaning | from £25 |
   | Fridge-Freezer Combo | from £35 |

   - Clean list format with prices right-aligned

5. **Commercial Pricing Card**
   - Distinctive card (navy background, white text)
   - "Commercial Cleaning — Custom Quote"
   - "Every workspace is different. Contact us for a tailored quote based on your needs."
   - CTA: "Request a Commercial Quote" — white button on navy

6. **Military Pricing Card**
   - Similar card to commercial
   - "Military Accommodation — Tailored Pricing"
   - "We understand the inspection process. Get in touch for a quote specific to your situation."
   - CTA: "Request a Military Quote"

7. **Pricing FAQ Accordion**
   - "Is there a minimum booking time?" → Yes, 2.5 hours for domestic
   - "What affects the final price?" → Property size, condition, specific requirements
   - "Do you charge extra for supplies?" → No, professional-grade supplies included
   - "Are there discounts for regular bookings?" → Weekly bookings have the lowest rate
   - "What payment methods do you accept?" → [to be confirmed]

---

### 4.6 Get a Quote Page

**URL:** `/quote`
**Purpose:** Native multi-step form replacing the external Google Form

#### Form Design: 3-Step Progressive Form

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│           Get Your Free Quote                                       │
│           Fill in a few details and we'll get back to you           │
│           within 2 hours.                                           │
│                                                                     │
│   ● Step 1: About You  ─── ○ Step 2: Your Property ─── ○ Step 3   │
│                                                                     │
│  ┌──────────────────────────────────┐  ┌────────────────────────┐  │
│  │                                  │  │                        │  │
│  │  Full Name *                     │  │  Prefer to talk?       │  │
│  │  ┌──────────────────────────┐    │  │                        │  │
│  │  │                          │    │  │  📞 Call us             │  │
│  │  └──────────────────────────┘    │  │  0786-9165-458         │  │
│  │                                  │  │                        │  │
│  │  Email Address *                 │  │  💬 WhatsApp us         │  │
│  │  ┌──────────────────────────┐    │  │  Quick response        │  │
│  │  │                          │    │  │                        │  │
│  │  └──────────────────────────┘    │  │  ✉ Email us            │  │
│  │                                  │  │  info@izhub.uk         │  │
│  │  Phone / WhatsApp *              │  │                        │  │
│  │  ┌──────────────────────────┐    │  └────────────────────────┘  │
│  │  │                          │    │                              │
│  │  └──────────────────────────┘    │                              │
│  │  (We'll respond via WhatsApp)    │                              │
│  │                                  │                              │
│  │  Are you a new customer?         │                              │
│  │  ○ New customer  ○ Existing      │                              │
│  │                                  │                              │
│  │              [Next →]            │                              │
│  │                                  │                              │
│  └──────────────────────────────────┘                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Step 1: About You**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Full name | Text | Yes | |
| Email address | Email | Yes | |
| Phone / WhatsApp | Tel | Yes | Helper: "We'll usually respond via WhatsApp for speed" |
| New or existing customer? | Radio (2) | No | "New customer" / "Existing customer" |

**Step 2: Your Property**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Property postcode | Text | Yes | Helper: "e.g. SP2 7DY" |
| Property type | Dropdown | No | Flat/Apartment, House, Other |
| Number of bedrooms | Radio (6) | Yes | Studio/1-bed, 2-bed, 3-bed, 4-bed, 5+ bedrooms, Other |
| Type of cleaning | Radio (2+) | No | End-of-tenancy, March-out/military, Domestic regular, Domestic one-off, Commercial |
| Is the property empty? | Radio (3) | No | Yes – completely, Mostly, No |
| Overall condition | Radio (3) | No | Good, Average, Heavy use/deep clean |

**Step 3: Preferences**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Additional services | Checkbox | No | Oven, Carpet, Fridge/freezer, None |
| Preferred cleaning date | Date picker | No | Min date: today |
| Short notice (within 7 days)? | Radio (2) | No | Yes / No |
| Preferred contact method | Radio (3) | Yes | WhatsApp, Phone call, Email |
| Additional notes | Textarea | No | Optional, 3 rows |

**Form UX Details:**
- Progress bar at top: 3 steps with labels, active step = teal filled circle, completed = teal check
- Step transitions: Slide-left animation (250ms ease)
- [← Back] and [Next →] buttons on steps 2-3
- Final step: [Submit Quote Request] amber button
- Inline validation: Red border + error message below field on blur
- Loading state: Button shows spinner during submission
- **Success state:** Form replaced with confirmation message:
  - Teal check icon (large, animated)
  - "Thank You! Your quote request has been submitted."
  - "We'll be in touch within 2 hours."
  - "In the meantime, feel free to WhatsApp us for a quicker response."
- **Side panel** (desktop only, right side): Contact alternatives — phone, WhatsApp, email

---

### 4.7 Contact Page

**URL:** `/contact`
**Purpose:** Multiple contact methods, service area visibility

#### Layout

1. **Page Hero**
   - Heading: "Get in Touch"
   - Subtext: "The quickest way to reach us is via WhatsApp, but we're happy to hear from you any way you prefer."

2. **Contact Methods Grid (4 items)**

   ```
   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
   │ 📞 Phone      │  │ 💬 WhatsApp   │  │ ✉ Email      │  │ 📘 Facebook   │
   │ 0786-9165-458│  │ Quick reply   │  │ info@izhub.uk│  │ IZHUB        │
   │ [Call Now]    │  │ [Message Us]  │  │ [Send Email] │  │ [Visit Page] │
   └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
   ```

   - 4 cards in a row (2x2 on mobile)
   - Each: Icon (teal, 40px) + method name + detail + action button

3. **Contact Form + Map (Split)**
   - Left (50%): Simple contact form
     - Name (text, required)
     - Email (email, required)
     - Phone (tel, optional)
     - Subject (dropdown: General enquiry, Quote request, Feedback, Other)
     - Message (textarea, required)
     - [Send Message] amber button
   - Right (50%): Service area map (Leaflet or illustrated)

4. **FAQ Section (Accordion)**
   - 5-6 general questions:
     - "What areas do you cover?"
     - "How quickly can you start?"
     - "Are your products safe for pets and children?"
     - "Do I need to provide any cleaning supplies?"
     - "What if I need to reschedule?"
     - "Are you insured?"

---

### 4.8 Legal Pages

**URLs:** `/privacy`, `/terms`

- Clean, readable layout with standard legal page styling
- Heading + last updated date
- Table of contents for long documents
- Body text: 16px, 1.65 line-height, max-width 720px centered
- No CTAs or promotional content on legal pages

---

## 5. Global UI Components

### 5.1 Floating WhatsApp Button

```
Position: fixed, bottom-right (bottom: 24px, right: 24px)
Size: 56px circle
Background: #25D366 (WhatsApp green)
Icon: WhatsApp logo (white, 28px)
Shadow: 0 4px 12px rgba(37, 211, 102, 0.4)
Z-index: 50

Hover: Scale 1.1, shadow increases
First visit: Subtle pulse animation (3 pulses, then stops)
Mobile: Slightly smaller (48px), positioned above bottom bar
Tooltip: "Chat with us on WhatsApp" (appears on hover, desktop only)
```

### 5.2 Back to Top Button

```
Position: fixed, bottom-right (above WhatsApp button)
Appears: After scrolling past 500px
Size: 40px circle
Background: White with navy border
Icon: Chevron-up, navy
Shadow: 0 2px 8px rgba(0,0,0,0.1)
Animation: Fade-in on appear, smooth scroll to top on click
```

### 5.3 Cookie Consent Banner

```
Position: fixed, bottom of viewport (full width)
Background: White
Border-top: 1px solid #E2E8F0
Content: Brief text + "Accept" (amber) + "Manage" (text link)
Animation: Slide-up on first visit
Dismisses permanently on accept (localStorage)
```

### 5.4 Mobile Bottom Action Bar

```
Position: fixed, bottom: 0 (full width)
Height: 60px
Background: White
Border-top: 1px solid #E2E8F0
Shadow: 0 -2px 8px rgba(0,0,0,0.05)

3 items evenly spaced:
  📞 Call       💬 WhatsApp    📋 Get Quote
  (tel: link)   (wa.me link)   (→ /quote)

Visible only on < 768px
Z-index: 40
```

### 5.5 Toast Notifications

```
Position: fixed, top-right (top: 24px, right: 24px)
Background: White
Border-left: 4px solid (green for success, red for error)
Shadow: 0 4px 12px rgba(0,0,0,0.1)
Border-radius: 8px
Padding: 16px 20px

Content: Icon + title + message
Animation: Slide-in from right (300ms), auto-dismiss after 5s
```

---

## 6. Interaction & Animation Design

### 6.1 Scroll Animations

| Element | Animation | Duration | Trigger |
|---------|-----------|----------|---------|
| Section headings | Fade-in + slide-up (20px) | 400ms | Enters viewport |
| Cards | Fade-in + slide-up (30px) | 500ms | Enters viewport (stagger 100ms) |
| Trust bar items | Fade-in + scale from 0.9 | 300ms | Enters viewport (stagger 80ms) |
| Stats/numbers | Count up from 0 | 800ms | Enters viewport |
| Images | Fade-in + subtle zoom (1.02 → 1.0) | 600ms | Enters viewport |

### 6.2 Interactive Animations

| Element | Trigger | Animation | Duration |
|---------|---------|-----------|----------|
| Primary button | Hover | Scale 1.02 + shadow deepen | 150ms ease |
| Primary button | Active/Press | Scale 0.98 + shadow reduce | 100ms ease |
| Card | Hover | TranslateY(-4px) + shadow deepen | 200ms ease |
| Nav link | Hover | Underline grows from center | 200ms ease |
| Form input | Focus | Border-color → teal, glow shadow | 150ms ease |
| Form label | Input focus | Float up + shrink (16px → 12px) | 200ms ease |
| Accordion | Toggle | Smooth height expand/collapse | 250ms ease |
| Step transition | Next/Back | Slide left/right | 250ms ease-in-out |
| WhatsApp button | First visit | Pulse (scale 1 → 1.15 → 1) x3 | 1.5s |
| Success check | Form submit | Draw-in SVG path | 500ms ease |

### 6.3 Loading States

- **Page navigation:** Thin teal progress bar at top of viewport (like NProgress)
- **Form submission:** Button text replaced with spinner + "Submitting..."
- **Image loading:** Blur-up placeholder → sharp image (progressive)

---

## 7. Responsive Design Strategy

### 7.1 Breakpoints

| Breakpoint | Name | Target Devices |
|-----------|------|----------------|
| ≥ 1280px | `xl` | Large desktop |
| ≥ 1024px | `lg` | Desktop / tablet landscape |
| ≥ 768px | `md` | Tablet portrait |
| ≥ 640px | `sm` | Large mobile |
| < 640px | `xs` | Mobile (default) |

### 7.2 Layout Shifts by Breakpoint

| Component | Desktop (xl/lg) | Tablet (md) | Mobile (sm/xs) |
|-----------|-----------------|-------------|----------------|
| Header | Full nav + phone + CTA | Full nav + CTA | Hamburger + logo |
| Hero | Split 55/45 | Split 50/50 | Stacked (text → image) |
| Service cards | 4 columns | 2 columns | 1 column |
| How it works | 3 columns + line | 3 columns | Stacked vertical |
| Why choose us | 3x2 grid | 2x3 grid | 1x6 list |
| Testimonials | 3 cards visible | 2 cards | 1 card (swipeable) |
| Service areas | Split (map + list) | Split | Stacked |
| Footer | 4 columns | 2x2 | Stacked (accordion) |
| Quote form | Form + side panel | Form only (full width) | Form only |
| Contact | Form + map split | Stacked | Stacked |
| Bottom action bar | Hidden | Hidden | Visible (fixed) |

### 7.3 Mobile-Specific Design Rules

- Touch targets: minimum 44x44px for all interactive elements
- Font sizes: no smaller than 13px
- Input fields: 48px height minimum (comfortable thumb input)
- No hover-dependent functionality (everything accessible via tap)
- Horizontal scrolling: never (test all components)
- Images: responsive with `max-width: 100%` and appropriate aspect ratios
- Bottom bar provides persistent access to Phone, WhatsApp, and Quote

---

## 8. SEO & Performance Requirements

### 8.1 SEO

**Page Meta Tags (unique per page):**

| Page | Title | Description |
|------|-------|-------------|
| Home | IZHUB Cleaning Service \| Professional Cleaning in Tidworth | Reliable domestic, commercial & military cleaning across Tidworth, Bulford, Larkhill, Amesbury, and the Salisbury Plain. Get your free quote today. |
| Services | Cleaning Services \| IZHUB Cleaning Tidworth | Domestic, end-of-tenancy, commercial, and military accommodation cleaning services in Tidworth and surrounding areas. |
| Domestic | Domestic Cleaning \| IZHUB Cleaning Tidworth | Regular, one-off, and deep cleaning for homes and apartments in Tidworth. From £21/hour. Book today. |
| End of Tenancy | End of Tenancy Cleaning \| IZHUB Tidworth | Inspection-ready end-of-tenancy and move-out cleaning. From £160. Tidworth, Bulford, Amesbury. |
| Commercial | Commercial Cleaning \| IZHUB Tidworth | Professional office, shared space, and Airbnb cleaning with flexible scheduling. Get a custom quote. |
| Military | Military Accommodation Cleaning \| IZHUB Tidworth | Specialist march-out and inspection cleaning for military families in Tidworth, Bulford, and Larkhill. |
| About | About Us \| IZHUB Cleaning Service | Local, trusted cleaning company serving Tidworth and the Salisbury Plain. Professional standards, clear communication, reliable delivery. |
| Pricing | Pricing \| IZHUB Cleaning Service Tidworth | Transparent cleaning prices. Domestic from £21/hr, end-of-tenancy from £160. No hidden fees. |
| Quote | Get a Free Quote \| IZHUB Cleaning Tidworth | Request your free, no-obligation cleaning quote. We respond within 2 hours. |
| Contact | Contact Us \| IZHUB Cleaning Service | Get in touch via WhatsApp, phone, or email. Serving Tidworth, Bulford, Amesbury, Andover. |

**Structured Data:**
- Schema.org `LocalBusiness` on every page
- Schema.org `Service` on service detail pages
- Schema.org `FAQPage` on pages with FAQ accordions
- Open Graph + Twitter Card meta on all pages

**Technical SEO:**
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- One `<h1>` per page
- Descriptive `alt` text on all images
- Internal linking between related services
- XML sitemap
- robots.txt
- Canonical URLs

### 8.2 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 95+ |
| Largest Contentful Paint (LCP) | < 2.5s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total page size | < 500KB (initial load) |
| Time to Interactive | < 3s |

**Optimization Strategies:**
- Static Site Generation (SSG) via Next.js for all pages
- Image optimization: Next.js `<Image>` component with WebP, lazy loading, blur placeholders
- Font optimization: `next/font` with Inter (subset, swap display)
- Code splitting: automatic via Next.js App Router
- Minimal client-side JavaScript (only for form, carousel, animations)
- CSS: Tailwind purged for production (minimal CSS bundle)

### 8.3 Accessibility (WCAG AA)

- Color contrast: 4.5:1 minimum for normal text, 3:1 for large text
- Keyboard navigation: all interactive elements reachable via Tab
- Focus indicators: visible focus ring on all focusable elements (teal outline)
- ARIA labels: on icon-only buttons, form fields, navigation landmarks
- Semantic HTML: proper heading hierarchy, landmark roles
- Screen reader: all images have alt text, decorative images have `alt=""`
- Reduced motion: respect `prefers-reduced-motion` — disable animations
- Form accessibility: labels associated with inputs, error messages linked via `aria-describedby`

---

## 9. Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 14+ (App Router) | SSG, routing, API routes, image optimization |
| **Language** | TypeScript | Type safety across the codebase |
| **Styling** | Tailwind CSS | Utility-first CSS, consistent design system |
| **Animations** | Framer Motion | Scroll reveals, page transitions, micro-interactions |
| **Icons** | Lucide React | Consistent, clean line icons |
| **Forms** | React Hook Form + Zod | Multi-step form with validation |
| **Email** | Resend API | Form submission email notifications |
| **Maps** | Leaflet (or static) | Service area visualization |
| **Analytics** | GA4 + Vercel Analytics | Traffic and performance monitoring |
| **Deployment** | Vercel | Hosting, CDN, SSL, preview deployments |
| **Version Control** | Git + GitHub | Source code management |

### Project Structure (Planned)

```
src/
├── app/
│   ├── layout.tsx              # Root layout (header, footer, WhatsApp button)
│   ├── page.tsx                # Home page
│   ├── services/
│   │   ├── page.tsx            # Services overview
│   │   ├── domestic-cleaning/page.tsx
│   │   ├── end-of-tenancy/page.tsx
│   │   ├── commercial-cleaning/page.tsx
│   │   └── military-cleaning/page.tsx
│   ├── about/page.tsx
│   ├── pricing/page.tsx
│   ├── quote/page.tsx          # Multi-step form
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileBottomBar.tsx
│   │   └── Navigation.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Accordion.tsx
│   │   ├── Badge.tsx
│   │   ├── Toast.tsx
│   │   └── ProgressBar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ServiceAreas.tsx
│   │   ├── CTABanner.tsx
│   │   └── FAQ.tsx
│   ├── forms/
│   │   ├── QuoteForm.tsx
│   │   ├── ContactForm.tsx
│   │   ├── FormStep1.tsx
│   │   ├── FormStep2.tsx
│   │   └── FormStep3.tsx
│   └── common/
│       ├── WhatsAppButton.tsx
│       ├── BackToTop.tsx
│       ├── CookieConsent.tsx
│       └── ScrollReveal.tsx
├── lib/
│   ├── constants.ts            # Colors, contact info, service data
│   ├── validations.ts          # Zod schemas
│   └── utils.ts
├── data/
│   ├── services.ts             # Service content & pricing
│   ├── testimonials.ts         # Testimonial content
│   └── faq.ts                  # FAQ content by page
└── styles/
    └── globals.css             # Tailwind base + custom styles
```

---

## 10. Content Requirements

### 10.1 Images Needed

| Image | Usage | Recommended Size | Notes |
|-------|-------|-----------------|-------|
| Hero image | Home page hero | 1200x800px | Sparkling clean living room or kitchen |
| Domestic service | Service cards & detail page | 800x600px | Home cleaning in action |
| End of tenancy | Service cards & detail page | 800x600px | Empty, sparkling property |
| Commercial | Service cards & detail page | 800x600px | Clean office space |
| Military | Service cards & detail page | 800x600px | Clean military accommodation |
| Oven cleaning | Add-on card | 600x400px | Before/after oven |
| Carpet cleaning | Add-on card | 600x400px | Carpet cleaning in progress |
| About page | Company/team photo | 800x600px | Team or founder photo |
| Service area | Map illustration | 1000x600px | Tidworth area map |
| Logo (light) | Header | SVG | Navy/teal on transparent |
| Logo (dark) | Footer | SVG | White on transparent |
| OG image | Social sharing | 1200x630px | Branded for social cards |

**Image guidelines:**
- Professional quality (stock photos are acceptable but should feel authentic)
- Consistent color temperature (warm, inviting)
- All images optimized to WebP, with JPEG fallback
- Provide 2x versions for retina displays

### 10.2 Copy to Write / Expand

| Page | Content Needed |
|------|---------------|
| Home hero | Refine headline and subtext for maximum impact |
| About page | Expanded company story (founding, motivation, community connection) |
| Service detail pages | Individual descriptions and FAQ answers for each service |
| Testimonials | Placeholder reviews (to be replaced with real ones) |
| FAQ content | 20-25 questions across all pages |
| Meta descriptions | Unique SEO descriptions for all 12 pages |
| Legal pages | Privacy Policy and Terms & Conditions (UK/GDPR compliant) |

### 10.3 Contact Information (Preserved from Original)

| Item | Value |
|------|-------|
| Phone | 0786-9165-458 |
| International | +44 7869 165458 |
| Email | info@izhub.uk |
| WhatsApp | +44 7869 165458 |
| Facebook | IZHUB Cleaning Service |
| Domain | cleaning.izhub.uk |
| Service Areas | Tidworth, Bulford, Larkhill, Amesbury, Ludgershall, Andover, Salisbury Plain |

---

> **Next Step:** Use this document as the reference throughout implementation. Begin with project setup (Next.js + Tailwind), then build the component library, then implement pages starting with Home.
