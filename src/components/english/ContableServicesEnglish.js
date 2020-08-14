import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import banner from "../../assets/img/images-servicios-09.jpg";

export default function ContableServicesEnglish() {
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
                <Link to="/">
                  <a>Home</a>
                </Link>
              </span>
              <span className="crumb interior">
                <Link to="/servicios">
                  <a>Services</a>
                </Link>
              </span>
              <span className="crumb child">
                <a>Tax and Accounting Services</a>
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
                    Tax and Accounting Services
                  </a>
                  <ul className="lvl-2 vertical nested">
                    <li>
                      <a
                        onClick={() => setTab(0)}
                        style={{ color: tab === 0 ? "#AC0E20" : null }}
                      >
                        Transfer Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(1)}
                        style={{ color: tab === 1 ? "#AC0E20" : null }}
                      >
                        Andersen Consulting and Tax Compliance
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(2)}
                        style={{ color: tab === 2 ? "#AC0E20" : null }}
                      >
                        International Assignments
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(3)}
                        style={{ color: tab === 3 ? "#AC0E20" : null }}
                      >
                        Wealth Management &amp; Family Office
                      </a>
                    </li>

                    {/* <li>
                      <a
                        onClick={() => setTab(2)}
                        style={{ color: tab === 2 ? "#AC0E20" : null }}
                      >
                        Payroll
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(3)}
                        style={{ color: tab === 3 ? "#AC0E20" : null }}
                      >
                        Outsourcing
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(4)}
                        style={{ color: tab === 4 ? "#AC0E20" : null }}
                      >
                        Sociedades
                      </a>
                    </li> */}
                  </ul>
                </li>
              </ul>
            </nav>

            <div className="right-rail mobile">
              <div className="right-rail-container">
                <div className="people-container">
                  <ul className="people">
                    <h4>Managing Directors</h4>

                    <li className="person">
                      <div className="image">
                        <img
                          src="assets/img/placeholders/headshot-1.png"
                          alt=""
                        />
                      </div>
                      <div className="name">Michael Kohner</div>
                    </li>

                    <li className="person">
                      <div className="image">
                        <img
                          src="assets/img/placeholders/headshot-2.png"
                          alt=""
                        />
                      </div>
                      <div className="name">
                        Yichen Shepard
                        <div className="location">San Francisco, CA</div>
                      </div>
                    </li>
                  </ul>

                  <a href="javascript:;" className="more">
                    <span
                      className="fa fa-caret-right"
                      aria-hidden="true"
                    ></span>
                    View More
                  </a>
                </div>

                <ul className="insights">
                  <h4>Insights &amp; Resources</h4>

                  <li className="insight">
                    <div className="type">
                      <span
                        className="fa fa-file-text"
                        aria-hidden="true"
                      ></span>{" "}
                      tax release
                    </div>

                    <h5 className="title">
                      Filing Requirements Related to Indirect Investments in
                      Foreign Entities
                    </h5>
                  </li>

                  <li className="insight">
                    <div className="type">
                      <span
                        className="fa fa-file-text"
                        aria-hidden="true"
                      ></span>{" "}
                      tax release
                    </div>

                    <h5 className="title">
                      Private Equity Funds "Trade or Business" Operator or
                      "Investor"
                    </h5>
                  </li>

                  <li className="insight">
                    <div className="type">
                      <span
                        className="fa fa-file-text-o white"
                        aria-hidden="true"
                      ></span>{" "}
                      white paper
                    </div>

                    <h5 className="title">Special FATCA Update</h5>
                  </li>
                </ul>

                <a href="javascript:;" className="more">
                  <span className="fa fa-caret-right" aria-hidden="true"></span>{" "}
                  View More
                </a>
              </div>

              <div className="newsletter">
                <h4>From the Newsletter</h4>

                <div className="inner right-rail-container">
                  <img src="assets/img/placeholders/light.jpg" alt="" />
                  <h5 className="title">
                    Avoiding Hazards in Transferring Carried Interests
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="column large-8 medium-8 small-12 top-story">
            {tab === 0 && (
              <div className="primary-intro">
                <h2>Transfer Pricing</h2>
                <p>
                  Transfer Pricing (TP) has become one of the key areas of
                  international taxation.
                </p>
                <p>
                  Hence, most countries have very strict TP rules and
                  regulations in place so that tax authorities may make sure
                  that the arms’ length standard is met in the transactions
                  conducted between related parties.
                </p>
                <p>
                  Almost all Latin American countries, except for Paraguay,
                  apply the principles and guidelines developed by the OECD.
                </p>
                <p>
                  Argentine laws have adopted similar parameters, but have
                  extended controls to transactions carried out with persons
                  residing in zero or low tax jurisdictions or non-cooperating
                  jurisdictions, even when they are not related parties. It also
                  includes some special controls on routed exports and imports
                  (triangulations) and a Special Registry for Commodities
                  exports.
                </p>
                <p>
                  We provide a highly specialized service to advise on
                  international planning, annual compliance requirements,
                  assistance in dispute resolution and in the process for
                  Advance Transfer Pricing agreements.
                </p>
                <h5>Compliance with Control Regulations:</h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    We prepare or revise Transfer Pricing Studies prepared by
                    clients to ensure compliance with applicable rules and
                    regulations. Studies include the comparability process, to
                    which we apply the necessary rigor in order to minimize
                    potential controversies with the tax authority.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Studies involve preparing the local file and the master file
                    and the tax returns that should be filed.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    We provide assistance with the obligations that should be
                    complied with in routed import and export transactions and
                    in registering transactions with commodities.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    We prepare preliminary reports to assist in the design of
                    transfer pricing policies for multinational groups.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    We provide assistance in preparing the each “Country Report”
                    and in fulfilling the reporting obligations applicable to
                    the subsidiaries of multinational groups.
                  </li>
                </ul>

                <h5>Regional Coordination:</h5>
                <p>
                  Our regional presence allows us to obtain a broad vision of
                  international operations, transferring experiences between
                  countries and achieving coherence in the application of the
                  Transfer Pricing policies of our clients.
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    In the case of regional advisory services, the comparability
                    analysis includes the balance and solvency of comparables
                    for all countries involved.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Regional coordination allows us to get a wider view of
                    international operations, sharing experiences across
                    countries and achieving consistency in the transfer pricing
                    policies of multinational companies.
                  </li>
                </ul>
                <br />
                <h5>Dispute Resolution:</h5>
                <p>
                  We defend the taxpayer's position against possible adjustments
                  by the tax authority, accompanying him from the start of the
                  inspection to its definition in court in all contentious
                  stages
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Representation in defense of adjustments before the Tax
                    Administration, the Tax Court and Justice
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Preparation of technical expert reports
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Defenses of value before Customs
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Action in Mutual Agreement Procedures within the framework
                    of the Agreements to Avoid Double Taxation
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    We provide support to face tax examinations/audits and
                    defend clients in litigation processes, including the design
                    of strategies and the representation and advise before
                    jurisdictional authorities
                  </li>
                </ul>

                <h5>Advance Pricing Agreements:</h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    We provide assistance to clients who file and apply for
                    Joint Assessments for International Transaction Prices
                    (DCPOI)
                  </li>
                </ul>

                <h5>Business Valuation:</h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    We apply financial valuation techniques to companies and
                    advise on negotiations in M&A processes
                  </li>
                </ul>
              </div>
            )}
            {tab === 1 && (
              <div className="primary-intro">
                <p>
                  Our firm believes that providing advisory services requires a
                  proactive attitude towards seeking timely tax savings within a
                  legal framework. We consider that settlement of tax duties
                  starts before the end of every fiscal year; this enables
                  appreciating their consequences and allows planning, while
                  aiming at tax optimization.
                </p>
                <p>Our Services:</p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Support and strategy design during inspections
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Preparation and / or review of sworn statements of monthly
                    and / or annual compliance
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Advice on national, provincial and municipal levies
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    International tax structuring
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Due diligence procedures related to the acquisition of
                    companies
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Structuring of tax-free reorganizations
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Deferred tax calculations
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Legal defense and litigations
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Analysis of tax positions for which recoverability is not
                    deemed to be assured
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Recoverability of tax credits
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Recoverability of the balance of provincial taxes
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Advices on social security issues
                  </li>
                </ul>
              </div>
            )}
            {tab === 2 && (
              <div className="primary-intro">
                <h2>International Assignments</h2>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Tax planning on the global mobility policy
                  </li>
                  <li style={{ listStyleType: "disc" }}>Tax equalizations</li>
                  <li style={{ listStyleType: "disc" }}>
                    Advise on corporate and payroll taxes on home and host
                    country
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Advise on individual taxes in home and host country
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Global Mobility policies advisory
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Labor and Social security planification
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Work permit assistance
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Compliance on withholding taxes of the global mobility
                    transactions
                  </li>
                </ul>
              </div>
            )}
            {tab === 3 && (
              <div className="primary-intro">
                <h2>Wealth Management & Family Office</h2>
                <p>
                  We provide services designed for each family group to trust
                  the firm with their wealth management, acting as back office
                  for their “corporate family”
                </p>
                <p>
                  Therefore, the firm provides a comprehensive service that
                  includes all its knowledge, experience and expertise, solidly
                  focused on achieving:
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Effective organized and centralized familiar corporate
                    governance
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Proper and efficient administration and preservation of
                    assets
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Strategies designed specifically for each “corporate family”
                    according to their own objectives on asset management and
                    optimization and protection of their assets
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Close guidance by experienced multidisciplinary
                    professionals for the design and implementation of efficient
                    legal and fiscal structures
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Exclusive attention from our partners to achieve economic
                    and psycho-social welfare of the “corporate family”
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
          <strong>Andersen,</strong> is the Argentinian member firm of Andersen
          Global®,
        </p>
        <p
          style={{
            color: "white",
            marginTop: "30px",
            fontSize: "30px",
          }}
        >
          <strong>
            an international association of member firms comprised of tax and
            legal professionals worldwide.
          </strong>
        </p>
      </div>
      <div className="door"></div>
    </div>
  );
}
