import React, { useEffect } from "react";

import pg1 from "../../assets/placeholders/global-reach.png";
import pg2 from "../../assets/placeholders/client-service.png";
import pg3 from "../../assets/placeholders/shared-values.png";
import pg4 from "../../assets/placeholders/one-firm.png";

export default function GlobalPresenceEnglish() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div class="hero global">
        <div class="row small-uncollapse medium-uncollapse large-collapse">
          <div class="column small-12 inner">
            <div class="top">
              <div class="breadcrumbs ">
                <span class="crumb home">
                  <a href="/home-english">Home</a>
                </span>
                <span class="crumb interior">
                  <a href="#">Global Presence</a>
                </span>
              </div>

              <ul class="social-links social-hero">
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

            <div class="text">
              <h1>Global Presence</h1>
              <p>
                Andersen Global was established in 2013 as the international
                entity surrounding the development of a seamless professional
                services model providing best in class tax and legal services
                around the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="page-intro">
        <div class="row">
          <div class="column small-12">
            <h2 class="globalp">
              Andersen is the Argentine member of Andersen Global®, an
              international association of member firms comprised of tax and
              legal professionals worldwide.
            </h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column small-12">
          <ul class="services-list row">
            <div class="row">
              <li class="column small-12 medium-6">
                <div class="image">
                  <a href="javascript:;">
                    <img src={pg1} alt="" />
                  </a>
                </div>
                <div class="text">
                  <h3 class="title">Global Reach</h3>
                  <p>
                    Andersen Global® is an association of legally separate,
                    independent member firms, comprised of more than 5,000
                    professionals worldwide, over 700 global partners, and a
                    presence in over 172 locations worldwide. Our growth is a
                    byproduct of the outstanding client service delivered by our
                    people, the best professionals in the industry. Our
                    objective isn’t to be the biggest firm, it is to provide
                    best-in-class client services in seamless fashion across the
                    globe.
                  </p>
                </div>
              </li>
              <li class="column small-12 medium-6">
                <div class="image">
                  <a href="javascript:;">
                    <img src={pg2} alt="" />
                  </a>
                </div>
                <div class="text">
                  <h3 class="title">Client Service</h3>
                  <p>
                    Our professionals share a common background and vision and
                    are selected based on quality, like-mindedness, and
                    commitment to client service. Outstanding client service has
                    and will continue to be our top priority.
                  </p>
                </div>
              </li>
            </div>
            <div class="row">
              <li class="column small-12 medium-6">
                <div class="image">
                  <a href="javascript:;">
                    <img src={pg3} alt="" />
                  </a>
                </div>
                <div class="text">
                  <h3 class="title">Share values</h3>
                  <p>
                    Each and every one of the professionals and member firms
                    that are a part of Andersen Global share our core values
                    ensuring the delivery of best-in-class service in a seamless
                    and consistent manner worldwide.
                  </p>
                </div>
              </li>
              <li class="column small-12 medium-6">
                <div class="image">
                  <a href="javascript:;">
                    <img src={pg4} alt="" />
                  </a>
                </div>
                <div class="text">
                  <h3 class="title">One firm</h3>
                  <p>
                    We are building Andersen Global to create an enduring place
                    – ONE FIRM where clients across the globe are afforded the
                    best, most comprehensive tax services provided by skilled
                    staff with the highest standards.
                  </p>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div class="door"></div>
    </div>
  );
}
