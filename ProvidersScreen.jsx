const { Button, Card, Badge, SectionHeading } = window.LuxFunctionalWellnessDesignSystem_cefeb7;

const BIO = [
  'Dr. Brian Gaughan is a Massachusetts Board-Certified Chiropractor and functional medicine clinician who takes a holistic, root-cause approach to health. His passion for care was ignited when he discovered chiropractic — a field that aligned with his belief in the body\'s innate ability to heal. That same conviction is what pulled him toward functional medicine: if the body can heal, then the job is to find what is standing in its way and remove it. His vitalistic and functional philosophy is the foundation of Lux Wellness — whole-person, results-driven care.',
  'He graduated Summa Cum Laude from Life Chiropractic College in Marietta, GA, with extensive training in adjusting techniques, functional medicine, nutrition, muscle work, and therapeutic exercise. He also holds a Biology degree from Franciscan University, where he played NCAA soccer. Functional bloodwork became the throughline: it is the clearest window into what a body actually needs, and it turns good intentions into a plan you can measure.',
  'Dr. Gaughan\'s background includes experience as both an EMT and a chiropractic assistant, giving him a strong foundation in both emergency and natural healthcare. He has worked with a wide range of patients — from athletes to pregnant women and infants — helping them move from pain to performance.',
  'He believes nobody should have to settle for "your labs are normal" when they do not feel normal, and he is never finished learning: continued study through the Kharrazian Institute and ongoing work in bloodwork interpretation, gut function and systemic inflammation keep the care he delivers improving alongside the science.',
  'Outside the clinic, he enjoys time with loved ones, staying active, traveling, and spending time outdoors.',
];

const CREDENTIALS = [
  ['Licensure', 'Massachusetts Board-Certified Chiropractor'],
  ['Doctorate', 'Doctor of Chiropractic, Life Chiropractic College — Summa Cum Laude'],
  ['Certification', 'Kharrazian Institute — functional medicine'],
  ['Undergraduate', 'B.S. Biology, Franciscan University — NCAA soccer'],
];

const FOCUS = ['Functional bloodwork', 'Nutrition', 'Supplementation', 'Systemic inflammation', 'Gut function', 'Athletic performance', 'Pregnancy & pediatric care', 'Therapeutic exercise'];

function ProvidersScreen({ go }) {
  const { Section, Placeholder, GoldRule } = window;
  return (
    <>
      <Section tone="light" pad="80px">
        <div style={{ display: 'grid', gridTemplateColumns: '.72fr 1.28fr', gap: '4rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <img src="assets/brian-gaughan.png" alt="Dr. Brian Gaughan" style={{ width: '100%', height: 380, objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {CREDENTIALS.map(([k, v]) => (
                <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 3, borderTop: '1px solid var(--border-hairline)', paddingTop: 10 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-700)' }}>{k}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <span style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 12, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-700)' }}>Our providers</span>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--ls-heading)', textTransform: 'uppercase', color: 'var(--text-strong)', margin: 0 }}>
                Dr. Brian Gaughan, DC
              </h1>
              <p style={{ fontFamily: 'var(--font-serif-accent)', fontStyle: 'italic', fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)', margin: 0, maxWidth: 620 }}>
                Chiropractor and functional medicine clinician. Whole-person, results-driven care.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Badge tone="accent">Kharrazian Institute certified</Badge>
                <Badge tone="brand">Massachusetts board-certified</Badge>
              </div>
            </div>
            <hr className="lux-rule" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              {BIO.map((p, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-serif-accent)', fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', margin: 0, maxWidth: 680 }}>{p}</p>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', paddingTop: 'var(--space-2)' }}>
              <Button onClick={() => go('contact')}>Book your review</Button>
              <Button variant="secondary" onClick={() => go('approach')}>See how it works</Button>
            </div>
          </div>
        </div>
      </Section>
      <GoldRule />

      <Section tone="sunken" pad="80px">
        <SectionHeading eyebrow="Clinical focus" title="Where his work concentrates" />
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 36 }}>
          {FOCUS.map((f) => (
            <span key={f} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--navy-900)', background: 'var(--white)', borderTop: '3px solid var(--gold-500)', padding: '14px 20px', boxShadow: 'var(--shadow-1)' }}>{f}</span>
          ))}
        </div>
      </Section>
      <GoldRule />

      <Section tone="dark" pad="80px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          <SectionHeading tone="dark" eyebrow="Growing the team" title="Clinicians who work this way" lede="Lux Wellness is adding providers who share the vitalistic, functional philosophy. If that is how you practice, we would like to hear from you." />
          <Button variant="onDark" size="lg" onClick={() => go('contact')}>Get in touch</Button>
        </div>
      </Section>
    </>
  );
}

Object.assign(window, { ProvidersScreen });
