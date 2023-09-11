"use client";

import Image from "next/image";
import { CustomContext } from "../context/Context";
import { useEffect, useState } from "react";

const Search = () => {
  let [value, setValue] = useState("");

  let { setLoading, setFetchAll, InitialFetch } = CustomContext();

  let searchCountry = (e) => {
    setValue(e.target.value);
  };

  let searchCountryData = async () => {
    setLoading(true);

    if (!value) {
      InitialFetch();
      setLoading(false);
      return;
    }

    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/name/${value}`
      );

      if (!response.ok) {
        throw new Error(`Network response was not OK (${response.status})`);
      }

      let data = await response.json();
      setFetchAll(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      searchCountryData();
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <form
      action=""
      className="relative mb-4 flex items-center gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        className="h-10 w-full border-[1px] border-black p-3 pl-12 md:w-80"
        value={value}
        onChange={(e) => searchCountry(e)}
      />
      <Image
        src="/search.svg"
        alt="search-icon"
        className="absolute left-3 top-2"
        height={24}
        width={24}
      />
    </form>
  );
};

export default Search;
