import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const formData = await request.json();

    const API_KEY = process.env.MAILGUN_API_KEY;
    const DOMAIN = process.env.MAILGUN_DOMAIN;
    const CONTACT_EMAIL = 'hola@smarterbot.cl';

    if (!API_KEY || !DOMAIN) {
        console.error('Mailgun credentials missing');
        // Return success to user but log error for dev
        return NextResponse.json({ success: true, warning: 'Emails not configured' });
    }

    const auth = btoa(`api:${API_KEY}`);
    const mailData = new URLSearchParams();
    mailData.append('from', `CL1 Cloud <postmaster@${DOMAIN}>`);
    mailData.append('to', CONTACT_EMAIL);
    mailData.append('subject', `Nueva Reserva CL1 Cloud - ${formData.name}`);
    mailData.append('text', `
    Nombre: ${formData.name}
    Email: ${formData.email}
    Empresa: ${formData.company || 'N/A'}
    Plan: ${formData.plan}
    Caso de Uso: ${formData.use_case}
  `);

    try {
        const response = await fetch(`https://api.mailgun.net/v3/${DOMAIN}/messages`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: mailData.toString(),
        });

        if (response.ok) {
            return NextResponse.json({ success: true });
        } else {
            const errorData = await response.json();
            console.error('Mailgun error:', errorData);
            return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 });
        }
    } catch (error) {
        console.error('Internal error:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
