import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import banner from "../assets/img/images-servicios-09.jpg";
import banner2 from "../assets/img/image001.png";

export default function Bpo() {
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
                <Link to="/">
                  <a>Inicio</a>
                </Link>
              </span>
              <span className="crumb interior">
                <Link to="/servicios">
                  <a>Servicios</a>
                </Link>
              </span>
              <span className="crumb child">
                <a>Business Process Outsourciong (BPO)</a>
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
                    Business Process Outsourciong (BPO)
                  </a>
                  <ul className="lvl-2 vertical nested">
                    <li>
                      <a
                        onClick={() => setTab(0)}
                        style={{ color: tab === 0 ? "#AC0E20" : null }}
                      >
                        Outsourcing de Nóminas
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(1)}
                        style={{ color: tab === 1 ? "#AC0E20" : null }}
                      >
                        Outsourcing Contable e Impositivo
                      </a>
                    </li>
                  </ul>
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
                <h2>Outsourcing de Nóminas</h2>
                <h5>Consultoría y Asesoramiento:</h5>
                <p>
                  Opinión sobre los aspectos generales y particulares,
                  ofreciendo alternativas y herramientas para la toma de
                  decisiones.
                </p>
                <h5>
                  Liquidación de sueldos y jornales y cargas sociales/fiscales:
                </h5>
                <p>
                  • Liquidación de sueldos y sus cargas sociales y fiscales.
                </p>
                <p>• Preparación de nóminas confidenciales.</p>
                <p>• Confección y emisión de los recibos de haberes.</p>
                <p>• Emisión del libro de sueldos rubricado.</p>
                <p>• Confección de asientos contables.</p>
                <p>
                  • Emisión de reportes especiales a pedido de las empresas.
                </p>
                <p>• Asesoramiento en caso de desvinculación laboral.</p>
                <p>• Proyecciones de costos laborales y/o remuneraciones.</p>
                <p>
                  • Atención de inspecciones y/o contestación de requerimientos
                  de organismos de control.
                </p>
              </div>
            )}
            {tab === 1 && (
              <div className="primary-intro">
                <h2>Outsourcing Contable e Impositivo</h2>

                <p>
                  Sabemos implementar fórmulas operativas eficientes para la
                  tercerización de procesos. Nuestros servicios incluyen:
                </p>
                <h5>Procesos Administrativos:</h5>
                <p>• Establecimiento de circuitos administrativos.</p>
                <p>• Facturación.</p>
                <p>• Tesorería.</p>
                <p>• Toma de inventarios.</p>
                <h5>Aspectos Contables, Laborales e Impositivos:</h5>
                <p>• Contabilidad.</p>
                <p>• Análisis de cuentas y conciliaciones.</p>
                <p>• Control presupuestario.</p>
                <p>• Reportes mensuales,</p>
                <p>• Liquidación de impuestos y tasas.</p>
                <p>
                  • Liquidación de nómina y obligaciones de la Seguridad Social.
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
