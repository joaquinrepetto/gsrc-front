import React, { useEffect } from "react";

export default function WorkWithUsEnglish() {
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
                  <a href="#">Work with us</a>
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
              <h1>Work with us</h1>
              <p>Be part of our organization.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ paddingBottom: "50px" }}>
        <div className="column medium-2">
          <h1></h1>
        </div>
        <div className="column small-12 medium-9">
          <h4>Work in Andersen</h4>
          <h6 style={{ fontSize: "1.3rem" }}>Be part of our organization</h6>
          <br />
          <p>
            At Andersen, we have assembled a unique group of professionals who
            share a common vision to be "The Best of the Best".
          </p>
          <p>
            <span style={{ fontWeight: "900", color: "#636363" }}>
              Our people and our experience make us different.
            </span>
            <br />
            Our people are our main strength. Our people and their experience
            are what make us different. We invest in them and are committed to
            their progress in the organization.
          </p>
          <p>
            We hire smart, passionate and motivated people. We are looking for
            dedicated and creative professionals who provide experiences that
            generate the best results for our clients.
          </p>
          <p>
            Send us your CV to:{" "}
            <span style={{ color: "#AD0D21" }}>
              <a
                onClick={() =>
                  (window.location.href = `mailto:info@ar.Andersen.com`)
                }
                style={{ color: "#AD0D21" }}
              >
                info@ar.Andersen.com
              </a>
            </span>
          </p>
        </div>
        <div className="column medium-3"></div>
        {/* <div className="column small-12 medium-6">
          <form>
            <label>
              Nombre
              <input type="text" name="name" />
            </label>

            <form>
              <label>
                Email
                <input type="text" name="name" />
              </label>
            </form>
            <label>
              Adjuntar CV
              <input type="file" />
            </label>

            <form>
              <label>
                Mensaje
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
                value="Enviar"
              />
            </form>
          </form>
        </div> */}
      </div>
      <div class="door"></div>
    </div>
  );
}
