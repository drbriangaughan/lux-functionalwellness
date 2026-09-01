import React from 'react';

export function Tag({ selected, onRemove, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', cursor: onRemove || rest.onClick ? 'pointer' : 'default',
        border: `1px solid ${selected ? 'var(--navy-900)' : 'var(--border-hairline)'}`,
        background: selected ? 'var(--navy-900)' : hover ? 'var(--sand-100)' : 'transparent',
        color: selected ? 'var(--white)' : 'var(--text-body)', transition: 'var(--transition-color)' }} {...rest}>
      {children}
      {onRemove && <button onClick={(e) => { e.stopPropagation(); onRemove(); }} aria-label="Remove"
        style={{ border: 0, background: 'none', color: 'inherit', cursor: 'pointer', padding: 0, lineHeight: 1, fontSize: 14 }}>×</button>}
    </span>
  );
}
