const { Button, Badge, SectionHeading, Card } = window.LuxFunctionalWellnessDesignSystem_cefeb7;

const TRACKS = [
  {
    badge: 'For chiropractors & clinics',
    title: 'Co-management partnership',
    body: 'Add functional wellness to your practice without adding overhead. We handle the bloodwork review, nutritional counseling, and supplementation protocols for your patients — virtually, and in coordination with your care plan.',
    items: [
      'Improve patient outcomes by addressing systemic inflammation',
      'Extend your value beyond the adjustment table',
      'Patients get faster results — which reflects well on your practice',
      'Clean co-management structure for services rendered',
      'Simple referral workflow through a patient booking link',
    ],
    cta: 'Talk to us about partnering',
  },
  {
    badge: 'For personal trainers',
    title: 'Affiliate partnership',
    body: 'Give your clients an edge that no training program alone can provide. Functional bloodwork reveals the "why" behind their plateaus, fatigue, and slow recovery — and your referral connects them to real answers.',
    items: [
      'Elevate your service offering without stepping outside your scope',
      'Differentiate yourself with a data-driven wellness partner',
      'Clients get personalized protocols that complement their training',
      'Simple affiliate referral structure',
      'Ideal for online trainers with remote client bases',
    ],
    cta: 'Become an affiliate',
  },
];

function PartnersScreen({ go }) {
  const { Section, GoldRule } = window;
  return (
    <>
      <Section tone="dark">
        <SectionHeading tone="dark" eyebrow="Work with us" title="Partner with LUX" lede="We build meaningful relationships with clinicians and coaches who share our commitment to whole-person health." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', marginTop: 56 }}>
          {TRACKS.map((t) => (
            <div key={t.title} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid var(--border-inverse)', padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <Badge tone="accent">{t.badge}</Badge>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--white)', margin: 0 }}>{t.title}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', margin: 0 }}>{t.body}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                {t.items.map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.78)' }}>
                    <span style={{ width: 8, height: 8, marginTop: 6, flex: '0 0 8px', background: 'var(--gold-500)' }} />{i}
                  </li>
                ))}
              </ul>
              <div><Button variant="onDark" onClick={() => go('contact')}>{t.cta}</Button></div>
            </div>
          ))}
        </div>
      </Section>
      <GoldRule />

      <Section tone="light">
        <SectionHeading eyebrow="How co-management runs" title="What the referral actually looks like" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-5)', marginTop: 48 }}>
          {[['You refer', 'Your patient books a 15-minute consultation through your referral link.'],
            ['We test and review', 'We order the panel through Evexia and review the results with your patient virtually.'],
            ['Your client get healthier', 'Your patient gets a detailed plan to work on the nutrition and lifestyle side of their health.']].map(([t, d], i) => (
            <Card key={t} title={t}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, lineHeight: 1, color: 'var(--gold-200)' }}>{`0${i + 1}`}</span>
              <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)' }}>{d}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

Object.assign(window, { PartnersScreen });
