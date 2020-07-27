import React, { useState } from "react";
import legal1 from "../assets/placeholders/legal1.jpg";
import legal2 from "../assets/placeholders/legal2.jpg";
import legal3 from "../assets/placeholders/colleagues.png";
import legal4 from "../assets/placeholders/family-bubbles.jpg";

export default function Services() {
  return (
    <>
      <div class="hero services">
        <div class="row small-uncollapse medium-uncollapse large-collapse">
          <div class="column small-12 inner">
            <div class="top">
              <div class="breadcrumbs ">
                <span class="crumb home">
                  <a href="/">Inicio</a>
                </span>
                <span class="crumb interior">
                  <a href="#">Servicios</a>
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
              <h1>Servicios</h1>
              <p>
                Tributación, Outsourcing, Payroll, Sociedades, Consultoría
                Organizacional y Sistemas
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column small-12">
          <ul class="services-list row">
            <li class="column small-12 medium-6">
              <div class="image">
                <a href="javascript:;">
                  <img src={legal1} style={{ borderRadius: "50%" }} alt="" />
                </a>
              </div>
              <div class="text">
                <h3 class="title">Servicios Legales</h3>
                <p>
                  Nuestra firma posee experiencia en transacciones complejas
                  internacionales y locales, tenemos profesionales expertos en
                  fusiones y adiquisiciones, en operaciones de financiación y en
                  temas regulatorios.
                </p>

                <p>
                  <a href="servicesLearnMore.html" class="learn-more">
                    Más información <span class="fa fa-arrow-right"></span>
                  </a>
                </p>
              </div>
            </li>
            <li class="column small-12 medium-6">
              <div class="image">
                <a href="javascript:;">
                  <img src={legal2} style={{ borderRadius: "50%" }} alt="" />
                </a>
              </div>
              <div class="text">
                <h3 class="title">Servicios tributarios y contables</h3>
                <p>
                  El departamento Tributario-Contable de la firma está integrado
                  por contadores y abogados especializados en temas fiscales,
                  que brindan asesoramiento permanente en temas comerciales,
                  garantizando soluciones fiscales eficientes en todas las
                  áreas.
                </p>

                <p>
                  <a href="servicesLearnMore.html" class="learn-more">
                    Más información <span class="fa fa-arrow-right"></span>
                  </a>
                </p>
              </div>
            </li>
            <li class="column small-12 medium-6">
              <div class="image">
                <a href="javascript:;">
                  <img src={legal3} alt="" />
                </a>
              </div>
              <div class="text">
                <h3 class="title">Servicios de consultoría</h3>
                <p>
                  Preparamos valuaciones para clientes operando en todos los
                  sectores, tanto para operaciones de M&A como para revisiones
                  internas.
                </p>

                <p>
                  <a href="servicesLearnMore.html" class="learn-more">
                    Más información <span class="fa fa-arrow-right"></span>
                  </a>
                </p>
              </div>
            </li>
            <li class="column small-12 medium-6">
              <div class="image">
                <a href="javascript:;">
                  <img src={legal4} alt="" />
                </a>
              </div>
              <div class="text">
                <h3 class="title">
                  Servicios de Wealth Management & Family Office
                </h3>
                <p>
                  Nuestros expertos pueden ayudarlos con todas sus necesidades
                  de riqueza personal, incluidas las de su familia, su negocio y
                  sus activos.
                </p>

                <p>
                  <a href="servicesLearnMore.html" class="learn-more">
                    Más información <span class="fa fa-arrow-right"></span>
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="callout3">
        <h1 style={{ color: "white" }}>Revolucionando la práctica legal</h1>
        <h3 style={{ color: "white" }}>
          Integramos derecho, impuestos y tecnología
        </h3>
      </div>

      <div class="door"></div>
    </>
  );
}
