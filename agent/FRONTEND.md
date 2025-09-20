# FRONTEND.md

Quant Frontend Design & Component Guidelines

Purpose
- Give humans and LLMs a single source of truth for building and editing the Quant marketing site (Next.js 15 + Tailwind v4 + shadcn/ui).
- Keep output consistent, accessible, and fast to iterate on.

Stack at a glance
- Framework: Next.js 15 (App Router, Server Components by default)
- Styling: Tailwind CSS v4 (utilities) + CSS variables defined in src/app/globals.css
- UI Kit: shadcn/ui (when needed)
- Icons: lucide-react
- Animations: tw-animate-css (utility classes)
- State: Minimal, client components only when interactivity is needed
- ABSOLUTE RULE: styled-jsx is banned. Use Tailwind utilities and CSS variables only.

Design tokens (from globals.css)
- Colors (semantic vars)
  - --color-background: #ffffff (light)
  - --color-foreground: #0a0a0a
  - --color-primary: #171717 (used for dark text/primary fg)
  - --color-secondary / --color-muted / --color-accent: neutrals for surfaces
  - Charts and sidebar tokens available for data viz/sidebars
  - Direction for Quant: replace green accent with Trusted Blue for CTAs/highlights
- Radii
  - --radius-lg (cards), --radius-button (pill CTAs), --radius-element (small UI)
- Typography
  - --font-display, --font-body: Inter
- Usage in Tailwind
  - bg-[var(--background)] text-[var(--foreground)]
  - text-[var(--soft-trusted-blue)] (for legacy headings; prefer brand rules below)

Quant brand direction
- Brand: Quant (AI-powered accounting for F&B)
- Tone: Professional, trustworthy, modern, approachable
- Colors
  - Primary surface: White
  - Accent: Trusted Blue (replaces legacy green for all CTAs/highlights)
  - Black used for contrast and key text
- Migration note
  - When you touch any CTA or accent element, use blue instead of green. If a component still references

Implementing Quant Blue
- Preferred approach: Add a new token once across the theme, then reference via Tailwind’s arbitrary values.
- Add in globals.css (single change when requested):
  - --color-brand-blue: #2563eb (example soft trusted blue)
  - --brand-blue: var(--color-brand-blue)
- Usage examples
  - Primary button: className="bg-[var(--brand-blue)] text-white hover:brightness-95"
  - Link highlight: "text-[var(--brand-blue)] hover:underline"
  - Focus ring: "focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-[var(--brand-blue)]"

Layout & spacing
- Container: Use the .container class (max-w: 1200px; px: 40px)
- Section padding: pt-20 pb-20 on desktop, reduce to pt-12 pb-12 on mobile
- Card padding: p-8, gap-6 for inner spacing
- Grid gaps: gap-8 for multi-card layouts

Typography
- Headings: h1 (60), h2 (40), h3 (32) via base layer; use text-balance classes as needed
- Body: text-[18px] leading-relaxed for paragraphs; use text-secondary for muted copy
- Don’t hardcode HEX colors; always use CSS variables

Accessibility (always)
- Color contrast: Ensure 4.5:1 for text on backgrounds (blue on white is OK at 600+)
- Semantics: Proper h1 per page, then descending order; nav/section/footer landmarks
- Focus: Visible focus states; never remove outlines without replacement
- Alt text: Describe intent, not decoration; use empty alt for purely decorative images

Responsiveness
- Mobile-first: Start at base, then md/lg for enhancements
- Images: Use next/image for optimization where applicable
- Grids: Stack to single column on <= md screens

Animation guidelines
- Keep it subtle and fast (200ms)
- Use tw-animate-css utilities or Tailwind transitions
- Avoid layout-shifting animations on initial load

Component architecture
- Pages (app/*/page.tsx): Server Components, compose section components
- Section components (src/components/sections/*)
  - Server Components by default (no "use client")
  - Receive only serializable props
  - Encapsulate markup + Tailwind classes
- Client components
  - Add "use client" only when state, effects, or handlers are necessary
  - Never import server-only APIs in client components

Exports
- Components: named exports (export const ComponentName = ...)
- Pages: default export (export default function PageName() { ... })

Content & conversion principles (Quant)
- Audience: F&B operators (restaurants, cafés, chains)
- Benefits-first: Efficiency, Accuracy, Profitability, Scalability
- AI framing: "AI assists; you stay in control"
- Every section should push action (Start free trial / Book a demo)
- Avoid jargon; quantify impact (time saved, fewer errors, margin lift)

Common patterns (copy + UI)
- Section headings: Short, outcome-led
- Supporting text: 1–3 lines, plain language, numbers if possible
- CTAs: Primary (Start free trial) in blue, Secondary (Book a demo) in outline/ghost
- Proof: Logos, metrics, testimonials near the action

Ready-made section blueprints
- Header
  - Structure: Logo | Nav | Actions
  - Classes: sticky top-0 z-50 bg-white/80 backdrop-blur border-b
  - Actions: Primary button in brand blue
- Hero
  - Structure: Announcement > H1 > Subhead > CTAs > Visual
  - Background: subtle gradient or plain white, lots of whitespace
- Before/After comparison
  - 2-column grid on md+, stack on mobile. Left (pain), Right (solution)
- Logos grid
  - Grayscale logos with consistent sizing and opacity hover
- How it works (steps)
  - 3–4 steps; each step = icon, short title, 1–2 lines
- Testimonials
  - Quote > attribution > role; optional logo; restrained styling
- Platform/Integrations
  - Logos in rounded cards; tooltip or caption
- Templates/Reports
  - Tabs or pill filters; right panel shows selected template preview
- AI capabilities
  - Pill actions + input prompt; assurances about control and approval
- Sharing
  - Grid/list of destinations; link-style chips; highlight permissions
- Pricing
  - 3 tiers; emphasize value + CTA; free to start
- Final CTA
  - Restate core benefit + large centered buttons
- Footer
  - 3–4 columns; legal + social; consistent spacing

Button system
- Primary: bg-[var(--brand-blue)] text-white hover:brightness-95 focus-visible:outline-[var(--brand-blue)] rounded-[var(--radius-button)] px-6 py-3 text-sm font-medium
- Secondary: border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--secondary)] rounded-[var(--radius-button)] px-6 py-3 text-sm
- Destructive: bg-[var(--destructive)] text-[var(--destructive-foreground)]

Card pattern
- Container: rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] shadow-sm
- Padding: p-6 md:p-8
- Headline + body + actions stacked with gap-4

Icon usage
- Import from lucide-react only
- Size: 18–24 for inline, 32–48 for feature icons
- Color: currentColor; inherit text color

File & naming conventions
- Section components live in src/components/sections and match route usage
- Keep one component per file; co-locate helpers next to component if only used there
- Avoid deep nesting; prefer composition via props/children

Example: section skeleton (Server Component)
```tsx
// src/components/sections/example-section.tsx
export const ExampleSection = () => {
  return (
    
      
        Outcome-led headline
        1–2 lines supporting copy focused on benefits.
        
          
            Start free trial
          
          
            Book a demo
          
        
      
    
  );
}
```

Do / Don’t
- Do
  - Use Server Components for static sections
  - Use CSS variables via Tailwind arbitrary values (bg-[var(--...)])
  - Keep copy benefit-focused, quantify impact
  - Add loading/focus/hover states for interactive elements
- Don’t
  - Don’t use styled-jsx
  - Don’t hardcode hex colors in components
  - Don’t bring server-only APIs into client components
  - Don’t create duplicate patterns (reuse button/card styles)

LLM prompts: how to ask for UI changes
- "Update all primary CTAs to use brand blue and add hover:brightness-95"
- "Add a 3-step How It Works section using the step pattern with icons: Bank connect, AI reconcile, Insights dashboard"
- "Replace legacy green accents with var(--brand-blue) across header and hero"
- "Create a Testimonials grid with 3 cards using the Card pattern and quote markup"

Content checklist per section
- Clear headline (benefit oriented)
- 1–3 lines supportive copy (numbers preferred)
- Visual or proof (logos, metrics, quotes)
- Primary CTA (Start free trial)
- Secondary CTA (Book a demo) when space allows

Performance tips
- Prefer Server Components and static markup
- Lazy-load heavy/interactive client components
- Optimize images and use width/height to prevent CLS

Where things are
- tokens: src/app/globals.css
- homepage composition: src/app/page.tsx
- sections: src/components/sections/*

Change management
- Smallest viable change that fully solves the request
- Preserve existing functionality unless explicitly asked otherwise
- If you add new routes/pages, update navigation accordingly

End.