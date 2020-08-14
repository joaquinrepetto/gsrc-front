import React, { useState, useEffect } from "react";

import banner from "../assets/img/images-servicios-10.jpg";

export default function ConsultorServices() {
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
                <a href="#">Servicios Consultoría</a>
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
                  <a style={{ color: "#AC0E20" }}>Servicios de Consultoría</a>
                  <ul className="lvl-2 vertical nested">
                    <li>
                      <a
                        onClick={() => setTab(0)}
                        style={{ color: tab === 0 ? "#AC0E20" : null }}
                      >
                        Consultoría y Compliance Tributario
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(1)}
                        style={{ color: tab === 1 ? "#AC0E20" : null }}
                      >
                        Consultoría Organizacional y Sistemas
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(2)}
                        style={{ color: tab === 2 ? "#AC0E20" : null }}
                      >
                        Tecnología
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
                <h2>Consultoría y Compliance Tributario</h2>
                <p>
                  Entendemos el asesoramiento como actitud proactiva para
                  procurar ahorros fiscales oportunos, dentro del marco legal.
                  Consideramos que la liquidación de las obligaciones fiscales
                  comienza antes del cierre del ejercicio fiscal, para apreciar
                  su impacto y permitir planificar en la búsqueda de la
                  optimización impositiva.
                </p>
                <h5>Ofrecemos:</h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Asesoramiento jurídico-impositivo y planificación de
                    negocios en asuntos vinculados con normativas y/o
                    transacciones internacionales, nacionales, provinciales o
                    municipales
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Asistencia y estrategias durante el desarrollo de
                    inspecciones
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Confección y/o revisión de declaraciones juradas de
                    cumplimiento mensual y/o anual
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Asesoramiento en gravámenes nacionales, provinciales y
                    municipales
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Planificación fiscal internacional
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Procedimientos de debida diligencia en adquisiciones de
                    empresas
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Estructuración de reorganizaciones libres de impuestos
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Cálculo del Impuesto Diferido
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Análisis de posiciones de impuestos de dudosa
                    recuperabilidad
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Recupero de créditos fiscales
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Recupero de saldos a favor de impuestos provinciales
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Asesoramiento en materia previsional
                  </li>
                </ul>
              </div>
            )}
            {tab === 1 && (
              <div className="primary-intro">
                <h2>Consultoría Organizacional y Sistemas</h2>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Contamos con un equipo de profesionales con amplia
                    experiencia en proyectos de complejos desarrollada en
                    importantes empresas multinacionales y consultoras
                    internacionales.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Contamos con una visión integral de proyectos de alta
                    complejidad.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Gerenciamos proyectos de consultoría en organización de
                    empresas y otros entes en general.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Diseñamos y asistimos a empresas en procesos de
                    redimensionamiento y reorganización.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Diseñamos y asistimos a empresas en procesos de
                    redimensionamiento y reorganización.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Contamos con metodología para el desarrollo de proyectos de
                    control de gestión, informes de avances y tableros de
                    comando.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Desarrollamos proyectos de implementación de sistemas
                    administrativos, comerciales, recursos humanos,
                    abastecimiento, industriales bajo diferentes plataformas
                    (entre otros SAP, ORACLE, JDEDWARDS, META 4).
                  </li>
                </ul>
              </div>
            )}
            {tab === 2 && (
              <div className="primary-intro">
                <h2>Tecnología</h2>
                <p>
                  Asesoramiento en legal tech. Entendemos tus necesidades con un
                  grupo de expertos en legales y tecnología, hacemos un
                  diagnóstico y proponemos soluciones. Somos tu socio en la
                  transformación digital.
                </p>
              </div>
            )}
            {tab === 3 && (
              <div className="primary-intro">
                <h2>Sociedades</h2>
                <h5>Consultoría y Asesoramiento:</h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    {" "}
                    Opinión sobre los aspectos generales y particulares,
                    ofreciendo alternativas y herramientas para la toma de
                    decisiones.
                  </li>
                </ul>

                <h5>Servicios:</h5>
                <ul>
                  {" "}
                  <li style={{ listStyleType: "disc" }}>
                    Constitución e inscripción de sociedades, uniones
                    transitorias de empresas y agrupaciones de colaboración
                    empresarial.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Modificación de Estatutos Sociales.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Fusiones, absorciones, escisiones y disoluciones de
                    sociedades: preparación de la documentación y tramitación
                    ante los Organismos de Control.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Redacción de actas de Directorio y Asambleas Accionistas.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Experiencia en Concursos Preventivos y Quiebras.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="callout3">
        <p
          style={{
            color: "white",
            marginTop: "30px",
            fontSize: "30px",
          }}
        >
          <strong>Andersen,</strong> es la firma miembro argentina de Andersen
          Global®,
        </p>
        <p
          style={{
            color: "white",
            marginTop: "30px",
            fontSize: "30px",
          }}
        >
          <strong>una asociación internacional de firmas miembro</strong>
        </p>
        <p
          style={{
            color: "white",
            marginTop: "30px",
            fontSize: "30px",
          }}
        >
          <strong>
            compuesta por profesionales legales y fiscales de todo el mundo.
          </strong>
        </p>
      </div>

      <div className="door"></div>
    </div>
  );
}
