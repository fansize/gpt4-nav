import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { STARTUP_LIST } from '@/lib/constants';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import PriceItem from './PriceItem';
import TagItem from './TagItem';

export default function DesktopTable() {
  const t = useTranslations('Startup.table');

  return (
    <div className='mb-10 hidden w-full lg:block'>
      <Table className=''>
        <TableHeader>
          <TableRow className='tr-rounded h-16 rounded-[4px] hover:bg-slate-200'>
            <TableHead className='w-[100px] text-xl font-bold'>{t('da')}</TableHead>
            <TableHead className='w-[200px] text-xl font-bold'>{t('website')}</TableHead>
            <TableHead className='w-[100px] text-xl font-bold'>{t('tags')}</TableHead>
            <TableHead className='w-[200px] text-xl font-bold'>{t('price')}</TableHead>
            <TableHead className='w-16 text-xl font-bold'>{t('submission')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='space-y-2'>
          {STARTUP_LIST.map((item) => (
            <TableRow key={item.DA} className=''>
              <TableCell className='text-sm'>{item.DA}</TableCell>
              <TableCell className='text-[18px]'>{item.Website}</TableCell>
              <TableCell className='flex gap-1'>
                {item.Tag ? item.Tag.split(',').map((tag) => <TagItem key={tag} title={tag} />) : null}
              </TableCell>
              <TableCell>
                <PriceItem title={item.Price} isFree={item.Price.toLowerCase() === 'free'} />
              </TableCell>
              <TableCell>
                <Link href={item.URL} target='_blank' rel='noreferrer'>
                  <SquareArrowOutUpRight className='' />
                  <span className='sr-only'>{item.Website}</span>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
