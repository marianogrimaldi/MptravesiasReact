import "./Guarderia.scss"
import icasa from "../../assets/logoMarcas/icasa.png"
import { RViewer, RViewerTrigger } from "react-viewerjs";
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const Guarderia = () => {

    const { t } = useTranslation()

    let imagenes = [
        "/guarderia/1.jfif",
        "/guarderia/2.jfif",
        "/guarderia/3.jfif"
    ]

    return (
        <div className="animation">
            <div className="bgcG">
                <Menu />
                <h1 className="titleGuarderia">{t("Guarderia.titulo")} +</h1>
                <div>
                    <div className="trianguloNos2"></div>
                    <div className="trianguloNos3"></div>
                </div>
                {/*los estilos de los triangulos los tomo de otro componente, al igual que el logo de Icasa*/}
                <a href="https://www.icasamotos.com.ar/" target="_blank"><img src={icasa} className="logoIcasaNos" alt="Logo Icasa" /></a>
                <div className="textGuarderia">
                    <p>{t("Guarderia.texto1")}</p>
                    <p >{t("Guarderia.texto2")}</p>
                    <p >{t("Guarderia.texto3")}</p>
                    <p >{t("Guarderia.texto4")}</p>
                </div>

                <RViewer imageUrls={imagenes}>
                    <div className="imgGuarde">
                        {imagenes.map((imagen, index) => {
                            return (
                                <RViewerTrigger index={index}>
                                    <div >
                                        <img src={imagen} alt="Imagen Travesia" />
                                    </div>
                                </RViewerTrigger>
                            )
                        })}
                    </div>
                </RViewer>
            </div>

        </div>
    )
}

export default Guarderia