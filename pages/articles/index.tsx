import { GetStaticProps } from "next";

import { articleData } from "@/data/articles";
import Layout from "@/layouts/App";
import { Article } from "@/types/article";
import Link from "next/link";

type Props = {
  items: Article[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="LEVEL-UP! - Articles">
    <h1>Articles</h1>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link href="/articles/[id]" as={`/articles/${item.id}`}>
            {item.id}:{item.name}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Article[] = articleData;
  return { props: { items } };
};

export default WithStaticProps;
