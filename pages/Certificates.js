import React, { useState, useEffect } from "react";
import Image from "next/image"; // This is the Next.js Image component

const images = [
  "/assets/coursera_1.png",
  "/assets/coursera_2.png",
  "/assets/coursera_3.png",
  "/assets/coursera_4.png",
];

const Certificates = function () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new window.Image(); // Use the native Image constructor (ensure it's `window.Image`)
    img.src = images[currentIndex]; // Preload the image
    img.onload = () => setLoading(false); // Set loading to false when the image is loaded
  }, [currentIndex]);

  const goToNextSlide = () => {
    setLoading(true); // Start loading when switching images
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setLoading(true); // Start loading when switching images
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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
        {loading ? (
          <div className="flex justify-center items-center w-full h-[500px]">
            <svg
              className="animate-spin h-8 w-8 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0116 0"
              />
            </svg>
          </div>
        ) : (
          <Image
            style={{ width: "1000px", height: "500px", objectFit: "contain" }}
            src={images[currentIndex]}
            alt="Carousel Slide"
            className="w-full rounded-lg object-cover"
            width={1000} // Set width for the Image component
            height={500} // Set height for the Image component
          />
        )}
      </div>

      <div className="mt-4 flex justify-center">
        <button
          className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          onClick={goToPrevSlide}
        >
          Prev
        </button>
        <div className="px-5"></div>
        <button
          className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Certificates;
