import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const NodeGraphSkills = function () {
  const svgRef = useRef();

  const data = {
    nodes: [
      {
        id: "center",
        group: 1,
        text: "Center Node",
        img: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
      },
      {
        id: "node1",
        group: 2,
        text: "Node 1",
        img: "https://img.icons8.com/color/256/java-coffee-cup-logo.png",
      },
      {
        id: "node2",
        group: 2,
        text: "Node 2",
        img: "https://img.icons8.com/plasticine/256/react.png",
      },
      {
        id: "node3",
        group: 2,
        text: "Node 3",
        img: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/256/external-Android-notification-and-mailing-smashingstocks-flat-smashing-stocks.png",
      },
      {
        id: "node4",
        group: 2,
        text: "Node 4",
        img: "https://img.icons8.com/color/256/javascript.png",
      },
      {
        id: "node5",
        group: 2,
        text: "Node 5",
        img: "https://img.icons8.com/fluency/256/android-studio--v3.png",
      },
    ],
    links: [
      { source: "center", target: "node1" },
      { source: "center", target: "node2" },
      { source: "center", target: "node3" },
      { source: "center", target: "node4" },
      { source: "center", target: "node5" },
    ],
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Set the dimensions of the SVG container
    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;

    // Create the simulation
    const simulation = d3
      .forceSimulation(data.nodes)
      .force(
        "link",
        d3
          .forceLink(data.links)
          .id((d) => d.id)
          .distance(170)
      )
      .force("charge", d3.forceManyBody().strength(-50))
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Create the links
    const link = svg
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 2);

    // Create the nodes
    const node = svg
      .selectAll("circle")
      .data(data.nodes)
      .join("circle")
      .attr("r", (d) => (d.id == "center" ? 30 : 43))
      .attr("fill", (d) => (d.id == "center" ? "red" : "white"))
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .call(drag(simulation));

    // Add images to the nodes
    const images = svg
      .selectAll("image")
      .data(data.nodes)
      .join("image")
      .attr("xlink:href", (d) => (d.id == "center" ? null : d.img))
      .attr("width", 60)
      .attr("height", 60)
      .style("pointer-events", "none")
      .attr("clip-path", "url(#circle-clip)"); // set the clip path to the circle shape

    // Add text to the nodes
    // const text = svg
    //   .selectAll('text')
    //   .data(data.nodes)
    //   .join('text')
    //   .text((d) => d.text)
    //   .attr('text-anchor', 'middle')
    //   .attr('font-size', 14)
    //   .attr('dy', 5)
    //   .style('pointer-events', 'none');

    // Update the simulation based on node and link positions
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      images.attr("transform", (d) => `translate(${d.x - 30}, ${d.y - 30})`);

      // text.attr('x', (d) => d.x).attr('y', (d) => d.y);
    });
  }, []);

  // Define the drag behavior
  const drag = (simulation) => {
    function dragStarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragEnded(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3
      .drag()
      .on("start", dragStarted)
      .on("drag", dragged)
      .on("end", dragEnded);
  };

  return (
    <div>
      <h3 className=" mb-12 mt-10 flex flex-col items-center py-2 text-2xl font-semibold text-gray-800 dark:text-white sm:justify-start lg:flex-row lg:justify-center">
        Played around with
      </h3>
      <svg
        ref={svgRef}
        style={{
          width: "100%",
          height: 520,
          // borderColor: "red",
          // borderWidth: 2,
        }}
      ></svg>
      <h3 className=" mb-12 mt-10 flex flex-col items-center py-2 text-center text-2xl font-semibold text-gray-800 dark:text-white sm:justify-start lg:flex-row lg:justify-center">
        P.S: You can drag and interact with this 😄😉
      </h3>
    </div>
  );
};

export default NodeGraphSkills;
