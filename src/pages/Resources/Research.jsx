import React from "react";
import "./Resources.css";

export default function Research (props) {
  
    return (
      // header container
      <div>

        <div className="flex items-center justify-center">
          <div className="m-8">
            <h2 className="m-6 text-6xl text-black font-bold">
            Research</h2>
          </div>
        </div>

        <div className="pb-10">
          <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-4 ml-20 mr-20 rounded-lg min-w-min">
            <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-10 rounded-lg min-w-min">
              <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://www.un.org/sustainabledevelopment/economic-growth/">United Nations Sustainable Development Goals - Economic Growth</a></li>
              <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://www.cnbc.com/2021/06/06/tech-industry-2020-anti-racism-commitments-progress-check.html">Tech Companies Made Big Pledges To fight Racism Last Year - here’s how they’re doing so far</a></li>
              <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://afrotech.com/report-reveals-67-percent-of-bipoc-employees-in-tech-have-a-diversity-inclusion-team-yet-they-still-arent-supported">Report Reveals 67 Percent of BIPOC in Tech Have a D&I Team, Yet Still Aren’t Supported - AfroTech</a></li>
              <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://www.trustradius.com/vendor-blog/people-of-color-in-tech-report">2020 POC in Tech Report</a></li>
              <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://www.wired.com/story/five-years-tech-diversity-reports-little-progress/">Five Years of Tech Diversity Reports—and Little Progress</a></li>
              <li className="mb-4 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://www.vox.com/2020/6/30/21300294/bipoc-what-does-it-mean-critical-race-linguistics-jonathan-rosa-deandra-miles-hercules/">Why the term “BIPOC” is so complicated, explained by linguists</a></li>
            </div>
          </div>
        </div>

      </div>
    );
  }
