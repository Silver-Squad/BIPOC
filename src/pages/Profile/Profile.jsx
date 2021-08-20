import './Profile.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { SortAscendingIcon, UsersIcon } from '@heroicons/react/solid'


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
        <div className="h-44 mt-10 mx-auto w-5/6 bg-black overflow-hidden shadow rounded-lg divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            
          </div>
        </div>

        <div className="h-3/4 mt-10 mx-auto w-5/6 bg-black overflow-hidden shadow rounded-lg divide-y divide-gray-200">
          <div className="h-16 px-4 py-5 sm:px-6">
            
          </div>
          <div className="h-96 px-4 py-5 sm:p-6">
            
          </div>
        </div>
      </main>
    )


}