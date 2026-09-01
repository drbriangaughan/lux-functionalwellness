Modal for booking confirmation, consent and destructive checks.

```jsx
<Dialog open={open} eyebrow="Consult" title="Confirm your discovery call" onClose={close}
  footer={<><Button variant="ghost" onClick={close}>Back</Button><Button variant="primary">Confirm</Button></>}>
  <p>Thursday, 10:30 AM · 45 minutes · video</p>
</Dialog>
```

One dialog at a time. Scrim is `--overlay-scrim` with a 3px blur; the panel does not animate in beyond a fade.
