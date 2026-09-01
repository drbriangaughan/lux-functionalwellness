import React from 'react';

const box = (checked, round) => ({
  width: 20, height: 20, flex: '0 0 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-1)',
  border: `1.5px solid ${checked ? 'var(--navy-900)' : 'var(--sand-400)'}`,
  background: checked ? 'var(--navy-900)' : 'var(--white)',
  transition: 'var(--transition-color)', color: 'var(--gold-500)', fontSize: 12, lineHeight: 1,
});
const row = { display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-body)', cursor: 'pointer', minHeight: 32 };

export function Checkbox({ label, checked, onChange, disabled }) {
  return (
    <label style={{ ...row, opacity: disabled ? 0.45 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <input type="checkbox" checked={!!checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={box(checked, false)} aria-hidden="true">{checked ? '✓' : ''}</span>
      <span>{label}</span>
    </label>
  );
}

export function Radio({ label, checked, onChange, name, disabled }) {
  return (
    <label style={{ ...row, opacity: disabled ? 0.45 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <input type="radio" name={name} checked={!!checked} disabled={disabled} onChange={() => onChange && onChange(true)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={box(checked, true)} aria-hidden="true">
        {checked && <span style={{ width: 7, height: 7, borderRadius: 'var(--radius-pill)', background: 'var(--gold-500)' }} />}
      </span>
      <span>{label}</span>
    </label>
  );
}
