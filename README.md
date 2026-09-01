# Website UI kit — Lux Wellness

Recreation of the practice's public site, built from the founder's own working build
(`uploads/index.html`, provided in-project) plus the written brief. Layout, section order, palette and much of
the copy come from that file; the structure has been split into React screens that compose this system's
primitives.

## Screens
| File | Screen | Notes |
|---|---|---|
| `HomeScreen.jsx` | Home | Navy hero + stat row, philosophy split, 5-step process band, Dr. Gaughan credential seal, closing CTA |
| `ApproachScreen.jsx` | Approach | Tabbed bloodwork / nutrition / supplementation / lifestyle detail, rehab-inflammation band |
| `ProvidersScreen.jsx` | Providers | Dr. Brian Gaughan bio, credential list, clinical focus, "growing the team" band |
| `ServicesScreen.jsx` | Services | Six service cards with gold top rules |
| `PartnersScreen.jsx` | Partners | Chiropractor co-management and personal-trainer affiliate tracks, referral workflow, legal note |
| `ContactScreen.jsx` | Contact | Full enquiry form, audience selector, time picker, confirm dialog, success toast |
| `SiteChrome.jsx` | Header / footer / Section / GoldRule / Placeholder | Shared scaffolding |

`index.html` mounts all five as a click-through: nav and every CTA route between screens, tabs and chips are
live, and the contact flow runs form → dialog → toast.

## Fidelity notes
- Section order, hero copy, philosophy copy, the service list and both partner tracks are taken from the
  founder's build, mostly verbatim.
- **Changed deliberately:** the source uses emoji as service-card icons (🩸 🥗 💊 ♻️ 🤝 📈). Emoji are off-brand
  for a clinical premium practice and are not used here — the cards lead with the gold top rule and uppercase
  title instead. If you want icons there, say so and I'll wire in the Lucide set.
- **Changed deliberately:** the source's 5-step process said "brief intake call"; the brief specifies
  **15 minutes**, and step 05 now names **weekly check-ins and a retest**, per the brief.
- Named third parties (Evexia Diagnostics as lab partner) are kept. The specific partner clinic and the
  telehealth platform name are not named on any screen.
- The referral-compensation note on the Partners screen is placeholder legal language pending your attorney's
  review — anti-kickback and Stark compliance is not something this kit can settle.

## Placeholders
Every image is a labelled placeholder block; no photography was provided. Replace them before launch.
