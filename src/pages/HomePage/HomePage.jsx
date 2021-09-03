import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar"

export default function Homepage (props) {
  
    return (
      // header container
      <div>
        <div className="flex mb-4 mt-1 justify-center">
          <div className="flex justify-center">
            <img width="500"
            src="/images/undraw-teamspirit.png"
            alt='team-spirit'
            />
          </div>
          <div className="mt-14">
          <h2 className="mt-6 text-4xl text-black font-bold flex items-center justify-left">Diverse world.</h2>
          <h2 className="mt-6 text-6xl text-black font-extrabold flex items-center justify-left">Diverse team.</h2>
          </div>
        </div>

      {/* search section */}
      <div className="bg-homepage">
        <div className="pt-6">
        <h2 className="pl-20 text-4xl text-white flex items-center justify-left">Work culture found easily...</h2>
        <h2 className="pl-20 text-1xl text-white flex items-center justify-left">Search for a company's D&I score here</h2>
        </div>
        <div className="pl-20 pt-2 pb-8">
        <SearchBar />
          {/*<div className="bg-white w-10/12 flex items-center justify-center rounded-full shadow-xl">
             <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="🔍   company name">
            </input>
            <div className="p-4">
              <button className="bg-search text-white rounded-full p-2 w-40 hover:bg-altbox focus:outline-none flex items-center justify-center font-bold">
                Search
              </button> 
            </div>
              
          </div>*/}
        </div>
      </div>

      {/* steps section */}
      <div className="ml-4 mr-4 bg-white">
        <div className="pt-6">
        <h2 className="pb-2 text-4xl text-black flex items-center justify-center">Get your company score in 4 steps</h2>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 gap-4">

            <div className="bg-none border-none box-border p-4">
              <div className="font-extrabold text-6xl mt-1 absolute">
              1
              </div>
            </div>
            <div className="bg-none border-none box-border p-4">
              <div className="font-extrabold text-6xl mt-1 absolute">
              2
              </div>
            </div>
            <div className="bg-none border-none box-border p-4">
              <div className="font-extrabold text-6xl mt-1 absolute">
              3
              </div>
            </div>
            <div className="bg-none border-none h-130 w-275 p-4">
              <div className="font-extrabold text-6xl mt-1 absolute">
              4
              </div>
            </div>

            <div className="bg-firstbox border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
              <div className="ml-10">
              Answer the questions in the D&I Test and fill out the data needed for a comprehensive score
              </div>
            </div>
            <div className="bg-altbox border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
              <div className="ml-12">
              Set up your company account and verify the claim on the company
              </div>
            </div>
            <div className="bg-homepage border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
              <div className="ml-12">
              Set up your company account and verify the claim on the company
              </div>
            </div>
            <div className="bg-altbox border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
              <div className="ml-12">
              Receive your score via e-mail and listed on your profile
              </div>
            </div>

          </div>
        </div>

        <div className="p-10 pt-6 pb-8">
            <div className="p-4 flex items-center justify-center">
              <button className="bg-test text-white rounded-full w-5/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold">
              <a rel="noopener noreferrer" href="/test">
              Begin Test</a>
              </button>
            </div>
        </div>
      </div>
      </div>
    );
  }
