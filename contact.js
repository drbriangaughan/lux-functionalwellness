// Cloudflare Pages Function — runs at /api/contact
// Keeps the Resend API key server-side (never exposed to the browser).
export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    const { name, email, role, phone, message, concerns, slot } = data;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Missing name or email' }), { status: 400 });
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Must be a domain you've verified in Resend. Until then, use onboarding@resend.dev for testing.
        from: 'Lux Functional Wellness <notifications@lux-functionalwellness.com>',
        to: ['drbriangaughan@lux-functionalwellness.com'], // <-- change to where you want submissions sent
        reply_to: email,
        subject: `New consultation request — ${name}`,
        html: `
          <h2>New consultation request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || '—'}</p>
          <p><strong>I am a:</strong> ${role || '—'}</p>
          <p><strong>Requested slot:</strong> ${slot || '—'}</p>
          <p><strong>Concerns:</strong> ${(concerns || []).join(', ') || '—'}</p>
          <p><strong>Message:</strong><br>${(message || '').replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      return new Response(JSON.stringify({ error: 'Resend error', detail: err }), { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
