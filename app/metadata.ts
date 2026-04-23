import type { Metadata } from 'next';

const SOCIAL_IMAGE = 'https://next-s3-public.s3.us-west-2.amazonaws.com/pickle-social.png';

export interface PageMetadataInput {
  title: string;
  description: string;
  pageUrl: string;
}

export function createPageMetadata({ title, description, pageUrl }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(pageUrl),
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: 'website',
      images: [{ url: SOCIAL_IMAGE, width: 1200, height: 628 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
