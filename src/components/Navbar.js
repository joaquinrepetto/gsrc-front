import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const locations = [
  { country: "Angola", path: "https://global.andersen.com/locations2/#AO" },
  { country: "Argentina", path: "https://global.andersen.com/locations2/#AR" },
  { country: "Austria", path: "https://global.andersen.com/locations2/#AT" },
  { country: "Bahrain", path: "https://global.andersen.com/locations/#BH" },
  { country: "Benin", path: "https://global.andersen.com/locations2/#BJ" },
  {
    country: "Bosnia and Herzegovina",
    path: "https://global.andersen.com/locations2/#BA",
  },
  { country: "Botswana", path: "https://global.andersen.com/locations2/#BW" },
  { country: "Brazil", path: "https://global.andersen.com/locations2/#BR" },
  { country: "Bulgaria", path: "" },
  {
    country: "Burkina Faso",
    path: "https://global.andersen.com/locations2/#BG",
  },
  { country: "Cameroon", path: "https://global.andersen.com/locations2/#BF" },
  { country: "Canada", path: "https://global.andersen.com/locations2/#CM" },
  { country: "Chad", path: "http://www.andersentax.ca/" },
  { country: "Chile", path: "https://global.andersen.com/locations2/#TD" },
  { country: "Colombia", path: "https://global.andersen.com/locations2/#CO" },
  { country: "Costa Rica", path: "https://global.andersen.com/locations2/#CR" },
  { country: "Croatia", path: "https://global.andersen.com/locations2/#HR" },
  { country: "Cyprus", path: "http://cy.andersen.com/" },
  { country: "Ecuador", path: "https://www.andersentaxlegal.ec/?lang=en" },
  { country: "Egypt", path: "http://www.andersentaxlegal.com.eg/" },
  {
    country: "El Salvador",
    path: "https://global.andersen.com/locations2/#SV",
  },
  { country: "Eswatini", path: "https://global.andersen.com/locations2/#SZ" },
  { country: "Ethiopia", path: "https://global.andersen.com/locations2/#ET" },
  { country: "Gabon", path: "https://global.andersen.com/locations2/#GA" },
  { country: "Gambia", path: "https://global.andersen.com/locations2/#GM" },
  { country: "Germany", path: "http://de.andersen.com/" },
  { country: "Ghana", path: "https://global.andersen.com/locations2/#GH" },
  { country: "Greece", path: "http://gr.andersen.com/" },
  { country: "Grenada", path: "https://global.andersen.com/locations2/#GD" },
  { country: "Guatemala", path: "https://global.andersen.com/locations2/#GT" },
  { country: "Guinea", path: "https://global.andersen.com/locations/#GN" },
  { country: "Honduras", path: "https://global.andersen.com/locations2/#HN" },
  { country: "Hungary", path: "http://hu.andersen.com/" },
  { country: "India", path: "https://global.andersen.com/locations2/#IN" },
  { country: "Ireland", path: "http://ie.andersen.com/" },
  { country: "Israel", path: "http://andersentax.co.il/" },
  { country: "Italy", path: "http://it.andersen.com/" },
  {
    country: "Ivory Coast",
    path: "https://global.andersen.com/locations2/#CI",
  },
  { country: "Jordan", path: "https://global.andersen.com/locations2/#JO" },
  { country: "Kazakhstan", path: "https://global.andersen.com/locations2/#KZ" },
  { country: "Kenya", path: "http://www.AndersenTax.co.ke" },
  {
    country: "Kingdom of Saudi Arabia",
    path: "https://global.andersen.com/locations2/#SA",
  },
  { country: "Kuwait", path: "https://global.andersen.com/locations2/#KW" },
  { country: "Lebanon", path: "https://global.andersen.com/locations2/#LB" },
  { country: "Liberia", path: "https://global.andersen.com/locations2/#LR" },
  { country: "Luxembourg", path: "http://lu.andersen.com/" },
  { country: "Madagascar", path: "https://global.andersen.com/locations2/#MG" },
  { country: "Mali", path: "https://global.andersen.com/locations2/#ML" },
  { country: "Mauritania", path: "https://global.andersen.com/locations2/#MR" },
  { country: "Mauritius", path: "https://global.andersen.com/locations2/#MU" },
  { country: "Mexico", path: "http://andersentaxlegal.mx/en/" },
  { country: "Morocco", path: "https://global.andersen.com/locations2/#MA" },
  { country: "Mozambique", path: "https://global.andersen.com/locations2/#MZ" },
  { country: "Namibia", path: "https://global.andersen.com/locations2/#NA" },
  {
    country: "Netherlands",
    path: "https://global.andersen.com/locations2/#NL",
  },
  { country: "Nicaragua", path: "https://global.andersen.com/locations2/#NI" },
  { country: "Niger", path: "https://global.andersen.com/locations2/#NE" },
  { country: "Nigeria", path: "http://www.andersentax.ng" },
  {
    country: "North Macedonia",
    path: "https://global.andersen.com/locations2/#MK",
  },
  { country: "Oman", path: "https://global.andersen.com/locations2/#OM" },
  { country: "Palestine", path: "https://global.andersen.com/locations2/#PS" },
  { country: "Panama", path: "https://global.andersen.com/locations2/#PA" },
  { country: "Paraguay", path: "https://global.andersen.com/locations2/#PY" },
  { country: "Peru", path: "https://global.andersen.com/locations2/#PE" },
  { country: "Poland", path: "http://pl.andersen.com/" },
  { country: "Portugal", path: "http://pt.andersen.com/" },
  {
    country: "Puerto Rico",
    path: "https://global.andersen.com/locations2/#PR",
  },
  { country: "Qatar", path: "https://global.andersen.com/locations2/#QA" },
  {
    country: "Republic of Kosovo",
    path: "https://global.andersen.com/locations2/#XK",
  },
  { country: "Romania", path: "https://global.andersen.com/locations2/#RO" },
  { country: "Rwanda", path: "https://global.andersen.com/locations2/#RW" },
  { country: "Senegal", path: "https://global.andersen.com/locations2/#SN" },
  { country: "Serbia", path: "https://global.andersen.com/locations2/#RS" },
  {
    country: "Sierra Leone",
    path: "https://global.andersen.com/locations2/#SL",
  },
  { country: "Slovakia", path: "https://global.andersen.com/locations2/#SK" },
  { country: "Slovenia", path: "https://global.andersen.com/locations2/#SI" },
  { country: "Spain", path: "http://es.andersen.com/" },
  {
    country: "South Africa",
    path: "https://global.andersen.com/locations2/#ZA",
  },
  { country: "Suriname", path: "https://global.andersen.com/locations2/#SR" },
  { country: "Switzerland", path: "http://ch.andersen.com/" },
  { country: "Togo", path: "https://global.andersen.com/locations2/#TG" },
  {
    country: "Trinidad and Tobago",
    path: "https://global.andersen.com/locations2/#TT",
  },
  { country: "Tunisia", path: "https://global.andersen.com/locations2/#TN" },
  { country: "Uganda", path: "https://global.andersen.com/locations2/#UG" },
  { country: "Ukraine", path: "https://global.andersen.com/locations2/#UA" },
  {
    country: "United Arab Emirates",
    path: "https://global.andersen.com/locations2/#AE",
  },
  { country: "United Kingdom", path: "http://uk.andersen.com/" },
  { country: "United States", path: "http://andersentax.com" },
  { country: "Uruguay", path: "http://AndersenTaxLegal.uy/" },
  { country: "Zambia", path: "https://global.andersen.com/locations2/#ZM" },
  { country: "Zimbabwe", path: "https://global.andersen.com/locations2/#ZW" },
];

export default function Navbar() {
  let location = useLocation();
  let history = useHistory();

  const [showServices, setShowServices] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.language ? localStorage.language : "es"
  );
  const [showCountries, setShowCountries] = useState(false);

  useEffect(() => {
    document.title =
      language === "es" ? "Andersen en Argentina" : "Andersen in Argentina";
  }, [document.title]);

  const handleChangeLanguage = (newLang) => {
    if (newLang === "en") {
      localStorage.language = "en";
      setLanguage(localStorage.language);
    } else {
      localStorage.language = "es";
      setLanguage(localStorage.language);
    }

    if (newLang === "es") {
      switch (location.pathname) {
        case "/home-english":
          history.push("/");
          break;
        case "/ourfirm":
          history.push("/nuestrafirma");
          break;
        case "/services-english":
          history.push("/servicios");
          break;
        case "/legalservices":
          history.push("/servicioslegales");
          break;
        case "/contable-services":
          history.push("/servicioscontables");
          break;
        case "/bpo-english":
          history.push("/bpo");
          break;
        case "/corporations":
          history.push("/sociedades");
          break;
        case "/proffessionals":
          history.push("/profesionales");
          break;
        case "/work-english":
          history.push("/trabaja");
          break;
        case "/services-english":
          history.push("/trabaja");
          break;
        case "/offices":
          history.push("/oficinas");
          break;
        case "/globalpresence":
          history.push("/presenciaGlobal");
          break;
        case "/contact":
          history.push("/contacto");
          break;
        default:
          break;
      }
    } else {
      switch (location.pathname) {
        case "/":
          history.push("/home-english");
          break;
        case "/nuestrafirma":
          history.push("/ourfirm");
          break;
        case "/servicios":
          history.push("/services-english");
          break;
        case "/servicioslegales":
          history.push("/legalservices");
          break;
        case "/servicioscontables":
          history.push("/contable-services");
          break;
        case "/bpo":
          history.push("/bpo-english");
          break;
        case "/sociedades":
          history.push("/corporations");
          break;
        case "/profesionales":
          history.push("/");
          break;
        case "/trabaja":
          history.push("/work-english");
          break;
        case "/services-english":
          history.push("/trabaja");
          break;
        case "/offices":
          history.push("/oficinas");
          break;
        case "/globalpresence":
          history.push("/presenciaGlobal");
          break;
        case "/contacto":
          history.push("/contact");
          break;

        default:
          break;
      }
    }
  };

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
                  <a
                    className="selected"
                    onMouseOver={() => setShowCountries(true)}
                    onClick={() => setShowCountries(!showCountries)}
                  >
                    <span className="inner">
                      Argentina
                      <span
                        className="fa fa-caret-down"
                        aria-hidden="true"
                      ></span>
                    </span>
                    {showCountries && (
                      <ul
                        onMouseOver={() => setShowCountries(true)}
                        onMouseLeave={() => setShowCountries(false)}
                        className="lvl-2 menu row"
                        style={{
                          position: "absolute",
                          zIndex: "1000",
                          marginTop: "15px",
                        }}
                      >
                        {locations.map((location) => (
                          <li
                            style={{
                              width: "100%",
                              fontSize: "13px",
                              display: "inline",
                            }}
                          >
                            <a
                              onClick={() =>
                                (window.location.href = location.path)
                              }
                            >
                              {location.country}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </a>
                </li>
              </ul>

              <ul className="language-nav">
                <li>
                  <a
                    onClick={() => {
                      handleChangeLanguage("es");
                    }}
                    className="selected"
                  >
                    ES
                  </a>

                  <a>
                    {"    "} | {"    "}
                  </a>

                  <a
                    onClick={() => {
                      handleChangeLanguage("en");
                    }}
                    className="selected"
                  >
                    EN
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div
        className="main-bar"
        onMouseEnter={() => {
          setShowServices(false);
          setShowCountries(false);
        }}
      >
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
              onMouseEnter={() => {
                setShowServices(false);
                setShowCountries(false);
              }}
            >
              <div className="row large-collapse">
                <div>
                  <ul className="lvl-1 dropdown menu" data-dropdown-menu>
                    <li className="item-1" style={{ fontSize: "15px" }}>
                      <Link
                        to={language === "es" ? "/nuestrafirma" : "/ourfirm"}
                      >
                        {" "}
                        <a>{language === "es" ? "La Firma" : "About Us"}</a>
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
                    {/* <li className="item-3" style={{ fontSize: "15px" }}>
                      <Link to={language === "es" ? "/noticias" : "/news"}>
                        <a>{language === "es" ? "Noticias" : "News"}</a>
                      </Link>
                    </li> */}
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
                      <Link to={language === "es" ? "/oficinas" : "/offices"}>
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
                          {language === "es"
                            ? "Presencia Global"
                            : "Global Presence"}
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
