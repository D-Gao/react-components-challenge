// MapChart.js
import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { Feature } from "geojson";
import worldData from "./data/world.json";
//import { feature } from 'topojson-client';
//import { countryData } from "./data/countryData";

const MapChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: "",
  });

  useEffect(() => {
    if (!svgRef.current) return;
    const width = 800;
    const height = 450;
    // Select SVG
    const svg = d3
      .select<SVGSVGElement, unknown>(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("width", "100%")
      .style("height", "auto")
      .style("background", "#333")
      .style("border", "1px solid #000");

    // Projection and Path
    const projection = d3
      .geoOrthographic()
      .scale(width / 1.3 / Math.PI)
      .translate([width / 2, height / 2])
      .clipAngle(90);

    const pathGenerator = d3.geoPath().projection(projection);

    // Convert TopoJSON to GeoJSON
    // const countries = feature(worldData, worldData.objects.countries).features;
    // If alreadt be a GeoJson
    const countries = worldData.features as unknown as Feature[];

    // Bind data and create paths
    svg
      .selectAll(".country")
      .data(countries)
      .join("path")
      .attr("class", "country")
      .attr("d", pathGenerator)
      .attr("fill", "#555")
      .attr("stroke", "#222")
      .on("mouseenter", (event, d) => {
        const countryName = d?.properties?.name;
        /*  const info = countryData[countryName] ? countryData[countryName].value : "No Data"; */

        setTooltip({
          visible: true,
          x: event.pageX,
          y: event.pageY,
          content: `${countryName}`,
        });
      })
      .on("mousemove", (event) => {
        // Update tooltip position as mouse moves
        setTooltip((t) => ({ ...t, x: event.pageX + 10, y: event.pageY + 10 }));
      })
      .on("mouseleave", () => {
        setTooltip((t) => ({ ...t, visible: false }));
      });

    // Define zoom behavior
    /* const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        svg.selectAll(".country").attr("transform", event.transform);
      }); */

    // Apply zoom to the SVG
    //svg.call(zoom);

    let lambda = 0; // initial rotation longitude
    let phi = 0; // initial rotation latitude
    let previousPos: number[] = [];

    const drag = d3
      .drag<SVGSVGElement, unknown>()
      .on("start", (event) => {
        previousPos = [event.x, event.y];
      })
      .on("drag", (event) => {
        const dx = event.x - previousPos[0];
        const dy = event.y - previousPos[1];

        // Adjust these factors to control rotation speed
        lambda += dx * 0.5;
        phi -= dy * 0.5;

        // Update projection rotation
        projection.rotate([lambda, phi]);

        // Redraw paths
        svg
          .selectAll(".country")
          .attr("d", (d) => pathGenerator(d as d3.GeoPermissibleObjects) || "");

        previousPos = [event.x, event.y];
      });

    svg.call(drag);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <svg ref={svgRef}></svg>
      {tooltip.visible && (
        <div
          style={{
            position: "absolute",
            top: tooltip.y,
            left: tooltip.x,
            padding: "5px 10px",
            background: "#000",
            color: "#fff",
            borderRadius: "3px",
            pointerEvents: "none",
          }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default MapChart;