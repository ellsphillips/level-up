interface Article {
	date: string;
	id: number;
	title: string;
	description: string;
	tags: string[];
}

interface Tag {
    name: string;
    count: number;
}
