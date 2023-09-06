
import "./Home.scss"
import topo from "../../assets/topografia.jpg"
import logo from "../../assets/logoMarcelo.png"
import flecha from "../../assets/flecha.webp"
import brujula from "../../assets/brujula.png"
import canam from "../../assets/canam.jpg"
import tierra from "../../assets/tierraSeca.jpg"
import cuatri from "../../assets/cuatriSaludando.png"
import icasa from "../../assets/logoMarcas/icasa.png"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Home = () => {

    const { t } = useTranslation()

    return (
        <div className="animation">
            <img src={topo} className="mapa" alt="Imagen mapa topografico" />
            <h1>{t("Home.activa")} </h1>
            <div className="logoHome">
                <img src={logo}  alt="Logo Mptravesias" />
                <a href="https://www.icasamotos.com.ar/" target="_blank"><img src={icasa} className="logoIcasa" alt="Logo Icasa" /></a>
            </div>
            <div className="triangulo"></div>
            <div className="triangulo2"></div>
            <div className="flecha">
                <img src={flecha} alt="Flecha gps" />
            </div>
            <img src={brujula} className="brujula" alt="Brujula" />
            <Link to="/Travesias"><h2 className="subTit1">+ {t("Home.travesias")}</h2></Link>
            <img src={canam} className="utvCanam" alt="Canam Utv" />
            <Link to="/Galeria"><h3>{t("Home.aventuras")} +</h3></Link>
            <div className="triangulo3"></div>
            <img src={tierra}className="imgTierra" alt="tierra" />
            <Link to="/Tour"><h4> + {t("Home.tour")}</h4></Link>
            <img src={cuatri} className="cuatriSaludo" alt="" />
        </div>
    )
}

export default Home