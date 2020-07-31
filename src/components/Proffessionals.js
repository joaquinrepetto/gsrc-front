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
    practice:
      "Precios de Transferencia, Impuestos Internacionales y Wealth Managment Office",
    mail: "cecilia.goldemberg@ar.Andersen.com",
    // desc1:
    //   "Cecilia Goldenberg has experience in national and international tax planning, with special focus on the definition and follow-up of tax litigation strategies. She specializes in transfer pricing and international taxation.",
    // desc2:
    //   "As an active member of the Argentine Association of Fiscal Studies (or AAEF), she sits on the Executive Board and coordinates the Transfer Pricing Commission, and Member of the International Fiscal Association (IFA). She also forms part of the Tax Studies Commission of the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the Tax Affairs Commission of the Chamber of Joint Stock Companies and the Argentine Industrial Union.",
    // desc3:
    //   "Cecilia was a regular assistant professor at the University of Buenos Aires and has been a visiting professor for the tax postgraduate programs.She has lectured in seminars and conferences on tax related topics both in Argentina and abroad.In 1996, she was National Reporter for the IFA Conference, as well as a panel member in 1999, secretary of the organizing committee for the conference in 2005 and Transfer Pricing Panel Coordinator in the Latin American Regional 2nd Tax Meeting in 2010.",
    // desc4:
    //   "She has published various articles in specialized journals and was editor of the Manual de Precios de Transferencia en Argentina (Handbook of Transfer Pricing in Argentina).",
    // desc5: "",
    desc1: "Áreas principales de desempeño:",
    desc2: `Precios de Transferencia | Estructuraciones fiscales internacionales | Auditorías fiscales y controversias fiscales | Asesoría tributaria`,
    desc3: "Experiencia en proyectos (experto)",
    desc4:
      "Implementación de Precios de Transferencia y resolución de disputas | Diseño y dirección de estructuras fiscales internacionales | Gestión de cuestiones fiscales locales e internacionales | Centramiento en definición y seguimiento de las estrategias de litigio fiscal.",
    desc5: "",
    desc6: "",
    education: "Contadora Pública y Licenciada en Administración",
  },
  {
    id: 2,
    type: "socio",
    image: socio2,
    practice: "Impuestos y Contabilidad",
    name: "Andrés Carlos Saladino",
    mail: "andres.saladino@ar.Andersen.com",
    // desc1:
    //   "Andres Saldino was previously an advisor for the Ministry of Economy of the Nation Cabinet. He has vast experience in national and international tax planning, with special focus in companies dedicated to social media. He has published a variety of articles specialized in public tax.",
    // desc2:
    //   "He was expositor in the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the province of Buenos Aires. Andres gives lectures on postgraduate courses on taxation at the University Austral of Business Science. He teaches Teoria y Tecnica Impositiva II at the Economic Science University of Buenos Aires (UBA), is an active member of the Graduate School at the Science Economics in Capital Federal and co-presenter of the television program Actualidad Impositiva.",
    desc1:
      "Es Contador Público egresado de la Universidad de Buenos Aires y ex presidente del Colegio de Graduados en Ciencias Económicas de CABA.",
    desc2:
      "Ha sido asesor de gabinete del Ministerio de Economía de la Nación.",
    desc3:
      "Se destaca su experiencia profesional y académica sobre la problemática tributaria internacional y nacional, sobre todo en empresas relacionados con los medios de comunicación.",
    desc4: "Ha escrito numerosos artículos sobre temas tributarios públicas.",
    desc5:
      "Es profesor adjunto en la materia Teoría y Técnica Impositiva II de la Facultad de Ciencias Económicas de la Universidad de Buenos Aires (UBA) y profesor adjunto en las materias Impuestos II y III de la Facultad de Ciencias Empresariales de la Universidad Austral.",
    desc6:
      "Ha sido expositor en el Consejo Profesional de Ciencias Económicas de CABA, provincia de Buenos Aires y en Consejos Profesionales del interior del país; dicta cursos de posgrado en materia tributaria en la Facultad de Ciencias Económicas de la UBA. Es miembro de la Comisión de Estudios Impositivos del Colegio de Graduados en Ciencias Económicas de la Capital Federal; es co-conductor del programa de televisión “Actualidad Impositiva”",
    education: "Contador Público",
  },
  {
    id: 3,
    type: "socio",
    image: socio3,

    practice: "Impuestos y Contabilidad",
    name: "Félix José Rolando",
    mail: "felix.rolando@ar.Andersen.com",
    // desc1:
    //   "Felix Rolando was previously an advisor for the Ministry of Economy of the Nation Cabinet. He is an active member of the advisor committee of taxation at the A.F.I.P in representation of the Graduate School at the Science Economics in CABA. He is also a member of the Taxation Studies Commission at the same entity.",
    // desc2:
    //   "He has vast experience in national and international tax planning, with special focus on their impact on different business enterprises as well as development tax planning.",
    // desc3:
    //   "He was the editor of various articles on taxation issues, and co-author of books, including Sociedades de Hecho y Empresas Unipersonales published by La Ley in 2012 and Introducción al Regimen Tributario Argentino published by Errepar in 2010.",
    // desc4:
    //   "He was an expositor for the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the Country of Buenos Aires, and currently is an expositor for the Graduate School at the Science Economics of Capital Federal.",
    // desc5:
    //   "He lectures on post graduate courses on taxation issues at the Economic Science University of Buenos Aires and UADE.",
    // desc6: "",
    desc1: "Es Contador Público egresado de la Universidad de Buenos Aires.",
    desc2: `Ha sido asesor de gabinete del Ministerio de Economía de la Nación; miembro del
Consejo Consultivo en el área tributaria de la A.F.I.P. en representación del Colegio de
Graduados en Ciencias Económicas de CABA, y miembro de la Comisión de Estudios
Impositivos de la misma entidad. Se destaca su experiencia profesional y académica sobre
la problemática tributaria internacional y nacional, su impacto en los distintos negocios
empresariales y el desarrollo de planificaciones fiscales. Ha escrito numerosos artículos
sobre temas tributarios públicos, es coautor de los siguientes libros: Sociedades de Hecho
y Empresas Unipersonales publicado por Editorial La Ley en el año 2012; Introducción al
Régimen Tributario Argentino publicado por Editorial Errepar en el año 2010, con
posteriores reediciones. Ha sido expositor en el Consejo Profesional de Ciencias
Económicas de la Ciudad de Buenos Aires, en los Consejos Profesionales del interior del
país y actualmente, en el Colegio de Graduados en Ciencias Económicas de la Capital
Federal y en la Asociación Argentina de Estudios Fiscales. Dicta cursos de posgrado en
materia tributaria en la Facultad de Ciencias Económicas de la UBA y UADE.`,
    // desc3:
    //   "He was the editor of various articles on taxation issues, and co-author of books, including Sociedades de Hecho y Empresas Unipersonales published by La Ley in 2012 and Introducción al Regimen Tributario Argentino published by Errepar in 2010.",
    // desc4:
    //   "He was an expositor for the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the Country of Buenos Aires, and currently is an expositor for the Graduate School at the Science Economics of Capital Federal.",
    // desc5:
    //   "He lectures on post graduate courses on taxation issues at the Economic Science University of Buenos Aires and UADE.",
    desc6: "",
    education: "Contador Público",
  },
  {
    id: 4,
    type: "socio",
    image: socio4,

    practice: "Impuestos y Contabilidad",
    name: "Gabriela Clerc",
    mail: "gabriela.clerc@ar.Andersen.com",
    // desc1:
    //   "Gabriela Clerc is has experience in tax and retirement counseling, and analysis and revision of federal, provincial and municipal taxes. She has conducted tax and retirement audits, and tax planning. She gained her expertise at an international specialized firm where she served as Tax Manager. Her academic experience includes a tenured position as assistant professor for the Taxes: Theory and Techniques course; she also taught internal training courses for the technical staff.",
    // desc2:
    //   "Gabriela has co-authored the book Procedimiento Tributario I (Tax Procedure I) with exercises and material review, and she also assisted in the revision of Tomo III, Impuestos Comentados (Volume III, Taxes: A Comment) published by Errepar - both written by Dr. Carlos Ernesto Celdeiro. Gabriela is a member of the Argentine Association of Fiscal Studies (Asociación Argentina de Estudios Fiscales).",
    // desc3: "",
    desc1: "Es Contadora Pública egresada de la U.B.A.",
    desc2: `Posee una amplia experiencia en asesoramiento en materia impositiva y
previsional, análisis y revisión de impuestos nacionales, provinciales y municipales,
participación en auditorías impositivas y previsionales y tax planning adquirida en una
especializada Firma internacional, donde se desempeñó como Gerente de Impuestos. En
el ámbito docente se desempeñó como ayudante de la materia “Teoría y Técnica
Impositiva II” designada por concurso. También dictó cursos internos de capacitación
estando a cargo de la capacitación del Staff Técnico. Ha prestado colaboración en la
preparación de ejercitaciones y revisiones del libro, “Procedimiento Tributario I” y en la
revisión del Tomo III, Impuestos Comentados de Errepar, ambos del Dr. Carlos Ernesto
Celdeiro. Es miembro de la Asociación Argentina de Estudios Fiscales.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: "Contadora Público",
  },
  {
    id: 25,
    type: "manager",
    image: socio5,
    practice: "Outsorcing contable y de nóminas",
    name: "Carmen Susana Vaccaro",
    mail: "susana.vaccaro@ar.Andersen.com",
    // desc1:
    //   "Carmen Vaccaro actively participates in corporate transformation and due diligence processes, and she is an expert in Anti-Money Laundering and Counter Terrorism Financing Regulations issued by the Argentine UIF (Financial Information Unit). She is specialized in accounting and payroll reports and communications to the BCRA (Central Bank of the Argentine Republic).   ",
    desc1: `Es Contadora Pública egresada de la Universidad de Buenos Aires.`,
    desc2: `Cursó el Posgrado en “Nuevas Normas Contables Nacionales e Internacionales”
U.B.A. - Facultad de Ciencias Económicas. Tiene sólida experiencia en Auditoría, armado y
análisis de Estados Contables confeccionados según Normas Nacionales e Internacionales
de Contabilidad. Participa en procesos de Transformaciones societarias, Due Dilligences,
Normas UIF sobre Lavado de Activos y Financiación del Terrorismo. Realiza Certificaciones
e Informes contables, Pericias de parte y Comunicaciones del BCRA.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: "Contadora Público",
  },
  {
    id: 9,
    type: "socio",
    image: sinCara,
    practice: "Legal",
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
    practice: "Legal",
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
    practice: "Legal",
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
    practice: "Legal",
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
    practice: "Legal",
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
    practice: "Impuestos",
    name: "Diego Kelln",
    mail: "juan.fischer@ar.Andersen.com",
    desc1: `Cuenta con más de 19 años de experiencia en asesoramiento fiscal, brindando
servicios tanto a compañía locales como internacionales de diferentes industrias tales
como agronegocios, seguros, retail, servicios y software.`,
    desc2: `La trayectoria de Diego incluye el asesoramiento en la estructuración jurídica de
empresas y clientes individuales con el objetivo reducir el costo tributario de sus
operaciones, así como también la planificación fiscal de operaciones de fusiones y
adquisiciones locales e internacionales de sociedades, restructuraciones de pasivos, etc.`,
    desc3: `Previo a unirse a Andersen, entre los años 2011 y 2013 Diego trabajó como
representante argentino del International Core of Excellence de Deloitte LLP en New York.
En el año 2012 asistió al US Tax Planning and Reporting Program dictado por la NYU.`,
    desc4: `Se ha desempeñado como miembro del Consejo Asesor Tributario de la Fundación
para el desarrollo de la Minería Argentina (FUNDAMIN) y docente auxiliar de Impuestos
Nacionales en la Universidad de Buenos Aires. Actualmente es miembro de la Comisión de
Impuestos Nacionales e Internacionales de la Asociación Argentina de Estudios Fiscales y
de la Comisión de Impuestos Internacionales y Precios de Transferencia del Consejo
Profesional de Ciencias Económicas de la Ciudad Autónoma de Buenos Aires`,
    desc5: "",
    desc6: "",
  },
  {
    id: 13,
    type: "manager",
    image: sinCara,
    practice: "",
    name: "Pablo Lo Vento",
    mail: "pablo.lovento@ar.Andersen.com",
    // desc1:
    //   "Pablo Lo Vento has experience in tax counseling, and in federal, provincial and municipal tax analysis and revision. He is an adhering member of the Argentine Association of Fiscal Studies (Asociación Argentina de Estudios Fiscales – AAEF) and has taught internal and external training courses on tax issues.",
    desc1: `Es Contador Público, graduado en la U.B.A. con mención especial “Magna Cum-Laude”.
Posee amplia experiencia en el asesoramiento en materia impositiva, análisis y revisión de
impuestos nacionales, provinciales y municipales. Es miembro adherente de la Asociación
Argentina de Estudios Fiscales (AAEF). Ha participado en el dictado de cursos internos y
externos de capacitación en el área impositiva.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: "Contador Público",
  },
  {
    id: 26,
    type: "manager",
    image: sinCara,
    practice: "",
    name: "Edith Mazzer",
    mail: "edith.mazzer@ar.Andersen.com",
    // desc1:
    //   "Edith Mazzer has experience in outsourcing for companies of different sizes. She has also specialized in the preparation of local and international reports, and auditing financial statements prepared pursuant to Argentine accounting principles, U.S. GAAP and International Accounting Standards (IASs). She has experience in mergers and demergers, due diligence processes, integral audits, internal controls and processes analysis. She has given in-company training courses.",
    desc1: `Es Contadora Pública egresada de Universidad Nacional de Quilmes.Posee amplia experiencia en
Outsourcing en empresas de distinta envergadura, Confección de reportes nacionales e
internacionales, Auditoría de Estados Contables confeccionados bajo normas contables
argentinas, US GAAP y normas IAS, fusiones y escisiones, Due Diligence, Auditoría Integral, de
Controles Internos y análisis de procesos. Ha participado en el dictado de cursos internos de
capacitación.`,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: "Contadora Público",
  },
  {
    id: 19,
    type: "manager",
    image: sinCara,
    practice: "Outsourcing de Nóminas",
    name: "Victor del Valle",
    mail: "victor.delvalle@ar.Andersen.com",
    // desc1:
    //   "Victor Adrian Del Valle has experience in the design and implementation of Human Resources policies and procedures and also in the analysis of wage and salary structures. He has vast knowledge of the work and labor laws in force and of applicable quality standards. Victor has directed payroll processes, benefit and compensation policies and personnel administration at international and Argentine companies and also SMEs and renowned firms. He has successfully implemented IT systems for Human Resources management and administration. He has given in-company training courses for employees on wage and salaries, taxes and legal issues, among others. ",
    desc1:
      "Es Licenciado en Administración graduado de la Universidad de la Matanza.",
    desc2: `Se destaca por su experiencia en el diseño e implementación de políticas y procedimientos de
RRHH así como también en el análisis de las estructuras salariales. Posee amplio conocimiento de
la legislación laboral vigente y de las normas de calidad. Ha liderado los procesos de Payroll,
políticas de beneficios y compensaciones y administración de personal de empresas
multinacionales, nacionales y pymes así como también en Estudios de primer nivel. Ha realizado
implementaciones exitosas de sistemas informáticos para la gestión y administración de RRHH.
Desarrolló capacitaciones internas para los colaboradores en temáticas de sueldos, impositivas,
legislación, etc. Fue responsable de la atención de los requerimientos a terceros (AFIP, Obras
Sociales, Auditorias, Peritajes).`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: "Licenciado en Administración",
  },
  {
    id: 18,
    type: "manager",
    image: sinCara,
    practice: "Sociedades",
    name: "Zulema Gouveia",
    mail: "zulema.gouveia@ar.Andersen.com",
    // desc1:
    //   "Zulema has large experience in corporate aspects, with specific focus in the constitution of companies, modifications of financial statement, norms made by control. ",
    // desc2: "",
    desc1: "Es Contadora Pública egresada de la Universidad de La Plata",
    desc2: `Posee una amplia experiencia sobre aspectos societarios, en especial los relacionados con la
constitución de sociedades, modificación de estatutos sociales, fusiones y escisiones, y normas
emanadas de los organismos de control.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: "Contadora Público",
  },
  {
    id: 27,
    type: "manager",
    image: sinCara,
    practice: "Asignaciones Internacionales, Impuestos",
    name: "Amanda Julca",
    mail: "amanda.julca@ar.Andersen.com",
    // desc1:
    //   "Amanda is a Public Accountant and previously worked at Deloitte Peru and Deloitte Argentina for 10 years as a tax specialist. She also participated in the V.I.T.A program for the IRS. She has experience in tax due diligence, merger and acquisitions and tax counseling.",
    desc1: `Es contadora pública y ha trabajado en Deloitte Perú y Deloitte Argentina durante 10 años
como especialista en impuestos. También participó del programa V.I.T.A para IRS. Tiene
experiencia en tax due diligence, M&amp;A y asesoramiento fiscal.`,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: "Contadora Público",
  },
  {
    image: sinCara,
    practice: "Precios de Transferencia y Valuaciones de Empresas",
    name: "Julieta Firpo",
    mail: "julieta.firpo@ar.Andersen.com",
    // desc1:
    //   "Julieta Firpo has vast experience in the preparation and filing of reports and counseling documents on Transfer Pricing, tax planning, supervisory issues, sector economic and macroeconomic reports, cost analysis, industry analysis, intra-group transaction structuring, profitability analysis per production line, interest rate determination and market profitability.",
    // desc2:
    //   "In the academic field, she has held a position at the University of Buenos Aires as Assistant Professor.",
    desc1: `Es Magíster en Finanzas egresada de la Universidad del CEMA y Licenciada en
Economía egresada de la Universidad de Buenos Aires (UBA).`,
    desc2: `Posee una amplia experiencia en elaboración y presentación de informes y reportes de asesoría en materia
de Precios de Transferencia, planning impositivo, fiscalizaciones, informes económicos sectoriales y
macroeconómicos, análisis de costos, análisis por industrias, estructuración de transacciones intragrupo,
análisis de rentabilidades por líneas de producción, determinación de tasas de interés y rentabilidades de
mercado.`,
    desc3: "Fue Auxiliar Docente en la Universidad de Buenos Aires",
    desc4: "",
    desc5: "",
    desc6: "",
  },

  {
    id: 28,
    type: "manager",
    image: sinCara,
    practice: "Impuestos",
    name: "Sofía Paulucci",
    mail: "sofia.paulucci@ar.Andersen.com",
    // desc1:
    //   "A Sofía Paulucci is a tax consultant and has high expertise in federal, provincial and municipal tax analysis and review.",
    // desc2:
    //   "Her academic experience encompasses the position of Assistant Professor in the Tax Regime course offered by the University of Buenos Aires. She also conducts training programs for fellow employees in the firm where she currently works.",
    desc1:
      "A Sofía Paulucci is a tax consultant and has high expertise in federal, provincial and municipal tax analysis and review.",
    desc2: `Sofía Paulucci es consultora fiscal y tiene gran experiencia en análisis y revisión de impuestos
federales, provinciales y municipales.`,
    desc3: `Sofía Paulucci es consultora fiscal y tiene gran experiencia en análisis y revisión de impuestos
federales, provinciales y municipales.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: "Contadora Público",
  },
  {
    id: 14,
    type: "manager",
    image: sinCara,
    practice: "Legal",
    name: "Romina Caceres Villagra",
    mail: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  // {
  //   id: 15,
  //   type: "manager",
  //   image: sinCara,
  //   practice: "",
  //   name: "Fernanda Cons",
  //   mail: "",
  //   desc1: "",
  //   desc2: "",
  //   desc3: "",
  //   desc4: "",
  //   desc5: "",
  //   desc6: "",
  // },
  // {
  //   id: 16,
  //   type: "manager",
  //   image: sinCara,
  //   practice: "",
  //   name: "Juan Fuster",
  //   mail: "",
  //   desc1: "",
  //   desc2: "",
  //   desc3: "",
  //   desc4: "",
  //   desc5: "",
  //   desc6: "",
  // },
  {
    id: 17,
    type: "manager",
    image: sinCara,
    practice: "Legal",
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
    practice: "Aduana",
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
    practice: "Aduana",
    name: "Valentina Kripper",
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
    type: "socio",
    image: sinCara,
    practice: "Impuestos",
    name: "Mariano Federico del Amo",
    mail: "",
    desc1: `Es Contador Público, graduado en la Universidad de Buenos Aires (UBA) y ha
realizado un postgrado de Especialización en Impuestos en la Universidad
de Belgrano.`,
    desc2: `Posee amplio conocimiento para el asesoramiento impositivo tanto
nacional como provincial. Se destaca por su amplia experiencia en la
confección de declaraciones juradas mensuales y anuales; confección de
recuperos de IVA por Exportación, determinación coeficientes CM y DDJJ CM
05, atención de inspecciones, entre otros.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 21,
    type: "manager",
    image: sinCara,
    practice: "Impuestos",
    name: "Mariana Vallejo",
    mail: "",
    desc1:
      "Es Contadora Publica graduada en la Universidad Nacional de La Plata (U.N.L.P.).",
    desc2: `Posee amplia experiencia en asesoramiento en materia tributaria, análisis y revisión
de impuestos nacionales, y provinciales.`,
    desc3: `Ha participado en el dictado de cursos internos de capacitación en el área impositiva.`,
    desc4: "",
    desc5: "",
    desc6: "",
  },
  {
    id: 21,
    type: "manager",
    image: sinCara,
    practice: "Impuestos",
    name: "Martín Depaola",
    mail: "",
    desc1:
      "Es Contador Publico egresado de la Universidad de Buenos Aires (UBA).",
    desc2: `Posee amplia experiencia en asesoramiento en materia impositiva, análisis y
revisión de impuestos nacionales, y provinciales adquirida en Estudios de diversas
envergaduras. Es miembro adherente de la Asociación Argentina de Estudios
Fiscales (AAEF).`,
    desc3: `Ha participado en el dictado de cursos internos de capacitación en el área
impositiva. Auxiliar docente a cargo de “Teoría y Técnica Impositiva II” y
“Régimen Tributario” en la UBA Facultad de Ciencias Económicas.`,
    desc4: "",
    desc5: "",
    desc6: "",
  },

  {
    id: 21,
    type: "manager",
    image: sinCara,
    practice: "Impuestos",
    name: "Maria José Ermocida",
    mail: "",
    desc1:
      "Es Contadora Publica graduada en la Universidad de Buenos Aires (UBA).",
    desc2: `Posee amplia experiencia en asesoramiento en materia impositiva, análisis y
revisión de impuestos nacionales, y provinciales adquirida en Estudios de diversas
envergaduras.`,
    desc3: `Es miembro adherente de la Asociación Argentina de Estudios Fiscales (AAEF).
Ha participado en el dictado de cursos internos de capacitación en el área
impositiva.`,
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
              <p>Socios y Gerentes</p>
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
                        {socio.practice}
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
                        {socio.practice}
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
