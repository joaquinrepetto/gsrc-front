import React, { useState, useEffect } from "react";

import banner from "../../assets/img/images-servicios-08.jpg";

export default function LegalServicesEnglish() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [tab, setTab] = useState(1);

  return (
    <div>
      <div class="inner services-detail">
        <div class="breadcrumbs-container-inner row large-collapse">
          <div class="column medium-8"></div>
        </div>
        <div class="breadcrumbs-container-inner row large-collapse">
          <div class="column medium-8">
            <div class="breadcrumbs service-sub">
              <span class="crumb home">
                <a href="/">Home</a>
              </span>
              <span class="crumb interior">
                <a href="#">Services</a>
              </span>
              <span class="crumb child">
                <a href="#">Legal Services</a>
              </span>
            </div>
          </div>

          <div class="column medium-4">
            <ul class="social-links inner">
              <p class="share-label">Share:</p>
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
        </div>

        <div class="row hero-image">
          <img src={banner} alt="" />
        </div>

        <div class="row">
          <div class="sidebar-container column large-3 medium-4 small-12">
            <nav class="sidebar full">
              <ul class="lvl-1 veritcal-menu" data-accordion-menu>
                <li>
                  <a style={{ color: "#AC0E20" }}>Legal Services</a>
                  <ul class="lvl-2 vertical nested is-active">
                    {/* <li>
                      <a
                        onClick={() => setTab(0)}
                        style={{ color: tab === 0 ? "#AC0E20" : null }}
                      >
                        Legal
                      </a>
                    </li> */}
                    <li>
                      <a
                        onClick={() => setTab(1)}
                        style={{
                          color: tab === 1 ? "#AC0E20" : null,
                          lineHeight: "20px",
                        }}
                      >
                        Legal and Contentious Tax Matters
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(2)}
                        style={{ color: tab === 2 ? "#AC0E20" : null }}
                      >
                        International Trade and Custom Law
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(3)}
                        style={{ color: tab === 3 ? "#AC0E20" : null }}
                      >
                        Tech
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(4)}
                        style={{ color: tab === 4 ? "#AC0E20" : null }}
                      >
                        Corporate solutions
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(5)}
                        style={{ color: tab === 5 ? "#AC0E20" : null }}
                      >
                        Labor Law
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(6)}
                        style={{ color: tab === 6 ? "#AC0E20" : null }}
                      >
                        Legal Consultancy and Legal Compliance
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(7)}
                        style={{ color: tab === 7 ? "#AC0E20" : null }}
                      >
                        Litigation and Other Processes
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setTab(8)}
                        style={{ color: tab === 8 ? "#AC0E20" : null }}
                      >
                        Industrial and Intellectual Property Rights
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <div class="column large-8 medium-8 small-12 top-story">
            {tab === 0 && (
              <div class="primary-intro">
                <h2>Legal</h2>
                <p>
                  Legal services tailored to your needs. We have a team of
                  experts in tax litigation and corporate law.
                </p>
              </div>
            )}
            {tab === 1 && (
              <div class="primary-intro">
                <h2>Legal and Contentious Tax Matters</h2>
                <p>
                  Synergy between lawyers and accountants, which defines our
                  firm, allows our Legal and Tax Advisory division to provide
                  grounded support on legal and tax matters, maximizing the
                  analyses of the most efficient alternatives to minimize
                  expenses and risks. This research may end up being key to
                  design defense strategies or others to reduce contingencies.
                </p>
                <p>
                  In line with these objectives, our Legal and Tax Advisory
                  division offers clients a wide range of services, such as:
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Defense of taxpayers before the imposition of penalties
                    (fines, business suspensions, registry exclusions, etc.) by
                    tax authorities
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Carrying out proceedings before national, provincial and
                    municipal revenue agencies
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Carrying out proceedings before the Argentine National Tax
                    Court and the Tax Court of Appeals from the Province of
                    Buenos Aires
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Carrying out proceedings before federal and provincial law
                    courts in all instances
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Submitting claims and proceedings for the recovery of
                    overly-paid taxes
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Carrying out proceedings before the Argentine General
                    Customs Office and judicial courts on customs matters
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Advice on regimes for the promotion of certain industries by
                    the award of tax benefits and related matters
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Support on currency exchange matters
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Support on proceedings related to criminal-tax and
                    criminal-currency exchange matters
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Design of strategies involving special procedural actions,
                    such as seeking declaratory judgements, injunctions, legal
                    protection proceedings for payment in arrears (amparo) and
                    other protection proceedings
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Defense against claims for the enforcement of taxes
                  </li>
                </ul>
              </div>
            )}
            {tab === 2 && (
              <div class="primary-intro">
                <h2>International Trade and Custom Law </h2>
                <h5>Customs Law:</h5>
                <p>
                  We provide advice to local and international companies in its
                  relationship with the Argentine Customs Service analyzing the
                  in-force regulations and possible contingencies.
                </p>
                <p>
                  We represent firms in customs procedures in any custom of the
                  country, before the Tax Court (Tribunal Fiscal de la Nación),
                  the Federal Court and the Supreme Court.
                </p>
                <h5>Trade Agreements:</h5>
                <p>
                  We work on the interpretation and implementation of trade
                  agreements and arrangements, and we also advice on the impact
                  on business of the relevant multilateral agreements: World
                  Trade Organization (WTO), Mercosur Treaty, bilateral treaties
                  in ALADI, etc.
                </p>
                <h5>Strategic Advice:</h5>
                <p>
                  We work on strategic planning of the company’s foreign trade
                  operations and internal audit review of their foreign trade
                  documents and procedures.
                </p>
                <h5>Our services include:</h5>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Anti-dumping proceedings
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Customs procedures, classification and customs value
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Rules of Origin and Tariff Preferences
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Quantitative quotas and restrictions
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Import licenses and import licensing procedures
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Temporary import and export regime
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Customs and disciplinary infractions
                  </li>
                  <li style={{ listStyleType: "disc" }}>Export refunds</li>
                </ul>
              </div>
            )}
            {tab === 3 && (
              <div class="primary-intro">
                <h2>Tech</h2>
                <p>
                  Legal Tech assessment. We understand your needs together with
                  a team of legal and technology experts, we diagnose and
                  propose integrated solutions. We are you partner in your
                  digital transformation.
                </p>
              </div>
            )}
            {tab === 4 && (
              <div class="primary-intro">
                <h2>Corporate Solutions</h2>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Company agreements, shareholders agreements
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Drafting and negotiation of corporate agreemets, joint
                    ventures and business and industry associations
                  </li>
                </ul>
                <h5>MERGER & AQUISITIONS</h5>
                <li style={{ listStyleType: "disc" }}>
                  Legal assistance with corporate documentation
                </li>
                <li style={{ listStyleType: "disc" }}>
                  Tax efficiency in the M&A process and risk analysis
                </li>
                <li style={{ listStyleType: "disc" }}>
                  Contract drafting and negotiation
                </li>
                <li style={{ listStyleType: "disc" }}>
                  Legal and tax due diligence
                </li>
              </div>
            )}
            {tab === 5 && (
              <div class="primary-intro">
                <h2>Labor Law</h2>
                <p>
                  Our labor practice covers a wide range of matters, as a
                  general labor and social security matters, planning and
                  strategy to restructuring, collective bargaining and
                  negotiations with unions and the government. Our team has a
                  great and extensive experience:
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Labor-related litigation and dispute resolution
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Advising on labor and employment matters that are part of
                    all sort of due diligence efforts
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Advising clients in collective conflicts, dealing with
                    unions in case of force measures
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Advising on restructuring and reengineering of labor forces
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Representing employers in all claims and procedures before
                    the Labor Ministry
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Advising on situations concerning particular employees and
                    on general compliance with increasingly complex domestic and
                    foreign employment laws
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Advising companies on how to avoid labor claims
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Assisting clients in their matters before government
                    entities, trade and labor unions
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Assisting employers before Chambers of the business
                  </li>
                </ul>
              </div>
            )}
            {tab === 6 && (
              <div class="primary-intro">
                <h2>Legal Consultancy and Legal Compliance</h2>
                <p>
                  We offer advice on legal consulting and implementation of
                  compliance programs in order to identify risks, mitigate them,
                  and take care of your reputation and business. We particularly
                  provide assistance in:
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Legal and tax advice, and business planning on matters
                    related to regulations and/or international, national,
                    provincial or municipal transactions.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Specialized assistance in legal consulting.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Implementation of compliance programs.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Review of implemented compliance programs.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Drafting and review of codes of conducts and ethics.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Design of risk management programs.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Due Diligence regarding compliance and internal
                    investigations. Risk and contingency analysis.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Implementation of complaint lines.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Developing in-house training programs for companies.
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Advice on the responsibility of directors, managers,
                    administrators, compliance officers and criminal compliance
                    on organizations.
                  </li>
                </ul>
              </div>
            )}
            {tab === 7 && (
              <div class="primary-intro">
                <h2>Litigation and Other Processes</h2>
                <p>
                  We have a team of professional that offers support and
                  representation before all judicial instances of both, local
                  and federal justice. Our services include:
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    Assistance at extrajudicial negotiations and mediations
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Administrative and Tax Litigation
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Civil, Commercial and Intellectual property litigation
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    Labor law litigation  Insolvency and Restructuring
                    processes
                  </li>
                  <li style={{ listStyleType: "disc" }}>Arbitration</li>
                </ul>
              </div>
            )}
            {tab === 8 && (
              <div class="primary-intro">
                <h2>Industrial and Intellectual Property Rights</h2>
                <ul>
                  <li style={{ listStyleType: "disc" }}>Legal assistance</li>
                  <li style={{ listStyleType: "disc" }}>
                    Organization and filing of application and prosecution of
                    Trademarks, Patents and Utility Models and Industrial
                    Designs procedures
                  </li>
                  <li style={{ listStyleType: "disc" }}>Background searches</li>
                  <li style={{ listStyleType: "disc" }}>
                    Filing of oppositions
                  </li>
                  <li style={{ listStyleType: "disc" }}>Copyright</li>
                  <li style={{ listStyleType: "disc" }}>
                    Personal Data Protection
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
      <div class="door"></div>
    </div>
  );
}
