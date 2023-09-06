"use client";

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
    <div>
      {loading ? (
        <h2> Loading ... </h2>
      ) : (
        <div>
          {countryData.map((data) => {
            console.log(data);
          })}
        </div>
      )}
    </div>
  );
};

export default Single;
