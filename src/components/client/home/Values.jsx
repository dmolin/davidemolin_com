const Value = ({ children }) => (
  <li className="flex flex-row gap-2">
    -
    <div>{children}</div>
  </li>
);

const Values = props => {
  return (
    <section className="bg-gray-100 p-4 bg-london bg-repeat-x bg-left-bottom pt-1 pb-12">
      <div className="page-container-medium">
        <header className="pb-8 text-center lg:px-16">
          <h1 className="section-title">My values</h1>
          <p>Here are some of the things that make me happy and I look for and some of those that make this developer unhappy!</p>
        </header>

        <div className="flex flex-col gap-4 md:flex-row">
          <section className="flex-1">
            <h2 className="section-header">Happy days!</h2>

            <ul>
              <Value>100% Remote working (a <strong>VERY HAPPY</strong> puppy!)</Value>
              <Value>Linux!</Value>
              <Value>Having the time to balance work and private life</Value>
              <Value>SCRUM/Kanban</Value>
              <Value>Let's do-it approach</Value>
              <Value>Flat/horizontal hierarchies</Value>
              <Value>Unit/E2E Testing</Value>
            </ul>
          </section>
          <section className="flex-1">
            <h2 className="section-header">Sad face</h2>
            <ul>
              <Value>Traveling</Value>
              <Value>Forced/Institutionalized <a className="link" href="https://en.wikipedia.org/wiki/Pair_programming" target="_blank">"Agile Alliance XP pair-programming"</a>
                <span className="text-sm"> (this is not the same as 'working/brainstorming with a colleague".. <b>I love that!</b>)</span></Value>
              <Value>MS Windows...</Value>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Values;
