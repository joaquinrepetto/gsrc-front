import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-columns">
        <div class="row">
          <nav class="column large-3 medium-3 small-6">
            <h5>Seguinos</h5>

            <ul class="social footer">
              <li class="social-link linkedin">
                <a href="https://www.linkedin.com/company/goldemberg-&-asociados/">
                  <span
                    class="icon fa fa-linkedin-square"
                    aria-hidden="true"
                  ></span>
                  LinkedIn
                </a>
              </li>
              <li class="social-link twitter">
                <a href="https://twitter.com/GSRCArgentina">
                  <span
                    class="icon fa fa-twitter-square"
                    aria-hidden="true"
                  ></span>
                  Twitter
                </a>
              </li>
            </ul>
          </nav>

          <nav class="column large-3 medium-3 small-6">
            <h5>Menú</h5>
            <ul>
              <li>
                <Link to="/nuestrafirma">
                  <a>Nuestra Firma</a>
                </Link>
              </li>
              <li>
                <Link to="/servicios">
                  <a>Servicios</a>
                </Link>
              </li>
              <li>
                <Link to="/profesionales">
                  <a>Profesionales</a>
                </Link>
              </li>
              <li>
                <Link to="/noticias">
                  <a>Noticias</a>
                </Link>
              </li>
            </ul>
          </nav>
          <nav class="column large-3 medium-3 small-6">
            <ul>
              <li style={{ marginTop: "43px" }}>
                <Link to="/trabaja">
                  <a>Trabaja en Andersen</a>
                </Link>
              </li>
              <li>
                <Link to="/oficinas">
                  <a>Oficinas</a>
                </Link>
              </li>
              <li>
                <Link to="/presenciaglobal">
                  <a>Presencia Global</a>
                </Link>
              </li>
              <li>
                <Link to="/contacto">
                  <a>Contactános</a>
                </Link>
              </li>
            </ul>
          </nav>
          <nav class="column large-3 medium-3 small-6">
            <h5>Contacto</h5>
            <ul>
              <li>
                <a href="#">Talcahuano 833 - Piso 10º</a>
              </li>
              <li>
                <a href="#">[C1013AAQ] - CABA - Argentina</a>
              </li>
              <li>
                <a href="#">(54 11) 4390-9700 - info@ar.Andersen.com</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="row column">
          <p class="site-copyright">
            © Andersen Tax LLC, ANDERSEN GSRC y MODO LAW son las firmas
            argentinas miembros de Andersen Global, una &#39;verein&#39; suiza
            compuesta por entidades jurídicas independientes, localizadas
            alrededor del mundo y que proporcionan servicios bajo su propio
            nombre o las marcas “Andersen Tax” o “Andersen Tax &amp; Legal”.
            Andersen Global no presta servicios y no tiene responsabilidad sobre
            las acciones de otras firmas miembro, que tampoco poseen
            responsabilidad por ninguna acción realizada por Andersen Global. El
            uso de esta página web, está sujeto a sus propios términos y
            condiciones. Por favor, lea los términos y condiciones, antes del
            uso de esta página web.
          </p>

          <p class="site-copyright">
            <Link to="/terminos">
              <a>Términos &amp; Condiciones</a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
