import { UsersIcon } from '@heroicons/react/solid'


const SearchBar = props => {

  return (
    <div className="mt-4 w-5/6 mx-auto flex">
          <form>
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="name"
              id="name"
              onChange={props.setSearch}
              className="pl-10 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-10 rounded-full mr-4"
              placeholder="Company Name"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center px-20 py-2 border border-transparent text-md font-medium rounded-full shadow-sm text-white bg-yellow-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search
          </button>
          </form>
        </div>
  )
}

export default SearchBar;