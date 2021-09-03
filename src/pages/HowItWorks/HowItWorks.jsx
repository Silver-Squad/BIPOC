

export default function HowItWorks () {

  return (
    // header container
    <div className="ml-20 mr-20">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
            <div className="mt-8 ml-6">
            <h2 className="mt-6 text-6xl text-black font-bold flex">How It Works</h2>
            <h2 className="mt-6 text-md text-black flex">We utilize qualitative and quantitative data to create a comprehensive score of a company’s diversity and inclusion. We ask companies to be transparent and provide the data and information needed in order to receive a score.</h2>
            <h2 className="mt-6 text-md text-black flex">These scores are imperfect and subject to change just as people and companies are. We focus on providing the tools for success and creating diverse teams to reflect a diverse world.</h2>
            </div>
            <div className="mt-10">
            <img width="500"
            src="/images/undraw-todo.png"
            alt='team-spirit'
            />
            </div>
        </div>
      </div>

      <div>
        <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-4 mt-10 ml-40 mr-40 rounded-lg min-w-min">
          <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-10 rounded-lg min-w-min">
            <div className="mb-4">
            What we ask for:
            </div>
            <li className="mb-1">Company mission and general information</li>
            <li className="mb-1">Demographic makeup of the company</li>
            <li className="mb-1">Gartner Inclusion Index</li>
            <li className="mb-1">Company Hiring Practices</li>
          </div>
        </div>
      </div>

      {/* steps section */}
      <div className="ml-4 mr-4 bg-white">
        <div className="pt-6">
        <h2 className="pb-2 text-4xl text-black font-bold flex items-center justify-center">The 4 steps to get a report</h2>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">

            <div>
            <img width="300"
            src="/images/undraw-focus.png"
            alt='team-spirit'
            />
            </div>

            <div>
              <div className="bg-none border-none box-border pb-7 pl-4 mt-5">
                <div className="font-extrabold text-6xl mt-0 absolute">
                1
                </div>
              </div>

              <div className="bg-firstbox border-none leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min mr-10">
                <div className="ml-8 p-4">
                Companies answer the questions in the D&I Test and fill out the data needed for a comprehensive score
                </div>
              </div>
            </div>

            <div>
              <div className="bg-none border-none box-border pb-7 pl-4 mt-5">
                <div className="font-extrabold text-6xl mt-0 absolute">
                2
                </div>
              </div>
              <div className="bg-altbox border-none leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min mr-4">
                <div className="ml-10 p-4">
                We compile the data and information into a report that can be seen through percentages and statements
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <img width="300"
              src="/images/undraw-data.png"
              alt='team-spirit'
              />
            </div>

            <div>
              <img width="300"
              src="/images/undraw-authentic.png"
              alt='team-spirit'
              />
            </div>

            <div>
              <div className="bg-none border-none box-border pb-7 pl-4 mt-5">
                <div className="font-extrabold text-6xl mt-0 absolute">
                3
                </div>
              </div>

              <div className="bg-firstbox border-none leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min mr-10">
                <div className="ml-8 p-4">
                Set up your company account and verify the claim on the company
              </div>
            </div>
          </div>

            <div>
              <div className="bg-none border-none box-border pb-7 pl-4 mt-5">
                <div className="font-extrabold text-6xl mt-0 absolute">
                4
                </div>
              </div>

              <div className="bg-altbox border-none leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min mr-4">
                <div className="ml-10 p-4">
                Receive your score and overall report via e-mail and listed on your profile
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <img width="300"
              src="/images/undraw-filing.png"
              alt='team-spirit'
              />
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
