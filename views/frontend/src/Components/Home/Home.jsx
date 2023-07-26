import React from 'react';
import { Carousel, Card, CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Home/Home.css';
import '../Blog/AllBlogs/';
import '../Users/Users';
import AllBlogs from '../Blog/AllBlogs';
import Users from '../Users/Users';




const Home = () => {
    return (
        <div>
            <section className="section1">
                <div className="Encabezado">
                    <h1>Bienvenidos a Blogapp</h1>
                    <h2>Cuéntanos sobre tus viajes por el mundo</h2>
                </div>

                <div>
                   <AllBlogs/>
                </div>
            </section>

            <section className="section2">
                    <h1>Usuarios Aqui</h1>
            </section>

        </div>
    );
};

export default Home;
