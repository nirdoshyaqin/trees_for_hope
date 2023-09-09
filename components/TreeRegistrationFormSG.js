/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TreeRegistrationFormSG() {
  const [agreed, setAgreed] = useState(false);

  const router = useRouter();

  // 項目を設定
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [dedication_for, setDedication_for] = useState("");
  const [numbers_of_trees, setNumbers_of_trees] = useState("");
  const [images, setImages] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    // デフォルトの動作をブロック
    e.preventDefault();

    // let img = document.getElementById("images");
    // let imgfile = img.files[0];

    // console.log( imgfile );

    // let reader = new FileReader();
    // reader.onload = function (e) {
    //   console.log( e.target.result );
    // }
    // reader.readAsDataURL(imgfile);

    // 画像の読み込みをawaitで待つ
    let img = document.getElementById("images");
    let imgfile = img.files[0];
    imgfile = await new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = function(e) {
        resolve(e.target.result);
      };
      reader.readAsDataURL(imgfile);
    });
    // console.log(imgfile);
    // data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/....

    // 画像サイズをチェック(1MBまで)
    if (imgfile.length > 1048576) {
      alert("The image size is too large. Please select an image that is less than 1MB in size.");
      return;
    }

    // 内部の送信用APIへ
    const res = await fetch("/api/send", {
      // body: JSON.stringify(e),
      body: JSON.stringify({
        lastname: lastname,
        firstname: firstname,
        email: email,
        company: company,
        dedication_for: dedication_for,
        numbers_of_trees: numbers_of_trees,
        images: images,
        imgfile: imgfile //images.split("base64,")[1],
        // message: message
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    const result = await res.json();
    console.log(result);

    if (result.status == 200) {
      // メール送信成功
      alert("Email sent successfully.");
    }

    // フォーム送信へ
    // await submit_hubspot_form(firstname, lastname, dedication_for, numbers_of_trees, email, company, images, message);
  };

  return (
    <>
      <div className="bg-white">
        <main className="isolate">
          {/* Hero section */}
          <div className="relative isolate -z-10">
            <div className="isolate bg-white px-6 mt-40 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Registration Form</h2>
                {/* <p className="mt-2 text-lg leading-8 text-gray-600">Let us hear from you. We’ll get back to you as soon as we can. Thank you.</p> */}
              </div>
              <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input type="text" name="first-name" id="firstname" autoComplete="given-name" value={firstname} placeholder="Pupak" onChange={e => setFirstname(e.target.value)} required className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input type="text" name="lastname" id="lastname" autoComplete="family-name" value={lastname} placeholder="Haghighi" onChange={e => setLastname(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input type="email" name="email" id="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} required className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                      Company
                    </label>
                    <div className="mt-2.5">
                      <input type="text" name="company" id="company" autoComplete="organization" value={company} placeholder="Trees for Hope" onChange={e => setCompany(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="dedication_for" className="block text-sm font-semibold leading-6 text-gray-900">
                      Dedication
                    </label>
                    <div className="mt-2.5">
                      <input type="text" name="dedication_for" id="dedication_for" autoComplete="organization" value={dedication_for} placeholder="Trees for Hope" onChange={e => setDedication_for(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="numbers_of_trees" className="block text-sm font-semibold leading-6 text-gray-900">
                      Numbers of Trees
                    </label>
                    <div className="mt-2.5">
                      <input type="text" name="numbers_of_trees" id="numbers_of_trees" autoComplete="organization" value={numbers_of_trees} placeholder="1" onChange={e => setNumbers_of_trees(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="images" className="block text-sm font-semibold leading-6 text-gray-900">
                      images ( Limit 1MB )
                    </label>
                    <div className="mt-2.5">
                      <input type="file" name="images" id="images" autoComplete="organization" value={images} placeholder="1" onChange={e => setImages(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea name="message" id="message" rows={4} value={message} onChange={e => setMessage(e.target.value)} required className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={""} />
                    </div>
                  </div>
                  <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                    <div className="flex h-6 items-center">
                      <Switch checked={agreed} onChange={setAgreed} className={classNames(agreed ? "bg-indigo-600" : "bg-gray-200", "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")}>
                        <span className="sr-only">Agree to policies</span>
                        <span aria-hidden="true" className={classNames(agreed ? "translate-x-3.5" : "translate-x-0", "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out")} />
                      </Switch>
                    </div>
                    <Switch.Label className="text-sm leading-6 text-gray-600">
                      By selecting this, you agree to our{" "}
                      <a href="#" className="font-semibold text-indigo-600">
                        privacy&nbsp;policy
                      </a>
                      .
                    </Switch.Label>
                  </Switch.Group>
                </div>
                <div className="mt-10">
                  <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
