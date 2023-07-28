export const getBlogsByUserId = async (userId) => {
    const res = await fetch(`http://localhost:8000/api/user-blogs/${userId}`);
    const blogs = await res.json();
    return blogs;
  };