import React, { useState, useEffect } from "react";

import axios from "axios";
import moment from "moment";

export default function New({ match }) {
  const [publication, setPublication] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    loadPublication();
  }, []);

  const loadPublication = async () => {
    const { id } = match.params;

    try {
      let url = `http://localhost:5000/api/publications?publicationId=${id}`;

      const response = await axios.get(url);
      setPublication(response.data);
    } catch (error) {}
  };

  return (
    <div>
      <div class="hero work">
        <div class="row small-uncollapse medium-uncollapse large-collapse">
          <div class="column small-12 inner">
            <div class="top">
              <div class="breadcrumbs ">
                <span class="crumb home">
                  <a href="/">Inicio</a>
                </span>
                <span class="crumb interior">
                  <a href="#">Noticias</a>
                </span>
              </div>

              <ul class="social-links social-hero">
                <p class="share-label">Compartir:</p>
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

              <div class="text">
                <h1>Noticias</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ paddingBottom: "50px" }}>
        <div className="column medium-8">
          <div className="row">
            <p>
              {publication.created
                ? moment(publication.created)
                    .locale("es")
                    .format("DD MMMM, YYYY")
                : null}{" "}
              |{" "}
              {publication.type && publication.type === "taxMemos"
                ? "Tax Memos"
                : publication.type === "taxNews"
                ? "Tax News"
                : publication.type === "Novedades"}
            </p>
            <h2 style={{ color: "#AC0E20" }}>{publication.title}</h2>
          </div>

          <div className="row">
            <hr style={{ border: "1px solid #c0c2c3" }} />
          </div>
        </div>
        <div className="column medium-4">
          <div
            className="sidebar full"
            style={{
              padding: "30px",
              paddingBottom: "500px",
              marginLeft: "15px",
            }}
          >
            <p
              style={{
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              <strong>Entradas recientes</strong>
            </p>
            <div></div>
          </div>
        </div>
      </div>
      <div className="door"></div>
    </div>
  );
}
