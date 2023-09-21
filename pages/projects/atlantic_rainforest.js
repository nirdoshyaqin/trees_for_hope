import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AtlanticRegistrationFormSG from "@/components/AtlanticRegistrationFormSG";

// const inter = Inter({ subsets: ["latin"] });

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Project() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <Head>
        <title>Atlantic Rainforest Page | Trees for Hope</title>
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
              <div className="mx-auto max-w-3xl px-6 pb-32 mt-40 lg:px-8">
                <div className="gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="prose w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Reviving the Atlantic Rainforest</h1>
                    <h2>Community and Rainforests Engagement Weeks (CREW)</h2>
                    <div className="mt-0px mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                        <div className="relative">
                          <Image loader={imageLoader} src="../atlantic_rainforest/atlantic_rainforest_01.jpg" alt="Trees for Hope Atlantic Rainforest Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" width={176} height={264} />

                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                      </div>
                      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                        <div className="relative">
                          <Image loader={imageLoader} src="../atlantic_rainforest/atlantic_rainforest_02.jpg" alt="Trees for Hope Atlantic Rainforest Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" width={176} height={264} />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div className="relative">
                          <Image loader={imageLoader} src="../../atlantic_rainforest/atlantic_rainforest_07.jpg" alt="Trees for Hope Atlantic Rainforest Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" width={176} height={264} />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                      </div>
                      <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                        <div className="relative">
                          <Image loader={imageLoader} src="../../atlantic_rainforest/atlantic_rainforest_04.jpg" alt="Trees for Hope Atlantic Rainforest Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" width={176} height={264} />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div className="relative">
                          <Image loader={imageLoader} src="../atlantic_rainforest/atlantic_rainforest_05.jpg" alt="Trees for Hope Atlantic Rainforest Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" width={176} height={264} />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-lg leading-8 text-gray-600">We will be engaging with the community in Glenuig, Moidart to revive the Atlantic Rainforests. A tiny remnant of the ancient oak woodland still stands here. However this fragile ecosystem is endangered by three threats : overgrazing deer, rhododendron invasion, community disengagement. </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">To catalyse the return of the Atlantic Rainforests, and to embody a rewilding project, Trees for Hope is engaging with the community to assist in their efforts to create the conditions for a vibrant ecosystem to exist. </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">In our Community and Rainforests Engagement Weeks, we invite people from the community to get involved in rhododendron removal, alongside our volunteers from other communities and participants from the Fertile Crescent. </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">As well as rhododendron removal, each participant will have opportunities to harmonise with nature. A greater sense of interconnection with nature and community may be realised when we engage to help nature and ourselves recover from damages of the past, and turn towards our sense of wholeness.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">We intend our weeks of Engagement to be efficient, fun, and fulfilling. We hope our weeks will spark new connections and encourage growth. By engaging with nature, communities, and people from other parts of the world, we are creating decisive opportunities for transformation, connection, and healing.</p>
                    <h3>What can you expect from this week?</h3>
                    <ul>
                      <li>Experiential, direct connection with nature.​</li>
                      <li>Immersion in rewilding skills and crafts.</li>
                      <li>Joining a work-force to help the recovery of the Atlantic Rainforest.</li>
                      <li>Meeting and connecting with other people who care as much about nature, and are getting engaged, from the community in Moidart and elsewhere.</li>
                    </ul>
                    <h3>Food . Lodging . Price</h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600">The lodging for this week is at Viking Cottage. A comfortable base with stunning views of the sea-loch. Viking Cottage can accommodate 5 single people at a time. We can accommodate two couples, in which case our lodging capacity increases to 7 people. Due to limited space, it is important that you communicate with us to book your place.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">We will provide the ingredients, and will share the cooking of our meals together. As our community forms and take shape, we will self-organise around our shared space and living chores.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Although our preference is for you to be part of the whole week, you can come on any of our work-days and stay for as long, or as short as you wish.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Our suggested price is £50/ night / person, which covers food and accommodation. You can pay this by bank transfer or cash during the week.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Our bank account: <br></br>Trees for Hope, Rewilding the Fertile Crescent<br></br>Account : 20673701<br></br>Sort Code : 16 58 10
                    </p>
                    <h3>Information about the week</h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600">We will be a mix of local and guest participants on the programme, joining to create a unique shared experience.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Focalisers:Pupak Haghighi, Alan Watson Featherstone</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      <b>Guest participants are the people coming from outside of Moidart.</b>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      ----<br></br> * This will be a week of external engagement with nature and direct action, as well as internal reflection and stillness. We will be mostly removing rhododendron, an invasive species. Please come mentally and physically prepared. Appropriate clothing for physical work outdoors is essential.<br></br>​ ———--
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      <b>Things to bring :</b>
                    </p>
                    <ul>
                      <li>hot or cold drinking flasks​</li>
                      <li>lunch box</li>
                      <li>rain-gear, including : rain coat, rain pants, gaiters, rain-proof boots</li>
                      <li>at least two pairs of trousers, two sets of tops, and socks</li>
                      <li>gardening gloves, if you have them, bring them</li>
                      <li>swimming suit</li>
                    </ul>
                    <h3>Register for the week of 6-13 October, 2023</h3>
                    <AtlanticRegistrationFormSG />
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
