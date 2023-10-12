import "./Tour.scss"
import tour from "../../assets/tourPrivado.jpg"
import tourMobile from "../../assets/tourPrivadoMobile.jpg"
import icasa from "../../assets/logoMarcas/icasa.png"
import video from "../../assets/logoVideo.png"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const Tour = () =>{

    const { t } = useTranslation()

    return (
        <div className="animation">
            <Menu/>
            <h1 className="titleTour">{t("Tour.titulo")} +</h1>
            <p className="pTour">{t("Tour.texto")}</p>
            <div>
                <div className="trianguloNos"></div>
                <div className="trianguloNos2"></div>
                <div className="trianguloNos3"></div>
            </div>
            <a href="https://www.icasamotos.com.ar/" target="_blank"><img src={icasa} className="logoIcasaNos" alt="Logo Icasa" /></a>
            <img src={tour} className="imgTour" alt="Grupo Privado" />
            <img src={tourMobile} className="imgTourMobile" alt="Grupo Privado" />
            <a href="https://www.instagram.com/p/CtJmaRHMThU/" target="blank"><img src={video} className="logoVideo" alt="Logo Video" /></a>
        </div>
    )
}

export default Tour