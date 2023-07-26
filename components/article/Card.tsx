import { Article } from "@/types/article";

export default function Article(data: Article) {
  return (
    <article>
      <span className="font-lg text-level-up-grey-35">{data.date}</span>
      <div className="my-2 space-y-1">
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <div className="flex">
          {data.tags.map((tag) => (
            <span className="mr-3 text-sm text-orange-400 uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-level-up-grey-55">{data.description}</p>
    </article>
  );
}
