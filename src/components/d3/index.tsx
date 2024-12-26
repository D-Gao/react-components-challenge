/* eslint-disable react-refresh/only-export-components */
import ZoomableAreaChart from "./LinearChart";
import flightsData from "./data/flights.json"; // Convert CSV to JSON and import it
const D3 = () => {
  return (
    <div>
      {/* <MapChart /> */}
      {/* <InteractiveMixChart></InteractiveMixChart> */}
      <ZoomableAreaChart data={flightsData}></ZoomableAreaChart>
    </div>
  );
};

export default D3;
