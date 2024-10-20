"use client";

import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-5 pr-5 flex flex-col items-end">
      <button
        className="md:hidden flex flex-col items-end"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="border-2 border-text w-10 mb-1 rounded-full"></div>
        <div className="border-2 border-text w-10 mb-1 rounded-full"></div>
        <div className="border-2 border-text w-10 mb-1 rounded-full"></div>
      </button>
      <ul
        className={`flex flex-col md:flex-row gap-10 justify-end md:mx-10 mb-6 py-4 md:py-0 px-4 md:px-0 text-text font-instrument-sans ${
          isOpen
            ? "absolute top-12 bg-primary md:bg-transparent rounded-xl"
            : "hidden md:flex"
        }`}
      >
        <li className="nav-link">
          <a href="#details">details</a>
        </li>
        <li className="nav-link">
          <a href="#plan">plan</a>
        </li>
        <li className="nav-link">
          <a href="#contact">contact</a>
        </li>
        <li className="nav-link">
          <a href="#wishlist">wishlist</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
