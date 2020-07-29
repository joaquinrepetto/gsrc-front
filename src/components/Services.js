import React, { useState } from "react";
import { Link } from "react-router-dom";

import legal1 from "../assets/placeholders/legal1.jpg";
import legal2 from "../assets/placeholders/legal2.jpg";
import legal3 from "../assets/placeholders/colleagues.png";
import legal4 from "../assets/placeholders/family-bubbles.jpg";

export default function Services() {
  return (
    <>
      <div className="hero services">
        <div className="row small-uncollapse medium-uncollapse large-collapse">
          <div className="column small-12 inner">
            <div className="top">
              <div className="breadcrumbs ">
                <span className="crumb home">
                  <a href="/">Inicio</a>
                </span>
                <span className="crumb interior">
                  <a href="#">Servicios</a>
                </span>
              </div>

              <ul className="social-links social-hero">
                <p className="share-label">Compartir:</p>
                <li className="social-link facebook">
                  <a href="#">Facebook</a>
                </li>
                <li className="social-link twitter">
                  <a href="#">Twitter</a>
                </li>
                <li className="social-link linkedin">
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>

            <div className="text">
              <h1>Servicios</h1>
              <p>
                Tributación, Outsourcing, Payroll, Sociedades, Consultoría
                Organizacional y Sistemas
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column small-12">
          <ul className="services-list row">
            <li className="column small-12 medium-6">
              <div className="image">
                <a href="javascript:;">
                  <img src={legal1} style={{ borderRadius: "50%" }} alt="" />
                </a>
              </div>
              <div className="text">
                <h3 className="title">Servicios Legales</h3>
                <p>
                  Nuestra firma posee experiencia en transacciones complejas
                  internacionales y locales, tenemos profesionales expertos en
                  fusiones y adiquisiciones, en operaciones de financiación y en
                  temas regulatorios.
                </p>

                <p>
                  <Link to="/servicioslegales">
                    <a className="learn-more button cta hollow-dark">
                      Más información{" "}
                      <span className="fa fa-arrow-right"></span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li className="column small-12 medium-6">
              <div className="image">
                <a href="javascript:;">
                  <img src={legal2} style={{ borderRadius: "50%" }} alt="" />
                </a>
              </div>
              <div className="text">
                <h3 className="title">Servicios Tributarios y Contables</h3>
                <p>
                  El departamento Tributario-Contable de la firma está integrado
                  por contadores y abogados especializados en temas fiscales,
                  que brindan asesoramiento permanente en temas comerciales,
                  garantizando soluciones fiscales eficientes en todas las
                  áreas.
                </p>

                <p>
                  <Link to="/servicioscontables">
                    <a
                      href="servicesLearnMore.html"
                      className="learn-more button cta hollow-dark"
                    >
                      {" "}
                      Más información{" "}
                      <span className="fa fa-arrow-right"></span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li className="column small-12 medium-6">
              <div className="image">
                <a href="javascript:;">
                  <img src={legal3} alt="" />
                </a>
              </div>
              <div className="text">
                <h3 className="title">Business Process Outsourcing (BPO)</h3>
                <p>
                  Preparamos valuaciones para clientes operando en todos los
                  sectores, tanto para operaciones de M&A como para revisiones
                  internas.
                </p>

                <p>
                  <Link to="/bpo">
                    <a className="learn-more button cta hollow-dark">
                      Más información{" "}
                      <span className="fa fa-arrow-right"></span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li className="column small-12 medium-6">
              <div className="image">
                <a href="javascript:;">
                  <img src={legal4} alt="" />
                </a>
              </div>
              <div className="text">
                <h3 className="title">
                  Servicios de Wealth Management & Family Office
                </h3>
                <p>
                  Nuestros expertos pueden ayudarlos con todas sus necesidades
                  de riqueza personal, incluidas las de su familia, su negocio y
                  sus activos.
                </p>

                <p>
                  <Link to="/servicioswealth">
                    <a className="learn-more button cta hollow-dark">
                      Más información{" "}
                      <span className="fa fa-arrow-right"></span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="callout3">
        <h1 style={{ color: "white" }}>Revolucionando la práctica legal</h1>
        <h3 style={{ color: "white" }}>
          Integramos derecho, impuestos y tecnología
        </h3>
      </div>

      <div className="door"></div>
    </>
  );
}
