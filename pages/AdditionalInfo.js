import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiFirebase,
  SiTailwindcss,
  SiVisualstudiocode,
  SiReact,
  SiOpenai,
} from "react-icons/si";

const AdditionalInfo = ({ isLargeScreen }) => {
  return (
    <div>
      <div
        className="flex justify-center"
        style={{ width: "100%", marginTop: -10 }}
      >
        <h3 className="mb-12 mt-10 flex flex-col items-center py-2 text-center text-2xl font-semibold text-gray-800 dark:text-white sm:justify-start lg:flex-row lg:justify-center">
          <span className="text-blue-600 dark:text-orange-500">
            Technologies used to develop this website
          </span>
        </h3>
      </div>

      {/* Grid layout for responsive display */}
      <div className="grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {/* Next JS */}
        <div
          className={`flex flex-col items-center justify-center ${
            isLargeScreen ? "h-40 w-60" : "h-40 w-40"
          } ${
            isLargeScreen ? "rounded-2xl" : "rounded-full"
          } bg-[#000000] py-4 px-4 shadow-lg hover:text-white`}
        >
          <div className="flex justify-center text-6xl">
            <TbBrandNextjs size={95} color="white" />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold text-white">
            Next JS
          </h2>
        </div>

        {/* Tailwind CSS */}
        <div
          className={`flex flex-col items-center justify-center ${
            isLargeScreen ? "h-40 w-60" : "h-40 w-40"
          } ${
            isLargeScreen ? "rounded-2xl" : "rounded-full"
          } bg-[#38bdf8] py-4 px-4 shadow-lg hover:text-white`}
        >
          <div className="flex justify-center text-6xl">
            <SiTailwindcss size={75} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold">
            Tailwind CSS
          </h2>
        </div>

        {/* Firebase */}
        <div
          className={`flex flex-col items-center justify-center ${
            isLargeScreen ? "h-40 w-60" : "h-40 w-40"
          } ${
            isLargeScreen ? "rounded-2xl" : "rounded-full"
          } bg-[#FFCA28] py-4 px-4 shadow-lg hover:text-white`}
        >
          <div className="flex justify-center text-6xl">
            <SiFirebase size={90} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold ">
            Firebase
          </h2>
        </div>

        {/* VS Code */}
        <div
          className={`flex flex-col items-center justify-center ${
            isLargeScreen ? "h-40 w-60" : "h-40 w-40"
          } ${
            isLargeScreen ? "rounded-2xl" : "rounded-full"
          } bg-[#007ACC] py-4 px-4 shadow-lg hover:text-white`}
        >
          <div className="flex justify-center text-6xl">
            <SiVisualstudiocode color="white" size={90} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold text-white">
            VS Code
          </h2>
        </div>

        {/* React */}
        <div
          className={`flex flex-col items-center justify-center ${
            isLargeScreen ? "h-40 w-60" : "h-40 w-40"
          } ${
            isLargeScreen ? "rounded-2xl" : "rounded-full"
          } bg-[#61DAFB] py-4 px-4 shadow-lg hover:text-white`}
        >
          <div className="flex justify-center text-6xl">
            <SiReact size={75} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold">
            React
          </h2>
        </div>

        {/* ChatGPT */}
        <div
          className={`flex flex-col items-center justify-center ${
            isLargeScreen ? "h-40 w-60" : "h-40 w-40"
          } ${
            isLargeScreen ? "rounded-2xl" : "rounded-full"
          } bg-[#10A37F] py-4 px-4 shadow-lg hover:text-white`}
        >
          <div className="flex justify-center text-6xl">
            <SiOpenai size={75} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold">
            ChatGPT
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
