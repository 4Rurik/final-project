import React from 'react';
import { Carousel, Card, CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Blog/AllBlogs.css';
import {Link, useLoaderData} from 'react-router-dom'


const AllBlogs = () => {
  const {posts} = useLoaderData()
  console.log(posts)
  const activePosts = posts.filter((blog) => blog.status === 'active');

  return (
    <>  

      {activePosts.length > 0 ? (
        <div className="card-group">
          {activePosts.map((blog) => (
            <div key={blog.id} className="Blogsrecientes">
              <Card>
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
            
      ) : (
        <p>No se encontraron Blogs</p>
      )}


    </>
  );
};

export default AllBlogs;

export const loaderBlog = async () =>{
  const res = await fetch('http://localhost:8000/api/blogs')
  const posts = await res.json()
  return{posts : posts};
}
