import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getPost, posts } from '@/lib/blog'
import { site } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'
import { LinkButton } from '@/components/ui/link-button'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  const url = `${site.url}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { '@type': 'Organization', name: post.author },
          publisher: { '@type': 'Organization', name: site.name },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
        }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to blog
      </Link>

      <header className="mt-6">
        <span className="text-sm font-semibold text-primary">{post.category}</span>
        <h1 className="mt-2 text-balance font-serif text-3xl font-semibold leading-tight md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          By {post.author} ·{' '}
          {new Date(post.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}{' '}
          · {post.readTime}
        </p>
      </header>

      <div className="prose-custom mt-8 space-y-6">
        {post.content.map((section, i) => (
          <section key={i}>
            {section.heading ? (
              <h2 className="mb-3 font-serif text-2xl font-semibold">{section.heading}</h2>
            ) : null}
            {section.body.map((p, j) => (
              <p key={j} className="leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl border border-border bg-secondary p-6 text-center md:p-8">
        <h2 className="text-pretty font-serif text-xl font-semibold">Ready to start your journey?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Support your healthy habits with {site.name}, our natural herbal weight-loss formula. Order with
          Cash on Delivery across Pakistan.
        </p>
        <LinkButton href="/product" className="mt-5">
          View Product
        </LinkButton>
      </div>

      {related.length > 0 && (
        <aside className="mt-14">
          <h2 className="mb-6 font-serif text-2xl font-semibold">Related articles</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="rounded-xl border border-border bg-card p-4 text-sm font-medium transition-shadow hover:shadow-md hover:text-primary"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </aside>
      )}
    </article>
  )
}
