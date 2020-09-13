import React, { Fragment } from 'react'
import {Card, 
Button,CardGroup, CardDeck} from 'react-bootstrap'
import proyectouno from '../../assets/img/proyectouno.png'
import style from '../proyecto/ContenedorProyectos.module.css'
import proyectotres from '../../assets/img/proyectotres.png'
import gav from '../../assets/img/gav.png'
import {Link} from 'react-router-dom'


function ContenedorProyectos() {
    return (
       <React.Fragment>
         <div className={style.contenedorCards}>
      <CardDeck style={{borderRadius:"20px"}}>
  <Card className={style.card} style={{border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)"}}>
    <Card.Img variant="top" src={proyectouno}/>
    <Card.Body>
      <Card.Title><h5 className={style.japanQueen}>Japan Queen</h5></Card.Title>
      <Card.Text>
        <p className={style.appPara}>App para restaurantes que se origina como solución a la gestión de pedidos, eliminando el uso de comandas y toma de ordenes a mano.</p>
        <Link to="JapanQueen"><Button className={style.verProyectoUno} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"0%"}} >Ver Proyecto</Button></Link>
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)"}}>
    <Card.Img variant="top" src={gav}/>
    <Card.Body>
      <Card.Title><h5 className={style.pincelBook}>GAV</h5></Card.Title>
      <Card.Text>
        <p className={style.redSocial}>Sitio gamificado en donde se entrega información sobre el covid-19. Desarrollado para padres y tutores de niños entre 4 a 7 años.</p>
        <a target="_blank" href="https://ganemoslealcorona.netlify.app/"><Button className={style.verProyecto} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"4%"}} >Ver Proyecto</Button></a>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)"}}>
    <Card.Img variant="top" src={proyectotres} />
    <Card.Body>
      <Card.Title><h5 className={style.harryPotter}>Harry Potter Beginners</h5></Card.Title>
      <Card.Text>
       <p className={style.appInformativa}>App informativa, cuyo enfoque principal es mostrar datos claves para conocer a grandes rasgos, el universo de Harry Potter</p> 
       <Link to ="/HarryPotter"><Button className={style.verProyecto} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"4%"}} >Ver Proyecto</Button></Link>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
     </React.Fragment>
     
    )
}

export default ContenedorProyectos
