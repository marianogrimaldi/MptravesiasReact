import "./Travesias.scss"
import icasa from "../../assets/logoMarcas/icasa.png"
import enero from "../../assets/imgSalidas/malargue.webp.jpg"
import febrero from "../../assets/imgSalidas/fiambala.jpg"
import marzo from "../../assets/imgSalidas/Volcan-Galan.jpg"
import abril from "../../assets/imgSalidas/cordoba.jpg"
import mayo from "../../assets/imgSalidas/guandacol.jpg"
import junio from "../../assets/imgSalidas/belen.jpg"
import julio from "../../assets/imgSalidas/cafayate.jpeg"
import agosto from "../../assets/imgSalidas/mendozaArenaNieve.jpeg"
import sept from "../../assets/imgSalidas/salar.jpg"
import oct from "../../assets/imgSalidas/jujuy.jpg"
import nov from "../../assets/imgSalidas/mexicanaLarioja.jpg"
import dic from "../../assets/imgSalidas/finDe.jpg"
import fin from "../../assets/finalizada.png"
import pronto from "../../assets/cooming.png"
import desierto from "../../assets/desierto.jpg"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const Travesias = () =>{

    const { t } = useTranslation()

    return (
        <div className="animation">
            <div className="bgcTrav">
            <Menu/>
            <h1 className="titleTravesias">{t("Travesias.titulo")} +</h1>
            <div>
                <div className="trianguloNos"></div>
                <div className="trianguloNos2"></div>
                <div className="trianguloNos3"></div>
            </div>
            <img src={desierto} className="imgDesierto" alt="" />
            <a href="https://www.icasamotos.com.ar/" target="_blank"><img src={icasa} className="logoIcasaNos" alt="Logo Icasa" /></a>
            <p className="pTra">{t("Travesias.texto")}</p>
            <div className="gridSalidas">
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes1")}</h2>
                    <p>+ {t("Travesias.desafio")} MALARGÜE MENDOZA</p>
                    <img src={enero} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes2")}</h2>
                    <p>+ {t("Travesias.desafio")} FIAMBALA</p>
                    <img src={febrero} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes3")}</h2>
                    <p>+ {t("Travesias.desafio")} {t("Travesias.volcan")} GALAN CATAMARCA</p>
                    <img src={marzo} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes4")}</h2>
                    <p>+ {t("Travesias.desafio")} CORDOBA</p>
                    <img src={abril} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes5")}</h2>
                    <p>+ {t("Travesias.desafio")} GUANDACOL - LA RIOJA</p>
                    <img src={mayo} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes6")}</h2>
                    <p>+ {t("Travesias.desafio")} CATAMARCA - LA RIOJA</p>
                    <img src={junio} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes7")}</h2>
                    <p>+ {t("Travesias.desafio")} CAFAYATE SALTA</p>
                    <img src={julio} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes8")}</h2>
                    <p>+ {t("Travesias.desafio")} {t("Travesias.arena")} MENDOZA</p>
                    <img src={agosto} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes9")}</h2>
                    <p>+ {t("Travesias.desafio")} {t("Travesias.salares")}</p>
                    <img src={sept} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes10")}</h2>
                    <p>+ {t("Travesias.desafio")} CORDOBA JUJUY</p>
                    <img src={oct} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes11")}</h2>
                    <p>+ {t("Travesias.desafio")} MEXICANA LA RIOJA</p>
                    <img src={nov} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>{t("Travesias.mes12")}</h2>
                    <p>+ {t("Travesias.desafio")} {t("Travesias.despedida")} 2023</p>
                    <img src={dic} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
               
            </div>
            </div>
        </div>
    )
}

export default Travesias