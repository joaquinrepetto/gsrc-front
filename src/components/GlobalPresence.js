import React from "react";

import pg1 from "../assets/placeholders/global-reach.png";
import pg2 from "../assets/placeholders/client-service.png";
import pg3 from "../assets/placeholders/shared-values.png";
import pg4 from "../assets/placeholders/one-firm.png";

export default function GlobalPresence() {
  return (
    <div>
      <div class="hero global">
        <div class="row small-uncollapse medium-uncollapse large-collapse">
          <div class="column small-12 inner">
            <div class="top">
              <div class="breadcrumbs ">
                <span class="crumb home">
                  <a href="/">Home</a>
                </span>
                <span class="crumb interior">
                  <a href="#">Presencia Global</a>
                </span>
              </div>

              <ul class="social-links social-hero">
                <p class="share-label">Compartir:</p>
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

            <div class="text">
              <h1>Presencia Global</h1>
              <p>
                Andersen Global® se fundó en el año 2013, como entidad
                internacional que persigue el desarrollo de un modelo
                profesional sin fisuras, proporcionando servicios legales y
                fiscales que sigan nuestros estándares de excelencia en todas
                las oficinas del mundo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="page-intro">
        <div class="row">
          <div class="column small-12">
            <h2 class="globalp">
              Andersen es el miembro fundador de Andersen Global, una asociación
              internacional de firmas miembro, compuesta por profesionales que
              prestan servicios legales y tributario-contables en todo el mundo.
            </h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column small-12">
          <ul class="services-list row">
            <div class="row">
              <li class="column small-12 medium-6">
                <div class="image">
                  <a href="javascript:;">
                    <img src={pg1} alt="" />
                  </a>
                </div>
                <div class="text">
                  <h3 class="title">Alcance Global</h3>
                  <p>
                    Andersen Global está formado por más de 5000 profesionales,
                    700 socios y cuenta con presencia en más de 172
                    localizaciones en el mundo. El crecimiento experimentado en
                    un periodo de tiempo tan reducido, es el resultado del
                    excepcional servicio al cliente que prestan todos los
                    integrantes de nuestro equipo. No queremos ser la firma más
                    grande, sino ofrecer al cliente el mejor servicio, de forma
                    continua en todo el mundo.
                  </p>
                </div>
              </li>
              <li class="column small-12 medium-6">
                <div class="image">
                  <a href="javascript:;">
                    <img src={pg2} alt="" />
                  </a>
                </div>
                <div class="text">
                  <h3 class="title">Servicio al Cliente</h3>
                  <p>
                    La selección de nuestro equipo, se hace teniendo en cuenta
                    la calidad, el compromiso con el servicio al cliente y la
                    necesidad de compartir una mentalidad y una visión común. La
                    excelencia en el servicio al cliente, es y seguirá siendo
                    nuestra mayor prioridad.
                  </p>
                </div>
              </li>
            </div>
            <div class="row">
              <li class="column small-12 medium-6">
                <div class="image">
                  <a href="javascript:;">
                    <img src={pg3} alt="" />
                  </a>
                </div>
                <div class="text">
                  <h3 class="title">Valores comunes</h3>
                  <p>
                    El equipo profesional que forma parte de Andersen Global,
                    comparte unos mismos valores, fundamentales para asegurar la
                    excelencia en el servicio y prestar asesoramiento de manera
                    continua y coherente, en todas nuestras oficinas en el
                    mundo.
                  </p>
                </div>
              </li>
              <li class="column small-12 medium-6">
                <div class="image">
                  <a href="javascript:;">
                    <img src={pg4} alt="" />
                  </a>
                </div>
                <div class="text">
                  <h3 class="title">One Firm</h3>
                  <p>
                    Andersen Global se constituyó para crear una firma duradera,
                    una firma que ofrezca el mejor y más completo servicio legal
                    y fiscal, por parte de un equipo cualificado y que cumpla
                    con los más elevados estándares de calidad en el servicio al
                    cliente.
                  </p>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div class="door"></div>
    </div>
  );
}
