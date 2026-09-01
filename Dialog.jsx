import React from 'react';

export function Dialog({ open = true, title, eyebrow, onClose, footer, width = 520, children }) {
  if (!open) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--overlay-scrim)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-6)', zIndex: 40 }} onClick={onClose}>
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        style={{ width, maxWidth: '100%', background: 'var(--surface-card)', borderRadius: 0, borderTop: '4px solid var(--gold-500)', boxShadow: 'var(--shadow-4)', overflow: 'hidden' }}>
        <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', borderBottom: '1px solid var(--border-hairline)' }}>
          {eyebrow && <span style={{ fontFamily: 'var(--font-eyebrow)', fontSize: 'var(--fs-eyebrow)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--gold-700)' }}>{eyebrow}</span>}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h3)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-h3)', textTransform: 'uppercase', color: 'var(--text-strong)' }}>{title}</h3>
            {onClose && <button onClick={onClose} aria-label="Close" style={{ border: 0, background: 'none', cursor: 'pointer', fontSize: 20, lineHeight: 1, color: 'var(--text-subtle)' }}>×</button>}
          </div>
        </div>
        <div style={{ padding: 'var(--space-6)', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-body)' }}>{children}</div>
        {footer && <div style={{ padding: 'var(--space-4) var(--space-6) var(--space-6)', display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>{footer}</div>}
      </div>
    </div>
  );
}
