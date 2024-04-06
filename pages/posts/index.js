import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { getAllPostsForHome } from "@/lib/api";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import PostTitle from "@/components/post-title";

export default function PostList({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Container>
          <Head>
            <title>Blog Articles | Trees for Hope</title>
            <meta name="We offer the processes, skills, tools and means needed to initiate the ecological recovery and personal, social transformations. " content="Trees for Hope Website" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <div className="bg-white py-24 sm:py-32">{morePosts.length > 0 && <MoreStories posts={morePosts} />}</div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
    revalidate: 30,
    notFound: !allPosts
  };
}
