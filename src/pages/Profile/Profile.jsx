import './Profile.css';
import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar'

export default function Profile(props) {

    return (
      <main>
        {/* <SearchBar search={search} setSearch={setSearch}/> */}
        <SearchBar />

        {/* top card */}
        <div className="w-5/6 mx-auto flex">
          {/* company info section */}
          <div className="comp-info h-44 mt-10 w-3/5 bg-gray-200 overflow-hidden rounded-lg">
            {/* {company img} */}
            <div className="flex justify-center h-full px-4 py-4 sm:px-6">
              <div className='my-auto'>
              <img
              width='100'
              src="/images/icons/icons8-company-100.png"
              alt="building"
              className=""
              /> 
              </div>
              {/* {company information} */}
              <div className="ml-2 my-auto w-3/5 ">
                <h1 className='small-info-title'>Company Name</h1>
                <ul className='small-info'>
                  <li>San Francisco, USA</li>
                  <li>123-456-7890</li>
                  <li>Founded 2021</li>
                </ul>
                {/* <div>
                <ul>
                  <li>San Francisco, USA</li>
                  <li>123-456-7890</li>
                </ul>  
                </div> */}
              </div>
              {/* {links and approved badge} */}
              <div className="my-auto w-1/5">
                <img
                width='50'
                src="/images/icons/badge.svg"
                alt="building"
                className=""
                /> 
                <img
                width='25'
                src="/images/icons/icons8-linkedin.svg"
                alt="building"
                className=""
                /> 
                <img
                width='25'
                src="/images/icons/globe.svg"
                alt="building"
                className=""
                />   
              </div>
            </div>
          </div>

          {/* score section */}
          <div className="score-info ml-8 h-44 mt-10 w-2/5 bg-gray-200 overflow-hidden rounded-lg">
            <div className="flex px-4 py-5 sm:px-6">
              <div className="align-center w-2/3">
                <h1 className="text-3xl font-medium">Overall Score</h1>
                <p className='text-7xl'>99%</p>
              </div>
              <div className='w-1/3'>
                <div className="absolute pt-0 mt-0">
                  <img
                  width='25'
                  src="/images/icons/bookmark.svg"
                  alt="building"
                  className="float-right"
                  />
                </div>
                
                <ul className='text-left'>
                  <li>Trajectory</li>
                  <li>Diversity</li>
                  <li>Inclusion</li>
                  <li>Hiring</li>
                </ul>
                <ul className="text-right">
                  <li>80%</li>
                  <li>80%</li>
                  <li>80%</li>
                  <li>80%</li>
                </ul>
              </div>  
            </div>
          </div>
        </div>


        {/* bottom card */}
        <div className="mt-10 mb-10 mx-auto w-5/6 overflow-hidden shadow rounded-lg">

          {/* tab section */}
          <div className="tabs bg-current h-16 px-4 pt-3 pb-0 sm:px-6">
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <ul className="nav nav-tabs mx-auto px-30" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="overview-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="initiatives-tab" data-bs-toggle="tab" href="#initiatives" role="tab" aria-controls="initiatives" aria-selected="false">Initiatives</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="demographics-tab" data-bs-toggle="tab" href="#demographics" role="tab" aria-controls="demographics" aria-selected="false">Demographics</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="score-tab" data-bs-toggle="tab" href="#score" role="tab" aria-controls="score" aria-selected="false">Detailed Score</a>
                </li>
                {/* <li className="nav-item" role="presentation">
                  <a className="nav-link" id="inclusion-tab" data-bs-toggle="tab" href="#inclusion" role="tab" aria-controls="inclusion" aria-selected="false">Inclusion Index</a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* content section */}

          <div className="bg-gray-300 h-auto px-4 py-4 sm:p-6">
            <div className="tab-bg-inner bg-white w-7/8 h-full ">
              <div className="px-2 tab-content" id="myTabContent">

                <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                  <h1>Overview</h1>
                </div>

                <div className="tab-pane fade" id="initiatives" role="tabpanel" aria-labelledby="initiatives-tab">
                  <div>
                    <h1>Company's Initiatives</h1>
                  </div>
                  <div className='flex'>
                    <div className='w-1/2 '>Left
                      <div className='w-1/2'>
                        <ul className=''>
                          <li className=''>1.</li>
                          <li className=''>2.</li>
                          <li className=''>3.</li>
                        </ul>
                      </div>
                      <div className='block w-1/2'>
                        <ul className=''>
                          <li className=''>Title</li>
                          <li className=''>Title</li>
                          <li className=''>Title</li>
                        </ul>
                      </div>
                    </div>
                    <div className='w-1/2'>Right Side
                      <ul className='right-side'>
                          <li>Initiative One Content</li>
                          <li>Initiative Two Content</li>
                          <li>Initiative Three Content</li>
                      </ul>    
                    </div>
                  </div>
                
                
                </div>
                  

                <div className="tab-pane fade" id="demographics" role="tabpanel" aria-labelledby="demographics-tab">


                </div>

                <div className="tab-pane fade" id="score" role="tabpanel" aria-labelledby="score-tab">Detailed Score</div>
                
                {/* Inclusion index to be included in future version  */}
                {/* <div className="tab-pane fade" id="inclusion" role="tabpanel" aria-labelledby="inclusion-tab">Inclusion Index</div> */}
              </div>
            </div>  
          </div>
        </div>
      </main>
    )
}



