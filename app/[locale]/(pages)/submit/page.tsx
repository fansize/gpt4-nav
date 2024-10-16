import React from 'react';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import HeadTitle from '@/components/HeadTitle';

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
    <div className='container py-10'>
      <HeadTitle title={t('title')} subTitle={t('subTitle')} />
      <div className='flex items-center justify-center py-6'>
        <SubmitForm />
      </div>
    </div>
  );
}
