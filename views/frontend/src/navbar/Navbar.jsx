import { NavLink } from "react-router-dom";
const NavBar = () => {
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
            <NavLink to="/Blog" className="btn btn-outline-primary">Blogs</NavLink>
            <NavLink to="/Users" className="btn btn-outline-primary">Users</NavLink>
        </div>
        </nav>
        </>
    );
};

export default NavBar;