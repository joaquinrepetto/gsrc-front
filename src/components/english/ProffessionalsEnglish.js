import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sobre from "../../assets/partners/sobre.png";
import sinCara from "../../assets/partners/sin-foto.gif";

// Imagenes Socios
import socio1 from "../../assets/partners/ceci.jpg";
import socio2 from "../../assets/partners/AndresSaladino.jpg";
import socio3 from "../../assets/partners/felixRolando.jpg";
import socio4 from "../../assets/partners/GabrielaClerc.jpg";
import socio5 from "../../assets/partners/SusanaCarlassara.jpg";
import socio6 from "../../assets/partners/Amanda-Julca.jpg";
import socio7 from "../../assets/partners/Bartolome- homar-mas.jpg";
import socio8 from "../../assets/partners/Diego-Kelln.jpg";
import socio9 from "../../assets/partners/Edith-Mazzer.jpg";
import socio10 from "../../assets/partners/Francisco-Peris.jpg";
import socio11 from "../../assets/partners/juan-astibia.jpg";
import socio12 from "../../assets/partners/juan-de-cabo-ok.jpg";
import socio13 from "../../assets/partners/Julieta-Firpo.jpg";
import socio14 from "../../assets/partners/luis-maria-flores-gomez.jpg";
import socio15 from "../../assets/partners/maria-jose-ermocida.jpg";
import socio16 from "../../assets/partners/Mariano-del-amo.jpg";
import socio17 from "../../assets/partners/martin_dapaola.jpg";
import socio18 from "../../assets/partners/Martin-Jandula.jpg";
import socio19 from "../../assets/partners/pablo-lovento.jpg";
import socio20 from "../../assets/partners/Pedro-Negri-Atanguren.jpg";
import socio21 from "../../assets/partners/Romina-caceres.jpg";
import socio22 from "../../assets/partners/Sofia-palucci.jpg";
import socio23 from "../../assets/partners/Valentina-Kripper.jpg";
import socio24 from "../../assets/partners/victor-del-valle-ok.jpg";
import socio25 from "../../assets/partners/zulema-gouveia.jpg";

const socios = [
  {
    id: 1,
    type: "socio",
    image: socio1,
    name: "Cecilia Goldemberg",
    practice: [
      "Transfer Pricing",
      "International Tax",
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
    desc1: `Cecilia has vast experience in Transfer Pricing implementation and dispute resolution, design and lead international tax structurings, managed local and international complex tax issues and focus on the definition and follow-up of tax litigation strategies.`,
    desc2: `During her professional career, she has been advisor to multinational companies with presence in Latin America, speaker at seminars and conferences both in Argentina and abroad including various Congresses of the International Fiscal Association.`,
    desc3: `She is the author of numerous articles in specialized publications, having obtained twice the first prize from the Argentine Association of Fiscal Studies for the best article published. She was director of the “Handbook of Transfer Pricing in Argentina”.`,
    desc4: `She is ex coordinator of the Transfer Pricing Commission in the Argentine Association of Fiscal Studies and former professor at the University of Buenos Aires.`,
    desc5: "",
    desc6: "",
    afiliations: [
      "Active member of the Argentine Association of Fiscal Studies",
      "Tax Studies Commission of the Professional Board of Economic Science in the City of Buenos Aires",
      "Tax Affairs Commission of the Chamber of Joint Stock Companies and the Argentine Industrial Union",
    ],
    specializations: [
      "Transfer Pricing",
      "International tax structurings",
      "Tax Audits & Tax Controversies",
      "Tax Advisory",
    ],
    education: [
      "Public Accountant – University of Buenos Aires",
      "Degree in administration – University of Buenos Aires",
      "Languages: Spanish, English",
    ],
  },
  {
    id: 2,
    type: "socio",
    image: socio2,
    practice: " y ",
    practice: ["Tax", "Accounting"],
    name: "Andrés Carlos Saladino",
    mail: "andres.saladino@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/andres-c-saladino-02898b3",
    // desc1:
    //   "Andres Saldino was previously an advisor for the Ministry of Economy of the Nation Cabinet. He has vast experience in national and international tax planning, with special focus in companies dedicated to social media. He has published a variety of articles specialized in public tax.",
    // desc2:
    //   "He was expositor in the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the province of Buenos Aires. Andres gives lectures on postgraduate courses on taxation at the University Austral of Business Science. He teaches Teoria y Tecnica Impositiva II at the Economic Science University of Buenos Aires (UBA), is an active member of the Graduate School at the Science Economics in Capital Federal and co-presenter of the television program Actualidad Impositiva.",
    desc1: `He is ex-president of the College of Graduates in Economic Sciences of CABA.  He was previously an advisor for the Ministry of Economy of the Nation Cabinet. He has vast experience in national and international tax planning, with special focus in companies dedicated to social media. `,
    desc2: "He has published a variety of articles specialized in public tax.",
    desc3: `He is a professor in the subject Tax Theory and Technique II of the Faculty of Economic Sciences of the University of Buenos Aires (UBA) and an adjunct professor in Taxes II and III of the Faculty of Business Sciences of the Austral University.`,
    desc4: `He has been an expositor in the Professional Council of Economic Sciences of CABA, province of Buenos Aires and in Professional Councils of the interior of the country; he teaches postgraduate courses in tax matters at the UBA Faculty of Economic Sciences; He is co-host of the television program "Actualidad Impositiva"`,
    education: ["Public Accountant - University of Buenos Aires"],
    afiliations: [
      `Tax Studies Commission of the College of Graduates in Economic Sciences of the Federal Capital`,
    ],
    specializations: [
      "International Tax",
      "National Corporate Taxes",
      "Tax structurings",
    ],
  },
  {
    id: 3,
    type: "socio",
    image: socio3,
    practice: ["Tax", "Accounting"],
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
    desc1: `He has been a cabinet advisor to the National Ministry of Economy. His professional and academic experience on international and national tax issues, its impact on different business deals and the development of tax planning are highlighted. He has written numerous articles on public tax issues, he is the co-author of the following books: Sociedades de Hecho and Empresas Unipersonales published by Editorial La Ley in 2012; Introduction to the Argentine Tax Regime published by Editorial Errepar in 2010, with subsequent reissues. He has been an exhibitor in the Professional Council of Economic Sciences of the City of Buenos Aires, in the Professional Councils of the interior of the country and currently, in the College of Graduates in Economic Sciences of the Federal Capital and in the Argentine Association of Fiscal Studies. He teaches postgraduate courses in tax matters at the Faculty of Economic Sciences of the UBA and UADE.`,

    // desc3:
    //   "He was the editor of various articles on taxation issues, and co-author of books, including Sociedades de Hecho y Empresas Unipersonales published by La Ley in 2012 and Introducción al Regimen Tributario Argentino published by Errepar in 2010.",
    // desc4:
    //   "He was an expositor for the Professional Board of Economic Science in the City of Buenos Aires (CPCECABA) and the Country of Buenos Aires, and currently is an expositor for the Graduate School at the Science Economics of Capital Federal.",
    // desc5:
    //   "He lectures on post graduate courses on taxation issues at the Economic Science University of Buenos Aires and UADE.",
    desc6: "",
    education: ["Public Accountant - University of Buenos Aires"],
    afiliations: [
      `Advisory Council in the tax area of ​​the A.F.I.P. on behalf of the College of Graduates in Economic Sciences of CABA`,
      `Tax Studies Commission`,
    ],
    specializations: [
      "International Taxation",
      "Direct and Indirect National Taxes",
      "Tax Planning",
    ],
  },
  {
    id: 4,
    type: "socio",
    image: socio4,

    practice: ["Tax", "Accounting"],
    name: "Gabriela Clerc",
    mail: "gabriela.clerc@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/maria-gabriela-clerc-36105142",
    // desc1:
    //   "Gabriela Clerc is has experience in tax and retirement counseling, and analysis and revision of federal, provincial and municipal taxes. She has conducted tax and retirement audits, and tax planning. She gained her expertise at an international specialized firm where she served as Tax Manager. Her academic experience includes a tenured position as assistant professor for the Taxes: Theory and Techniques course; she also taught internal training courses for the technical staff.",
    // desc2:
    //   "Gabriela has co-authored the book Procedimiento Tributario I (Tax Procedure I) with exercises and material review, and she also assisted in the revision of Tomo III, Impuestos Comentados (Volume III, Taxes: A Comment) published by Errepar - both written by Dr. Carlos Ernesto Celdeiro. Gabriela is a member of the Argentine Association of Fiscal Studies (Asociación Argentina de Estudios Fiscales).",
    // desc3: "",
    desc1: `She is highly experienced in tax and retirement counseling, and analysis and revision of federal, provincial and municipal taxes. She has conducted tax and retirement audits, and tax planning. She gained her expertise at an international specialized firm where she served as Tax Manager. Her academic experience includes a tenured position as Assistant Professor for the “Taxes: Theory and Techniques” course. She has also taught internal training courses for the Technical Staff. She has cooperated with the book “Procedimiento Tributario I” (Tax Procedure I) with exercises and material review, and she has also assisted in the revision of “Tomo III, Impuestos Comentados” (Volume III, Taxes: A Comment) published by Errepar, both written by Dr. Carlos Ernesto Celdeiro. Ms. Clerc is a member of the Argentine Association of Fiscal Studies (Asociación Argentina de Estudios Fiscales).`,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Public Accountant - University of Buenos Aires"],
    afiliations: [`Argentine Association of Fiscal Studies (AAEF)`],
    specializations: [
      "Federal, provincial and municipal taxes",
      "Tax and retirement audits",
      "Tax Planning",
      "Compliance",
    ],
  },
  {
    id: 25,
    type: "manager",
    image: socio5,
    practice: ["Accounting Outsourcing", "Payroll Outsourcing"],
    name: "Carmen Susana Vaccaro",
    mail: "susana.vaccaro@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/carmen-susana-vaccaro-b7965185",
    // desc1:
    //   "Carmen Vaccaro actively participates in corporate transformation and due diligence processes, and she is an expert in Anti-Money Laundering and Counter Terrorism Financing Regulations issued by the Argentine UIF (Financial Information Unit). She is specialized in accounting and payroll reports and communications to the BCRA (Central Bank of the Argentine Republic).   ",
    desc1: `She leads the Business Process Solutions (BPS) area, and she has solid experience in assembling and analyzing Financial Statements prepared according to National and International Accounting Standards. Participates in processes of corporate transformation, due diligence, UIF rules on money laundering and terrorist financing. She makes accounting Certifications and Reports, Expertise of part and Communications of the BCRA.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Public Accountant- University of Buenos Aires",
      "Postgraduate in New National and International Accounting Standards - University of Buenos Aires.",
    ],
    specializations: [
      "Certifications and Accounting reports",
      "Accounting Outsourcing",
      "Payroll Outsourcing",
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
    desc1: `Until March 2015, he served as Senior Manager in charge of the Legal Division of Deloitte Argentina. After working for Deloitte, he and his colleagues founded MODO LAW, an innovative legal services firm..`,
    desc2: `He has conducted numerous acquisitions, corporate reorganizations and participates in advising large investment projects in Argentina.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Lawyer - University of Buenos Aires",
      "Master degree in Financial and Tax Law from the University of Valencia, Spain",
      "Languages: Spanish, English, Portuguese",
    ],
    afiliations: [
      `Bar Association of the Federal Capital of Buenos Aires`,
      "Bar Association of the City of La Plata",
      "Argentine Association of Fiscal Studies (AAEF)",
    ],
    specializations: ["Tax and Corporate Law."],
  },

  {
    id: 6,
    type: "socio",
    image: socio12,
    practice: ["Legal"],
    name: "Juan Manuel de Cabo",
    mail: "juan.decabo@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/juan-manuel-de-cabo/",
    desc1: `Juan Manuel is a Lawyer with a degree in taxation in Buenos Aires University. At the moment he is studying to become a public accountant in Buenos Aires University. He holds an international certificate in Compliance from the Ethics and Compliance Argentine Association.`,
    desc2: `He worked in Deloitte Argentina for 8 years as tax & corporate specialist.`,
    desc3: `He taught tax procedures courses in Buenos Aires University and CEMA University.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Lawyer - University of Buenos Aires"],
    afiliations: [
      `Ethics and Compliance Argentine Association(AAEC)`,
      "Argentine Association of Fiscal Studies(AAEF)",
    ],
    specializations: ["M&A", "Due diligence", "Tax and Corporate counseling"],
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
    desc1: `Luis Maria Flores Gimenez is a lawyer graduated from the University of Belgrano with postgraduates’ studies in Tax Law at the Catholic University of Argentina.
After working for Deloitte Argentina, where he had been in charge of the tax controversy services practice, he and his colleagues founded MODO LAW; an innovative legal services firm.`,
    desc2: `Luis María has extensive experience in legal consulting in various fields, attending national and international clients in the implementation of a variety of projects.  
He specializes in administrative and tax matters, and has broad experience in litigation before federal, provincials and municipals courts and tax bureaus. As a litigator, he has been involved in several cases that set precedent in administrative and tax matters.`,
    desc3: `Luis Maria has been entitled to litigate before Federal Courts and is member of the Bar Association of the Capital Federal (City of Buenos Aires) and the Argentine Association of Tax Studies. He has given classes in tax procedures at CEMA University.`,
    desc6: "",
    education: [
      "Lawyer - University of Belgrano",
      "Postgraduates studies - Catholic University of Argentina",
      "Languages: Spanish, English, Italian",
    ],
    afiliations: [
      `Bar Association of the Capital Federal (City of Buenos Aires).)`,
      `Argentine Association of Tax Studies`,
    ],
    specializations: ["Tax and Administrative Law.", "Litigation."],
  },
  {
    id: 11,
    type: "socio",
    image: socio7,
    practice: ["Legal"],
    name: "Bartolome Homar Mas",
    mail: "bartolome.homarmas@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/bartolomé-homar-más-03b73a8",
    desc1: `He started his career in 1997 working as a trainee in Maciel Norman Martelli & Beretta, a boutique law-firm specialized in Oil & Gas. In 2000 he graduated as a lawyer from the University of Buenos Aires. In 2003 he obtained an LLM International Commercial and Business Law from the University of East Anglia (Norwich – UK). From 2004 and 2005 he worked at KPMG and C’M’S’ Bureau Francis Lefebvre – Mercosur. As from 2006 he led the Tax and Oil & Gas department of Maciel Norman and Asociados. In 2007 he achieved a postgraduate degree in Tax Law from the Austral University (Buenos Aires - Argentina). In 2010 he attended to the Oil & Gas course of the University of Buenos Aires. From 2011 to 2017 he worked for Central Resources Inc. – a US Independent Oil Company – where he occupied positions as Manager of Legal Affairs, New Businesses and Institutional Relationships. For over 4 years he got involved and led acquisitions and farm-outs processes, advising the company from a legal standpoint but also with a strong negotiating perspective. He also carried out contract negotiations with JV partners, provincial authorities, suppliers, unions, among others. In 2016 he became Country Manager leading 10 managers with more than 100 employees split in three provinces. As from July 2017 he joined MODO LAW practicing as counsel and lawyer in the fields of Contracts, Corporate and Tax Law with strong international perspective.`,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Lawyer - University of Buenos Aires",
      `International Commercial and Business Law from the University of East Anglia(Norwich – UK)`,
      `Postgraduate degree in Tax Law - Austral University(Buenos Aires - Argentina) `,
      `Languages: Spanish, English`,
    ],
    afiliations: [
      `Bar Association of the Capital Federal`,
      `Bar Association of Neuquén`,
      `Argentine Association of Fiscal Studies(AAEF)`,
      `Buenos Aires Oil Club`,
    ],
    specializations: [
      "Commercial",
      "Corporate Law",
      "M&A",
      "Oil & Gas",
      "Tax Law",
    ],
  },
  {
    id: 5,
    type: "socio",
    image: socio18,
    practice: ["Legal"],
    name: "Martin Jandula",
    mail: "jmartin.jandula@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/martin-miguel-j%C3%A1ndula-1a16658/",
    desc1: `Martín is a Lawyer with extensive experience in general corporate advisory services for multinational companies, closely-held corporations and small & medium sized companies.`,
    desc2: `After having worked for Deloitte Argentina for 8 years he and colleagues founded MODO LAW; an innovative legal services firm. In this capacity, he advised on all corporate law matter with respect to inward investments by foreign investors, drafting and implementation of contracts, corporate restructurings and spin-offs, mergers and acquisitions, due diligences processes, intellectual property and software planning, as well as general corporate counseling.`,
    desc3:
      "Martín received a law degree from the Law School of the Catholic University of Salta in 2008 and is a member of the Argentine Association of Fiscal Studies (or AAEF). ",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Lawyer - Catholic University of Salta",
      "Languages: Spanish, English ",
    ],
    afiliations: [
      "Public Bar of Buenos Aires City (CPACF)",
      "Argentine Association of Fiscal Studies (AAEF)",
    ],
    specializations: ["General Corporate", "M&A"],
  },
  {
    id: 12,
    type: "socio",
    image: socio8,
    practice: ["Tax "],
    name: "Diego Kelln",
    mail: "diego.kelln@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/diego-kelln-340662b/",
    desc1: `Diego Kelln is a Partner at Andersen in Argentina. `,
    desc2: `He has more than 19 years of experience in tax counseling, advising local and foreign companies of different industries such as agribusiness, Insurance, retail, services and software. Diego also has broad experience advising on financing, international transactions and mergers and acquisitions.`,
    desc3: `Diego provides advice at Federal, Provincial and Municipal taxation. Diego's career includes advising on the legal structuring of companies and individual clients with the aim of reducing the tax cost of their operations, as well as the tax planning of operations of local and international mergers and acquisitions, loan and debt restructuring, etc. `,
    desc4: `Before joining Andersen, Diego worked as an Argentine representative at Deloitte LLP, New York's International Core of Excellence between 2011 and 2013. In 2012 he assisted to the US Tax Planning and Reporting Program at the NYU. `,
    desc5:
      "He has served as a member of the Tax Advisory Council of the Foundation for the development of Argentine Mining (FUNDAMIN). ",
    desc6:
      "Diego was a lecturer of Federal Taxation at the University of Buenos Aires. ",
    education: [
      "Public Accountant - University of Buenos Aires",
      "Tax Law Specialist – University of Buenos Aires",
      "Languages: Spanish, English",
    ],
    specializations: [
      "International Tax",
      "Corporate Tax",
      "M&A",
      "Cross - border taxation",
    ],
  },
  {
    id: 13,
    type: "manager",
    image: socio19,
    practice: ["Tax"],
    name: "Pablo Lo Vento",
    mail: "pablo.lovento@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/pablo-lo-vento-438b942b",
    // desc1:
    //   "Pablo Lo Vento has experience in tax counseling, and in federal, provincial and municipal tax analysis and revision. He is an adhering member of the Argentine Association of Fiscal Studies (Asociación Argentina de Estudios Fiscales – AAEF) and has taught internal and external training courses on tax issues.",
    desc1: `He has vast experience in tax counseling, and in federal, provincial and municipal tax analysis and revision. He is an adhering member of the Argentine Association of Fiscal Studies (Asociación Argentina de Estudios Fiscales – AAEF) and has taught internal and external training courses on tax issues.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Public Accountant - University of Buenos Aires",
      "Languages: Spanish, Italian",
    ],
    afiliations: ["Argentine Association of Fiscal Studies (or AAEF)  "],
    specializations: ["Tax"],
  },
  {
    id: 26,
    type: "manager",
    image: socio9,
    practice: ["Accounting Outsourcing"],
    name: "Edith Mazzer",
    linkedin: "",
    mail: "edith.mazzer@ar.Andersen.com",
    // desc1:
    //   "Edith Mazzer has experience in outsourcing for companies of different sizes. She has also specialized in the preparation of local and international reports, and auditing financial statements prepared pursuant to Argentine accounting principles, U.S. GAAP and International Accounting Standards (IASs). She has experience in mergers and demergers, due diligence processes, integral audits, internal controls and processes analysis. She has given in-company training courses.",
    desc1: `She has vast experience in Outsourcing in companies of different sizes. She has also specialized in the preparation of local and international reports, and auditing financial statements prepared pursuant to Argentine accounting principles, US GAAP and International Accounting Standards (IASs). She has experience in mergers and demergers, due diligence processes, integral audits, internal controls and processes analysis. She has given in-company training courses.`,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Public Accountant - National University of Quilmes"],
    specializations: ["Tax and Accounting Outsourcing"],
  },
  {
    id: 19,
    type: "manager",
    image: socio24,
    practice: ["Payroll Outsourcing"],
    name: "Victor del Valle",
    mail: "victor.delvalle@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/victor-adrian-del-valle-60240b15/",
    // desc1:
    //   "Victor Adrian Del Valle has experience in the design and implementation of Human Resources policies and procedures and also in the analysis of wage and salary structures. He has vast knowledge of the work and labor laws in force and of applicable quality standards. Victor has directed payroll processes, benefit and compensation policies and personnel administration at international and Argentine companies and also SMEs and renowned firms. He has successfully implemented IT systems for Human Resources management and administration. He has given in-company training courses for employees on wage and salaries, taxes and legal issues, among others. ",
    desc2: `He has experience in the design and implementation of Human Resources policies and procedures and also in the analysis of wage and salary structures. He has vast knowledge of the work and labor laws in force and of applicable quality standards. Mr. Del Valle has directed payroll processes, benefit and compensation policies and personnel administration at international and Argentine companies and also SMEs and renowned firms. He has successfully implemented IT systems for Human Resources management and administration. He has given in-company training courses for employees on wage and salaries, taxes and legal issues, among others.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Degree in Management - University of La Matanza"],
    specializations: ["Payroll Outsourcing"],
  },
  {
    id: 18,
    type: "manager",
    image: socio25,
    practice: ["Corporations"],
    name: "Zulema Gouveia",
    mail: "zulema.gouveia@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/maría-zulema-gouveia-b30b57b8",
    // desc1:
    //   "Zulema has large experience in corporate aspects, with specific focus in the constitution of companies, modifications of financial statement, norms made by control. ",
    // desc2: "",
    desc2: `She has vast experience in corporate matters, especially those related to the incorporation of companies, modification of bylaws, M&A, and regulations issued by the control bodies.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Public Accountant - University of La Plata"],
    specializations: ["Corporations"],
  },
  {
    id: 27,
    type: "manager",
    image: socio6,
    practice: ["International Assignments", "Tax"],
    name: "Amanda Julca",
    mail: "amanda.julca@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/amanda-julca-06a66613/",
    // desc1:
    //   "Amanda is a Public Accountant and previously worked at Deloitte Peru and Deloitte Argentina for 10 years as a tax specialist. She also participated in the V.I.T.A program for the IRS. She has experience in tax due diligence, merger and acquisitions and tax counseling.",
    desc1: `She has worked at Deloitte Peru and Deloitte Argentina for 10 years as a tax specialist. She
also participated in the V.I.T.A program for the United States IRS and was Regional Tax
Manager for American Express`,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Public Accountant – University of Lima",
      "L.L.M in International Tax - Torcuato di Tella University",
      "Postgraduate in Administration - New York University ",
      "Languages: Spanish, English",
    ],
    specializations: ["Due diligence", "M&A", "International Assignments"],
  },
  {
    image: socio13,
    type: "manager",
    practice: ["Transfer Pricing", "Company Valuations"],
    name: "Julieta Firpo",
    mail: "julieta.firpo@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/julieta-mariana-firpo-0a228526",
    // desc1:
    //   "Julieta Firpo has vast experience in the preparation and filing of reports and counseling documents on Transfer Pricing, tax planning, supervisory issues, sector economic and macroeconomic reports, cost analysis, industry analysis, intra-group transaction structuring, profitability analysis per production line, interest rate determination and market profitability.",
    // desc2:
    //   "In the academic field, she has held a position at the University of Buenos Aires as Assistant Professor.",
    desc1: `She has vast experience in the preparation and filing of reports and counseling documents on Transfer Pricing, tax planning, supervisory issues, sector economic and macroeconomic reports, cost analysis, industry analysis, intra-group transaction structuring, profitability analysis per production line, interest rate determination and market profitability.`,
    desc3: "He was a Teaching Assistant at the University of Buenos Aires",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Degree in Economics - Universidad of Buenos Aires",
      "Master’s Degree in Finance - CEMA University",
    ],
    specializations: ["Transfer Pricing", "Company valuations"],
  },

  {
    id: 28,
    type: "manager",
    image: socio22,
    practice: ["Tax"],
    name: "Sofía Palucci",
    mail: "sofia.paulucci@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/sofia-victoria-paulucci-65424144/",
    // desc1:
    //   "A Sofía Paulucci is a tax consultant and has high expertise in federal, provincial and municipal tax analysis and review.",
    // desc2:
    //   "Her academic experience encompasses the position of Assistant Professor in the Tax Regime course offered by the University of Buenos Aires. She also conducts training programs for fellow employees in the firm where she currently works.",
    desc1: `Sofía Paulucci is a tax consultant and has high expertise in federal, provincial and municipal tax analysis and review.  `,
    desc2: `Her academic experience encompasses the position of Assistant Professor in the Tax Regime course offered by the University of Buenos Aires. She also conducts training programs for fellow employees in the firm where she currently works.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Public Accountant - University of Buenos Aires"],
    specializations: ["Tax"],
  },
  {
    id: 14,
    type: "manager",
    image: socio21,
    practice: ["Legal"],
    name: "Romina Caceres Villagra",
    mail: "romina.caceresvillagra@ar.Andersen.com",
    linkedin: "https://www.linkedin.com/in/rpcaceresvillagra/",
    desc1: "Romina is a Tax & Legal Manager at Andersen in Argentina.",
    desc2: `She worked for more than 5 years in Techint, one of the biggest holdings in Argentina and she, also, worked for 5 years in PWC.`,
    desc3: `She attends legal training topical courses for lawyers at differents Universities, Professionals Associations or Studies Centers, about contract law, taxes, business, etc.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      `University of Buenos Aires: Master's Degree (in progress) and Post-Graduate Degree (both in tax law); Lawyer specializing in taxation and business law Bachelor's degree.`,
      "Languages: Spanish, English",
    ],
    afiliations: [
      "Bar Association of the City of Buenos Aires",
      "Argentine Association of Fiscal Studies (AAEF).",
    ],
    specializations: [
      "Contracts",
      "M&A",
      "Business law",
      "Commercial law",
      "Government legal compliance programs",
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
    mail: "Francisco.peris@ar.andersen.com",
    linkedin: "https://www.linkedin.com/in/francisco-peris-7a32518a/",
    desc1: `He has vast experience in administrative and tax controversy services, specializing in litigation before Federal, provincials and municipals courts and tax bureaus. As a litigator, he has been involved in several cases that set precedent in administrative and tax matters. ​He is a regular assistant professor at the University of Buenos Aires. ​He has been entitled to litigate before Federal Courts `,
    desc2: "",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Lawyer - University of Buenos Aires",
      "Postgraduate in Tax Law and Bankruptcy Law - University of Buenos Aires",
      "Languages: Spanish, English",
    ],
    afiliations: [
      "Bar Association of the City of Buenos Aires.",
      "Argentine Association of Fiscal Studies​ (AAEF)",
    ],
    specializations: [
      "Tax and Administrative Law​",
      "Litigation",
      "Bankruptcy​",
    ],
  },

  {
    id: 20,
    type: "manager",
    image: socio20,
    practice: ["Customs Law"],
    name: "Pedro Negri Aranguren",
    mail: "pedro.negri@ar.andersen.com",
    linkedin: "https://www.linkedin.com/in/pedro-negri-aranguren-b844b66a/",
    desc1: `He has a Postgraduate Studies in Tax, at the University of Buenos Aires, and a Posgraduate Studies in Customs, at University of Buenos Aires.`,
    desc2: `He gained his experience in the Tax Department of Estudio Negri & Teijeiro Abogados, and in the Foreign Trade and Customs Department of Estudio Bruchou, Fernández Madero & Lombardi, focusing in general foreign trade and customs advice and litigation.`,
    desc3: `In his practice, he provides customs advice during all the steps of import and export process, and represent clients before all customs offices, in any administrative and/or judicial proceedings.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Lawyer - Catholic University of Buenos Aires",
      "Postgraduate Studies in Customs and Tax - University of Buenos Aires ",
    ],
    afiliations: [
      "Argentine Association of Fiscal Studies​ (AAEF)",
      "Argentine Institute of Customs Studies (IAEA)",
    ],
    specializations: ["Customs Law"],
  },
  {
    id: 21,
    type: "manager",
    image: socio23,
    practice: ["Customs Law"],
    name: "Valentina Kripper",
    mail: "valentina.kripper@andersen.com",
    linkedin: "https://www.linkedin.com/in/valentina-kripper-6a00b14a/",
    desc1: `She has been member of the Customs & Foreign Trade Department in renowned Law Firms such us O'Farrell, Bruchou Fernandez Madero & Lombardi, Petersen & Cotter Moine.`,
    desc2: `She has a vast experience counseling the firms about import and export operations; representing the firms in Customs procedures; advising about Exchange Regulations; and dumping Investigations. `,
    desc3: `Since 2008 she has participated in the regular curses and meetings about Customs of the Argentine Association of Fiscal Studies. She participated in the International Meeting on Customs Law, organized early by the mentioned Association, having presented papers in 2011, 2012 and 2015`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Lawyer - National University of Tucuman",
      "Master in International Trade - National University of Tres de Febrero",
    ],
    specializations: ["Customs Law", "Foreign Trade"],
  },
  {
    id: 21,
    type: "manager",
    image: socio16,
    practice: ["Tax"],
    name: "Mariano del Amo",
    mail: "mariano.delamo@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/mariano-federico-del-amo-4983321b",
    desc1: `He has extensive knowledge for both national and provincial tax advice. He stands out for his extensive experience in preparing monthly and annual declared jurisdictions; Preparation of export VAT recoveries, determination of CM and DDJJ CM 05 coefficients, attention to inspections, among others.`,
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Public Accountant - University of Buenos Aires",
      "Postgraduate degree in Tax Specialization - University of Belgrano",
    ],
    specializations: ["Tax"],
  },
  {
    id: 21,
    type: "manager",
    image: sinCara,
    practice: ["Tax"],
    name: "Mariana Vallejo",
    mail: "mariana.vallejo@ar.Andersen.com",
    linkedin: "",
    desc1: `She has extensive experience in tax advice, analysis and review of national and provincial taxes.`,
    desc2: `She has participated in the dictation of internal training courses in the tax area.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Public Accountant - University of La Plata",
      "Languages: Spanish, English",
    ],
    specializations: ["Tax"],
  },
  {
    id: 21,
    type: "manager",
    image: socio17,
    practice: ["Tax"],
    name: "Martín Depaola",
    mail: "martin.depaola@ar.Andersen.com",
    linkedin: "https://linkedin.com/in/martín-depaola-51635892",
    desc1: `He has extensive experience in advising on tax matters, analysis and review of national and provincial taxes acquired in many Studies.`,
    desc2: `He has participated in the dictation of internal training courses in the tax area. Teaching assistant in charge of "Tax Theory and Technique II" and "Tax Regime" at the UBA Faculty of Economic Sciences.`,
    desc3: ``,
    desc4: "",
    desc5: "",
    desc6: "",
    education: [
      "Public Accountant - University of Buenos Aires",
      "Languages: Spanish, English, German",
    ],
    afiliations: ["Argentine Association of Fiscal Studies (AAEF)."],
    specializations: ["Tax"],
  },

  {
    id: 21,
    type: "manager",
    image: socio15,
    practice: ["Tax"],
    name: "Maria José Ermocida",
    mail: "mariajose.ermocida@ar.Andersen.com",
    linkedin: "",
    desc1: `She has extensive experience in advising on tax matters, analysis and review of national and provincial taxes acquired in many Studies. She has participated in the dictation of internal training courses in the tax area.`,
    desc4: "",
    desc5: "",
    desc6: "",
    education: ["Public Accountant - University of Buenos Aires"],
    afiliations: ["Argentine Association of Fiscal Studies (AAEF)"],
    specializations: ["Tax"],
  },
];

export default function ProffessionalsEnglish() {
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
                  <a href="/home-english">Home</a>
                </span>
                <span class="crumb interior">
                  <a href="#">Proffessionals</a>
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
              <h1>Proffessionals</h1>
              <p>Partners and Managers</p>
            </div>
          </div>
        </div>
      </div>

      <div class="headline-scroller orbit" data-orbit>
        <div class="row large-collapse">
          <div class="column">
            <h2>Partners</h2>
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
                            pathname: "/profile",
                            state: socio,
                          }}
                        >
                          <a style={{ color: "#AD0D21" }}>{socio.name}</a>
                        </Link>
                      </td>
                      <td class="areas" style={{ verticalAlign: "middle" }}>
                        {socio.practice.map((p) => (
                          <li>{p}</li>
                        ))}
                        <br />
                      </td>
                      <td class="correo">
                        <img
                          onClick={() =>
                            (window.location.href = `mailto:${socio.mail}`)
                          }
                          style={{ cursor: "pointer" }}
                          src={sobre}
                          alt="juan.fischer@uy.Andersen.com"
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
                  <th>Specializations</th>
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
                            pathname: "/profile",
                            state: socio,
                          }}
                        >
                          <a style={{ color: "#AD0D21" }}>{socio.name}</a>
                        </Link>
                      </td>
                      <td class="areas">
                        {socio.practice.map((p) => (
                          <li>{p}</li>
                        ))}
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
