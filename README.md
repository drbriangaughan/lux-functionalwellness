# Deploying Lux Functional Wellness

## Before you deploy
1. Open `functions/api/contact.js` and replace `YOUR_INBOX@lux-functionalwellness.com` with the real inbox
   that should receive form submissions.
2. In Resend, verify `lux-functionalwellness.com` as a sending domain (Resend dashboard → Domains → Add Domain).
   Resend will give you DNS records (TXT/MX/CNAME) to add — add those in Cloudflare → DNS → Records, same as any
   other record. Until that's verified, you can test with `from: 'onboarding@resend.dev'` instead.

## Deploy (first time)
```bash
npx wrangler login
npx wrangler pages project create lux-functional-wellness
npx wrangler pages secret put RESEND_API_KEY --project-name=lux-functional-wellness
npx wrangler pages deploy . --project-name=lux-functional-wellness
```
You'll be prompted to paste your Resend API key when the `secret put` command runs — it's stored encrypted on
Cloudflare, never in your code.

## Deploy (every update after that)
```bash
npx wrangler pages deploy . --project-name=lux-functional-wellness
```

## Connect your real domain
In the Cloudflare dashboard → Workers & Pages → lux-functional-wellness → Custom domains → Add a domain →
`lux-functionalwellness.com`. Since your nameservers already point to Cloudflare, it adds the DNS record for you
automatically.
