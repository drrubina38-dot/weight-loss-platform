import { NextResponse } from 'next/server'
import { product } from '@/lib/product'

/**
 * COD Order endpoint (placeholder storage).
 *
 * Right now orders are validated on the server and logged to the console so the
 * front-end works end-to-end without any paid service. The response shape and
 * request contract are intentionally stable so you can plug in real storage
 * later WITHOUT changing any UI code.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * HOW TO CONNECT SUPABASE LATER (free tier):
 *
 * 1. Create a Supabase project and an `orders` table with columns:
 *    id (uuid, default uuid_generate_v4()), full_name, mobile, city,
 *    address, quantity (int), total (int), status (text default 'pending'),
 *    created_at (timestamptz default now()).
 * 2. `npm install @supabase/supabase-js`
 * 3. Add env vars: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.
 * 4. Replace the `saveOrder` function below with the Supabase insert:
 *
 *      import { createClient } from '@supabase/supabase-js'
 *      const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
 *      const { error } = await supabase.from('orders').insert(order)
 *      if (error) throw error
 *
 * ─────────────────────────────────────────────────────────────────────────
 * HOW TO CONNECT GOOGLE SHEETS LATER (free):
 *
 * 1. Create a Google Apps Script Web App bound to a Sheet that accepts POST
 *    JSON and appends a row. Deploy it and copy the /exec URL.
 * 2. Add env var: GOOGLE_SHEETS_WEBHOOK_URL.
 * 3. In `saveOrder`, POST the order to that URL:
 *
 *      await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL!, {
 *        method: 'POST',
 *        body: JSON.stringify(order),
 *      })
 * ─────────────────────────────────────────────────────────────────────────
 */

type OrderInput = {
  fullName?: string
  mobile?: string
  city?: string
  address?: string
  quantity?: number | string
}

const MAX_QUANTITY = 10

// Placeholder persistence. Swap this out for Supabase / Google Sheets (see above).
async function saveOrder(order: Record<string, unknown>) {
  console.log('[v0] New COD order received:', order)
  // No external service is called yet — this keeps the project on the free plan.
}

export async function POST(request: Request) {
  let body: OrderInput
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const fullName = String(body.fullName ?? '').trim()
  const mobile = String(body.mobile ?? '').trim()
  const city = String(body.city ?? '').trim()
  const address = String(body.address ?? '').trim()
  const quantity = Number(body.quantity ?? 1)

  // Server-side validation
  const errors: string[] = []
  if (fullName.length < 3) errors.push('Please enter your full name.')
  // Pakistani mobile numbers: 03XXXXXXXXX or +923XXXXXXXXX
  if (!/^(\+?92|0)3\d{9}$/.test(mobile.replace(/[\s-]/g, ''))) {
    errors.push('Please enter a valid Pakistani mobile number (e.g. 03001234567).')
  }
  if (city.length < 2) errors.push('Please enter your city.')
  if (address.length < 10) errors.push('Please enter your complete delivery address.')
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) {
    errors.push(`Quantity must be between 1 and ${MAX_QUANTITY}.`)
  }

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, error: errors.join(' ') }, { status: 422 })
  }

  // Always recompute the total on the server — never trust a client-sent price.
  const total = product.price * quantity

  const order = {
    fullName,
    mobile,
    city,
    address,
    quantity,
    product: product.name,
    unitPrice: product.price,
    total,
    status: 'pending',
    createdAt: new Date().toISOString(),
  }

  try {
    await saveOrder(order)
  } catch (err) {
    console.log('[v0] Failed to save order:', err)
    return NextResponse.json(
      { ok: false, error: 'Something went wrong saving your order. Please try again.' },
      { status: 500 },
    )
  }

  return NextResponse.json({
    ok: true,
    message: 'Order placed successfully! Our team will call you shortly to confirm.',
    orderSummary: { quantity, total },
  })
}
