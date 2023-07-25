import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import tripch from '../../assets/images/tripch.jpg';
import tripger from '../../assets/images/tripger.jpg';
import tripgt from '../../assets/images/tripgt.jpg';
import tripko from '../../assets/images/tripko.jpg';
import tripmex from '../../assets/images/tripmex.jpg';
import '../Home/Home.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Home = () => {
  return (
    <div>
    
      <section className='section1'>
      <div className='Encabezado'>
      <h1>Bienvenidos a Blogapp</h1>
      <h2>Cuéntanos sobre tus viajes por el mundo</h2>
      </div>

      <div className='Blogsrecientes'>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={ tripch } />
        <Card.Body>
          <Card.Title>Username1</Card.Title>
          <Card.Text id='pepa'>
            Soy XXX y soy fotógrafo. Hace poco me mudé a China.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ tripger } />
        <Card.Body>
          <Card.Title>Username2</Card.Title>
          <Card.Text>
            Me llamo xxx y este verano me voy de gira a Europa con mis amigos.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ tripgt } />
        <Card.Body>
          <Card.Title>Username3</Card.Title>
          <Card.Text>
            Soy Salvadoreña, me apasiona conocer de otros países pero el trabajo no me da mucho tiempo.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ tripko } />
        <Card.Body>
          <Card.Title>Username4</Card.Title>
          <Card.Text>
            Me encanta la cultura Asiática. ¡Espero visitar Japón y Corea pronto!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
      </section>
    
    <br />

    


      <br />
      <Carousel>
            <Carousel.Item>
            <Card>
        <Card.Body>
          <Card.Title>Username1</Card.Title>
          <Card.Text id='pepa'>
            Soy XXX y soy fotógrafo. Hace poco me mudé a China.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
          </Card>
            </Carousel.Item>
            <Carousel.Item>
                               <Carousel.Caption>
                    <h3>¡Conocimos Berlín!</h3>
                    <p>Mi novio y yo fuimos a conocer la ciudad de unos amigos en Alemania.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ tripgt }
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Nos vinimos a Guatemala</h3>
                    <p>
                        Luego de un año de trabajo decidí por fin salir del país.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= { tripko }
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>Mis aventuras en Seúl</h3>
                    <p>¡Por fín comeré auténtica comida coreana!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= { tripmex }
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                    <h3>Visitando mis raíces</h3>
                    <p>Mi mamá me trajo a conocer el país.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <br />

        <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">© 2023 Todos los derechos reservados</p>
        <p className="mb-0">Equipo 3</p>
      </div>
    </footer>

    </div>
  );
};

export default Home;