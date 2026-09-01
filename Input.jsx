import React from 'react';

const fieldBase = { fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-strong)', background: 'var(--white)', border: '1.5px solid var(--border-hairline)', borderRadius: 0, padding: '12px 14px', minHeight: 44, width: '100%', outline: 'none', transition: 'var(--transition-color), box-shadow var(--dur-fast) var(--ease-standard)' };
const labelStyle = { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-caption)', fontWeight: 700, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--navy-900)' };

export function Input({ label, hint, error, prefix, suffix, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || `in-${label ? label.replace(/\W+/g, '-').toLowerCase() : 'field'}`;
  const borderColor = error ? 'var(--status-danger-fg)' : focus ? 'var(--gold-500)' : 'var(--border-hairline)';
  return (
    <label htmlFor={fid} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {label && <span style={labelStyle}>{label}</span>}
      <span style={{ display: 'flex', alignItems: 'center', gap: 10, ...fieldBase, borderColor, boxShadow: focus ? 'var(--shadow-focus)' : 'none', padding: '0 14px' }}>
        {prefix && <span style={{ color: 'var(--text-subtle)', display: 'flex' }}>{prefix}</span>}
        <input id={fid} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ border: 0, outline: 'none', background: 'transparent', font: 'inherit', color: 'inherit', flex: 1, padding: '12px 0', minWidth: 0 }} {...rest} />
        {suffix && <span style={{ color: 'var(--text-subtle)', display: 'flex' }}>{suffix}</span>}
      </span>
      {(hint || error) && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', color: error ? 'var(--status-danger-fg)' : 'var(--text-subtle)' }}>{error || hint}</span>}
    </label>
  );
}

export function Textarea({ label, hint, rows = 4, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'ta-field';
  return (
    <label htmlFor={fid} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {label && <span style={labelStyle}>{label}</span>}
      <textarea id={fid} rows={rows} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ ...fieldBase, resize: 'vertical', lineHeight: 'var(--lh-body)', borderColor: focus ? 'var(--gold-500)' : 'var(--border-hairline)', boxShadow: focus ? 'var(--shadow-focus)' : 'none' }} {...rest} />
      {hint && <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-subtle)', fontFamily: 'var(--font-sans)' }}>{hint}</span>}
    </label>
  );
}
