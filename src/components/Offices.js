import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import useScript from "../utils/useScript";

export default function Offices() {
  useEffect(() => {
    // 1
    const script = document.createElement("script");

    script.src =
      "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js";
    script.async = true;

    document.body.appendChild(script);

    // 2
    const script2 = document.createElement("script");

    script2.src =
      "https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/ammap.js";
    script2.async = true;

    document.body.appendChild(script2);

    // 3
    const script3 = document.createElement("script");

    script3.src =
      "https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/maps/js/worldLow.js";
    script3.async = true;

    document.body.appendChild(script3);

    // 4
    const script4 = document.createElement("script");

    script4.src =
      "https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/plugins/responsive/responsive.min.js";
    script4.async = true;

    document.body.appendChild(script4);

    // 5
    const script5 = document.createElement("script");

    script5.src = "https://andersen.com/offices/united_states_offices";
    script5.async = true;

    document.body.appendChild(script5);

    // 6
    const script6 = document.createElement("script");

    script6.src = "https://andersen.com/offices/countries_list";
    script6.async = true;

    document.body.appendChild(script6);

    // 7
    const script7 = document.createElement("script");

    script7.src = "https://andersen.com/offices/countries_list";
    script7.async = true;

    document.body.appendChild(script7);

    // 8
    const script8 = document.createElement("script");

    script8.src =
      "https://global.andersen.com/assets/scripts/mapc/map-dropdown-filter.js";
    script8.async = true;

    document.body.appendChild(script8);

    // 9
    const script9 = document.createElement("script");

    script9.src =
      "https://global.andersen.com/assets/scripts/mapc/indiv_offices.js";
    script9.async = true;

    document.body.appendChild(script9);

    // 10
    const script10 = document.createElement("script");

    script10.src =
      "https://global.andersen.com/assets/scripts/mapc/indiv_offices2.js";
    script10.async = true;

    document.body.appendChild(script10);

    // 11
    const script11 = document.createElement("script");

    script11.src =
      "https://global.andersen.com/vendor/twbs/bootstrap/dist/js/bootstrap.min.js";
    script11.async = true;

    document.body.appendChild(script11);

    // 12
    const script12 = document.createElement("script");

    script12.src =
      "https://global.andersen.com/assets/scripts/Semantic-UI-master/dist/semantic.min.js";
    script12.async = true;

    document.body.appendChild(script12);

    // 13
    const script13 = document.createElement("script");

    script13.src = "https://global.andersen.com/assets/js/flip.min.js";
    script13.async = true;

    document.body.appendChild(script13);

    // 14
    const script14 = document.createElement("script");

    script14.src = "https://global.andersen.com/assets/js/main.js";
    script14.async = true;

    document.body.appendChild(script14);
  }, []);

  return (
    <div>
      <div class="main-content">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://global.andersen.com/assets/scripts/ammap_3.20.17/ammap/ammap.css"
          />
        </Helmet>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://global.andersen.com/assets/scripts/mapc/atmap.css"
            type="text/css"
          />
        </Helmet>

        {/* <!-- MAP CONTAINER --> */}
        <div id="map-container">
          <div id="map-container">
            <div class="map-filter-form">
              <form name="map-filter" id="map-filter">
                <h3>Select a Country</h3>
                <p>This will provide the address for each location.</p>
                <p>
                  <select name="country" id="country_select">
                    <option value="World">Choose</option>
                  </select>
                </p>
              </form>
            </div>
            <div id="mapdiv"></div>
            <form name="formx">
              <input type="hidden" id="start_country" value="" />
            </form>
            <div id="individual_offices"></div>
          </div>
        </div>
      </div>
      <div class="door"></div>
    </div>
  );
}
