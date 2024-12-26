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
    const areaGenerator = d3
      .area<{ date: Date; value: number }>()
      .curve(d3.curveStepAfter)
      .x((d) => x(d.date)!)
      .y0(y(0))
      .y1((d) => y(d.value));

    // SVG setup
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", width)
      .attr("height", height)
      .attr("style", "max-width: 100%; height: auto;");

    // Clip path
    const clipId = `clip-${Math.random().toString(36).substr(2, 9)}`;
    svg
      .append("clipPath")
      .attr("id", clipId)
      .append("rect")
      .attr("x", marginLeft)
      .attr("y", marginTop)
      .attr("width", width - marginLeft - marginRight)
      .attr("height", height - marginTop - marginBottom);

    // Area
    const path = svg
      .append("path")
      .datum(parsedData)
      .attr("clip-path", `url(#${clipId})`)
      .attr("fill", "steelblue")
      .attr("d", areaGenerator);

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
      .scaleExtent([1, 32])
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
        path.attr(
          "d",
          areaGenerator.x((d) => xz(d.date)!)
        );
        gx.call(xAxis, xz);
      });

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
