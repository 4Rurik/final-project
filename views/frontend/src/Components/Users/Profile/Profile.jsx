import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Profile/Profile.css'
import {Link, useLoaderData} from 'react-router-dom';
import { getBlogsByUserId } from './blogService';
import { Carousel, Card, CardGroup } from "react-bootstrap";



const Profile = () => {
  const {profile} = useLoaderData();
  const [userBlogs, setUserBlogs] = useState([]);
  console.log(profile);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const blogs = await getBlogsByUserId(profile.id);
        setUserBlogs(blogs);
      } catch (error) {
        console.error('Error fetching user blogs:', error);
      }
    };
    fetchUserBlogs();
  }, [profile.id]);


  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col-md-4">
        <img src={profile.profile_pic} alt="Foto de perfil" className="img-fluid rounded-circle" />
      </div>
      <div className="col-md-8">
        <h1>{profile.username}</h1>
        <p>
          <strong>Nombre:</strong> {profile.first_name} {profile.last_name}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Estado:</strong> {profile.status}
        </p>
        <Link to={`/Create/${profile.id}`}>Subir Nuevo Post</Link>
      </div>
    </div>
   
        <h2>Blogs Subidos por el Usuario</h2>

          {userBlogs.map((blog) => (
            <div className="card-group">
             <Card key={blog.id} className="Blogsrecientes">
                <Card.Img variant="top" src={blog.image_url} />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text id="pepa">{blog.content}</Card.Text>
                </Card.Body>
                <Card.Footer>
                <Link to={`/blog/${blog.id}`}>Leer más</Link>
                </Card.Footer>
              </Card>
              </div>
          ))}

      </div>

);
};

export default Profile;

export const loaderProfile = async () =>{
  const res = await fetch('http://localhost:8000/api/users/1')
  const profile = await res.json()
  return{profile};
}
