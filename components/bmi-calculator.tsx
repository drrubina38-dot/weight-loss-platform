'use client'

import { useState } from 'react'
import { Scale } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = [
  { max: 18.5, label: 'Underweight', color: 'text-sky-600', bg: 'bg-sky-50 border-sky-200', note: 'You may need to gain some weight. Focus on nutritious, calorie-dense foods.' },
  { max: 25, label: 'Normal weight', color: 'text-primary', bg: 'bg-secondary border-primary/30', note: 'Great! You are in a healthy range. Maintain your balanced diet and activity.' },
  { max: 30, label: 'Overweight', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200', note: 'A little weight loss would benefit your health. Our diet plans can help.' },
  { max: Infinity, label: 'Obese', color: 'text-destructive', bg: 'bg-destructive/10 border-destructive/30', note: 'Consider a structured weight-loss plan and consult a doctor for guidance.' },
]

function categoryFor(bmi: number) {
  return categories.find((c) => bmi < c.max) ?? categories[categories.length - 1]
}

export function BmiCalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [error, setError] = useState('')

  function calculate(e: React.FormEvent) {
    e.preventDefault()
    const h = Number(height)
    const w = Number(weight)
    if (!h || !w || h < 100 || h > 250 || w < 20 || w > 400) {
      setError('Please enter a valid height (100–250 cm) and weight (20–400 kg).')
      setBmi(null)
      return
    }
    setError('')
    const m = h / 100
    setBmi(Math.round((w / (m * m)) * 10) / 10)
  }

  const cat = bmi !== null ? categoryFor(bmi) : null
  const fieldClass =
    'mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20'

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={calculate} className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="bmi-height" className="text-sm font-medium text-foreground">
              Height (cm)
            </label>
            <input id="bmi-height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="170" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="bmi-weight" className="text-sm font-medium text-foreground">
              Weight (kg)
            </label>
            <input id="bmi-weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="75" className={fieldClass} />
          </div>
        </div>

        {error && <p className="mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
        >
          <Scale className="size-5" /> Calculate BMI
        </button>

        <div className="mt-6 space-y-1.5 text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">BMI Categories</p>
          <p>Underweight: below 18.5 &nbsp;|&nbsp; Normal: 18.5–24.9</p>
          <p>Overweight: 25–29.9 &nbsp;|&nbsp; Obese: 30 and above</p>
        </div>
      </form>

      <div>
        {bmi !== null && cat ? (
          <div className={cn('rounded-3xl border p-8 text-center', cat.bg)}>
            <p className="text-sm font-medium text-muted-foreground">Your BMI is</p>
            <p className="mt-1 font-serif text-6xl font-bold text-foreground">{bmi}</p>
            <p className={cn('mt-2 text-xl font-semibold', cat.color)}>{cat.label}</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">{cat.note}</p>
          </div>
        ) : (
          <div className="flex h-full min-h-52 flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card p-8 text-center">
            <Scale className="size-8 text-primary/40" />
            <p className="mt-3 text-sm text-muted-foreground">Enter your height and weight to see your BMI instantly.</p>
          </div>
        )}
      </div>
    </div>
  )
}
