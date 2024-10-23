import { Metadata } from 'next';
import { getNavDetailFromSupabase } from '@/network/webNavigation';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';
import ProductHeader from './_components/ProductHeader';
import ProductImage from './_components/ProductImage';
import ProductIntroduction from './_components/ProductIntroduction';

const STRINGS = {
  VISIT_WEBSITE: 'visitWebsite',
  INTRODUCTION: 'introduction',
};

export async function generateMetadata({
  params: { locale, websiteName },
}: {
  params: { locale: string; websiteName: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.ai',
  });
  const res = await getNavDetailFromSupabase(websiteName);

  if (!res.data) {
    return {
      title: '',
      description: '',
    };
  }

  return {
    title: `${res.data.title} | ${t('titleSubfix')}`,
    description: res.data.content,
    keywords: `${res.data.title}`,
    alternates: {
      canonical: './',
    },
  };
}

export default async function Page({ params: { websiteName } }: { params: { websiteName: string } }) {
  const t = await getTranslations('Startup.detail');
  const res = await getNavDetailFromSupabase(websiteName);
  const { data } = res;

  if (!data) return null;

  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='py-8 lg:py-16'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-12'>
          <ProductHeader
            title={data.title}
            content={data.content}
            url={data.url}
            visitWebsiteText={t(STRINGS.VISIT_WEBSITE)}
          />
          <ProductImage
            title={data.title}
            url={data.url}
            thumbnailUrl={data.thumbnailUrl || `https://img.gpt4oo.com/Chatbox%2F${data.name}.jpeg`}
            visitWebsiteText={t(STRINGS.VISIT_WEBSITE)}
          />
        </div>
      </div>
      <Separator className='my-8' />
      <ProductIntroduction
        title={t(STRINGS.INTRODUCTION)}
        detail={data?.detail || ''}
      />
    </div>
  );
}
