import { getTranslations } from 'next-intl/server';
import { getAIProductsByCategory } from '@/db/fetch-data';
import CardsGallery from '@/components/webNav/WebNavCardList';
import { notFound } from 'next/navigation';

interface Params {
    slug: string;
}

export async function generateMetadata({
    params: { slug },
}: {
    params: Params;
}) {
    const t = await getTranslations('Metadata');
    return {
        title: t('categoryTitle', { category: slug }),
        description: t('categoryDescription', { category: slug }),
    };
}

const CategoryPage = async ({ params: { slug } }: { params: Params }) => {
    const t = await getTranslations('Category');
    const products = await getAIProductsByCategory(slug);

    if (!products || products.length === 0) {
        notFound();
    }

    return (
        <div className="container mx-auto px-5 mb-10">
            <h1 className="text-3xl font-bold mb-6">{t('title', { category: slug })}</h1>
            <CardsGallery dataList={products} />
        </div>
    );
};

export default CategoryPage;
