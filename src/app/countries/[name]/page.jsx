"use client";

import Navbar from "@/app/component/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Single = ({ params }) => {
  let [countryData, setCountryData] = useState();
  let [loading, setLoading] = useState(true);

  let fetchSingleCountry = async () => {
    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/name/${params.name}`
      );
      let data = await response.json();
      setCountryData(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchSingleCountry();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-8 md:mt-24 lg:mt-36">
        {loading ? (
          <h2 className="text-4xl font-bold"> Loading ... </h2>
        ) : (
          <div className="mt-4">
            <button className="mb-10 bg-[#ccc] px-2 py-1">
              <Link href="/" className="text-black">
                Go back
              </Link>
            </button>

            <>
              {countryData.map((data, dataIdx) => {
                let {
                  name,
                  population,
                  region,
                  subregion,
                  languages,
                  landlocked,
                  independent,
                  flags,
                  continents,
                  capital,
                  timezones,
                } = data;

                const languageValues = Object.values(languages);
                const languageString = languageValues.join(", ");

                return (
                  <div
                    key={dataIdx}
                    className="mb-12 md:flex md:gap-6 2xl:gap-10"
                  >
                    <div className="relative mb-6 h-56 w-full sm:h-80 md:w-1/2 lg:w-[40%] 2xl:w-[30%]">
                      <Image
                        src={flags?.png}
                        alt={name?.common}
                        fill={true}
                        priority={true}
                        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw"
                        className="object-cover sm:object-fill"
                      />
                    </div>

                    <div className="md:w-1/2 lg:w-[60%] 2xl:w-[50%]">
                      <h2 className="mb-6 text-2xl font-bold">
                        {name?.common}
                      </h2>

                      <div className="space-y-2 md:flex md:flex-wrap md:items-center md:gap-4 md:space-y-0 lg:gap-x-0 lg:gap-y-4">
                        <div className="text-lg lg:w-[50%]">
                          <span className="font-medium"> Population : </span>
                          {population}
                        </div>

                        <div className="text-lg lg:w-[50%]">
                          <span className="font-medium"> Region : </span>
                          {region}
                        </div>

                        <div className="text-lg lg:w-[50%]">
                          <span className="font-medium"> Sub region : </span>
                          {subregion}
                        </div>

                        <div className="text-lg lg:w-[50%]">
                          <span className="font-medium"> Languages : </span>
                          {languageString}
                        </div>

                        <div className="text-lg lg:w-[50%]">
                          <span className="font-medium"> Landlocked : </span>
                          {landlocked ? "true" : "false"}
                        </div>

                        <div className="text-lg lg:w-[50%]">
                          <span className="font-medium"> Independent : </span>
                          {independent ? "true" : "false"}
                        </div>

                        <div className="text-lg lg:w-[50%]">
                          <span className="font-medium"> Continent : </span>
                          {continents}
                        </div>

                        <div className="text-lg lg:w-[50%]">
                          <span className="font-medium"> Capital : </span>
                          {capital}
                        </div>

                        <div className="text-lg lg:w-[50%]">
                          <span className="font-medium"> Timezone : </span>
                          {timezones[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          </div>
        )}
      </div>
    </>
  );
};

export default Single;
