import React from 'react'
import '../style/Grids.css'
import {Link} from 'react-router-dom'
import grids from '../assets/img/grids.png'
import gridsresponsive from '../assets/img/gridresponsive.png'


function Grids() {
    return (
        <div>
        <div className="gridsNoRes "> <img className="grids" alt="grids" src={grids}/></div>
        <div className="grids"> <img className="grids" alt="grids" src={gridsresponsive}/></div>
  
</div>
       
    )
}

export default Grids