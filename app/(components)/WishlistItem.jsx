"use client";

import { supabase } from "@/utils/supabase";
import { useState } from "react";

const WishlistItem = ({ id, giftName, reserved, img }) => {
  const [isError, setIsError] = useState(false);
  const handleClickReserve = async () => {
    const { error } = await supabase
      .from("wishlist")
      .update({ reserved: true })
      .eq("id", id);

    if (error) setIsError(true);
    else window.location.reload();
  };

  return (
    <div
      className={`flex flex-col items-center gap-5 min-w-max pb-5 rounded-xl border-2 ${
        reserved ? "border-inactive" : "border-primary"
      }`}
    >
      <img
        src={img}
        alt={giftName}
        className={`rounded-t-xl ${reserved && "opacity-55"}`}
      />
      <h4 className="text-xl font-instrument-sans">{giftName}</h4>
      <button
        className={`font-instrument-sans font-semibold rounded-full px-6 py-2 text-white ${
          reserved ? "bg-inactive" : "bg-primary"
        }`}
        onClick={handleClickReserve}
      >
        {reserved ? "reserved" : "reserve"}
      </button>
    </div>
  );
};

export default WishlistItem;
