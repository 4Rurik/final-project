import React from 'react';
import { Carousel, Card, CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Home/Home.css';
import '../Blog/AllBlogs/';
import '../Users/Users';
import AllBlogs from '../Blog/AllBlogs';





const Home = () => {
    return (
        <div>
            <section className="section1">
                <div className="Encabezado">
                    <h1>Bienvenidos a Blogapp</h1>
                    <h2>¿Qué vas a contarnos hoy?</h2>
                </div>

                <div>
                   <AllBlogs/>
                </div>
            </section>

        </div>
    );
};

export default Home;
