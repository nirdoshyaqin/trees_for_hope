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

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

// const inter = Inter({ subsets: ["latin"] });

export default function Mission() {
  return (
    <>
      <Head>
        <title>Mission Page | Trees for Hope</title>
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
          {/* Content section */}
          <div className="bg-white px-6 mt-40 pb-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
              {/* <p className="text-base text-center font-semibold leading-7 text-indigo-600">Founder's</p> */}
              <div className="bg-white px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Mission</h1>
                  {/* <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p> */}
                </div>
              </div>
              <figure className="mt-10 mb-16 flex justify-center">
                <Image loader={imageLoader} className="rounded-xl bg-gray-50 object-cover" src="/top/top_vision_02.jpg" alt="Trees for Hope Mission Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={768} height={512} />

                {/* <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                  <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
                  Faucibus commodo massa rhoncus, volutpat.
                </figcaption> */}
              </figure>
              <h3 className="mt-10 text-xl font-medium tracking-tight text-gray-900">🙌 &nbsp;Trees for Hope will assist in the emergence of a bioregional network of ecovillages and communities engaged in rewilding themselves and their local ecosystems in the Wider Fertile Crescent area.</h3>
              <h3 className="mt-10 text-xl font-medium tracking-tight text-gray-900">🙌 &nbsp;This will be achieved by shared positive and practical ecological restoration work, drawing on local knowledge and wisdom.</h3>
              <h3 className="mt-10 text-xl font-medium tracking-tight text-gray-900">🙌 &nbsp;We aid in removing the illusory barriers of separation, so a path will be revealed for the regeneration of the area and the restoration of its natural fertility.</h3>

              <h3 className="mt-10 text-xl font-medium tracking-tight text-gray-900">🙌 &nbsp;We offer practical work to rejuvenate the land, accessing the experience of the existing networks of ecovillages and rewilding projects, which provides creative opportunities for healing the self, the history and cultural divides.</h3>
              <h3 className="mt-10 text-xl font-medium tracking-tight text-gray-900">🙌 &nbsp;We create a bridge between the Wider Fertile Crescent and the rest of the world to allow for a healing exchange enabling love, peace and hope to be manifested.</h3>

              <div className="mt-80px mt-20 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image loader={imageLoader} src="/tree_planting/tree_planting_01.jpg" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" alt="Trees for Hope Mission Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} />

                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image loader={imageLoader} src="/tree_planting/tree_planting_08.jpg" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" alt="Trees for Hope Mission Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image loader={imageLoader} src="/tree_planting/tree_planting_04.jpg" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" alt="Trees for Hope Mission Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image loader={imageLoader} src="/tree_planting/tree_planting_06.jpg" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" alt="Trees for Hope Mission Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image loader={imageLoader} src="/tree_planting/tree_planting_05.jpg" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" alt="Trees for Hope Mission Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={176} height={264} />

                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <figure className="mt-10 mb-16 flex justify-center">
              <Image loader={imageLoader} src="/mission/mission_02.jpg" className="rounded-xl bg-gray-50 object-cover" alt="Trees for Hope Mission Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={768} height={1024} />
            </figure>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
