import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
                    <h2>CREW, Rainforest Action, Glenuig. 8-15, 22-29 June</h2>

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
                    <p className="mt-6 text-lg leading-8 text-gray-600">We will be engaging with the community in Glenuig, Moidart on the west coast of Scotland to revive the Atlantic Rainforest. A tiny remnant of the ancient oak woodland still stands here. However this fragile ecosystem is endangered by two threats: overgrazing by deer and invasive non-native rhododendrons.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">To catalyse the return of the Atlantic Rainforest, and to embody a rewilding project, Trees for Hope is engaging with the community to assist in their efforts to create the conditions for a vibrant ecosystem to exist. </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">In our weeks, our work is concentrated on removing rhododendrons and building tree-guards to protect the young saplings in the forest. </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">As well as external rewilding activities, each participant will have opportunities to harmonise with nature. A greater sense of interconnection with nature and community may be realised when we engage to help nature and ourselves recover from damages of the past, and turn towards our sense of wholeness.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">We intend our weeks of engagement to be efficient, fun, and fulfilling. We hope our weeks will spark new connections and encourage growth. By engaging with nature, communities, and people from other parts of the world, we are creating decisive opportunities for transformation, connection, and healing. </p>
                    <h3>What can you expect from this week?</h3>
                    <ul>
                      <li>Experiential, direct connection with nature.​</li>
                      <li>Immersion in rewilding skills and crafts.</li>
                      <li>Joining a work-force to help the recovery of the Atlantic Rainforest.</li>
                      <li>Meeting and connecting with other people who care as much about nature, and are getting engaged, from the community in Moidart and elsewhere.</li>
                    </ul>
                    <h3>Lodging, Food, and Transport</h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600">We will be camping for both weeks in June by the Community Hall in Glenuig. We will have access to the lounge and the kitchenette, as well as the shower and toilets there. You need to bring your own tent, bedding, and anything to make you feel 'at home' in a tent.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      We will share the cooking and home-care for the week as a group. As our community forms and take shape, we will self-organise around our shared space and living chores. We will provide most of the ingredients needed to cook nourishing meals. Our preference is on the side of vegan / vegetarian food.
                      <br />
                      We will not provide chocolate and wine. There is a local store in Glenuig where you can buy these items.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">You need to arrive in Glenuig (map above) on Saturday afternoon. We aim to start the programme at 2 pm. The nearest train station is Lochailort. Sharing lifts may be possible. Our programme will complete on the following Saturday before lunch. </p>

                    <h3>Price</h3>

                    <p className="mt-6 text-lg leading-8 text-gray-600">We have three tiers you can choose from to pay for the week, depending on your financial position.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">1- £40 / night, covering cost of camp and food (£280)</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">2- £60 / night, paying for both facilitators (£420)</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">3- £80 / night, helping our programme as a whole (£560)</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">4- any extra contribution supports participants with low budget</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">We recommend you book for the 7 nights. Please pay in advance via bank transfer.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Our bank account: <br></br>Trees for Hope, Rewilding the Fertile Crescent<br></br>Account : 20673701<br></br>Sort Code : 16 58 10
                    </p>

                    <h3>Information about the week</h3>

                    <p className="mt-6 text-lg leading-8 text-gray-600">We will be a mix of local and guest participants on the programme, joining to create a unique shared experience.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Focalisers: Pupak Haghighi, Alan Watson Featherstone</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      <b>Guest participants are the people coming from outside of Moidart.</b>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      ----<br></br> * This will be a week of external engagement with nature and direct action, as well as internal reflection and stillness. We will be building deer exclosure fences, planting native trees, and removing rhododendron, an invasive species. Please come mentally and physically prepared. Appropriate clothing for physical work outdoors is essential.<br></br>​ ———--
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      <b>Things to bring :</b>
                    </p>
                    <ul>
                      <li>Tent and bedding​</li>
                      <li>Outdoor sandals</li>
                      <li>Water proof boots</li>
                      <li>Thermos flask for a hot drink</li>
                      <li>lunch box</li>
                      <li>rain-gear, including: rain coat, rain pants, gaiters</li>
                      <li>at least two pairs of trousers, two sets of tops, and thick socks</li>
                      <li>gardening gloves, if you have them</li>
                      <li>midge net</li>
                      <li>（optional : swim suit and diving boots for going to the sea during your leisure time）</li>
                    </ul>
                    <h3>Registration for the local residents</h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600">If you live in Moidart, participating on our weeks are free of charge. We warmly welcome you to our circle for the week. You can join any day, or even a half day of our working weeks. To coordinate our group and work force it will be helpful to us to know which day(s) you are intending to be with us. For this reason we have created the form below for you to tell us your plans. Please take a moment and jot down a few words in the form.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">We also would like to invite you to join us for the opening and the closing of the week, ie, on the Saturday afternoon when we start, and the Saturday morning when we complete the week. This way you will be a part of the circle, even when you can only join for a half day. The circle connects and creates wholeness. By joining us on these two important moments you will help the whole week to be held with you as a part of our group.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">You are also very welcome to join us on Wednesday night for a community dinner. This is a pot luck event. Please bring some food to share. We might spontaneously break out into a Ceilldh, or not.</p>
                    <h3>Register for the week of 22nd-29th June, 2024</h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600">We are so excited to be sharing this week with you.</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Please fill the form below. Thank you.</p>
                    <div className="mt-10">
                      <Link className="text-white" href="https://bit.ly/3Purrl5" target="_blank">
                        <button type="button" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Living in Moidart
                        </button>
                      </Link>
                    </div>
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
