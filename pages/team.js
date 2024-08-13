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
import Vision from "@/components/Vision";

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

// const inter = Inter({ subsets: ["latin"] });

const people = [
  {
    name: "Pupak Haghighi",
    role: "Founder and Project Coordinator",
    imageUrl: "/pupak.jpg",
    bio: "<p>Pupak is passionate about wholeness, be it people or places.  She finds connecting with nature a deep source of healing.  For her, initiating Trees for Hope was a natural response to heal the ecological and human damages she had witnessed in her environments.</p><p>She is responsible for the charity’s establishment and delivering on its objectives.She is the author of Theatre O, Healing from War, Living in Beauty Way.  She is originally from Iran and Japan, and lives in Findhorn Ecovillage in Scotland.</p>",
    youtubeUrl: "https://www.youtube.com/@Pupak_Haghighi",
    homePageUrl: "http://www.pupakhaghighi.net/"
  },
  {
    name: "Alan Watson Featherstone",
    role: "Trustee",
    imageUrl: "/alan.jpg",
    bio: "<p>Alan Watson Featherstone is an ecologist, nature photographer and inspirational public speaker. In 1986 he founded the award-winning Scottish conservation charity, Trees for Life, and was its executive director for almost 30 years. During that time it became the leading organisation working to restore the Caledonian Forest in Scotland and took on ownership of the 10,000 acre Dundreggan Estate in Glenmoriston as its flagship project for native woodland recovery. His TedX talk about this work is at: 👇 youtube icon below.</p> <p>Through his work with Trees for Life, Alan helped to provide the inspiration for other ecological restoration projects in the Scottish Borders, on Dartmoor in England and for the creation of the Yendegaia National Park in Tierra del Fuego, Chile. He also founded the Restoring the Earth project, to promote the restoration of the planet’s degraded ecosystems as the most important task for humanity in the 21st century. </p> <p>Alan regularly contributes articles to various professional and popular publications, and writes a blog at: alanwatsonfeatherstone.com/blog/. His photographs have appeared in publications such as Time magazine and Encyclopedia Britannica, and he is currently working on a high quality photographic book project about the endangered Araucaria (monkey puzzle tree) forests of Chile.</p><p>Alan has given lectures at events and conferences in more than 20 countries worldwide, and has received a number of awards for his work, including the Schumacher Award in 2001, the Spirit of Scotland Environment Award in 2012 and the RSPB Nature of Scotland Outstanding Contribution Award in 2013, whilst Trees for Life was declared the UK Conservation Project of the Year in 1991.</p><p>Alan has been vegan for over 40 years and lives with his wife, Pupak, in an energy-efficient ecologically designed house in the Findhorn Community and Ecovillage in northeast Scotland. He is a trustee of three locally-based charities: the Findhorn Hinterland Trust, Trees for Hope and ‘Wild things! environmental education in action’.</p>",
    youtubeUrl: "https://www.youtube.com/watch?v=nAGHUkby2Is",
    homePageUrl: "http://alanwatsonfeatherstone.com/blog/"
  },
  {
    name: "Minni Jain",
    role: "Trustee / Director",
    imageUrl: "/minni.jpg",
    bio: "For over 25 years MINNI JAIN has been working with communities to regenerate their landscapes and lives. She is the Operations Director of The Flow Partnership, working on community-led management of droughts and floods across Africa, India and Europe. Minni is also on the boards of the Biodynamic Land Trust, the Agroforestry Research Trust and the Berkana Institute , USA.",
    homePageUrl: "https://www.theflowpartnership.org/"
  },
  {
    name: "Philip Franses",
    role: "Trustee / Director",
    imageUrl: "/philip.png",
    bio: "<p>After finishing a maths degree at Oxford, HE came to a turning point in his life – either settle for a for the glittering career in finance or instead, follow a feeling of whole potential. This led him to buying a bicycle to ride towards Africa, a six month trip which convinced him that Europe should match its technological advancement with spiritual maturity.</p><p>Post the trip to Africa, Interspersed with designing software for organisations, He worked on this bridge of science and spirit through writing, inquiry and talks. Holistic Science became a vehicle for this inquiry while teaching for 10 years at an ecological college in the UK.</p><p> Since 2018 He has been taking the inquiry further through a range of independent courses across 15 countries. He is the author of ‘Time, Light and the Dice of Creation’, Floris Books, and founding editor of the Holistic Science Journal. He is on the board of Group Analysis India, and also Director Innovation at The Flow Partnership, working to transform degraded landscapes to the miracle of life and opportunity, through the return of water. Trees for Hope complements with forest restoration what the Flow Partnership enables with water.",
    homePageUrl: "https://www.holisticsciencejournal.co.uk/"
  },
  {
    name: "Bahar Ghafelehbashi",
    role: "Trustee",
    imageUrl: "/bahar.jpg",
    bio: "<p>Bahar is born in Iran, in city of Tehran and has been living in Canada for the past 22 years. A registered psychotherapist working mostly in Toronto and a student of consciousness from an early age. Her main mission in life is weaving cultures and wisdoms of the world as steps towards healing of our human relationships in relation to all sentient beings. <p>In search for healing crisis of our time, Bahar found herself deep in Amazon Rainforest and was gifted with an organization (Yurahu.org) that aims to provide resources needed for indigenous people (Yawanawa Tribe) to preserve the medicinal knowledge of the area.</p></p><p>Currently, Bahar lives half of the year in Iran and half in Canada.The journey of Trees of Hope for me began in the middle of Covid, when she was looking to see what is emerging and unfolding. She was in Iran at the time, connecting to my roots after two decades, and in in deep search for life.</p> <p>She decided to investigate eco-villages and began to interview 30 people living in various eco-villages to hear about their experiences of Covid while living in communities. It was through Findhorn that She met Pupak online. During the past 2 years, She felt a strong bond with Pupak. She led regular workshop series on alchemy of soil, soul, and society. She felt drawn to the workshops, and a path began to emerge. She has full trust and has experienced the alchemy of hives in soil, soul and society. She believes that future can sprout beautifully when human beings follow nature’s intelligence.</p>",
    homePageUrl: "https://yurahu.org/"
  }

  // More people...
];

export default function Team() {
  return (
    <>
      <Head>
        <title>Team Member | Trees for Hope</title>
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
          {/* Team section */}
          <div className="bg-white py-24 md:py-32">
            <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Team Members</h1>
                {/* <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p> */}
              </div>
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
              <div className="max-w-2xl xl:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About the team</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">We are a diverse team, coming from backgrounds of rewilding, holistic science, water and communities, psychology, and social sciences. The combination of our expertise and passion to serve the purposes and missions of Trees for Hope makes a potent group to deliver our work.</p>
              </div>
              <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
                {people.map(person => (
                  <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
                    <Image loader={imageLoader} izes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="sm:h-64 sm:w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt={person.name} width={208} height={268} />

                    <div className="max-w-xl flex-auto">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-base leading-7 text-gray-600">{person.role}</p>
                      <div className="person-bio mt-6 text-base leading-7 text-gray-600" dangerouslySetInnerHTML={{ __html: person.bio }}></div>
                      <ul role="list" className="mt-6 flex gap-x-6">
                        {person.twitterUrl && (
                          <li>
                            <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Twitter</span>
                              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </li>
                        )}
                        {person.linkedinUrl && (
                          <li>
                            <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">LinkedIn</span>
                              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </li>
                        )}
                        {person.youtubeUrl && (
                          <li>
                            <a href={person.youtubeUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">YouTube</span>
                              <svg className="h-5 w-5" enableBackground="new 0 0 512 512" id="Layer_1" viewBox="0 0 512 512" fill="currentColor">
                                <g>
                                  <path d="M256.4,74.2c22.7,0,45.3-0.4,68,0.1c28.8,0.6,57.6,1.7,86.3,3c11.9,0.6,24,0.9,35.8,3.2   c28.1,5.4,44.8,22.7,52.5,50c4.1,14.5,5.6,29.4,6.9,44.3c3.5,40.1,2.8,80.2,1.8,120.3c-0.6,23.7-1.6,47.6-7.6,70.8   c-2.5,9.5-5.4,19-10.9,27.3c-10,15.1-24.4,23.7-42,26.9c-15.1,2.8-30.4,3.1-45.7,3.8c-28.3,1.3-56.6,1.9-84.9,2.6   c-33.5,0.9-67,0.7-100.4,0.4c-27.1-0.3-54.3-0.9-81.4-2c-22.9-0.9-45.9-1.3-68.5-5.7c-12.5-2.4-23.6-7.6-33.2-16.2   c-9-8.2-13.6-18.8-17-30c-7.3-24-7.8-48.8-9.3-73.6c-1.7-29-1.2-58-0.5-86.9c0.6-24.4,1.7-48.9,6.8-72.9c3-14.2,7.1-28.3,17.4-39.2   c12.7-13.4,28.9-19.8,47.2-21.1c21.9-1.5,43.9-2.5,65.8-3.4C181.1,74.3,218.8,73.8,256.4,74.2z M339.5,245.4   c-0.4-1.2-1.5-1.4-2.3-1.8c-23.5-12.4-47.1-24.8-70.7-37.2c-18.7-9.8-37.4-19.7-56.1-29.6c-5.2-2.7-5.3-2.6-5.3,3.4   c0,43.1,0,86.2,0,129.4c0,0.8,0,1.7,0,2.5c-0.1,2.6,0.9,3.4,3.3,2.1c2.9-1.6,5.8-3.2,8.8-4.8c39.4-20.4,78.9-40.9,118.3-61.3   C336.9,247.3,338.7,247,339.5,245.4z" fillRule="#A7A7A7" />
                                </g>
                              </svg>
                            </a>
                          </li>
                        )}
                        {person.homePageUrl && (
                          <li>
                            <a href={person.homePageUrl} className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                              <span className="sr-only">HomePage</span>
                              <svg className="w-5 h-5" viewBox="0,0,256,256" fillRule="nonzero">
                                <g fill="#9ca3af" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0">
                                  <g transform="scale(5.12,5.12)">
                                    <path d="M25,1.05078c-0.2175,0 -0.43414,0.06898 -0.61914,0.20898l-23,17.95117c-0.43,0.34 -0.50992,0.9682 -0.16992,1.4082c0.34,0.43 0.9682,0.50992 1.4082,0.16992l1.38086,-1.07812v26.28906c0,0.55 0.45,1 1,1h14v-18h12v18h14c0.55,0 1,-0.45 1,-1v-26.28906l1.38086,1.07812c0.19,0.14 0.39914,0.21094 0.61914,0.21094c0.3,0 0.58906,-0.13086 0.78906,-0.38086c0.34,-0.44 0.26008,-1.0682 -0.16992,-1.4082l-23,-17.95117c-0.185,-0.14 -0.40164,-0.20898 -0.61914,-0.20898zM35,5v1.05078l6,4.67969v-5.73047z"></path>
                                  </g>
                                </g>
                              </svg>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image section */}
          <div className="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
            <Image loader={imageLoader} src="/tree_planting/tree_planting_09.jpg" alt="" className="aspect-[5/2] w-full object-cover xl:rounded-3xl" width={1204} height={481} />
          </div>
          {/* Vision section */}
          <Vision />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
