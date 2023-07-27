import { articleData } from "@/data/articles";
import { Article, Tag } from "@/types/article";

export function getUniqueTags(): string[] {
  return [...new Set(articleData.map((item: Article) => item.tags).flat())];
}

export function getTagData(): Tag[] {
  type TagCounts = Record<string, number>;

  const tags = articleData.map((item: { tags: any }) => item.tags).flat();

  const tagCount: TagCounts = tags.reduce((acc: TagCounts, name: string) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(tagCount).map(([name, count]) => ({ name, count }));
}
