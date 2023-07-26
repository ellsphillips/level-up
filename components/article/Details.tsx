import { Article } from "@/types/article";

type Props = {
  item: Article;
};

const ListDetail = ({ item: article }: Props) => (
  <div>
    <h1 className="text-3xl font-bold">{article.title}</h1>
    <p className="font-mono text-gray-400">ID: {article.id}</p>
  </div>
);

export default ListDetail;
