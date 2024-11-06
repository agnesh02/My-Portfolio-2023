import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { DiReact, DiAndroid } from "react-icons/di";
import Image from "next/image";
import devImg from "../public/devImg2.jpeg";
import React, { useContext, useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import AppContext from "../state/AppContext";
import { SiFlutter } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Intro = function () {
  const { darkMode, isLargeScreen } = useContext(AppContext);

  const goToInstagram = () => {
    window.open("https://instagram.com/agnesh.05?igshid=MzNlNGNkZWQ4Mg==");
  };

  const gotToGithub = () => {
    window.open("https://github.com/agnesh02");
  };

  const gotToLinkedin = () => {
    window.open("https://www.linkedin.com/in/agnesh2002");
  };

  const [typingComplete, setTypingComplete] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-4 dark:bg-gray-900 lg:px-80">
        <section
          className="flex h-screen flex-col justify-between lg:pt-28"
          style={{ height: isLargeScreen ? "85vh" : "76vh" }}
        >
          <div className="lg:flex lg:items-center lg:justify-end lg:gap-10">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center">
              <h3 className="ml-1 flex justify-start py-2 font-poppins_regular text-2xl dark:text-white lg:text-3xl">
                <ReactTyped
                  strings={["Hi, I am"]}
                  typeSpeed={typingComplete ? 0 : 100}
                  onComplete={() => setTypingComplete(true)} 
                  showCursor={typingComplete ? false : true} 
                />
              </h3>

              <h2
                id="nameTyped"
                className="flex justify-start py-2 font-poppins_medium text-4xl dark:text-white lg:text-5xl"
              >
                {typingComplete && (
                  <ReactTyped
                    strings={["Agnesh S Kumar"]}
                    typeSpeed={100}
                    startDelay={800}
                  />
                )}
              </h2>

              {/* Description */}
              <p className="mt-5 font-poppins_light text-xl dark:text-white">
                Mobile application developer - Native Android, Flutter, React
                Native.
              </p>

              {/* Static Contact Me button */}
              <button
                className="mt-5 w-32 rounded-md bg-gradient-to-br from-blue-900 to-blue-500 py-1 font-poppins_medium text-white hover:bg-gradient-to-br hover:from-violet-900 hover:to-violet-500"
                onClick={() => (window.location.href = "#contact")}
              >
                Contact Me
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:w-1/2">
              <div className="mt-10 h-52 w-52 overflow-hidden rounded-full lg:mt-0 lg:h-96 lg:w-96">
                <Image
                  src={devImg}
                  width={400}
                  height={300}
                  className="object-fill"
                  alt="Developer Image"
                />
              </div>
            </div>
          </div>

          {/* Social Media Buttons at the bottom */}
          <div className="mt-8 flex justify-center gap-4 text-4xl dark:text-white">
            <button onClick={() => goToInstagram()}>
              <FaInstagram />
            </button>
            <button onClick={() => gotToGithub()}>
              <FaGithub />
            </button>
            <button onClick={() => gotToLinkedin()}>
              <FaLinkedin />
            </button>
          </div>
        </section>

        <div style={{ height: "3vh" }}></div>

        {/* Skills Section */}
        <section style={{ height: "95vh" }}>
          <h3 className="mb-12 mt-10 flex flex-col items-center py-2 text-2xl font-semibold text-gray-800 dark:text-white sm:justify-start lg:flex-row lg:justify-center">
            Developer, specialized in
            {!isLargeScreen && <br />}
            <span className="text-blue-600 dark:text-green-500">
              &nbsp;native&nbsp;
            </span>
            and
            <span className="text-blue-600 dark:text-green-500">
              &nbsp;cross-platform&nbsp;
            </span>
            mobile app development.
          </h3>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div className="flex w-full items-center justify-center rounded-3xl bg-green-500 p-3 py-4 text-center shadow-lg hover:bg-green-700 hover:text-white">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-8xl">
                  <DiAndroid />
                </div>
                <h2 className="font-poppins_semi_bold text-xl font-bold">
                  Android Apps
                </h2>
              </div>
            </div>

            <div className="flex w-full items-center justify-center rounded-3xl bg-blue-500 p-3 py-4 text-center shadow-lg hover:bg-blue-600 hover:text-white">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-8xl">
                  <SiFlutter />
                </div>
                <h2 className="font-poppins_semi_bold text-xl font-bold">
                  Flutter Apps
                </h2>
              </div>
            </div>

            <div className="flex w-full items-center justify-center rounded-3xl bg-teal-500 p-3 py-4 text-center shadow-lg hover:bg-teal-600 hover:text-white">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-8xl">
                  <DiReact />
                </div>
                <h2 className="font-poppins_semi_bold text-xl font-bold">
                  React Native Apps
                </h2>
              </div>
            </div>
          </div>

          {isLargeScreen && <AdditionalInfo isLargeScreen={isLargeScreen} />}
        </section>
        {!isLargeScreen && (
          <section style={{ height: "100vh" }}>
            <AdditionalInfo isLargeScreen={isLargeScreen} />
          </section>
        )}
      </main>
    </div>
  );
};

export default Intro;
