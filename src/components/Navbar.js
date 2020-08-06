import React, { useState } from "react";
import { Link } from "react-router-dom";
import { lang } from "moment";

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
  const [showServices, setShowServices] = useState(false);
  const [language, setLanguage] = useState("es");

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
                  <Link to={language === "es" ? "/home-english" : "/"}>
                    <a
                      onClick={() => {
                        if (language === "es") {
                          setLanguage("en");
                        } else {
                          setLanguage("es");
                        }
                      }}
                      className="selected"
                    >
                      {language === "es" ? "EN" : "ES"}
                    </a>
                  </Link>
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
                <Link to={language === "es" ? "/" : "/home-english"}>
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
            <nav
              className="main-nav"
              onMouseEnter={() => setShowServices(false)}
            >
              <div className="row large-collapse">
                <div>
                  <ul className="lvl-1 dropdown menu" data-dropdown-menu>
                    <li className="item-1" style={{ fontSize: "15px" }}>
                      <Link
                        to={language === "es" ? "/nuestrafirma" : "/ourfirm"}
                      >
                        {" "}
                        <a>
                          {language === "es" ? "Nuestra Firma" : "The Firm"}
                        </a>
                      </Link>
                      <span></span>
                    </li>
                    <li className="item-2" style={{ fontSize: "15px" }}>
                      <Link
                        to={
                          language === "es" ? "/servicios" : "/services-english"
                        }
                      >
                        <a
                          onMouseOver={() => setShowServices(true)}
                          // onMouseLeave={() => setShowServices(false)}
                          onClick={() => setShowServices(!showServices)}
                        >
                          {language === "es" ? "Servicios" : "Services"}
                        </a>
                      </Link>
                      {showServices && (
                        <ul
                          onMouseOver={() => setShowServices(true)}
                          onMouseLeave={() => setShowServices(false)}
                          className="lvl-2 menu row"
                          style={{
                            position: "absolute",
                            zIndex: "1000",
                          }}
                        >
                          <li style={{ width: "100%", fontSize: "15px" }}>
                            <Link
                              to={
                                language === "es"
                                  ? "/servicioslegales"
                                  : "/legalservices"
                              }
                            >
                              <a>
                                {language === "es"
                                  ? "Servicios Legales"
                                  : "Legal Services"}
                              </a>
                            </Link>
                          </li>
                          <li style={{ width: "100%", fontSize: "15px" }}>
                            <Link
                              to={
                                language === "es"
                                  ? "/servicioscontables"
                                  : "/contable-services"
                              }
                            >
                              <a>
                                {language === "es"
                                  ? "Servicios Tributarios y Contables"
                                  : "Tax and Accounting Services"}
                              </a>
                            </Link>
                          </li>
                          <li style={{ width: "100%", fontSize: "15px" }}>
                            <Link
                              to={language === "es" ? "/bpo" : "/bpo-english"}
                            >
                              <a>Business Process Outsourcing (BPO)</a>
                            </Link>
                          </li>
                          <li style={{ width: "100%", fontSize: "15px" }}>
                            <Link
                              to={
                                language === "es"
                                  ? "/sociedades"
                                  : "/corporations"
                              }
                            >
                              <a>
                                {language === "es"
                                  ? "Sociedades"
                                  : "Corporations"}
                              </a>
                            </Link>
                          </li>
                          {/* <li style={{ width: "100%", fontSize: "15px" }}>
                            <Link to="/servicioswealth">
                              <a>Wealth Management & Family Office</a>
                            </Link>
                          </li> */}
                        </ul>
                      )}
                    </li>
                    <li className="item-2" style={{ fontSize: "15px" }}>
                      <Link
                        to={
                          language === "es"
                            ? "/profesionales"
                            : "/proffessionals"
                        }
                      >
                        {" "}
                        <a>
                          {language === "es"
                            ? "Profesionales"
                            : "Professionals"}
                        </a>
                      </Link>
                    </li>
                    <li className="item-3" style={{ fontSize: "15px" }}>
                      <Link to={language === "es" ? "/noticias" : "/news"}>
                        <a>{language === "es" ? "Noticias" : "News"}</a>
                      </Link>
                    </li>
                    <li className="item-4" style={{ fontSize: "15px" }}>
                      <Link
                        to={language === "es" ? "/trabaja" : "/work-english"}
                      >
                        <a>
                          {language === "es"
                            ? "Trabaja en Andersen"
                            : "Work with us"}
                        </a>
                      </Link>
                    </li>
                    <li className="item-5" style={{ fontSize: "15px" }}>
                      <Link to={language === "es" ? "/oficinas" : "/oficinas"}>
                        <a>{language === "es" ? "Oficinas" : "Offices"}</a>
                      </Link>
                    </li>
                    <li className="item-5" style={{ fontSize: "15px" }}>
                      <Link
                        to={
                          language === "es"
                            ? "/presenciaGlobal"
                            : "/globalpresence"
                        }
                      >
                        <a>
                          {language === "es" ? "Presencia Global" : "Presence"}
                        </a>
                      </Link>
                    </li>
                    <li className="item-5" style={{ fontSize: "15px" }}>
                      <Link to={language === "es" ? "/contacto" : "/contact"}>
                        <a>
                          {language === "es" ? "Contáctenos" : "Contact Us"}
                        </a>
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
