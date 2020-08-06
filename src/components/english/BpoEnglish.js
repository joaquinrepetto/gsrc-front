import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import banner from "../../assets/img/images-servicios-09.jpg";

export default function BpoEnglish() {
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
                <a>Business Process Outsourciong (BPO)</a>
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
                    Business Process Outsourcing (BPO)
                  </a>
                  <ul className="lvl-2 vertical nested">
                    <li>
                      <a
                        onClick={() => setTab(0)}
                        style={{ color: tab === 0 ? "#AC0E20" : null }}
                      >
                        Payroll Outsourcing
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(1)}
                        style={{ color: tab === 1 ? "#AC0E20" : null }}
                      >
                        Accounting and Tax Outsourcing
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
                <h2>Payroll Outsourcing </h2>
                <h5>Consulting and Advisory Services:</h5>
                <p>
                  Opinion on general and specific aspects, alternatives and
                  tools for decision making.
                </p>
                <h5>
                  Settlement of wages, daily payments and social / tax
                  contributions:
                </h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Wage settlement and their social and tax contributions.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Preparation of confidential payrolls.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Preparation and issuance of pay slips.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Issuance of signed and sealed payroll ledger.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Preparation of accounting entries.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Issuance of special reports at companies’ request.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Support in case of employment termination.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Projection of employment expenses and/or payments.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Advice to companies on inspections carried out by tax
                    agencies and/or answer to filing requirements of regulatory
                    agencies.
                  </li>
                </ul>
              </div>
            )}
            {tab === 1 && (
              <div className="primary-intro">
                <h2>Accounting and Tax Outsourcing</h2>
                <p>
                  Our firm uses efficient operative formulas for the outsourcing
                  of processes. Our services include the following:
                </p>
                <h5>Administrative Processes:</h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Setting administrative circuits.
                  </li>
                  <li style={{ listStyleType: "disc" }}>Invoicing.</li>
                  <li style={{ listStyleType: "disc" }}>Treasury.</li>
                  <li style={{ listStyleType: "disc" }}>Inventory taking.</li>
                </ul>

                <h5>Accounting, Employment and Tax Matters:</h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>Accounting.</li>
                  <li style={{ listStyleType: "disc" }}>
                    Financial analyses and settlements.
                  </li>
                  <li style={{ listStyleType: "disc" }}>Budget control.</li>
                  <li style={{ listStyleType: "disc" }}>Monthly reports.</li>
                  <li style={{ listStyleType: "disc" }}>
                    Tax and duty settlement.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Payroll and social security duties settlement.
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
