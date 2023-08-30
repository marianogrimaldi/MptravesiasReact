import "./Tour.scss"
import tour from "../../assets/tourPrivado.jpg"
import icasa from "../../assets/logoMarcas/icasa.png"
import video from "../../assets/logoVideo.png"

const Tour = () =>{
    return (
        <div className="animation">
            <h1 className="titleTour">TOUR PRIVADO +</h1>
            <p className="pTour">En esta modalidad armamos una travesía en base a tus gustos y nuestros conocimientos. Si tenés un grupo de amigos y querés vivir una experiencia increíble, consultanos por fechas y destinos, y rediseñamos una travesía exclusiva para vos. Teniendo siempre en cuenta las condiciones climáticas, nuestro objetivo es que sientas a pleno la naturaleza en un marco seguro y confiable.</p>
            <div>
                <div className="trianguloNos"></div>
                <div className="trianguloNos2"></div>
                <div className="trianguloNos3"></div>
            </div>
            <img src={icasa} className="logoIcasaNos" alt="Logo Icasa" />
            <img src={tour} className="imgTour" alt="Grupo Pivado" />
            <a href="https://www.instagram.com/p/CtJmaRHMThU/" target="blank"><img src={video} className="logoVideo" alt="Logo Video" /></a>
        </div>
    )
}

export default Tour