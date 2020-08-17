import React, { useState, useEffect } from "react";
import ScriptTag from "react-script-tag";
import { Helmet } from "react-helmet";

export default function Offices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div class="main-content">
        <ScriptTag src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
        <Helmet>
          <link
            rel="stylesheet"
            href="https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/ammap.css"
          />
          <link
            rel="stylesheet"
            href="https://global.andersen.com/assets/scripts/mapc/atmap.css"
            type="text/css"
          ></link>
        </Helmet>
        <ScriptTag
          src="https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/ammap.js"
          type="text/javascript"
        />

        <ScriptTag
          src="https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/maps/js/worldLow.js"
          type="text/javascript"
        />

        <ScriptTag
          src="https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/plugins/responsive/responsive.min.js"
          type="text/javascript"
        />

        <ScriptTag
          src="https://andersen.com/offices/united_states_offices"
          type="text/javascript"
        />

        <ScriptTag
          src="https://andersen.com/offices/countries_list"
          type="text/javascript"
        />

        <ScriptTag
          type="text/javascript"
          src="https://andersen.com/offices/world_map"
        />

        <div id="map-container">
          <div class="map-filter-form">
            <form name="map-filter" id="map-filter">
              <h3>Selecciona un País</h3>
              <p>Se proporcionará la dirección de cada oficina.</p>
              <p>
                <select name="country" id="country_select">
                  <option value="World">Seleccionar</option>
                </select>
                <ScriptTag
                  type="text/javascript"
                  src="https://global.andersen.com/assets/scripts/mapc/map-dropdown-filter.js"
                />
              </p>
            </form>
          </div>
          <div id="mapdiv"></div>
          <form name="formx">
            <input type="hidden" id="start_country" value="AR" />
          </form>
          <div id="individual_offices"></div>
        </div>
      </div>
      <div class="door"></div>

      <ScriptTag
        src="https://global.andersen.com/assets/scripts/mapc/indiv_offices.js"
        type="text/javascript"
      />

      <ScriptTag
        src="https://global.andersen.com/assets/scripts/mapc/indiv_offices2.js"
        type="text/javascript"
      />

      <ScriptTag
        src="https://global.andersen.com/vendor/twbs/bootstrap/dist/js/bootstrap.min.js"
        type="text/javascript"
      />

      <ScriptTag src="https://global.andersen.com/assets/scripts/Semantic-UI-master/dist/semantic.min.js" />

      {/* <ScriptTag
        src="https://global.andersen.com/assets/js/flip.min.js"
        type="text/javascript"
      /> */}
      <ScriptTag
        src="https://global.andersen.com/assets/js/main.js"
        type="text/javascript"
      />
    </div>
  );
}
