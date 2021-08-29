import SearchBar from '../../components/SearchBar/SearchBar'
import React, { useState, useEffect } from 'react';
import { useForm } from '../../hooks/useForm'
import { useLocation } from 'react-router-dom';
import * as profileAPI from '../../services/profileService';




const SearchResults = props => {

    const [allprofiles, setAllprofiles] = useState([]);
    const [search, setSearch] = useForm({
        search: "", 
    })
    const [filteredResults, setFilteredResults] = useState([]);
    const {pathname} = useLocation();
    const {currentUser} = props;

    useEffect(() => {
        (async function() {
            let profiles = [];
            if (pathname === '/search/all' && !!currentUser === false) {
                profiles = await profileAPI.getAllPublic();
            } else if (pathname === '/search/all') {
                const userPrivateprofiles = await profileAPI.getPrivateByCurrentUser(currentUser._id);
                const allPublicprofiles = await profileAPI.getAllPublic();
                profiles = userPrivateprofiles.concat(allPublicprofiles);
            } else if (pathname === '/search/mysnips') {
                profiles = await profileAPI.getAllByCurrentUser(currentUser._id);
            }
            setAllprofiles(profiles);
        })();
    }, [pathname, currentUser])

    
    useEffect(() => {
        setFilteredResults(
            allprofiles.filter(profile => profile.title.toLowerCase().includes(search.text.toLowerCase()))   
        )      
    }, [search.text])

    // returns a list of all profiles if search box is left blank
    const searchResults = search.text ? filteredResults : allprofiles;
    console.log(searchResults)
    
  return (
    <>
        <section className="w-3/4 mt-6 mx-auto">
            <div id="search" className="w-2/5 flex items-center mb-4">
                <p>Search: &nbsp;</p> 
                <SearchBar search={search} setSearch={setSearch}/>
            </div>
            <ul className="space-y-3">
                {searchResults.map((profile, idx) => (
                    <li key={idx} className="bg-white shadow overflow-auto rounded-md px-6 py-4">
                        <profilePreview key={idx} user={props.user} profile={profile} />
                    </li> 
                ))}
            </ul>
        </section>
        
        <div className="mb-4"></div>
    </>
  )
}

export default SearchResults;