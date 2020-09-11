import React from "react";
import "../style/JapanQueen.css";
import JapanQueenProyecto from "../assets/img/japanqueen.png";
import { Card, Carousel } from "react-bootstrap";
import pantallainicio from "../assets/img/pantallainicio.png";
import vistamesero from "../assets/img/vistamesero.png";
import pedidos from "../assets/img/pedidos.png";
import FooterJapan from "./FooterJapan";
import proyectotresVer from '../assets/img/puntosabout.png'
import ProyectosJapan from '../components/proyectoDos/ProyectosJapan'


function JapanQueen() {
  return (
    <div className="contenedorJapanQueen">
      <div className="japanQueenimg">
        {" "}
        <img
          className="japanQueenimg"
          alt="japanQueenimg"
          src={JapanQueenProyecto}
        />
        <div className="tituloJapan">
          <p className="jp">
            <hr className="lineaRojaJp"></hr>Japan Queen
            <hr className="lineaRojaJpDos"></hr>
          </p>
          <div>
            <p className="jPes">
              Japan Queen es una app web diseñada para restaurantes, que se
              origina como solución a la gestión de pedidos por medio de una
              interfaz simple y amigable, evitando el antiguo uso de comandas y
              toma de ordenes a mano.
            </p>
          </div>
          <div className="rol">
            <p className="rolTexto">Rol</p>
            <p className="ux">UX/UI Designer</p>
            <p className="fechaDe">Fecha del Proyecto</p>
            <p className="julio">Julio 2020</p>
            <p className="actividades">Actividades</p>
            <div className="tagActividades">
              <p className="uxR">UX Research</p>
              <p className="proto">Prototipo</p>
              <p className="diseñoUi">Diseño UI</p>
            </div>
            <div className="experiencia">
              <p className="expJa">
                <hr className="lineaRojaJpTres"></hr>Experiencia Japan Queen
                <hr className="lineaRojaJpCuatro"></hr>
              </p>
            </div>
            <div className="textoExperiencia">
              <p className="TextoInno">
                Como toda innovación, la app web Japan Queen se gesta en la
                búsqueda de{" "}
                <strong>
                  mejorar la experiencia de usuario y como solución a un
                  problema
                </strong>{" "}
                que debe ser acorde a las necesidades de nuestra época, esto es
                haciendo uso de las múltiples opciones que nos ofrece la
                tecnología.
              </p>
              <p className="desdeAqui">
                Desde aquí inicié una investigación enfocada en el cliente y el
                usuario para saber de qué manera podría{" "}
                <strong>modernizar la atención en restaurantes.</strong>
              </p>
            </div>
          </div>
          <div className="contenedorElProblema">
            <Card
              className="cardContenedor"
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
                  <p>
                    <hr className="lineaRojaEl"></hr>El Problema
                    <hr className="lineaRojaElDos"></hr>
                  </p>
                </Card.Title>
                <div>
                  <div>
                    <Card.Text>
                      <div className="contenedorAlgunosCambian">
                        <p className="algunos">
                          <strong>
                            A algunos clientes les resulta difícil decidir al
                            momento de elegir un plato
                          </strong>
                        </p>
                        <p className="cambian">
                          <strong>
                            Cambian su pedido varias veces antes de finalizarlo
                          </strong>
                        </p>
                      </div>
                    </Card.Text>
                  </div>
                  <div className="quienSe">
                    <p className="textoQuien">
                      Quien se enfrenta a situación directamente es el mesero,
                      tomando en cuenta que hasta ese momento utilizaría lápiz y
                      papel para anotar la información del pedido. Esto supone
                      una gran dificultad.{" "}
                    </p>
                    <p className="siEl">
                      Si el cliente tiende a cambiar de decisión, no es posible
                      que el mesero anote y tache reiteradamente, produciendo
                      confusión en el resumen del pedido y generando otro
                      problema, el tiempo en que este llegaría a cocina y si
                      sería legible para el chef, al momento de preparar la
                      comida.
                    </p>
                    <div className="procesos">
                      <p className="textoProcesos">
                        <hr className="lineaRojaProcesos"></hr>Procesos
                        <hr className="lineaRojaProcesosDos"></hr>
                      </p>
                      <p className="pormedio">
                        Por medio de diversas entrevistas e indagaciones,
                        definimos tres tipos de usuarios, los que precisamos de
                        la siguiente forma:
                      </p>
                      <p className="usuariosVer">
                        <strong>Cliente (Usuario indirecto):</strong> Accederá a
                        esta plataforma por medio de otro usuario que es el
                        mesero.
                      </p>
                      <p className="mesero">
                        <strong>Mesero:</strong> Accederá a la plataforma para
                        generar el pedido del cliente
                      </p>
                      <p className="chef">
                        <strong>Chef:</strong> Recibirá el pedido
                      </p>
                    </div>
                    <div className="solucion">
                      <p className="resultado">
                        <hr className="lineaRojaResultado"></hr>Resultado
                        <hr className="lineaRojaResultadoDos"></hr>
                      </p>
                    </div>
                    <div className="Carrusel">
                      <Carousel >
                        <Carousel.Item className="carruselespacio">
                          <img
                            className="d-block imguno"
                            src={pantallainicio}
                            alt="First slide"
                          />
                        </Carousel.Item >
                        <Carousel.Item className="carruselespacio">
                          <img
                            className="d-block imguno"
                            src={vistamesero}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="carruselespacio">
                          <img
                            className="d-block imguno"
                            src={pedidos}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <Card style={{border:"none", borderRadius:"20px"}}className="contenedorQue">
  <Card.Body>
    <Card.Title><p className="quete">¿Qué te gustó de este proyecto?</p></Card.Title>
    <Card.Text>
    <p className="loquemas">Lo que más me gustó de este proyecto, fue poder darle una identidad visual al producto.  Fue un desafío poder encontrar una imagen representativa y a la vez legible y eficaz. Finalmente creo que el resultado superó mis propias espectativas.</p>
    </Card.Text>
  </Card.Body>
</Card>
<p className="puedesVer">Puedes ver otros Proyectos</p>
<ProyectosJapan/>
<FooterJapan/>
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
