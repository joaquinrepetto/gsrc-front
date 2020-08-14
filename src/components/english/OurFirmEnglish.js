import React, { useState, useEffect } from "react";

export default function OurFirmEnglish() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tab, setTab] = useState(9);

  return (
    <div>
      <div className="main-content">
        <div className="inner landing">
          <div className="hero">
            <div className="row small-uncollapse medium-uncollapse large-collapse">
              <div className="column small-12 inner">
                <div className="top">
                  <div className="breadcrumbs ">
                    <span className="crumb home">
                      <a href="/home-english">Home</a>
                    </span>
                    <span className="crumb interior">
                      <a href="#">About Us</a>
                    </span>
                    {tab !== 9 && (
                      <span className="crumb interior">
                        <a href="#">
                          {tab === 0
                            ? "What makes us different"
                            : tab === 1
                            ? "Commitment"
                            : tab === 2
                            ? "Our mission"
                            : null}
                        </a>
                      </span>
                    )}
                  </div>

                  <ul className="social-links social-hero">
                    <p className="share-label">Share:</p>
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
                  <h1>About Us</h1>
                  <p>
                    We are a member firm of Andersen Global providing Financial
                    Consulting, Transfer Pricing, Accounting and Tax
                    Outsourcing, Corporations and Legal Consulting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="sidebar-container column large-3 medium-4 small-12">
            <nav className="sidebar full">
              <ul className="lvl-1 veritcal-menu" data-accordion-menu>
                <li>
                  <a style={{ color: "#AC0E20" }}>About Us</a>
                  <ul className="lvl-2 vertical nested">
                    <li>
                      <a
                        onClick={() => setTab(0)}
                        style={{ color: tab === 0 ? "#AC0E20" : null }}
                      >
                        What makes us different
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(1)}
                        style={{ color: tab === 1 ? "#AC0E20" : null }}
                      >
                        Commitment
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(2)}
                        style={{ color: tab === 2 ? "#AC0E20" : null }}
                      >
                        Our mission
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <div className="column large-8 medium-8 small-12 top-story">
            {tab === 9 && (
              <p>
                Under the Andersen brand we provide independent legal and tax
                advice to our clients. As a member of Andersen Global, we have a
                worldwide presence through its member and collaborating firms.
                We are experts at what we do, and our comprehensive
                understanding of the market helps us be exclusively committed to
                our clients&#39; interests. Our role is purely that of a
                consultant and as a matter of principle, we do not offer the
                auditing of financial statements. This helps us avoid conflicts
                of interest. We are a team of dedicated professionals who uphold
                the integrity and values associated with the Andersen brand
                worldwide.
              </p>
            )}
            {tab === 0 && (
              <div className="primary-intro">
                <h3 style={{ color: "#AD0D21" }}>What makes us different</h3>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    The vast knowledge on matters on which we provide our
                    advice, and the local and international business environment
                    where our clients develop.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    A working methodology which includes carrying out detailed
                    analyses at affordable costs.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Efficient and timely personalized assistance. Instead of
                    providing an impersonal and standardized structure, we offer
                    an organized service controlled by our partners, focused on
                    complying with specific needs applying a criterion of
                    optimization of results.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    In order to offer high-quality professional services, we
                    have adopted a culture driven by the pursuit of excellence:
                    enjoying our work as best as we can and acting always
                    anticipating the needs and problems our clients may have.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    A professional qualified team of Public Accountants, Lawyers
                    and Economists who develop their work and are constantly
                    being trained. Our team of more than 100 professional
                    experts is committed to continuously searching alternatives
                    and making intelligent analyses to use their conclusions in
                    their daily practice.
                  </li>
                </ul>
              </div>
            )}
            {tab === 1 && (
              <div className="primary-intro">
                <h3 style={{ color: "#AD0D21" }}>Commitment</h3>
                <p>
                  The following distinctive elements and qualities that support
                  our broad experience need to be listed:
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Timely providing practical solutions
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Quickly solving any request made by clients
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Maintaining a kind relation to enable effective
                    communication
                  </li>
                  <li style={{ listStyleType: "disc" }}>Professional ethics</li>
                  <li style={{ listStyleType: "disc" }}>
                    Keeping a fluent relation to develop objectives in the best
                    way
                  </li>
                </ul>
              </div>
            )}
            {tab === 2 && (
              <div className="primary-intro">
                <h3 style={{ color: "#AD0D21" }}>Our Mission</h3>
                <p>
                  Providing effective and reliable solutions of the highest
                  professional quality.
                </p>
                <p>
                  Achieving our mission with integrity and respecting the
                  individuality of our professional staff.
                </p>
              </div>
            )}
            {tab === 3 && (
              <div className="primary-intro">
                <h2>Wealth Management & Family Office</h2>
                <p>
                  Brindamos un servicio diseñado para que cada grupo familiar
                  pueda confiarnos sus asuntos patrimoniales, ejerciendo de back
                  office de su “familia empresaria”.
                </p>
                <p>
                  Integramos así en un mismo servicio, todos nuestros
                  conocimientos, experiencia y especialidades, con el sólido
                  objetivo de lograr:
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Un gobierno familiar efectivo, organizado y centralizado.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Una correcta y eficiente administración y preservación del
                    patrimonio.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Una estrategia diseñada a la medida de cada “familia
                    empresaria”, según sus propias metas de gestión patrimonial
                    y de optimización y protección de su patrimonio.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Un acompañamiento estrecho por parte de profesionales
                    experimentados interdisciplinarios, para el diseño e
                    implementación de estructuras jurídico-fiscales eficaces.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Una atención exclusiva por parte de nuestros socios, en pos
                    del bienestar económico y psico-social de la “familia
                    empresaria”.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Apuntamos así a soluciones integrales y consensuadas con
                    cada grupo familiar, estrategia fundamental para evitar
                    contingencias y riesgos patrimoniales, a la par de optimizar
                    la gestión de los patrimonios involucrados.
                  </li>
                </ul>

                <p>
                  A tales efectos, cumplimos con altísimos estándares de
                  confidencialidad y protección de datos, aspectos que no sólo
                  resultan garantizados desde un plano “de valores” (no
                  divulgación) sino también en un plano informático, aspecto en
                  el cual hemos adoptado medidas de avanzada, mediante el uso de
                  herramientas de cloud computing, encriptación y acceso
                  codificado.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="door"></div>
    </div>
  );
}
