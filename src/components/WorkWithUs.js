import React from "react";

export default function WorkWithUs() {
  return (
    <div>
      {" "}
      <div class="hero work">
        <div class="row small-uncollapse medium-uncollapse large-collapse">
          <div class="column small-12 inner">
            <div class="top">
              <div class="breadcrumbs ">
                <span class="crumb home">
                  <a href="/">Inicio</a>
                </span>
                <span class="crumb interior">
                  <a href="#">Trabaja en Andersen</a>
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
              <h1>Trabaja en Andersen</h1>
              <p>Forma parte de una organización líder.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column small-12 medium-6">
          <h4>Trabaja en Andersen</h4>
          <h6 style={{ fontSize: "1.3rem" }}>
            Forma parte de una organización líder
          </h6>
          <br />
          <p>
            {" "}
            En Andersen, hemos reunido un grupo único de profesionales que
            comparten una visión común para ser "Lo mejor de lo mejor".
          </p>
          <p>
            <span style={{ fontWeight: "900", color: "#636363" }}>
              {" "}
              Nuestra gente y nuestra experiencia nos distingue.
            </span>{" "}
            <br />
            Nuestra gente es nuestra principal fortaleza. Nuestra gente y su
            experiencia es lo que nos distingue. Invertimos en ellos y nos
            compremetemos en su savance en la organización.
          </p>
          <p>
            {" "}
            Contratamos personas inteligentes, apasionadas y motivadas. Buscamos
            profesionales dedicados y creativos, que aporten experiencias que
            generen los meores resultados para nuestros clientes.
          </p>
          <p>
            {" "}
            Puedes completar el siguietne formulario o enviarnos tu C.V a:
            <span style={{ color: "#AD0D21" }}> info@ar.andersen.com</span>
          </p>
        </div>
        <div className="column small-12 medium-6">
          <h1>Ver contact form </h1>
        </div>
      </div>
    </div>
  );
}
