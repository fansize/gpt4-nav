import { WebNavigationListRow } from '@/lib/data';

import ProductCard from './WebNavCard';

export default function CardsGallery({ dataList }: { dataList: WebNavigationListRow[] }) {
  return (
    <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-4'>
      {dataList.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}
