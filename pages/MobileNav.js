import React, { useState, useEffect, useRef, useContext } from "react";
import AppContext from "../state/AppContext";
import { pages } from "../state/AppProvider";

const MobileNav = () => {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleNav = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const itemStyle =
    "text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-poppins_light";

  return (
    <div>
      <button
        className="fixed top-2.5 left-6 z-10 rounded-lg bg-gray-800 p-2 text-white"
        onClick={toggleNav}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 h-screen w-64 bg-gray-800 py-6 px-4 text-white"
        >
          <div className="mt-14 text-left">
            <ul>
              <li
                style={
                  currentPage == pages.home
                    ? { backgroundColor: "rgb(75 85 99)" }
                    : { backgroundColor: "rgb(31 41 55)" }
                }
                className={itemStyle}
                onClick={() => {
                  setCurrentPage(pages.home);
                  setIsOpen(false);
                }}
              >
                Home
              </li>
              <li
                style={
                  currentPage == pages.certificates
                    ? { backgroundColor: "rgb(75 85 99)" }
                    : { backgroundColor: "rgb(31 41 55)" }
                }
                className={itemStyle}
                onClick={() => {
                  setCurrentPage(pages.certificates);
                  setIsOpen(false);
                }}
              >
                Certificates
              </li>
              <li
                style={
                  currentPage == pages.projects
                    ? { backgroundColor: "rgb(75 85 99)" }
                    : { backgroundColor: "rgb(31 41 55)" }
                }
                className={itemStyle}
                onClick={() => {
                  setCurrentPage(pages.projects);
                  setIsOpen(false);
                }}
              >
                Projects
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
