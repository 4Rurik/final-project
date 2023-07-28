import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

function CrearPost() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      title: '',
      content: '',
      category: 'Spam',
      image_url: '',
      user_id: '3',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:8000/api/blogs', formData);
        // Después de hacer el post, puedes redirigir a la página que desees.
        navigate('/'); // Cambio aquí: Usando navigate en lugar de history.push
    } catch (error) {
      console.error(error);
    }
  };
  
    return (
      <div className="container">
        <h2>Crear un nuevo post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Título
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Contenido
            </label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image_url" className="form-label">
              URL de la imagen
            </label>
            <input
              type="text"
              className="form-control"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Crear Post
          </button>
        </form>
      </div>
    );
  }
  
  export default CrearPost;