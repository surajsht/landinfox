"use client";

import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const Context = ({ children }) => {
  let [fetchAll, setFetchAll] = useState();
  let [loading, setLoading] = useState(true);

  let InitialFetch = async () => {
    try {
      let data = await fetch("https://restcountries.com/v3.1/all");
      let response = await data.json();
      setFetchAll(response);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.error(e);
    }
  };

  useEffect(() => {
    InitialFetch();
  }, []);

  const contextValue = {
    fetchAll,
    setFetchAll,
    setLoading,
    loading,
    InitialFetch,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

const CustomContext = () => {
  return useContext(GlobalContext);
};

export default Context;
export { CustomContext };
