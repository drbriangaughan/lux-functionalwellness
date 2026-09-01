import React from 'react';

export function Tooltip({ content, side = 'top', children }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' },
    bottom: { top: '100%', left: '50%', transform: 'translate(-50%,8px)' },
    left: { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' },
    right: { left: '100%', top: '50%', transform: 'translate(8px,-50%)' },
  }[side];
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {children}
      {open && (
        <span role="tooltip" style={{ position: 'absolute', ...pos, background: 'var(--navy-900)', color: 'var(--white)',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', lineHeight: 1.4, padding: '8px 10px', borderRadius: 'var(--radius-2)',
          boxShadow: 'var(--shadow-2)', whiteSpace: 'nowrap', zIndex: 30, pointerEvents: 'none' }}>{content}</span>
      )}
    </span>
  );
}
