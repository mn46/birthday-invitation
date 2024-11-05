"use client";

import { useState } from "react";
import close from "../close.svg";
import Image from "next/image";

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
        className={`flex flex-col md:flex-row gap-10 md:justify-end md:mx-10 mb-6 py-4 md:py-0 px-4 md:px-0 text-text font-instrument-sans ${
          isOpen
            ? "fixed md:static top-0 left-0 w-screen h-screen md:h-full md:w-full bg-primary md:bg-transparent items-center md:items-start"
            : "hidden md:flex"
        }`}
      >
        {isOpen && (
          <li className="block md:hidden self-end p-10">
            <button onClick={() => setIsOpen(false)}>
              <Image src={close} alt="close icon" width={30} height={30} />
            </button>
          </li>
        )}
        <li className="nav-link">
          <a href="#details" onClick={() => setIsOpen(false)}>
            details
          </a>
        </li>
        <li className="nav-link">
          <a href="#plan" onClick={() => setIsOpen(false)}>
            plan
          </a>
        </li>
        <li className="nav-link">
          <a href="#contact" onClick={() => setIsOpen(false)}>
            contact
          </a>
        </li>
        <li className="nav-link">
          <a href="#wishlist" onClick={() => setIsOpen(false)}>
            wishlist
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
