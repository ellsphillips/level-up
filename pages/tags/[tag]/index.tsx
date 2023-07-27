import { Tag } from "@/types/article";
import { getUniqueTags } from "../load";

export default function TagPage() {
  const tags = getUniqueTags();
  const tag: Tag = {
    name: "tag",
    count: 4,
  };

  return (
    // <div className="divide-y-2 divide-level-up-grey-75">
    //   <h1 className="pb-8 text-6xl font-bold">#{tag}</h1>

    //   <div>
    //     {tags.includes(tag.name) ? (
    //       <p className="py-4 text-xl">No tags found that match "{tag}".</p>
    //     ) : (
    //       articleData.map(
    //         (article) =>
    //           article.tags.includes(tag.name) && (
    //             <div className="py-4">
    //               <Article {...article} />
    //             </div>
    //           )
    //       )
    //     )}
    //   </div>
    // </div>
    <p>tags</p>
  );
}
