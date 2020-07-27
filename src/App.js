import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import OurFirm from "./components/OurFirm";
import Services from "./components/Services";
import Proffessionals from "./components/Proffessionals";
import Offices from "./components/Offices";
import GlobalPresence from "./components/GlobalPresence";
import WorkWithUs from "./components/WorkWithUs";
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
            <Route path="/profesionales" component={Proffessionals} exact />
            <Route path="/oficinas" component={Offices} exact />
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
