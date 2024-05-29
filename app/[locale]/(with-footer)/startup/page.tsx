import React from 'react';
import { useTranslations } from 'next-intl';

import { formatTime } from '@/lib/utils/timeUtils';
import Faq from '@/components/Faq';
import HeadTitle from '@/components/HeadTitle';

import DesktopTable from './DesktopTable';
import MobileTable from './MobileTable';

export default function Page() {
  const t = useTranslations('Startup');

  return (
    <div className='flex flex-col py-10'>
      <HeadTitle title={t('title')} subTitle={t('subTitle')} />
      <DesktopTable />
      <MobileTable />
      <Faq />
    </div>
  );
}
