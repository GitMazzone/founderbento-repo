import type { Metadata } from 'next';
import { getBaseUrl } from './routePaths';
import { appConfig } from './config';

const title = `Up to 50 characters | ${appConfig.displayName}`;
const description = '60 to 180 characters long';

export const baseMetadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title,
  description,
  robots: {
    // Should crawlers index this page? Set to false for pages like login or admin panels.
    index: true,
    // Should crawlers follow the links on this page?
    follow: true,
    // Tell search engines not to cache the content of the page.
    nocache: false,
    googleBot: {
      // Should Googlebot index this page?
      index: true,
      // Should Googlebot follow the links on this page?
      follow: true,
      // Prevents Googlebot from indexing images on this page.
      noimageindex: false,
      // Length of video previews for this page. -1 = no preview, 0 = thumbnail only, <int> = seconds to preview
      'max-video-preview': 0,
      // Size of image previews for this page. Can be 'none' or 'standard' or 'large'.
      'max-image-preview': 'large',
      // Length of text snippets shown for this page. -1 = no snippet, 0 = "very small snippet," <int> = max length.
      'max-snippet': 50,
    },
  },
  openGraph: {
    title,
    description,
    url: new URL(getBaseUrl()),
    siteName: appConfig.displayName,
    images: [
      {
        url: 'seo/ogStandardPreview.webp',
        width: 800,
        height: 600,
        alt: 'A description of your preview image.',
      },
      {
        url: 'seo/ogLargePreview.webp',
        width: 1800,
        height: 1600,
        alt: 'A description of your preview image.',
      },
    ],
    // Locale these tags are marked up in. Format: language_TERRITORY.
    locale: 'en_US',
    // Default is 'website'. Other values are 'article', 'book', etc.
    type: 'website',
  },
};
