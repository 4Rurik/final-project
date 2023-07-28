import { useEffect, useState } from 'react';
import {useLoaderData} from 'react-router-dom';

const SinglePost = () => {
    const {post} = useLoaderData();
    console.log(post)

    const lastFiveComments = post.comment_blog.length > 0 ? post.comment_blog.slice(-5) : [];

    return (
        <>
        <img src={post.image_url} height="500" weight="1500" />
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {lastFiveComments.length > 0 ? (
        lastFiveComments.map((comment) => (
          <CommentWithUserDetails key={comment.id} comment={comment} />
        ))
      ) : (
        <p>Se el primero en comentar!</p>
      )}
      <button>Comentar</button>
        </>
    );
};

const CommentWithUserDetails = ({ comment }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserDetails(comment.user_id)
      .then((userData) => setUser(userData))
      .catch((error) => console.error('Error al obtener detalles del usuario:', error));
  }, [comment.user_id]);

  return (
    <div>
      <p>{comment.content}</p>
      {user && (
        <div>
          <p>Nombre del usuario: {user.username}</p>
        </div>
      )}
    </div>
  );
};

const fetchUserDetails = async (userId) => {
  const res = await fetch(`http://localhost:8000/api/users/${userId}`);
  const userData = await res.json();
  return userData;
};

export default SinglePost;

export const loaderSinglePost = async({params}) =>{
    const res = await fetch(`http://localhost:8000/api/blogs/${params.id}`);
    const post = await res.json();
    return{post};
}


