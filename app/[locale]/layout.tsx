import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import './globals.css';

import { Toaster } from '@/components/ui/sonner';
import NavBar from '@/components/home/Navigation';

import SeoScript from '@/components/seo/SeoScript';

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className='relative min-h-screen mx-auto flex flex-col bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Toaster
            position='top-center'
            toastOptions={{
              classNames: {
                error: 'bg-red-400',
                success: 'text-green-400',
                warning: 'text-yellow-400',
                info: 'bg-blue-400',
              },
            }}
          />
          <NavBar />
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SeoScript />
      </body>
    </html>
  );
}
