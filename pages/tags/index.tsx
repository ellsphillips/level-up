import Layout from "@/layouts/App";
import { Tag } from "@/types/article";
import Link from "next/link";

import { getTagData } from "./load";

export default function Tags() {
  const tags: Tag[] = getTagData();

  return (
    <Layout title="LEVEL-UP! - Tags">
      <div className="flex w-3/5 m-auto space-x-8 divide-x-2">
        <h1 className="text-6xl font-bold">Tags</h1>
        <div className="flex flex-wrap max-w-lg pl-8 leading-10">
          {tags.map((tag) => (
            <span className="block uppercase font-lg">
              <Link
                href="/tags/[id]"
                as={`/tags/${tag.name}`}
                className="pr-2 text-level-up-orange"
              >
                {tag.name}
              </Link>
              <span className="pr-6 text-level-up-grey-35">({tag.count})</span>
            </span>
          ))}
        </div>
      </div>
    </Layout>
  );
}
