import { MetadataRoute } from 'next'

export default function sitemap() {
  return [
    {
      url: 'https://kpoproad.io',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://kpoproad.io/vote',
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: 'https://kpoproad.io/auditions',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}