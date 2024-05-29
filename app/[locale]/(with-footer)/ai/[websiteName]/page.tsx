import { Metadata } from 'next';
import { getNavDetailFromSupabase, getWebNavigationDetail } from '@/network/webNavigation';
import { CircleArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { toast } from 'sonner';

import { Separator } from '@/components/ui/separator';
import BaseImage from '@/components/image/BaseImage';
import MarkdownProse from '@/components/MarkdownProse';

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

  // if (res.code !== 200) {
  //   toast.message(res.msg);
  // }

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
    <div className='w-full'>
      <div className='flex flex-col px-6 py-5 lg:h-[323px] lg:flex-row lg:justify-between lg:px-0 lg:py-10'>
        <div className='flex flex-col items-center lg:items-start'>
          <div className='space-y-1 text-balance lg:space-y-3'>
            <h1 className='text-2xl lg:text-5xl'>{data.title}</h1>
            <h2 className='text-xs lg:text-sm'>{data.content}</h2>
          </div>
          <a
            href={data.url}
            target='_blank'
            rel='noreferrer'
            className='flex-center mt-5 min-h-5 w-full gap-1 rounded-[8px] bg-default-bg p-[10px] text-sm capitalize text-black hover:opacity-80 lg:mt-auto lg:w-[288px]'
          >
            {t('visitWebsite')} <CircleArrowRight className='size-[14px]' />
          </a>
        </div>
        <a
          href={data.url}
          target='_blank'
          rel='noreferrer'
          className='flex-center group relative h-[171px] w-full flex-shrink-0 lg:h-[234px] lg:w-[466px]'
        >
          <BaseImage
            title={data.title}
            alt={data.title}
            width={2422}
            height={1562}
            // fill
            src={data.thumbnailUrl || `https://img.gpt4oo.com/Chatbox%2F${data.name}.jpeg`}
            className='absolute mt-3 aspect-[2422/1562] w-full rounded-[16px] border border-[#424242] bg-[#424242] bg-cover lg:mt-0'
          />
          <div className='absolute inset-0 z-10 hidden items-center justify-center gap-1 rounded-[16px] bg-black bg-opacity-50 text-2xl text-white transition-all duration-200 group-hover:flex'>
            {t('visitWebsite')} <CircleArrowRight className='size-5' />
          </div>
        </a>
      </div>
      <Separator />
      <div className='mb-5 px-3 lg:px-0'>
        <h2 className='my-5 text-3xl font-semibold lg:my-10'>{t('introduction')}</h2>
        <MarkdownProse markdown={data?.detail || ''} />
      </div>
    </div>
  );
}
