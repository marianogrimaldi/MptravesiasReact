import "./Traductor.scss"

import España from "../../assets/esp.png"
import Inglaterra from "../../assets/ing.png"
import Portugal from "../../assets/port.png"
import Alemania from "../../assets/ale.png"
import Francia from "../../assets/fra.png"
import { useTranslation } from 'react-i18next';


const Traductor = () => {

    const { t, i18n } = useTranslation();
    const cambiar = (lan)=>{
        localStorage.setItem("lang",lan);
        i18n.changeLanguage(lan);
    }
    return (
        
            <div className="flags">
                <img onClick={()=>{cambiar("es")}} src={España} alt="Bandera de España" />
                <img onClick={()=>{cambiar("en")}}src={Inglaterra} alt="Bandera de Inglaterra" />
                <img onClick={()=>{cambiar("port")}}src={Portugal} alt="Bandera de Portugal" />
                <img onClick={()=>{cambiar("ger")}}src={Alemania} alt="Bandera de Alemania" />
                <img onClick={()=>{cambiar("fr")}}src={Francia} alt="Bandera de Francia" />   
            </div>
           
    
    )
}

export default Traductor