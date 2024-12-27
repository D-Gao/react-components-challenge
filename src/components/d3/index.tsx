/* eslint-disable react-refresh/only-export-components */
import ZoomableAreaChart from "./LinearChart";
import flightsData from "./data/flights.json"; // Convert CSV to JSON and import it
import flightsData2 from "./data/modified_flights.json"; // Convert CSV to JSON and import it
const D3 = () => {
  return (
    <div>
      {/* <MapChart /> */}
      {/* <InteractiveMixChart></InteractiveMixChart> */}
      <ZoomableAreaChart
        data={flightsData}
        data2={flightsData2}
      ></ZoomableAreaChart>
    </div>
  );
};

export default D3;
