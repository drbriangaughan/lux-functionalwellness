const { Button, Card, SectionHeading, Badge } = window.LuxFunctionalWellnessDesignSystem_cefeb7;

const STEPS = [
  ['01', 'Book your consultation', 'A 15-minute intake call so we understand your health history, your goals, and what is not working right now.'],
  ['02', 'Order your labs', 'We order a comprehensive functional panel through Evexia Diagnostics. You get drawn at a site near you — no hospital required.'],
  ['03', 'Virtual review', 'We meet virtually to walk through your results in plain language: what is optimal, what needs attention, and why it matters for how you feel.'],
  ['04', 'Your wellness plan', 'A personalized protocol covering diet, supplementation and lifestyle — specific to your results, built for your real life.'],
  ['05', 'Weekly check-ins, then retest', 'We check in every week to keep the plan moving, then re-run your bloodwork to confirm we changed what we set out to change.'],
];

function HomeScreen({ go }) {
  const { Section, Placeholder, GoldRule } = window;
  return (
    <>
      <section style={{ background: 'var(--navy-900)', padding: '120px 5% 100px', position: 'relative' }}>
        <div style={{ maxWidth: 'var(--max-width-content)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <span style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 13, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-500)' }}>Functional bloodwork &amp; nutritional wellness</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-display-2)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)', textTransform: 'uppercase', color: 'var(--white)', margin: 0 }}>
              Your health<br />has a<br />foundation.
            </h1>
            <p style={{ fontFamily: 'var(--font-serif-accent)', fontStyle: 'italic', fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)', color: 'rgba(255,255,255,.6)', maxWidth: 480, margin: 0 }}>
              We help you find it — through functional bloodwork, honest answers, and habits that actually fit your life.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', paddingTop: 'var(--space-2)' }}>
              <Button size="lg" onClick={() => go('contact')}>Book your review</Button>
              <Button variant="onDark" size="lg" onClick={() => go('approach')}>See how it works</Button>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 'var(--max-width-content)', margin: '64px auto 0', display: 'flex', gap: '3rem', justifyContent: 'flex-end' }}>
          {[['15 min', 'first consultation'], ['Weekly', 'patient check-ins'], ['Retest', 'to prove the change']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--gold-500)' }}>{n}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>{l}</span>
            </div>
          ))}
        </div>
      </section>
      <GoldRule />

      <Section tone="light">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <SectionHeading eyebrow="Our philosophy" title={'Back to basics. Forward in health.'} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <p style={{ fontFamily: 'var(--font-serif-accent)', fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
              True wellness isn't complicated — it's consistent. At LUX, we believe that small, sustainable changes in nutrition, lifestyle, and supplementation build the foundation for lasting change.
            </p>
            <p style={{ fontFamily: 'var(--font-serif-accent)', fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
              Your blood doesn't lie. It tells the story of what your body needs right now, and we use that story to help you build habits that fit your real life — not an idealized version of it.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', paddingTop: 'var(--space-2)' }}>
              {['Nutrition', 'Lifestyle', 'Supplementation'].map((p) => (
                <span key={p} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--navy-900)', borderTop: '3px solid var(--gold-500)', paddingTop: 10 }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading tone="dark" eyebrow="The process" title="How it works" lede="Simple, virtual, and built around your schedule." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 'var(--space-6)', marginTop: 56 }}>
          {STEPS.map(([n, t, d]) => (
            <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', borderTop: '1px solid var(--border-inverse)', paddingTop: 'var(--space-5)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, lineHeight: 1, letterSpacing: '-0.02em', color: 'rgba(201,168,76,.35)' }}>{n}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold-500)' }}>{t}</span>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,.6)', margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <GoldRule />

      <Section tone="light">
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr .7fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <SectionHeading eyebrow="Clinician credentials" title="Trained at the highest level of functional medicine" />
            <p style={{ fontFamily: 'var(--font-serif-accent)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
              LUX Wellness is led by <strong style={{ color: 'var(--navy-900)' }}>Dr. Brian Gaughan</strong>, a licensed Doctor of Chiropractic and functional medicine clinician with advanced certification through the <strong style={{ color: 'var(--navy-900)' }}>Kharrazian Institute</strong> — one of the most respected functional medicine training programs in the country. That training combines deep expertise in functional bloodwork interpretation, neurological health, gut function, and systemic inflammation.
            </p>
            <p style={{ fontFamily: 'var(--font-serif-accent)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
              When you work with LUX, you're working with a clinician who has done the work to interpret your results with precision, nuance, and a whole-body perspective.
            </p>
          </div>
          <div style={{ justifySelf: 'center', width: 190, height: 190, border: '3px solid var(--gold-500)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, textAlign: 'center', padding: 20 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-700)' }}>Certified</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--navy-900)', lineHeight: 1.2 }}>Kharrazian Institute</span>
            <span style={{ fontFamily: 'var(--font-serif-accent)', fontStyle: 'italic', fontSize: 11, color: 'var(--text-subtle)' }}>Functional medicine clinician</span>
          </div>
        </div>
      </Section>

      <Section tone="dark" pad="88px">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)', textAlign: 'center' }}>
          <Badge tone="accent">Ready to begin?</Badge>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--ls-heading)', textTransform: 'uppercase', color: 'var(--white)', margin: 0 }}>
            See what your blood is telling you.
          </h2>
          <p style={{ fontFamily: 'var(--font-serif-accent)', fontStyle: 'italic', fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,.6)', maxWidth: 620, margin: 0 }}>
            Your first step is a 15-minute consultation — then bloodwork, a virtual review, and a plan built around your results. No guesswork. No generic advice.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button size="lg" onClick={() => go('contact')}>Book your review</Button>
            <Button variant="onDark" size="lg" onClick={() => go('contact')}>Ask us a question first</Button>
          </div>
        </div>
      </Section>
    </>
  );
}

Object.assign(window, { HomeScreen });
