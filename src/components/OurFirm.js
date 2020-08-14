import React, { useState, useEffect } from "react";

export default function OurFirm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tab, setTab] = useState(9);

  return (
    <div>
      <div className="main-content">
        <div className="inner landing">
          <div className="hero">
            <div className="row small-uncollapse medium-uncollapse large-collapse">
              <div className="column small-12 inner">
                <div className="top">
                  <div className="breadcrumbs ">
                    <span className="crumb home">
                      <a href="/">Inicio</a>
                    </span>
                    <span className="crumb interior">
                      <a href="/nuestrafirma">La Firma</a>
                    </span>
                    {tab !== 9 && (
                      <span className="crumb interior">
                        <a href="#">
                          {tab === 0
                            ? "¿Qué nos distingue?"
                            : tab === 1
                            ? "Compromiso"
                            : tab === 2
                            ? "Misión"
                            : null}
                        </a>
                      </span>
                    )}
                  </div>

                  <ul className="social-links social-hero">
                    <p className="share-label">Compartir:</p>
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
                <div className="text">
                  <h1>La Firma</h1>
                  <p>
                    Somos una firma miembro de Andersen Global prestando
                    servicios de: Consultoría en Tributación, Precios de
                    Transferencia, Outsourcing Contable e Impositivo, Sociedades
                    y Consultoría Legal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="sidebar-container column large-3 medium-4 small-12">
            <nav className="sidebar full">
              <ul className="lvl-1 veritcal-menu" data-accordion-menu>
                <li>
                  <a style={{ color: "#AC0E20" }}>La Firma</a>
                  <ul className="lvl-2 vertical nested">
                    <li>
                      <a
                        onClick={() => setTab(0)}
                        style={{ color: tab === 0 ? "#AC0E20" : null }}
                      >
                        ¿Qué nos distingue?
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(1)}
                        style={{ color: tab === 1 ? "#AC0E20" : null }}
                      >
                        Compromiso
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(2)}
                        style={{ color: tab === 2 ? "#AC0E20" : null }}
                      >
                        Misión
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <div className="column large-8 medium-8 small-12 top-story">
            {tab === 9 && (
              <p>
                Bajo la marca Andersen brindamos asesoría legal y fiscal
                independiente a nuestros clientes. Como miembro de Andersen
                Global, tenemos presencia mundial a través de sus firmas miembro
                y colaboradoras. Somos expertos en lo que hacemos y nuestro
                conocimiento integral del mercado nos ayuda a estar
                exclusivamente comprometidos con los intereses de nuestros
                clientes. Nuestro papel es puramente consultor y, por principio,
                no ofrecemos la auditoría de estados financieros. Esto nos ayuda
                a evitar conflictos de intereses. Somos un equipo de
                profesionales dedicados que defienden la integridad y los
                valores asociados con la marca Andersen en todo el mundo.
              </p>
            )}
            {tab === 0 && (
              <div className="primary-intro">
                <h3 style={{ color: "#AD0D21" }}>¿Qué nos distingue?</h3>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    El conocimiento profundo de las materias que son motivo de
                    asesoramiento y del ambiente de negocios local e
                    internacional en el que actúa el cliente.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Una modalidad de trabajo que incluye análisis en detalle a
                    costos razonables.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Atención personalizada eficiente y oportuna. En lugar de una
                    estructura impersonal y estandarizada, ofrecemos un servicio
                    organizado y controlado por los socios, enfocado a atender
                    las necesidades específicas con un criterio de optimización
                    de resultados.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Para brindar servicios profesionales de alta calidad hemos
                    adoptado la cultura de la excelencia: sentir placer por
                    hacer nuestro trabajo del mejor modo y actuar siempre
                    anticipándonos a las necesidades y a los problemas de la
                    empresa.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Un equipo profesional calificado, conformado por Contadores
                    Públicos, Abogados y Economistas, que desarrollan sus tareas
                    bajo la premisa de capacitación permanente. Nuestros más de
                    100 expertos profesionales están comprometidos en la
                    incesante búsqueda de alternativas y el análisis
                    inteligente, con el objetivo de volcar sus conclusiones en
                    la práctica diaria.
                  </li>
                </ul>
              </div>
            )}
            {tab === 1 && (
              <div className="primary-intro">
                <h3 style={{ color: "#AD0D21" }}>Compromiso</h3>

                <p>
                  Merecen enumerarse los siguientes elementos distintivos y
                  cualidades que sustentan nuestra amplia trayectoria:
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    La provisión de soluciones prácticas en tiempo oportuno
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    La resolución de cualquier consulta que el cliente solicite
                    de forma ágil
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Una relación cordial para así lograr una comunicación
                    efectiva
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Fluida relación para el óptimo desenvolvimiento de los
                    objetivos
                  </li>
                  <li style={{ listStyleType: "disc" }}>Ética profesional</li>
                </ul>
              </div>
            )}
            {tab === 2 && (
              <div className="primary-intro">
                <h3 style={{ color: "#AD0D21" }}>Misión</h3>
                <p>
                  Brindar soluciones de máxima calidad profesional, efectivas y
                  confiables.
                </p>
                <p>
                  Lograr nuestra misión con integridad y respeto a la
                  individualidad de nuestros profesionales.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="door"></div>
    </div>
  );
}
