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

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Trees for Hope</title>
        <meta name="We offer the processes, skills, tools and means needed to initiate the ecological recovery and personal, social transformations. " content="Trees for Hope Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
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
          <div className=" px-6 mt-40 pb-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
              {/* <p className="text-base text-center font-semibold leading-7 text-indigo-600">Founder's</p> */}
              <div className=" px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Privacy Policy for Trees for Hope</h1>
                </div>
                <figure class="mt-10 flex justify-center">
                  <Image loader={imageLoader} src="/privacy_policy/privacy_policy_01.jpg" alt="Trees for Hope Privacy Policy Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="sm:h-5/6 sm:w-5/6 rounded-xl bg-gray-50 object-cover" width={586} height={667} priority={true} />
                </figure>
              </div>
              <p className="mt-6 text-lg leading-8">At Trees for Hope, accessible from https://www.treesforhope.earth/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Trees for Hope and how we use it.</p>
              <p className="mt-6 text-lg leading-8">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
              <p className="mt-6 text-lg leading-8">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Trees for Hope. This policy is not applicable to any information collected offline or via channels other than this website.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Consent</h2>
              <p className="mt-6 text-lg leading-8">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Information we collect</h2>
              <p className="mt-6 text-lg leading-8">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
              <p className="mt-6 text-lg leading-8">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
              <p className="mt-6 text-lg leading-8">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">How we use your information</h2>
              <p className="mt-6 text-lg leading-8">We use the information we collect in various ways, including to:</p>
              <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Log Files</h2>
              <p className="mt-6 text-lg leading-8">Trees for Hope follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Advertising Partners Privacy Policies</h2>
              <p className="mt-6 text-lg leading-8">You may consult this list to find the Privacy Policy for each of the advertising partners of Trees for Hope.</p>
              <p className="mt-6 text-lg leading-8">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Trees for Hope, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
              <p className="mt-6 text-lg leading-8">Note that Trees for Hope has no access to or control over these cookies that are used by third-party advertisers.</p>
              <h3 className="mt-10 text-xl font-bold tracking-tight text-gray-900">Third Party Privacy Policies</h3>
              <p className="mt-6 text-lg leading-8">Trees for Hope's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
              <p className="mt-6 text-lg leading-8">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
              <h3 className="mt-10 text-xl font-bold tracking-tight text-gray-900">CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
              <p className="mt-6 text-lg leading-8">Under the CCPA, among other rights, California consumers have the right to:</p>
              <p className="mt-6 text-lg leading-8">Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
              <p className="mt-6 text-lg leading-8">Request that a business delete any personal data about the consumer that a business has collected.</p>
              <p className="mt-6 text-lg leading-8">Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
              <p className="mt-6 text-lg leading-8">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
              <h3 className="mt-10 text-xl font-bold tracking-tight text-gray-900">GDPR Data Protection Rights</h3>
              <p className="mt-6 text-lg leading-8">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
              <p className="mt-6 text-lg leading-8">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
              <p className="mt-6 text-lg leading-8">The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
              <p className="mt-6 text-lg leading-8">The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
              <p className="mt-6 text-lg leading-8">The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
              <p className="mt-6 text-lg leading-8">The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
              <p className="mt-6 text-lg leading-8">The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
              <p className="mt-6 text-lg leading-8">TIf you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
              <h3 className="mt-10 text-xl font-bold tracking-tight text-gray-900">Children's Information</h3>
              <p className="mt-6 text-lg leading-8">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
              <p className="mt-6 text-lg leading-8">Trees for Hope does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
              <h3 className="mt-10 text-xl font-bold tracking-tight text-gray-900">Changes to This Privacy Policy</h3>
              <p className="mt-6 text-lg leading-8">Trees for Hope does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
              <p className="mt-6 text-lg leading-8">Our Privacy Policy was created with the help of the Privacy Policy Generator.</p>
              <h3 className="mt-10 text-xl font-bold tracking-tight text-gray-900">Contact Us</h3>
              <p className="mt-6 text-lg leading-8">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
            </div>
          </div>{" "}
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
