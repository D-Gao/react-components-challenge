// MapChart.js
//https://helpcenter.flourish.studio/hc/en-us/articles/8827922078351-How-to-simplify-GeoJSON-files
//jq -c . ./src/components/d3/data/world.json > world.min.json
import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { Feature } from "geojson";
import worldData from "./data/world.min.json";
//import { feature } from 'topojson-client';
//import { countryData } from "./data/countryData";

const MapChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
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
      .geoMercator()
      .scale(width / 2 / Math.PI)
      .translate([width / 2, height / 1.5]);

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
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 100])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .on("zoom", (event) => {
        svg.selectAll(".country").attr("transform", event.transform);
      });

    // Apply zoom to the SVG
    svg.call(zoom);
  }, []);

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      ref={containerRef}
    >
      <svg ref={svgRef}></svg>

      <div
        ref={tooltipRef}
        style={{
          visibility: tooltip.visible ? "visible" : "hidden",
          position: "absolute",
          top: tooltip.visible
            ? Math.min(
                Math.max(tooltip.y, 0), // Prevent overflow at the top
                containerRef.current!.offsetHeight -
                  (tooltipRef.current?.getBoundingClientRect().height ??
                    containerRef.current!.offsetHeight) // Prevent overflow at the bottom
              )
            : 0,
          left: tooltip.visible
            ? Math.min(
                Math.max(tooltip.x, 0), // Prevent overflow on the left
                containerRef.current!.offsetWidth -
                  (tooltipRef.current?.getBoundingClientRect().width ??
                    containerRef.current!.offsetWidth) // Prevent overflow on the right
              )
            : 0,
          padding: "5px 10px",
          background: "#000",
          color: "#fff",
          borderRadius: "3px",
          pointerEvents: "none",
        }}
      >
        {tooltip.content}
      </div>
    </div>
  );
};

export default MapChart;
