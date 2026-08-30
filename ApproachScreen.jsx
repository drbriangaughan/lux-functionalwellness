const { Button, Card, SectionHeading, Tabs, Badge } = window.LuxFunctionalWellnessDesignSystem_cefeb7;

function ApproachScreen({ go }) {
  const { Section, Placeholder, GoldRule } = window;
  const [tab, setTab] = React.useState('Bloodwork');
  const panels = {
    Bloodwork: ['Comprehensive functional panel ordered through Evexia Diagnostics', 'Draw sites nationwide — no hospital visit required', 'Interpreted against functional ranges, not just lab reference ranges', 'Markers for inflammation, metabolic health, thyroid, gut and nutrient status'],
    Nutrition: ['Dietary plan built from what your panel actually shows', 'Deficiencies, sensitivities and patterns standard advice misses', 'Structure you can hold to on a normal week', 'Adjusted at the weekly check-in, not left to drift'],
    Supplementation: ['Evidence-informed protocol matched to your results', 'Dose, form and duration written out — no shelf stack', 'Reviewed for interactions with what you already take', 'Retired as your labs improve, not continued indefinitely'],
    Lifestyle: ['Sleep, stress, movement and daily routine', 'Habits sequenced so they compound instead of collapsing', 'Weekly accountability with your clinician', 'Retest to confirm the change is real'],
  };
  return (
    <>
      <Section tone="light" pad="80px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', alignItems: 'end' }}>
          <SectionHeading eyebrow="Our approach" title="Root cause, not guesswork"
            lede="Functional medicine is systems thinking applied to a person — and bloodwork is where the thinking starts." />
        </div>
      </Section>
      <GoldRule />

      <Section tone="sunken">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <Tabs tabs={['Bloodwork', 'Nutrition', 'Supplementation', 'Lifestyle']} value={tab} onChange={setTab} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {panels[tab].map((t) => (
                <div key={t} style={{ display: 'flex', gap: 14, padding: '18px 20px', background: 'var(--white)', boxShadow: 'var(--shadow-1)', fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.7, color: 'var(--text-body)' }}>
                  <span style={{ width: 8, height: 8, marginTop: 8, flex: '0 0 8px', background: 'var(--gold-500)' }} />{t}
                </div>
              ))}
            </div>
            <Card variant="accent" eyebrow="What you leave with" title="A plan in plain language">
              <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.7, color: 'var(--text-body)' }}>
                Every patient leaves the review visit with a written protocol: what we found, what we are changing, what we expect to see, and when we retest to check it.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingTop: 8 }}>
                <Badge tone="success" dot>Optimal</Badge><Badge tone="warning" dot>Watch</Badge><Badge tone="danger" dot>Out of range</Badge>
              </div>
              <div style={{ paddingTop: 12 }}><Button onClick={() => go('contact')}>Book your review</Button></div>
            </Card>
          </div>
        </div>
      </Section>
      <GoldRule />

      <Section tone="dark" pad="88px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 760 }}>
            <SectionHeading tone="dark" eyebrow="Why it matters for rehab care" title="Inflammation slows recovery" />
            <p style={{ fontFamily: 'var(--font-serif-accent)', fontStyle: 'italic', fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,.6)', margin: 0 }}>
              A patient carrying systemic inflammation heals slower, holds adjustments for less time, and plateaus in rehab. Addressing the metabolic and nutritional drivers alongside the physical work is how that plateau breaks.
            </p>
            <div><Button variant="onDark" onClick={() => go('partners')}>See partner tracks</Button></div>
          </div>
        </div>
      </Section>
    </>
  );
}

Object.assign(window, { ApproachScreen });
