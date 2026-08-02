import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | Weight Management, Nutrition, and Fitness Tips",
  description:
    "Read practical articles on weight management, healthy Pakistani foods, exercise at home, and everyday wellness from Dr. Rubina Official.",
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    title: `${site.name} Blog | Weight Management and Healthy Living Tips`,
    description:
      "Helpful articles on healthy Pakistani eating, exercise, and sustainable lifestyle habits.",
    url: `${site.url}/blog`,
    images: [
      {
        url: site.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Dr. Rubina Official blog and wellness guidance",
      },
    ],
  },
};

const categories = [
  "All",
  "Weight Loss",
  "Healthy Eating",
  "Exercise",
  "Lifestyle",
  "Nutrition",
] as const;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sortedPosts;

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Helpful guidance for healthier routines"
        description="Explore practical reads on exercise at home, healthy Pakistani meals, daily habits, calculators, and sustainable weight management support."
      />

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-10 block overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="grid gap-6 p-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:p-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-secondary">
              <Image
                src="/ingredients.png"
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                {featured.category}
              </span>
              <h2 className="mt-2 text-pretty font-serif text-2xl font-semibold md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {site.name} Editorial Team · {formatDate(featured.date)} ·{" "}
                {featured.readTime}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read article
                <ArrowRight className="size-4" />
              </span>
            </div>
          </div>
        </Link>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-[1.75rem] border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {post.category}
              </span>
              <h3 className="mt-3 text-pretty font-serif text-xl font-semibold text-foreground transition group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                {post.excerpt}
              </p>
              <p className="mt-5 text-xs text-muted-foreground">
                {formatDate(post.date)} · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
