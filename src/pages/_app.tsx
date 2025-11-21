import type { AppProps } from 'next/app';
import { GeoLocationProvider } from '@/app/context/context';
import Script from 'next/script';
import '@/assets/styles/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeoLocationProvider>
      <Component {...pageProps} />
      <Script
        id="ctm-script"
        strategy="afterInteractive"
        data-cfasync="false"
        async
        src="//404957.cctm.xyz/t.js"
      />
    </GeoLocationProvider>
  );
}
