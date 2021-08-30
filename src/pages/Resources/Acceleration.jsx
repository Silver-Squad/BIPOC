import React from "react";
import "./Resources.css";

export default function Acceleration (props) {
  
    return (
      // header container
      <div>

        <div className="flex items-center justify-center">
          <div className="m-8">
            <h2 className="m-6 text-6xl text-black font-bold">Acceleration</h2>
          </div>
        </div>

        <div className="pb-10">
          <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-4 ml-20 mr-20 rounded-lg min-w-min">
            <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-10 rounded-lg min-w-min">

              <button className="bg-test text-white rounded-full w-5/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold mb-4"><a class="btn btn-secondary btn-xl rounded-pill" rel="noopener noreferrer" target="_blank" href="./pdfs/Savanta_BLM_report.pdf" Download>Savanta BLM Everywhere - Download Report PDF</a></button>

              <button className="bg-test text-white rounded-full w-5/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold"><a class="btn btn-secondary btn-xl rounded-pill" rel="noopener noreferrer" target="_blank" href="./pdfs/Racial_Diversity_Roadmap.pdf" Download>Roadmap for Anti-Racism in Tech Pact - Download PDF</a></button>

              <div className="mt-5 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank"href="https://www.fromdayone.co/2021/03/12/how-to-be-anti-racist-in-your-tech-hiring/">How to Be Anti-racist in Your Tech Hiring - From Day One</a></div>

            </div>
          </div>
        </div>

      </div>
    );
  }
