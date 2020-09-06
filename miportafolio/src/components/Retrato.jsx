import React from 'react'
import '../style/Retrato.css'
import retrato from '../assets/img/retrato.png'


function Retrato() {
    return (
        <div>
        <div className="retrato"> <img className="retrato" alt="retrato" src={retrato}/></div>
        </div>
       
    )
}

export default Retrato