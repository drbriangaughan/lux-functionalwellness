const { Button, Card, SectionHeading } = window.LuxFunctionalWellnessDesignSystem_cefeb7;

const SERVICES = [
  ['Functional bloodwork review', 'A comprehensive review of your bloodwork panel interpreted through a functional lens — not just whether you\'re "in range," but whether you\'re truly optimal.', 'Book a review'],
  ['Nutritional counseling', 'Personalized dietary guidance based on your bloodwork and health goals. We identify deficiencies, sensitivities, and opportunities that standard advice misses.', 'Get started'],
  ['Supplementation protocols', 'Evidence-informed supplementation recommendations tailored to your individual results — not a one-size-fits-all stack off a shelf.', 'Learn more'],
  ['Lifestyle & habit coaching', 'Sustainable change happens through habits. We help you build routines around sleep, stress, movement, and daily nutrition that compound over time.', 'Start the conversation'],
  ['Co-management for clinics', 'Working alongside chiropractic rehab offices to provide functional wellness care that accelerates patient recovery and reduces systemic inflammation.', 'Partner with us'],
  ['Performance optimization', 'For athletes and driven individuals who want to understand their biomarkers and use that data to train smarter, recover faster, and perform longer.', 'Optimize now'],
];

function ServicesScreen({ go }) {
  const { Section, GoldRule } = window;
  return (
    <>
      <Section tone="light" pad="80px">
        <SectionHeading eyebrow="What we offer" title="Services" lede="Virtual functional care, from the first panel to the retest." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-6)', marginTop: 56 }}>
          {SERVICES.map(([t, d, cta], i) => (
            <Card key={t} interactive title={t} onClick={() => go(i === 4 ? 'partners' : 'contact')}>
              <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.7, color: 'var(--text-muted)' }}>{d}</p>
              <span style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-700)', borderBottom: '1px solid var(--gold-700)', alignSelf: 'flex-start' }}>{cta} →</span>
            </Card>
          ))}
        </div>
      </Section>
      <GoldRule />

      <Section tone="dark" pad="80px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          <SectionHeading tone="dark" eyebrow="Not sure where to start?" title="Start with the 15-minute consultation" lede="It costs nothing and it tells us both whether functional bloodwork is the right next step for you." />
          <Button size="lg" onClick={() => go('contact')}>Book your review</Button>
        </div>
      </Section>
    </>
  );
}

Object.assign(window, { ServicesScreen });
