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

export default function Message() {
  return (
    <>
      <Head>
        <title>Message Page | Trees for Hope</title>
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
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Message from the Founder</h1>
                  {/* <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p> */}
                </div>
              </div>
              <figure className="mt-10 flex justify-center">
                <Image loader={imageLoader} className="sm:h-3/6 sm:w-3/6 rounded-xl bg-gray-50 object-cover" src="/pupak.jpg" alt="Pupak Haghighi Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={384} height={441} />
                {/* <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                  <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
                  Faucibus commodo massa rhoncus, volutpat.
                </figcaption> */}
              </figure>
              <p className="mt-6 text-lg leading-8">We are one with Nature. Unfortunately we have fallen into a state of disconnection both with Nature and ourselves. We are experiencing extreme weather patterns and are mostly aware that our climate crisis is a man-made disaster.</p>
              <p className="mt-6 text-lg leading-8">Personally I have lived through a devastating war between Iran and Iraq in the early 80’s. Then I was involved in an even more demoralising experience of re-living through most wars of the last century in the late 80’s. I was shattered. I needed to recollect and re-make myself anew to become whole again. I did this by engaging in artist and creative processes. As a glass artist I made mosaic angels. They showed me the way to my joy.</p>

              <p className="mt-6 text-lg leading-8">I recovered myself to stand again for life. I think this is something everyone can do no matter how broken. We can recover our oneness with Nature. </p>

              <p className="mt-6 text-lg leading-8">Now we need to stand with and for Nature together. Rewilding as a practical way forward to heal our ecosystems and our communities is a way that needs to become mainstream and global. Each one of us can be an earth-healer in our own ways.</p>

              <p className="mt-6 text-lg leading-8">As an earth-healer we need to become indigenous, to belong to the land. A healing path is born out of our relationship, our love for the land.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Trees for Hope origin story</h2>
              <p className="mt-6 text-lg leading-8">I grew up by the Caspian Sea and the Hyrcanian Forests in Northern Iran. Through the 70’s and early 80’s I traveled in Iran with my family. I remembered a joy of life that belongs to the kingdom of childhood, and a healthy land that belongs to intact ecosystems. I emigrated from Iran to Japan in 1984 with my family. We left a war-torn country to seek better opportunities for our futures.</p>
              <p className="mt-6 text-lg leading-8">I then returned to Iran for a visit in 2000. Having lived abroad for a while had given me a perspective to witness the acute desolation of our environment, the social fabric, and personal wellbeing of the people. I felt deeply touched and moved by the suffering I experienced in the land. </p>
              <h3 className="mt-10 text-xl font-bold tracking-tight text-gray-900">Trees for Hope has been coming into being</h3>
              <p className="mt-6 text-lg leading-8">After my initial return visit to Iran, I decided to reach deeply into my resources, to connect with teachers and organisations around the world who have been active to heal the land, so I could create a resource and network for the people in my native land to tap into to recover the land and heal their lives. Gradually Trees for Hope has been coming into being with this purpose. I moved to live in Findhorn Ecovillage in 2013.</p>

              <p className="mt-6 text-lg leading-8">Since this move, my focus for Trees for Hope has become sharper. Over the last 9 years I have been building a network with a global body of allies who have been supporting the growth of Trees for Hope towards its aim to rewild the Fertile Crescent. Being rooted in the Findhorn Community has helped me to grow and connect with numerous allies, such as the Gaia Education, Global Ecovillage Network, Trees for Life, WILD, LUSH, Cana Foundation, Climate Change and Consciousness Community, Humanity Rising, and many more. </p>
              <h3 className="mt-10 text-xl font-bold tracking-tight text-gray-900">a journey towards rewilding ourselves and our ecosystems has begun</h3>
              <p className="mt-6 text-lg leading-8">Trees for Hope is connecting and growing with local communities and networks in the Fertile Crescent, such as the Ecosystem Restoration Communities. A journey towards rewilding ourselves and our ecosystems has begun. I feel I am a part of this movement. Deeper down, I feel it is life itself that is guiding me, and the network to form, to connect, to dissolve, and to heal and reveal. We are responding to the desire and the intelligence of life in its essence.</p>
              <div className="mt-10 max-w-2xl">
                {/* <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </span>
                  </li>
                </ul> */}
                {/* <p className="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p> */}
                {/* <figure className="mt-10 border-l border-indigo-600 pl-9">
                  <blockquote className="font-semibold text-gray-900">
                    <p>“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.”</p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4">
                    <img className="h-6 w-6 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <div className="text-sm leading-6">
                      <strong className="font-semibold text-gray-900">Maria Hill</strong> – Marketing Manager
                    </div>
                  </figcaption>
                </figure> */}
              </div>

              {/* <div className="mt-16 max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Everything you need to get up and running</h2>
                <p className="mt-6">Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>
                <p className="mt-8">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>
              </div> */}
            </div>
          </div>{" "}
          {/* Image section */}
          <div className="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
            <Image loader={imageLoader} className="aspect-[5/2] w-full object-cover xl:rounded-3xl" src="/tree_planting/tree_planting_01.jpg" alt="Pupak Haghighi Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={1216} height={486} />
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
