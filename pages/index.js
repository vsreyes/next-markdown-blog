import Head from 'next/head';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <h2>Hello</h2>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: 'The Posts',
    },
  };
}
