import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useSiteMetadata } from '@/features/seo/hooks/use-site-metadata';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: ReactNode;
}

export const SEO: React.FC<SEOProps> = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    baseTitle,
  } = useSiteMetadata();

  const seo = {
    title: `${title || defaultTitle} ${baseTitle}`,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <link rel="icon" type="image/webp" sizes="32x32" href="/favicon-32x32.webp" />
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="og:site_name" content={seo.title} />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="article" />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta name="robots" content="noindex" />
      {children}
    </Head>
  );
};
