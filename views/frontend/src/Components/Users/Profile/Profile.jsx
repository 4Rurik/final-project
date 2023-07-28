import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Profile/Profile.css'
import {Link, useLoaderData} from 'react-router-dom'


const Profile = () => {
  const {profile} = useLoaderData()
  console.log(profile)


  return (
    <>
      <h1>{profile.username}</h1>

    </>
  );
};

export default Profile;

export const loaderProfile = async () =>{
  const res = await fetch('http://localhost:8000/api/users/1')
  const profile = await res.json()
  return{profile};
}
