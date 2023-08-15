import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import { CMS_NAME } from "../lib/constants";
import Timeline from "@/components/Timeline";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import LogoCloud from "@/components/LogoCloud";
import Team from "@/components/Team";

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Top Page | Trees for Hope</title>
          <meta name="description" content="Trees for Hope Website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-white">
          <Header />
          {/* {heroPost && <HeroPost title={heroPost.title} coverImage={heroPost.coverImage} date={heroPost.date} author={heroPost.author} slug={heroPost.slug} excerpt={heroPost.excerpt} />} */}
          <main className="isolate">
            {/* Hero section */}
            <Hero />
            {/* Timeline section */}
            <Timeline />
            {/* Content section */}
            <Mission />
            {/* Image section */}
            <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="" className="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
            </div>
            {/* Vision section */}
            <Vision />
            {/* Logo cloud */}
            <LogoCloud />
            {/* Team section */}
            <Team />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </main>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts }
  };
}
