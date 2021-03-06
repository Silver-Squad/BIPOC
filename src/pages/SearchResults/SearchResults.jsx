import SearchBar from '../../components/SearchBar/SearchBar'
import React, { useState, useEffect } from 'react';
import { useForm } from '../../hooks/useForm'
import { useLocation } from 'react-router-dom';
import * as profileService from '../../services/profileService';
import ProfilePreview from '../../components/ProfilePreview/ProfilePreview';


const SearchResults = props => {
    const [allprofiles, setAllprofiles] = useState([]);
    const query = useLocation()
    // console.log(q)
    const [search, setSearch] = useState('')
    const [filteredResults, setFilteredResults] = useState([]);
    // const {currentUser} = props;

    useEffect(() => {
        (async function() {
            let profiles = await profileService.getAll();
            setAllprofiles(profiles);
            const q = query?.search?.split('=')[1] || ""
            if (q) setSearch(q)
        })();
    }, [])
    
    useEffect(() => {
        setFilteredResults(
            allprofiles.filter(profile => profile.name.toLowerCase().includes(search.toLowerCase()))   
        )      
    }, [search])

    // returns a list of all profiles if search box is left blank
    const searchResults = search ? filteredResults : allprofiles;
    console.log(searchResults)
    
  return (
    <>
        <section className="mb-20 w-3/4 mt-6 mx-auto">
            {/* <div id="search" className="w-2/5 flex items-center mb-4"> */}
                {/* <p>Search: &nbsp;</p>  */}
            <SearchBar search={search} setSearch={setSearch}/>
            {/* </div> */}
            <ul className="mt-10 space-y-3">
                {searchResults.map((profile, idx) => (
                    <li key={idx} className="bg-white shadow overflow-auto rounded-md px-6 py-4">
                        <ProfilePreview key={idx} user={props.user} profile={profile} />
                    </li> 
                ))}
            </ul>
        </section>
        
        <div className="mb-4"></div>
    </>
  )
}

export default SearchResults;