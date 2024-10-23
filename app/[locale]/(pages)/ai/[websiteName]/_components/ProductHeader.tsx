import { CircleArrowRight } from 'lucide-react';

interface ProductHeaderProps {
    title: string;
    content: string;
    url: string;
    visitWebsiteText: string;
}

export default function ProductHeader({ title, content, url, visitWebsiteText }: ProductHeaderProps) {
    return (
        <div className='flex flex-col items-center lg:items-start'>
            <div className='space-y-1 text-balance lg:space-y-3'>
                <h1 className='text-2xl lg:text-5xl'>{title}</h1>
                <h2 className='text-xs lg:text-sm'>{content}</h2>
            </div>
            <a
                href={url}
                target='_blank'
                rel='noreferrer'
                className='flex-center mt-5 min-h-5 w-full gap-1 rounded-[8px] bg-default-bg p-[10px] text-sm capitalize text-black hover:opacity-80 lg:mt-auto lg:w-[288px]'
            >
                {visitWebsiteText} <CircleArrowRight className='size-[14px]' />
            </a>
        </div>
    );
}
