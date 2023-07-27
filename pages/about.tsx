import Layout from "@/layouts/App";
import Link from "next/link";

const AboutPage = () => (
  <Layout title="LEVEL-UP! - About">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export default AboutPage;
