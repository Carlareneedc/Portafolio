import React from 'react'
import '../style/JapanQueen.css'
import JapanQueenProyecto from '../assets/img/japanqueen.png'



function JapanQueen() {
    return (
        <div className="contenedorJapanQueen">
        <div className="japanQueenimg"> <img className="japanQueenimg" alt="japanQueenimg" src={JapanQueenProyecto}/>
        <div className="tituloJapan"><p className="jp"><hr className="lineaRojaJp"></hr>Japan Queen<hr className="lineaRojaJpDos"></hr></p>
        <div><p className="jPes">Japan Queen es una app web diseñada para restaurantes, que se origina como solución a la gestión de pedidos por medio de una interfaz simple y amigable, evitando el antiguo uso de comandas y toma de ordenes a mano.</p></div>
        <div className="rol">
            <p className="rolTexto" >Rol</p><p className="ux">UX/UI Designer</p><p className="fechaDe">Fecha del Proyecto</p><p className="julio">Julio 2020</p><p className="actividades">Actividades</p> 
            <div className="tagActividades"><p className="uxR">UX Research</p><p className="proto">Prototipo</p><p className="diseñoUi">Diseño UI</p>
            
            </div>
            <div className="experiencia"><p className="expJa"><hr className="lineaRojaJpTres"></hr>Experiencia Japan Queen<hr className="lineaRojaJpCuatro"></hr></p></div>
            <div ><p className="TextoInno">Como toda innovación, la app web Japan Queen se gesta en la búsqueda de <strong>mejorar la experiencia de usuario y como solución a un problema</strong> que debe ser acorde a las necesidades de nuestra época, esto es haciendo uso de las múltiples opciones que nos ofrece la tecnología.</p>
            <p className="desdeAqui">Desde aquí inicié una investigación enfocada en el cliente y el usuario para saber de qué manera podría <strong>modernizar la atención en restaurantes.</strong></p></div>
            </div>
        </div>
        </div>

        
        </div>
       
    )
}

export default JapanQueen