"use client";

import Image from "next/image";
import { CustomContext } from "../context/Context";
import Loading from "./Loading";

const DisplayUi = () => {
  let { fetchAll, loading } = CustomContext();

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className="mb-6 mt-16 space-y-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 2xl:grid-cols-4">
          {fetchAll.map((data, dataIdx) => {
            let { name, flags, population, region, capital } = data;

            return (
              <div key={dataIdx}>
                <div className="relative mb-4 h-56 w-full">
                  <Image
                    src={flags.png}
                    alt={flags.official}
                    fill="true"
                    className={
                      name.official === "Federal Democratic Republic of Nepal"
                        ? "object-contain"
                        : "object-cover"
                    }
                  />
                </div>
                <h2 className="mb-2 text-2xl font-bold"> {name.official} </h2>

                <div className="mb-1 text-lg">
                  <span className="font-medium"> Capital : </span>
                  {capital}
                </div>

                <div className="mb-1 text-lg">
                  <span className="font-medium"> Population : </span>
                  {population}
                </div>

                <div className="text-lg">
                  <span className="font-medium"> Region : </span>
                  {region}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayUi;
