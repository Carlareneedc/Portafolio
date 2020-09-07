import React from 'react';
import RetratoSobreMi from '../components/RetratoSobreMi'
import puntosSobreMi from'../assets/img/puntosabout.png'
import '../style/SobreMi.css'
import {Card} from 'react-bootstrap'


function SobreMi () {
    return (
        <div className="contenedorSobreMi">
            <RetratoSobreMi/>
            <div className="puntosSobreMi"> <img className="puntosSobreMiImg" alt="puntosSobreMi" src={puntosSobreMi}/></div>
            <div className="encabezadoTextoSobreMi"><p className="unPoco"><hr className="lineaRojaSobreMi"></hr>Un poco más sobre mí</p><hr className="lineaRojaSobreMiDos"></hr></div>
            <div className="contenedorTextoSobreMi"><p className="miNombreEs"><span className="carlaDiazDos">Mi nombre es Carla Díaz.</span> Vivo en la constante búsqueda de conocimiento y capacitación. Me caracterizo por ser una persona reflexiva y empática, que busca siempre cuestionar problemas y así mismo buscar soluciones. </p></div>
            <div className="contenedorDisfruto"><p className="disfruto">Disfruto mucho de la vida social y de compartir con todo tipo de personas, pero por sobre todo, con gente creativa y positiva. Quienes me motivan para seguir creciendo y creando para compartir nuevas ideas con el mundo.</p></div>
            <div className="btnVerCurri"><button className="verCurri">Ver curriculum</button></div>
            <div className="contenedorMotivaciones">
            <Card style={{ width: "89.4%", height: "50vh", border:"none", borderRadius:"20px", boxShadow:"1px 4px 20px -1px rgba(43, 43, 43, 0.3)" }}>
  <Card.Body>
    <Card.Title style={{fontFamily:"Merriweather", fontWeight:"bold", color: "#595959", fontSize: "1.5em", marginTop:"1%"}}>Motivaciones Profesionales</Card.Title>
    <div className="contenedorCardText">
       <div>
            <Card.Text style={{fontFamily:"Montserrat", fontSize:"1em", lineHeight:"30px", textAlign:"left", width:"40vw"}}>
    Me declaro como una ferviente <span className="autodidacta">autodidacta</span>, siempre con la necesidad y motivación de crear. Estoy constantemente en reinvención, cumpliendo cada objetivo que me he propuesto en la vida. En el presente, mi interés por el diseño UX/UI ha crecido a medida que estoy más cerca de la tecnología y así también, la necesidad de convertirme en diseñadora, poder <span className="crearDiferentes">crear interfaces legibles, amigables y accesibles a las personas.</span>
    
    </Card.Text></div>
    <div className="siBien"><Card.Text style={{fontFamily:"Montserrat", fontSize:"1em", lineHeight:"30px", textAlign:"left"}}>Si bien no poseo una basta experiencia, tengo voluntad y disciplina, que creo es lo más importante ante cualquier desafío que se venga en el futuro, además de poder demostrar que soy una profesional que soluciona problemas con un enfoque creativo y siempre pensando en los usuarios. Creo firmemente que seré un aporte en cualquier equipo de trabajo.</Card.Text></div></div>
  </Card.Body>
</Card>
            </div>
            <div className="educacionHabilidades"><div className="educacion"><h1 className="educacionTexto">Educación</h1></div><p className="bootcamp">Bootcamp Laboratoria</p><p className="frontEnd">Frontend Developer</p></div>
        </div>
    );
}

export default SobreMi;