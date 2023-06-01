import Image from "next/image";
import { useState } from "react";

// Replace the following data with your own project data
const projects = [
  {
    id: 1,
    title: "Cloud College",
    description:
      "Cloud College is an android application which is developed using android and firebase to help and manage the day to day college tasks like mark the attendance,\nget the attendance statistics on different basis, create, edit and publish time table, get student data/list and so on.",
    features: [
      "Sign up and Login using E-mail",
      "Verification using E-mail and phone",
      "Reset/Change password",
      "Add data",
      "Modify data",
      "View list of students based on batch and department",
      "Mark Attendance",
      "Get last Attendance update log",
      "Edit attendance",
      "View Attendance Stat in a statistical and graphical way",
      "Retrieve individual attendance statistics based on subjects",
      "View attendance statistics of the whole class based on subjects and dates",
      "Add/modify/view Biodata",
      "Add/view/remove profile picture",
      "View college notes",
      "View profile details",
      "View/edit/publish time table",
      "Get faculty details",
    ],
    imageUrl: require("../public/assets/cloud_college.png"),
    technologiesUsed: ["android", "firebase"],
  },
  {
    id: 2,
    title: "Stubot",
    description:
      "STUBOT is a chatbot web application which is developed using HTML, CSS, PHP, JS and MySQL. It basically acts as an assistant chatbot which helps the students based on their academic needs.",
    features: [
      "Contains the home chat window, where we basically chat with the bot",
      "The contents retrieved or the response from the bot will be displayed in that window itself.",
      "Admins can add new details/data/response",
      "Retrieves contents like: Time table, Marksheets, Attendance Reports, Class Link, Class Notes, Activity notes, Current Date and Time",
      "Can make searches",
      "Can add to-do notes and retrieve it",
      "Dark mode/normal mode available",
    ],
    imageUrl: require("../public/assets/stubot.png"),
    technologiesUsed: ["php", "html", "css", "mySql", "ajax"],
  },
  {
    id: 3,
    title: "Clinic Management",
    description:
      "Clinic Management is a software which is developed using python Tkinter.This software is mainly used to keep track of the records of patients of a particular clinic.",
    features: [
      "Contains the Home window consisting of all options",
      "We can create a table and start adding details",
      "Edit a patient details",
      "Add personal as well as illness details of a particular patient",
      "Can search for a particular patient personal details based on id",
      "Can search for a particular patient illness details based on id",
    ],
    imageUrl: require("../public/assets/clinic_management.png"),
    technologiesUsed: ["python", "mySql"],
  },
  {
    id: 4,
    title: "Financial Tracker",
    description:
      "This is an android application which is used to keep track of your financial data. You can note down the expenses, incomes etc and keep track of it really easily. The data is processed from the local device and is stored to the server so that they could get their individual data when they login from any device. All the history, details and statistics of every expense, income, withdraws, transfers etc are logged and can be displayed. Graphical statistics based on each month or as a whole is available. The necessary backend logic is performed based on user action there by making the app really efficient and easy to keep track of their records. Uptodate currency conversion is also made available with the help of an API",
    features: [
      "Authentication",
      "Logging expenses and incomes for each source",
      "Getting graphical and statistical data",
      "Sorting and filtering data",
    ],
    imageUrl: require("../public/assets/financial_tracker.png"),
    technologiesUsed: ["android", "firebase"],
  },
  {
    id: 5,
    title: "Blend App",
    description:
      "Blend is basically an android application which is used for open learning.Each course could contain multiple lessons basically like the coursera and udemy.",
    features: [
      "Authentication",
      "Implementing the provision to add courses",
      "View other courses",
      "Provision to customize and edit the course details/resources",
      "Add comments to a course",
      "Adding video files, documents, course thumbnails, details etc.",
    ],
    imageUrl: require("../public/assets/blend_app.png"),
    technologiesUsed: ["android", "firebase"],
  },
];

const getTechnologyImageUrl = function (technologyUsed) {
  const images = {
    firebase: require("../public/assets/firebase_img.png"),
    android: require("../public/assets/android_img.png"),
    mySql: require("../public/assets/mySql_img.png"),
    html: require("../public/assets/html_img.png"),
    css: require("../public/assets/css_img.png"),
    php: require("../public/assets/php_img.png"),
    ajax: require("../public/assets/ajax_img.png"),
    python: require("../public/assets/python_img.png"),
  };

  return images[technologyUsed];
};

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [technologyUsed, setTechnologyUsed] = useState({
    name: currentProject.technologiesUsed[0],
    image: getTechnologyImageUrl(currentProject.technologiesUsed[0]),
  });

  const handlePrev = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === currentProject.id
    );
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentProject(projects[prevIndex]);
    setTechnologyUsed({
      name: projects[prevIndex].technologiesUsed[0],
      image: getTechnologyImageUrl(projects[prevIndex].technologiesUsed[0]),
    });
  };

  const handleNext = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === currentProject.id
    );
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentProject(projects[nextIndex]);
    setTechnologyUsed({
      name: projects[nextIndex].technologiesUsed[0],
      image: getTechnologyImageUrl(projects[nextIndex].technologiesUsed[0]),
    });
  };

  const handlePrevTechnology = () => {
    const currentIndex = currentProject.technologiesUsed.findIndex(
      (technology) => technology === technologyUsed.name
    );
    const prevIndex =
      (currentIndex - 1 + currentProject.technologiesUsed.length) %
      currentProject.technologiesUsed.length;
    setTechnologyUsed({
      name: currentProject.technologiesUsed[prevIndex],
      image: getTechnologyImageUrl(currentProject.technologiesUsed[prevIndex]),
    });
  };

  const handleNextTechnology = () => {
    const currentIndex = currentProject.technologiesUsed.findIndex(
      (technology) => technology === technologyUsed.name
    );
    console.log(`current ${currentProject.technologiesUsed[currentIndex]}`);

    const nextIndex =
      (currentIndex + 1) % currentProject.technologiesUsed.length;
    console.log(`next ${currentProject.technologiesUsed[nextIndex]}`);

    setTechnologyUsed({
      name: currentProject.technologiesUsed[nextIndex],
      image: getTechnologyImageUrl(currentProject.technologiesUsed[nextIndex]),
    });
  };

  return (
    <div
      className="flex min-h-screen flex-col items-start"
      style={{ marginTop: -50 }}
    >
      <div className="flex min-w-full flex-row justify-between align-middle">
        <div className="flex flex-col justify-center">
          <button
            onClick={() => handlePrev()}
            className="h-10 rounded-full bg-gray-500 p-2 text-white hover:bg-gray-700"
          >
            &lt;
          </button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "1000px", height: "500px", objectFit: "contain" }}
            src={currentProject.imageUrl}
            alt={currentProject.title}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <button
            onClick={() => handleNext()}
            className="h-10 rounded-full bg-gray-500 p-2 text-white hover:bg-gray-700"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center"></div>
      <div className="mt-4" style={{ width: "98%" }}>
        <h2 className="font-poppins_semi_bold text-2xl font-bold dark:text-white">
          {currentProject.title}
        </h2>
        <p className="mt-5 inline-block text-justify font-poppins_medium text-gray-600 dark:text-white">
          {currentProject.description}
        </p>
        <h3 className="mt-5 font-poppins_regular text-gray-600 underline dark:text-white">
          Features
        </h3>
        <ul>
          {currentProject.features.map((feature, index) => (
            <li className="text-gray-600 dark:text-white font-poppins_light">
              {index + 1}. {feature}
            </li>
          ))}
        </ul>
        <h3 className="mt-5 font-poppins_regular text-gray-600 underline dark:text-white">
          Technologies Used
        </h3>

        <div className="mb-10 flex min-w-full flex-row justify-between align-middle">
          <div className="flex flex-col justify-center">
            <button
              onClick={() => handlePrevTechnology()}
              className="h-10 rounded-full bg-gray-500 p-2 text-white hover:bg-gray-700"
            >
              &lt;
            </button>
          </div>
          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: "300px",
                height: "100px",
                objectFit: "contain",
                marginTop: 10,
                backgroundColor: "white",
                borderRadius: 16,
                padding: 20,
              }}
              src={technologyUsed.image}
              alt={technologyUsed.name}
              className="w-full rounded-lg object-cover"
            />
            {/* <p>{technologyUsed.name.toString()}</p> */}
          </div>
          <div className="flex flex-col justify-center">
            <button
              onClick={() => handleNextTechnology()}
              className="h-10 rounded-full bg-gray-500 p-2 text-white hover:bg-gray-700"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
