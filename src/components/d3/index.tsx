/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
//import ZoomableAreaChart from "./LinearChart copy";
import ZoomableAreaChart from "./LinearChart";
import MapChart from "./MapChart";
import flightsData from "./data/flights.json"; // Convert CSV to JSON and import it
import flightsData2 from "./data/modified_flights.json"; // Convert CSV to JSON and import it
import priceData from "./data/random_prices.json";

const D3 = () => {
  return (
    <div>
      {/* <MapChart /> */}
      {/* <InteractiveMixChart></InteractiveMixChart> */}
      <ZoomableAreaChart
        data={flightsData}
        data2={flightsData2}
        priceData={priceData}
      ></ZoomableAreaChart>
    </div>
  );
};

export default D3;
