import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import linkedin from "../../assets/img/linkedin.png";
import email from "../../assets/img/email.png";

export default function ProfessionalProfile(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let location = useLocation();
  return (
    <div>
      <div className="main-content">
        <div className="breadcrumbs-container-inner row large-collapse">
          <div className="column medium-8"></div>
        </div>
        <div className="inner services-detail">
          <div className="breadcrumbs-container-inner row large-collapse">
            <div className="column medium-8">
              <div className="breadcrumbs service-sub">
                <span className="crumb home">
                  <a href="/">Inicio</a>
                </span>
                <span className="crumb interior">
                  <a href="#">Profesionales</a>
                </span>
              </div>
            </div>

            <div className="column medium-4">
              <ul className="social-links inner">
                <p className="share-label">Compartir:</p>
                <li className="social-link facebook">
                  <a href="#">Facebook</a>
                </li>
                <li className="social-link twitter">
                  <a href="#">Twitter</a>
                </li>
                <li className="social-link linkedin">
                  <a onClick="">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="column medium-8" style={{ padding: "0px" }}>
              <div className="row hero-image" style={{ padding: "0px 20px" }}>
                <img src={props.location.state.image} alt="" />
              </div>
              <div className="row">
                <div className="column medium-12">
                  <div
                    className="row hero-image"
                    style={{ padding: "0px 20px" }}
                  >
                    <div className="row">
                      <div className="column medium-10">
                        <h2>{props.location.state.name}</h2>
                      </div>
                      <div className="column medium-2">
                        <div className="row">
                          <div
                            className="column small-6"
                            style={{ display: "flex" }}
                          >
                            <img
                              src={linkedin}
                              onClick={() =>
                                window.location.replace(
                                  props.location.state.linkedin
                                )
                              }
                              style={{ width: "70%", cursor: "pointer" }}
                            />
                            <img
                              src={email}
                              onClick={() =>
                                (window.location.href = `mailto:${props.location.state.mail}`)
                              }
                              style={{
                                width: "70%",
                                marginLeft: "20px",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                          <div className="column small-6"></div>
                        </div>
                      </div>
                      <div className="column medium-12">
                        <h4 style={{ color: "#67737E" }}>
                          {props.location.state.type === "socio"
                            ? "Socio"
                            : "Manager"}{" "}
                        </h4>
                      </div>
                      <div className="column medium-12">
                        <p>
                          {props.location.state.desc1 &&
                            props.location.state.desc1}
                        </p>

                        <p>
                          {props.location.state.desc2 &&
                            props.location.state.desc2}
                        </p>

                        <p>
                          {props.location.state.desc3 &&
                            props.location.state.desc3}
                        </p>

                        <p>
                          {props.location.state.desc4 &&
                            props.location.state.desc4}
                        </p>

                        <p>
                          {props.location.state.desc5 &&
                            props.location.state.desc5}
                        </p>

                        <p>
                          {props.location.state.desc6 &&
                            props.location.state.desc6}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column medium-4" style={{ padding: "0px" }}>
              <div className="cuadrado">
                <h5>Oficina</h5>
                <h6>Buenos Aires</h6>
                <br />
                <h5>Email</h5>
                <h6 style={{ color: "#BF1229" }}>
                  {props.location.state.mail}
                </h6>
                <br />
                <h5>Teléfono</h5>
                <h6>+ 54 11 4390-9700</h6>
                <br />
                <h5>Educación</h5>
                <h6>
                  {props.location.state.education
                    ? props.location.state.education.map((e) => (
                        <ul>
                          <li style={{ listStyleType: "disc" }}>{e}</li>
                        </ul>
                      ))
                    : null}
                </h6>

                {props.location.state.specializations ? (
                  <h5>Afiliaciones</h5>
                ) : null}
                <h6>
                  {props.location.state.afiliations
                    ? props.location.state.afiliations.map((a) => (
                        <ul>
                          <li style={{ listStyleType: "disc" }}>{a}</li>
                        </ul>
                      ))
                    : null}
                </h6>
                {props.location.state.specializations ? (
                  <h5>Áreas de especialización</h5>
                ) : null}
                <h6>
                  {props.location.state.specializations
                    ? props.location.state.specializations.map((s) => (
                        <ul>
                          <li style={{ listStyleType: "disc" }}>{s}</li>
                        </ul>
                      ))
                    : null}
                </h6>
              </div>
            </div>
            <div className="column medium-4" style={{ padding: "0px" }}>
              <div
                className="sidebar-block connect"
                style={{ marginTop: "20px", marginBottom: "30px" }}
              >
                <h4 style={{ color: "white", fontWeight: "900" }}>
                  Conectáte con nosotros
                </h4>
                <a href="javascript:;" className="link">
                  <span className="fa fa-caret-right" aria-hidden="true"></span>
                  Subscríbase a nuestros newsletters
                </a>
              </div>

              <div className="sidebar-block contact">
                <h4 style={{ color: "white", fontWeight: "900" }}>
                  Contáctenos
                </h4>
                <a href="oficinas.html" className="link">
                  <span className="fa fa-caret-right" aria-hidden="true"></span>
                  Encuentre su oficina más cercana
                </a>

                <div className="triangle" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="door"></div>
    </div>
  );
}
