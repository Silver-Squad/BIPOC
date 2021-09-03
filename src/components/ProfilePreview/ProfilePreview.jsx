import './ProfilePreview.css';
import React from 'react';
import { FolderOpenIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

function ProfilePreview(props) {

    const titleText = props.profile.name.length < 40 ? props.profile.name : props.profile.title.substring(0,39) + '...';
    // const previewText = props.profile.purpose.length < 120 ? props.profile.purpose : props.profile.purpose.substring(0,119) + '...';
    const viewLinkUrl = `/profile/${props.profile._id}`;
    // const isPrivate = props.profile.isPrivate ? 'Private' : 'Public';

    return (
      <article className='profile-preview'>
          <Link to={viewLinkUrl}>
          <div className='profile-preview-logo flex justify-center items-center '><FolderOpenIcon className="h-16 w-16 absolute" aria-hidden="true"/><div className="mt-16">VIEW</div></div></Link>
          <div className='profile-preview-content'>
              <div className='profile-preview-title'>{titleText}</div>
              <div className="profile-preview-desc h-2/4">{props.profile?.city}, {props.profile?.state.toUpperCase()} {props.profile?.zip}</div> 
              {/* <div className="profile-preview-bottom">Created by: {props.profile.addedBy.name} ({isPrivate}) | Created on: {createdAt} | Last Edited: {updatedAt}</div> */}
          </div>
      </article>
    );
}

export default ProfilePreview;