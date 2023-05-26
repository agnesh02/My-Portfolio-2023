import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaCode,
  FaServer,
} from "react-icons/fa";
import NodeGraphSkills from "./NodeGraphSkills";

const Skills = function () {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillIcons = [
    { name: "HTML5", icon: <FaHtml5 fontSize={50} />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3 fontSize={50} />, color: "#2965F1" },
    { name: "JavaScript", icon: <FaJs fontSize={50} />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact fontSize={50} />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs fontSize={50} />, color: "#339933" },
    { name: "Database", icon: <FaDatabase fontSize={50} />, color: "#336791" },
    { name: "Git", icon: <FaGit fontSize={50} />, color: "#F05032" },
    { name: "Coding", icon: <FaCode fontSize={50} />, color: "#000000" },
    { name: "Server", icon: <FaServer fontSize={50} />, color: "#800080" },
  ];

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
  };

  const iconStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const handleMouseEnter = (index) => {
    setHoveredIcon(index);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row lg:justify-between">
      <NodeGraphSkills />
      <div style={containerStyle}>
        {skillIcons.map((skill, index) => (
          <div
            key={index}
            style={{
              ...iconStyle,
              backgroundColor: hoveredIcon === index ? "#FFFFFF" : skill.color,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
