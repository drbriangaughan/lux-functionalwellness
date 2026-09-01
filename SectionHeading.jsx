import React from 'react';

export function SectionHeading({ eyebrow, title, lede, align = 'left', tone = 'light', action }) {
  const onDark = tone === 'dark';
  return (
    <header style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align === 'center' ? 'center' : 'left', maxWidth: align === 'center' ? 760 : undefined }}>
      {eyebrow && <span style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 'var(--fs-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: onDark ? 'var(--gold-300)' : 'var(--gold-700)' }}>{eyebrow}</span>}
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--ls-heading)', textTransform: 'uppercase', color: onDark ? 'var(--white)' : 'var(--text-strong)', margin: 0 }}>{title}</h2>
      {lede && <p style={{ fontFamily: 'var(--font-serif-accent)', fontStyle: 'italic', fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)', color: onDark ? 'rgba(255,255,255,.55)' : 'var(--text-muted)', maxWidth: 'var(--max-width-prose)', margin: 0 }}>{lede}</p>}
      {action}
    </header>
  );
}
