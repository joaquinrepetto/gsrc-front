import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sobre from "../assets/partners/sobre.png";
import sinCara from "../assets/partners/sin-foto.gif";

// Imagenes Socios
import socio1 from "../assets/partners/ceci.jpg";
import socio2 from "../assets/partners/AndresSaladino.jpg";
import socio3 from "../assets/partners/felixRolando.jpg";
import socio4 from "../assets/partners/GabrielaClerc.jpg";
import socio5 from "../assets/partners/SusanaCarlassara.jpg";

const socios = [
  {
    id: 1,
    type: "socio",
    image: socio1,
    name: "Cecilia Goldemberg",
    mail: "cecilia.goldemberg@ar.Andersen.com",
    desc1:
      "Cecilia Goldenberg has experience in national and international tax planning, with special focus on the definition and follow-up of tax litigation strategies. She specializes in transfer pricing and international taxation.",
    desc2:
      "As an active member of the Argentine Association of Fiscal Studies (or AAEF), she sits on the Executive Board and coordinates the Transfer Pricing Commission, and Member of the International Fiscal Association (IFA). She also forms part of the Tax Studies Commission of the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the Tax Affairs Commission of the Chamber of Joint Stock Companies and the Argentine Industrial Union.",
    desc3:
      "Cecilia was a regular assistant professor at the University of Buenos Aires and has been a visiting professor for the tax postgraduate programs.She has lectured in seminars and conferences on tax related topics both in Argentina and abroad.In 1996, she was National Reporter for the IFA Conference, as well as a panel member in 1999, secretary of the organizing committee for the conference in 2005 and Transfer Pricing Panel Coordinator in the Latin American Regional 2nd Tax Meeting in 2010.",
    desc4:
      "She has published various articles in specialized journals and was editor of the Manual de Precios de Transferencia en Argentina (Handbook of Transfer Pricing in Argentina).",
    desc5: "",
    desc6: "",
  },
  {
    id: 2,
    type: "socio",
    image: socio2,
    name: "Andrés Carlos Saladino",
    mail: "andres.saladino@ar.Andersen.com",
    desc1:
      "Andres Saldino was previously an advisor for the Ministry of Economy of the Nation Cabinet. He has vast experience in national and international tax planning, with special focus in companies dedicated to social media. He has published a variety of articles specialized in public tax.",
    desc2:
      "He was expositor in the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the province of Buenos Aires. Andres gives lectures on postgraduate courses on taxation at the University Austral of Business Science. He teaches Teoria y Tecnica Impositiva II at the Economic Science University of Buenos Aires (UBA), is an active member of the Graduate School at the Science Economics in Capital Federal and co-presenter of the television program Actualidad Impositiva.",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 3,
    type: "socio",
    image: socio3,
    name: "Félix José Rolando",
    mail: "felix.rolando@ar.Andersen.com",
    desc1:
      "Felix Rolando was previously an advisor for the Ministry of Economy of the Nation Cabinet. He is an active member of the advisor committee of taxation at the A.F.I.P in representation of the Graduate School at the Science Economics in CABA. He is also a member of the Taxation Studies Commission at the same entity.",
    desc2:
      "He has vast experience in national and international tax planning, with special focus on their impact on different business enterprises as well as development tax planning.",
    desc3:
      "He was the editor of various articles on taxation issues, and co-author of books, including Sociedades de Hecho y Empresas Unipersonales published by La Ley in 2012 and Introducción al Regimen Tributario Argentino published by Errepar in 2010.",
    desc4:
      "He was an expositor for the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the Country of Buenos Aires, and currently is an expositor for the Graduate School at the Science Economics of Capital Federal.",
    desc5:
      "He lectures on post graduate courses on taxation issues at the Economic Science University of Buenos Aires and UADE.",
    desc6: "",
  },
  {
    id: 4,
    type: "socio",
    image: socio4,
    name: "Gabriela Clerc",
    mail: "gabriela.clerc@ar.Andersen.com",
    desc1:
      "Gabriela Clerc is has experience in tax and retirement counseling, and analysis and revision of federal, provincial and municipal taxes. She has conducted tax and retirement audits, and tax planning. She gained her expertise at an international specialized firm where she served as Tax Manager. Her academic experience includes a tenured position as assistant professor for the Taxes: Theory and Techniques course; she also taught internal training courses for the technical staff.",
    desc2:
      "Gabriela has co-authored the book Procedimiento Tributario I (Tax Procedure I) with exercises and material review, and she also assisted in the revision of Tomo III, Impuestos Comentados (Volume III, Taxes: A Comment) published by Errepar - both written by Dr. Carlos Ernesto Celdeiro. Gabriela is a member of the Argentine Association of Fiscal Studies (Asociación Argentina de Estudios Fiscales).",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 25,
    type: "socio",
    image: socio5,
    name: "Carmen Susana Vaccaro",
    mail: "susana.vaccaro@ar.Andersen.com",
    desc1:
      "Carmen Vaccaro actively participates in corporate transformation and due diligence processes, and she is an expert in Anti-Money Laundering and Counter Terrorism Financing Regulations issued by the Argentine UIF (Financial Information Unit). She is specialized in accounting and payroll reports and communications to the BCRA (Central Bank of the Argentine Republic).   ",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 9,
    type: "socio",
    image: sinCara,
    name: "Juan Astibia",
    mail: "juan.astibia@ar.Andersen.com",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },

  {
    id: 6,
    type: "socio",
    image: sinCara,
    name: "Juan Manuel de Cabo",
    mail: "juan.decabo@ar.Andersen.com",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 7,
    type: "socio",
    image: sinCara,
    name: "Luis Maria Flores Gimenez",
    mail: "juan.fischer@uy.Andersen.com",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 11,
    type: "socio",
    image: sinCara,
    name: "Bartolome Homar Mas",
    mail: "juan.fischer@ar.Andersen.com",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 5,
    type: "socio",
    image: sinCara,
    name: "Martin Jandula",
    mail: "juan.fischer@uy.Andersen.com",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 12,
    type: "socio",
    image: sinCara,
    name: "Diego Kelln",
    mail: "juan.fischer@ar.Andersen.com",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 13,
    type: "manager",
    image: sinCara,
    name: "Pablo Lo Vento",
    mail: "pablo.lovento@ar.Andersen.com",
    desc1:
      "Pablo Lo Vento has experience in tax counseling, and in federal, provincial and municipal tax analysis and revision. He is an adhering member of the Argentine Association of Fiscal Studies (Asociación Argentina de Estudios Fiscales – AAEF) and has taught internal and external training courses on tax issues.",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 26,
    type: "manager",
    image: sinCara,
    name: "Edith Mazzer",
    mail: "edith.mazzer@ar.Andersen.com",
    desc1:
      "Edith Mazzer has experience in outsourcing for companies of different sizes. She has also specialized in the preparation of local and international reports, and auditing financial statements prepared pursuant to Argentine accounting principles, U.S. GAAP and International Accounting Standards (IASs). She has experience in mergers and demergers, due diligence processes, integral audits, internal controls and processes analysis. She has given in-company training courses.",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 19,
    type: "manager",
    image: sinCara,
    name: "Victor del Valle",
    mail: "victor.delvalle@ar.Andersen.com",
    desc1:
      "Victor Adrian Del Valle has experience in the design and implementation of Human Resources policies and procedures and also in the analysis of wage and salary structures. He has vast knowledge of the work and labor laws in force and of applicable quality standards. Victor has directed payroll processes, benefit and compensation policies and personnel administration at international and Argentine companies and also SMEs and renowned firms. He has successfully implemented IT systems for Human Resources management and administration. He has given in-company training courses for employees on wage and salaries, taxes and legal issues, among others. ",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 18,
    type: "manager",
    image: sinCara,
    name: "Zulema Gouveia",
    mail: "zulema.gouveia@ar.Andersen.com",
    desc1:
      "Zulema has large experience in corporate aspects, with specific focus in the constitution of companies, modifications of financial statement, norms made by control. ",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 27,
    type: "manager",
    image: sinCara,
    name: "Amanda Julca",
    mail: "amanda.julca@ar.Andersen.com",
    desc1:
      "Amanda is a Public Accountant and previously worked at Deloitte Peru and Deloitte Argentina for 10 years as a tax specialist. She also participated in the V.I.T.A program for the IRS. She has experience in tax due diligence, merger and acquisitions and tax counseling.",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    image: sinCara,
    name: "Julieta Firpo",
    mail: "julieta.firpo@ar.Andersen.com",
    desc1:
      "Julieta Firpo has vast experience in the preparation and filing of reports and counseling documents on Transfer Pricing, tax planning, supervisory issues, sector economic and macroeconomic reports, cost analysis, industry analysis, intra-group transaction structuring, profitability analysis per production line, interest rate determination and market profitability.",
    desc2:
      "In the academic field, she has held a position at the University of Buenos Aires as Assistant Professor.",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },

  {
    id: 28,
    type: "manager",
    image: sinCara,
    name: "Sofía Paulucci",
    mail: "sofia.paulucci@ar.Andersen.com",
    desc1:
      "A Sofía Paulucci is a tax consultant and has high expertise in federal, provincial and municipal tax analysis and review.",
    desc2:
      "Her academic experience encompasses the position of Assistant Professor in the Tax Regime course offered by the University of Buenos Aires. She also conducts training programs for fellow employees in the firm where she currently works.",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 14,
    type: "manager",
    image: sinCara,
    name: "Romina Caceres Villagra",
    mail: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 15,
    type: "manager",
    image: sinCara,
    name: "Fernanda Cons",
    mail: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 16,
    type: "manager",
    image: sinCara,
    name: "Juan Fuster",
    mail: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 17,
    type: "manager",
    image: sinCara,
    name: "Francisco Peris",
    mail: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },

  {
    id: 20,
    type: "manager",
    image: sinCara,
    name: "Pedro Negri Aranguren",
    mail: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 21,
    type: "manager",
    image: sinCara,
    name: "Valentina Kripper",
    mail: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
];

export default function Proffessionals() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

                {socios
                  .filter((socio) => socio.type === "socio")
                  .map((socio) => (
                    <tr>
                      <td class="img-perfil">
                        <img
                          src={socio.image}
                          style={{ height: "100%" }}
                          alt=""
                        />
                      </td>
                      <td class="nombre" style={{ paddingLeft: "15px" }}>
                        <Link
                          to={{
                            pathname: "/perfil",
                            state: socio,
                          }}
                        >
                          <a>{socio.name}</a>
                        </Link>
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

                {socios
                  .filter((socio) => socio.type === "manager")
                  .map((socio) => (
                    <tr>
                      <td class="img-perfil">
                        <img
                          src={socio.image}
                          style={{ height: "100%" }}
                          alt=""
                        />
                      </td>
                      <td class="nombre" style={{ paddingLeft: "15px" }}>
                        <Link
                          to={{
                            pathname: "/perfil",
                            state: socio,
                          }}
                        >
                          <a>{socio.name}</a>
                        </Link>
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
