import BaseImage from '@/components/image/BaseImage';
import { CircleArrowRight } from 'lucide-react';

interface ProductImageProps {
    title: string;
    url: string;
    thumbnailUrl: string;
    visitWebsiteText: string;
}

export default function ProductImage({ title, url, thumbnailUrl, visitWebsiteText }: ProductImageProps) {
    return (
        <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className='flex-center group relative h-[171px] w-full flex-shrink-0 lg:h-[234px] lg:w-[466px]'
        >
            <BaseImage
                title={title}
                alt={title}
                width={2422}
                height={1562}
                src={thumbnailUrl}
                className='absolute mt-3 aspect-[2422/1562] w-full rounded-[16px] border border-[#424242] bg-[#424242] bg-cover lg:mt-0'
            />
            <div className='absolute inset-0 z-10 hidden items-center justify-center gap-1 rounded-[16px] bg-black bg-opacity-50 text-2xl text-white transition-all duration-200 group-hover:flex'>
                {visitWebsiteText} <CircleArrowRight className='size-5' />
            </div>
        </a>
    );
}
