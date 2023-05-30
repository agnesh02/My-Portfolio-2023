import React, { useState } from "react";
import AppContext from "./AppContext";

export const pages = {
  home: "home",
  certificates: "certificates",
  projects: "projects",
};

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(pages.home);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        isLargeScreen,
        setIsLargeScreen,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
