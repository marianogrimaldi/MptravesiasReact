import "./Traductor.scss"

import España from "../../assets/esp.png"
import Inglaterra from "../../assets/ing.png"
import Portugal from "../../assets/port.png"
import Alemania from "../../assets/ale.png"
import Francia from "../../assets/fra.png"


const Traductor = () => {
    return (
        <div className="flags">
            <img src={España} alt="Bandera de España" />
            <img src={Inglaterra} alt="Bandera de Inglaterra" />
            <img src={Portugal} alt="Bandera de Portugal" />
            <img src={Alemania} alt="Bandera de Alemania" />
            <img src={Francia} alt="Bandera de Francia" />
        </div>
    )
}

export default Traductor