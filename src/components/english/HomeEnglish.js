import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import banner1 from "../../assets/img/imag-slider-3-home.jpg";
import banner2 from "../../assets/img/imag-slider-1-home.jpg";
import banner3 from "../../assets/img/imag-slider-2-home.jpg";

import new1 from "../../assets/news/new1.jpg";
import new2 from "../../assets/news/new2.jpg";
import new3 from "../../assets/news/new3.jpg";
import new4 from "../../assets/news/new4.jpg";

import value1 from "../../assets/values/AT_BestInClass_icon.jpg";
import value2 from "../../assets/values/AT_Stewardship_icon.jpg";
import value3 from "../../assets/values/AT_Independence_icon (1).jpg";
import value4 from "../../assets/values/AT_Seamless_icon.jpg";
import value5 from "../../assets/values/AT_Transparency_icon.jpg";

const hardcodedNews = [
  {
    id: 1,
    title:
      "COVID-19 Guía de beneficios Tributarios a nivel mundial: País por País",
    description:
      "Vea y/o descargue la guía de alivio fisico global, que ofrece una visión general de la respuesta a COVID-19 por cada país [...]",
    image: new1,
  },
  {
    id: 2,
    title: "Doing Business en Argentina",
    description:
      "Argentina está situada en el extremo sur del continente americnao, siendo el octavo país más grande del mundo y el segundo de América Latina en términos [...]",
    image: new2,
  },
  {
    id: 3,
    title:
      "Residencia fiscal en Uruguay - Pérdida de la residencia fiscal en Argentina",
    description:
      "En los últimos tiempos se ha incrementado el interés por parte de personas humanas residentes en Argentina para cambiar su residencia fiscal a Uruguay [...]",
    image: new3,
  },
  {
    id: 4,
    title: "Crisis económica pandemia COVID-19 en Precios de Transferencia",
    description:
      "Les acercamos nuestras reflexiones para asistirlos en las adecuaciones de Precios de Transferencia que pueden requerir ante la crisis del COVID-19. [...]",
    image: new4,
  },
];

export default function HomeEnglish() {
  const [news, setNews] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeSlide === 2) {
        setActiveSlide(0);
        console.log(activeSlide, "aca");
      } else {
        setActiveSlide(activeSlide + 1);
        console.log(activeSlide, "aca");
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  const loadNews = async () => {
    try {
      axios
        .get("http://localhost:5000/api/publications")
        .then(function (response) {
          // handle success
          console.log(response.data.publications);
          setNews(response.data.publications);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="main-content">
        <div
          className="home-carousel orbit"
          data-orbit
          style={{ paddingTop: "25px" }}
        >
          <div className="row large-collapse medium-collapse small-collapse">
            <div className="column">
              <ul className="orbit-container">
                {activeSlide === 0 && (
                  <li className="orbit-slide is-active">
                    <picture>
                      <source
                        srcset={banner1}
                        media="(min-width: 0) and (max-width: 39.9375em)"
                      />
                      <source srcset={banner1} media="(max-width: 63.9375em)" />
                      <source srcset={banner1} media="(min-width: 64em)" />

                      <img srcset={banner1} alt="Three" />
                    </picture>

                    <nav className="orbit-bullets mobile">
                      <button className="is-active" data-slide="0">
                        <span className="show-for-sr">
                          First slide details.
                        </span>
                        <span className="show-for-sr">Current Slide</span>
                      </button>
                      <button data-slide="1">
                        <span className="show-for-sr">
                          Second slide details.
                        </span>
                      </button>
                      <button data-slide="2">
                        <span className="show-for-sr">
                          Third slide details.
                        </span>
                      </button>
                    </nav>

                    <div className="detail-text">
                      <h1>Andersen in Argentina</h1>
                      <p>
                        Since 2020 we are the product of the merger of two
                        prestigious studios in Argentina: GSRC and MODO Law.
                        Recognized as leaders in Transfer Pricing and Taxes in
                        the market.
                      </p>
                      <Link to="/ourfirm">
                        <a className="button cta hollow-light">
                          More Information{" "}
                        </a>
                      </Link>
                    </div>
                  </li>
                )}

                {activeSlide === 1 && (
                  <li className="orbit-slide ">
                    <picture className="image">
                      <source
                        srcset={banner2}
                        media="(min-width: 0) and (max-width: 39.9375em)"
                      />
                      <source srcset={banner2} media="(max-width: 63.9375em)" />
                      <source srcset={banner2} media="(min-width: 64em)" />

                      <img srcset={banner2} alt="One" />
                    </picture>

                    <nav className="orbit-bullets mobile">
                      <button className="is-active" data-slide="0">
                        <span className="show-for-sr">
                          First slide details.
                        </span>
                        <span className="show-for-sr">Current Slide</span>
                      </button>
                      <button data-slide="1">
                        <span className="show-for-sr">
                          Second slide details.
                        </span>
                      </button>
                      <button data-slide="2">
                        <span className="show-for-sr">
                          Third slide details.
                        </span>
                      </button>
                    </nav>
                    <div className="detail-text">
                      <h1>Our Services</h1>

                      <p>
                        We are an international firm of legal, tax and
                        accounting services based in Buenos Aires, providing
                        advice to companies and individuals locally and
                        internationally.
                      </p>
                      <Link to="/services-english">
                        <a className="button cta hollow-light">
                          More information{" "}
                        </a>
                      </Link>
                    </div>
                  </li>
                )}

                {activeSlide === 2 && (
                  <li className="orbit-slide">
                    <picture>
                      <source
                        srcset={banner3}
                        media="(min-width: 0) and (max-width: 39.9375em)"
                      />
                      <source srcset={banner3} media="(max-width: 63.9375em)" />
                      <source srcset={banner3} media="(min-width: 64em)" />

                      <img srcset={banner3} alt="Two" />
                    </picture>

                    <nav className="orbit-bullets mobile">
                      <button className="is-active" data-slide="0">
                        <span className="show-for-sr">
                          First slide details.
                        </span>
                        <span className="show-for-sr">Current Slide</span>
                      </button>
                      <button data-slide="1">
                        <span className="show-for-sr">
                          Second slide details.
                        </span>
                      </button>
                      <button data-slide="2">
                        <span className="show-for-sr">
                          Third slide details.
                        </span>
                      </button>
                    </nav>

                    <div className="detail-text">
                      <h1>Our Team</h1>
                      <p>
                        We have a multidisciplinary team made up of lawyers,
                        economists and tax accountants who provide comprehensive
                        services to the needs of clients.
                      </p>
                      <Link to="/proffessionals">
                        <a className="button cta hollow-light">
                          More information
                        </a>
                      </Link>
                    </div>
                  </li>
                )}
              </ul>

              <nav className="orbit-bullets">
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveSlide(0)}
                  className={activeSlide == 0 && "is-active"}
                  data-slide="0"
                >
                  <span className="show-for-sr">First slide details.</span>
                  {activeSlide === 0 && (
                    <span className="show-for-sr">Current Slide</span>
                  )}
                </button>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveSlide(1)}
                  data-slide="1"
                  className={activeSlide == 1 && "is-active"}
                >
                  <span className="show-for-sr">Second slide details.</span>
                  {activeSlide === 1 && (
                    <span className="show-for-sr">Current Slide</span>
                  )}
                </button>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveSlide(2)}
                  data-slide="2"
                  className={activeSlide == 2 && "is-active"}
                >
                  <span className="show-for-sr">Third slide details.</span>
                  {activeSlide === 2 && (
                    <span className="show-for-sr">Current Slide</span>
                  )}
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* NEWS */}
        {/* <div className="headline-scroller orbit" data-orbit>
          <div className="row large-collapse">
            <div className="column small-4">
              <hr />
            </div>
            <div className="column small-4">
              <h2
                style={{
                  color: "#AB0E1E",
                  border: "none",
                  textAlign: "center",
                  justifyContent: "center",
                  paddingTop: "25px",
                  fontSize: "25px",
                  fontWeight: "800",
                }}
              >
                Doing business in Argentina
              </h2>
            </div>
            <div className="column small-4">
              <hr />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column medium-3">
            <img src={news[0] ? news[0].image : null} width="100%" />
          </div>
          <div className="column medium-3">
            <img src={news[1] ? news[1].image : null} width="100%" />
          </div>
          <div className="column medium-3">
            <img src={news[2] ? news[2].image : null} width="100%" />
          </div>
          <div className="column medium-3">
            <img src={news[3] ? news[3].image : null} width="100%" />
          </div>
        </div>

        <div className="row" style={{ paddingTop: "15px" }}>
          <div className="column medium-3">
            <h4>{news[0] ? news[0].title : null}</h4>
          </div>
          <div className="column medium-3">
            <h4>{news[1] ? news[1].title : null}</h4>
          </div>
          <div className="column medium-3">
            <h4>{news[2] ? news[2].title : null}</h4>
          </div>
          <div className="column medium-3">
            <h4>{news[3] ? news[3].title : null}</h4>
          </div>
        </div>

        <div className="row">
          <div className="column medium-3">
            <p>{news[0] ? news[0].shortDesc.slice(0, 120) + " [...]" : null}</p>
          </div>
          <div className="column medium-3">
            <p>{news[1] ? news[1].shortDesc.slice(0, 120) + " [...]" : null}</p>
          </div>
          <div className="column medium-3">
            {news[2] ? news[2].shortDesc.slice(0, 120) + " [...]" : null}
          </div>
          <div className="column medium-3">
            {news[3] ? news[3].shortDesc.slice(0, 120) + " [...]" : null}
          </div>
        </div>

        <div className="row" style={{ paddingBottom: "100px" }}>
          <div className="column medium-3">
            <p>
              <a
                href="servicesLearnMore.html"
                className="button cta hollow-dark"
              >
                Ver más{" "}
              </a>
            </p>
          </div>
          <div className="column medium-3">
            <p>
              <a
                href="servicesLearnMore.html"
                className="button cta hollow-dark"
              >
                Ver más{" "}
              </a>
            </p>
          </div>
          <div className="column medium-3">
            <p>
              <a
                href="servicesLearnMore.html"
                className="button cta hollow-dark"
              >
                Ver más{" "}
              </a>
            </p>
          </div>
          <div className="column medium-3">
            <p>
              <a
                href="servicesLearnMore.html"
                className="button cta hollow-dark"
              >
                Ver más{" "}
              </a>
            </p>
          </div>
        </div> */}
        {/* NEWS */}

        <div className="headline-scroller orbit" data-orbit>
          <div className="row large-collapse">
            <div className="column small-4">
              <hr />
            </div>
            <div className="column small-4">
              <h2
                style={{
                  border: "none",
                  textAlign: "center",
                  justifyContent: "center",
                  paddingTop: "25px",
                  fontSize: "25px",
                  fontWeight: "800",
                }}
              >
                Our Values
              </h2>
            </div>
            <div className="column small-4">
              <hr />
            </div>
          </div>
        </div>

        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-lg-15 col-sm-6">
            <img src={value1} style={{ width: "30%" }} />
          </div>
          <div className="col-lg-15 col-sm-6">
            <img src={value2} style={{ width: "30%" }} />
          </div>
          <div className="col-lg-15 col-sm-6">
            <img src={value3} style={{ width: "30%" }} />
          </div>
          <div className="col-lg-15 col-sm-6">
            <img src={value4} style={{ width: "30%" }} />
          </div>
          <div className="col-lg-15 col-sm-6">
            <img src={value5} style={{ width: "30%" }} />
          </div>
        </div>

        <div
          className="row"
          style={{ textAlign: "center", paddingTop: "40px" }}
        >
          <div className="col-lg-15 col-sm-6">
            <h3>Excellence</h3>
          </div>
          <div className="col-lg-15 col-sm-6">
            <h3>Commitment</h3>
          </div>
          <div className="col-lg-15 col-sm-6">
            <h3>Independence</h3>
          </div>
          <div className="col-lg-15 col-sm-6">
            <h3>Seamless</h3>
          </div>
          <div className="col-lg-15 col-sm-6">
            <h3>Transparency</h3>
          </div>
        </div>

        <div
          className="row"
          style={{ textAlign: "center", paddingTop: "10px" }}
        >
          <div className="col-lg-15 col-sm-6">
            <p className="values">
              We aim to be the benchmark for quality in our industry and the
              standard by which other firms are measured.
            </p>
          </div>
          <div className=" col-lg-15 col-sm-6">
            <p className="values">
              We hire the best and the brightest and we invest in our people to
              ensure that legacy.
            </p>
          </div>
          <div className="col-lg-15 col-sm-6">
            <p className="values">
              Our platform allows us to objectively serve as our client's
              advocate; the only advice and solutions we offer are those that
              are in the best interest of our client
            </p>
          </div>
          <div className="col-lg-15 col-sm-6">
            <p className="values">
              Our firm is constructed as a global firm. We share an interest in
              providing the highest level of client services regardless of
              location.
            </p>
          </div>
          <div className="col-lg-15 col-sm-6">
            <p class="values">
              We value open communication, information sharing and inclusive
              decision making.
            </p>
          </div>
        </div>

        <div class="callout" style={{ marginTop: "50px" }}>
          <p>Andersen is the Argentinian member firm of Andersen Global®,</p>
          <p style={{ fontWeight: "900" }}>
            an international association of member firms
          </p>
          <p style={{ fontWeight: "900" }}>
            comprised of tax and legal professionals worldwide.
          </p>
        </div>
      </div>

      <div class="door"></div>
    </div>
  );
}
