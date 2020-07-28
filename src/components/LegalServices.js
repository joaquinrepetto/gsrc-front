import React, { useState } from "react";

import banner from "../assets/img/images-servicios-08.jpg";

export default function LegalServices() {
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
                  <a>Servicios Legales</a>
                  <ul class="lvl-2 vertical nested is-active">
                    <li>
                      <a onClick={() => setTab(0)}>Legal</a>
                    </li>
                    <li>
                      <a onClick={() => setTab(1)}>
                        Asuntos Fiscales, Legales y Contenciosos
                      </a>
                    </li>
                    <li>
                      <a onClick={() => setTab(2)}>
                        Derecho Aduanero y Comercio Exterior
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div class="right-rail mobile">
              <div class="right-rail-container">
                <div class="people-container">
                  <ul class="people">
                    <h4>Managing Directors</h4>

                    <li class="person">
                      <div class="image">
                        <img
                          src="assets/img/placeholders/headshot-1.png"
                          alt=""
                        />
                      </div>
                      <div class="name">Michael Kohner</div>
                    </li>

                    <li class="person">
                      <div class="image">
                        <img
                          src="assets/img/placeholders/headshot-2.png"
                          alt=""
                        />
                      </div>
                      <div class="name">
                        Yichen Shepard
                        <div class="location">San Francisco, CA</div>
                      </div>
                    </li>
                  </ul>

                  <a href="javascript:;" class="more">
                    <span class="fa fa-caret-right" aria-hidden="true"></span>
                    View More
                  </a>
                </div>

                <ul class="insights">
                  <h4>Insights &amp; Resources</h4>

                  <li class="insight">
                    <div class="type">
                      <span class="fa fa-file-text" aria-hidden="true"></span>{" "}
                      tax release
                    </div>

                    <h5 class="title">
                      Filing Requirements Related to Indirect Investments in
                      Foreign Entities
                    </h5>
                  </li>

                  <li class="insight">
                    <div class="type">
                      <span class="fa fa-file-text" aria-hidden="true"></span>{" "}
                      tax release
                    </div>

                    <h5 class="title">
                      Private Equity Funds "Trade or Business" Operator or
                      "Investor"
                    </h5>
                  </li>

                  <li class="insight">
                    <div class="type">
                      <span
                        class="fa fa-file-text-o white"
                        aria-hidden="true"
                      ></span>{" "}
                      white paper
                    </div>

                    <h5 class="title">Special FATCA Update</h5>
                  </li>
                </ul>

                <a href="javascript:;" class="more">
                  <span class="fa fa-caret-right" aria-hidden="true"></span>{" "}
                  View More
                </a>
              </div>

              <div class="newsletter">
                <h4>From the Newsletter</h4>

                <div class="inner right-rail-container">
                  <img src="assets/img/placeholders/light.jpg" alt="" />
                  <h5 class="title">
                    Avoiding Hazards in Transferring Carried Interests
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div class="column large-8 medium-8 small-12 top-story">
            {tab === 0 && (
              <div class="primary-intro">
                <h2>Legal</h2>
                <p class="intro">
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
                <p>
                  {" "}
                  • Defensa de los contribuyentes antes de la imposición de
                  sanciones (multas, suspensiones comerciales, exclusiones de
                  registro, etc.) por parte de las autoridades fiscales.
                </p>
                <p>
                  • Realización de trámites ante organismos fiscales nacionales,
                  provinciales y municipales.
                </p>
                <p>
                  • Realización de trámites ante el Tribunal Fiscal Nacional de
                  Argentina y el Tribunal Fiscal de Apelaciones de la Provincia
                  de Buenos Aires.
                </p>
                <p>
                  • Llevar a cabo procedimientos ante tribunales federales y
                  provinciales en todos los casos.
                </p>
                <p>
                  • Presentación de reclamos y procedimientos para la
                  recuperación de impuestos pagados en exceso.
                </p>
                <p>
                  • Realización de trámites ante la Dirección General de Aduanas
                  y tribunales judiciales argentinos en materia aduanera.
                </p>
                <p>
                  • Asesoramiento sobre regímenes para la promoción de ciertas
                  industrias mediante la concesión de beneficios fiscales y
                  asuntos relacionados.
                </p>
                <p>• Apoyo en materia de cambio de divisas.</p>
                <p>
                  • Apoyo en procedimientos relacionados con asuntos penales,
                  fiscales y cambiarios de divisas.
                </p>
                <p>
                  • Diseño de estrategias que involucren acciones procesales
                  especiales, tales como la búsqueda de sentencias
                  declaratorias, medidas cautelares, procedimientos de
                  protección legal para pagos atrasados ​​(amparo) y otros
                  procedimientos de protección.
                </p>
                <p>• Defensa contra reclamos por aplicación de impuestos.</p>
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
                <p>• Régimen de Origen y Preferencias Arancelarias.</p>
                <p>• Clasificación Arancelaria y Valoración Aduanera.</p>
                <p>
                  • Certificados de importación y trámites de licencias de
                  importación.
                </p>
                <p>• Régimen de importaciones y exportaciones temporarias.</p>
                <p>• Infracciones Aduaneras y Disciplinarias.</p>
                <p>
                  • Asesoramiento en prácticas desleales del comercio,
                  investigaciones de dumping subsidios y salvaguardias.
                </p>
                <p>• Repeticiones y Reintegros.</p>
                <p>
                  • Temas Cambiarios. Seguimiento de sumarios en el Banco
                  Central de la República Argentina.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div class="door"></div>
    </div>
  );
}
