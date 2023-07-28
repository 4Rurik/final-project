import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function CrearPost() {
    const history = useHistory();
    const [formData, setFormData] = useState({
      title: '',
      content: '',
      category: '',
      image_url: '',
      user_id: '3', // Puedes cambiar esto por el ID del usuario actual
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:8000/api/blogs', formData);
        // Después de hacer el post, puedes redirigir a la página que desees.
        history.push('/'); // Ejemplo: Redirigir a la página de inicio.
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
            />
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
            <label htmlFor="category" className="form-label">
              Categoría
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={formData.category}
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
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Crear Post
          </button>
        </form>
      </div>
    );
  }
  
  export default CrearPost;