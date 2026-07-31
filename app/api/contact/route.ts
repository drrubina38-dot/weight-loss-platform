import { NextResponse } from 'next/server'

/**
 * Contact form placeholder endpoint.
 *
 * Currently logs the message to the server console so the UI works end-to-end
 * with no paid services. To persist messages later, replace the console.log
 * block with a Supabase insert (or an email service like Resend):
 *
 *   import { createClient } from '@/lib/supabase/server'
 *   const supabase = await createClient()
 *   await supabase.from('contact_messages').insert({ name, email, subject, message })
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body ?? {}

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 })
    }

    // TODO: Connect Supabase / email service here.
    console.log('[v0] New contact message:', { name, email, subject, message })

    return NextResponse.json({ ok: true, message: 'Message received.' }, { status: 201 })
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }
}
