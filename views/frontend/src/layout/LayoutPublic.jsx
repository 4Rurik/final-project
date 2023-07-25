import { Outlet } from "react-router-dom";
import NavBar from "../navbar/Navbar";

const LayoutPublic = ()=>{
    return(
        <>
        <NavBar/>
        <main className="container">
            <Outlet/>
        </main>
        <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    <p className="mb-0">© 2023 Todos los derechos reservados</p>
                    <p className="mb-0">Equipo 3</p>
                </div>
            </footer>
        </>
    );
};
export default LayoutPublic;