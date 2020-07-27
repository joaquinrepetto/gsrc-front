import React from "react";
import { Helmet } from "react-helmet";

export default function Offices() {
  return (
    <div>
      <Helmet>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      </Helmet>
      <link
        rel="stylesheet"
        href="https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/ammap.css"
      />
      <link
        rel="stylesheet"
        href="https://global.andersen.com/assets/scripts/mapc/atmap.css"
        type="text/css"
      />
      <Helmet>
        <script
          src="https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/ammap.js"
          type="text/javascript"
        ></script>
      </Helmet>
      {/* <!-- map file should be included after ammap.js --> */}
      <Helmet>
        {" "}
        <script
          src="https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/maps/js/worldLow.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <Helmet>
        <script
          src="https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/plugins/responsive/responsive.min.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <Helmet>
        <script
          src="https://andersen.com/offices/united_states_offices"
          type="text/javascript"
        ></script>
      </Helmet>
      <Helmet>
        <script
          src="https://andersen.com/offices/countries_list"
          type="text/javascript"
        ></script>
      </Helmet>
      <Helmet>
        <script
          type="text/javascript"
          src="https://andersen.com/offices/world_map"
        ></script>
      </Helmet>

      {/* <!-- MAP CONTAINER --> */}
      <div id="map-container">
        <div class="map-filter-form">
          <form name="map-filter" id="map-filter">
            <h3>Select a Country</h3>
            <p>This will provide the address for each location.</p>
            <p>
              <select name="country" id="country_select">
                <option value="World">Choose</option>
              </select>
              <Helmet>
                <script
                  type="text/javascript"
                  src="https://global.andersen.com/assets/scripts/mapc/map-dropdown-filter.js"
                ></script>
              </Helmet>
            </p>
          </form>
        </div>
        <div id="mapdiv"></div>
        <form name="formx">
          <input type="hidden" id="start_country" value="" />
        </form>
        <div id="individual_offices"></div>
      </div>

      <Helmet>
        <script
          src="https://global.andersen.com/assets/scripts/mapc/indiv_offices.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <Helmet>
        {" "}
        <script
          src="https://global.andersen.com/assets/scripts/mapc/indiv_offices2.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <Helmet>
        <script
          src="https://global.andersen.com/vendor/twbs/bootstrap/dist/js/bootstrap.min.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <Helmet>
        <script src="https://global.andersen.com/assets/scripts/Semantic-UI-master/dist/semantic.min.js"></script>
      </Helmet>
      <Helmet>
        <script
          src="https://global.andersen.com/assets/js/flip.min.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <Helmet>
        <script
          src="https://global.andersen.com/assets/js/main.js"
          type="text/javascript"
        ></script>
      </Helmet>

      <div class="door"></div>
    </div>
  );
}
