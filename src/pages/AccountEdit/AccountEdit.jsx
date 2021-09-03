import React, { useState, useEffect, useRef  } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import EditAccount from '../../components/EditAccountForm/EditAccountForm'
import * as profileService from "../../services/profileService";

export default function AccountEdit(props){
  const location = useLocation();
  //  allow us history access for routing 
    
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const hasData = await profileService.getAllByCurrentUser(props.user._id)
      setAccount(hasData)
      // setState(hasData)
    } 
    getProfile()
  }, []);


  return (
    <>
        <div className='EditAccountPage'>
            <EditAccount
            handleUpdateSnippet={props.handleUpdateSnippet}
            user={props.user}
            account={account}
            setAccount={setAccount}
            key={account?._id} />
        </div>
    </>
  )
    
}

