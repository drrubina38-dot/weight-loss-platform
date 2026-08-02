import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { LinkButton } from "@/components/ui/link-button";
import { getPost, posts } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderParagraph(paragraph: string) {
  const pattern = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  const parts: Array<string | { label: string; href: string }> = [];
  let lastIndex = 0;
  let match = pattern.exec(paragraph);

  while (match) {
    if (match.index > lastIndex) {
      parts.push(paragraph.slice(lastIndex, match.index));
    }

    parts.push({ label: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
    match = pattern.exec(paragraph);
  }

  if (lastIndex < paragraph.length) {
    parts.push(paragraph.slice(lastIndex));
  }

  return parts.map((part, index) =>
    typeof part === "string" ? (
      <span key={`${paragraph}-${index}`}>{part}</span>
    ) : (
      <Link key={`${part.href}-${index}`} href={part.href}>
        {part.label}
      </Link>
    ),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  const url = `${site.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: [site.name],
      images: [
        {
          url: site.defaultOgImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [site.defaultOgImage],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const headings = post.content
    .map((section) => section.heading)
    .filter((heading): heading is string => Boolean(heading));

  const related = posts
    .filter((entry) => entry.slug !== post.slug && entry.category === post.category)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: [`${site.url}${site.defaultOgImage}`],
          datePublished: post.date,
          author: { "@type": "Organization", name: site.name },
          publisher: {
            "@type": "Organization",
            name: site.name,
            logo: {
              "@type": "ImageObject",
              url: `${site.url}/apple-icon.png`,
            },
          },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: site.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${site.url}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: post.title,
              item: `${site.url}/blog/${post.slug}`,
            },
          ],
        }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to blog
      </Link>

      <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <header className="rounded-[2rem] border border-border bg-card p-6 shadow-sm md:p-8">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {post.category}
            </span>
            <h1 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span>{site.name}</span>
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="prose-custom mt-8 rounded-[2rem] border border-border bg-white/85 p-6 shadow-sm md:p-10">
            {post.content.map((section, index) => (
              <section
                key={`${post.slug}-${index}`}
                id={
                  section.heading
                    ? section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                    : undefined
                }
                className="scroll-mt-28 py-2"
              >
                {section.heading ? (
                  <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground md:text-3xl">
                    {section.heading}
                  </h2>
                ) : null}
                {section.body.map((paragraph, paragraphIndex) => (
                  <p
                    key={`${post.slug}-${index}-${paragraphIndex}`}
                    className="leading-8 text-muted-foreground"
                  >
                    {renderParagraph(paragraph)}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-border bg-secondary/45 p-6 text-center md:p-8">
            <h2 className="text-pretty font-serif text-2xl font-semibold">
              Ready to support healthier routines?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Explore Dr. Rubina Official for herbal lifestyle support, BMI and
              calorie tools, and Cash on Delivery service across Pakistan.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton href="/product">View Product</LinkButton>
              <LinkButton href="/calorie-calculator" variant="outline">
                Use Calorie Calculator
              </LinkButton>
            </div>
          </div>

          {related.length > 0 && (
            <aside className="mt-12">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-serif text-2xl font-semibold">
                  Related articles
                </h2>
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  See all articles
                </Link>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {related.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group rounded-[1.5rem] border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {relatedPost.category}
                    </p>
                    <h3 className="mt-3 font-serif text-xl font-semibold text-foreground group-hover:text-primary">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {relatedPost.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read article
                      <ArrowRight className="size-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[1.75rem] border border-border bg-card p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              On this page
            </p>
            <nav className="mt-4">
              <ul className="space-y-3 text-sm">
                {headings.map((heading) => {
                  const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");

                  return (
                    <li key={heading}>
                      <a
                        href={`#${id}`}
                        className="text-muted-foreground transition hover:text-primary"
                      >
                        {heading}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </article>
  );
}
