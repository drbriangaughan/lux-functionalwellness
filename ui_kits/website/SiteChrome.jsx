const NS = window.LuxFunctionalWellnessDesignSystem_cefeb7;
const { Logo, Button } = NS;

const NAV = [
  { key: 'home', label: 'Home' },
  { key: 'approach', label: 'Approach' },
  { key: 'providers', label: 'Providers' },
  { key: 'services', label: 'Services' },
  { key: 'partners', label: 'Partners' },
  { key: 'contact', label: 'Contact' },
];

function Header({ route, go }) {
  const [open, setOpen] = React.useState(false);
  const nav = (k) => { setOpen(false); go(k); };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'var(--navy-900)' }}>
      <div className="lux-headbar" style={{ padding: '0 5%', minHeight: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); nav('home'); }} style={{ textDecoration: 'none', flexShrink: 0 }}><Logo tone="onDark" size={22} /></a>
        <button className="lux-burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}
          style={{ display: 'none', width: 44, height: 44, background: 'none', border: '1px solid rgba(255,255,255,.3)', cursor: 'pointer', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, padding: 0 }}>
          <span style={{ width: 20, height: 2, background: 'var(--gold-500)', transition: 'transform var(--dur-base) var(--ease-standard)', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ width: 20, height: 2, background: 'var(--gold-500)', opacity: open ? 0 : 1, transition: 'opacity var(--dur-fast)' }} />
          <span style={{ width: 20, height: 2, background: 'var(--gold-500)', transition: 'transform var(--dur-base) var(--ease-standard)', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
        <nav className={open ? 'lux-nav lux-nav-open' : 'lux-nav'} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
          {NAV.map((n) => (
            <a key={n.key} href="#" onClick={(e) => { e.preventDefault(); nav(n.key); }}
              style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                color: route === n.key ? 'var(--gold-500)' : 'rgba(255,255,255,.75)', transition: 'var(--transition-color)' }}>{n.label}</a>
          ))}
          <Button size="sm" onClick={() => nav('contact')}>Book your review</Button>
        </nav>
      </div>
    </header>
  );
}

function GoldRule() {
  return <div style={{ height: 3, background: 'var(--gold-rule)' }} />;
}

function Footer({ go }) {
  return (
    <footer style={{ background: 'var(--navy-950)', padding: '48px 5%', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center', textAlign: 'center' }}>
      <Logo tone="onDark" size={20} />
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,.3)', letterSpacing: '0.05em', margin: 0 }}>
        © 2026 Lux Wellness LLC. All rights reserved. Functional wellness care is not a substitute for emergency or primary medical care.
      </p>
      <ul style={{ display: 'flex', gap: 'var(--space-6)', listStyle: 'none', margin: 0, padding: 0 }}>
        {NAV.slice(1).map((n) => (
          <li key={n.key}><a href="#" onClick={(e) => { e.preventDefault(); go(n.key); }}
            style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>{n.label}</a></li>
        ))}
      </ul>
    </footer>
  );
}

function Placeholder({ height = 320, label = 'image placeholder', tone = 'sand' }) {
  const dark = tone === 'navy';
  return (
    <div style={{ height, background: dark ? 'var(--navy-700)' : 'var(--sand-200)', border: `1px solid ${dark ? 'var(--border-inverse)' : 'var(--sand-300)'}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.4)' : 'var(--text-subtle)' }}>{label}</div>
  );
}

function Section({ tone = 'light', children, pad = '100px', padBottom, max = 'var(--max-width-content)' }) {
  const bg = tone === 'dark' ? 'var(--navy-900)' : tone === 'sunken' ? 'var(--surface-sunken)' : 'var(--cream)';
  return (
    <section className="lux-section" style={{ background: bg, paddingTop: pad, paddingBottom: padBottom || pad, paddingLeft: '5%', paddingRight: '5%' }}>
      <div style={{ maxWidth: max, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

Object.assign(window, { Header, Footer, GoldRule, Placeholder, Section, NAV });
