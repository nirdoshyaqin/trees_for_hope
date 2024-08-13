function Mission() {
  const stats = [
    { label: "Rewilding with oneself and nature", value: "Rewilding" },
    { label: "being one with Nature", value: "Reconnect" },
    { label: "Activating the Potentials", value: "Revive" }
  ];
  return (
    <>
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mt-40 mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">*Trees for Hope will assist in the emergence of a bioregional network of ecovillages and communities engaged in rewilding themselves and their local ecosystems in the Wider Fertile Crescent area. </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p className="text-xl leading-8 text-gray-600">* This will be achieved by shared positive and practical ecological restoration work, drawing on local knowledge and wisdom.</p>
                <p className="text-xl leading-8 text-gray-600 mt-10">*We aid in removing the illusory barriers of separation, so a path will be revealed for the regeneration of the area and the restoration of its natural fertility. </p>
                <p className="text-xl leading-8 text-gray-600 mt-10">*We offer practical work to rejuvenate the land, accessing the experience of the existing networks of ecovillages and rewilding projects, which provides creative opportunities for healing the self, the history and cultural divides.</p>
                <p className="text-xl leading-8 text-gray-600 mt-10">*We create a bridge between the Wider Fertile Crescent and the rest of the world to allow for a healing exchange enabling love, peace and hope to be manifested.</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map(stat => (
                  <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
