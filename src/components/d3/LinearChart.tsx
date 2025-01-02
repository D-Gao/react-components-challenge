/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef } from "react";
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
  scale?: number;
};

const ZoomableAreaChart: React.FC<ZoomableAreaChartProps> = ({
  data = [],
  data2 = [],
  priceData = [],
  scale = 2,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  /* const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  }); */

  const parsedDataList = useMemo(() => {
    return [
      data.map((d) => ({ date: new Date(d.date), value: d.value })),
      data2.map((d) => ({ date: new Date(d.date), value: d.value })),
    ];
  }, [data, data2]);

  const breakpoint = useMemo(() => {
    //this should be the current date
    return new Date("2001-09-01");
  }, []);

  const parsedPriceData = useMemo(() => {
    return priceData.map((d) => ({
      date: new Date(d.date),
      value: d.price,
    }));
  }, [priceData]);

  /* useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    const handleResize = () => {
      clearTimeout(timeoutId); // Clear the previous timer
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 200); // Debounce delay in milliseconds
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      clearTimeout(timeoutId); // Ensure the timer is cleared
      window.removeEventListener("resize", handleResize);
    };
  }, []); */

  useEffect(() => {
    if (!svgRef.current) return;

    // Chart dimensions
    const width = 928 / scale; //windowSize.width >= 648 ? 928 : 928 / 2;
    const height = 500 / scale; //windowSize.width >= 648 ? 500 : 500 / 2;
    const margin = { top: 20, right: 40, bottom: 30, left: 40 };

    const verticalLineY = 100;
    const rectX = -50;
    const rectWidth = 100;
    const rectHeight = 30;

    const xScale = d3
      .scaleUtc()
      .domain([
        d3.min(parsedDataList.flat(), (d) => d.date)!,
        d3.max(parsedDataList.flat(), (d) => d.date)!,
      ])
      .range([margin.left, width - margin.right]);

    const yScales = parsedDataList.map((parsedData) =>
      d3
        .scaleLinear()
        .domain([0, d3.max(parsedData, (d) => d.value) ?? 0])
        .nice()
        .range([height - margin.bottom, margin.top])
    );

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
      .attr("x", margin.left)
      .attr("y", margin.top)
      .attr("width", width - margin.left - margin.right)
      .attr("height", height - margin.top - margin.bottom);

    // Function to split data by breakpoint
    const splitByBreakpoint = (
      data: { date: Date; value: number }[],
      breakpoint: Date
    ) => ({
      before: data.filter((d) => d.date <= breakpoint),
      after: data.filter((d) => d.date >= breakpoint),
    });

    // Function to create paths
    const createPath = (
      svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
      data: { date: Date; value: number }[],
      lineGenerator: d3.Line<{ date: Date; value: number }>,
      strokeColor: string,
      strokeDasharray: string | null = null
    ) => {
      const path = svg
        .append("path")
        .attr("clip-path", `url(#${clipId})`)
        .datum(data)
        .attr("class", "line-path")
        .attr("fill", "none")
        .attr("stroke", strokeColor)
        .attr("stroke-width", 1)
        .attr("d", lineGenerator);

      if (strokeDasharray) {
        path.attr("stroke-dasharray", strokeDasharray);
      }

      return path;
    };

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

    const coverPath: any[] = [];
    const linePath: any[] = [];
    // Generate lines and paths
    parsedDataList.forEach((parsedData, index) => {
      const yScale = yScales[index];
      const color = index === 0 ? "steelblue" : "red";

      const lineGenerator = d3
        .line<{ date: Date; value: number }>()
        .curve(d3.curveLinear)
        .x((d) => xScale(d.date)!)
        .y((d) => yScale(d.value));

      const { before, after } = splitByBreakpoint(parsedData, breakpoint);

      const lineBefore = createPath(svg, before, lineGenerator, color); // Normal line
      const lineAfter = createPath(svg, after, lineGenerator, color, "5,5"); // Dashed line
      const pathTotal = createPath(svg, parsedData, lineGenerator, "black"); // Total line

      coverPath.push(pathTotal);
      linePath.push(lineBefore);
      linePath.push(lineAfter);
    });

    // Axes
    const xAxis = (
      g: d3.Selection<SVGGElement, unknown, null, undefined>,
      x: d3.ScaleTime<number, number, never>
    ) =>
      g.attr("transform", `translate(0,${height - margin.bottom})`).call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );

    const gx = svg.append("g").call(xAxis, xScale);

    yScales.forEach((yScale, index) => {
      const axis = index === 0 ? d3.axisLeft(yScale) : d3.axisRight(yScale);
      const offset = index === 0 ? margin.left : width - margin.right;

      svg
        .append("g")
        .attr("transform", `translate(${offset},0)`)
        .call(axis.ticks(null, "s"))
        .call((g) => g.select(".domain").remove());
    });

    // Zoom behavior
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 512])
      .extent([
        [margin.left, 0],
        [width - margin.right, height],
      ])
      .translateExtent([
        [margin.left, -Infinity],
        [width - margin.right, Infinity],
      ])
      .on("zoom", (event) => {
        const xz = event.transform.rescaleX(xScale);
        const singleDataLength = linePath.length / parsedDataList.length;
        linePath.forEach((path, i) => {
          const yScale = yScales[Math.floor(i / singleDataLength)];
          const lineGenerator = d3
            .line<{ date: Date; value: number }>()
            .x((d) => xz(d.date)!)
            .y((d) => yScale(d.value));
          path.attr(
            "d",
            lineGenerator.x((d) => xz(d.date)!)
          );
        });
        coverPath.forEach((path, i) => {
          const yScale = yScales[i];
          const lineGenerator = d3
            .line<{ date: Date; value: number }>()
            .x((d) => xz(d.date)!)
            .y((d) => yScale(d.value));
          path.attr(
            "d",
            lineGenerator.x((d) => xz(d.date)!)
          );
        });
        gx.call(xAxis, xz);

        overlayRect.on("mousemove", function (event) {
          generateCrosshair.call(this, event, xz);
        });

        labelPath.attr(
          "d",
          generateLabelPathData(xz(breakpoint)) // Use a function to dynamically recompute pathData if needed
        );
        labelText.attr("x", xz(breakpoint));
      });

    // Array to hold focus elements for each dataset
    const focuses: {
      focus: d3.Selection<SVGGElement, unknown, null, undefined>;
      data: any[];
      yScale: d3.ScaleLinear<number, number, never>;
    }[] = [];
    // Loop through each dataset to create focus elements
    parsedDataList.forEach((parsedData, index) => {
      const focusGroup = svg
        .append("g")
        .attr("class", `focus focus-${index}`)
        .style("display", "none");

      focusGroup.append("circle").attr("r", 4.5).attr("fill", "white");
      focusGroup.append("line").classed("x", true);
      focusGroup.append("line").classed("y", true);

      focuses.push({
        focus: focusGroup,
        data: parsedData,
        yScale: yScales[index], // Ensure you have individual yScales for each dataset
      });
    });

    // Overlay for detecting mouse events
    const overlayRect = svg
      .append("rect")
      .attr("class", "overlay")
      .attr("x", margin.left)
      .attr("y", margin.top)
      .attr("width", width - margin.left - margin.right) // Match clip path width
      .attr("height", height - margin.top - margin.bottom) // Match clip path height
      .on("mouseover", () => {
        focuses.forEach(({ focus }) => focus.style("display", null));
      })
      .on("mouseout", () => {
        focuses.forEach(({ focus }) => focus.style("display", "none"));
      })
      .on("mousemove", function (event) {
        generateCrosshair.call(this, event, xScale);
      });

    // Styling for focus elements
    d3.select(".overlay").style("fill", "none").style("pointer-events", "all");
    d3.selectAll(".focus line")
      .style("fill", "none")
      .style("stroke", "#67809f")
      .style("stroke-width", "1.5px")
      .style("stroke-dasharray", "3 3");

    // Function to generate crosshairs dynamically for all datasets
    const bisectDate = d3.bisector(
      (d: { date: Date; value: number }) => d.date
    ).center;

    function updateLegends(
      correspondingDate: Date,
      focuses: {
        focus: d3.Selection<SVGGElement, unknown, null, undefined>;
        data: { date: Date; value: number }[];
      }[]
    ) {
      d3.selectAll(".lineLegend").remove();

      focuses.forEach(({ data }, index) => {
        const i = bisectDate(data, correspondingDate);
        const currentData = data[i];

        const legend = svg
          .append("g")
          .attr("class", `lineLegend legend-${index}`)
          .attr(
            "transform",
            `translate(${margin.left}, ${height - 50 - index * 30})`
          );

        legend
          .append("text")
          .text(
            currentData
              ? `Dataset ${
                  index + 1
                }: ${currentData.date.toLocaleDateString()} - ${
                  currentData.value
                }`
              : `No Data`
          )
          .style("fill", "white")
          .attr("transform", "translate(15,9)");
      });
    }

    function generateCrosshair(
      this: SVGRectElement,
      event: MouseEvent,
      xScale: d3.ScaleTime<number, number, never>
    ) {
      const mouseX = d3.pointer(event, this)[0];
      const correspondingDate = xScale.invert(mouseX);

      focuses.forEach(({ focus, data, yScale }, index) => {
        const i = bisectDate(data, correspondingDate);
        const d0 = data[i - 1];
        const d1 = data[i];
        const currentPoint =
          correspondingDate.getTime() - d0.date.getTime() >
          d1.date.getTime() - correspondingDate.getTime()
            ? d1
            : d0;

        focus.attr(
          "transform",
          `translate(${xScale(currentPoint.date)}, ${yScale(
            currentPoint.value
          )})`
        );

        focus
          .select("line.x")
          .attr("x1", 0)
          .attr(
            "x2",
            index % 2
              ? width - margin.right
              : margin.left - xScale(currentPoint.date)
          )
          .attr("y1", 0)
          .attr("y2", 0);

        focus
          .select("line.y")
          .attr("x1", 0)
          .attr("x2", 0)
          .attr("y1", 0)
          .attr("y2", height - yScale(currentPoint.value) - margin.bottom);
      });

      updateLegends(correspondingDate, focuses);
    }

    // Define the label path as a single draw
    // Define the path as a single string

    // Utility function to generate path data dynamically
    const generateLabelPathData = (xPosition: number) => `
      M ${xPosition} ${height}          
      L ${xPosition} ${verticalLineY}  
      L ${xPosition + rectX} ${verticalLineY}  
      V ${verticalLineY - rectHeight}  
      H ${xPosition + rectX + rectWidth} 
      V ${verticalLineY}             
      H ${xPosition + rectX}
    `;

    // Append the single path to the SVG
    const labelPath = svg
      .append("path")
      .attr("id", "labelPath") // Add an ID to reference the path
      .attr("clip-path", `url(#${clipId})`)
      .attr("d", generateLabelPathData(xScale(breakpoint)))
      .attr("stroke", "white")
      .attr("fill", "none")
      .attr("stroke-width", 1);

    // Append the text directly to the SVG
    const labelText = svg
      .append("text")
      .attr("text-anchor", "middle") // Center text horizontally
      .attr("x", xScale(breakpoint)) // X position relative to the path
      .attr("y", verticalLineY - 5) // Y position relative to the path
      .attr("fill", "white") // Adjust text color
      .attr("font-size", "12px") // Adjust font size
      .attr("dy", -5); // Adjust vertical offset if needed

    // Attach the text to the path using <textPath>
    /* labelText
      .append("textPath")
      .attr("x", xScale(breakpoint) || 0) // X position relative to the path
      .attr("y", verticalLineY || 0) // Y position relative to the path */
    /* .attr("startOffset", "50%") // Center the text along the path */
    // Set the text content

    // Function to animate pathTotal and synchronize labelPath
    const animatePathWithLabel = (
      path: d3.Selection<SVGPathElement, any, null, undefined>,
      labelPath: d3.Selection<SVGPathElement, any, null, undefined>,
      xScale: d3.ScaleTime<number, number, never>
    ) => {
      const length = path.node()?.getTotalLength() ?? 0;

      // Animate pathTotal
      path
        .attr("stroke-dasharray", `${length},${length}`)
        .attr("stroke-dashoffset", 0)
        .transition()
        .duration(3000)
        .ease(d3.easeCubicInOut)
        .attr("stroke-dashoffset", -length)
        .on("start", function () {
          // Start moving the labelPath

          // Determine the x-coordinate for the breakpoint date
          const breakpointX = xScale(breakpoint);

          // Find the corresponding path length for the breakpoint
          const breakingLength = findBreakpointLength(path, breakpointX);

          labelPath
            .transition()
            .duration(3000)
            .ease(d3.easeCubicInOut)
            .attrTween("transform", function () {
              const interpolateX = d3.interpolate(0, length); // Interpolate along the total length
              let endPoint = 0;
              return function (t) {
                const currentX = interpolateX(t);

                const point = path.node()?.getPointAtLength(currentX); // Get the current position
                if (point) {
                  if (currentX >= breakingLength) {
                    if (endPoint === 0) {
                      const end = path.node()?.getPointAtLength(breakingLength);

                      const i = bisectDate(parsedDataList[0], breakpoint);
                      endPoint = end!.x;
                      const dynamicPathData = generateLabelPathData(endPoint);
                      labelPath.attr("d", dynamicPathData); // Update pathData dynamically
                      labelText.attr("x", endPoint);
                      labelText.text(`price: ${parsedPriceData[i].value} $`);
                    }

                    return "";
                  }
                  const currentDate = xScale.invert(point.x);
                  const i = bisectDate(parsedDataList[0], currentDate);
                  const dynamicPathData = generateLabelPathData(point.x);
                  labelPath.attr("d", dynamicPathData); // Update pathData dynamically
                  labelText.attr("x", point.x);
                  labelText.text(`price: ${parsedPriceData[i].value} $`);
                }
                return "";
              };
            });
        })
        .remove();
    };

    // Optimized binary search for breakpoint length
    const findBreakpointLength = (
      path: d3.Selection<SVGPathElement, any, null, undefined>,
      breakpointX: number
    ) => {
      const totalLength = path.node()?.getTotalLength() || 0;

      let start = 0;
      let end = totalLength;
      let lengthAtBreakpoint = 0;

      while (start <= end) {
        const mid = (start + end) / 2;
        const point = path.node()?.getPointAtLength(mid);

        if (point) {
          if (point.x < breakpointX) {
            start = mid + 1;
          } else {
            lengthAtBreakpoint = mid;
            end = mid - 1;
          }
        } else {
          break; // Exit if the point cannot be retrieved
        }
      }

      return lengthAtBreakpoint;
    };

    // Initial animation
    coverPath.forEach((path) => {
      animatePath(path);
    });
    animatePathWithLabel(coverPath[0], labelPath, xScale);
    svg.call(zoom);

    // Cleanup function to remove the chart
    return () => {
      svg.selectAll("*").remove();
    };
  }, [breakpoint, parsedDataList, parsedPriceData, scale]);

  return (
    <div
      className=" relative w-full h-auto"
      id="chart-container"
      onPointerDown={(e) => {
        e.stopPropagation();
      }}
    >
      <svg ref={svgRef}></svg>
      <div
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
      </div>
    </div>
  );
};

export default ZoomableAreaChart;
