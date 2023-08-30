import "./Nosotros.scss"
import fotoNos from "../../assets/primerPlano.jpg"
import icasa from "../../assets/logoMarcas/icasa.png"
import video from "../../assets/logoVideo.png"

const Nosotros = () =>{
    return (
        <div className="animation"> 
            <h1 className="titileMpt">M.P. TRAVESÍAS +</h1>
            <p className="pMpt">Mi nombre es Marcelo Puchatt, tengo 53 años, nací en la provincia del Chaco y hace dos décadas que estoy radicado en La Falda, en las Sierras de Córdoba, Argentina. Mi carrera como guía profesional comenzó en el año 2002, pero mi afición empezó mucho antes. Cuando cumplí 5 años, mi papá me regaló mi primera moto. Vengo de una familia de motoqueros. Mi abuelo, amante de la aventura, fue un gran referente para mí. Él fue rescatista en el Chaco y Jefe de mecánicos. Mi padre me inculcó la pasión por las motos y los autos y son hoy mi fuente de trabajo. A lo largo de mi carrera, hice un poco de todo: corrí en camionetas, cuatris y motos. Fui parte del equipo de Daniel Mazzucco en el Dakar como Mecánico dos años y en otras competencias. Esa sostenida práctica de navegación y la veteranía para guiar en las montañas, desiertos, ríos, salares y a través de lugares inhóspitos, hacen que hoy pueda transmitir mis conocimientos a quien decida vivir conmigo las travesías, pudiendo realizarlas con asesoramiento, pericia y total seguridad. Amo profundamente lo que hago, y esa pasión volcada al trabajo arduo, es la que me propongo permear en aquellos que me conocen. En cada una de las travesías, aparte de asegurar un recorrido de excelencia, brindo asistencia mecánica permanente y autorizada, en el caso de que algún vehículo falle o requiera soporte técnico. LOS INVITO ENTONCES A SER PARTE DE ESTE MUNDO MARAVILLOSO DE LAS TRAVESIAS EN CUATRI Y UTV, GARANTIZÁNDOLES UNA EXPERIENCIA ÚNICA E INOLVIDABLE!!!</p>
            <div>
                <div className="trianguloNos"></div>
                <div className="trianguloNos2"></div>
                <div className="trianguloNos3"></div>
            </div>
            <img src={fotoNos} className="imgFondo" alt="Foto Marcelo Puchatt" />
            <img src={icasa} className="logoIcasaNos" alt="Logo Icasa" />
            <a href="https://www.instagram.com/p/Cv90zW-NcrY/" target="blank"><img src={video} className="logoVideo" alt="Logo Video" /></a>
        </div>
    )
}

export default Nosotros