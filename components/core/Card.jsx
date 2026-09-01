import React from 'react';

/* White card with a 4px gold top rule — the service-card treatment from the lux site. */
export function Card({ variant = 'default', interactive, eyebrow, title, children, footer, topRule = true, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: { background: 'var(--white)', color: 'var(--text-body)' },
    sunken: { background: 'var(--surface-sunken)', color: 'var(--text-body)' },
    inverse: { background: 'rgba(255,255,255,.04)', color: 'rgba(255,255,255,.65)' },
    accent: { background: 'var(--gold-100)', color: 'var(--text-body)' },
  }[variant];
  const dark = variant === 'inverse';
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ borderRadius: 0, padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
        borderTop: topRule ? '4px solid var(--gold-500)' : 'none',
        border: dark && !topRule ? '1px solid var(--border-inverse)' : undefined,
        boxShadow: dark ? 'none' : interactive && hover ? 'var(--shadow-3)' : 'var(--shadow-1)',
        transform: interactive && hover ? 'translateY(-4px)' : 'none',
        transition: 'var(--transition-transform), box-shadow var(--dur-base) var(--ease-standard)',
        cursor: interactive ? 'pointer' : 'default', ...tones }} {...rest}>
      {eyebrow && <span style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 'var(--fs-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: dark ? 'var(--gold-300)' : 'var(--text-accent)' }}>{eyebrow}</span>}
      {title && <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h3)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-h3)', textTransform: 'uppercase', color: dark ? 'var(--white)' : 'var(--text-strong)', margin: 0 }}>{title}</h3>}
      {children}
      {footer && <div style={{ marginTop: 'var(--space-2)', paddingTop: 'var(--space-4)', borderTop: `1px solid ${dark ? 'var(--border-inverse)' : 'var(--border-hairline)'}` }}>{footer}</div>}
    </div>
  );
}
