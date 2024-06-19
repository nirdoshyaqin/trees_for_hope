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

export default function RewildingBerlinRegistFormSG() {
  const [agreed, setAgreed] = useState(false);

  const router = useRouter();

  // 項目を設定
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [reason, setReason] = useState("");
  const [special_need, setSpecial_need] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async e => {
    // デフォルトの動作をブロック
    e.preventDefault();

    // 内部の送信用APIへ
    const res = await fetch("/api/send", {
      // body: JSON.stringify(e),
      body: JSON.stringify({
        lastname: lastname,
        firstname: firstname,
        email: email,
        phone: phone,
        date_of_birth: date_of_birth,
        reason: reason,
        special_need: special_need,
        comment: comment
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
                      <input type="text" name="first-name" id="firstname" autoComplete="given-name" value={firstname} placeholder="Pupak" onChange={e => setFirstname(e.target.value)} required className="block w-full rounded-md border-2 md:border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input type="text" name="lastname" id="lastname" autoComplete="family-name" value={lastname} placeholder="Haghighi" onChange={e => setLastname(e.target.value)} required className="block w-full rounded-md border-2 md:border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input type="email" name="email" id="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} required className="block w-full rounded-md border-2 md:border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                      Phone Number
                    </label>
                    <div className="mt-2.5">
                      <input type="tel" name="phone" id="phone" value={phone} placeholder="" onChange={e => setPhone(e.target.value)} className="block w-full rounded-md border-2 md:border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="dedication_for" className="block text-sm font-semibold leading-6 text-gray-900">
                      Your date and place of birth
                    </label>
                    <div className="mt-2.5">
                      <input type="text" name="date_of_birth" id="date_of_birth" value={date_of_birth} placeholder="1980.04.20" onChange={e => setDate_of_birth(e.target.value)} className="block w-full rounded-md border-2 md:border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="numbers_of_trees" className="block text-sm font-semibold leading-6 text-gray-900">
                      Why do you want to join this workshop?
                    </label>
                    <div className="mt-2.5">
                      <input type="text" name="reason" id="reason" value={reason} onChange={e => setReason(e.target.value)} className="block w-full rounded-md border-2 md:border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="special_need" className="block text-sm font-semibold leading-6 text-gray-900">
                      Special Need
                    </label>
                    <div className="mt-2.5">
                      <textarea name="special_need" id="special_need" rows={4} value={special_need} onChange={e => setSpecial_need(e.target.value)} className="block w-full rounded-md border-2 md:border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={""} />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="comment" className="block text-sm font-semibold leading-6 text-gray-900">
                      Any other comment ?
                    </label>
                    <div className="mt-2.5">
                      <textarea name="comment" id="comment" rows={4} value={comment} onChange={e => setComment(e.target.value)} className="block w-full rounded-md border-2 md:border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={""} />
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
                      <a href="/privacy_policy" className="font-semibold text-indigo-600">
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
