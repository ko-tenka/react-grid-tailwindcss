

export default function Widgetes() {
  const widgetTitles = [
    'Task Projects',
    'Open Tasks',
    'New Tasks',
    'Due Today',
    'Due This Week',
  ];

  const cardClass =
    'basis-1/5 border px-3 py-3 rounded-lg border-blue-300';
  const buttonClass =
    'ml-30 inline-flex justify-center items-center gap-1 px-2 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none';

  return (
    <div className="mt-5 ml-8 mr-8 h-50 bg-white rounded-lg flex flex-row justify-between">
      <div className="w-6/6 mt-5 ml-5">
        Manage Widgets

        <form className="group relative bg-white rounded-lg mt-5 mr-5">
          <img
            src="/loop.png"
            alt="поиск"
            className="w-5 absolute left-3 top-2/4 -mt-2.5 text-slate-10 pointer-events-none"
          />
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-lg py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Search anything"
          />
        </form>

        <div className="flex flex-row mt-5 mr-5 gap-4">
          {widgetTitles.map((title) => (
            <div key={title} className={cardClass}>
              {title}
              <button className={buttonClass}>Add</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
