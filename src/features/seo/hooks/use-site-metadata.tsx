export const useSiteMetadata = () => {
  return {
    title: process.env.SITE_TITLE || '',
    description: process.env.SITE_DESCRIPTION || '',
    image: process.env.SITE_IMAGE || '',
    siteUrl: process.env.SITE_URL || '',
    baseTitle: process.env.SITE_BASE_TITLE || '',
  };
};
