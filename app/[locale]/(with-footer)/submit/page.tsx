import React from 'react';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import Faq from '@/components/Faq';

import SubmitForm from './SubmitForm';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.submit',
  });

  return {
    title: t('title'),
  };
}

export default function Page() {
  const t = useTranslations('Submit');

  return (
    <div className='container py-12 sm:py-24'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold md:text-4xl'>{t('title')}</h1>
        <h2 className='mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4'>{t('subTitle')}</h2>
      </div>
      <div className='flex items-center justify-center'>
        <SubmitForm />
      </div>
      <Faq />
    </div>
  );
}
