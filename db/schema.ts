export interface AIProduct {
    id: string;
    name: string;
    title: string;
    thumbnailUrl: string;
    url: string;
    content: string;
    starRating: number;
    categoryName: string;
    imageUrl: string;
    collectionTime: string;
    detail: string;
    tagName: string;
    websiteData: string;
}

export interface GroupedAIProducts {
    [key: string]: AIProduct[];
}

