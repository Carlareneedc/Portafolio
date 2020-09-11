import React from 'react'
import '../style/FooterJapan.css'
import gitHub from '../assets/img/git.png'
import linkeDin from '../assets/img/linkedin.png'
import correo from '../assets/img/correo.png'



function FooterJapan() {
    return (
        <div className="contenedorFooterJapan">
            <div ><p className="textoFooterJapan">Editado con amor y magía por <span className="carlaDiazJapan"> &nbsp;Carla Díaz </span><span className="bolaCristalJapan"> &nbsp;🔮</span></p>
            <div className="inconosFooterJapan">
            <a target="_blank" href="https://github.com/Carlareneedc"><img className="git" alt="git" src={gitHub}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/carladiazc/"><img className="linkedin" alt="linkedin" src={linkeDin}/></a>
            <img className="correo" alt="correo" src={correo}/>
            </div> 
            </div>
        </div>
       
    )
}

export default FooterJapan