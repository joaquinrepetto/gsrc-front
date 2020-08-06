import React, { useState, useEffect } from "react";

import banner from "../../assets/img/images-servicios-11.jpg";

export default function WealthServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className="inner services-detail">
        <div className="breadcrumbs-container-inner row large-collapse">
          <div className="column medium-8"></div>
        </div>
        <div className="breadcrumbs-container-inner row large-collapse">
          <div className="column medium-8">
            <div className="breadcrumbs service-sub">
              <span className="crumb home">
                <a href="/home-english">Home</a>
              </span>
              <span className="crumb interior">
                <a href="#">Services</a>
              </span>
              <span className="crumb child">
                <a href="#">Wealth Management & Family Office</a>
              </span>
            </div>
          </div>

          <div className="column medium-4">
            <ul className="social-links inner">
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
        </div>

        <div className="row hero-image">
          <img src={banner} alt="" />
        </div>

        <div className="row">
          <div className="sidebar-container column large-3 medium-4 small-12">
            <nav className="sidebar full">
              <ul className="lvl-1 veritcal-menu" data-accordion-menu>
                <li>
                  <a style={{ color: "#AC0E20" }}>
                    Servicios Wealth Management & Family Office
                  </a>
                  {/* <ul className="lvl-2 vertical nested">
                    <li>
                      <a onClick={() => setTab(0)}>
                        Consultoría y Compliance Tributario
                      </a>
                    </li>
                    <li>
                      <a onClick={() => setTab(1)}>
                        Consultoría Organizacional y Sistemas
                      </a>
                    </li>
                    <li>
                      <a onClick={() => setTab(2)}>Tecnología</a>
                    </li>
                  </ul> */}
                </li>
              </ul>
            </nav>
          </div>

          <div className="column large-8 medium-8 small-12 top-story">
            {tab === 0 && (
              <div className="primary-intro">
                <h2>Wealth Management & Family Office</h2>
                <p>
                  We provide services designed for each family group to trust
                  the firm with their wealth management, acting as back office
                  for their “corporate family”.
                </p>
                <p>
                  Therefore, the firm provides a comprehensive service that
                  includes all its knowledge, experience and expertise, solidly
                  focused on achieving:
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Effective organized and centralized familiar corporate
                    governance.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Proper and efficient administration and preservation of
                    assets.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Strategies designed specifically for each “corporate family”
                    according to their own objectives on asset management and
                    optimization and protection of their assets.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Close guidance by experienced multidisciplinary
                    professionals for the design and implementation of efficient
                    legal and fiscal structures.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Exclusive attention from our partners to achieve economic
                    and psycho-social welfare of the “corporate family”.
                  </li>
                </ul>

                <p>
                  Our aim is to provide comprehensive and agreed-upon solutions
                  to each family group, which we consider is a basic strategy to
                  avoid contingencies and patrimonial risks, as well as to
                  optimize the management of the assets involved.
                </p>
                <p>
                  In order to succeed, our firm complies with very high
                  confidentiality and data protection standards which are not
                  only guaranteed from the point of view of our “values”
                  (non-disclosure), but also from a technological aspect whereby
                  Andersen in Argentina has adopted state of the art measures
                  using cloud computing, encryption and codified access tools.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="callout3">
        <p
          style={{
            color: "white",
            marginTop: "30px",
            fontSize: "30px",
          }}
        >
          <strong>Andersen,</strong> un nombre del pasado,
        </p>
        <p
          style={{
            color: "white",
            marginTop: "30px",
            fontSize: "30px",
          }}
        >
          <strong>la firma del futuro</strong>
        </p>
      </div>
      <div className="door"></div>
    </div>
  );
}
