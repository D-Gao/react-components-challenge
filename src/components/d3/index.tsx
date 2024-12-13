/* eslint-disable react-refresh/only-export-components */
import InteractiveMixChart from "./InteractiveMixChart";
import MapChart from "./MapChart";

const D3 = () => {
  return (
    <div>
      <MapChart />
      <InteractiveMixChart></InteractiveMixChart>
    </div>
  );
};

export default D3;
