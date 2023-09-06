"use client";

import { CustomContext } from "../context/Context";

const Switch = () => {
  let { setFetchAll, setLoading, InitialFetch } = CustomContext();

  let chooseRegion = async (e) => {
    setLoading(true);

    if (e.target.value === "all") {
      InitialFetch();
      return;
    }

    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/region/${e.target.value}`,
        { cache: "no-store" }
      );
      let data = await response.json();
      setFetchAll(data);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.error(e);
    }
  };

  return (
    <select
      className="cursor-pointer bg-[#1C49BB] p-3 pr-6 text-white md:h-10 md:pb-0 md:pt-0"
      onChange={(e) => chooseRegion(e)}
    >
      <option value="all">Filter by Regin</option>
      <option value="africa"> Africa </option>
      <option value="asia"> Asia </option>
      <option value="europe"> Europe </option>
      <option value="america"> America </option>
      <option value="oceania"> Oceania </option>
    </select>
  );
};

export default Switch;
