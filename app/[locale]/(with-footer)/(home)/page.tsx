import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { createClient } from '@/db/supabase/server';
import { getWebNavigationList } from '@/network/webNavigation';
import { CircleChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { NavigationDetail, WebNavigationListRow } from '@/lib/data';
import { Button } from '@/components/ui/button';
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

export default async function Page() {
  const t = await getTranslations('Home');
  const res = await getWebNavigationList({ pageNum: 1, pageSize: 20 });

  // 从 Supabase 数据库获取数据
  const supabase = createClient();
  const { data: aiProducts } = await supabase
    .from('ai-products')
    .select('id, name, title, thumbnailUrl, url, content, starRating, categoryName')
    .order('starRating', { ascending: false });

  const groupedDataFromSupabase: { [key: string]: NavigationDetail[] } =
    aiProducts?.reduce((acc: { [key: string]: NavigationDetail[] }, row) => {
      const key = row.categoryName || 'unknown';
      if (!acc[key]) {
        acc[key] = [];
      }
      const navigationDetail: NavigationDetail = {
        id: row.id,
        name: row.name,
        title: row.title,
        thumbnailUrl: row.thumbnailUrl,
        url: row.url,
        content: row.content,
        starRating: row.starRating,
        categoryName: row.categoryName,
        imageUrl: '',
        collectionTime: '',
        detail: '',
        tagName: '',
        websiteData: '',
      };
      acc[key].push(navigationDetail);
      return acc;
    }, {}) || {};

  // 预设的分类标签
  const featureList: string[] = ['Most popular', 'Hot', 'New', 'Recommended', 'Recently updated'];
  // 获取所有的分类名称
  const sortedCategroyKeys = Object.keys(groupedDataFromSupabase).sort();

  // Create a new object and add the key-value pairs in the sorted order
  const sortedGroupedDataFromSupabase: { [key: string]: NavigationDetail[] } = {};
  sortedCategroyKeys.forEach((key) => {
    sortedGroupedDataFromSupabase[key] = groupedDataFromSupabase[key];
  });

  return (
    <section id='products gallery' className='container py-10'>
      {/* 标题 */}
      <div className='text-center'>
        <h1 className='text-3xl font-bold md:text-4xl '>{t('title')}</h1>
        <h2 className='mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4'>{t('subTitle')}</h2>
      </div>

      {/* 分类标签 */}
      <div className='md:justify-left my-8 flex flex-wrap gap-4'>
        {sortedCategroyKeys.map((feature: string) => (
          <div key={feature}>
            <Button variant='outline' size='sm' className='text-xs'>
              {t(`categoryName.${feature}`)}
            </Button>
          </div>
        ))}
      </div>

      {/* 最流行的产品列表，数据来源 Supabase */}
      <div className='flex flex-col gap-6'>
        {Object.keys(sortedGroupedDataFromSupabase).map((categoryName) => (
          <div key={categoryName}>
            <h2 className='mb-3 bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-2xl font-bold text-transparent md:text-3xl'>
              {t(`categoryName.${categoryName}`)}
            </h2>
            <WebNavCardList key={categoryName} dataList={sortedGroupedDataFromSupabase[categoryName]} />
          </div>
        ))}
      </div>

      {/* 更多标签 */}
      <Link
        href='/explore'
        className='mx-auto my-8 flex w-fit items-center justify-center gap-5 rounded-[9px] border p-[10px] text-sm leading-4 hover:opacity-70'
      >
        {t('exploreMore')}
        <CircleChevronRight className='mt-[0.5] h-[20px] w-[20px]' />
      </Link>

      <ScrollToTop />
    </section>
  );
}
