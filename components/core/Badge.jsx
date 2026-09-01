import React from 'react';

const tones = {
  neutral: { color: 'var(--text-muted)', background: 'var(--sand-200)' },
  brand: { color: 'var(--navy-700)', background: 'var(--navy-50)' },
  accent: { color: 'var(--gold-500)', background: 'rgba(201,168,76,.15)' },
  success: { color: 'var(--status-success-fg)', background: 'var(--status-success-bg)' },
  warning: { color: 'var(--status-warning-fg)', background: 'var(--status-warning-bg)' },
  danger: { color: 'var(--status-danger-fg)', background: 'var(--status-danger-bg)' },
};

export function Badge({ tone = 'neutral', dot, children }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 13px', borderRadius: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--fs-eyebrow)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', ...tones[tone] }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 'var(--radius-pill)', background: 'currentColor' }} />}
      {children}
    </span>
  );
}
