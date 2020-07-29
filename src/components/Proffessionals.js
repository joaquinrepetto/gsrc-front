import React from "react";
import sobre from "../assets/partners/sobre.png";
import sinCara from "../assets/partners/sin-foto.gif";

// Imagenes Socios
import socio1 from "../assets/partners/ceci.jpg";
import socio2 from "../assets/partners/AndresSaladino.jpg";
import socio3 from "../assets/partners/felixRolando.jpg";
import socio4 from "../assets/partners/GabrielaClerc.jpg";

const socios = [
  {
    image: socio1,
    name: "Cecilia Goldemberg",
    mail: "juan.fischer@uy.Andersen.com",
  },
  {
    image: socio2,
    name: "Andrés Carlos Saladino",
    mail: "juan.fischer@uy.Andersen.com",
  },
  {
    image: socio3,
    name: "Félix José Rolando",
    mail: "juan.fischer@uy.Andersen.com",
  },
  {
    image: socio4,
    name: "Gabriela Clerc",
    mail: "juan.fischer@uy.Andersen.com",
  },
  {
    image: sinCara,
    name: "Martin Jandula",
    mail: "juan.fischer@uy.Andersen.com",
  },
  {
    image: sinCara,
    name: "Juan Manuel de Cabo",
    mail: "juan.decabo@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Luis Maria Flores Gimenez",
    mail: "juan.fischer@uy.Andersen.com",
  },
  {
    image: sinCara,
    name: "Alejandro Tkachuk",
    mail: "juan.fischer@uy.Andersen.com",
  },
  {
    image: sinCara,
    name: "Juan Astibia",
    mail: "juan.astibia@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Alejandro Tkachuk",
    mail: "juan.fischer@uy.Andersen.com",
  },
  {
    image: sinCara,
    name: "Bartolome Homar Mas",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Diego Kelln",
    mail: "juan.fischer@ar.Andersen.com",
  },
];

const managers = [
  {
    image: sinCara,
    name: " Pablo Lo Vento",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "María José Ermocida",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Martín Depaola",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Mariana Vallejo",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Mariano Federico del Amo",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Julieta Firpo",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Zulema Gouveia",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Victor del Valle",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Fernanda Cons",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Juan Fuster",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Francisco Peris",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Pedro Negri Aranguren",
    mail: "juan.fischer@ar.Andersen.com",
  },
  {
    image: sinCara,
    name: "Valentina Kripper",
    mail: "valentina.kripper@ar.Andersen.com",
  },
];

export default function Proffessionals() {
  return (
    <>
      <div class="hero prof">
        <div class="row small-uncollapse medium-uncollapse large-collapse">
          <div class="column small-12 inner">
            <div class="top">
              <div class="breadcrumbs ">
                <span class="crumb home">
                  <a href="/">Inicio</a>
                </span>
                <span class="crumb interior">
                  <a href="#">Profesionales</a>
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
              <h1>Profesionales</h1>
              <p>Socios y Asociados</p>
            </div>
          </div>
        </div>
      </div>

      <div class="headline-scroller orbit" data-orbit>
        <div class="row large-collapse">
          <div class="column">
            <h2>Socios</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column small-12">
          <div class="listado_partners">
            <table border="0" cellpadding="0">
              <tbody>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Practice</th>
                  <th>E-mail</th>
                  <th></th>
                </tr>

                {socios.map((socio) => (
                  <tr>
                    <td class="img-perfil">
                      <img
                        src={socio.image}
                        style={{ height: "100%" }}
                        alt=""
                      />
                    </td>
                    <td class="nombre" style={{ paddingLeft: "15px" }}>
                      <a href="profesionalesPerfil.html">{socio.name}</a>
                    </td>
                    <td class="areas">
                      Socio
                      <br />
                    </td>
                    <td class="correo">
                      <a href="mailto:juan.fischer@uy.Andersen.com">
                        <img src={sobre} alt="juan.fischer@uy.Andersen.com" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div
        class="headline-scroller orbit"
        data-orbit
        style={{ paddingTop: "50px" }}
      >
        <div class="row large-collapse">
          <div class="column">
            <h2>Practice Leader</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column small-12">
          <div class="listado_partners">
            <table border="0" cellpadding="0">
              <tbody>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Practice</th>
                  <th>E-mail</th>
                  <th></th>
                </tr>

                <tr>
                  <td class="img-perfil">
                    <img
                      src="assets/img/sin-foto.gif"
                      style={{ height: "100%" }}
                      alt=""
                    />
                  </td>
                  <td class="nombre" style={{ paddingLeft: "15px" }}>
                    <a href="cv_juan_federico_fischer.php">Juan Astibia</a>
                  </td>
                  <td class="areas">
                    Socio
                    <br />
                  </td>
                  <td class="correo">
                    <a href="mailto:juan.fischer@uy.Andersen.com">
                      <img
                        src="assets/img/partners/sobre.png"
                        alt="juan.fischer@uy.Andersen.com"
                      />
                    </a>
                  </td>
                </tr>

                <tr>
                  <td class="img-perfil">
                    <img
                      src="assets/img/sin-foto.gif"
                      style={{ height: "100%" }}
                      alt=""
                    />
                  </td>
                  <td class="nombre" style={{ paddingLeft: "15px" }}>
                    <a href="cv_juan_federico_fischer.php">Rodrigo Amaya</a>
                  </td>
                  <td class="areas">
                    Socio
                    <br />
                  </td>
                  <td class="correo">
                    <a href="mailto:juan.fischer@uy.Andersen.com">
                      <img
                        src="assets/img/partners/sobre.png"
                        alt="juan.fischer@uy.Andersen.com"
                      />
                    </a>
                  </td>
                </tr>

                <tr>
                  <td class="img-perfil">
                    <img
                      src="assets/img/sin-foto.gif"
                      style={{ height: "100%" }}
                      alt=""
                    />
                  </td>
                  <td class="nombre" style={{ paddingLeft: "15px" }}>
                    <a href="cv_juan_federico_fischer.php">Diego Kelln</a>
                  </td>
                  <td class="areas">
                    Socio
                    <br />
                  </td>
                  <td class="correo">
                    <a href="mailto:juan.fischer@uy.Andersen.com">
                      <img
                        src="assets/img/partners/sobre.png"
                        alt="juan.fischer@uy.Andersen.com"
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}

      <div
        class="headline-scroller orbit"
        data-orbit
        style={{ paddingTop: "50px" }}
      >
        <div class="row large-collapse">
          <div class="column">
            <h2>Manager</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column small-12">
          <div class="listado_partners">
            <table border="0" cellpadding="0">
              <tbody>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Practice</th>
                  <th>E-mail</th>
                  <th></th>
                </tr>

                {managers.map((manager) => (
                  <tr>
                    <td class="img-perfil">
                      <img
                        src={manager.image}
                        style={{ height: "100%" }}
                        alt=""
                      />
                    </td>
                    <td class="nombre" style={{ paddingLeft: "15px" }}>
                      <a href="profesionalesPerfil.html">{manager.name}</a>
                    </td>
                    <td class="areas">
                      Manager
                      <br />
                    </td>
                    <td class="correo">
                      <a href="mailto:juan.fischer@uy.Andersen.com">
                        <img src={sobre} alt="juan.fischer@uy.Andersen.com" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="door"></div>
    </>
  );
}
