import React, { Fragment } from 'react'
import {Card, 
Button,CardGroup, CardDeck} from 'react-bootstrap'
import proyectouno from '../../assets/img/proyectouno.png'
import style from '../proyectoDos/ProyectosJapan.module.css'
import proyectotres from '../../assets/img/proyectotres.png'
import proyectodos from '../../assets/img/proyectodos.png'


function ProyectosJapan() {
    return (
       <React.Fragment>
         <div className={style.contenedorCardsJapan}>
      <CardDeck style={{borderRadius:"20px"}}>
  <Card style={{border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)"}}>
    <Card.Img variant="top" src={proyectodos}/>
    <Card.Body>
      <Card.Title><h5 className={style.pincelBookJapan}>Pincel Book</h5></Card.Title>
      <Card.Text>
        <p className={style.redSocialJapan}>Red social colaborativa, permite que los usuarios puedan compartir y conocer obras de aficionados a la fotografía e ilustración.</p>
        <Button className={style.verProyectoJapan} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"4%"}} >Ver Proyecto</Button>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)"}}>
    <Card.Img variant="top" src={proyectotres} />
    <Card.Body>
      <Card.Title><h5 className={style.harryPotterJapan}>Harry Potter Beginners</h5></Card.Title>
      <Card.Text>
       <p className={style.appInformativaJapan}>App informativa, cuyo enfoque principal es mostrar datos claves para conocer a grandes rasgos, el universo de Harry Potter</p> 
       <Button className={style.verProyectoJapanCont} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"4%"}} >Ver Proyecto</Button>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
     </React.Fragment>
     
    )
}

export default ProyectosJapan
