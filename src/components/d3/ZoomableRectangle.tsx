import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const ZoomableRectangle = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Select the SVG element
    const svg = d3.select(svgRef.current);

    // Add a group to apply zoom transformations
    const zoomGroup = svg.append("g");

    // Append a rectangle inside the group
    zoomGroup
      .append("rect")
      .attr("x", 300)
      .attr("y", 250)
      .attr("width", 200)
      .attr("height", 100)
      .attr("fill", "steelblue");

    // Define zoom behavior
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 5]) // Allow zoom between 1x and 5x
      .on("zoom", (event) => {
        console.log(event);
        const cx = 800 / 2;
        const cy = 600 / 2;
        //zoomGroup.attr("transform", event.transform); // Apply zoom transform
        zoomGroup.attr(
          "transform",
          `translate(${cx}, ${cy}) scale(${
            event.transform.k
          }) translate(${-cx}, ${-cy})`
        );
      });

    // Apply zoom to the SVG
    svg.call(zoom);

    // Cleanup on component unmount
    return () => {
      svg.selectAll("*").remove();
      svg.on(".zoom", null); // Remove zoom event listeners
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <svg
        ref={svgRef}
        width={800}
        height={600}
        style={{ border: "1px solid black" }}
      ></svg>
    </div>
  );
};

export default ZoomableRectangle;
