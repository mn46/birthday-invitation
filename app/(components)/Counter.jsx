"use client";

import React, { useEffect, useState } from "react";

const Counter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const birthdayDate = new Date("12.13.2024");

  const today = new Date();

  const [difference, setDifference] = useState(birthdayDate - today);

  useEffect(() => {
    const interval = setInterval(
      () => setDifference((prev) => prev - 1000),
      1000
    );
    return () => clearInterval(interval);
  }, [difference]);

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  const getNumbers = () => {
    days = Math.floor(difference / 86400000);

    hours = Math.floor((difference % 86400000) / 3600000);

    minutes = Math.floor(((difference % 86400000) % 3600000) / 60000);

    seconds = Math.floor((((difference % 86400000) % 3600000) % 60000) / 1000);
  };

  const renderZero = (value) => {
    if (value < 10) return 0;
  };

  getNumbers();

  return (
    isClient && (
      <div className="font-purple-purse text-[11vw] md:text-[7vw] text-center">
        {renderZero(days)}
        {days}:{renderZero(hours)}
        {hours}:{renderZero(minutes)}
        {minutes}:{renderZero(seconds)}
        {seconds}
      </div>
    )
  );
};

export default Counter;
