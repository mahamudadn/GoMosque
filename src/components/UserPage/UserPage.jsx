import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import "./UserPage.css"

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container" id='userpage'>
      <h2>Welcome, {user.username}!</h2>
      {/* <img
          src="./images/hw2pray.png"
          alt="Description of the image"
          className="custom-image"
        /> */}
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
      <p className='about'>This app is designed to help users track and monitor their prayers specifically performed at mosques. 
            It allows users to keep a record of the number of prayers they have offered in mosques over time. This app enables users to evaluate their prayer performance 
            and stay consistent with their religious practices.</p>
    </div>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
