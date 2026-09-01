import React from 'react';

/* Square, uppercase, wide-tracked — the button treatment from the lux site. */
const base = { fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: 'var(--ls-button)', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)', borderRadius: 0, border: '2px solid transparent', cursor: 'pointer', transition: 'var(--transition-color), transform var(--dur-fast) var(--ease-standard)', textDecoration: 'none', whiteSpace: 'nowrap' };
const sizes = { sm: { padding: '9px 18px', fontSize: 'var(--fs-caption)', minHeight: 36 }, md: { padding: '13px 30px', fontSize: 'var(--fs-body-sm)', minHeight: 46 }, lg: { padding: '15px 36px', fontSize: 'var(--fs-body)', minHeight: 54 } };
const tones = {
  accent: { background: 'var(--gold-500)', color: 'var(--navy-900)' },
  primary: { background: 'var(--navy-900)', color: 'var(--white)' },
  secondary: { background: 'transparent', color: 'var(--navy-900)', borderColor: 'var(--navy-900)' },
  ghost: { background: 'transparent', color: 'var(--gold-700)' },
  onDark: { background: 'transparent', color: 'rgba(255,255,255,.85)', borderColor: 'rgba(255,255,255,.35)' },
};
const hovers = {
  accent: { background: 'var(--gold-300)' },
  primary: { background: 'var(--navy-700)' },
  secondary: { background: 'var(--navy-900)', color: 'var(--white)' },
  ghost: { color: 'var(--gold-500)' },
  onDark: { borderColor: 'var(--gold-500)', color: 'var(--gold-500)' },
};

export function Button({ variant = 'accent', size = 'md', disabled, fullWidth, as = 'button', children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const style = {
    ...base, ...sizes[size], ...tones[variant],
    ...(hover && !disabled ? { ...hovers[variant], transform: 'translateY(-2px)' } : null),
    ...(disabled ? { opacity: 0.42, cursor: 'not-allowed' } : null),
    width: fullWidth ? '100%' : undefined,
  };
  return (
    <Tag style={style} disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>{children}</Tag>
  );
}
