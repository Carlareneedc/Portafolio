import React from "react";
import "../style/HarryPotter.css";
import harrypotter from "../assets/img/harrypotter.png";
import { Card, Carousel } from "react-bootstrap";
import pantallainicio from "../assets/img/pantallainicio.png";
import vistamesero from "../assets/img/vistamesero.png";
import pedidos from "../assets/img/pedidos.png";
import FooterJapan from "./FooterJapan";
import proyectotresVer from "../assets/img/puntosabout.png";
import ProyectosJapan from "../components/proyectoDos/ProyectosJapan";
import JapanQueenProyectoVer from "../assets/img/japanqueennores.png";
import experienciaPuntosHarry from "../assets/img/puntosjapanQueen.png";
import humans from "../assets/img/humans.png";
import flujoGrama from '../assets/img/flujopapel.png'
import flujoGramaDigi from '../assets/img/flujodig.png'

function JapanQueen() {
  return (
    <div className="contenedorHarryPotter">
      <div className="harryPotter">
        {" "}
        <img className="harryPotterImg" alt="HarryPotter" src={harrypotter} />
        <div className="tituloHarry">
          <p className="hp">
            <hr className="lineaRojahp"></hr>Harry Potter Beginners
            <hr className="lineaRojahpDos"></hr>
          </p>
          <div className="contenedortextoHarry">
            <p className="hpes">
              Harry Potter Beginners, es una app informativa, cuyo enfoque
              principal es mostrar datos claves para conocer a grandes rasgos,
              el universo de Harry Potter. Tomando como antecedente la saga de
              libros y películas de este fantástico mundo.
            </p>
          </div>
          <div className="rolHarry">
            <p className="rolTextoHarry">Rol</p>
            <p className="uxHarry">UX/UI Designer</p>
            <p className="fechaDeHarry">Fecha del Proyecto</p>
            <p className="mayo">Mayo 2020</p>
            <p className="actividadesHarry">Actividades</p>
            <div className="tagActividadesHarry">
              <p className="uxRHarry">UX Research</p>
              <p className="protoHarry">Prototipo</p>
              <p className="diseñoUiHarry">Diseño UI</p>
              <p className="testeo">Testeo</p>
            </div>
            <div className="experienciaPuntosHarry">
              {" "}
              <img
                className="experienciaPuntos"
                alt="experienciaPuntos"
                src={experienciaPuntosHarry}
              />
            </div>

            <div className="experienciaHarry">
              <p className="expJa">
                <hr className="lineaRojaJpTresHarry"></hr>Una mágica guía para
                principiantes y conocedores
                <hr className="lineaRojaJpCuatroHarry"></hr>
              </p>
            </div>
            <div className="textoExperienciaHarry">
              <p className="TextoInnoHarry">
                HP Beginners, se gesta a través de la simple necesidad de
                nuestros usuarios de conocer más, acerca de este imaginario.{" "}
                <strong>Evocando referencias sencillas y poco comunes</strong>{" "}
                con respecto a la visualidad del mundo de Harry Potter. En
                relación a lo anterior, se propone a HP Beginners como "una
                mágica guía para principiantes y conocedores".
              </p>
              <p className="desdeAquiHarry">
                Un mini diccionario o guía según lo dice su nombre, en el que
                puedes{" "}
                <strong>
                  acceder fácilmente a un contenido que será un ayuda memoria{" "}
                </strong>
                tanto para los que estén recién conociendo, como para los que ya
                sean especialistas en el tema.
              </p>
            </div>
          </div>
          <div className="contenedorElProblemaHarry">
            <Card
              className="cardContenedorHarry"
              style={{
                border: "none",
                borderRadius: "20px",
                boxShadow: "1px 4px 20px -1px rgba(43, 43, 43, 0.3)",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "1.4em",
                    color: "#595959",
                    fontFamily: "Merriweather",
                  }}
                >
                  <p className="elProblemaHarry">
                    <hr className="lineaRojaElHarry"></hr>El Problema
                    <hr className="lineaRojaElDosHarry"></hr>
                  </p>
                </Card.Title>
                <div>
                  <div>
                    <Card.Text>
                      <div className="contenedorAlgunosCambianHarry">
                        <p className="algunosHarry">
                          <strong>
                            El 90% de la data que existe hoy ha sido creada
                            durante los últimos dos años. Cada día generamos 2.5
                            millones de terabytes de datos.
                          </strong>
                        </p>
                        <p className="cambianHarry">
                          <strong>
                            Los datos por sí mismos son de poca utilidad{" "}
                          </strong>
                        </p>
                      </div>
                    </Card.Text>
                  </div>
                  <div className="quienSeHarry">
                    <p className="textoQuienHarry">
                      Para que esas grandes cantidades de datos se conviertan en
                      información fácil de leer para los usuarios, necesitamos
                      entender y procesar estos datos. Una manera simple de
                      hacerlo es creando interfaces y visualizaciones.
                    </p>
                    <p className="siElHarry">
                      El objetivo principal de esta web, es mejorar la
                      experiencia de usuario a través de la visualidad y la
                      información que se entregará. Se presenta como una
                      plataforma sencilla y de fácil navegación, donde los
                      usuarios podrán a acceder a contenidos como: tips acerca
                      de personajes, casas, filtrar datos, ordenar
                      alfabéticamente, además de tener una vista simple en
                      cuanto imágenes de cada punto mencionado.
                    </p>
                    <div className="procesosHarry">
                      <p className="textoProcesosHarry">
                        <hr className="lineaRojaProcesosHarry"></hr>Procesos
                        <hr className="lineaRojaProcesosDosHarry"></hr>
                      </p>
                      <p className="pormedioHarry">
                        Para el desarrollo de esta plataforma, realicé una
                        investigación previa para entender las necesidades de
                        nuestros usuarios con respecto a la navegación.
                      </p>
                      <p className="usuariosVerHarry">
                        Acorde a dichas necesidades, construí un diagrama de
                        flujo en papel que representa una guía hacia lo que
                        luego presenté como diagrama digital definitivo. según
                        esto definí una planificación.
                      </p>
                      <div className="flujo">
                      <img
                className="flujograma"
                alt="flujograma"
                src={flujoGrama}
              />
                      </div>
                      <p className="comoseHarry">
                        Como se puede apreciar, el primer flujograma contiene
                        indicaciones y características que luego acotamos y
                        mejoramos de acuerdo a la investigación antes
                        mencionada. Así mismo, definimos dos nuevos diagramas de
                        flujo.
                      </p>
                     
                      <p className="eseflujo">
                        Este flujo corresponde a la iteración del segundo
                        diagrama, el que corregimos según el feedback de nuestro
                        cliente para simplificar la funcionalidad de la
                        plataforma.
                      </p>
                      <div className="flujodigital">
                      <img
                className="flujogramaDig"
                alt="flujogramadig"
                src={flujoGramaDigi}
              />
                      </div>
                    </div>
                    <div className="contenedorHumans">
                      <img className="humans" alt="humans" src={humans} />
                    </div>
                    <div className="solucion">
                      <p className="solucional">
                        <hr className="lineaRojaSolucion"></hr>Solución al
                        problema<hr className="lineaRojaSolucionDos"></hr>
                      </p>
                      <p className="segun">
                        Según nuestra investigación, diferentes iteraciones y
                        entrevistas de usuario, decidimos que la mejor solución
                        sería diseñar una interfaz que funcione por medio de
                        Tablet y computador, en la que como principal objetivo,
                        se podrá tomar pedidos, eliminar y cambiar según la
                        decisión del cliente.
                      </p>
                      <a
                        target="_blank"
                        href="https://burger-queen2020.web.app/"
                      >
                        <p className="aquiPuedes">
                          <strong>
                            Aquí puedes saber más acerca de Japan Queen
                          </strong>
                        </p>
                      </a>
                      <p className="resultado">
                        <hr className="lineaRojaResultado"></hr>Resultado
                        <hr className="lineaRojaResultadoDos"></hr>
                      </p>
                    </div>
                    <div className="Carrusel">
                      <Carousel>
                        <Carousel.Item className="carruselespacio">
                          <a
                            target="_blank"
                            href="https://burger-queen2020.web.app/"
                          >
                            <img
                              className="d-block imguno"
                              src={pantallainicio}
                              alt="First slide"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item className="carruselespacio">
                          <a
                            target="_blank"
                            href="https://burger-queen2020.web.app/mesero"
                          >
                            <img
                              className="d-block imguno"
                              src={vistamesero}
                              alt="Third slide"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item className="carruselespacio">
                          <a
                            target="_blank"
                            href="https://burger-queen2020.web.app/chef"
                          >
                            <img
                              className="d-block imguno"
                              src={pedidos}
                              alt="Third slide"
                            />
                          </a>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <Card
                      style={{ border: "none", borderRadius: "20px" }}
                      className="contenedorQue"
                    >
                      <Card.Body>
                        <Card.Title>
                          <p className="quete">
                            <hr className="lineaRojaque"></hr>¿Qué te gustó de
                            este proyecto?<hr className="lineaRojaqueDos"></hr>
                          </p>
                        </Card.Title>
                        <Card.Text>
                          <p className="loquemas">
                            Lo que más me gustó de este proyecto, fue poder
                            darle una identidad visual al producto. Fue un
                            desafío poder encontrar una imagen representativa y
                            a la vez legible y eficaz. Finalmente creo que el
                            resultado superó mis propias espectativas.
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <p className="puedesVer">
                      <hr className="linearojaPuedes"></hr>Puedes ver otros
                      Proyectos<hr className="linearojaPuedesDos"></hr>
                    </p>
                    <ProyectosJapan />
                    <FooterJapan />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JapanQueen;
