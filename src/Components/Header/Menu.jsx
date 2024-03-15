import "./Header.scss"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import menu from "../../assets/menu.png"



const Menu = () => {

    const { t } = useTranslation()

    return (
        <div>
             <ul >
                <label htmlFor="menu" className="nav__label">
                    <img src={menu} alt="" className="nav__img" />
                </label>
                <input type="checkbox" id="menu" className="nav__imput" />
                <div className="navBar">
                    <NavLink to="/"><li>{t("Header.inicio")} </li></NavLink> 
                    <NavLink to="/Nosotros"><li>{t("Header.nosotros")}</li></NavLink> 
                    <NavLink to="/Travesias"><li>{t("Header.travesias")}</li></NavLink> 
                    <NavLink to="/Tour"><li>{t("Header.tour")}</li></NavLink> 
                    <NavLink to="/Guarderia"><li>{t("Header.guarderia")}</li></NavLink> 
                    <NavLink to="/Galeria"><li>{t("Header.galeria")}</li></NavLink> 
                    <a href="#footer"><li>{t("Header.contacto")}</li></a>
                </div>
            </ul>
            </div>
    )
}

export default Menu