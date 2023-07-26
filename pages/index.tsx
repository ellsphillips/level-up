import Layout from "@/layouts/App";
import Link from "next/link";

const IndexPage = () => (
  <Layout title="LEVEL-UP! - Home">
    <h1 className="font-black">LEVEL-UP!</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export default IndexPage;
