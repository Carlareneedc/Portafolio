import React from 'react'
import '../style/FooterSobreMi.css'
import gitHub from '../assets/img/git.png'
import linkeDin from '../assets/img/linkedin.png'
import correo from '../assets/img/correo.png'



function FooterSobreMi() {
    return (
        <div className="contenedorFooterSobreMi">
            <div ><p className="textoFooterSobreMi">Editado con amor y magía por <span className="carlaDiazSobreMi"> &nbsp;Carla Díaz </span><span className="bolaCristalSobreMi"> &nbsp;🔮</span></p>
            <div className="inconosFooterSobreMi">
            <a target="_blank" href="https://github.com/Carlareneedc"><img className="git" alt="git" src={gitHub}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/carladiazc/"><img className="linkedin" alt="linkedin" src={linkeDin}/></a>
            <img className="correo" alt="correo" src={correo}/>
            </div> 
            </div>
        </div>
       
    )
}

export default FooterSobreMi