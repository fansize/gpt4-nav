import { createClient } from '@/db/supabase/client';
import { AIProduct, GroupedAIProducts } from './schema';

// 字符串常量对象
const STRINGS = {
    TABLE_NAME: 'allProducts',
    UNKNOWN_CATEGORY: 'unknown',
    ERROR_FETCH: '获取AI产品数据时发生错误',
    ERROR_PROCESS: '处理AI产品数据时发生错误',
};

// 统一的错误处理函数
const handleError = (error: unknown, message: string) => {
    console.error(`${message}:`, error);
    throw new Error(message);
};

// 获取AI产品并按类别分组
export async function getAIProducts(): Promise<GroupedAIProducts> {
    try {
        // 创建Supabase客户端实例
        const supabase = createClient();

        // 从'allProducts'表中查询数据
        const { data: aiProducts, error } = await supabase
            .from(STRINGS.TABLE_NAME)
            .select('id, name, title, thumbnailUrl, url, content, starRating, categoryName')
            .order('starRating', { ascending: false });

        if (error) throw error;
        if (!aiProducts) return {};

        // 将查询结果转换为按类别分组的对象
        const groupedData: GroupedAIProducts = aiProducts.reduce((acc: GroupedAIProducts, row) => {
            try {
                // 使用categoryName作为分组键，如果为空则使用'unknown'
                const category = row.categoryName || STRINGS.UNKNOWN_CATEGORY;

                // 如果该类别还没有数组，则初始化一个
                if (!acc[category]) {
                    acc[category] = [];
                }

                // 创建一个符合AIProduct接口的对象
                const product: AIProduct = {
                    ...row,
                    imageUrl: '',
                    collectionTime: '',
                    detail: '',
                    tagName: '',
                    websiteData: '',
                };

                // 将产品添加到对应类别的数组中
                acc[category].push(product);
            } catch (error) {
                console.error(STRINGS.ERROR_PROCESS, error);
            }
            return acc;
        }, {});

        // 返回按类别分组的AI产品数据
        return groupedData;
    } catch (error) {
        return handleError(error, STRINGS.ERROR_FETCH);
    }
}
