Renders the LUX wordmark. **Option C (bracket) is the chosen primary lockup** and the component default.

```jsx
<Logo size={34} />                                  {/* bracket, navy */}
<Logo tone="onDark" size={26} />                    {/* nav / footer on navy */}
<Logo variant="outline" size={30} />                {/* print and stationery only */}
```

The gold rule is 3px and always full-height against the wordmark. `boxed` and `outline` are retained as
secondary lockups (avatar crops, print), but the bracket is what appears in the nav, the footer and on slides.
Never rotate it, add a glyph, or place it over a busy image without a protection gradient.
