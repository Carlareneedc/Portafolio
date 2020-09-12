import React, { Fragment } from 'react'
import {Card, 
Button,CardGroup, CardDeck} from 'react-bootstrap'
import proyectouno from '../../assets/img/proyectouno.png'
import style from '../proyectoDos/ProyectosJapan.module.css'
import proyectotres from '../../assets/img/proyectotres.png'
import gav from '../../assets/img/gav.png'
import {Link} from 'react-router-dom'


function ProyectosJapan() {
    return (
       <React.Fragment>
         <div className={style.contenedorCardsJapan}>
      <CardDeck style={{borderRadius:"20px"}}>
  <Card style={{border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)"}}>
    <Card.Img variant="top" src={gav}/>
    <Card.Body>
      <Card.Title><h5 className={style.pincelBookJapan}>GAV</h5></Card.Title>
      <Card.Text>
        <p className={style.redSocialJapan}>Sitio gamificado en donde se entrega información sobre el covid-19. Desarrollado para padres y tutores de niños entre 4 a 7 años.</p>
        <a target="_blank" href="https://ganemoslealcorona.netlify.app/"><Button className={style.verProyectoJapan} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"4%"}} >Ver Proyecto</Button></a>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)"}}>
    <Card.Img variant="top" src={proyectotres} />
    <Card.Body>
      <Card.Title><h5 className={style.harryPotterJapan}>Harry Potter Beginners</h5></Card.Title>
      <Card.Text>
       <p className={style.appInformativaJapan}>App informativa, cuyo enfoque principal es mostrar datos claves para conocer a grandes rasgos, el universo de Harry Potter</p> 
       <Link><Button className={style.verProyectoJapanCont} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"4%"}} >Ver Proyecto</Button></Link>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
     </React.Fragment>
     
    )
}

export default ProyectosJapan
