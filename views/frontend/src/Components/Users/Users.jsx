import React from 'react';
import { Carousel, Card, CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Users/Users.css'
import {Link, useLoaderData} from 'react-router-dom';
import defaultImage from'../../assets/ImgsDefault/default-profile-pic.png';


const Users = () => {
  const {users} = useLoaderData()
  console.log(users)


  return (
    <>
      {users.length > 0 ? (
        <Carousel>
          {users.map((user) => (
            <Carousel.Item key={user.id}>
              <Card className="userslide">
                <Card.Body>
                  <div className="img-container">
                  {user.profile_pic ? (
                      <img className="user-img" src={user.profile_pic} alt={user.first_name} />
                    ) : (
                      <img className="user-img" src={defaultImage} alt="Imagen predeterminada" />
                    )}
                  </div>
                  <Card.Title>{user.first_name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                <Link to={`/user/${user.id}`}>Ver perfil</Link>
                </Card.Footer>
                <br></br>
                <br></br>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>No se encontraron usuarios</p>
      )}
    </>
  );
};

export default Users;

export const loaderUsers = async () =>{
  const res = await fetch('http://localhost:8000/api/users')
  const users = await res.json()
  return{users : users};
}
