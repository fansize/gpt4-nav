import MarkdownProse from '@/components/MarkdownProse';

interface ProductIntroductionProps {
    title: string;
    detail: string;
}

export default function ProductIntroduction({ title, detail }: ProductIntroductionProps) {
    return (
        <div className='py-8'>
            <h2 className='text-3xl font-bold mb-6'>{title}</h2>
            <div className='prose prose-lg max-w-none'>
                <MarkdownProse markdown={detail} />
            </div>
        </div>
    );
}