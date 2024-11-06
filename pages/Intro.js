import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { DiReact, DiAndroid, DiDart } from "react-icons/di";
import Image from "next/image";
import devImg from "../public/devImg2.jpeg";
import React, { useContext } from "react";
import AdditionalInfo from "./AdditionalInfo";
import AppContext from "../state/AppContext";
import { SiFlutter } from "react-icons/si";

const Intro = function () {
  const { darkMode, setDarkMode, isLargeScreen, setIsLargeScreen } =
    useContext(AppContext);

  const goToInstagram = () => {
    window.open("https://instagram.com/agnesh.05?igshid=MzNlNGNkZWQ4Mg==");
  };

  const gotToGithub = () => {
    window.open("https://github.com/agnesh02");
  };

  const gotToLinkedin = () => {
    window.open("https://www.linkedin.com/in/agnesh2002");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-4 dark:bg-gray-900 lg:px-80">
        <section
          className="flex h-screen flex-col justify-between lg:pt-28"
          style={{ height: isLargeScreen ? "80vh" : "72vh" }}
        >
          <div className="lg:flex  lg:justify-end lg:gap-10">
            <div className="flex flex-col justify-center">
              <h3 className="ml-1 flex justify-start py-2 font-poppins_regular text-2xl dark:text-white lg:text-3xl">
                Hi, I am
              </h3>
              <h2 className="flex justify-start py-2 font-poppins_medium text-4xl dark:text-white lg:text-5xl">
                Agnesh S Kumar
              </h2>
              <p className="mt-5 font-poppins_light text-xl dark:text-white">
                Mobile application developer - Native Android, Flutter, React
                Native.
              </p>
              <button className="mt-5 w-32 rounded-md bg-gradient-to-br from-blue-900 to-blue-500 py-1 font-poppins_medium text-white hover:bg-gradient-to-br hover:from-violet-900 hover:to-violet-500">
                Contact Me
              </button>
            </div>
            <div className="flex justify-center">
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
          <div className="flex justify-center gap-4 text-4xl dark:text-white">
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
