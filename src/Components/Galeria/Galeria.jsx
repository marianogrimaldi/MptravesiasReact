import "./Galeria.scss"
import { RViewer, RViewerTrigger } from "react-viewerjs";
import icasa from "../../assets/logoMarcas/icasa.png"
import imgFondo from "../../assets/corrusel2.jpg"
const Galeria = () =>{

    let imagenes = [
        "/galeria/fotoGalleria1-min.jpg",
        "/galeria/fotoGalleria2-min.jpg",
        "/galeria/fotoGalleria3-min.jpg",
        "/galeria/fotoGalleria4-min.jpg",
        "/galeria/fotoGalleria5-min.jpg",
        "/galeria/fotoGalleria6-min.jpg",
        "/galeria/fotoGalleria7-min.jpg",
        "/galeria/fotoGalleria8-min.jpg",
        "/galeria/fotoGalleria9-min.jpg",
        "/galeria/fotoGalleria10-min.jpg",
        "/galeria/fotoGalleria11-min.jpg",
        "/galeria/fotoGalleria12-min.jpg",
        "/galeria/fotoGalleria13-min.jpg",
        "/galeria/fotoGalleria14-min.jpg",
       
        
       
    ]

    return (
        <div className="animation">
            <h1 className="titleGaleria">GALERIA +</h1>
            <div>
                <div className="trianguloGal"></div>
                <div className="trianguloGal2"></div>
                <div className="trianguloGal3"></div>
            </div>
            <img src={icasa} className="logoIcasaNos" alt="Logo Icasa" />
            <img src={imgFondo} className="imgFondoGal" alt="" />
            <RViewer imageUrls={imagenes}>
                <div className="imgGrid">
                    {imagenes.map((imagen, index)=> {
                        return (
                            <RViewerTrigger index={index}>
                                <div >
                                     <img src={imagen} alt="Imagen Travesia" />
                                </div>
                            </RViewerTrigger>
                                )
                    }) }
                </div>
             </RViewer>
        </div>
    )
}

export default Galeria