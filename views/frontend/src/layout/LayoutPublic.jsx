import { Outlet } from "react-router-dom";
import NavBar from "../navbar/Navbar";

const LayoutPublic = ()=>{
    return(
        <>
        <NavBar/>
        <main className="container">
            <Outlet/>
        </main>
   
        </>
    );
};
export default LayoutPublic;