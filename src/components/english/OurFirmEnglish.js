import React, { useState, useEffect } from "react";

export default function OurFirmEnglish() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeText, setActiveText] = useState("qnd");

  return (
    <div>
      <div className="main-content">
        <div className="inner landing">
          <div className="hero">
            <div className="row small-uncollapse medium-uncollapse large-collapse">
              <div className="column small-12 inner">
                <div className="top">
                  <div className="breadcrumbs ">
                    <span className="crumb home">
                      <a href="/">Home</a>
                    </span>
                    <span className="crumb interior">
                      <a href="#">The Firm</a>
                    </span>
                  </div>

                  <ul className="social-links social-hero">
                    <p className="share-label">Share:</p>
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
                  <h1>The Firm</h1>
                  <p>
                    We are a member firm of Andersen Global providing Financial
                    Consulting, Transfer Pricing, Accounting and Tax
                    Outsourcing, Corporations and Legal Consulting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column large-12 medium-12 small-12 top-story">
            <div className="column large-6 medium-6 small-6">
              <div className="tab">
                <button
                  className="tablinks"
                  style={{
                    backgroundColor: activeText === "qnd" ? "#ac0e20" : null,
                    color: activeText === "qnd" ? "white" : null,
                    fontWeight: activeText === "qnd" ? "900" : null,
                  }}
                  onClick={() => setActiveText("qnd")}
                >
                  What makes us different
                </button>
              </div>
              <div className="tab">
                <button
                  className="tablinks"
                  style={{
                    backgroundColor: activeText === "compr" ? "#ac0e20" : null,
                    color: activeText === "compr" ? "white" : null,
                    fontWeight: activeText === "compr" ? "900" : null,
                  }}
                  onClick={() => setActiveText("compr")}
                >
                  Commitment
                </button>
              </div>
              <div className="tab">
                <button
                  className="tablinks"
                  style={{
                    backgroundColor: activeText === "misi" ? "#ac0e20" : null,
                    color: activeText === "misi" ? "white" : null,
                    fontWeight: activeText === "misi" ? "900" : null,
                  }}
                  onClick={() => setActiveText("misi")}
                >
                  Our mission
                </button>
              </div>
              {/* <div className="tab">
                <button
                  className="tablinks"
                  style={{
                    backgroundColor: activeText === "vcentr" ? "#ac0e20" : null,
                    color: activeText === "vcentr" ? "white" : null,
                    fontWeight: activeText === "vcentr" ? "900" : null,
                  }}
                  onClick={() => setActiveText("vcentr")}
                >
                  Valores centrales
                </button>
              </div> */}
            </div>
            <div className="column large-6 medium-6 small-6">
              {activeText === "qnd" && (
                <div className="tabcontent" style={{ display: "block" }}>
                  <h3 style={{ color: "#AD0D21" }}>What makes us different</h3>
                  <ul>
                    <li style={{ listStyleType: "disc" }}>
                      The vast knowledge on matters on which we provide our
                      advice, and the local and international business
                      environment where our clients develop.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      A working methodology which includes carrying out detailed
                      analyses at affordable costs.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Efficient and timely personalized assistance. Instead of
                      providing an impersonal and standardized structure, we
                      offer an organized service controlled by our partners,
                      focused on complying with specific needs applying a
                      criterion of optimization of results.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      In order to offer high-quality professional services, we
                      have adopted a culture driven by the pursuit of
                      excellence: enjoying our work as best as we can and acting
                      always anticipating the needs and problems our clients may
                      have.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      A professional qualified team of Public Accountants,
                      Lawyers and Economists who develop their work and are
                      constantly being trained. Our team of more than 100
                      professional experts is committed to continuously
                      searching alternatives and making intelligent analyses to
                      use their conclusions in their daily practice.
                    </li>
                  </ul>
                </div>
              )}
              {activeText === "compr" && (
                <div className="tabcontent" style={{ display: "block" }}>
                  <h3 style={{ color: "#AD0D21" }}>Commitment</h3>
                  <p>
                    The following distinctive elements and qualities that
                    support our broad experience need to be listed:
                  </p>
                  <ul>
                    <li style={{ listStyleType: "disc" }}>
                      Timely providing practical solutions
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Quickly solving any request made by clients
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Maintaining a kind relation to enable effective
                      communication
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Professional ethics
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Keeping a fluent relation to develop objectives in the
                      best way
                    </li>
                  </ul>
                </div>
              )}

              {activeText === "misi" && (
                <div className="tabcontent" style={{ display: "block" }}>
                  <h3 style={{ color: "#AD0D21" }}>Our Mission</h3>
                  <p>
                    Providing effective and reliable solutions of the highest
                    professional quality.
                  </p>
                  <p>
                    Achieving our mission with integrity and respecting the
                    individuality of our professional staff.
                  </p>
                </div>
              )}

              {activeText === "vcentr" && (
                <div className="tabcontent" style={{ display: "block" }}>
                  <h3 style={{ color: "#AD0D21" }}>Valores centrales</h3>
                  <p>
                    Estamos convencidos que la clave para crear una firma
                    profesional verdaderamente confiable está en los valores que
                    guían a la gente que conforma nuestro equipo de trabajo.
                    Estos son nuestros valores clave:
                  </p>
                  <ul>
                    {" "}
                    <li style={{ listStyleType: "disc" }}>
                      Somos leales a nuestros compromisos. Brindamos más
                      servicio del que nos comprometemos.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Siempre brindamos respuestas sin demoras. Sentimos la
                      necesidad de atender con urgencia cualquier cuestión
                      relacionada con nuestros clientes.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Requerimos completa honestidad e integridad en todo lo que
                      hacemos.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Creemos que el trabajo es una parte importante de nuestra
                      vida y que debe realizarse con alegría.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Nos gusta competir y creemos que ello genera lo mejor de
                      nosotros.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Insistimos en brindar siempre nuestro mejor esfuerzo.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      No toleramos que se incurra en errores por desidia o falta
                      de esfuerzo suficiente.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Respetamos la individualidad y creemos que las personas a
                      las que se las trata con respeto y se les asigna
                      responsabilidad, responden con su mejor parte.
                    </li>
                    <li style={{ listStyleType: "disc" }}>
                      Creemos que un claro entendimiento de nuestra misión,
                      nuestros valores centrales y lo que esperamos de cada uno
                      de nosotros es central para nuestro éxito.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="door"></div>
    </div>
  );
}
