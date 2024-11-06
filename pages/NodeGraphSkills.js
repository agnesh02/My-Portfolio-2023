import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const NodeGraphSkills = function ({ isLargeScreen }) {
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
        img: "https://img.icons8.com/?size=160&id=WloV0S7gH4RH&format=png",
      },
      {
        id: "node6",
        group: 2,
        text: "Node 6",
        img: "https://img.icons8.com/color/512/flutter.png",
      },
      {
        id: "node7",
        group: 2,
        text: "Node 7",
        img: "https://hornerautomation.eu/wp-content/uploads/2021/11/mqtt-ver.png",
      },
      {
        id: "node8",
        group: 2,
        text: "Node 8",
        img: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      },
      {
        id: "node9",
        group: 2,
        text: "Node 9",
        img: "https://user-images.githubusercontent.com/103866722/177941491-1947c6b0-6e38-4880-8bd7-01dac36165df.png",
      },

      {
        id: "node10",
        group: 2,
        text: "Node 10",
        img: "https://static-00.iconduck.com/assets.00/dart-icon-255x256-hc3l9lk3.png",
      },
      {
        id: "node11",
        group: 2,
        text: "Node 11",
        img: " https://cdn-icons-png.flaticon.com/512/25/25231.png",
      },
      {
        id: "node12",
        group: 2,
        text: "Node 12",
        img: " https://icons.veryicon.com/png/o/business/vscode-program-item-icon/vscode.png",
      },
      {
        id: "node13",
        group: 2,
        text: "Node 13",
        img: " https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png",
      },
      {
        id: "node14",
        group: 2,
        text: "Node 14",
        img: " https://cdn.iconscout.com/icon/free/png-256/free-ios-apple-logo-icon-download-in-svg-png-gif-file-formats--operating-system-browser-and-pack-logos-icons-572947.png?f=webp&w=256",
      },
    ],
    links: [
      { source: "node3", target: "node1" },
      { source: "center", target: "node2" },
      { source: "center", target: "node3" },
      { source: "node2", target: "node4" },
      { source: "center", target: "node5" },
      { source: "center", target: "node6" },
      { source: "center", target: "node7" },
      { source: "center", target: "node8" },
      { source: "node3", target: "node9" },
      { source: "node6", target: "node10" },
      { source: "center", target: "node11" },
      { source: "center", target: "node12" },
      { source: "node3", target: "node13" },
      { source: "node6", target: "node14" },
      { source: "node6", target: "node3" },
      { source: "node2", target: "node3" },
      { source: "node2", target: "node14" },
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
          .distance(isLargeScreen ? 300 : 100) // controls link distance
      )
      .force("charge", d3.forceManyBody().strength(-100)) // increase the repulsion
      .force("center", d3.forceCenter(width / 2, height / 2)) // keep the center node centered
      .force("collide", d3.forceCollide(80)); // add collision force to keep nodes from overlapping

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

    // Update the simulation based on node and link positions
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      images.attr("transform", (d) => `translate(${d.x - 30}, ${d.y - 30})`);
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
    <div
      style={{
        height: isLargeScreen ? "98vh" : "95vh",
      }}
    >
      <h3 className="flex flex-col items-center py-2 text-2xl font-semibold text-gray-800 dark:text-white">
        Played around with
      </h3>
      <svg
        ref={svgRef}
        style={{
          width: "100%",
          height: isLargeScreen ? 700 : 640,
          // borderColor: "red",
          // borderWidth: 2,
        }}
      ></svg>
      <h3 className="flex flex-col items-center py-2 text-center text-2xl font-semibold text-gray-800 dark:text-white">
        P.S: You can drag and interact with this 😄😉
      </h3>
    </div>
  );
};

export default NodeGraphSkills;
