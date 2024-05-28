import { HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CONTACT_US_EMAIL } from '@/lib/env';

function InfoLink({
  href,
  title,
  target,
  type,
}: {
  href: string;
  title: string;
  target?: HTMLAttributeAnchorTarget;
  type?: string;
}) {
  return (
    <Link href={href} title={title} className='opacity-60 hover:opacity-100' target={target} type={type}>
      {title}
    </Link>
  );
}

export default function Footer() {
  const t = useTranslations('Footer');

  const SupportLinks = [
    {
      title: t('GPT4oo'),
      href: 'https://gpt4oo.com',
    },
  ];

  const INFO_LIST = [
    {
      title: t('privacy'),
      href: '/privacy-policy',
    },
    {
      title: t('termsConditions'),
      href: '/terms-of-service',
    },
  ];

  return (
    <footer id='footer'>
      <hr className='mx-auto w-11/12' />

      <section className='container grid grid-cols-2 gap-x-12 gap-y-8 py-20 md:grid-cols-3'>
        <div className='col-span-full xl:col-span-2'>
          <a rel='noreferrer noopener' href='/' className='flex text-xl font-bold'>
            {t('title')}
          </a>
        </div>

        <div className='mt-5 flex flex-col items-center gap-y-5 lg:mt-0 lg:flex-row lg:items-stretch lg:gap-x-10'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-bold'>{t('support')}</h3>
            {SupportLinks.map((item) => (
              <a
                href={item.href}
                key={item.href}
                target='_blank'
                rel='noreferrer'
                className='opacity-60 hover:opacity-100'
                title={item.title}
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-bold'>{t('contactUs')}</h3>
            {INFO_LIST.map((item) => (
              <InfoLink key={item.href} href={item.href} title={item.title} />
            ))}
            <a
              href={`mailto:${CONTACT_US_EMAIL}`}
              className='opacity-60 hover:opacity-100'
              title={t('contactUs')}
              type='email'
            >
              {t('contactUs')}
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
