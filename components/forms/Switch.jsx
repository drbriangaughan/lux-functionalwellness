import React from 'react';

export function Switch({ label, checked, onChange, disabled }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-body)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, minHeight: 32 }}>
      <button type="button" role="switch" aria-checked={!!checked} disabled={disabled} onClick={() => onChange && onChange(!checked)}
        style={{ width: 44, height: 26, flex: '0 0 44px', borderRadius: 'var(--radius-pill)', border: '1px solid transparent',
          background: checked ? 'var(--navy-900)' : 'var(--sand-300)', position: 'relative', cursor: 'inherit',
          transition: 'background-color var(--dur-base) var(--ease-standard)', padding: 0 }}>
        <span style={{ position: 'absolute', top: 3, left: checked ? 21 : 3, width: 20, height: 20, borderRadius: 'var(--radius-pill)',
          background: checked ? 'var(--gold-500)' : 'var(--white)', boxShadow: 'var(--shadow-1)',
          transition: 'left var(--dur-base) var(--ease-standard), background-color var(--dur-base) var(--ease-standard)' }} />
      </button>
      {label && <span>{label}</span>}
    </label>
  );
}
