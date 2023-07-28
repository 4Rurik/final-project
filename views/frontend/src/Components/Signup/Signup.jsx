import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, first_name: firstName, last_name: lastName }),
      });

      const data = await response.json();
      if (response.ok) {
        // Si el registro fue exitoso, puedes manejar la respuesta aquí
        console.log(data);
        setMessage('Registro exitoso. ¡Ahora puedes iniciar sesión!');
      } else {
        setMessage('Registro fallido. Verifica tus datos.');
      }
    } catch (error) {
      console.error('Error al registrarse:', error);
      setMessage('Error al registrarse. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h2 className="text-center">Registrarse</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Nombre de usuario:</label>
                <input type="text" className="form-control" id="username" name="username" value={username} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Nombre:</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Apellido:</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} onChange={handleInputChange} />
              </div>
              <div className="d-grid">
                <button className="btn btn-primary" onClick={handleSignup}>Registrarse</button>
              </div>
              {message && <p className="mt-3 text-center">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;