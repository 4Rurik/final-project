import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlogForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    category: 'Spam',
    image_url: '',
  });

  useEffect(() => {
    fetch(`http://localhost:8000/api/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error('Error fetching blog data:', error));
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Blog actualizado:', data);
        navigate(`/blog/${id}`);
      })
      .catch((error) => console.error('Error updating blog:', error));
  };

  return (
    <div className="container mt-4">
      <h2>Editar Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título del blog
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Contenido del blog
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            rows="5"
            value={blogData.content}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image_url" className="form-label">
            URL de la imagen del blog
          </label>
          <input
            type="text"
            className="form-control"
            id="image_url"
            name="image_url"
            value={blogData.image_url}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

export default EditBlogForm;