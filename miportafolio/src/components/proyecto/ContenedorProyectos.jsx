import React, { Fragment } from 'react'
import {Card, 
Button,CardGroup, CardDeck} from 'react-bootstrap'
import proyectouno from '../../assets/img/proyectouno.png'
import style from '../proyecto/ContenedorProyectos.module.css'
import proyectotres from '../../assets/img/proyectotres.png'
import proyectodos from '../../assets/img/proyectodos.png'


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
        <Button className={style.verProyecto} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"0%"}} >Ver Proyecto</Button>
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)"}}>
    <Card.Img variant="top" src={proyectodos}/>
    <Card.Body>
      <Card.Title><h5 className={style.pincelBook}>Pincel Book</h5></Card.Title>
      <Card.Text>
        <p className={style.redSocial}>Red social colaborativa, permite que los usuarios puedan compartir y conocer obras de aficionados a la fotografía e ilustración.</p>
        <Button className={style.verProyecto} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"4%"}} >Ver Proyecto</Button>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)"}}>
    <Card.Img variant="top" src={proyectotres} />
    <Card.Body>
      <Card.Title><h5 className={style.harryPotter}>Harry Potter Beginners</h5></Card.Title>
      <Card.Text>
       <p className={style.appInformativa}>App informativa, cuyo enfoque principal es mostrar datos claves para conocer a grandes rasgos, el universo de Harry Potter</p> 
       <Button className={style.verProyecto} style ={{borderColor:"#FF3C38", backgroundColor:"#FF3C38", fontWeight:"bold", display:"flex", marginTop:"4%"}} >Ver Proyecto</Button>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
     </React.Fragment>
     
    )
}

export default ContenedorProyectos
