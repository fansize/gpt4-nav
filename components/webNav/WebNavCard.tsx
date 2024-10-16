import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';
import { WebNavigationListRow } from '@/lib/data';
import BaseImage from '../image/BaseImage';

export default function ProductCard({ name, thumbnailUrl, title, url, content }: WebNavigationListRow) {
  return (
    <div className='flex flex-col gap-3 rounded-lg border p-3 lg:p-4 hover:shadow-md'>
      <Link href={`/ai/${name}`} title={title}>
        <BaseImage
          width={2422}
          height={1562}
          src={thumbnailUrl || `https://img.gpt4oo.com/Chatbox%2F${name}.jpeg`}
          alt={title}
          title={title}
          className='aspect-[2422/1562] rounded-lg hover:opacity-80'
        />
      </Link>
      <div className='flex items-center justify-between'>
        <Link href={url} title={title} target='_blank' rel='noreferrer' className='hover:opacity-70'>
          <h3 className='line-clamp-1 flex-1 text-sm font-bold lg:text-base'>{title}</h3>
        </Link>
        <Link href={url} title={title} target='_blank' rel='noreferrer' className='hover:opacity-70'>
          <SquareArrowOutUpRight className='size-4' />
          <span className='sr-only'>{title}</span>
        </Link>
      </div>
      <p className='line-clamp-3 text-xs text-slate-800 lg:text-sm'>{content}</p>
    </div>
  );
}
