import { GetStaticPaths, GetStaticProps } from "next";

import ListDetail from "@/components/article/Details";
import { articleData } from "@/data/articles";
import Layout from "@/layouts/App";
import { Article } from "@/types/article";

type Props = {
  item?: Article;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="LEVEL-UP! - Error">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.title : "Article Detail"
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articleData.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = articleData.find((data) => data.id === Number(id));
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
