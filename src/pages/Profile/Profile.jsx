import './Profile.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Profile(props) {
    let history = useHistory();

    return (
      <main className="w-3/4 mt-6 mx-auto flex">  
        <div>
          <h1>Hello</h1>
        </div>
        
      </main>
    )


}