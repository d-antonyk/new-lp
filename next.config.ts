// next.config.js
import type { NextConfig } from 'next';
const path = require('path');
const dotenv = require('dotenv');

// Загружаем переменные окружения из кастомной папки, как в Gatsby

dotenv.config({
  path: `./.envs/.env.${process.env.NODE_ENV}`,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // можно указать внешние домены, если нужно
    formats: ['image/avif', 'image/webp'],
  },

  webpack(config) {
    const assetRule = config.module.rules.find((rule:any) => 
      typeof rule !== 'undefined' &&
      typeof rule.test !== 'undefined' &&
      rule.test instanceof RegExp &&
      rule.test.test('.svg')
    );

    if (assetRule) {
      assetRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.[jt]sx?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
            svgProps: {
              role: 'img',
            },
          },
        },
      ],
    });

    return config;
  },

  env: {
    SITE_TITLE: process.env.SITE_TITLE || 'Digital Marketing Agency West Palm Beach | TopPosition.com LLC',
    SITE_DESCRIPTION: process.env.SITE_DESCRIPTION || 'TopPosition.com LLC is a full-service digital marketing agency dedicated to growing your client base and bringing your business to a new competitive level.',
    SITE_IMAGE: '/icons/icon-256x256.png',
    SITE_URL: process.env.SITE_URL || 'https://topposition.com/',
    SITE_BASE_TITLE: process.env.SITE_BASE_TITLE || 'Digital Marketing Agency West Palm Beach | TopPosition.com LLC',
    GTM_CODE: process.env.GTM_CODE,
    PHONE_NUMBER: process.env.PHONE_NUMBER,
    GATSBY_GOOGLE_PHONE_NUMBER: process.env.GATSBY_GOOGLE_PHONE_NUMBER,
    DEFAULT_PAGE_TITLE: process.env.DEFAULT_PAGE_TITLE,
    DEFAULT_PAGE_DESCRIPTION: process.env.DEFAULT_PAGE_DESCRIPTION,
  },

};

module.exports = nextConfig;
