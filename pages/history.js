import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import Header from "@/components/header";
import Footer from "@/components/footer";

// const inter = Inter({ subsets: ["latin"] });

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const timeline = [
  {
    name: "online event to raise funds and awareness about Trees for Hope.",
    description: "November 2022, online event to raise funds and awareness about Trees for Hope.",
    date: "November 2022",
    dateTime: "2022-11"
  },
  {
    name: "beginning investigation on rewilding the Atlantic Rainforest in the West Coast of Scotland",
    description: "May 2021, beginning investigation on rewilding the Atlantic Rainforest in the West Coast of Scotland and seeking out connective relations, in terms of training and education with people from the Fertile Crescent",
    date: "May 2021",
    dateTime: "2021-05"
  },
  {
    name: "Soil, Soul, Social Alchemy workshops held online",
    description: "2020 - 2021 Soil, Soul, Social Alchemy workshops were held online",
    date: "2020-2021",
    dateTime: "2020-2021"
  },
  {
    name: "Soil Alchemy Workshops taught in Central Iran",
    description: "November 2019 Soil Alchemy Workshops were taught in Central Iran",
    date: "November 2019",
    dateTime: "2019-11"
  },
  {
    name: "Ecovillage Design Education was taught in Auroville",
    description: "March 2019 one month long course, Ecovillage Design Education was taught in Auroville, Tamil Nadu, India.",
    date: "March 2019",
    dateTime: "2019-03"
  },
  {
    name: "the first Ecovillage Design Education course in Iran",
    description: "November 2017 we taught the first Ecovillage Design Education course in Iran",
    date: "November 2017",
    dateTime: "2017-11"
  },
  {
    name: "Online Earth Healing Webinars",
    description: "September and October 2016 we held a series of online Earth Healing Webinars to connect with various active environmentally concerned people and organisations in the Fertile Crescent and Europe.",
    date: "October 2016",
    dateTime: "2016-10"
  },
  {
    name: "Trees for Hope is registered as a Scottish Charity",
    description: "September 2016 Trees for Hope is registered as a Scottish Charity, our legal body is created",
    date: "September 2016",
    dateTime: "2016-09"
  },
  {
    name: "investigative journey to Iran",
    description: "investigative journey to Iran, Pupak and Alan Watson Featherstone to seek out allies in the field of earth restoration.  Made numerous connections with environmentally concerned entities",
    date: "April 2005",
    dateTime: "2005-04"
  }
];

export default function Message() {
  return (
    <>
      <Head>
        <title>History Page | Trees for Hope</title>
        <meta name="We offer the processes, skills, tools and means needed to initiate the ecological recovery and personal, social transformations. " content="Trees for Hope Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        {/* Header */}
        <Header />

        <main className="isolate">
          {/* Hero section */}
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
          </div>
          {/* Vision section */}
          <div className="mt-32 mb-32 overflow-hidden sm:mt-40">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our History</h1>
                  {/* <p className="mt-6 text-lg leading-8 text-gray-600">The Wider Fertile Crescent area is restored to full ecological health with all the native constituent species and people living in harmony and balance with the land. We envision a transformation from barren, brown landscapes to lush green ecosystems with rich fertile soil and abundant water.</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">Based on a deep personal connection with and care for the land and formed by mastery of arts and crafts, bioregional networks of ecovillages and communities are self sufficient with regenerative agriculture, sustainable energy, transport, and circular economies. </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">We collaborate with the larger planetary networks of organisations and civil societies while soulful medicine, education, and culture feeds various needs within the network. </p> */}
                </div>
                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                  <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                    <Image loader={imageLoader} className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" src="/history/history_06.jpg" alt="Trees for Hope History Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={592} height={422} />
                  </div>
                  <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                      <Image loader={imageLoader} className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" src="/history/history_07.jpg" alt="Trees for Hope History Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={384} height={422} priority={true} />
                    </div>
                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                      <Image loader={imageLoader} className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" src="/history/history_03.jpg" alt="Trees for Hope History Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={592} height={422} priority={true} />
                    </div>
                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                      <Image loader={imageLoader} className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" src="/history/history_08.jpg" alt="Trees for Hope History Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={384} height={288} priority={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Timeline section */}
          <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {timeline.map(item => (
                <div key={item.name}>
                  <time dateTime={item.dateTime} className="flex items-center text-sm font-semibold leading-6 text-indigo-600">
                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                      <circle cx={2} cy={2} r={2} fill="currentColor" />
                    </svg>
                    {item.date}
                    <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true" />
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                  <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-80px mt-20 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <Image loader={imageLoader} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/tree_planting/tree_planting_01.jpg" alt="Trees for Hope History Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} priority={true} />

                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Image loader={imageLoader} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/history/history_11.jpg" alt="Trees for Hope History Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} priority={true} />

                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image loader={imageLoader} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/history/history_01.jpg" alt="Trees for Hope History Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} priority={true} />

                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <Image loader={imageLoader} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/history/history_12.jpg" alt="Trees for Hope History Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} priority={true} />

                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image loader={imageLoader} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="/history/history_09.jpg" alt="Trees for Hope History Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} priority={true} />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8 mt-32">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img src="/history/history_11.jpg" alt="" className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img src="/history/history_01.jpg" alt="" className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img src="/history/history_12.jpg" alt="" className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
              </div>
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8 mt-16">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img src="/history/history_09.jpg" alt="" className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img src="/history/history_14.jpg" alt="" className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img src="/history/history_15.jpg" alt="" className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
              </div>
            </div>
          </div> */}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
