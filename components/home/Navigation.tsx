'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';

import BaseImage from '../image/BaseImage';
import LocaleSwitcher from '../LocaleSwitcher';
import { buttonVariants } from '../ui/button';
import MenuBtn from './MenuBtn';
import NavigationDrawer from './NavigationDrawer';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const NavLinks = NAV_LINKS.map((item) => ({
    ...item,
    label: t(`${item.code}`),
  }));

  return (
    <>
      <header className='sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700 dark:bg-background'>
        <NavigationMenu className='mx-auto flex max-w-pc flex-1 items-center'>
          <NavigationMenuList className='container flex h-14 w-screen justify-between px-4 '>
            <NavigationMenuItem className='flex font-bold'>
              <Link className='flex flex-row items-center gap-4 hover:opacity-80' href='/' title={t('title')}>
                <BaseImage
                  src='/images/gpt4oo.svg'
                  alt={t('title')}
                  title={t('title')}
                  width={64}
                  height={64}
                  className='size-[38px] lg:size-10'
                />
                <p className='text-lg font-bold hover:opacity-80'>GPT4oo</p>
              </Link>
            </NavigationMenuItem>

            {/* pc */}
            <nav className='hidden gap-2 md:flex'>
              {NavLinks.map((item) => (
                <a
                  rel='noreferrer noopener'
                  href={item.href}
                  key={item.label}
                  className={`text-[17px] ${buttonVariants({
                    variant: 'ghost',
                  })}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className='flex items-center gap-x-3'>
              <LocaleSwitcher />
            </div>

            {/* mobile */}
            <div className='mx-3 flex items-center gap-x-4 lg:hidden'>
              <MenuBtn open={open} onClick={() => setOpen(!open)} />
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <NavigationDrawer open={open} setOpen={setOpen} />
    </>
  );
}
