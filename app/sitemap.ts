import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { posts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    '',
    '/product',
    '/diet-plans',
    '/calorie-calculator',
    '/bmi-calculator',
    '/blog',
    '/success-stories',
    '/about',
    '/contact',
    '/privacy-policy',
    '/refund-policy',
    '/shipping-policy',
    '/terms',
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: (path === '' || path === '/blog' ? 'weekly' : 'monthly') as
      | 'weekly'
      | 'monthly',
    priority:
      path === ''
        ? 1
        : path === '/product'
          ? 0.9
          : path === '/blog'
            ? 0.85
            : 0.7,
  }))

  const blogRoutes = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
