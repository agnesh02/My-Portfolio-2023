import Image from "next/image";
import React, { useState } from "react";

const images = [
  require('../public/assets/coursera_1.png'),
  require('../public/assets/coursera_2.png'),
  require('../public/assets/coursera_3.png'),
  require('../public/assets/coursera_4.png'),
];

const Certificates = function () {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="flex flex-grow flex-col align-middle">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: "1000px", height: "500px", objectFit:"contain" }}
          src={images[currentIndex]}
          alt="Carousel Slide"
          className="w-full rounded-lg object-cover"
        />
      </div>

      <div className="mt-4 flex justify-center">
        <button
          class="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          onClick={() => goToPrevSlide()}
        >
          Prev
        </button>
        <div className="px-5"></div>
        <button
          class="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          onClick={() => goToNextSlide()}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Certificates;
