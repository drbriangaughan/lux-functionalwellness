const NS = window.LuxFunctionalWellnessDesignSystem_cefeb7;
const { Button, Card, Input, Textarea, Select, Checkbox, Tag, SectionHeading, Dialog, Toast, Badge } = NS;

const SLOTS = ['Tue 9:00 AM', 'Tue 1:30 PM', 'Wed 8:30 AM', 'Wed 4:00 PM', 'Thu 11:00 AM', 'Fri 10:00 AM'];
const CONCERNS = ['Fatigue', 'Metabolic health', 'Gut health', 'Inflammation', 'Hormones', 'Thyroid', 'Sleep', 'Performance'];

function ContactScreen() {
  const { Section, GoldRule } = window;
  const [slot, setSlot] = React.useState('Wed 8:30 AM');
  const [picked, setPicked] = React.useState(['Fatigue']);
  const [consent, setConsent] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [sending, setSending] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', role: 'Patient / individual', phone: '', message: '' });
  const toggle = (c) => setPicked((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));
  const setField = (k) => (e) => setForm((f) => ({ ...f, [k]: e && e.target ? e.target.value : e }));

  async function submitRequest() {
    setOpen(false);
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, concerns: picked, slot }),
      });
      if (!res.ok) throw new Error('request failed');
      setToast({ tone: 'success', title: 'Request sent', message: `We'll confirm ${slot} by email within one business day.` });
      setForm({ name: '', email: '', role: 'Patient / individual', phone: '', message: '' });
    } catch (err) {
      setToast({ tone: 'error', title: 'Something went wrong', message: 'Please try again, or email us directly.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <Section tone="light" pad="80px">
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: '5rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            <SectionHeading eyebrow="Get in touch" title="Let's start the conversation"
              lede="Whether you're a patient ready to take the next step, a chiropractor looking to expand your practice, or a trainer wanting to offer more to your clients — we'd love to hear from you." />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
              <Input label="Your name" placeholder="First and last name" value={form.name} onChange={setField('name')} />
              <Input label="Email address" placeholder="you@example.com" hint="We reply within one business day." value={form.email} onChange={setField('email')} />
              <Select label="I am a…" options={['Patient / individual', 'Chiropractor or clinic owner', 'Personal trainer', 'Other healthcare provider']} value={form.role} onChange={setField('role')} />
              <Input label="Phone" placeholder="(555) 000-0000" value={form.phone} onChange={setField('phone')} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--navy-900)' }}>What brings you in?</span>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {CONCERNS.map((c) => <Tag key={c} selected={picked.includes(c)} onClick={() => toggle(c)}>{c}</Tag>)}
              </div>
            </div>

            <Textarea label="Message" rows={4} placeholder="Tell us what you're looking for or what questions you have…" value={form.message} onChange={setField('message')} />
            <Checkbox label="I understand this consultation is not medical advice or a diagnosis." checked={consent} onChange={setConsent} />

            <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button size="lg" disabled={!consent || !form.name || !form.email || sending} onClick={() => setOpen(true)}>
                {sending ? 'Sending…' : `Request ${slot}`}
              </Button>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-subtle)' }}>15 minutes · no cost · no card required.</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', position: 'sticky', top: 96 }}>
            <Card title="Pick a time" eyebrow="This week">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {SLOTS.map((s) => (
                  <button key={s} onClick={() => setSlot(s)}
                    style={{ padding: '13px 10px', cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      border: `1.5px solid ${s === slot ? 'var(--navy-900)' : 'var(--border-hairline)'}`, background: s === slot ? 'var(--navy-900)' : 'var(--white)',
                      color: s === slot ? 'var(--gold-500)' : 'var(--text-body)', transition: 'var(--transition-color)' }}>{s}</button>
                ))}
              </div>
            </Card>
            <Card variant="sunken" topRule={false} title="How we work">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {[['Visits', 'Virtual — available to patients in most states'],
                  ['Lab partner', 'Evexia Diagnostics — draw sites nationwide'],
                  ['Platform', 'Secure, HIPAA-compliant telehealth'],
                  ['Clinician', 'Dr. Brian Gaughan, DC — Functional Medicine Clinician']].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy-900)' }}>{k}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}><Badge tone="brand">Telehealth</Badge><Badge tone="neutral">Weekly check-ins</Badge></div>
          </div>
        </div>
      </Section>
      <GoldRule />

      <Dialog open={open} eyebrow="Confirm" title="Request this consultation?" onClose={() => setOpen(false)}
        footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Back</Button><Button onClick={submitRequest}>Confirm request</Button></>}>
        {slot} · 15 minutes · video. We'll email a confirmation and a short intake form before the call.
      </Dialog>

      {toast && (
        <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 50 }}>
          <Toast tone={toast.tone} title={toast.title} message={toast.message} onDismiss={() => setToast(null)} />
        </div>
      )}
    </div>
  );
}

Object.assign(window, { ContactScreen });
