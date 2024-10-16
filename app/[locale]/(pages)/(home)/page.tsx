import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getWebNavigationList } from '@/network/webNavigation';
import { CircleChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import CategoryTags from '@/app/[locale]/(pages)/(home)/_components/CategoryTags';
import ProductSection from '@/app/[locale]/(pages)/(home)/_components/ProductSection';

import { getAIProducts } from '@/db/fetch-data';

// 动态导入 ScrollToTop 组件，禁用服务器端渲染
const ScrollToTop = dynamic(() => import('@/components/page/ScrollToTop'), { ssr: false });

// 生成页面元数据的异步函数
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  // 获取特定命名空间的翻译函数
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.home',
  });

  // 返回页面元数据
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

// 主页组件
export default async function Page() {
  // 获取 'Home' 命名空间的翻译函数
  const t = await getTranslations('Home');

  // 从 Supabase 获取分组的 AI 产品数据
  const groupedDataFromSupabase = await getAIProducts();

  // 对类别键(网站分类)进行排序
  const sortedCategroyKeys = Object.keys(groupedDataFromSupabase).sort();

  return (
    <section id='products gallery' className='container py-10'>
      {/* 页面标题和副标题 */}
      <div className='flex flex-col items-start justify-start gap-4'>
        <h1 className='text-3xl font-bold md:text-4xl '>{t('title')}</h1>
        <h2 className='text-lg text-muted-foreground md:w-3/4'>{t('subTitle')}</h2>
      </div>

      {/* 类别标签组件 */}
      <CategoryTags categories={sortedCategroyKeys} t={t} />

      {/* 产品部分 */}
      <div className='flex flex-col gap-10'>
        {sortedCategroyKeys.map((categoryName) => (
          <ProductSection
            key={categoryName}
            categoryName={categoryName}
            products={groupedDataFromSupabase[categoryName]}
            t={t}
          />
        ))}
      </div>

      {/* "探索更多"链接 */}
      <Link
        href='/explore'
        className='mx-auto my-8 flex w-fit items-center justify-center gap-5 rounded-[9px] border p-[10px] text-sm leading-4 hover:opacity-70'
      >
        {t('exploreMore')}
        <CircleChevronRight className='mt-[0.5] h-[20px] w-[20px]' />
      </Link>

      {/* 滚动到顶部组件 */}
      <ScrollToTop />
    </section>
  );
}
