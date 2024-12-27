/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

type DataPoint = {
  date: string;
  value: number;
};

type PricePoint = {
  date: string;
  price: number;
};

type ZoomableAreaChartProps = {
  data: DataPoint[];
  data2: DataPoint[];
  priceData: PricePoint[];
};

const ZoomableAreaChart: React.FC<ZoomableAreaChartProps> = ({
  data = [],
  data2 = [],
  priceData = [],
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    // Parse the data
    const parsedData = data.map((d) => ({
      date: new Date(d.date),
      value: d.value,
    }));

    const parsedData2 = data2.map((d) => ({
      date: new Date(d.date),
      value: d.value,
    }));

    const parsedPriceData = priceData.map((d) => ({
      date: new Date(d.date),
      value: d.price,
    }));

    const breakpoint = new Date("2001-09-01");
    const normalData = parsedData.filter((d) => d.date <= breakpoint);
    const dashedData = parsedData.filter((d) => d.date >= breakpoint);

    const normalData2 = parsedData2.filter((d) => d.date <= breakpoint);
    const dashedData2 = parsedData2.filter((d) => d.date >= breakpoint);

    // Chart dimensions
    const width = 928;
    const height = 500;
    const marginTop = 20;
    const marginRight = 40;
    const marginBottom = 30;
    const marginLeft = 40;

    // Scales
    /*  const x = d3
      .scaleUtc()
      .domain(d3.extent(parsedData, (d) => d.date) as [Date, Date])
      .range([marginLeft, width - marginRight]); */

    const x = d3
      .scaleUtc()
      .domain([
        d3.min([...parsedData, ...parsedData2], (d) => d.date)!, // Minimum date from both datasets
        d3.max([...parsedData, ...parsedData2], (d) => d.date)!, // Maximum date from both datasets
      ])
      .range([marginLeft, width - marginRight]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(parsedData, (d) => d.value) ?? 0])
      .nice()
      .range([height - marginBottom, marginTop]);

    const y2 = d3
      .scaleLinear()
      .domain([0, d3.max(parsedData2, (d) => d.value) ?? 0])
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

    const lineGenerator2 = d3
      .line<{ date: Date; value: number }>()
      .curve(d3.curveLinear)
      .x((d) => x(d.date)!)
      .y((d) => y2(d.value));

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

    const pathNormal2 = svg
      .append("path")
      .datum(normalData2)
      .attr("clip-path", `url(#${clipId})`)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 1.5)
      .attr("d", lineGenerator2);

    // Dashed line
    const pathDashed2 = svg
      .append("path")
      .datum(dashedData2)
      .attr("clip-path", `url(#${clipId})`)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "5,5")
      .attr("d", lineGenerator2);

    const pathTotal2 = svg
      .append("path")
      .datum(parsedData2)
      .attr("clip-path", `url(#${clipId})`)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .attr("d", lineGenerator2);

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
          .text("Social Interaction")
      );

    svg
      .append("g")
      .attr("transform", `translate(${width - marginRight}, 0)`)
      .call(d3.axisRight(y2).ticks(null, "s"))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .select(".tick:last-of-type text")
          .clone()
          .attr("x", -60)
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .text("Streamings")
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

        pathNormal2.attr(
          "d",
          lineGenerator2.x((d) => xz(d.date)!)
        );
        pathDashed2.attr(
          "d",
          lineGenerator2.x((d) => xz(d.date)!)
        );

        pathTotal2.attr(
          "d",
          lineGenerator2.x((d) => xz(d.date)!)
        );

        overlayRect.on(
          "mousemove",
          function (this: SVGRectElement, event: MouseEvent) {
            //returns corresponding value from the domain
            const correspondingDate = xz.invert(d3.pointer(event, this)[0]);
            //gets insertion point
            const i = bisectDate(parsedData, correspondingDate);
            const d0 = parsedData[i - 1];
            const d1 = parsedData[i];

            const p0 = parsedData2[i - 1];
            const p1 = parsedData2[i];

            const currentPoint =
              correspondingDate.getTime() - d0["date"].getTime() >
              d1["date"].getTime() - correspondingDate.getTime()
                ? d1
                : d0;

            const currentPoint2 =
              correspondingDate.getTime() - p0["date"].getTime() >
              p1["date"].getTime() - correspondingDate.getTime()
                ? p1
                : p0;

            focus.attr(
              "transform",
              `translate(${xz(currentPoint["date"])}, ${y(
                currentPoint["value"]
              )})`
            );

            focus2.attr(
              "transform",
              `translate(${xz(currentPoint2["date"])}, ${y2(
                currentPoint2["value"]
              )})`
            );

            focus
              .select("line.x")
              .attr("x1", 0)
              .attr("x2", -xz(currentPoint["date"]) + marginLeft)
              .attr("y1", 0)
              .attr("y2", 0);
            focus
              .select("line.y")
              .attr("x1", 0)
              .attr("x2", 0)
              .attr("y1", 0)
              .attr("y2", height - y(currentPoint["value"]) - marginBottom);

            focus2
              .select("line.x")
              .attr("x1", 0)
              .attr("x2", width - xz(currentPoint["date"]) - marginRight)
              .attr("y1", 0)
              .attr("y2", 0);
            focus2
              .select("line.y")
              .attr("x1", 0)
              .attr("x2", 0)
              .attr("y1", 0)
              .attr("y2", height - y2(currentPoint["value"]) - marginBottom);

            updateLegends(currentPoint);
          }
        );
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
    animatePath(pathTotal2);

    // renders x and y crosshair
    const focus = svg
      .append("g")
      .attr("class", "focus")
      .style("display", "none");
    focus.append("circle").attr("r", 4.5).attr("fill", "white");
    focus.append("line").classed("x", true);
    focus.append("line").classed("y", true);

    const focus2 = svg
      .append("g")
      .attr("class", "focus2")
      .style("display", "none");

    focus2.append("circle").attr("r", 4.5).attr("fill", "white");
    focus2.append("line").classed("x", true);
    focus2.append("line").classed("y", true);

    const overlayRect = svg
      .append("rect")
      .attr("class", "overlay")
      .attr("x", marginLeft)
      .attr("y", marginTop)
      .attr("width", width - marginLeft - marginRight) // Match clip path width
      .attr("height", height - marginTop - marginBottom) // Match clip path height
      .on("mouseover", () => {
        focus.style("display", null);
        focus2.style("display", null);
      })
      .on("mouseout", () => {
        focus.style("display", "none");
        focus2.style("display", "none");
      });
    /* .on("mousemove", generateCrosshair); */
    d3.select(".overlay").style("fill", "none");
    d3.select(".overlay").style("pointer-events", "all");
    d3.selectAll(".focus line").style("fill", "none");
    d3.selectAll(".focus line").style("stroke", "#67809f");
    d3.selectAll(".focus line").style("stroke-width", "1.5px");
    d3.selectAll(".focus line").style("stroke-dasharray", "3 3");

    d3.selectAll(".focus2 line").style("fill", "none");
    d3.selectAll(".focus2 line").style("stroke", "#67809f");
    d3.selectAll(".focus2 line").style("stroke-width", "1.5px");
    d3.selectAll(".focus2 line").style("stroke-dasharray", "3 3");

    const bisectDate = d3.bisector(
      (d: { date: Date; value: number }) => d.date
    ).left;
    /*  function generateCrosshair(this: SVGRectElement, event: MouseEvent) {
      //returns corresponding value from the domain
      const correspondingDate = x.invert(d3.pointer(event, this)[0]);
      //gets insertion point
      const i = bisectDate(parsedData, correspondingDate);
      const d0 = parsedData[i - 1];
      const d1 = parsedData[i];
      const currentPoint =
        correspondingDate.getTime() - d0["date"].getTime() >
        d1["date"].getTime() - correspondingDate.getTime()
          ? d1
          : d0;

      focus.attr(
        "transform",
        `translate(${x(currentPoint["date"])}, ${y(currentPoint["value"])})`
      );
      focus
        .select("line.x")
        .attr("x1", 0)
        .attr("x2", -x(currentPoint["date"]))
        .attr("y1", 0)
        .attr("y2", 0);
      focus
        .select("line.y")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", 0)
        .attr("y2", height - y(currentPoint["value"]));
      updateLegends(currentPoint);
    } */

    svg
      .call(zoom)
      .transition()
      .duration(750)
      .call(zoom.scaleTo, 4, [x(new Date("2001-09-01"))!, 0]);

    const updateLegends = (currentData: { date: Date; value: number }) => {
      d3.selectAll(".lineLegend").remove();
      const legendKeys = Object.keys(data[0]);
      const lineLegend = svg
        .selectAll(".lineLegend")
        .data(legendKeys)
        .enter()
        .append("g")
        .attr("class", "lineLegend")
        .attr("transform", (_d, i) => {
          return `translate(${marginLeft}, ${height - 20 - (i + 1) * 30})`;
        });
      lineLegend
        .append("text")
        .text((d) => {
          if (d === "date") {
            return `${d}: ${currentData[d].toLocaleDateString()}`;
          } else {
            return `${d}: ${currentData["value"]}`;
          }
        })
        .style("fill", "white")
        .attr("transform", "translate(15,9)");
    };

    // Cleanup function to remove the chart
    return () => {
      svg.selectAll("*").remove();
    };
  }, [data, data2, priceData]);

  return (
    <div className=" relative w-full h-auto">
      <svg ref={svgRef}></svg>
      {/* <div
        className=" justify-center items-center gap-2"
        style={{
          position: "absolute",
          display: "flex",
          top: "10px", // Position text relative to the container
          right: "40px",
          fontSize: "14px", // Constant font size
          fontWeight: "bold",
          color: "white",
        }}
      >
        <div className="w-4 h-3 bg-yellow-300"></div>
        <p>=</p>
        <p>Daily Price Track</p>
      </div> */}
    </div>
  );
};

export default ZoomableAreaChart;
