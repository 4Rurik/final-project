import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.jpg';
const NavBar = () => {
    return(
        <>
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={Logo} alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></img>
      Blogapp
    </a>
            <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
            <NavLink to="/Blog" className="btn btn-outline-primary">Blogs</NavLink>
            <NavLink to="/Users" className="btn btn-outline-primary">Usuarios</NavLink>
            <NavLink to="/Comments" className="btn btn-outline-primary">Comentarios</NavLink>
  </div>
</nav>
        </>
    );
};

export default NavBar;