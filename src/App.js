import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import OurFirm from "./components/OurFirm";
import Services from "./components/Services";
import LegalServices from "./components/LegalServices";
import ContableServices from "./components/ContableServices";
import Bpo from "./components/Bpo";
import WealthServices from "./components/WealthServices";
import Proffessionals from "./components/Proffessionals";
import Offices from "./components/Offices";
import GlobalPresence from "./components/GlobalPresence";
import WorkWithUs from "./components/WorkWithUs";
import Soc from "./components/Soc";
import News from "./components/News";
import New from "./components/New";
import Contact from "./components/Contact";
import TermsAndConditions from "./components/TermsAndConditions";
import ProfessionalProfile from "./components/ProfessionalProfile";
import HomeEnglish from "./components/english/HomeEnglish";
import BpoEnglish from "./components/english/BpoEnglish";
import ContableServicesEnglish from "./components/english/ContableServicesEnglish";
import ContactEnglish from "./components/english/ContactEnglish";
import GlobalPresenceEnglish from "./components/english/GlobalPresenceEnglish";
import LegalServicesEnglish from "./components/english/LegalServicesEnglish";
import OurFirmEnglish from "./components/english/OurFirmEnglish";
import ProfessionalProfileEnglish from "./components/english/ProfessionalProfileEnglish";
import ProffessionalsEnglish from "./components/english/ProffessionalsEnglish";
import ServicesEnglish from "./components/english/ServicesEnglish";
import WorkWithUsEnglish from "./components/english/WorkWithUsEnglish";
import SocEnglish from "./components/english/SocEnglish";
import WealthServicesEnglish from "./components/english/WealthServicesEnglish";
import TermsEnglish from "./components/english/TermsEnglish";
import OfficesEnglish from "./components/english/OfficesEnglish";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/nuestrafirma" component={OurFirm} exact />
            <Route path="/servicios" component={Services} exact />
            <Route path="/servicioslegales" component={LegalServices} exact />
            <Route
              path="/servicioscontables"
              component={ContableServices}
              exact
            />
            <Route path="/sociedades" component={Soc} exact />
            <Route path="/bpo" component={Bpo} exact />
            <Route path="/servicioswealth" component={WealthServices} exact />
            <Route path="/profesionales" component={Proffessionals} exact />
            <Route path="/perfil" component={ProfessionalProfile} />
            <Route path="/oficinas" component={Offices} exact />
            <Route path="/noticias" component={News} exact />
            <Route path="/noticia/:id" component={New} exact />
            <Route path="/presenciaGlobal" component={GlobalPresence} exact />
            <Route path="/trabaja" component={WorkWithUs} exact />
            <Route path="/contacto" component={Contact} exact />
            <Route path="/terminos" component={TermsAndConditions} exact />
            <Route path="/terms" component={TermsEnglish} exact />
            <Route path="/home-english" component={HomeEnglish} exact />
            <Route
              path="/contable-services"
              component={ContableServicesEnglish}
              exact
            />
            <Route path="/offices" component={OfficesEnglish} exact />
            <Route path="/profile" component={ProfessionalProfileEnglish} />
            <Route path="/contact" component={ContactEnglish} exact />
            <Route
              path="/globalpresence"
              component={GlobalPresenceEnglish}
              exact
            />
            <Route path="/bpo-english" component={BpoEnglish} exact />
            <Route
              path="/legalservices"
              component={LegalServicesEnglish}
              exact
            />
            <Route path="/ourfirm" component={OurFirmEnglish} exact />
            <Route
              path="/professionalprofile"
              component={ProfessionalProfileEnglish}
              exact
            />
            <Route
              path="/proffessionals"
              component={ProffessionalsEnglish}
              exact
            />
            <Route path="/services-english" component={ServicesEnglish} exact />
            <Route path="/corporations" component={SocEnglish} exact />
            <Route path="/work-english" component={WorkWithUsEnglish} exact />
            <Route path="/wealth" component={WealthServicesEnglish} exact />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
