import React from 'react';
import { Carousel, Card, CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Profile/Profile.css'
import {Link, useLoaderData} from 'react-router-dom'


const Profile = () => {
  const {posts} = useLoaderData()
  console.log(posts)


  return (
    <>
      <h1>Holi soy el perfil</h1>
    </>
  );
};

export default Profile;

export const loaderBlog = async () =>{
  const res = await fetch('http://localhost:8000/api/blogs')
  const posts = await res.json()
  return{posts : posts};
}
