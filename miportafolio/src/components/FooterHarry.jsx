import React from 'react'
import '../style/FooterHarry.css'
import gitHub from '../assets/img/git.png'
import linkeDin from '../assets/img/linkedin.png'
import correo from '../assets/img/correo.png'



function FooterHarry() {
    return (
        <div className="contenedorFooterHarry">
            <div ><p className="textoFooterHarry">Editado con amor y magía por <span className="carlaDiazHarry"> &nbsp;Carla Díaz </span><span className="bolaCristalHarry"> &nbsp;🔮</span></p>
            <div className="inconosFooterHarry">
            <a target="_blank" href="https://github.com/Carlareneedc"><img className="git" alt="git" src={gitHub}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/carladiazc/"><img className="linkedin" alt="linkedin" src={linkeDin}/></a>
            <a href="mailto:carla.renee.diazc@gmail.com"><img className="correo" alt="correo" src={correo}/></a>
            </div> 
            </div>
        </div>
       
    )
}

export default FooterHarry