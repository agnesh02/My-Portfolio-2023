import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { DiReact, DiAndroid } from "react-icons/di";
import Image from "next/image";
import devImg from "../public/devImg.png";
import React, { useContext } from "react";
import AdditionalInfo from "./AdditionalInfo";
import AppContext from "../state/AppContext";

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
      <main className="bg-white px-4 dark:bg-gray-900 lg:px-10">
        <section>
          <div className=" lg:flex lg:justify-end lg:gap-32">
            <div className=" flex flex-col justify-center">
              <h3 className=" ml-1 flex justify-start py-2 font-poppins_regular text-2xl dark:text-white lg:text-3xl">
                Hi, I am
              </h3>
              <h2 className=" mt-_10 flex justify-start py-2 font-poppins_medium text-4xl dark:text-white lg:text-5xl">
                Agnesh S Kumar
              </h2>
              <p className=" mt-5 font-poppins_light text-xl dark:text-white">
                Mobile application developer - Android, React Native.
              </p>
              <button className=" mt-5 w-32 rounded-md bg-gradient-to-br from-blue-900 to-blue-500 py-1 font-poppins_medium text-white hover:bg-gradient-to-br hover:from-violet-900 hover:to-violet-500">
                Contact Me
              </button>
            </div>
            <div className="flex justify-center">
              <div className=" mt-10 h-44 w-44 rounded-full bg-gradient-to-b from-violet-500 to-white lg:mt-0 lg:h-80 lg:w-80">
                <Image src={devImg} width={300} height={300} />
              </div>
            </div>
          </div>
          <div style={{ padding: 95 }}>
            <h1></h1>
          </div>
          <div className=" mt mb-14 flex justify-center gap-7 text-5xl dark:text-white lg:mb-5">
            <button>
              <FaInstagram onClick={() => goToInstagram()} />
            </button>
            <button>
              <FaGithub onClick={() => gotToGithub()} />
            </button>
            <button>
              <FaLinkedin onClick={() => gotToLinkedin()} />
            </button>
          </div>
        </section>

        <section className="min-h-screen">
          <h3 className=" mb-12 mt-10 flex flex-col items-center py-2 text-2xl font-semibold text-gray-800 dark:text-white sm:justify-start lg:flex-row lg:justify-center">
            Developer, specialized in
            {!isLargeScreen && <br></br>}
            <span className="text-blue-600 dark:text-green-500">
              &nbsp;native&nbsp;
            </span>
            and
            <span className="text-blue-600 dark:text-green-500">
              &nbsp;cross-platform&nbsp;
            </span>
            mobile app development.
          </h3>

          <div
            className=" flex flex-col items-center space-y-5 lg:flex lg:flex-row lg:justify-center lg:space-x-5 lg:space-y-0"
            style={{ marginTop: -20 }}
          >
            <div className=" w-60 justify-center rounded-3xl bg-green-500 p-3 py-4 shadow-lg hover:bg-green-700 hover:text-white">
              <div className=" mt-6 flex justify-center text-8xl">
                <DiAndroid />
              </div>
              <h2 className=" mb-2 flex justify-center px-6 font-poppins_semi_bold text-xl font-bold">
                Android Apps
              </h2>
            </div>
            <div className=" w-60 justify-center rounded-3xl bg-blue-500 p-3 py-4 shadow-lg hover:bg-blue-700 hover:text-white">
              <div className=" mt-6 flex justify-center text-8xl">
                <DiReact />
              </div>
              <h2 className=" mb-2 flex justify-center font-poppins_semi_bold text-xl font-bold">
                React Native Apps
              </h2>
            </div>
          </div>
          <AdditionalInfo />
        </section>
      </main>
    </div>
  );
};

export default Intro;
