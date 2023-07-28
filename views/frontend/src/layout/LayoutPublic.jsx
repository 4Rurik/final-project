import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../navbar/Navbar";


const LayoutPublic = ()=>{
    const navigation = useNavigate()
    return(
        <>
        <NavBar/>
        <main className="container">
            {navigation.state === "loading" &&(
                <div className="alert alert-info my-5">Loading...</div>
            )}
        <Outlet/>
        </main>
        <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2023 Blogapp. All rights reserved.</p>
        </footer>
        </>
    );
};
export default LayoutPublic;