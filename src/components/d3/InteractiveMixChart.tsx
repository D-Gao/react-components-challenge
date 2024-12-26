import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface DataPoint {
  date: string;
  green: number;
  red: number; // can remove if not needed
  dateObj?: Date | null;
}

export function InteractiveMixChart() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // -------------------------------------------------------------------------
    // 1) SAMPLE DATA
    // -------------------------------------------------------------------------
    const data: DataPoint[] = [
      { date: "2024-01-01", green: 5.0, red: 4.8 },
      { date: "2024-01-02", green: 5.3, red: 5.0 },
      { date: "2024-01-03", green: 6.1, red: 5.4 },
      { date: "2024-01-04", green: 7.0, red: 6.2 },
      { date: "2024-01-05", green: 7.5, red: 6.8 },
      { date: "2024-01-06", green: 8.0, red: 7.4 },
      { date: "2024-01-07", green: 9.5, red: 8.7 },
      { date: "2024-01-08", green: 10.5, red: 9.0 },
      { date: "2024-01-09", green: 10.8, red: 9.6 },
      { date: "2024-01-10", green: 11.2, red: 10.3 },
      { date: "2024-01-11", green: 11.7, red: 10.9 },
      { date: "2024-01-12", green: 12.5, red: 11.2 },
      { date: "2024-01-13", green: 13.0, red: 12.0 },
      { date: "2024-01-14", green: 13.5, red: 12.7 },
      { date: "2024-01-15", green: 14.2, red: 13.5 },
      { date: "2024-01-16", green: 14.7, red: 14.0 },
      { date: "2024-01-17", green: 15.0, red: 14.4 },
      { date: "2024-01-18", green: 15.4, red: 14.9 },
      { date: "2024-01-19", green: 15.9, red: 15.2 },
      { date: "2024-01-20", green: 16.3, red: 15.7 },
      { date: "2024-01-21", green: 16.8, red: 16.1 },
      { date: "2024-01-22", green: 17.1, red: 16.5 },
      { date: "2024-01-23", green: 17.5, red: 17.0 },
      { date: "2024-01-24", green: 17.9, red: 17.3 },
      { date: "2024-01-25", green: 18.2, red: 17.7 },
      { date: "2024-01-26", green: 18.5, red: 18.1 },
      { date: "2024-01-27", green: 19.0, red: 18.5 },
    ];

    // Parse date strings into JS Date objects
    const parseDate = d3.timeParse("%Y-%m-%d");
    data.forEach((d) => {
      d.dateObj = parseDate(d.date);
    });

    // OPTIONAL: Make sure data is sorted by date
    data.sort(
      (a, b) => (a.dateObj?.getTime() ?? 0) - (b.dateObj?.getTime() ?? 0)
    );

    // -------------------------------------------------------------------------
    // 2) SETUP DIMENSIONS
    // -------------------------------------------------------------------------
    const margin = { top: 30, right: 30, bottom: 40, left: 50 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // -------------------------------------------------------------------------
    // 3) CREATE / SELECT SVG
    // -------------------------------------------------------------------------
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove();

    const svg = svgEl
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // -------------------------------------------------------------------------
    // 4) SCALES & AXES
    // -------------------------------------------------------------------------
    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.dateObj) as [Date, Date])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.green) ?? 0])
      .nice()
      .range([height, 0]);

    // X-axis
    svg
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", `translate(0, ${height})`)
      .call(
        d3.axisBottom<Date>(x).tickFormat((d) => d3.timeFormat("%m/%d")(d))
      );

    /* const xAxis = (
      g: d3.Selection<SVGGElement, unknown, HTMLElement, unknown>, // SVG group element
      x: d3.ScaleLinear<number, number> | d3.ScaleTime<number, number> // Linear or Time scale
    ): void => {
      g.call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );
    }; */
    // Y-axis
    svg.append("g").attr("class", "axis axis--y").call(d3.axisLeft(y));

    // Make sure axes lines/ticks are visible
    svg.selectAll(".axis path, .axis line").attr("stroke", "black");

    // -------------------------------------------------------------------------
    // 5) SPLIT DATA FOR SOLID vs DASHED (Include boundary date in both)
    // -------------------------------------------------------------------------
    const highlightDateStr = "2024-01-08";
    const highlightDate = parseDate(highlightDateStr);

    // BEFORE (<= highlightDate)
    const dataBefore = data.filter(
      (d) => d.dateObj && d.dateObj <= highlightDate!
    );
    // AFTER (>= highlightDate)
    const dataAfter = data.filter(
      (d) => d.dateObj && d.dateObj >= highlightDate!
    );

    // -------------------------------------------------------------------------
    // 6) LINE GENERATOR
    // -------------------------------------------------------------------------
    const lineGen = d3
      .line<DataPoint>()
      .x((d) => x(d.dateObj as Date))
      .y((d) => y(d.green));

    // -------------------------------------------------------------------------
    // 7) DRAW TWO LINES:
    //    - Solid for dataBefore (ends at highlight date)
    //    - Dashed for dataAfter (begins at highlight date)
    // -------------------------------------------------------------------------
    // Solid line
    svg
      .append("path")
      .datum(dataBefore)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .style("stroke-dasharray", "none")
      .attr("d", lineGen);

    // Dashed line
    svg
      .append("path")
      .datum(dataAfter)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .style("stroke-dasharray", "5,5")
      .attr("d", lineGen);

    // -------------------------------------------------------------------------
    // 8) SPECIAL LABEL AT THE HIGHLIGHT DATE
    // -------------------------------------------------------------------------
    const specialPoint = data.find(
      (d) => d.dateObj && d.dateObj.getTime() === highlightDate?.getTime()
    );

    if (specialPoint) {
      svg
        .append("text")
        .attr("x", x(specialPoint.dateObj as Date))
        .attr("y", y(specialPoint.green) - 10)
        .attr("text-anchor", "middle")
        .attr("fill", "black")
        .style("font-size", "12px")
        .text("15,56 €");
    }
  }, []);

  return (
    <div className="mx-auto my-10 p-4 border border-gray-200 shadow-lg bg-white">
      <svg ref={svgRef} />
    </div>
  );
}
