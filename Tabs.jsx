import React from 'react';

export function Tabs({ tabs = [], value, onChange, variant = 'underline' }) {
  const active = value ?? (tabs[0] && (tabs[0].value || tabs[0]));
  const items = tabs.map((t) => (typeof t === 'string' ? { label: t, value: t } : t));
  if (variant === 'segmented') {
    return (
      <div role="tablist" style={{ display: 'inline-flex', gap: 2, padding: 3, background: 'var(--surface-sunken)', borderRadius: 0 }}>
        {items.map((t) => {
          const on = t.value === active;
          return (
            <button key={t.value} role="tab" aria-selected={on} onClick={() => onChange && onChange(t.value)}
              style={{ border: 0, cursor: 'pointer', padding: '9px 18px', minHeight: 36, borderRadius: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--fs-caption)', fontWeight: 700, letterSpacing: 'var(--ls-button)', textTransform: 'uppercase',
                background: on ? 'var(--white)' : 'transparent', color: on ? 'var(--text-strong)' : 'var(--text-muted)', boxShadow: on ? 'var(--shadow-1)' : 'none', transition: 'var(--transition-color)' }}>{t.label}</button>
          );
        })}
      </div>
    );
  }
  return (
    <div role="tablist" style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: '1px solid var(--border-hairline)' }}>
      {items.map((t) => {
        const on = t.value === active;
        return (
          <button key={t.value} role="tab" aria-selected={on} onClick={() => onChange && onChange(t.value)}
            style={{ border: 0, background: 'none', cursor: 'pointer', padding: '0 0 12px', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-caption)', fontWeight: 700, letterSpacing: 'var(--ls-button)', textTransform: 'uppercase',
              color: on ? 'var(--text-strong)' : 'var(--text-muted)', boxShadow: on ? 'inset 0 -3px 0 var(--gold-500)' : 'none', transition: 'var(--transition-color)' }}>{t.label}</button>
        );
      })}
    </div>
  );
}
