import React from 'react';
import RetratoSobreMi from '../components/RetratoSobreMi'
import puntosSobreMi from'../assets/img/puntosabout.png'
import '../style/SobreMi.css'
import {Card} from 'react-bootstrap'
import calendar from '../assets/img/calendar.png'
import photoshop from '../assets/img/photoshop.png'
import illustrator from '../assets/img/illustrator.png'
import figma from '../assets/img/figma.png'
import boostrap from '../assets/img/boostrap.png'
import githubdos from '../assets/img/github.png'
import invision from '../assets/img/invission.png'


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
            <div className="educacionHabilidades">
                <div className="educacion">
                    <h1 className="educacionTexto">Educación</h1>
                    
                    <p className="bootcamp">Bootcamp Laboratoria</p>
                    <div className="bootcampLab">
                    <p className="frontEnd">Frontend Developer</p>
                    <div className="fechas">
                        <img className="calendar" alt="calendar" src={calendar}/>
                        <p className="marzoSeptiembre"> &nbsp; Marzo - Septiembre 2020</p>
                    </div>
                    </div>
                    <p className="universidad">Universidad UNIACC</p>
                    <div className="uniacc">
                    <p className="diplomado">Diplomado en Gestión Cultural</p>
                    <div className="fechasDos"><img className="calendar" alt="calendar" src={calendar}/>
                    <p className="noviembre"> &nbsp; Noviembre 2012</p>
                    </div>
                    </div>
                    <p className="universidad">Universidad UNIACC</p>
                    <div className="artesVisuales">
                    <p className="artes">Artes Visuales y Fotografía</p>
                    <div className="fechasTres"><img className="calendar" alt="calendar" src={calendar} />
                    <p className="marzoNoviembre"> &nbsp; Marzo 2008 - Noviembre 2012</p>
                    </div>
                    </div>
                    </div>
                    <div className="habilidades">
                        <h1 className="habilidadesTexto">Habilidades</h1>
                        <div className="tagSobreMi">
                            <p className="design">Design Thinking</p>
                            <p className="dcu">Metodología DCU</p>
                            <p className="wire">Wireframing</p>
                            <p className="css">CSS</p>
                            <p className="user">User persona</p>
                            <p className="bench">Benchmark</p>
                            <p className="html">HTML</p>
                            <p className="react">React</p>
                            <p className="js">JavaScript</p>
                        </div>
                        <h1 className="habilidadesBlandas">Habilidades Blandas</h1>
                        <div className="tagHabilidades">
                            <p className="empatica">Empática</p>
                            <p className="reflexiva">Reflexiva</p>
                            <p className="analitica">Analítica</p>
                            <p className="adaptable">Adaptable</p>
                            <p className="sociable">Sociable</p>
                            <p className="creativa">Creativa</p>
                        </div>
                    </div>
            </div>
            <div className="herramientas">
                <p className="textoHerramientas">Herramientas</p>
                <div className="contenedorHerramientas">
                <div className="ph"><div className="herrP"><img className="photoshop" alt="photoshop" src={photoshop}/>
                <p className="photo">Photoshop</p></div>
                <div className="ill"><img className="illustrator" alt="illustrator" src={illustrator}/>
                <p className="ilus">Illustrator</p></div></div>
                <div className="fi">
                <div className="figm"><img className="figma" alt="figma" src={figma}/>
                <p className="fig">Figma</p></div>
                <div className="trap"><img className="boostrap" alt="boostrap" src={boostrap}/>
                <p className="boos">Boostrap</p></div></div>
                <div className="giHu">
               <div className="gtd"><img className="githubdos" alt="githubdos" src={githubdos}/>
                <p className="gitDos">GitHub</p></div>
                <div className="invA"><img className="invision" alt="invision" src={invision}/>
                <p className="inv">InVision</p></div>
                </div>

                </div>
                </div>
        </div>
    );
}

export default SobreMi;