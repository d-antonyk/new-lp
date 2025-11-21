import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';

import { SEO } from '@/features/seo/seo';
import { locationFetch } from '@/features/location';
import { DefaultLayout } from '@/widgets/layout/default';
import usePhoneNumber from '@/shared/hooks/usePhoneNumber'; 

import { FixedButton } from '../widgets/buttons/fixed-button';
import { Banner } from '../widgets/landing/sections/banner/banner';
import { Brands } from '../widgets/landing/sections/brands/brands';
import { Before } from '../widgets/landing/sections/before/before';
import { Why } from '../widgets/landing/sections/why/why';
import { Articles } from '../widgets/landing/sections/articles/articles';
import { Reviews } from '../widgets/landing/sections/reviews/reviews';

const IndexPage: React.FC = () => {
  const { phoneNumber, phoneNumberLink } = usePhoneNumber();
  useEffect(() => {
    // @ts-expect-error external script
    window.__ctm?.main?.runNow();
  }, []);

  return (
    <>
      <SEO title={`Digital Marketing Agency West Palm Beach | TopPosition.com LLC`} />
      <DefaultLayout phoneNumber={phoneNumber} phoneNumberLink={phoneNumberLink}>
        <FixedButton phoneNumber={phoneNumber} phoneNumberLink={phoneNumberLink} />
        <Banner />
        <Brands />
        <Before />
        <Why />
        <Reviews />
        <Articles />
      </DefaultLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const location = await locationFetch(context);
    return {
      props: {
        location,
      },
    };
  } catch (error) {
    console.error('Geo Service error:', error);
    console.log('Return default fallback:', process.env.GEO_DEFAULT_LOCATION);
    return {
      props: {
        location: process.env.GEO_DEFAULT_LOCATION || '',
      },
    };
  }
};

export default IndexPage;
