/* @ds-bundle: {"format":4,"namespace":"LuxFunctionalWellnessDesignSystem_cefeb7","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"ebf644bcd920","components/core/Badge.jsx":"2e32dba7d879","components/core/Button.jsx":"6d80c2f49f25","components/core/Card.jsx":"74d7ee783294","components/core/IconButton.jsx":"ee887f75c3df","components/core/SectionHeading.jsx":"c11303cc80bf","components/core/Tag.jsx":"470239998d91","components/feedback/Dialog.jsx":"40c4cf3a0e48","components/feedback/Toast.jsx":"46d2b48de878","components/feedback/Tooltip.jsx":"d1c2f59aef33","components/forms/Checkbox.jsx":"5bd31668c130","components/forms/Input.jsx":"e4a9ea05b0db","components/forms/Select.jsx":"7195de53f3bc","components/forms/Switch.jsx":"6d0477ebbcbe","components/navigation/Tabs.jsx":"1d6444ef0649","ui_kits/website/ApproachScreen.jsx":"255500e4a366","ui_kits/website/ContactScreen.jsx":"486387893b9b","ui_kits/website/HomeScreen.jsx":"a39f0faa12ab","ui_kits/website/PartnersScreen.jsx":"ae2f20dc327f","ui_kits/website/ProvidersScreen.jsx":"f666f6639599","ui_kits/website/ProvidersScreen.standalone.jsx":"a8d19b0d1ee4","ui_kits/website/ServicesScreen.jsx":"de7e2cb49941","ui_kits/website/SiteChrome.jsx":"928fbd588263"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LuxFunctionalWellnessDesignSystem_cefeb7 = window.LuxFunctionalWellnessDesignSystem_cefeb7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
/* Typographic wordmark lockups. CHOSEN PRIMARY: bracket (option C) — a gold rule at the left,
   LUX and the subline stacked beside it. No pictorial mark exists; the name is the mark. */
function Logo({
  variant = 'bracket',
  tone = 'navy',
  size = 34,
  tagline = true,
  name = 'LUX',
  sub = 'WELLNESS'
}) {
  const onDark = tone === 'onDark';
  const ink = onDark ? 'var(--white)' : 'var(--navy-900)';
  const gold = onDark ? 'var(--gold-300)' : 'var(--gold-500)';
  const wordStyle = {
    fontFamily: 'var(--font-display)',
    fontStretch: '100%',
    fontWeight: 800,
    fontSize: size,
    lineHeight: 0.9,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    display: 'block'
  };
  const subStyle = {
    fontFamily: 'var(--font-eyebrow)',
    fontWeight: 600,
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    fontSize: Math.max(9, Math.round(size * 0.3))
  };
  if (variant === 'boxed') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        gap: Math.round(size * 0.2),
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: onDark ? 'var(--white)' : 'var(--navy-900)',
        padding: `${Math.round(size * 0.3)}px ${Math.round(size * 0.38)}px`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...wordStyle,
        color: onDark ? 'var(--navy-900)' : 'var(--gold-500)'
      }
    }, name)), tagline && /*#__PURE__*/React.createElement("span", {
      style: {
        ...subStyle,
        color: onDark ? 'var(--gold-300)' : 'var(--text-muted)'
      }
    }, sub));
  }
  if (variant === 'outline') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: `2px solid ${gold}`,
        padding: `${Math.round(size * 0.26)}px ${Math.round(size * 0.5)}px`,
        gap: Math.round(size * 0.16)
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...wordStyle,
        color: ink
      }
    }, name), tagline && /*#__PURE__*/React.createElement("span", {
      style: {
        ...subStyle,
        color: gold
      }
    }, sub));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: Math.round(size * 0.4),
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      alignSelf: 'stretch',
      minHeight: size,
      background: gold
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: Math.round(size * 0.18)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...wordStyle,
      color: onDark ? 'var(--gold-500)' : ink
    }
  }, name), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      ...subStyle,
      color: onDark ? 'rgba(255,255,255,.6)' : 'var(--text-muted)'
    }
  }, sub)));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    color: 'var(--text-muted)',
    background: 'var(--sand-200)'
  },
  brand: {
    color: 'var(--navy-700)',
    background: 'var(--navy-50)'
  },
  accent: {
    color: 'var(--gold-500)',
    background: 'rgba(201,168,76,.15)'
  },
  success: {
    color: 'var(--status-success-fg)',
    background: 'var(--status-success-bg)'
  },
  warning: {
    color: 'var(--status-warning-fg)',
    background: 'var(--status-warning-bg)'
  },
  danger: {
    color: 'var(--status-danger-fg)',
    background: 'var(--status-danger-bg)'
  }
};
function Badge({
  tone = 'neutral',
  dot,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 13px',
      borderRadius: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 700,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      ...tones[tone]
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Square, uppercase, wide-tracked — the button treatment from the lux site. */
const base = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  letterSpacing: 'var(--ls-button)',
  textTransform: 'uppercase',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  borderRadius: 0,
  border: '2px solid transparent',
  cursor: 'pointer',
  transition: 'var(--transition-color), transform var(--dur-fast) var(--ease-standard)',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    padding: '9px 18px',
    fontSize: 'var(--fs-caption)',
    minHeight: 36
  },
  md: {
    padding: '13px 30px',
    fontSize: 'var(--fs-body-sm)',
    minHeight: 46
  },
  lg: {
    padding: '15px 36px',
    fontSize: 'var(--fs-body)',
    minHeight: 54
  }
};
const tones = {
  accent: {
    background: 'var(--gold-500)',
    color: 'var(--navy-900)'
  },
  primary: {
    background: 'var(--navy-900)',
    color: 'var(--white)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--navy-900)',
    borderColor: 'var(--navy-900)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--gold-700)'
  },
  onDark: {
    background: 'transparent',
    color: 'rgba(255,255,255,.85)',
    borderColor: 'rgba(255,255,255,.35)'
  }
};
const hovers = {
  accent: {
    background: 'var(--gold-300)'
  },
  primary: {
    background: 'var(--navy-700)'
  },
  secondary: {
    background: 'var(--navy-900)',
    color: 'var(--white)'
  },
  ghost: {
    color: 'var(--gold-500)'
  },
  onDark: {
    borderColor: 'var(--gold-500)',
    color: 'var(--gold-500)'
  }
};
function Button({
  variant = 'accent',
  size = 'md',
  disabled,
  fullWidth,
  as = 'button',
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const style = {
    ...base,
    ...sizes[size],
    ...tones[variant],
    ...(hover && !disabled ? {
      ...hovers[variant],
      transform: 'translateY(-2px)'
    } : null),
    ...(disabled ? {
      opacity: 0.42,
      cursor: 'not-allowed'
    } : null),
    width: fullWidth ? '100%' : undefined
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* White card with a 4px gold top rule — the service-card treatment from the lux site. */
function Card({
  variant = 'default',
  interactive,
  eyebrow,
  title,
  children,
  footer,
  topRule = true,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: 'var(--white)',
      color: 'var(--text-body)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)'
    },
    inverse: {
      background: 'rgba(255,255,255,.04)',
      color: 'rgba(255,255,255,.65)'
    },
    accent: {
      background: 'var(--gold-100)',
      color: 'var(--text-body)'
    }
  }[variant];
  const dark = variant === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 0,
      padding: '36px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      borderTop: topRule ? '4px solid var(--gold-500)' : 'none',
      border: dark && !topRule ? '1px solid var(--border-inverse)' : undefined,
      boxShadow: dark ? 'none' : interactive && hover ? 'var(--shadow-3)' : 'var(--shadow-1)',
      transform: interactive && hover ? 'translateY(-4px)' : 'none',
      transition: 'var(--transition-transform), box-shadow var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...tones
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--gold-300)' : 'var(--text-accent)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h3)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-h3)',
      textTransform: 'uppercase',
      color: dark ? 'var(--white)' : 'var(--text-strong)',
      margin: 0
    }
  }, title), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      paddingTop: 'var(--space-4)',
      borderTop: `1px solid ${dark ? 'var(--border-inverse)' : 'var(--border-hairline)'}`
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  label,
  size = 'md',
  variant = 'ghost',
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const tone = {
    ghost: {
      background: hover ? 'var(--sand-200)' : 'transparent',
      color: 'var(--navy-900)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--navy-900)' : 'transparent',
      color: hover ? 'var(--white)' : 'var(--navy-900)',
      border: '1.5px solid var(--border-hairline)'
    },
    solid: {
      background: hover ? 'var(--gold-300)' : 'var(--gold-500)',
      color: 'var(--navy-900)',
      border: '1px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 0,
      cursor: 'pointer',
      transition: 'var(--transition-color)',
      ...tone
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'light',
  action
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      maxWidth: align === 'center' ? 760 : undefined
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--gold-300)' : 'var(--gold-700)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--white)' : 'var(--text-strong)',
      margin: 0
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: onDark ? 'rgba(255,255,255,.55)' : 'var(--text-muted)',
      maxWidth: 'var(--max-width-prose)',
      margin: 0
    }
  }, lede), action);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected,
  onRemove,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      cursor: onRemove || rest.onClick ? 'pointer' : 'default',
      border: `1px solid ${selected ? 'var(--navy-900)' : 'var(--border-hairline)'}`,
      background: selected ? 'var(--navy-900)' : hover ? 'var(--sand-100)' : 'transparent',
      color: selected ? 'var(--white)' : 'var(--text-body)',
      transition: 'var(--transition-color)'
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    "aria-label": "Remove",
    style: {
      border: 0,
      background: 'none',
      color: 'inherit',
      cursor: 'pointer',
      padding: 0,
      lineHeight: 1,
      fontSize: 14
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  eyebrow,
  onClose,
  footer,
  width = 520,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      zIndex: 40
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 0,
      borderTop: '4px solid var(--gold-500)',
      boxShadow: 'var(--shadow-4)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h3)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-h3)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      fontSize: 20,
      lineHeight: 1,
      color: 'var(--text-subtle)'
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-6) var(--space-6)',
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  info: {
    bar: 'var(--gold-500)',
    bg: 'var(--white)'
  },
  success: {
    bar: 'var(--green-600)',
    bg: 'var(--white)'
  },
  warning: {
    bar: 'var(--amber-600)',
    bg: 'var(--white)'
  },
  danger: {
    bar: 'var(--red-600)',
    bg: 'var(--white)'
  }
};
function Toast({
  tone = 'info',
  title,
  message,
  onDismiss,
  action
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'stretch',
      minWidth: 300,
      maxWidth: 420,
      background: t.bg,
      borderRadius: 0,
      boxShadow: 'var(--shadow-3)',
      overflow: 'hidden',
      border: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 4,
      background: t.bar,
      flex: '0 0 4px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, message), action && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-subtle)',
      fontSize: 18,
      padding: '0 12px'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  side = 'top',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--navy-900)',
      color: 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      lineHeight: 1.4,
      padding: '8px 10px',
      borderRadius: 'var(--radius-2)',
      boxShadow: 'var(--shadow-2)',
      whiteSpace: 'nowrap',
      zIndex: 30,
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const box = (checked, round) => ({
  width: 20,
  height: 20,
  flex: '0 0 20px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-1)',
  border: `1.5px solid ${checked ? 'var(--navy-900)' : 'var(--sand-400)'}`,
  background: checked ? 'var(--navy-900)' : 'var(--white)',
  transition: 'var(--transition-color)',
  color: 'var(--gold-500)',
  fontSize: 12,
  lineHeight: 1
});
const row = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-3)',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--text-body)',
  cursor: 'pointer',
  minHeight: 32
};
function Checkbox({
  label,
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      ...row,
      opacity: disabled ? 0.45 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: box(checked, false),
    "aria-hidden": "true"
  }, checked ? '✓' : ''), /*#__PURE__*/React.createElement("span", null, label));
}
function Radio({
  label,
  checked,
  onChange,
  name,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      ...row,
      opacity: disabled ? 0.45 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: !!checked,
    disabled: disabled,
    onChange: () => onChange && onChange(true),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: box(checked, true),
    "aria-hidden": "true"
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--gold-500)'
    }
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--text-strong)',
  background: 'var(--white)',
  border: '1.5px solid var(--border-hairline)',
  borderRadius: 0,
  padding: '12px 14px',
  minHeight: 44,
  width: '100%',
  outline: 'none',
  transition: 'var(--transition-color), box-shadow var(--dur-fast) var(--ease-standard)'
};
const labelStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-caption)',
  fontWeight: 700,
  letterSpacing: 'var(--ls-label)',
  textTransform: 'uppercase',
  color: 'var(--navy-900)'
};
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || `in-${label ? label.replace(/\W+/g, '-').toLowerCase() : 'field'}`;
  const borderColor = error ? 'var(--status-danger-fg)' : focus ? 'var(--gold-500)' : 'var(--border-hairline)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      ...fieldBase,
      borderColor,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      padding: '0 14px'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      color: 'inherit',
      flex: 1,
      padding: '12px 0',
      minWidth: 0
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--status-danger-fg)' : 'var(--text-subtle)'
    }
  }, error || hint));
}
function Textarea({
  label,
  hint,
  rows = 4,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'ta-field';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase,
      resize: 'vertical',
      lineHeight: 'var(--lh-body)',
      borderColor: focus ? 'var(--gold-500)' : 'var(--border-hairline)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-subtle)',
      fontFamily: 'var(--font-sans)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'sel-field';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--navy-900)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-strong)',
      background: 'var(--white)',
      border: `1.5px solid ${focus ? 'var(--gold-500)' : 'var(--border-hairline)'}`,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      borderRadius: 0,
      padding: '12px 40px 12px 14px',
      minHeight: 44,
      width: '100%',
      appearance: 'none',
      outline: 'none',
      transition: 'var(--transition-color)'
    }
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-subtle)',
      pointerEvents: 'none',
      fontSize: 11
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-subtle)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      minHeight: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": !!checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 44,
      height: 26,
      flex: '0 0 44px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid transparent',
      background: checked ? 'var(--navy-900)' : 'var(--sand-300)',
      position: 'relative',
      cursor: 'inherit',
      transition: 'background-color var(--dur-base) var(--ease-standard)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--gold-500)' : 'var(--white)',
      boxShadow: 'var(--shadow-1)',
      transition: 'left var(--dur-base) var(--ease-standard), background-color var(--dur-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'underline'
}) {
  const active = value ?? (tabs[0] && (tabs[0].value || tabs[0]));
  const items = tabs.map(t => typeof t === 'string' ? {
    label: t,
    value: t
  } : t);
  if (variant === 'segmented') {
    return /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      style: {
        display: 'inline-flex',
        gap: 2,
        padding: 3,
        background: 'var(--surface-sunken)',
        borderRadius: 0
      }
    }, items.map(t => {
      const on = t.value === active;
      return /*#__PURE__*/React.createElement("button", {
        key: t.value,
        role: "tab",
        "aria-selected": on,
        onClick: () => onChange && onChange(t.value),
        style: {
          border: 0,
          cursor: 'pointer',
          padding: '9px 18px',
          minHeight: 36,
          borderRadius: 0,
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--fs-caption)',
          fontWeight: 700,
          letterSpacing: 'var(--ls-button)',
          textTransform: 'uppercase',
          background: on ? 'var(--white)' : 'transparent',
          color: on ? 'var(--text-strong)' : 'var(--text-muted)',
          boxShadow: on ? 'var(--shadow-1)' : 'none',
          transition: 'var(--transition-color)'
        }
      }, t.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, items.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t.value),
      style: {
        border: 0,
        background: 'none',
        cursor: 'pointer',
        padding: '0 0 12px',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-caption)',
        fontWeight: 700,
        letterSpacing: 'var(--ls-button)',
        textTransform: 'uppercase',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        boxShadow: on ? 'inset 0 -3px 0 var(--gold-500)' : 'none',
        transition: 'var(--transition-color)'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ApproachScreen.jsx
try { (() => {
const {
  Button,
  Card,
  SectionHeading,
  Tabs,
  Badge
} = window.LuxFunctionalWellnessDesignSystem_cefeb7;
function ApproachScreen({
  go
}) {
  const {
    Section,
    Placeholder,
    GoldRule
  } = window;
  const [tab, setTab] = React.useState('Bloodwork');
  const panels = {
    Bloodwork: ['Comprehensive functional panel ordered through Evexia Diagnostics', 'Draw sites nationwide — no hospital visit required', 'Interpreted against functional ranges, not just lab reference ranges', 'Markers for inflammation, metabolic health, thyroid, gut and nutrient status'],
    Nutrition: ['Dietary plan built from what your panel actually shows', 'Deficiencies, sensitivities and patterns standard advice misses', 'Structure you can hold to on a normal week', 'Adjusted at the weekly check-in, not left to drift'],
    Supplementation: ['Evidence-informed protocol matched to your results', 'Dose, form and duration written out — no shelf stack', 'Reviewed for interactions with what you already take', 'Retired as your labs improve, not continued indefinitely'],
    Lifestyle: ['Sleep, stress, movement and daily routine', 'Habits sequenced so they compound instead of collapsing', 'Weekly accountability with your clinician', 'Retest to confirm the change is real']
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "80px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '5rem',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our approach",
    title: "Root cause, not guesswork",
    lede: "Functional medicine is systems thinking applied to a person \u2014 and bloodwork is where the thinking starts."
  }))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Bloodwork', 'Nutrition', 'Supplementation', 'Lifestyle'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, panels[tab].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      padding: '18px 20px',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-1)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      marginTop: 8,
      flex: '0 0 8px',
      background: 'var(--gold-500)'
    }
  }), t))), /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    eyebrow: "What you leave with",
    title: "A plan in plain language"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "Every patient leaves the review visit with a written protocol: what we found, what we are changing, what we expect to see, and when we retest to check it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Optimal"), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    dot: true
  }, "Watch"), /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    dot: true
  }, "Out of range")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "Book your review")))))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    pad: "88px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '5rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "Why it matters for rehab care",
    title: "Inflammation slows recovery"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontStyle: 'italic',
      fontSize: 16,
      lineHeight: 1.8,
      color: 'rgba(255,255,255,.6)',
      margin: 0
    }
  }, "A patient carrying systemic inflammation heals slower, holds adjustments for less time, and plateaus in rehab. Addressing the metabolic and nutritional drivers alongside the physical work is how that plateau breaks."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    onClick: () => go('partners')
  }, "See partner tracks"))))));
}
Object.assign(window, {
  ApproachScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ApproachScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const NS = window.LuxFunctionalWellnessDesignSystem_cefeb7;
const {
  Button,
  Card,
  Input,
  Textarea,
  Select,
  Checkbox,
  Tag,
  SectionHeading,
  Dialog,
  Toast,
  Badge
} = NS;
const SLOTS = ['Tue 9:00 AM', 'Tue 1:30 PM', 'Wed 8:30 AM', 'Wed 4:00 PM', 'Thu 11:00 AM', 'Fri 10:00 AM'];
const CONCERNS = ['Fatigue', 'Metabolic health', 'Gut health', 'Inflammation', 'Hormones', 'Thyroid', 'Sleep', 'Performance'];
function ContactScreen() {
  const {
    Section,
    GoldRule
  } = window;
  const [slot, setSlot] = React.useState('Wed 8:30 AM');
  const [picked, setPicked] = React.useState(['Fatigue']);
  const [consent, setConsent] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const toggle = c => setPicked(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "80px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: '5rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Get in touch",
    title: "Let's start the conversation",
    lede: "Whether you're a patient ready to take the next step, a chiropractor looking to expand your practice, or a trainer wanting to offer more to your clients \u2014 we'd love to hear from you."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "First and last name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email address",
    placeholder: "you@example.com",
    hint: "We reply within one business day."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "I am a\u2026",
    options: ['Patient / individual', 'Chiropractor or clinic owner', 'Personal trainer', 'Other healthcare provider']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "(555) 000-0000"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--navy-900)'
    }
  }, "What brings you in?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, CONCERNS.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: picked.includes(c),
    onClick: () => toggle(c)
  }, c)))), /*#__PURE__*/React.createElement(Textarea, {
    label: "Message",
    rows: 4,
    placeholder: "Tell us what you're looking for or what questions you have\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I understand this consultation is not medical advice or a diagnosis.",
    checked: consent,
    onChange: setConsent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    disabled: !consent,
    onClick: () => setOpen(true)
  }, "Request ", slot), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, "15 minutes \xB7 no cost \xB7 no card required."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Pick a time",
    eyebrow: "This week"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, SLOTS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSlot(s),
    style: {
      padding: '13px 10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      border: `1.5px solid ${s === slot ? 'var(--navy-900)' : 'var(--border-hairline)'}`,
      background: s === slot ? 'var(--navy-900)' : 'var(--white)',
      color: s === slot ? 'var(--gold-500)' : 'var(--text-body)',
      transition: 'var(--transition-color)'
    }
  }, s)))), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    topRule: false,
    title: "How we work"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['Visits', 'Virtual — available to patients in most states'], ['Lab partner', 'Evexia Diagnostics — draw sites nationwide'], ['Platform', 'Secure, HIPAA-compliant telehealth'], ['Clinician', 'Dr. Brian Gaughan, DC — Functional Medicine Clinician']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--navy-900)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Telehealth"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Weekly check-ins"))))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    eyebrow: "Confirm",
    title: "Request this consultation?",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setOpen(false);
        setToast(true);
      }
    }, "Confirm request"))
  }, slot, " \xB7 15 minutes \xB7 video. We'll email a confirmation and a short intake form before the call."), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Request sent",
    message: `We'll confirm ${slot} by email within one business day.`,
    onDismiss: () => setToast(false)
  })));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  SectionHeading,
  Badge
} = window.LuxFunctionalWellnessDesignSystem_cefeb7;
const STEPS = [['01', 'Book your consultation', 'A 15-minute intake call so we understand your health history, your goals, and what is not working right now.'], ['02', 'Order your labs', 'We order a comprehensive functional panel through Evexia Diagnostics. You get drawn at a site near you — no hospital required.'], ['03', 'Virtual review', 'We meet virtually to walk through your results in plain language: what is optimal, what needs attention, and why it matters for how you feel.'], ['04', 'Your wellness plan', 'A personalized protocol covering diet, supplementation and lifestyle — specific to your results, built for your real life.'], ['05', 'Weekly check-ins, then retest', 'We check in every week to keep the plan moving, then re-run your bloodwork to confirm we changed what we set out to change.']];
function HomeScreen({
  go
}) {
  const {
    Section,
    Placeholder,
    GoldRule
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "lux-section",
    style: {
      background: 'var(--navy-900)',
      padding: '120px 5% 100px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '5rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      color: 'var(--gold-500)'
    }
  }, "Functional bloodwork & nutritional wellness"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-display-2)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      textTransform: 'uppercase',
      color: 'var(--white)',
      margin: 0
    }
  }, "Your health", /*#__PURE__*/React.createElement("br", null), "has a", /*#__PURE__*/React.createElement("br", null), "foundation."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'rgba(255,255,255,.6)',
      maxWidth: 480,
      margin: 0
    }
  }, "We help you find it \u2014 through functional bloodwork, honest answers, and habits that actually fit your life."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('contact')
  }, "Book your review"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => go('approach')
  }, "See how it works")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '64px auto 0',
      display: 'flex',
      gap: '3rem',
      justifyContent: 'flex-end'
    }
  }, [['15 min', 'first consultation'], ['Weekly', 'patient check-ins'], ['Retest', 'to prove the change']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--gold-500)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.45)'
    }
  }, l))))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '6rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our philosophy",
    title: 'Back to basics. Forward in health.'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "True wellness isn't complicated \u2014 it's consistent. At LUX, we believe that small, sustainable changes in nutrition, lifestyle, and supplementation build the foundation for lasting change."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Your blood doesn't lie. It tells the story of what your body needs right now, and we use that story to help you build habits that fit your real life \u2014 not an idealized version of it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-2)'
    }
  }, ['Nutrition', 'Lifestyle', 'Supplementation'].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--navy-900)',
      borderTop: '3px solid var(--gold-500)',
      paddingTop: 10
    }
  }, p)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "The process",
    title: "How it works",
    lede: "Simple, virtual, and built around your schedule."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-6)',
      marginTop: 56
    }
  }, STEPS.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      borderTop: '1px solid var(--border-inverse)',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: 'rgba(201,168,76,.35)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--gold-500)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.6)',
      margin: 0
    }
  }, d))))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr .7fr',
      gap: '4rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Clinician credentials",
    title: "Trained at the highest level of functional medicine"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontSize: 15,
      lineHeight: 1.8,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "LUX Wellness is led by ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--navy-900)'
    }
  }, "Dr. Brian Gaughan"), ", a licensed Doctor of Chiropractic and functional medicine clinician with advanced certification through the ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--navy-900)'
    }
  }, "Kharrazian Institute"), " \u2014 one of the most respected functional medicine training programs in the country. That training combines deep expertise in functional bloodwork interpretation, neurological health, gut function, and systemic inflammation."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontSize: 15,
      lineHeight: 1.8,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "When you work with LUX, you're working with a clinician who has done the work to interpret your results with precision, nuance, and a whole-body perspective.")), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'center',
      width: 190,
      height: 190,
      border: '3px solid var(--gold-500)',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      textAlign: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, "Certified"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--navy-900)',
      lineHeight: 1.2
    }
  }, "Kharrazian Institute"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontStyle: 'italic',
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, "Functional medicine clinician")))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    pad: "88px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Ready to begin?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      textTransform: 'uppercase',
      color: 'var(--white)',
      margin: 0
    }
  }, "See what your blood is telling you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontStyle: 'italic',
      fontSize: 16,
      lineHeight: 1.8,
      color: 'rgba(255,255,255,.6)',
      maxWidth: 620,
      margin: 0
    }
  }, "Your first step is a 15-minute consultation \u2014 then bloodwork, a virtual review, and a plan built around your results. No guesswork. No generic advice."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('contact')
  }, "Book your review"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => go('contact')
  }, "Ask us a question first")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PartnersScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  SectionHeading,
  Card
} = window.LuxFunctionalWellnessDesignSystem_cefeb7;
const TRACKS = [{
  badge: 'For chiropractors & clinics',
  title: 'Co-management partnership',
  body: 'Add functional wellness to your practice without adding overhead. We handle the bloodwork review, nutritional counseling, and supplementation protocols for your patients — virtually, and in coordination with your care plan.',
  items: ['Improve patient outcomes by addressing systemic inflammation', 'Extend your value beyond the adjustment table', 'Patients get faster results — which reflects well on your practice', 'Clean co-management structure for services rendered', 'Simple referral workflow through a patient booking link'],
  cta: 'Talk to us about partnering'
}, {
  badge: 'For personal trainers',
  title: 'Affiliate partnership',
  body: 'Give your clients an edge that no training program alone can provide. Functional bloodwork reveals the "why" behind their plateaus, fatigue, and slow recovery — and your referral connects them to real answers.',
  items: ['Elevate your service offering without stepping outside your scope', 'Differentiate yourself with a data-driven wellness partner', 'Clients get personalized protocols that complement their training', 'Simple affiliate referral structure', 'Ideal for online trainers with remote client bases'],
  cta: 'Become an affiliate'
}];
function PartnersScreen({
  go
}) {
  const {
    Section,
    GoldRule
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "Work with us",
    title: "Partner with LUX",
    lede: "We build meaningful relationships with clinicians and coaches who share our commitment to whole-person health."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      marginTop: 56
    }
  }, TRACKS.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.title,
    style: {
      background: 'rgba(255,255,255,.04)',
      border: '1px solid var(--border-inverse)',
      padding: '40px 36px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, t.badge), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--white)',
      margin: 0
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.75,
      color: 'rgba(255,255,255,.6)',
      margin: 0
    }
  }, t.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, t.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.78)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      marginTop: 6,
      flex: '0 0 8px',
      background: 'var(--gold-500)'
    }
  }), i))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    onClick: () => go('contact')
  }, t.cta)))))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How co-management runs",
    title: "What the referral actually looks like"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 48
    }
  }, [['You refer', 'Your patient books a 15-minute consultation through your referral link.'], ['We test and review', 'We order the panel through Evexia and review the results with your patient virtually.'], ['Your client get healthier', 'Your patient gets a detailed plan to work on the nutrition and lifestyle side of their health.']].map(([t, d], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    title: t
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 1,
      color: 'var(--gold-200)'
    }
  }, `0${i + 1}`), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-muted)'
    }
  }, d))))));
}
Object.assign(window, {
  PartnersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PartnersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProvidersScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  SectionHeading
} = window.LuxFunctionalWellnessDesignSystem_cefeb7;
const BIO = ['Dr. Brian Gaughan is a Massachusetts Board-Certified Chiropractor and functional medicine clinician who takes a holistic, root-cause approach to health. His passion for care was ignited when he discovered chiropractic — a field that aligned with his belief in the body\'s innate ability to heal. That same conviction is what pulled him toward functional medicine: if the body can heal, then the job is to find what is standing in its way and remove it. His vitalistic and functional philosophy is the foundation of Lux Wellness — whole-person, results-driven care.', 'He graduated Summa Cum Laude from Life Chiropractic College in Marietta, GA, with extensive training in adjusting techniques, functional medicine, nutrition, muscle work, and therapeutic exercise. He also holds a Biology degree from Franciscan University, where he played NCAA soccer. Functional bloodwork became the throughline: it is the clearest window into what a body actually needs, and it turns good intentions into a plan you can measure.', 'Dr. Gaughan\'s background includes experience as both an EMT and a chiropractic assistant, giving him a strong foundation in both emergency and natural healthcare. He has worked with a wide range of patients — from athletes to pregnant women and infants — helping them move from pain to performance.', 'He believes nobody should have to settle for "your labs are normal" when they do not feel normal, and he is never finished learning: continued study through the Kharrazian Institute and ongoing work in bloodwork interpretation, gut function and systemic inflammation keep the care he delivers improving alongside the science.', 'Outside the clinic, he enjoys time with loved ones, staying active, traveling, and spending time outdoors.'];
const CREDENTIALS = [['Licensure', 'Massachusetts Board-Certified Chiropractor'], ['Doctorate', 'Doctor of Chiropractic, Life Chiropractic College — Summa Cum Laude'], ['Certification', 'Kharrazian Institute — functional medicine'], ['Undergraduate', 'B.S. Biology, Franciscan University — NCAA soccer']];
const FOCUS = ['Functional bloodwork', 'Nutrition', 'Supplementation', 'Systemic inflammation', 'Gut function', 'Athletic performance', 'Pregnancy & pediatric care', 'Therapeutic exercise'];
function ProvidersScreen({
  go
}) {
  const {
    Section,
    Placeholder,
    GoldRule
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "80px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.72fr 1.28fr',
      gap: '4rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brian-gaughan.png",
    alt: "Dr. Brian Gaughan",
    style: {
      width: '100%',
      height: 380,
      objectFit: 'cover',
      objectPosition: 'center top',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, CREDENTIALS.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, "Our providers"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Dr. Brian Gaughan, DC"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 620
    }
  }, "Chiropractor and functional medicine clinician. Whole-person, results-driven care."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Kharrazian Institute certified"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Massachusetts board-certified"))), /*#__PURE__*/React.createElement("hr", {
    className: "lux-rule"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, BIO.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 680
    }
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "Book your review"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('approach')
  }, "See how it works"))))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    pad: "80px"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Clinical focus",
    title: "Where his work concentrates"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginTop: 36
    }
  }, FOCUS.map(f => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--navy-900)',
      background: 'var(--white)',
      borderTop: '3px solid var(--gold-500)',
      padding: '14px 20px',
      boxShadow: 'var(--shadow-1)'
    }
  }, f)))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    pad: "80px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '4rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "Growing the team",
    title: "Clinicians who work this way",
    lede: "Lux Wellness is adding providers who share the vitalistic, functional philosophy. If that is how you practice, we would like to hear from you."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => go('contact')
  }, "Get in touch"))));
}
Object.assign(window, {
  ProvidersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProvidersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProvidersScreen.standalone.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  SectionHeading
} = window.LuxFunctionalWellnessDesignSystem_cefeb7;
const BIO = ['Dr. Brian Gaughan is a Massachusetts Board-Certified Chiropractor and functional medicine clinician who takes a holistic, root-cause approach to health. His passion for care was ignited when he discovered chiropractic — a field that aligned with his belief in the body\'s innate ability to heal. That same conviction is what pulled him toward functional medicine: if the body can heal, then the job is to find what is standing in its way and remove it. His vitalistic and functional philosophy is the foundation of Lux Wellness — whole-person, results-driven care.', 'He graduated Summa Cum Laude from Life Chiropractic College in Marietta, GA, with extensive training in adjusting techniques, functional medicine, nutrition, muscle work, and therapeutic exercise. He also holds a Biology degree from Franciscan University, where he played NCAA soccer. Functional bloodwork became the throughline: it is the clearest window into what a body actually needs, and it turns good intentions into a plan you can measure.', 'Dr. Gaughan\'s background includes experience as both an EMT and a chiropractic assistant, giving him a strong foundation in both emergency and natural healthcare. He has worked with a wide range of patients — from athletes to pregnant women and infants — helping them move from pain to performance.', 'He believes nobody should have to settle for "your labs are normal" when they do not feel normal, and he is never finished learning: continued study through the Kharrazian Institute and ongoing work in bloodwork interpretation, gut function and systemic inflammation keep the care he delivers improving alongside the science.', 'Outside the clinic, he enjoys time with loved ones, staying active, traveling, and spending time outdoors.'];
const CREDENTIALS = [['Licensure', 'Massachusetts Board-Certified Chiropractor'], ['Doctorate', 'Doctor of Chiropractic, Life Chiropractic College — Summa Cum Laude'], ['Certification', 'Kharrazian Institute — functional medicine'], ['Undergraduate', 'B.S. Biology, Franciscan University — NCAA soccer']];
const FOCUS = ['Functional bloodwork', 'Nutrition', 'Supplementation', 'Systemic inflammation', 'Gut function', 'Athletic performance', 'Pregnancy & pediatric care', 'Therapeutic exercise'];
function ProvidersScreen({
  go
}) {
  const {
    Section,
    Placeholder,
    GoldRule
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "80px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.72fr 1.28fr',
      gap: '4rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.brianPortrait,
    alt: "Dr. Brian Gaughan",
    style: {
      width: '100%',
      height: 380,
      objectFit: 'cover',
      objectPosition: 'center top',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, CREDENTIALS.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, "Our providers"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Dr. Brian Gaughan, DC"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 620
    }
  }, "Chiropractor and functional medicine clinician. Whole-person, results-driven care."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Kharrazian Institute certified"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Massachusetts board-certified"))), /*#__PURE__*/React.createElement("hr", {
    className: "lux-rule"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, BIO.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-serif-accent)',
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 680
    }
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "Book your review"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('approach')
  }, "See how it works"))))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    pad: "80px"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Clinical focus",
    title: "Where his work concentrates"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginTop: 36
    }
  }, FOCUS.map(f => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--navy-900)',
      background: 'var(--white)',
      borderTop: '3px solid var(--gold-500)',
      padding: '14px 20px',
      boxShadow: 'var(--shadow-1)'
    }
  }, f)))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    pad: "80px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '4rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "Growing the team",
    title: "Clinicians who work this way",
    lede: "Lux Wellness is adding providers who share the vitalistic, functional philosophy. If that is how you practice, we would like to hear from you."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => go('contact')
  }, "Get in touch"))));
}
Object.assign(window, {
  ProvidersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProvidersScreen.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const {
  Button,
  Card,
  SectionHeading
} = window.LuxFunctionalWellnessDesignSystem_cefeb7;
const SERVICES = [['Functional bloodwork review', 'A comprehensive review of your bloodwork panel interpreted through a functional lens — not just whether you\'re "in range," but whether you\'re truly optimal.', 'Book a review'], ['Nutritional counseling', 'Personalized dietary guidance based on your bloodwork and health goals. We identify deficiencies, sensitivities, and opportunities that standard advice misses.', 'Get started'], ['Supplementation protocols', 'Evidence-informed supplementation recommendations tailored to your individual results — not a one-size-fits-all stack off a shelf.', 'Learn more'], ['Lifestyle & habit coaching', 'Sustainable change happens through habits. We help you build routines around sleep, stress, movement, and daily nutrition that compound over time.', 'Start the conversation'], ['Co-management for clinics', 'Working alongside chiropractic rehab offices to provide functional wellness care that accelerates patient recovery and reduces systemic inflammation.', 'Partner with us'], ['Performance optimization', 'For athletes and driven individuals who want to understand their biomarkers and use that data to train smarter, recover faster, and perform longer.', 'Optimize now']];
function ServicesScreen({
  go
}) {
  const {
    Section,
    GoldRule
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "80px"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we offer",
    title: "Services",
    lede: "Virtual functional care, from the first panel to the retest."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      marginTop: 56
    }
  }, SERVICES.map(([t, d, cta], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    title: t,
    onClick: () => go(i === 4 ? 'partners' : 'contact')
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--text-muted)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)',
      borderBottom: '1px solid var(--gold-700)',
      alignSelf: 'flex-start'
    }
  }, cta, " \u2192"))))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    pad: "80px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '4rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "Not sure where to start?",
    title: "Start with the 15-minute consultation",
    lede: "It costs nothing and it tells us both whether functional bloodwork is the right next step for you."
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('contact')
  }, "Book your review"))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const NS = window.LuxFunctionalWellnessDesignSystem_cefeb7;
const {
  Logo,
  Button
} = NS;
const NAV = [{
  key: 'home',
  label: 'Home'
}, {
  key: 'approach',
  label: 'Approach'
}, {
  key: 'providers',
  label: 'Providers'
}, {
  key: 'services',
  label: 'Services'
}, {
  key: 'partners',
  label: 'Partners'
}, {
  key: 'contact',
  label: 'Contact'
}];
function Header({
  route,
  go
}) {
  const [open, setOpen] = React.useState(false);
  const nav = k => {
    setOpen(false);
    go(k);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lux-headbar",
    style: {
      padding: '0 5%',
      minHeight: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      nav('home');
    },
    style: {
      textDecoration: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "onDark",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    className: "lux-burger",
    "aria-label": open ? 'Close menu' : 'Open menu',
    "aria-expanded": open,
    onClick: () => setOpen(o => !o),
    style: {
      display: 'none',
      width: 44,
      height: 44,
      background: 'none',
      border: '1px solid rgba(255,255,255,.3)',
      cursor: 'pointer',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 2,
      background: 'var(--gold-500)',
      transition: 'transform var(--dur-base) var(--ease-standard)',
      transform: open ? 'translateY(7px) rotate(45deg)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 2,
      background: 'var(--gold-500)',
      opacity: open ? 0 : 1,
      transition: 'opacity var(--dur-fast)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 2,
      background: 'var(--gold-500)',
      transition: 'transform var(--dur-base) var(--ease-standard)',
      transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: open ? 'lux-nav lux-nav-open' : 'lux-nav',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.key,
    href: "#",
    onClick: e => {
      e.preventDefault();
      nav(n.key);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: route === n.key ? 'var(--gold-500)' : 'rgba(255,255,255,.75)',
      transition: 'var(--transition-color)'
    }
  }, n.label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => nav('contact')
  }, "Book your review"))));
}
function GoldRule() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'var(--gold-rule)'
    }
  });
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-950)',
      padding: '48px 5%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "onDark",
    size: 20
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'rgba(255,255,255,.3)',
      letterSpacing: '0.05em',
      margin: 0
    }
  }, "\xA9 2026 Lux Wellness LLC. All rights reserved. Functional wellness care is not a substitute for emergency or primary medical care."), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, NAV.slice(1).map(n => /*#__PURE__*/React.createElement("li", {
    key: n.key
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(n.key);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.4)',
      textDecoration: 'none'
    }
  }, n.label)))));
}
function Placeholder({
  height = 320,
  label = 'image placeholder',
  tone = 'sand'
}) {
  const dark = tone === 'navy';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: dark ? 'var(--navy-700)' : 'var(--sand-200)',
      border: `1px solid ${dark ? 'var(--border-inverse)' : 'var(--sand-300)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.4)' : 'var(--text-subtle)'
    }
  }, label);
}
function Section({
  tone = 'light',
  children,
  pad = '100px',
  padBottom,
  max = 'var(--max-width-content)'
}) {
  const bg = tone === 'dark' ? 'var(--navy-900)' : tone === 'sunken' ? 'var(--surface-sunken)' : 'var(--cream)';
  return /*#__PURE__*/React.createElement("section", {
    className: "lux-section",
    style: {
      background: bg,
      paddingTop: pad,
      paddingBottom: padBottom || pad,
      paddingLeft: '5%',
      paddingRight: '5%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: max,
      margin: '0 auto'
    }
  }, children));
}
Object.assign(window, {
  Header,
  Footer,
  GoldRule,
  Placeholder,
  Section,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
