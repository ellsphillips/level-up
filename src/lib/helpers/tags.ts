import ARTICLE_DATA from "$src/data/articles.json";

export function getUniqueTags(): string[] {
    return [
        ...new Set(ARTICLE_DATA.map(item => item.tags).flat())
    ];
}

export function getTagData(): Tag[] {
    type TagCounts = Record<string, number>;

    const tags = ARTICLE_DATA.map(item => item.tags).flat();

    const tagCount: TagCounts = tags.reduce((acc: TagCounts, name: string) => {
        acc[name] = (acc[name] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(tagCount).map(([name, count]) => ({ name, count }));
}
