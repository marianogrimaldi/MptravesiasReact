import "./Header.scss"
import logo from "../../assets/logoMarcelo.png"
import Traductor from "../Traductor/Traductor"
import { NavLink } from "react-router-dom"

const Header = () =>{
    return (
        <div className="flexLogoNav">
            <img src={logo} className="logoMp" alt="Logo MPTravesias" />
            <div className="flags">
            <Traductor/>
            </div>
            <ul className="navBar">
               <NavLink to="/"><li>INICIO</li></NavLink> 
               <NavLink to="/Nosotros"><li>NOSOTROS</li></NavLink> 
               <NavLink to="/Travesias"><li>TRAVESIAS</li></NavLink> 
               <NavLink to="/Tour"><li>TOUR PRIVADO</li></NavLink> 
               <NavLink to="/Galeria"><li>GALERIA</li></NavLink> 
                <li>CONTACTO</li>

            </ul>
           
        </div>
    )
}

export default Header