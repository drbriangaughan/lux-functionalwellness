import React from 'react';

const sizes = { sm: 32, md: 40, lg: 48 };

export function IconButton({ label, size = 'md', variant = 'ghost', children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const tone = {
    ghost: { background: hover ? 'var(--sand-200)' : 'transparent', color: 'var(--navy-900)', border: '1px solid transparent' },
    outline: { background: hover ? 'var(--navy-900)' : 'transparent', color: hover ? 'var(--white)' : 'var(--navy-900)', border: '1.5px solid var(--border-hairline)' },
    solid: { background: hover ? 'var(--gold-300)' : 'var(--gold-500)', color: 'var(--navy-900)', border: '1px solid transparent' },
  }[variant];
  return (
    <button aria-label={label} title={label} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: d, height: d, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 0, cursor: 'pointer', transition: 'var(--transition-color)', ...tone }} {...rest}>
      {children}
    </button>
  );
}
