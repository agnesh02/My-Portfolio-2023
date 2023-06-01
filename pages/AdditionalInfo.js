import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFirebase, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";

const AdditionalInfo = function () {
  return (
    <div>
      <div
        className="flex justify-center"
        style={{ width: "100%", marginTop: -10 }}
      >
        <h3 className=" mb-12 mt-10 flex flex-col items-center py-2 text-center text-2xl font-semibold text-gray-800 dark:text-white sm:justify-start lg:flex-row lg:justify-center">
          <span className="text-blue-600 dark:text-orange-500">
            Technologies used to develop this website
          </span>
        </h3>
      </div>

      <div className="flex flex-row justify-center">
        <div className="h-40 w-48 rounded-full bg-orange-500 py-4 px-4 shadow-lg hover:text-white">
          <div className="flex justify-center text-8xl">
            <TbBrandNextjs />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold">
            Next JS
          </h2>
        </div>
        <div className="w-10"></div>
        <div className="h-40 w-48 rounded-full bg-orange-500 py-4 px-4 shadow-lg hover:text-white">
          <div className="flex justify-center lg:mt-3">
            <SiTailwindcss size={75} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold">
            Tailwind CSS
          </h2>
        </div>
      </div>
      <div style={{ marginTop: 25 }}></div>
      <div className="flex flex-row justify-center">
        <div className="h-40 w-48 rounded-full bg-orange-500 py-4 px-4 shadow-lg hover:text-white">
          <div className="flex justify-center mt-2">
            <SiFirebase  size={90}/>
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold">
            Firebase
          </h2>
        </div>
        <div className="w-10"></div>
        <div className="h-40 w-48 rounded-full bg-orange-500 py-4 px-4 shadow-lg hover:text-white">
          <div className="flex justify-center mt-2">
            <SiVisualstudiocode size={90} />
          </div>
          <h2 className="text-center font-poppins_semi_bold text-xl font-bold">
            VS Code
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
