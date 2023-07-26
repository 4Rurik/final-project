import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import tripch from "../../assets/images/tripch.jpg";
import tripger from "../../assets/images/tripger.jpg";
import tripgt from "../../assets/images/tripgt.jpg";
import tripko from "../../assets/images/tripko.jpg";
import tripmex from "../../assets/images/tripmex.jpg";
import "../Home/Home.css";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Home = () => {
    return (
        <div>
            <section className="section1">
                <div className="Encabezado">
                    <h1>Bienvenidos a Blogapp</h1>
                    <h2>¿Qué vas a contarnos hoy?</h2>
                </div>

                <div>
                    <CardGroup>
                        <Card className="Blogsrecientes">
                            <Card.Img variant="top" src={tripch} />
                            <Card.Body>
                                <Card.Title>Username1</Card.Title>
                                <Card.Text id="pepa">
                                    Soy XXX y soy fotógrafo. Hace poco me mudé a
                                    China.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card className="Blogsrecientes">
                            <Card.Img variant="top" src={tripger} />
                            <Card.Body>
                                <Card.Title>Username2</Card.Title>
                                <Card.Text>
                                    Me llamo xxx y este verano me voy de gira a
                                    Europa con mis amigos.{" "}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card className="Blogsrecientes">
                            <Card.Img variant="top" src={tripgt} />
                            <Card.Body>
                                <Card.Title>Username3</Card.Title>
                                <Card.Text>
                                    Soy Salvadoreña, me apasiona conocer de
                                    otros países pero el trabajo no me da mucho
                                    tiempo.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card className="Blogsrecientes">
                            <Card.Img variant="top" src={tripko} />
                            <Card.Body>
                                <Card.Title>Username4</Card.Title>
                                <Card.Text>
                                    Me encanta la cultura Asiática. ¡Espero
                                    visitar Japón y Corea pronto!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
            </section>

            <section className="section2">
            <Carousel>
                <Carousel.Item>
                    <Card className="userslide">
                        <Card.Body>
                            <Card.Title>Username1</Card.Title>
                            <Card.Text id="pepa">
                                Soy XXX y soy fotógrafo. Hace poco me mudé a
                                China.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="userslide">
                        <Card.Body>
                            <Card.Title>Username2</Card.Title>
                            <Card.Text>
                                Me llamo xxx y este verano me voy de gira a
                                Europa con mis amigos.{" "}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card className="userslide">
                            <Card.Body>
                                <Card.Title>Username3</Card.Title>
                                <Card.Text>
                                    Soy Salvadoreña, me apasiona conocer de
                                    otros países pero el trabajo no me da mucho
                                    tiempo.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card className="userslide">
                            <Card.Body>
                                <Card.Title>Username4</Card.Title>
                                <Card.Text>
                                    Me encanta la cultura Asiática. ¡Espero
                                    visitar Japón y Corea pronto!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </Carousel.Item>
            </Carousel>
            </section>

        </div>
    );
};

export default Home;
