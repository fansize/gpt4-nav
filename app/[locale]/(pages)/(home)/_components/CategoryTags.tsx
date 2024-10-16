import { Button } from '@/components/ui/button';

interface CategoryTagsProps {
    categories: string[];
    t: (key: string) => string;
}

export default function CategoryTags({ categories, t }: CategoryTagsProps) {
    return (
        <div className='md:justify-left my-8 flex flex-wrap gap-4'>
            {categories.map((category: string) => (
                <div key={category}>
                    <a href={`#${category}`}>
                        <Button variant='outline' size='sm' className='text-xs'>
                            {t(`categoryName.${category}`)}
                        </Button>
                    </a>
                </div>
            ))}
        </div>
    );
}
