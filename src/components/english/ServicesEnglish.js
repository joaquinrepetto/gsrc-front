import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import legal1 from "../../assets/placeholders/legal1.jpg";
import legal2 from "../../assets/placeholders/legal2.jpg";
import legal3 from "../../assets/placeholders/colleagues.png";
import legal4 from "../../assets/placeholders/family-bubbles.jpg";
import legal5 from "../../assets/img/legal.jpg";

export default function ServicesEnglish() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="hero services">
        <div className="row small-uncollapse medium-uncollapse large-collapse">
          <div className="column small-12 inner">
            <div className="top">
              <div className="breadcrumbs ">
                <span className="crumb home">
                  <a href="/">Home</a>
                </span>
                <span className="crumb interior">
                  <a href="#">Services</a>
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
              <h1>Taxation and Accounting, Legal, BPO and Corporations</h1>
              <p>
                Tax, Outsourcing, Corporations and Organizational Consulting.
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
                  <img src={legal5} style={{ borderRadius: "50%" }} alt="" />
                </a>
              </div>
              <div className="text">
                <h3 className="title">Legal Services</h3>
                <p>
                  Our firm has experience in complex international and local
                  transactions, we have expert professionals in M&A, in
                  financing operations and in regulatory matters.
                </p>

                <p>
                  <Link to="/legalservices">
                    <a className="learn-more button cta hollow-dark">
                      More information
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
                <h3 className="title">Tax and Accounting Services</h3>
                <p>
                  We have professionals specialized in tax matters, who provide
                  permanent advice on commercial matters, guaranteeing efficient
                  tax solutions in all areas.
                </p>

                <p>
                  <Link to="/contable-services">
                    <a
                      href="servicesLearnMore.html"
                      className="learn-more button cta hollow-dark"
                    >
                      More information
                      <span className="fa fa-arrow-right"></span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <div className="row">
              <li className="column small-12 medium-4"></li>
              <li className="column small-12 medium-6">
                <div className="image">
                  <a href="javascript:;">
                    <img src={legal3} alt="" />
                  </a>
                </div>
                <div className="text">
                  <h3 className="title">Business Process Outsourcing (BPO)</h3>
                  <p>
                    We put talented and well-trained professionals at the
                    service of your company, offering process improvements,
                    creativity and problem solving.
                  </p>

                  <p>
                    <Link to="/bpo-english">
                      <a className="learn-more button cta hollow-dark">
                        More information
                        <span className="fa fa-arrow-right"></span>
                      </a>
                    </Link>
                  </p>
                </div>
              </li>
              <li className="column small-12 medium-4"></li>
            </div>
            {/* <li className="column small-12 medium-6">
              <div className="image">
                <a href="javascript:;">
                  <img src={legal1} style={{ borderRadius: "50%" }} alt="" />
                </a>
              </div>
              <div className="text">
                <h3 className="title">Corporate Solutions</h3>
                <p>
                  We have experts in company incorporation, amendment of
                  statutes and we offer advice on M&A, divisions and dissolution
                  of companies.
                </p>

                <p>
                  <Link to="/corporations">
                    <a className="learn-more button cta hollow-dark">
                      More information
                      <span className="fa fa-arrow-right"></span>
                    </a>
                  </Link>
                </p>
              </div>
            </li> */}
          </ul>
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
    </>
  );
}
