const steps = [
  { n: '01', title: 'Place your order', text: 'Fill the simple COD form or message us on WhatsApp. No advance payment.' },
  { n: '02', title: 'Receive at your door', text: 'We deliver across Pakistan in 2–4 days. Pay cash when it arrives.' },
  { n: '03', title: 'Take daily & follow the plan', text: 'Take 2 capsules a day and follow our free desi diet plan.' },
  { n: '04', title: 'See natural results', text: 'Notice reduced cravings and steady weight loss within a few weeks.' },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">How It Works</p>
        <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
          Start in 4 simple steps
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.n} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
            <span className="font-serif text-4xl font-semibold text-primary/25">{step.n}</span>
            <h3 className="mt-3 font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
