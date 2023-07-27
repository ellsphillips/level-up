<<<<<<< HEAD
import Hero from "@/components/Hero";
import Layout from "@/layouts/App";

const IndexPage = () => (
  <Layout title="LEVEL-UP! - Home">
    <Hero />
  </Layout>
);

export default IndexPage;
=======
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
>>>>>>> 09feaf9fa7a2d26a60b082e43e7e9bbddd922b1d
