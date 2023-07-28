import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setMessage('Inicio de sesión exitoso');
        AuthContext.setIsAuthenticated(true);
        navigate('/');
      } else {
        setMessage('Inicio de sesión fallido. Verifica tus credenciales.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMessage('Error al iniciar sesión. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h2 className="text-center">Iniciar sesión</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleInputChange} />
              </div>
              <div className="d-grid">
                <button className="btn btn-primary" onClick={handleLogin}>Iniciar sesión</button>
              </div>
              {message && <p className="mt-3 text-center">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;