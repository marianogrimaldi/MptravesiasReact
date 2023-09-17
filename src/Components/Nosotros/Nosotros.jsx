import "./Nosotros.scss"
import fotoNos from "../../assets/primerPlano.jpg"
import primerP from "../../assets/primerPlanoCelular.jpg"
import icasa from "../../assets/logoMarcas/icasa.png"
import video from "../../assets/logoVideo.png"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const Nosotros = () =>{

    const { t } = useTranslation()

    return (
        <div className="animation"> 
            <Menu/>
            <h1 className="titleMpt">{t("Nosotros.titulo")} +</h1>
            <p className="pMpt">{t("Nosotros.texto")}</p>
            <div>
                <div className="trianguloNos"></div>
                <div className="trianguloNos2"></div>
                <div className="trianguloNos3"></div>
            </div>
            <img src={fotoNos} className="imgFondo" alt="Foto Marcelo Puchatt" />
            <img src={primerP} className="imgFondoCelu" alt="Foto Marcelo Puchatt" />
            <a href="https://www.icasamotos.com.ar/" target="_blank"><img src={icasa} className="logoIcasaNos" alt="Logo Icasa" /></a>
            <a href="https://www.instagram.com/p/Cv90zW-NcrY/" target="blank"><img src={video} className="logoVideoN" alt="Logo Video" /></a>
        </div>
    )
}

export default Nosotros