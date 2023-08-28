import Link from "next/link";

function Timeline() {
  const timeline = [
    {
      name: "the first Ecovillage Design Education course in Iran",
      description: "November 2017 we taught the first Ecovillage Design Education course in Iran",
      date: "November 2017",
      dateTime: "2017-11"
    },
    {
      name: "Online Earth Healing Webinars",
      description: "September and October 2016 we held a series of online Earth Healing Webinars to connect with various active environmentally concerned people and organisations in the Fertile Crescent and Europe.",
      date: "October 2016",
      dateTime: "2016-10"
    },
    {
      name: "Trees for Hope is registered as a Scottish Charity",
      description: "September 2016 Trees for Hope is registered as a Scottish Charity, our legal body is created",
      date: "September 2016",
      dateTime: "2016-09"
    },
    {
      name: "investigative journey to Iran",
      description: "investigative journey to Iran, Pupak and Alan Watson Featherstone to seek out allies in the field of earth restoration.  Made numerous connections with environmentally concerned entities",
      date: "April 2005",
      dateTime: "2005-04"
    }
  ];

  return (
    <>
      <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map(item => (
            <div key={item.name}>
              <time dateTime={item.dateTime} className="flex items-center text-sm font-semibold leading-6 text-indigo-600">
                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true" />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
              <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <button type="button" className="mt-8 rounded-full bg-indigo-600 px-4 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <Link href="/history">Learn more</Link>
        </button>
      </div>
    </>
  );
}

export default Timeline;
