import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getWebNavigationList } from '@/network/webNavigation';
import { CircleChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { WebNavigationListRow } from '@/lib/data';
import WebNavCardList from '@/components/webNav/WebNavCardList';

const ScrollToTop = dynamic(() => import('@/components/page/ScrollToTop'), { ssr: false });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.home',
  });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: './',
    },
  };
}

export const revalidate = 3600;

export default async function Page() {
  const t = await getTranslations('Home');
  const res = await getWebNavigationList({ pageNum: 1, pageSize: 20 });

  // 按照 category 分组
  const groupedData: { [key: string]: WebNavigationListRow[] } = res.rows.reduce(
    (acc: { [key: string]: WebNavigationListRow[] }, row) => {
      const key = row.categoryName || 'unknown';
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(row);
      return acc;
    },
    {},
  );

  return (
    <>
      <section id='products gallery' className='container py-12 sm:py-24'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold md:text-4xl '>{t('title')}</h1>
          <h2 className='mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4'>{t('subTitle')}</h2>
        </div>

        <div className='flex flex-col gap-6'>
          {Object.keys(groupedData).map((categoryName) => (
            <div key={categoryName}>
              <h2 className='mb-2 text-left text-[18px] lg:text-[32px]'>{categoryName}</h2>
              <WebNavCardList key={categoryName} dataList={groupedData[categoryName]} />
            </div>
          ))}

          <Link
            href='/explore'
            className='mx-auto my-8 flex w-fit items-center justify-center gap-5 rounded-[9px] border p-[10px] text-sm leading-4 hover:opacity-70'
          >
            {t('exploreMore')}
            <CircleChevronRight className='mt-[0.5] h-[20px] w-[20px]' />
          </Link>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
}
