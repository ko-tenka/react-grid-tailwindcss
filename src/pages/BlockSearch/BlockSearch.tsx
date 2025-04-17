import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function BlockSearch() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/work');
    };
  return (
    <div className='mt-5 ml-8 mr-8 h-30 bg-white rounded-lg flex flex-row justify-between'>
      <div className='flex mt-4 ml-5'>
      <div>
        Filters
      </div>
      <div className=" w-4/4 h-8 ml-3">
      <div>
        <form className="group relative bg-white rounded-lg">
          <img src="/loop.png" alt="поиск" className="w-5 absolute left-3 top-2/4 -mt-2.5 text-slate-10 pointer-events-none" />
          <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-lg py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search anything"/>
        </form>
        </div>
        <div>
        <button className='mt-2 inline-flex justify-center items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none'>
          + Add Filter
        </button>
        </div>
      </div> 
      </div>
      <div className='flex mt-4'>
      <div>
        <button className='mr-5 inline-flex justify-center items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none' onClick={handleClick}>
          Edit Dashboard
        </button>
      </div>
      <div >
      <button onClick={() => setIsOpen(!isOpen)} className="mr-5 inline-flex justify-center items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none">
          Custom View
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

      {/* Выпадающий список */}
      {isOpen && (
        <div className="absolute z-10 w-50 bg-white border border-gray-200 rounded-md shadow-lg right-0 -translate-x-2/8">

          <ul className="py-1 text-sm text-gray-700">
            <li>
              <button className="w-full px-4 py-2 hover:bg-gray-100 text-left flex items-center gap-2 text-black rounded-md">
                Main Project view
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 hover:bg-gray-100 text-left flex items-center gap-2 text-black rounded-md">
                Handover Report
              </button>
            </li>
          </ul>
        </div>
      )}
      </div>
      </div>
    </div>
  )
}

