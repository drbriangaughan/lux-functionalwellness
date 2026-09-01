# Lux Wellness — Design System

**Lux Wellness** is a virtual functional-medicine practice: functional bloodwork interpretation with dietary,
lifestyle and supplementation coaching. The name is the Latin word for *light* — the drive for patients to reach
their full potential in their vocation and their health.

The practice sells two ways at once, and every design decision has to serve both:

1. **Direct to patients** — individuals who want to know what their bloodwork actually says and what to do about it.
2. **To chiropractors and clinics (the growth engine)** — rehab-focused chiropractic offices add functional
   wellness to their practice without adding overhead. Lux handles the bloodwork review, nutritional counseling
   and supplementation protocol virtually, in coordination with the office's care plan. Reducing systemic
   inflammation helps the patient hold adjustments and recover faster, which reflects well on the referring
   office. Referring providers are compensated under a written co-management agreement. A personal-trainer
   affiliate track runs alongside it.

**Clinician.** Dr. Brian Gaughan, licensed Doctor of Chiropractic and functional medicine clinician, certified
through the **Kharrazian Institute**.

**The care path.** 15-minute consultation → functional bloodwork ordered through **Evexia Diagnostics** (draw
sites nationwide, no hospital) → virtual review of results in plain language → a written plan covering diet,
lifestyle and supplementation → **weekly check-ins** → **retest the bloodwork to confirm we changed what we set
out to change.** That last step is the practice's differentiator: the change gets measured, not assumed.

**Stage.** Early. LLC formation and the patient-facing website are the first two steps. Growth is outbound calls
to chiropractic offices, starting with one partner rehab office and expanding from there.

**Brand attributes**, in priority order: professional yet approachable · modern and creative · structured and
trustworthy · warm and community-driven · premium and scalable · energetic without being overwhelming ·
encouraging and inspiring.

## Sources given
- **`uploads/index.html`** — the founder's own working site build. **This is the primary visual source.** The
  palette (gold `#C9A84C`, navy `#0D1F3C`, cream `#FAF7F2`), the uppercase-condensed heading treatment, the
  italic serif ledes, the square gold CTA, the 4px gold card top rule, the 3px gold section divider, the
  credential seal and most section copy are taken from it.
- **Written brief** — business model, referral structure, care path, clinician credentials, colour direction
  (gold with royal blue second), and the request for three font and three logo options.
- **`www.lux-functionalwellness.com`** — could not be fetched from this environment. Nothing here is derived from
  the live site; if it differs from the uploaded build, tell me which one wins.
- **No** Figma file, component library, logo file, font binaries, photography or icon set was provided.

No source defined a component inventory, so the component set is the standard from-scratch one, sized to what
this practice needs now: a marketing site and an enquiry/booking flow.

---

## Decisions locked in

**Typeface: Option A — Archivo.** Chosen by the founder. Display and UI are one family; headings are UPPERCASE
with open tracking. **Libre Baskerville italic** is retained from the site build as the accent serif for ledes and
philosophy prose — it is the warm counterweight to all the uppercase Archivo, and it should not be swapped for
the sans.

**Logo: Option C — the bracket lockup.** Chosen by the founder. A 3px gold rule at the left with **LUX** and
the **WELLNESS** subline stacked beside it. It is the `Logo` component's default and appears in the nav, the
footer and on slides. `boxed` and `outline` are kept as secondary lockups for avatar crops and print.
Both decisions are recorded in the *Type → Font options* and *Brand → Logo options* cards.

<details>
<summary>The three options as presented, with pros and cons</summary>

### Fonts
**A · Archivo 800 uppercase + Archivo 400 — CHOSEN**
Pros: boxy, engineered, confident; uppercase with open tracking gives headlines authority without shouting; one
family covers display, UI and body, so it scales into a patient portal without adding load; very legible at small
sizes for lab tables and form labels; pairs naturally with a square wordmark.
Cons: a grotesque reads more "performance clinic" than "spa"; less immediately warm than B or C (the serif ledes
exist to offset exactly this); all-caps headlines need generous line height and short lines.

**B · Bricolage Grotesque 700 + Instrument Sans**
Pros: the most distinctive and human; visible personality in the letterforms; strong differentiator against the
flat sans look most functional-medicine sites use.
Cons: the personality can undercut clinical trust; more fragile at very large sizes; two families to manage; its
quirk dates faster than a neutral grotesque.

**C · Young Serif + Karla**
Pros: the most premium and editorial; warm, sturdy shapes signal established and hospitable; excellent for
long-form journal content and print.
Cons: display weights only, so it cannot carry UI text; leans hospitality spa rather than data-driven medicine;
risks reading older than the audience.

### Logos
All three are typographic — the brief asked for a minimal boxy wordmark, so the name is the mark. Nothing is
drawn or illustrated.

**A · Boxed** — gold **LUX** in a solid navy block, subline below.
Pros: boxiest and highest contrast; the filled block is a reusable brand device and a strong social avatar;
gold-on-navy is the whole brand in one glance.
Cons: the block competes with photography and needs clear space; needs an inverted version on dark; least
quiet-luxury of the three.

**B · Outline** — hairline gold frame around **LUX**, subline inside.
Pros: most premium and stationery-friendly; reads like a certificate; beautiful embossed or in print.
Cons: the 2px frame is fragile at favicon size; the enclosed subline limits how small it goes; less punchy in a
web header.

**C · Bracket — CHOSEN** — gold rule at the left, **LUX** and subline stacked beside it.
Pros: most flexible and modern; sits comfortably in a tight navbar; scales down without losing structure; reads
calm and editorial; the gold rule echoes the 3px section divider and the 4px card top rule, so the mark and the
layout language are the same idea.
Cons: the least enclosed shape, so no strong avatar crop (use `boxed` there); relies on the typeface for character.
</details>

---

## Content fundamentals

**Voice:** a confident clinician who respects your intelligence. Certain about the process, never certain about
your outcome before the labs are in. Encouraging without cheerleading.

**Person:** "we" for the practice, "you" for the reader — patient or provider. Never "our patients" in
patient-facing copy; talk to them, not about them.

**Two audiences, two registers.** Patient copy is plain and reassuring: *"Your blood doesn't lie."* Provider copy
is businesslike and outcome-framed: *"Add functional wellness to your practice without adding overhead."* Never
mix them in one section — the site separates them into their own bands.

**Casing:** headings, buttons, eyebrows, labels and nav are UPPERCASE with tracking (that is the brand's whole
typographic signature). Body copy, ledes and form hints are sentence case. No Title Case Sentences.

**Sentences:** short declaratives, then a qualifier that keeps it honest.
- Hero: "Your health has a foundation." / "We help you find it — through functional bloodwork, honest answers, and habits that actually fit your life."
- Philosophy: "True wellness isn't complicated — it's consistent."
- Proof: "Your blood doesn't lie."
- Process: "Simple, virtual, and built around your schedule."
- Provider: "Patients get faster results — which reflects well on your practice."

**Numbers are specific and true:** "15 min first consultation", "weekly check-ins", "retest to prove the change",
"80+ markers". No invented percentages, no "up to 300% more energy".

**Never:** disease or cure claims, before/after promises, scare copy about the patient's other doctors, "detox"
or "toxins" as standalone hooks, exclamation marks, ALL-CAPS urgency, countdown scarcity. Hedge outcomes, not
process: *"most patients notice change in the first block"*, not *"you will feel better in six weeks"*.

**Compliance language:** referral compensation is always described as a written **co-management agreement**, never
a "kickback" in public copy, and any such page carries a note that terms are subject to counsel review and state
and federal law (anti-kickback, Stark).

**Emoji:** never. The founder's build uses them as service-card icons; this system does not, and the UI kit
replaces them with the gold rule treatment.

**Buttons:** verb + object, two to four words — "Book your review", "See how it works", "Talk to us about
partnering", "Become an affiliate". Not "Submit", not "Click here".

---

## Visual foundations

**Colors.** Navy `#0D1F3C` is the structural colour: dark bands, headings, primary text, outlined buttons. Gold
`#C9A84C` is *the light* — it carries the CTA fill, the eyebrows, the card top rule, the section dividers, the
active tab indicator, the list bullets and the logo rule. Cream `#FAF7F2` is the page; white is for cards. Text
greys are cool-navy tinted (`#3A4A62`, `#8492A8`), not warm. Rule of thumb: **navy is structure, gold is light,
cream is air.** Gold-500 is never used as text on white or cream — use `--gold-700` (`#8B6E2F`) for gold-toned
type on light, or put the gold on navy.

**Type.** Archivo everywhere structural. Display 96/64px and H1–H4 are uppercase, weight 700–800, tracking
opening from +0.04em at display to +0.06em at H3. Eyebrows are 12px uppercase at 0.25em; labels 13px at 0.15em;
buttons at 0.12em. Body is 17px at 1.7. Ledes and philosophy prose are Libre Baskerville, italic for ledes.
Nothing below 13px.

**Layout.** 1200px content column with 5% page gutters, 100px section rhythm. 4px spacing grid. Sections
alternate cream → navy → cream, with a **3px horizontal gold gradient rule** (`--gold-rule`, transparent → gold →
transparent) marking the seam between major bands. Asymmetric two-column splits (1.1fr / 0.9fr, 1.3fr / 0.7fr)
rather than perfect halves. Hero stats sit bottom-right of the hero, right-aligned. The header is the only fixed
element: solid navy, 72px, sticky.

**Backgrounds.** Flat colour only. Two sanctioned gradients and nothing else: the 3px gold divider rule, and
`--gradient-protect` (transparent → navy 82%) as a scrim under text on photography. No patterns, textures, grain,
illustration or blobs.

**Imagery.** Warm natural light, real people, shallow depth of field; clinical detail shot honestly. No stock lab
coats, no stethoscope close-ups, no cool blue-filtered "medical tech" imagery. **None was provided** — every image
slot is a labelled placeholder block.

**Cards.** White, **square**, `--shadow-1` (`0 2px 20px rgba(13,31,60,.06)`), and a **4px gold top rule** — that
rule is the brand's card signature. 36px/32px padding. Interactive cards lift 4px to `--shadow-3`. Sunken cards
are sand-100, accent cards gold-100, inverse cards a 4% white wash on navy with a hairline border. Turn the top
rule off (`topRule={false}`) for plain in-product panels. **Never a colored left border.**

**Radii.** Square. `--radius-0` through `--radius-3` are all `0px`; `--radius-4` is 2px for nested chrome. The
only curves in the system are the pill (`Tag`, `Switch`) and the 50% circle of the credential seal.

**Shadows.** Soft, wide, navy-tinted, four levels: card rest, sticky panel, hover/toast, dialog. No inner-shadow
system — depth comes from surface colour and the gold rule, not bevels. Focus is a 3px gold glow at 45%
(`--shadow-focus`) plus a gold border.

**Borders.** One hairline (`rgba(13,31,60,.12)`) does most separation; inputs use it at 1.5px. Strong navy borders
appear on secondary buttons and selected states. The 4px gold top rule and 2px gold frame are brand devices, not
general borders. On navy, borders are white at 18%.

**Transparency and blur.** Sparing. `--blur-panel` exists for translucent panels, and the dialog scrim is
navy-black at 62% with a blur. No frosted cards, no glassmorphism.

**Animation.** Restrained and quick. 120ms colour, 200ms lifts and toggles, 340ms panels and dialogs, 600ms
one-time scroll fade-up. Easing `cubic-bezier(.2,.6,.2,1)`. Fades and small translations only — no bounces,
springs, scale-ins, parallax or looping ambient motion. `prefers-reduced-motion` zeroes every duration.

**Hover.** Gold buttons lighten to `--gold-300` and lift 2px. Secondary buttons invert to filled navy. `onDark`
outline buttons take a gold border and gold text. Cards lift 4px into a deeper shadow. Nav links go gold. Opacity
is never a hover state.

**Press / disabled.** Press settles back to rest position (no shrink, no scale). Disabled is 42% opacity with
`not-allowed` and no colour change.

---

## Iconography

- **Set:** [Lucide](https://lucide.dev) — 24px box, 1.75px stroke, round caps, no fill, `currentColor`.
  **This is a substitution:** no icon set was provided. Loaded from CDN
  (`https://unpkg.com/lucide@0.427.0/dist/umd/lucide.js`); there is no local sprite or icon font here.
- **Working vocabulary:** `heart-pulse`, `activity`, `flask-conical`, `microscope`, `stethoscope`, `apple`,
  `moon`, `dumbbell`, `calendar-check`, `message-circle`, `file-text`, `trending-up`, `shield-check`, `leaf`,
  `sun`, `droplet`, `clipboard-list`, `user-round`, `pill`, `brain`. See *Brand → Iconography*.
- **Colour:** navy on light, white or gold on navy. Gold icons only inside an accent surface. Never multicolour,
  never filled, never inside a coloured circle badge.
- **Not used:** **emoji** (the founder's build uses them on service cards; this system does not), unicode
  dingbats as UI icons, PNG icons, hand-drawn SVG. The 8px gold **square** used as a list bullet is a brand
  device, not an icon — deliberately a square and not a checkmark.
- **Where icons are allowed:** `IconButton`, input adornments, utility nav. Marketing sections lead with type,
  numerals and the gold rule instead of icon grids.

---

## Components

React primitives, one directory per concern. Each has a `.jsx`, a `.d.ts` props contract, a `.prompt.md` usage
note, and one `@dsCard` HTML per directory. All styling is via CSS custom properties; no CSS-in-JS, no npm deps.

**Brand** (`components/brand/`) — `Logo`
**Core** (`components/core/`) — `Button`, `IconButton`, `Card`, `Badge`, `Tag`, `SectionHeading`
**Forms** (`components/forms/`) — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**Feedback** (`components/feedback/`) — `Dialog`, `Toast`, `Tooltip`
**Navigation** (`components/navigation/`) — `Tabs`

### Intentional additions
No source library defined the inventory, so the set above is the standard from-scratch set. Two entries are
brand-specific:
- `Logo` — there is no logo file, so the wordmark exists as code to be usable at all.
- `SectionHeading` — the gold eyebrow → uppercase heading → italic serif lede rhythm repeats on every section;
  encoding it keeps that rhythm exact instead of hand-built each time.

Deliberately **not** built: Avatar, Breadcrumb, Accordion, Table, DatePicker, Pagination. Add them when a real
screen needs them.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Global entry point — `@import` list only. Link this one file. |
| `tokens/fonts.css` | Archivo + Libre Baskerville (Google Fonts — see Caveats) |
| `tokens/colors.css` | Navy / gold / cream ramps, status colours, semantic aliases |
| `tokens/typography.css` | Uppercase heading scale, tracking, serif lede role |
| `tokens/spacing.css` | 4px scale, layout widths, square radii, rule widths |
| `tokens/elevation.css` | Shadows, gold focus ring, scrim, panel blur |
| `tokens/motion.css` | Durations, easing, transitions, reduced-motion override |
| `tokens/base.css` | Resets, uppercase heading defaults, `.lux-*` helpers |
| `components/…` | Reusable primitives (see Components) |
| `guidelines/*.card.html` | Foundation specimen cards in the Design System tab |
| `ui_kits/website/` | Site recreation — 5 click-through screens + `README.md` |
| `assets/README.md` | Asset inventory — currently empty and why |
| `thumbnail.html` | Homepage tile for this design system |
| `SKILL.md` | Agent Skills wrapper so this folder works inside Claude Code |
| `uploads/index.html` | **The founder's working site build — primary visual source.** Not maintained by me. |

Specimen card groups: **Colors** (5), **Type** (5), **Spacing** (3), **Surfaces** (3), **Motion** (2),
**Brand** (3), **Components** (5), **Website** (1).

---

## Caveats

1. **`www.lux-functionalwellness.com` was unreachable.** The uploaded build stands in as the visual source.
   Note the naming gap: the brief calls the business **Lux Wellness**, the uploaded build says **LUX Functional
   Wellness**. This system uses **Lux Wellness** with a `WELLNESS` subline — confirm which is the legal/LLC name.
2. **Fonts load from Google Fonts.** No licensed binaries were provided. Archivo and Libre Baskerville are both
   open-licence, so this is production-safe; drop files into `assets/fonts/` and swap the `@import` lines for
   `@font-face` rules if you buy retail fonts.
3. **Icons are a substitution** (Lucide, CDN) — no icon set was provided.
4. **No photography, illustration or logo files exist here.** Every image is a labelled placeholder; the logo is
   type-only by design.
5. **Referral compensation copy is placeholder legal language.** Anti-kickback and Stark compliance needs your
   attorney, not a design system.
6. **Nothing in this system names the partner clinic**, per your note.
