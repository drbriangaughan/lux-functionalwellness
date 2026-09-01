import React from 'react';

export function Select({ label, hint, options = [], id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'sel-field';
  return (
    <label htmlFor={fid} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {label && <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-caption)', fontWeight: 700, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--navy-900)' }}>{label}</span>}
      <span style={{ position: 'relative', display: 'block' }}>
        <select id={fid} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-strong)', background: 'var(--white)',
            border: `1.5px solid ${focus ? 'var(--gold-500)' : 'var(--border-hairline)'}`, boxShadow: focus ? 'var(--shadow-focus)' : 'none',
            borderRadius: 0, padding: '12px 40px 12px 14px', minHeight: 44, width: '100%', appearance: 'none', outline: 'none',
            transition: 'var(--transition-color)' }} {...rest}>
          {options.map((o) => typeof o === 'string'
            ? <option key={o} value={o}>{o}</option>
            : <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span aria-hidden="true" style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-subtle)', pointerEvents: 'none', fontSize: 11 }}>▾</span>
      </span>
      {hint && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', color: 'var(--text-subtle)' }}>{hint}</span>}
    </label>
  );
}
