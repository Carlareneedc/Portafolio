import React, { Fragment } from 'react'
import '../style/Inicio.css'
import Retrato from '../components/Retrato'
import puntos from '../assets/img/puntos.png'
import EtiquetasNombre from '../components/EtiquetasNombre'
import ContenedorProyectos from '../components/proyecto/ContenedorProyectos'
import puntosRes from '../assets/img/puntosresponsive.png'



function Inicio() {
    return (
      
        <div className="contenedorMayorInicio">
            
       <Retrato/>
       <div className="puntos"> 
       <img className="puntos" alt="puntos" src={puntos}/></div>
       <div className="puntosRes">
       <img className="puntosresP" alt="puntosres" src={puntosRes}/></div>

       <div className="contenedorTextoInicio"><h5 className="hola">Hola, soy <span className="carla"> &nbsp;Carla </span></h5>
       <EtiquetasNombre/>
       </div>
       <div className="contenedorTextoInicioDos"><p className="textoInicio">Vivo en Santiago, Chile. UX/UI Designer autodidacta.</p>
       <mark className="textoSubrayado"></mark>
       </div>
       <div className="contenedorTextoSoyUna">
       <p className="soyUna">Soy una entusiasta investigadora, solucionadora de problemas y amante de la vida social.</p>
       </div>
       <div id="Proyectos" className="ctnPro">
        <p className="textoProyectos"><hr className="lineaRoja"></hr>Proyectos<hr className="lineaRojaDos"></hr></p>
        </div>
       <div className="ctnProComp"><ContenedorProyectos/></div>
       <div className="contTePuedo">
           <p className="tePuedoAyudar"><hr className="lineaRojaTres"></hr>Te puedo ayudar con esto<hr className="lineaRojaCuatro"></hr></p>
           <div className="tags">
             <p className="tagUno">Research</p>
             <p className="tagDos">Benchmark</p>
             <p className="tagTres">Sketching</p>
             <p className="tagCuatro">Wireframing</p>
             <p className="tagCinco">Prototyping</p>
             <p className="tagSeis">Testing</p>
             
           </div>
       </div>
      
       </div>
      
    
    )
}

export default Inicio
