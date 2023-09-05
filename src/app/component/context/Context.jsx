"use client";

import { createContext, useContext } from "react";

const GlobalContext = createContext();

const Context = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

const CustomContext = () => {
  return useContext(GlobalContext);
};

export default Context;
export { CustomContext };
