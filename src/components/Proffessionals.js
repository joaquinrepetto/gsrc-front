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
import socio6 from "../assets/partners/Amanda-Julca.jpg";
import socio7 from "../assets/partners/Bartolome- homar-mas.jpg";
import socio8 from "../assets/partners/Diego-Kelln.jpg";
import socio9 from "../assets/partners/Edith-Mazzer.jpg";
import socio10 from "../assets/partners/Francisco-Peris.jpg";
import socio11 from "../assets/partners/juan-astibia.jpg";
import socio12 from "../assets/partners/juan-de-cabo-ok.jpg";
import socio13 from "../assets/partners/Julieta-Firpo.jpg";
import socio14 from "../assets/partners/luis-maria-flores-gomez.jpg";
import socio15 from "../assets/partners/maria-jose-ermocida.jpg";
import socio16 from "../assets/partners/Mariano-del-amo.jpg";
import socio17 from "../assets/partners/martin_dapaola.jpg";
import socio18 from "../assets/partners/Martin-Jandula.jpg";
import socio19 from "../assets/partners/pablo-lovento.jpg";
import socio20 from "../assets/partners/Pedro-Negri-Atanguren.jpg";
import socio21 from "../assets/partners/Romina-caceres.jpg";
import socio22 from "../assets/partners/Sofia-palucci.jpg";
import socio23 from "../assets/partners/Valentina-Kripper.jpg";
import socio24 from "../assets/partners/victor-del-valle-ok.jpg";
import socio25 from "../assets/partners/zulema-gouveia.jpg";
import socio26 from "../assets/partners/Mariana-Vallejo.jpg";

const socios = [
  {
    id: 1,
    type: "socio",
    image: socio1,
    name: "Cecilia Goldemberg",
    practice: [
      "Precios de Transferencia",
      "Impuestos Internacionales",
      "Wealth Management Office",
    ],
    mail: "cecilia.goldemberg@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/cecilia-goldemberg-44765719",
    // desc1:
    //   "Cecilia Goldenberg has experience in national and international tax planning, with special focus on the definition and follow-up of tax litigation strategies. She specializes in transfer pricing and international taxation.",
    // desc2:
    //   "As an active member of the Argentine Association of Fiscal Studies (or AAEF), she sits on the Executive Board and coordinates the Transfer Pricing Commission, and Member of the International Fiscal Association (IFA). She also forms part of the Tax Studies Commission of the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the Tax Affairs Commission of the Chamber of Joint Stock Companies and the Argentine Industrial Union.",
    // desc3:
    //   "Cecilia was a regular assistant professor at the University of Buenos Aires and has been a visiting professor for the tax postgraduate programs.She has lectured in seminars and conferences on tax related topics both in Argentina and abroad.In 1996, she was National Reporter for the IFA Conference, as well as a panel member in 1999, secretary of the organizing committee for the conference in 2005 and Transfer Pricing Panel Coordinator in the Latin American Regional 2nd Tax Meeting in 2010.",
    // desc4:
    //   "She has published various articles in specialized journals and was editor of the Manual de Precios de Transferencia en Argentina (Handbook of Transfer Pricing in Argentina).",
    // desc5: "",
    desc1: `Cecilia tiene amplia experiencia en Precios de Transferencia y resolución de disputas, diseño y
liderazgo de estructuras fiscales internacionales. También cuenta con experiencia en temas
fiscales complejos locales e internacionales y define y realiza el seguimiento a las estrategias de
litigio fiscal.`,
    desc2: `En su carrera profesional se destaca en asesoría de empresas multinacionales con presencia en
América Latina, ha dado exposiciones en seminarios y conferencias tanto en Argentina como en el
extranjero, incluidos varios congresos de la Asociación Fiscal Internacional.`,
    desc3: `Es autora de numerosos artículos en publicaciones especializadas, habiendo obtenido dos veces el
primer premio de la Asociación Argentina de Estudios Fiscales por el mejor artículo publicado. Fue
directora del "Manual de Precios de Transferencia en Argentina".`,
    desc4: `Es ex coordinadora de la Comisión de Precios de Transferencia en la Asociación Argentina de
Estudios Fiscales y ex profesora de la Universidad de Buenos Aires.`,
    desc5: "",
    desc6: "",
    afiliations: [
      "Miembro activo de la Asociación Argentina de Estudios Fiscales",
      "Comisión de Estudios Tributarios de la Junta Profesional de Ciencias Económicas de la Ciudad de Buenos Aires",
      "Comisión de Asuntos Tributarios de la Cámara de Sociedades Anónimas y la Unión Industrial Argentina",
    ],
    specializations: [
      "Precios de Transferencia",
      "Estructuraciones fiscales internacionales",
      "Auditorías y controversias fiscales",
      "Asesoría Tributaria",
    ],
    education: [
      "Contadora Pública - Universidad de Buenos Aires",
      "Licenciada en Administración - Universidad de Buenos Aires",
      "Idiomas: Español e Inglés",
    ],
  },
  {
    id: 2,
    type: "socio",
    image: socio2,
    practice: " y ",
    practice: ["Impuestos", "Contabilidad"],
    name: "Andrés Carlos Saladino",
    mail: "andres.saladino@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/andres-c-saladino-02898b3",
    // desc1:
    //   "Andres Saldino was previously an advisor for the Ministry of Economy of the Nation Cabinet. He has vast experience in national and international tax planning, with special focus in companies dedicated to social media. He has published a variety of articles specialized in public tax.",
    // desc2:
    //   "He was expositor in the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the province of Buenos Aires. Andres gives lectures on postgraduate courses on taxation at the University Austral of Business Science. He teaches Teoria y Tecnica Impositiva II at the Economic Science University of Buenos Aires (UBA), is an active member of the Graduate School at the Science Economics in Capital Federal and co-presenter of the television program Actualidad Impositiva.",
    desc1: `Ex presidente del Colegio de Graduados en Ciencias Económicas de CABA. Ha sido asesor de
gabinete del Ministerio de Economía de la Nación. Se destaca su experiencia profesional y
académica sobre la problemática tributaria internacional y nacional, sobre todo en empresas
relacionados con los medios de comunicación.`,
    desc2: "Ha escrito numerosos artículos sobre temas tributarios públicos.",
    desc3: `Es profesor adjunto en la materia Teoría y Técnica Impositiva II de la Facultad de Ciencias
Económicas de la Universidad de Buenos Aires (UBA) y profesor adjunto en las materias Impuestos
II y III de la Facultad de Ciencias Empresariales de la Universidad Austral.`,
    desc4: `Ha sido expositor en el Consejo Profesional de Ciencias Económicas de CABA, provincia de Buenos
Aires y en Consejos Profesionales del interior del país; dicta cursos de posgrado en materia
tributaria en la Facultad de Ciencias Económicas de la UBA; es co-conductor del programa de
televisión “Actualidad Impositiva”`,
    education: ["Contador Público - Universidad de Buenos Aires"],
    afiliations: [
      `Comisión de Estudios Impositivos del Colegio de Graduados en Ciencias Económicas de la
Capital Federal`,
    ],
    specializations: [
      "Impuestos Internacionales",
      "Impuestos corporativos",
      "Estructuraciones fiscales",
    ],
  },
  {
    id: 3,
    type: "socio",
    image: socio3,
    practice: ["Impuestos", "Contabilidad"],
    name: "Félix José Rolando",
    mail: "felix.rolando@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/felix-jose-rolando-62662a26",
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
    desc1: `Ha sido asesor de gabinete del Ministerio de Economía de la Nación. Se destaca su experiencia
profesional y académica sobre la problemática tributaria internacional y nacional, su impacto en
los distintos negocios empresariales y el desarrollo de planificaciones fiscales. Ha escrito
numerosos artículos sobre temas tributarios públicos, es coautor de los siguientes libros:
Sociedades de Hecho y Empresas Unipersonales publicado por Editorial La Ley en el año 2012;
Introducción al Régimen Tributario Argentino publicado por Editorial Errepar en el año 2010, con

posteriores reediciones. Ha sido expositor en el Consejo Profesional de Ciencias Económicas de la
Ciudad de Buenos Aires, en los Consejos Profesionales del interior del país y actualmente, en el
Colegio de Graduados en Ciencias Económicas de la Capital Federal y en la Asociación Argentina de
Estudios Fiscales. Dicta cursos de posgrado en materia tributaria en la Facultad de Ciencias
Económicas de la UBA y UADE.`,

    // desc3:
    //   "He was the editor of various articles on taxation issues, and co-author of books, including Sociedades de Hecho y Empresas Unipersonales published by La Ley in 2012 and Introducción al Regimen Tributario Argentino published by Errepar in 2010.",
    // desc4:
    //   "He was an expositor for the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the Country of Buenos Aires, and currently is an expositor for the Graduate School at the Science Economics of Capital Federal.",
    // desc5:
    //   "He lectures on post graduate courses on taxation issues at the Economic Science University of Buenos Aires and UADE.",
    desc6: "",
    education: ["Contador Público - Universidad de Buenos Aires"],
    afiliations: [
      `Consejo Consultivo en el área tributaria de la A.F.I.P. en representación del Colegio de
Graduados en Ciencias Económicas de CABA`,
      `Comisión de Estudios Impositivos`,
    ],
    specializations: [
      "Tributación Internacional",
      "Impuestos Directos e Indirectos Nacionales",
      "Estructuraciones Fiscales",
    ],
  },
  {
    id: 4,
    type: "socio",
    image: socio4,

    practice: ["Impuestos", "Contabilidad"],
    name: "Gabriela Clerc",
    mail: "gabriela.clerc@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/maria-gabriela-clerc-36105142",
    // desc1:
    //   "Gabriela Clerc is has experience in tax and retirement counseling, and analysis and revision of federal, provincial and municipal taxes. She has conducted tax and retirement audits, and tax planning. She gained her expertise at an international specialized firm where she served as Tax Manager. Her academic experience includes a tenured position as assistant professor for the Taxes: Theory and Techniques course; she also taught internal training courses for the technical staff.",
    // desc2:
    //   "Gabriela has co-authored the book Procedimiento Tributario I (Tax Procedure I) with exercises and material review, and she also assisted in the revision of Tomo III, Impuestos Comentados (Volume III, Taxes: A Comment) published by Errepar - both written by Dr. Carlos Ernesto Celdeiro. Gabriela is a member of the Argentine Association of Fiscal Studies (Asociación Argentina de Estudios Fiscales).",
    // desc3: "",
    desc1: `Posee una amplia experiencia en asesoramiento en materia impositiva y previsional, análisis y
revisión de impuestos nacionales, provinciales y municipales, participación en auditorías
impositivas y previsionales y tax planning adquirida en una especializada Firma internacional,
donde se desempeñó como Gerente de Impuestos. En el ámbito docente se desempeñó como
ayudante de la materia “Teoría y Técnica Impositiva II” designada por concurso. También dictó
cursos internos de capacitación estando a cargo de la capacitación del Staff Técnico. Ha prestado
colaboración en la preparación de ejercitaciones y revisiones del libro, “Procedimiento Tributario
I” y en la revisión del Tomo III, Impuestos Comentados de Errepar, ambos del Dr. Carlos Ernesto
Celdeiro. Es miembro de la Asociación Argentina de Estudios Fiscales.`,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Contadora Pública - Universidad de Buenos Aires"],
    afiliations: [`Asociación Argentina de Estudios Fiscales (AAEF)`],
    specializations: [
      "Impuestos Nacionales, Provinciales y Municipales",
      "Auditorías Impositivas y Previsionales",
      "Planeamientos Tributarios",
      "Compliance",
    ],
  },
  {
    id: 25,
    type: "manager",
    image: socio5,
    practice: ["Outsorcing contable", "Outsourcing de Nóminas"],
    name: "Carmen Susana Vaccaro",
    mail: "susana.vaccaro@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/carmen-susana-vaccaro-b7965185",
    // desc1:
    //   "Carmen Vaccaro actively participates in corporate transformation and due diligence processes, and she is an expert in Anti-Money Laundering and Counter Terrorism Financing Regulations issued by the Argentine UIF (Financial Information Unit). She is specialized in accounting and payroll reports and communications to the BCRA (Central Bank of the Argentine Republic).   ",
    desc1: `Lidera el área de Business Process Solutions (BPS), tiene sólida experiencia en armado y análisis de
Estados Contables confeccionados según Normas Nacionales e Internacionales de Contabilidad.
Participa en procesos de Transformaciones societarias, Due Diligence, Normas UIF sobre Lavado de
Activos y Financiación del Terrorismo. Realiza Certificaciones e Informes contables, Pericias de
parte y Comunicaciones del BCRA.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Contadora Pública - Universidad de Buenos Aires",
      "Posgrado en Nuevas Normas Contables Nacionales e Internacionales – Universidad de Buenos Aires.",
    ],
    specializations: [
      "Análisis de Estados Contables",
      "Outsourcing Contable",
      "Outsourcing de Nóminas",
    ],
  },
  {
    id: 9,
    type: "socio",
    image: socio11,
    practice: ["Legal"],
    name: "Juan Astibia",
    mail: "juan.astibia@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/juanastibia/",
    desc1: `Hasta marzo de 2015, se desempeñó como Gerente Senior a cargo de la División Legal de Deloitte
Argentina. Después de trabajar para Deloitte, él y sus colegas fundaron MODO LAW, una firma
innovadora de servicios legales.`,
    desc2: `Ha realizado numerosas adquisiciones, reorganizaciones corporativas y participa en el
asesoramiento de grandes proyectos de inversión en Argentina.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Abogado - Universidad de Buenos Aires",
      "Máster en Derecho Financiero y Tributario- Universidad de Valencia",
      "Idiomas: Español, Inglés y Portugués",
    ],
    afiliations: [
      `Colegio de Abogados de Capital Federal de Buenos Aires`,
      "Colegio de Abogados de la Ciudad de La Plata",
      "Asociación Argentina de Estudios Tributarios",
    ],
    specializations: ["Derecho Fiscal y Corporativo"],
  },

  {
    id: 6,
    type: "socio",
    image: socio12,
    practice: ["Legal"],
    name: "Juan Manuel de Cabo",
    mail: "juan.decabo@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/juan-manuel-de-cabo/",
    desc1: `Juan Manuel es abogado y licenciado en tributación en la Universidad de Buenos Aires.
Actualmente está estudiando para convertirse en contador público en la Universidad de Buenos
Aires. Tiene un certificado internacional en Cumplimiento de la Asociación Argentina de Ética y
Cumplimiento.`,
    desc2: `Trabajó en Deloitte Argentina durante 8 años como especialista fiscal y corporativo.`,
    desc3: `Enseñó cursos de procedimientos tributarios en la Universidad de Buenos Aires y en la Universidad
CEMA.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Abogado - Universidad de Buenos Aires"],
    afiliations: [
      `Asociación de Ética y Cumplimiento (AAEC)`,
      "Asociación Argentina de Estudios Fiscales (AAEF)",
    ],
    specializations: [
      "M&A",
      "Due diligence",
      "Asesoramiento fiscal y corporativo",
    ],
  },
  {
    id: 7,
    type: "socio",
    image: socio14,
    practice: ["Legal"],
    name: "Luis Maria Flores Gimenez",
    mail: "luismaria.floresgimenez@ar.Andersen.com",
    linkedin:
      "https://www.linkedin.com/in/luis-mar%C3%ADa-flores-gimenez-b6a35a54/",
    desc1: `Luis María Flores Giménez es un abogado graduado de la Universidad de Belgrano con estudios de
posgrado en Derecho Tributario en la Universidad Católica de Argentina.`,
    desc2: `Después de trabajar para Deloitte Argentina, donde había estado a cargo de la práctica de
servicios de controversia fiscal, él y sus colegas fundaron MODO LAW; Una innovadora firma de
servicios legales.`,
    desc3: `Luis María tiene una amplia experiencia en consultoría legal en diversos campos, atendiendo a
clientes nacionales e internacionales en la implementación de una variedad de proyectos.`,
    desc4: `Se especializa en asuntos administrativos y fiscales, y tiene una amplia experiencia en litigios ante
tribunales y oficinas de impuestos federales, provinciales y municipales. Como litigante, ha estado
involucrado en varios casos que sientan un precedente en asuntos administrativos y fiscales.
Luis María ha tenido derecho a litigar ante los tribunales.`,
    desc5: `Ha impartido clases de procedimientos fiscales en la Universidad CEMA`,
    desc6: "",
    education: [
      "Abogado - Universidad de Belgrano",
      "Universidad Católica de Argentina (estudios de posgrado)",
      "Idiomas: Español, Inglés e Italiano.",
    ],
    afiliations: [
      `Colegio de Abogados de la Capital Federal (Ciudad de Buenos Aires)`,
      `Asociación Argentina de Estudios Tributarios`,
    ],
    specializations: ["Derecho Tributario y Administrativo", "Litigio"],
  },
  {
    id: 11,
    type: "socio",
    image: socio7,
    practice: ["Legal"],
    name: "Bartolome Homar Mas",
    mail: "bartolome.homarmas@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/bartolomé-homar-más-03b73a8",
    desc1: `Comenzó su carrera en 1997 trabajando como paralegal en Maciel Norman Martelli & Beretta, una
firma de abogados boutique especializada en petróleo y gas. En el año 2000 se graduó como
abogado de la Universidad de Buenos Aires. En el 2003 obtuvo una Maestría en International
Commercial and Business Law de la Universidad de East Anglia (Norwich - Reino Unido). Entre los
años 2004 y 2005 trabajó en KPMG y en C’M’S’ Bureau Francis Lefebvre – Mercosur. En el año
2006 asumió la dirección de los departamentos de Impuestos y Petróleo y Gas de Maciel Norman
and Asociados. En el 2007 obtuvo un posgrado en Derecho Tributario de la Universidad Austral
(Buenos Aires - Argentina). En 2010 cursó el programa de Petróleo y Gas de la Universidad de
Buenos Aires. Entre 2011 y 2017 trabajó para Central Resources Inc., una empresa petrolera
independiente de EE.UU., donde ocupó cargos como Gerente de Asuntos Legales, Nuevos
Negocios y Relaciones Institucionales. Durante más de 4 años se involucró y dirigió procesos de
adquisiciones y farm-outs, asesorando a la compañía desde un punto de vista legal, pero también
con una fuerte perspectiva de negociación. Adicionalmente realizó negociaciones contractuales
con socios de Uniones Transitorias (JV), autoridades provinciales, proveedores, sindicatos, entre
otros. En 2016 asumió como Gerente General liderando 10 gerentes con más de 100 empleados
divididos en 3 provincias. A partir de julio de 2018 se unió a MODO LAW ejerciendo como abogado
y abogado en los campos de Contratos, Derecho Corporativo y Fiscal con una fuerte perspectiva
internacional.`,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Abogado - Universidad de Buenos Aires",
      `International Commercial and Business Law - Universidad de East Anglia – Norwich – Reino
Unido`,
      `Estudios de posgrado en Derecho Tributario- Universidad Austral de Buenos Aires`,
      `Idiomas: Español - Inglés`,
    ],
    afiliations: [
      `Colegio Público de Abogados de la Capital Federal`,
      `Colegio Público de Abogados de Neuquén`,
      `Asociación Argentina de Estudio Fiscales`,
      `Club del Petróleo de Buenos Aires`,
    ],
    specializations: [
      "Derecho Comercial",
      "Derecho Corporativo",
      "M&A",
      "Petróleo y Gas",
      "Impuestos.",
    ],
  },
  {
    id: 5,
    type: "socio",
    image: socio18,
    practice: ["Legal"],
    name: "Martin Jandula",
    mail: "martin.jandula@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/martin-miguel-j%C3%A1ndula-1a16658/",
    desc1: `Martín es abogado con amplia experiencia en servicios generales de asesoría corporativa para
compañías multinacionales, corporaciones cercanas y pequeñas y medianas empresas.`,
    desc2: `Después de haber trabajado para Deloitte Argentina durante 8 años, él y sus colegas fundaron
MODO LAW; Una innovadora firma de servicios legales. Brindó asesoramiento en todos los
asuntos de derecho corporativo con respecto a las inversiones internas por parte de inversionistas
extranjeros, redacción e implementación de contratos, reestructuraciones corporativas y
escisiones, M&A, procesos de due diligence, propiedad intelectual y planificación de software, así
como asesoramiento corporativo general.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Abogado de la Universidad Católica de Salta",
      "Idiomas: Español e Inglés",
    ],
    afiliations: [
      "Colegio Público de Abogados de la Ciudad de Buenos Aires (CPACF)",
      "Asociación Argentina de Estudios Fiscales (o AAEF)",
    ],
    specializations: ["Derecho Corporativo General", "M&A"],
  },
  {
    id: 12,
    type: "socio",
    image: socio8,
    practice: ["Impuestos"],
    name: "Diego Kelln",
    mail: "diego.kelln@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/diego-kelln-340662b/",
    desc1: `Cuenta con más de 19 años de experiencia en asesoramiento fiscal, brindando servicios tanto a
compañía locales como internacionales de diferentes industrias tales como agronegocios, seguros,
retail, servicios y software.`,
    desc2: `La trayectoria de Diego incluye el asesoramiento en la estructuración jurídica de empresas y
clientes individuales con el objetivo reducir el costo tributario de sus operaciones, así como
también la planificación fiscal de operaciones de fusiones y adquisiciones locales e internacionales
de sociedades, restructuraciones de pasivos, etc.`,
    desc3: `Previo a unirse a Andersen, entre los años 2011 y 2013 Diego trabajó como representante
argentino del International Core of Excellence de Deloitte LLP en New York. En el año 2012 asistió
al US Tax Planning and Reporting Program dictado por la NYU.`,
    desc4: `Se ha desempeñado como miembro del Consejo Asesor Tributario de la Fundación para el
desarrollo de la Minería Argentina (FUNDAMIN) y docente auxiliar de Impuestos Nacionales en la
Universidad de Buenos Aires. Actualmente es miembro de la Comisión de Impuestos Nacionales e
Internacionales de la Asociación Argentina de Estudios Fiscales y de la Comisión de Impuestos
Internacionales y Precios de Transferencia del Consejo Profesional de Ciencias Económicas de la
Ciudad Autónoma de Buenos Aires.`,
    desc5: "",
    desc6: "",
    education: [
      "Contador Público - Universidad de Buenos Aires",
      "Tax Law Specialist – Universidad de Buenos Aires",
      "Idiomas: Español | Inglés",
    ],
    specializations: [
      "Impuestos internacionales",
      "Impuestos Corporativos",
      "M&A",
      "Cross-border tax",
    ],
  },
  {
    id: 13,
    type: "manager",
    image: socio19,
    practice: ["Impuestos"],
    name: "Pablo Lo Vento",
    mail: "pablo.lovento@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/pablo-lo-vento-438b942b",
    // desc1:
    //   "Pablo Lo Vento has experience in tax counseling, and in federal, provincial and municipal tax analysis and revision. He is an adhering member of the Argentine Association of Fiscal Studies (Asociación Argentina de Estudios Fiscales – AAEF) and has taught internal and external training courses on tax issues.",
    desc1: `
Posee amplia experiencia en el asesoramiento en materia impositiva, análisis y revisión de
impuestos nacionales, provinciales y municipales. Es miembro adherente de la Asociación
Argentina de Estudios Fiscales (AAEF). Ha participado en el dictado de cursos internos y
externos de capacitación en el área impositiva.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Contador Público - Universidad de Buenos Aires",
      "Idiomas: Español e Italiano",
    ],
    afiliations: ["Asociación Argentina de Estudios Fiscales (AAEF)"],
    specializations: ["Impuestos"],
  },
  {
    id: 26,
    type: "manager",
    image: socio9,
    practice: ["Outsourcing Contable"],
    name: "Edith Mazzer",
    linkedin: "",
    mail: "edith.mazzer@ar.Andersen.com",
    // desc1:
    //   "Edith Mazzer has experience in outsourcing for companies of different sizes. She has also specialized in the preparation of local and international reports, and auditing financial statements prepared pursuant to Argentine accounting principles, U.S. GAAP and International Accounting Standards (IASs). She has experience in mergers and demergers, due diligence processes, integral audits, internal controls and processes analysis. She has given in-company training courses.",
    desc1: `Posee amplia experiencia en Outsourcing en empresas de distinta envergadura, Confección de
reportes nacionales e internacionales, Auditoría de Estados Contables confeccionados bajo
normas contables argentinas, US GAAP y normas IAS, fusiones y escisiones, Due Diligence,
Auditoría Integral, de Controles Internos y análisis de procesos. Ha participado en el dictado de
cursos internos de capacitación.`,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Contadora Pública - Universidad Nacional de Quilmes"],
    specializations: ["Outsourcing Contable e Impositivo"],
  },
  {
    id: 19,
    type: "manager",
    image: socio24,
    practice: ["Outsourcing de Nóminas"],
    name: "Victor del Valle",
    mail: "victor.delvalle@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/victor-adrian-del-valle-60240b15/",
    // desc1:
    //   "Victor Adrian Del Valle has experience in the design and implementation of Human Resources policies and procedures and also in the analysis of wage and salary structures. He has vast knowledge of the work and labor laws in force and of applicable quality standards. Victor has directed payroll processes, benefit and compensation policies and personnel administration at international and Argentine companies and also SMEs and renowned firms. He has successfully implemented IT systems for Human Resources management and administration. He has given in-company training courses for employees on wage and salaries, taxes and legal issues, among others. ",
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
    education: ["Licenciado en Administración - Universidad de La Matanza"],
    specializations: ["Outsourcing de Nóminas"],
  },
  {
    id: 18,
    type: "manager",
    image: socio25,
    practice: ["Sociedades"],
    name: "Zulema Gouveia",
    mail: "zulema.gouveia@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/maría-zulema-gouveia-b30b57b8",
    // desc1:
    //   "Zulema has large experience in corporate aspects, with specific focus in the constitution of companies, modifications of financial statement, norms made by control. ",
    // desc2: "",
    desc2: `Posee una amplia experiencia sobre aspectos societarios, en especial los relacionados con la
constitución de sociedades, modificación de estatutos sociales, fusiones y escisiones, y normas
emanadas de los organismos de control.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Contadora Pública - Universidad Nacional de La Plata"],
    specializations: ["Sociedades"],
  },
  {
    id: 27,
    type: "manager",
    image: socio6,
    practice: ["Asignaciones Internacionales", "Impuestos"],
    name: "Amanda Julca",
    mail: "amanda.julca@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/amanda-julca-06a66613/",
    // desc1:
    //   "Amanda is a Public Accountant and previously worked at Deloitte Peru and Deloitte Argentina for 10 years as a tax specialist. She also participated in the V.I.T.A program for the IRS. She has experience in tax due diligence, merger and acquisitions and tax counseling.",
    desc1: `Ha trabajado en Deloitte Perú y Deloitte Argentina durante 10 años como especialista en
impuestos. También participó del programa V.I.T.A para IRS de Estados Unidos y fue gerente
regional de impuestos para American Express.`,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Contadora Pública - Universidad de Lima",
      "L.L.M en Impuestos- Universidad Torcuato Di Tella",
      "Posgrado en Administración - New York University",
      "Idiomas: Español e Inglés",
    ],
    specializations: ["Due diligence", "M&A", "Asignaciones Internacionales"],
  },
  {
    image: socio13,
    type: "manager",
    practice: ["Precios de Transferencia", "Valuaciones de Empresas"],
    name: "Julieta Firpo",
    mail: "julieta.firpo@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/julieta-mariana-firpo-0a228526",
    // desc1:
    //   "Julieta Firpo has vast experience in the preparation and filing of reports and counseling documents on Transfer Pricing, tax planning, supervisory issues, sector economic and macroeconomic reports, cost analysis, industry analysis, intra-group transaction structuring, profitability analysis per production line, interest rate determination and market profitability.",
    // desc2:
    //   "In the academic field, she has held a position at the University of Buenos Aires as Assistant Professor.",
    desc1: `Posee una amplia experiencia en elaboración y presentación de informes y reportes de asesoría en
materia de Precios de Transferencia, planning impositivo, fiscalizaciones, informes económicos
sectoriales y macroeconómicos, análisis de costos, análisis por industrias, estructuración de
transacciones intragrupo, análisis de rentabilidades por líneas de producción, determinación de
tasas de interés y rentabilidades de mercado.`,
    desc3: "Fue Auxiliar Docente en la Universidad de Buenos Aires",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Licenciada en Economía - Universidad de Buenos Aires",
      "Mágister en Finanzas - Universidad del CEMA",
    ],
    specializations: ["Precios de Transferencia", "Valuaciones de Empresas"],
  },

  {
    id: 28,
    type: "manager",
    image: socio22,
    practice: ["Impuestos"],
    name: "Sofía Paulucci.",
    mail: "sofia.paulucci@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/sofia-victoria-paulucci-65424144/",
    // desc1:
    //   "A Sofía Paulucci is a tax consultant and has high expertise in federal, provincial and municipal tax analysis and review.",
    // desc2:
    //   "Her academic experience encompasses the position of Assistant Professor in the Tax Regime course offered by the University of Buenos Aires. She also conducts training programs for fellow employees in the firm where she currently works.",
    desc1: `Sofía Paulucci es consultora fiscal y tiene gran experiencia en análisis y revisión de impuestos federales, provinciales y municipales.`,
    desc2: `Su experiencia académica abarca incluye puesto de Profesora Asistente en el curso de Régimen Tributario ofrecido por la Universidad de Buenos Aires. También lleva a cabo programas de capacitación para compañeros de trabajo en la empresa donde trabaja actualmente.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Contadora Pública - Universidad de Buenos Aires"],
    specializations: ["Impuestos"],
  },
  {
    id: 14,
    type: "manager",
    image: socio21,
    practice: ["Legal"],
    name: "Romina Caceres Villagra",
    mail: "romina.caceresvillagra@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/rpcaceresvillagra/",
    desc1:
      "Romina es Gerente de Impuestos y Asuntos Legales en Andersen Argentina.",
    desc2: `Trabajó durante más de 5 años en Techint, una de las empresas más grandes de Argentina y
también trabajó durante 5 años en PWC.`,
    desc3: `Asiste a cursos de formación jurídica para abogados en diferentes universidades, asociaciones
profesionales o centros de estudios, sobre derecho contractual, impuestos, negocios, etc.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      `Universidad de Buenos Aires: maestría (en curso) y posgrado (ambas en derecho
tributario); Abogada especializado en derecho fiscal y mercantil. Licenciado.`,
      "Idiomas: Español e Inglés",
    ],
    afiliations: [
      "Colegio de Abogados de la Ciudad de Buenos Aires",
      "Asociación Argentina de Estudios Fiscales (AAEF)",
    ],
    specializations: [
      "Contratos",
      "M&A",
      "Derecho empresarial",
      "Derecho comercial",
      "Programas gubernamentales de cumplimiento legal",
      "Due diligence",
    ],
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
    image: socio10,
    practice: ["Legal"],
    name: "Francisco Peris",
    mail: "Francisco.peris@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/francisco-peris-7a32518a/",
    desc1: `Tiene una vasta experiencia en servicios administrativos y de controversia tributaria,
especializándose en litigios ante tribunales y oficinas fiscales federales, provinciales y municipales.
Como litigante, ha estado involucrado en varios casos que sientan un precedente en asuntos
administrativos y fiscales. Es profesor asistente regular en la Universidad de Buenos Aires. Tiene
derecho a litigar ante los tribunales federales.`,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Abogado - Universidad de Buenos Aires",
      "Posgrado en Derecho Tributario y Derecho Concursal- Universidad de Buenos Aires",
      "Idiomas: Español e Inglés",
    ],
    afiliations: [
      "Colegio de Abogados de la Ciudad de Buenos Aires",
      "Asociación Argentina de Estudios Fiscales",
    ],
    specializations: [
      "Derecho Tributario y Administrativo",
      "Litigio",
      "Concursos y Quiebra",
    ],
  },

  {
    id: 20,
    type: "manager",
    image: socio20,
    practice: ["Aduana"],
    name: "Pedro Negri Aranguren",
    mail: "pedro.negri@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/pedro-negri-aranguren-b844b66a/",
    desc1: `Tiene estudios de posgrado en impuestos, en la Universidad de Buenos Aires, y estudios de
posgrado en aduanas, en la Universidad de Buenos Aires.`,
    desc2: `Obtuvo su experiencia en el Departamento de Impuestos de Estudio Negri & Teijeiro Abogados, y
en el Departamento de Comercio Exterior y Aduanas de Estudio Bruchou, Fernández Madero &
Lombardi, centrándose en el asesoramiento y litigios generales de comercio exterior y aduanas.`,
    desc3: `En su práctica, brinda asesoramiento aduanero durante todos los pasos del proceso de
importación y exportación, y representa a los clientes ante todas las oficinas de aduanas, en
cualquier procedimiento administrativo y / o judicial.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Abogado - Universidad Católica Argentina",
      "Estudios de posgrado en aduanas y en impuestos - Universidad de Buenos Aires",
    ],
    afiliations: [
      "Asociación Argentina de Estudios Fiscales (AAEF)",
      "Instituto Argentino de Estudios Aduaneros (IAEA).",
    ],
    specializations: ["Derecho Aduanero"],
  },
  {
    id: 21,
    type: "manager",
    image: socio23,
    practice: ["Aduana"],
    name: "Valentina Kripper",
    mail: "valentina.kripper@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/valentina-kripper-6a00b14a/",
    desc1: `Ha sido miembro del Departamento de Aduanas y Comercio Exterior en reconocidas firmas de
abogados como O'Farrell, Bruchou Fernández Madero y Lombardi, Petersen y Cotter Moine.`,
    desc2: `Tiene una vasta experiencia asesorando a las empresas sobre operaciones de importación y
exportación; representando a las empresas en los procedimientos aduaneros; asesorar sobre las
Regulaciones de Cambio; Investigaciones.`,
    desc3: `Desde 2008 ha participado en los cursos y reuniones periódicas sobre Aduanas de la Asociación
Argentina de Estudios Fiscales. Participó en la Reunión Internacional sobre Derecho Aduanero,
organizada por la Asociación mencionada, habiendo presentado documentos en 2011, 2012 y
2015.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Abogada - Universidad Nacional de Tucumán",
      "Máster en Comercio Internacional - Universidad Nacional de Tres de Febrero",
    ],
    specializations: ["Derecho Aduanero", "Comercio Exterior"],
  },
  {
    id: 21,
    type: "manager",
    image: socio16,
    practice: ["Impuestos"],
    name: "Mariano del Amo",
    mail: "mariano.delamo@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/mariano-federico-del-amo-4983321b",
    desc1: `Posee amplio conocimiento para el asesoramiento impositivo tanto nacional como provincial. Se
destaca por su amplia experiencia en la confección de declaraciones juradas mensuales y anuales;
confección de recuperos de IVA por Exportación, determinación coeficientes CM y DDJJ CM 05,
atención de inspecciones, entre otros.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Contador Público - Universidad de Buenos Aires",
      "Posgrado en impuestos - Universidad de Belgrano",
    ],
    specializations: ["Impuestos"],
  },
  {
    id: 21,
    type: "manager",
    image: socio26,
    practice: ["Impuestos"],
    name: "Mariana Vallejo",
    mail: "mariana.vallejo@ar.Andersen.com",
    linkedin: "",
    desc1: `Posee amplia experiencia en asesoramiento en materia tributaria, análisis y revisión de impuestos
nacionales, y provinciales.`,
    desc2: `Ha participado en el dictado de cursos internos de capacitación en el área impositiva.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Contadora Pública - Universidad Nacional de La Plata",
      "Idiomas: Español, Inglés",
    ],
    specializations: ["Impuestos"],
  },
  {
    id: 21,
    type: "manager",
    image: socio17,
    practice: ["Impuestos"],
    name: "Martín Depaola",
    mail: "martin.depaola@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/martín-depaola-51635892",
    desc1: `Posee amplia experiencia en asesoramiento en materia impositiva, análisis y revisión de impuestos
nacionales, y provinciales adquirida en Estudios de diversas envergaduras`,
    desc2: `Ha participado en el dictado de cursos internos de capacitación en el área impositiva. Auxiliar
docente a cargo de “Teoría y Técnica Impositiva II” y “Régimen Tributario” en la UBA Facultad de
Ciencias Económicas.`,
    desc3: ``,
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Contador Público - Universidad de Buenos Aires",
      "Idiomas: Español, Inglés y Alemán",
    ],
    afiliations: ["Asociación Argentina de Estudios Fiscales (AAEF)"],
    specializations: ["Impuestos"],
  },

  {
    id: 21,
    type: "manager",
    image: socio15,
    practice: ["Impuestos"],
    name: "Maria José Ermocida",
    mail: "mariajose.ermocida@ar.Andersen.com",
    linkedin: "",
    desc1: `Posee amplia experiencia en asesoramiento en materia impositiva, análisis y revisión de impuestos
nacionales, y provinciales adquirida en Estudios de diversas envergaduras. Ha participado en el
dictado de cursos internos de capacitación en el área impositiva.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Contadora Publica - Universidad de Buenos Aires"],
    afiliations: ["Asociación Argentina de Estudios Fiscales (AAEF)"],
    specializations: ["Impuestos"],
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
                  <th>Especialidad</th>
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
                          <a style={{ color: "#AD0D21" }}>{socio.name}</a>
                        </Link>
                      </td>
                      <td
                        class="areas"
                        style={{ verticalAlign: "middle", paddingTop: "15px" }}
                      >
                        <div style={{ textAlign: "left", paddingLeft: "40%" }}>
                          {socio.practice.map((p) => (
                            <li>{p}</li>
                          ))}
                        </div>
                        <br />
                      </td>
                      <td class="correo">
                        <img
                          onClick={() =>
                            (window.location.href = `mailto:${socio.mail}`)
                          }
                          style={{ cursor: "pointer" }}
                          src={sobre}
                        />
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
            <h2>Gerentes</h2>
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
                  <th>Especialidad</th>
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
                          <a style={{ color: "#AD0D21" }}>{socio.name}</a>
                        </Link>
                      </td>
                      <td class="areas">
                        <div style={{ textAlign: "left", paddingLeft: "40%" }}>
                          {socio.practice.map((p) => (
                            <li>{p}</li>
                          ))}
                        </div>
                        <br />
                      </td>
                      <td class="correo">
                        <img
                          onClick={() =>
                            (window.location.href = `mailto:${socio.mail}`)
                          }
                          style={{ cursor: "pointer" }}
                          src={sobre}
                        />
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
