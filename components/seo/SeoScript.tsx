import Script from 'next/script';

import { GOOGLE_TRACKING_ID } from '@/lib/env';

export default function SeoScript() {
  return (
    <>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="262dc8a3-e37b-4b0f-86c2-cddbdcfd18da"
        strategy="afterInteractive"
      />
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TRACKING_ID}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TRACKING_ID}', {
            page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
