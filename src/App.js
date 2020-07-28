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
import ConsultorServices from "./components/ConsultorServices";
import WealthServices from "./components/WealthServices";
import Proffessionals from "./components/Proffessionals";
import Offices from "./components/Offices";
import GlobalPresence from "./components/GlobalPresence";
import WorkWithUs from "./components/WorkWithUs";
import News from "./components/News";
import Contact from "./components/Contact";

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
            <Route
              path="/serviciosconsultoria"
              component={ConsultorServices}
              exact
            />
            <Route path="/servicioswealth" component={WealthServices} exact />
            <Route path="/profesionales" component={Proffessionals} exact />
            <Route path="/oficinas" component={Offices} exact />
            <Route path="/noticias" component={News} exact />
            <Route path="/presenciaGlobal" component={GlobalPresence} exact />
            <Route path="/trabaja" component={WorkWithUs} exact />
            <Route path="/contacto" component={Contact} exact />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
