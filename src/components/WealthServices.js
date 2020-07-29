import React, { useState, useEffect } from "react";

import banner from "../assets/img/images-servicios-11.jpg";
import banner2 from "../assets/img/image001.png";

export default function WealthServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className="inner services-detail">
        <div className="breadcrumbs-container-inner row large-collapse">
          <div className="column medium-8"></div>
        </div>
        <div className="breadcrumbs-container-inner row large-collapse">
          <div className="column medium-8">
            <div className="breadcrumbs service-sub">
              <span className="crumb home">
                <a href="/">Inicio</a>
              </span>
              <span className="crumb interior">
                <a href="#">Servicios</a>
              </span>
              <span className="crumb child">
                <a href="#">Servicios Wealth Management & Family Office</a>
              </span>
            </div>
          </div>

          <div className="column medium-4">
            <ul className="social-links inner">
              <p className="share-label">Share:</p>
              <li className="social-link facebook">
                <a href="#">Facebook</a>
              </li>
              <li className="social-link twitter">
                <a href="#">Twitter</a>
              </li>
              <li className="social-link linkedin">
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row hero-image">
          <img src={banner} alt="" />
        </div>

        <div className="row">
          <div className="sidebar-container column large-3 medium-4 small-12">
            <nav className="sidebar full">
              <ul className="lvl-1 veritcal-menu" data-accordion-menu>
                <li>
                  <a style={{ color: "#AC0E20" }}>
                    Servicios Wealth Management & Family Office
                  </a>
                  {/* <ul className="lvl-2 vertical nested">
                    <li>
                      <a onClick={() => setTab(0)}>
                        Consultoría y Compliance Tributario
                      </a>
                    </li>
                    <li>
                      <a onClick={() => setTab(1)}>
                        Consultoría Organizacional y Sistemas
                      </a>
                    </li>
                    <li>
                      <a onClick={() => setTab(2)}>Tecnología</a>
                    </li>
                  </ul> */}
                </li>
              </ul>
            </nav>

            <div className="right-rail mobile">
              <div className="right-rail-container">
                <div className="people-container">
                  <ul className="people">
                    <h4>Managing Directors</h4>

                    <li className="person">
                      <div className="image">
                        <img
                          src="assets/img/placeholders/headshot-1.png"
                          alt=""
                        />
                      </div>
                      <div className="name">Michael Kohner</div>
                    </li>

                    <li className="person">
                      <div className="image">
                        <img
                          src="assets/img/placeholders/headshot-2.png"
                          alt=""
                        />
                      </div>
                      <div className="name">
                        Yichen Shepard
                        <div className="location">San Francisco, CA</div>
                      </div>
                    </li>
                  </ul>

                  <a href="javascript:;" className="more">
                    <span
                      className="fa fa-caret-right"
                      aria-hidden="true"
                    ></span>
                    View More
                  </a>
                </div>

                <ul className="insights">
                  <h4>Insights &amp; Resources</h4>

                  <li className="insight">
                    <div className="type">
                      <span
                        className="fa fa-file-text"
                        aria-hidden="true"
                      ></span>{" "}
                      tax release
                    </div>

                    <h5 className="title">
                      Filing Requirements Related to Indirect Investments in
                      Foreign Entities
                    </h5>
                  </li>

                  <li className="insight">
                    <div className="type">
                      <span
                        className="fa fa-file-text"
                        aria-hidden="true"
                      ></span>{" "}
                      tax release
                    </div>

                    <h5 className="title">
                      Private Equity Funds "Trade or Business" Operator or
                      "Investor"
                    </h5>
                  </li>

                  <li className="insight">
                    <div className="type">
                      <span
                        className="fa fa-file-text-o white"
                        aria-hidden="true"
                      ></span>{" "}
                      white paper
                    </div>

                    <h5 className="title">Special FATCA Update</h5>
                  </li>
                </ul>

                <a href="javascript:;" className="more">
                  <span className="fa fa-caret-right" aria-hidden="true"></span>{" "}
                  View More
                </a>
              </div>

              <div className="newsletter">
                <h4>From the Newsletter</h4>

                <div className="inner right-rail-container">
                  <img src="assets/img/placeholders/light.jpg" alt="" />
                  <h5 className="title">
                    Avoiding Hazards in Transferring Carried Interests
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="column large-8 medium-8 small-12 top-story">
            {tab === 0 && (
              <div className="primary-intro">
                <h2>Servicios Wealth Management & Family Office</h2>
                <p>
                  Brindamos un servicio diseñado para que cada grupo familiar
                  pueda confiarnos sus asuntos patrimoniales, ejerciendo de back
                  office de su “familia empresaria”.
                </p>
                <p>
                  Integramos así en un mismo servicio, todos nuestros
                  conocimientos, experiencia y especialidades, con el sólido
                  objetivo de lograr:
                </p>
                <p>
                  • Un gobierno familiar efectivo, organizado y centralizado.
                </p>
                <p>
                  • Una correcta y eficiente administración y preservación del
                  patrimonio.
                </p>
                <p>
                  • Una estrategia diseñada a la medida de cada “familia
                  empresaria”, según sus propias metas de gestión patrimonial y
                  de optimización y protección de su patrimonio.
                </p>
                <p>
                  • Un acompañamiento estrecho por parte de profesionales
                  experimentados interdisciplinarios, para el diseño e
                  implementación de estructuras jurídico-fiscales eficaces.
                </p>
                <p>
                  • Una atención exclusiva por parte de nuestros socios, en pos
                  del bienestar económico y psico-social de la “familia
                  empresaria”
                </p>
                <p>
                  Apuntamos así a soluciones integrales y consensuadas con cada
                  grupo familiar, estrategia fundamental para evitar
                  contingencias y riesgos patrimoniales, a la par de optimizar
                  la gestión de los patrimonios involucrados.
                </p>
                <p>
                  A tales efectos, cumplimos con altísimos estándares de
                  confidencialidad y protección de datos, aspectos que no sólo
                  resultan garantizados desde un plano “de valores” (no
                  divulgación) sino también en un plano informático, aspecto en
                  el cual hemos adoptado medidas de avanzada, mediante el uso de
                  herramientas de cloud computing, encriptación y acceso
                  codificado.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <img src={banner2} />
      </div>
      <div className="door"></div>
    </div>
  );
}
