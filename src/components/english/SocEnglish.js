import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import banner from "../../assets/img/images-servicios-09.jpg";

export default function SocEnglish() {
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
                <Link to="/home-english">
                  <a>Home</a>
                </Link>
              </span>
              <span className="crumb interior">
                <Link to="/servicios">
                  <a>Services</a>
                </Link>
              </span>
              <span className="crumb child">
                <a>Corporate Solutions</a>
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
                  <a style={{ color: "#AC0E20" }}>Corporate Solutions</a>
                  <ul className="lvl-2 vertical nested">
                    <li>
                      <a
                        onClick={() => setTab(0)}
                        style={{ color: tab === 0 ? "#AC0E20" : null }}
                      >
                        Corporate Solutions
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <div className="column large-8 medium-8 small-12 top-story">
            {tab === 0 && (
              <div className="primary-intro">
                <h2>Corporate Solutions</h2>
                <h5>Consulting and y Advisory Services:</h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Offering opinions on general and specific matters,
                    presenting alternatives and tools to take decisions.
                  </li>
                </ul>

                <h5>Services:</h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Companies’ incorporation and registration, joint ventures
                    and business and industry associations.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Modification of corporate Bylaws.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Corporate mergers, acquisitions, divestitures and
                    dissolutions: document preparation and carrying out of
                    proceedings before Regulatory Agencies.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Writing of minutes of Meetings of Boards of Directors and
                    Shareholders’ Meetings.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Experience on bankruptcy proceedings.
                  </li>
                </ul>
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
          <strong>Andersen,</strong> name from the past,
        </p>
        <p
          style={{
            color: "white",
            marginTop: "30px",
            fontSize: "30px",
          }}
        >
          <strong>The Firm of the future</strong>
        </p>
      </div>
      <div className="door"></div>
    </div>
  );
}
