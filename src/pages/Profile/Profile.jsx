import './Profile.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { SortAscendingIcon, UsersIcon } from '@heroicons/react/solid'

const tabs = [
  { name: 'Overview', href: '#overview', current: true,},
  { name: 'Initiatives', href: '#initiatives', current: false,},
  { name: 'Demographics', href: '#demographics', current: false,},
  { name: 'Detailed Score', href: '#detailedscore', current: false,},
  { name: 'Inclusion Index', href: '#inclusionindex', current: false,},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Profile(props) {
    let history = useHistory();

    return (
      <main>
        <div className="mt-4 w-5/6 mx-auto flex">
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="name"
              id="name"
              className="pl-10 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full mr-4"
              placeholder="Company Name"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center px-20 py-2 border border-transparent text-md font-medium rounded-full shadow-sm text-white bg-yellow-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search
          </button>
        </div>
        {/* top card */}
        <div className="w-5/6 mx-auto flex">

          {/* company info section */}
          <div className="h-44 mt-10 mx-auto w-3/5 bg-gray-200 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              
            </div>
          </div>

          {/* score section */}
          <div className="ml-5 h-44 mt-10 mx-auto w-2/5 bg-gray-200 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              
            </div>
          </div>
        </div>


        {/* bottom card */}
        <div className="mt-10 mx-auto w-5/6 overflow-hidden shadow rounded-lg">

          {/* tab section */}
          <div className="tabs  bg-current h-16 px-4 py-5 sm:px-6">
        
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {tabs.map((item, idx) => (
                          <a key={idx}
                            href={item.href}
                            className={classNames(
                              item.current ? 'border-b-2 font-medium border-gray-300 pt-1 pb-4 px-10 rounded-t-2xl bg-gray-300 text-black' : ' text-white inline-flex items-center px-1 pt-1  text-md font-medium pb-5'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                </div>
            
          </div>

          {/* content section */}
          <div className="bg-gray-300 h-96 px-4 py-5 sm:p-6">
            <div className="bg-white w-7/8 mx-auto">
             <h1 id="overview">Overview</h1>
             <h1 id="initiatives">Initiatives</h1>
            </div>  
          </div>
        </div>
      </main>
    )


}