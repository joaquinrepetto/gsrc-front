import React, { useState } from "react";

export default function OurFirm() {
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
                      <a href="/">Inicio</a>
                    </span>
                    <span className="crumb interior">
                      <a href="#">Nuestra firma</a>
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
                  <h1>Nuestra firma</h1>
                  <p>
                    Somos una firma miembro de Andersen Global presentando
                    servicios de: Consultoría en Tributación, Precios de
                    Transferencia, Outsorcing, Payroll, Sociedades, Consultoría
                    Legal y Consultoría en Sistemas.
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
                  ¿Qué nos distingue?
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
                  Compromiso
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
                  Misión
                </button>
              </div>
              <div className="tab">
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
              </div>
            </div>
            <div className="column large-6 medium-6 small-6">
              {activeText === "qnd" && (
                <div className="tabcontent" style={{ display: "block" }}>
                  <h3 style={{ color: "#AD0D21" }}>¿Qué nos distingue?</h3>
                  <p>
                    • El conocimiento profundo de las materias que son motivo de
                    asesoramiento y del ambiente de negocios local e
                    internacional en el que actúa el cliente.
                  </p>
                  <p>
                    • Una modalidad de trabajo que incluye análisis en detalle a
                    costos razonables.
                  </p>
                  <p>
                    • Atención personalizada eficiente y oportuna. En lugar de
                    una estructura impersonal y estandarizada, ofrecemos un
                    servicio organizado y controlado por los socios, enfocado a
                    atender las necesidades específicas con un criterio de
                    optimización de resultados.
                  </p>
                  <p>
                    • Para brindar servicios profesionales de alta calidad hemos
                    adoptado la cultura de la excelencia: sentir placer por
                    hacer nuestro trabajo del mejor modo y actuar siempre
                    anticipándonos a las necesidades y a los problemas de la
                    empresa.
                  </p>
                  <p>
                    • Un equipo profesional calificado, conformado por
                    Contadores Públicos, Abogados y Economistas, que desarrollan
                    sus tareas bajo la premisa de capacitación permanente.
                    Nuestros más de 100 expertos profesionales están
                    comprometidos en la incesante búsqueda de alternativas y el
                    análisis inteligente, con el objetivo de volcar sus
                    conclusiones en la práctica diaria.
                  </p>
                </div>
              )}
              {console.log(activeText)}
              {activeText === "compr" && (
                <div className="tabcontent" style={{ display: "block" }}>
                  <h3 style={{ color: "#AD0D21" }}>Compromiso</h3>
                  <p>
                    Merecen enumerarse los siguientes elementos distintivos y
                    cualidades que sustentan nuestra amplia trayectoria:
                  </p>
                  <p>
                    • La provisión de soluciones prácticas en tiempo oportuno,
                  </p>
                  <p>
                    • La resolución de cualquier consulta que el cliente
                    solicite de forma ágil,
                  </p>
                  <p>
                    • Una relación cordial para así lograr una comunicación
                    efectiva
                  </p>
                  <p>• Ética profesional</p>
                  <p>
                    • Fluida relación para el óptimo desenvolvimiento de los
                    objetivos.
                  </p>
                </div>
              )}

              {activeText === "misi" && (
                <div className="tabcontent" style={{ display: "block" }}>
                  <h3 style={{ color: "#AD0D21" }}>Misión</h3>
                  <p>
                    Brindar soluciones de máxima calidad profesional, efectivas
                    y confiables.
                  </p>
                  <p>
                    Lograr nuestra misión con integridad y respeto a la
                    individualidad de nuestros profesionales.
                  </p>
                </div>
              )}

              {activeText === "vcentr" && (
                <div className="tabcontent" style={{ display: "block" }}>
                  <h3 style={{ color: "#AD0D21" }}>Valores centrales</h3>
                  <p>
                    • Estamos convencidos que la clave para crear una firma
                    profesional verdaderamente confiable está en los valores que
                    guían a la gente que conforma nuestro equipo de trabajo.
                    Estos son nuestros valores clave:
                  </p>
                  <p>
                    • Somos leales a nuestros compromisos. Brindamos más
                    servicio del que nos comprometemos.
                  </p>
                  <p>
                    • Siempre brindamos respuestas sin demoras. Sentimos la
                    necesidad de atender con urgencia cualquier cuestión
                    relacionada con nuestros clientes.
                  </p>
                  <p>
                    • Requerimos completa honestidad e integridad en todo lo que
                    hacemos.
                  </p>
                  <p>
                    • Creemos que el trabajo es una parte importante de nuestra
                    vida y que debe realizarse con alegría.
                  </p>
                  <p>
                    • Nos gusta competir y creemos que ello genera lo mejor de
                    nosotros.
                  </p>
                  <p>• Insistimos en brindar siempre nuestro mejor esfuerzo.</p>
                  <p>
                    • No toleramos que se incurra en errores por desidia o falta
                    de esfuerzo suficiente.
                  </p>
                  <p>
                    • Respetamos la individualidad y creemos que las personas a
                    las que se las trata con respeto y se les asigna
                    responsabilidad, responden con su mejor parte.
                  </p>
                  <p>
                    • Creemos que un claro entendimiento de nuestra misión,
                    nuestros valores centrales y lo que esperamos de cada uno de
                    nosotros es central para nuestro éxito.
                  </p>
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
