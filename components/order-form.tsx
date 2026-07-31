'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2, Minus, Plus, ShieldCheck, Truck } from 'lucide-react'
import { product } from '@/lib/product'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const MAX_QUANTITY = 10

export function OrderForm() {
  const [quantity, setQuantity] = useState(1)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [summary, setSummary] = useState<{ quantity: number; total: number } | null>(null)

  const total = product.price * quantity
  const freeDelivery = quantity >= 2

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const payload = {
      fullName: formData.get('fullName'),
      mobile: formData.get('mobile'),
      city: formData.get('city'),
      address: formData.get('address'),
      quantity,
    }

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
        return
      }
      setStatus('success')
      setMessage(data.message)
      setSummary(data.orderSummary)
    } catch {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-primary/30 bg-secondary/50 p-8 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">Order Confirmed!</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{message}</p>
        {summary && (
          <p className="mt-4 rounded-xl bg-background p-4 text-sm font-medium text-foreground">
            {summary.quantity} × {product.name} — Total: {site.currency} {summary.total.toLocaleString()} (Cash on
            Delivery)
          </p>
        )}
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
        >
          Confirm on WhatsApp
        </a>
      </div>
    )
  }

  const fieldClass =
    'mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h3 className="font-serif text-2xl font-semibold text-foreground">Cash on Delivery Order</h3>
      <p className="mt-1 text-sm text-muted-foreground">No advance payment. Pay when you receive the parcel.</p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="fullName" className="text-sm font-medium text-foreground">
            Full Name
          </label>
          <input id="fullName" name="fullName" type="text" required placeholder="e.g. Ali Raza" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="mobile" className="text-sm font-medium text-foreground">
            Mobile Number
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            inputMode="tel"
            placeholder="e.g. 03001234567"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="city" className="text-sm font-medium text-foreground">
            City
          </label>
          <input id="city" name="city" type="text" required placeholder="e.g. Lahore" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="address" className="text-sm font-medium text-foreground">
            Complete Address
          </label>
          <textarea
            id="address"
            name="address"
            required
            rows={3}
            placeholder="House #, street, area, landmark…"
            className={cn(fieldClass, 'resize-none')}
          />
        </div>

        <div>
          <span className="text-sm font-medium text-foreground">Quantity</span>
          <div className="mt-1.5 flex items-center gap-4">
            <div className="flex items-center rounded-xl border border-input">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex size-10 items-center justify-center text-foreground disabled:opacity-40"
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-10 text-center text-sm font-semibold text-foreground">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))}
                className="flex size-10 items-center justify-center text-foreground disabled:opacity-40"
                disabled={quantity >= MAX_QUANTITY}
                aria-label="Increase quantity"
              >
                <Plus className="size-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              {site.currency} {product.price.toLocaleString()} each
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2 rounded-2xl bg-secondary/50 p-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium text-foreground">
            {site.currency} {total.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Delivery</span>
          <span className={cn('font-medium', freeDelivery ? 'text-primary' : 'text-foreground')}>
            {freeDelivery ? 'FREE' : `${site.currency} 200`}
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-2 text-base">
          <span className="font-semibold text-foreground">Total (COD)</span>
          <span className="font-bold text-foreground">
            {site.currency} {(total + (freeDelivery ? 0 : 200)).toLocaleString()}
          </span>
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-5 animate-spin" /> Placing order…
          </>
        ) : (
          'Place Order (Cash on Delivery)'
        )}
      </button>

      <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="size-4 text-primary" /> Secure &amp; private
        </span>
        <span className="flex items-center gap-1.5">
          <Truck className="size-4 text-primary" /> Delivery in 2–4 days
        </span>
      </div>
    </form>
  )
}
