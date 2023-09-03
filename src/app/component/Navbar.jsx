"use client";

import { useState } from "react";

const Navbar = () => {
  let [toggle, setToggle] = useState(false);

  const themeToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="container">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-4xl font-black"> LandInfoX </h1>

        <div
          className="relative h-6 w-12 rounded-full bg-[#ccc]"
          onClick={() => themeToggle()}
        >
          <div
            className={`absolute left-1 top-[50%] h-4 w-4 translate-y-[-50%] rounded-full bg-[#fff] transition duration-500 ${
              toggle ? "translate-x-[23px]" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
