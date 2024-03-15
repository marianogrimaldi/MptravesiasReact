import "./Header.scss"
import logo from "../../assets/logoMarcelo.png"
import Traductor from "../Traductor/Traductor"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Header = () =>{

    const { t } = useTranslation()

    return (
        <div className="flexLogoNav">
            <img src={logo} className="logoMp" alt="Logo MPTravesias" />
            <div className="flags">
            <Traductor/>
            </div>
            <ul className="navBar">
               <NavLink to="/"><li>{t("Header.inicio")} </li></NavLink> 
               <NavLink to="/Nosotros"><li>{t("Header.nosotros")}</li></NavLink> 
               <NavLink to="/Travesias"><li>{t("Header.travesias")}</li></NavLink> 
               <NavLink to="/Tour"><li>{t("Header.tour")}</li></NavLink> 
               <NavLink to="/Guarderia"><li>{t("Header.guarderia")}</li></NavLink> 
               <NavLink to="/Galeria"><li>{t("Header.galeria")}</li></NavLink> 
               <a href="#footer"><li>{t("Header.contacto")}</li></a>

            </ul>
           
        </div>
    )
}

export default Header