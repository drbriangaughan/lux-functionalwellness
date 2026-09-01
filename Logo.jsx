import React from 'react';

/* Typographic wordmark lockups. CHOSEN PRIMARY: bracket (option C) — a gold rule at the left,
   LUX and the subline stacked beside it. No pictorial mark exists; the name is the mark. */
export function Logo({ variant = 'bracket', tone = 'navy', size = 34, tagline = true, name = 'LUX', sub = 'WELLNESS' }) {
  const onDark = tone === 'onDark';
  const ink = onDark ? 'var(--white)' : 'var(--navy-900)';
  const gold = onDark ? 'var(--gold-300)' : 'var(--gold-500)';
  const wordStyle = { fontFamily: 'var(--font-display)', fontStretch: '100%', fontWeight: 800, fontSize: size, lineHeight: 0.9, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block' };
  const subStyle = { fontFamily: 'var(--font-eyebrow)', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: Math.max(9, Math.round(size * 0.3)) };

  if (variant === 'boxed') {
    return (
      <span style={{ display: 'inline-flex', flexDirection: 'column', gap: Math.round(size * 0.2), alignItems: 'flex-start' }}>
        <span style={{ background: onDark ? 'var(--white)' : 'var(--navy-900)', padding: `${Math.round(size * 0.3)}px ${Math.round(size * 0.38)}px` }}>
          <span style={{ ...wordStyle, color: onDark ? 'var(--navy-900)' : 'var(--gold-500)' }}>{name}</span>
        </span>
        {tagline && <span style={{ ...subStyle, color: onDark ? 'var(--gold-300)' : 'var(--text-muted)' }}>{sub}</span>}
      </span>
    );
  }
  if (variant === 'outline') {
    return (
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', border: `2px solid ${gold}`, padding: `${Math.round(size * 0.26)}px ${Math.round(size * 0.5)}px`, gap: Math.round(size * 0.16) }}>
        <span style={{ ...wordStyle, color: ink }}>{name}</span>
        {tagline && <span style={{ ...subStyle, color: gold }}>{sub}</span>}
      </span>
    );
  }
  return (
    <span style={{ display: 'inline-flex', gap: Math.round(size * 0.4), alignItems: 'center' }}>
      <span style={{ width: 3, alignSelf: 'stretch', minHeight: size, background: gold }} />
      <span style={{ display: 'inline-flex', flexDirection: 'column', gap: Math.round(size * 0.18) }}>
        <span style={{ ...wordStyle, color: onDark ? 'var(--gold-500)' : ink }}>{name}</span>
        {tagline && <span style={{ ...subStyle, color: onDark ? 'rgba(255,255,255,.6)' : 'var(--text-muted)' }}>{sub}</span>}
      </span>
    </span>
  );
}
