import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function Vision() {
  return (
    <>
      <div className="mt-32 overflow-hidden sm:mt-40">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Vision</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">The Wider Fertile Crescent area is restored to full ecological health with all the native constituent species and people living in harmony and balance with the land. We envision a transformation from barren, brown landscapes to lush green ecosystems with rich fertile soil and abundant water.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">Based on a deep personal connection with and care for the land and formed by mastery of arts and crafts, bioregional networks of ecovillages and communities are self sufficient with regenerative agriculture, sustainable energy, transport, and circular economies. </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">We collaborate with the larger planetary networks of organisations and civil societies while soulful medicine, education, and culture feeds various needs within the network. </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image loader={imageLoader} src="top/top_vision_01.jpg" alt="Trees for Hope Hero Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" width={592} height={422} />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <Image loader={imageLoader} src="top/top_hero_11.jpeg" alt="Trees for Hope Vision Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" width={384} height={288} />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image loader={imageLoader} src="top/top_vision_04.jpg" alt="Trees for Hope Vision Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" width={384} height={288} />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image loader={imageLoader} src="top/top_vision_03.jpg" alt="Trees for Hope Vision Image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" width={384} height={288} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vision;
