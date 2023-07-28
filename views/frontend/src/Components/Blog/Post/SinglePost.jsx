import { useEffect, useState } from 'react';
import {useLoaderData} from 'react-router-dom';

const SinglePost = () => {
    const {post} = useLoaderData();
    console.log(post)

    const lastFiveComments = post.comment_blog.slice(-5);

    return (
        <>
        <img src={post.image_url} height="500" weight="1500" />
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {lastFiveComments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
        </>
    );
};



export default SinglePost;

export const loaderSinglePost = async({params}) =>{
    const res = await fetch(`http://localhost:8000/api/blogs/${params.id}`);
    const post = await res.json();
    return{post};
}


