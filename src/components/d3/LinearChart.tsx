/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

type DataPoint = {
  date: string;
  value: number;
};

type ZoomableAreaChartProps = {
  data: DataPoint[];
};

const ZoomableAreaChart: React.FC<ZoomableAreaChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    // Parse the data
    const parsedData = data.map((d) => ({
      date: new Date(d.date),
      value: d.value,
    }));
    const breakpoint = new Date("2001-09-01");
    const normalData = parsedData.filter((d) => d.date <= breakpoint);
    const dashedData = parsedData.filter((d) => d.date >= breakpoint);

    // Chart dimensions
    const width = 928;
    const height = 500;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 30;

    // Scales
    const x = d3
      .scaleUtc()
      .domain(d3.extent(parsedData, (d) => d.date) as [Date, Date])
      .range([marginLeft, width - marginRight]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(parsedData, (d) => d.value) ?? 0])
      .nice()
      .range([height - marginBottom, marginTop]);

    // Area generator
    /* const areaGenerator = d3
      .area<{ date: Date; value: number }>()
      .curve(d3.curveStepAfter)
      .x((d) => x(d.date)!)
      .y0(y(0))
      .y1((d) => y(d.value)); */

    // Linear generator
    const lineGenerator = d3
      .line<{ date: Date; value: number }>()
      .curve(d3.curveLinear)
      .x((d) => x(d.date)!)
      .y((d) => y(d.value));

    // SVG setup
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .style("width", "100%")
      .style("height", "auto")
      .attr("style", "max-width: 100%; height: auto;");

    // Clip path
    const clipId = `clip-linear`;
    svg
      .append("clipPath")
      .attr("id", clipId)
      .append("rect")
      .attr("x", marginLeft)
      .attr("y", marginTop)
      .attr("width", width - marginLeft - marginRight)
      .attr("height", height - marginTop - marginBottom);

    // Area
    /* const path = svg
      .append("path")
      .datum(parsedData)
      .attr("clip-path", `url(#${clipId})`)
      .attr("fill", "steelblue")
      .attr("d", areaGenerator); */

    /* const path = svg
      .append("path")
      .datum(parsedData)
      .attr("clip-path", `url(#${clipId})`)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", areaGenerator); */

    // Normal line
    const pathNormal = svg
      .append("path")
      .datum(normalData)
      .attr("clip-path", `url(#${clipId})`)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", lineGenerator);

    // Dashed line
    const pathDashed = svg
      .append("path")
      .datum(dashedData)
      .attr("clip-path", `url(#${clipId})`)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "5,5")
      .attr("d", lineGenerator);
    /* .call((path) => {
        const length = path.node()?.getTotalLength() ?? 0;
        path
          .attr("stroke-dasharray", `${length},${length}`)
          .attr("stroke-dashoffset", length);
      }); // Set initial dash state */

    const pathTotal = svg
      .append("path")
      .datum(parsedData)
      .attr("clip-path", `url(#${clipId})`)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .attr("d", lineGenerator);

    // Axes
    const xAxis = (
      g: d3.Selection<SVGGElement, unknown, null, undefined>,
      x: d3.ScaleTime<number, number, never>
    ) =>
      g.attr("transform", `translate(0,${height - marginBottom})`).call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );

    const gx = svg.append("g").call(xAxis, x);

    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(null, "s"))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .select(".tick:last-of-type text")
          .clone()
          .attr("x", 3)
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .text("Flights")
      );

    // Zoom behavior
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 512])
      .extent([
        [marginLeft, 0],
        [width - marginRight, height],
      ])
      .translateExtent([
        [marginLeft, -Infinity],
        [width - marginRight, Infinity],
      ])
      .on("zoom", (event) => {
        const xz = event.transform.rescaleX(x);
        /* path.attr(
          "d",
          areaGenerator.x((d) => xz(d.date)!)
        ); */
        pathNormal.attr(
          "d",
          lineGenerator.x((d) => xz(d.date)!)
        );
        pathDashed.attr(
          "d",
          lineGenerator.x((d) => xz(d.date)!)
        );

        pathTotal.attr(
          "d",
          lineGenerator.x((d) => xz(d.date)!)
        );

        /* svg
          .selectAll("path")
          .attr("d", (d, i) =>
            i === 0
              ? lineGenerator.x((d) => xz(d.date)!)
              : lineGenerator.x((d) => xz(d.date)!)
          ); */
        gx.call(xAxis, xz);
      });

    // Initial animation

    const animatePath = (
      path: d3.Selection<SVGPathElement, any, null, undefined>
    ) => {
      const length = path.node()?.getTotalLength() ?? 0;
      path
        .attr("stroke-dasharray", `${length},${length}`)
        .attr("stroke-dashoffset", 0)
        .transition()
        .duration(3000)
        .ease(d3.easeCubicInOut)
        .attr("stroke-dashoffset", -length)
        .remove();
    };

    animatePath(pathTotal);

    svg
      .call(zoom)
      .transition()
      .duration(750)
      .call(zoom.scaleTo, 4, [x(new Date("2001-09-01"))!, 0]);

    // Cleanup function to remove the chart
    return () => {
      svg.selectAll("*").remove();
    };
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default ZoomableAreaChart;
