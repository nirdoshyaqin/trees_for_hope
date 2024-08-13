import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const HubspotForm = () => {
  const router = useRouter();

  // 項目を設定
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [dedication_for, setDedication_for] = useState("");
  const [numbers_of_trees, setNumbers_of_trees] = useState("");
  const [images, setImages] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    // デフォルトの動作をブロック
    e.preventDefault();

    // フォーム送信へ
    await submit_hubspot_form(firstname, lastname, dedication_for, numbers_of_trees, email, images, message);
  };

  const submit_hubspot_form = async (firstname, lastname, dedication_for, numbers_of_trees, images, email, message) => {
    const portalId = "22227503";
    const formGuid = "05c8f63c-4c04-4084-a129-70de42468120";
    const config = {
      headers: {
        "Message-Type": "application/json"
      }
    };

    return await axios
      .post(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        {
          portalId,
          formGuid,
          fields: [
            {
              name: "Firstname",
              value: firstname
            },
            {
              name: "Lastname",
              value: lastname
            },
            {
              name: "Email",
              value: email
            },
            {
              name: "Dedication for",
              value: dedication_for
            },
            {
              name: "Numbers of trees",
              value: numbers_of_trees
            },
            {
              name: "Any words and messages?",
              value: message
            },
            {
              name: "Images",
              value: images
            }
          ]
        },

        config
      )
      .then(() => {
        // フォーム送信後にリダイレクトする
        router.push("/");
      });
  };

  return (
    <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">お名前</legend>
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor="firstname">
              First name
            </label>
            <input className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="firstname" name="firstname" type="text" value={firstname} placeholder="Pupak" onChange={e => setFirstname(e.target.value)} required />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
              Last name
            </label>
            <input className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="lastname" name="lastname" type="text" value={lastname} placeholder="Haghighi" onChange={e => setLastname(e.target.value)} />
          </div>
        </div>
      </fieldset>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          メールアドレス [必須]
        </label>
        <input className="appearance-none border border-gray-500 rounded w-full py-2 px-3" id="email" name="メールアドレス" placeholder="your@email.address" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          お問い合わせ [必須]
        </label>
        <textarea className="h-48 appearance-none border border-gray-500 rounded w-full py-2 px-3" id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} required />
      </div>
      <button className="mt-6 bg-indigo-800 hover:bg-indigo-700 text-black font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
        送信する
      </button>
    </form>
  );
};
