import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://pickle.art' },
    { url: 'https://pickle.art/episodes/1' },
    { url: 'https://pickle.art/attribution-non-commercial-share-alike' },
  ];
}
