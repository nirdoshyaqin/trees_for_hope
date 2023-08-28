function Team() {
  const people = [
    {
      name: "Pupak Haghighi",
      role: "Founder and Project Coordinator",
      imageUrl: "/pupak.jpg",
      bio: "Pupak is passionate about wholeness, be it people or places.  She finds connecting with nature a deep source of healing.  For her, initiating Trees for Hope was a natural response to heal the ecological and human damages she had witnessed in her environments. ",
      twitterUrl: "#",
      linkedinUrl: "#"
    },
    {
      name: "Alan Watson Featherstone",
      role: "Trustee",
      imageUrl: "/alan.jpg",
      bio: "Alan Watson Featherstone is an ecologist, nature photographer and inspirational public speaker. In 1986 he founded the award-winning Scottish conservation charity, Trees for Life, and was its executive director for almost 30 years. During that time it became the leading organisation working to restore the Caledonian Forest in Scotland and took on ownership of the 10,000 acre Dundreggan Estate in Glenmoriston as its flagship project for native woodland recovery.",
      twitterUrl: "#",
      linkedinUrl: "#",
      youtubeUrl: "https://www.youtube.com/watch?v=nAGHUkby2Is",
      homePageUrl: "http://alanwatsonfeatherstone.com/blog/"
    },
    {
      name: "Minni Jain",
      role: "Trustee / Director",
      imageUrl: "/minni.jpg",
      bio: "For over 25 years MINNI JAIN has been working with communities to regenerate their landscapes and lives. She is the Operations Director of The Flow Partnership, working on community-led management of droughts and floods across Africa, India and Europe. Minni is also on the boards of the Biodynamic Land Trust, the Agroforestry Research Trust and the Berkana Institute, USA.",
      twitterUrl: "#",
      linkedinUrl: "#"
    },
    {
      name: "Philip Franses",
      role: "Trustee / Director",
      imageUrl: "/philip.png",
      bio: "After finishing a maths degree at Oxford, I came to a turning point in my life – either settle for a for the glittering career in finance or instead, follow a feeling of whole potential.. This led me to buying a bicycle to ride towards Africa, a six month trip which convinced me that Europe should match its technological advancement with spiritual maturity. ",
      twitterUrl: "#",
      linkedinUrl: "#"
    },
    {
      name: "Bahar Ghafelehbashi",
      role: "Trustee",
      imageUrl: "/bahar.jpg",
      bio: "Bahar is born in Iran, in city of Tehran and has been living in Canada for the past 22 years.  A registered psychotherapist working mostly in Toronto and a student of consciousness from an early age. Her main mission in life is weaving cultures and wisdoms of the world as steps towards healing of our human relationships in relation to all sentient beings.  ",
      twitterUrl: "#",
      linkedinUrl: "#"
    }

    // More people...
  ];

  return (
    <>
      <div className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
          <div className="max-w-2xl xl:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About the team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">We are a diverse team, coming from backgrounds of rewilding, holistic science, water and communities, psychology, and social sciences. The combination of our expertise and passion to serve the purposes and missions of Trees for Hope makes a potent group to deliver our work.</p>
          </div>
          <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
            {people.map(person => (
              <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
                <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <div className="max-w-xl flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                  <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                  <ul role="list" className="mt-6 flex gap-x-6">
                    <li>
                      <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Team;
