import React, { useEffect } from "react";

export default function ContactEnglish() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {" "}
      <div class="hero work">
        <div class="row small-uncollapse medium-uncollapse large-collapse">
          <div class="column small-12 inner">
            <div class="top">
              <div class="breadcrumbs ">
                <span class="crumb home">
                  <a href="/home-english">Home</a>
                </span>
                <span class="crumb interior">
                  <a href="#">Contact Us</a>
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
              <h1>Contac Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ paddingBottom: "100px" }}>
        <div className="column small-12 medium-6">
          <form>
            <label>
              Name
              <input type="text" name="name" />
            </label>

            <form>
              <label>
                E-mail (REQUIRED)
                <input type="text" name="name" />
              </label>
            </form>
            <form>
              <label>
                Subject
                <input type="text" name="name" />
              </label>
            </form>
            <form>
              <label>
                Message (REQUIRED)
                <input style={{ height: "12rem" }} type="text" name="name" />
              </label>
              <input
                style={{
                  background: "#AC0E20",
                  color: "white",
                  padding: "10px 15px",
                  border: "none",
                }}
                type="submit"
                value="Send"
              />
            </form>
          </form>
        </div>
        <div className="column small-12 medium-6">
          <div className="sidebar full" style={{ padding: "30px" }}>
            <div className="row">
              <div className="column medium-12">
                <h6 style={{ color: "#AC0E20", fontWeight: "600" }}>
                  BUENOS AIRES OFFICE
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="column medium-6">
                <p style={{ margin: "0px" }}>Talcahuano 833 - 10th floor</p>
                <p style={{ margin: "0px" }}>
                  C1013AAQ - Buenos Aires City - Argentina
                </p>
                <p style={{ margin: "0px" }}>Ph: +54 11 4390 9700</p>
              </div>
              <div className="column medium-6">
                <div className="row">
                  <div className="column">
                    {" "}
                    <span
                      class="icon fa fa-linkedin-square"
                      aria-hidden="true"
                      style={{ fontSize: "30px", paddingRight: "20px" }}
                    ></span>{" "}
                    <span
                      class="icon fa fa-twitter-square"
                      aria-hidden="true"
                      style={{ fontSize: "30px" }}
                    ></span>
                  </div>
                </div>
                <div>
                  <p style={{ margin: "0px" }}>www.ar.Andersen.com</p>
                  <p>
                    <a
                      onClick={() =>
                        (window.location.href = `mailto:info@ar.Andersen.com`)
                      }
                    >
                      info@ar.Andersen.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", paddingTop: "10px" }}>
              <iframe
                width="100%"
                height="300"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Talcahuano%20833,%20Caba+(Andersen%20Argentina)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://www.mapsdirections.info/marcar-radio-circulo-mapa/">
                Marcar radio en el mapa
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="door"></div>
    </div>
  );
}
