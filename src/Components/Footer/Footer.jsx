import "./Footer.scss"
import icasa from "../../assets/logoMarcas/icasa.png"
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
import { useTranslation } from "react-i18next"

const Footer = () => {

    const { t } = useTranslation()

    return (
        <div>
            <div className="logoCanam">
                <p>>>>>></p>
                <a href="https://canam.com.ar/" target="_blank"><img src={canam} alt="" /></a>
                <p>>>>>></p>
            </div>
            <div className="sponsorsFlex" id="footer">

                <a href="https://motos.honda.com.ar/modelos/trx420" target="_blank"><img src={honda} alt="Logo Honda" /></a>
                <a href="https://www.polarislatinamerica.com/encuentra-un-distribuidor/lista/argentina/" target="_blank"><img src={polaris} alt="Logo Polaris" /></a>
                <a href="https://www.yamaha-motor.com.ar/#" target="_blank"><img src={yamaha} alt="Logo Yamaha" /></a>
                <a href="http://www.kawasakinavarro.com.ar/?gclid=CjwKCAjw__ihBhADEiwAXEazJobsvbLQ5o2gwgQuW1shyLvqZ0r0iyFdWgBDx_Be2z3As1hdeUl57xoCHtEQAvD_BwE" target="_blank"><img src={kawasaki} alt="Logo Kawasaki" /></a>
                <a href="https://cfmotoargentina.com.ar/?&utm_campaign=AO&utm_source=googleads&utm_content=video&utm_medium=cpc&utm_term=Marca&gclid=CjwKCAjw__ihBhADEiwAXEazJsNb4vWPOVqupxPDONAQ0Pm4EpQPrbmhn_F98E3jhRKXjnWzx9tu6BoClJYQAvD_BwE" target="_blank"><img src={cfmoto} alt="Logo Cfmoto" /></a>
            </div>
            <img src={fotoFooter} className="fotoFooter" alt="Utv" />
            <div className="flexFooter">
                <div>
                    <ul className="navBarFooter" >
                    <NavLink to="/"><li>+ {t("Footer.inicio")}</li></NavLink> 
                    <NavLink to="/Nosotros"><li>+ {t("Footer.nosotros")}</li></NavLink> 
                    <NavLink to="/Travesias"><li>+ {t("Footer.travesias")}</li></NavLink> 
                    <NavLink to="/Tour"><li>+ {t("Footer.tour")}</li></NavLink> 
                    <NavLink to="/Galeria"><li>+ {t("Footer.galeria")}</li></NavLink> 
                    </ul>
                    <div className="trianguloFooter"></div>
                </div>

                <div className="logosFooter">
                    <img src={logo} alt="Logo Mp travesias" />
                    <h1>{t("Footer.contacto")}</h1>
                    <p>{t("Footer.cel")}: +549-3548-407934</p>
                    <div className="logoRedesFlex">
                        <a href="https://api.whatsapp.com/send?phone=5493548407934" target="_blank"><img src={logow} className="logoRedes" alt="" /></a>
                        <a href="https://www.instagram.com/marcelopuchatt.travesias/" target="_blank"><img src={logoi} className="logoRedes" alt="" /></a>
                        <a href="https://www.facebook.com/marcelopuchatt.marcelo" target="_blank"><img src={logof} className="logoRedes" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="trianguloFooter2"></div>
            <div className="trianguloFooter3"></div>
            <div className="wordsFooter">
                <h5 className="accion">{t("Footer.accion")} </h5>
                <h5 className="avent">{t("Footer.aventura")}</h5>
                <h5 className="adren">{t("Footer.adrenalina")}</h5>
                <h5 className="a">A</h5>
            </div>
            <a href="https://www.icasamotos.com.ar/" target="_blank"><img src={icasa} className="icasaFooter" alt="Logo Icasa" /></a>
            <div className="flexMariano">
                <h6>to.the.top</h6>
                <p>WEB DEVELOPMENT by MARIANO GRIMALDI</p>
            </div>
        </div>
    )
}

export default Footer