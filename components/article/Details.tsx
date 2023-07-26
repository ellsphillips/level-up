import { Article } from "@/types/article";

type ListDetailProps = {
  item: Article;
};

const ListDetail = ({ item: article }: ListDetailProps) => (
  <div>
    <h1 className="text-3xl font-bold">{article.name}</h1>
    <p className="font-mono text-gray-400">ID: {article.id}</p>
  </div>
);

export default ListDetail;
