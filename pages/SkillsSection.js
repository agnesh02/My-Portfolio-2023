import React, { useContext, useState, useRef } from "react";
import AppContext from "../state/AppContext";

const SkillsSection = () => {
  const { isLargeScreen } = useContext(AppContext);
  const [activeSkill, setActiveSkill] = useState(null);
  const audioContextRef = useRef(null);

  const skills = [
    {
      id: 1,
      name: "Skill 1",
      image: "https://img.icons8.com/color/256/java-coffee-cup-logo.png",
      color: " #ff00ff",
      note: 440,
    },
    {
      id: 2,
      name: "Skill 2",
      image: "https://img.icons8.com/plasticine/256/react.png",
      color: "#00ff00",
      note: 587.33,
    },
    {
      id: 3,
      name: "Skill 3",
      image:
        "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/256/external-Android-notification-and-mailing-smashingstocks-flat-smashing-stocks.png",
      color: "#0000ff",
      note: 659.25,
    },
    {
      id: 4,
      name: "Skill 4",
      image: "https://img.icons8.com/color/256/javascript.png",
      color: "#ffff00",
      note: 783.99,
    },
    {
      id: 5,
      name: "Skill 5",
      image: "https://img.icons8.com/fluency/256/android-studio--v3.png",
      color: "#ff0000",
      note: 783.99,
    },
    {
      id: 6,
      name: "Skill 6",
      image: "https://img.icons8.com/?size=512&id=TpULddJc4gTh&format=png",
      color: "#00ffff",
      note: 880,
    },
    {
      id: 7,
      name: "Skill 7",
      image: "https://img.icons8.com/?size=512&id=gRKbTQ67Dfhc&format=png",
      color: "#ff8000",
      note: 987.77,
    },
    {
      id: 8,
      name: "Skill 8",
      image: "https://img.icons8.com/?size=512&id=ZoxjA0jZDdFZ&format=png",
      color: "#0080ff",
      note: 1046.5,
    },
    {
      id: 9,
      name: "Skill 9",
      image: "https://img.icons8.com/?size=512&id=62452&format=png",
      color: "#8000ff",
      note: 329.63,
    },
  ];

  const toggleSkill = (id, note) => {
    if (activeSkill === id) {
      setActiveSkill(null);
      stopNote();
    } else {
      setActiveSkill(id);
      stopNote();
      playNote(note);
      let stop = setTimeout(() => {
        stopNote();
      }, 2000);
      return () => clearTimeout(stop);
    }
  };

  const playNote = (frequency) => {
    const audioContext = new window.AudioContext();
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = frequency;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    audioContextRef.current = audioContext;
  };

  const stopNote = () => {
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const skillStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: isLargeScreen ? "150px" : "80px",
    height: isLargeScreen ? "150px" : "80px",
    borderRadius: "50%",
    margin: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
  };

  const activeSkillStyle = {
    ...skillStyle,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3)",
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 0.3fr",
    gap: "5px",
    width: isLargeScreen ? "40%" : "90%",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={gridContainerStyle}>
        {skills.map((skill) => (
          <div
            key={skill.id}
            style={
              activeSkill === skill.id
                ? { ...activeSkillStyle, backgroundColor: skill.color }
                : { ...skillStyle, backgroundColor: "white" }
            }
            onClick={() => toggleSkill(skill.id, skill.note)}
          >
            <img
              src={skill.image}
              alt={skill.name}
              style={{ width: "80%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
