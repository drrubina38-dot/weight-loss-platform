import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { posts } from '@/lib/blog'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog — Weight Loss, Nutrition & Healthy Living Tips',
  description:
    'Free, SEO-friendly articles on weight loss, healthy Pakistani eating, exercise, nutrition and lifestyle from the SehatSlim team.',
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    title: 'SehatSlim Blog — Weight Loss & Healthy Living Tips',
    description:
      'Free articles on weight loss, healthy eating, exercise, nutrition and lifestyle for a Pakistani audience.',
    url: `${site.url}/blog`,
  },
}

const categories = ['All', 'Weight Loss', 'Healthy Eating', 'Exercise', 'Lifestyle', 'Nutrition'] as const

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Tips for a healthier, lighter you"
        description="Practical, science-backed advice on weight loss, nutrition and healthy living — written for real Pakistani lifestyles."
      />

      <section className="mx-auto max-w-6xl px-4 pb-20">
        {/* Category chips (visual filter labels) */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Featured article */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-10 block overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
        >
          <div className="grid gap-6 p-6 md:grid-cols-2 md:items-center md:p-8">
            <div className="aspect-video overflow-hidden rounded-xl bg-secondary">
              <img
                src="/ingredients.png"
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary">{featured.category}</span>
              <h2 className="mt-2 text-pretty font-serif text-2xl font-semibold md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                {featured.author} · {featured.readTime}
              </p>
            </div>
          </div>
        </Link>

        {/* Article grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {post.category}
              </span>
              <h3 className="mt-2 text-pretty font-serif text-xl font-semibold group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}{' '}
                · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
