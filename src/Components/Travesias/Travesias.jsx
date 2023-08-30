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


const Travesias = () =>{
    return (
        <div className="animation">
            <h1 className="titleTravesias">TRAVESÍAS EN QUADs Y UTVs +</h1>
            <div>
                <div className="trianguloNos"></div>
                <div className="trianguloNos2"></div>
                <div className="trianguloNos3"></div>
            </div>
            <img src={desierto} className="imgDesierto" alt="" />
            <img src={icasa} className="logoIcasaNos" alt="Logo Icasa" />
            <p className="pTra">IMPORTANTE: El cronograma puede estar sujeto a modificación por inclemencias climáticas. Para más información comunicarse a través de nuestras redes.</p>
            <div className="gridSalidas">
                <div className="cardSalidas">
                    <h2>ENERO</h2>
                    <p>+ DESAFIO MALARGÜE MENDOZA</p>
                    <img src={enero} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>FEBRERO</h2>
                    <p>+ DESAFIO FIAMBALA</p>
                    <img src={febrero} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>MARZO</h2>
                    <p>+ DESAFIO VOLCAN GALAN CATAMARCA</p>
                    <img src={marzo} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>ABRIL</h2>
                    <p>+ DESAFIO CORDOBA</p>
                    <img src={abril} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>MAYO</h2>
                    <p>+ DESAFIO GUANDACOL - LA RIOJA</p>
                    <img src={mayo} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>JUNIO</h2>
                    <p>+ DESAFIO CATAMARCA - LA RIOJA</p>
                    <img src={junio} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>JULIO</h2>
                    <p>+ DESAFIO CAFAYATE SALTA</p>
                    <img src={julio} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>AGOSTO</h2>
                    <p>+ DESAFIO ARENA Y NIEVE MENDOZA</p>
                    <img src={agosto} className="completa" alt="" />
                    <img src={fin} className="imgFin" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>SEPTIEMBRE</h2>
                    <p>+ DESAFIO SALARES Y VOLCANES</p>
                    <img src={sept} alt="" />
                    <img src={pronto} className="cooming" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>OCTUBRE</h2>
                    <p>+ DESAFIO CORDOBA JUJUY</p>
                    <img src={oct} alt="" />
                    <img src={pronto} className="cooming" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>NOVIEMBRE</h2>
                    <p>+ DESAFIO MEXICANA LA RIOJA</p>
                    <img src={nov} alt="" />
                    <img src={pronto} className="cooming" alt="" />
                </div>
                <div className="cardSalidas">
                    <h2>DICIEMBRE</h2>
                    <p>+ DESAFIO DESPEDIDA 2023</p>
                    <img src={dic} alt="" />
                    <img src={pronto} className="cooming" alt="" />
                </div>
               
            </div>
        </div>
    )
}

export default Travesias