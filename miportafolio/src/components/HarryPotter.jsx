import React from "react";
import "../style/HarryPotter.css";
import harrypotter from "../assets/img/harrypotter.png";
import { Card, Carousel } from "react-bootstrap";
import pantallainicio from "../assets/img/pantallainicio.png";
import vistamesero from "../assets/img/vistamesero.png";
import pedidos from "../assets/img/pedidos.png";
import FooterJapan from "./FooterJapan";
import proyectotresVer from "../assets/img/puntosabout.png";
import ProyectoHarry from '../components/proyectotres/ProyectoHarry'
import JapanQueenProyectoVer from "../assets/img/japanqueennores.png";
import experienciaPuntosHarry from "../assets/img/puntosjapanQueen.png";
import humans from "../assets/img/humans.png";
import flujoGrama from "../assets/img/flujopapel.png";
import flujoGramaDigi from "../assets/img/flujodig.png";
import sketch from "../assets/img/prototipobaja.jpg";
import wireframe from "../assets/img/newframe.jpg";
import wireframedos from "../assets/img/2.jpg";
import hpuno from "../assets/img/hpresult.png";
import hpdos from "../assets/img/hpresultdos.png";
import hptres from "../assets/img/hpresulttres.png";
import humansDos from '../assets/img/humaaansdos.png'

function HarryPotter() {
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
              <p className="expHa">
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
                relación a lo anterior, se propone a HP Beginners como <strong>"una
                mágica guía para principiantes y conocedores".</strong>
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
                      <p className="usuariosHarry">
                        <strong>Usuarios</strong>
                      </p>
                      <ul className="usuariosLista">
                        <li className="usuariosque">
                          Usuarios que quieran ver o hayan visto películas de
                          HP. Buscan entender mejor la historia sin tener que
                          leer el libro.
                        </li>
                        <li className="personasque">
                          Personas que comienzan a leer o están leyendo los
                          libros. Buscan complementar conocimientos.
                        </li>
                        <li className="yatienen">
                          Usuarios que ya tengan conocimientos de HP.
                        </li>
                      </ul>
                      <p className="datos">
                        <strong>
                          Datos relevantes que los usuarios han declarado que
                          buscan ver en la interfaz:{" "}
                        </strong>
                      </p>
                      <ul className="datoslista">
                        <li className="infoyvisual">
                          Información y visualidad de las casas a las que
                          pertenecen los personajes.{" "}
                          <strong>
                            <i>
                              (El usuario busca por ejemplo poder elegir una
                              casa a la cual pertenecer según las
                              particularidades de cada una)
                            </i>
                          </strong>
                        </li>
                        <li className="personajes">
                          Personajes principales y características. Cuales son
                          los más relevantes: Protagonistas/Antagonistas.{" "}
                          <strong>
                            <i>
                              (El usuario busca encontrar una afinidad con los
                              personajes de acuerdo a sus personalidades e
                              identidades)
                            </i>
                          </strong>
                        </li>
                        <li className="ocupaciones">
                          Ocupaciones o profesiones en Hogwarts. (El usuario
                          busca diferenciar entre estudiantes o staff)
                        </li>
                        <li className="acceder">
                          Acceder a un glosario de palabras/hechizos/criaturas
                          entre otros.{" "}
                          <strong>
                            <i>
                              (El usuario busca entender palabras que aparecen
                              en los libros y películas)
                            </i>
                          </strong>
                          Es importante aclarar que este punto, está pensado
                          como una mejora de la plataforma, ya que no
                          necesariamente será implementada ahora.
                        </li>
                      </ul>
                      <p className="pormedioHarry">
                        Para el desarrollo de esta plataforma, realizamos una
                        investigación previa para entender las necesidades de
                        nuestros usuarios con respecto a la navegación.
                      </p>
                      <p className="usuariosVerHarry">
                        Acorde a dichas necesidades, construimos un diagrama de
                        flujo en papel que representa una guía hacia lo que
                        luego presentamos como diagrama digital definitivo.
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
                        mencionada. Así mismo, definimos un diagrama de flujo
                        final.
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

<img
                          className="humansdos"
                          alt="humansdos"
                          src={humansDos}
                        />
                      </div>
                      <p className="sketch">
                        <strong>Sketch y wireframe</strong>
                      </p>
                      <p className="enbase">
                        En base a los datos recopilados definimos este sketch y
                        luego wireframe con correcciones agregadas.
                      </p>
                      <img className="sketchHarry" alt="sketch" src={sketch} />

                      <img
                        className="wireframe"
                        alt="wireframe"
                        src={wireframe}
                      />
                      <img
                        className="wireframeDos"
                        alt="wireframedos"
                        src={wireframedos}
                      />
                      <p className="visualidad">
                        Con respecto a la visualidad, elegimos imágenes que
                        hacen referencia a ciertos objetos importantes en el
                        mainstream de Harry Potter.{" "}
                      </p>

                      <p className="griff">
                        En cuanto a la gama cromática, utilizamos el patrón de
                        colores de la casa "Gryffindor", ya que la mayoría de
                        nuestros usuarios declararon ser fanáticos de esta casa
                        mágica. Si bien son dos colores, creemos que son los
                        suficientes para mantener una visual elegante y
                        distintiva, con el fin de no interferir con el resto de
                        la información que se muestra.{" "}
                      </p>
                      <p className="nuestro">
                        Nuestro principal objetivo es salirnos del imaginario
                        típico de HP, en relación a esto, nos gustaría a futuro
                        mejorar la página y utilizar una visualidad mucho más
                        pictórica.
                      </p>
                    </div>
                    <div className="contenedorHumansHarry">
                      <img className="humans" alt="humans" src={humans} />
                    </div>
                    <div className="solucionHarry">
                      <p className="solucionalHarry">
                        <hr className="lineaRojaSolucionHarry"></hr>Solución al
                        problema<hr className="lineaRojaSolucionDosHarry"></hr>
                      </p>
                      <p className="luegoDeInv">
                        Luego de investigar y analizar los datos recopilados,
                        concluimos que est app permitirá:
                        <ul className="luegoDe">
                          <li>
                            Obtener referencias acerca del mundo de Harry
                            Potter.
                          </li>
                          <li>
                            Encontrar información de manera simple y dinámica.
                          </li>
                          <li>Entender fácil y rápidamente la información.</li>
                        </ul>
                        <p className="lamejor">
                          La mejor manera de llevar a cabo estos hallazgos, fue
                          realizando una versión para desktop y móvil.
                        </p>
                      </p>

                  
                      <p className="resultadoHarry">
                        <hr className="lineaRojaResultadoHarry"></hr>Resultado
                        <hr className="lineaRojaResultadoDosHarry"></hr>
                      </p>
                    </div>
                    <div className="CarruselHarry">
                      <Carousel>
                        <Carousel.Item className="carruselespacioHarry">
                          <a
                            target="_blank"
                            href="https://carlareneedc.github.io/SCL013-data-lovers/src/index.html"
                          >
                            <img
                              className="d-block imgunoHarry"
                              src={hpuno}
                              alt="First slide"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item className="carruselespacio">
                          <a
                            target="_blank"
                            href="https://carlareneedc.github.io/SCL013-data-lovers/src/index.html"
                          >
                            <img
                              className="d-block imgunoHarry"
                              src={hpdos}
                              alt="Third slide"
                            />
                          </a>
                        </Carousel.Item>
                        <Carousel.Item className="carruselespacioHarry">
                          <a
                            target="_blank"
                            href="https://carlareneedc.github.io/SCL013-data-lovers/src/index.html"
                          >
                            <img
                              className="d-block imgunoHarry"
                              src={hptres}
                              alt="Third slide"
                            />
                          </a>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <Card
                      style={{ border: "none", borderRadius: "20px" }}
                      className="contenedorQueHarry"
                    >
                      <Card.Body>
                        <Card.Title>
                          <p className="queteHarry">
                            <hr className="lineaRojaqueHarry"></hr>¿Qué te gustó de
                            este proyecto?<hr className="lineaRojaqueDosHarry"></hr>
                          </p>
                        </Card.Title>
                        <Card.Text>
                          <p className="loquemasHarry">
                            Lo que más me gustó de este proyecto, fue el proceso
                            de investigación y testeo. Cada hallazgo que tuvimos
                            en estas fases, permitió que se logrará una visualidad distintiva.
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <p className="puedesVerHarry">
                      <hr className="linearojaPuedesHarry"></hr>Puedes ver otros
                      Proyectos<hr className="linearojaPuedesDosHarry"></hr>
                    </p>
                    <ProyectoHarry/>
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

export default HarryPotter;