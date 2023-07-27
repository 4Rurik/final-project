import { Outlet } from "react-router-dom";
import NavBar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

const LayoutPublic = ()=>{
    return(
        <>
        <NavBar/>
        <main className="container">
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
};
export default LayoutPublic;