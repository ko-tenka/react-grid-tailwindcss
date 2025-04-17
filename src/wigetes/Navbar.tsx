import { useState } from "react";
import { JSX } from 'react';

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row justify-between mt-8 ml-8 mr-8">
      <div className="basis-2/2">
      <div className=" w-2/6 h-8">
        <form className="group relative bg-white rounded-lg">
        <img src="/loop.png" alt="поиск" className="w-5 absolute left-3 top-2/4 -mt-2.5 text-slate-10 pointer-events-none" />
          <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-lg py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search anything"/>
        </form>
      </div> 
      </div>
      <div className="flex">
      <div className="w-5 h-5 mr-5 mt-2">
      <img src="/bell.png" alt="Колокольчик" className="w-5 h-5 rounded-full" />
      </div>
      <div className="relative inline-block text-left">
        {/* Кнопка с иконкой или текстом */}
        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none">
          <img src="/flagEg.png" alt="Флаг" className="w-5 h-5 rounded-full" />
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

      {/* Выпадающий список */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg left-0 -translate-x-1/2">

          <ul className="py-1 text-sm text-gray-700">
            <li>
              <button className="w-full px-4 py-2 bg-blue-200 text-left flex items-center gap-2 text-black rounded-md">
                <img src="/flagEg.png" alt="Флаг Англии" className="w-5 h-5 rounded-full" />
                Englesh
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 hover:bg-gray-100 text-left flex items-center gap-2 text-black rounded-md">
                <img src="/flagDe.png" alt="Флаг Германии" className="w-5 h-5 rounded-full" />
                German
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 hover:bg-gray-100 text-left flex items-center gap-2 text-black rounded-md">
                <img src="/flagIta.png" alt="Флаг Италии" className="w-5 h-5 rounded-full" />
                Italian
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 hover:bg-gray-100 text-left flex items-center gap-2 text-black rounded-md">
                <img src="/flagFr.png" alt="Флаг Франции" className="w-5 h-5 rounded-full" />
                French
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 hover:bg-gray-100 text-left flex items-center gap-2 text-black rounded-md">
                <img src="/flagRu.svg" alt="Флаг России" className="w-5 h-5 rounded-full" />
                Russian
              </button>
            </li>
          </ul>
        </div>
      )}
      </div>
    </div>
    </div>
  );
}


