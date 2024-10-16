import { AIProduct } from '@/db/schema';
import CardsGallery from '@/components/webNav/WebNavCardList';

interface ProductSectionProps {
    categoryName: string;
    products: AIProduct[];
    t: (key: string) => string;
}

export default function ProductSection({ categoryName, products, t }: ProductSectionProps) {
    return (
        <div>
            <div id={categoryName} className='invisible relative' style={{ top: '-3.5rem' }} />
            <h2
                className='mb-3 bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-lg font-bold text-transparent'
            >
                {t(`categoryName.${categoryName}`)}
            </h2>
            <CardsGallery dataList={products} />
        </div>
    );
}
