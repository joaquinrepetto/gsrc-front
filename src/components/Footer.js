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
              <li>
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
                <a href="#">(54 11) 4390-9700 - info@gsrc.com.ar</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="row column">
          <p class="site-copyright">
            Andersen Tax LLC es una firma miembro de Argentina de Andersen
            Global, una asociación suiza compuesta por firmas miembro legalmente
            separadas e independientes ubicadas en todo el mundo que prestan
            servicios bajo su propio nombre o la marca "Andersen Tax" o
            "Andersen Tax & Legal "o" Andersen Legal ". Andersen Global no
            proporciona ningún servicio y no tiene responsabilidad por ninguna
            acción de las firmas miembro, y las firmas miembro no tienen
            responsabilidad por ninguna acción de Andersen Global. El uso de
            este sitio web está sujeto a los términos y condiciones que lo
            rigen. Lea estos términos y condiciones antes de usar el sitio web.
          </p>

          <p class="site-copyright">
            <Link to="/terminos">
              <a>
                Términos &amp; Condiciones | Política de privacidad | Aviso de
                coockies
              </a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
