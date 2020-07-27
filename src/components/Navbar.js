import React from "react";
import { Link } from "react-router-dom";

const locations = [
  "Brazil",
  "Canada",
  "Chile",
  "France",
  "Germany",
  "Guatemala",
  "Ireland",
  "Italy",
  "Luxembourg",
  "Mexico",
  "Netherlands",
  "Panama",
  "Poland",
  "Russia",
  "Spain",
  "Switzerland",
  "United States",
];

export default function Navbar() {
  return (
    <div>
      <header className="top-nav-bar">
        <div className="row large-collapse">
          <div className="column small-12 no-padding">
            <div className="global-link">
              <a href="https://global.andersen.com">
                <span className="fa fa-globe" aria-hidden="true"></span>
                Andersen Global
              </a>
            </div>

            <nav className="top-nav">
              <p className="location-label">Worldwide Locations:</p>

              <ul className="locations dropdown menu" data-dropdown-menu>
                <li>
                  <a className="selected">
                    <span className="inner">
                      Argentina
                      <span
                        className="fa fa-caret-down"
                        aria-hidden="true"
                      ></span>
                    </span>
                  </a>
                  {/* <ul className="menu">
                    {locations.map((location) => (
                      <li>
                        <a>{location}</a>
                      </li>
                    ))}
                  </ul> */}
                </li>
              </ul>

              <ul className="language-nav">
                <li>
                  <a href="#" className="selected">
                    EN
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="main-bar">
        <div className="row large-collapse">
          <div className="column small-2">
            <div>
              <h1 className="logo">
                <Link to="/">
                  <a>Andersen</a>
                </Link>
              </h1>
            </div>
            <a
              href="javascript:;"
              className="hamburger-menu"
              data-toggle="offCanvas"
            >
              <span className="menu-button">
                <span className="fa fa-bars" aria-hidden="true"></span>
              </span>
            </a>
          </div>
          <div className="column small-10" style={{ paddingTop: "5%" }}>
            <nav className="main-nav">
              <div className="row large-collapse">
                <div>
                  <ul className="lvl-1 dropdown menu" data-dropdown-menu>
                    <li className="item-1" style={{ fontSize: "15px" }}>
                      <Link to="/nuestrafirma">
                        {" "}
                        <a>Nuestra Firma</a>
                      </Link>
                      <span></span>
                    </li>
                    <li className="item-2" style={{ fontSize: "15px" }}>
                      <Link to="/servicios">
                        <a>Servicios</a>
                      </Link>
                      <span></span>
                      {/* <ul className="lvl-2 menu row">
                        <li>
                          <a href="servicesLearnMore.html">Servicios Legales</a>
                        </li>
                        <li>
                          <a href="servicesLearnMore.html">
                            Servicios Tributarios y Contables
                          </a>
                        </li>
                        <li>
                          <a href="servicesLearnMore.html">
                            Servicios de Consultoría
                          </a>
                        </li>
                        <li>
                          <a href="servicesLearnMore.html">
                            Servicios de Wealth Management & Family Office
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="item-2" style={{ fontSize: "15px" }}>
                      <Link to="/profesionales">
                        {" "}
                        <a>Profesionales</a>{" "}
                      </Link>
                    </li>
                    <li className="item-3" style={{ fontSize: "15px" }}>
                      <a href="#">Noticias</a>
                    </li>
                    <li className="item-4" style={{ fontSize: "15px" }}>
                      <Link to="/trabaja">
                        {" "}
                        <a>Trabaja en Andersen</a>
                      </Link>
                    </li>
                    <li className="item-5" style={{ fontSize: "15px" }}>
                      <Link to="/oficinas">
                        {" "}
                        <a>Oficinas</a>
                      </Link>{" "}
                    </li>
                    <li className="item-5" style={{ fontSize: "15px" }}>
                      <Link to="/presenciaGlobal">
                        {" "}
                        <a>Presencia Global</a>
                      </Link>{" "}
                    </li>
                    <li className="item-5" style={{ fontSize: "15px" }}>
                      <Link to="/contacto">
                        {" "}
                        <a>Contáctenos</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
