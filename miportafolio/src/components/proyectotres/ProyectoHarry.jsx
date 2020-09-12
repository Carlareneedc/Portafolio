import React, { Fragment } from 'react'
import {Card, 
Button,CardGroup, CardDeck} from 'react-bootstrap'
import style from '../proyectotres/ProyectoHaryy.module.css'
import proyectouno from '../../assets/img/proyectouno.png'
import gav from '../../assets/img/gav.png'
import {Link} from 'react-router-dom'


function ProyectosJapan() {
    return (
       <React.Fragment>
         <div className={style.contenedorCardsHarry}>
      <CardDeck style={{borderRadius:"20px"}}>
  <Card style={{border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)"}}>
    <Card.Img variant="top" src={gav}/>
    <Card.Body>
      <Card.Title><h5 className={style.gavHarry}>GAV</h5></Card.Title>
      <Card.Text>
        <p className={style.sitioGav}>Sitio gamificado en donde se entrega información sobre el covid-19. Desarrollado para padres y tutores de niños entre 4 a 7 años.</p>
        <a target="_blank" href="https://ganemoslealcorona.netlify.app/"><Button className={style.verProyectoHarryUno} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"4%"}} >Ver Proyecto</Button></a>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)"}}>
  <Card.Img variant="top" src={proyectouno}/>
    <Card.Body>
      <Card.Title><h5 className={style.japanQueenHarry}>Japan Queen</h5></Card.Title>
      <Card.Text>
        <p className={style.appParaHarry}>App para restaurantes que se origina como solución a la gestión de pedidos, eliminando el uso de comandas y toma de ordenes a mano.</p>
        <Link to="JapanQueen"><Button className={style.verProyectoHarry} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"0%"}} >Ver Proyecto</Button></Link>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
     </React.Fragment>
     
    )
}

export default ProyectosJapan
