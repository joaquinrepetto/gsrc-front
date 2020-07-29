import React, { useState, useEffect } from "react";

import moment from "moment";

import new1 from "../assets/news/new1.jpg";
import new2 from "../assets/news/new2.jpg";
import new3 from "../assets/news/new3.jpg";
import new4 from "../assets/news/new4.jpg";

const hardcodedNews = [
  {
    id: 1,
    title:
      "COVID-19 Guía de beneficios Tributarios a nivel mundial: País por País",
    description:
      "Vea y/o descargue la guía de alivio fisico global, que ofrece una visión general de la respuesta a COVID-19 por cada país Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no magna definiebas, inani rationibus in quo. Ut vidisse dolores est, ut quis nominavi mel. Ad pri quod apeirian concludaturque, id timeam iudicabit rationibus pri. Erant putant luptatum ex sit, error euismod ad qui, meliore voluptatum complectitur an vix. Clita persius sed et, vix vidit consulatu complectitur ex. Per nonummy postulant assentior an, mea audiam fabellas deserunt id.[...]",
    image: new1,
    categories: ["Audit News", "Impuestos Nacionales"],
    created: Date.now(),
  },
  {
    id: 2,
    title: "Doing Business en Argentina",
    description:
      "Argentina está situada en el extremo sur del continente americnao, siendo el octavo país más grande del mundo y el segundo de América Latina en términos Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no magna definiebas, inani rationibus in quo. Ut vidisse dolores est, ut quis nominavi mel. Ad pri quod apeirian concludaturque, id timeam iudicabit rationibus pri. Erant putant luptatum ex sit, error euismod ad qui, meliore voluptatum complectitur an vix. Clita persius sed et, vix vidit consulatu complectitur ex. Per nonummy postulant assentior an, mea audiam fabellas deserunt id.[...]",
    image: new2,
    categories: ["Audit News"],
    created: Date.now(),
  },
  {
    id: 3,
    title:
      "Residencia fiscal en Uruguay - Pérdida de la residencia fiscal en Argentina",
    description:
      "En los últimos tiempos se ha incrementado el interés por parte de personas humanas residentes en Argentina para cambiar su residencia fiscal a Uruguay Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no magna definiebas, inani rationibus in quo. Ut vidisse dolores est, ut quis nominavi mel. Ad pri quod apeirian concludaturque, id timeam iudicabit rationibus pri. Erant putant luptatum ex sit, error euismod ad qui, meliore voluptatum complectitur an vix. Clita persius sed et, vix vidit consulatu complectitur ex. Per nonummy postulant assentior an, mea audiam fabellas deserunt id. [...]",
    image: new3,
    categories: ["Audit News", "Impuestos Nacionales"],
    created: Date.now(),
  },
  {
    id: 4,
    title: "Crisis económica pandemia COVID-19 en Precios de Transferencia",
    description:
      "Les acercamos nuestras reflexiones para asistirlos en las adecuaciones de Precios de Transferencia que pueden requerir ante la crisis del COVID-19.  Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no magna definiebas, inani rationibus in quo. Ut vidisse dolores est, ut quis nominavi mel. Ad pri quod apeirian concludaturque, id timeam iudicabit rationibus pri. Erant putant luptatum ex sit, error euismod ad qui, meliore voluptatum complectitur an vix. Clita persius sed et, vix vidit consulatu complectitur ex. Per nonummy postulant assentior an, mea audiam fabellas deserunt id. [...]",
    image: new4,
    categories: ["Audit News", "Impuestos Nacionales"],
    created: Date.now(),
  },
];

export default function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = () => {
    setNews(hardcodedNews);
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
            </div>
            <div class="text">
              <h1>Noticias</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column medium-8">
          <div className="row">
            <div class="row">
              <div className="column medium-4">
                <img src={news[0] ? news[0].image : null} width="100%" />
              </div>
              <div className="column medium-4">
                {" "}
                <img src={news[1] ? news[1].image : null} width="100%" />
              </div>
              <div className="column medium-4">
                {" "}
                <img src={news[2] ? news[2].image : null} width="100%" />
              </div>
            </div>

            <div className="row" style={{ paddingTop: "10px" }}>
              <div className="column medium-4">
                <h4>{news[1] ? news[1].title : null} </h4>
              </div>
              <div className="column medium-4">
                {" "}
                <h4>{news[1] ? news[1].title : null} </h4>
              </div>
              <div className="column medium-4">
                {" "}
                <h4>{news[1] ? news[1].title : null} </h4>
              </div>
            </div>

            <div className="row" style={{ paddingTop: "10px" }}>
              <div className="column medium-4">
                <p>{news[1] ? news[1].description.slice(0, 150) : null} </p>
              </div>
              <div className="column medium-4">
                {" "}
                <p>{news[1] ? news[1].description.slice(0, 150) : null} </p>
              </div>
              <div className="column medium-4">
                {" "}
                <p>{news[1] ? news[1].description.slice(0, 150) : null} </p>
              </div>
            </div>

            <div className="row" style={{ paddingTop: "10px" }}>
              <div className="column medium-4">
                <p>
                  <a
                    href="servicesLearnMore.html"
                    className="button cta hollow-dark"
                  >
                    Ver más{" "}
                  </a>
                </p>
              </div>
              <div className="column medium-4">
                {" "}
                <p>
                  <a
                    href="servicesLearnMore.html"
                    className="button cta hollow-dark"
                  >
                    Ver más{" "}
                  </a>
                </p>
              </div>
              <div className="column medium-4">
                {" "}
                <p>
                  <a
                    href="servicesLearnMore.html"
                    className="button cta hollow-dark"
                  >
                    Ver más{" "}
                  </a>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="column" style={{ paddingLeft: "30px" }}>
                {news &&
                  news.map((n) => (
                    <div
                      className="row"
                      style={{
                        borderTop: "1px solid #d6d6d6",
                      }}
                    >
                      <p style={{ paddingTop: "20px" }}>
                        {moment(n.created).format("DD/MM/YY")} |{" "}
                        <a style={{ color: "gray" }}>
                          Categorias: {n.categories.map((c) => c).join(", ")}
                        </a>
                      </p>
                      <h4>{n.title}</h4>
                      <p>{n.description.slice(0, 500)}</p>
                      <p
                        style={{ textAlign: "right", cursor: "pointer" }}
                        onClick={() => alert("asd")}
                      >
                        Ver más >
                      </p>
                    </div>
                  ))}
              </div>
            </div>
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
            <div>
              {news &&
                news.map((n) => (
                  <div
                    style={{
                      borderBottom: "1px solid #d6d6d6",
                    }}
                  >
                    <p style={{ paddingTop: "3px" }}>{"> " + n.title}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div class="door"></div>
    </div>
  );
}
