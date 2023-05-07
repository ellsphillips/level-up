import ARTICLE_DATA from '$src/data/articles.json';
	

export function load(): { articles: Article[] } {
	return {
		articles: ARTICLE_DATA
	};
}