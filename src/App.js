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
import Contact from "./components/Contact";
import TermsAndConditions from "./components/TermsAndConditions";
import ProfessionalProfile from "./components/ProfessionalProfile";

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
            <Route path="/presenciaGlobal" component={GlobalPresence} exact />
            <Route path="/trabaja" component={WorkWithUs} exact />
            <Route path="/contacto" component={Contact} exact />
            <Route path="/terminos" component={TermsAndConditions} exact />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
