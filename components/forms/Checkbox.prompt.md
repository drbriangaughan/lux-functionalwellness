Boolean and single-choice selection inside intake forms and consent blocks.

```jsx
<Checkbox label="Text me appointment reminders" checked={sms} onChange={setSms} />
<Radio name="goal" label="More energy" checked={goal === 'energy'} onChange={() => setGoal('energy')} />
```

Checkbox is a 2px-radius square; Radio is round. Both are 20px with a 32px row target — stack them with 12px gaps.
