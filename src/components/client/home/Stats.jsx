const Stats = (props) => {
  const _renderStat = (stat, title) => (
    <div className="flex-1 flex flex-col text-center py-4 uppercase text-lg pt-6 lg:pt-12">
      <span className="text-3xl font-bold">{stat}</span>
      <span className="title">{title}</span>
    </div>
  );

  const yoe = new Date().getFullYear() - 1995;
  const yrsSinceSage = new Date().getFullYear() - 2023;
  const hrsOfTraining = (500 * yoe).toLocaleString();
  const projectsWorked = (51 + 2 * yrsSinceSage).toLocaleString();

  return (
    <section className="bg-london bg-neutral-600 bg-repeat-x bg-left-bottom min-h-[11em]">
      <div className="container mx-auto max-w-screen-lg flex flex-col md:flex-row flex-wrap min-h-[10em] text-white">
        {_renderStat(`${yoe}`, "years of experience")}
        {_renderStat(hrsOfTraining, "hours of additional training")}
        {_renderStat("26", "clients served")}
        {_renderStat(projectsWorked, "projects worked")}
      </div>
    </section>
  );
};

export default Stats;
