import './Profile.css';
import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as profileService from '../../services/profileService'

export default function Profile(props) {
    const {id} = useParams()
    const [search, setSearch] = useState('')
    const [profile, setProfile] = useState(null)

    useEffect(() => {
      async function fetchProfile(){
        const profileData = await profileService.getOne(id)
        setProfile(profileData)
      }
      fetchProfile()
    }, [])
    

    return (
      <main>
        {/* <SearchBar search={search} setSearch={setSearch}/> */}
        <SearchBar search={search} setSearch={setSearch}/>

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
              <div className="ml-2 my-auto w-3/5">
                <h1 className='small-info-title'>{profile?.name}</h1>
                <ul className='small-info'>
                  <li>{profile?.city}, {profile?.state.toUpperCase()} {profile?.zip}</li>
                  <li></li>
                  {/* <li>{profile?.website}</li> */}
                </ul>
              </div>
              {/* {links and approved badge} */}
              <div className="my-auto w-1/5">
                <div className='flex justify-end mb-4'>
                  <img
                  width='50'
                  src="/images/icons/badge.svg"
                  alt="building"
                  className=""
                  /> 
                </div>
                <div className='flex justify-end'>
                  {/* <a href={profile?.linkedin} rel="noopener noreferrer" target="_blank"> */}
                  <img
                  width='25'
                  src="/images/icons/icons8-linkedin.svg"
                  alt="building"
                  className=""
                  /> 
                  {/* </a> */}
                  {/* <a href={profile?.website} rel="noreferrer" target="_blank"> */}
                  <img
                  width='25'
                  src="/images/icons/globe.svg"
                  alt="building"
                  className="ml-2"
                  />   
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* score section */}
          <div className="score-info ml-8 h-44 mt-10 w-2/5 bg-gray-200 overflow-hidden rounded-lg">
            <div className="flex justify-end mr-4">
              <img
              width='35'
              src="/images/icons/bookmark.svg"
              alt="building"
              className='icon'
              />
            </div>
            <div className="flex justify-center px-4 sm:px-6">
                
                <div>
                  <h1 className="score-h1 text-4xl font-medium">D&#38;I Score</h1>
                  <p className='score-p text-7xl'>90%</p>
                </div>
                
              
                
              {/* future sections for the test */}

              {/* <div className="bottom-half inline-flex">
                <div className='w-1/3'>
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
              </div>  */}

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
                  <div className='overview-content mt-10'>
                  <p>Future versions of the test will be broken up into the following different categories: </p>
                  <ul className='mt-10'>
                      <li>Trajectory</li>
                      <li>Diversity</li>
                      <li>Inclusion</li>
                      <li>Hiring</li>
                  </ul>
                  <p className='mt-4'>These categories will be used to give a detailed breakdown of the companies Diversity &#38; Inclusion Score </p>
                  </div>
                </div>
                  
                

                <div className="tab-pane fade" id="initiatives" role="tabpanel" aria-labelledby="initiatives-tab">
                  <div>
                    <h1>Company's Initiatives</h1>
                  </div>
                  <div className='flex mt-4'>
                      <ul className='initiatives mx-auto'>
                          <li>{profile?.initiativeOne}</li>
                          <li>{profile?.initiativeTwo}</li>
                          <li>{profile?.initiativeThree}</li>
                      </ul>    
                  </div>
                </div>
                  

                <div className="tab-pane fade" id="demographics" role="tabpanel" aria-labelledby="demographics-tab">
                  <div className='mx-auto'>
                    <div>
                      <h1>Company's Demographics</h1>
                    </div>
                    <div className='flex mt-10'>
                      <ul className='demo mx-auto'>
                        <h2>Percentage of minority employees</h2>
                        <li>{profile?.empRatio}</li>
                        <h2>Percentage of minority employees in leadership positions</h2> 
                        <li>{profile?.leaderRatio}</li>
                      </ul>  
                    </div>  
                  </div>
                </div>

                <div className="tab-pane fade" id="score" role="tabpanel" aria-labelledby="score-tab">
                  <div>
                        <h1>Detailed Score</h1>
                  </div>
                  <div className='overview-content mt-10'>
                    <p>A detailed breakdown of how the company responded to each question will be added at a later date</p>
                  </div>
                </div>
                
                {/* Inclusion index to be included in future version  */}
                {/* <div className="tab-pane fade" id="inclusion" role="tabpanel" aria-labelledby="inclusion-tab">Inclusion Index</div> */}
              </div>
            </div>  
          </div>
        </div>
      </main>
    )
}



