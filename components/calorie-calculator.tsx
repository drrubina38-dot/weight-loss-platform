'use client'

import { useState } from 'react'
import { Flame } from 'lucide-react'
import { cn } from '@/lib/utils'

const activityLevels = [
  { value: 1.2, label: 'Sedentary (little or no exercise)' },
  { value: 1.375, label: 'Lightly active (1–3 days/week)' },
  { value: 1.55, label: 'Moderately active (3–5 days/week)' },
  { value: 1.725, label: 'Very active (6–7 days/week)' },
  { value: 1.9, label: 'Extra active (hard job / training)' },
]

type Result = { maintain: number; mildLoss: number; loss: number }

export function CalorieCalculator() {
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [activity, setActivity] = useState(1.375)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState('')

  function calculate(e: React.FormEvent) {
    e.preventDefault()
    const a = Number(age)
    const h = Number(height)
    const w = Number(weight)
    if (!a || !h || !w || a < 10 || a > 100 || h < 100 || h > 250 || w < 30 || w > 300) {
      setError('Please enter valid values (age 10–100, height 100–250 cm, weight 30–300 kg).')
      setResult(null)
      return
    }
    setError('')
    // Mifflin-St Jeor Equation
    const bmr = gender === 'male' ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161
    const maintain = Math.round(bmr * activity)
    setResult({
      maintain,
      mildLoss: maintain - 300,
      loss: maintain - 500,
    })
  }

  const fieldClass =
    'mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20'

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <form onSubmit={calculate} className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div>
          <span className="text-sm font-medium text-foreground">Gender</span>
          <div className="mt-1.5 grid grid-cols-2 gap-3">
            {(['male', 'female'] as const).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                className={cn(
                  'h-11 rounded-xl border text-sm font-medium capitalize transition-colors',
                  gender === g
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-input bg-background text-foreground hover:bg-secondary',
                )}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="age" className="text-sm font-medium text-foreground">
              Age
            </label>
            <input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="25" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="height" className="text-sm font-medium text-foreground">
              Height (cm)
            </label>
            <input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="170" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="weight" className="text-sm font-medium text-foreground">
              Weight (kg)
            </label>
            <input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="75" className={fieldClass} />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="activity" className="text-sm font-medium text-foreground">
            Activity Level
          </label>
          <select
            id="activity"
            value={activity}
            onChange={(e) => setActivity(Number(e.target.value))}
            className={fieldClass}
          >
            {activityLevels.map((lvl) => (
              <option key={lvl.value} value={lvl.value}>
                {lvl.label}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
        >
          <Flame className="size-5" /> Calculate Calories
        </button>
      </form>

      <div className="lg:col-span-2">
        {result ? (
          <div className="rounded-3xl border border-primary/30 bg-secondary/40 p-6 sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground">Your Daily Calories</h3>
            <div className="mt-5 space-y-4">
              <ResultRow label="Maintain weight" value={result.maintain} highlight />
              <ResultRow label="Mild weight loss (~0.25 kg/week)" value={result.mildLoss} />
              <ResultRow label="Weight loss (~0.5 kg/week)" value={result.loss} />
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Estimates use the Mifflin-St Jeor equation. Do not eat below 1200 kcal (women) or 1500 kcal (men)
              without medical advice.
            </p>
          </div>
        ) : (
          <div className="flex h-full min-h-52 flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card p-8 text-center">
            <Flame className="size-8 text-primary/40" />
            <p className="mt-3 text-sm text-muted-foreground">
              Enter your details to see your daily calorie needs.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function ResultRow({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-xl border p-4',
        highlight ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card',
      )}
    >
      <span className={cn('text-sm', highlight ? 'text-primary-foreground/90' : 'text-muted-foreground')}>
        {label}
      </span>
      <span className={cn('text-lg font-bold', highlight ? 'text-primary-foreground' : 'text-foreground')}>
        {value.toLocaleString()} kcal
      </span>
    </div>
  )
}
