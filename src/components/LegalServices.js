import React, { useState, useEffect } from "react";

import banner from "../assets/img/images-servicios-08.jpg";

export default function LegalServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div class="inner services-detail">
        <div class="breadcrumbs-container-inner row large-collapse">
          <div class="column medium-8"></div>
        </div>
        <div class="breadcrumbs-container-inner row large-collapse">
          <div class="column medium-8">
            <div class="breadcrumbs service-sub">
              <span class="crumb home">
                <a href="/">Inicio</a>
              </span>
              <span class="crumb interior">
                <a href="#">Servicios</a>
              </span>
              <span class="crumb child">
                <a href="#">Servicios Legales</a>
              </span>
            </div>
          </div>

          <div class="column medium-4">
            <ul class="social-links inner">
              <p class="share-label">Share:</p>
              <li class="social-link facebook">
                <a href="#">Facebook</a>
              </li>
              <li class="social-link twitter">
                <a href="#">Twitter</a>
              </li>
              <li class="social-link linkedin">
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row hero-image">
          <img src={banner} alt="" />
        </div>

        <div class="row">
          <div class="sidebar-container column large-3 medium-4 small-12">
            <nav class="sidebar full">
              <ul class="lvl-1 veritcal-menu" data-accordion-menu>
                <li>
                  <a style={{ color: "#AC0E20" }}>Servicios Legales</a>
                  <ul class="lvl-2 vertical nested is-active">
                    <li>
                      <a
                        onClick={() => setTab(0)}
                        style={{ color: tab === 0 ? "#AC0E20" : null }}
                      >
                        Legal
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(1)}
                        style={{
                          color: tab === 1 ? "#AC0E20" : null,
                          lineHeight: "20px",
                        }}
                      >
                        Asuntos Fiscales, Legales y Contenciosos
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(2)}
                        style={{ color: tab === 2 ? "#AC0E20" : null }}
                      >
                        Derecho Aduanero y Comercio Exterior
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(3)}
                        style={{ color: tab === 3 ? "#AC0E20" : null }}
                      >
                        Tecnología
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <div class="column large-8 medium-8 small-12 top-story">
            {tab === 0 && (
              <div class="primary-intro">
                <h2>Legal</h2>
                <p>
                  Servicios legales que se adaptan a tus necesidades. Contamos
                  con especialistas en contencioso tributario y derecho
                  corporativo.
                </p>
              </div>
            )}
            {tab === 1 && (
              <div class="primary-intro">
                <h2>Asuntos Fiscales, Legales y Contenciosos</h2>
                <p>
                  La sinergia entre abogados y contadores, que define nuestra
                  firma, permite que nuestra División de Asesoría Legal y Fiscal
                  brinde un apoyo sólido en asuntos legales y fiscales,
                  maximizando los análisis de las alternativas más eficientes
                  para minimizar los gastos y riesgos. Esta investigación puede
                  terminar siendo clave para diseñar estrategias de defensa u
                  otras para reducir contingencias.
                </p>
                <p>
                  En línea con estos objetivos, nuestra División de Asesoría
                  Legal y Fiscal ofrece a los clientes una amplia gama de
                  servicios, tales como:
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Defensa de los contribuyentes antes de la imposición de
                    sanciones (multas, suspensiones comerciales, exclusiones de
                    registro, etc.) por parte de las autoridades fiscales.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Realización de trámites ante organismos fiscales nacionales,
                    provinciales y municipales.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Realización de trámites ante el Tribunal Fiscal Nacional de
                    Argentina y el Tribunal Fiscal de Apelaciones de la
                    Provincia de Buenos Aires.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Llevar a cabo procedimientos ante tribunales federales y
                    provinciales en todos los casos.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Presentación de reclamos y procedimientos para la
                    recuperación de impuestos pagados en exceso.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Realización de trámites ante la Dirección General de Aduanas
                    y tribunales judiciales argentinos en materia aduanera.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Asesoramiento sobre regímenes para la promoción de ciertas
                    industrias mediante la concesión de beneficios fiscales y
                    asuntos relacionados.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Apoyo en materia de cambio de divisas.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Apoyo en procedimientos relacionados con asuntos penales,
                    fiscales y cambiarios de divisas.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Diseño de estrategias que involucren acciones procesales
                    especiales, tales como la búsqueda de sentencias
                    declaratorias, medidas cautelares, procedimientos de
                    protección legal para pagos atrasados ​​(amparo) y otros
                    procedimientos de protección.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Defensa contra reclamos por aplicación de impuestos.
                  </li>
                </ul>
              </div>
            )}
            {tab === 2 && (
              <div class="primary-intro">
                <h2>Derecho Aduanero y Comercio Exterior</h2>
                <h5>Regulación aduanera:</h5>
                <p>
                  Brindamos asesoramiento a compañías tanto locales como
                  internacionales en su relación con el servicio aduanero
                  argentino, analizando el marco legal aplicable a las
                  operaciones de comercio exterior y las posibles contingencias.
                </p>
                <p>
                  Representamos a las firmas en los procedimientos aduaneros en
                  todas las aduanas del país, ante el Tribunal Fiscal de la
                  Nación, la Justicia Nacional en lo Contencioso Administrativo
                  Federal y la Corte Suprema de Justicia de la Nación.
                </p>
                <h5>Acuerdos en materia de comercio exterior:</h5>
                <p>
                  Asesoramos sobre la normativa regional e internacional
                  vinculada al comercio de mercaderías: Organización Mundial del
                  Comercio (OMC), Tratado del Mercosur, Tratados bilaterales en
                  el ámbito de la ALADI y otros acuerdos regionales e
                  internacionales.
                </p>
                <h5>Planeamiento estratégico:</h5>
                <p>
                  Realizamos consultoría en materia de importaciones y
                  exportaciones. Trabajamos en la planificación estratégica de
                  operaciones de comercio exterior de las empresas.
                </p>
                <h5>Otros servicios:</h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Régimen de Origen y Preferencias Arancelarias.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Clasificación Arancelaria y Valoración Aduanera.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Certificados de importación y trámites de licencias de
                    importación.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Régimen de importaciones y exportaciones temporarias.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Infracciones Aduaneras y Disciplinarias.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Asesoramiento en prácticas desleales del comercio,
                    investigaciones de dumping subsidios y salvaguardias.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Repeticiones y Reintegros.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Temas Cambiarios. Seguimiento de sumarios en el Banco
                    Central de la República Argentina.
                  </li>
                </ul>
              </div>
            )}
            {tab === 3 && (
              <div class="primary-intro">
                <h2>Tecnología</h2>
                <p>
                  Asesoramiento en legal tech. Entendemos tus necesidades con un
                  grupo de expertos en legales y tecnología, hacemos un
                  diagnóstico y proponemos soluciones. Somos tu socio en la
                  transformación digital.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="callout3">
        <h1 style={{ color: "white", marginTop: "20px" }}>
          Andersen, un nombre del pasado, la Firma del futuro
        </h1>
        {/* <h3 style={{ color: "white" }}>
          Integramos derecho, impuestos y tecnología
        </h3> */}
      </div>
      <div class="door"></div>
    </div>
  );
}
