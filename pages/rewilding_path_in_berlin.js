import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import RewildingBerlinRegistFormSG from "@/components/RewildingBerlinRegistFormSG";

// const inter = Inter({ subsets: ["latin"] });

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TreePlanting() {
  const [agreed, setAgreed] = useState(false);
  return (
    <>
      <Head>
        <title>Cultivating Your Rewilding Path Workshop | Trees for Hope</title>
        <meta name="We offer the processes, skills, tools and means needed to initiate the ecological recovery and personal, social transformations. " content="Trees for Hope Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        {/* Header */}
        <Header />
        <main className="isolate">
          <div className="relative isolate -z-10">
            <svg className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
            </svg>
            <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath: "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
                }}
              />
            </div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-3xl px-6 mt-32 sm:mt-40 lg:px-8">
                <figure className="mt-10 mb-6 flex justify-center">
                  <img className="rounded-xl bg-gray-50 object-cover" src="/rewilding_path_in_berlin/keyvisual_01.jpg" alt="Alchemising our Soil, Soul, Society" />
                  {/* <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                  <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
                  Faucibus commodo massa rhoncus, volutpat.
                </figcaption> */}
                </figure>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-relaxed">
                  Cultivating Your Rewilding Path Workshop
                  <br />
                  20, 21, 22th September ​Berlin
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">This workshop is for those who wish to start and deepen their journey in the field of ecological restoration, earth healing, or rewilding. ​Now in the era of climate disruption, many of us are seeking to change our relationship with nature and to contribute to its recovery.</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">We encourage you to bring your concerns, questions, passions, visions, dreams, actions. We will be weaving a field of connections between the participants, allowing ourselves to deepen in our rewilding journeys.</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">We expect this workshop will spark a new fire in your life. The fire of your rewilding journey could be tended by your commitment to the next steps on the path. You may be met by a landscape, a place that you recognise as kin. A rewilding journey is about having a deepening relationship with a place that you know as home.</p>
                <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Price and Payment</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">We offer three tiers of price and payment</p>
                <ul>
                  <li>【Basic】for those with minimum income : €70</li>
                  <li>【Full】for those who can pay the ticket : €170</li>
                  <li>【Giving】for those who would like to support our Rewilding Projects : €270</li>
                </ul>
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                  <figure className="mt-10 mb-16">
                    <Image loader={imageLoader} src="public/rewilding_path_in_berlin/main_img_01.png" className="rounded-xl bg-gray-50" alt="Hives Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={768} height={1024} />
                  </figure>
                </div>
              </div>
              <RewildingBerlinRegistFormSG />
            </div>
          </div>
        </main>{" "}
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
