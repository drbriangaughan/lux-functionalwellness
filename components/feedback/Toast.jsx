import React from 'react';

const tones = {
  info: { bar: 'var(--gold-500)', bg: 'var(--white)' },
  success: { bar: 'var(--green-600)', bg: 'var(--white)' },
  warning: { bar: 'var(--amber-600)', bg: 'var(--white)' },
  danger: { bar: 'var(--red-600)', bg: 'var(--white)' },
};

export function Toast({ tone = 'info', title, message, onDismiss, action }) {
  const t = tones[tone];
  return (
    <div role="status" style={{ display: 'flex', alignItems: 'stretch', minWidth: 300, maxWidth: 420, background: t.bg, borderRadius: 0, boxShadow: 'var(--shadow-3)', overflow: 'hidden', border: '1px solid var(--border-hairline)' }}>
      <span aria-hidden="true" style={{ width: 4, background: t.bar, flex: '0 0 4px' }} />
      <div style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        {title && <strong style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-body-sm)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-strong)' }}>{title}</strong>}
        {message && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>{message}</span>}
        {action && <span style={{ marginTop: 6 }}>{action}</span>}
      </div>
      {onDismiss && <button onClick={onDismiss} aria-label="Dismiss" style={{ border: 0, background: 'none', cursor: 'pointer', color: 'var(--text-subtle)', fontSize: 18, padding: '0 12px' }}>×</button>}
    </div>
  );
}
