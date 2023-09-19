import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import { CMS_NAME } from "../lib/constants";
import Timeline from "@/components/Timeline";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import LogoCloud from "@/components/LogoCloud";
import Team from "@/components/Team";

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Top Page | Trees for Hope</title>
          <meta name="We offer the processes, skills, tools and means needed to initiate the ecological recovery and personal, social transformations. " content="Trees for Hope Website" />
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
            {/* Vision section */}
            <Vision />
            {/* Image section */}
            <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
              <Image loader={imageLoader} src="top/top_vision_05.jpg" alt="" className="w-full object-cover xl:rounded-3xl" width={1200} height={900} priority={true} />
            </div>
            {/* Mission section */}
            <Mission />
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
    props: { preview, allPosts },
    revalidate: 30,
    notFound: !allPosts
  };
}
