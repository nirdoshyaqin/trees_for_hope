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
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { HubspotForm } from "@/lib/hubspot";

// import TreeRegistrationForm from "@/components/TreeRegistrationForm";
import TreeRegistrationFormSG from "@/components/TreeRegistrationFormSG";

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
        <title>Hives -Alchemising our Soil, Soul, Society | Trees for Hope</title>
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
                <figure className="mt-10 mb-16 flex justify-center">
                  <img className="rounded-xl bg-gray-50 object-cover" src="/public/hives/alchemising_our_soil_soul_society.png" alt="Alchemising our Soil, Soul, Society" />
                  {/* <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                  <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
                  Faucibus commodo massa rhoncus, volutpat.
                </figcaption> */}
                </figure>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Alchemising our Soil, Soul, Society</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">Social Alchemy is about our engagement with transformational processes, affecting the health of our soil, the blossoming of our souls, and the wellbeing of our social interactions. The hives are small groups of 5-6 people who commit to the process of transformation by observing three commitments:</p>
                <ul>
                  <li>Making compost, transforming waste back to usable nutrients for the plant kingdom.</li>
                  <li>Making art, engaging our hands to create.</li>
                  <li>Manifesting our dreams, the group witnesses and supports the hive members to take the next steps towards our desired earth-healing projects.</li>
                </ul>
                <p className="mt-6 text-lg leading-8 text-gray-600">Each Hive has a focus on a particular intention related to the well being of the environment, or aspects of culture. It could be to care for a particular place, such as the rainforests by a coast. What emerges as a focus point for each hive are matters whose care makes a significant difference to the lives of those in the hive.</p>

                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"></div>
                <div className="mt-80px mt-20 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image loader={imageLoader} src="/hives/hives_01.png" alt="Hives Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" width={704} height={530} />

                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image loader={imageLoader} src="/tree_planting/tree_planting_08.jpg" alt="Trees for Hope Planting Trees Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" width={176} height={264} />

                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image loader={imageLoader} src="/tree_planting/tree_planting_04.jpg" alt="Trees for Hope Planting Trees Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" width={176} height={264} />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image loader={imageLoader} src="/tree_planting/tree_planting_06.jpg" alt="Trees for Hope Planting Trees Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" width={176} height={264} />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image loader={imageLoader} src="/tree_planting/tree_planting_05.jpg" alt="Trees for Hope Planting Trees Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" width={176} height={264} />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
              <TreeRegistrationFormSG />
            </div>
          </div>
        </main>{" "}
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
