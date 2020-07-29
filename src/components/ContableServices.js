import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import banner from "../assets/img/images-servicios-09.jpg";

export default function ContableServices() {
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
                <a>Servicios Legales</a>
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
                    Servicios Tributarios y Contables
                  </a>
                  <ul className="lvl-2 vertical nested">
                    <li>
                      <a
                        onClick={() => setTab(0)}
                        style={{ color: tab === 0 ? "#AC0E20" : null }}
                      >
                        Precios de Transferencia
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(1)}
                        style={{ color: tab === 1 ? "#AC0E20" : null }}
                      >
                        Consultoría y Compliance Tributario
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => setTab(2)}
                        style={{ color: tab === 2 ? "#AC0E20" : null }}
                      >
                        Payroll
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(3)}
                        style={{ color: tab === 3 ? "#AC0E20" : null }}
                      >
                        Outsourcing
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(4)}
                        style={{ color: tab === 4 ? "#AC0E20" : null }}
                      >
                        Sociedades
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
                <h2>Precios de transferencia</h2>
                <p>
                  El precio de transferencia se ha convertido en una de las
                  áreas clave de los impuestos internacionales.
                </p>
                <p>
                  Por lo tanto, la mayoría de los países tienen reglas y
                  regulaciones de PT muy estrictas para que las autoridades
                  fiscales puedan asegurarse de que se cumpla el estándar de
                  plena competencia en las transacciones realizadas entre partes
                  relacionadas.
                </p>
                <p>
                  Casi todos los países latinoamericanos, excepto Paraguay,
                  aplican los principios y lineamientos desarrollados por la
                  OCDE.
                </p>
                <p>
                  Las leyes argentinas han adoptado parámetros similares, pero
                  han ampliado los controles a las transacciones realizadas con
                  personas que residen en jurisdicciones de cero o bajos
                  impuestos o jurisdicciones que no cooperan, incluso cuando no
                  son partes relacionadas. También incluye algunos controles
                  especiales sobre exportaciones e importaciones enrutadas
                  (triangulaciones) y un Registro especial para exportaciones de
                  productos básicos.
                </p>
                <p>
                  Las leyes argentinas han adoptado parámetros similares, pero
                  han ampliado los controles a las transacciones realizadas con
                  personas que residen en jurisdicciones de cero o bajos
                  impuestos o jurisdicciones que no cooperan, incluso cuando no
                  son partes relacionadas. También incluye algunos controles
                  especiales sobre exportaciones e importaciones enrutadas
                  (triangulaciones) y un Registro especial para exportaciones de
                  productos básicos.
                </p>
                <h5>Cumplimiento con normativas de control:</h5>
                <p>
                  • Preparamos o revisamos los Estudios de Precios de
                  Transferencia preparados por los clientes asegurando el
                  cumplimiento de la normativa aplicable. Los Estudios incluyen
                  el proceso de comparabilidad a cuyo efecto aplicamos la
                  rigurosidad necesaria para minimizar posibles controversias
                  con la autoridad fiscal.
                </p>
                <p>
                  Los Estudios comprenden la preparación del local file y del
                  master file y de las declaraciones juradas que correspondan
                  ser presentadas.
                </p>
                <p>
                  Asistimos sobre las obligaciones a completar en operaciones de
                  triangulación de importaciones y exportaciones y en la
                  registración de operaciones con commodities.
                </p>
                <p>
                  Preparamos informes preliminares para asistir en el diseño de
                  las políticas de precios de transferencia del grupo
                  multinacional.
                </p>
                <p>
                  Asistimos en la preparación del “Informe país por país” y en
                  el cumplimiento de las obligaciones de información que deben
                  observar las empresas subsidiarias de grupos multinacionales.
                </p>
                <h5>Coordinación regional:</h5>
                <p>
                  Nuestra presencia regional nos permite obtener una visión
                  amplia de las operaciones internacionales, transfiriendo
                  experiencias entre países y logrando coherencia en la
                  aplicación de las políticas de Precios de Transferencia de
                  nuestros clientes.
                </p>
                <p>
                  • En el caso de los servicios de asesoramiento regional, el
                  análisis de comparabilidad incluye el equilibrio y la
                  solvencia de los comparables para todos los países no
                  involucrados.
                </p>
                <p>
                  La coordinación regional nos permite tener una visión más
                  amplia de las operaciones internacionales, compartir
                  experiencias entre países y lograr coherencia en las políticas
                  de precios de transferencia de las compañías multinacionales.
                </p>
                <h5>Resolución de controversias:</h5>
                <p>
                  Defendemos la posición del contribuyente contra posibles
                  ajustes por parte de la autoridad fiscal, acompañándolo desde
                  el inicio de la inspección hasta su definición en el tribunal
                  en todas las etapas contenciosas.
                </p>
                <p>
                  • Representación en defensa de ajustes ante la Administración
                  Tributaria, el Tribunal Fiscal y la Justicia.
                </p>
                <p> • Preparación de informes técnicos expertos.</p>
                <p> • Defensas de valor ante la Aduana.</p>
                <p>
                  • Acción en procedimientos de acuerdo mutuo en el marco de los
                  acuerdos para evitar la doble imposición
                </p>
                <p>
                  • Brindamos apoyo para enfrentar auditorías fiscales y
                  defender a los clientes en los procesos de litigio, incluido
                  el diseño de estrategias y la representación y asesoramiento
                  ante las autoridades jurisdiccionales.
                </p>
                <h5>Acuerdos previos de Precios:</h5>
                <p>
                  • Brindamos asistencia en la presentación de la solicitud y
                  tramitación de Determinaciones Conjuntas de Precios de
                  Operaciones Internacionales (DCPOI).
                </p>
                <h5>Valoración empresarial:</h5>
                <p>
                  • Aplicamos técnicas de valoración financiera a las empresas y
                  asesoramos sobre negociaciones en procesos de M&A.
                </p>
              </div>
            )}
            {tab === 1 && (
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
                <p>Ofrecemos:</p>

                <p>
                  • Asesoramiento jurídico-impositivo y planificación de
                  negocios en asuntos vinculados con normativas y/o
                  transacciones internacionales, nacionales, provinciales o
                  municipales.
                </p>
                <p>
                  • Asistencia y estrategias durante el desarrollo de
                  inspecciones.
                </p>
                <p>
                  • Confección y/o revisión de declaraciones juradas de
                  cumplimiento mensual y/o anual.
                </p>
                <p>
                  • Asesoramiento en gravámenes nacionales, provinciales y
                  municipales.
                </p>
                <p>• Planificación fiscal internacional.</p>
                <p>
                  • Procedimientos de debida diligencia en adquisiciones de
                  empresas.
                </p>
                <p>• Estructuración de reorganizaciones libres de impuestos.</p>
                <p>• Cálculo del Impuesto Diferido</p>
                <p>
                  • Análisis de posiciones de impuestos de dudosa
                  recuperabilidad.
                </p>
                <p>• Recupero de créditos fiscales.</p>
                <p>• Recupero de saldos a favor de impuestos provinciales.</p>
                <p>• Asesoramiento en materia previsional.</p>
              </div>
            )}
            {tab === 2 && (
              <div className="primary-intro">
                <h2>Asignaciones Internacionales</h2>
                <p>
                  • Entrevistas de entrada y de salida: asesoría fiscal para los
                  expatriados frente a sus obligaciones tributarias derivadas
                  del ingreso o salida de Argentina.
                </p>
                <p>
                  • Elaboración de Declaraciones de Ingresos y Bienes
                  Personales: preparación de Declaraciones anuales de Renta y
                  Bienes Personales, de acuerdo con la legislación tributaria
                  vigente.
                </p>
                <p>
                  • Elaboración de cálculos de impuestos hipotéticos
                  (Hypothetical Tax)
                </p>
                <p>• Elaboración de Tax Equalization</p>
                <p>• Solicitud de Permisos de Trabajo</p>
                <p>• Solicitud de Certificados de Movimientos Migratorios</p>
                <p>• Preparación de cálculos de Gross Up</p>
              </div>
            )}
            {tab === 3 && (
              <div className="primary-intro">
                <h2>Sociedades</h2>
                <h5>Consultoría y Asesoramiento:</h5>
                <p>
                  {" "}
                  • Opinión sobre los aspectos generales y particulares,
                  ofreciendo alternativas y herramientas para la toma de
                  decisiones.
                </p>
                <h5>Servicios:</h5>
                <p>
                  • Constitución e inscripción de sociedades, uniones
                  transitorias de empresas y agrupaciones de colaboración
                  empresarial.
                </p>
                <p>• Modificación de Estatutos Sociales.</p>
                <p>
                  • Fusiones, absorciones, escisiones y disoluciones de
                  sociedades: preparación de la documentación y tramitación ante
                  los Organismos de Control.
                </p>
                <p>
                  • Redacción de actas de Directorio y Asambleas Accionistas.
                </p>
                <p>• Experiencia en Concursos Preventivos y Quiebras.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="callout3">
        <h1 style={{ color: "white" }}>Revolucionando la práctica legal</h1>
        <h3 style={{ color: "white" }}>
          Integramos derecho, impuestos y tecnología
        </h3>
      </div>
      <div className="door"></div>
    </div>
  );
}
