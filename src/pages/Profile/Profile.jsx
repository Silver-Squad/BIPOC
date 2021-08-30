import './Profile.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar'

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
        {/* <SearchBar search={search} setSearch={setSearch}/> */}
        <SearchBar />


        {/* top card */}
        <div className="w-5/6 mx-auto flex">
          
          {/* company info section */}
          <div className="h-44 mt-10  w-3/5 bg-gray-200 overflow-hidden shadow rounded-lg">
            {/* {company img} */}
            <div className="flex mt-4 px-4 py-5 sm:px-6">
            <img
            width='100'
            src="/images/icons/icons8-company-100.png"
            alt="building"
            className=""
            /> 
            {/* {company information} */}
            <div classname="">
              <h1>Company Name</h1>
              <ul>
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
            <div className="justify-end w-10">
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
          <div className="ml-8 h-44 mt-10 w-2/5 bg-gray-200 overflow-hidden shadow rounded-lg">
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
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="overview-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Initiatives</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="demographics-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="demographics-tab" aria-selected="false">Demographics</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="score-tab" data-bs-toggle="tab" href="#score" role="tab" aria-controls="score" aria-selected="false">Detailed Score</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="inclusion-tab" data-bs-toggle="tab" href="#inclusion" role="tab" aria-controls="inclusion" aria-selected="false">Inclusion Index</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="tabs  bg-current h-16 px-4 py-5 sm:px-6">
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
          </div> */}

          {/* content section */}

          <div className="bg-gray-300 h-96 px-4 py-5 sm:p-6">
            <div className="bg-white w-7/8 mx-auto">
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">Overview</div>

                <div class="tab-pane fade" id="overview" role="tabpanel" aria-labelledby="initiatives-tab">Initiatives</div>

                <div class="tab-pane fade" id="initiatives" role="tabpanel" aria-labelledby="demographics-tab">Demographics</div>

                <div class="tab-pane fade" id="score-tab" role="tabpanel" aria-labelledby="score-tab">Detailed Score</div>

                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Inclusion Index</div>
              </div>
            </div>  
          </div>
        </div>
      </main>
    )


}



