import React from 'react'
import '../style/Footer.css'
import gitHub from '../assets/img/git.png'
import linkeDin from '../assets/img/linkedin.png'
import correo from '../assets/img/correo.png'



function Footer() {
    return (
        <div className="contenedorFooter">
            <div ><p className="textoFooter">Editado con amor y magía por <span className="carlaDiaz"> &nbsp;Carla Díaz </span><span className="bolaCristal"> &nbsp;🔮</span></p>
            <div className="inconosFooter">
            <a target="_blank" href="https://github.com/Carlareneedc"><img className="git" alt="git" src={gitHub}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/carladiazc/"><img className="linkedin" alt="linkedin" src={linkeDin}/></a>
            <a href="mailto:carla.renee.diazc@gmail.com"><img className="correo" alt="correo" src={correo}/></a>
            </div> 
            </div>
        </div>
       
    )
}

export default Footer