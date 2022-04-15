import React from 'react';
import './Profile.css';
import {profile} from '../constants/data';
import Prof from './Prof';

const Profile = () => {
  const handleName =(name)=>{
    alert(`This is the profile of ${name}`)
  }
  return (
    <div style={{color:"black", textAlign:'center'}}>
      <Prof handleName={handleName} prof={profile}/>
      <br />
      <img src={profile.image} width='100%' alt='PhotoProfile' />
    </div>
  )
  
}

export default Profile