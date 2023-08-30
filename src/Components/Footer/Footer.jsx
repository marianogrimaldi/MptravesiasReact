import "./Footer.scss"
import canam from "../../assets/logoMarcas/canam.png"
import cfmoto from "../../assets/logoMarcas/cfmoto.png"
import honda from "../../assets/logoMarcas/honda.png"
import kawasaki from "../../assets/logoMarcas/kawasaki.png"
import polaris from "../../assets/logoMarcas/polaris.png"
import yamaha from "../../assets/logoMarcas/yamaha.png"
import fotoFooter from "../../assets/fotoFooter.jpg"
import logo from "../../assets/logoMarcelo.png"
import logow from "../../assets/logoW.png"
import logoi from "../../assets/logoI.png"
import logof from "../../assets/logoF.webp"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <div>
            <div className="logoCanam">
                <p>>>>>></p><img src={canam} alt="" /><p>>>>>></p>
            </div>
            <div className="sponsorsFlex">

                <img src={honda} alt="Logo Honda" />
                <img src={polaris} alt="Logo Polaris" />
                <img src={yamaha} alt="Logo Yamaha" />
                <img src={kawasaki} alt="Logo Kawasaki" />
                <img src={cfmoto} alt="Logo Cfmoto" />
            </div>
            <img src={fotoFooter} className="fotoFooter" alt="Utv" />
            <div className="flexFooter">
                <div>
                    <ul className="navBarFooter" id="footer">
                    <NavLink to="/"><li>+ INICIO</li></NavLink> 
                    <NavLink to="/Nosotros"><li>+ NOSOTROS</li></NavLink> 
                    <NavLink to="/Travesias"><li>+ TRAVESIAS</li></NavLink> 
                    <NavLink to="/Tour"><li>+ TOUR PRIVADO</li></NavLink> 
                    <NavLink to="/Galeria"><li>+ GALERIA</li></NavLink> 
                    </ul>
                    <div className="trianguloFooter"></div>
                </div>

                <div className="logosFooter">
                    <img src={logo} alt="Logo Mp travesias" />
                    <h1>C O N T A C T O</h1>
                    <p>CEL: +549-3548-407934</p>
                    <img src={logow} className="logoRedes" alt="" />
                    <img src={logoi} className="logoRedes" alt="" />
                    <img src={logof} className="logoRedes" alt="" />
                </div>
            </div>
            <div className="trianguloFooter2"></div>
            <div className="trianguloFooter3"></div>
            <div className="wordsFooter">
                <h5 className="accion">CCION</h5>
                <h5 className="avent">VENTURA</h5>
                <h5 className="adren">DRENALINA</h5>
                <h5 className="a">A</h5>
            </div>
            <div className="flexMariano">
                <h6>to.the.top</h6>
                <p>WEB DEVELOPMENT by MARIANO GRIMALDI</p>
            </div>
        </div>
    )
}

export default Footer