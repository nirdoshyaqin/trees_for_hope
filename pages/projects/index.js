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

export default function Project() {
  return (
    <>
      <Head>
        <title>Project Page | Trees for Hope</title>
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
              <div className="mx-auto max-w-7xl px-6 pb-32 mt-32 sm:mt-40 lg:px-8">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="prose w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Projects</h1>
                    <h2>Reviving the Atlantic Rainforest in the West Cost of Scotland</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">This project is about practical rewilding of the west coast of Scotland. This area was home to the Atlantic Rainforest. Tragically, like the rest of the forests in Scotland, only about 1% of the rainforests remain.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Our purpose is to integrate training and education for rewilding in our programmes. We welcome participants from the Fertile Crescent to join this programme, so that by engaging in practical work and education programme, they will become equipped with the right tools to initiate and carry out rewilding projects in the Fertile Crescent.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">We will be collaborating with the local communities in the West Coast to rewild with them. This is an essential element of any rewilding project. By engaging in rewilding the Atlantic Rainforest in the West Coast of Scotland with participants from the Fertile Crescent, we will be creating a resonance for rewilding projects in the Fertile Crescent.</p>
                    <h2>Ecovillage Living & Learning Experience</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">A three-week-long program in an ecovillage to experience living and learning and germinating your rewilding project. An opportunity to renew, release, and connect with a supporting network of people to grow. Once your rewilding project is hatched, and you have started the process in your community, you can apply to join our rewilding network.</p>
                    {/* <p className="mt-6 text-lg leading-8 text-gray-600">Our next ELLE program will be held in November 2023</p> */}
                    <h2>Network Meetings, or pow-wows</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      A quarterly online meeting for the communities in the Fertile Crescent to exchange experiences and to learn from each other. <br></br>A self-organised style of gathering.
                    </p>
                  </div>
                  <div className="mt-24 flex justify-end gap-8 sm:justify-start sm:pl-20 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <Image loader={imageLoader} className="rounded-xl bg-gray-50 object-cover" src="projects/projects_10.jpg" alt="Trees for Hope Projects Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} />

                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <Image loader={imageLoader} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="projects/projects_11.jpg" alt="Trees for Hope Projects Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} />

                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image loader={imageLoader} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="projects/projects_13.jpg" alt="Trees for Hope Projects Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <Image loader={imageLoader} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="projects/projects_09.jpg" alt="Trees for Hope Projects Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />

                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image loader={imageLoader} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" src="projects/projects_15.jpg" alt="Trees for Hope Projects Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} />

                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>{" "}
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
