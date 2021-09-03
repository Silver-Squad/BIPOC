import React from "react";

export default function Acceleration (props) {
    return (
      // header container
      <div>

      <div className="flex items-center justify-center pt-10 pb-10 pl-4 pr-4">
        <div className="flex items-center justify-center bg-altbox border-none leading-4 pl-4 pr-4 box-border rounded-lg">
          <div className="ml-6 mt-6 mb-6 text-6xl text-black font-bold">
          Acceleration</div>
          <div className="flex items-center justify-center bg-altbox border-none leading-4 box-border h-130 w-100 p-4 rounded-lg text-black font-bold font-style: italic">
            A collection of resources of different diversity intiatives that companies can use to practice within their workplace
          </div>
        </div>
      </div>

        <div className="pb-10">
          <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-4 ml-20 mr-20 rounded-lg min-w-min">
            <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-10 rounded-lg min-w-min">

              <button className="bg-test text-white rounded-full w-5/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold mb-4"><a class="btn btn-secondary btn-xl rounded-pill" rel="noopener noreferrer" target="_blank" href="./pdfs/Savanta_BLM_report.pdf" Download>Savanta BLM Everywhere - Download Report PDF</a></button>

              <button className="bg-test text-white rounded-full w-5/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold"><a class="btn btn-secondary btn-xl rounded-pill" rel="noopener noreferrer" target="_blank" href="./pdfs/Racial_Diversity_Roadmap.pdf" Download>Roadmap for Anti-Racism in Tech Pact - Download PDF</a></button>

              <button className="bg-test text-white rounded-full w-5/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold mt-4"><a class="btn btn-secondary btn-xl rounded-pill" rel="noopener noreferrer" target="_blank" href="https://www.fromdayone.co/2021/03/12/how-to-be-anti-racist-in-your-tech-hiring/">How to Be Anti-racist in Your Tech Hiring - An article from Day One</a></button>

            </div>
          </div>
        </div>

      </div>
    );
  }
